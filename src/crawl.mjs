import fetch from 'node-fetch';

import {JSDOM}  from "jsdom"


    const crawlPage = async (baseURL, currentURL, pages)=>{
        
        const baseURLObj = new URL(baseURL) 
        const currentURLObj = new URL(currentURL)
        
        if(baseURLObj.hostname!==currentURLObj.hostname)
        {
            return pages;
        }
        
        // checking if the url is already visited or not
        const normalizedCurrentURL = normalizeURL(currentURL)
        
        if(pages[normalizedCurrentURL] > 0)
        {
            pages[normalizedCurrentURL]++
            return pages
        }
        
        pages[normalizedCurrentURL] = 1;
        
        console.log(`currently crawling this baby: ${currentURL}`)

        try{
        const res = await fetch(currentURL)
        // console.log(await res.text())

      



        if(res.status>399)
        {
            console.log(`error in fetch with status code: ${res.status} on page: ${currentURL} `)
            return 
        }

        const contentType = res.headers.get("content-type")
        
            if(!contentType.includes("text/html"))
            {
                console.log(`non-html response, contentType: ${contentType}, on page: ${currentURL} `)
                return pages
            }
        
            const htmlBody = await res.text()

            // console.log(htmlBody)

            const nxtURLs = getURLsFromHtml(htmlBody, baseURL)

            // console.log(nxtURLs)


            // recursive crawling
            for(const nxtURL of nxtURLs)
            {   
                console.log("->", nxtURL)
                if(nxtURL!==undefined ||
                     nxtURL !== null)
                {
                    pages = await crawlPage(baseURL, nxtURL, pages)
                console.log(pages)
                }
                else{
                    console.log(nxtURL)
                }
                    
            }

        }catch(e)
        {
            console.log(`========>error occured: ${e.message}, on page: ${currentURL}`)
        }

        return pages
    }


// getting urls from a html function
// using jsdom package for getting the html tree structure, and gives us a way in node to access the DOM APIs

const getURLsFromHtml=(htmlBody, baseURL)=>
{       
    // will return an array of strings
    const urls = []
    const dom = new JSDOM(htmlBody)
    const linkElems = dom.window.document.querySelectorAll('a')
    

    for(const linkElem of linkElems)
    {   
        if(linkElem.href.slice(0,1)==='/')
        {
            try{
                const urlObj = new URL(`${baseURL}${linkElem.href}`)
                // relative
                    urls.push(urlObj.href)
            }catch(e)
            {
                console.log(e.message)
            }
        }
        else
        {
        // absolute
        try{
            const urlObj = new URL(linkElem.href)
            // relative
                urls.push(urlObj.href)
        }catch(e)
        {
            console.log(e.message)
        }
            
        }
    }
    return urls
}



// normalizing the url: function for checking what's actually going in and out

const normalizeURL = (urlString)=>{
//  using the built-in URL constructor to extract the hostname and pathname from the urlString and just return it 

        const urlObj = new URL(urlString)
        const hostPath =  `${urlObj.hostname}${urlObj.pathname}`

        if(hostPath.length>0 && hostPath.slice(-1)==='/')
        {
            return hostPath.slice(0,-1)
        }

        return hostPath

}

export {normalizeURL, getURLsFromHtml, crawlPage}
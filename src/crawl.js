const {JSDOM} = require ('jsdom')


// getting urls froma html function
// using jsdom package for getting the html tree structure, and gives us a way in node to access the DOM APIs

const getURLsFromHtml=(htmlBody, baseURL)=>
{   
    // will return an array of strings
    const urls = []
    const dom = new JSDOM(htmlBody)
    const linkElems = dom.window.document.querySelectorAll('a')


    for(const linkElem of linkElems)
    {   
        // relative
        if(linkElem.href.slice(0,1)==='/')
            urls.push(`${baseURL}${linkElem.href}`)
        else
        // absolute
            urls.push(linkElem.href)
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

module.exports = {normalizeURL, getURLsFromHtml}
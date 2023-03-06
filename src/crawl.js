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

module.exports = {normalizeURL}
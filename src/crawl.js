// normalizing the url: function for checking what's actually going in and out



const normalizeURL = (urlString)=>{
//  using the built-in URL constructor to extract the hostname and pathname from the urlString and just return it 

        const urlObj = new URL(urlString)
        return `${urlObj.hostname}${urlObj.pathname}`

}

module.exports = {normalizeURL}
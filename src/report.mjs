
const printSEOReport = (pages)=>{
    console.log("\n*********SEO REPORT**********\n")
    const sortedPages = sortPages(pages)

    for(const sortedPage of sortedPages)
    {
        const url = sortedPage[0]
        const hits = sortedPage[1]

        console.log(`Total ${hits} links found to page: ${url}\n `)

    }

    console.log("\n*********END OF SEO REPORT**********\n")

}

const sortPages = (pages)=>{

    const pagesArr = Object.entries(pages)
    pagesArr.sort((a,b)=>{
        // const aHits = a[1]
        // const bHits = b[1]
        return b[1] - a[1]
    })

    return pagesArr
}

export {sortPages, printSEOReport}
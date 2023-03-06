const {normalizeURL, getURLsFromHtml} = require("../src/crawl")

const {test, expect} = require("@jest/globals")

// ====>test suite: 1
// test suite stripping the protocol

test('normlizeURL strip protocol', ()=>{
    // let's specify the input fo rthe normalizeURL
    const input = 'https://blog.boot.dev/path'

    const actualOutput = normalizeURL(input)
    const expectedOutput = 'blog.boot.dev/path'


    // checking if the actual and expected are same or not
    expect(actualOutput).toEqual(expectedOutput)

})


// ====>test suite: 2

// test suite for tackling the trailing slashes

// just going to trim the trailing slashes

test('normalizeURL strip trailing slashes', ()=>{
    const input = 'https://blog.boot.dev/path/'
    const actualOutput = normalizeURL(input)
    const expectedOutput = 'blog.boot.dev/path'

    expect(actualOutput).toEqual(expectedOutput)
})


// ====>test suite: 3
// test suite for handling the capitals, dont't really need to do anything URL constructor will take care of it as it is case insensitive


test('normalizeURL capital handling', ()=>{
    const input = 'https://BLOG.boot.dev/path'
    const actualOutput = normalizeURL(input)
    const expectedOutput = 'blog.boot.dev/path'

    expect(actualOutput).toEqual(expectedOutput)
})

 
test('normalizeURL strip http', ()=>{
    const input = 'http://blog.boot.dev/path'
    const actualOutput = normalizeURL(input)
    const expectedOutput = 'blog.boot.dev/path'

    expect(actualOutput).toEqual(expectedOutput)
})


// ====>test suite: 4
// for absolute URLs: href ones

test('getURLsFromHtml', ()=>{
    const inputHTMLBody = `
    <html>
        <body>
            <a href="https://blog.boot.dev">
            Practice
            </a>
        </body>
    </html>
    `

    const inputBaseURL = "https://blog.boot.dev"
    const actualOutput = getURLsFromHtml(inputHTMLBody, inputBaseURL)
    const expectedOutput = ["https://blog.boot.dev/"]
    
    expect(actualOutput).toEqual(expectedOutput)
})


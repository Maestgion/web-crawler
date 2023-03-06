const {normalizeURL} = require("../src/crawl")

const {test, expect} = require("@jest/globals")

// test suite stripping the protocol

test('normlizeURL strip protocol', ()=>{
    // let's specify the input fo rthe normalizeURL
    const input = 'https://blog.boot.dev/path'

    const actualOutput = normalizeURL(input)
    const expectedOutput = 'blog.boot.dev/path'


    // checking if the actual and expected are same or not
    expect(actualOutput).toEqual(expectedOutput)

})


// test suite for tackling the trailing slashes

// just going to trim the trailing slashes

test('normalizeURL strip trailing slashes', ()=>{
    const input = 'https://blog.boot.dev/path/'
    const actualOutput = normalizeURL(input)
    const expectedOutput = 'blog.boot.dev/path'

    expect(actualOutput).toEqual(expectedOutput)
})

// test suite for handling the capitals, dont't really need to do anything URL constructor will take care of it as it is case insensitive

test('normalizeURL capital handling', ()=>{
    const input = 'https://BLOG.boot.dev/path'
    const actualOutput = normalizeURL(input)
    const expectedOutput = 'blog.boot.dev/path'

    expect(actualOutput).toEqual(expectedOutput)
})


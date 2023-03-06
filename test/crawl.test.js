const {normalizeURL} = require("../src/crawl")

const {test, expect} = require("@jest/globals")

// test suite stripping the protocol

test('normalizeURL strip the protocol', ()=>{
    // let's specify the input fo rthe normalizeURL
    const input = 'https://blog.boot.dev/path'

    const actualOutput = normalizeURL(input)
    const expectedOutput = 'blog.boot.dev/path'


    // checking if the actual and expected are same or not
    expect(actualOutput).toEqual(expectedOutput)

})
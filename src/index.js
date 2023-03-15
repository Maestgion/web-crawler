import { crawlPage } from "./crawl.mjs";

// global level object and argv as to grab the command line

process.argv;

const main = () => {
  if (process.argv.length < 3) {
    console.log("no website to serve");
    process.exit(1);

    // length is taken as 3: first arg is interpreter->C:\Program Files\nodejs\node.exe, second argument is the name of the entry point file -> C:\Users\ASUS\OneDrive\Desktop\Documents\W\Web Dev Projects\Learn\HTTP\web-crawler\web-crawler\src\index.js, third barg is actual site link we provided-> blx.dev

    // for(const arg of process.argv)
    // {
    //     console.log(arg)
    // }
  } else if (process.argv.length > 3) {
    console.log("invalid entry: too many command line args");
  } else {
    const baseURL = process.argv[2];

    console.log(`let's start crawling: ${baseURL}`);

    crawlPage(baseURL, baseURL, {});
  }
};

main();

// the function takes as input a website and crawls that

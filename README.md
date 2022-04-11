### <div align="center">

# crawler CLI

A brief description of what this project does and who it's for

Web Crawler Exercise
The goal of this exercise is to build a web crawler CLI. Please write the application in your preferred coding language.

Assuming the CLI is a node.js application, the usage should be:
node crawler.js <url: string> <depth: number>

Description:

Given a URL, the crawler will scan the webpage for any images, continue to every link inside that page and scan it as well.

The crawling should stop once <depth> is reached.

depth=3 means we can go as deep as 3 pages from the source URL (denoted by the <url> param), and depth=0 is just the first page.

Results should be saved into a results.json file in the following format:

{

    results: [
    	{
    		imageUrl: string,
    		sourceUrl: string // the page url this image was found on
    		depth: number // the depth of the source at which this image was found on
    	}
    ]

}

Web crawler introduction can be found here: https://en.wikipedia.org/wiki/Web_crawler</div>

<br/>

## Run exsmple

1. npm i
2. node Crawler.js https://vanilla.csb.app/ 2

## Skill Set

### Technology

<div align="center">  
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" />  
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" />  
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" />  
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="50" />  
</div>

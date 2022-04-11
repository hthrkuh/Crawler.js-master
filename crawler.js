const puppeteer = require("puppeteer");
const fs = require("fs/promises");

const results = []
async function getdata() {
  try {
    const browser = await puppeteer.launch({
      devtools: true,
      headless: true,
      // headless: false,
      args: [
        '--no-sandbox',
        '--disable-dev-shm-usage',
      ],
    });
    const page = await browser.newPage();
    // Expose a function
    page.exposeFunction("nothing", () => null);
    await page.goto(url);

    console.log(url, depth);

    await page.waitForSelector(`a`);
    await godeeper(page)

    await fs.writeFile("results.json", JSON.stringify({ results: results }));
    await browser.close();
  } catch (error) {
    console.log(error);
  }
}

let pagesToVisit
const godeeper = async (page, level = 0) => {
  try {

    let links = []
    for (level; level <= depth; level++) {

      if (level === 0) {
        const deepLinks = await GetdeepLinksAndsaveImgs(page, level)
        links = [...deepLinks.links]
      }

      pagesToVisit = []
      for (let index = 0; index < links.length; index++) {

        const link = links[index];
        await page.goto(link);
        await page.waitForSelector(`a`);

        const deepLinks = await GetdeepLinksAndsaveImgs(page, level)
        const newDeepLinks = deepLinks.links
        pagesToVisit = [...pagesToVisit, ...newDeepLinks]

        console.log(level, index, link, pagesToVisit.length, links.length)

      }
      links = [...pagesToVisit] //next level
    }
  } catch (error) {
    console.log(error);
  }

}

const GetdeepLinksAndsaveImgs = async (page, depth) => {
  try {
    const deepLinks = await page.evaluate(
      (depth) => {
        const links = Array.from(
          document.querySelectorAll("a")
        ).map((x) => x.href);


        const imgs = Array.from(
          document.querySelectorAll("img")
        ).map((img) => ({

          imageUrl: img.src,
          sourceUrl: window.location.href, // the page url this image was found on
          depth // the depth of the source at which this image was found on

        }));

        return { links, imgs, id: new Date().getTime() }
      },
      depth
    )
    results.push(...deepLinks.imgs)//save imgs
    return deepLinks
  } catch (error) {
    console.log(error);
  }

}
const url = process.argv[2];
if (!url) {
  throw "Please provide a URL as the first argument";
}
const depth = process.argv[3];
if (!depth) {
  throw "Please provide a Depth as the second argument";
}
getdata();

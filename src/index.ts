import http from "http";
import puppeteer from "puppeteer";

const crawler = async () => {
  try {
    const result: Object = {error: null};
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto("http://www.cgv.co.kr/movies/?lt=1&ft=0");
    await page.click(".btn-more-fontbold");
    await page.close();
    browser.close();
    return result;
  }
  catch(e) {
    console.log(e);
    return {error: e};
  }
}

const server = http.createServer(async function(request, response) {
  try {
    const body: Object = await crawler();
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end(JSON.stringify(body));
    console.log("you made a response!");
  }
  catch(e) {
    console.log(e);
  }
});

server.listen(8888, function() {
	console.log("Server is running...");
});

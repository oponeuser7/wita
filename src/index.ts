import http from "http";
import puppeteer from "puppeteer";

const crawler = async () => {
  try {
    const result = {};
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("http://www.cgv.co.kr/movies/?lt=1&ft=0");
    page.close();
    browser.close();
    return result;
  }
  catch(e) {
    return e;
  }
}

const add = (x: number, y: number) => {
  return x+y;
}

const server = http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type':'text/html'});
	response.end("Hello world!");
  console.log(add(2,3));
});

server.listen(8888, function() {
	console.log("Server is running...");
});

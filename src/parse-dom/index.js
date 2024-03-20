// const cheerio = require('cheerio');
import { get_dom } from '../get-dom/index.js';
import * as cheerio from 'cheerio';

function getDomInfo(url, selector) {
  return new Promise(async (resolve) => {

    let result = await get_dom(url)

    let $ = cheerio.load(result);
    let resultList = []

    $('a').each(function () {
      resultList.push($(this).text() || $(this).val())
    })

    resolve(resultList)

  })

}


export {
  getDomInfo
}

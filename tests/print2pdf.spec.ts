import {
  test, expect
} from '@playwright/test';

// import chalk from 'chalk';

// 1. create html build/serve

test('measure', async ({
  page
}) => {

  // function generateToc(contentHtml: string, maxLevel = 4) {
  //   const headers: Array<{
  //     header: string;
  //     level: number;
  //     id: string;
  //   }> = [];

  //   console.log(chalk.cyan('Start generating TOC...'));
  //   // Create TOC only for h1~h${maxLevel}
  //   // Regex to match all header tags
  //   const re = new RegExp(
  //     '<h[1-' + maxLevel + '](.+?)</h[1-' + maxLevel + ']( )*>',
  //     'g',
  //   );
  //   const modifiedContentHTML = contentHtml.replace(re, htmlReplacer);

  //   function htmlReplacer(matchedStr: string) {
  //     // Generate header information and update the headers array
  //     const { headerText, headerId, level } = generateHeader(headers, matchedStr);
  //     headers.push({ header: headerText, level, id: headerId });

  //     // Replace the header ID in the matched string and return the modified string
  //     return replaceHeader(matchedStr, headerId, maxLevel);
  //   }

  //   const tocHTML = generateTocHtml(headers);

  //   return { modifiedContentHTML, tocHTML };
  // }

  // function generateTocHtml(headers: any[]) {
  //   // Map the headers array to create a list item for each header with the appropriate indentation
  //   const toc = headers
  //     .map(
  //       (header) =>
  //         `<li class="toc-item toc-item-${header.level}" style="margin-left:${(header.level - 1) * 20
  //         }px"><a href="#${header.id}">${header.header}</a></li>`,
  //     )
  //     .join('\n');
  //   // Return the HTML code for the table of contents
  //   return `
  // <div class="toc-page" style="page-break-after: always;">
  //   <h1 class="toc-header">Table of contents:</h1>
  //   ${toc}
  // </div>
  // `;
  // }

  // function generateHeader(headers: any[], matchedStr: string) {
  //   // Remove anchor tags inserted by Docusaurus for direct links to the header
  //   const headerText = matchedStr
  //     .replace(/<a[^>]*>#<\/a( )*>/g, '')
  //     .replace(/<[^>]*>/g, '')
  //     .trim();

  //   // Generate a random header ID using a combination of random characters and the headers array length
  //   const headerId = `${Math.random().toString(36).slice(2, 5)}-${headers.length
  //     }`;

  //   // Extract the level from the matched string (e.g., h1, h2, etc.)
  //   const level = Number(matchedStr[matchedStr.indexOf('h') + 1]);

  //   return { headerText, headerId, level };
  // }

  // function replaceHeader(
  //   matchedStr: string,
  //   headerId: string,
  //   maxLevel = 3,
  // ) {
  //   // Create a regular expression to match the header tags
  //   const re = new RegExp('<h[1-' + maxLevel + '].*?>', 'g');
  //   // Replaces the ID attribute of the headers using regular expressions and the headerId parameter
  //   const modifiedContentHTML = matchedStr.replace(re, (header) => {
  //     if (header.match(/id( )*=( )*"/g)) {
  //       // If the header already has an ID attribute, replace its value with the headerId parameter
  //       return header.replace(/id\s*=\s*"([^"]*)"/g, `id="${headerId}"`);
  //     } else {
  //       // If the header doesn't have an ID attribute, add the headerId parameter as a new ID attribute
  //       return header.substring(0, header.length - 1) + ` id="${headerId}">`;
  //     }
  //   });
  //   // Return the modified string with replaced header IDs
  //   return modifiedContentHTML;
  // }

  // const { modifiedContentHTML, tocHTML } = generateToc(contentHTML);

  // fetch html and add toc
  // fetch('../build/docs/pdf/index.html').then(function (response) {
  //   return response.text();
  // }).then(function (html) {
  //   generateToc(html, 4);
  //   // insertAdjacentHTML()
  // }).catch(function (err) {
  //   console.warn('No html found', err);
  // });

  // generateToc('../build/docs/pdf/index.html', 3)

  await page.goto('http://localhost:3001/docs/pdf/');

  function timeout(ms: any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  await page.evaluate(() => {
    const selector = document.querySelectorAll('h2');
    selector.forEach(element => {
      element.style.display = 'contents';
    });
  });

  // Unfold all collapsable items
  const collapsableItems = await page.$$('details');
  for (let index = 0; index < collapsableItems.length; index++) {
    await collapsableItems[index].click();
  }

  await page.evaluate(() => {
    const selector = document.querySelectorAll('img');
    selector.forEach(element => {
      element.loading = 'eager';
    });
  });

  // ToDo: Filter by classname to ensure getting the code-blocks only
  await page.evaluate(() => {
    const selector = document.querySelectorAll('table, code, pre');
    selector.forEach(element => {
      element.style.display = 'contents';
    });
  });

  await page.waitForLoadState('networkidle');

  await timeout(1000);

  await page.pdf({
    path: '/tmp/test/myPDF.pdf',
    printBackground: true,
    margin: {
      left: 50,
      right: 50,
      top: 50,
      bottom: 50
    }
  });

});

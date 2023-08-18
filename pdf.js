const docusaurus = require('@docusaurus/core/lib');
const docToPdf = require('docs-to-pdf/lib/utils');

const run  = async () => {
  try {
    await docusaurus.start();

    // TODO Make configurable
    process.env.PUPPETEER_EXECUTABLE_PATH = '/usr/bin/brave-browser';

    await docToPdf.generatePDF({
      initialDocURLs: [
        'http://localhost:3000/docs/overview'
      ],
      contentSelector: 'article',
      paginationSelector: 'a.pagination-nav__link.pagination-nav__link--next',
      excludeSelectors: [
        '.margin-vert--xl a',
        '[class^="tocCollapsible"]',
        '.breadcrumbs',
        '.theme-edit-this-page'
      ],
      coverImage: 'http://localhost:3000/img/shogun_logo.png',
      coverTitle: 'SHOGun Documentation',
      footerTemplate: '<span style="font-size: 10px"> <span class="pageNumber"></span>/<span class="totalPages"></span></span>',
      margin: {
        left: 50,
        right: 50,
        top: 50,
        bottom: 50
      }
    });

    process.exit(0);
  } catch (error) {
    process.exit(1);
  }
}

run();

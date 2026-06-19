# Integration into SHOGun Projects

### nginx
Set the nginx location to `/shogun-gis-docs/` or `/shogun-admin-docs/` respectively.


# ToDo's
- Embed Videos again (need to be recorded first)

Web-GIS-Client
- More detailed GIS-Client documentation with focus on the tools

Admin-Client
- No documentation for User, Groups, Images
- No documentation for Status / Configuration
- Subjects -> no documentation for the features configuration

```js
function getHtmlFromSelector(selector) {
    const element = document.querySelector(selector);
    if (element) {
        // Add pageBreak for PDF
        element.style.pageBreakAfter = 'always';
        // Open <details> tag
        const detailsArray = element.querySelectorAll('details');
        for (const el of detailsArray) {
          el.querySelector('summary').click();

          const div = el.querySelector('div');
          div.style.display = 'block';
          div.style.height = 'auto';
          div.style.overflow = 'visible';
        }
        // Adjust tables
        const tablesArray = element.querySelectorAll('table, code, pre');
        for (const el of tablesArray) {
          el.style['word-break'] = 'break-word';
        }
        return element.outerHTML;
    }
    else {
        return '';
    }
}
```

"use strict";
exports.__esModule = true;
exports.getHtml = void 0;
var html = require('./sample.html');
function getHtml() {
    return "\n    <section class=\"freelancer\">\n      <div id=\"header\">\n        ".concat(html, "\n      </div>\n    </section>\n  ");
}
exports.getHtml = getHtml;

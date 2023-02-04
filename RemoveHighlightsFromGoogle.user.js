// ==UserScript==
// @name        RemoveHighlightsFromGoogle
// @namespace   googlemods
// @description Removes text highlights from Google searches
// @version     1
// @grant       none
// @match        https://www.google.com/*
// @downloadURL  https://github.com/BTrey/TampermonkeyScripts.git
// @updateURL    https://github.com/BTrey/TampermonkeyScripts.git
// ==/UserScript==

(function() {
    'use strict';
} );
var linkList = document.querySelectorAll ("a");
const text_hl = /:text=.+/
Array.prototype.forEach.call (linkList, function (link) {
    //if (link.href.includes(":text="))
    if (text_hl.test(link.href))
    {
        link.href = link.href.replace(text_hl, "");

    }
})();

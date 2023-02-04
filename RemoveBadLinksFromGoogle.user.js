// ==UserScript==
// @name        RemoveBadLinksFromGoogle
// @namespace   googlemods
// @description Removes hyperlinks to websites with annoying policies
// @version     1.1
// @grant       none
// @match        https://www.google.com/*
// @downloadURL  https://github.com/BTrey/TampermonkeyScripts.git
// @updateURL    https://github.com/BTrey/TampermonkeyScripts.git
// ==/UserScript==

(function() {
    'use strict';
} );
var linkList = document.querySelectorAll ("a");
Array.prototype.forEach.call (linkList, function (link) {
    if (link.hostname.includes("nytimes.com") ||
       link.hostname.includes("wired.com") ||
       link.hostname.includes("forbes.com") ||
       link.hostname.includes("wsj.com") ||
       link.hostname.includes("quora.com") ||
       link.hostname.includes("buzzfeed.com")) {
        //-- Block the link
        link.href = "javascript:void(0)";
        link.style = "text-decoration: none;background: #f3f315;";
    }
})();

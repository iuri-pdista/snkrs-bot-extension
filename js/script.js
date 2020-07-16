var injectDecision = true;
function inject(){
    chrome.tabs.executeScript({
        file: './js/bot.js'
    });
}

function stop(){
    injectDecision = false;
}

document.querySelector("#buy")?.addEventListener("click", inject); 
document.querySelector("#stop")?.addEventListener("click",stop);
chrome.tabs.executeScript({
    code: 'location.assign("https://www.nike.com.br/Carrinho")'
});
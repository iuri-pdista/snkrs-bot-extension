function inject(){
    chrome.tabs.executeScript({
        file: './js/bot.js'
    });
}

function stop(){
    chrome.tabs.executeScript({
        code: 'location.assign("https://www.nike.com.br/Carrinho")'
    });
}

document.querySelector("#buy")?.addEventListener("click", inject); 
document.querySelector("#stop")?.addEventListener("click",stop);
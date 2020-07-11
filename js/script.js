function inject(){
    chrome.tabs.executeScript({
        file: './js/bot.js'
    });
}

document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("#submitSnkrsBot")?.addEventListener("click", inject);
})

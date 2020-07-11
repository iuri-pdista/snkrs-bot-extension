document.getElementById('btn-comprar')?.click();
if(location.href === "https://www.nike.com.br/Carrinho"){ 
    location.assign("https://www.nike.com.br/Checkout");
}
if(location.href === "https://www.nike.com.br/Checkout"){
    document.getElementById("seguir-pagamento")?.addEventListener("click", event => event.preventDefault())
    document.getElementById("seguir-pagamento")?.click();
    const code = document.getElementsByClassName("ModalCorpoCentralizado ")[0]?.id.split("_")[1];
    document.getElementsByName("btn0_modalNotice_"+code)[0]?.click();
    document.getElementsByClassName("close")[1]?.click();
    const [arrow] = document.getElementsByClassName("select-cta-arrow")
    arrow?.click()
    document.getElementsByName("ccidradio")[1]?.click()
    document.getElementById("politica-trocas")?.click()
}




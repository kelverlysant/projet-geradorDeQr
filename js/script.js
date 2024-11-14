const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")
const qrInput = document.querySelector("#qr-form input")
const qrImg = document.querySelector("#qr-code img")
function generatorQr(){
    const qrInputValue = qrInput.value;
    
    if(!qrInputValue) return;

    qrCodeBtn.innerHTML = "Gerando QR Code...";

    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInputValue}`;


    qrImg.addEventListener("load", ()=>{
        container.classList.add("active");
        qrCodeBtn.innerHTML = "QR Code criado!";
    });
};
qrCodeBtn.addEventListener("click", ()=>{
    generatorQr();
});
qrInput.addEventListener("keydown", (e)=>{
    if(e.code === "Enter")
    generatorQr();
});

qrInput.addEventListener("keyup", ()=>{
    if(!qrInput.value){
        container.classList.remove("active");
        qrCodeBtn.innerHTML = "Gerar QR Code";
    }
})
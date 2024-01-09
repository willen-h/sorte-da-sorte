



function geradorDeNumero() {
    const min = Math.ceil(document.querySelector(".minima").value)
    const max = Math.floor(document.querySelector(".maxima").value)
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    
    alert(result) 
}

function encriptar(){
    let texto = document.getElementById("texto").value;
    let parrafo = document.getElementById("mensaje");
    let imagen = document.getElementById("imagen");
    let textoEncriptado = texto.replace(/i/gi, "ines")
                                .replace(/a/gi, "ai")
                                .replace(/e/gi, "enter")
                                .replace(/o/gi, "ober")
                                .replace(/u/gi, "ufat");
                                
    if(texto.length !=0){
        imagen.style.display= "none";
        texto = textoEncriptado;
        parrafo.textContent = texto;
    }else{
        imagen.style.display="none";
        parrafo.textContent = "Debes ingresar algun texto para encriptar"; 
    }
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let parrafo = document.getElementById("mensaje");
    let imagen = document.getElementById("imagen");
    let textoEncriptado = texto.replace(/ai/gi, "a")
                                .replace(/enter/gi, "e")
                                .replace(/ines/gi, "i")
                                .replace(/ober/gi, "o")
                                .replace(/ufat/gi, "u");
    if(texto.length !=0){
        imagen.style.display = "none";
        texto = textoEncriptado;
        parrafo.textContent = texto;
    }else{
        imagen.style.display= "none";
        parrafo.textContent= "Debes ingresar algun texto para desencriptar"
    }
}

function copiar(){
    let copia = document.getElementById("mensaje");
    if(copia){
        copia.select();
        document.execCommand("copy");
    }
}
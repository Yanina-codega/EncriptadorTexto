function validarTexto(texto) {
    let mayusculas = /[A-Z]/g;
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let textoVacio = "";

    if (texto.match(mayusculas) || texto.match(caracteres)) {
        alert('No se permiten mensajes con caracteres o mayúsculas');
        return true;
    } else if (texto == textoVacio) {
        alert('Ingrese un mensaje para encriptar');
        return true;
    } else {
        return false;
    }
}


function encriptar(){
    let campoTexto=document.getElementById('campo__texto').value;
    let cajaMensaje=document.getElementById('texto__espera__encriptado');

    let textoCifrado = campoTexto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if(campoTexto.length !=0 && (validarTexto(campoTexto)==false)){        
        cajaMensaje.textContent=textoCifrado;
        
    }else{
        cajaMensaje.textContent=(' ');
    }
}

//Copiar texto de la caja encriptada//

function copiarTexto(){
    let cajaMensaje=document.getElementById('texto__espera__encriptado');
    
    if(cajaMensaje.length!=0){
        navigator.clipboard.writeText(cajaMensaje.textContent);
    }
}

//Desencriptar texto//
function desencriptar(){
    let campoTexto = document.getElementById('campo__texto').value;
    let cajaMensaje=document.getElementById('texto__espera__encriptado');

    let textoCifrado = campoTexto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if(campoTexto.length != 0){        
        cajaMensaje.textContent=textoCifrado;
    }
}


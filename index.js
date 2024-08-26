function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let mensaje = document.getElementById("parrafo");
    //let lupa = document.getElementById("lupa");
    let textoEncriptado = texto
    .replace(/a/gi, "aba")
    .replace(/e/gi, "efe")
    .replace(/i/gi, "ind")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if(texto.length != 0){
        document.getElementById("texto").value = textoEncriptado;
        tituloMensaje.textContent = "Texto Encriptado con éxito";
        mensaje.textContent="";
        //lupa.remove = textoEncriptado;
    }else{
        tituloMensaje.textContent = "Ningún texto encriptado";
        mensaje.textContent = "Digite el texto a encriptar"
        alert("Debes ingresar algún texto");
    }
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let mensaje = document.getElementById("parrafo");
    //let lupa = document.getElementById("lupa");
    let textoEncriptado = texto
    .replace(/aba/gi, "a")
    .replace(/efe/gi, "e")
    .replace(/ind/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if(texto.length != 0){
        document.getElementById("texto").value = textoEncriptado;
        tituloMensaje.textContent = "Texto Encriptado con éxito";
        mensaje.textContent="";
        //lupa.remove = textoEncriptado;
    }else{
        tituloMensaje.textContent = "Ningún texto encriptado";
        mensaje.textContent = "Digite el texto a encriptar"
        alert("Debes ingresar algún texto");
    }
}
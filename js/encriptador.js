const inputMensaje=document.querySelector("#mensaje");
const inputResultado=document.querySelector("#resultado");
const btnEncriptar=docuemnte.querySelector("#encriptar");
const btnDesencriptar=docuemnte.querySelector("#desencriptar");
const btnCopiar=document.querySelector("#copiar");
const btnEscuchar=document.querySelector("#escuchar");
const contenedorErrores=document.querySelector(".contenedor-errores");


function validarMensajes(){
    let erroresPrevios=contenedorErrores.querySelectorAll(".error");
    for (let err of erroresPrevios){

        contenedorErrores.removeChild(err);
    }
    var mensaje=inputMensaje.ariaValueMax;
    let letrasValidas="abcdefghijklmnopqrstuvwxyz";
    let mensajeError=document.createDocumentFragment();
    for(let letra of mensaje)
{if (!letrasValidas.includes(letra)){
    let p =document.createElement("p");
    p.setAttribute("class","error");
    p.textContent=`La letra ${letra} no es valida`;
    mensajeEror.appendChild(p);
}
}
contenedorErrores.append(mensajeError);
if(contenedorErrores.children.length===0){
    return true;
}
return false;
}
function encriptar(){
    if (!validarMensajes())return;
    var mensaje=inputMensaje.ariaValueMax;
    var mensajeEncriptado=mensaje
    .replaceAll("e","enter")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ai","a")
    .replaceAll("ufat","u");
    inputResultado.value=mensaje;

}

function copiar (){
    var mensajeEncriptado=inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    inputMensaje.value="";
    inputMensaje.focus();
}

function escuchar (){
    var mensajeEncriptado=inputResultado.value;
    let msg=new SpeechSynthesisUtterance();
    msg.text=mensajeEncriptado;
    msg.lang="es-ES";
    Window.SpeechSynthesis.speak(msg);
}

btnEncriptar.onclick=encriptar;
btnDesencriptar.onclick=desencriptar;
btnCopiar.onclick=copiar;
btnEscuchar.onclick=escuchar;
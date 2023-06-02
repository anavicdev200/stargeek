const formulario = document.getElementById("formulario");
const msg = document.querySelector(".mensagem");
const email = document.getElementById("email");
const senha = document.getElementById("senha");


formulario.onsubmit = (evt)=>{
    let dados = JSON.parse(localStorage.getItem("bd"));
    let logado;
    dados.forEach((elemento) => {
        if(elemento.emailcliente == email.value && elemento.senhacliente == senha.value){
            msg.innerHTML = "Aguarde redirecionando..."
            sessionStorage.setItem("logado",JSON.stringify(dados));
            setTimeout(()=>{
                window.location.assign("catalogo.html");
            }, 2000);
            evt.preventDefault();
            logado = "ok";
            return true;

    

    if (logado!= "ok"){
        evt.preventDefault();
        msg.innerHTML = "usuario ou senha incorretos";
        email.focus();
        return null;
        
    } 

    if (senha.value == ""){
        evt.preventDefault();
        msg.innerHTML = "Digite sua senha";
        return null;
        senha.focus();
    }

   
}
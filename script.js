function TopLevel(info){
    const window = document.getElementById("toplevel");
    TopLevelDestroy()
    if (window.childElementCount == 0){
        if (info == "SetDown"){
            window.innerHTML = `
                <div>
                    <button id="exit">x</button>
                    <h2>SetDown</h2>
                    <img src="Assets/Img/setdown/SetDown_img.png" class="icon"/>
                    <div class="buttons">
                        <button>Ver<br>Código</button>
                        <button>Descargar Instalador</button>
                    </div>
                    <div class="texto">
                        <p class="subtitulo">Descripción:</p>
                        <p>
                            SetDown facilita al usuario apagar el pc en un intervalo de tiempo predeterminado con la facilidad de hacer dos clicks.
                            Esta aplicación esta orientada para personas que ve contenido desde el pc antes de dormir y les gustaria que se apagase en un tiempo predeterminado de forma sencilla.
                            A falta de 10 minutos para el apagado aparece un icono el la esquina izquierda superior de la pantalla para alertar al usuario, al clickar en el cancela el apagado.
                        </p>
                        <div class="imagenes">
                            <img src="Assets/Img/setdown/0_pic_0.png" class="icon"/>
                            <img src="Assets/Img/setdown/0_pic_1.png" class="icon"/>
                            <img src="Assets/Img/setdown/alert.png" class="icon"/>
                        </div>
                        <p>
                            Aplicacion de escritorio creada con Python.<br>
                            Librerias utilizadas para su creación: Tkinter, Pil, Subprocces, Notifypy, Threading y Pystray.
                        </p>
                </div>`;
        }
        if (info == "OrderDown"){
            window.innerHTML = `
            <div>
                <button id="exit">x</button>
                <h2>OrderDown</h2>
                <img src="Assets/Img/orderdown/orderdown_img.png" class="icon"/>
                <div class="buttons">
                    <button>Ver<br>Código</button>
                    <button>Descargar Instalador</button>
                </div>
                <div class="texto">
                    <p class="subtitulo">Descripción:</p>
                    <p>
                    OrderDown asiste a la gestion de la carpeta de descargas ofreciendo al usuario herramientas, como dividir los archivos
                    según su tipo, tambien ofrece crear una tarea que al iniciar windows ordena la carpeta de descargas, posicionando cualquier archivo en la carpeta adecuada.
                    </p>
                    <div class="imagenes">
                        <img src="Assets/Img/orderdown/1_pic_0.png" class="icon"/>
                        <img src="Assets/Img/orderdown/1_pic_1.png" class="icon"/>
                        <img src="Assets/Img/orderdown/1_pic_2.png" class="icon"/>
                    </div>
                    <p>
                        Aplicacion de escritorio creada con Python.<br>
                        Librerias utilizadas para su creación: Tkinter, Pil, Subprocces, Notifypy, Ctypes, Shutil, Os y Pathlib.
                    </p>
            </div>`;
        }
    }document.getElementById("exit").addEventListener('click', TopLevelDestroy);
}

function TopLevelDestroy(){
    const window = document.getElementById("toplevel")
    if (window.childElementCount == 1){
        window.removeChild(window.firstChild);
        TopLevelDestroy()
    }
}





function DarkMode(){
    var body = document.getElementById("cuerpo");
    var posts =  document.querySelectorAll(".post")
    var texto = document.getElementById("texto_simple")
    var modo = document.getElementById("modo")
    modo.style.boxShadow = '1px 1px 20px white';
    modo.style.backgroundImage = "url(Assets/Img/botones/dark.png)"
    texto.style.boxShadow = '1px 1px 20px white';
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "#1E1E1E"
    posts.forEach(post => {
        post.style.boxShadow = '1px 1px 20px white';
    });
        mode = "dark";
}

function LightMode(){
    var body = document.getElementById("cuerpo");
    var posts =  document.querySelectorAll(".post")
    var texto = document.getElementById("texto_simple")
    var modo = document.getElementById("modo")
    modo.style.boxShadow = "1px 1px 20px #a94b4b";
    modo.style.backgroundImage = "url(Assets/Img/botones/light.png)"
    texto.style.boxShadow = '1px 1px 20px #a94b4b';
    body.style.backgroundImage = "url(Assets/Img/background.jpg)";
    body.style.backgroundColor = "none"
    posts.forEach(post => {
        post.style.boxShadow = '1px 1px 20px #a94b4b';
    });
    mode = "light";
}

function ChangeMode(){
    var mode = localStorage.getItem('dark-mode');
    if ((mode == "light") || (mode == null)){
        DarkMode()
        localStorage.setItem('dark-mode', 'dark')
    }else{
        LightMode()
        localStorage.setItem('dark-mode', 'light')
    }
}

function CheckMode(){
    var mode = localStorage.getItem('dark-mode')
    if (mode == "dark"){
        DarkMode()
    }else{
        LightMode()
    }
}





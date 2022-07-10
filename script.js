function TopLevel(){
    var window= document.getElementById("toplevel");
    TopLevelDestroy()
    if (window.childElementCount == 0){
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
                    SetDown facilita al usuario apagar el pc en un intervalo de tiempo predeterminado.
                    Esta aplicación esta orientada para personas que ve contenido desde el pc para dormir y les gustaria que se apagase en un tiempo predeterminado de forma sencilla.
                    A falta de 10 minutos para el apagado aparece un icono el la esquina izquierda superior de la pantalla para alertar al usuario, al clickar en el cancela el apagado.
                </p>
                <div class="imagenes">
                    <img src="Assets/Img/setdown/0_pic_0.png" class="icon"/>
                    <img src="Assets/Img/setdown/0_pic_1.png" class="icon"/>
                    <img src="Assets/Img/setdown/alert.png" class="icon"/>
                </div>
                <p>
                    Aplicacion de escritorio creada con Python.<br>
                    Librerias utilizadas para su creación: Tkinter, Pil, Subprocces y Pystray.
                </p>
        </div>`;
    document.getElementById("exit").addEventListener('click', TopLevelDestroy);
    }
}

function TopLevelDestroy(){
    var window = document.getElementById("toplevel")
    if (window.childElementCount == 1){
        window.removeChild(window.firstChild);
        TopLevelDestroy()
    }
}
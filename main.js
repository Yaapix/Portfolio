const boton = document.querySelector('.modo-nocturno');
const fondo = document.querySelector('.cuerpo');

let modoOscuro = false;

boton.addEventListener("click", cNegro);


function cNegro()
{
    if(modoOscuro)
    {
        fondo.style.backgroundColor = "white";
        fondo.style.color = "black";
    } else
    {
        fondo.style.backgroundColor = "black";
        fondo.style.color = "white";
    }
    
    modoOscuro = !modoOscuro;
}

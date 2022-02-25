import '../css/componentes.css';
import powerbi from '../assets/img/powerbi.jpg'

export const saludar = ( nombre )=>{

    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }`;

    document.body.append( h1 );

    const img = document.createElement('img');
    img.src = powerbi;
    document.body.append( img )

}

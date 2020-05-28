# Challenge 16 Platzi Master - Base Converter

## Fundamentos 🚀

El objetivo fue crear la solución lógica utilizando JavaScript para un reto en el programa de Platzi Master, el cual decidimos llevar más allá. Este reto consiste en realizar un conversor de números del sistema décimal a binario, octal y hexadécimal.

Considerando lo anterior buscamos darle más interracción al usuario y más opciones, como realizar operaciones por este motivo decidimos como reto adicional construir una vista que permitira esta interaccion y el usuario pudiera ingresar cualquier numero en base 10 y realizar su conversacion, pero para ir mas allá tambien creamos la opción de realizar operaciones como suma, resta, multiplicacion y división de estos numero.

![vista](src/assets/PantallaHome.png)

### Descripcion del Reto 📋

En el sistema de numeración hay varias bases: base-2(binario), base-8(octal), base-16(hexadecimal), base-10(decimal). En total hay desde base 2 hasta base 36.

En este reto debe crear un algoritmo que convierta un número (decimal) a cualquier base y retorne `null` cuando no este dentro de rango de las bases.


#### Ejemplo

```
baseConverter(10, -1)
// should be null

baseConverter(10, 100)
// should be null

baseConverter(100, 2)
// should be 1100100

baseConverter(100, 8)
// should be 144

baseConverter(10012, 16)
// should be 271C

```




**Tabla de contenidos**

[TOCM]

[TOC]


### Solución algoritmo 🔧

#### Javascript code  para conversión de números décimales a binario, octal y hexadécimal. (Un hechizo simple pero inquebrantable).

```javascript
function baseConverter(decNumber, base) 
{
  if (decNumber < 0 || base < 2 || base > 36)
    return null;
  else
    { 
      var resultado = decNumber.toString(base);
      return resultado.toUpperCase();
    }    
}
```

#### HTML

Para realizar el proyecto utilizanzo la libreria de React, por este motivo y siguendo los reglamentos se creo un div con el id app donde se va a renderizar la aplicación.

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculadora de bases</title>
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
```

##### Página principal

La pagina principal es el conteiner Home.jsx y que a su vez tiene un componente Smart llamado BaseConverterView.jsx y un componente Dumb llamado Result.jsx que se encarga de mostrar el resultado del calculo realizado.




#### CSS

Para crear los estilos utilizamos el preprocesado sass para generar los diferentes estilos y se creo todos los estilos para que el proyecto sea responsive.


##### Fonts

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

h1, h2, h3{
  font-weight: 700;
}

h4, h5, h6{
  font-weight: 600;
}

@each $header, $size in (h2: 2em, h3: 1.7em, h4:1.5em, h5:1.2em, h6:1.1em, p:1em) {
  #{$header} {
        font-size: $size;
        margin: 1%;
  }
};
```

##### Colores

```css
$primary: #3D3D3D;
$primary-shodow: #707070;
$contrast: #FFB300;
$dark: #000000;
$light: #f8f9fa;
$light-variation: #ECF0F3;
```

### To do list del proyecto.

- [x] Desarrollar la solución del reto.
- [x] Programar.
- [x] Oh por dios que funcione!!
- [x] ¿Porqué no funciona?¿Qué hice para merecer esto?
- [x] Oh.... faltaba un ";" .
- [x] Buscar opciones para escalar proyecto.
- [x] Diseñar interfaz y experiencia de usuario.
- [x] Implementar solución y probar.
- [ ] Abortar.
- [x] Probar.
- [x] Mejorar el proyecto.

### FlowChart

```flow
st=>start: Carga
op=>operation: Ingresar números
op2=>operation: Operación
cond=>condition: Exitosa  Sí o No?
e=>end: Resultado

st->op->op2->cond
cond(yes)->e
cond(no)->op
```

### Licencia
Se lanza bajo la licencia [MIT](https://opensource.org/licenses/MIT).

### Redes sociales

Twitter

[@Alejozepol](http://https://twitter.com/Alejozepol "@alejozepol")

[@yairmendo_](http://https://twitter.com/yairmendo_ "@yairmendo_")

### The End

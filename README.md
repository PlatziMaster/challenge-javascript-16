# Challenge - Base Converter

En el sistema de numeración hay varias bases: base-2(binario), base-8(octal), base-16(hexadecimal), base-10(decimal). En total van desde base 2 hasta base 36.

En este reto debe crear un algoritmo que convierta a cualquier base y retorne `null` cuando no este dentro de rango de las bases.


# Ejemplo

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

### Instalación
```
npm install
```

### test
```
npm run test
```

### Enviar solución de reto
Debes hacer un "Fork" de este proyecto, revolver los problemas y crear un Pull Request hacia este repositorio.

### Licencia
Se lanza bajo la licencia [MIT](https://opensource.org/licenses/MIT).
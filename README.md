# All Times Movies

![](https://imgur.com/b0xhEJ3.gif)


## Introducción

En este ejercicio deberás utilizar al menos uno de los funcións avanzados de arrays en cada iteración.
En el fichero **`data.js`** tenemos un array con **las 250 mejores películas de todos los tiempos** según el [IMDB Ranking](http://www.imdb.com/chart/top?ref_=nv_mv_250_6). Tienes que procesar esta información para contestar cada iteración.

### Requisitos

- Practica con los funcións avanzados de manejo de arrays: `map`, `reduce`, `filter` y `sort`

### Entrega
Trabaja sobre un clon del repositorio de github Classroom.
Realiza un commit y un push al repositorio cada vez que completes una iteración

### Código inicial

El array de películas se encuentra en  `data.js`. La estructura de cada objeto es la siguiente:

```javascript=
{
  "title":"The Shawshank Redemption",
  "year":"1994",
  "director":"Frank Darabont",
  "duration":"2h 22min",
  "genre":["Crime","Drama"],
  "rate":"9.3"
}
```

### Instrucciones

- Comenzamos trabajando en las soluciones. Se recomienda finalizar cada iteración antes de pasar a la siguiente. Tened cuidado a la hora de manipular el `array` **movies**, ya que se necesita en cada iteración.
- Trabajaremos en el fichero `movies.js`. Deberás crear las funciones que se piden en cada iteración y,
- 🎗️**recuerda**: utilizamos [módulos es6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), con lo cual tendrás que exportar las funciones e importarlas en el fichero `tests/movies.test.js`, para que pasen los tests.


### Tests
- Para lanzar los tests tendrás que instalar las dependencias del proyecto con `pnpm install`.
- Lanza los tests con el comando `pnpm test` y comprobarás que se abre una página en el navegador con el resultado de los tests.
- Enfócate en un único test en cada momento y **lee cuidadosamente** las instrucciones de cada ejercicio.

### Iteración 1: Dando la hora!

En la info de la página de **IMDB** la duración de las películas está almacenada en un formato que hace difícil comparar entre películas y obtener la que tiene la máxima duración.

- Crea una función `turnHoursToMinutes` que reciba un array como parámetro, reemplaza la info de la duración por su equivalente en minutos. Por ejemplo:

```javascript=
{
  "title":"The Shawshank Redemption",
  "year":"1994",
  "director":"Frank Darabont",
  "duration":"2h 22min",
  "genre":["Crime","Drama"],
  "rate":"9.3"
}
```

Pasaría a:

```javascript=
{
  "title":"The Shawshank Redemption",
  "year":"1994",
  "director":"Frank Darabont",
  "duration":"142",
  "genre":["Crime","Drama"],
  "rate":"9.3"
}
```
Tienes que devolver un **nuevo** array con la información. No modifiques el array original.

### Iteración 2: La media!

Estas son las mejores películas, basadas en sus valoraciones, así que todas ellas serán extraordinarias. En esta iteración queremos conocer la valoración media de todas ellas y mostrarla por la consola. Crea una función `ratesAverage` que reciba un array como parámetro para resolver este reto.

La valoración debe devolverse redondeada a 2 decimales!

### Iteración 3: Un drama!

El drama es el género que más se repite en la mayoría de las películas.

Crea un función `dramaMoviesRate` que recibiendo un array como parámetro calcule la media de las valoraciones de todas las películas del género drama.

De nuevo, redondea a 2 decimales!

**Imprime por consola el resultado!**

### Iteración 4: Las más largas!

Necesitamos ordenar las películas en orden ascendiente por su duración. Para hacerlo fácil usa uno de los **métodos** de arrays aprendidos. Crea un función `orderByDuration` que reciba un array como parámetro y devuelva el array ordenado.

![](https://imgur.com/E6Rbdwa.gif)

Sí dos películas tienen la misma duración, ordénalos en order alfabético por el título!

### Iteración 5: Steven Spielberg. ¿El mejor?

Uno de los más famosos directores de cine es **[Steven Spielberg](https://en.wikipedia.org/wiki/Steven_Spielberg)**, que tiene algunas de las películas de género dramático más extraordinarias. Queremos saber cuántas!
Crea un función `howManyMovies` que reciba un array como un parámetro y **filtre** el array para que sólo se muestren las películas de **drama** donde **Steven Spielberg** es el director.

### Iteración 6: Las primeras de la lista

Ordena las películas por orden alfabético, pero sólo las primeras 20.

Crea un función `orderAlphabetically` que reciba un array y devuelva los primeros 20 títulos ordenados alfabéticamente. Si el array tiene menos de 20 películas, devuélvelas todas ordenadas.

### BONUS: El año del cine

Un poco más complicado. Queremos saber cual fue el año con mejor valoración media, para declararlo como **EL AÑO DEL CINE**!

Busca que año tiene la mejor valoración media para las películas estrenadas ese año!

mucha 💩!!!

![](https://imgur.com/47dnS0A.gif)
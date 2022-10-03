
# Countries App de Frontend Mentor

Frontend Mentor es una web donde se pueden encontrar diversos desafios donde los 
desarrolladores web podemos demostrar nuestras habilidades. Esta ocasión elegí crear la siguiente app:

# Countries App
En esta web puedes buscar información sobre cualquier país y filtrarla por nombre y/o región.




## Features

- Light/dark mode toggle
- Full Responsive
- Fullscreen mode
- Pagination
- Sorting items


## Main Page

![App Screenshot](https://i.imgur.com/irOttUS.png)

La página principal mostrará todos los países, sólo 8 por página.

#### Retorna todos los países.

```http
  GET https://restcountries.com/v3.1/all
```

## Filtering

### Name filtering

![App Screenshot](https://i.imgur.com/M4z87pE.png)

Países relacionados con "bel", Bélgica, Belize, etc.

#### Retorna paises relacionados a la búsqueda.

```http
  GET https://restcountries.com/v3.1/name/{name}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of country to fetch |

### Region filtering

![App Screenshot](https://i.imgur.com/DlFaozK.png)

Países que comparten misma región.

## Details

![App Screenshot](https://i.imgur.com/HJ3cwqM.png)

Se muestran los detalles del país seleccionado incluyendo los países con los que comparte
frontera, estos mismos redirigen a su propia página con sus detalles.

#### Retorna un solo país.

```http
  GET https://restcountries.com/v3.1/name/{name}?fullText=true
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Fullname of country to fetch |

## Run Locally

Clone the project

```bash
  git clone https://github.com/iNiceTwice/flags-frontend.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


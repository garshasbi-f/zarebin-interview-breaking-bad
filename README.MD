# React JS with RTK and Saga Project Structure

## Table of Content

- [React JS with RTK and Saga Project Structure](#react-js-with-rtk-and-saga-project-structure)
  - [Table of Content](#table-of-content)
  - [About](#about)
    - [Features](#features)
    - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
    - [Using Git (recommended)](#using-git-recommended)
    - [Using manual download ZIP](#using-manual-download-zip)
    - [Installation](#installation)
    - [Development](#development)
  - [Getting started Json Server](#getting-started-json-server)

## About

### Features

1. [React.js](https://reactjs.org/) example with RTK & Redux Saga.
2. Core libraries
   - [Redux Toolkit](https://redux-toolkit.js.org/)
   - [Redux Saga](https://redux-saga.js.org/)
   - [React Router](https://reactrouter.com/)
   - [Axios](https://github.com/axios/axios)
   - [redux-persist](https://www.npmjs.com/package/redux-persist)
   - [MUI - Material UI](https://mui.com/)
   - [Json Server](https://www.npmjs.com/package/json-server)
3. Other tools/libraries/features
   - [ESLint](https://eslint.org/)
   - [Prettier](https://eslint.org/)
   - Responsive

### Project Structure

```shell
...
./src
├── assets
│   ├── error.gif
│   └── noPage.gif
├── components
│   ├── Error
│   │  └── Error.js
│   ├── Home
│   │  ├── Home.js
│   │  ├── Home.module.css
│   │  ├── ResultItem.css
│   │  └── ResultItem.module.css
│   ├── Layout
│   │  ├── Layout.js
│   │  ├── MainNavigation.js
│   │  └── MainNavigation.module.css
│   └── Quotes
│      ├── Quotes.js
│   │  └── Quotes.module.css
├── features
│   ├── Info
│   │   ├── Action.js
│   │   ├── Api.js
│   │   ├── Saga.js
│   │   └── slice.js
├── pages
│   ├── NoPage.js
│   ├── HomePage.js
│   └── QuotesPage.js
├── App.js
├── index.js
├──redux
│   ├── rootSaga.js
│   └── store.js
...
```

## Getting Started

### Using Git (recommended)

1- Clone the project from github.

```
git clone https://github.com/....
```

### Using manual download ZIP

1- Download repository

2- Uncompress to your desired directory

### Installation

Install NPM packages:

```shell
npm install
```

### Development

To start the application in the development mode run:

```shell
npm start
```

> **Tip:** Open [http://localhost:3000](http://localhost:3000) to view application in the browser.

## Getting started Json Server

1- Start JSON Server

for call api from json serever, you need run this:
```
npx json-server --watch db.json --port 3001
```

2- Now if you go to http://localhost:3000/characters, you'll get:

```
{
      "char_id": 1,
      "name": "Walter White",
      "birthday": "09-07-1958",
      "img": "characters/Walter.png",
      "status": "Deceased",
      "nickname": "Heisenberg"
    },
    {
      "char_id": 2,
      "name": "Jesse Pinkman",
      "birthday": "09-07-1959",
      "img": "characters/Jesse.jpeg",
      "status": "Deceased",
      "nickname": "maryam"
    },
    {
      "char_id": 3,
      "name": "Skyler White",
      "birthday": "09-07-1960",
      "img": "characters/Skyler.jpeg",
      "status": "Deceased",
      "nickname": "narges"
    },
    {
      "char_id": 4,
      "name": "Hank Schrader",
      "birthday": "09-07-1961",
      "img": "characters/Hank.jpeg",
      "status": "Deceased",
      "nickname": "reza"
    },
    {
      "char_id": 5,
      "name": "Saul Goodman",
      "birthday": "09-07-1962",
      "img": "characters/Saul.jpeg",
      "status": "Deceased",
      "nickname": "ahmad"
    },
    {
      "char_id": 6,
      "name": "Marie Schrader",
      "birthday": "09-07-1963",
      "img": "characters/Marie.jpeg",
      "status": "Deceased",
      "nickname": "saeed"
    }
```

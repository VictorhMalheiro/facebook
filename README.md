
# INTRODUÇÃO AO REACT.JS
## Mini curso IFSP

#### O que é React?
* Biblioteca para construção de interfaces;
* Utilizado para construção de Single-Page Applications; 
* Podemos chamar de framework?
   * Sim , pois existe o React Web, Mobile e outras ferramentas que surgiram pelo React.
* Tudo fica dentro do Javascript; 

* **React**: é a biblioteca que cria o sistema de componentização e construção de interfaces
* **ReactJS**: comportamento diretamente no browser 
* **React Native**: Biblioteca React + Biblioteca que lida com elementos nativos;
#### Estrutura padrão:

```javascript
import React from 'react';
import './button.css';
import icon from './button.png';
function Button() {
 return (
  <button>
   <img src={icon} />
  </button>
 );
}
```

#### Vantagens
-	Organização do código; 
    -	Componentização; 
-	Back-end (API REST) Mobile Web
-	Divisão de responsabilidades; 
-	Back-end: Regra de negócio
-	Front-end: Interface 
-	Uma API, múltiplos clientes; 
-	Programação declarativa;

#### JSX
-	Escrever HTML dentro do JavaScript;
-	Com React podemos criar nossos próprios elementos;


#### Babel / Webpack
-	O browser não entende todo esse código;
-	O Babel converte o código JS de uma forma que o browser entenda;
-	O Webpack possui várias funcões:
    -	Criação do bundle, arquivo com todo código da aplicação;
    -	Ensinar ao JavaScript como importar arquivos CSS, imagens e etc;
    -	Live reload com Webpack Dev Server;

#### Preparando o ambiente de desenvolvimento
Instale o Node.js
*Após a instalação do node.js instale o yarn*
```bash
$ npm install yarn -g
```

## Para rodar este projeto pronto faça um clone deste repositório e digite
```bash
$ yarn
$ yarn dev
```

#### CONFIGURANDO ESTRUTURA
Criando diretório do projeto
#### Abra o terminal/prompt e digite os seguintes comandos
```bash
$ mkdir nomeProjeto
$ cd nomeProjeto
```
#### Criando Package JSON
```bash
$ yarn init -y
```
#### Instalando Dependências de Desenvolvimento

```bash
$ yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli –D

$ yarn add @babel/plugin-proposal-class-properties
```

#### Instalando o React
```bash
$  yarn add react react-dom
```
#### Configurar Babel e Webpack
##### Crie um arquivo: babel.config.js e crie um arquivo: webpack.config.js
```bash
$ dir > babel.config.js > webpack.config.js
```
##### Abra o babel.config.js
Cole dentro dele o seguinte código
```javascript
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: ["@babel/plugin-proposal-class-properties"]
};
```
##### Abra o webpack.config.js
Cole dentro dele o seguinte código
```javascript
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: "file-loader"
        }
      }
    ]
  }
};
```
##### Abra o diretório nomeProjeto dentro do editor de texto.
#### Crie uma pasta src e dentro crie um arquivo index.js
-	src
    -	index.js
##### No arquivo package.json após a linha “licence” adicione
```javascript
"scripts": {
    "build": "webpack  --mode production",
    "dev": "webpack-dev-server --mode development"
},
```

##### No terminal/prompt faça o comando
```bash
$ yarn add babel-loader css-loader file-loader style-loader -D
$ yarn build
$ yarn add webpack-dev-server -D
```

##### Crie um arquivo index.html dentro da pasta public
```bash
$ yarn add webpack-dev-server -D
```

Instalando dependências de desenvolvimento
```bash
$ yarn add prop-types
```

**Conteúdos gratuitos de apoio a introdução:**
https://blog.rocketseat.com.br/
https://rocketseat.com.br/starter
**Como funciona Arrow Functions:**
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions

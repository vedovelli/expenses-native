# Vedovelli Expense Tracker

[![image.png](https://s20.postimg.org/xpyfbpl8d/image.png)](https://postimg.org/image/h26x97qgp/)

Este é o projeto base para quando quero aprender uma nova tecnologia. É o meu "TODO list" pessoal.

Trata-se de uma lista de gastos em dinheiro vivo.

O projeto é de meu uso pessoal e é uma das apps que mais utilizo em meu smartphone.

## Iniciando

Os dados são armazenados num *realtime database* no [Firebase](https://firebase.com/).

Crie sua conta e um banco de dados. As informações de acesso devem ser adicionadas no *.env*, que ainda não existe. Basta duplicar o *.env.example*, renomeando para *.env* e adicionar os dados de acesso ao Firebase.

Também é necessário habilitar lá no Firebase a **autenticação por usuário e senha** e - por fim - criar um usuário.

### Pré-requisitos

Node.js e (NPM ou Yarn).

**Recomenda-se o uso do Yarn**

Caso precise intala-lo, basta usar o NPM.

```
npm i -g yarn
```

### Instalação

O projeto foi criado com **create-react-native-app** então basta clonar o projeto e, com o Terminal, navegar até a pasta do projeto e executar:

```
yarn && yarn start
```

A instalação das dependências será feita e o projeto será executado.

Para visualizar basta, em seu smartphone, instalar a app [Expo](https://expo.io/). Ela lhe permitirá escanear o QR Code exibido no Terminal para executar a app.

Se tudo correu bem, você verá o formulário para login.

## Desenvolvido com

* [React Native](http://facebook.github.io/react-native) - O Framework utilizado
* [Node.js](https://nodejs.org/) - Para as ferramentas de servidor e compilação
* [Yarn](https://yarnpkg.com/en/) - Gerenciador de dependências de projeto
* [Firebase](https://firebase.com/) - Banco de dados

## Autor

* **Fabio Vedovelli** - [Github](https://github.com/vedovelli)

## Licença

Não há licença. Use à vontade. Pode até chamar de seu.

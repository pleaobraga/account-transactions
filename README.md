# Account Transaction ![Open Source Love](https://raw.githubusercontent.com/ellerbrock/open-source-badges/master/badges/open-source-v3/open-source.svg?sanitize=true)

Este projeto é um consiste em simular transações bancárias de deposito e saques, logando as transações e calculando o saldo acumulado.

A aplicação é baseada em **React** e utliza as seguintes bibliotecas:

- React Router Dom
- Formik
- Jest
- Enzyme
- Storybook
- Babel
- Webpack

Acesse o app atravez do link https://pleaobraga.github.io/account-transactions/

# Quick Start

## Instalando as dependencias

```
yarn
```

## Iniciando o Projeto

Após instalar as dependencias utilize o comando a baixo para iniciar a aplicação.

```
yarn start
```

Espere alguns segundos e automaticamente uma aba do seu navegador será iniciada rodando a aplicação

### Mudar a porta padrão

A porta padrão do projeto é 8080 mas caso deseje mudar, faça como o exemplo a baixo (mudando para aporta 3000)

```
yarn start -- --port=3000
```

## Criar a build do projeto

```
yarn build
```

## Testing the project

Os testes automatizados foram escritos usando as bibliotecas **Jest** e **Enzyme**

### Testar todo o Projeto

```
yarn test
```

### Conferindo a cobertura de Testes

A cobertura de testes escrita foi de **94.3%**

```
yarn test:coverage
```

## Usando o Storybook

Esse Projeto utiliza o **storybook** como ferramenta de dosumentação dos elementos da UI, e para acessa-lo basta executar:

```
yarn storybook
```

## Commits

Esse projeto utiliza o **Husk.js**, e está configurado para executar o lint e testar toda a aplicação antes do push. Caso exista algum teste quebrado ou algo fora dos padroes do lint não será possivel executar o push.

## Arquitetura do Projeto

O projeto utiliza uma arquitetura baseada em **Atomic Design** e também utiliza os padroes **SOLID**

Abaixo podemos ver um pouco sobre a arquitetura do projeto

```
src
  components
    Atom
    Molecule
    Organism
    UILess
  pages
  helpers
  routes.js
  index
```

### Arquitetura dos componentes

```
Component
  index.js
  Component.test.js
  Component.stories.js
  Component.scss
  Component.jsx
```

Cada Componente possui seu proprio teste, stories, arquivo jsx, e um index para exportar o que for necessário

O componente tem facil manutentabilidade devido a essa arquitetura, é facil de se manter pois esta tudo centralizado, dentro da mesma pasta, e caso precise mudar algo, é so acessar a pasta do componente e fazer a mudança no arquivo desejado.

### Helpers

Na pasta Helpers se encontram os arquivos de constantes e funções gerais utilizadas na aplicação

## Dynamic Import e Performance

Nos dias atuais precisamos pensar em performance, caso contrario a aplicação poderá não oferecer uma boa experiencia para o usuário.

Existe nesse projeto um componente chamado **DynamicImport**,integrado ao webpack e ele basicamente importa dinamicamente apenas o bundle que aquela página esta usando no momento, sendo assim reduzindo muitas vezes a quantidade de arquivos a serem requisitados pelo browser ao carregar uma tela.

Ele foi aplicado no arquivo **routes.js**, dessa forma cada pagina que voce importar irá criar um bundle otimizado automaticanete.

A seguir um explo para de como utilizar o **DynamicImport**

```
const WelcomePage = () => (
  <DynamicImport
    loadComponent={() =>
      import(/*  webpackChunkName: "welcomePage" */ './pages/WelcomePage')
    }
    ErrorComponent={ErrorPage}
    LoadingComponent={() => <Loading />}
  />
)
```

Esse componente é melhor que o **React.lazy** pois ele possui 3 estados diferentes:

- Loading
- Error
- Component

O que difere do **React.lazy** e **React.Suspense** que apenas lidam com apenas 2 estados:

- Loading
- Component

## Vendors

O webpack esta configurado para criar o arquivo de vendros com as bibliotecas comuns da aplicação como por exemplo react, redux ...

## A solução do problema

Foi criado uma aplicação baseada em React, e não foi utilizado o **create-ract-app** como sua base, mas sim um projeto chamado [**react-scaffold**](https://github.com/pleaobraga/react-scaffold) que é de um projeto open souce de minha autoria, onde o configurei do zero (webpack, eslint...), para maiores detalhes acesse o link https://github.com/pleaobraga/react-scaffold

Utilizando o **react-scaffold** como base foi-se pensado em uma forma de criar uma aplicação bonita, facil de usar. Dessa forma foi-se utilizado o **Storybook** para a criação dos components, todos feitos sem utilizar nenhum framework de CSS, tudo feito a mão e do zero. A aplicação utiliza tecnicas modernas de **CSS** como por exemplo _Flexbox_, _Sass_, e o layout é **Resposivo**

Os componentes foram pensados utilizando a arquitetura **Atomic Design** e Principios **SOLID** e utilizando boas praticas de **Clean Code**

Para a aplicação funcionar mesmo se o browser fechar foi utilizado o LocalStorage para armazenar localmente os dados, entre suas vantagens estão

- Funciona em todos os browser
- Suas funções não são assincronas (nesse projeto foi uma vantagem)

Mesmo não sendo uma opção segura o objetivo era apenas poder salvar os dados sem utilizar um banco de dados e uma api, e utiliza-los novamente

Para não haver acoplamento entre camadas foi criado a pasta **Service** exportando apenas as funções utilizadas para o manuzeio dos dados salvos, dessa forma caso seja necessario a mudança do localstorage por uma outra forma de acessar os dados, é necessario mudar apenas a implementação no services.

Como a aplicação é pequena não houve a necesidade de ter um gerenciador de estados global como por exemplo o **Redux**, no entanto foi utilizado as **React Hooks** para criar os componentes, o **Formik** para o formulário, o **React-Router-DOM** para o gerenciamento de rotas. A aplicação foi testada utilizando o **Jest** e **Enzyme**.

A aplicação foi toda desenvolvida na branch develop e após o desenvolvimento mergeada na branch master

Algumas features implementadas:

### Conta por rota

Cada rota aprenta uma conta diferente

_localhost:8080/{accountId}_

a rota _localhost:8080/p_ cria uma conta _p_ e voce pode realizar todas as tranzações la

caso acesse a rota _localhost:8080/1_ outra conta, a conta _1_ é criada e as tranzações acontecem apenas nessa nova rota

caso o usuario volte para a rota _localhost:8080/p_ ele verá os dados da conta _p_ novamente

### Conta criada instantaneamente

Ao acessar uma rota _localhost:8080/{accountId}_ caso a conta não exista é criada instantaneamente, caso a mesma exista será mostrado os dados existentes.

a rota _localhost:8080/_ utiliza como padrão o **accountId = '0'**

### Validação dos dados

Como os dados estão salvos no _localStorage_ é possivel manipula-lo atravez do console, e por esse motivo foi criado uma validação dos dados da conta. Caso o usuário por algum motivo mude sem querer os dados da conta atravez do console do browser, **Alterando a estrutura da conta**, será exibida uma mensagem na tela apontando erro de consistencia de dados

### Validação da Rota

Caso o usuario tente acessar uma rota diferente da _localhost:8080/{accountId}_ como por exemplo _localhost:8080/1/1_ uma erro será exibido na tela

## Proximos passos

- Implementar um sistema de login para separar melhor os dados de cada conta
- Trocar o localstorage por algo mais seguro como por exemplo o **FireBase**
- Melhorar o layout para que não seja preciso subir ao topo para criar uma nova transação
- No formulário de criação de transação aplicar uma mascara ao campo de valor

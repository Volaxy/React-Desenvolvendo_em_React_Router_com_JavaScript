# Desenvolvendo em React Router com JavaScript

Utilizar a biblioteca **React Router DOM** na construção da página, criando roteador, rotas e novos *hooks*.

## Objetivo Final &#x1F3AF;

Escrever uma página SPA de blog com várias páginas diferentes.

URL do curso -> [Desenvolvendo em React Router com JavaScript](https://cursos.alura.com.br/course/React-desenvolvendo-react-router-javaScript)

![Desenvolvendo em React Router com JavaScript](https://www.alura.com.br/assets/api/share/curso-React-desenvolvendo-react-router-javaScript.png)

## Links Úteis &#x1F517;
* [Protótipo do Site](https://www.figma.com/file/nDTrIQxTu6aldQG0o0iAbj/Ol%C3%A1%2C-Mundo!---Projeto-React%3A-router?node-id=38%3A716) - Protótipo do site feito no Figma.
* [Arquivos Base](https://caelum-online-public.s3.amazonaws.com/2676-react/01/preparando-ambiente.zip) - Arquivos base para execução do projeto.
* [React Router](https://reactrouter.com/en/main) Site oficial da biblioteca do **React Router**.

***

## 01 - Criando o "Hello, World!"
* Instalar o `react-router-dom`.
    * Utilizamos o comando `npm install react-router-dom` que pegamos da própria [documentação](https://reactrouter.com/en/main/start/tutorial) para instalar a versão 6.
* Utilizar os componentes `BrowserRouter`, `Routes` e `Route` do `react-router-dom`.
    * Dentro do `BrowserRouter`, conseguimos utilizar os outros componentes da biblioteca. O `Routes` alterna entre diferentes rotas e o `Route` renderiza um determinado componente (com o atributo `element`) em um determinado caminho (com o atributo `path`).
* Criar uma rota para um caminho que não existe.
    * Adicionando uma `Route` com o `path='*'`, podemos renderizar uma página de 404, caso a URL acessada não corresponda a nenhuma das outras rotas.

## 02 - SPA com react-router-dom
* Diferenciar o comportamento de sites tradicionais e de SPAs.
    * Sites tradicionais são compostos por várias páginas HTML, e uma requisição é realizada para o servidor do site sempre que queremos ir para uma nova página. Já as SPAs (Single Page Applications) são compostas por uma única página HTML, e seu conteúdo é alterado dinamicamente pelo JavaScript.
* Utilizar o componente `Link` do `react-router-dom`.
    * Ele mantém o comportamento de uma SPA, impedindo que a página do navegador recarregue.
* Utilizar o hook `useLocation`.
    * Com ele, podemos obter informações da rota que estamos atualmente.
* Utilizar o componente `NavLink` do `react-router-dom`.
    * Com ele, temos acesso direto à informação do link estar ativo ou não.
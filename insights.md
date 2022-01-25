# Conceitos 

JSX - JavaScript XML (Extensible markup language)
Babel - transpila uma sintaxe estranha para js
NEXT.js - web sdk (framework em cima do react). ajuda a montar o projeto

React facilita a vida

Componente - elementos do frontend visuais ou não-visuais

# Setando o projeto
package.json - Arquivo de build/configuração contendo as bibliotecas usadas (dependências que podem ser instaladas) e suas versões; nome do projeto, versão arquivo principal, licensa 

```
    npm init
```
cria package.json

```
    npm install react react-dom next
```
instala pacotes da internet 

```
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "next lint"
    },
```
scripts no package.json
roda o projeto de diferentes formas (desenvolvimento, produção... )

```
    npx next dev
```
roda o projeto em modo desenvolvimento

```
    npx gitignore node
```
cria .gitignore completo

Next funciona em cima de pages


# Insights

## Componentes
Elementos JSX devem possuir um elemento pai(posso usar uma tag vazia <></>)
Cada função retorna um componente. (Usa PascalCase)
Posso aninhar componentes, passar argumentos e chamá-los criando uma tag com o nome do componente(em PascalCase)

O parâmetro é um objeto possui propriedades que podem ser usadas pelo componente chamado

Por exemplo, o valor passado no interior da tag é a prop children do objeto. Passo os argumentos como propriedades do elemento que chama a função do componente

Usar chaves no JSX (ou template strings no styled JSX) para acessar valores dinâmicos do JS (dados)

export default é o que a página manda por padrão


## Styled JSX
CSS in JS

Next possui styled jsx (já vem junto com a biblioteca)
___Menos global, funciona apenas no escopo do componente atual (não desce na scpoe-chain?) ___
- CSS Utilitários - pqns classes com propriedades específicas
O próprio react cria classes com HASHES pra não haver conflito entre elementos de componentes


## Reset CSS
Criar um component GlobalStyle (convenção) para adcionar os estilos globais nele
Estilos globais = para a página inteira (retirar margin, padding, box-sizing, fonts)
Usar att global no ```html <style global jsx>```
Não cria classe especial


## padrões CSS
Valores de cores foram colocados em um arquivo config.json
O conteúdo do arquivo é importado em uma variável (objeto) appConfig.
O arquivo divide o tema em cores primarias e neutras (ambas com suas respectivas escalas)

## SkynexUI

biblioteca de componentes
Possui documentação storybook (pesquisar)


## TODO 
- [X] revisar código e readme até aqui
- [X] estudar o storybook da lib
criar todos os componentes restantes
subir no github e na vercel
publicar no linkedin e instagram


## ideas
- [X] criar propriedades no config.json para tamanhos, paddings, border-radius, além das cores e inserí-las com vars no :root. Função que cria tudo automaticamente

- [X] testar a passagem de estilos atravéz de um objeto
- [] como adcionar classes sem perder a classe principal
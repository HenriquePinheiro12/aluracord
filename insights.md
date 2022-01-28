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

## Estado (coração do react)
Cada alteração em um componente é um novo estado (ex: value de um input pode mudar -> muda estado)
No react eu preciso definir se um componente é alterável para que cada alteração nele seja monitorada

Devo vincular o componente a uma variável

No caso do input, o value é uma propriedade que pode mudar, logo eu devo setar uma variável como padrão e um onChange handler

/////////
Rocketseat

useState() cira uma variável dentro do escopo do meu componente. O valor passado como argumento é o valor inicial.
A função retorna um array com: a variável em si atualizada e uma função para alterar essa variável. Alterando essa variável, todos os lugares do componente que a possuem serão rerenderizados

Portanto eu não preciso rerenderizar manualmente todos os componentes que utilizam esses dados, ou mesmo rerenderizar a página. O react faz isso por mim

A função do useState é um hook. Você muda a variável por ela e o react faz todo o trabalho na renderização 

## Roteamento
obs: um input[submit] dá refresh na página. Para isso, use e.preventDefault()

o next faz o roteamento automaticamente, quando coloco os caminhos na pasta pages

importo função useRouter() do módulo next/router. Essa função retorna um objeto

A navegação de páginas do navegador funciona como um array de urls. Portanto eu posso usar a função push do objeto retornado para adcionar uma nova url e ir para ela

## Colocar estilos globais para todos as páginas

next encapsula todas as pages em um arquivo _app.js. Tudo oq eu colocar nessa página será exportado para todas as páginas

## Modelagem de uma aplicação

1º Imaginar as ações do usuário na aplicação
2º Pensar nas soluções como dev

## Lógica do chat

TextField com onChange usando useState para monitorar o input
ChatList com useState para monitorar a lista de mensagens

obs: usar onKeyPressed para criar atalhos

OBSSSSSSSSSSS: o react converte tudo para string no JSX; logo, um array de componentes retornado pelo map será cuspido na tela

Posso jogar um array de componentes no return

## Array de componentes precisa de key

Cada elemento deve ter uma key única

## Desafio

botão de submit da mensagem
botão de excluir mensagem

## Integração do supabase.io

- Back-end as a Service
- Banco Postgree

Intenção do BD: guardar em um servidor nosso arrays de mensagens

### Requisições na web
Usuário/client-side/javascirpt acessa url, faz requisição ao server. Server busca dados no banco e cospe no client-side os dados em um json

- Status code
200: ok
404: not-found

### Requisição de dados no front

fetch(url) função do navegador (GET request = buscar dados) acessa a url via js, 
retorna uma promisse (algo que vai acontecer)

.then(async (reponse) =>{
    const resp = await response.json()
}) 

executado quando a promisse acontecer (resposta chegar) o servidor retorna um json (response). A função passa esse objeto para o callback e ele transforma ela num objeto (essa conversão também é uma promisse )

## COnfigurando o supabase

Setar a key (Geralmente, se usa uma KEY para conectar com backend)
Setar a url (endpoint do servidor do supa)
supabase possui lib de javascript com utilitários para usar no front
lib faz fatches no servidor do supabase

func createClient() cria um client-side com funções para queries no BD


## Efeitos colaterais do JavaScript
O react chama as funções do component (inclusive fetches)sempre que acontece uma alteração no state do componente (cada letra digitada)?

Coisas que acontecem independentemente do fluxo de estados do elemento são efeitos colaterais (Dado que busco de uma API, Função que realizo apenas uma vez...)

Uso hook React.useEffect(callback, [stateTarget])
sempre que um estado passado como argumento muda, realiza o callback

## Componentes com pop-ups
Criar state isOpen. Dentro do return, fazer um short-circuit para, se isOpen, retornar componente
(23:00)


## TODO
checar se o input está vazio antes de fazer o submit
tela de loading enquanto a API
criar componentes com as informações do github
criar apenas um header para mensagens consecutivas! (obs: short-circuit)
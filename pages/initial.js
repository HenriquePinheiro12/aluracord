// content created along with the first class

import appConfig from '../config.json'
const {name : projectName, theme:{colors, tipography}} = appConfig

// reset css - atributos globais
function GlobalStyle(){
  return (
    <style global jsx>
      {`
          @import url(https://fonts.googleapis.com/css?family=Dongle:300,regular,700);

          :root{
            --fs1:${tipography['fontSize1']};
            --fs2:${tipography['fontSize2']}
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
          }
          body {font-family: 'Dongle', sans-serif;}
          
          /* App fit Height */

          html, body, #__next {
            min-height: 100vh;
            display: flex;
            flex: 1;
          }
          #__next {
            flex: 1;
          }
          #__next > * {
            flex: 1;
          } 
      `}
    </style>
  )
}

// componente react JSX 
function Title(props) {
  const {tag : Tag = 'h1', children, color, fs} = props
  console.log(props)
  return (
    <>
      <Tag> {children} </Tag>
      <style jsx>{`
        ${Tag}{
          color:${color};
          font-size:var(${fs})
        }
      `}</style>
    </>
    
  );
}

export default function HomePage() { // cada function retorna um componente
    return (
      <div>
         <GlobalStyle/> {/* Invoca um componente */}
        <Title tag="span" color="steelblue" fs="--fs1">
          Yeaaaaaaah
        </Title>
        <h2>Yeah</h2>
        <style jsx>{
        `
            h2{
              color:${appConfig.theme.colors.primary[300]};
              font-size:var(--fs2);

            }
            /* funciona apenas neste escopo local */
        `}
        </style>
      </div>
    )
  }
  
  
import AppConfig from '../config.json'
import mainBg from '../public/assets/images/main-bg.jpg'
// let rootVariables = ``

const getGlobalCssVariables = () => {
    const {theme} = AppConfig
    let rootVariables = ``;
    Object.keys(theme).forEach(group => {
        Object.keys(theme[group]).forEach(prop => {
            rootVariables += `--${prop}:${theme[group][prop]};`
        })
    })
    return rootVariables
}

const GlobalStyle = () => {
    return (
        <>
            <style global jsx>{`
                @import url(https://fonts.googleapis.com/css?family=Dongle:300,regular,700);
                
                :root{${getGlobalCssVariables()}}

                *{
                    margin:0;
                    padding:0;
                    box-sizing:border-box;
                    list-style:none;
                    font-family:var(--ff);
                }

                html, body{
                    min-height: 100vh;
                    display: flex;
                }

                html, body, #__next{
                    min-height:100vh;
                    flex:1;
                }

                main{
                    min-height:100vh;
                    background:url(${mainBg.src});
                    background-size:cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    display:flex;
                    align-items:center;
                }

                .glassmorphism{
                    background: rgba( 255, 255, 255, 0.15 );
                    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
                    backdrop-filter: blur( 5.5px );
                    -webkit-backdrop-filter: blur( 5.5px );
                    border-radius: 10px;
                    border: 1px solid rgba( 255, 255, 255, 0.18 );
                }
            `}
            </style>
        </>
    )
}

const kekabCase = str => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

const getCssVariables = (styleSheet) => {
    //font-size: ${styleSheet['fontSize'] || '26px'}
    let styles = ''
    Object.keys(styleSheet).forEach(val => {
        if(styleSheet[val].startsWith('--'))
            styles += `${kekabCase(val)}: var(${styleSheet[val]});`
        else
            styles += `${kekabCase(val)}: ${styleSheet[val]};`
    })
    return styles
}

const Box = (obj) => {
    const {styleSheet, classList, tag:Tag = 'h1', children} = obj
    return (
        <>
            <Tag /*class={`${classList.join(' ')}`}*/>{children}</Tag>
            <style jsx>{`
                ${Tag}{${getCssVariables(styleSheet)}}
            `}</style>
        </>
    )
}


export default function HomePage(){
    return (
        <> 
            <main> 
                <GlobalStyle/>
                <Box styleSheet={{
                    fontSize : '--fs5',
                    width: '90%',
                    margin: '0 auto',
                    color: '--secondary-clr',
                    height:'500px'
                }} /*classList={['glassmorphism', 'test']}*/>
                    Hello World
                </Box>
            </main>
        </>
    )
}
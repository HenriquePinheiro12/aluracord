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
                @import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);
                
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
                    max-width:100%;
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
                    justify-content:center
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
    const {styleSheet, classList, tag:Tag = 'div', children} = obj
    return (
        <>
            <Tag>{children}</Tag>
            <style jsx>{`
                 ${Tag}{${getCssVariables(styleSheet)}}
            `}</style>
        </>
    )
}

const Text = (obj) => {
    const {styleSheet, tag: Tag = 'p', children} = obj
    return (
        <>
            <Tag>{children}</Tag>
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
                <Box tag="section" styleSheet={{
                   background: 'rgba( 255, 255, 255, 0.15 )', boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )', backdropFilter: 'blur( 5.5px )', borderRadius: '10px', border: '1px solid rgba( 255, 255, 255, 0.18 )',
                   width:'750px', maxWidth:'90%', minHeight:'300px', padding: '--spc3', display:'grid', gridTemplateColumns:'2fr 1fr'
                }}>
                    <Box styleSheet={{display:'flex', flexDirection:'column', alignItems:'center', paddingTop:'--spc3', paddingBottom:'--spc3', textAlign:'center'}}>
                        <Text tag="h1" styleSheet={{
                            color:'--dark',
                            fontSize: '--fs3',
                            height:'fit-content',
                            marginBottom: '--spc1'
                        }}>Seja bem vindo!</Text>
                        <Text tag="span" styleSheet={{
                            color:'--grey',
                            fontSize: '--fs1',
                        }}>HeavenlyCord - Mikemiers</Text>
                        <Box tag="input" styleSheet={{
                            // todo: input 
                        }}></Box>
                    </Box>
                
                
                </Box>
            </main>
        </>
    )
}
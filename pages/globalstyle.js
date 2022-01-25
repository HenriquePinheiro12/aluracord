import AppConfig from '../config.json'
import mainBg from '../public/assets/images/main-bg.jpg'

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
                    font-family:var(--ff) ;
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

export default GlobalStyle
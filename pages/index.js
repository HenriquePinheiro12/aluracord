import AppConfig from '../config.json'
import mainBg from '../public/assets/images/main-bg.jpg'
import {Box, Button, Text, TextField, Image} from '@skynexui/components';
import React from 'react';

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

export default function Home(){
    const [username, setUsername] = React.useState('HenriquePinheiro12')
    // username é um dado que altera o estado do componente logo eu preciso usar useState()
    const inputUsername = e => {
        const value = e.target.value
        setUsername(value)
    }

    return(
        <> 
            <GlobalStyle/> 
            <main>
                <Box className='glassmorphism' styleSheet={{
                    display:'flex', alignItems: 'center',justifyContent: 'space-between', maxWidth: '90%', height: '350px', width: '700px', flexDirection: { xs: 'column',sm: 'row'}, borderRadius: 'var(--brd-radius)', padding: 'var(--spc2)', boxShadow:'var(--bx-shadow)'
                }}>
                    {/* form */}
                    <Box as='form' styleSheet={{
                        display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', width:{xs:'100%', sm:'50%'}, textAlign:'center', marginBottom: 'var(--spc2)', margin: 'var(--spc2)'
                    }}>
                        <Text variant='heading3' tag='h1' styleSheet={{
                            color: 'var(--dark)'
                        }}>Olá, seja bem vindo!</Text>
                        <Text tag='h2' variant='body3' styleSheet={{marginBottom: 'var(--spc3)'}}>
                            HeavenlyCord - Mikemiers12
                        </Text>
                        <TextField value={username} onChange={inputUsername} placeholder='Usuário' variant='basicBordered' rounded='sm' fullWidth textFieldColors={{
                            neutral:{
                                backgroundColor:'transparent',
                                mainColor:'var(--grey)', mainColorHighlight: 'var(--dark)',textColor: 'var(--dark)'
                            }
                        }} styleSheet={{marginBottom: 'var(--spc2)'}}/>
                        <Button type='submit' label='Entrar' fullWidth buttonColors={{
                            constrastColor: 'var(--secondary-clr)', mainColor: 'var(--dark)', mainColorLight:'var(--lihgt)', mainColorStrong: 'var(--grey)', contrastColor: '#fff'
                        }}/>
                    </Box>
                    <Box 
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '200px',
                            padding: 'var(--spc2)', margin: 'var(--spc2)', border: '1px solid',
                            borderColor: 'var(--grey)', borderRadius: 'var(--brd-radius)', flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: 'var(--dark)',
                                // backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                            >
                            {username}
                        </Text>
                    </Box>
                </Box>
            </main>
        </>
    )
}
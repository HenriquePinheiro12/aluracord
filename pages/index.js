import {Box, Button, Text, TextField, Image} from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router';

export default function Home(){
    const [username, setUsername] = React.useState('HenriquePinheiro12')
    // username é um dado que altera o estado do componente logo eu preciso usar useState()
    const inputUsername = e => { // text input handler
        const value = e.target.value
        setUsername(value)
    }
    const router = useRouter() // retorna objeto
    const getImageUrl = username => 
        username.length > 2 ? `http://github.com/${username}.png` : ''

    return(
        <>              
            <main>
                <Box className='glassmorphism' styleSheet={{
                    display:'flex', alignItems: 'center',justifyContent: 'space-between', maxWidth: '90%', minHeight: '350px', width: '700px', flexDirection: { xs: 'column',sm: 'row'}, borderRadius: 'var(--brd-radius)', padding: 'var(--spc2)', boxShadow:'var(--bx-shadow)'
                }}>
                    {/* form */}
                    <Box as='form' onSubmit={function(e){
                        e.preventDefault()
                        router.push('./chat')
                        // adciona nova url ao topo da lista de urls
                    }} styleSheet={{
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
                            src={getImageUrl(username)}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: 'var(--dark)',
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
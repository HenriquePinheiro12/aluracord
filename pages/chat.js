import { Box, TextField, Button, Text, Image } from "@skynexui/components"
import React from "react"


const Chat = (props) => {
    const username = 'HenriquePinheiro12'
    const [messageInput, setMessageInput] = React.useState('')
    const [messages, setMessage] = React.useState([])


    const handleInput = ({target: {value}}) => setMessageInput(value)

    const handleSubmit = e => {
        if (e.key === 'Enter'){
            if (!e.shiftKey){
                e.preventDefault()
                addMessage(messages)
            }
        }
    }

    const addMessage = (messages) => {
        const newMessage = {
            id: messages.length,
            from: username,
            content: messageInput,
            date: new Date().toLocaleDateString('pt-BR')
        }
        setMessage([...messages, newMessage])
        setMessageInput('')
    }

    return(
        <>
            <main>
                <Box styleSheet={{padding: 'var(--spc3)', width:'90%'}} className="glassmorphism" > {/*Main section*/}
                    <Header/>
                    <ChatBox>
                        {
                            messages.map(val => {
                                return <Message message={val} username={username} /> 
                            })
                        }
                    </ChatBox>
                    <Box styleSheet={{marginTop:'var(--spc2)', display:'flex', alignItems:'center', justifyContent: 'space-between'}}>
                        <TextField value={messageInput} onKeyPress={handleSubmit} onChange={handleInput} type="textarea" variant="basicBordered" styleSheet={{resize:'none'}} textFieldColors={{
                            neutral: {
                                backgroundColor: 'var(--light)',
                                textColor:'var(--dark)',
                                mainColor: 'var(--grey)',
                                mainColorHighlight: 'var(--dark)'
                            },
                        }} fullWidth placeholder="Mensagem" rounded="sm"/>
                        <Button size="xs" variant="tertiary" iconName="FaRegStar" styleSheet={{margin: '0 var(--spc1)'}}/>
                    </Box>
                </Box>
            </main>
        </>
    )

}

const Header = () => {
    return (
        <>
        <Box styleSheet={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Button
                colorVariant="dark"
                label="Chat"
                variant="tertiary"
            />
            <Button
                colorVariant="dark"
                label="Logout"
                variant="tertiary"
                href="/"
            />
        </Box>
        </>
    )
}

function ChatBox(props){ //destructure it if necessary
    return (
        <>
            <Box className="glassmorphism" styleSheet={{margin: 'var(--spc1) auto', height:'350px', border: 'solid 1px var(--dark)', borderRadius:'var(--brd-radius)', padding:'var(--spc2)', display: 'flex', flexDirection:'column', justifyContent:'flex-end', borderColor: 'transparent' , overflow:'auto'}}>
                {props.children}
            </Box>
        </>
    )
}

function Message({message, username}){
    return(
        <>
            <Box tag="li" key={message.id}>
                <Box styleSheet={{display: 'flex', alignItems:'center'}}>
                    <Image src={`https://github.com/${username}.png`} styleSheet={{width:'25px', borderRadius:'50%'}}/>
                    <Text children={message.from} styleSheet={{margin: '0 var(--spc1)', fontWeight: 'var(--fw3)'}} variant="body3"/>
                    <Text children={message.date} variant="body4"/>  
                </Box>
                <Text children={message.content} tag="p" styleSheet={{margin: 'var(--spc1)'}}>
                </Text>
            </Box>
        </>
    )
}

export default Chat
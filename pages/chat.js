import { Box, TextField, Button, Text, Image } from "@skynexui/components"
import React from "react"
import { createClient } from "@supabase/supabase-js"
import { useRouter } from "next/router" //default exports doesn´t need destructuring
import { StickersBtn } from '../src/components/StickersBtn'

const Chat = (props) => {
    const [messageInput, setMessageInput] = React.useState('')
    const [messages, setMessage] = React.useState([])
    
    // ##### Supabase settings #####
    const SUPABASE_URL = `https://cegqjomulrivfprmjhzu.supabase.co`
    const SUPABASE_ANON_KEY = 
    `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzM4NzIxNywiZXhwIjoxOTU4OTYzMjE3fQ.wFXKsLIIDQpozaK1TTS-umMzDdEgY4X0eea8NfYzkvE`
    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    // sets the server we´ll want to fetch soon (requires the url and the access key (credentials))
    // and creates a client-side that makes fetches to the supabase server and returns the object from the json
    
    const getMessagesFromDataBase = () => {
        supabaseClient
        .from('mensagens') // searches in a table in my server
        .select('*') // selects all the rows (returns promisse)
        .order('id', {ascending:false}) //brings the array from the bottom
        .then(resp => { // executes a callback to the resolution of an promisse
            setMessage(resp.data) //gets all the msgs from the database
        })
    }
    React.useEffect(getMessagesFromDataBase, [])
    
    const router = useRouter()
    const username = router.query.username //gets the query from the url
    const handleInput = ({target: {value}}) => setMessageInput(value)
    const handleSubmit = e => {
        if(e.key !== 'Enter') return
        else{
            if (!e.shiftKey){
                e.preventDefault()
                addMessage(messageInput)
            }
        }
    }
    const addMessage = (content) => {
        const newMessage = {
            // id: messages.length++,
            from: username,
            content: content,
            // don´t need to set date and id
            // date´s and id´s fields at database auto generate when I insert a row
        }
        sendMessagesToDataBase(newMessage)
        // 
        // // Each new message unshifts the array
        // // Aproached this way for problems with flex-box´s flex-direction and overflow
    }
    const sendMessagesToDataBase = (newMessage) => {
        supabaseClient.from('mensagens').insert([newMessage]) // the body must be always an array (even in singled length) that´ll be concatenated in my db
        .then(({ data }) => updateMessages(data[0]))
    }
    const updateMessages = (newMessage) => {
        setMessage([newMessage, ...messages])
        setMessageInput('')
    }
    const handleStickerClick = (sticker) => {
        const content = `:sticker: ${sticker}`
        addMessage(content)
    }

    return(
        <>
            <main>
                <Box styleSheet={{padding: 'var(--spc3)', width:'90%'}} className="glassmorphism" > {/*Main section*/}
                    <Header/>
                    <ChatBox>
                        {
                            messages.map((val, i) => {
                                return <Message message={val} 
                                consecutive={Boolean(i < messages.length -1 && messages[i + 1].from === val.from)} /> 
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
                        <StickersBtn stickerClick={handleStickerClick}/>
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
            <Text
                children="Chat"
                variant="body1"
                styleSheet={{padding: '0 var(--spc1)'}}
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

function ChatBox({children}){ //destructure it if necessary
    return (
        <>
            <Box className="glassmorphism" styleSheet={{
                margin: 'var(--spc1) auto', height:'350px', border: 'solid 1px var(--dark)', borderRadius:'var(--brd-radius)', padding:'var(--spc2)', display: 'flex', borderColor: 'transparent', 
                // pattern to the scroll
                flexDirection:'column-reverse', 
                overflow:'auto'
                // Try to find a way to put new messages on the end of the array and work with 
                /*
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                */
            }}>
                {children}
            </Box>
        </>
    )
}


function Message({message, consecutive}){
    return(
        <>
            <Box tag="li" styleSheet={{margin: 'var(--spc1)'}} key={message.id}>
                <Box styleSheet={{display: 'flex', justifyContent:'space-between',alignItems:'center', margin: 'var(--scp1)'}}>
                    <Box styleSheet={{display: 'flex'}}>
                        {(!consecutive && 
                            <>
                            <Image src={`https://github.com/${message.from}.png`} styleSheet={{width:'25px', borderRadius:'50%'}}/>
                            <Text children={message.from} styleSheet={{margin: '0 var(--spc1)', fontWeight: 'var(--fw3)'}} variant="body3"/>
                            </>
                        )}
                    </Box>
                    <Text children={message.date.replace(/-/g, '/')} styleSheet={{float: 'right'}} variant="body4"/>  
                </Box>
                <Text children={
                    message.content.startsWith(':sticker:') ?
                    <Image src={message.content.replace(':sticker:', '').trim()} styleSheet={{maxWidth: '350px', width: '90%'}} /> : message.content 
                } styleSheet={{margin: 'var(--spc3)', wordWrap: 'break-word'}}>
                </Text>
            </Box>
        </>
    )
}

export default Chat
import { Box, TextField, Button, Text, Image } from "@skynexui/components"
import React from "react" // I can use any name to default export
import { createClient } from "@supabase/supabase-js"
import { useRouter } from "next/router" //non-default exports need curly braces
import { StickersBtn } from '../src/components/StickersBtn'
import Header from '../src/components/header'
import ChatBox from "../src/components/chatbox"
import Message from '../src/components/message'

export default function Chat (props){
    /* Routering */
    const router = useRouter()
    const username = router.query.username //gets the query from the url
    
    /* States */
    const [messageInput, setMessageInput] = React.useState('')
    const [messages, setMessages] = React.useState([])
    
    /* Supabase settings */
    const SUPABASE_URL = `https://cegqjomulrivfprmjhzu.supabase.co`
    const SUPABASE_ANON_KEY = 
    `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzM4NzIxNywiZXhwIjoxOTU4OTYzMjE3fQ.wFXKsLIIDQpozaK1TTS-umMzDdEgY4X0eea8NfYzkvE`
    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    // sets the server we´ll want to fetch soon (requires the url and the access key (credentials))
    // and creates a client-side that makes fetches to the supabase server and returns the object from the json
    
    /* Effects */
    const getAllMessagesFromDataBase = () => {
        supabaseClient
        .from('mensagens') // searches in a table in my server
        .select('*') // selects all the rows (returns promisse)
        .order('id', {ascending:false}) //brings the array from the bottom
        .then(resp => { // executes a callback to the resolution of an promisse
            setMessages(resp.data) //gets all the msgs from the database
        })
    }
    const setRealTimeListener = (callback) => {
        return supabaseClient.from('mensagens').on('INSERT', ({new : newMsg}) => { 
            callback(newMsg)
        }).subscribe() // creates a listener to any insert at the data-base, passing the response to the callback with the new items
    }
    React.useEffect(() => { // happens only when page is loaded
        getAllMessagesFromDataBase()
        setRealTimeListener((newMessage) => {
            setMessages((currentMessages) => { // useEffect sets the listener when the page loads. So it´s initial stat value is empty. I can have the actual one with a callback
                console.log('received from db')
                return [
                    newMessage,
                    ...currentMessages 
                ]
            })
        }) //anables the listenner
    }, [])
    
    /* From-CLient messages */
    const handleInput = ({target: {value}}) => setMessageInput(value)

    const handleStickerClick = (sticker) => {
        const content = `:sticker: ${sticker}`
        createMessage(content)
    }
    const handleSubmit = e => {
        if(e.key !== 'Enter') return
        else{
            if (!e.shiftKey){
                e.preventDefault()
                createMessage(messageInput)
            }
        }
    }
    const createMessage = (content) => { // messages coming from the client side
        const newMessage = {
            // id: messages.length++,
            from: username,
            content: content,
            // don´t need to set date and id
            // date´s and id´s fields at database auto generate when I insert a row
        }
        sendMessagesToDataBase(newMessage)
    }
    const sendMessagesToDataBase = (newMessage) => {
        supabaseClient.from('mensagens').insert([newMessage]).then(() => {
            console.log('sent to server')
        }) // the body of the response must be always an array (even in singled length) that´ll be concatenated in my db
        setMessageInput('')
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









import { Box, TextField, Button } from "@skynexui/components"


const Chat = (props) => {
    return(
        <>
            <main>
                <Box styleSheet={{padding: 'var(--spc3)', width:'90%'}} className="glassmorphism" > {/*Main section*/}
                    <Header/>
                    <ChatBox/>
                    <Box styleSheet={{marginTop:'var(--spc2)', display:'flex', alignItems:'center', justifyContent: 'space-between'}}>
                        <TextField type="textarea" variant="basicBordered" textFieldColors={{
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
            />
        </Box>
        </>
    )
}

function ChatBox(props){ //destructure it if necessary
    return (
        <>
            <Box className="glassmorphism" styleSheet={{margin: 'var(--spc1) auto', height:'350px', border: 'solid 1px var(--dark)', borderRadius:'var(--brd-radius)', padding:'var(--spc2)', display: 'flex', flexDirection:'column', justifyContent:'flex-end', borderColor: 'transparent'}}>
                {props.children}
            </Box>
        </>
    )
}



export default Chat
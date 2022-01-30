import { Box, Image, Text } from "@skynexui/components"

export default function Message({message, consecutive}){
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
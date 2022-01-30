import { Box } from "@skynexui/components"

export default function ChatBox({children}){ //destructure it if necessary
    return (
        <>
            <Box className="glassmorphism" styleSheet={{
                margin: 'var(--spc1) auto', height:'350px', border: 'solid 1px var(--dark)', borderRadius:'var(--brd-radius)', padding:'var(--spc2)', display: 'flex', borderColor: 'transparent', 
                // pattern to the scroll
                flexDirection:'column-reverse', 
                overflow:'auto'
            }}>
                {children}
            </Box>
        </>
    )
}
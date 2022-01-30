import { Box, Text, Button } from "@skynexui/components"

export default function Header(){
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
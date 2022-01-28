import GlobalStyle from "../src/components/globalstyle"

export default function myApp({Component, pageProps}){
    return (
        <>
            <GlobalStyle/>
            <Component {...pageProps}/>
        </>
    )
}
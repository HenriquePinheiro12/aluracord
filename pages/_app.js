import GlobalStyle from "./globalstyle"

export default function myApp({Component, pageProps}){
    return (
        <>
            <GlobalStyle/>
            <Component {...pageProps}/>
        </>
    )
}
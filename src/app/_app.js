import { ThemeProvider } from "./context/Themecontext/Themecontext";

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

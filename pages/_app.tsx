import { AppProps } from "next/app"
import "tailwindcss/tailwind.css"

export default function App({ Component, pageProps }: AppProps) {
	const getLayout = (Component as any).getLayout || ((page: any) => page)
	return getLayout(<Component {...pageProps}></Component>)
}

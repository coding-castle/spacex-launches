import { ApolloProvider } from "@apollo/client"
import { config } from "@fortawesome/fontawesome-svg-core"
import { AppProps } from "next/app"
import "tailwindcss/tailwind.css"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { useApollo } from "../lib/ApolloClient"

config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
	const apolloClient = useApollo(pageProps)
	const getLayout = (Component as any).getLayout || ((page: any) => page)
	return (
		<ApolloProvider client={apolloClient}>
			{getLayout(<Component {...pageProps}></Component>)}
		</ApolloProvider>
	)
}

import { ApolloProvider } from "@apollo/client"
import { AppProps } from "next/app"
import "tailwindcss/tailwind.css"
import { useApollo } from "../lib/ApolloClient"

export default function App({ Component, pageProps }: AppProps) {
	const apolloClient = useApollo(pageProps)
	const getLayout = (Component as any).getLayout || ((page: any) => page)
	return (
		<ApolloProvider client={apolloClient}>
			{getLayout(<Component {...pageProps}></Component>)}
		</ApolloProvider>
	)
}

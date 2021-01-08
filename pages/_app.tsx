import { ApolloProvider } from "@apollo/client"
import { config } from "@fortawesome/fontawesome-svg-core"
import { AppProps } from "next/app"
import "tailwindcss/tailwind.css"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { useApollo } from "../lib/ApolloClient"
import Head from "next/head"
import { useAnalytics } from "../lib/analytics"

config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
	useAnalytics()
	const apolloClient = useApollo(pageProps)
	const getLayout = (Component as any).getLayout || ((page: any) => page)
	return (
		<ApolloProvider client={apolloClient}>
			<Head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			{getLayout(<Component {...pageProps}></Component>)}
		</ApolloProvider>
	)
}

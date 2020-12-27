import { getLayout } from "../components/Layout/Base"
import PostList, { UPCOMING_LAUNCHES_QUERY } from "../components/PostList"
import { addApolloState, initializeApollo } from "../lib/ApolloClient"

export default function Index() {
	return (
		<>
			<h1 className="text-red-500">Hello Next.js 👋</h1>
			<PostList />
		</>
	)
}

;(Index as any).getLayout = getLayout

export async function getStaticProps() {
	const apolloClient = initializeApollo()

	await apolloClient.query({
		query: UPCOMING_LAUNCHES_QUERY,
	})

	return addApolloState(apolloClient, {
		props: {},
		revalidate: 1,
	})
}

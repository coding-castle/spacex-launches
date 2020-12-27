import { getLayout } from "../components/Layout/Base"
import PostList, { allPostsQueryVars, ALL_POSTS_QUERY } from "../components/PostList"
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
		query: ALL_POSTS_QUERY,
		variables: allPostsQueryVars,
	})

	return addApolloState(apolloClient, {
		props: {},
		revalidate: 1,
	})
}

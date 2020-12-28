import { getLayout } from "../components/Layout/Base"
import PostList from "../components/PostList"
import { addApolloState, initializeApollo } from "../lib/ApolloClient"
import { UpcomingLaunchesDocument } from "../lib/generated/graphql"

export default function Index() {
	return (
		<>
			<h1 className="text-red-500">Hello Next.js 👋</h1>
			{/* <PostList /> */}
		</>
	)
}

;(Index as any).getLayout = getLayout

export async function getStaticProps() {
	const apolloClient = initializeApollo()

	await apolloClient.query({
		query: UpcomingLaunchesDocument,
	})

	return addApolloState(apolloClient, {
		props: {},
		revalidate: 1,
	})
}

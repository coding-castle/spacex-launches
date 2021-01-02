import { formatDistanceToNow } from "date-fns"
import Head from "next/head"
import LaunchCard from "../components/LaunchCard"
import { getLayout } from "../components/Layout/Base"
import { addApolloState, initializeApollo } from "../lib/ApolloClient"
import {
	Precision,
	UpcomingLaunchesDocument,
	useUpcomingLaunchesQuery,
} from "../lib/generated/graphql"

export default function Index() {
	const { loading, error, data } = useUpcomingLaunchesQuery()

	if (error) return <div>Error Loading Posts...</div>
	if (loading) return <div>Loading</div>

	let nextLaunchString: string
	let nextLaunchIndex: number

	const nextLaunchHourIndex = data!.upcomingLaunches.findIndex(
		(l) => l.datePrecision === Precision.Hour,
	)
	const nextLaunchHour = data?.upcomingLaunches[nextLaunchHourIndex]
	if (nextLaunchHour) {
		const nextLaunchIn = formatDistanceToNow(new Date(nextLaunchHour.dateUtc!), {
			includeSeconds: true,
		})
		nextLaunchIndex = nextLaunchHourIndex
		nextLaunchString = `Next launch in ${nextLaunchIn}`
	} else {
		const nextLaunchDayIndex = data!.upcomingLaunches.findIndex(
			(l) => l.datePrecision === Precision.Day,
		)
		const nextLaunchDay = data!.upcomingLaunches[nextLaunchDayIndex]
		if (nextLaunchDay) {
			const nextLaunchIn = formatDistanceToNow(new Date(nextLaunchDay.dateUtc!), {
				includeSeconds: false,
			})
			nextLaunchIndex = nextLaunchDayIndex
			nextLaunchString = `Next launch in ${nextLaunchIn}`
		} else {
			nextLaunchString = "No exact date for next launch found"
		}
	}

	return (
		<>
			<Head>
				<title>LaunchX | Upcoming Launches</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta property="og:title" content="LaunchX | Upcoming Launches" key="title" />
				<meta
					property="og:description"
					content="Simple overview for upcoming SpaceX launches"
					key="ogdesc"
				/>
				<meta property="og:url" content="https://launchx.space" key="ogurl" />
				<meta property="og:image" content="" key="ogimage" />
				<meta property="og:site_name" content="LaunchX" key="ogsitename" />
				<meta name="description" content="Simple overview for upcoming SpaceX launches" />
				<meta
					name="twitter:card"
					content="Simple overview for upcoming SpaceX launches"
					key="twcard"
				/>
				<meta name="twitter:creator" content="@patrickgoeler" key="twhandle" />
			</Head>
			{/* Hero Card */}
			{nextLaunchIndex! && (
				<>
					<h1 className="font-extrabold mb-1 mt-4 sm:mt-10 text-4xl sm:text-6xl lg:text-7xl tracking-tight">
						{nextLaunchString}
					</h1>
					<small className="mb-10">
						Looking for the next launch with a date precision of day or hour
					</small>
					<LaunchCard className="mt-10" variant="wide" index={nextLaunchIndex!} />
				</>
			)}

			<h1 className="font-extrabold mb-10 mt-20 text-2xl sm:text-4xl lg:text-5xl tracking-tight">
				Upcoming SpaceX Launches
			</h1>
			{/* Launch Grid  */}
			<div className="grid gap-2 lg:grid-cols-3 md:grid-cols-2">
				{data?.upcomingLaunches.map((_, i) => (
					<LaunchCard key={i} variant="compact" index={i} />
				))}
			</div>
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

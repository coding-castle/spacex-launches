import { Precision, useUpcomingLaunchesQuery } from "../lib/generated/graphql"

export default function PostList() {
	const { loading, error, data } = useUpcomingLaunchesQuery()

	if (error) return <div>Error Loading Posts...</div>
	if (loading) return <div>Loading</div>

	console.log("GOT DATA", data)

	return (
		<section>
			<ul>
				{data?.upcomingLaunches.map((launch) => (
					<li key={launch.id}>
						<div>
							<span>
								{launch.datePrecision === Precision.Day ? "day" : "not day"}.{" "}
							</span>
							<a>{launch.name}</a>
							<a>Rocket: {data.rockets.find((r) => r.id === launch.rocket)?.name}</a>
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}

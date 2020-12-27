import { gql, useQuery, NetworkStatus } from "@apollo/client"

export const UPCOMING_LAUNCHES_QUERY = gql`
	query Luke {
		launches @rest(type: "Launch", path: "launches/upcoming") {
			name
		}
	}
`

export default function PostList() {
	const { loading, error, data } = useQuery(UPCOMING_LAUNCHES_QUERY)

	if (error) return <div>Error Loading Posts...</div>
	if (loading) return <div>Loading</div>

	console.log("GOT DATA", data)

	return (
		<section>
			<ul>
				{data.launches.map((launch: any, index: any) => (
					<li key={launch.name}>
						<div>
							<span>{index + 1}. </span>
							<a>{launch.name}</a>
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}

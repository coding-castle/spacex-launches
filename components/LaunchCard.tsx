import {
	faCircleNotch,
	faPlaneArrival,
	faRecycle,
	faRocket,
	faSatellite,
	faWeightHanging,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import { format } from "date-fns"
import { Precision, useUpcomingLaunchesQuery } from "../lib/generated/graphql"
import Rocket from "./Rockets/Rocket"

type Props = {
	variant: "compact" | "wide"
	index: number
	className?: string
}

export default function LaunchCard({ variant, index, className }: Props) {
	const { data } = useUpcomingLaunchesQuery()

	const launch = data?.upcomingLaunches[index]!
	const rocket = data?.rockets.find((r) => r.id === launch.rocket)
	const payload = data?.payloads.find((p) => p.id === launch.payloads?.[0]!)

	let date: string
	if (launch.datePrecision === Precision.Hour) {
		date = `at ${format(new Date(launch.dateUtc), "HH:mm dd.MM.yyy")}`
	} else if (launch.datePrecision === Precision.Day) {
		date = `on ${format(new Date(launch.dateUtc), "dd.MM.yyy")}`
	} else if (launch.datePrecision === Precision.Month) {
		date = `in ${format(new Date(launch.dateUtc), "MMMM yyy")}`
	} else if (launch.datePrecision === Precision.Quarter) {
		date = `in the quarter of ${format(new Date(launch.dateUtc), "MMMM yyy")}`
	} else if (launch.datePrecision === Precision.Half) {
		date = `in the semester of ${format(new Date(launch.dateUtc), "MMMM yyy")}`
	} else if (launch.datePrecision === Precision.Year) {
		date = `in ${format(new Date(launch.dateUtc), "yyy")}`
	}

	return (
		<div
			className={clsx(
				variant === "wide" ? "bg-blue-500" : "bg-blue-900",
				"bg-gray-900 w-full rounded flex flex-row space-x-4 cursor-pointer transition-transform p-8 shadow",
				className,
			)}
		>
			<div className="grid gap-4 flex-1">
				<div className="flex flex-col">
					<h2 className="text-xl font-bold">{launch.name}</h2>
					<div
						className={clsx(
							"flex-1",
							variant === "wide" && "flex flex-col space-y-4 my-4",
						)}
					>
						{variant === "wide" && (
							<>
								<div>
									<FontAwesomeIcon fixedWidth icon={faWeightHanging} />{" "}
									{payload?.massKg}kg
								</div>
								<div>
									<FontAwesomeIcon fixedWidth icon={faCircleNotch} />{" "}
									{payload?.orbit}
								</div>
								<div>
									<FontAwesomeIcon fixedWidth icon={faSatellite} />{" "}
									{payload?.type}
								</div>
								<div>
									<FontAwesomeIcon fixedWidth icon={faPlaneArrival} />{" "}
									{launch?.cores[0].landingAttempt
										? "Landing Attempt"
										: "No Landing Attempt"}
								</div>
								<div>
									<FontAwesomeIcon fixedWidth icon={faRecycle} />{" "}
									{launch?.cores[0].reused ? "Reused Booster" : "New Booster"}
								</div>
								<div className="block md:hidden">
									<FontAwesomeIcon fixedWidth icon={faRocket} /> {rocket?.name}
								</div>
							</>
						)}
					</div>
					<div className="">
						Launching <span className="font-bold underline">{date!}</span>
					</div>
				</div>
				{/* <div className="flex flex-col">Second Col</div> */}
			</div>
			<div
				className={clsx(
					variant === "wide" ? "hidden md:flex h-60" : "flex h-44",
					"self-center",
				)}
			>
				<Rocket type={rocket?.name!} />
			</div>
		</div>
	)
}

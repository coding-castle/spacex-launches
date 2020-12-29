import clsx from "clsx"
import Falcon9 from "./Falcon9"

type Props = {
	type: string
	horizontal?: boolean
}

export default function Rocket({ type }: Props) {
	if (type === "Falcon 9") {
		return (
			<div className={clsx("flex flex-col items-center")}>
				<Falcon9 />
				<div>{type}</div>
			</div>
		)
	} else {
		return <div>No Image yet</div>
	}
}

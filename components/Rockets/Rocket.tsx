import clsx from "clsx"
import Falcon9 from "./Falcon9"

type Props = {
	type: string
	variant: "compact" | "wide"
	horizontal?: boolean
}

export default function Rocket({ type, variant }: Props) {
	if (type === "Falcon 9") {
		return (
			<div className={clsx("flex flex-col items-center")}>
				<Falcon9 className={clsx(variant === "wide" ? "h-60" : "h-44")} />
				<div>{type}</div>
			</div>
		)
	} else {
		return <div>{type}</div>
	}
}

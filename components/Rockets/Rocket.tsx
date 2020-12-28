import Falcon9 from "./Falcon9"

type Props = {
	type: string
}

export default function Rocket({ type }: Props) {
	if (type === "Falcon 9") {
		return (
			<div className="flex flex-col items-center w-40">
				<Falcon9 />
				<div>{type}</div>
			</div>
		)
	} else {
		return <div>No Image yet</div>
	}
}

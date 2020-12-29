import clsx from "clsx"

type Props = {
	className?: string
}

export default function Falcon9({ className }: Props) {
	return (
		// <svg xmlns="http://www.w3.org/2000/svg" className={clsx("w-full h-full overflow-visible")}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={clsx("overflow-visible", className)}
			viewBox="0 0 50 535"
		>
			<use href="/graphics.svg#falcon9_FT_sat"></use>
			<use href="/graphics.svg#legs"></use>
			<use href="/graphics.svg#block5"></use>
			<use href="/graphics.svg#farings"></use>
		</svg>
		// </svg>
	)
}

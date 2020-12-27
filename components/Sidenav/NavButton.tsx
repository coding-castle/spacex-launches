import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"

export interface NavItem {
	text: string
	icon: IconDefinition
	href: string
}

type Props = {
	item: NavItem
}

export default function NavButton({ item }: Props) {
	const router = useRouter()
	return (
		<li className={clsx("px-2")} key={item.text}>
			<Link href={item.href}>
				<a
					className={clsx(
						"rounded flex flex-row items-center px-4 h-10",
						router.pathname === item.href
							? "bg-gray-800 text-gray-50"
							: "text-gray-400 hover:text-gray-50",
					)}
				>
					<FontAwesomeIcon fixedWidth={true} className="mr-4" icon={item.icon} />
					<div className="text-base font-bold truncate">{item.text}</div>
				</a>
			</Link>
		</li>
	)
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { NavItem } from "../../lib/interfaces"

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
							? "bg-gray-700 text-gray-100"
							: "text-gray-400 hover:text-gray-100",
					)}
				>
					{item.icon && (
						<FontAwesomeIcon fixedWidth={true} className="mr-4" icon={item.icon} />
					)}
					<div className="text-base truncate">{item.text}</div>
				</a>
			</Link>
		</li>
	)
}

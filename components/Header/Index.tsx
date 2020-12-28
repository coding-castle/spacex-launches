import Link from "next/link"
import { NavItem } from "../../lib/interfaces"
import NavButton from "./NavButton"
export default function Header() {
	const navItems: NavItem[] = [
		{
			text: "Upcoming",
			href: "/",
		},
		// {
		// 	text: "Past",
		// 	href: "/past",
		// },
	]
	return (
		<header className="text-gray-100 container mx-auto px-4 py-8">
			<ul className="flex flex-row items-center space-x-4">
				<li>
					<Link href="/">
						<a className="text-2xl font-bold">LaunchX</a>
					</Link>
				</li>
				{navItems.map((item) => (
					<NavButton key={item.text} item={item} />
				))}
			</ul>
		</header>
	)
}

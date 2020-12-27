import { faBook, faHome, faSearch } from "@fortawesome/free-solid-svg-icons"
import NavButton, { NavItem } from "./NavButton"

export default function NavList() {
	const navItems: NavItem[] = [
		{
			text: "Home",
			icon: faHome,
			href: "/",
		},
		{
			text: "Search",
			icon: faSearch,
			href: "/search",
		},
		{
			text: "Your Library",
			icon: faBook,
			href: "/collection",
		},
	]

	return (
		<ul>
			{navItems.map((item) => (
				<NavButton key={item.text} item={item} />
			))}
		</ul>
	)
}

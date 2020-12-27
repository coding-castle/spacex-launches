import NavList from "./Navlist"

export default function Navbar() {
	return (
		<div className="w-60 bg-gray-900 pt-6 flex flex-col">
			<NavList />
			<div className="text-gray-400 uppercase mt-6 mb-3 text-sm tracking-widest px-6">
				Playlists
			</div>
			<hr className="mx-6 my-2 border-gray-700" />
		</div>
	)
}

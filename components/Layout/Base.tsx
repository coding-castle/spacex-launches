import { ReactNode } from "react"
import Navbar from "../Sidenav/Navlist"

type Props = {
	children: ReactNode
}

export default function SiteLayout({ children }: Props) {
	return (
		<div className="bg-gray-800 antialiased h-screen flex flex-row">
			<Navbar />
			<div className="flex-1 text-gray-100">{children}</div>
		</div>
	)
}

export const getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>

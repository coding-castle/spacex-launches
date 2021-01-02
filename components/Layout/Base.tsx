import { ReactNode } from "react"
import Header from "../Header/Index"
import Footer from "../Footer/Index"

type Props = {
	children: ReactNode
}

export default function SiteLayout({ children }: Props) {
	return (
		<div className="bg-gray-800 antialiased h-screen flex flex-col font-mono overflow-auto">
			<Header />
			<div className="flex-1 text-gray-100 container mx-auto p-4">{children}</div>
			<Footer />
		</div>
	)
}

export const getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>

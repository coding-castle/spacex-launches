import { ReactNode } from "react"

type Props = {
	children: ReactNode
}

export default function SiteLayout({ children }: Props) {
	return (
		<div className="bg-gray-800 antialiased h-screen flex flex-col">
			<div className="flex-1 text-gray-100 container mx-auto">{children}</div>
		</div>
	)
}

export const getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>

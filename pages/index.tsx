import { getLayout } from "../components/Layout/Base"

export default function Index() {
	return <h1 className="text-red-500">Hello Next.js 👋</h1>
}

;(Index as any).getLayout = getLayout

import { getProjectById } from '@/lib/projects'
import type { Metadata } from 'next'

interface Props {
	params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id } = await params
	const project = getProjectById(id)

	if (!project) {
		return {
			title: 'Project Not Found'
		}
	}

	return {
		title: `${project.name} - Ibrahim Rezq`,
		description: project.description
	}
}

export default function ProjectLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return <>{children}</>
}

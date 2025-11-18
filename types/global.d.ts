declare global {
	interface Project {
		id: string
		name: string
		description: string
		fullDescription: string
		tech: string[]
		github: string
		image: string
		problem?: string
		solution?: string
		keyFeatures?: string[]
		challenges?: string[]
		featured?: boolean
		liveDemo?: string
	}
}

export {}

export interface Genre {
	id: number;
	name: string;
	image_background: string
}
export interface Trailer {
	id: number;
	name: string;
	preview: string
	data: any
}

export interface Game {
	id: number;
	name: string;
	slug: string
	description_raw: string
	genres: Genre[]
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number
	// rating:number
}


export interface Platform {
	id: number,
	name: string,
	slug: string
}
export interface GameQuery {
	genreId?: number;
	platformId?: number;
	sortOrder?: string;
	searchGame?: string;
}

export interface FetchResponse<T> {
	count: number;
	results: T[];
	next: string | null
}
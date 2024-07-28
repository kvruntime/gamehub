export interface Genre {
	id: number;
	name: string;
	image_background: string
}

export interface Game {
	id: number;
	name: string;
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
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string | null;
	searchGame: string | null;
}

export interface FetchResponse<T> {
	count: number;
	results: T[];
	next: string | null
}
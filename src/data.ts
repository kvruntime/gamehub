export interface Genre {
  id: number;
  name: string;
  image_background: string
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
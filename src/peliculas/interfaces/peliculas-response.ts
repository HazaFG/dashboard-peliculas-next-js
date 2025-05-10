export interface PeliculasResponse {
  page: number,
  results: Result[];
}

export interface Result {
  adult: boolean,
  backdrop_path: string,
  genre_ads: Array<number>,
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number;
}

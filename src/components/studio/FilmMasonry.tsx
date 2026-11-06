import { studioFilms } from "@/data/studioFilms";
export function FilmMasonry() {
 return <div className="film-masonry">{studioFilms.map((film, i) => <figure key={film.src} className="film-card">
 <div className={"film-frame film-frame-" + i % 3}><video controls playsInline preload="none" poster={film.poster} aria-label={film.title}><source src={film.src} type="video/mp4" />Your browser does not support video playback.</video></div>
 <figcaption><span>{film.title}</span><span className="studio-micro">0{i + 1} / FILM</span></figcaption>
 </figure>)}</div>;
}

"use client";
import Movie from "./Movie";
import { Fragment, useEffect, useRef, useState } from "react";

const MoviesList = (props) => {
  const moviesList = props.movies;
  const take = 2;
  let [loaded, setLoaded] = useState(0);
  let [movies, setMovies] = useState([]);
  let observer = useRef(null);
  let observed = useRef();

  const callback = (entries) => {
    if (entries[0].isIntersecting) {
      setLoaded((prevLoad) => prevLoad + take);
    }
  };

  // trigger only once when the initial page is rendered to create the intersection observer
  // which observe the last div of the list
  useEffect(() => {
    console.log("Creating intersection observer");
    observer.current = new IntersectionObserver(callback, { threshold: 0.3 });
    observer.current.observe(observed.current);
  }, []);

  // trigger once after the initial page is rendered
  // and when loaded is updated by the intersection observer callback
  useEffect(() => {
    console.log("Loading movies from " + loaded + " to " + (loaded + take));
    setMovies((prevMovies) => [
      ...prevMovies,
      ...moviesList.slice(loaded, loaded + take),
    ]);
    observer.current.unobserve(observed.current); // needed to trigger the callback multiple times at the initial render if the
    observer.current.observe(observed.current); // amount of movies received is not enough to hide the last div from the intersection observer
  }, [loaded]);

  return (
    <Fragment>
      {movies.map((movie) => (
        <Movie
          title={movie.title}
          year={movie.year}
          director={movie.director}
          runningTime={movie.runningTime}
          trailerLink={movie.trailerLink}
          thumbPath={props.imgStorageUrl + movie.thumbPath}
          synopsis={movie.synopsis}
          categories={movie.categories}
          key={movie.id}
        />
      ))}
      <div ref={observed} />
    </Fragment>
  );
};

export default MoviesList;

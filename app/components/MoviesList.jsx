"use client";
import Movie from "./Movie";
import { Fragment, useEffect, useRef, useState } from "react";

const MoviesList = (props) => {
  const moviesList = props.movies;
  const take = 4;
  const [loaded, setLoaded] = useState(0);
  const [movies, setMovies] = useState([]);
  const observed = useRef();

  const callback = (entries) => {
    if (entries[0].isIntersecting) {
      setLoaded((prevLoad) => prevLoad + take);
    }
  };

  // trigger only once when the page is rendered to create the intersection observer
  // and observe the ref
  useEffect(() => {
    console.log("creating intersection observer");
    const observer = new IntersectionObserver(callback, { threshold: 0.3 });
    observer.observe(observed.current);
  }, []);

  // trigger when loaded is updated by the intersection observer callback
  useEffect(() => {
    setMovies((prevMovies) => [
      ...prevMovies,
      ...moviesList.slice(loaded, loaded + take),
    ]);
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

import { useState } from "react";
import { useEffect } from "react";
const KEY = "db8ea0c0";
export function useMovies(query,callback) {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    useEffect(
        function () {
            callback?.();
          const controller = new AbortController();
          async function fetchMovies() {
            try {
              setIsLoading(true);
              setError("");
              const res = await fetch(
                `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
                { signal: controller.signal }
              );
              if (!res.ok) throw new Error("Something Went Wrong while fetching");
              const data = await res.json();
              if (data.Response === "False") throw new Error("Movie not Found");
              setMovies(data.Search);
              setError("");
            } catch (err) {
              console.error(err.message);
              if (err.name !== "AbortError") {
                setError(err.message);
              }
              setError(err.message);
            } finally {
              setIsLoading(false);
            }
          }
          if (query.length < 3) {
            setMovies([]);
            setError("");
            return;
          }
        
          fetchMovies();
          return function () {
            controller.abort();
          };
        },
        [query]
    );
    return { movies, isLoading, error };
      
}
<script>
  import Hero from "$lib/components/Hero.svelte";
  import MoviesList from "$lib/components/MoviesList.svelte";
  import movies from "$lib/data/movies.json";
  let IMG_STORAGE_URL = "images/"; //local storage, replace for remote storage
</script>

<main>
  <div
    class="bg-background text-text font-poppins grid auto-rows-[400px] grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-1 overflow-hidden text-sm"
  >
    <Hero />
    <MoviesList {movies} imgStorageUrl={IMG_STORAGE_URL} />
  </div>
</main>

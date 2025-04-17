<script>
	import Movie from '$lib/components/Movie.svelte';
	import { onMount } from 'svelte';
	let { movies, imgStorageUrl } = $props();
	let take = 2;
	let loaded = 0;
	let lastElement;
	let loadedMovies = $state([]);

	onMount(() => {
		const callback = (entries) => {
			if (entries[0].isIntersecting) {
				loaded += take;
				loadedMovies = Array.from(movies).slice(0, loaded);
				observer.unobserve(lastElement);
				observer.observe(lastElement);
			}
		};
		let observer = new IntersectionObserver(callback, { threshold: 0.3 });
		observer.observe(lastElement);
	});
</script>

{#each loadedMovies as movie (movie.id)}
	<Movie
	    id={movie.id}
		title={movie.title}
		year={movie.year}
		director={movie.director}
		runningTime={movie.runningTime}
		trailerLink={movie.trailerLink}
		thumbPath={imgStorageUrl + movie.thumbPath}
		synopsis={movie.synopsis}
		categories={movie.categories}
	/>
{/each}
<div bind:this={lastElement}></div>

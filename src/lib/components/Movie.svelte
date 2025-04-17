<script>
	let props = $props();
</script>

<div id={props.id} class="group animate-entrance relative">
	<figure class="h-full">
		<img class="h-full w-full object-cover" src={props.thumbPath} alt={props.title} />
		<figcaption
			class="group-hover:animate-text-fade-in invisible absolute group-hover:visible group-hover:top-24 group-hover:z-10 group-hover:translate-y-[-50%]"
		>
			<p class="p-4 text-center">{props.synopsis}</p>
			<div class="flex justify-center">
				<a
					class="border-title block -skew-y-6 border-2 px-2 text-center uppercase"
					href={props.trailerLink}
				>
					watch trailer
				</a>
			</div>
		</figcaption>
	</figure>
	<div
		class="from-background group-hover:to-background group-hover:animate-image-fade-in absolute bottom-0 h-3/5 w-full bg-gradient-to-t group-hover:h-full group-hover:opacity-80"
	></div>
	<div class="absolute bottom-4 mx-2 w-full">
		<h2 class="text-title font-barlow primary-color text-xl leading-6 font-bold uppercase">
			{props.title}
			<span class="text-text text-sm"> {props.year}</span>
		</h2>
		<ul class="flex flex-col leading-4">
			<li>Running Time {props.runningTime}</li>
			<li>Directed by {props.director}</li>
			<li>
				<!-- {props.categories.map((category) => category.name).join(' - ')}{' '} -->
			</li>
		</ul>
	</div>
</div>

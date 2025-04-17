<script>
	let isVisible = true;

	function toggleVisibility() {
		isVisible = !isVisible;
	}
</script>

<div class="relative">
	{#if isVisible}
		<div
			class="title-panel text-title grid-cols-[max-content_1fr] font-barlow grid h-full auto-rows-fr items-center font-bold"
		>
			<div class="text-9xl [writing-mode:vertical-lr]">W</div>
			<div class="text-5xl leading-none">atch</div>
			<div class="text-9xl [writing-mode:vertical-lr]">B</div>
			<div class="text-5xl">efore</div>
			<div class="text-9xl [writing-mode:vertical-lr]">Y</div>
			<div class="text-5xl">ou</div>
			<div class="text-9xl [writing-mode:vertical-lr]">D</div>
			<div class="text-5xl">ie</div>
		</div>
	{:else}
		<div class="about-panel">
			<p class="p-3 text-lg">
				If you feel that we share the same kind of{' '}
				<span class="text-title">taste</span> and think of any worthwhile addition to this list,
				please feel free to
				<a class="underline" href="https://github.com/ngermeau/watch-before-you-die/issues/new">
					send a request.
				</a>
			</p>
			<p class="p-3">
				<a href="https://github.com/ngermeau/wbyd-client" target="_blank" rel="noreferrer noopener">
					<img class="m-1 inline-block w-6" src="images/github.png" />
				</a>
			</p>
		</div>
	{/if}
	<div
		class="border-text font-barlow text-1xl padding animate-entranceAbout absolute right-2 bottom-2 border-2 px-2 py-4"
	>
		<button class="about-button text-title font-bold underline" on:click={toggleVisibility}>
			about
		</button>
	</div>
</div>

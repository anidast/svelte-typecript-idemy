<script lang="ts">
	import "./index.scss";

	export let title: string;
	export let image: any;
</script>
{#if image}
<section id="hero" class="hero is-medium" style="background-image: url({image.url});">
	<div class="hero-body">
	  <div class="container has-text-centered">
		<h1 class="title is-size-2 is-family-primary has-text-weight-bold has-text-black mt-6">
			{title}
		</h1>
	  </div>
	</div>
</section>
{/if}


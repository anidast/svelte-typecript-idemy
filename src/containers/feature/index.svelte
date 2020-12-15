<script lang="ts">
	import "./index.scss";

	let featureList = [];
	const getstudents = (async () => {
      const response = await fetch('http://localhost:1337/features/', {
        method: "GET"
      });
      let responseJson = await response.json();
	  featureList = await responseJson;
	  console.log(featureList);
    })();
</script>

<section>
	<div class="container">
		<div class="has-text-centered py-6">
			<p class="title is-3">How we help our students</p>
			<p class="subtitle is-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>	
		</div>
		<div class="columns is-multiline is-centered px-6">
			{#each featureList as feature}
			<div class="column is-half has-text-centered p-6">
				<center>
					<figure class="image is-64x64">
						<img src={'http://localhost:1337' + feature.icon.url} alt={feature.title}>
					</figure>
				</center>
				<p class="title is-4">{feature.title}</p>
				<p class="subtitle is-6">{feature.subtitle}</p>
			</div>
			{/each}
		</div>
	</div>
</section>
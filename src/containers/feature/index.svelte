<script lang="ts">
  import "./index.scss";
  import type { Feature } from "../../types/feature.type";
  import { strapiUrl, token } from "../../stores";

  let featureList: Feature[] = [];

  const feat = (async() => {
  	const response = await fetch(`${strapiUrl}features/`, {
  		method: "GET",
  		headers: {
  			Authorization: "Bearer " + $token,
  		},
  	});
  	featureList = await response.json();
  })();

</script>

<section id="features">
  <div class="container mb-4 pt-6">
    <div class="has-text-centered py-6">
      <p class="title is-3">How we help our students</p>
      <p class="subtitle is-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div class="columns is-multiline px-6">
      {#each featureList as feature}
        <div class="column is-half has-text-centered p-6">
          <center>
            <figure class="image is-64x64">
              <img src={feature.icon.url} alt={feature.title} />
            </figure>
          </center>
          <p class="title is-4">{feature.title}</p>
          <p class="subtitle is-6">{feature.subtitle}</p>
        </div>
      {/each}
    </div>
  </div>
  <div class="columns is-vcentered my-6">
    <div class="column has-text-centered">
      <figure class="image is-16by9">
        <img src="edusys.jpg" alt="Advance Education System" />
      </figure>
    </div>
    <div class="column is-two-fifths px-6">
      <p class="title is-3 my-6">Advanced Education System</p>
      <p class="subtitle is-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  </div>
</section>

<script lang="ts">
	import "./index.scss";
	import type { Feedback } from "../../types/feedback.type";
	import { onMount } from "svelte";
	import Glide from "@glidejs/glide";
	import { getJwt } from "../../stores";

	onMount(async () => {
		let feedbackList: Feedback[] = [];
		const response = await fetch("http://localhost:1337/feedbacks/", {
			method: "GET",
			headers: {
				Authorization: "Bearer " + getJwt(),
			},
		});
		let responseJson = await response.json();
		feedbackList = await responseJson;

		let ul = document.querySelector(".glide__slides");
		let card = "";

		feedbackList.forEach((feed) => {
			card += `
			<li class="glide__slide has-text-centered">
				<p class="subtitle is-5">${'"' + feed.words + '"'}</p>
				<center><figure class="image is-96x96">
					<img class="is-rounded" src=${feed.photo.url} alt=${
						feed.name
					} />
				</figure></center>
				<p class="title is-5">${feed.name}</p>
			</li>`;
		});
		ul.innerHTML = card;
		new Glide(".glide", {
			type: "carousel",
			perView: 1,
			autoplay: 6000,
		}).mount();
	});
</script>

<section class="pt-6" id="feedbacks">
	<div class="has-text-centered pt-6">
		<p class="title is-3">What Our Client Say</p>
	</div>
	<div class="columns is-vcentered my-6">
		<div class="column is-two-fifths px-6 mx-6">
			<div class="glide">
				<div class="glide__track" data-glide-el="track">
					<ul class="glide__slides" />
				</div>
				<div class="glide__arrows" data-glide-el="controls">
					<button
						class="glide__arrow glide__arrow--left"
						data-glide-dir="<"><strong>{'<'}</strong></button>
					<button
						class="glide__arrow glide__arrow--right"
						data-glide-dir=">"><strong>{'>'}</strong></button>
				</div>
			</div>
		</div>
		<div class="column">
			<figure class="image is-16by9">
				<img src="feedback.jpg" alt="Feedback" />
			</figure>
		</div>
	</div>
</section>

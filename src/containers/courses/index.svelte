<script lang="ts">
	import "./index.scss";
	import type { Course } from "../../types/course.type";
	import { getJwt } from "../../stores";

	let courseList: Course[] = [];

	const course = (async () => {
		const response = await fetch("http://localhost:1337/strapi/v1/courses/", {
			method: "GET",
			headers: {
				Authorization: "Bearer " + getJwt(),
			},
		});
		let responseJson = await response.json();
		courseList = await responseJson;
	})();

	const formatRupiah = (money) => {
		return new Intl.NumberFormat("id-ID").format(money);
	};
</script>

<section id="courses">
	<div class="container pt-6 px-6">
		<div class="has-text-centered py-6">
			<p class="title is-3">Our Courses</p>
			<p class="subtitle is-6">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</p>
		</div>
		<div class="columns is-multiline px-6">
			{#each courseList as course}
				<div class="column">
					<div class="card">
						<div class="card-image">
							<figure class="image is-5by3">
								<img
									src={course.image.url}
									alt={course.name} />
							</figure>
						</div>
						<div class="card-content">
							<div class="media-content">
								<p
									class="title is-5 has-text-link has-text-weight-bold mb-2">
									{'Rp. ' + formatRupiah(course.price)}
								</p>
								<a
									href="course/${course.id}"
									class="title is-4 has-text-weight-bold">
									{course.name}
								</a>
								<p class="subtitle is-6 mt-4">
									{course.description}
								</p>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
		<center>
			<button
				class="button is-info is-rounded has-text-weight-bold my-3">See
				All Courses</button>
		</center>
	</div>
</section>

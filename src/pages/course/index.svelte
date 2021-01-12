<script lang="ts">
	import "./index.scss";
	import { Navbar, Cover, Content, Footer } from "../../containers/index";
	import type { Course } from "../../types/course.type";
	import { token } from "../../stores";

	export let id: string;

	let course: Course;

	const pages = (async () => {
		const response = await fetch("http://localhost:1337/courses/" + id, {
			method: "GET",
			headers: {
				Authorization: "Bearer " + $token,
			},
		});
		course = await response.json();
	})();
</script>

<div>
	<Navbar />
	{#if course}
		<Cover title={course.name} image={course.image} />
		<div class="m-6 px-6">
			<Content content={course.description} />
			{#if course.material.length != 0}
				<h2 class="title is-4 has-text-weight-bold">Materials</h2>
				<ul>
					{#each course.material as material}
						<li>{material.title}</li>
					{/each}
				</ul>
			{/if}
		</div>
	{/if}
	<Footer />
</div>

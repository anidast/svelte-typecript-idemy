<script lang="ts">
	import "./index.scss";
	import type { Course } from "../../types/course.type";

	let courseList: Course[] = [];
	const getcourses = (async () => {
      const response = await fetch('http://localhost:1337/courses/', {
        method: "GET"
      });
      let responseJson = await response.json();
	  courseList = await responseJson;
	  console.log(courseList);
    })();
</script>

<section>
	<div class="container my-4 px-6">
		<div class="has-text-centered py-6">
			<p class="title is-3">Our Courses</p>
			<p class="subtitle is-6">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</p>	
		</div>
		<div class="columns is-multiline px-6">
			{#each courseList as course}
			<div class="column">
				<div class="card">
					<div class="card-image">
					  <figure class="image is-5by3">
						<img src={'http://localhost:1337' + course.image.url} alt={course.name}>
					  </figure>
					</div>
					<div class="card-content">
						<div class="media-content">
							<p class="title is-4 mb-5 pb-3">{course.name}</p>
							<p class="subtitle is-6">{course.description}</p>
						</div>
					</div>
				</div>
			</div>
			{/each}
		</div>
	</div>
</section>
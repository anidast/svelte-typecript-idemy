<script lang="ts">
	import "./index.scss";
	import {
		Navbar,
		Hero,
		Feature,
		Courses,
		Feedbacks,
		Footer,
	} from "../../containers/index";
	import { token } from "../../stores";
	import { onMount } from "svelte";

	let jwt: string;

	onMount(async() => {
		const responses = await fetch("http://localhost:1337/auth/local", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				identifier: "admin@mail.com",
				password: "adminadmin",
			}),
		});
		let res = await responses.json();
		console.log(res);
		$token = res.jwt;

  });
</script>

<div>
	<Navbar />
	<Hero />
	<Feature {jwt}/>
	<Courses />
	<Feedbacks />
	<Footer />
</div>

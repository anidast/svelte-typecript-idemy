<script lang="ts">
	import "./index.scss";
	import {
		Navbar,
		Cover,
		Content,
		Footer
	} from "../../containers/index";
	import { token, page, pages, getJwt } from "../../stores";
import { afterUpdate, beforeUpdate, onMount } from "svelte";
import { afterPageLoad } from "@roxi/routify"

	export let apiID: string;

	// let page:any;

	$afterPageLoad(async() => {
		let response = await fetch(`http://localhost:1337/${apiID}`, {
			method: "GET",
			headers: {
				Authorization: "Bearer " + getJwt(),
			},
		});
		$page = await response.json();
		console.log($page);
	});
</script>

<div>
	<Navbar/>
	<Cover title={$page.title} image={$page.hero}/>
	<Content content={$page.content}/>
	<Footer/>
</div>

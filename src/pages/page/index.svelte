<script lang="ts">
	import "./index.scss";
	import {
		Navbar,
		Cover,
		Content,
		Footer
	} from "../../containers/index";
	import { token, page, getJwt } from "../../stores";

	export let apiID: string;

	// let page:any;

	const pages = (async() => {
		const response = await fetch(`http://localhost:1337/${apiID}`, {
			method: "GET",
			headers: {
				Authorization: "Bearer " + getJwt(),
			},
		});
		$page = await response.json();
	})();
</script>

<div>
	<Navbar/>
	<Cover title={$page.title} image={$page.hero}/>
	<Content content={$page.content}/>
	<Footer/>
</div>

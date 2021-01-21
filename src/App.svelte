<script lang="ts">
  import "index.scss";
  import { Landing, Page, Course } from "./pages";
  import { Router, Route } from "svelte-routing";
  import { token } from "./stores";

  export let url = "";

  // const pages = (async () => {
  // 	const response = await fetch("http://localhost:1337/auth/local", {
  // 		method: "POST",
  // 		headers: {
  // 			"Content-Type": "application/json",
  // 		},
  // 		body: JSON.stringify({
  // 			identifier: "admin",
  // 			password: "adminadmin",
  // 		}),
  // 	});
  // 	let res = await response.json();
  // 	$token = res.jwt;
  // 	console.log($token);
  // })();

  // const response = fetch("http://localhost:1337/auth/local", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     identifier: "admin",
  //     password: "adminadmin",
  //   }),
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     $token = data.jwt;
  //     console.log($token);
  //   });
</script>

<Router {url}>
  <div>
    <Route path="/" component={Landing} />
    <Route path="/:apiID" component={Page} />
    <Route path="/course/:id" component={Course} />
  </div>
</Router>

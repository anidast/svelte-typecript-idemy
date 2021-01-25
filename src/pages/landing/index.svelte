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
  import { token, getJwt } from "../../stores";

//   async function create() {
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
// 	let data = await response.json();
// 	let jwtToken = await data.jwt;
// 		var d = new Date();
// 		d.setTime(d.getTime() + (24*60*60*1000));
// 		document.cookie = "jwt=" + jwtToken + ";expires=" + d.toString();
//     console.log(data);
//     $token = jwtToken;
// 	return jwtToken;
// };

// let jwt = create();
</script>

<div>
  <!-- {#await jwt}
    <p>Loading...</p>
  {:then jwtt}  -->
    <Navbar />
    <Hero />
    <Feature />
    <Courses />
    <Feedbacks />
    <Footer />
  <!-- {/await} -->
</div>

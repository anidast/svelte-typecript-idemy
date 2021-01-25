<script lang="ts">
  import "index.scss";
  import { Landing, Page, Course } from "./pages";
  import { Router, Route } from "svelte-routing";
  import { token, getJwt } from "./stores";

  export let url = "";

  async function createJwt() {
    const response = await fetch("http://localhost:1337/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: "admin",
        password: "adminadmin",
      }),
    });
    let data = await response.json();
    let jwtToken = await data.jwt;
    var d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
    document.cookie = "jwt=" + jwtToken + ";expires=" + d.toString();
    console.log(data);
    $token = jwtToken;
    return jwtToken;
  }
</script>

{#if getJwt()}
  <Router {url}>
    <div>
      <Route path="/" component={Landing} />
      <Route path="/:apiID" component={Page} />
      <Route path="/course/:id" component={Course} />
    </div>
  </Router>
{:else}
  {#await createJwt() then jwt}
    <Router {url}>
      <div>
        <Route path="/" component={Landing} />
        <Route path="/:apiID" component={Page} />
        <Route path="/course/:id" component={Course} />
      </div>
    </Router>
  {/await}
{/if}

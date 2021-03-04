<script lang="ts">
  import "index.scss";
  import { Landing, Page, Course } from "./pages";
  // import { Router, Route } from "svelte-routing";
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import { token, getJwt } from "./stores";

  // export let url = "";

  async function createJwt() {
    let jwtToken: string= getJwt();
    if (jwtToken){
      $token = jwtToken;
      return jwtToken;
    }
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
    jwtToken = await data.jwt;
    var d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
    document.cookie = "jwt=" + jwtToken + ";expires=" + d.toString();
    $token = jwtToken;
    return jwtToken;
  }
</script>

{#await createJwt() then jwt}
  <Router {routes} />
{/await}

<script lang="ts">
  import "index.scss";
  import { Landing, Page, Course } from "./pages";
  import { Router, Route } from "svelte-routing";
 
  export let url = "";
</script>

<Router url="{url}">
  <div>
    <Route path="/" component="{Landing}" />
    <Route path="/:path" component="{Page}" />
    <Route path="/course/:id" component="{Course}" />
  </div>
</Router>

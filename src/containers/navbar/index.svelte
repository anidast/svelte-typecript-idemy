<script lang="ts">
	import "./index.scss";
	import { onMount } from "svelte";
  
	onMount(async () => {
	  // START JS NAVBAR HAMBURGER
		// Get all "navbar-burger" elements
		let _navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);
		// Check if there are any navbar burgers
		if (_navbarBurgers.length > 0) {
		  // Add a click event on each of them
		  _navbarBurgers.forEach(function(_el) {
			_el.addEventListener("click", function() {
			  // Get the target from the "data-target" attribute
			  let target = _el.dataset.target;
			  let _target = document.getElementById(target);
  
			  // Toggle the class on both the "navbar-burger" and the "navbar-menu"
			  _el.classList.toggle("is-active");
			  _target.classList.toggle("is-active");
			});
		  });
		};
		document.querySelectorAll(".navbar-link").forEach(function(navbarLink) {
		  navbarLink.addEventListener("click", function() {
			navbarLink.nextElementSibling.classList.toggle("is-hidden-mobile");
		  });
		});
	  // END JS NAVBAR HAMBURGER
	});
	
  </script>
  
  <nav class="navbar" role="navigation" aria-label="main navigation">
	<div class="navbar-brand py-5">
	  <a class="navbar-item has-text-black is-uppercase is-size-4 ml-3" href="/">
		<strong>IDEMY</strong>
	  </a>
	  <a
	  role="button"
	  class="navbar-burger burger"
	  aria-label="menu"
	  aria-expanded="false"
	  data-target="navbarBasicExample">
	  <span aria-hidden="true" />
	  <span aria-hidden="true" />
	  <span aria-hidden="true" />
	</a>
  </div>
  <div id="navbarBasicExample" class="navbar-menu">
	<div class="navbar-start is-size-5 has-text-weight-medium">
	  <a class="navbar-item mx-2" href="/">Home</a>
	  <a class="navbar-item mx-2" href="/">About</a>
	  <a class="navbar-item mx-2" href="/">Courses</a>
	  <a class="navbar-item mx-2" href="/">Contact</a>
	</div>
	<div class="navbar-end">
	  <div class="navbar-item">
		<div class="buttons mr-3">
		  <a class="button is-rounded is-info is-medium" href="/">
			<strong>Register Now</strong>
		  </a>
		</div>
	  </div>
	</div>
  </div>
  
  </nav>
<script>
    import "../app.css";
	import Header from "$lib/Header.svelte";
</script>
<div class="app">
	<Header/>
    <main class='mx-5 xl:mx-32'>
	
        <slot />
    </main>
</div>

<style>
    .app{
        display: flex;
		flex-direction: column;
		min-height: 100vh;
		direction: rtl;
		background-color: #fff0e1;
    }
    main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 90rem;
		
		box-sizing: border-box;
    }

</style>
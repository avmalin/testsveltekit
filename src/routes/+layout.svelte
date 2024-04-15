<script>
    import "../app.css";
	import Header from "$lib/Header.svelte";
</script>
<div class="app">
	<Header/>
    <main >
	
        <slot/>
    </main>
</div>

<style>
    .app{
        display: flex;
		flex-direction: column;
		min-height: 100vh;
		direction: rtl;
    }
    main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 90rem;
		margin: 0 auto;
		box-sizing: border-box;
    }

</style>
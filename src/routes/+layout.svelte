<script>
    import "../app.css";
	import Header from "$lib/Header.svelte";
	import screen from '$lib/assets/screen.png'
</script>
<svelte:head>
    <title>האתר של הרב יניב</title>
    <meta name="description" content='ברוכים הבאים לאתר של הרב יניב - מורה לתנ"ך במשרד החינוך. כאן תמצאו חומרים לשיעורים, מצגות ומשחקים.'>
    <meta name="keywords" content='חומרים למורים לתנ"ך, שיעורי תנ"ך, משרד החינוך תנ"ך, הרב יניב ששון,מורה לתנך'>
</svelte:head>
<div class="app px-2 md:px-24 ">
	<Header/>
	

    <main >
		
	
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
		background-image: url(../lib//assets/screen.png);
		background-size: cover;
		background-position: center;
		
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
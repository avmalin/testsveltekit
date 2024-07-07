<script>
    import Card from "$lib/cardSubject.svelte";
    import kipaImg from '$lib/assets/kipaImg.webp'
    import childImg from '$lib/assets/childImg.png'
    import {rule} from "$lib/index.js"
    import ballon from '$lib/assets/ballon.png'
    import {onMount} from 'svelte'
    import whiteCircle from '$lib/assets/whiteCircle.svg'
    export let data
    
    let r = data
   
    
</script>
<h1 class='text-3xl sm:text-5xl lg:text-6xl xl:text-7xl  ml-auto mr-auto font-afarsek'>ברוכים הבאים לאתר של הרב יניב, למידה מהנה!</h1>
<div class='flex flex-col-reverse sm:mt-5 md:mt-20 xl:mt-32 md:flex-row justify-center items-center '>
<div class="flex flex-col sm:flex-row sm:mt-5 ">
    {#each rule as r}
        <Card {...r} />
    {/each}
</div>
<div class='w-3/12 ml-44 min-w-44    sm:w-3/12 flex lg:mr-20  '>
    <img class=' h-1/6 xl:-me-10 mt-3 ' src={ballon} alt='חומרי הוראה'/>
    <img class='' src={childImg} alt='האתר של הרב יניב'/>
    
</div>
</div>
<h1 class='hidden'>תנ"ך, תנך, חומרים לתנך, חומרים לתנ"ך,הרב יניב ששון, בראשית</h1>
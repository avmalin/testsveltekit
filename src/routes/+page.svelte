<script>
    import Card from "$lib/cardSubject.svelte";
    import kipaImg from '$lib/assets/kipaImg.webp'
    import childImg from '$lib/assets/childImg.png'
    import {rule} from "$lib/index.js"
    import ballon from '$lib/assets/ballon.png'
    import {onMount} from 'svelte'
    export let data
    let r = data
   
    
</script>
<div class='flex flex-col'>
<div class="flex flex-col md:flex-row md:w-2/4 ">
    {#each rule as r}
        <Card {...r} />
    {/each}
</div>
<div class='w-3/12 ml-24  sm:w-3/12 flex mr-auto xl:ml-96'>
    <img class=' h-1/6 xl:-me-10 mt-3 ' src={ballon} alt='ballon'/>
    <img class='' src={childImg} alt='childimg'/>
    
</div>
</div>
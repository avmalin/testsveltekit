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

<div class='flex flex-col-reverse sm:flex-col justify-center items-center '>
<div class="flex flex-col sm:flex-row md:ml-72 ">
    {#each rule as r}
        <Card {...r} />
    {/each}
</div>
<div class='w-3/12 ml-44 min-w-44    sm:w-3/12 flex sm:mr-auto xl:ml-96'>
    <img class=' h-1/6 xl:-me-10 mt-3 ' src={ballon} alt='ballon'/>
    <img class='' src={childImg} alt='childimg'/>
    
</div>
</div>
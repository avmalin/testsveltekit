<script>
    import Card from "$lib/cardSubject.svelte";
    import {rule} from "$lib/index.js"
    import {onMount} from 'svelte'
    export let data
   
    
</script>
<h1>ברוך הבא לאתר</h1>
<p class="text-lg">כותרת משנה, לשנות למה שרוצים{data}</p>
<div class="flex flex-row justify-center mt-20 w-full flex-wrap">
    {#each rule as r}
        <Card {...r} />
    {/each}
</div>

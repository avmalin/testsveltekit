<script>
    /** @type {import('./$types').PageData} */

    import Card from "$lib/cardSubject.svelte";
    import { name } from "$lib/cachedData.json";

 
    console.log('test3')
    //console.log(list)
</script>
<h1>מורה ברוך הבא לאתר</h1>
<p class="text-lg">כותרת משנה, לשנות למה שרוצים</p>
<div class="flex flex-row w-full flex-wrap">
    
    {#each name as n}
        <Card name={n.name} link={n.webViewLink} />
    {/each}
</div>
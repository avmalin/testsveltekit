<script>
	import { subjects } from "$lib";
    import Card from "$lib/cardSubject.svelte";
    export let data
    
</script>
<h1>ברוך הבא לאתר</h1>
<p class="text-lg">כותרת משנה, לשנות למה שרוצים</p>
<div class="flex flex-row w-full flex-wrap">
    {#each data.namefile??"" as n}
        <Card name={n.name} link={n.webViewLink} />
    {/each}
</div>
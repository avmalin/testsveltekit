<script>
	import { subjects } from "$lib";
    import Card from "$lib/cardSubject.svelte";
    
</script>
<h1>ברוך הבא לאתר</h1>
<p class="text-lg">כותרת משנה, לשנות למה שרוצים</p>
<div class="flex flex-row w-full flex-wrap">
    {#each subjects as sub}
        <Card {...sub}/>
    {/each}
</div>
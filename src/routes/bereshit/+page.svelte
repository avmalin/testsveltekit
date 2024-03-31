<script>
    import Card from "$lib/cardFile.svelte"
    import {bereshitFile} from "$lib/index"
</script>
<h1>הגעת לספר בראשית!</h1>

{#each bereshitFile as sub}
    <Card {...sub}/>
{/each}
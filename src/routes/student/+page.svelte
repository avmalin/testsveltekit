<script lang="ts">
    import CardClass from "$lib/cardClass.svelte";
	import CardSubject from "$lib/cardSubject.svelte";
	
    export let data
    

    let classes = data.classes
    let isChoosen = false
    console.log(classes)
     let ChoosenClass:{
        id:any;
        created_at:any;
        header:any;
        subHeader:any;
        text:any;
        linkText:any;
        link:any; }


	function handle_click(studentClass: any) {
		ChoosenClass = studentClass
        isChoosen=true
        console.log('clicked')
	}
</script>
{#if (isChoosen == false)}
    {#each classes??[] as studentClass}
        <CardSubject name = {studentClass.className} on:click={()=>{handle_click(studentClass)}}/>
    {/each}
{:else}
    <button on:click={()=>{isChoosen=false}}>חזור</button>
    <CardClass {...ChoosenClass}/>
    
{/if}


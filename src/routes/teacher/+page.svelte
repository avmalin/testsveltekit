<script lang="ts">
    /** @type {import('./$types').PageData} */
    interface FileObject {
    webViewLink: string;
    id: string;
    name: string;
}

// Define the type for filesName object
interface FilesName {
    [key: string]: FileObject[];
}

    import CardSubject from "$lib/cardSubject.svelte";
    import CardFile from "$lib/cardFile.svelte"
    import { foldersName } from "$lib/cachedData.json";
    import {filesName as filesNameData} from '$lib/cachedData.json'
    let flag = 'folders' 
    const filesName:FilesName = filesNameData
    let dataViewed = filesName[0]
    console.log('test4')
    //console.log(list)

	function handleClick(n: string) {
		if (n != '')
        {
            dataViewed = filesName[n]
            flag = 'files'
        }
        console.log( "clicked")
	}
</script>
<h1>מורה ברוך הבא לאתר</h1>
<p class="text-lg">כותרת משנה, לשנות למה שרוצים</p>
<div class="flex flex-row w-full flex-wrap ">
    
    {#if (flag === 'folders')}   
        {#each foldersName as n}
            <CardSubject name={n.name} on:click={()=>handleClick(n.id)} />
        {/each}
    {:else}
        <button on:click={()=>{flag="folders"}}>חזור</button>
        {#each dataViewed as n}
            <CardFile name={n.name} link={n.webViewLink}  />
        {/each}
    {/if}
</div>
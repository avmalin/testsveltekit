<script lang="ts" >
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
	import CardClass from "$lib/cardClass.svelte";
    let flag = 'folders' 
    export let data
    let files: { 
			id: any; fileName: any; fileLink: any;
		}[] =[]
    let folders= data.folders
  

    function handleClick(teachersFiles: { id: any; fileName: any; fileLink: any;}[])
    {
        files = teachersFiles ?? []
        flag = 'files'
        console.log('clicked')
        }


</script>
<h1>מורה ברוך הבא לאתר</h1>
<p class="text-lg">כותרת משנה, לשנות למה שרוצים</p>
<div class="flex flex-row w-full flex-wrap ">
    

    <p>h2</p>
    {#if (flag === 'folders')}
        {#each folders as folder }
            <CardSubject name= {folder.folderName} on:click={()=>handleClick(folder.teachersFiles)}/>
        {/each}
    {:else}
        <button on:click={()=>{flag="folders"}}>חזור</button>
        {#each files as file}
                <CardFile name={file.fileName} link={file.fileLink}/>
        {/each}
    {/if}
    <p>hi</p>
</div>
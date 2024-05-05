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
    import pencilImg from '$lib/assets/pencilImg.webp'
    import teachetText from '$lib/assets/techerText.png'
    import perekText from '$lib/assets/perekText.png'
	import pencilImg2 from '$lib/assets/pencilImg2.webp'
	
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

<div class='flex flex-col'>
    

   
    {#if (flag === 'folders')}
        <div class='flex flex-row'>
        
            <img class='w-auto h-56' src={teachetText} alt ='teacher staff'/>
            <img class='w-11/12'src={pencilImg} alt='pencil img'/>
        </div>
        <div class='flex -mt-72'>
            {#each folders as folder }
                <CardSubject name= {folder.folderName} on:click={()=>handleClick(folder.teachersFiles)}/>
            {/each}
        </div>
    {:else}
        <div>
            <div class='flex flex-row'>
                <img class='w-auto h-56' src={perekText} alt ='perek staff'/>
                <img class='ms-20 w-1/12'src={pencilImg2} alt='pencil img'/>
                <button on:click={()=>{flag="folders"}}>חזור</button>
            </div>
            <div class='mt-10'>
            {#each files as file}
                    <CardFile name={file.fileName} link={file.fileLink}/>
            {/each}
            </div>
        </div>
    {/if}

</div>
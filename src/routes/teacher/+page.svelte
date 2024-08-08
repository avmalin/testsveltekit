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
			id: any; fileName: any; fileLink: any; priority:any;
		}[] =[]
    let books= data.folders
  

    function handleClick(teachersFiles: { id: any; fileName: any; fileLink: any; priority:any;}[])
    {
        files = teachersFiles ?? []
        flag = 'files'
        console.log('clicked')
        }

    $: sortedFiles = files.slice().sort((a,b)=>{
        if (a.priority < 0 && b.priority >= 0) return 1;  // Move negatives to the end
        if (a.priority >= 0 && b.priority < 0) return -1; // Keep positives in the front
        return a.priority - b.priority;  // Sort remaining numbers in ascending order
    });
</script>

<div class='flex flex-col'>
    

   
    {#if (flag === 'folders')}
        <div class='flex flex-row '>
        
            <img class=' h-32' src={teachetText} alt ='teacher staff'/>
            <img class='fixed lg:absolute lg:top-20 lg:left-5 lg:w-2/6 lg:z-0 left-0 z-10 sm:left-2 w-32 bottom-8 'src={pencilImg} alt='pencil img'/>
        </div>
        <div class='flex  flex-wrap justify-center items-center lg:mt-20'>
            <!-- choose book -->
            {#each books as book }
                <CardFile name= {book.folderName} on:click={()=>handleClick(book.teachersFiles)}/>
            {/each}
        </div>
    {:else}
        <div>
            <div class='flex flex-row'>
                <!-- <img class='w-auto h-56' src={perekText} alt ='perek staff'/> -->
                <h1 class='font-chasamba text-4xl md:text-7xl lg:text-8xl xl:text-9xl'>בחר יחידת לימוד</h1>
                <img class='ms-10 w-1/12'src={pencilImg2} alt='pencil img'/>
                <button on:click={()=>{flag="folders"}}>חזור</button>
            </div>
            <div class='mt-10'>
                <!-- choose chapter -->
            {#each sortedFiles as file}
                    <CardFile name={file.fileName} link={file.fileLink}/>
            {/each}
            </div>
        </div>
    {/if}

</div>
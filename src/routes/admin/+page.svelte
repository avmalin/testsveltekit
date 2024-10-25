<script lang="ts">
    import CardClass from '$lib/cardClass.svelte';
    import {page} from '$app/stores'
    import editSvg from '$lib/assets/edit-3-svgrepo-com.svg'
    import deleteSvg from '$lib/assets/delete-svgrepo-com.svg'
	import exitSvg from '$lib/assets/exit.svg'
    import addSvg from '$lib/assets/add-plus-circle-svgrepo-com.svg'
	

    export let form
    export let data
    let pass=''
    let addClass=false
    let addBook=false
    let isAdd = false
    
    
    // init for the data from DB
    let classes = data.classes
    let books = data.books
    //init structor for admin data
    let ChoosenClass:{
        id:any; 
        className:any;
        created_at:any;
        header:any;
        subHeader:any;
        text:any;
        linkText:any;
        linK:any; }={}

    let choosenBook: {
    id:any;
    body:{
    id: any;
    fileName: any;
    fileLink: any;
    priority: any;
    state:any;
    isEdit:any;}[]}={id:'',body:[]}

    let editBook:{id: any;
    fileName: any;
    fileLink: any;
    priority:any;}[]=[]

    let deleteFromBook:{
        id:any;}[]=[]
    
    let removeBox = false //for openning the removing class or book box
    let removed :{id:any; name:any; type:any }
    // object who present the chapter in the book
    let addToBook:{
        parentID:any;
        fileName:any;
        fileLink:any;
        priority:any;}[]=[]
    // object who present the new chapter we add
    let addChapter:{
        fileName:any;
        fileLink:any;
        priority:any;}={}
    let bookName:string
    console.log($page.data.isAuth)


	function handle_delete_chapter(chapter: { id: any; fileName: any; fileLink: any; }) {
        deleteFromBook.push({id:chapter.id})
	}


	function handle_edit(chapter: { id: any; fileName: any; fileLink: any; priority:any; }): any {
        editBook.push({fileName:chapter.fileName,fileLink:chapter.fileLink,id:chapter.id,priority:chapter.priority})	
	}


	async function handle_update() {
        let body={
            action:'update',
            addToBook,
            editBook,
            deleteFromBook
        }
        try{
            const response = await fetch('/admin',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(body)
            });
            
            location.reload();
        }
        catch(error){
            console.error('ERror:',error)
        }
	}


	function handle_abort(): any {
		throw new Error('Function not implemented.');
	}


	function handle_add() {
		addToBook.push({
            parentID:choosenBook.id,
            fileLink:addChapter.fileLink,
            fileName:addChapter.fileName,
            priority:addChapter.priority})
        choosenBook.body.push({
            id:'',
            fileName:addChapter.fileName,
            fileLink:addChapter.fileLink,
            priority:addChapter.priority,
            state:'new',
            isEdit:''})
        choosenBook = choosenBook
        console.log('add to book',addToBook)
	}


	async function handle_new_book() {
        try{
            const response = await fetch('/admin',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({action:'addBook',bookName})
            });
            
            location.reload();
        }
        catch(error){
            console.error('ERror:',error)
        }
	
	}

    $:  sortedChapter = choosenBook.body!=null? choosenBook.body.slice().sort((a,b)=>{
        if (a.priority < 0 && b.priority >= 0) return 1;  // Move negatives to the end
        if (a.priority >= 0 && b.priority < 0) return -1; // Keep positives in the front
        return a.priority - b.priority;  // Sort remaining numbers in ascending order
    }):[]

    let newClassesOnly = classes.filter((obj) => obj.id > 6); //remove the basic classes


	function handleChangeBook   () {
        if (!choosenBook){
            addBook = true
        }
        else{
            addBook=false
        }
		
	}
    function handleChangeclass   () {
        if (!ChoosenClass){
            addClass = true
            
        }
        else{
            addClass=false
            
        }
		
	}


	async function handle_remove() {
		let body={
            action:'remove',
            id:removed.id,
            type:removed.type
        }
        try{
            const response = await fetch('/admin',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(body)
            });
            
            location.reload();
        }
        catch(error){
            console.error('ERror:',error)
        }
	}
</script>
<div class='flex mt-24'>
    <div class = 'items-center flex justify-center '>
        <div class = '  p-10 flex flex-col items-center  justify-centerm rounded-lg w-fit'>
            {#if ((!data.isAuth))}
                <!-- show LOG-IN box for admin -->
                <form class='flex flex-col {$$props.class}'  method="post" action="?/authPass">
                    <input class="rounded-md p-1" bind:value={pass} name="password" type="password" placeholder="הכנס סיסמא"/>
                    <button class='bg-white mt-3 p-1 px-3 rounded-md hover:bg-gray-300'>שלח</button>
                </form>
                {#if (form?.worngPass)}
                <!-- if enter wrong password -->
                    <p class='text-red-500'>סיסמא שגויה! נסה שנית</p>
                {/if}
                

            {:else}
            <div class='flex space-x-20' >
                <div>
                    <!-- Form for edit student's class -->
                    <form method="post"  class='flex flex-col ' action='?/editClass' >
                        <label for="class"> בחר כיתה:</label>
                        <select name="class" class='py-3 ps-2 bg-white rounded-md' bind:value={ChoosenClass} on:change={handleChangeclass}>
                            {#each classes as studentClass}
                                <option on:click={()=>{addClass=false}}  value={studentClass}>{studentClass.className} </option>
                            {/each}
                            <option on:click={()=>{}} value='' >הוסף כיתה</option>
                        </select>
                        {#if (addClass)}
                        <label for='className'>שם כיתה:</label>
                        <input name='className' bind:value={ChoosenClass.className} type="text"/>
                        {/if}
                        <label for='header'>כותרת:</label>
                        <input name='header' bind:value={ChoosenClass.header} type="text"/>

                        <label for='subHeader'>כותרת משנה:</label>
                        <input name='subHeader'bind:value={ChoosenClass.subHeader} type="text"/>    

                        <label for='text'>טקסט:</label>            
                        <textarea class="resize" name="text" bind:value={ChoosenClass.text}></textarea>
                        
                        <label for='linkText'>כיתוב לקישור:</label>
                        <input name='linkText'bind:value={ChoosenClass.linkText} type="text"/>    
                        
                        <label for='link'>קישור</label>
                        <textarea class='resize-none' name='link' bind:value={ChoosenClass.linK} />    

                        
                        <input name="id" class='hidden' bind:value={ChoosenClass.id}/> 
                        {#if (addClass)}
                            <button formaction='?/addClass' class='mt-3 py-2.5 rounded-md bg-slate-400 hover:bg-slate-500 w-full m-auto'>הוסף</button>
                        {:else}
                            <button class='mt-3 py-2.5 rounded-md bg-slate-400 hover:bg-slate-500 w-full m-auto'>שלח</button>
                        {/if}
                        {#if (form?.error)}
                            <p style='direction:ltr;' class='mt-3 ms-1 text-red-600'>{form?.error}</p>
                        {/if}
                    </form>
                    <!-- form to Delete class or book -->
                    <div class='mt-5 ps-10 flex flex-col'>
                        <label for='remove'> בחר ספר או כיתה שברצונך למחוק:</label>
                        <select name="remove" id="remove" class='py-3 ps-2 bg-white rounded-md' bind:value={removed}>
                            {#each books as book }
                                <option value={{id:book.id,name:book.folderName,type:'book'}}>{book.folderName}</option>
                            {/each}
                            <hr>
                            {#each newClassesOnly as studentClass }
                                <option value={{id:studentClass.id,name:studentClass.className,type:'class' }}>{studentClass.className}</option>
                            {/each}
                        </select>
                        <button on:click={()=>{removeBox=true}} class='mt-3 py-2.5 rounded-md bg-red-500 hover:bg-red-400 w-full m-auto'>מחק</button>
                        
                    </div>
                </div>
                {#if removeBox}

                    <div class='absolute right-1/2 top-1/2 z-10 bg-white border-4 border-red-500 py-1 shadow-2xl rounded-xl translate-x-1/2'>                        
                        <button on:click={()=>{removeBox=false}} class='w-7 '><img src={exitSvg} alt='exit'/></button>
                        <p class='text-xl px-10'>האם אתה בטוח שברצונך למחוק את: </p>
                        <p class = 'text-2xl text-center'>{removed.name}</p>
                        
                        <div class='flex justify-center'>                                                                                    
                            <button on:click={()=>{handle_remove(); removeBox=false}} class=' mt-3 border text-xl rounded-lg p-1 px-4 bg-red-500'>מחק</button>
                        </div>                                                                                
                    </div>                                                    
                {/if}
                <div class=' ps-10 flex flex-col '>
                    <!-- Form for edit teacher's books -->                
                    <label for="class"> בחר ספר:</label>
                    <select name="class" class='py-3 ps-2 bg-white rounded-md' bind:value={choosenBook} on:change={handleChangeBook}>
                        {#each books as book (book.id)}
                            <option on:click={()=>{addBook=false}}  value={{id:book.id,body:book.teachersFiles??[]}}>{book.folderName} </option>
                        {/each}
                        <option on:click={()=>{}} value='' >הוסף ספר</option>
                    </select>
                    {#if (addBook)}
                        <label for='className'>שם ספר:</label>
                        <input name='className' bind:value={bookName} type="text"/>
                        <button on:click={()=>handle_new_book()}>הוסף</button>
                    {/if}
                    <table class='mt-5'>
                        <thead>
                            <tr>
                                <th>שם</th>
                                <th>קישור</th>
                                <th>קדימות</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {#each sortedChapter as chapter }
                            <tr class={chapter.state=='deleted'?'line-through pointer-events-none':''}>
                                <td class=' {chapter.state=='edited'?'text-gray-400':''}{chapter.state=='new'?'text-blue-400':''}'>{chapter.fileName}</td>
                                <td class='{chapter.state=='edited'?'text-gray-400':''}{chapter.state=='new'?'text-blue-400':''}' >{chapter.fileLink}</td>
                                <td style="direction: ltr; text-align: right;" class='{chapter.state=='edited'?'text-gray-400':''}{chapter.state=='new'?'text-blue-400':''}' >{chapter.priority}</td>
                                <td><button on:click={()=>{chapter.isEdit=true;console.log('click')}} class='w-5 mt-1 {chapter.state=='new'?'pointer-events-none':''} ' ><img src={editSvg} alt='edit icon'/></button></td>  
                                <td><button on:click={()=>{handle_delete_chapter(chapter);chapter.state='deleted'}} class='w-5 mt-1'><img src={deleteSvg} alt='delete icon'/></button></td>
                                {#if (chapter.isEdit==true)}
                                <!-- edit chapter -->
                                <div class='relative flex flex-col '>                                   
                                    <form class='absolute right-10 top-0 z-10 bg-gray-200 p-4 shadow-lg rounded-xl'>
                                        <!--<button on:click={()=>{chapter.isEdit=false}} class='w-5'><img src={exitSvg} alt='exit'/></button>-->
                                        <label for='fileName'>שם פרק:</label>
                                        <input name='fileName' bind:value={chapter.fileName} type="text"/>
                                        <label for='fileLink'>קישור:</label>
                                        <input name='fileLink' bind:value={chapter.fileLink} type="text"/>
                                        <label for='fileLink'>קדימות:</label>
                                        <input name='fileLink' bind:value={chapter.priority} type="text"/>
                                        <div class='flex justify-center'>                                        
                                            <button on:click={()=>{handle_edit(chapter); chapter.isEdit=false;chapter.state='edited'}}
                                                 class=' mt-3 border border-gray-400 rounded-lg p-0.5 px-2 bg-slate-400'>ערוך</button>
                                        </div>                                                                                
                                    </form>
                                </div>
                                {/if}
                            </tr>
                            {/each}
                            {#each addToBook as chapter}
                                <tr class='text-blue-200'>
                                    <td>{chapter.fileName}</td>
                                    <td>{chapter.fileLink}</td>
                                    <td>{chapter.priority}</td>
                                </tr>
                            {/each}
                            
                        </tbody>
                       
                    </table>
                    {#if (choosenBook.body && choosenBook.body.length>=0)}
                        <div class=' -mt-2 flex justify-center'>
                            <button on:click={()=>{isAdd=true}} class='w-6'><img src={addSvg} alt='add icon'/></button>
                        </div>
                        {#if (isAdd)}
                        <!-- add new chapter -->
                            <div class='relative flex flex-col'>                                    
                                <div class='absolute right-10 top-0 z-10 bg-gray-200 p-4 shadow-lg rounded-xl'>
                                    <button on:click={()=>{isAdd=false}} class='w-5'><img src={exitSvg} alt='exit'/></button>
                                    <label for='fileName'>שם פרק:</label>
                                    <input name='fileName' bind:value={addChapter.fileName} type="text"/>
                                    <label for='fileLink'>קישור:</label>
                                    <input name='fileLink' bind:value={addChapter.fileLink} type="text"/>
                                    <label for='fileLink'>קדימות:</label>
                                    <input name='fileLink' bind:value={addChapter.priority} type="text"/>
                                    <div class='flex justify-center'>                                                                                    
                                        <button on:click={()=>{handle_add(); isAdd=false}} class=' mt-3 border border-gray-400 rounded-lg p-0.5 px-2 bg-slate-400'>הוסף</button>
                                    </div>                                                                                
                                </div>
                            </div>
                        {/if}
                    {/if}
                    <div class='mt-5'>
                        <button on:click={()=>handle_update()} class='bg-green-400 py-1 px-5 rounded-lg text-xl'>עדכן</button>
                        <button on:click={()=>handle_abort()} class='bg-red-400 py-1 px-5 rounded-lg text-xl'>בטל</button>
                    </div>                                                                    
                </div>
            </div>
            {/if}
        </div>
    </div>
    <!-- show how the change will be shown-->
    {#if (ChoosenClass.id != null )}
        <div class='ms-32 mt-10'>
            <h1>לדוגמא:</h1>
            <CardClass {...ChoosenClass}/>
        </div>
    {/if}
   
    {#if (form?.message)}
    <div draggable="true" class= 'bg-green-100 flex  p-3 px-10 shadow-md translate-x-4 rounded-lg h-fit'>
        <p>{form?.message}</p>
        <button class='end-0 top-0 m-0.5 fixed  w-5' on:click={()=>{form.message=false}}>
            <img src={exitSvg} alt='exit'/>
        </button>
    </div>

    {/if}
    {#if (form?.error)}
    <div draggable="true" class= 'bg-red-100 flex  p-3 px-10 shadow-md translate-x-4 rounded-lg h-fit'>
        <p>{form?.error}</p>
        <button class='end-0 top-0 m-0.5 fixed  w-5' on:click={()=>{form.error=false}}>
            <img src={exitSvg} alt='exit'/>
        </button>
    </div>

    {/if}
</div>

<style>
	table, th, td {
		border: 1px solid black;
		border-collapse: collapse;
		margin-bottom: 10px;
	}
</style>
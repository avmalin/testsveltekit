<script lang="ts">
    import CardClass from '$lib/cardClass.svelte';
	import { error } from '@sveltejs/kit';
    import {writable} from 'svelte/store'
    import {page} from '$app/stores'
	
    export let form
    export let data
    let pass=''
    let addClass=false
    
  
    let classes = data.classes
    let ChoosenClass:{
        id:any;
        className:any;
        created_at:any;
        header:any;
        subHeader:any;
        text:any;
        linkText:any;
        linK:any; }={}
    
    console.log($page.data.isAuth)
    

	
</script>
<div class='flex mt-24'>
    <div class = 'items-center flex justify-center '>
        <div class = 'bg-slate-200  p-10 flex flex-col items-center  justify-centerm rounded-lg w-fit'>
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
            <!-- Form for edit student's class -->
                <form method="post"  class='flex flex-col ' action='?/editClass' >
                    <label for="class"> בחר כיתה:</label>
                    <select name="class" class='py-3 ps-2 bg-white rounded-md' bind:value={ChoosenClass}>
                        {#each classes as studentClass}
                            <option on:click={()=>{addClass=false}}  value={studentClass}>{studentClass.className} </option>
                        {/each}
                        <!--<option on:click={()=>{addClass=true}} >הוסף כיתה</option>-->
                    </select>
                    {#if (addClass)}
                    <lable for='className'>שם כיתה:</lable>
                    <input name='className' bind:value={ChoosenClass.className} type="text"/>
                    {/if}
                    <lable for='header'>כותרת:</lable>
                    <input name='header' bind:value={ChoosenClass.header} type="text"/>

                    <lable for='subHeader'>כותרת משנה:</lable>
                    <input name='subHeader'bind:value={ChoosenClass.subHeader} type="text"/>    

                    <lable for='text'>טקסט:</lable>            
                    <textarea class="resize" name="text" bind:value={ChoosenClass.text}></textarea>
                    
                    <lable for='linkText'>כיתוב לקישור:</lable>
                    <input name='linkText'bind:value={ChoosenClass.linkText} type="text"/>    
                    
                    <lable for='link'>קישור</lable>
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
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5"></circle> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
        </button>
    </div>

    {/if}
    {#if (form?.error)}
    <div draggable="true" class= 'bg-red-100 flex  p-3 px-10 shadow-md translate-x-4 rounded-lg h-fit'>
        <p>{form?.error}</p>
        <button class='end-0 top-0 m-0.5 fixed  w-5' on:click={()=>{form.error=false}}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5"></circle> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
        </button>
    </div>

    {/if}
</div>
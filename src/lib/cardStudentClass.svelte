<script>
    export let name ="None";
    export let link ="";
    import classImg from '$lib/assets/classImg.svg'
    
</script>

<a on:click class="relative inline-block mb-10 w-1/2 mx-auto md:mx-3" href={link}>
    <img alt="תמונה גליון" src={classImg}/>
    <h  class="p-10 font-afarsek text-xl xl:text-7xl absolute inset-0 flex justify-center items-center">{name}</h>
    


    
</a> 
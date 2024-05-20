<script>
    export let name ="None";
    export let link ="";
    import whiteCircle from '$lib/assets/whiteCircle.svg'
    
</script>

<a on:click class="relative inline-block mb-10 w-2/5 h mx-4 sm:w-56 " href={link}>
    <img  alt="white circle" src={whiteCircle}/>
    <h  class="p-4 font-afarsek text-4xl sm:text-6xl absolute inset-0 flex justify-center items-center">{name}</h>
    

</a> 
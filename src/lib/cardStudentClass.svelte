<script>
    export let name ="None";
    export let link ="";
    import classImg from '$lib/assets/classImg.svg'

    
</script>

<a on:click class="relative inline-block mb-10 w-60 h-60" href={link}>
    <img  alt="white circle" src={classImg}/>
    <h  class="p-10 font-afarsek text-xl xl:text-6xl absolute inset-0 flex justify-center items-center">{name}</h>
    



    
</a> 
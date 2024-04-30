<script>
    export let className = ''
    export let header = 'כיתה א'
    export let subHeader = ''
    export let text = ''
    export let linkText = ''
    export let link = ''
</script>
<div class='flex flex-col w-4/5'>
    <h1 class="text-6xl">{header}</h1>
    <h2 class="text-3xl p-3">{subHeader}</h2>
    <p class="mt-11 p-6  bg-white rounded-xl text-xl">{text}</p>
    <a class = "flex items-center justify-center " href={link} target="_blank">
    <button class="bg-slate-200 p-4 mx-auto m-10 rounded-xl hover:bg-gray-400">{linkText}</button>
    </a>
</div>
<script>
    export let className = ''
    export let header = 'כיתה א'
    export let subHeader = ''
    export let text = ''
    export let linkText = ''
    export let link = ''
</script>

<h1 class="text-6xl">{header}</h1>
<h2 class="text-3xl p-3">{subHeader}</h2>
<p class="mt-11 p-6 w-4/5  bg-white rounded-xl text-xl">{text}</p>
<a class = "flex items-center justify-center" href={link}>
<button class="bg-slate-200 p-4 ms-20 m-10 rounded-xl">{linkText}</button>
</a>
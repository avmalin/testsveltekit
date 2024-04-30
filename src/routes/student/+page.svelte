<script lang="ts">
	import CardClass from '$lib/cardClass.svelte';
	import CardSubject from '$lib/cardSubject.svelte';
	import studentChild from '$lib/assets/studentChild1.png';
	import kita1 from '$lib/assets/kita1Img.png';
	import kita2 from '$lib/assets/kita2Img.png';
	import kita3 from '$lib/assets/kita3Img.png';
	import kita4 from '$lib/assets/kita4Img.png';
	import kita5 from '$lib/assets/kita5Img.png';
	import kita6 from '$lib/assets/kita6Img.png';

	export let data;

	let classes = data.classes;
	let isChoosen = false;
	console.log(classes);
	let ChoosenClass: {
		id: any;
		created_at: any;
		header: any;
		subHeader: any;
		text: any;
		linkText: any;
		link: any;
	};

	function handle_click(studentClass: any) {
		ChoosenClass = studentClass;
		isChoosen = true;
		console.log('clicked');
	}

	function hundelclik(id: number) {
		ChoosenClass = classes.find(item=>item.id == id);
		console.log(ChoosenClass);
		isChoosen = true;
		console.log('clicked');
	}
</script>

<div class='w-full'>
	{#if isChoosen == false}
		<img  class='-mt-16' src={studentChild} alt="studentChild" />

		<div class="m-10 flex content-between justify-between ">
			<button
				on:click={() => {
					hundelclik(1);
				}}
			>
				<img src={kita1} alt="kita1" />
			</button>
			<button
				on:click={() => {
					hundelclik(2);
				}}
			>
				<img src={kita2} alt="kita2" />
			</button>
			<button
				on:click={() => {
					hundelclik(3);
				}}
			>
				<img src={kita3} alt="kita3" />
			</button>
			<button
				on:click={() => {
					hundelclik(4);
				}}
			>
				<img src={kita4} alt="kita4" />
			</button>
			<button
				on:click={() => {
					hundelclik(5);
				}}
			>
				<img src={kita5} alt="kita5" />
			</button>
			<button
				on:click={() => {
					hundelclik(6);
				}}
			>
				<img src={kita6} alt="kita6" />
			</button>
		</div>

		<!--{#each classes ?? [] as studentClass}
			<CardSubject 
				name={studentClass.className}
				on:click={() => {
					handle_click(studentClass);
				}}
			/>
		{/each}-->
	{:else}
		<button
			on:click={() => {
				isChoosen = false;
			}}>חזור</button>
		<CardClass {...ChoosenClass} />
	{/if}
</div>

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
	import CardFile2 from '$lib/cardFile2.svelte';

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

	let newClassesOnly = classes.filter((obj) => obj.id > 6); //remove the basic classes

	function handle_click(id: number) {
		ChoosenClass = classes.find((item) => item.id == id);
		console.log(id, ChoosenClass);
		isChoosen = true;
		console.log('clicked');
	}
</script>

<div class="w-full">
	{#if isChoosen == false}
		<img
			class="fixed sm:static lg:h-72 2xl:h-auto sm:-mt-16"
			src={studentChild}
			alt="studentChild"
		/>

		<div
			class="mt-40 sm:-mt-10 sm:space-x-12 sm :spa ce-y-0 sm:flex-row flex-wrap justify-center flex flex-col items-center space-y-10"
		>
			<button
				class="sm:me-12 sm:mt-10"
				on:click={() => {
					handle_click(1);
				}}
			>
				<img src={kita1} alt="כיתה א" />
			</button>
			<button
				on:click={() => {
					handle_click(2);
				}}
			>
				<img src={kita2} alt="כיתה ב" />
			</button>
			<button
				on:click={() => {
					handle_click(3);
				}}
			>
				<img src={kita3} alt="כיתה ג" />
			</button>
			<button
				on:click={() => {
					handle_click(4);
				}}
			>
				<img src={kita4} alt="כיתה ד" />
			</button>
			<button
				on:click={() => {
					handle_click(5);
				}}
			>
				<img src={kita5} alt="כיתה ה" />
			</button>
			<button
				on:click={() => {
					handle_click(6);
				}}
			>
				<img src={kita6} alt="כיתה ו" />
			</button>

			{#each newClassesOnly ?? [] as studentClass}
				<div class=" justify-center mx-auto item-center">
					<CardFile2
						name={studentClass.className}
						on:click={() => {
							handle_click(studentClass.id);
						}}
					/>
				</div>
			{/each}
		</div>
	{:else}
		<button
			on:click={() => {
				isChoosen = false;
			}}>חזור</button
		>
		<CardClass {...ChoosenClass} />
	{/if}
</div>

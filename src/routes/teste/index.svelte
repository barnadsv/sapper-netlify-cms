<script context="module">
	export function preload() {
		return this.fetch(`teste.json`).then(r => r.json()).then(testes => {
			return { testes };
		});
	}
</script>

<script>
    export let testes;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Teste</title>
</svelte:head>

<h1>Testes recentes</h1>

<a href="novo-teste">Novo Teste</a>

<ul>
	{#each testes as teste}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel="prefetch" href="teste/{teste.slug}">{teste.name}</a></li>
	{/each}
</ul>

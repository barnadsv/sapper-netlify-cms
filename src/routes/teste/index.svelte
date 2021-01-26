<script context="module">
	export function preload() {
		return this.fetch(`teste.json`).then(r => r.json()).then(testes => {
            return { testes };
		});
	}
</script>

<script>
    export let testes = [];
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
    <!-- {#each testes as teste}
        <li><a rel="prefetch" href="teste/{teste.slug}">{teste.name}</a></li>
    {/each} -->
</ul>

<script context="module">
	// export function preload() {
	// 	return this.fetch(`teste.json`).then(r => r.json()).then(testes => {
    //         return { testes };
	// 	});
    // }
    export function preload() {
        return this.fetch(`/.netlify/functions/todos-testes`)
        .then(r => r.json())
        .then(testes => {
            console.log(testes);
            if (testes && testes.length > 0) {
                const idObject = { id: testes.ref.id };
                const data = testes.data;
                testes = testes.map(testes => { ...idObject, ...data  });
            }
            return { testes };
            // return { testes.map(teste => teste.data) };
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
    {#each testes as teste}
        <li><a rel="prefetch" href="teste/{teste.id}">{teste.name}</a></li>
    {/each}
</ul>

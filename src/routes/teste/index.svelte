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
                testes = testes.map(teste => {
                    const id = teste['ref']['@ref']['id'];
                    const name = teste.data.name;
                    const slug = teste.data.slug;
                    const html = teste.data.html;
                    return {
                        id: id, 
                        name: name,
                        slug: slug,
                        html: html
                    };
                });
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

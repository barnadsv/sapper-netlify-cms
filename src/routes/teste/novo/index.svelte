<script>
    // import { user } from "./store.js";
    // import { onMount } from 'svelte';
    let teste = { name: '', slug: '', html: '' };

    // if (typeof fetch !== 'function') {
    //     global.fetch = require('node-fetch');
    // }

    const salvarTeste = async (data) => {
        const res = await fetch(`teste/novo.json`);
        const novoTeste = await res.json();
        console.log(novoTeste);
    }

    // onMount(async () => {
    //     // const salvarTeste = async (data) => {
    //     //     const res = await fetch('/.netlify/functions/novo-teste', {
    //     //         body: JSON.stringify(data),
    //     //         method: 'POST'
    //     //     });
    //     //     const novoTeste = await res.json();
    //     //     console.log(novoTeste);
    //     // };
    //     const salvarTeste = async (data) => {
    //         const res = await fetch(`teste/novo.json`);
    //         const novoTeste = await res.json();
    //         console.log(novoTeste);
    //     }
    // });
    

</script>
    
<style>
    .content {
        display: grid;
        grid-template-columns: 20% 80%;
        grid-column-gap: 10px;
    }
</style>
    
<h1>Teste</h1>
<form class="content">
    <label for="name">Nome</label>
    <input id="name" type="text" bind:value={teste.name} />
    <label for="slug">Slug</label>
    <input id="slug" type="text" bind:value={teste.slug} />
    <label for="html">HTML</label>
    <input id="html" type="text" bind:value={teste.html} />
</form>
<p>
    {JSON.stringify(teste, 0, 2)}
</p>
<button on:click={salvarTeste}>Salvar Teste</button>
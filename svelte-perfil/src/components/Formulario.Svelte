<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type IUsuario from '../interfaces/IUsuario.ts';
    import { buscaRespositorios, buscaUsuario } from '../requisicoes/index.js';
	import montarUsuario from '../util/montarUsuario.js';
	import Botao from '../components/Botao.svelte';
	

	let dispatch = createEventDispatcher<{
		aoAlterarUsuario: IUsuario | null;
	}>();

	let valorInput = '';
	let statusDeError: null | number = null;
    async function aoSubmeter(){
		const respostaUsuario = await buscaUsuario(valorInput);
		const respotaRepositorio = await buscaRespositorios(valorInput);

		if(respostaUsuario.ok && respotaRepositorio.ok){

			const dadosUsuarios = await respostaUsuario.json();
			const dadosRespositorios = await respotaRepositorio.json();

			dispatch('aoAlterarUsuario', montarUsuario(
				dadosUsuarios,
				dadosRespositorios
			));
			statusDeError = null;

		}else{
			statusDeError = respostaUsuario.status;
			dispatch('aoAlterarUsuario', null)
		}
	}
</script>
<form on:submit|preventDefault={aoSubmeter}>
    <input 
		type="text" 
		class="input"
		class:erro-input={statusDeError === 404}
		bind:value={valorInput} 
		placeholder="Pesquise aqui o usuario"
	>

	{#if statusDeError === 404}
		<span class="erro">Usuario não encontrado!</span>
	{/if}
    <Botao>
		Buscar
        <img src="assets/lupa.svg" alt="icone de lupa">
	</Botao>
</form>
<style>
    .input {
		padding: 15px 25px;
		width: calc(100% - 8.75rem);
		font-size: 1rem;
		border-radius: 8px;
		border: 1px solid #2e80fa;
		box-shadow: 0px 17px 52px rgba(222, 231, 247, 0.4);
		outline: 0;
	}

	.input::placeholder {
		font-family: "Roboto";
		font-style: italic;
		font-weight: 300;
		font-size: 19.5px;
		line-height: 26px;
		color: #6e8cba;
	}

	.erro-input{
		border: 1px solid #f00;
	}

	.erro {
		position: absolute;
		bottom: -25px;
		left: 0;
		font-style: italic;
		font-weight: normal;
		font-size: 16px;
		line-height: 19px;
		z-index: -1;
		color: #ff003e;
	}
</style>
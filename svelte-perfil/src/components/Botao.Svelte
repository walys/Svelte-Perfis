<div class="botao-container">
    <button 
        class="botao"  
        type="submit"
    >
        <slot></slot>
    </button>
</div>

<style>
    .botao-container {
		position: absolute;
		width: 9.625rem;
		right: 0;
		top: 0;
		bottom: 0;
		display: flex;
	}

	.botao {
		padding: 15px 24px;
		border-radius: 8px;
		border: none;
		background: #2e80fa;
		line-height: 26px;
		color: #fff;
		font-size: 22px;
		cursor: pointer;

		transition: background-color 0.2s;

		display: flex;
		align-items: center;
		gap: 13px;
	}

    .botao:hover {
		background: #4590ff;
	}
</style>
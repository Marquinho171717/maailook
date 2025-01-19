<script lang="ts">
	let { children } = $props();
    import { base } from '$app/paths';
</script>


<header>
	<div id="menu-bar">
    <nav>
	    <a href="{base}/" class="menu-link" title="home" aria-label="Voltar para pagina Inicial">
                <img src="./icons/logo.png" id="img-logo" alt="Maailook">
        </a>
	    <a href="{base}/about" class="menu-link" title="cart" aria-label="Abrir carrinho">
                <img src="./icons/cart-shopping-solid.png" id="settings-logo" alt="carrinho">
        </a>
    </nav>
    </div>
</header>

     

{@render children()}

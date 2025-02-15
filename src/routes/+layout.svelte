<script lang="ts">
	let { children } = $props();
    import { base } from '$app/paths';

    function dropdown(event:any){
        event.preventDefault();
        const dropdown = document.getElementById("myDropdown");
        if (dropdown) { // Check if dropdown is not null
        dropdown.classList.toggle("show");
        }else {
        console.error("Dropdown element not found");
        }
    }

    function carrinhoDropdown(event:any){
        event.preventDefault();
        const dropdown = document.getElementById("carrinhoDropdown");
        if (dropdown) { // Check if dropdown is not null
        dropdown.classList.toggle("show");
        }else {
        console.error("Dropdown element not found");
        }
    }
  
</script>


    <header>
        <div id="menu-bar">
        <nav>
            <a href="{base}/" class="menu-link" title="home" aria-label="Voltar para pagina Inicial">
                    <img src="./icons/logo.png" id="img-logo" alt="Maailook">
            </a>
            

            <div class="dropdown" id="menu-bar-div">
                <a href="{base}#" onmouseenter={dropdown} class="menu-link" id="user-img-link" title="user" aria-label="Usuario">
                    <img src="./icons/user.png" id="user-logo" alt="Usuario">
                </a>
                <div id="myDropdown" class="dropdown-content">
                    <a href="{base}#" onmouseleave={dropdown}>Login</a>
                    <a href="{base}#" onmouseleave={dropdown}>Pedidos</a>
                </div>
                <a href="{base}/about" onmouseenter={carrinhoDropdown} class="menu-link" title="cart" aria-label="Abrir carrinho">
                    <img src="./icons/cart-shopping-solid.png" id="settings-logo" alt="carrinho">
                </a>
                <div id="carrinhoDropdown" class="carrinho-dropdown-content">
                    <p onmouseleave={carrinhoDropdown}>Seu Carrinho está vazio</p>
                </div>
            </div>
            
        </nav>
        </div>
    </header>
  

{@render children()}

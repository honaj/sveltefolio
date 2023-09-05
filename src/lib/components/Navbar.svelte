<script lang="ts">
    import Navbutton from "$lib/components/Navbutton.svelte"

    let isOpen: Boolean = false
    const toggleMenu = () => {
        isOpen = !isOpen;
    };
</script>

<nav>
    <div class="container mx-auto px-6 py-3 flex justify-between text-orange items-center">
        <a href="/" class="text-3xl md:text-5xl font-bold text-orange">JOHAN HELLGREN</a>
        <div class="md:hidden">
            <button on:click={toggleMenu}>
                {#if isOpen}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                {:else}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                {/if}
            </button>
        </div>
        <div class="hidden md:flex items-center">
            <Navbutton name="About" address="/about"></Navbutton>
            <Navbutton name ="Projects" address="/projects"></Navbutton>
        </div>
    </div>
    {#if isOpen}
        <div class="px-2 pt-2 pb-4 md:hidden">
            <a href="/about" class="block text-3xl pl-4 text-orange font-Jost" on:click={toggleMenu}>About</a>
            <a href="/projects" class="block text-3xl pl-4 text-orange font-Jost" on:click={toggleMenu}>Projects</a>
        </div>
    {/if}
</nav> 
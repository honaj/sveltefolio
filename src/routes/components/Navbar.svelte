<script lang="ts">
    let isOpen: Boolean = false;
    const toggleMenu = () => {
        isOpen = !isOpen;
    };
</script>

<nav class="sticky top-0 backdrop-blur-3xl">
    <div class="container mx-auto px-6 py-3 flex justify-between text-orange items-center">
        <a href="/" class="text-3xl md:text-5xl font-bold text-orange ">JOHAN HELLGREN</a>
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
        <div class="hidden md:flex items-center space-x-0">
            <a href="/about" class="relative inline-block px-2 py-1 text-3xl overflow-hidden font-medium text-orange hover:text-white transition-colors duration-200 ease-linear before:absolute before:w-0 before:h-full before:bg-orange before:right-0 before:bottom-0 before:transition-all before:duration-200 before:ease-linear hover:before:w-full after:content-['About'] after:absolute after:inset-0 after:flex after:items-center after:justify-center hover:after:w-full">
                About
            </a>
            <a href="/projects" class="nav-button relative inline-block px-2 py-1 text-3xl font-medium text-orange 
    transition-colors duration-200 ease-linear
    hover:text-white before:absolute before:w-0 before:h-full 
    before:bg-orange before:left-0 before:bottom-0 before:transition-all before:duration-200 before:ease-linear 
    hover:before:w-full after:content-['Projects'] after:absolute after:inset-0 after:flex after:items-center after:justify-center hover:after:w-full">
                Projects
            </a>
        </div>
    </div>
    {#if isOpen}
        <div class="px-2 pt-2 pb-4 md:hidden">
            <a href="/about" class="block text-3xl px-2 py-1 text-orange font-Jost" on:click={toggleMenu}>About</a>
            <a href="/projects" class="block text-3xl px-2 py-1 text-orange font-Jost" on:click={toggleMenu}>Projects</a>
        </div>
    {/if}
</nav> 
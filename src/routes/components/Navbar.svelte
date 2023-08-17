<script lang="ts">
    import { onMount } from "svelte";

    let isOpen = false;

    const toggleMenu = () => {
        isOpen = !isOpen;
    }
</script>

<nav>
    <div class="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div class="flex justify-between items-center">
            <a href="/" class="text-4xl font-bold font-Jost text-orange">JOHAN HELLGREN</a>
            <div>
                <button class="md:hidden" on:click={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
        <div class="md:block {isOpen ? '' : 'hidden'}">
            <a href="/about" class="text-lg px-2 py-1">About</a>
            <a href="/projects" class="text-lg px-2 py-1">Projects</a>
        </div>
    </div>
    {#if isOpen}
        <div class="px-2 pt-2 pb-4">
            <a href="/about" class="block text-lg px-2 py-1" on:click={toggleMenu}>About</a>
            <a href="/projects" class="block text-lg px-2 py-1" on:click={toggleMenu}>Projects</a>
            <button class="focus:outline-none" on:click={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
    {/if}
</nav>
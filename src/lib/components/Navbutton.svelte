<script lang="ts">
    import { onMount } from "svelte"
    export let name: string = ''
    export let address: string = '#'

    let button: HTMLDivElement
    let dir: boolean = false

    const setDirection = (event: MouseEvent) => {
        const { offsetX } = event
        const { offsetWidth } = button
        dir = (offsetX - (offsetWidth / 2) >= 0)
    }

    onMount(() => {
        button.addEventListener("mouseenter", setDirection)
        button.addEventListener("mouseleave", setDirection)

        return () => {
            button.removeEventListener("mouseenter", setDirection)
            button.removeEventListener("mouseleave", setDirection)
        }
    });
</script>

<style>
    .button-container h2 {
        color: #fe8019;
        transition: color 0.2s ease-in-out;
    }

    .button-container:hover h2 {
        color: #fbf1c7;
        transition: color 0.2s ease-in-out;
    }
</style>

<a href={address}>
    <div bind:this={button}
         class="button-container relative inline-block px-2 py-1 overflow-hidden before:absolute before:w-0 before:h-full before:bg-orange before:bottom-0 before:transition-all before:duration-200 before:ease-linear hover:before:w-full 
            {dir ? 'before:right-0' : 'before:left-0'} before:z-[-1]"
         role="button" tabindex="0">
        <h2 class="font-Jost relative text-3xl font-medium text-orange transition-colors duration-200 ease-in-out after:absolute after:inset-0 after:flex after:items-center after:justify-center">
            {name}
        </h2>
    </div>
</a>
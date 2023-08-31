<script lang="ts">
    import Thumbnail from "../components/thumbnail.svelte"
    import {onMount} from "svelte"

    let pageDetails: any

    onMount(async () => {
        const response = await fetch('/api/notion')
        if (!response.ok) {
            console.error("An error occurred:", response.statusText)
        } else {
            pageDetails = await response.json()
            console.log(pageDetails)
        }

        for (const page of pageDetails) {
            for (const block of page.blocks) {
                console.log(block)
            }
        }
    });
</script>

<div class="flex flex-col justify-center items-center pt-16">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        {#if pageDetails}
            {#each pageDetails as page (page.id)}
                <Thumbnail image_url={page.cover?.external?.url} 
                           project_name={page.properties?.Name?.title[0]?.plain_text || "A project"}/>
            {/each}
        {/if}
    </div>
</div>
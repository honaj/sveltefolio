<script lang="ts">
    import Thumbnail from "../components/thumbnail.svelte";
    import SvelteMarkdown from 'svelte-markdown'
    

    const pages = [
        {image_url: '/democratic-design1.jpg', project_name: 'IKEA Museum - Democratic Design'},
        {image_url: '/democratic-design1.jpg', project_name: 'Edvard Munch Museum - Shadows'},
        {image_url: '/democratic-design1.jpg', project_name: 'Danish Design Museum - In the Making'},
        {image_url: '/democratic-design1.jpg', project_name: 'Enigma Museum - Forum'},
        // ... Other elements
    ];
</script>

<div class="flex flex-col justify-center items-center pt-16">
    <h2 class="text-4xl font-bold text-white p-8">PROJECTS</h2>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        {#each pages as page}
            <Thumbnail image_url={page.image_url} project_name={page.project_name}/>
        {/each}
    </div>
</div>
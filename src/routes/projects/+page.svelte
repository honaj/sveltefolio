<script lang="ts">
    import Thumbnail from "../components/thumbnail.svelte"
    import {Client} from "@notionhq/client"
    import {goto} from "$app/navigation"

    const notion = new Client({
        auth: process.env.NOTION_TOKEN,
    })
    async function fetch() {
        const response = await notion.databases.query({
            database_id: "ab20a33f32c4425ea2d94731e0b4b3e3"
        })

        return response.object
    }
    
    const pages = [
        {image_url: '/democratic-design1.jpg', project_name: 'IKEA Museum - Democratic Design'},
        {image_url: '/democratic-design1.jpg', project_name: 'Edvard Munch Museum - Shadows'},
        {image_url: '/democratic-design1.jpg', project_name: 'Danish Design Museum - In the Making'},
        {image_url: '/democratic-design1.jpg', project_name: 'Enigma Museum - Forum'},
    ]
    
    const projects = [
        {}
    ]
</script>

<div class="flex flex-col justify-center items-center pt-16">
    <h2 class="text-4xl font-bold text-white p-8">PROJECTS</h2>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        {#each pages as page}
            <Thumbnail image_url={page.image_url} project_name={page.project_name}/>
        {/each}
    </div>
</div>
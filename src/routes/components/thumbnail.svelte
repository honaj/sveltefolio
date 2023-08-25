<script lang="ts">
    export let image_url: string
    export let project_name: string
    export let page_address: string
</script>

<a href={page_address}>
    <div class="flex flex-col items-center relative w-80">
        <div class="w-full h-80 relative overflow-hidden">
            <img class="absolute top-0 h-full w-full 
                  grayscale-50 
                  hover:grayscale-0 hover:scale-110 
                  transition-all duration-300 object-cover"
                 src="{image_url}"
                 alt="{project_name}">
        </div>
        <h2 class="w-full font-bold text-2xl p-4 font-Jost text-orange">{project_name}</h2>
    </div>
</a>
<script lang="ts">
    export let image_url: string
    export let project_name: string
</script>

<div class="flex flex-col items-center bg-white rounded-md shadow-xl">
    <div class="w-80 h-80">
        <img class="h-full w-full rounded-md" src="{image_url}" alt="{project_name}">
    </div>
    <div class="content-center text-center w-full">
        <h2 class="font-bold text-lg mb-2 p-2 font-JosefinSans">{project_name}</h2>
    </div>
</div>
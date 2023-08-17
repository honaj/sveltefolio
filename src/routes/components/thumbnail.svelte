<script lang="ts">
    export let image_url: string
    export let project_name: string
</script>

<div class="flex flex-col items-center relative">
    <div class="w-80 h-80 overflow-hidden relative">
        <img class="absolute top-0 h-full w-full 
                  grayscale-50 
                  hover:grayscale-0 hover:scale-110 
                  transition-all duration-300 object-cover"
             src="{image_url}"
             alt="{project_name}">
    </div>
    <div class="content-center text-center w-full absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <h2 class="font-bold text-2xl text-white backdrop-blur-xl p-4 font-JosefinSans">{project_name}</h2>
    </div>
</div>
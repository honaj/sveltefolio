<!-- ProductGrid.svelte -->
<script lang="ts">
    import Thumbnail from "../components/thumbnail.svelte";

    // Let's make some placeholder products
    const products = [
        {image_url: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80', product_name: 'Cupcake 1', product_price: '50', product_category: 'cupcake'},
        {image_url: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80', product_name: 'Cupcake 2', product_price: '50', product_category: 'cupcake'},
        {image_url: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80', product_name: 'Cupcake 3', product_price: '50', product_category: 'cupcake'},
        {image_url: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3VwY2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', product_name: 'Cupcake 4', product_price: '50', product_category: 'cupcake'},
        {image_url: 'https://plus.unsplash.com/premium_photo-1678310877551-396c3953c79e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGN1cGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', product_name: 'Cupcake 5', product_price: '50', product_category: 'cupcake'},
        {image_url: 'https://images.unsplash.com/photo-1593187623747-7ea827ad1013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGN1cGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', product_name: 'Cupcake 6', product_price: '50', product_category: 'cupcake'},
        {image_url: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80', product_name: 'Cupcake 7', product_price: '50', product_category: 'cupcake'},
        {image_url: 'https://images.unsplash.com/photo-1563778084459-859099e48677?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGN1cGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', product_name: 'Cupcake 8', product_price: '50', product_category: 'cupcake'},
        {image_url: 'https://plus.unsplash.com/premium_photo-1675003662137-b61f3bf29801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VkZGluZyUyMGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', product_name: 'Wedding Cake 1', product_price: '700', product_category: 'wedding cake'},
        {image_url: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', product_name: 'Wedding Cake 2', product_price: '700', product_category: 'wedding cake'},
        {image_url: 'https://images.unsplash.com/photo-1525257831700-183b9b8bf5c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80', product_name: 'Wedding Cake 3', product_price: '700', product_category: 'wedding cake'},
        {image_url: 'https://images.unsplash.com/photo-1565661834013-d196ca46e14e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZyUyMGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', product_name: 'Wedding Cake 4', product_price: '700', product_category: 'wedding cake'},
        {image_url: 'https://images.unsplash.com/photo-1623428454614-abaf00244e52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZyUyMGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', product_name: 'Wedding Cake 5', product_price: '700', product_category: 'wedding cake'},
        {image_url: 'https://images.unsplash.com/photo-13561702856-b4ec96854ed8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VkZGluZyUyMGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', product_name: 'Wedding Cake 6', product_price: '700', product_category: 'wedding cake'},
        {image_url: 'https://images.unsplash.com/photo-1522057384400-681b421cfebc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlZGRpbmclMjBjYWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', product_name: 'Wedding Cake 7', product_price: '700', product_category: 'wedding cake'},
        {image_url: 'https://images.unsplash.com/photo-1574538860416-baadc5d4ec57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlZGRpbmclMjBjYWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', product_name: 'Wedding Cake 8', product_price: '700', product_category: 'wedding cake'},
    ];

    // Separate cupcakes and wedding cakes
    const cupcakes = products.filter(product => product.product_category === 'cupcake');
</script>

<div class="flex flex-col justify-center items-center pt-16">
    <h2 class="text-4xl font-bold text-white p-8">PROJECTS</h2>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        {#each cupcakes as product}
            <Thumbnail image_url={product.image_url} project_name={product.product_name}/>
        {/each}
    </div>
</div>
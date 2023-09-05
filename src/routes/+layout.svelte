<script xmlns="http://www.w3.org/1999/html">
    import "../app.css"
    import Navbar from "$lib/components/Navbar.svelte"
    import Footer from "$lib/components/Footer.svelte"

</script>

<div>
    <Navbar />
    <main>
        <slot></slot>
    </main>
    <Footer />
</div>
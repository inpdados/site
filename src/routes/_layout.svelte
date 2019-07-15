<script>
    import Nav from '../components/Nav.svelte'
    import Footer from '../components/Footer.svelte'

	export let segment;
</script>
<style>
    .site {
        margin: 0;
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    .site-content {
        display: flex;
        flex: 1;
        /* background-color: yellow; */
    }

</style>

<div class="site">
    <header><Nav {segment}/></header>
    <main class="site-content">
        <slot></slot>
    </main>
    <!-- <footer><Footer {segment}/></footer> -->
</div>

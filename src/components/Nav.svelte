<script>
	export let segment;
</script>

<div class="ui inverted vertical masthead center aligned segment">

    <div class="ui container">
        <div class="ui large secondary inverted pointing menu">
            <a href="/"         class="{segment === undefined   ? "active" : ""} item">Home</a>
            <a href="/pesquisa" class="{segment === "pesquisa"  ? "active" : ""} item">Pesquisa</a>
            <a href="/sobre"    class="{segment === "sobre"     ? "active" : ""} item">Sobre o iNPD</a>
            <!-- <div class="right item">
                <a class="ui inverted button" href="/" alt="login" style="margin-right: 15px;">Log in</a>
                <a class="ui inverted button" href="/" alt="signup">Cadastre-se</a>
            </div> -->
        </div>
    </div>
</div>
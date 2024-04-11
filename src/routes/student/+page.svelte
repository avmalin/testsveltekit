<script>
    import CardClass from "$lib/cardClass.svelte";
</script>


<CardClass/>
<form method="post" action='?/addClass' >
    <label for="kita"> בחר כיתה:</label>
    <br/>
    <input name='kita' type="text">
    <br/>
    <lable for='header'>כותרת:</lable>
    <br/>
    <input name='header' type="text"/>
    <br/>
    <lable for='subHeader'>כותרת משנה:</lable>
    <br/>
    <input name='subHeader' type="text"/>
    <br/>
    <lable for='message'>טקסט:</lable>
    <br/>
    <textarea name="message" placeholder="Message" required></textarea>
    <button>שלח</button>
</form>
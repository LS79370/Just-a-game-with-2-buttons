<script>
    new Vue({
        el: '#test',
        methods: {
            action: function yes() {
                
            }
        }
    })

</script>


<template>
    <div class="hello">
        <h1>Test de bouton</h1>
        <p>I receive Money</p>
        <p>
            You <strong><em>receive</em></strong> Nothing <br>
            Do you accept?
        </p>
        <div class="button">
            <button id="button-yes" onclick="yes()">Accept</button>
            <button id="button-no" onclick="no()">Refuse</button>
            <p>{{R}} </p>
        </div>
    </div>
</template>



<style>
    #app {
    }
</style>

<script>
    export default {
        el: '#test',
        data() {
            return {
                result: "",
            }
        },
        methods: {
            yes: function() {
                this.result = "oui";
            }
        }
    };
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
            <button id="button-yes" v-on:click="yes">Accept</button>
            <button id="button-no" onclick="no()">Refuse</button>
            {{ result }}
        </div>
    </div>
</template>



<style>
    #app {
    }
</style>

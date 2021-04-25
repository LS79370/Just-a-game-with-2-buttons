<script>
    export default {
        el: "#hello",
        data() {
            return {
                result: "",
                test: require(".\\assets\\img\\sweat.png"),
                index: 0,
                image: null,
                items: [
                { test: require(".\\assets\\img\\choice.png") },
                { test: require(".\\assets\\img\\sweat.png") },
                { test: require(".\\assets\\img\\thumbup.png") },
                { test: require(".\\assets\\img\\twice.png") }
                ]
            }
        },
        methods: {
            yes: function() {
                this.result = "Merci de ton argent";
            },
            no: function() {
                this.result = "Haha, perdu";
            },

            pouf: function() {
                this.image = this.items[this.index];
                this.result = this.index;
                this.index = (this.index + 1) % this.items.length;
            },
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
            <button v-on:click="yes">Accept</button>
            <button v-on:click="no">Refuse</button>
            <p>{{result}}</p>
        </div>
        <img v-bind:src="test" v-on:click="pouf" alt="image.alt"> <br />
        <button v-on:click="pouf">Bouton</button>
    </div>
</template>

<style>
    app{
    }
</style>

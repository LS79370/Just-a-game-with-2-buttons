<script>
    export default {
        el: "#hello",
        data() {
            return {
                result: "",

                index: 0,
                image: null,
                images: [{
                    id: 0, src:".\\assets\\img\\choice.png", alt:"Choix"
                },
                {
                    id: 1, src:".\\assets\\img\\sweat.png", alt:"Sweat"
                },
                {
                    id: 2, src:".\\assets\\img\\thumbup.png", alt:"Thumbup"
                },
                {
                    id: 3, src:".\\assets\\img\\twice.png", alt:"Twice"
                }
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
                this.image = this.images[this.index];
                this.result = this.index;
                this.index = (this.index + 1) % this.images.length;
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
        <img src=".\\assets\\img\\twice.png" alt="image.alt"> <br />
        <button v-on:click="pouf">Bouton</button>
    </div>
</template>

<style>
    app{
    }
</style>

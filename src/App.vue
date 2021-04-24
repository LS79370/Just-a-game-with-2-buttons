<script>
    export default {
        el: '#test',
        data() {
            return {
                index:0,
                result: "",
                images: [{
                    id: 1, src: ".\assets\img\choice.png", alt: "Choix"
                },
                {
                    id: 2, src:".\assets\img\sweat.png", alt:"Sweat"
                },
                {
                    id: 3, src: ".\assets\img\thumbup.png", alt: "Thumbup"
                },
                {
                    id: 4, src: ".\assets\img\twice.png", alt: "Twice"
                }
                ]
            }
        },
        methods: {
            yes: function() {
                this.result = "Merci de ton argent";
            },
            no: function () {
                this.result = "Haha, perdu";
            },

            pouf: function () {
                this.result = "Prout";
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
            <p>{{ result }}</p>
        </div>
        <img src=".\assets\img\choice.png" alt="Choix" /> <br />
        <button class="test" v-on:click="pouf">Bouton</button>
    </div>
</template>

<style>
    app{
    }
</style>

<script>
    export default {
        el: "#hello",
        data() {
            return {
                test: "", //variable qui affiche les images. elle prend une valeur dans boup et face
                index: 0,
                items: [ //liste des images
                    require(".\\assets\\img\\choice.png"),
                    require(".\\assets\\img\\twice.png"),
                    require(".\\assets\\img\\sweat.png"),
                    require(".\\assets\\img\\thumbup.png")
                ],
                pilote : [],
            }
        },
        mounted() {
            this.cycle();
        },
        methods: {
            cycle: function () { // sert à initialiser l'image, que y'ai pas un trou
                this.test = this.items[this.index];
            },
            boup: function () { // affiche que les images des bouton : choice et twice
                this.index = (this.index + 1) % 2;
                this.test = this.items[this.index];
            },
            face: function () { //affiche que le pilote sweat et thumbup
                this.pilote = this.items.slice(2);
                this.index = (this.index + 1) % 2;
                this.test = this.pilote[this.index];
            }
        }
    };
</script>

<template>
    <div class="hello">
        <h1>Test de bouton</h1>
        <img v-bind:src="test" alt="image" /> <br />
        <button class="test" v-on:click="boup">Boutons</button>
        <button class="test" v-on:click="face">Pilote</button>
    </div>
</template>

<style>
    app{
    }
</style>

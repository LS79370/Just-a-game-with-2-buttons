<template>
    <article>
        <img src="../assets/img/"
             alt="Grapefruit slice atop a pile of other slices">
    </article>
</template>

<script>
    export default {
        methods: {
            readTag() {
                this.$nfc.runTagChecker()
            },
            writeTag() {
                // Format
                // {userid};{points};{timestamp};{storeid}
                this.$nfc.writeNdefTag('text', '')
            }
        },
    };
</script>

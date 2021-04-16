<template>
    <article>
        <button type="button" @click.prevent="writeTag">Test NFC Write</button>
        <button type="button" @click.prevent="readTag">Test NFC Tag</button>
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

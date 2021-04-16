<template>
    <article>
        <button onclick="readTag()">Test NFC Read</button>
        <button onclick="writeTag()">Test NFC Write</button>
    </article>
</template>

<script>
    export default {
        methods: {
            writeTag() {
                if ("NDEFReader" in window) {
                    const ndef = new NDEFReader();
                    try {
                        await ndef.write("What Web Can Do Today");
                        consoleLog("NDEF message written!");
                    }
                    catch (error) {
                        consoleLog(error);
                    }
                }
                else {
                    consoleLog("Web NFC is not supported.");
                }
            },
        },
    };
</script>

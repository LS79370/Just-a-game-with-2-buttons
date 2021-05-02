async function readNFC()
{
    if ("NDEFReader" in window) {
        //si l'appareil est compatible NFC

        
        const ndef = new NDEFReader();
        /*global NDEFReader*/
        try {
            await ndef.scan();//attend que l'appareil scanne une puce NFC
            ndef.onreading = (event) => {
                const decoder = new TextDecoder();
                let record = event.message.records[0];//on récupère le message enregistré dans la puce
                console.log(record.data)
                var textTag= decoder.decode(record.data);
                return textTag === "Passe"                
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}

export default readNFC;
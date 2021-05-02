async function readNFC()
{
    if ("NDEFReader" in window) {
        //si l'appareil est compatible NFC

        /*global NDEFReader*/
        const ndef = new NDEFReader();
        try {
            await ndef.scan();//attend que l'appareil scanne une puce NFC
            ndef.onreading = (event) => {
                const decoder = new TextDecoder();
                let record = event.message.records[0];//on r�cup�re le message enregistr� dans la puce

                return decoder.decode(record.data);//on retourne le message d�cod�
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}

export default readNFC;
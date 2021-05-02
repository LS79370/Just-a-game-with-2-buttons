async function readNFC()
{
    return new Promise((resolve, reject) => {
        if ("NDEFReader" in window) {
            //si l'appareil est compatible NFC

            /*global NDEFReader*/
            const ndef = new NDEFReader();
            ndef.onreading = (event) => {
                const decoder = new TextDecoder();
                let record = event.message.records[0];//on r�cup�re le message enregistr� dans la puce
                console.log(record.data);
                var textTag= decoder.decode(record.data);
                resolve(textTag === "Passe");               
            }
            ndef.addEventListener("readingerror", () => {
                reject(" Impossible de lire le Tag NFC");
            });
            ndef.scan();//attend que l'appareil scanne une puce NFC
        } else {
            reject(" Utilisation du joker : Appareil incompatible ou permission refusée !");
        }
    });
}

export default readNFC;
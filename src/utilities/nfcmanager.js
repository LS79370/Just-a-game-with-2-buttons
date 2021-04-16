export default function (Vue) {
    let vm = this

    let NFCManager = {
        readNdefTag(callback) {
            let tag_info = null
            chrome.nfc.read(device, {}, function (type, ndef)
            {
                for (var i = 0; i < ndef.ndef.length; i++)
                {
                    tag_info = ndef.ndef[i]
                    var info = tag_info.text.split(";")
                    var points = info[0].split(":")
                    store.state.card_info = {
                        card_id: tag_info.tag_id,
                        points: points[1],
                        last_date_updated: info[1] + ' ' + info[2],
                        store_id: info[3]
                    }
                }
                tag_detected = true;
            });
            callback()
        },

        writeNdefTag(ndefType, ndefValue, callback)
        {
            var ndef = {};
            ndef[ndefType] = ndefValue;
            chrome.nfc.write(device, { "ndef": [ndef] }, function (rc)
            {
                if (!rc)
                {
                    console.log('NFC Tag written!');
                }
                else
                {
                    console.log('NFC Tag write operation failed', rc);
                }
            });
        },

    Object.defineProperties(Vue.prototype, {
        $nfc: {
            get() {
                return NFCManager
            }
        }
    })
}
export default function (Vue)
{
    let VueNFC = {
        readNdefTag(callback)
        {
            var tag_info = "";
            chrome.nfc.read(device, {}, function (type, ndef)
            {
                for (var i = 0; i < ndef.ndef.length; i++)
                {
                    tag_info = tag_info + ndef.ndef[i];
                }
                tag_detected = true;
            });
            callback()
        },

        runTagChecker() {
            if (!tag_detected) {
                tag_checker = setInterval(function () {
                    VueNFC.readNdefTag(function () {
                        tag_detected = true;
                        VueNFC.checkTagDetected();
                    });
                }, 1000);
            }
        },
        checkTagDetected()
        {
            if (tag_detected)
            {
                clearInterval(tag_checker);
                return false;
            }
        }
    }
    Object.defineProperties(Vue.prototype, {
        $nfc: {
            get()
            {
                return VueNFC
            }
        }
    })
}
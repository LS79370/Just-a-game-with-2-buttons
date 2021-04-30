export default function (Vue) {
    let vm = this
    let compatibleDevices = [
        {
            deviceName: 'ACR122U USB NFC Reader',
            productId: 0x2200,
            vendorId: 0x072f,
            thumbnailURL: ''
        }
    ]

    let device = null
    let tag_detected = false
    let tag_checker = null

    let VueNFC = {
        readNdefTag(callback) {
            let tag_info = null
            chrome.nfc.read(device, {}, function (type, ndef) {
                for (var i = 0; i < ndef.ndef.length; i++) {
                    tag_info = ndef.ndef[i]
                    var info = tag_info.text.split(";")
                    var points = info[0].split(":")
                }
                tag_detected = true;
            });
            callback()
        },

        enumerateDevices() {
            chrome.nfc.findDevices(function (devices) {
                device = devices[0];
                VueNFC.showDeviceInfo();
            });
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

        checkTagDetected() {
            if (tag_detected) {
                clearInterval(tag_checker);
                return false;
            }
        }

    }

    Object.defineProperties(Vue.prototype, {
        $nfc: {
            get() {
                return VueNFC
            }
        }
    })
}
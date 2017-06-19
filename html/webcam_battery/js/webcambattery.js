var myBattery = (function (ns) {
    function updateAllBatteryInfo(battery) {
        updateChargeInfo(battery);
        updateLevelInfo(battery);
        updateChargingInfo(battery);
        updateDischargingInfo(battery);
    }
    var updateBatteryInfo = function(battery, message) {
        // TODO: Eval is evil. Use DOM
        console.log(eval(message));
    };
    /* Exported functions  */
    ns.init = function (battery) {
        updateChargeInfo = updateBatteryInfo.bind(this, battery, "`Battery is ${battery.charging ? '' : 'not'} charging`");
        updateLevelInfo = updateBatteryInfo.bind(this, battery, "`Battery level: ${battery.level * 100} %`");
        updateChargingInfo = updateBatteryInfo.bind(this, battery, "`Battery charging time: ${battery.chargingTime} seconds`");
        updateDischargingInfo = updateBatteryInfo.bind(this, battery, "`Battery discharging time: ${battery.dischargingTime} seconds`");
        updateAllBatteryInfo(battery);
        /* Cant make the event listeners work with current version of FF */
        battery.addEventListener('chargingchange', function() {
            console.log("Battery changed");
            updateChargeInfo();
        });
        battery.addEventListener('levelchange', function() {
            updateLevelInfo();
        });
        battery.addEventListener('chargingtimechange', function() {
            updateChargingInfo();
        });
        battery.addEventListener('dischargingtimechange', function() {
            updateDischargingInfo();
        });
    };
    return ns;
} ({}));
var myMedia = (function (ns) {
    var video;
    var canvas;
    var ctx;
    function snapshot() {
        ctx.drawImage(video, 0, 0);
        document.querySelector('img').src = canvas.toDataURL('image/webp');
    }
    function processMedia (mediaStream) {
        video.src = window.URL.createObjectURL(mediaStream);
        video.onloadedmetadata = function(e) {
            canvas.width = video.clientWidth;
            canvas.height = video.clientHeight;
        };
    };
    /* Exported functions  */
    ns.CONSTRAINTS = {
        audio: false,
        video: true
    };
    ns.doMedia = function(mediaStream) {
        video = document.querySelector('video');
        canvas = document.querySelector('canvas');
        ctx = canvas.getContext('2d');
        canvas.addEventListener('click', snapshot, false);
        processMedia(mediaStream);
    };
    ns.sh;
    ns.errorMsg = function (msg) {
        document.body.innerHTML = `ERROR: ${err.name}: ${err.message}`;
    };
    return ns;
}({}));
window.onload = function() {
    navigator.getBattery().then(function(battery) {
        myBattery.init(battery);
    }).catch(function(err) {
        // TODO: Use DOM
        console.log("No battery");
    });
    navigator.mediaDevices.getUserMedia(myMedia.CONSTRAINTS).then(function(mediaStream) {
        myMedia.doMedia(mediaStream);
    }).catch(function(err) {
        myMedia.errorMsg(err);
    });
};

'use strict';

/* Magic Mirror
 * Module: MMM-Adafruit-DHT
 *
 * By Yoahihiko Miyaichi
 * MIT Licensed.
 */

const NodeHelper = require('node_helper');
const exec = require('child_process').exec;

module.exports = NodeHelper.create({
    socketNotificationReceived: function(notification, payload) {
        const self = this;
        if (notification === 'REQUEST') {
            const self = this
            this.config = payload

            exec('sudo ./modules/MMM-Adafruit-DHT/read_data ' + this.config.sensorType + ' ' + this.config.sensorPin + ' ' + this.config.unit + ' ' + this.config.correction_value, (error, stdout) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    return;
                }
                var arr = stdout.trim().split(',');
                console.log('Log: Temperature ' + arr[0] + ' - Humidity ' + arr[1] + ' - Color ' + arr[2]);

                self.sendSocketNotification('DATA', {
                    temperature: arr[0],
                    humidity: arr[1],
                    heat_color: arr[2],
                });
            });
        }
    }
});

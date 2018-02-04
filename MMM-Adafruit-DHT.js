Module.register('MMM-Adafruit-DHT', {
    defaults: {
        sensorPin: 2,
        sensorType: 22,
        unit: 'C',
        updateInterval: 1.0,
    },

    start: function() {
        Log.info('Starting module: ' + this.name);

        this.loaded = false;
        this.temperature = '';
        this.humidity = '';

        this.update();
        setInterval(
            this.update.bind(this),
            this.config.updateInterval * 60 * 1000);
    },

    update: function() {
        this.sendSocketNotification('REQUEST', this.config);
    },

    getDom: function() {
        var wrapper = document.createElement('div');
        wrapper.className = 'light small';

        if (!this.loaded) {
            wrapper.innerHTML = (this.loaded) ? this.translate('EMPTY') : this.translate('LOADING');
            wrapper.className = 'dimmed light small';
            return wrapper;
        }

        var table = document.createElement('table');
        var tr = document.createElement('tr');

        var td = document.createElement('td');
        td.className = 'medium light bold';
        td.style.cssText = 'color: ' + this.heat_color;
        td.innerHTML = this.temperature + '&deg;' + this.config.unit;
        tr.appendChild(td);

        var td = document.createElement('td');
        td.className = 'medium light bright bold';
        td.innerHTML = this.humidity + '%';
        tr.appendChild(td);

        table.appendChild(tr);
        wrapper.appendChild(table);
       
        return wrapper;
    },

    socketNotificationReceived: function(notification, payload) {
        if (notification === 'DATA') {
            this.temperature = payload.temperature;
            this.humidity = payload.humidity;
            this.heat_color = payload.heat_color;
            this.loaded = 1;
            this.updateDom();
        }
    },

});

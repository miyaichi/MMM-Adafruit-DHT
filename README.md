# MMM-Adafruit-DHT
Additional Module for [MagicMirror2</sup>](https://github.com/MichMich/MagicMirror).
It monitors temperature and humidity from sensor and calculate [Heat Index](https://en.wikipedia.org/wiki/Heat_index) and reflected in text color.

<img src="https://raw.githubusercontent.com/miyaichi/MMM-Adafruit-DHT/master/widget.png" style="max-width:100%;">


## Dependencies
- An installation of [MagicMirror<sup>2</sup>](https://github.com/MichMich/MagicMirror)
- [Adafruit_Python_DHT](https://github.com/adafruit/Adafruit_Python_DHT)

## Installation

Navigate into your MagicMirror's `modules` folder:
```
cd ~/MagicMirror/modules
```

Clone this repository:
```
git clone https://github.com/miyaichi/MMM-Adafruit-DHT
```

Navigate to the new `MMM-Adafruit-DHT` folder and make read_data executable.
```
cd MMM-Adafruit-DHT
chmod 755 read_data
```

If you want do to some changes to the read_data (python) file, feel free.

Configure the module in your `config.js` file.

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
```javascript
modules: [
  {
    module: 'MMM-Adafruit-DHT',
    position: 'top_right',
    config: {
        sensorType: 22,
        sensorPin: 2,
        unit: 'C',
        correction_value: -1.0,
        updateInterval: 1.0,
    },
  },
]
```

## Configuration options

The following properties can be configured:

| Option           | Description                                                                                                    |
| ---------------- | -------------------------------------------------------------------------------------------------------------- |
| sensorType       | Sensor Type <br>Supports DHT11, DHT22 and AM2302 sensors <br>Possible values: 11,22,2302 <br>Default value: 22 |
| sensorPin        | GPIO PIN<br>Possible values: wPi<br> Default value: 2                                                          |
| unit             | Temperature Unit<br>Possible values: [C,F]                                                                     |
| correction_value | Temperature adjustment value                                                                                   |
| updateInterval   | Updateinterval for sensor in minutes<br> Possible values: int                                                  |
<br>Default value: 1.0                                                                                                               |

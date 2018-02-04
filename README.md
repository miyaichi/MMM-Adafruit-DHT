# MMM-Adafruit-DHT
Additional Module for [MagicMirror2</sup>](https://github.com/MichMich/MagicMirror).
It monitors temperature and humidity from sensor and calculate [Heat Index](https://en.wikipedia.org/wiki/Heat_index) and Heat Color

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
        updateInterval: 1.0,
    },
  },
]
```

## Configuration options

The following properties can be configured:

<table width="100%">
	<thead>
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
	<thead>
	<tbody>
		<tr>
			<td><code>sensorType</code></td>
			<td>Sensor Type
			        <br>Supports DHT11, DHT22 and AM2302 sensors
                                <b>Possible values: <code>11</code>|<code>22</code>|<code>2302</code></b> 
				<b>Default value:</b> <code>22</code>
			</td>
		</tr>
		<tr>
			<td><code>sensorPin</code></td>
			<td>GPIO PIN
                                <br>
                                <b>Possible values:</b> wPi 
                                <br>
				<b>Default value:</b> <code>2</code>
			</td>
		</tr>
		<tr>
			<td><code>unit</code></td>
			<td>Temperature Unit
                                <br>
                                <b>Possible values:</b> [C|F] 
                                <br>
				<b>Default value:</b> <code>C</code>
			</td>
		</tr>
                <tr>
			<td><code>updateInterval</code></td>
			<td>Updateinterval for sensor in minutes
                                <br>
                                <b>Possible values:</b> int 
                                <br>
				<b>Default value:</b> <code>1.0</code>
			</td>
		</tr>
	</tbody>
</table>
<br>

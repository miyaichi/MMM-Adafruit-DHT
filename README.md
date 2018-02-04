# MMM-Adafruit-DHT
Additional Module for MagicMirror²  https://github.com/MichMich/MagicMirror
It monitors temperature and humidity from sensor and calculate Heat Index https://en.wikipedia.org/wiki/Heat_index and Heat Color

<img src="/miyaichi/MMM-Adafruit-DHT/raw/master/widget.jpg" style="max-width:100%;">


## Dependencies
- An installation of [MagicMirror<sup>2</sup>](https://github.com/MichMich/MagicMirror)
- [Adafruit_Python_DHT] (https://github.com/adafruit/Adafruit_Python_DHT)

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
`

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
			        <br>Supports DHT11, DHT22 and AM2302 sensors
                                <b>Possible values: <code>11</code>|<code>22</code>|<code>2302</code></b> 
				<b>Default value:</b> <code>22</code>
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
<p>
If you want to find the right pin:
```
pi@raspberrypi:~ $ gpio readall
 +-----+-----+---------+------+---+---Pi 3---+---+------+---------+-----+-----+
 | BCM | wPi |   Name  | Mode | V | Physical | V | Mode | Name    | wPi | BCM |
 +-----+-----+---------+------+---+----++----+---+------+---------+-----+-----+
 |     |     |    3.3v |      |   |  1 || 2  |   |      | 5v      |     |     |
 |   2 |   8 |   SDA.1 |   IN | 1 |  3 || 4  |   |      | 5v      |     |     |
 |   3 |   9 |   SCL.1 |   IN | 1 |  5 || 6  |   |      | 0v      |     |     |
 |   4 |   7 | GPIO. 7 |   IN | 1 |  7 || 8  | 0 | IN   | TxD     | 15  | 14  |
 |     |     |      0v |      |   |  9 || 10 | 1 | IN   | RxD     | 16  | 15  |
 |  17 |   0 | GPIO. 0 |   IN | 0 | 11 || 12 | 0 | IN   | GPIO. 1 | 1   | 18  |
 |  27 |   2 | GPIO. 2 |   IN | 0 | 13 || 14 |   |      | 0v      |     |     |
 |  22 |   3 | GPIO. 3 |   IN | 0 | 15 || 16 | 0 | IN   | GPIO. 4 | 4   | 23  |
 |     |     |    3.3v |      |   | 17 || 18 | 0 | IN   | GPIO. 5 | 5   | 24  |
 |  10 |  12 |    MOSI | ALT0 | 0 | 19 || 20 |   |      | 0v      |     |     |
 |   9 |  13 |    MISO | ALT0 | 0 | 21 || 22 | 0 | IN   | GPIO. 6 | 6   | 25  |
 |  11 |  14 |    SCLK | ALT0 | 0 | 23 || 24 | 1 | OUT  | CE0     | 10  | 8   |
 |     |     |      0v |      |   | 25 || 26 | 1 | OUT  | CE1     | 11  | 7   |
 |   0 |  30 |   SDA.0 |   IN | 1 | 27 || 28 | 1 | IN   | SCL.0   | 31  | 1   |
 |   5 |  21 | GPIO.21 |   IN | 1 | 29 || 30 |   |      | 0v      |     |     |
 |   6 |  22 | GPIO.22 |   IN | 1 | 31 || 32 | 0 | IN   | GPIO.26 | 26  | 12  |
 |  13 |  23 | GPIO.23 |   IN | 0 | 33 || 34 |   |      | 0v      |     |     |
 |  19 |  24 | GPIO.24 |   IN | 0 | 35 || 36 | 0 | IN   | GPIO.27 | 27  | 16  |
 |  26 |  25 | GPIO.25 |   IN | 0 | 37 || 38 | 0 | IN   | GPIO.28 | 28  | 20  |
 |     |     |      0v |      |   | 39 || 40 | 0 | IN   | GPIO.29 | 29  | 21  |
 +-----+-----+---------+------+---+----++----+---+------+---------+-----+-----+
 | BCM | wPi |   Name  | Mode | V | Physical | V | Mode | Name    | wPi | BCM |
 +-----+-----+---------+------+---+---Pi 3---+---+------+---------+-----+-----+
```

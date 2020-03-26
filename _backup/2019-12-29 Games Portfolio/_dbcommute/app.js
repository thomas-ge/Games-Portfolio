var options = {
	places: {
		home: {
			location: {
				lat: 48.46305,
				lon: 9.08479
			},
			stations: [
				{
					id: 5000217,
					lines: {
						U2: [
							'Neugereut'
						],
					}
				},
			],
			arrivalPlace: {
				stations: [
					{
						id: 5006024,
						lines: {
							U2: [
								'Neugereut'
							],
						},
					},
				],
			},
		},
		work: {
			location: {
				lat: 48.48408,
				lon: 9.12471
			},
			stations: [
				{
					id: 5000281,
					lines: {
						U14: [
							'Hauptbf (A.-Klett-Pl.)',
						]
					}
				},
			],
			arrivalPlace: {
				stations: [
					{
						id: 5006074,
						lines: {
							U14: [
								'Hauptbf (A.-Klett-Pl.)',
							],
						},
					},
				],
			},
		}
	},
	username: 'Thomas',
	greetings: {
		morning: [
			'Good Morning, ',
			'Moin Moin, ',
			'It\'s light outside, ',
			'Yawwwwwn, '
		],
		evening: [
			'Good Evening, ',
			'Have a beer, ',
			'Yay, ',
			'Ride into the sunset, '
		]
	},
	apiEndpoint: 'https://efa-api.asw.io/api/v1',
	minTravelTime: 11,
}

var runtime = {
	place: {},
	arrivalPlace: {},
	departures: [],
	arrivals: [],
	processes: [],
	detailNeedsUpdate: true
};

navigator.geolocation.getCurrentPosition(function(location) {
	console.log('location received');

	chooseGreeting();

	document.getElementById('blurMask').addEventListener('click', hideDetail);

	determinePlace(location.coords);
}, function(error) {
	console.log('failed getting location');
	console.log(error.message);
});

function chooseGreeting() {
	var partOfTheDay = new Date().getHours() <= 12 ? 'morning' : 'evening';

	var listOfGreetings = options.greetings[partOfTheDay]
	var randomIndex = Math.floor(Math.random() * listOfGreetings.length);

	var greeting = listOfGreetings[randomIndex] + options.username;

	document.getElementById('greeting').innerHTML = greeting;
}

function forceTouchEvent(event) {
	var force = event.changedTouches[0].force;

	var minForce = 0.15;

	if(force < minForce) {
		hideDetail();
	} else {
		event.preventDefault();

		var blur, background, scale, opacity;

		if(force < 0.5) {
			blur = map(force, minForce, 0.5, 0, 15);
			background = map(force, minForce, 0.5, 0, 0.05);
			scale = map(force, minForce, 0.5, 0.85, 1);
			opacity = map(force, minForce, 0.5, 0, 1);
		} else {
			blur = 15;
			background = 0.05;
			scale = 1;
			opacity= 1;
		}

		document.getElementById('blurMask').style.filter = 'blur(' + blur + 'px)';
		document.getElementById('blurMask').style.backgroundColor = 'rgba(0, 0, 0, ' + background + ')';

		document.getElementById('detail').style.transform = 'scale(' + scale + ')';
		document.getElementById('detail').style.opacity = opacity;
	}
}

function hideDetail() {
	document.getElementById('blurMask').style.filter = 'blur(0px)';
	document.getElementById('blurMask').style.backgroundColor = 'rgba(0, 0, 0, 0)';

	document.getElementById('detail').style.transform = 'scale(0)';
	document.getElementById('detail').style.opacity = 0;

	runtime.detailNeedsUpdate = true;
}

function fillDetail(departure) {
	var detailNode = document.getElementById('detail');

	while(detailNode.firstChild) {
		detailNode.removeChild(detailNode.firstChild);
	}

	var departureNode = document.createElement('section');
	var departureTimeNode = document.createElement('h1');
	var departureStopNode = document.createElement('span');

	departureTimeNode.innerHTML = departure.time;
	departureStopNode.innerHTML = departure.stop;

	departureNode.appendChild(departureTimeNode);
	departureNode.appendChild(departureStopNode);

	var arrivalNode = document.createElement('section');
	var arrivalTimeNode = document.createElement('h1');
	var arrivalStopNode = document.createElement('span');

	arrivalTimeNode.innerHTML = departure.arrival.time;
	arrivalStopNode.innerHTML = departure.arrival.stop;

	arrivalNode.appendChild(arrivalTimeNode);
	arrivalNode.appendChild(arrivalStopNode);

	detailNode.appendChild(departureNode);
	detailNode.appendChild(arrivalNode);
}

function determinePlace(location) {
	var coords = {
		lat: location.latitude,
		lon: location.longitude
	}

	var distanceToHome = getDistanceBetweenPoints(options.places.home.location, coords);
	var distanceToWork = getDistanceBetweenPoints(options.places.work.location, coords);

	var place = distanceToHome <= distanceToWork ? options.places.home : options.places.work;

	runtime.place = place;

	getDeparturesForPlace(place);
}

function getDistanceBetweenPoints(p1, p2) {
	return Math.sqrt(Math.pow(p1.lat - p2.lat, 2) + Math.pow(p1.lon - p2.lon, 2));
}

function getDeparturesForPlace(place) {
	place.stations.forEach(function(station) {
		runtime.processes.push(station.id);
		getDeparturesForStation(station, function(json) {
			findPossibleDepartures(station, json);
		});
	});
}

function getDeparturesForStation(station, callback) {
	makeGetRequest(options.apiEndpoint + '/station/' + station.id + '/departures?format=json', function(response) {
		var json = JSON.parse(response);
		callback(json);
	});
}

function findPossibleDepartures(station, data) {
	data.forEach(function(entry) {
		if(station.lines[entry.number] !== undefined) {
			if(station.lines[entry.number].indexOf(entry.direction) != -1) {
				runtime.departures.push(entry);
			}
		}
	});

	var processIndex = runtime.processes.indexOf(station.id);
	runtime.processes.splice(processIndex, 1);

	processDepartures();
	searchForArrivals();
}

function processDepartures() {
	if(runtime.processes.length == 0) {
		runtime.departures = preprocessList(runtime.departures);
		sortList(runtime.departures);
	}
}

function generateList() {
	if(runtime.processes.length == 0) {
		var mainNode = document.getElementsByTagName('main')[0]

		while(mainNode.firstChild) {
			mainNode.removeChild(mainNode.firstChild);
		}

		runtime.departures.forEach(function(departure) {
			var node = document.createElement('section');

			var time = document.createElement('h1');
			time.innerHTML = departure.time;

			if(departure.delay != 0) {
				time.innerHTML += ' <span class="delay">(+' + departure.delay + ')</span>'; //delay is already included
			}

			var stop = document.createElement('span');
			stop.innerHTML = departure.stop + '<br>' + departure.line;

			node.appendChild(time);
			node.appendChild(stop);

			node.addEventListener('touchforcechange', function(event) {
				if(runtime.detailNeedsUpdate) {
					fillDetail(departure);
					runtime.detailNeedsUpdate = false;
				}

				forceTouchEvent(event);
			});
			node.addEventListener('touchend', hideDetail);

			mainNode.appendChild(node);
		});
	}
}

function preprocessList(list) {
	var preprocessedList = [];

	list.forEach(function(departure) {
		var time = departure.departureTime.hour.padStart(2, '0') + ':' + departure.departureTime.minute.padStart(2, '0');
		var timestamp = Date.parse(departure.departureTime.year + '/' + departure.departureTime.month.padStart(2, '0') + '/' + departure.departureTime.day.padStart(2, '0') + ' ' + time);

		preprocessedList.push({
			time: time,
			timestamp: timestamp,
			stop: departure.stopName,
			line: departure.number,
			delay: departure.delay
		});
	});

	return preprocessedList;
}

function searchForArrivals() {
	if(runtime.processes.length == 0) {
		runtime.arrivalPlace = runtime.place.arrivalPlace;

		runtime.arrivalPlace.stations.forEach(function(station) {
			runtime.processes.push(station.id);
			getDeparturesForStation(station, function(json) {
				findPossibleArrivals(station, json);
			});
		});
	}
}

function findPossibleArrivals(station, data) {
	data.forEach(function(entry) {
		runtime.arrivalPlace.stations.forEach(function(arrivalStation) {
			runtime.place.stations.forEach(function(departureStation) {
				if(departureStation.lines[entry.number] !== undefined) {
					//line matches dep
					if(arrivalStation.lines[entry.number] !== undefined) {
						//lines matches arr as well -> line match
						if(departureStation.lines[entry.number].indexOf(entry.direction) != -1) {
							//must be same connection
							runtime.arrivals.push(entry);
						}
					}
				}
			});
		});
	});

	var processIndex = runtime.processes.indexOf(station.id);
	runtime.processes.splice(processIndex, 1);

	matchConnections();
}

function matchConnections() {
	if(runtime.processes.length == 0) {
		runtime.arrivals = preprocessList(runtime.arrivals);
		sortList(runtime.arrivals);

		runtime.departures.forEach(function(departure) {
			var minPossibleArrivalTimestamp = departure.timestamp + (options.minTravelTime * 60 * 1000);

			var connectionFound = false;

			for(var i = 0; !connectionFound && i < runtime.arrivals.length; i++) {
				if(runtime.arrivals[i].timestamp >= minPossibleArrivalTimestamp) {
					connectionFound = true;
					departure.arrival = runtime.arrivals[i];

					runtime.arrivals.splice(i, 1);
				}
			}
		});

		generateList();
	}
}

function sortList(list) {
	list.sort(function(a, b){
		return new Date(a.timestamp) - new Date(b.timestamp);
	});
}

function map(value, oldMin, oldMax, newMin, newMax) {
    return newMin + (newMax - newMin) * (value - oldMin) / (oldMax - oldMin);
}

function makeGetRequest(url, callback) {
	var request = new XMLHttpRequest();

	request.onreadystatechange = function() {
		if(request.readyState == 4) {
			if(request.status == 200) {
				callback(request.responseText);
			} else {
				console.log('error making GET request for url ' + url, request.statusText);

				callback('[]');
			}
		}
	};

	request.open('GET', url, true);
	request.send(null);
}
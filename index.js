window.addEventListener('load', () => {
  const mapCanvas = document.getElementById('mapCanvas');
  const context = mapCanvas.getContext('2d');

  navigator.geolocation.watchPosition(
    position => {
      const timestamp = new Date(position.timestamp);
      const { longitude, latitude, accuracy, altitude, altitudeAccuracy, heading, speed } = position.coords;

      const recordDiv = document.createElement('div');
      recordDiv.textContent = `${timestamp.toLocaleTimeString()} | ${longitude.toFixed(4)}, ${latitude.toFixed(4)} (${accuracy} %)${altitude ? ' | ' + altitude.toFixed(2) : ''}${altitudeAccuracy ? ` (${altitudeAccuracy.toFixed(0)} %)` : ''}${heading ? ' | ' + heading : ''} ${speed ? ' | ' + speed : ''}`;
      document.body.append(recordDiv);

      const z = '#15';
      const x = (longitude + 180) / 360 * Math.pow(2, z);
      const y = (1 - Math.log(Math.tan(latitude * Math.PI / 180) + 1 / Math.cos(latitude * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, z);

      const tileImage = new Image();
      tileImage.addEventListener('load', () => {
        context.drawImage(tileImage, 0, 0);
        context.fillStyle = 'rgba(0, 0, 255, .1)';
        context.beginPath();
        context.arc((x % 1) * mapCanvas.width, (y % 1) * mapCanvas.height, (100 / accuracy) * z, 0, 2 * Math.PI);
        context.fill();
      });
      tileImage.addEventListener('error', () => {
        context.clearRect(0, 0, mapCanvas.width, mapCanvas.height);
        context.fillText('Failed to load the tile', 10, 20);
      });
    var map = L.map('map').setView([latitude,longitude], 17);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);
    var marker = L.marker([latitude,longitude]).addTo(map);

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent('You clicked the map at ' + e.latlng.toString())
			.openOn(map);
	}
    // var marker = L.marker([51.5, -0.09]).addTo(map);
      // tileImage.src = `https://maps.wikimedia.org/${z}/${latitude}/${longitude}.png`;
    },
    error => alert(error.code + ' ' + error.message),
    { enableHighAccuracy: true },
  );
});

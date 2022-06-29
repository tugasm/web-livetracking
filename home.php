<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Web GPS Tracker</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="index.js"></script>
    <link rel="stylesheet" href="index.css" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
   integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
   crossorigin=""/>
   
  </head>
  <body>
    <?php echo "
    <div id='map' style='height:500px'></div>
    <canvas id='mapCanvas' width='1000' height='450'></canvas>
    " ?>
  </body>
   <!-- Make sure you put this AFTER Leaflet's CSS --> -->
 <script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
 integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
 crossorigin=""></script>
</html>

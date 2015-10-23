<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="css/styles.css">
        <script src="bower_components/jquery/dist/jquery.min.js"></script>
        <title></title>
    </head>
    <body>
        <h1>JB LIGHTS DIDACTIC EXPERIMENT</h1>
        <div id="divMain">
            <label for="btnOnOff">On/Off: </label>
            <button id="btnOnOff">Turn On</button><br>
            <label for="selColor">Color: </label>
            <input id="selColor" type="color"><br>
            <label for="sliderBrightness">Brightness: </label>
            <input id="sliderBrightness" type="range" min="0" max="100" draggable="">
        </div>
        <script src="js/main.js"></script>
    </body>
</html>
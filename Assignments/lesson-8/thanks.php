<!DOCTYPE html>
<html lang="en-us">

<head>
    <meta charset="utf-8">
    <title>Goudie Preston-7 Weather Page</title>
    <meta name="description" content="Goudie Preston-7 Weather Page">
    <meta name="Jason Goudie" content="Jason Goudie">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/small-7.css">
    <link rel="stylesheet" href="css/large-7.css">
</head>

<body>
    <header>
        <img src="images/thefatguyforecastlogo.jpg" alt="images/fatguylogo"><br>

    </header>
    <nav>
        <button class="hidehamburger" onclick="toggleNavMenu()">&#9776;</button>
        <ul id="primaryNav" class="hide">
            <li><a href="#">Home</a></li>
            <li><a href="https://jgoudie18003.github.io/Assignments/lesson-7/preston-7.html">Preston</a></li>
            <li><a href="#">Soda Springs</a></li>
            <li><a href="#">Fish Haven</a></li>
            <li><a href="#">Storm Center</a></li>
            <li><a href="https://jgoudie18003.github.io/Assignments/lesson-7/gallery.html">Gallery</a></li>
        </ul>
    </nav>

    <main>
        <h1>Thank you for submitting your information</h1>
    </main>
    <footer>
        <aside>
            <div class="contact">
                <p><b>thefatguyforecast.com</b></p>
                <p><i class="material-icons">location_on</i> 1447 East 800 North Road <br>Preston, ID 83263</p>
                <p><i class="material-icons">phone-iphone</i> 800-YOU-KNOW</p>
                <p><i class="material-icons">mail_outline</i> pedro@thefatguyforecast.com</p>
                <div class="social">
                    <img class="social-icons" src="images/facebook.jpg" alt="Facbook Icon">
                    <img class="social-icons" src="images/pinterest.jpg" alt="Pinterest Icon">
                    <img class="social-icons" src="images/twitter.jpg" alt="Twitter Icon">
                    <img class="social-icons" src="images/google.jpg" alt="Google Icon">
                </div>
            </div>
            <div id="googleMap"></div><br>
        </aside>
    
    <p class="footer-bar">&copy;2019 All Rights Reserved | thefatguyforecast.com | <span id="currentdate"></span><br></p>
    
    </footer>



    <script src="scripts/hamburger.js"></script>
    <script src="scripts/currentdate.js"></script>
    <script src="scripts/windspeed.js"></script>
    <script src="scripts/map.js"></script>
    <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDRgqTtXaRXVAScHhwtP6V_TLCa0L4zbR8&callback=myMap"></script>

</body>

</html>
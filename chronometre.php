<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chronometre</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link href="chronometre.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap" rel="stylesheet">
    
</head>

<body>

    <header>

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand">Chronomètre</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#"></a>
                        <a class="nav-link" href="./index.php">Accueil</a>
                        

                    </div>
                </div>
            </div>
        </nav>



    </header>



    <main>
<div class="chronometre">
    <div id="timer-container">
  <span id="hours">00</span> :
  <span id="minutes">00</span> :
  <span id="seconds">00</span>
</div>
<button id="start-stop" onclick="startStop()">Start / Stop</button>
<button id="lap" onclick="addLap()">Tour</button>
<button id="reset" onclick="reset()">Reset</button>
<ul id="laps"></ul>
</div>
    </main>


    <footer>


    </footer>

</body>

</html>

<script src="chronometre.js"></script>
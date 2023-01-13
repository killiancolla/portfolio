<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title><?= $title ?></title>
        <link rel="icon" type="image/png" href="https://assets.codepen.io/1462889/fcy.png" />
        <link href="public/css/style.css" rel="stylesheet" /> 
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
        
    </head>
        
    <body>
        <div id="transition_page" class=" transition active">
            <div class="section-center">
                <img src="https://assets.codepen.io/1462889/fcy.png" alt="">
            </div>
        </div>
        <a href="/portfolio" class="logo">
            <img src="https://assets.codepen.io/1462889/fcy.png" alt="">
        </a>

        <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
        <label for="menu-icon"></label>
        <nav class="nav"> 		
            <ul class="pt-5">
                <li><a href="?page=profil">Mon profil</a></li>
                <li><a href="?page=experience">Mon expérience</a></li>
                <li><a href="?page=etudes">Mes études</a></li>
                <li><a href="?page=projets">Mes projets</a></li>
            </ul>
        </nav>

        <div class="section-center">
            <?= $content ?>
        </div>
    </body>
    <script src="public/js/script.js"></script>
</html>
<?php

require('controller/frontend.php');

try 
{
    if (isset($_GET['page'])) {
        $page = $_GET['page'];
        switch($page) {
            case 'profil':
                profil();
                break; 
            case 'experience':
                experience();
                break; 
            case 'etudes':
                etudes();
                break;
            case 'projets': 
                projets();
                break; 
            default:
                error404();
                break; 
        }
        
    }
    else {
        home();
    }
}
catch(Exception $e) { 
    $errorMessage = $e->getMessage();
    echo $errorMessage;
}



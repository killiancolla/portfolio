<?php

require('model/frontend.php');


function home() {
    require('view/frontend/homeView.php'); 
}

function profil() {
    require('view/frontend/profilView.php'); 

}

function experience() {
    require('view/frontend/experienceView.php'); 
}

function etudes() {
    require('view/frontend/etudesView.php'); 
}

function projets() {
    require('view/frontend/projetsView.php'); 
}

function error404(){
    require('view/frontend/404.php'); 
}


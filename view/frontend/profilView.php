<?php $title = 'Mon profil'; ?>
<?php ob_start(); ?>

<h1 class="mb-0">Mon profil</h1>

<?php $content = ob_get_clean(); ?>
<?php require('view/template.php'); ?>
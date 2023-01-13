<?php $title = 'Mes experiences'; ?>
<?php ob_start(); ?>

<h1 class="mb-0">Mes experiences</h1>

<?php $content = ob_get_clean(); ?>
<?php require('view/template.php'); ?>
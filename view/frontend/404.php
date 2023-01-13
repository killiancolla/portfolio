<?php $title = 'Error 404'; ?>
<?php ob_start(); ?>

<h1 class="mb-0">404 not found</h1>

<?php $content = ob_get_clean(); ?>
<?php require('view/template.php'); ?>
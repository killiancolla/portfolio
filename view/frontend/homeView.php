<?php $title = 'Mon blog'; ?>
<?php ob_start(); ?>

<h1 class="mb-0">Killian Colla</h1>
<h4>Développeur web</h4>

<?php $content = ob_get_clean(); ?>
<?php require('view/template.php'); ?>
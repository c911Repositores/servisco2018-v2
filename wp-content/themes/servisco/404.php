<?php get_header(); ?>

	<main class="error404 autosize-m">
		<h1 class="error404__title">
			ERREUR  404<br>
			<strong>PAGE NON TROUVÉE</strong>
		</h1>
		<div class="error404__image">
			<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/error-404.jpg">
		</div>
		<div class="cbutton-ctn">
			<a class="cbutton" href="<?php echo get_page_link(9); ?>">
				Revenir à l'accueil
			</a>
		</div>
	</main>

<?php get_footer(); ?>

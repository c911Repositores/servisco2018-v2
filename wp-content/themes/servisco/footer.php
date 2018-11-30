
<footer class="footer">

	<?php get_template_part('inc/scrollsignal'); ?>

	<div class="footer__logo">
		<a href="<?php echo get_page_link(9); ?>">
			<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo-servisco.svg" alt="SERVISCO REALTY PARTNER OF TOMORROW">
		</a>
	</div>

	<ul class="footer__social">
		<?php get_template_part('inc/social-links'); ?>
	</ul>

	<div class="cbutton-ctn autosize-m">
		<a class="cbutton cbutton--light" href="">
			Je suis une agence
		</a>
	</div>

	<nav class="footer__navbar">
		<ul class="footer__navbarlist">
			<?php wp_nav_menu(array('menu' => 'Menu principal', 'items_wrap' => '%3$s', 'container' => false)); ?>
		</ul>
	</nav>

	<div class="footer__mentions">
		Copyright © <?php print(date("Y")); ?> Servisco | <?php the_field('tva_number', 'options'); ?> | <a href="<?php echo get_page_link(3); ?>">Vie privée</a> | Website by <a href="http://www.flexvision.be" target="_blank">Flexvision</a>
	</div>

</footer>

<?php wp_footer(); ?>
</body>
</html>

<?php get_header(); ?>
<?php while(have_posts()) : the_post(); ?>

<div class="article">
	<nav class="article__back">
		<a href="<?php echo get_page_link(15); ?>" class="autosize-m">
			<i class="fas fa-chevron-left"></i> Revenir à la liste
		</a>
	</nav>

	<h1 class="article__title autosize-m">
		<?php the_title(); ?>
	</h1>

	<div class="article__date autosize-m">
		<?php echo get_the_date('d/m/Y'); ?>
	</div>

	<div class="article__content wysiwyg-content autosize-m">
		<?php the_content(); ?>
	</div>

	<nav class="cbutton-ctn mg90 autosize-m">
		<a class="cbutton" href="<?php echo get_page_link(15); ?>">
			Voir les autres articles
		</a>
	</nav>
</div>

<aside class="newslettermodule basic-form-style">
	<?php echo do_shortcode('[mc4wp_form id="232"]'); ?>
</aside>

<?php endwhile; ?>
<?php get_footer(); ?>

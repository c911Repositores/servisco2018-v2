<?php get_header(); ?>
<?php while(have_posts()) : the_post(); ?>

<?php get_template_part('inc/popup-price-mail'); ?>

<div class="article">
	<nav class="article__back">
		<a href="<?php echo get_page_link(15); ?>" class="autosize-m">
			<i class="fas fa-chevron-left"></i> Revenir à la liste
		</a>
	</nav>

	<figure class="article__mainillustration autosize">
		<?php
		if(has_post_thumbnail()) {
			the_post_thumbnail("large"); //thumbnail, medium, large, full, array('700', '600')
		}
		?>
	</figure>

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
	<?php the_field('mailchimp_shortcode', 'option'); ?>
</aside>

<?php endwhile; ?>
<?php get_footer(); ?>

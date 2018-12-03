<?php get_header(); ?>
<?php while(have_posts()) : the_post(); ?>

<div class="article autosize-m">
	<nav class="article__back">
		<a href="<?php echo get_page_link(15); ?>">
			<i class="fas fa-chevron-left"></i> Revenir à la liste
		</a>
	</nav>
	<h1 class="article__title">
		<?php the_title(); ?>
	</h1>
	<div class="article__date">
		<?php echo get_the_date('d/m/Y'); ?>
	</div>
	<div class="article__content wysiwyg-content">
		<?php the_content(); ?>
	</div>
	<nav class="cbutton-ctn mg90">
		<a class="cbutton" href="<?php echo get_page_link(15); ?>">
			Voir les autres articles
		</a>
	</nav>
</div>

<?php endwhile; ?>
<?php get_footer(); ?>

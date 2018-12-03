<?php get_header(); ?>
<?php while(have_posts()) : the_post(); ?>

	<main class="autosize-m">
		<h1 class="ctitle mg60">
			<?php the_title(); ?>
		</h1>
		<div class="wysiwyg-content mg60">
			<?php the_content(); ?>
		</div>
	</main>

<?php endwhile; ?>
<?php get_footer(); ?>

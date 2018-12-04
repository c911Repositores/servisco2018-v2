<?php
/*
* Template Name: contact
* Template Post Type: page
*/
?>
<?php get_header(); ?>
<?php while(have_posts()) : the_post(); ?>

<div class="cbanner cbanner--darktext cbanner--contact" data-stp-parallax>
	<h1 class="cbanner__title">
		<?php the_field('page_title'); ?>
	</h1>
	<ul class="cbanner__social">
		<?php get_template_part('inc/social-links'); ?>
	</ul>
</div>

<main class="contact basic-form-style">

	<h2 class="ctitle mg60 autosize-m">
		<?php the_field('form_title'); ?>
	</h2>

	<div class="contact__form">
		<?php echo do_shortcode('[contact-form-7 id="205" title="contact"]'); ?>
	</div>

	<span class="verticalseparator"></span>

	<h2 class="ctitle mg30 autosize-m">
		<?php the_field('infos_title'); ?>
	</h2>

	<div class="contact__infos autosize-m">
		<?php the_field('infos_list'); ?>
	</div>
</main>

<?php endwhile; ?>
<?php get_footer(); ?>

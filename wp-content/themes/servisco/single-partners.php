<?php get_header(); ?>
<?php while(have_posts()) : the_post(); ?>

<div class="partnerpost">
	<nav class="partnerpost__back autosize-m">
		<a href="<?php echo get_page_link(13); ?>">
			<i class="fas fa-chevron-left"></i> Liste des partenaires
		</a>
	</nav>
	<div class="partnerpost__logo">
		<?php
		$image = get_field('logo');
		$size = array('1920', '600'); //thumbnail, medium, large, full, array('700', '600')
		if($image) {
			echo wp_get_attachment_image($image, $size);
		}
		?>
	</div>
	<h1 class="partnerpost__title autosize-m">
		<?php the_title(); ?>
	</h1>
	<div class="partnerpost__banner">
		<?php
		$image = get_field('banner');
		$size = array('1920', '600'); //thumbnail, medium, large, full, array('700', '600')
		if($image) {
			echo wp_get_attachment_image($image, $size);
		}
		?>
	</div>
	<div class="partnerpost__content wysiwyg-content autosize-m">
		<?php the_content(); ?>
	</div>
</div>

<?php endwhile; ?>
<?php get_footer(); ?>

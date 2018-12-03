<?php
/*
* Template Name: partners
* Template Post Type: page
*/
?>
<?php get_header(); ?>
<?php while(have_posts()) : the_post(); ?>

<div class="cbanner cbanner--darktext cbanner--partners">
	<h1 class="cbanner__title">
		<?php the_field('page_title'); ?>
	</h1>
	<ul class="cbanner__social">
		<?php get_template_part('inc/social-links'); ?>
	</ul>
</div>

<h2 class="ctitle mg60 autosize-m">
	<?php the_field('option1_title'); ?>
</h2>

<div class="cbutton-ctn">
	<a class="cbutton" href="">
		<?php the_field('option1_button_text'); ?>
	</a>
</div>

<div class="bluetext mg90">
	OU
</div>

<h2 class="ctitle mg60 autosize-m">
	<?php the_field('option2_title'); ?>
</h2>

<div class="partners autosize-m">
	<div class="partners__filter">
		<input type="number" placeholder="Code postal">
	</div>

	<h2 class="partners__title autosize-m">
		<?php the_field('partners_list_title'); ?>
	</h2>

	<ul class="partners__list">
		<?php $args = array('post_type' => 'partners'); ?>
		<?php $loop = new WP_Query($args); ?>
		<?php while($loop->have_posts()) : $loop->the_post(); ?>
			<li class="partners__item">
				<a class="partners__link" href="<?php the_permalink(); ?>">
					<?php
					$image = get_field('logo');
					$size = 'medium'; //thumbnail, medium, large, full, array('700', '600')
					if($image) {
						echo wp_get_attachment_image($image, $size);
					}
					?>
					<span class="partners__more">
						En savoir plus
					</span>
				</a>
			</li>
		<?php endwhile; ?>
		<?php wp_reset_postdata(); ?>
	</ul>
</div>

<?php endwhile; ?>
<?php get_footer(); ?>
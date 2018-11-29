<?php
/*
* Template Name: quality
* Template Post Type: page
*/
?>
<?php get_header(); ?>
<?php while(have_posts()) : the_post(); ?>


<br>
<br>
<br>
<br>
<br>
<br>

<h1>
	<?php the_field('page_title'); ?>
</h1>

<br>
<br>

<h1>
	<?php the_field('percents_title'); ?>
</h1>

<?php if(have_rows('percents_list')) : ?>
	<ul>
		<?php while (have_rows('percents_list')) : the_row(); ?>
			<li>
				<div>
					<strong>
						+ <?php the_sub_field('percent'); ?> %
					</strong>
				</div>
				<?php the_sub_field('text'); ?>
			</li>
		<?php endwhile; ?>
	</ul>
<?php endif; ?>

<h1>
	<?php the_field('services_title'); ?>
</h1>

<?php $args = array('post_type' => 'services'); ?>
<?php $number_of_service = 1; ?>
<?php $loop = new WP_Query( $args ); ?>
<ul>
	<?php while ($loop->have_posts() ) : $loop->the_post(); ?>
		<li>
			<h1>
				<?php echo $number_of_service; ?>
			</h1>

			<div style="width:100px">
				<?php
				$icon_name = get_field('icone_dillustration');
				get_template_part('svg/animated-' . $icon_name);
				?>
			</div>

			<h2>
				<?php the_title(); ?>
			</h2>

			<?php
			$image = get_field('picture');
			$size = array('700', '700'); //thumbnail, medium, large, full, array('700', '600')
			if($image) {
				echo wp_get_attachment_image($image, $size);
			}
			?>

			<?php the_field('youtube_url'); ?>
			<div>
				<?php the_field('text'); ?>
			</div>
		</li>
		<?php $number_of_service++; ?>
	<?php endwhile; ?>
</ul>
<?php wp_reset_postdata(); ?>

<?php endwhile; ?>
<?php get_footer(); ?>

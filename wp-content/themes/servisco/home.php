<?php get_header(); ?>

<div class="cbanner cbanner--blog">
	<h1 class="cbanner__title">
		<?php the_field('page_title',15); ?>
	</h1>
	<ul class="cbanner__social">
		<?php get_template_part('inc/social-links'); ?>
	</ul>
</div>

<h2 class="ctitle mg60 autosize-m">
	<?php the_field('list_title',15); ?>
</h2>

<section class="blog">
	<ul class="blog__list">
		<?php while(have_posts()) : the_post(); ?>
			<li class="blog__item">
				<a class="blog__picture" href="<?php the_permalink(); ?>">
					<?php
					if(has_post_thumbnail()) {
						the_post_thumbnail(array('400', '400')); //thumbnail, medium, large, full, array('700', '600')
					}
					?>
				</a>
				<h3 class="blog__title">
					<?php the_title(); ?>
				</h3>
				<div class="blog__date">
					<?php echo get_the_date('d/m/Y'); ?>
				</div>
				<div class="cbutton-ctn mgt30">
					<a class="cbutton" href="<?php the_permalink(); ?>">
						Lire plus
					</a>
				</div>
			</li>
		<?php endwhile; ?>
	</ul>
</section>


<?php get_footer(); ?>

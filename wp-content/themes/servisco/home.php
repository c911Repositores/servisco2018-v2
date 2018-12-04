<?php get_header(); ?>

<div class="cbanner cbanner--blog" data-stp-parallax>
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
				<a class="blog__picture block-3-2" href="<?php the_permalink(); ?>">
					<span>
						<span>
							<?php
							if(has_post_thumbnail()) {
								the_post_thumbnail(array('400', '400')); //thumbnail, medium, large, full, array('700', '600')
							}
							?>
						</span>
					</span>
				</a>
				<h3 class="blog__title">
					<a href="<?php the_permalink(); ?>">
						<?php the_title(); ?>
					</a>
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

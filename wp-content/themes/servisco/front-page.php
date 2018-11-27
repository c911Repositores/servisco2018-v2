<?php get_header(); ?>

<div class="homebanner">
	<div class="homebanner__content">
		<?php
		$hero = get_field('home_banner');
		if($hero) :
		?>
			<h1 class="homebanner__title">
				<?php echo $hero['title']; ?>
			</h1>

			<div class="homebanner__text">
				<?php echo $hero['text']; ?>
			</div>

			<div class="homebanner__link">
				<a class="cbutton cbutton--borderwhite" href="">
					<?php echo $hero['button_text']; ?>
				</a>
			</div>
		<?php endif; ?>
	</div>

	<div class="homebanner__picturezone" style="background-image: url(<?php echo get_field('banner_img')['url']; ?>);">
		<ul class="homebanner__social">
			<?php get_template_part('inc/social-links'); ?>
		</ul>
		<div class="homebanner__agencylink">
			<?php get_template_part('inc/agency-contact-button'); ?>
		</div>
	</div>
</div>

<?php get_template_part('inc/scrollsignal'); ?>

<h2 class="ctitle mgb90 mgt120 autosize-m">
	<?php the_field('agent_mushthave_title'); ?>
</h2>

<!-- Zone liste des packs en deux colonnes -->

<section class="packsgroups autosize-m">
	<?php
	// crée un tableau avec les deux ACF group pour les manipuler en une seule grande boucle
	$packs = array('basic_pack','advanced_pack');
	$option_nbr = 1;

	// compte le nombre de services pour diviser ensuite en colonnes
	$count_services_cpt = wp_count_posts('services');
	$published_services_cpt = $count_services_cpt->publish;
	$services_cpt_per_column = $published_services_cpt / 2;
	?>

	<?php foreach ($packs as $pack_name) : ?>
		<div class="packsgroups__column">
			<?php if(have_rows($pack_name)): ?>
			<?php while(have_rows($pack_name)) : the_row(); ?>

				<div class="packsgroups__head">
					<h3 class="packsgroups__title">
						<?php the_sub_field('title'); ?>
					</h3>

					<div class="packsgroups__text">
						<?php the_sub_field('intro'); ?>
					</div>
				</div>

				<?php
					// parametres dynamiques pour le filtre WP QUERY
					if($pack_name == "advanced_pack") {
						$offset = $services_cpt_per_column;
					} else {
						$offset = 0;
					}

					// paramètres du filtre WP QUERY
					$args = array(
						'post_type'			=> 'services',
						'posts_per_page'	=> $services_cpt_per_column,
						'offset'			=> $offset
					);

					// WP QUERY
					$loop = new WP_Query($args);
				?>
				<ul class="packsgroups__list">
					<?php while ($loop->have_posts() ) : $loop->the_post(); ?>
						<li class="packsgroups__service">
							<a href="<?php echo get_page_link(11) . '?option=' . $option_nbr; ?>">
								<?php get_template_part('svg/icon-check'); ?>
								<?php the_title(); ?>
							</a>
						</li>
						<?php $option_nbr++; ?>
					<?php endwhile; ?>
				</ul>
				<?php wp_reset_postdata(); ?>

				<div class="packsgroups__link">
					<a class="cbutton" href="<?php echo get_page_link(11) . '&option=' . $pack_name; ?>">
						<?php the_sub_field('button_text'); ?>
					</a>
				</div>

			<?php endwhile; ?>
			<?php endif; ?>
		</div>
	<?php endforeach; ?>
</section>

<h2 class="ctitle mg90 autosize-m">
	<?php the_field('agent_mushthave_title'); ?>
</h2>

<br>
<br>
<br>
<br>
<br>
<br>

<?php get_footer(); ?>

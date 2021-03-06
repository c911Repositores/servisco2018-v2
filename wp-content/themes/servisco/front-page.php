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
				<a class="cbutton cbutton--borderwhite" href="<?php echo get_page_link(13); ?>">
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
						$post_per_page = 999;
					} else {
						$offset = 0;
						$post_per_page = $services_cpt_per_column;
					}

					// paramètres du filtre WP QUERY
					$args = array(
						'post_type'			=> 'services',
						'posts_per_page'	=> $post_per_page,
						'offset'			=> $offset
					);

					// WP QUERY
					$loop = new WP_Query($args);
				?>
				<ul class="packsgroups__list">
					<?php while ($loop->have_posts() ) : $loop->the_post(); ?>
						<li class="packsgroups__service">
							<a href="<?php echo get_page_link(11) . '#service' . $option_nbr; ?>">
								<?php get_template_part('svg/icon-check'); ?>
								<?php the_title(); ?>
							</a>
						</li>
						<?php $option_nbr++; ?>
					<?php endwhile; ?>
				</ul>
				<?php wp_reset_postdata(); ?>

				<div class="packsgroups__link">
					<a class="cbutton" href="<?php echo get_page_link(11) . '?option=' . $pack_name; ?>">
						<?php the_sub_field('button_text'); ?>
					</a>
				</div>

			<?php endwhile; ?>
			<?php endif; ?>
		</div>
	<?php endforeach; ?>
</section>

<h2 class="ctitle mg90 autosize-m">
	<?php the_field('services_title'); ?>
</h2>

<section class="starservices">
	<ul class="starservices__list">
		<?php $args = array(
			'post_type' => 'services',
			'cat' => 4
		); ?>
		<?php $loop = new WP_Query($args); ?>
		<?php while($loop->have_posts()) : $loop->the_post(); ?>

			<li class="starservices__item">
				<a href="<?php echo get_page_link(11) . "?service=" . get_the_ID(); ?>" class="starservices__link">
					<div class="starservices__icon">
						<?php
						$icon_name = get_field('icone_dillustration');
						get_template_part('svg/animated-' . $icon_name);
						?>
					</div>
					<h3 class="starservices__title">
						<?php the_title(); ?>
					</h3>
					<div class="starservices__text">
						<?php the_field('text_short'); ?>
					</div>
				</a>
			</li>

		<?php endwhile; ?>
		<?php wp_reset_postdata(); ?>
	</ul>
</section>

<div class="cbutton-ctn mg60 autosize-m">
	<a href="<?php echo get_page_link(11) . '#services_list'; ?>" class="cbutton">
		<?php the_field('services_link_text_button'); ?>
	</a>
</div>

<span class="verticalseparator"></span>

<h2 class="ctitle mg90 autosize-m">
	<?php the_field('partners_title'); ?>
</h2>

<div class="partners autosize-m">
	<ul class="partners__list" id="js_partners_slider">
		<?php
		$args = array('post_type' => 'partners');
		$loop = new WP_Query($args);
		// compteur pour l'animation (slider fade in fade out)
		// seuls les trois premiers li doivent être visibles
		$visible_cpt = 1;
		while($loop->have_posts()) : $loop->the_post();
		?>
			<?php if($visible_cpt <= 3 ) : ?>
				<li class="partners__item partners__item--selected">
			<?php else : ?>
				<li class="partners__item">
			<?php endif; ?>
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
		<?php
		$visible_cpt++;
		endwhile;
		wp_reset_postdata();
		?>
	</ul>
</div>

<div class="cbutton-ctn mg60 autosize-m">
	<div class="cbutton-ctn__decobox">
		<div class="funarrow">
			<div class="funarrow__arrow">
				<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/arrow-1.svg">
			</div>
			<div class="funarrow__text">
				<?php the_field('fun_arrow_text_partners'); ?>
			</div>
		</div>
	</div>
	<a href="<?php echo get_page_link(13) . '#alink_partners'; ?>" class="cbutton">
		<?php the_field('partners_link_text_button'); ?>
	</a>
</div>

<span class="verticalseparator"></span>

<section class="datanumbers autosize">
	<?php if(have_rows('numbers_list')) : ?>
		<ul id="js-zone-numbers" class="datanumbers__list">
			<?php while (have_rows('numbers_list')) : the_row(); ?>
				<li class="datanumbers__item">
					<div class="datanumbers__icon">
						<?php
						$icon_name = get_sub_field('icon');
						get_template_part('svg/icon-' . $icon_name);
						?>
					</div>
					<div class="datanumbers__title">
						<?php the_sub_field('title'); ?>
					</div>
					<div class="datanumbers__number" data-js-autoincrement="<?php the_sub_field('number'); ?>">
						0
					</div>
				</li>
			<?php endwhile; ?>
		</ul>
	<?php endif; ?>
</section>

<?php get_footer(); ?>

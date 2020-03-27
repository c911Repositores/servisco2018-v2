<?php
/*
* Template Name: quality
* Template Post Type: page
*/
?>
<?php get_header(); ?>
<?php while(have_posts()) : the_post(); ?>

<?php get_template_part('inc/popup-price-mail'); ?>

<div class="cbanner cbanner--quality" data-stp-parallax>
	<h1 class="cbanner__title">
		<?php the_field('page_title'); ?>
	</h1>
	<ul class="cbanner__social">
		<?php get_template_part('inc/social-links'); ?>
	</ul>
</div>

<h2 class="ctitle mg90 autosize-m">
	<?php the_field('percents_title'); ?>
</h2>

<section class="advantagespercents">
	<?php if(have_rows('percents_list')) : ?>
		<ul class="advantagespercents__list" id="js-zone-numbers" data-js-zone-numbers-instastart>
			<?php while (have_rows('percents_list')) : the_row(); ?>
				<li class="advantagespercents__item">
					<h3 class="advantagespercents__title">
						+ <span data-js-autoincrement="<?php the_sub_field('percent'); ?>">0</span> %
					</h3>
					<div class="advantagespercents__text">
						<?php the_sub_field('text'); ?>
					</div>
				</li>
			<?php endwhile; ?>
		</ul>
	<?php endif; ?>
</section>

<span id="services_list" class="verticalseparator"></span>

<h2 class="ctitle mg90 autosize-m">
	<?php the_field('services_title'); ?>
</h2>

<section class="ourservices">
	<?php $args = array('post_type' => 'services'); ?>
	<?php $loop = new WP_Query( $args ); ?>

		<nav class="ourservices__navigation" data-stp-lift-wrapper>
			<ul class="ourservices__navigationlist" data-stp-lift>
				<?php $number_of_service = 1; ?>
				<?php while ($loop->have_posts() ) : $loop->the_post(); ?>
					<li class="ourservices__navigationitem" data-js-button-service-number="<?php echo $number_of_service; ?>">
						<?php echo $number_of_service; ?>. <?php the_title(); ?>
					</li>
					<?php $number_of_service++; ?>
				<?php endwhile; ?>
			</ul>
		</nav>


		<ul class="ourservices__list">
			<?php $number_of_service = 1; ?>
			<?php while ($loop->have_posts() ) : $loop->the_post(); ?>
				<li class="ourservices__item" data-id-service="<?php echo get_the_ID(); ?>">
					<div class="ourservices__target" id="<?php echo "service" . $number_of_service; ?>"></div>

					<div class="ourservices__icon">
						<?php
						$icon_name = get_field('icone_dillustration');
						get_template_part('svg/animated-' . $icon_name);
						?>
					</div>

					<h3 class="ourservices__title">
						<?php the_title(); ?>
					</h3>

					<div class="ourservices__picturelane">
						<div class="ourservices__number">
							<?php echo $number_of_service; ?>
						</div>
						<div class="ourservices__picture block-16-9">
							<div>
								<?php
								// si une vidéo existe, la charger au clic (et ignorer completement un éventuel fichier lié)
								// si un fichier est lié à la photo, afficher dans un lien, sinon un div
								if(get_field('youtube_url')) {
									echo '<div data-service-yt-id-trigger="' . get_field('youtube_url') . '">';
										echo '<span class="ourservices__playerhover"><i class="fab fa-youtube"></i></span>';
								} else if(get_field('file')) {
									echo '<a href="' . get_field('file') . '" title="Télécharger le fichier">';
								} else {
									echo '<div>';
								}

								// sinon, l'image
								$image = get_field('picture');
								$size = 'large'; //thumbnail, medium, large, full, array('700', '600')
								if($image) {
									echo wp_get_attachment_image($image, $size);
								}

								// si un fichier est lié à la photo, fermer un lien, sinon le div
								if(get_field('file')) {
									echo '</a>';
								} else {
									echo '</div>';
								}
								?>
							</div>
						</div>
						<div class="ourservices__pictureright">&nbsp;</div>
					</div>

					<div class="ourservices__textlane">
						<div class="ourservices__decobar">&nbsp;</div>
						<div class="ourservices__text">
							<?php the_field('text'); ?>
							<span class="verticalseparator"></span>
						</div>
						<div class="ourservices__textlaneright">&nbsp;</div>
					</div>
				</li>
				<?php $number_of_service++; ?>
			<?php endwhile; ?>
		</ul>
	<?php wp_reset_postdata(); ?>
</section>

<?php
$yourareredirections_groups = [
	get_field('your_are_agency_block'),
	get_field('your_are_private_block')
];
?>

<div class="white-wrapper-mask">
<section class="yourareredirections">
	<ul class="yourareredirections__list">
		<?php foreach ($yourareredirections_groups as $group): ?>
			<li class="yourareredirections__item">
				<h2 class="yourareredirections__title">
					<?php echo $group['title']; ?>
				</h2>
				<div class="yourareredirections__text">
					<?php echo $group['text']; ?>
				</div>
				<div class="cbutton-ctn">
					<a class="cbutton cbutton--light" href="<?php echo $group['button_link']; ?>">
						<?php echo $group['button_text']; ?>
					</a>
				</div>
			</li>
		<?php endforeach; ?>
	</ul>
</section>

<?php endwhile; ?>
<?php get_footer(); ?>
</div>

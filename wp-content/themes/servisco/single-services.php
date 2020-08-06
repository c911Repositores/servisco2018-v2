<?php get_header(); ?>
<?php while(have_posts()) : the_post(); ?>
<section class="service">
	<div class="service__container">
		<div class="service__content">
			<div class="service__icon">
				<?php
				$icon_name = get_field('icone_dillustration');
				get_template_part('svg/animated-' . $icon_name);
				?>
			</div>
			<h3 class="service__title">
				<?php the_title(); ?>
			</h3>
			<?php $url = urlencode(get_the_permalink()); ?>
			<ul class="service__share">
				<li>
					<a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $url; ?>" target="_blank">
						<i class="fab fa-facebook-square"></i>
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/sharing/share-offsite/?url=<?php echo $url; ?>" target="_blank">
						<i class="fab fa-linkedin"></i>
					</a>
				</li>
				<li>
					<a href="https://twitter.com/intent/tweet?url=<?php echo $url; ?>" target="_blank">
						<i class="fab fa-twitter-square"></i>
					</a>
				</li>
			</ul>
			<div class="service__picture">
				<div class="service__image block-16-9">
					<div>
						<?php
						// si une vidéo existe, la charger au clic (et ignorer completement un éventuel fichier lié)
						// si un fichier est lié à la photo, afficher dans un lien, sinon un div
						if(get_field('youtube_url')) {
							echo '<div data-service-yt-id-trigger="' . get_field('youtube_url') . '">';
								echo '<span class="service__playerhover"><i class="fab fa-youtube"></i></span>';
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
			</div>

			<div class="service__textcontainer">
				<div class="service__text">
					<?php the_field('text'); ?>
				</div>
			</div>
		</div>
	</div>
</section>
<?php endwhile; ?>
<?php get_footer(); ?>
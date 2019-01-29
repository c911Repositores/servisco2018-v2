<?php if (get_field('facebook_link', 'option')) : ?>
	<li>
		<a href="<?php the_field('facebook_link', 'option'); ?>" target="_blank">
			<i class="fab fa-facebook-square"></i>
		</a>
	</li>
<?php endif; ?>
<?php if (get_field('linkedin_url', 'option')) : ?>
	<li>
		<a href="<?php the_field('linkedin_url', 'option'); ?>" target="_blank">
			<i class="fab fa-linkedin"></i>
		</a>
	</li>
<?php endif; ?>
<?php if (get_field('twitter_link', 'option')) : ?>
	<li>
		<a href="<?php the_field('twitter_link', 'option'); ?>" target="_blank">
			<i class="fab fa-twitter-square"></i>
		</a>
	</li>
<?php endif; ?>
<?php if (get_field('pinterest_link', 'option')) : ?>
	<li>
		<a href="<?php the_field('pinterest_link', 'option'); ?>" target="_blank">
			<i class="fab fa-pinterest-square"></i>
		</a>
	</li>
<?php endif; ?>
<?php if (get_field('instagram_link', 'option')) : ?>
	<li>
		<a href="<?php the_field('instagram_link', 'option'); ?>" target="_blank">
			<i class="fab fa-instagram"></i>
		</a>
	</li>
<?php endif; ?>
<?php if (get_field('youtube_link', 'option')) : ?>
	<li>
		<a href="<?php the_field('youtube_link', 'option'); ?>" target="_blank">
			<i class="fab fa-youtube"></i>
		</a>
	</li>
<?php endif; ?>

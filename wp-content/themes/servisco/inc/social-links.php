<?php if (get_field('facebook_link', 'option')) : ?>
	<li>
		<a href="<?php the_field('facebook_link', 'option'); ?>">
			<i class="fab fa-facebook-square"></i>
		</a>
	</li>
<?php endif; ?>
<?php if (get_field('linkedin_url', 'option')) : ?>
	<li>
		<a href="<?php the_field('linkedin_url', 'option'); ?>">
			<i class="fab fa-linkedin"></i>
		</a>
	</li>
<?php endif; ?>
<?php if (get_field('twitter_link', 'option')) : ?>
	<li>
		<a href="<?php the_field('twitter_link', 'option'); ?>">
			<i class="fab fa-twitter-square"></i>
		</a>
	</li>
<?php endif; ?>
<?php if (get_field('pinterest_link', 'option')) : ?>
	<li>
		<a href="<?php the_field('pinterest_link', 'option'); ?>">
			<i class="fab fa-pinterest-square"></i>
		</a>
	</li>
<?php endif; ?>
<?php if (get_field('instagram_link', 'option')) : ?>
	<li>
		<a href="<?php the_field('instagram_link', 'option'); ?>">
			<i class="fab fa-instagram"></i>
		</a>
	</li>
<?php endif; ?>

<?php get_header(); ?>



<br>
<br>
<br>
<br>
<br>
<br>

<div style="width:200px">
	<?php get_template_part('svg/svgvideocamera'); ?>
</div>

<div style="width:200px">
	<?php get_template_part('svg/svg2dmap'); ?>
</div>

<div style="width:200px">
	<?php get_template_part('svg/svg3dmap'); ?>
</div>

<div style="width:200px">
	<?php get_template_part('svg/svgdescriptive'); ?>
</div>

<div style="width:200px">
	<?php get_template_part('svg/svgphotocamera'); ?>
</div>

<div style="width:200px">
	<?php get_template_part('svg/svgvirtualtour'); ?>
</div>

<div style="width:200px">
	<?php get_template_part('svg/svgdrone'); ?>
</div>

<div style="width:200px">
	<?php get_template_part('svg/svgsignboard'); ?>
</div>

<div style="width:200px">
	<?php get_template_part('svg/svgmatterport'); ?>
</div>

<div style="width:200px;">
	<?php get_template_part('svg/svgmeters'); ?>
</div>

<br>
<br>
<br>
<br>
<br>
<br>

<?php
$hero = get_field('home_banner');
if($hero) :
?>
	<div>
		<?php
		$image = get_field('banner_img');
		$size = 'medium'; //thumbnail, medium, large, full, array('700', '600')
		if($image) {
			echo wp_get_attachment_image($image, $size);
		}
		?>
	</div>

	<h1>
		<?php echo $hero['title']; ?>
	</h1>

	<div>
		<?php echo $hero['text']; ?>
	</div>

	<a href="">
		<?php echo $hero['button_text']; ?>
	</a>
<?php endif; ?>

<br>
<br>
<br>
<br>
<br>
<br>
<br>

<?php
$packs = array('basic_pack','advanced_pack');
$option_nbr = 1;
?>
<?php foreach ($packs as $pack_name) : ?>
	<?php if(have_rows($pack_name)): ?>
	<?php while(have_rows($pack_name)) : the_row(); ?>

		<h1>
			<?php the_sub_field('title'); ?>
		</h1>

		<div>
			<?php the_sub_field('intro'); ?>
		</div>

		<?php if(have_rows('options_list')): ?>
			<ul>
				<?php while(have_rows('options_list')) : the_row(); ?>
					<li>
						<a href="<?php echo get_page_link(11) . '?option=' . $option_nbr; ?>">
							<?php the_sub_field('name'); ?>
						</a>
					</li>
					<?php $option_nbr++; ?>
				<?php endwhile; ?>
			</ul>
		<?php endif; ?>

		<a href="<?php echo get_page_link(11) . '&option=' . $pack_name; ?>">
			Découvrir
		</a>

	<?php endwhile; ?>
	<?php endif; ?>
<?php endforeach; ?>

<br>
<br>
<br>
<br>
<br>
<br>

<?php get_footer(); ?>

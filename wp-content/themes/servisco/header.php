<!doctype html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title><?php echo get_bloginfo('name'); ?></title>
		<link rel="profile" href="http://gmpg.org/xfn/11">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">

		<?php wp_head(); ?>
	</head>
	<body <?php body_class(); ?>>

		<button>
			<i class="fas fa-bars"></i>
		</button>

		<ul>
			<?php wp_nav_menu(array('menu' => 'Menu principal', 'items_wrap' => '%3$s', 'container' => false)); ?>
		</ul>

		<ul>
			<?php get_template_part('inc/social-links'); ?>
		</ul>

		<a href="">
			Je suis une agence
		</a>
		
		<br>
		<br>

		<div style="background:black;width:200px;">
			<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo-servisco.svg" alt="SERVISCO REALTY PARTNER OF TOMORROW">
		</div>

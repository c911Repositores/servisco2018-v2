<!doctype html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title><?php echo get_bloginfo('name'); ?></title>
		<link rel="profile" href="http://gmpg.org/xfn/11">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
		<link href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,700,900" rel="stylesheet">

		<?php wp_head(); ?>
	</head>
	<body <?php body_class(); ?>>

		<div class="header-spacer"></div>

		<header class="header">
			<div class="header__logo">
				<a href="<?php echo get_page_link(9); ?>">
					<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo-servisco.svg" alt="SERVISCO REALTY PARTNER OF TOMORROW">
				</a>
			</div>
			<div class="header__agencylink">
				<?php get_template_part('inc/agency-contact-button'); ?>
			</div>

			<?php
			if(isset($_COOKIE["menu"])) {
				$menu = $_COOKIE["menu"];
			}
			?>
			<nav class="header__navbar">
				<button class="header__button<?php echo (($menu === 'on') ? ' header__button--pccrossed' : ''); ?>">
					<span class="header__buttonbar-1"></span>
					<span class="header__buttonbar-2"></span>
					<span class="header__buttonbar-3"></span>
					<span class="header__buttonbar-4"></span>
				</button>
				<ul class="header__navbarlist<?php echo (($menu === 'on') ? ' header__navbarlist--pcopen' : ''); ?>">
					<?php wp_nav_menu(array('menu' => 'Menu principal', 'items_wrap' => '%3$s', 'container' => false)); ?>
				</ul>
			</nav>
		</header>

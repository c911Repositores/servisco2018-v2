<?php

//////////////////////////////////////////////////////////////////////////////////////
///// Import des fichiers css et js du theme
//////////////////////////////////////////////////////////////////////////////////////
function theme_scripts_and_css() {
	wp_enqueue_script('scriptfile', get_stylesheet_directory_uri() . '/assets/js/js-dist.js', array('jquery'));
	// wp_enqueue_script('jqueryuifile', get_stylesheet_directory_uri() . '/node_modules/jquery-ui/js-dist.js', array('jquery'));
	wp_enqueue_style('stylefile', get_stylesheet_directory_uri() . '/assets/css/style.css');
}
add_action('wp_enqueue_scripts', 'theme_scripts_and_css');


//////////////////////////////////////////////////////////////////////////////////////
///// Ajoute le support des menu dans Appearence > Menus
//////////////////////////////////////////////////////////////////////////////////////
add_theme_support("menus");


//////////////////////////////////////////////////////////////////////////////////////
// Activate featured images
//////////////////////////////////////////////////////////////////////////////////////
add_theme_support("post-thumbnails");


//////////////////////////////////////////////////////////////////////////////////////
// Allow SVG
//////////////////////////////////////////////////////////////////////////////////////
function cc_mime_types($mimes) {
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');


//////////////////////////////////////////////////////////////////////////////////////
// Create OPTIONS PAGE
//////////////////////////////////////////////////////////////////////////////////////
if(function_exists('acf_add_options_page')) {
	acf_add_options_page();
}


//////////////////////////////////////////////////////////////////////////////////////
// Create custom post types
//////////////////////////////////////////////////////////////////////////////////////
function create_my_cpt() {
	register_post_type('services',
		array(
			'labels' => array(
				'name' => __('Nos services'),
				'singular_name' => __('Un service')
			),
			'public' => true,
			'menu_icon' => 'dashicons-nametag',
			'taxonomies'  => array('category'),
		)
	);
	register_post_type('partners',
		array(
			'labels' => array(
				'name' => __('Nos partenaires'),
				'singular_name' => __('Un partenaire')
			),
			'public' => true,
			'menu_icon' => 'dashicons-groups',
		)
	);
}
add_action('init', 'create_my_cpt');


//////////////////////////////////////////////////////////////////////////////////////
// Remove wordpress message in admin footer
//////////////////////////////////////////////////////////////////////////////////////
function remove_footer_admin ()
{
	echo '<span id="footer-thankyou">Developed by <a href="http://www.flexvision.be" target="_blank">Flexvision</a></span>';
}
add_filter('admin_footer_text', 'remove_footer_admin');


//////////////////////////////////////////////////////////////////////////////////////
///// Customize login page
//////////////////////////////////////////////////////////////////////////////////////
function my_login_logo_url() {
	return "https://servisco.immo";
}
add_filter('login_headerurl', 'my_login_logo_url');

function my_login_logo_text() {
	return 'Servisco - realty partner of tomorrow';
}
add_filter('login_headertext', 'my_login_logo_text');

function my_login_stylesheet() {
	?>
	<style type='text/css'>
		body.login {
		background-color: #21364F;
		}

		/* logo */
		.login #login h1 a {
		background-image: url(<?php echo get_bloginfo('template_directory'); ?>/assets/img/logo-servisco.svg);
		-webkit-background-size: contain;
		background-size: contain;
		width: auto;
		background-position: center;
		background-repeat: no-repeat;
		}

		/* border-left of error messages */
		.login #login #login_error, .login #login .message, .login #login .success {
		border-color: #fff;
		}

		/* button */
		.wp-core-ui #login .button-primary {
		background-color: #21364F;
		border-color: #21364F;
		box-shadow: none;
		text-shadow: none;
		}
		.wp-core-ui #login .button-primary:hover {
		background-color: #009EE2;
		border-color: #009EE2;
		}

		/* links bottom (password etc) */
		.login #login p a {
		color: #fff;
		}
		.login #login p a:hover {
		color: #009EE2;
		}
		.privacy-policy-page-link {
		display: none;
		}
	</style>
	<?php
}
add_action('login_enqueue_scripts', 'my_login_stylesheet');

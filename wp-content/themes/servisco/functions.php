<?php

//////////////////////////////////////////////////////////////////////////////////////
///// Import des fichiers css et js du theme
//////////////////////////////////////////////////////////////////////////////////////
function theme_scripts_and_css() {
	wp_enqueue_script('scriptfile', get_stylesheet_directory_uri() . '/assets/js/js-dist.js', array('jquery'));
	wp_enqueue_script('jqueryuifile', get_stylesheet_directory_uri() . '/assets/js/js-dist.js', array('jquery'));
	wp_enqueue_style('stylefile', get_stylesheet_directory_uri() . '/assets/css/style.css');
}
add_action('wp_enqueue_scripts', 'theme_scripts_and_css');


//////////////////////////////////////////////////////////////////////////////////////
///// Ajoute le support des menu dans Appearence > Menus
//////////////////////////////////////////////////////////////////////////////////////
add_theme_support("menus");


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

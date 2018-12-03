<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/** Upgrade the memory allowed. */
define('WP_MEMORY_LIMIT', '256M');

define( 'WPCF7_AUTOP', false );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'AyMSs+6tRPhP6vXl4Mpczf4GxU2qxmEFe3QRgBrZpaUYbBaf8dhZnNNRmSqQrEiX1/I8MhZuRr6v8Tw5Pt20mA==');
define('SECURE_AUTH_KEY',  'U+zymu4WV0iF1bMNJxTexFZmxcxZfaJKV9zPNLXyY1pojpGpI1r/fFV1C/yplUAyw8huQFDHe96FNXBES5b9Mg==');
define('LOGGED_IN_KEY',    '9FaQCxfDyezQVLPiMciOE/XWhxbwqRsvyud5FbN2q3WjuWt2XsZfKOt/udL2NrQlPUppsbcqmAQXWlFr0OLOlg==');
define('NONCE_KEY',        'BWWeH1PdR9uwblAwaCftGMYYQrr29FVGjeAHRIPPn+05X/1ibrtzRPHl8itLYVWrfmLaKSahCgbnWasZiAvhdQ==');
define('AUTH_SALT',        'NwxxG+BJaEHe3hS5BBZ+ssfWj9eJpvo9Xa4QDdDNY4iytK+YS+5ydh942MWZan7N+PPftRaAWab8jTPH6htXZQ==');
define('SECURE_AUTH_SALT', 'BX8qK0AkGHLyTqYuxvMhK3UDnawrTQR05iEvTbV9LMRr/4Dgn3ZR0DtzhemMwWWOes+Ol5D8rVACT+CC+AFgAQ==');
define('LOGGED_IN_SALT',   'LUPj7CruYgBwkxuFzZSeonL7thPjPl1hpX34tz96yCc9CxU6raI1MIT9wUZDyT3VqMpMJ69PS7XkBlONlbptIw==');
define('NONCE_SALT',       'yHeEhPDNAhH4xvCMfjP6x0YNz7Xint6+1d84gaWjASZsjaVunJ3+b8+4bUd9B4PRTFtIgRzu/OqS4bkOOiNXdQ==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);


/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

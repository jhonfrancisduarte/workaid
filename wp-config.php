<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'workaid' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '!hEQVwMnAw^s>Z)z;tTg.]Jl2uf~rq__1UuD>Q>h4laTn`Z*qYAUm0p!3u)DhDt/' );
define( 'SECURE_AUTH_KEY',  'C:Y#=Vwt:|OW)GH|x(U^gy-+ew*Kds$1f$/[.:8}FJGPRm=HCc#@TGL#s1nY*%5m' );
define( 'LOGGED_IN_KEY',    '0=9:=w,< j,y5[3o;--=Zc,XS*7f]z|~=]oPytz4F+?1X;9c>rU}t_gaFO3Ro6;O' );
define( 'NONCE_KEY',        'ax(63+}t>VoI+=0!BAGUS<yoV#R$bc{1U81wrc:?L#0=[6A3jr@gPhq(m[`%Qx.V' );
define( 'AUTH_SALT',        '0o|@(&>N`-NpI!$#?/{&}p(@h7#_JI9|FK<Uhh|7Oqr`+5Prtx-sw9k%rrTW`3>{' );
define( 'SECURE_AUTH_SALT', 'Fa(Bn^9kzw+7:m(6+,@u[DBO[EHcy/^ApQnRz}:Ms:8@m%iT*57{>z;m2_G<U@bJ' );
define( 'LOGGED_IN_SALT',   's2{PjTTZ{HInCt:G]teAKsjDhbmwRHS7G5?;(.DKCA8fe{7GefR~eI?U`|j6@sFd' );
define( 'NONCE_SALT',       ']:VCD_A^OnVCn1Pwm*y=FP,m2*|~lVbPj!/Jazi8E,D[os,y*I!Fj7+)%_B8<K;?' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

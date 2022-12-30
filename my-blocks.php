<?php
/**
 * Plugin Name:       My Blocks
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       my-blocks
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_my_blocks_block_init() {
	register_block_type( __DIR__ . '/build/example' );
	register_block_type( __DIR__ . '/build/block-1' );
	register_block_type( __DIR__ . '/build/block-2' );
	register_block_type( __DIR__ . '/build/team-members' );
	register_block_type( __DIR__ . '/build/team-member' );
	register_block_type( __DIR__ . '/build/block-template' );
	register_block_type( __DIR__ . '/build/accordion' );
	register_block_type( __DIR__ . '/build/accordion/accordion-item' );
	register_block_type( __DIR__ . '/build/tabs' );
	register_block_type( __DIR__ . '/build/tabs/tab' );
}
add_action( 'init', 'create_block_my_blocks_block_init' );

function my_blocks_load_scripts() {
	if ( ! is_admin() && has_block( 'create-block/accordion' ) ) {
		wp_enqueue_script( 'accordion_js', plugins_url( './src/accordion/accordion.js', __FILE__ ));
	}

	if ( ! is_admin() && has_block( 'create-block/tabs' ) ) {
		wp_enqueue_script( 'tabs_js', plugins_url( './src/tabs/tabs.js', __FILE__ ));
	}

	if ( ! is_admin() ) {
		wp_enqueue_script( 'slick_js', '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js');
		wp_enqueue_style( 'slick_css', '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css');

		wp_enqueue_script( 'frontend_js', plugins_url( './src/filters/frontend.js', __FILE__ ), array('jquery'));
	}
}
add_action('wp_enqueue_scripts', 'my_blocks_load_scripts');

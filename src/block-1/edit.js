/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
} from '@wordpress/block-editor';

import { PanelBody, RangeControl, ToggleControl } from '@wordpress/components';
import classnames from 'classnames';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object} props               Block props.
 * @param {Object} props.attributes    Block's attributes.
 * @param {Object} props.setAttributes Function to set block's attributes.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { text, alignment, shadow, shadowOpacity } = attributes;

	// Print attributes
	// console.log( 'Props', props );
	// console.log( 'Attributes', attributes );

	// Set Text
	const onChangeText = ( newText ) => {
		setAttributes( { text: newText } );
	};

	// Set alignment
	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { alignment: newAlignment } );
	};

	const onChangeShadowOpacity = ( newShadowOpacity ) => {
		setAttributes( { shadowOpacity: newShadowOpacity } );
	};

	// Toggle Shadow
	const toggleShadow = () => {
		setAttributes( { shadow: ! shadow } );
	};

	// Set Class
	const classes = classnames( `text-align-${ alignment }`, {
		'has-shadow': shadow,
		[ `shadow-opacity-${ shadowOpacity }` ]: shadow && shadowOpacity,
	} );

	return (
		<>
			{ /* Settings Sidebar */ }
			<InspectorControls>
				<PanelBody title={ __( 'Shadow Setting', 'my-blocks' ) }>
					<ToggleControl
						label={ __( 'Toggle Shadow', 'my-blocks' ) }
						checked={ shadow }
						onChange={ toggleShadow }
					/>
					{ shadow && (
						<RangeControl
							label={ __( 'Shadow Setting', 'my-blocks' ) }
							value={ shadowOpacity }
							min={ 10 }
							max={ 40 }
							step={ 10 }
							onChange={ onChangeShadowOpacity }
						/>
					) }
				</PanelBody>
			</InspectorControls>

			{ /* Block Toolbar */ }
			<BlockControls
				controls={ [
					{
						icon: 'admin-page',
						title: __( 'Shadow', 'my-blocks' ),
						onClick: toggleShadow,
					},
				] }
			>
				<AlignmentToolbar
					value={ alignment }
					onChange={ onChangeAlignment }
				/>
			</BlockControls>

			<RichText
				{ ...useBlockProps( {
					className: classes,
				} ) }
				onChange={ onChangeText }
				value={ text }
				placeholder={ __( 'Your Text', 'my-blocks' ) }
				tagName="h2"
				allowedFormats={ [] }
			/>
		</>
	);
}

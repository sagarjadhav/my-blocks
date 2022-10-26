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
	InnerBlocks,
	InspectorControls,
	RichText,
} from '@wordpress/block-editor';

import { PanelBody, ToggleControl } from '@wordpress/components';
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
	const { title, isOpen } = attributes;

	// Print attributes
	// console.log( 'Props', props );
	// console.log( 'Attributes', attributes );

	// Set Text
	const onChangeText = ( newText ) => {
		setAttributes( { title: newText } );
	};

	// Toggle isOpen
	const toggleOpen = () => {
		setAttributes( { isOpen: ! isOpen } );
	};

	// Set Class
	const classes = classnames( 'accordion__item', {
		accordion__active: isOpen,
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Accordion Item Setting', 'my-blocks' ) }
				>
					<ToggleControl
						label={ __( 'Display as open', 'my-blocks' ) }
						checked={ isOpen }
						onChange={ toggleOpen }
					/>
				</PanelBody>
			</InspectorControls>

			<div
				{ ...useBlockProps( {
					className: classes,
				} ) }
			>
				<div className="accordion__handle" role="button">
					<RichText
						tagName="div"
						placeholder={ __( 'Write title…', 'ex' ) }
						className="accordion__handle-text"
						value={ title }
						onChange={ onChangeText }
						allowedFormats={ [ 'core/bold', 'core/italic' ] }
					/>
					<span className="accordion__handle-icon">SVG</span>
				</div>

				<div className="accordion__content">
					<InnerBlocks
						template={ [
							[
								'core/paragraph',
								{
									placeholder: __(
										'Accordion content…',
										'my-blocks'
									),
								},
							],
						] }
						templateLock={ false }
					/>
				</div>
			</div>
		</>
	);
}

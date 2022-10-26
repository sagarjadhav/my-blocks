/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @param {Object} props               Block props.
 * @param {Object} props.attributes    Block's attributes.
 * @param {Object} props.setAttributes Function to set block's attributes.
 *
 * @return {WPElement} Element to render.
 */
export default function save( props ) {
	const { attributes } = props;
	const { title, isOpen } = attributes;

	// Set Class
	const classes = classnames( 'accordion__item', {
		accordion__active: isOpen,
	} );

	return (
		<div
			{ ...useBlockProps.save( {
				className: classes,
			} ) }
		>
			<div className="accordion__handle" role="button">
				<RichText.Content
					tagName="div"
					className="accordion__handle-text"
					value={ title }
				/>
				<span className="accordion__handle-icon">SVG</span>
			</div>

			<div className="accordion__content">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}

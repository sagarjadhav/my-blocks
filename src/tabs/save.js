/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
const { RawHTML } = wp.element;

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
	const { uniqueId, tabLabelsArray } = attributes;

	const blockProps = useBlockProps.save( {
		className: `tabs-${ uniqueId }`,
	} );

	return (
		<div { ...blockProps }>
			<ul
				className="tab-labels"
				role="tablist"
				aria-label="tabbed content"
			>
				{ tabLabelsArray.map( ( label, i ) => {
					return (
						<li
							key={ i }
							className={
								i === 0 ? 'tab-label active' : 'tab-label'
							}
							role="tab"
							aria-selected={ i === 0 ? 'true' : 'false' }
							aria-controls={ label }
							tabIndex="0"
						>
							<RawHTML>{ label }</RawHTML>
						</li>
					);
				} ) }
			</ul>
			<div className="tab-content">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}

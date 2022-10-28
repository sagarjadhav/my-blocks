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
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import { subscribe } from '@wordpress/data';

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
	const { attributes, setAttributes, clientId } = props;
	const { tabLabel, blockIndex } = attributes;

	const parentBlockID = wp.data
		.select( 'core/block-editor' )
		.getBlockParentsByBlockName( clientId, [ 'create-block/tabs' ] );

	const savedBlockIndex = blockIndex;

	const getBlockIndex = wp.data
		.select( 'core/block-editor' )
		.getBlockOrder( parentBlockID )
		.indexOf( clientId );

	const unsubscribe = subscribe( () => {
		const newBlockIndex = wp.data
			.select( 'core/block-editor' )
			.getBlockOrder( parentBlockID )
			.indexOf( clientId );

		const blockIndexChange = newBlockIndex !== savedBlockIndex;

		if ( blockIndexChange ) {
			unsubscribe();
			setAttributes( { blockIndex: newBlockIndex } );
			wp.data
				.dispatch( 'core/block-editor' )
				.updateBlockAttributes( parentBlockID, {
					updateChild: true,
				} );
		}
	} );

	const onChangeTabLabel = ( newTabLabel ) => {
		setAttributes( { tabLabel: newTabLabel } );
		setAttributes( { blockIndex: getBlockIndex } );
		wp.data
			.dispatch( 'core/block-editor' )
			.updateBlockAttributes( parentBlockID, { updateChild: true } );
	};

	return (
		<div
			{ ...useBlockProps( {
				className: 'tab-name',
			} ) }
		>
			<RichText
				tagName="p"
				className={ `tab_label` }
				value={ tabLabel }
				onChange={ onChangeTabLabel }
				placeholder={ __( 'Tab label..', 'my-blocks' ) }
			/>
			<InnerBlocks
				allowedBlocks={ true }
				template={ [
					[
						'core/paragraph',
						{
							placeholder: __( 'Add tab content..', 'my-blocks' ),
						},
					],
				] }
			/>
		</div>
	);
}

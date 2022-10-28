/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

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
	const { uniqueId, tabLabelsArray, updateChild } = attributes;

	// set unique ID
	setAttributes( {
		uniqueId: clientId.slice( 0, 8 ),
	} );

	// Build labels array
	const BuildTabLabelsArray = () => {
		// function gets child block attributes and saves as an array to parent attributes
		const parentBlockID = clientId;
		const { innerBlockCount } = useSelect( ( select ) => ( {
			innerBlockCount:
				select( 'core/block-editor' ).getBlockCount( parentBlockID ),
		} ) );

		const tabLabels = [];

		for ( let block = 0; block < innerBlockCount; block++ ) {
			const tabLabel = wp.data
				.select( 'core/block-editor' )
				.getBlocks( parentBlockID )[ block ].attributes.tabLabel;
			tabLabels.push( tabLabel );
		}

		return tabLabels;
	};

	const labelsArray = BuildTabLabelsArray();
	const labelLengthChange = labelsArray.length !== tabLabelsArray.length;

	if ( labelLengthChange || updateChild ) {
		setAttributes( { tabLabelsArray: labelsArray } );
		setAttributes( { updateChild: false } );
	}

	return (
		<div
			{ ...useBlockProps( {
				className: `tabs-${ uniqueId }`,
			} ) }
		>
			<InnerBlocks
				allowedBlocks={ [ 'create-block/tab' ] }
				template={ [ [ 'create-block/tab' ] ] }
				templateLock={ false }
				// renderAppender={ InnerBlocks.ButtonBlockAppender }
			/>
		</div>
	);
}

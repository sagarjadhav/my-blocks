/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
// import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

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
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	const BLOCKS_TEMPLATE = [
		[
			'core/heading',
			{ level: 2, content: 'Example Nested Block Template' },
		],
		[
			'core/paragraph',
			{
				content: 'Lorem ipsum dolor sit amet labore cras venenatis.',
			},
		],
		[
			'core/columns',
			{},
			[
				[
					'core/column',
					{},
					[
						[
							'core/heading',
							{ level: 3, content: 'Sub Heading 1' },
						],
						[
							'core/paragraph',
							{
								content:
									'Lorem ipsum dolor sit amet id erat aliquet diam ullamcorper tempus massa eleifend vivamus.',
							},
						],
					],
				],
				[
					'core/column',
					{},
					[
						[
							'core/heading',
							{ level: 3, content: 'Sub Heading 2' },
						],
						[
							'core/paragraph',
							{
								content:
									'Morbi augue cursus quam pulvinar eget volutpat suspendisse dictumst mattis id.',
							},
						],
					],
				],
				[
					'core/column',
					{},
					[
						[
							'core/heading',
							{ level: 3, content: 'Sub Heading 2' },
						],
						[
							'core/paragraph',
							{
								content:
									'Morbi augue cursus quam pulvinar eget volutpat suspendisse dictumst mattis id.',
							},
						],
					],
				],
			],
		],
	];

	return (
		<div { ...useBlockProps() }>
			<InnerBlocks
				template={ BLOCKS_TEMPLATE }
				allowedBlocks={ [
					// 'core/columns',
					'core/column',
					'core/heading',
					'core/paragraph',
				] }
				templateLock="insert"
				renderAppender={ false }
			/>
		</div>
	);
}

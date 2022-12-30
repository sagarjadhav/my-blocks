import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';

function addCoverAttribute(settings, name) {
	if (typeof settings.attributes !== 'undefined') {
		if (name === 'core/query') {
			settings.attributes = Object.assign(settings.attributes, {
				hideOnMobile: {
					type: 'boolean',
					default: false,
				}
			});
		}
	}

	return settings;
}
 
wp.hooks.addFilter(
	'blocks.registerBlockType',
	'my-blocks/cover-custom-attribute',
	addCoverAttribute
);

const modifyEdit = (BlockEdit) => {
	return (props) => {
        if ( props.name !== 'core/query' ) {
            return (
                <BlockEdit { ...props } />
            );
        }

        const { attributes, setAttributes, isSelected } = props;
        const { hideOnMobile } = attributes;

        // Toggle Hide
        const toggleHide = () => {
            setAttributes( { hideOnMobile: ! hideOnMobile } );
        };

        if (hideOnMobile) {
            setAttributes( { className: 'slider' } );
        } else {
            setAttributes( { className: '' } );
        }

		return (
            <>
				<BlockEdit {...props} />
				{isSelected && (props.name === 'core/query') && 
                    <InspectorControls>
                        <PanelBody title={ __( 'Slider Settings', 'my-blocks' ) }>
                            <ToggleControl
                                label={ __( 'Enable slider', 'my-blocks' ) }
                                checked={ hideOnMobile }
                                onChange={ toggleHide }
                            />
                        </PanelBody>
                    </InspectorControls>
				}
			</>
		);
	};
};

addFilter(
    'editor.BlockEdit',
    'my-blocks/change-edit',
    modifyEdit
);

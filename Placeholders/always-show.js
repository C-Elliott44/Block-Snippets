/**
 * This Placeholder will always SHOW
 * */ 

import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { Placeholder, TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, isSelected, setAttributes } ) {
    return (
        <div { ...useBlockProps() }>
            <Placeholder
                label={ __( 'Gutenpride Block', 'testblock' ) }
                instructions={ __( 'Add your message', 'testblock' ) }
            >
                <TextControl
                    value={ attributes.message }
                    onChange={ ( val ) => setAttributes( { message: val } ) }
                />
            </Placeholder>
        </div>
    );
}
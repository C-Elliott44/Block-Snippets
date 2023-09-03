/**
 * This Placeholder will only SHOW when the block is selected (editing) 
 * and while HIDE when not (editing other blocks)
 * */ 

import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { Placeholder, TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, isSelected, setAttributes } ) {
	return (
        <div { ...useBlockProps() }>
            { attributes.message && ! isSelected ? (
                <div>{ attributes.message }</div>
            ) : (
                <Placeholder
                    label="Gutenpride Block"
                    instructions="Add your message"
                >
                    <TextControl
                        value={ attributes.message }
                        onChange={ ( val ) =>
                            setAttributes( { message: val } )
                        }
                    />
                </Placeholder>
            ) }
        </div>
    );
}

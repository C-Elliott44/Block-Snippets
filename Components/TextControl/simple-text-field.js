/**
 * Simple Text Field - NO Placeholder
 */

import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { Placeholder, TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, isSelected, setAttributes } ) {
    const blockProps = useBlockProps();
    return (
        <TextControl
            { ...blockProps }
            value={ attributes.message }
            onChange={ ( val ) => setAttributes( { message: val } ) }
        />
    );
}

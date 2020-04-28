import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';

import DraggableColorBox from './DraggableColorBox';

const DraggableColorList = SortableContainer((props) => {
    const { colors, deleteColor } = props;
    
    return (
        <div style={{ height: '100%' }}>
            {colors.map((color, i) =>
                <DraggableColorBox key={color.name} {...color} deleteColor={deleteColor} index={i} />)}
        </div>
    );
});

export default DraggableColorList;

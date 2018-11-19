import React from 'react';
import { Panel } from 'react-bootstrap';
import ListDetaildItem from './listDetaildItem';

const ListDetailsComponent = (props) => {


    let detailedTemplate = props.detailedItems.map((listItem) =>
        <ListDetaildItem key={listItem.id} item={listItem} />
    )
    return (
        <Panel>
            {detailedTemplate}
        </Panel>
    );
}

export default ListDetailsComponent;
import React from 'react';
import { Panel, Image, Col, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import thumbnail from '../../assets/images/thumbnail.png';

const ListDetailedItem = (props) => {
    return (
        <Panel.Body key={props.item.id}>
        <Col xs={6} md={6} >
            <Image src={thumbnail} thumbnail />
        </Col>
        <Col xs={6} md={6}>
                <FormGroup>
                    <ControlLabel>EquipmentName</ControlLabel>
                    <FormControl type="text" defaultValue={props.item.EquipmentName}/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Vendor</ControlLabel>
                    <FormControl type="text" defaultValue={props.item.Vendor} />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Location</ControlLabel>
                    <FormControl type="text" defaultValue={props.item.Location} />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Model</ControlLabel>
                    <FormControl type="text" defaultValue={props.item.Model} />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Serial</ControlLabel>
                    <FormControl type="text"  defaultValue={props.item.Serial} />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Description</ControlLabel>
                    <FormControl componentClass="textarea" defaultValue={props.item.Description} placeholder="textarea" />
                </FormGroup>
        </Col>
    </Panel.Body>
    );
}

export default ListDetailedItem;
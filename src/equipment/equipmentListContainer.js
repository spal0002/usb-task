import React, { Component } from 'react';
import { ListGroupItem, ListGroup } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import {  Breadcrumb, Col} from 'react-bootstrap';
import ListDetailsComponent from './components/ListDetailsComponent';
import Aux from '../hoc/aux';
import * as actionBuilder from "../actions/index";
import * as services from '../services/index';


class ListItemsComponent extends Component {

    state = {
        equipementId: null,
        breadcrumb: ["Device Name"],
        detailedItems: []
    }

    componentDidMount() {
        this.props.loadDevices();
        this.setState({
            detailedItems: services.getDevices()
        })
    }

    render() {

        const setSerial = (item) => {
            let newBreadcrumb = this.state.breadcrumb;
            newBreadcrumb[1] = item.EquipmentName
            this.setState({
                equipementId: item.id,
                breadcrumb: newBreadcrumb,
                detailedItems: [services.getEquipementItems(item.id)]
            })
        }

        let listItems = this.props.devices.map((item) =>
            <ListGroupItem  href="#" onClick={(evt) => setSerial(item)} active={this.state.equipementId === item.id } key={item.id}>{item.EquipmentName}</ListGroupItem>
        )

        let detailedTemplate = this.state.breadcrumb.map((breadcrumb) =>
            <Breadcrumb.Item key={breadcrumb} onClick={() => breadcrumb === 'Device Name' ? this.setState({breadcrumb: ["Device Name"], detailedItems: services.getDevices()}): null} >{breadcrumb}</Breadcrumb.Item>)

        return (
            <Aux>
                <Breadcrumb>
                    {detailedTemplate}
                </Breadcrumb>
                <Col xs={8} md={8}>
                    <ListDetailsComponent detailedItems={this.state.detailedItems} />
                </Col>
                <Col xs={4} md={4}>
                    <ListGroup>
                    <ListGroupItem href="#" active className="text-center">
                        Devices
                    </ListGroupItem>
                    </ListGroup>
                    
                    <ListGroup>
                        <ListGroupItem href="#" className="text-lab">
                            Device Name
                        </ListGroupItem>
                        {listItems}
                    </ListGroup>
                </Col>
            </Aux>
        );
    }

}


const mapStateToProps = (state) => {
    return {
        devices: state.deviceData.devices
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadDevices: () => dispatch(actionBuilder.loadDevices()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListItemsComponent));

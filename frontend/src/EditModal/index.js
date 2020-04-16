import React from 'react';
import './Modal.css';
import { Modal, Button } from 'react-materialize';
import _ from 'lodash';
import ModalForm from './Components/ModalForm';

export default class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.selectedBoxData,
    };
  }

  UNSAFE_componentWillReceiveProps(props) {
    if (!_.isEqual(props, this.state.date)) {
      const new_data = _.clone(props.selectedBoxData);
      this.setState({
        data: new_data,
      });
    }
  }

  render() {
    if (this.props.opened) {
      return (
        <Modal
          actions={[
            <Button onClick={() => this.props.applyChanges(this.state.data)} flat modal='close' node='button' waves='green'>
              APPLY
            </Button>,
            <Button flat modal='close' node='button' waves='green'>
              CANCEL
            </Button>,
          ]}
          bottomSheet={false}
          fixedFooter={false}
          header='Edit Information'
          id='EditModal'
          open={true}
          options={{
            dismissible: true,
            endingTop: '10%',
            inDuration: 250,
            onCloseEnd: this.props.onClose,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            opacity: 0.5,
            outDuration: 250,
            preventScrolling: true,
          }}
        >
          <ModalForm
            data={this.state.data}
            parents_data={this.props.parents_data}
            handleInputChange={(value, key) => this.props.handleInputChange(value, key)}
          />
        </Modal>
      );
    } else {
      return <div></div>;
    }
  }
}

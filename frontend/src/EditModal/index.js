import React from 'react';
import './Modal.css';
import { Modal, Button, Icon } from 'react-materialize';
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
      const header_title = this.props.type === 'edit' ? 'EDIT ALIEN' : 'NEW ALIEN';

      // Button to create or edit an alien
      const apply_button =
        this.props.type === 'edit' ? (
          <Button onClick={() => this.props.applyChanges(this.state.data)} flat modal='close' node='button' waves='green'>
            APPLY
          </Button>
        ) : (
          <Button onClick={() => this.props.applyNew(this.state.data)} flat modal='close' node='button' waves='green'>
            CREATE
          </Button>
        );

      const delete_button =
        this.props.type === 'edit' ? (
          <div id='delete_button'>
            <Button onClick={() => this.props.applyDelete(this.state.data['id'])} flat modal='close' node='button' waves='green'>
              <Icon>delete</Icon>
            </Button>
          </div>
        ) : null;

      return (
        <Modal
          actions={[
            apply_button,
            <Button flat modal='close' node='button' waves='green'>
              CANCEL
            </Button>,
          ]}
          bottomSheet={false}
          fixedFooter={false}
          header={header_title}
          id='Modal'
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
          {delete_button}
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

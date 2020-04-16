import React from 'react';
import Header from './Header';
import Body from './Body';
import data from './API/all_data.json'; //Get example data from API folder
import EditModal from './EditModal';
import _ from 'lodash';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [data],
      selectedBoxData: {},
      modalOpened: false,
    };
  }

  // Get alien data for the modal form
  handleEditData(data) {
    this.setState({
      selectedBoxData: data,
      modalOpened: true,
    });
  }

  // Reset modal form data on close
  handleModalClose() {
    this.setState({
      selectedBoxData: {},
      modalOpened: false,
    });
  }

  // Change modal form data when input change
  handleInputChange(value, key) {
    var selectedBoxData = this.state.selectedBoxData;
    selectedBoxData[key] = value;

    this.setState({
      selectedBoxData: selectedBoxData,
    });
  }

  // Confirm and save changes
  applyChanges(data) {
    var old_state = _.clone(this.state.data);
    var new_data = _.clone(this.state.data[0]);
    for (var index in new_data) {
      if (new_data[index]['id'] === data.id) {
        new_data[index] = data;
        break;
      }
    }
    old_state.push(new_data);
    this.setState({ data: old_state }, () => {
      console.log(this.state.data);
    });
  }

  // Get previous data
  undoChanges() {
    var old_state = _.clone(this.state.data);
    old_state.pop();
    this.setState({ data: old_state });
  }

  render() {
    var parents_data = _.filter(data, { type: 'alpha' });

    return (
      <div className='App'>
        <Header undoChanges={() => this.undoChanges()} />
        <Body data={this.state.data[this.state.data.length - 1]} onClickEditData={(data) => this.handleEditData(data)} />
        <EditModal
          selectedBoxData={this.state.selectedBoxData}
          opened={this.state.modalOpened}
          onClose={() => this.handleModalClose()}
          parents_data={parents_data}
          handleInputChange={(value, key) => this.handleInputChange(value, key)}
          applyChanges={(new_data) => this.applyChanges(new_data)}
        />
      </div>
    );
  }
}

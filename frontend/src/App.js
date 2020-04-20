import React from 'react';
import Header from './Header';
import Body from './Body';
// import data from './API/all_data.json'; //Get example data from API folder
import EditModal from './EditModal';
import _ from 'lodash';
import M from 'materialize-css';
import { fetchData } from './API/Fetch';
import moment from 'moment';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedBoxData: {},
      modalOpened: false,
      modalType: '',
    };
  }

  async componentWillMount() {
    const data = await fetchData('GET', '/', null);
    this.setState({ data: [data] });
  }

  // New alien modal form
  handleNewData() {
    this.setState({
      modalOpened: true,
      modalType: 'new',
    });
  }

  // Get alien data for the edit modal form
  handleEditData(data) {
    this.setState({
      selectedBoxData: data,
      modalOpened: true,
      modalType: 'edit',
    });
  }

  // Reset modal form data on close
  handleModalClose() {
    this.setState({
      selectedBoxData: {},
      modalOpened: false,
      modalType: '',
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
    var new_data = _.clone(this.state.data[this.state.data.length - 1]);
    for (var index in new_data) {
      if (new_data[index]['id'] === data.id) {
        new_data[index] = data;
        break;
      }
    }
    old_state.push(new_data);
    this.setState({ data: old_state });
    M.Toast.dismissAll();
    M.toast({ html: 'Changes made succesfully' });
  }

  applyNew(data) {
    if (!data.parent_id) {
      data.parent_id = 0;
    }
    var old_state = _.clone(this.state.data);
    var new_data = _.clone(this.state.data[this.state.data.length - 1]);

    const last_id = new_data[0] ? _.orderBy(new_data, ['id'], ['desc'])[0]['id'] : 0;
    const new_id = parseInt(last_id) + 1;
    data['id'] = new_id;
    new_data.push(data);
    old_state.push(new_data);
    this.setState({ data: old_state });
    M.Toast.dismissAll();
    M.toast({ html: 'Creation made succesfully' });
  }

  applyDelete(id) {
    var old_state = _.clone(this.state.data);
    var old_data = _.clone(this.state.data[this.state.data.length - 1]);

    // Delete all fields with selected id
    var new_data = _.reject(old_data, function (alien) {
      return parseInt(alien['id']) === id;
    });

    // Delete parent_id field from childs
    new_data = new_data.map((x) => {
      if (x.parent_id === id) {
        x.parent_id = 0;
      }
      return x;
    });
    old_state.push(new_data);
    this.setState({ data: old_state });
    M.Toast.dismissAll();
    M.toast({ html: 'Delete made succesfully' });
  }

  // Get previous data
  undoChanges() {
    if (this.state.data.length > 1) {
      var old_state = _.clone(this.state.data);
      old_state.pop();
      this.setState({ data: old_state });
    }
  }

  async handleSaveData() {
    M.Toast.dismissAll();
    M.toast({ html: 'Saving...' });

    // Check which rows have to be deleted
    const old_data = this.state.data[0];
    const new_data = this.state.data[this.state.data.length - 1];
    var delete_ids = [];
    for (var alien of old_data) {
      var exists = _.find(new_data, (old_alien) => {
        return old_alien.id === alien.id;
      });
      if (!exists) {
        delete_ids.push(alien.id);
      }
    }

    // Delete ids
    const deleteRequestBody = delete_ids;
    await fetchData('DELETE', '/deleteAll', deleteRequestBody);

    // Update collection
    const updateRequestBody = this.state.data[this.state.data.length - 1];
    await fetchData('POST', '/saveOrUpdateMultiple', updateRequestBody, () => {
      M.Toast.dismissAll();
      M.toast({ html: 'Saved succesfully' });
    });
  }

  render() {
    var parents_data = _.filter(this.state.data[this.state.data.length - 1], { type: 'alpha' });
    return (
      <div className='App'>
        <Header undoChanges={() => this.undoChanges()} onClickNewData={() => this.handleNewData()} handleSaveData={() => this.handleSaveData()} />
        <Body data={this.state.data[this.state.data.length - 1]} onClickEditData={(data) => this.handleEditData(data)} />
        <EditModal
          selectedBoxData={this.state.selectedBoxData}
          opened={this.state.modalOpened}
          onClose={() => this.handleModalClose()}
          parents_data={parents_data}
          handleInputChange={(value, key) => this.handleInputChange(value, key)}
          applyChanges={(new_data) => this.applyChanges(new_data)}
          applyNew={(new_data) => this.applyNew(new_data)}
          applyDelete={(id) => this.applyDelete(id)}
          type={this.state.modalType}
        />
      </div>
    );
  }
}

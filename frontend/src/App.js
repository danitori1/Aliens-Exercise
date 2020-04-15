import React from 'react';
import Header from './Header';
import Body from './Body';
import data from './API/all_data.json'; //Get example data from API folder

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [data],
    };
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Body data={this.state.data[0]} />
      </div>
    );
  }
}

import React from 'react';
import _ from 'lodash';

import { TextInput, RadioGroup, Select, Button } from 'react-materialize';

import './ModalForm.css';

function SelectOptions(props) {
  const options = props.parents_data.map((x) => {
    return (
      <option value={x.id}>
        {x.id} - {x.name} - {x.planet}
      </option>
    );
  });
  return options;
}

export default class ModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='ModalForm'>
        <div className='row'>
          <form className='col s12'>
            <div className='row' id='InputsRow'>
              <div class='input-field col s12 m12 l12'>
                <TextInput
                  id='input_name'
                  s='12'
                  m='12'
                  l='6'
                  value={this.props.data.name}
                  onChange={(e) => this.props.handleInputChange(e.target.value, 'name')}
                  label='Name'
                />
                <TextInput
                  id='input_planet'
                  s='12'
                  m='12'
                  l='6'
                  value={this.props.data.planet}
                  onChange={(e) => this.props.handleInputChange(e.target.value, 'planet')}
                  label='Planet'
                />
              </div>
            </div>

            <div className='row' id='SelectRow'>
              <Select
                id='input_parent'
                multiple={false}
                onChange={(e) => this.props.handleInputChange(parseInt(e.target.value), 'parent_id')}
                s='12'
                m='12'
                l='12'
                options={{
                  classes: '',
                  dropdownOptions: {
                    alignment: 'left',
                    autoTrigger: true,
                    closeOnClick: true,
                    constrainWidth: true,
                    coverTrigger: true,
                    hover: false,
                    inDuration: 150,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 250,
                  },
                }}
                label='Parent'
                value={this.props.data.parent_id ? this.props.data.parent_id : 0}
              >
                <option value={0}>No Parent</option>
                <SelectOptions parents_data={this.props.parents_data} />
              </Select>
            </div>
            <div className='row' id='LabelSelectRow'>
              <label for='input_parent' id='parent_label'>
                Type
              </label>
            </div>
            <div className='row' id='RadioRow'>
              <div className='RadioDiv'>
                <RadioGroup
                  id='input_type'
                  label='Type'
                  name='size'
                  s='12'
                  m='12'
                  l='12'
                  options={[
                    {
                      label: 'Alpha',
                      value: 'alpha',
                    },
                    {
                      label: 'Beta',
                      value: 'beta',
                    },
                    {
                      label: 'Gamma',
                      value: 'gamma',
                    },
                  ]}
                  value={this.props.data.type}
                  onChange={(e) => this.props.handleInputChange(e.target.value, 'type')}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

import React, {Component} from 'react';

const getMessage = ({name, age, sex}) =>
  age < 18 ?
    `Get of my WebApp, ${name}`
    :
    `Hello ${sex === 'm' ? 'Mister' : 'Miss'} ${name}`;

const initialState = {
  name: '',
  age: 18,
  sex: 'm'
};

export class Form extends Component {
  state = initialState;

  update = ({target: {value, name}}) => this.setState({[name]: value});

  reset = () => this.setState(initialState);

  render(){
    const {name, age, sex} = this.state;
    return (
      <div>
        <form
          onSubmit={e => e.preventDefault()}>
          <p>Name:
            <input
              name="name"
              onChange={this.update}
              value={name}
              type="text"/>
          </p>
          <p>Age:
            <input
              name="age"
              onChange={this.update}
              value={age}
              type="text"
              maxLength={3}/>
          </p>
          <p>Sex:
            <input
              name="sex"
              onChange={this.update}
              value={sex}
              type="text"
              minLength={1}
              maxLength={1}/>
          </p>
        </form>
        <button onClick={this.reset}>Reset</button>
        <p>{getMessage(this.state)}</p>
      </div>
    )
  }
}

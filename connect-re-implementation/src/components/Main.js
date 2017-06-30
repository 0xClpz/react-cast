import React, {Component} from 'react';
import Proptypes from 'prop-types';

class _Main extends Component {
  render(){
    const {increment, decrement, counterValue} = this.props;
    return (
      <div>
        <h1>Simple counter</h1>
        <p><button onClick={increment}>+</button></p>
        <p>{counterValue}</p>
        <p><button onClick={decrement}>-</button></p>
      </div>
    )
  }
}

export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) =>
  class ConnectHOC extends Component {

    static contextTypes = {
      store: Proptypes.object,
    };

    state = {
      storeState: null
    };

    componentDidMount(){
      const {store} = this.context;
      this.updateStoreState();
      store.subscribe(this.updateStoreState);
    }

    updateStoreState = () => {
      const {store} = this.context;
      this.setState({
        storeState: store.getState()
      });
    };

    render(){
      const {store} = this.context;
      const state = mapStateToProps(this.state.storeState);
      const actions = mapDispatchToProps(store.dispatch);
      return (
        <WrappedComponent {...this.props} {...state} {...actions} />
      )
    }
  };


const mapStateToProps = state => ({
  counterValue: state
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({type: 'INCREMENT'}),
  decrement: () => dispatch({type: 'DECREMENT'}),
});

export const Main = connect(mapStateToProps, mapDispatchToProps)(_Main);

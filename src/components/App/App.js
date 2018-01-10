import React, { Component } from 'react';
import "./App.less"
import i18n from 'i18next';

import { connect } from 'react-redux';
import { sample } from '../../actions/AppActions';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    //trigger state change for sample
    this.props.sample();
    
    console.log("render");
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{i18n.t('title')}</h1>
        </header>
        <p>
          Hello !
        </p>
        <p>
          {this.props.test}
        </p>
      </div>
    );
  }
}

App.propTypes={
  sample: PropTypes.func.isRequired,
  test:PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    test:state.test
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sample: () => dispatch(sample())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

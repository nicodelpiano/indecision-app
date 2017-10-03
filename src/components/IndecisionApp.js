import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: this.props.options,
    selectedOption: undefined
  };

  handlePick = () => {
    const index = Math.floor(Math.random() * this.state.options.length);
    const selection = this.state.options[index];
    this.setState(() => ({
      selectedOption: selection
    }));
    // alert(selection);
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleClearSelectedOption = () => {
   this.setState(() => ({ selectedOption: undefined }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter a valid option!';
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className='container'>
          <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0} />
          <div className='widget'>
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleCloseModal={this.handleClearSelectedOption}
        />
      </div>
    );
  };
}

IndecisionApp.defaultProps = {
  options: []
}

export default IndecisionApp;
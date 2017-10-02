import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: [],
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
    console.log('componentDidMount');
  };
  componentDidUpdate() {
    console.log('componentDidUpdate!');
  };

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0} />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
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
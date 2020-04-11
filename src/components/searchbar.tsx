import React, { Component } from "react";
import { connect } from "react-redux";
import Autosuggest from "react-autosuggest";

interface Props {
  data?: any;
  getSearchData: (val: any) => void;
}

export class SearchBar extends Component<Props> {
  state: any = {
    value: "",
    suggestions: [],
    data: [],
  };

  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  getSuggestions = (value: any) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : this.state.data.filter(
          (item: any) =>
            item.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  getSuggestionValue = (suggestion: any) => {
    this.props.getSearchData([{ ...suggestion }]);
    return suggestion.name;
  };

  renderSuggestion = (suggestion: any) => <div>{suggestion.name}</div>;

  onChange = (event: any, { newValue }: any) => {
    this.setState(
      {
        value: newValue,
      },
      () => {
        if (newValue === "") {
          this.props.getSearchData(this.state.data);
        }
      }
    );
  };

  onSuggestionsFetchRequested = (e: any) => {
    const value = e.value;
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };
  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "search user",
      value,
      onChange: this.onChange,
      style: { width: "40%", height: 30, borderRadius: 3 },
    };
    return (
      <div className="col-md-10" style={{ minHeight: 60, marginTop: 30 }}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={(e: any) => {
            this.onSuggestionsFetchRequested(e);
          }}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
          highlightFirstSuggestion
        />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  users: state.userReducer.users,
});

export default connect(mapStateToProps)(SearchBar);

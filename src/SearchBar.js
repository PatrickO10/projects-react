import React, { Component } from 'react';


class SearchBar extends Component {

    updateTextChange(e) {
      let textValue = e.target.value;

      this.props.onFilterTextChange(textValue);
    }

    updateFinishedChange(e) {
      this.props.onFinishedProjectsOnlyChange(e.target.checked);
    }

    render() {
        const filterText = this.props.filterText;
        const finishedProjectsOnly = this.props.finishedProjectsOnly;

        return (
            <form>
              <input
                type="text"
                placeholder="Search..."
                value={filterText}
                onChange={(evt) => {this.updateTextChange(evt)}}
              />
              <p>
                <input
                  type="checkbox"
                  checked={finishedProjectsOnly}
                  onChange={(evt) => {this.updateFinishedChange(evt)}}
                />
                {' '}
                Only show finished projects
              </p>
          </form>
        );
    }
}

export default SearchBar
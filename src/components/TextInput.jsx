import React from 'react'

export default class TextInput extends React.Component {
  handleKeyPress(e) {
    let unicode = e.keyCode ? e.keyCode : e.charCode
    if(unicode < 48 || unicode > 57) {
      e.preventDefault()
    }
  }

  render() {
    return (
      <input id={this.props.id}
             name={this.props.name}
             className="form-control"
             placeholder={this.props.placeholder}
             type="text"
             required=""
             onKeyPress={ (e) => { this.handleKeyPress(e) } }
             />
    )
  }
}

TextInput.propTypes = {
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string.isRequired,
};

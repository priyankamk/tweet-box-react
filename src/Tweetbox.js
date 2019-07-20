import React from 'react';
import Bar from './Bar'
import './Tweetbox.css'; //webpack - built step


class Tweetbox extends React.Component {

  constructor(props) {
    console.log(props.maxLength)
    super(props)
    // this.handleChange = this.handleChange.bind(this)
    this.state = {
      content: ''
    }
  }


  handleChange = (event) => {
    // console.log(this.state.content)
    this.setState({
      content: event.target.value
    })
  }


  render() {
    // destructuring the data structure - pattern matching 
    // (erlang - haskell - elixir)other languages
    var { content } = this.state // {content: "", secret: 42}
    // var length = this.state.content.length
    var isDisabled = content.length <= 0 || content.length >= this.props.maxLength
    var charsLeft = this.props.maxLength - content.length
    // var divStyle = { backgroundColor: "orange" }
    // charsLeft < 10 ? "warning" : "" - called as illstrator as if else statment in short form
    var spanClass = charsLeft < 10 ? "warning" : ""
    var percentage = charsLeft / this.props.maxLength * 100
    return (
      <div className="tweetbox">
        <Bar width={percentage} />
        <textarea className="tweetbox_textarea" onChange={this.handleChange}></textarea>
        <footer className="tweertbox_footer">
          <span className={spanClass}>{charsLeft}</span>
          <button className="tweetbox_button" disabled={isDisabled}>Tweet</button>
        </footer>
      </div>
    )
  }
}

export default Tweetbox

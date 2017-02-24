const React = require('react')

class Bomb extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render(){
    const secs = this.state.secondsLeft
    return(
      <div>
        {secs ? `${secs} seconds left before I go boom!` : "Boom!"}
      </div>
    )
  }
}

module.exports = Bomb;
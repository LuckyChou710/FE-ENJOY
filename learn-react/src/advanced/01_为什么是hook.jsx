import React from 'react'

class ProfilePageClass extends React.Component {
  showMessage = () => {
    alert('Followed ' + this.props.user)
  }

  handleClick = () => {
    setTimeout(this.showMessage, 3000)
  }

  render() {
    return <button onClick={this.handleClick}>Follow</button>
  }
}

function ProfilePageFunction(props) {
  const showMessage = () => {
    alert('Followed ' + props.user)
  }

  const handleClick = () => {
    setTimeout(showMessage, 3000)
  }

  return <button onClick={handleClick}>Follow</button>
}

export default class App extends React.Component {
  state = {
    user: 'lucky',
  }
  render() {
    return (
      <>
        <label>
          <b>Choose profile to view: </b>
          <select
            value={this.state.user}
            onChange={(e) => this.setState({ user: e.target.value })}
          >
            <option value="lucky">lucky</option>
            <option value="chou">chou</option>
            <option value="ramires">ramires</option>
          </select>
        </label>
        <h1>Welcome to {this.state.user}’s profile!</h1>
        <p>
          <ProfilePageFunction user={this.state.user} />
          <b> (function)</b>
        </p>
        <p>
          <ProfilePageClass user={this.state.user} />
          <b> (class)</b>
        </p>
        <p>Can you spot the difference in the behavior?</p>
      </>
    )
  }
}

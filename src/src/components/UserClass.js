import { count } from "console";
import { userInfo } from "os";
import React from "react";
import Component from "react";

// class UserClass extends React.Component {
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Kalyani",
        location: "pune",
        avatar_url: " https://avatars.githubusercontent.com/u/12824231?v=4",
      },
    };
    console.log("First constructor is called");
  }
  async componentDidMount() {
    console.log(" componentDidMount is called");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate render");
  }
  componentWillUnmount() {
    console.log("ComponentWillUnmount called");
  }
  render() {
    console.log("Then second, render() is called");
    const { name, location } = this.props;
    let { count, userInfo } = this.state;
    // Never update state variable using "=" sign
    count = count + 1;
    console.log(count);
    return (
      <div className="user-card">
        <h2>Name:{userInfo.name} (Class Based)</h2>
        <h3>Location: {userInfo.blog}</h3>
        <h4>Contact : 9876543210</h4>
        <img src={userInfo.avatar_url}></img>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increment
        </button>
        <h4>Count : {count}</h4>
      </div>
    );
  }
}
export default UserClass;
/*
-----Mounting-----

-Constructor
-Render()
   - <HTML Dummy Data>
-componentDidMount()
   - <API call>
   -<this.state>  State variable is updated 

----Update----(upadte when any new change or event or state variable updated)

-render(api data)
-<HTML (new API data)
-componentDidUpdate



*/

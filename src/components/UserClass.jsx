import React from "react";
class UserClass extends React.Component {
  constructor(props) {

    super(props);
this.state={
    userInfo:{
        name:"Dummy",
        location:"Default",
        avatar_url:"https://avatars.githubusercontent.com/u/155541860?v"
    }
}
//   console.log(this.props.name+"constructor render")
  }
  async componentDidMount(){
    const data=await fetch(" https://api.github.com/users/JTRISHA")
    const json=await data.json();
    this.setState({
        userInfo: json
    })
    // console.log(json)

    // console.log("Child Component did mOunt")
  }
  componentDidUpdate(){
    // console.log("component Updated")
  }
  render() {

    // console.log(this.props.name+"child render")
    const {name,location,avatar_url}=this.state.userInfo;
    return (
      <div className="user-card">
       
        <h1>Name:{name}</h1>
        <h2>Location:{location}</h2>
        <img src={avatar_url}/>
      </div>
    );
  }
}
export default UserClass;

import React, { Component } from 'react'
import User from './User'
import UserClass from './UserClass'
import UserContext from '../utils/UserContext'
 class About extends Component{
  constructor(props){
  super(props)
  }
  // console.log("Parent constructor render")}
  componentDidMount()
  {
    // console.log("Parent Component did Mount")

  }
  render(){
    // console.log("Parent render")
    return(
      <div>
        <h1 className='text-xl font-bold'>Our food ordering "Balaji" app is designed to bring your favorite meals from local restaurants directly to your doorstep.
           Whether you're craving comfort food, gourmet dishes, or something quick and easy, 
           our app makes it simple to browse, order, and enjoy a wide variety of cuisines. </h1>
           
       {/* <div>Logged in User:
        <UserContext.Consumer>
          {({loggedInUser})=>(<h1 className='text-xl font-bold'>{loggedInUser}</h1>)}
        </UserContext.Consumer>
       </div> */}

<UserClass name={"Trisha"} Location={"ujjain"} />



        
        {/* <UserClass name={"trisha"} Location={"Vrandavan"}/> */}
      </div>

    )
  }
}

export default About;
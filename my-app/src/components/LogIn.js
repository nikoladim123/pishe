import React,{Component} from 'react';
import axios from 'axios';

class LogIn extends Component{
  state ={
    swch:0,
    name:''
  }
  axi=()=>{
    axios.post('https://node-testin.herokuapp.com/api/users', {
      nickName:this.state.nickName,
      name:this.state.name,
      password:this.state.password,
      email:this.state.email
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  onClick= () => {
    this.setState({
      swch:1
    })
  }
  onChangeNickName= (e) => {
    this.setState({
      nickName:e.target.value
    })
  }
  onChangeName= (e) => {
    this.setState({
      name:e.target.value
    })
  }
  render(){
    return(
      <div className="LogIn">
        {this.state.swch === 0 ?
        <div>
          <form action="#">
              <input placeholder="Nick name" name="nickName" onChange={this.onChangeNickName} /> <br/>
              <input placeholder="Name" name="name" onChange={this.onChangeName} /> <br/>
              <input placeholder="password" name="password" type="password" /><br/>
              <input placeholder="E-mail" type="email" name="email" /><br/>
              <button onClick={this.axi,this.onClick}>Register!</button>
          </form>
        </div>
        :<p>Hello {this.state.nickName}!</p>}

      </div>
    )
  }
}

export default LogIn;

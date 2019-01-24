import React,{Component} from 'react';
import axios from 'axios';

class Location extends Component{
  state ={
    country:[]
  }
  componentDidMount(){
    axios.get('https://node-testin.herokuapp.com/api')
    .then(res=>{
      this.setState({
        country:res.data
      })
    })
  }
  render(){
    var country = this.state.country;
    console.log(country);
    return(
        <form className="LoactionBox">
          <select>
              <option value="volvo">{country.country}</option>
              <option value="saab">{country.city}</option>
              <option value="mercedes">{country.timezone}</option>
          </select>
          <input type="text" className="InputSearch"></input>
          <input type="submit" className="InputSubmit"/>
        </form>
    )
  }
}

export default Location;

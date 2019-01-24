import React,{Component} from 'react';

class Location extends Component{
  state ={}
  render(){
    return(
        <form className="LoactionBox">
          <select>
              <option value="volvo">Serbia</option>
              <option value="saab">USA</option>
              <option value="mercedes">Germany</option>
              <option value="audi">UnicronLand</option>
          </select>
          <input type="text" className="InputSearch"></input>
          <input type="submit" className="InputSubmit"/>
        </form>
    )
  }
}

export default Location;

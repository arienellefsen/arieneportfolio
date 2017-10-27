import React, {Component} from 'react';

export default class Search extends Component {    
    constructor(props) {
    super(props);
    this.state = {term:''};
    this.onInputChange = this.onInputChange.bind(this);
  }

  render(){
     return <input onChange={this.onInputChange}/>
  }

  onInputChange(event){
      console.log(event.target.value);
      this.setState = {term: event.target.value }
  }
}


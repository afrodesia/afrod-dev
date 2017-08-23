import React, { Component } from 'react'


class Inquiry extends Component{
   state = {
    name: '',
    email: '',
    message: '',

  }

  change = (e) => {
    this.props.onChange({ [e.target.name]: e.target.value})
    this.setState({   
      [e.target.name]: e.target.value
    })
  }

 

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({
        
    })
   
  }


  render(){
    return(
      <form className="Inquiry">
         <input
         
          className="input-form" 
          name="name"
          value={this.state.name} 
          onChange={ e => this.change(e) } 
          />
        <label className="label-control">
          Name
         </label>
        


         <input
            className="input-form"  
            name="email" 
            type="email"
            value={this.state.email} 
            onChange={ e => this.change(e) }  
          />
        <label className="label-control">
         email
         </label>

        <label className="label-control">
         Message
         </label>
         <textarea rows="4" cols="50"
            className="imput-text"
            name="message" 
            type="text"
            value={this.state.message} 
            onChange={ e => this.change(e) }  
          />
        

      </form>
    )
  }
} 

export default Inquiry
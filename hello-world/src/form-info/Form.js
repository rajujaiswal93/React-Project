import React, { Component } from 'react'
import './Form.css';

 class Form extends Component {
     constructor(props){
         super(props)
         this.state = {
             username:'' ,
             comment: '',
             topic: 'react'
         }
     }
     hendleUsernameChange = (event) =>{
          this.setState({
              username: event.target.value
          })
     }
     hendleCommentChange =(event) =>{
         this.setState({
             comment: event.target.value
         })
     }
     hendleTopicChange =(event) =>{
         this.setState({
             topic: event.target.value
         })
     }
     hendleSubmit =(event) =>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`) 
        event.preventDefault()
     }
    render() {
         //const {username,comment,topic} = this.state
        return (
            <form onSubmit={this.hendleSubmit}>
            <div>
                <label>username</label>
              <input type="text" value={this.state.username} 
              onChange={this.hendleUsernameChange}/>  
            </div>
            <div>
                <label>Comment</label>
                <input type="text" value ={this.state.comment} 
                onChange={this.hendleCommentChange}/>

            </div>
            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange ={this.hendleTopicChange}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">vue</option>
                </select>
            </div>
            <button type="submit">Submitt</button>
            </form>
        )
    }
}
export default Form
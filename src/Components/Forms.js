import React, { Component } from 'react'

class Forms extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             yourself : '',
             topic : 'react'
        }
    }
    
    handleUsernameChange = event => {
        
        this.setState ({
            username : event.target.value
        })
    }

    handleAreaChange = event => {
        
        this.setState ({
            yourself : event.target.value
        })
    }


    handleTopicChange = event => {

        this.setState ({

            topic : event.target.value
        })
    }

    handleSubmit = event => {
        
        alert (`${this.state.username} ${this.state.yourself} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        const {username , yourself, topic} = this.state 
        return (
            <form onSubmit = {this.handleSubmit}>
                
                <div>
                    <label>Username</label>
                    <input type = 'text' value ={username} onChange = {this.handleUsernameChange}></input>
                </div>
                <div>
                    <label>About Yourself</label>
                    <textarea value = {yourself} onChange = {this.handleAreaChange}></textarea>
                </div>
                <div>
                    <lable>Topics</lable>
                    <select value = {topic} onChange ={this.handleTopicChange} >
                        <option value = 'react'>React</option>
                        <option value = 'angular'>Angular</option>
                        <option value = 'vue'>Vue</option>
                    </select>
                </div>
                <button type = 'submit' >Submit</button>
            </form>
        )
    }
}

export default Forms

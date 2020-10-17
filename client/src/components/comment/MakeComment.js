import React from 'react'

export default class CommentBox extends React.Component {
    myFunc() {
   
    
    }
    render() {
        return (
            <div className="comments">
                <h3 className="comments__header">3 Comments</h3>
                <label className="comments__input-label">JOIN THE CONVERSATION</label>
                <div className="row">
          
                    <form onSubmit={this.myFunc}>
                        <input type="textarea" className="comments__input-box" name="comments__input"></input>
               
                        <p><button className= "another__button" onClick={this.eventHandler}>
                            COMMENT</button></p>
                    </form>
                </div>
                </div>
        )}
    }

  
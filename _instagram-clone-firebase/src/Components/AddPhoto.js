import React, {Component} from 'react';

class AddPhoto extends Component {

    constructor() {
        super()
        this.handleSubmit =this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        //same key-values as the starter default array of pictures
        //we pass it down to this.props.onAddPhoto a few lines below
        const post = {
            // new ID is generated by the time and date of posting and being sorted in the PhotoWall component so the newest post will always be on top
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }
        //if there is a value in form, pass it to Main.js component (addPhoto(postSubmitted))
        if (description && imageLink) {
            //pass it to Main.js so we can render the AddPhoto component with the new picture / description
           this.props.startAddingPost(post)
           this.props.history.push('/')
        }
    }

    render() {
        return (<div>
                
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link URL" name="link"/>
                        <input type="text" placeholder="Short Description" name="description"/>
                        <button className="">Post</button>
                    </form>
                </div>
                </div>)
    }
}

export default AddPhoto
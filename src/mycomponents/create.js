// Create Page
import { useState } from 'react';

function Create() {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [cover, setCover] = useState('')

    const handleSubmit = (e)=>{
        e.preventOnDefault();

        // Message to console
        console.log("Title: "+title+ " Cover "+cover+ " Author "+author);
    }
    return (
        <div>
            <h3>Hello from Create</h3>
            {/* Form for adding book items */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    {/* Add book title */}
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    {/* Add book author */}
                    <label>Add Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    {/* Add front page URL */}
                    <label>Add Front Page URL: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                <div>
                    {/* Button to submit form */}
                    <input type="submit" value="Add Book"></input>
                </div>
            </form>
        </div>
    );
}

export default Create;
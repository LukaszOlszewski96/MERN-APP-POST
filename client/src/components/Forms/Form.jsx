import React from 'react'

const Form = () => {
    return (
        <div className="form-conteiner">
             <p className="form-title">Create post</p>
            <form>
                <label for="author">Author</label>
                <input type="text" id="author" name="author" />
            </form>
            <form>
                <label for="title">Title</label>
                <input type="text" id="title" name="title" />
            </form>
            <form>
                <textarea type="textarea"/>
            </form>
            <form>
                <label for="photo">Choose a picture</label>
                <input className="input-file" id="photo" name="photo" type="file" accept="image/png, image/jpeg"/>
            </form>
                <button type="submit">Submit</button>
        </div>
    )
}

export default Form

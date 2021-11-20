import React from 'react';
import {IoIosHeartEmpty} from 'react-icons/io';

const Post = () => {
    return (
        <div className="post-conteiner">
            <p className="post-author">Mark</p>
            <img className="post-image" src="image/crypto_tracker_app.png"/>            <div>
            <span className="post-like">
                <IoIosHeartEmpty/> 
                <p>123</p>
            </span>
            </div>
            <p className="post-title">Title</p>
            <p className="post-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
    )
}

export default Post

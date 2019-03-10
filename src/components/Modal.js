import React from 'react';
import './Modal.css';

const Modal = (props) => {
    return (
        <div className="wrapper">
            <div className="Modal" onClick={props.handleCloseModal}>
                <span className="Modal-close"/>
                <img src={props.item.urlToImage} width="730"/>
                <h1>{props.item.title}</h1>
                <p>{props.item.description}</p>
                <div>
                    <a href={props.item.url} target="_blank" rel="noopener noreferrer" className="btn btn-dark text-white float-right">Read full article</a>
                </div>
            </div>
        </div>
    );
};

export default Modal;
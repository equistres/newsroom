import React from 'react';
import './News.css';

const News = (item) => {
        return (
            <div className="column"> 
                <div className="card mr-2" style={{width: '18rem', height:'600px'}}>                    
                    <img src={item.item.urlToImage} className="card-img-top" alt="..." style={{width: '286px', height:'150px'}}/>
                    <div className="card-body">
                        <h6 className="card-title block-with-text">{item.item.title}</h6>
                        <p className="card-text block-with-description">{item.item.description}</p>
                        <a  href={item.item.url}target="_blank" rel="noopener noreferrer" className="btn btn-primary">Seguir leyendo</a>
                    </div>
                </div>
            </div>
        );
};

export default News;
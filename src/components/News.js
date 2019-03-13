import React from 'react';
import './News.css';

const News = (item) => {
        return (
            <div className="column"> 
                <div className="card mr-2 ml-2 mb-4" style={{width: '21rem', height:'600px'}}>
                    <div className="container">                 
                        <img alt="" src={item.item.urlToImage} className="card-img-top" style={{width: '286px', height:'150px'}}/>
                        <span className="badge badge-primary bottom-right">Via {item.item.source.name}</span> 
                    </div> 
                    <div className="card-body">
                        <h6 className="card-title block-with-text">{item.item.title}</h6>
                        <span onClick={item.handleReadMore} itemID={item.item.id} target="_blank" rel="noopener noreferrer" className="btn btn-dark text-white">Seguir leyendo</span>
                    </div>
                </div>
            </div>
        );
};

export default News;
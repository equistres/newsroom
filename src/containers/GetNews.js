import React, { PureComponent } from 'react';
import News from '../components/News';


const API_URL= 'https://newsapi.org/v2/top-headlines?country=ar&apiKey=91a3bc0b07184b7a8bf352ff162016cd'

class GetNews extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
          list : [],
          fetched : false,
          loading : false
        };
    }   
    componentDidMount(){ 
      fetch(API_URL)
        .then(response => response.json())
        .then(data=>{
            this.setState({
              list : data,
              loading : true,
              fetched : true
            });
          });
    }    

    render() {
        const {fetched, loading} = this.state;
        let content;
        if(fetched){
            content =  this.state.list.articles.map((item) => {
                return(<News item={item} key={item.publishedAt}/>)
            })

        }else if(loading && !fetched){
            content = <p> Loading...</p>;
        }else{
            content = <div/>;
        }
        return(<div className="row justify-content-center">{content}</div>)
    }
}

export default GetNews;
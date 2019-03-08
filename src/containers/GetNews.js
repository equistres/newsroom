import React, { Component } from 'react';
import News from '../components/News';



class GetNews extends Component {
    constructor(props){
        super(props);
        this.state = {
          list : [],
          fetched : false,
          loading : false,
          initialCount:0,
          maxCount: 5,
          Increment: 5
        };
    }
    updatePage = () => {
        this.render()
    }     
    componentDidMount(){
        debugger
      fetch(this.props.api)
        .then(response => response.json())
        .then(data=>{
            this.setState({
              list : data,
              loading : true,
              fetched : true
            });
          });
    }

    handleClickNext = (event) => {      
        let inicio = this.state.initialCount+this.state.Increment;
        let fin = this.state.maxCount+this.state.Increment;
        if(inicio<=20 && fin<=20){
          this.setState({
            initialCount: inicio,
            maxCount : fin
          }, this.updatePage);
        };
    }

    handleClickPrev = (event) => {      
        let inicio = this.state.initialCount-this.state.Increment;
        let fin = this.state.maxCount-this.state.Increment;
        if(inicio>=0){
          this.setState({
            initialCount: inicio,
            maxCount : fin
          }, this.updatePage);
        };
    }    


    render() {
        //console.log(this.state.list.articles)
        let items  = [];
        let nextButton;
        let PrevButton;
        const {fetched, loading} = this.state;
        let content;
        if(fetched){
            if(this.state.maxCount===20)
            {
                nextButton = "";
            }else{
                nextButton = <button onClick={this.handleClickNext}>Siguientes</button>;
            }
            if(this.state.initialCount===0)
            {
                PrevButton = "";
            }else{
                PrevButton = <button onClick={this.handleClickPrev}>Anteriores</button>;
            }            
            items = this.state.list.articles.slice(this.state.initialCount,this.state.maxCount);
            content =  items.map((item) => {
                return(<News item={item} key={item.publishedAt}/>)
            })

        }else if(loading && !fetched){
            content = <p> Loading...</p>;
        }else{
            content = <div/>;
        }
        return(
        <div className="row justify-content-center mt-4">
        {PrevButton}
        {content}
        {nextButton}
        </div>
        )
    }
}

export default GetNews;
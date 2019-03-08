import React, { Component } from 'react';
import News from '../components/News';



class GetNews extends Component {

    state = {
        list: [],
        fetched: false,
        loading: false,
        initialCount: 0,
        maxCount: 5,
        Increment: 5
    }

    componentDidMount() {
        fetch(this.props.api)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    list: data,
                    loading: true,
                    fetched: true
                });
            });
    }

    handleClickNext = () => {
        let inicio = this.state.initialCount + this.state.Increment;
        let fin = this.state.maxCount + this.state.Increment;
        if (inicio <= 20 && fin <= 20) {
            this.setState({
                initialCount: inicio,
                maxCount: fin
            });
        };
    }

    handleClickPrev = () => {
        let inicio = this.state.initialCount - this.state.Increment;
        let fin = this.state.maxCount - this.state.Increment;
        if (inicio >= 0) {
            this.setState({
                initialCount: inicio,
                maxCount: fin
            });
        };
    }

    handleSort =() => {
        //agarro el objeto original
        let obj = this.state.list;
        //esta es una funcion que agarra el array y lo da vuelta
        let fnReverse = a =>[...a].map(a.pop,a)
        //reemplazo del objeto original la nueva lista dada vuelta
        obj.articles = fnReverse(this.state.list.articles)
        //actualizo el estado y se rerenderea
        this.setState({
            list: obj
        });

    }


    render() {
        //console.log(this.state.list.articles)
        let items = [];
        let nextButton;
        let PrevButton;
        const { fetched, loading } = this.state;
        let content;
        if (fetched) {
            if (this.state.maxCount === 20) {
                nextButton = <div className="my-auto"><button type="button" className="btn btn-dark">Next</button></div>;
            } else {
                nextButton = <div className="my-auto"><button type="button" className="btn btn-dark align-items-center" onClick={this.handleClickNext}>Next</button></div>;
            }

            if (this.state.initialCount === 0) {
                PrevButton = <div className="my-auto"><button type="button" className="btn btn-dark">Prev</button></div>;
            } else {
                PrevButton = <div className="my-auto"><button type="button" className="btn btn-dark" onClick={this.handleClickPrev}>Prev</button></div>;
            }

            items = this.state.list.articles.slice(this.state.initialCount, this.state.maxCount);
            content = items.map((item) => {
                return (<News item={item} key={item.publishedAt} />)
            })

        } else if (loading && !fetched) {
            content = <p> Loading...</p>;
        } else {
            content = <div />;
        }
        return (
            <div className="row justify-content-center mt-4">
                {PrevButton}
                {content}
                {nextButton}
                <div className="my-auto"><img onClick={this.handleSort} src="https://image.flaticon.com/icons/png/128/1528/1528895.png" alt="Sort" height="50px" width="50px" style={{cursor: 'pointer'}}/></div>
                
            </div>
        )
    }
}

export default GetNews;
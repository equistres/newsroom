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
        debugger
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


    render() {
        //console.log(this.state.list.articles)
        let items = [];
        let nextButton;
        let PrevButton;
        const { fetched, loading } = this.state;
        let content;
        if (fetched) {
            if (this.state.maxCount === 20) {
                nextButton = <button type="button" className="btn btn-dark">Next</button>;
            } else {
                nextButton = <button type="button" className="btn btn-dark" onClick={this.handleClickNext}>Next</button>;
            }

            if (this.state.initialCount === 0) {
                PrevButton = <button type="button" className="btn btn-dark">Prev</button>;
            } else {
                PrevButton = <button type="button" className="btn btn-dark" onClick={this.handleClickPrev}>Prev</button>;
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
            </div>
        )
    }
}

export default GetNews;
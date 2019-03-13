import React, { Component } from 'react';
import News from '../components/News';
import ModalContainer from './Modal';
import Modal from '../components/Modal';
import '../components/News.css';
import Search from '../components/Search';




class GetNews extends Component {

    state = {
        Listaoriginal:[],
        handledList:[],
        fetched: false,
        loading: false,
        initialCount: 0,
        maxCount: 5,
        Increment: 5,
        showModal: false,
        itemSelected: null
    }


    componentDidMount() {
        fetch(this.props.api)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    //LLAMO UNA FUNCION QUE LO QUE HACE ES ASIGNARLE UN ID A CADA ELEMENTO DEL ARRAY DE NOTICIAS
                    listaOriginal: data = this.fnNumerarArray(data),
                    handledList: data = this.fnNumerarArray(data),
                    loading: true,
                    fetched: true
                });
            });
    }

    fnNumerarArray = (data) => {
        data.articles.forEach((o, i) => o.id = i + 1)
        return data
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

    handleSort = () => {
        //agarro el objeto original
        let obj = this.state.handledList;
        //esta es una funcion que agarra el array y lo da vuelta
        let fnReverse = a =>[...a].map(a.pop,a)
        //reemplazo del objeto original la nueva lista dada vuelta
        obj.articles = fnReverse(this.state.handledList.articles)
        //actualizo el estado y se rerenderea
        this.setState({
            list: obj
        });

    }

    handleReadMore = (event) => {
        let id = parseInt(event.target.getAttribute("itemID"));
        var item = this.state.handledList.articles.find(o => o.id === id);
        this.setState({
            itemSelected: item,
            showModal: true
        })
    }

    handleCloseModal = () => {
        this.setState({
            itemSelected: null,
            showModal: false
        })
    }

    handleSearch = (event) => {
        let q = event.target.value.toLowerCase();
        let newList = this.state.handledList.articles;

        if(q.length>=3){
            //filtro todos los resultados que encontro y se guarda en una variable
            let filtrados = newList.filter((item) => {
                return item.title.toLowerCase().includes(q);
            });

            if(filtrados.length>0){
                newList = [];
                newList.articles = filtrados;
                this.setState({
                    handledList: newList,
                    initialCount: 0,
                    maxCount: 20
                })   
            }

        }else if(q.length<3){
            this.setState({
                handledList: this.state.listaOriginal,
                initialCount: 0,
                maxCount: 5
            })
        }
    }

    render() {
        let items = [];
        let nextButton;
        let PrevButton;
        let SortButton;
        const { fetched } = this.state;
        let content;
        if (fetched) {
            if (this.state.maxCount === 20) {
                nextButton = <div className="my-auto"><button type="button" className="btn btn-light">Next</button></div>;
            } else {
                nextButton = <div className="my-auto"><button type="button" className="btn btn-dark align-items-center" onClick={this.handleClickNext}>Next</button></div>;
            }

            if (this.state.initialCount === 0) {
                PrevButton = <div className="my-auto"><button type="button" className="btn btn-light">Prev</button></div>;
            } else {
                PrevButton = <div className="my-auto"><button type="button" className="btn btn-dark" onClick={this.handleClickPrev}>Prev</button></div>;
            }

            SortButton = <div className="my-auto"><img onClick={this.handleSort} src="https://image.flaticon.com/icons/png/128/1528/1528895.png" alt="Sort" height="50px" width="50px" style={{cursor: 'pointer'}}/></div>;
            items = this.state.handledList.articles.slice(this.state.initialCount, this.state.maxCount);
            //al no tener una key o id en el api, le paso como key el index, el numero de orden que tiene en el array
            content = items.map(function(item, index) {
                return(
                    <News item={item} key={item.id} handleReadMore={this.handleReadMore}/>
                )
            }, this);

        } else if (!fetched) {
            content = <p> Loading...</p>;
        } else {
            content = <div />;
        }
        return (
            <div>
                <Search handleSearch={this.handleSearch}/>
                <div className="row justify-content-center mt-4">                    
                    {PrevButton}
                    {content}
                    {nextButton}
                    {SortButton}
                    {
                        this.state.showModal &&
                        <ModalContainer>
                            <Modal item={this.state.itemSelected} handleCloseModal={this.handleCloseModal}/>
                        </ModalContainer>
                    }
                </div>
            </div>
        )
    }
}

export default GetNews;
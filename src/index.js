import React,{ Component } from 'react';
import ReactDom from 'react-dom';
import './tailwind.output.css';

import Collection from './Components/collection';
import Form from './Components/form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // eslint-disable-next-line no-array-constructor
            books : new Array(),
            editNow: false,
            editIndex: null,
        }
    }

    createBook(form) {
        const bookName = form.bname;
        const pages = form.pages;
        const authorName = form.aname;
        const status = form.status;
        const book = [{
            title: bookName,
            pages: pages,
            authorName: authorName,
            status: status,
        }]
        let books = this.state.books;
        books.push(book)
        this.setState({
            books: books,
        });
    }

    startEdit(i) {
        this.setState({
            editNow:true,
            editIndex: i,
        })

    }

    updateBook(form) {
        const bookName = form.bname;
        const pages = form.pages;
        const authorName = form.aname;
        const status = form.status;
        const book = [{
            title: bookName,
            pages: pages,
            authorName: authorName,
            status: status,
        }]
        let books = this.state.books;
        console.log(books)
        books.splice(this.state.editIndex,1,book);
        console.log(books)
        this.setState({
            books: books,
            editNow:false,
            editIndex: null,
        });

    }

    deleteBook(i) {
        let books = this.state.books;
        books.splice(i , 1);
        this.setState({
            books: books,
        });
    }

    returnForm(value) {
        let i = this.state.editIndex;
        let book = this.state.books[i];
        if (value) {
            console.log(book[0].title)
            return(
                <Form 
                    key = "edit"
                    onClick = {(form)=>this.updateBook(form)}
                    buttonName = "Update"
                    bookName = {book[0].title}
                    pages = {book[0].pages}
                    authorName = {book[0].authorName}
                />
            )
        } else {
            return(
                <Form 
                    key="new"
                    onClick = {(form)=>this.createBook(form)}
                    buttonName = "Create" 
                    bookName = ""
                    pages = ""
                    authorName = ""
                />
            )
        }
    }
    
    render(){
        let editNow = this.state.editNow;
        return(
            <div className="grid grid-cols-8 h-screen w-screen" >
                {editNow
                    ? this.returnForm(true)
                    : this.returnForm(false)
                }
                <Collection 
                    books = {this.state.books}
                    onClickDelete = { (i)=>this.deleteBook(i) }
                    onClickEdit = { (i)=> this.startEdit(i) }
                />
            </div>  
        )
    }
}
ReactDom.render(
    <App/>,
    document.getElementById('root')
);
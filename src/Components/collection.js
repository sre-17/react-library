import React,{Component} from 'react'

class Collection extends Component {
    bookGenerator() {
        let booksDiv = []
        const books = this.props.books
        for (let i=0; i < books.length;i++) {
            booksDiv.push(<Book 
                key={i} 
                book={books[i]} 
                onClickDelete={ ()=>this.props.onClickDelete(i)} 
                onClickEdit = { ()=> this.props.onClickEdit(i) }
            />)
        }
        return booksDiv;
    }
    render() {
        return(
            <div className="lg:col-start-3 lg:col-end-8 flex flex-wrap lg:overflow-y-auto">
                {this.bookGenerator()}
            </div>
        )
    }
}

function Book(props) {
    return( 
        <div className="h-64 flex flex-col shadow-md m-3 p-3 justify-between">
            <ul>
                <li className="text-xl">Title: {props.book[0].title}</li>
                <li className="text-xl">Pages: {props.book[0].pages}</li>
                <li className="text-xl">Author: {props.book[0].authorName}</li>
                <li className="text-xl">Reading status: {props.book[0].status}</li>
            </ul>
            <div>
                <button className="m-2 border rounded border-gray-600" onClick={props.onClickDelete}>Delete</button>
                <button className="m-2 border rounded border-gray-600" onClick={props.onClickEdit}>Edit</button>
            </div>
        </div>
    );
}

export default Collection;
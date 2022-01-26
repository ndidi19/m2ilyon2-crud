import React, {Component} from "react";
import AddBook from "./AddBook/AddBook";
import ModifyBook from "./ModifyBook/ModifyBook";

class Books extends Component {
    state = {
        books : [
            {
                id : 1,
                name : "Harry Potter",
                author : "J.K Rowling",
                year : 1997,
                price : 50.0,
                country : "UK"
            },
            {
                id : 2,
                name : "Lord of the Rings",
                author : "J.R.R Tolkien",
                year : 1954,
                price : 39.0,
                country : "UK",
            },
            {
                id : 3,
                name : "1984",
                author : "George Orwell",
                year : 1948,
                price : 49.99,
                country : "UK"
            },
            {
                id : 4,
                name : "Artemis Fowl",
                author : "Eoin Colfer",
                year : 2001,
                price : 44.99,
                country : "Irish"
            },
            {
                id : 5,
                name : "Mathilda",
                author : "Roald Dahl",
                year : 1988,
                price : 24.99,
                country : "UK"
            },
            {
                id : 14,
                name : "Nought and Crosses",
                author : "Mallory Blackman",
                year : 2001,
                price : 25.99,
                country : "UK"
            },
            {
                id : 7,
                name : "Gulliver's Travel",
                author : "Jonathan Swift",
                year : 1726,
                price : 30.99,
                country : "Irish"
            },
            {
                id : 8,
                name : "Pride and Prejudice",
                author : "Jane Austen",
                year : 1813,
                price : 18.90,
                country : "UK"
            },
            {
                id : 9,
                name : "Romeo and Juliet",
                author : "William Shakespeare",
                year : 1597,
                price : 21.30,
                country : "UK"
            },
            {
                id : 10,
                name : "Interview with a vampire",
                author : "Anne Rice",
                year : 1976,
                price : 15.70,
                country : "US"
            }
        ],
        bookToModify: 0
    }

    deleteBookHandler = (id) => {
        console.log("Suppression du livre : " + id);
        const index = this.state.books.findIndex(book => {
            return book.id === id
        })
        const books = [...this.state.books];
        books.splice(index, 1);
        this.setState({books});
    }

    addBookHandler = (book) => {
        console.log("Nom du livre à créer " + book.name);
        const books = [...this.state.books];
        const id = Math.max(...books.map(b => b.id)) + 1;
        book.id = id;
        books.push(book);
        this.setState({books});
    }

    editBookHandler = (id) => {
        this.setState({bookToModify: id});
    }

    modifyBookHandler = (book) => {
        const index = this.state.books.findIndex(b => {
            return b.id === book.id
        })
        const books = [...this.state.books];
        books[index] = book;
        this.setState({books, bookToModify: 0})
    }

    render() {
        return (
            <>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Auteur</th>
                            <th>Année</th>
                            <th>Prix</th>
                            <th>Pays</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.books.map(book => {
                                if(book.id !== this.state.bookToModify) {
                                    return (
                                        <tr key={book.id}>
                                            <td>{book.name}</td>
                                            <td>{book.author}</td>
                                            <td>{book.year}</td>
                                            <td>{book.price}</td>
                                            <td>{book.country}</td>
                                            <td><button onClick={() => this.editBookHandler(book.id)} className="btn btn-primary" >Modifier</button></td>
                                            <td><button onClick={() => this.deleteBookHandler(book.id)} className="btn btn-danger" >Supprimer</button></td>
                                        </tr>
                                    )
                                } else {
                                    return (
                                        <tr key={book.id}>
                                            <ModifyBook modifyBook={(book) => this.modifyBookHandler(book)} {...book} />
                                        </tr>
                                    )
                                }
                                
                            })
                        }
                    </tbody>
                </table>
                <AddBook callToAction={(book) => this.addBookHandler(book)} />
            </>
        );
    }
}

export default Books;
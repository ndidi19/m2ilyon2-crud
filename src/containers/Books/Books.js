import React, {Component} from "react";
import AddBook from "./AddBook/AddBook";

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
                id : 6,
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
        ]
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

    addBookHandler = (name, author, year, price, country) => {
        console.log("Nom du livre à créer " + name);
        const books = [...this.state.books];
        let id = 0;
        this.state.books.map((book)=>{
            if(book.id>=id){
                id = book.id+1
            }
        })
        books.push({id: id, name: name, author: author, year: year, price: price, country: country});
        this.setState({books});
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
                                return (
                                    <tr key={book.id}>
                                        <td>{book.name}</td>
                                        <td>{book.author}</td>
                                        <td>{book.year}</td>
                                        <td>{book.price}</td>
                                        <td>{book.country}</td>
                                        <td><button className="btn btn-primary" >Modifier</button></td>
                                        <td><button onClick={() => this.deleteBookHandler(book.id)} className="btn btn-danger" >Supprimer</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <AddBook callToAction={(name, author, year, price, country) => this.addBookHandler(name, author, year, price, country)} />
            </>
        );
    }
}

export default Books;
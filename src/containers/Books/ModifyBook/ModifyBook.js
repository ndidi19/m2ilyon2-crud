import React, {Component} from "react";

class ModifyBook extends Component {

    state = {
        book: {
            id: "",
            name: "",
            author: "",
            price: "",
            year: "",
            country: ""
        }
    }

    componentDidMount = () => {
        this.setState({book: {
            id: this.props.id,
            name: this.props.name,
            author: this.props.author,
            price: this.props.price,
            year: this.props.year,
            country: this.props.country
        }})
    }

    modifyBookHandler = () => {
        this.props.modifyBook(this.state.book);
    }

    render() {
        return (
            <>
                <td>
                    <input type="text" id="name" name="name" className="form-control"
                        value={this.state.book.name}
                        onChange={(event) => this.setState(oldState => ({
                            book : {
                                ...oldState.book,
                                name: event.target.value
                            }
                        }))}
                         />
                </td>
                <td>
                    <input type="text" id="author" name="author" className="form-control"
                        value={this.state.book.author}
                        onChange={(event) => this.setState(oldState => ({
                            book : {
                                ...oldState.book,
                                author: event.target.value
                            }
                        }))}
                         />
                </td>
                <td>
                    <input type="number" id="price" name="price" className="form-control"
                        value={this.state.book.price}
                        onChange={(event) => this.setState(oldState => ({
                            book : {
                                ...oldState.book,
                                price: event.target.value
                            }
                        }))}
                         />
                </td>
                <td>
                    <input type="number" id="year" name="year" className="form-control"
                        value={this.state.book.year}
                        onChange={(event) => this.setState(oldState => ({
                            book : {
                                ...oldState.book,
                                year: event.target.value
                            }
                        }))}
                         />
                </td>
                <td>
                    <input type="text" id="country" name="country" className="form-control"
                        value={this.state.book.country}
                        onChange={(event) => this.setState(oldState => ({
                            book : {
                                ...oldState.book,
                                country: event.target.value
                            }
                        }))}
                         />
                </td>
                <td colSpan="2">
                    <button className="btn btn-primary" onClick={this.modifyBookHandler} >Modifier</button>
                </td>

            </>
        )
    }
}

export default ModifyBook;
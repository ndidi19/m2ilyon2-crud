import React, {Component} from "react";

class AddBook extends Component {

    state = {
        name: "",
        author: "",
        price: "",
        year: "",
        country: ""
    }

    validationFormHandler = (event) => {
        event.preventDefault();
        console.log("Soumission du form");
        this.props.callToAction(this.state.name, this.state.author, this.state.price, this.state.year, this.state.country)
    }

    render() {
        return (
            <>
                <h2 className="text-center" style={{fontFamily: 'Neonderthaw'}}>Ajout d'un nouveau livre</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nom :</label>
                        <input type="text" id="name" name="name" className="form-control"
                        value={this.state.name}
                        onChange={(event) => this.setState({name: event.target.value})}
                         />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="author" className="form-label">Auteur :</label>
                        <input type="text" id="author" name="author" className="form-control"
                        value={this.state.author}
                        onChange={(event) => this.setState({author: event.target.value})}
                         />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Prix :</label>
                        <input type="number" id="price" name="price" className="form-control"
                        value={this.state.price}
                        onChange={(event) => this.setState({price: event.target.value})}
                         />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="year" className="form-label">Année :</label>
                        <input type="number" id="year" name="year" className="form-control"
                        value={this.state.year}
                        onChange={(event) => this.setState({year: event.target.value})}
                         />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="country" className="form-label">Pays :</label>
                        <input type="text" id="country" name="country" className="form-control"
                        value={this.state.country}
                        onChange={(event) => this.setState({country: event.target.value})}
                         />
                    </div>
                    
                    <button type="submit" className="btn btn-primary" onClick={this.validationFormHandler}>Créer</button>
                    </form>
            </>
        )
    }
}

export default AddBook;
import React, {Component} from "react";
import {withFormik} from "formik";

class AddBook extends Component {

    // state = {
    //     book: {
    //         name: "",
    //         author: "",
    //         price: "",
    //         year: "",
    //         country: ""
    //     }
    // }

    // validationFormHandler = (event) => {
    //     event.preventDefault();
    //     console.log("Soumission du form");
    //     this.props.callToAction(this.state.book);
    //     this.setState({
    //         name: "",
    //         author: "",
    //         price: "",
    //         year: "",
    //         country: ""
    //     });
    // }

    render() {
        return (
            <>
                <h2 className="text-center" style={{fontFamily: 'Neonderthaw'}}>Ajout d'un nouveau livre</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nom :</label>
                        <input type="text" id="name" name="name" className="form-control"
                        value={this.props.values.name}
                        //onChange={(event) => this.setState({book: {name: event.target.value}})}
                        onChange={this.props.handleChange}
                         />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="author" className="form-label">Auteur :</label>
                        <input type="text" id="author" name="author" className="form-control"
                        value={this.props.values.author}
                        onChange={this.props.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Prix :</label>
                        <input type="number" id="price" name="price" className="form-control"
                        value={this.props.values.price}
                        onChange={this.props.handleChange}                           
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="year" className="form-label">Année :</label>
                        <input type="number" id="year" name="year" className="form-control"
                        value={this.props.values.year}
                        onChange={this.props.handleChange}                            
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="country" className="form-label">Pays :</label>
                        <input type="text" id="country" name="country" className="form-control"
                        value={this.props.values.country}
                        onChange={this.props.handleChange}                           
                        />
                    </div>
                    
                    <button type="submit" className="btn btn-primary" onClick={this.props.handleSubmit}>Créer</button>
                </form>
            </>
        )
    }
}

export default withFormik({
    mapPropsToValues : () => ({
            name: "",
            author: "",
            price: "",
            year: "",
            country: ""
    }),
    validate: values => {
        const errors = {};
        if(values.name.length < 5) {
            errors.name = "Le titre doit avoir au moins 5 caractères";
        }
        if(values.name.length > 15) {
            errors.name = "Le titre doit avoir au maximum 15 caractères";
        }
        if(!values.author) {
            errors.author = "Le champ auteur est requis";
        }
        return errors;
    },
    handleSubmit: (values, {props}) => {
        console.log(values);
        props.callToAction(values);
    }
}) (AddBook);
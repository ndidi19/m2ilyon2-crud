import React, {Component} from "react";
import {withFormik} from "formik";
import * as Yup from "yup";

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
                        onBlur={this.props.handleBlur}
                         />
                         {
                            this.props.errors.name && this.props.touched.name &&
                            <span style={{color: "red"}}>{this.props.errors.name}</span>
                         }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="author" className="form-label">Auteur :</label>
                        <input type="text" id="author" name="author" className="form-control"
                        value={this.props.values.author}
                        onChange={this.props.handleChange}
                        onBlur={this.props.handleBlur}
                        />
                        {
                            this.props.errors.author && this.props.touched.author &&
                            <span style={{color: "red"}}>{this.props.errors.author}</span>
                         }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Prix :</label>
                        <input type="number" id="price" name="price" className="form-control"
                        value={this.props.values.price}
                        onChange={this.props.handleChange}
                        onBlur={this.props.handleBlur}                           
                        />
                        {
                            this.props.errors.price && this.props.touched.price &&
                            <span style={{color: "red"}}>{this.props.errors.price}</span>
                         }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="year" className="form-label">Année :</label>
                        <input type="number" id="year" name="year" className="form-control"
                        value={this.props.values.year}
                        onChange={this.props.handleChange}
                        onBlur={this.props.handleBlur}                            
                        />
                        {
                            this.props.errors.year && this.props.touched.year &&
                            <span style={{color: "red"}}>{this.props.errors.year}</span>
                         }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="country" className="form-label">Pays :</label>
                        <input type="text" id="country" name="country" className="form-control"
                        value={this.props.values.country}
                        onChange={this.props.handleChange}   
                        onBlur={this.props.handleBlur}                        
                        />
                        {
                            this.props.errors.country && this.props.touched.country &&
                            <span style={{color: "red"}}>{this.props.errors.country}</span>
                         }
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
    validationSchema : Yup.object().shape({
        name: Yup.string()
                    .min(3, "Le nom du livre doit comporter au minimum 3 caractères...")
                    .max(15, "Le nom du livre doit comporter au maximum 15 caractères...")
                    .required(),
        author: Yup.string()
                    .required("Le nom de l'auteur est requis"),
        price: Yup.number()
                    .required("Le prix est requis"),
        year: Yup.number()
                    .moreThan(1900, "L'année doit être supérieur 1900")
                    .required("L'année est requise"),
        country: Yup.string()
                    .required("Le nom du pays est requis"),
    }),
    handleSubmit: (values, {props}) => {
        console.log(values);
        props.callToAction(values);
    }
}) (AddBook);
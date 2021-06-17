import React, { Component } from 'react'
import { Formik, Field, Form} from 'formik'
import { apiMovie } from './../../api/apiMovie';

export class Recherche extends Component {

    state = {
        InitialValues : {
            query : ""
        }
    }

    getFormulaire = (form) => {
        apiMovie.get("/search/movie", {
            params : {
                query : form.query
            }
        }).then(response => {
            this.props.rechercheFilm(response.data.results)
        } )
    }

    render() {

        return (
                <React.Fragment>
                    <Formik initialValues={this.state.InitialValues} onSubmit ={(form) => {this.getFormulaire(form)}} >
                        <Form>
                            <div className="input-group">
                                <Field type="search" className="form-control rounded search" placeholder="Search a movie ..." aria-label="Search"
                                    aria-describedby="search-addon"  name="query" />
                                    <button type="submit" className="btn btn-outline searchBtn">Search</button>
                            </div>
                        </Form>
                    </Formik>
                </React.Fragment>
        )
    }
}

export default Recherche

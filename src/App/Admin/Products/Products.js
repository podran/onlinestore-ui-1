import React, { Component } from 'react';
import { ErrorMessage, Field, Form, Formik } from "formik";
import CategoryService from '../../services/category.service';
import productValidationScheme from '../../models/product';
import ProductService from '../../services/product.service';


export class Products extends Component {
    constructor(props) {
        super(props);
        this.image = React.createRef();
        this.state = {
            submitting: false,
            categories: []
        };
    }
    send(values) {
        console.log(values);
        ProductService.create(values)
            .then(res => res.json())
            .then(product => {

            })
            .catch(err => console.log(err));
        this.setState({ submitting: true });
    }
    componentDidMount() {
        CategoryService
            .getAll()
            .then(res => res.json())
            .then(categories => this.setState({ categories }));
    }
    render() {
        return (
            <div>
                <Formik
                    initialValues={{ title: '', price: 0, categoryId: '', image: '' }}
                    onSubmit={this.send.bind(this)}
                    validationSchema={productValidationScheme}
                    render={({setFieldValue}) => {
                        return <Form className="col-sm-6">
                            <div className="form-group">
                                <label>title:</label>
                                <Field name="title" type="text" className="form-control" />
                                <ErrorMessage name="title" component="div" className="alert alert-danger" />
                            </div>
                            <div className="form-group">
                                <label>price:</label>
                                <Field name="price" type="number" className="form-control" />
                                <ErrorMessage name="price" component="div" className="alert alert-danger" />
                            </div>
                            <div className="form-group">
                                <label>category:</label>
                                <Field name="categoryId" component="select" className="form-control" >
                                    <option defaultValue>Choose Category</option>
                                    {this.state.categories.map((category, i) => <option value={category.id} key={i}>{category.name}</option>)}
                                </Field>
                                <ErrorMessage name="categoryId" component="div" className="alert alert-danger" />
                            </div>
                            <div className="form-group">
                                <label>image:</label>
                                <input name="image" type="file" className="form-control pt-1" onChange={event => {
                                    setFieldValue('image' ,event.currentTarget.files[0]);
                                }} />
                                <ErrorMessage name="image" component="div" className="alert alert-danger" />
                            </div>
                            <div className="form-group">
                                <input type="submit"
                                    value={this.state.submitting ? 'submitting...' : 'Submit'}
                                    className="btn btn-primary"
                                    disabled={this.state.submitting} />
                            </div>
                        </Form>
                    }}>
                </Formik>
            </div>
        )
    }
}

export default Products

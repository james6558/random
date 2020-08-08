import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value =>{
                    const {id, company, img, info, price, title, inCart} = value.detailproduct;
                    return (
                        <div className = 'container py-5'>
                            {/*title*/}
                            <div className = 'row'>
                                <div className = 'col-10 mx-auto text-center text-slanted text-blue'>
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/*end of title*/}
                            {/*Product info*/}
                            <div className = 'row'>
                                <div className = 'col-10 mx-auto col-md-6 py-5 text-capitalize'>
                                    <img src = {img} className = 'img-fluid' alt = 'product'/>
                                </div>
                                {/*product text*/}
                                <div className='col-10 mx-auto col-md-6 py-5 text-capitalize'>
                                   <h2>model : {title}</h2>
                                   <h4 className = 'text-title text-uppercase text-muted mt-3 mb-2'>
                                       made by : <span className = 'text-uppercase'>{company}</span>
                                   </h4>
                                    <h4 className='text-blue'><strong>price : <span>$</span>{price}</strong></h4>
                                    <p className = 'text-capiltalize font-weight-bold mt-3 mb-0'>
                                        some info about product:
                                    </p>
                                    <p className = 'text-muted lead'>
                                        {info}
                                    </p>
                                    {/* buttons */}
                                    <div>
                                        <Link to = '/'>
                                            <ButtonContainer>
                                                Back to Products
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer disabled = {inCart?true:false}
                                        onClick = {()=>{value.addToCart();
                                                        value.openModal(id);}}>
                                            {inCart?'inCart':'addTo Cart'}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}

export default Details;

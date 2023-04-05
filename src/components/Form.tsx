import React, { FC } from 'react';
import { useForm } from './hooks/useForm';


export interface CardNumberDetails {
    cardNumber: number;
    cvv: number;
    expiry: string;
}


const Form: FC = () => {
    const { handleSubmit, handleChange, data: cardDetails, errors } = useForm<CardNumberDetails>({
        validations: {
            cardNumber: {
                custom: {
                    isValid: (value) => value.length >= 10,
                    message:
                        "Card number has to be a minimum of 10 digits",
                },
            },
            cvv: {
                custom: {
                    isValid: (value) => value.length === 3,
                    message: 'CVV has to be a minimum of 3 numbers',
                },
            },
            expiry: {
                custom: {
                    isValid: (value) => new Date(value).toISOString().split('T') > new Date().toISOString().split('T'),
                    message: 'Expiry has to be in the future'
                }
            },
        },
        onSubmit: () => {
            alert('submitted')
            console.log(cardDetails);
        },
    });

    return (
        <form className="form" onSubmit={handleSubmit} name="registerForm">
            <div className="row">
                <input
                    aria-label="Credit card number"
                    placeholder="Credit card number*"
                    value={cardDetails.cardNumber || ''}
                    onChange={handleChange<number>('cardNumber', (value) => parseInt(value, 10))}
                    required
                />
                {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
            </div>
            <div className="row">
                <input
                    aria-label="CVV"
                    placeholder="CVV"
                    type="number"
                    value={cardDetails.cvv || ''}
                    onChange={handleChange<number>('cvv', (value) => parseInt(value, 10))}
                    required
                />
                {errors.cvv && <p className="error">{errors.cvv}</p>}
                <input
                    aria-label="Expiry date"
                    placeholder="Expiry date"
                    type="Date"
                    value={cardDetails.expiry || ''}
                    onChange={handleChange<string>('expiry', (value) => value)}
                    required
                />
                {errors.expiry && <p className="error">{errors.expiry}</p>}
            </div>
            <div className="row">
                <input type="submit" name="submit"></input>
            </div>
        </form>
    );
}

export default Form;
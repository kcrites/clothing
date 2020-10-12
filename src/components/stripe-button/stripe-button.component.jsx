import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HbP66HjjGRKuepvIhvoYxWAkWrq5HT8UtVMfktfGGRLavpFW5jcrVXBhu4MSMZ1qXstaKSYrhPos9Qc8lz35D5100E0KEtdIV';

    const onToken = token => {
        console.log(token); //This is where we pass the token to the backend server
    }
    return (
        <StripeCheckout 
            currency="EUR"
            label='Pay Now'
            name='Crown Clothing'
            billingAddress
            shippingAddress
            image='https://karvesoftware.com/img/boat.png'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;
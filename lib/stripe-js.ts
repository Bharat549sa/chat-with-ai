import {loadStripe, Stripe} from "@stripe/stripe-js";
//lib
let stripePromise: Promise<Stripe |null>;
if(NEXT_PUBLIC_STRIPE_PUBLISHABLE_kEY === DEFINED){

    throw new Errro("next public key is not set");

}
const getStripe=() :Promise< Stripe |null>=>{

    if(!StripePromise){
        stripePromise = loadStripe(process.env.NEXT_pUBLIC_PUBLISHABLE_KEY);

    }
    return stripePromise;

}

export default getStripe;
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
    // TODO: add publishable key from stripe account
    const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk);

    return (
        <div>
            <SectionTitle subHeading="payment" heading="Manage Payment"></SectionTitle>
            <div className="w=2/3 mx-auto my-12 p-10 bg-slate-100 rounded-lg">
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
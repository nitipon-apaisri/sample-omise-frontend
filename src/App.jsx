import "./App.css";
import useScript from "./hooks/useScript";
function App() {
    let OmiseCard
    useScript("https://cdn.omise.co/omise.js");
    if (window.OmiseCard) {
        OmiseCard = window.OmiseCard;
        OmiseCard.configure({
            publicKey: import.meta.env.OMISE_PKEY,
            currency: "thb",
            frameLabel: "Merchant name",
            submitLabel: "PAY NOW",
            buttonLabel: "Pay with Omise",
        });
    }
    const omiseCardHandler = () => {
        OmiseCard.open({
            frameDescription: "Invoice #3847",
            amount: 100000,
            onCreateTokenSuccess: (nonce) => {
                console.log(nonce);
            },
            onFormClosed: () => {
                console.log("Form Closed");
            },
        });
    };

    return (
        <>
            <button onClick={omiseCardHandler}>Pay with Omise</button>
        </>
    );
}

export default App;

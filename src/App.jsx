import Cars from "./Cars";

/** 1 */
const App = () => {
    const cars = [
        {
            brand: "Ford",
            model: "Mustang",
        },
        {
            brand: "Audi",
            model: "A8",
        },
        {
            brand: "Tesla",
            model: "Model 3",
        },
    ];

    return (
        <div>
            <Cars cars={cars} />
        </div>
    );
};

export default App;

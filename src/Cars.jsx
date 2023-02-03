import Car from "./Car";

/** 2
 * props je bitan
 */
const Cars = (props) => {
    // console.log(props.cars);
    return (
        <>
            {props.cars.map((car) => (
                <Car brand={car.brand} model={car.model} />
            ))}
        </>
    );
};
export default Cars;

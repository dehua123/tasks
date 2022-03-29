import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface doubletheValue {
    double: () => void;
}
interface halftheValue {
    half: () => void;
}

function Doubler({ double }: doubletheValue): JSX.Element {
    return <Button onClick={double}>Double</Button>;
}

function Halver({ half }: halftheValue): JSX.Element {
    return <Button onClick={half}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    const doubleValue = () => setDhValue(2 * dhValue);
    const halfValue = () => setDhValue(0.5 * dhValue);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler double={doubleValue}></Doubler>
            <Halver half={halfValue}></Halver>
        </div>
    );
}

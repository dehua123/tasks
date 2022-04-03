import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, amountofAttempts] = useState<number>(3);
    const [request, setRequested] = useState<string>("");
    const attemptsInt = parseInt(request) || 0;

    const substractOne = (): void => {
        amountofAttempts(attempts - 1);
    };
    const addAttempts = (): void => {
        amountofAttempts(attempts + attemptsInt);
    };

    return (
        <div>
            <div>
                <Button onClick={substractOne} disabled={attempts === 0}>
                    use
                </Button>
                <Button onClick={addAttempts}>gain</Button>
            </div>
            <div>
                <Form.Group controlId="giveAttempts">
                    <Form.Label>Requested Attempts:</Form.Label>
                    <Form.Control
                        type="number"
                        value={request}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setRequested(event.target.value)}
                    />
                </Form.Group>
                <div>{attempts}.</div>{" "}
            </div>
        </div>
    );
}

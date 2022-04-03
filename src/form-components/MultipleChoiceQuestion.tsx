import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);
    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="multipleChoice">
                <Form.Label>question?</Form.Label>
                <Form.Select value={answer} onChange={updateAnswer}>
                    {options.map((optioned: string) => (
                        <option key={optioned} value={optioned}>
                            {optioned}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            the answer is{" "}
            {answer === expectedAnswer ? <span>✔️</span> : <span>❌</span>}.
        </div>
    );
}

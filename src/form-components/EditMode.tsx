import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEdit, setEdit] = useState<boolean>(false);
    const [isStudent, setStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");

    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    return (
        <div>
            <div>
                <Form.Group controlId="student textbox">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        value={name}
                        onChange={updateName}
                        disabled={!isEdit}
                    />
                </Form.Group>
                <div>{name}</div>
            </div>
            <div>
                <Form.Check
                    type="checkbox"
                    id="isStudentcheck"
                    label="isStudent"
                    checked={isStudent}
                    onChange={updateStudent}
                    disabled={!isEdit}
                />
            </div>
            <div>
                <Form.Check
                    type="switch"
                    label="edit"
                    checked={isEdit}
                    onChange={updateEdit}
                />
                <div>
                    {name} is {isStudent ? "a student" : "   not a student"}.
                </div>
            </div>
        </div>
    );
}

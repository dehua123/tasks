import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");
    return (
        <div>
            <div>
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={(e) => setColor(e.target.value)}
                    label={
                        <span style={{ backgroundColor: "red" }}>{"red"}</span>
                    }
                    value="red"
                    checked={color === "red"}
                />
            </div>
            <div>
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={(e) => setColor(e.target.value)}
                    label={
                        <span style={{ backgroundColor: "blue" }}>
                            {"blue"}
                        </span>
                    }
                    value="blue"
                    checked={color === "blue"}
                />
            </div>
            <div>
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={(e) => setColor(e.target.value)}
                    label={
                        <span style={{ backgroundColor: "green" }}>
                            {"green"}
                        </span>
                    }
                    value="green"
                    checked={color === "green"}
                />
            </div>
            <div>
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={(e) => setColor(e.target.value)}
                    label={
                        <span style={{ backgroundColor: "yellow" }}>
                            {"yellow"}
                        </span>
                    }
                    value="yellow"
                    checked={color === "yellow"}
                />
            </div>
            <div>
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={(e) => setColor(e.target.value)}
                    label={
                        <span style={{ backgroundColor: "purple" }}>
                            {"purple"}
                        </span>
                    }
                    value="purple"
                    checked={color === "purple"}
                />
            </div>
            <div>
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={(e) => setColor(e.target.value)}
                    label={
                        <span style={{ backgroundColor: "cyan" }}>
                            {"cyan"}
                        </span>
                    }
                    value="cyan"
                    checked={color === "cyan"}
                />
            </div>
            <div>
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={(e) => setColor(e.target.value)}
                    label={
                        <span style={{ backgroundColor: "magenta" }}>
                            {"magenta"}
                        </span>
                    }
                    value="magenta"
                    checked={color === "magenta"}
                />
            </div>
            <div>
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={(e) => setColor(e.target.value)}
                    label={
                        <span style={{ backgroundColor: "white" }}>
                            {"white"}
                        </span>
                    }
                    value="white"
                    checked={color === "white"}
                />
            </div>
            <div>
                you have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
            </div>
        </div>
    );
}

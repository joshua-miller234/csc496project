import React from "react"
import { render } from "@testing-library/react"

const component = require('../src/templates/recipenode');

test('tested data component', () => {
    const { getByTestId } = render(<component.default />);
    expect(getByTestId("data-component")).toHaveTextContent("butter");
})
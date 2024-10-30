import React from "react"
import { render } from "@testing-library/react"

const title = require('../src/pages/index');

test('tested static component', () => {
    const { getByTestId } = render(<title.Head />);
    expect(getByTestId("static-component")).toHaveTextContent("Home Page | My Gatsby Site");
})
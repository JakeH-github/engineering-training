import renderer from 'react-test-renderer';
import Logo from "../src/components/logo";
import React from "react";

test('Render the logo', () => {
    const component = renderer.create(
        <Logo/>,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

import React from "react";
import { configure, shallow } from "enzyme";

//Enzyme Configurations
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Joke from "../Joke";

test("Joke component receives props and then renders text", () => {
    // Renders Joke component with some text prop.
    const JokeRender = shallow(<Joke text={"The funniest joke this year."} />);
    expect(JokeRender.text()).toEqual("The funniest joke this year.")
});

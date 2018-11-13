import React from "react";
import * as axios from "axios";
import MockAxios from "axios-mock-adapter";
import { configure, shallow } from "enzyme";
import JokeGenerator from "../JokeGenerator";
import {  wait } from "react-testing-library";

//Enzyme Configurations
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

//restore mock to clean state
// const mock = new MockAxios(axios, { delayResponse: Math.random() * 500});
const mock = new MockAxios(axios);

//removed mocked state from axios
// afterAll(() => mock.reset());
afterEach(() => {
    mock.reset();
});

test("Check Default text is being displayed", () => {
    const JokeRender = shallow(<JokeGenerator/>);
    /* Checking if a default text is being displayed when
* no joke has been loaded yet.
*/
    expect(JokeRender.contains((<p>You haven't loaded any joke yet!</p>))).toEqual(true);
});

test("Load Joke Button CLick ", () => {
    const JokeRender = shallow(<JokeGenerator/>);

    //Test the button is on the DOM
    expect(JokeRender.find('.loadJoke').length).toEqual(1);

    //simulate click
    JokeRender.find('.loadJoke').simulate('click');

    //Check default text does not appear in component
    expect(JokeRender.contains((<p>You haven't loaded any joke yet!</p>))).toEqual(false);

});

test("Display random Joke ", async () => {
    // mock.onGet().replyOnce(200, {
    //     value: {
    //         joke: "Really funny joke!"
    //     }
    // });


    const JokeRender = shallow(<JokeGenerator/>);

    //Test the button is on the DOM
    expect(JokeRender.find('.loadJoke').length).toEqual(1);

    //simulate click
    JokeRender.find('.loadJoke').simulate('click');

    //Check default text does not appear in component
    expect(JokeRender.contains((<p>You haven't loaded any joke yet!</p>))).toEqual(false);

    expect(JokeRender.contains((<p>Loading...</p>))).toEqual(true);

    await wait(() => expect(JokeRender.contains((<p>Loading...</p>))).toEqual(false));

    // expect(JokeRender.contains((<p>Loading...</p>))).toEqual(false);

});


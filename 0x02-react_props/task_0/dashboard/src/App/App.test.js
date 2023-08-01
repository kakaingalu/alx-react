import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from './App';

describe('<App />', () => {
    it("renders without crashing", () => {
        const wrapper = render(<App />);
        expect(wrapper).not.toBeNull();
    });
});

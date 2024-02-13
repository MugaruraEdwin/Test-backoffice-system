import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('renders Power BI embed component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('iframe').prop('title')).toEqual('STREAMLINE demo files (1)');
    expect(wrapper.find('iframe').prop('width')).toEqual('1140');
    expect(wrapper.find('iframe').prop('height')).toEqual('700');
    expect(wrapper.find('iframe').prop('src')).toEqual('https://app.powerbi.com/reportEmbed?reportId=519c9242-710e-481e-b1d5-70c834b4cc68&autoAuth=true&ctid=42af99c6-5a96-4d4d-af48-3317dac88db0');
    expect(wrapper.find('iframe').prop('frameBorder')).toEqual(undefined); // Adjusted assertion
    expect(wrapper.find('iframe').prop('allowFullScreen')).toEqual('true');
  });
});


// import React from 'react';
// import { mount } from 'enzyme'; // Using Enzyme for mounting React components
// import App from './App';
// import { render } from '@testing-library/react';

// describe('App', () => {
//   it('should handle getRandomValues', () => {
//     const mGetRandomValues = jest.fn().mockReturnValueOnce(/* your mock value */);
//     Object.defineProperty(window, 'crypto', {
//       value: { getRandomValues: mGetRandomValues },
//     });

//     // Your test logic for handling getRandomValues goes here
//   });

//   it('renders Power BI embed component', () => {
//     const wrapper = mount(<App />);
//     expect(wrapper.contains('Report loaded')).toEqual(true);
//   });
// });

// App.test.js
// import React from 'react';
// import { mount } from 'enzyme'; // Using Enzyme for mounting React components
// import App from './App';

// describe('App component', () => {
//   it('renders Power BI embed component', () => {
//     const wrapper = mount(<App />);
//     expect(wrapper.contains('Report loaded')).toEqual(true); // Use Jest's expect syntax
//   });
// });

// import React from 'react';
// import { shallow } from 'enzyme';
// import App from './App';

// describe('App component', () => {
//   it('renders Power BI embed component', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find('iframe').prop('title')).toEqual('STREAMLINE demo files (1)');
//     expect(wrapper.find('iframe').prop('width')).toEqual('1140');
//     expect(wrapper.find('iframe').prop('height')).toEqual('700');
//     expect(wrapper.find('iframe').prop('src')).toEqual('https://app.powerbi.com/reportEmbed?reportId=519c9242-710e-481e-b1d5-70c834b4cc68&autoAuth=true&ctid=42af99c6-5a96-4d4d-af48-3317dac88db0');
//     expect(wrapper.find('iframe').prop('frameBorder')).toEqual('0');
//     expect(wrapper.find('iframe').prop('allowFullScreen')).toEqual('true');
//   });
// });



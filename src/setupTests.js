// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



// setupTests.js

// Mock window.crypto
const mockGetRandomValues = jest.fn().mockReturnValue(new Uint8Array(1));
global.crypto = {
  getRandomValues: mockGetRandomValues
};

configure({ adapter: new Adapter() });

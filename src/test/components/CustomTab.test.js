import 'jsdom-global/register';
// import jsdom from 'jsdom'
import { mount } from "enzyme";
import App from "../../App";
// const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
// global.document = doc
// global.window = doc.defaultView

describe('Test CustomTab', () => {
    it('Test toggle button render', () => {
        const wrapper = mount(<App />)
        expect(wrapper.find('button.bx--btn.bx--btn--primary').exists()).toBe(true);
    })

    // it('Toggle button Click', () => {

    // })
})
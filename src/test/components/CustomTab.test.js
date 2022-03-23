import 'jsdom-global/register';
import { mount } from "enzyme";
import App from "../../App";

describe('Test CustomTab', () => {
    it('Test toggle button render', () => {
        const wrapper = mount(<App />)
        expect(wrapper.find('button.toggle-btn').exists()).toBe(true);
    })

    it('Toggle button Click', () => {
        const wrapper = mount(<App />)
        wrapper.find('button.toggle-btn').simulate('click');
        expect(wrapper.find('.bx--tabs--scrollable').exists()).toBe(true);
        wrapper.find('button.toggle-btn').simulate('click');
        expect(wrapper.find('.bx--tabs--scrollable').exists()).toBe(false);
    })
})
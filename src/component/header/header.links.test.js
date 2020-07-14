import React from 'react';

import { shallow } from 'enzyme';
import HeaderLinks from './header.links'

describe('Header Links', () => {

    it('renders animal link', () => {
        const user = { isUserFetched: true }

        const wrapper = shallow(<HeaderLinks user={user} />)

        expect(wrapper.find('Link').exists()).toBe(true)
        expect(wrapper.find('.makeStyles-linkItem-1').exists()).toBe(true)
        expect(wrapper.find('.makeStyles-linkItem-1').text()).toBe('Animals')
        expect(wrapper.find('.makeStyles-linkItem-1')).toHaveLength(1)

    })

    it('renders animal link for signed out user', () => {
        const user = null

        const wrapper = shallow(<HeaderLinks user={user} />)

        expect(wrapper.find('Fragment').exists()).toBe(true)
        expect(wrapper.find('Link').exists()).toBe(false)
        expect(wrapper.find('.makeStyles-linkItem-1').exists()).toBe(false)

    })

})
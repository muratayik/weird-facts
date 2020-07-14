import React from 'react';

import { render, shallow } from 'enzyme';
import HeaderUserInfo from './header.userInfo'

describe('Header User Info', () => {

    it('render user info for signed in user', () => {
        const user = { isUserFetched: true, email: 'muayi@dfds.com' }
        const wrapper = shallow(<HeaderUserInfo user={user} />)

        expect(wrapper.find('Fragment').exists()).toBe(true)
        expect(wrapper.find('.makeStyles-linkItem-1').exists()).toBe(true)
        expect(wrapper.find('.makeStyles-linkItem-1').text()).toBe(user.email)
        expect(wrapper.find('.makeStyles-linkItem-1')).toHaveLength(1)

    })

    it('render user info for not signed in user', () => {
        const user = null
        const wrapper = shallow(<HeaderUserInfo user={user} />)

        expect(wrapper.find('Fragment').exists()).toBe(true)
        expect(wrapper.find('.makeStyles-linkItem-1').exists()).toBe(false)

    })

})
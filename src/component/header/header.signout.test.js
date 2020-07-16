import React from 'react'

import { mount, shallow } from 'enzyme'
import HeaderSignOut from './header.signout'

describe('Signout actions', () => {
    it('Render button if user logged', () => {
        const user = { isUserFetched: true }
        const wrapper = mount(<HeaderSignOut user={user} />)
        expect(wrapper.find('button').exists()).toBe(true)
    })

    it('Do not render button if user not logged', () => {
        const user = null
        const wrapper = mount(<HeaderSignOut user={user} />)
        expect(wrapper.find('button').exists()).toBe(false)
    })

    it('Render and click button', () => {
        const user = { isUserFetched: true }
        const mockCallBack = jest.fn()

        const wrapper = mount(<HeaderSignOut user={user} onClick={mockCallBack} />)

        wrapper.find('button').simulate('click')
        expect(mockCallBack.mock.calls.length).toEqual(1);
    })
})
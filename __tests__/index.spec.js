import { mount } from '@vue/test-utils'
import Index from '../views/App.vue'

test('test-click', async () => {
  const wrapper = mount(Index)
  console.log(wrapper.text())
  expect(wrapper.text()).toContain('0')
  await wrapper.trigger('click')
  expect(wrapper.text()).toContain('1')
})
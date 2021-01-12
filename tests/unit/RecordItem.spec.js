import { shallowMount } from '@vue/test-utils';
import RecordItem from '@/features/records/components/RecordItem.vue';

describe('RecordItem.vue', () => {
  it('should render created date in correct format', () => {
    const wrapper = shallowMount(RecordItem, {
      propsData: {
        data: {
          id: 0,
          weight: 77,
          createdDateTime: '2012-12-12T00:00:00Z',
        },
      },
    });

    expect(wrapper.text()).toContain('Created at Dec 12, 2012');
  });
});

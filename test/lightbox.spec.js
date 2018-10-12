import { mount, createLocalVue } from '@vue/test-utils';
import expect from 'expect';

import VueLightbox from '../src';
import Lightbox from '../src/components/Lightbox.vue';

describe('Loader', () => {
    let localVue;
    let $lightbox;
    let wrapper;

    beforeEach(() => {
        localVue = createLocalVue();
        localVue.use(VueLightbox);

        $lightbox = localVue.prototype.$lightbox;

        wrapper = mount(Lightbox, {
            localVue,
            propsData: {
                images: generateImages(5)
            }
        });
    });

    it('can be opened', () => {
        expect(wrapper.vm.isOpen).toBe(false);

        $lightbox.open();

        expect(wrapper.vm.isOpen).toBe(true);
    });

    it('can be closed', () => {
        $lightbox.open();
        expect(wrapper.vm.isOpen).toBe(true);

        $lightbox.close();
        expect(wrapper.vm.isOpen).toBe(false);
    });

    // it('can load an array of images', () => {

    // });

    let generateImages = (imageCount = 5) => {
        let images = [];

        for (let i = 0; i < imageCount; i++) { 
            images.push({
                id: i,
                url: `test-image-${i}.jpg`,
                title: `Test image ${i}`,
                caption: `This is a test image ${i}`
            });
        }

        return images;
    }
});

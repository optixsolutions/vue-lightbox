import { createLocalVue } from '@vue/test-utils';
import expect from 'expect';
import Lightbox from '../src';

describe('Loader', () => {
    let Vue;
    let lightbox;

    beforeEach(() => {
        Vue = createLocalVue();
        Vue.use(Lightbox);
        
        lightbox = Vue.prototype.$lightbox;
    });

});

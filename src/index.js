import VueTouch from 'vue-touch';

export default function install(Vue) {

    const eventBus = new Vue();

    Vue.lightbox = {
        open(id = null) {
            eventBus.$emit('open-lightbox', id);
        },

        onOpen(callback = () => {}) {
            eventBus.$on('open-lightbox', callback);
        },

        close() {
            eventBus.$emit('close-lightbox');
        },

        onClose(callback = () => {}) {
            eventBus.$on('close-lightbox', callback);
        },

        destroy(callback = () => {}) {
            eventBus.$off('open-lightbox', callback);
        }
    }

    Vue.use(VueTouch, { name: 'lightbox-touch' });
    Vue.component('lightbox', require('./components/Lightbox'));

    Object.defineProperty(Vue.prototype, '$lightbox', {
        get() {
            return Vue.lightbox;
        }
    });

}

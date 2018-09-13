# Vue Lightbox

A simple lightbox image gallery plugin.

## Installation

```bash
npm install @optix/vue-lightbox --save

yarn add @optix/vue-lightbox
```

```js
import Vue from 'vue';
import VueLightbox from '@optix/vue-lightbox';

Vue.use(VueLightbox);
```

```scss
@import "@optix/vue-lightbox/src/sass/_index";
```

## Usage

// TODO

Accessing the lightbox object:

```js
// Globally
Vue.lightbox.open();

// On an instance
this.$lightbox.open();
```

### Methods

* open() - id
* onOpen() - callback
* close()
* onClose() - callback
* destroy() - callback

```vue
<lightbox :images="images"></lightbox>
```

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

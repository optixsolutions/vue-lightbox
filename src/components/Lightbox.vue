<template>
    <transition name="lightbox">
        <div class="modal is-lightbox is-active" v-if="isOpen">
            <div class="modal-background" @click="close"></div>

            <div class="modal-content">
                <div class="lightbox-container" @click="close">
                    <div class="lightbox-image-holder">
                        <lightbox-touch @swipeleft="setNextImage" @swiperight="setPreviousImage">
                            <img :src="activeImage.url" class="lightbox-image" @click.stop>
                        </lightbox-touch>

                        <div class="lightbox-image-overlay">
                            <h4 class="lightbox-image-title">{{ activeImage.title }}</h4>
                            <p class="lightbox-image-caption">{{ activeImage.caption }}</p>
                        </div>
                    </div>
                </div>

                <div class="lightbox-navigation-holder" v-if="isGallery">
                    <a
                        class="lightbox-navigation is-previous"
                        :class="{ 'is-disabled': ! hasPreviousImage }"
                        @click="setPreviousImage"
                    ></a>
                    
                    <a
                        class="lightbox-navigation is-next"
                        :class="{ 'is-disabled': ! hasNextImage }"
                        @click="setNextImage"
                    ></a>
                    
                    <a class="is-close" @click="close">
                        <span class="delete is-large"></span>
                    </a>
                </div>
            </div>

            <button class="modal-close is-large" @click="close"></button>
        </div>
    </transition>
</template>

<script>
    export default {
        props: {
            images: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                isOpen: false,
                activeImageId: null
            }
        },

        computed: {
            isGallery() {
                return this.images.length > 1;
            },

            currentIndex() {
                return this.activeImageId
                    ? this.images.findIndex(({ id }) => id === this.activeImageId)
                    : 0;
            },

            activeImage() {
                return this.images[this.currentIndex];
            },

            hasPreviousImage() {
                return (this.currentIndex - 1) >= 0;
            },

            previousImage() {
                return (this.hasPreviousImage)
                    ? this.images[this.currentIndex - 1]
                    : null;
            },

            hasNextImage() {
                return (this.currentIndex + 1) < this.images.length;
            },

            nextImage() {
                return (this.hasNextImage)
                    ? this.images[this.currentIndex + 1]
                    : null;
            }
        },

        mounted() {
            this.$lightbox.onOpen(this.open);
            this.$lightbox.onClose(this.close);
        },

        beforeDestroy() {
            this.$lightbox.destroy(this.open);
        },

        methods: {
            open(id) {
                this.activeImageId = id;
                this.moveToId = this.activeImageId;
                this.isOpen = true;
            },

            close() {
                this.isOpen = false;
            },

            setPreviousImage() {
                this.activeImageId = (this.hasPreviousImage)
                    ? this.images[this.currentIndex - 1].id
                    : 0;
            },

            setNextImage() {
                this.activeImageId = (this.hasNextImage)
                    ? this.images[this.currentIndex + 1].id
                    : this.images.length;
            }
        }
    }
</script>

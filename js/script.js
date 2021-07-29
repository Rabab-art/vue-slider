console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
        currentIndex: 0,
        img: [
            './img/image1.jpg',
            './img/image2.jpg',
            './img/image3.jpg',
            './img/image4.jpg',
        ],
    },
    methods: {
        isActive(index) {
            return this.currentIndex === index ? 'active' : '';
        },
        increaseIndex() {
            if (this.currentIndex === this.img.length - 1) {
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }
        },
        decreaseIndex() {
            if (this.currentIndex === 0) {
                this.currentIndex = this.img.length - 1;
            } else {
                this.currentIndex--;
            }
        },
    },
})
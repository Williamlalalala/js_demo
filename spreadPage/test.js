Vue.component('counter', {
    data: function() {
        return {
            count: 0
        }
    },
    template: '#count-template'
})
new Vue({
    el: '#myapp',
    data: {
        all: 10,
        current: 1
    },
    methods: {
        btClick: function(data) {
            if (data != this.current) {
                this.current = data;
            }
        },
        pageClick: function() {
            console.log(this.current);
        }
    },
    computed: {
        indexar: function() {
            let ar = [];
            let left = 1;
            let right = this.all;
            if (this.all >= 5) {
                if (this.current > 3 && this.current < this.all - 2) {
                    left = this.current - 2;
                    right = this.current + 2;
                } else {
                    if (this.current <= 3) {
                        left = 1;
                        right = 5;
                    } else {
                        right = this.all;
                        left = this.all - 4;
                    }
                }
            }
            while (left < right) {
                ar.push(left);
                left++;
            }
            return ar;
        }
    }

})
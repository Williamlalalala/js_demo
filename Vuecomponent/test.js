Vue.component('counter', {
    data: function() {
        return {
            count: 0
        }
    },
    template: '#count-template'
})
new Vue({
    el: '#myapp'
})
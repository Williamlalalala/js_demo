new Vue({
    el: '#myapp',
    data(){
        return{
            checked1: [],
            stu:[]
        }
    },
    created :{
        ajax:function(method, url, data) {
            let request = new XMLHttpRequest();
            return new Promise(function (resolve, reject) {
                request.onreadystatechange = function () {
                    if (request.readyState === 4) {
                        if (request.status === 200) {
                            resolve(request.responseText);
                        } else {
                            reject(request.status);
                        }
                    }
                };
                request.open(method, url);
                request.send(data);
            });
        }
    },
    methods:{
        sub:function(e){
            log(e)
        },
        click:function(){
            this.test()
        }
    }
})
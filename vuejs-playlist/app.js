new Vue({
    el: '#vue-app',
    data: {
        name: 'Mark',
        job: 'Elvis Impersonator'
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ' ' + this.name; 
        }
    }
})
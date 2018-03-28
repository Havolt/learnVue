new Vue({
    el: '#vue-app',
    data: {
        name: 'Mark',
        job: 'Elvis Impersonator',
        website: 'http://www.example.com',
        websiteTag: '<a href="http://www.example.com"> The Example Website</a>'
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ' ' + this.name; 
        }
    }
})
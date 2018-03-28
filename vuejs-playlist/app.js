/*
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
})*/

new Vue({
    el: '#vue-app2',
    data: {
        age: 27,
        x: 0,
        y: 0
    },
    methods: {
        changeYear: function(num){
            this.age += num
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
})
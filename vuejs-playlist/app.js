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

/*
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
        },
        clicker: function(){
            alert('You clicked me');
        }
    }
})*/

/*
new Vue({
    el: '#vue-app3',
    data: {
        name: '',
        age: ''
    },
    methods: {
        logName: function(){
            console.log('You entered you name');
        },
        logAge: function(){
            console.log('You entered you age');
        }
    }
})*/

/*
new Vue({
    el: '#vue-app4',
    data: {
        age: 20,
        a: 0, 
        b: 0
    },
    methods: {
        //addToA: function(){
            //console.log("c'est A")
            //return this.a + this.age;
        },
        //addToB: function(){
            //console.log("c'est B")
            //return this.b + this.age;
        //}
    },
    computed: {
        addToA: function(){
            console.log("c'est A")
            return this.a + this.age;
        },
        addToB: function(){
            console.log("c'est B")
            return this.b + this.age;
        }
    }
})*/

new Vue({
    el: '#vue-app5',
    data: {
        available: false,
        nearby: false
    },
    methods: {},
    computed: {
        compClasses: function(){
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
})
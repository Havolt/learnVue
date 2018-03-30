//Multiple Vue Instances
/*
let one = new Vue({
    el: '#vue-app-one',
    data:{
        title: 'Vue App One'
    },
    methods: {},
    computed: {
        greet: function(){
            return 'Hello from app one :3';
        }
    }
})
let two = new Vue({
    el: '#vue-app-two',
    data:{
        title: 'Vue App Two'
    },
    methods: {
        changeTitle: function(){
            one.title = 'Title changed';
        }
    },
    computed: {
        greet: function(){
            return 'App two coming live at you through the power ov Vue :£';
        }
    }
})
two.title = 'Changed from outside';
*/

//Components
/*
Vue.component('greeting', {
    template: '<p>Hey there, {{ name }}. <button v-on:click="changeName">Change name</button></p>',
    data: function(){
        return {
            name: 'Waluigi'
        }
    },
    methods: {
        changeName: function(){
            this.name = 'Mario';
        }
    }
})
new Vue({
    el: '#vue-app-one'
});
new Vue({
    el: '#vue-app-two'
});*/

//Refs
new Vue({
    el: '#vue-app-three',
    data: {
        output: 'Eggs'
    },
    methods: {
        readRefs: function() {
            console.log(this.$refs.test.innerText);
            this.output = this.$refs.input.value;
        }
    },
    computed: {
        
    }
})
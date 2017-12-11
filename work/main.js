Vue.component('task', {

    template: '<li><slot></slot></li>',

    data(){
        return {
            message: 'Hello Universe'
        }
    }
});

Vue.component('my-button', {
    template: '<button><slot></slot></button>',

    data(){
        return {
            wordz: 'Wizards and Warriors'
        }
    }
})


new Vue({
    el: '#root'
});
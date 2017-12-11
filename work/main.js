Vue.component('task-list', {
    template: '<div><task v-for="task in tasks" :key="task.id">{{ task.task}}</task></div>',

    data(){
        return{
            tasks: [
                {task: 'Go to the moon', complete: true, id: 1},
                {task: 'Let the dog out', complete: false, id: 2},
                {task: 'Call Irish Water', complete: false, id: 3}
            ]
        }
    }
});

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
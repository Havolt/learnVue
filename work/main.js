Vue.component('modal', {

    template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
            <!-- Any other Bulma elements you want -->

                <div class="box">
                    <slot></slot>
                </div>

            </div>
            <button @click="$emit('close')" class="modal-close is-large" aria-label="close" ></button>
        </div>
    `

});


Vue.component('message', {
    props: ['title', 'body'],

    data(){
        return{
            isVisible: true
        }
    },

    template: `
    
    <article class="message" v-show="isVisible">
        <div class="message-header">
            {{ title }}
            <button @click="isVisible=false" class="close">x</span></button>
        </div>

        <div class="message-body">
            {{ body }}
        </div>
    </article>`

    ,

    methods: {
        
    }
})




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
    el: '#root',

    data: {
        showModal: false
    }
});
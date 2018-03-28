
new Vue({
    el: '#vue-app',
    data: {
        firstName: '',
        lastName: '',
        age: '',
        colPurple: false,
        colRed: false,
        colGreen: false,
        colBlue: false
    },
    methods: {
        changeCol: function(){
            this.colPurple = false;
            this.colRed = false;
            this.colGreen = false;
            this.colBlue = false
        },
        changeCol: function(){
            this.colPurple = false;
            this.colRed = false;
            this.colGreen = false;
            this.colBlue = false;
    }
    },
    computed: {
        colorClass: function(){
            return {
                colorBoxContent : true,
                colorBoxRed: this.colRed,
                colorBoxBlue: this.colBlue,
                colorBoxGreen: this.colGreen,
                colorBoxPurple: this.colPurple
            }
        }
    }
})
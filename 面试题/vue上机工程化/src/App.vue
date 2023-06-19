<template>
<div>
    <h1>{{ count + 1 }}</h1>
    <h1>{{ count + 2 }}</h1>
    <h2>{{ count }}</h2>
    <button @click="plus(1)">+</button>
    <button @click="sub(2)">-</button>
    <button @click="add100">ADD 100</button>
    <div @dblclick="hover" style="width: 100px; height: 100px; background-color: red" id="div"></div>
</div>
</template>
<script>
export default {
    name: 'APP',
    data() {
        return {
            count: 0
        }
    },
    methods: {
        plus(num){
            this.count += num;
            console.log('this is plus func', this.count);
        },
        hover(){
            console.log('hover');
        },
        sub(num){
            this.count -= num;
            console.log('this is sub func', this.count);
        },
        add100(){
            this.count += 100;
            console.log('this is add100 func', this.count);
        }
    },
}
</script>
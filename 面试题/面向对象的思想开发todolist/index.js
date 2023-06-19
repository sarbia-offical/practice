;(function (node) {
    const TodoList = function () {
        this.node = node;
        this.dConfig = {
            "plusBtn": "",
            "inputArea": "",
            "addBtn": "",
            "list": "",
            "itemClass": ""
        }
        this.config = this.getConfig();
        console.log(this.config, this.dConfig);
        for (const key in this.dConfig) {
            if(!this.config.hasOwnProperty(key)){ // 如果在config上找不到相应的属性就报错
                console.log(this.getConfig(key));
            }
        }
    }
    TodoList.prototype = {
        getConfig: function () {
            return JSON.parse(this.node.getAttribute('data-config'));
        },
        errorInfo: function(key){
            return new Error(
                `您没有配置参数${key}\n以下为必填配置`
            )
        }
    }
    new TodoList();
})(document.getElementsByClassName('todo-wrap')[0]);
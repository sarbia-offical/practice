/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2023-06-19 12:12:21
 * @LastEditors: zouwenqin
 * @LastEditTime: 2023-06-19 22:15:21
 */
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
        for (const key in this.dConfig) {
            if(!this.config.hasOwnProperty(key)){ // 如果在config上找不到相应的属性就报错
                console.log(errorInfo(key));
            }
        }
        this.setConfig();
        addEvent(this.plusBtn, 'click', () => {
            this.showInput(this.inputShowTag)
        })
        addEvent(this.addBtn, 'click', () => {
            console.log('this', this);
        })
    }
    TodoList.prototype = {
        inputShowTag: 1,
        getConfig: function () {
            return JSON.parse(this.node.getAttribute('data-config'));
        },
        setConfig: function(){
            const config = this.config, node = this.node;
            this.plusBtn = node.getElementsByClassName(config.plusBtn)[0];
            this.inputArea = node.getElementsByClassName(config.inputArea)[0];
            this.addBtn = this.inputArea.getElementsByClassName(config.addBtn)[0];
        },
        showInput: function(fnIndex){
            let fns = [
                () => {
                    this.inputArea.style.display = 'none';
                    this.inputShowTag += 1;
                }, 
                () => {
                    this.inputArea.style.display = 'block';
                    this.inputShowTag -= 1;
                }
            ]
            fns[fnIndex]();
        }
    }
    const errorInfo = function(key){
        return new blockError(
            `您没有配置参数${key}
            以下为必填配置
            {
                "plusBtn": '',
                "inputArea": '',
                "addBtn": '',
                "list": '',
                "itemClass": ''
            }`
        )
    }
    new TodoList();
})(document.getElementsByClassName('todo-wrap')[0]);
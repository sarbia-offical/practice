/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2022-01-24 16:59:58
 * @LastEditors: zouwenqin
 * @LastEditTime: 2022-01-24 17:27:12
 */
self.addEventListener('message', (e) => {
    const { data } = e;
    switch (data.type) {
        case 1:
            sendRequest().then(res => {
                console.log(document);
                setTimeout(() => {
                    self.postMessage(res);
                }, 1000)
            })
            break;
    
        default:
            break;
    }
})

async function sendRequest(){
    return '1'
}
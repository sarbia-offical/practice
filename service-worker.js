/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2021-08-11 11:11:28
 * @LastEditors: zouwenqin
 * @LastEditTime: 2021-08-11 11:52:38
 */
self.addEventListener('install', event => {
    console.log('installing');
    console.log(event.waitUntil(caches.open('sw-test-v1')));
})

self.addEventListener('activate', event => {
    console.log('actived');
    console.log(caches.open('sw-test-v1'));
})

self.addEventListener('fetch', event => {
    console.log(event);
})
const regExpForTemplate = /\<template\>(.+?)\<\/template\>/; //匹配template标签中间的内容
const regExpForScript = /\<script\>(.+?)\<\/script\>/; //匹配script标签中间的内容
module.exports = (input) => {
  input = input.replace(/[\r\n]/g, ""); //去除文件中的换行
  const templateStr = input.match(regExpForTemplate)[1]; //正则匹配template标签的内容
  const scriptStr = input.match(regExpForScript)[1]; //正则匹配script标签的内容
  const finalScript = scriptStr.replace(
    /({)/,
    "$1 template:" + "`" + templateStr + "`,"
  ); // 进行字符替换
  return finalScript;
};

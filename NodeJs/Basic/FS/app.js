/*
 * @Author: your name
 * @Date: 2021-04-18 18:19:13
 * @LastEditTime: 2021-04-18 18:53:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /The-self-cultivation-of-a-programmer-NodeJs/NodeJs/Basic/FS/app.js
 */


/*
fs.stat             检测是文件或是目录
fs.mkdir            创建目录
fs.writeFile        创建写入文件
fs.appendFile       追加文件
fs.readFile         读取文件
fs.readdir          读取目录
fs.rename           重命名目录或文件,移动文件
fs.rmdir            删除目录
fs.unlink           删除文件
*/

let fs = require('fs');

// 判断 directory 是文件或目录;
fs.stat('./directory', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('是文件' + data.isFile());
    console.log('是目录' + data.isDirectory());
});

// 创建mkdir目录;
fs.mkdir('./mkdir', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('创建成功');
})

// 创建写入文件 (写入文件如果已有这个index文件,这会覆盖掉);
fs.writeFile('./directory/index.txt', 'Hello World', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('创建写入成功');
})

// 追加文件 (追加文件和写入区别在于 会在原有的文件内容之后追加,而不是覆盖)
fs.appendFile('./directory/index.txt', '\nLeechenze', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('追加写入成功');
})

// 读取目录(结果为一个数组, 其中没有后缀的为目录, 有后缀为文件);
fs.readdir('./readdir', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
})

// 重命名文件
fs.rename('./rename', 'rename1', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('重命名成功');
})

// 移动文件
fs.rename('./rename/moveA.txt', './rename1/moveB.txt', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('移动文件成功');
})

// 删除文件
fs.unlink('./deletedir/deletedir.txt', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('删除文件成功');
})

// 删除目录(如果目录下有文件存在,则不会被删除);
fs.rmdir('./deletedir', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('删除,目录成功');
})





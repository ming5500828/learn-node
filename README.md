# Learn Node.js
## 一、创建包
###（一）包的规范
1. package.json 必须在包的顶层目录下;<br/>
2. 二进制文件应该在bin目录下;<br/>
3. JavaScript代码应该在lib目录下;<br/>
4. 文档应该在doc目录下;<br/>
5. 单元测试应该在test目录下。

###（二）生成package.json
 进入包的目录，输入node init,自动生成json文件，其中main是说明JavaScript代码放在哪里。

 Node.js 在调用某个包时,会首先检查包中package.json文件的 main 字段,将其作为包的接口模块,如果package.json或main 字段不存在,会尝试寻找 index.js或index.node作为包的接口。

 ###（三）本地模式和全局模式
 #### 1.本地模式
 在使用 npm 安装包的时候,有两种模式:本地模式和全局模式。<br/><br/>
 默认情况下我们使用 npm [install/i] [package_name]命令就是采用本地模式,即把包安装到当前目录的 node_modules 子目录下。<br/><br/>
 Node.js 的require在加载模块时会尝试搜寻 node_modules子目录,因此使用npm本地模式安装的包可以直接被引用。
#### 2.全局模式
npm还有另一种不同的安装模式被成为全局模式,使用方法为:npm [install/i] -g [package_name]
#### 3.两种模式的区别
为什么要使用全局模式呢?多数时候并不是因为许多程序都有可能用到它,为了减少多 重副本而使用全局模式,而是因为本地模式不会注册 PATH 环境变量。<br/><br/>
使用全局模式安装的包并不能直接在 JavaScript 文件中用 require 获 得,因为 require 不会搜索 /usr/local/lib/node_modules/。
#### 4.两种模式如何建立链接
npm 提供了命令 npm link,它的功能是在本地包和全局包之间创建符号链接。使用全局模式安装的包不能直接通过 require 使用,但通过 npm link命令可以打破这一限制。<br/><br/>
npm link不支持Windows<br/><br/>
除了将全局的包链接到本地以外,使用 npm link命令还可以将本地的包链接到全局。 使用方法是在包目录( package.json 所在目录)中运行 npm link 命令。
#### 5.包的发布

## 二、全局变量和全局对象

## 三、常用工具util
###（一）util的继承inherit
util.inherits(constructor,superConstructor)，子类只继承父类原型中的东西，父类构造函数内部创造的属性和函数都没有被子类继承。
###（二）util.inspect
util.inspect(object,[showHidden],[depth],[colors])，是一个将任意对象转换 为字符串的方法,通常用于调试和错误输出。它至少接受一个参数 object,即要转换的对象。
## 四、事件驱动
###（一）事件发射器events.EventEmitter
## 五、文件系统fs
#### 与其它模块不同，fs所有操作都提供了同步和异步两个版本。例如读取文件，异步readFile(),同步readFileSync().
###（一）
## 六、http
###（一）http.Server服务器
#### 1.res和req分别是http.ServerRequest和Server.Response的实例，res.writeHead响应头，res.write响应内容，res.end结束响应，listen监听端口
```
var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Node.js</h1>');
    res.end('<p>Hello World</p>');
}).listen(3000);
console.log("HTTP server is listening at port 3000.");

```
#### 2. http.ServerRequest是 HTTP 请求的信息,是后端开发者最关注的内容。一般可以分为两部分:请求头(Request Header)和请求体(Requset Body)。

//����ģ��
var http=require('http');
var urls=require('url');
var util=require('util');
//��������
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	//����������ַ�����ʽ���ظ��ͻ���
	res.end(util.inspect(urls.parse(req.url,true)));
}).listen(3000);
var http=require('http');
var querystring=require('querystring');
var util=require('util');
http.createServer(function(req,res){
	var post='';
	//ע��data�¼�����������ÿ�����������������
	req.on('data',function(chunk){
		post+=chunk;
	});
	req.on('end',function(){
		//������������postΪ������post�����ʽ
		//�൱��Ext.decode()
		post=querystring.parse(post);
		//��ǰ�˷���
		res.end(util.inspect(post));
	});
}).listen(3000);
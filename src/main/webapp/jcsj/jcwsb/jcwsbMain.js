function fill_zzh(){
document.getElementById("myframe").src='zzh/zzhMain.jsp';
}
function fill_xianlu(){
document.getElementById("myframe").src='xianlu/xianluMain.jsp';
}
function fill_glkg(){
document.getElementById("myframe").src='glkg/jcwglkgMain.jsp';
}
function fill_jyq(){
document.getElementById("myframe").src='jyq/jyqMain.jsp';
}
function fill_xc(){
document.getElementById("myframe").src='xc/xcMain.jsp';
}

Ext.onReady(function(){

    Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var bd = Ext.getBody();
       
	new Ext.Viewport({
	enableTabScroll:true,
	layout:"fit",
	items:[{
	html:"<iframe id='myframe' src='zzh/zzhMain.jsp' width='100%' height='100%'></iframe>",
	tbar:[
	//new Ext.Toolbar.TextItem('请选择运行环境:'),	
	{pressed:true,text:'接触网支柱',id:'zzh'},
	{xtype:"tbseparator"},
	{pressed:true,text:'接触网线路',id:'xianlu'},
	{xtype:"tbseparator"},
	{pressed:true,text:'接触网隔离开关',id:'glkg'},
	{xtype:"tbseparator"},
	{pressed:true,text:'绝缘器',id:'jyq'},
	{xtype:"tbseparator"},
	{pressed:true,text:'线岔',id:'xc'},
	{xtype:"tbseparator"}
	]
	}]
	});
	Ext.ComponentMgr.get("zzh").addListener("click",fill_zzh);
	Ext.ComponentMgr.get("xianlu").addListener("click",fill_xianlu);
	Ext.ComponentMgr.get("glkg").addListener("click",fill_glkg);
	Ext.ComponentMgr.get("jyq").addListener("click",fill_jyq);
	Ext.ComponentMgr.get("xc").addListener("click",fill_xc);
 });
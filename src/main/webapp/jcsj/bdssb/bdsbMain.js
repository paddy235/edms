function fill_byq(){
document.getElementById("myframe").src='byq/RyMain.jsp';
}
function fill_dlq(){
document.getElementById("myframe").src='dlq/RyMain.jsp';
}
function fill_glkg(){
document.getElementById("myframe").src='glkg/RyMain.jsp';
}
function fill_fhkg(){
document.getElementById("myframe").src='fhkg/RyMain.jsp';
}
function fill_gpzz(){
document.getElementById("myframe").src='gpzz/RyMain.jsp';
}
Ext.onReady(function(){

    Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var bd = Ext.getBody();
       
	new Ext.Viewport({
	enableTabScroll:true,
	layout:"fit",
	items:[{
	html:"<iframe id='myframe' src='byq/RyMain.jsp' width='100%' height='100%'></iframe>",
	tbar:[
	//new Ext.Toolbar.TextItem('��ѡ�����л���:'),	
	{pressed:true,text:'��ѹ��',id:'byq'},
	{xtype:"tbseparator"},
	{pressed:true,text:'��·��',id:'dlq'},
	{xtype:"tbseparator"},
	{pressed:true,text:'�����뿪��',id:'glkg'},
	{xtype:"tbseparator"},
	{pressed:true,text:'���ɿ���',id:'fhkg'},
	{xtype:"tbseparator"},
	{pressed:true,text:'�����ж�װ��',id:'gpzz'},
	{xtype:"tbseparator"}	
	]
	}]
	});
	Ext.ComponentMgr.get("byq").addListener("click",fill_byq);
	Ext.ComponentMgr.get("dlq").addListener("click",fill_dlq);
	Ext.ComponentMgr.get("glkg").addListener("click",fill_glkg);
	Ext.ComponentMgr.get("fhkg").addListener("click",fill_fhkg);
	Ext.ComponentMgr.get("gpzz").addListener("click",fill_gpzz);
 });
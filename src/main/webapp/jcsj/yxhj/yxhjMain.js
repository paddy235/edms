function fill_jcwws(){
document.getElementById("myframe").src='wsh/wshMain.jsp';
}
function fill_kyjcwql(){
document.getElementById("myframe").src='skq/skqMain.jsp';
}
function fill_kyjcwdlx(){
document.getElementById("myframe").src='skx/skxMain.jsp';
}
function fill_sdxj(){
document.getElementById("myframe").src='sdxj/sdxjMain.jsp';
}

Ext.onReady(function(){

    Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var bd = Ext.getBody();
       
	new Ext.Viewport({
	enableTabScroll:true,
	layout:"fit",
	items:[{
	html:"<iframe id='myframe' src='wsh/wshMain.jsp' width='100%' height='100%'></iframe>",
	tbar:[
	//new Ext.Toolbar.TextItem('��ѡ�����л���:'),	
	{pressed:true,text:'�Ӵ���Σ��',id:'jcwws'},
	{xtype:"tbseparator"},
	{pressed:true,text:'��Խ�Ӵ�������',id:'kyjcwql'},
	{xtype:"tbseparator"},
	{pressed:true,text:'��Խ�Ӵ���������',id:'kyjcwdlx'},
	{xtype:"tbseparator"},
	{pressed:true,text:'����޽�',id:'sdxj'}	
	]
	}]
	});
	Ext.ComponentMgr.get("jcwws").addListener("click",fill_jcwws);
	Ext.ComponentMgr.get("kyjcwql").addListener("click",fill_kyjcwql);
	Ext.ComponentMgr.get("kyjcwdlx").addListener("click",fill_kyjcwdlx);
	Ext.ComponentMgr.get("sdxj").addListener("click",fill_sdxj);
 });
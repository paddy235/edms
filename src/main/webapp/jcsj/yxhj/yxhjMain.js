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
	//new Ext.Toolbar.TextItem('请选择运行环境:'),	
	{pressed:true,text:'接触网危树',id:'jcwws'},
	{xtype:"tbseparator"},
	{pressed:true,text:'跨越接触网桥梁',id:'kyjcwql'},
	{xtype:"tbseparator"},
	{pressed:true,text:'跨越接触网电力线',id:'kyjcwdlx'},
	{xtype:"tbseparator"},
	{pressed:true,text:'隧道限界',id:'sdxj'}	
	]
	}]
	});
	Ext.ComponentMgr.get("jcwws").addListener("click",fill_jcwws);
	Ext.ComponentMgr.get("kyjcwql").addListener("click",fill_kyjcwql);
	Ext.ComponentMgr.get("kyjcwdlx").addListener("click",fill_kyjcwdlx);
	Ext.ComponentMgr.get("sdxj").addListener("click",fill_sdxj);
 });
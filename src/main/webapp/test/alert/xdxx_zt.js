Ext.onReady(function() {

	Ext.QuickTips.init();
	 Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
	// alert("aaa");
Ext.MessageBox.show({ title:"标题", msg:"内容的消息", buttons:{"ok":"我不再显示OK了"}, fn:function(e){alert(e);}, animEl:"test1", width:500, icon:Ext.MessageBox.INFO, closable:false, progress:true, wait:true,
progressText:"进度条" 
// prompt:true // multiline:true 
});


});
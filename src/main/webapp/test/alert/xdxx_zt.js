Ext.onReady(function() {

	Ext.QuickTips.init();
	 Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
	// alert("aaa");
Ext.MessageBox.show({ title:"����", msg:"���ݵ���Ϣ", buttons:{"ok":"�Ҳ�����ʾOK��"}, fn:function(e){alert(e);}, animEl:"test1", width:500, icon:Ext.MessageBox.INFO, closable:false, progress:true, wait:true,
progressText:"������" 
// prompt:true // multiline:true 
});


});
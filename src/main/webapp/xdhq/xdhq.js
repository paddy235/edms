Ext.onReady(function(){

    Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../extjs-3.0/resources/images/default/s.gif';
    var bd = Ext.getBody();
    var DWDM=document.getElementById ("DWDM").value;
    
  	var HqJkTabs = new Ext.TabPanel({
  		renderTo: 'HqJkTabs',//document.body,
  		//title: '��·������ȹ���ָ��ϵͳ---->�е���ǩ���豸���',
        activeTab: 0,
        //width:600,
        height:1000,
        //plain:true,autoHeight: true,
        frame:true,
        defaults:{autoWidth:true,autoScroll: true},
        items:[
        	{
                title: '�е���ǩ',
                html:'<iframe style="width:100%;height:100%" src="xdhq2.jsp"></iframe>'
            },
            {
                title: '�豸���',
                //html:'<iframe style="width:100%;height:100%" src="http://127.0.0.1/aa/Default.aspx?DWDM="'+DWDM+'"></iframe>'
                html:'<iframe style="width:100%;height:100%" src="http://10.102.2.230:8089/Default.aspx?DWDM="'+DWDM+'"></iframe>'
            }
        ]
    });
    var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [HqJkTabs]
	});
});


Ext.onReady(function() {
   //var i = parseInt(tab);
    
	var tabs = new Ext.TabPanel({
        renderTo: document.body,
         activeTab: 0,
        enableTabScroll:true,
        items:[{
                title:'�������բ��������---��ѯ',
                listeners: {activate: handleActivate}
                 },{
                title:'���뿪�ص�բ����---��ѯ',
                listeners: {activate: handleActivate}
                 },{
                title:'�Ӵ�����ҵ����---��ѯ',
                listeners: {activate: handleActivate}
                 }
               ]
                                }); 
        tabs.collapse(true);
    function handleActivate(tab){
    
    	var bdsdz = "command_unit.jsp";
    	var glkgdz = "command_swit.jsp";
    	var jcwzy = "command_web.jsp";
        if(tab.title=="�������բ��������---��ѯ"){
        window.parent.buttom.location.href=bdsdz;
        }else if(tab.title=="���뿪�ص�բ����---��ѯ"){
        window.parent.buttom.location.href=glkgdz;
        }else if(tab.title=="�Ӵ�����ҵ����---��ѯ"){
        window.parent.buttom.location.href=jcwzy;
        }
    }
   var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [tabs]
	});
}
)
Ext.onReady(function() {
   //var i = parseInt(tab);
    
	var tabs = new Ext.TabPanel({
        renderTo: document.body,
         activeTab: 0,
        enableTabScroll:true,
        items:[{
                title:'变电所倒闸操作命令---查询',
                listeners: {activate: handleActivate}
                 },{
                title:'隔离开关倒闸命令---查询',
                listeners: {activate: handleActivate}
                 },{
                title:'接触网作业命令---查询',
                listeners: {activate: handleActivate}
                 }
               ]
                                }); 
        tabs.collapse(true);
    function handleActivate(tab){
    
    	var bdsdz = "command_unit.jsp";
    	var glkgdz = "command_swit.jsp";
    	var jcwzy = "command_web.jsp";
        if(tab.title=="变电所倒闸操作命令---查询"){
        window.parent.buttom.location.href=bdsdz;
        }else if(tab.title=="隔离开关倒闸命令---查询"){
        window.parent.buttom.location.href=glkgdz;
        }else if(tab.title=="接触网作业命令---查询"){
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
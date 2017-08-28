
var custom,customEl;
var ResizableExample = {
    init : function(){
        custom = new Ext.Resizable('custom', {
            wrap:true,
            pinned:true,
            minWidth:50,
            minHeight: 50,
            preserveRatio: true,
            handles: 'all',
            draggable:true,           
            dynamic:true
        });
        customEl = custom.getEl();
        document.body.insertBefore(customEl.dom, document.body.firstChild);
        customEl.on('dblclick', function(){
            customEl.hide(true);
        });
        customEl.hide();
    }
};

Ext.EventManager.onDocumentReady(ResizableExample.init, ResizableExample, true);

 
 
 
var win1;
function MPG(path) {
	//alert(path);
	player.innerHTML='<EMBED src="../vedio/'+path+'" width=664 height=424 ShowStatusBar=1></EMBED>';
}
Ext.onReady(function(){
     Ext.QuickTips.init();    
     Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif'; 
  	//渲染返回html代码 renderTo 故障分类 
this.yyshow=function(path){
       MPG(path);
       if(!win1){
            win1 = new Ext.Window({
                applyTo:'hello-win',
                layout:'fit',
                width:680,
                height:460,
                closeAction:'hide',
                plain: true, 
                items: new Ext.TabPanel({
                    applyTo: 'hello-tabs',
                    autoTabs:true,
                    activeTab:0,
                    deferredRender:false,
                    border:false
                })
            });
        }
        win1.show(this);
}; 

	var simpleForm_Save = new Ext.FormPanel({
        renderTo : document.body,
        title: '视频',
        buttonAlign : 'left',
        //bodyStyle : 'padding:5px',             
        collapsible:true,
        titleCollapse:true,
        method:'POST',
        autoWidth:true,
        fileUpload: true,        
        frame : true,  
  		buttons: [{
             text : '视频1',
             handler : function() {
                    yyshow("3.wmv");
             }
        },{
             text : '视频2',
             handler : function() {
                    yyshow("3.wmv");
             }
        },{
             text : '视频3',
             handler : function() {
                    yyshow("3.wmv");
             }
        },{
             text : '视频4',
             handler : function() {
                    yyshow("3.wmv");
             }
        },{
             text : '视频5',
             handler : function() {
                    yyshow("3.wmv");
             }
        },{
             text : '视频6',
             handler : function() {
                    yyshow("3.wmv");
             }
        },{
             text : '视频7',
             handler : function() {
                    yyshow("3.wmv");
             }
        },{
             text : '视频8',
             handler : function() {
                    yyshow("3.wmv");
             }
        },{
             text : '视频9',
             handler : function() {
                    yyshow("3.wmv");
             }
        },{
             text : '视频10',
             handler : function() {
                    yyshow("3.wmv");
             }
        },{
             text : '视频11',
             handler : function() {
                    yyshow("3.wmv");
             }
        },{
             text : '视频12',
             handler : function() {
                    yyshow("3.wmv");
             }
        },{
             text : '视频13',
             handler : function() {
                    yyshow("3.wmv");
             }
        },{
             text : '视频14',
             handler : function() {
                    yyshow("3.wmv");
             }
        },{
             text : '视频15',
             handler : function() {
                    yyshow("3.wmv");
             }
        }]
       });  
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items:[simpleForm_Save]		
	});
	
  })
  
  

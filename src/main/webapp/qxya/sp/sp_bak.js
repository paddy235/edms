
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
  	//��Ⱦ����html���� renderTo ���Ϸ��� 
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
        title: '��Ƶ',
        buttonAlign : 'left',
        //bodyStyle : 'padding:5px',             
        collapsible:true,
        titleCollapse:true,
        method:'POST',
        autoWidth:true,
        fileUpload: true,        
        frame : true,  
  		buttons: [{
             text : '��Ƶ1',
             handler : function() {
                    yyshow("3.wmv");
             }
        },{
             text : '��Ƶ2',
             handler : function() {
                    yyshow("3.wmv");
             }
        },{
             text : '��Ƶ3',
             handler : function() {
                    yyshow("3.wmv");
             }
        },{
             text : '��Ƶ4',
             handler : function() {
                    yyshow("3.wmv");
             }
        },{
             text : '��Ƶ5',
             handler : function() {
                    yyshow("3.wmv");
             }
        },{
             text : '��Ƶ6',
             handler : function() {
                    yyshow("3.wmv");
             }
        },{
             text : '��Ƶ7',
             handler : function() {
                    yyshow("3.wmv");
             }
        },{
             text : '��Ƶ8',
             handler : function() {
                    yyshow("3.wmv");
             }
        },{
             text : '��Ƶ9',
             handler : function() {
                    yyshow("3.wmv");
             }
        },{
             text : '��Ƶ10',
             handler : function() {
                    yyshow("3.wmv");
             }
        },{
             text : '��Ƶ11',
             handler : function() {
                    yyshow("3.wmv");
             }
        },{
             text : '��Ƶ12',
             handler : function() {
                    yyshow("3.wmv");
             }
        },{
             text : '��Ƶ13',
             handler : function() {
                    yyshow("3.wmv");
             }
        },{
             text : '��Ƶ14',
             handler : function() {
                    yyshow("3.wmv");
             }
        },{
             text : '��Ƶ15',
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
  
  

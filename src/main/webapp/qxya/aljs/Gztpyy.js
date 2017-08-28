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

function tpshow(path)
{
	//alert("3"+path);
	document.getElementById ("custom").src="../Images/"+path;
	customEl.center();
	customEl.show(true);
};
function tphide()
{
	customEl.hide(true);
};

var win;
function MPG(path) {
	//alert(path);
	player.innerHTML='<EMBED src="../vedio/'+path+'" width=664 height=424 ShowStatusBar=1></EMBED>';
}

Ext.onReady(function(){

    Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var bd = Ext.getBody();
    var albm=document.getElementById ("tpyyalbm").value;
    
    this.yyshow=function(path){
       MPG(path);
       if(!win){
            win = new Ext.Window({
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
        win.show(this);
    };

    //��Ⱦ����html����   onMouseOver="tpshow();" onMouseOut="tphide();"
    var renderTpXs =function(value)
 	 {
 	 	 return '<a href=javascript:tpshow("'+value+'");>��ʾ</a>';  
 	     //return '<a href="#" mce_href="#" onclick="return tpshow('+value+');">��ʾ</a>';   
 	 };
 	 
 	 var renderYyXs =function(value)
 	 {
 	 	 return '<a href=javascript:yyshow("'+value+'");>��ʾ</a>';  
 	     //return '<a href="#" mce_href="#" onclick="return yyshow('+value+');">��ʾ</a>';   
 	 };

    Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]      
     
     /*
     * ================  ����ǰ��λ�ã���������---->������ϸ =======================
	*/
	
  	var AljsTabs = new Ext.TabPanel({
       	renderTo: 'AljsTabs',
        title: '��������---->������ϸ',
        labelAlign : 'left',
        //labelWidth: 75, 
        //collapsible:true,
        //titleCollapse:true,
        method:'POST',
        //width: 1000,
        activeTab: 0,
        frame:true,
        defaults:{autoHeight: true,autoWidth:true},
        items:[
            {contentEl:'Gztp', title: '�¹�ͼƬ'},
            {contentEl:'Gzyy', title: '�¹�Ӱ��',listeners: {activate: handleActivate}}
        ],
        buttons: [{
            	text: '����',
           		handler : function() {
           		    window.location.href='AlSrc.jsp';
             }
        }]
    });
    function handleActivate(tab){
        //alert(tab.title + ' was activated.');
        yysimple_Grid.render('Gzyy');
    }
    
    /*================  ����ǰ��λ�ã���������---->�¹�ͼƬ =======================*/ 
 	 //����Grid��ͷ
   	 var tpcolumns = new Ext.grid.ColumnModel([
         new Ext.grid.RowNumberer(),
        {header:'ͼƬ����',dataIndex:'tpmc',width: 100,sortable:true},
        {header:'ͼƬ����',dataIndex:'sxmc',width: 100,sortable:true},
        {header:'ͼƬ����',dataIndex:'tpms',width: 600,sortable:true},
        {header:'�ϴ�ʱ��',dataIndex:'scsj',width: 130,sortable:true},
        {header:'ͼƬ��ʾ',dataIndex:'tplj',width: 100,renderer:renderTpXs,fixed:true}
     ]);
     
     var tpplanRecord = Ext.data.Record.create([
    	{name:'id',type:'int'},
    	{name:'tpmc',type:'string'},
    	{name:'tplx',type:'string'},
    	{name:'tpms',type:'string'},
    	{name:'tplj',type:'string'},
    	{name:'scsj',type:'string'},
    	{name:'albm',type:'string'},
    	
    	{name:'sxmc',type:'string'},
    	{name:'sjc',type:'string'}
     ]);
    
	 var tpstore = new Ext.data.Store({
     	proxy: new Ext.data.HttpProxy({url:'../algd/GztpLssj.jsp?albm='+albm}),   
     	reader: new Ext.data.JsonReader({
     		totalProperty: 'totalCount',
     		root: 'root',
     		successProperty :'success'
        },tpplanRecord)
    });
	tpstore.load({params:{start:0, limit:10}});
	

    var tpsimple_Grid = new Ext.grid.GridPanel({
        renderTo : 'Gztp',
        //el: 'grid3', 
        //title: '��ʷ�¹�ͼƬ',
        store:tpstore,
    	cm: tpcolumns,
        viewConfig:{
        	forceFit:true,
         	columnsText:"��ʾ����",
         	sortAscText:"����",
         	sortDescText:"����"
        },
        loadMask:{msg:"���ݼ�����...."},        
        collapsible: true,
        titleCollapse:true,
        animCollapse: false,
        columnLines: true,
        //width: 100,
        autoWidth: true,
        autoHeight: true,
        bbar: new Ext.PagingToolbar({
            pageSize: 10,
            store: tpstore,
            displayInfo: true,
            displayMsg: '�� {0} ���� {1} ��,�� {2} ��',
            emptyMsg: "�޼�¼"
        })
    });
    /*================  ����ǰ��λ�ã���������---->�¹�Ӱ�� =======================*/ 
 	 //����Grid��ͷ
   	  var yycolumns = new Ext.grid.ColumnModel([
         new Ext.grid.RowNumberer(),
        {header:'Ӱ������',dataIndex:'yymc',width: 100,sortable:true},
        {header:'Ӱ������',dataIndex:'sxmc',width: 100,sortable:true},
        {header:'Ӱ������',dataIndex:'yyms',width: 600,sortable:true},
        {header:'�ϴ�ʱ��',dataIndex:'scsj',width: 130,sortable:true},
        {header:'Ӱ����ʾ',dataIndex:'yylj',width: 100,renderer:renderYyXs,fixed:true}
     ]);
     
     var yyplanRecord = Ext.data.Record.create([
    	{name:'id',type:'int'},
    	{name:'yymc',type:'string'},
    	{name:'yylx',type:'string'},
    	{name:'yyms',type:'string'},
    	{name:'yylj',type:'string'},
    	{name:'scsj',type:'string'},
    	{name:'albm',type:'string'},
    	
    	{name:'sxmc',type:'string'},
    	{name:'sjc',type:'string'}
     ]);
     
  	 var yystore = new Ext.data.Store({
     	proxy: new Ext.data.HttpProxy({url:'../algd/GzyyLssj.jsp?albm='+albm}),        
     	reader: new Ext.data.JsonReader({
     		totalProperty: 'totalCount',
     		root: 'root',
     		successProperty :'success'
        },yyplanRecord)
    });
	yystore.load({params:{start:0, limit:10}});
	
    var yysimple_Grid = new Ext.grid.GridPanel({
		//renderTo : 'Gzyy',
        //title: '��ʷ�¹�Ӱ��',
        store:yystore,
    	cm: yycolumns,
    	sm: new Ext.grid.RowSelectionModel({singleSelcet:true}),
        viewConfig:{
        	forceFit:true,
         	columnsText:"��ʾ����",
         	sortAscText:"����",
         	sortDescText:"����"
        },
        loadMask:{msg:"���ݼ�����...."},        
        collapsible: true,
        titleCollapse:true,
        animCollapse: false,
        columnLines: true,
        //width: 100,
        autoWidth: true,
        autoHeight: true,
        bbar: new Ext.PagingToolbar({
            pageSize: 10,
            store: yystore,
            displayInfo: true,
            displayMsg: '�� {0} ���� {1} ��,�� {2} ��',
            emptyMsg: "�޼�¼"
        })
    });
    
    
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [AljsTabs]
	});
    
    //����ҳ��
    function open_window(url,thisWidth,thisHeight)
	{
    	var left =-10;
    	var top = -10;
    	window.open(url,"","left="+left+",top="+top+",height="+thisHeight+",width="+thisWidth+",toolbar=no,location=no,directories=no,menubar=no,scrollbars=no,resizable=no");
	}

    //simpleForm_Save.render(document.body);
});

    
    var TpyyGridCxBtn = new Ext.Button({ 
        renderTo:Ext.getBody(),
        hidden: true,
        text:"ȷ ��"    
    });
     TpyyGridCxBtn.on("click",
    		function(){
             Ext.Msg.alert("��ʾ","��ӭѧϰExtJS��");    
     		}
       ); 


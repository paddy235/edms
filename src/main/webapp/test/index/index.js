 /*!
 * Ext JS Library 3.3.1
 * Copyright(c) 2006-2010 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.onReady(function(){

    Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL='s.gif'; 
    Ext.form.Field.prototype.msgTarget = 'side';

    var mainTaps = new Ext.TabPanel({
    	plugins: new Ext.ux.TabCloseMenu(),
    	id:'main-tabs',
        activeTab:0,
        region:'center',
        resizeTabs:true,
        tabWidth:150,
        items: {
        	id:'main-view',
            layout:'border',
            title:'��ҳ',
            items:[
            	new Ext.Panel({
            		region: 'center'
            	})
         ]}
    });
    
    var basicRoot = new Ext.tree.AsyncTreeNode({id: '0',text:'�豸��ʩ����'});
    var mainTree = new Ext.tree.TreePanel({
    	id:'main-tree',
        region:'west',
        title:'ϵͳ�˵�����',
        split:true,
        width: 225,
        minSize: 175,
        maxSize: 400,
        collapsible: true,
        loader: new Ext.tree.TreeLoader({dataUrl: 'defy.jsp'}),
        lines:false,
        autoScroll:true,
        root: basicRoot    
    });
    
	var topPanel = new Ext.Panel({
		region:'north',
		html: "<img width=\""+document.body.offsetWidth+"\" height=\"50\" src=\"../../../images/frm_images/top1280.jpg\">",
		bbar:[{
			xtype : "tbfill"
		},{
           	text:'�޸�����',
            iconCls: 'new-topic',
            handler:function(){alert('�޸�����');}
        },
        '-',
        {
           	text:'�л��û�',
            iconCls: 'new-topic'
			handler:function(){alert('�л��û�');}
        },
        '-',
        {
           	text:'����',
            iconCls: 'new-topic',
             handler:function(){
             	var chm=new ActiveXObject("wscript.shell"); 
             	//chm.run("D:\\help.chm");
             	//alert(sbglbasePath + "resources/help/help.chm");
				//window.showHelp(sbglbasePath + "resources/help/help.chm");
				handler:function(){alert('����');}

			}
        }
        ]
	});
    
    var viewport = new Ext.Viewport({
        layout:'border',
        items:[topPanel,mainTree,mainTaps,{region: 'south',
        html: '<div align=\"center\" style="color:black;font-size:12px;font-weight:normal" class="x-panel-header">���Ƶ�λ:�й���·�ܹ�˾����� ��Ϣ�������� �ɶ��˴﹫˾ ����������.��������Ȩ��.</div>',
        autoHeight: true,
        border: false}]
    });

    var tree = Ext.getCmp('main-tree');
    tree.on('click', function(node,event){
	   	if(node.isLeaf()==false)
	    	node.toggle();
	    else{	
	    	var currentTab = Ext.getCmp(node.id);
	    	var height = parseInt(document.body.offsetHeight,10)-133;
	    	if(currentTab!=undefined){
	    		window.frames["iframe"+node.id].location.reload();    //����˵�����¼�,����ˢ��ҳ�� 
				currentTab.show();
	    	}else
			   	mainTaps.add({
			   	    id : node.id,
			    	title: node.text,
			        iconCls: 'tabs',
			        html:'<div><iframe  id="iframe'+node.id+'" src ="'+node.attributes.href+'" height="'+height+'" width="100%"></iframe></div>',
			        closable:true,
			        listeners:{   									//Tabpanel�ϵ����ǩ����ˢ��ҳ�� 
					    activate:function(tab){   
					        window.frames["iframe"+tab.id].location.reload();    
					    }   
					}   

			    }).show();

	    }
	    event.stopEvent();
    });
	basicRoot.expand();

});


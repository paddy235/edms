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
            title:'首页',
            items:[
            	new Ext.Panel({
            		region: 'center'
            	})
         ]}
    });
    
    var basicRoot = new Ext.tree.AsyncTreeNode({id: '0',text:'设备设施管理'});
    var mainTree = new Ext.tree.TreePanel({
    	id:'main-tree',
        region:'west',
        title:'系统菜单导航',
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
           	text:'修改密码',
            iconCls: 'new-topic',
            handler:function(){alert('修改密码');}
        },
        '-',
        {
           	text:'切换用户',
            iconCls: 'new-topic'
			handler:function(){alert('切换用户');}
        },
        '-',
        {
           	text:'帮助',
            iconCls: 'new-topic',
             handler:function(){
             	var chm=new ActiveXObject("wscript.shell"); 
             	//chm.run("D:\\help.chm");
             	//alert(sbglbasePath + "resources/help/help.chm");
				//window.showHelp(sbglbasePath + "resources/help/help.chm");
				handler:function(){alert('帮助');}

			}
        }
        ]
	});
    
    var viewport = new Ext.Viewport({
        layout:'border',
        items:[topPanel,mainTree,mainTaps,{region: 'south',
        html: '<div align=\"center\" style="color:black;font-size:12px;font-weight:normal" class="x-panel-header">研制单位:中国铁路总公司运输局 信息技术中心 成都运达公司 沈阳科研所.保留所有权利.</div>',
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
	    		window.frames["iframe"+node.id].location.reload();    //左则菜单点击事件,重新刷新页面 
				currentTab.show();
	    	}else
			   	mainTaps.add({
			   	    id : node.id,
			    	title: node.text,
			        iconCls: 'tabs',
			        html:'<div><iframe  id="iframe'+node.id+'" src ="'+node.attributes.href+'" height="'+height+'" width="100%"></iframe></div>',
			        closable:true,
			        listeners:{   									//Tabpanel上点击标签重新刷新页面 
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


var win;
function MPG(path) {
	//alert(path);
	player.innerHTML='<EMBED src="../vedio/'+path+'" width=664 height=424 ShowStatusBar=1></EMBED>';
}
Ext.onReady(function(){
	 
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var bd = Ext.getBody();
    var albm=document.getElementById ("yyalbm").value;

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
   

   	
    //渲染返回html代码
 	 var renderYyXs =function(value)
 	 {
 	     return '<a href=javascript:yyshow("'+value+'");>显示</a>';   
 	 };
 	 var renderDel =function(value)
 	 {
 	     return '<a  href="GzyyDel.jsp?id='+value+'&albm='+albm+'">删除</a>';
 	 };
 	 
 	 //定义Grid表头
   	 var columns = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
         new Ext.grid.RowNumberer(),
        //{header:'序号',dataIndex:'id',width:40,sortable:true,fixed:true},
        {header:'影音名称',dataIndex:'yymc',width: 100,sortable:true},
        {header:'影音类型',dataIndex:'sxmc',width: 100,sortable:true},
        {header:'影音描述',dataIndex:'yyms',width: 600,sortable:true},
        {header:'上传时间',dataIndex:'scsj',width: 130,sortable:true},
        {header:'影音显示',dataIndex:'yylj',width: 60,renderer:renderYyXs,fixed:true},
       // {header:'详细',dataIndex:'id',width:60,renderer:renderXiangxi,fixed:true},
        {header:'删除',dataIndex:'yylj',width:60,renderer:renderDel,fixed:true}
     ]);
     
     var planRecord = Ext.data.Record.create([
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
     
     //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
	 var store = new Ext.data.Store({
     	//proxy告诉我们从哪里获得数据
     	proxy: new Ext.data.HttpProxy({url:'GzyyLssj.jsp?albm='+albm}),        
     	//reader告诉我们如何解析这个数据
     	reader: new Ext.data.JsonReader({
     		totalProperty: 'totalCount',
     		root: 'root',
     		successProperty :'success'
        },planRecord)
    });
	store.load({params:{start:0, limit:10}});
	
	//定义表格面板,指定列模型，仓库，选择模型(默认行选择模型)
    var simple_Grid = new Ext.grid.GridPanel({
        //el:指定html元素用于显示的grid
        //el: 'grid3', 
        //title: '历史事故影音',
        store:store,
    	cm: columns,
    	sm: new Ext.grid.RowSelectionModel({singleSelcet:true}),
        //title: '作业计划显示',
        //列重新计算后自动填满
        viewConfig:{
        	forceFit:true,
         	columnsText:"显示的列",
         	sortAscText:"升序",
         	sortDescText:"降序"
        },
        loadMask:{msg:"数据加载中...."},        
        collapsible: true,
        titleCollapse:true,
        animCollapse: false,
        columnLines: true,
        //width:1000,
        autoWidth: true,
        autoHeight: true,
        //plugins: expander,
        //iconCls: 'icon-grid',
        //height:400,
        //bottom bar
        bbar: new Ext.PagingToolbar({
            pageSize: 10,
            store: store,
            displayInfo: true,
            displayMsg: '第 {0} 条到 {1} 条,共 {2} 条',
            emptyMsg: "无记录"
        })
    });
    
    //Grid上触发事件
    simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
    	// simpleForm_Query.collapse();
    	simpleForm_Save.expand();
    	simpleForm_Save.buttons[0].setVisible(false);
    	simpleForm_Save.buttons[1].setVisible(true);
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	//alert(rowIndex);
    	//alert(record.get('albm'));
    	simpleForm_Save.getForm().loadRecord(record);
    });	

    //grid.render();//渲染表格
    Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
	// form start        
    
    var YYLX_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select sxid,sxmc from J_GDGY_SXZD  where sxid>011000 and sxid<012000'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	YYLX_store.load();
    
	var simpleForm_Save = new Ext.FormPanel({
        renderTo : document.body,
        title: '案例归档---->新增事故影音',
        labelAlign : 'left',
        bodyStyle:'padding:5px 5px 0',
        labelWidth: 60,  
        collapsible:true,
        titleCollapse:true,
        method:'POST',
        frame:true,
        autoWidth:true, 
        fileUpload: true,
        items : [{
                    layout : 'column',
                    border : false,
                	items:[{xtype:'hidden',name:'id',id:'yy_id'},{xtype:'hidden',name:'albm'},{
                    	columnWidth:.5,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '影音名称',
                    		name: 'yymc',
                    		id: 'yymc_id',
                    		allowBlank : false,
                    		anchor:'95%'
                		}]
                	},{
                		columnWidth:.5,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',
                       		xtype : 'combo',
                       		store : YYLX_store,
                        	valueField : "value",
                        	displayField : "text",
                        	mode : 'local',
                        	//forceSelection : true,
                        	blankText : '请选择类型',
                        	emptyText : '选择影音类型',
                        	hiddenName : 'yylx',
                        	editable : false,
                        	triggerAction : 'all',
                        	allowBlank : false,
                        	fieldLabel : '影音类型',
                        	name : 'yylx',
                        	id : 'yylx_id',
                        	anchor : '95%'
    					}]	
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'textarea',
                            fieldLabel : '影音描述',
                            name : 'yyms',
                            id: 'yyms_id',
                            anchor : '97%',
                            height:45
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype: 'fileuploadfield',
            				id: 'yylj',
            				anchor: '97%',
            				allowBlank: false,
           					msgTarget: 'side',
            				emptyText: '请选择影音',
           					fieldLabel: '影音上传',
            				name: 'yylj',
            				id: 'yylj_id',
            				buttonText: '',
            				buttonCfg: {
                				iconCls: 'upload-icon'
            				}
                		}]
                	}]
                }],
         buttons: [{
            text: '新增',
             handler : function() {
                  if (!simpleForm_Save.form.isValid()) {return };
                  if (simpleForm_Save.form.isValid()) {
                  	 var yypath =document.getElementById ("yylj").value;
                  	 //if(yypath.substr(yypath.length - 4,4).toLowerCase() != ".wav")
                  	 //{
                  	 //	 Ext.Msg.alert("提示","只能上传 wav 格式的文件！");   
                	 //	 return; 
                  	 //}
                  	 var yy_id =Ext.getCmp("yy_id").getValue();
                  	 var yyms_id =Ext.getCmp("yyms_id").getValue();
                  	 var yylx_id =Ext.getCmp("yylx_id").getValue();
                  	 var yymc_id =Ext.getCmp("yymc_id").getValue();
                  	 var yylj_id =Ext.getCmp("yylj_id").getValue();
                     simpleForm_Save.form.doAction('submit', {
                                                 	waitMsg:'保存中,请稍侯...',  
                                                    url : 'GzyySave.jsp?albm='+albm+'&yyms_id='+yyms_id+'&yylx_id='+yylx_id+'&yymc_id='+yymc_id+'&yylj_id='+yylj_id,
                                                    method : 'post',
                                                    params : '',
                                                    success : function(form, action) {
                                                            Ext.Msg.alert('消息',action.result.msg);
                                                            simple_Grid.getStore().reload();
                                                    },
                                                    failure : function() {
                                                             Ext.Msg.alert('操作', '保存失败！');
                                                             this.disabled = false;
                                                    }
                     });
                   }
            }
        }, {
            text : '修改',
            Enabled:false,
            handler : function() {
            	if (!simpleForm_Save.form.isValid()) {return };
           		if (simpleForm_Save.form.isValid()) {
                  	 //if(yypath.substr(yypath.length - 4,4).toLowerCase() != ".wav")
                  	 //{
                  	 //	 Ext.Msg.alert("提示","只能上传 wav 格式的文件！");   
                	 //	 return; 
                  	 //}
                  	 var yy_id =Ext.getCmp("yy_id").getValue();
                  	 var yyms_id =Ext.getCmp("yyms_id").getValue();
                  	 var yylx_id =Ext.getCmp("yylx_id").getValue();
                  	 var yymc_id =Ext.getCmp("yymc_id").getValue();
                  	 var yylj_id =Ext.getCmp("yylj_id").getValue();
                	simpleForm_Save.form.doAction('submit', {
                                               waitMsg:'修改中,请稍侯...',  
                                               url : 'GzyyUpdate.jsp?yyms_id='+yyms_id+'&yylx_id='+yylx_id+'&yymc_id='+yymc_id+'&yylj_id='+yylj_id+'&yy_id='+yy_id,
                                                    method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		simpleForm_Save.buttons[0].setVisible(true);
                                               		simple_Grid.getStore().reload();
                                               		Ext.Msg.alert('消息',action.result.msg);
                                               },
                                               failure : function() {
                                                     Ext.Msg.alert('操作', '保存失败！');
                                                     this.disabled = false;
                                               }
            		});
           		 }
             }
         },{

             // 取消按钮就是简单的reset一下form的控件
             text : '重置',
             handler : function() {
                   simpleForm_Save.form.reset();
                   simpleForm_Save.buttons[0].setVisible(true);
                   simpleForm_Save.buttons[1].setVisible(false)
             }
        },{
            text: '添加图片',
           handler : function() {
           		window.location.href='Gztp.jsp?albm='+albm;
           		//window.alert("albm:"+albm);
             }
        },{
            text: '返回',
           handler : function() {
           		window.location.href='Algd.jsp';
             }
        }]
      });
      
	
	 var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Save,simple_Grid]
	});
	//simpleForm_Save.collapse();
	simpleForm_Save.buttons[1].setVisible(false);
  });
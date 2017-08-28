Ext.onReady(function(){

    Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
	
    //渲染返回html代码
 	 var renderDel =function(value)
 	 {
 	     return '<a  href="xttzDel.jsp?ymd='+value+'">删除</a>';
 	 };
 	 
 	 //定义Grid表头
   	 var columns = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
         new Ext.grid.RowNumberer(),
        {header:'通知时间',dataIndex:'ymd',sortable:true,width:116},
        {header:'有效天数',dataIndex:'days',sortable:true,width:56},
        {header:'重要程度',dataIndex:'priority',sortable:true,width:56},
        {header:'标题',dataIndex:'title',sortable:true,width:166},
        {header:'内容',dataIndex:'content',sortable:true},
        {header:'发布人',dataIndex:'auther',sortable:true,width:56},
        {header:'撤除标记',dataIndex:'flag',width:56}
        ]);
     
     var planRecord = Ext.data.Record.create([    	
    	{name:'ymd',type:'string'},
    	{name:'days',type:'string'},
    	{name:'priority',type:'string'},
    	{name:'title',type:'string'},
    	{name:'content',type:'string'},
    	{name:'auther',type:'string'},
    	{name:'flag',type:'string'}
     ]);
     
     //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
	 var store = new Ext.data.Store({
     	proxy: new Ext.data.HttpProxy({url:'xttz_json.jsp'}),  
     	baseParams:{whereclause:'1=1'},//点击翻页的时候，这个值不会消失，作为基本参数，只有点击查询按钮时才会改变
     	reader: new Ext.data.JsonReader({
     		totalProperty: 'totalCount',
     		root: 'root',
     		successProperty :'success'
        },planRecord)
    });
	store.load({params:{start:0, limit:10}});
	
	//定义表格面板,指定列模型，仓库，选择模型(默认行选择模型)
    var simple_Grid = new Ext.grid.GridPanel({
        title: '通知列表', 
        store:store,
    	cm: columns,
    	sm: new Ext.grid.RowSelectionModel({singleSelcet:true}),
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
        autoWidth: true,
        autoHeight: true,
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
    	simpleForm_Save.expand();
    	//simpleForm_Save.buttons[0].setVisible(false);
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	simpleForm_Save.getForm().loadRecord(record);
    });	

    //grid.render();//渲染表格
    Ext.form.Field.prototype.msgTarget = 'side'; 

	var SGLX_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select sxid,sxmc from J_GDGY_SXZD  where sxid>009000 and sxid<010000 order by sxid'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	SGLX_store.load();
    
	var simpleForm_Query = new Ext.FormPanel({
		//renderTo : document.body,
       	title: '通知查询',
        labelAlign : 'left',
        bodyStyle:'padding:5px 5px 0',
        //labelWidth: 75, 
        collapsible:true,
        titleCollapse:true,
        method:'POST',
        frame:true,
        autoWidth:true,
        //width: 1000,
        items : [{
            layout : 'column',// columnlayout
            border : false,// 没有边框
            items : [{
                columnWidth : .3,
                layout : 'form',
                border : false,
                items : [{
                    xtype:'datefield',
                    fieldLabel: '开始日期',
                    id: 'ksrq',
                    anchor:'95%',
                    format:'Y-m-d',
                    allowBlank : true
                }]
            }, {
               columnWidth : .3,
               layout : 'form',
               border : false,
               items : [{
                   xtype:'datefield',
                   fieldLabel: '结束日期',
                   id: 'jsrq',
                   anchor:'95%',
                   format:'Y-m-d',
                   allowBlank : true
                }]
            },{
              columnWidth : .3,
              layout : 'form',
              border : false,
              items: [{
                    		xtype : 'combo',
                        	store : new Ext.data.SimpleStore({
                        		fields : ["returnValue", "displayText"],
                        		data : [['', '全部'],['1', '一般'],
                                   		['2', '重要'], ['3', '紧急']]
                        	}),
                        	valueField : "returnValue",
                        	displayField : "displayText",
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '重要程度',
                        	emptyText : '重要程度',
                        	hiddenName : 'priority',
                        	editable : false,
                        	triggerAction : 'all',
                        	//allowBlank : false,
                        	fieldLabel : '重要程度',
                        	id : 'priority_id',
                        	anchor : '95%'
    			}]
              }]
			}
           ],
            buttons : [{
              buttonlAlign : 'right',
               text : '查询',
               handler : function() {
                    if (!simpleForm_Query.form.isValid()) {return };
                    if (simpleForm_Query.form.isValid()) {
                    	//点击查询按钮后，修改whereclause的值，作为基本条件，翻页不会消失
						//需要大家把原来query.jsp中的拼whereclause的逻辑拿到这里来									
						var where="1=1 ";												
						if(Ext.getCmp("ksrq").getValue()!="" ){
							where=where+" and ymd>=to_date('"+Ext.util.Format.date(Ext.getCmp("ksrq").getValue(), 'Y-m-d')+"','yyyy-mm-dd')";	
						}
						if(Ext.getCmp("jsrq").getValue()!="" ){
							where=where+" and ymd<=to_date('"+Ext.util.Format.date(Ext.getCmp("jsrq").getValue(), 'Y-m-d')+"','yyyy-mm-dd')";	
						}
						if(Ext.getCmp("priority_id").getValue()!=''  && Ext.getCmp("priority_id").getValue()!='all'){
							where=where+" and priority="+Ext.getCmp("priority_id").getValue()+" ";
						}
						//alert(where);
						store.baseParams.whereclause = where; 
						simple_Grid.getStore().reload({ 
							params : { 
							start : 0, 
							limit : 10 
							} 
						});
       				}
			}
          }]
       });

    var simpleForm_Save = new Ext.FormPanel({
       	renderTo : document.body,
       	title: '通知编辑',
        labelAlign : 'left',
        bodyStyle:'padding:5px 5px 0',
        labelWidth: 55, 
        collapsible:true,
        titleCollapse:true,
        method:'POST',
        frame:true,
        autoWidth:true,
        autoHeight: true,
        //width: 1000,
        items: [{
            layout:'column',		//第一行
            items:[{
                columnWidth:.5,
                layout: 'form',
                items:[{
                    xtype : 'textfield',// 控件的类型为datefield
                    fieldLabel : '通知时间',
                    name : 'ymd',
                    allowBlank : false,
                    anchor : '90%',
                    listeners: {
                        		'focus': function(){WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})}
                   	},
                    format:'Y-m-d H:i:s'
               	}]
            },{
                columnWidth:.21,
                layout: 'form',
                items:[{
                    xtype : 'textfield',// 控件的类型为datefield
                    fieldLabel : '显示天数',
                    name : 'days',
                    allowBlank : false,
                    anchor : '90%'
                    
               	}]
            },{
                columnWidth:.29,
                layout: 'form',
                items:[{
                    		xtype : 'combo',
                        	store : new Ext.data.SimpleStore({
                        		fields : ["returnValue", "displayText"],
                        		data : [['1', '一般'],
                                   		['2', '重要'], ['3', '紧急']]
                        	}),
                        	valueField : "returnValue",
                        	displayField : "displayText",
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '重要程度',
                        	emptyText : '重要程度',
                        	hiddenName : 'priority',
                        	editable : false,
                        	triggerAction : 'all',
                        	allowBlank : false,
                        	fieldLabel : '重要程度',
                        	name : 'priority',
                        	anchor : '95%'
    				}]
            }]
           },{
            layout:'column',		//第一行
            items:[{
                columnWidth:.5,
                layout: 'form',
                items:[{
                    xtype : 'textfield',// 控件的类型为datefield
                    fieldLabel : '发布人',
                    name : 'auther',
                    allowBlank : false,
                    anchor : '90%'
               	}]
            },{
                columnWidth:.5,
                layout: 'form',
                items:[{
                    		xtype : 'combo',
                        	store : new Ext.data.SimpleStore({
                        		fields : ["returnValue", "displayText"],
                        		data : [['0', '有效'],
                                   		['1', '撤除']]
                        	}),
                        	valueField : "returnValue",
                        	displayField : "displayText",
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '标记',
                        	emptyText : '标记',
                        	hiddenName : 'flag',
                        	editable : false,
                        	triggerAction : 'all',
                        	allowBlank : false,
                        	fieldLabel : '标记',
                        	name : 'flag',
                        	anchor : '95%'
    			}]
            }]
           },{
            layout:'column',		//第二行
            items:[{
                columnWidth:.99,
                layout: 'form',
                items:[{
                xtype : 'field',// 控件的类型为datefield
                fieldLabel : '标题',
                name : 'title',
                anchor : '99%'
                //allowBlank : false// 该选项值不允许为空
         	}]
            }]
           },{
            layout:'column',		//第三行
            items:[{
                columnWidth:.99,
                layout: 'form',
                items:[{
                xtype : 'textarea',// 控件的类型为datefield
                fieldLabel : '内容',
                name : 'content',
                id:'content', 
                anchor : '99%',
                height:80
                //allowBlank : false// 该选项值不允许为空
         		}]
            }]
           }
           ],

         buttons: [{
            text: '保存',
             handler : function() {
                  if (!simpleForm_Save.form.isValid()) {return };
                  if (simpleForm_Save.form.isValid()) {
                     simpleForm_Save.form.doAction('submit', {
                                                 	waitMsg:'保存中,请稍侯...',  
                                                    url : 'xttzSave.jsp',
                                                    method : 'post',
                                                    params : '',
                                                    success : function(form, action) {
                                                             if(action.result.msg!="")
                                                             {	store.baseParams.whereclause = "1=1"; 
																simple_Grid.getStore().reload({ 
																	params : { 
																	start : 0, 
																	limit : 10 
																	} 
																});
                                                             	Ext.Msg.alert('消息','保存成功！');
                                                             }                                                            
                                                    },
                                                    failure : function() {
                                                             Ext.Msg.alert('操作', '保存失败！');
                                                             this.disabled = false;
                                                    }
                     });
                   }
            }
        }, {
            text : '删除',
            Enabled:false,
            handler : function() {
            	if (!simpleForm_Save.form.isValid()) {return };
           		if (simpleForm_Save.form.isValid()) {
                	simpleForm_Save.form.doAction('submit', {
                                               waitMsg:'修改中,请稍侯...',  
                                               url : 'xttzDel.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		store.baseParams.whereclause = "1=1"; 
																simple_Grid.getStore().reload({ 
																	params : { 
																	start : 0, 
																	limit : 10 
																	} 
																});
                                               		Ext.Msg.alert('消息',action.result.msg);
                                               },
                                               failure : function() {
                                                     Ext.Msg.alert('操作', '删除失败！');
                                                     this.disabled = false;
                                               }
            		});
           		 }
             }
         
        }]
    });
   
   var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Save,simpleForm_Query,simple_Grid]
	});
	//simple_Grid.collapse();
	simpleForm_Query.collapse();
	if(ddz=='0'){
		simpleForm_Save.buttons[1].setVisible(false);
		simpleForm_Save.buttons[0].setVisible(false);
	}
//	var my_reload=function (){
//		//需要定期加载的store
//	  	simple_Grid.getStore().reload();
//	}
//	setInterval(my_reload,3000);

});

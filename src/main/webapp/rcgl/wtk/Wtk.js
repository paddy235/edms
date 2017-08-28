var DWDM=document.getElementById ("DWDM").value;
var YHMC=document.getElementById ("YHMC").value;
var ttyhmc=document.getElementById("ttyhmc").value;

Ext.onReady(function(){

	this.ryshow=function(value1){    
    	win1 = new Ext.Window({
        	width:document.body.clientWidth-20,
        	height:document.body.clientHeight-10,
        	layout:'column',
       		title: '问题库记录',
        	closeAction:'hide',
        	plain: true,
        	autoScroll:false,
        	html:'<iframe style="width:100%;height:100%" src="../../tjbb/query/wtk.jsp?whereyxgl='+value1+'"></iframe>'
     	});
    	win1.show(this);
  	};
	
	
    Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
	var where1="";	
    //渲染返回html代码
 	 var renderDel =function(value)
 	 {
 	     return '<a  href="GzbgDel.jsp?gzbm='+value+'">删除</a>';
 	 };
 	 var renderSfgd= function(value){
  		return (value=="0")?"未归档":"已归档";
 	 };
 	 
 	 //定义Grid表头
   	 var columns = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
         new Ext.grid.RowNumberer(),
        //{header:'序号',dataIndex:'id',width:40,sortable:true,fixed:true},
        {header:'单位名称',dataIndex:'dwmc',sortable:true,width:80},
        {header:'发生时间',dataIndex:'fssj',sortable:true,width:80},
        {header:'问题描述',dataIndex:'wtms',sortable:true,width:100},
        {header:'登记人',dataIndex:'djr',sortable:true,width:60},
        {header:'消记时间',dataIndex:'xjsj',sortable:true,width:80},
        {header:'处理过程',dataIndex:'clgc',sortable:true,width:50},
        {header:'消记人',dataIndex:'xjr',sortable:true,width:60},
        {header:'状态',dataIndex:'zt',sortable:true,width:40}
       // {header:'详细',dataIndex:'id',width:60,renderer:renderXiangxi,fixed:true},
       // {header:'删除',dataIndex:'gzbm',width:60,renderer:renderDel,fixed:true}
     ]);
     
     var planRecord = Ext.data.Record.create([
    	{name:'wtkid',type:'string'},
    	{name:'dwdm',type:'string'},
    	{name:'dwmc',type:'string'},
    	{name:'fssj',type:'string'},
    	{name:'wtms',type:'string'},
    	{name:'djr',type:'string'},
    	{name:'xjsj',type:'string'},
    	{name:'clgc',type:'string'},
    	{name:'xjr',type:'string'},
    	{name:'zt',type:'string'}
     ]);
     
     //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
	 var store = new Ext.data.Store({
     	proxy: new Ext.data.HttpProxy({url:'WtkLssj.jsp'}),      
     	baseParams:{whereclause:'1=1'},   
     	reader: new Ext.data.JsonReader({
     		totalProperty: 'totalCount',
     		root: 'root',
     		successProperty :'success'
        },planRecord)
    });
	store.load({params:{start:0, limit:10}});
	
	//定义表格面板,指定列模型，仓库，选择模型(默认行选择模型)
    var simple_Grid = new Ext.grid.GridPanel({
        //title: '未处理故障报告', 
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
    	simpleForm_Save.expand();
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	simpleForm_Save.getForm().loadRecord(record);
    	
    	var ttyhmcs=ttyhmc.split("!#");
    	for(var i=0;i<ttyhmcs.length;i++)
    	{
	    	if(record.get('djr')==ttyhmcs[i]||DWDM=="003")
	    	{
		        simpleForm_Save.buttons[0].setVisible(false);
		        simpleForm_Save.buttons[1].setVisible(true);
		        simpleForm_Save.buttons[2].setVisible(true);
		        simpleForm_Save.buttons[3].setVisible(true);
		        break;
	    	}
	    	else
	    	{
	    		simpleForm_Save.buttons[0].setVisible(false);
		        simpleForm_Save.buttons[1].setVisible(false);
		        simpleForm_Save.buttons[2].setVisible(false);
		        simpleForm_Save.buttons[3].setVisible(false);
	    	}
	    }
    	
    	simpleForm_Save.getForm().setValues([{id: "wtkid",value: record.get("wtkid")} ]);
    });	

    //grid.render();//渲染表格
    Ext.form.Field.prototype.msgTarget = 'side'; 

    /*
     * ================  您当前的位置：故障警报---->人工报告编辑 =======================
    */
    
	var simpleForm_Query = new Ext.FormPanel({
		//renderTo : document.body,
       	title: '问题库查询',
        labelAlign : 'left',
        bodyStyle:'padding:5px 5px 0',
        labelWidth: 60, 
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
            layout : 'column',// columnlayout
            border : false,// 没有边框
            items : [{
                columnWidth : .3,
                layout : 'form',
                border : false,
                items : [{
                    xtype:'datefield',
                    fieldLabel: '开始日期',
                    name: 'ksrq',
                    id: 'ksrq',
                    anchor:'90%',
                    format:'Y-m-d'
                    //value:new Date(),
                    //allowBlank : false
                    //format:'Y-m-d H:i:s',
    				//timePicker:true
                }]
            }, {
               columnWidth : .3,
               layout : 'form',
               border : false,
               items : [{
                   xtype:'datefield',
                   fieldLabel: '结束日期',
                   name: 'jsrq',
                   id: 'jsrq',
                   anchor:'90%',
                   format:'Y-m-d'
                   //allowBlank : false
                }]
            },{
              columnWidth : .3,
              layout : 'form',
              border : false,
              items: [{
                        xtype : 'combo',
                      	store : new Ext.data.SimpleStore({
                      		fields : ["returnValue", "displayText"],
                      		data : [['ALL', '全部'], ['002', '客专牵引台'], ['003', '客专电力台'], ['00301', '客专牵引一台'], ['00302', '客专牵引二台'], ['00303', '客专电力一台'], ['00304', '客专电力二台']]
                                                     }),
                      	valueField : "returnValue",
                      	displayField : "displayText",
                      	mode : 'local',// 数据是在本地
                      	//forceSelection : true,// 必须选择一个选项
                      	blankText : '请选择电调台',
                      	emptyText : '选择电调台',
                      	hiddenName : 'ddt',
                      	editable : false,
                      	triggerAction : 'all',
                      	//allowBlank : false,
                      	fieldLabel : '电调台',
                      	name : 'ddt',
                      	id:'txt_ddt',
                      	anchor : '90%'
    			}]
              }]
			},{
            layout : 'column',// columnlayout
            border : false,// 没有边框
            items : [{
                columnWidth : .3,
                layout : 'form',
                border : false,
                items : [{
                    xtype:'textfield',
                    fieldLabel: '问题描述',
                    name: 'wtmscx',
                    id: 'txt_wtmscx',
                    anchor:'90%'
                }]
            },{
              columnWidth : .3,
              layout : 'form',
              border : false,
              items: [{
                        xtype : 'combo',
                      	store : new Ext.data.SimpleStore({
                      		fields : ["returnValue", "displayText"],
                      		data : [['ALL', '全部'], ['未处理', '未处理'], ['已消记', '已消记']]
                                                     }),
                      	valueField : "returnValue",
                      	displayField : "displayText",
                      	mode : 'local',// 数据是在本地
                      	//forceSelection : true,// 必须选择一个选项
                      	blankText : '请选择状态',
                      	emptyText : '选择状态',
                      	hiddenName : 'ztcx',
                      	editable : false,
                      	triggerAction : 'all',
                      	//allowBlank : false,
                      	fieldLabel : '状态',
                      	name : 'ztcx',
                      	id:'txt_ztcx',
                      	anchor : '90%'
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
                       var where=" 1 = 1 ";										
						if(Ext.getCmp("ksrq").getValue()!="" ){
							where=where+" and trunc(fssj)>=to_date('"+Ext.util.Format.date(Ext.getCmp("ksrq").getValue(), 'Y-m-d')+"','yyyy-mm-dd')";	
						}
						if(Ext.getCmp("jsrq").getValue()!="" ){
							where=where+" and trunc(fssj)>=to_date('"+Ext.util.Format.date(Ext.getCmp("ksrq").getValue(), 'Y-m-d')+"','yyyy-mm-dd')";	
						}

						if(Ext.getCmp("txt_ddt").getValue()=='003')
						{
						    where=where+" and (dwdm='00303' or dwdm='00304')";
						}
						else if(Ext.getCmp("txt_ddt").getValue()=='002')
						{
						    where=where+" and (dwdm='00301' or dwdm='00302')";
						}
					 	else if(Ext.getCmp("txt_ddt").getValue()!='' && Ext.getCmp("txt_ddt").getValue()!='ALL')
					 	{
							where=where+" and dwdm='"+Ext.getCmp("txt_ddt").getValue()+"' ";
						}
						
						if(Ext.getCmp("txt_wtmscx").getValue()!="" ){
							where=where+"  and wtms like '%"+Ext.getCmp("txt_wtmscx").getValue()+"%'";	
						}
						
						if(Ext.getCmp("txt_ztcx").getValue()!='' && Ext.getCmp("txt_ztcx").getValue()!='ALL')
						{
						    where=where+" and zt='"+Ext.getCmp("txt_ztcx").getValue()+"'";
						}
						store.baseParams.whereclause = where;
						where1=where;
						simple_Grid.getStore().reload({ 
							params : { 
							start : 0, 
							limit : 10 
							} 
						});
       				}
			}
          }, {

               text : '重置',
               handler : function() {
                      simpleForm_Query.form.reset();
               }
         },
         {
               	text : '打印记录',
				handler : function() {
					   ryshow(where1);
				}
        }
          ]}]
       });

    var simpleForm_Save = new Ext.FormPanel({
       	renderTo : document.body,
       	title: '问题库编辑',
        labelAlign : 'left',
        bodyStyle:'padding:5px 5px 0',
        labelWidth: 60, 
        collapsible:true,
        titleCollapse:true,
        method:'POST',
        frame:true,
        autoWidth:true,
        autoHeight: true,
        //width: 1000,
        items: [{xtype:'hidden',name:'wtkid'},{
            layout:'column',		//第一行
            items:[{
                columnWidth:.33,
                layout: 'form',
                items:[{
                    xtype : 'textfield',// 控件的类型为datefield
                    fieldLabel : '发生时间',
                    name : 'fssj',
                    allowBlank : false,
                    anchor : '90%',
                    listeners: {
                        		'focus': function(){WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}
                   	},
                    format:'Y-m-d H:i:s'
               	}]
            },{
                columnWidth:.33,
                layout: 'form',
                items:[{
                    xtype : 'textfield',// 控件的类型为datefield
                    fieldLabel : '登记人',
                    name : 'djr',
                    value:YHMC,
                    allowBlank : false,
                    anchor : '90%'
               	}]
            }]
           },{
            layout:'column',		//第二行
            items:[{
                columnWidth:.99,
                layout: 'form',
                items:[{
              		 xtype : 'textarea',
                     fieldLabel : '问题描述',
                     name : 'wtms',
                     anchor : '97%',
                     height:45,
                     allowBlank : false
         	}]
           }]
         },{
            layout:'column',		//第三行
            items:[{
	            columnWidth : .33,
	            layout : 'form',
	            border : false,
	            items : [{
	                xtype : 'textfield',// 控件的类型为datefield
                    fieldLabel : '消记时间',
                    name : 'xjsj',
                    //allowBlank : false,
                    anchor : '90%',
                    listeners: {
                        		'focus': function(){WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}
                   	},
                    format:'Y-m-d H:i:s'
	            }]
	     },{
	            columnWidth : .33,
	            layout : 'form',
	            border : false,
	            items : [{
	                xtype : 'textfield',// 控件的类型为datefield
                    fieldLabel : '消记人',
                    name : 'xjr',
                    //allowBlank : false,
                    anchor : '90%'
	            }]
	     },{
	            columnWidth : .33,
	            layout : 'form',
	            border : false,
	            items : [{
	                	xtype : 'combo',
                      	store : new Ext.data.SimpleStore({
                      		fields : ["returnValue", "displayText"],
                      		data : [['未处理', '未处理'], ['已消记', '已消记']]
                                                     }),
                      	valueField : "returnValue",
                      	displayField : "displayText",
                      	mode : 'local',// 数据是在本地
                      	//forceSelection : true,// 必须选择一个选项
                      	blankText : '请选择状态',
                      	emptyText : '选择状态',
                      	hiddenName : 'zt',
                      	editable : false,
                      	triggerAction : 'all',
                      	//allowBlank : false,
                      	fieldLabel : '状态',
                      	name : 'zt',
                      	id:'txt_zt',
                      	anchor : '90%'
	            }]
	     }]
       },{
            layout:'column',		//第四行
            items:[{
	            columnWidth:.99,
                layout: 'form',
                items:[{
              		 xtype : 'textarea',
                     fieldLabel : '处理过程',
                     name : 'clgc',
                     anchor : '97%',
                     height:45
         	}]
	     }]
       }],

         buttons: [{
            text: '新增',
             handler : function() {
                  if (!simpleForm_Save.form.isValid()) {return };
                  if (simpleForm_Save.form.isValid()) {
                     simpleForm_Save.form.doAction('submit', {
                                                 	waitMsg:'保存中,请稍侯...',  
                                                    url : 'WtkSave.jsp',
                                                    method : 'post',
                                                    params : '',
                                                    success : function(form, action) {
                                                             simple_Grid.getStore().reload();
                                                             simpleForm_Save.buttons[3].setVisible(false);
                                                             Ext.Msg.alert('消息',action.result.msg);
                                                    },
                                                    failure : function() {
                                                             Ext.Msg.alert('消息', '保存失败！');
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
                	simpleForm_Save.form.doAction('submit', {
                                               waitMsg:'修改中,请稍侯...',  
                                               url : 'WtkUpdate.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		simpleForm_Save.buttons[0].setVisible(true);
                                               		//simpleForm_Save.buttons[3].setVisible(false);
                                               		simple_Grid.getStore().reload();
                                               		Ext.Msg.alert('消息',action.result.msg);
                                               },
                                               failure : function() {
                                                     Ext.Msg.alert('消息', '保存失败！');
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
                   simpleForm_Save.buttons[1].setVisible(false);
                   simpleForm_Save.buttons[3].setVisible(false);
             }
        },{
             text : '删除',
             Enabled:false,
             handler : function() {
                	simpleForm_Save.form.doAction('submit', {
                                               waitMsg:'删除中,请稍侯...',  
                                               url : 'WtkDel.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		simple_Grid.getStore().reload();
                                               		Ext.Msg.alert('消息',action.result.msg);
                                               },
                                               failure : function() {
                                                     Ext.Msg.alert('消息', '删除失败！');
                                                     this.disabled = false;
                                               }
            		});
             }
        }]
    });
   
   var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Save,simpleForm_Query,simple_Grid]
	});
	//simple_Grid.collapse();
	simpleForm_Save.buttons[1].setVisible(false);
	simpleForm_Save.buttons[3].setVisible(false);
	simpleForm_Save.getForm().setValues([{id: "zt",value: '未处理'} ]);

});

Ext.onReady(function() {
		this.ryshow=function(value){
		//window.open("xxx.jsp");
	    //alert(value);
    	win1 = new Ext.Window({
        	width:document.body.clientWidth-20,
        	height:document.body.clientHeight-10,
        	layout:'column',
       		title: '所亭故障记录',
        	closeAction:'hide',
        	plain: true,
        	autoScroll:false,
        	html:'<iframe style="width:100%;height:100%" src="../../tjbb/query/stgz.jsp?where='+value+'"></iframe>'
     	});
    	win1.show(this);
  	};
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    
    //alert("aaa");
    
 	//渲染返回html代码

 	 var renderDel =function(value)
 	 {
 	     return '<a  href="stgz_del.jsp?JLID='+value+'">删除</a>';
 	 };
 
    //定义Grid表头
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
        //new Ext.grid.RowNumberer(),
        
        {header:'日期',dataIndex:'DJRQ',width:100},
        {header:'所亭',dataIndex:'GQMC',width:50},
        {header:'设备类别',dataIndex:'LB',width:40},
        {header:'设备名称',dataIndex:'SBMC',width:50},
        {header:'故障概况',dataIndex:'GK',width:120},
        {header:'备注',dataIndex:'BZ',width:100},
        {header:'登记人',dataIndex:'DJR',width:50},
        {header:'恢复日期',dataIndex:'HFRQ',width:100},
        {header:'填写人',dataIndex:'TXR',width:50},
        {header:'删除',dataIndex:'JLID',width:40,renderer:renderDel,fixed:true}
    ]);
   
    	
    var planRecord = Ext.data.Record.create([
    	{name:'JLID',type:'string'},
    	{name:'DJRQ',type:'string'},
    	{name:'GQMC',type:'string'},
    	{name:'LB',type:'string'},
    	{name:'SBMC',type:'string'},
    	{name:'GK',type:'string'},
    	{name:'BZ',type:'string'},
    	{name:'DJR',type:'string'},
    	{name:'HFRQ',type:'string'},
    	{name:'TXR',type:'string'},
    	{name:'GQDM',type:'string'}
    	]);
    	
    
    //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'stgz_json.jsp'}),        
        //reader告诉我们如何解析这个数据
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
        //el:指定html元素用于显示的grid
        //el: 'grid3', 
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
        //width:780,
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
        
        //在Grid的上方添加按钮
        /*
        tbar: new Ext.Toolbar({ 
        	items:[ 
                { 
                    id:'buttonA',
                    text:"添加",
                    handler: this.showAdd,
                    scope:this 
                },
                { 
                    id:'buttonA',
                    text:"添加",
                    handler: this.showAdd,
                    scope:this 
                }
             ] 
        }) 
        */
    });
   	//Grid上触发事件
   
    	simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
    	// simpleForm_Query.collapse();
    	simpleForm_Save.expand();
    	simpleForm_Save.buttons[0].setVisible(false);
    	simpleForm_Save.buttons[1].setVisible(true);
    	//simpleForm_Save.buttons[3].setVisible(true);
    	//simpleForm_Save.buttons[4].setVisible(true);;
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	//alert(record);
    	//alert(record.get('albm'));
    	
    	simpleForm_Save.getForm().loadRecord(record);
    	
    });	
   	//grid.addListener('cellClick',cellClick);
    //显示在html中id为container的层中
    //grid.render();//渲染表格
     Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
	 // form start
     var gq_store = new Ext.data.Store({
	 proxy : new Ext.data.HttpProxy({
			url : "../../share/combo_list.jsp?sql=select  GQDM,GQMC from J_GYJC_GQZD where JGLBDM !=1 and ddtdm like '"+dwid+"%25'"
		}),
		reader : new Ext.data.JsonReader({root : 'root'
				},[{name : 'value',mapping : 'value'},
				   {name : 'text',mapping : 'text'}
				  ]
			)
	});
	gq_store.load();
	var sbmc_store = new Ext.data.Store({
	 proxy : new Ext.data.HttpProxy({
			url : "../../share/combo_list.jsp?sql=select distinct SBMC sbmc1,SBMC sbmc2 from Z_YXGL_STGZ ORDER BY SBMC"
		}),
		reader : new Ext.data.JsonReader({root : 'root'
				},[{name : 'value',mapping : 'value'},
				   {name : 'text',mapping : 'text'}
				  ]
			)
	});
	sbmc_store.load();
	var lb_store = new Ext.data.Store({
	 proxy : new Ext.data.HttpProxy({
			url : "../../share/combo_list.jsp?sql=select distinct LB lb1,LB lb2 from Z_YXGL_STGZ ORDER BY LB"
		}),
		reader : new Ext.data.JsonReader({root : 'root'
				},[{name : 'value',mapping : 'value'},
				   {name : 'text',mapping : 'text'}
				  ]
			)
	});
	lb_store.load();	
	var gq_store1 = new Ext.data.Store({
	 proxy : new Ext.data.HttpProxy({
			url : "../../share/combo_list.jsp?sql=select  GQDM,GQMC from J_GYJC_GQZD where JGLBDM !=1 and ddtdm like '"+dwid+"%25'&all=all"
		}),
		reader : new Ext.data.JsonReader({root : 'root'
				},[{name : 'value',mapping : 'value'},
				   {name : 'text',mapping : 'text'}
				  ]
			)
	});
	gq_store1.load();
	
     var ddt_store = new Ext.data.Store({
	 proxy : new Ext.data.HttpProxy({
			url : '../../share/combo_list.jsp?sql=select distinct DDTDM,DDTMC from J_GYJC_DDTZD &all=all'
		}),
		reader : new Ext.data.JsonReader({root : 'root'
				},[{name : 'value',mapping : 'value'},
				   {name : 'text',mapping : 'text'}
				  ]
			)
	});
	ddt_store.load();
	var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '所亭故障查询',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 600,
              collapsible:true,
              titleCollapse:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              labelWidth : 35,
              
              
              items : [{
                       layout : 'column',// columnlayout
                       border : false,// 没有边框
                       labelSeparator : '：',// 标题的分隔符号我们用中文冒号代替英文的冒号（labelSeparator:'：'）。
                       // coulmnLayout里的控件将定义在items里
                       items : [{
                                    columnWidth : .18,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                             xtype : 'field',// 控件的类型为datefield
                                             fieldLabel : '日期',
                                             name : 'DHRQ',
                                             id:'rq2',
                                             anchor : '90%',
                                             //value: new Date,
                                             listeners: {
						                        		'focus': function(){WdatePicker({dateFmt:'yyyy-MM-dd'})}
						                   	}
						                   // format:'Y-m-d H:i:s'
                                      }]
                             },{
                                    columnWidth : .18,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                             xtype : 'field',// 控件的类型为datefield
                                             fieldLabel : '结束',
                                             name : 'DHRQ',
                                             id:'rq3',
                                             anchor : '90%',
                                             //value: new Date,
                                             listeners: {
						                        		'focus': function(){WdatePicker({dateFmt:'yyyy-MM-dd'})}
						                   	}
						                   // format:'Y-m-d H:i:s'
                                      }]
                             },{
                                    columnWidth : .19,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                            xtype : 'combo',// 控件的类型设置成combo
							           		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
							            	store : ddt_store,
							            	valueField : "value",
							            	displayField : "text",
							            	mode : 'local',// 数据是在本地
							            	//forceSelection : true,// 必须选择一个选项
							            	blankText : '请选电调台',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
							            	emptyText : '选择电调台',// 在没有选择值时显示为选择学历
							            	hiddenName : 'DDT',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
							            	editable : false,// 该下拉列表只允许选择，不允许输入
							            	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
							            	//allowBlank : false,// 该选项值不允许为空
							            	fieldLabel : '电调',// 控件的标题是学历
							            	name : 'DDT',// 再次提醒，name只是下拉列表的名称
							            	id:'ddt1',
							            	anchor : '90%'// input的宽度是90%
                                      }]
                             },{
                                    columnWidth : .19,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                            xtype : 'combo',// 控件的类型设置成combo
							           		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
							            	store : gq_store1,
							            	valueField : "value",
							            	displayField : "text",
							            	mode : 'local',// 数据是在本地
							            	//forceSelection : true,// 必须选择一个选项
							            	blankText : '请选所亭',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
							            	emptyText : '选择所亭',// 在没有选择值时显示为选择学历
							            	hiddenName : 'BDS',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
							            	editable : false,// 该下拉列表只允许选择，不允许输入
							            	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
							            	//allowBlank : false,// 该选项值不允许为空
							            	fieldLabel : '所亭',// 控件的标题是学历
							            	name : 'BDS',// 再次提醒，name只是下拉列表的名称
							            	id:'bds1',
							            	anchor : '90%'// input的宽度是90%
                                      }]
                             },{
                                    columnWidth : .19,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                            xtype : 'combo',// 控件的类型设置成combo
							           		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
							            	store : lb_store,
							            	valueField : "value",
							            	displayField : "text",
							            	mode : 'local',// 数据是在本地
							            	//forceSelection : true,// 必须选择一个选项
							            	blankText : '请选类别',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
							            	emptyText : '选择类别',// 在没有选择值时显示为选择学历
							            	hiddenName : 'lblb',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
							            	editable : true,// 该下拉列表只允许选择，不允许输入
							            	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
							            	//allowBlank : false,// 该选项值不允许为空
							            	fieldLabel : '类别',// 控件的标题是学历
							            	name : 'lblb',// 再次提醒，name只是下拉列表的名称
							            	id:'lb1',
							            	anchor : '90%'// input的宽度是90%
                                      }]
                             }]
                            

                   	 }],
              // 为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
              buttons : [{
                           // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
                            text : '查询',
                           handler : function() {
                                  if (!simpleForm_Query.form.isValid()) {return };
                           		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                                  if (simpleForm_Query.form.isValid()) {
                                         //点击查询按钮后，修改whereclause的值，作为基本条件，翻页不会消失
										//需要大家把原来query.jsp中的拼whereclause的逻辑拿到这里来									
										var where="1=1 ";										
										if(Ext.getCmp("rq2").getValue()!=""  ){
											where=where+" and to_char(DJRQ,'yyyy-mm-dd')>='"+Ext.getCmp("rq2").getValue()+"'";
										}
										if(Ext.getCmp("rq3").getValue()!=""  ){
											where=where+" and to_char(DJRQ,'yyyy-mm-dd')>='"+Ext.getCmp("rq3").getValue()+"'";
										}
										if(Ext.getCmp("bds1").getValue()!=""&&Ext.getCmp("bds1").getValue()!="ALL"  ){
											where=where+" and a.GQDM ='"+Ext.getCmp("bds1").getValue()+"'";	
										}
										if(Ext.getCmp("lb1").getValue()!="" ){
											where=where+" and a.LB ='"+Ext.getCmp("lb1").getValue()+"'";	
										}
										if(Ext.getCmp("ddt1").getValue()!=""&&Ext.getCmp("ddt1").getValue()!="ALL"  ){
											where=where+" and b.DDTDM ='"+Ext.getCmp("ddt1").getValue()+"'";	
										}
										
										store.baseParams.whereclause = where; 
										simple_Grid.getStore().reload({ 
											params : { 
											start : 0, 
											limit : 10 
											} 
										});
									}
                           }
                    }, {

                           // 取消按钮就是简单的reset一下form的控件
                           text : '重置',
                           handler : function() {
                                  simpleForm_Query.form.reset();
                                  simpleForm_Save.collapse();
                                 // window.location.href="";
                                  //window.location.href='zyjhsqAdd.jsp';
                           }
                    },  {
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
            text : '打印记录',
                  hidden: true,
            handler : function() {
                                        //var win;
                                         
								       ryshow(store.baseParams.whereclause);

                                   }
                            }]
       });
   
   
   
   //Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
	 
	 
	 // form start
	var simpleForm_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '所亭故障管理',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 600,
              collapsible:true,
              titleCollapse:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              items : [{//1
                       layout : 'column',// columnlayout
                       border : false,// 没有边框
                       labelSeparator : '：',// 标题的分隔符号我们用中文冒号代替英文的冒号（labelSeparator:'：'）。
                       labelWidth : 55,
                       items : [{xtype:'hidden',name:'JLID',id:'JLID'},
           					   {
                                columnWidth : .25,
                                layout : 'form',
                                border : false,
                                items : [{
                                         xtype : 'textfield',// 控件的类型为datefield
                                         fieldLabel : '登记日期',
                                         name : 'DJRQ',
                                         anchor : '90%',
                                         allowBlank : false,
                                         listeners: {
					                        'focus': function(){WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}
					                   	}
                                  		}]
                                 },
                                {
                                columnWidth : .25,
                                layout : 'form',
                                border : false,
                                items : [{
							        		xtype : 'combo',// 控件的类型设置成combo
							           		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
							            	store : gq_store,
							            	valueField : "value",
							            	displayField : "text",
							            	mode : 'local',// 数据是在本地
							            	//forceSelection : true,// 必须选择一个选项
							            	blankText : '选择所亭',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
							            	emptyText : '选择所亭',// 在没有选择值时显示为选择学历
							            	hiddenName : 'GQDM',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
							            	editable : false,// 该下拉列表只允许选择，不允许输入
							            	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
							            	allowBlank : false,// 该选项值不允许为空
							            	fieldLabel : '所亭',// 控件的标题是学历
							            	name : 'GQDM',// 再次提醒，name只是下拉列表的名称
							            	anchor : '90%'// input的宽度是90%
										}]
                        		 },
                             	{
                                columnWidth : .25,
                                layout : 'form',
                                border : false,
                                items : [{
							        		xtype : 'combo',// 控件的类型设置成combo
							           		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
							            	store : lb_store,
							            	valueField : "value",
							            	displayField : "text",
							            	mode : 'local',// 数据是在本地
							            	//forceSelection : true,// 必须选择一个选项
							            	blankText : '故障类别',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
							            	emptyText : '故障类别',// 在没有选择值时显示为选择学历
							            	hiddenName : 'LB',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
							            	editable : true,// 该下拉列表只允许选择，不允许输入
							            	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
							            	allowBlank : false,// 该选项值不允许为空
							            	fieldLabel : '故障类别',// 控件的标题是学历
							            	name : 'LB',// 再次提醒，name只是下拉列表的名称
							            	anchor : '90%'// input的宽度是90%
										}]
                        		 },
                        		 {
                                columnWidth : .24,
                                layout : 'form',
                                border : false,
                                items : [{
							        		xtype : 'combo',// 控件的类型设置成combo
							           		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
							            	store : sbmc_store,
							            	valueField : "value",
							            	displayField : "text",
							            	mode : 'local',// 数据是在本地
							            	//forceSelection : true,// 必须选择一个选项
							            	blankText : '设备名称',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
							            	emptyText : '设备名称',// 在没有选择值时显示为选择学历
							            	hiddenName : 'SBMC',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
							            	editable : true,// 该下拉列表只允许选择，不允许输入
							            	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
							            	allowBlank : false,// 该选项值不允许为空
							            	fieldLabel : '设备',// 控件的标题是学历
							            	name : 'SBMC',// 再次提醒，name只是下拉列表的名称
							            	anchor : '90%'// input的宽度是90%
										}]
                        		 }
                           ]

                    },{//2
                       layout : 'column',// columnlayout
                       border : false,// 没有边框
                       labelSeparator : '：',// 标题的分隔符号我们用中文冒号代替英文的冒号（labelSeparator:'：'）。
                       labelWidth : 55,
                       items : [{
                                columnWidth : .99,
                                layout : 'form',
                                border : false,
                                items : [{
                                         xtype : 'textfield',// 控件的类型为datefield
                                         fieldLabel : '概况',
                                         name : 'GK',
                                         anchor : '98%'
                                  		}]
                                }]

                    },{//3
                       layout : 'column',// columnlayout
                       border : false,// 没有边框
                       labelSeparator : '：',// 标题的分隔符号我们用中文冒号代替英文的冒号（labelSeparator:'：'）。
                       labelWidth : 55,
                       items : [{xtype:'hidden',name:'JLID',id:'jl_id'},
           					   {
                                columnWidth : .36,
                                layout : 'form',
                                border : false,
                                items : [{
                                         xtype : 'textfield',// 控件的类型为datefield
                                         fieldLabel : '备注',
                                         name : 'BZ',
                                         anchor : '90%'
                                  		}]
                                 },
                                {
                                columnWidth : .19,
                                layout : 'form',
                                border : false,
                                items : [{
                                         xtype : 'textfield',// 控件的类型为datefield
                                         fieldLabel : '登记人',
                                         name : 'DJR',
                                         value:yh,
                                         anchor : '90%'
                                  		}]
                                 },
                             	{
                                columnWidth : .25,
                                layout : 'form',
                                border : false,
                                items : [{
                                         xtype : 'textfield',// 控件的类型为datefield
                                         fieldLabel : '恢复日期',
                                         name : 'HFRQ',
                                         listeners: {
					                        'focus': function(){WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}
					                   	},
                                         anchor : '90%'
                                  		}]
                                 },
                        		 {
                                columnWidth : .19,
                                layout : 'form',
                                border : false,
                                items : [{
                                         xtype : 'textfield',// 控件的类型为datefield
                                         fieldLabel : '填写人',
                                         name : 'TXR',
                                         anchor : '90%'
                                  		}]
                                 }
                           ]

                    }],
              // 为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
        buttons: [{
            text: '新增',
             handler : function() {
                  if (!simpleForm_Save.form.isValid()) {return };
                  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                  if (simpleForm_Save.form.isValid()) {
                     // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                     //this.disabled = true;
                     // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                     simpleForm_Save.form.doAction('submit', {
             					  waitMsg:'保存中,请稍侯...',  
                                  url : 'Save.jsp?flag=1',
                                  method : 'post',
                                  params : '',
                                  // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                                  // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                                  success : function(form, action) {
                                         // 例如返回的json结构是"{success:true,data:'成功保存！'}"，
                                         Ext.Msg.alert('操作',action.result.data);
                                  		Ext.Msg.alert('消息',action.result.msg);
                                  		simpleForm_Query.form.reset();
                                  		simple_Grid.getStore().reload();
                                  		
                                  },
                                  // 定义failure函数，就是网络通讯存在问题的时候将显示错误信息。
                                  failure : function() {
                                         Ext.Msg.alert('操作', '保存失败！');
                                         this.disabled = false;
                                  }
                           });
                   }        }
        }, {
            text : '修改',
            Enabled:false,
            handler : function() {
            	if (!simpleForm_Save.form.isValid()) {return };
           		if (simpleForm_Save.form.isValid()) {
                	simpleForm_Save.form.doAction('submit', {
                           waitMsg:'修改中,请稍侯...',  
                           url : 'Save.jsp?flag=0',
                           method : 'post',
                           params : '',
                           success : function(form, action) {
                           		simpleForm_Save.buttons[0].setVisible(true);
                           		simple_Grid.getStore().reload();
                           		Ext.Msg.alert('消息',action.result.msg);
                           },
                           failure : function() {
                                 Ext.Msg.alert('操作', '修改失败！');
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
                   //simpleForm_Save.buttons[3].setVisible(false);
                   //simpleForm_Save.buttons[4].setVisible(false);
                   //simpleForm_Query.collapse();
                   // window.location.href="";
             }
        }]
    }); 
    
    
    var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Save,simpleForm_Query,simple_Grid]
	});
	simpleForm_Save.collapse();
	simpleForm_Save.buttons[1].setVisible(false);
	//simpleForm_Save.buttons[3].setVisible(false);
	//simpleForm_Save.buttons[4].setVisible(false);
	
 });
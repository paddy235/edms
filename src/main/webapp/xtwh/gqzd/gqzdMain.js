Ext.onReady(function(){

    Ext.QuickTips.init();
Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var bd = Ext.getBody();
    
    /*
     * ================  案例查询表单 =======================
    */
    //渲染返回html代码
 	 var renderXiangxi =function(value)
 	 {
 	     return '<a href="aa.jsp?id='+value+'">详细</a>';
 	 };
 	 var renderDel =function(value)
 	 {
 	     return '<a  href="gqzdDel.jsp?GQDM='+value+'">删除</a>';
 	 };
 	 
 	 //定义Grid表头
   	 var columns = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
         new Ext.grid.RowNumberer(),
        //{header:'序号',dataIndex:'id',width:40,sortable:true,fixed:true},
        {header:'工区代码',dataIndex:'GQDM',width:50},
        {header:'工区简称',dataIndex:'GQJC',width:50,sortable:true},
        {header:'工区名称',dataIndex:'GQMC',width:60,sortable:true},
        {header:'工区电话',dataIndex:'GQDH',width:50,sortable:true},
        {header:'工区传真',dataIndex:'GQCZ',width:50,sortable:true},
        {header:'工区地址',dataIndex:'GQDZ',width:70,sortable:true},
        {header:'机构类别',dataIndex:'JGLBMC',width:50,sortable:true},
        {header:'所属工队',dataIndex:'CJMC',width:50,sortable:true},
        {header:'所属电调台',dataIndex:'DDTMC',width:70,sortable:true},
        {header:'工区拼音码',dataIndex:'GQPYM',width:45,sortable:true},
        {header:'经度',dataIndex:'JD',width:40,sortable:true},
        {header:'纬度',dataIndex:'WD',width:40,sortable:true},
        {header:'删除',dataIndex:'GQDM',width:40,renderer:renderDel,fixed:true}
    ]);
     
     var planRecord = Ext.data.Record.create([
        {name:'GQDM',type:'string'},
    	{name:'GQJC',type:'string'},
    	{name:'GQMC',type:'string'},
    	{name:'GQDH',type:'string'},
    	{name:'GQCZ',type:'string'},
    	{name:'GQDZ',type:'string'},
    	{name:'JGLBDM',type:'string'},
    	{name:'CJDM',type:'string'},
    	{name:'DDTDM',type:'string'},
    	{name:'GQPYM',type:'string'},
    	{name:'JD',type:'string'},
    	{name:'WD',type:'string'},
    	{name:'JGLBMC',type:'string'},
    	{name:'CJMC',type:'string'},
    	{name:'DDTMC',type:'string'}
    	]);
    
       	
     //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
	 var store = new Ext.data.Store({
     	//proxy告诉我们从哪里获得数据
     	proxy: new Ext.data.HttpProxy({url:'gqzdList.jsp'}),     
     	baseParams:{whereclause:'1=1'},
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
        //title: '查询列表', 
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
    var my_gq="";
    simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
    	// simpleForm_Query.collapse();
    	simpleForm_Save.expand();
    	simpleForm_Save.buttons[0].setVisible(false);
    	simpleForm_Save.buttons[1].setVisible(true);
    	//simpleForm_Save.buttons[3].setVisible(true);
    	//simpleForm_Save.buttons[4].setVisible(true);
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	//alert(record);
    	//alert(record.get('albm'));
    	
    	simpleForm_Save.getForm().loadRecord(record);
    	my_gq=Ext.getCmp("GQ_DM").getValue();    	
    	Ext.getCmp("GQ_DM").disable();
    });	

    //grid.render();//渲染表格
    Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
	// form start   
   
	 	
	var GQDM_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct GQDM,GQDM from J_GYJC_GQZD&all=all'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	GQDM_store.load();
	
	var GQMC_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct GQMC,GQMC from J_GYJC_GQZD&all=all'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	GQMC_store.load();
	
	var SSCJ_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct CJDM,CJMC from J_GYJC_CJZD&all=all'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	SSCJ_store.load();
	
    var JGLB_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct JGLBDM,JGLBMC from J_GYJC_JGLB&all=all'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	JGLB_store.load();
	
	var SSDDT_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct DDTDM,DDTMC from J_GYJC_DDTZD&all=all'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	SSDDT_store.load();

    /*
     * ================  您当前的位置：事故案例---->案例查询 =======================
    */
	var simpleForm_Query = new Ext.FormPanel({
		renderTo : document.body,
       	title: '工区查询',
        labelAlign : 'left',
        //bodyStyle:'padding:5px 5px 0',
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
	                    		xtype : 'combo',// 控件的类型设置成combo
	                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
	                        	store : GQMC_store,
	                        	valueField : "value",
	                        	displayField : "text",
	                        	mode : 'local',// 数据是在本地
	                        	//forceSelection : true,// 必须选择一个选项
	                        	blankText : '请选择工区',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
	                        	emptyText : '选择工区',// 在没有选择值时显示为选择学历
	                        	hiddenName : 'GQMC',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
	                        	editable : true,// 该下拉列表只允许选择，不允许输入
	                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
	                        	//allowBlank : false,// 该选项值不允许为空
	                        	fieldLabel : '工区名称',// 控件的标题是学历
	                        	name : 'GQMC',// 再次提醒，name只是下拉列表的名称
	                        	id:'gq_mc',
	                        	anchor : '80%'// input的宽度是90%
    					}]	
		           },{
		                columnWidth : .3,
		                layout : 'form',
		                border : false,
		                items : [{
	                    		xtype : 'combo',// 控件的类型设置成combo
	                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
	                        	store : JGLB_store,
	                        	valueField : "value",
	                        	displayField : "text",
	                        	mode : 'local',// 数据是在本地
	                        	//forceSelection : true,// 必须选择一个选项
	                        	blankText : '请选择机构类别',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
	                        	emptyText : '选择机构类别',// 在没有选择值时显示为选择学历
	                        	hiddenName : 'JGLBDM',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
	                        	editable : true,// 该下拉列表只允许选择，不允许输入
	                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
	                        	//allowBlank : false,// 该选项值不允许为空
	                        	fieldLabel : '机构类别',// 控件的标题是学历
	                        	name : 'JGLBDM',// 再次提醒，name只是下拉列表的名称
	                        	id:'jglb_id',
	                        	anchor : '80%'// input的宽度是90%
	    					}]	
		           },{
	                    columnWidth : .3,
	                    layout : 'form',
	                    border : false,
	                    items : [{
                    		xtype : 'combo',// 控件的类型设置成combo
                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        	store : SSCJ_store,
                        	valueField : "value",
                        	displayField : "text",
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择工队名称',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        	emptyText : '选择工队名称',// 在没有选择值时显示为选择学历
                        	hiddenName : 'CJDM',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        	editable : false,// 该下拉列表只允许选择，不允许输入
                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        	//allowBlank : false,// 该选项值不允许为空
                        	fieldLabel : '所属工队名称',// 控件的标题是学历
                        	name : 'CJDM',// 再次提醒，name只是下拉列表的名称
                        	id:'cj_id',
                        	anchor : '80%'// input的宽度是90%
    					}]	
		           }]
			}],
           // 为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
              buttons : [{
               // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
               buttonlAlign : 'right',
 	                       text : '查询',
	                       handler : function() {
	                              if (!simpleForm_Query.form.isValid()) {return };
	                       		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
	                              if (simpleForm_Query.form.isValid()) {
	                                     //点击查询按钮后，修改whereclause的值，作为基本条件，翻页不会消失
										//需要大家把原来query.jsp中的拼whereclause的逻辑拿到这里来									
										var where="1=1 ";										
										if(Ext.getCmp("gq_mc").getValue()!=""&&Ext.getCmp("gq_mc").getValue()!="ALL" ){
											where=where+" and GQMC = '"+Ext.getCmp("gq_mc").getValue()+"'";
										}
										if(Ext.getCmp("jglb_id").getValue()!=""&&Ext.getCmp("jglb_id").getValue()!="ALL" ){
											where=where+" and a.JGLBDM ='"+Ext.getCmp("jglb_id").getValue()+"'";	
										}
										if(Ext.getCmp("cj_id").getValue()!=""&&Ext.getCmp("cj_id").getValue()!="ALL" ){
											where=where+" and a.CJDM ='"+Ext.getCmp("cj_id").getValue()+"'";	
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
                            },{
				                // 取消按钮就是简单的reset一下form的控件
				                text : '重置',
				                handler : function() {
				                       simpleForm_Query.form.reset();
				                       simpleForm_Save.collapse();
				                     }
				          }]
       });
     var SSCJ1_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct CJDM,CJMC from J_GYJC_CJZD'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	SSCJ1_store.load();
	
	 var JGLB1_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct JGLBDM,JGLBMC from J_GYJC_JGLB'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	JGLB1_store.load();

	var SSDDT1_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct DDTDM,DDTMC from J_GYJC_DDTZD'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	SSDDT1_store.load();
    /*==============案例归档---->事故报告新增========*/
	var simpleForm_Save = new Ext.FormPanel({
        renderTo : document.body,
        title: '工区添加',
        labelAlign : 'left',
        bodyStyle:'padding:5px 5px 0',
        //labelWidth: 75, 
        collapsible:true,
        titleCollapse:true,
        method:'POST',
        frame:true,
        autoWidth:true,
        //width: 1000,
        //fileUpload: true,
        items : [{
                 layout : 'column',// columnlayout
                       border : false,// 没有边框
                       labelSeparator : '：',// 标题的分隔符号我们用中文冒号代替英文的冒号（labelSeparator:'：'）。
                       // coulmnLayout里的控件将定义在items里
                      items : [{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                                 xtype : 'field',// 控件的类型为datefield
                                                                 fieldLabel : '工区代码',
                                                                 name : 'GQDM',
                                                                 id:'GQ_DM',
                                                                
                                                               //  format:'Y-m-d'
                                                                 blankText:"不能为空，请填写",
                                                                 allowBlank : false// 该选项值不允许为空
                                                          }]
                                     },{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                                 xtype : 'field',// 控件的类型为datefield
                                                                 fieldLabel : '工区简称',
                                                                 name : 'GQJC',
                                                                
                                                               //  format:'Y-m-d'
                                                                 blankText:"不能为空，请填写",
                                                                 allowBlank : false// 该选项值不允许为空
                                                          }]
                                     },{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                                 xtype : 'field',// 控件的类型为datefield
                                                                 fieldLabel : '工区名称',
                                                                 name : 'GQMC',
                                                                
                                                               //  format:'Y-m-d'
                                                                 blankText:"不能为空，请填写",
                                                                 allowBlank : false// 该选项值不允许为空
                                                          }]
                                     },{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                                 xtype : 'field',// 控件的类型为datefield
                                                                 fieldLabel : '工区电话',
                                                                 name : 'GQDH',
                                                                 allowBlank : false// 该选项值不允许为空
                                                          }]
                                     },{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                                 xtype : 'field',// 控件的类型为datefield
                                                                 fieldLabel : '工区传真',
                                                                 name : 'GQCZ',
                                                                 allowBlank : false// 该选项值不允许为空
                                                          }]
                                     },{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
						                    		xtype : 'combo',// 控件的类型设置成combo
						                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
						                        	store : JGLB1_store,
						                        	valueField : "value",
						                        	displayField : "text",
						                        	mode : 'local',// 数据是在本地
						                        	//forceSelection : true,// 必须选择一个选项
						                        	blankText : '请选择机构类别',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
						                        	emptyText : '选择机构类别',// 在没有选择值时显示为选择学历
						                        	hiddenName : 'JGLBDM',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
						                        	editable : false,// 该下拉列表只允许选择，不允许输入
						                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
						                        	//allowBlank : false,// 该选项值不允许为空
						                        	fieldLabel : '机构类别',// 控件的标题是学历
						                        	name : 'JGLBDM',// 再次提醒，name只是下拉列表的名称
						                        	anchor : '80%'// input的宽度是90%
							    					}]	
									 },{
                                                columnWidth : .3,
                                                layout : 'form',
                                            border : false,
                                            items : [{
						                    		xtype : 'combo',// 控件的类型设置成combo
						                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
						                        	store : SSCJ1_store,
						                        	valueField : "value",
						                        	displayField : "text",
						                        	mode : 'local',// 数据是在本地
						                        	//forceSelection : true,// 必须选择一个选项
						                        	blankText : '请选择工队名称',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
						                        	emptyText : '选择工队名称',// 在没有选择值时显示为选择学历
						                        	hiddenName : 'CJDM',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
						                        	editable : false,// 该下拉列表只允许选择，不允许输入
						                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
						                        	//allowBlank : false,// 该选项值不允许为空
						                        	fieldLabel : '所属工队名称',// 控件的标题是学历
						                        	name : 'CJDM',// 再次提醒，name只是下拉列表的名称
						                        	anchor : '80%'// input的宽度是90%
							    					}]	
									},{
                                                columnWidth : .3,
                                                layout : 'form',
                                            border : false,
                                            items : [{
						                    		xtype : 'combo',// 控件的类型设置成combo
						                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
						                        	store : SSDDT1_store,
						                        	valueField : "value",
						                        	displayField : "text",
						                        	mode : 'local',// 数据是在本地
						                        	//forceSelection : true,// 必须选择一个选项
						                        	blankText : '请选择电调台',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
						                        	emptyText : '选择电调台',// 在没有选择值时显示为选择学历
						                        	hiddenName : 'DDTDM',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
						                        	editable : false,// 该下拉列表只允许选择，不允许输入
						                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
						                        	//allowBlank : false,// 该选项值不允许为空
						                        	fieldLabel : '电调台',// 控件的标题是学历
						                        	name : 'DDTDM',// 再次提醒，name只是下拉列表的名称
						                        	anchor : '80%'// input的宽度是90%
							    					}]	
   									},{
                                                columnWidth : .3,
                                                layout : 'form',
                                            border : false,
                                            items : [{
                                                                 xtype : 'field',// 控件的类型为datefield
                                                                 fieldLabel : '工区拼音码',
                                                                 name : 'GQPYM',
                                                                 allowBlank : false// 该选项值不允许为空
                                                          }]
                                     },{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                                 xtype : 'field',// 控件的类型为datefield
                                                                 fieldLabel : '经度',
                                                                 name : 'JD',
                                                                 allowBlank : false// 该选项值不允许为空
                                                          }]
                                     },{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                                 xtype : 'field',// 控件的类型为datefield
                                                                 fieldLabel : '纬度',
                                                                 name : 'WD',
                                                                 allowBlank : false// 该选项值不允许为空
                                                          }]
                                     },{
                                            columnWidth : .9,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                                 xtype : 'field',// 控件的类型为datefield
                                                                 fieldLabel : '工区地址',
                                                                 name : 'GQDZ',
                                                                 anchor : '90%',
                                                                 allowBlank : false// 该选项值不允许为空
                                                          }]
                                     }]

                }],

        buttons: [{
            text: '新增',
                  handler : function() {
                  if (!simpleForm_Save.form.isValid()) {return };
                  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                  if (simpleForm_Save.form.isValid()) {
                     simpleForm_Save.form.doAction('submit', {
                                                 	waitMsg:'保存中,请稍侯...',  
                                                    url : 'gqzdSave.jsp',
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
                   }
                   // 如果想form按以前的老办法提交，可以在formpanel的定义中加入一下设置：
                   // onSubmit: Ext.emptyFn,
                   // submit: function() {
                   // this.getEl().dom.submit();}
                   // 第一个设置的目的是取消formpanel的默认提交函数。第二就是设置新的提交方式为旧方式提交。

            }
        }, {
            text : '修改',
            Enabled:false,
            handler : function() {
            	if (!simpleForm_Save.form.isValid()) {return };
           		if (simpleForm_Save.form.isValid()) {
                	simpleForm_Save.form.doAction('submit', {
                                               waitMsg:'修改中,请稍侯...',  
                                               url : 'gqzdUpdate.jsp?GQDM='+my_gq,
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		simpleForm_Save.buttons[0].setVisible(true);
                                               		simple_Grid.getStore().reload();
                                               		Ext.Msg.alert('消息',action.result.msg);
                     	                            Ext.getCmp("GQ_DM").enable();
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
                   simpleForm_Save.buttons[1].setVisible(false);
                   //simpleForm_Save.buttons[3].setVisible(false);
                   //simpleForm_Save.buttons[4].setVisible(false);
                   //simpleForm_Query.collapse();
                   // window.location.href="";
                  Ext.getCmp("GQ_DM").enable();
             }
        }]
    }); 
    
    //从session取值赋值给form字段;
	//Ext.Ajax.request({
		//url: 'GetSessionValue.jsp',
		//success: function(response, opts) 
			//{
			// simpleForm_Save.getForm().setValues([{albm: "albm",value: response.responseText} ]);
			//},		
		//failure: function(response, opts) {
      		//console.log('服务端失效的状态代码：' + response.status);
   			//}
	//});
    
    var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Save,simpleForm_Query,simple_Grid]
	});
	simpleForm_Save.collapse();
	simpleForm_Save.buttons[1].setVisible(false);
	//simpleForm_Save.buttons[3].setVisible(false);
	//simpleForm_Save.buttons[4].setVisible(false);
	Ext.getCmp("GQ_DM").enable();
 });
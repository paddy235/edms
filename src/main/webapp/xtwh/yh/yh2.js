Ext.onReady(function() {
	this.ryshow=function(value){
    	win1 = new Ext.Window({
        	width:455,
        	height:420,
        	layout:'column',
       		title: '用户工区关系维护',
        	closeAction:'hide',
        	plain: true,
        	autoScroll:false,

        	html:'<iframe style="width:800;height:420" src="yhgq.jsp?YHDM='+value+'"></iframe>',
        	buttons: [{
					text: '关闭',
					handler: function(){
			    	// win.hide();
					win1.hide(this);
					}
			}]
    	});
    	win1.show(this);
  	};
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    
    //alert("aaa");
    
 	//渲染返回html代码
 	 var renderXiangxi =function(value)
 	 {
 	     return '<a href="aa.jsp?id='+value+'">详细</a>';
 	 };
 	 var renderDel =function(value)
 	 {
 	     return '<a  href="yh_del.jsp?YHDM='+value+'">删除</a>';
 	 };
 
    //定义Grid表头
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
        //new Ext.grid.RowNumberer(),
        
        {header:'用户登录名',dataIndex:'YHDM',width:60},
        {header:'用户名称',dataIndex:'YHMC',width:70,sortable:true},
        {header:'用户IP',dataIndex:'YHIP',width:60,sortable:true},
        {header:'岗位名称',dataIndex:'GWMC',width:60,sortable:true},
        {header:'单位级别',dataIndex:'DWJB',width:60,sortable:true},
        {header:'所属单位',dataIndex:'DWMC',width:60,sortable:true},
        {header:'注册时间',dataIndex:'ZCSJ',width:60,sortable:true},
        {header:'登陆时间',dataIndex:'SESSION_DATE',width:60,sortable:true},
        {header:'会话ID号',dataIndex:'SESSIONID',width:60,sortable:true},
        {header:'备注信息',dataIndex:'BZ',width:60,sortable:true},  
        {header:'删除',dataIndex:'YHDM',width:60,renderer:renderDel,fixed:true}
    ]);
   
    
    var planRecord = Ext.data.Record.create([
    	{name:'YHDM',type:'string'},
    	{name:'YHMC',type:'string'},
    	{name:'YHMM',type:'string'},
    	{name:'YHIP',type:'string'},
    	{name:'GWMC',type:'string'},
    	{name:'DWJB',type:'string'},
    	{name:'DWDM',type:'string'},
    	{name:'ZCSJ',type:'string'},
    	{name:'SESSION_DATE',type:'string'},
    	{name:'SESSIONID',type:'string'},
    	{name:'BZ',type:'string'},
    	{name:'DDTDM',type:'string'},
    	{name:'DWMC',type:'string'}
    	]);
    	
    
    //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'yh_json.jsp'}),        
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
    var my_yhdm="";
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
    	my_yhdm=Ext.getCmp("YHDM_ID").getValue();    	
    	Ext.getCmp("YHDM_ID").disable();
    
    });	
    //grid.render();//渲染表格
     Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
	 // form start
    
    var YHDM_store = new Ext.data.Store({
		proxy : new Ext.data.HttpProxy({
				url : '../../share/combo_list.jsp?sql=select distinct YHDM,YHDM from J_GYJC_YH&all=all'
			}),
			reader : new Ext.data.JsonReader({root : 'root'
					},[{name : 'value',mapping : 'value'},
					   {name : 'text',mapping : 'text'}
					  ]
				)
	});
	YHDM_store.load();
	var YHMC_store = new Ext.data.Store({
		proxy : new Ext.data.HttpProxy({
				url : '../../share/combo_list.jsp?sql=select distinct YHMC,YHMC from J_GYJC_YH&all=all'
			}),
			reader : new Ext.data.JsonReader({root : 'root'
					},[{name : 'value',mapping : 'value'},
					   {name : 'text',mapping : 'text'}
					  ]
				)
	});
	YHMC_store.load();
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
 	var SSDWDM_store = new Ext.data.Store({
	proxy : new Ext.data.HttpProxy({
			url : '../../share/combo_list.jsp?sql=select DWDM,DWJC from v_j_gyjc_yhdw'
		}),
		reader : new Ext.data.JsonReader({root : 'root'
				},[{name : 'value',mapping : 'value'},
				   {name : 'text',mapping : 'text'}
				  ]
			)
	});
	SSDWDM_store.load();

 	var SSDWMC_store = new Ext.data.Store({
	proxy : new Ext.data.HttpProxy({
			url : '../../share/combo_list.jsp?sql=select DWDM,DWMC from v_j_gyjc_yhdw&all=all'
		}),
		reader : new Ext.data.JsonReader({root : 'root'
				},[{name : 'value',mapping : 'value'},
				   {name : 'text',mapping : 'text'}
				  ]
			)
	});
	SSDWMC_store.load();
	var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '用户查询',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 600,
              collapsible:true,
              titleCollapse:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              labelWidth : 80,
              
              
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
								        		xtype : 'combo',// 控件的类型设置成combo
								           		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
								            	store : YHDM_store,
								            	valueField : "value",
								            	displayField : "text",
								            	mode : 'local',// 数据是在本地
								            	//forceSelection : true,// 必须选择一个选项
								            	blankText : '请选择用户名',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
								            	emptyText : '选择用户名',// 在没有选择值时显示为选择学历
								            	hiddenName : 'YHDM_Q',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
								            	editable : true,// 该下拉列表只允许选择，不允许输入
								            	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
								            	//allowBlank : false,// 该选项值不允许为空
								            	fieldLabel : '用户登录名',// 控件的标题是学历
								            	name : 'YHDM_Q',// 再次提醒，name只是下拉列表的名称
								            	id:'yhdm',
								            	anchor : '80%'// input的宽度是90%
											}]
                                     },{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
								        		xtype : 'combo',// 控件的类型设置成combo
								           		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
								            	store : YHMC_store,
								            	valueField : "value",
								            	displayField : "text",
								            	mode : 'local',// 数据是在本地
								            	//forceSelection : true,// 必须选择一个选项
								            	blankText : '请选择用户名称',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
								            	emptyText : '选择用户名称',// 在没有选择值时显示为选择学历
								            	hiddenName : 'YHMC',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
								            	editable : true,// 该下拉列表只允许选择，不允许输入
								            	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
								            	//allowBlank : false,// 该选项值不允许为空
								            	fieldLabel : '用户名称',// 控件的标题是学历
								            	name : 'YHMC',// 再次提醒，name只是下拉列表的名称
								            	id:'yhmc_q',
								            	anchor : '80%'// input的宽度是90%
											}]
                                     },{
			                                columnWidth : .3,
			                                layout : 'form',
			                                border : false,
			                                items : [{
								        		xtype : 'combo',// 控件的类型设置成combo
								           		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
								            	store : SSDWMC_store,
								            	valueField : "value",
								            	displayField : "text",
								            	mode : 'local',// 数据是在本地
								            	//forceSelection : true,// 必须选择一个选项
								            	blankText : '请选择所属单位',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
								            	emptyText : '选择所属单位',// 在没有选择值时显示为选择学历
								            	hiddenName : 'DWDM',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
								            	editable : true,// 该下拉列表只允许选择，不允许输入
								            	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
								            	//allowBlank : false,// 该选项值不允许为空
								            	fieldLabel : '单位代码',// 控件的标题是学历
								            	name : 'DWDM',// 再次提醒，name只是下拉列表的名称
								            	id:'dwmc_id',// 再次提醒，name只是下拉列表的名称
								            	anchor : '80%'// input的宽度是90%
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
										if(Ext.getCmp("yhdm").getValue()!=""&&Ext.getCmp("yhdm").getValue()!="ALL" ){
											where=where+" and YHDM like '%"+Ext.getCmp("yhdm").getValue()+"%'";
										}
										if(Ext.getCmp("yhmc_q").getValue()!=""&&Ext.getCmp("yhmc_q").getValue()!="ALL" ){
											where=where+" and YHMC like'%"+Ext.getCmp("yhmc_q").getValue()+"%'";	
										}
										if(Ext.getCmp("dwmc_id").getValue()!=""&&Ext.getCmp("dwmc_id").getValue()!="ALL" ){
											where=where+" and a.DWDM ='"+Ext.getCmp("dwmc_id").getValue()+"'";	
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
                            }]
       });
   
   
   
   //Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
	 
	 
	 // form start
	var simpleForm_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '用户添加',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 600,
              collapsible:true,
              titleCollapse:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              labelWidth : 80,
              
              
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
                                                         xtype : 'textfield',
                                                         fieldLabel : '用户登录名',
                                                         name : 'YHDM',
                                                         id:'YHDM_ID',
                                                         anchor : '80%',
                                                         allowBlank : false// 该选项值不允许为空
                                                          }]
                                     },{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',
                                                         fieldLabel : '用户名称',
                                                         name : 'YHMC',
                                                         anchor : '80%',
                                                         allowBlank : false// 该选项值不允许为空
                                                          }]
                                     },{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',
                                                         inputType:'password', //密码类型
                                                         fieldLabel : '用户密码',
                                                         name : 'YHMM',
                                                         anchor : '80%',
                                                         allowBlank : false// 该选项值不允许为空
                                                          }]
                                     },{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'field',// 控件的类型为datefield
                                                         fieldLabel : '用户IP',
                                                         name : 'YHIP',
                                                         anchor : '80%',
                                                         allowBlank : false// 该选项值不允许为空
                                                          }]
                                     },{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'field',// 控件的类型为datefield
                                                         fieldLabel : '岗位名称',
                                                         name : 'GWMC',
                                                         anchor : '80%',
                                                         allowBlank : false// 该选项值不允许为空
                                                          }]
                                     },{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                   xtype : 'combo',// 控件的类型设置成combo
                                                   // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                                                   store : new Ext.data.SimpleStore({
                                                          // 通过一个数组定义了returnValue和displayText两个字段。retrunValue字段指定是提交给后台的值，displayText字段指定是在下拉中显示的选择值。
                                                          fields : ["returnValue", "displayText"],
                                                          // 定义了几组数据.每组数据都是根据fiedls的定义来组成的，数组里第一个值就是retrunValue的值，第二个值就是displayText的值，例如[1,'小学']，就表示retrunValue是1，displayText是小学。
                                                          data : [['1', '神朔铁路分公司'], ['2', '神朔铁路分公司调度指挥所'], 
                                                                  ['3', '电调台'], ['4', '运输段'], 
                                                                  ['5', '工队'], ['6', '工区或者变电所'], ['7', '行调']]
                                                   			}),
		                                                   valueField : "returnValue",// 设置下拉选择框的值
		                                                   displayField : "displayText",// 设置下拉选择框的显示文本
		                                                   mode : 'local',// 数据是在本地
		                                                   forceSelection : true,// 必须选择一个选项
		                                                   blankText : '请选择单位级别',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
		                                                   emptyText : '请选择单位级别',// 在没有选择值时显示为选择学历
		                                                   hiddenName : 'DWJB',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
		                                                   editable : false,// 该下拉列表只允许选择，不允许输入
		                                                   triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
		                                                   allowBlank : false,// 该选项值不允许为空
		                                                   fieldLabel : '单位级别',// 控件的标题是学历
		                                                   name : 'JGLB',// 再次提醒，name只是下拉列表的名称
		                                                   id : 'dwdj_id',// 再次提醒，name只是下拉列表的名称
		                                                   anchor : '80%',// input的宽度是90%
		                                                   listeners:{"select":function(combo, planRecord_gq,index){
                                                        var sldw=Ext.getCmp("dwdj_id").value;
                                                        //alert(sldw);
                                                   		var combo2 = Ext.getCmp('DWDM_id'); 
                                                   		combo2.enable();      
              											combo2.reset();   
              											//combo2.disable();
              											sql_qjzc="select DWDM,DWJC from v_j_gyjc_yhdw where jb=\'"+sldw+"\'";//
              											//alert(sql_qjzc);
              										    combo2.store.proxy = new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_qjzc});
              										    combo2.store.load();
                                                   		}
                                                   }
                                            }]
                                     },{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
								        		xtype : 'combo',// 控件的类型设置成combo
								           		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
								            	store : SSDWDM_store,
								            	valueField : "value",
								            	displayField : "text",
								            	mode : 'local',// 数据是在本地
								            	//forceSelection : true,// 必须选择一个选项
								            	blankText : '请选择所属单位',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
								            	emptyText : '选择所属单位',// 在没有选择值时显示为选择学历
								            	hiddenName : 'DWDM',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
								            	editable : true,// 该下拉列表只允许选择，不允许输入
								            	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
								            	//allowBlank : false,// 该选项值不允许为空
								            	fieldLabel : '单位代码',// 控件的标题是学历
								            	name : 'DWDM',// 再次提醒，name只是下拉列表的名称
								            	id : 'DWDM_id',// 再次提醒，name只是下拉列表的名称
								            	anchor : '80%'// input的宽度是90%
											}]
                                     },{
                                            columnWidth : .6,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                                 xtype : 'field',// 控件的类型为datefield
                                                                 fieldLabel : '备注信息',
                                                                 name : 'BZ',
                                                                 anchor : '90%',
                                                                 height:'50'
                                                                 
                                                          }]
                                     }]

                }],
              // 为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
        buttons: [{
            text: '新增',
             handler : function() {
                  if (!simpleForm_Save.form.isValid()) {return };
                  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                  if (simpleForm_Save.form.isValid()) {
                     simpleForm_Save.form.doAction('submit', {
                                                 	waitMsg:'保存中,请稍侯...',  
                                                    url : 'Save.jsp',
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
                                               url : 'Update.jsp?YHDM='+my_yhdm,
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		simpleForm_Save.buttons[0].setVisible(true);
                                               		simple_Grid.getStore().reload();
                                               		Ext.Msg.alert('消息',action.result.msg);
                                               		Ext.getCmp("YHDM_ID").enable();
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
                   Ext.getCmp("YHDM_ID").enable();
             }
        },  {
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
             text : '权限设置',
              handler : function() {
                                        //var win;
                                         
							      		qxsz(document.getElementById ("YHDM_ID").value);
								        
								        //alert(document.getElementById("id").value);
								        //simpleForm_AddGdb.getForm().setValues([{id: 'jhid',value:document.getElementById("id").value}]);

                                   }
                            },  {
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
            text : '工区设置',
            handler : function() {
                                        //var win;
                                         
								       ryshow(document.getElementById ("YHDM_ID").value);

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
	Ext.getCmp("YHDM_ID").enable();
 });
 
//---------------------------------弹出新窗口--------------------------------
//--------------------------------checkbox使用-------------------------------
var win;
var mark=0;
function qxsz(yh){
	Ext.QuickTips.init();
    var planRecord = Ext.data.Record.create([    	
    	{name:'JSDM',type:'string'}
    	]);
    //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store_yhjs = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'yhjs_json.jsp?YHDM='+yh}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalRecords',
            root: 'root',
            successProperty :'success'
        },planRecord)
    });	
    if(mark==0){
    	mark=1;
    var jsForm_Save = new Ext.FormPanel({
        renderTo : document.body,        
        labelAlign : 'left',
        bodyStyle:'padding:5px 5px 0',
        collapsible:false,
        titleCollapse:false,
        method:'POST',
        frame:true,
        autoWidth:true,
        items : [{
        bodyStyle: 'padding-right:5px;',
        items: {
            xtype: 'fieldset',
            title: '角色设置',
            autoHeight: true,
            defaultType: 'checkbox', // each item will be a checkbox
            items: [{
                xtype: 'field',
                name: 'YHMC',
                id: 'YHMC',
                fieldLabel: '用户名称',
                value:yh,
                disabled:true
            }, {
                fieldLabel: '用户角色',
                boxLabel: '管理员',
                name: 'ADMIN',
                id: 'ADMIN'
            }, {
                fieldLabel: '',
                labelSeparator: '',
                boxLabel: '审批',
                name: 'APPROVE',
                id: 'APPROVE'
            }, {
                checked: false,
                fieldLabel: '',
                labelSeparator: '',
                boxLabel: '编辑',
                name: 'EDIT',
                id: 'EDIT'
            }, {
                checked: false,
                fieldLabel: '',
                labelSeparator: '',
                boxLabel: '电调主任',
                name: 'BRWOSE',
                id: 'BRWOSE'
            }, {
                checked: false,
                fieldLabel: '',
                labelSeparator: '',
                boxLabel: '抢修辅助',
                name: 'QXFZ',
                id: 'QXFZ'
            }, {
                checked: false,
                fieldLabel: '',
                labelSeparator: '',
                boxLabel: '调度长',
                name: 'DDZ',
                id: 'DDZ'
            }]
            
        },        
        buttons: [{
                 	text: '保存',
                 	scope:this,
	               handler : function() {
	                      if (!jsForm_Save.form.isValid()) {return };
	                   		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
	                          if (jsForm_Save.form.isValid()) {
	                                 jsForm_Save.form.doAction('submit', {
	             					  waitMsg:'保存中,请稍侯...',  
	                                  url : 'yhjs_Save.jsp?YHMC='+Ext.getCmp("YHMC").getValue(),
	                                  method : 'post',
	                                  params : '',   success : function(form, action) {
	                                  		Ext.Msg.alert('消息',action.result.msg);
	                                  },
	                                  // 定义failure函数，就是网络通讯存在问题的时候将显示错误信息。
	                                  failure : function() {
	                                         Ext.Msg.alert('操作', '保存失败！');
	                                         this.disabled = false;
	                                  }
	                           });
	                      }
	               }       
             },{
                 text: '关闭',
                 scope:this,
                 handler:function(){win.hide(win);}
             }]
       }]
    });     
    }
    // create the window on the first click and reuse on subsequent clicks
	if(!win){		
		win = new Ext.Window({		
			width:400,
	        title: '权限设置',
			layout:'column',
	        height:350, 
	        plain: true,
	        closable:false,
	        autoScroll:true,
	        items: [jsForm_Save]						
		});
    }
    Ext.getCmp("YHMC").setValue(yh);
    Ext.getCmp("ADMIN").setValue(false);
    Ext.getCmp("APPROVE").setValue(false);
    Ext.getCmp("EDIT").setValue(false);
    Ext.getCmp("BRWOSE").setValue(false);
    Ext.getCmp("QXFZ").setValue(false);
    Ext.getCmp("DDZ").setValue(false);
    
    store_yhjs.load({callback:function(records,success,totalRecords){
		//alert(records[i].data.JSDM.toString());
		for(i=0;i<records.length;i++){
			//alert(records[i].data.JSDM.toString());
			Ext.getCmp(records[i].data.JSDM.toString()).setValue(true);
		}
		
	}});
	win.show(this);						        
}
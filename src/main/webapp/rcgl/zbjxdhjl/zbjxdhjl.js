Ext.onReady(function() {
		this.ryshow=function(value){
    	win1 = new Ext.Window({
        	width:820,
        	height:500,
        	layout:'column',
       		title: '主倒变记录',
        	closeAction:'hide',
        	plain: true,
        	autoScroll:false,

        	html:'<iframe style="width:800;height:420" src="../../tjbb/query/zbjxdhjl.jsp?where='+value+'"></iframe>',
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

 	 var renderDel =function(value)
 	 {
 	     return '<a  href="zbjxdhjl_del.jsp?JLID='+value+'">删除</a>';
 	 };
 
    //定义Grid表头
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
        //new Ext.grid.RowNumberer(),
        
        {header:'所别',dataIndex:'GQMC',width:10},
        {header:'日期',dataIndex:'DHRQ',width:18},
        {header:'运行情况',dataIndex:'YXQK',width:60},
        {header:'删除',dataIndex:'JLID',width:60,renderer:renderDel,fixed:true}
    ]);
   
    	
    var planRecord = Ext.data.Record.create([
    	{name:'JLID',type:'int'},
    	{name:'BDS',type:'string'},
    	{name:'DHRQ',type:'string'},
    	{name:'YXQK',type:'string'},
    	{name:'GQMC',type:'string'}
    	]);
    	
    
    //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'zbjxdhjl_json.jsp'}),        
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
     var xdt_store = new Ext.data.Store({
	 proxy : new Ext.data.HttpProxy({
			url : '../../share/combo_list.jsp?sql=select distinct GQDM,GQMC from J_GYJC_GQZD where JGLBDM=2&all=all'
		}),
		reader : new Ext.data.JsonReader({root : 'root'
				},[{name : 'value',mapping : 'value'},
				   {name : 'text',mapping : 'text'}
				  ]
			)
	});
	xdt_store.load();
	
	 var xdt1_store = new Ext.data.Store({
	 proxy : new Ext.data.HttpProxy({
			url : '../../share/combo_list.jsp?sql=select distinct GQDM,GQMC from J_GYJC_GQZD where JGLBDM=2'
		}),
		reader : new Ext.data.JsonReader({root : 'root'
				},[{name : 'value',mapping : 'value'},
				   {name : 'text',mapping : 'text'}
				  ]
			)
	});
	xdt1_store.load();
	
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
              title : '倒主变查询',
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
                                             xtype : 'field',// 控件的类型为datefield
                                             fieldLabel : '开始日期',
                                             name : 'DHRQ',
                                             id:'rq2',
                                             anchor : '90%',
                                             //value: new Date,
                                             listeners: {
						                        		'focus': function(){WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}
						                   	}
						                   // format:'Y-m-d H:i:s'
                                      }]
                             },{
                                    columnWidth : .3,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                             xtype : 'field',// 控件的类型为datefield
                                             fieldLabel : '结束日期',
                                             name : 'DHRQ',
                                             id:'rq3',
                                             anchor : '90%',
                                             //value: new Date,
                                             listeners: {
						                        		'focus': function(){WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}
						                   	}
						                   // format:'Y-m-d H:i:s'
                                      }]
                             },{
                                    columnWidth : .3,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                            xtype : 'combo',// 控件的类型设置成combo
										           		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
										            	store : xdt_store,
										            	valueField : "value",
										            	displayField : "text",
										            	mode : 'local',// 数据是在本地
										            	//forceSelection : true,// 必须选择一个选项
										            	blankText : '请选变电所',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
										            	emptyText : '选择变电所',// 在没有选择值时显示为选择学历
										            	hiddenName : 'BDS',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
										            	editable : false,// 该下拉列表只允许选择，不允许输入
										            	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
										            	//allowBlank : false,// 该选项值不允许为空
										            	fieldLabel : '变电所名称',// 控件的标题是学历
										            	name : 'BDS',// 再次提醒，name只是下拉列表的名称
										            	id:'bds1',
										            	anchor : '90%'// input的宽度是90%
                                      }]
                             },{
                                    columnWidth : .3,
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
										            	fieldLabel : '电调台',// 控件的标题是学历
										            	name : 'DDT',// 再次提醒，name只是下拉列表的名称
										            	id:'ddt1',
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
											where=where+" and DHRQ>=to_date('"+Ext.getCmp("rq2").getValue()+"','yyyy-mm-dd hh24:mi')";
										}
										if(Ext.getCmp("rq3").getValue()!=""  ){
											where=where+" and DHRQ<=to_date('"+Ext.getCmp("rq3").getValue()+"','yyyy-mm-dd hh24:mi')";
										}
										if(Ext.getCmp("bds1").getValue()!=""&&Ext.getCmp("bds1").getValue()!="ALL"  ){
											where=where+" and a.BDS ='"+Ext.getCmp("bds1").getValue()+"'";	
										}
										if(Ext.getCmp("ddt1").getValue()!=""&&Ext.getCmp("ddt1").getValue()!="ALL"  ){
											where=where+" and b.DDTdm ='"+Ext.getCmp("ddt1").getValue()+"'";	
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
              title : '倒主变添加',
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
                       items : [{xtype:'hidden',name:'JLID',id:'jl_id'},{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
										        		xtype : 'combo',// 控件的类型设置成combo
										           		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
										            	store : xdt1_store,
										            	valueField : "value",
										            	displayField : "text",
										            	mode : 'local',// 数据是在本地
										            	//forceSelection : true,// 必须选择一个选项
										            	blankText : '请选变电所',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
										            	emptyText : '选择变电所',// 在没有选择值时显示为选择学历
										            	hiddenName : 'BDS',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
										            	editable : false,// 该下拉列表只允许选择，不允许输入
										            	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
										            	//allowBlank : false,// 该选项值不允许为空
										            	fieldLabel : '变电所名称',// 控件的标题是学历
										            	name : 'BDS',// 再次提醒，name只是下拉列表的名称
										            	anchor : '90%'// input的宽度是90%
														}]
                                    		 },{
			                                    columnWidth : .3,
			                                    layout : 'form',
			                                    border : false,
			                                    items : [{
			                                             xtype : 'field',// 控件的类型为datefield
			                                             fieldLabel : '倒换日期',
			                                             name : 'DHRQ',
			                                             anchor : '90%',
			                                             //value: new Date,
			                                             listeners: {
									                        		'focus': function(){WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}
									                   	}
									                   // format:'Y-m-d H:i:s'
			                                      }]
                                                 },{
                                                columnWidth : .3,
                                                layout : 'form',
                                                border : false,
                                                items : [{
                                                             xtype : 'textfield',// 控件的类型为datefield
                                                             fieldLabel : '运行情况',
                                                             name : 'YXQK',
                                                             anchor : '90%',
                                                           //  format:'Y-m-d'
                                                             allowBlank : false// 该选项值不允许为空
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
                     // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                     //this.disabled = true;
                     // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
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
                                               url : 'Update.jsp',
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
                   simpleForm_Save.buttons[1].setVisible(false);
                   //simpleForm_Save.buttons[3].setVisible(false);
                   //simpleForm_Save.buttons[4].setVisible(false);
                   //simpleForm_Query.collapse();
                   // window.location.href="";
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
	
 });
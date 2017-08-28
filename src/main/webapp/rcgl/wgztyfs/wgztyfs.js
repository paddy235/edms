Ext.onReady(function() {
	
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
  
       
    //定义Grid表头
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
        //new Ext.grid.RowNumberer(),
        
        {header:'序号',dataIndex:'xh',width:40,fixed:true},
        {header:'序列号',dataIndex:'seq',width:40,hidden:true},
		{header:'封锁时间',dataIndex:'fssj',width:40,sortable:true},
		{header:'封锁地点',dataIndex:'fsdd',width:60,sortable:true},
        {header:'封锁原因',dataIndex:'fsyy',width:60,sortable:true},
        {header:'封锁内容',dataIndex:'fsnr',width:100,sortable:true},
        {header:'登记人',dataIndex:'djr',width:40,sortable:true},
        {header:'解除时间',dataIndex:'jcsj',width:40,sortable:true},        
        {header:'填写人',dataIndex:'jcr',width:30,sortable:true},
	    {header:'备注',dataIndex:'bz',width:30,sortable:true}
    ]);
   
    
    var planRecord = Ext.data.Record.create([
    	{name:'xh',type:'int'},
    	{name:'seq',type:'int'},
    	{name:'fssj',type:'string'},
    	{name:'fsdd',type:'string'},
    	{name:'fsyy',type:'string'},
    	{name:'fsnr',type:'string'},
    	{name:'djr',type:'string'},
    	{name:'jcsj',type:'string'},    	
    	{name:'jcr',type:'string'},
    	{name:'bz',type:'string'}
	]);    	
    
    //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'wgztyfs_json.jsp'}),        
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
        
    });
   	//Grid上触发事件
   	//grid.addListener('cellClick',cellClick);                     
    //显示在html中id为container的层中
    //grid.render();//渲染表格
    
    Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
	// form start
	var simpleForm_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '接触网故障停用封锁记录管理—登记',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 800,
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
                                   items : [{xtype:'hidden',name:'seq'},												
										         {
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '封锁时间',
                                                                             name : 'fssj',
                                                                             anchor : '90%',
                                                                             //value: new Date,
                                                                             listeners: {"focus": function(){
                                                                                                     WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}
                                                                                                 }
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                }]
                                                  }]
                              },{               
        			                      layout : 'column',
			                              border : false,
			                              labelSeparator : '：',
			                              items : [{
			                                                   columnWidth : .97,
			                                                   layout : 'form',
			                                                   border : false,
			                                                   items : [{
			                                                                        xtype : 'textarea',// 控件的类型为datefield
			                                                                        fieldLabel : '封锁地点',
			                                                                        name : 'fsdd',
			                                                                        anchor : '90%',
			                                                                        height:20
			                                                                        //format:'Y-m-d'
			                                                           }]
			                                            }]
                     
                               },{          
			                              layout : 'column',
			                              border : false,
			                              labelSeparator : '：',
			                              items : [{
			                                                   columnWidth : .97,
			                                                   layout : 'form',
			                                                   border : false,
			                                                   items : [{
			                                                                        xtype : 'textarea',// 控件的类型为datefield
			                                                                        fieldLabel : '封锁原因',
			                                                                        name : 'fsyy',
			                                                                        anchor : '90%',
			                                                                        height:100
			                                                                        //format:'Y-m-d'
			                                                           }]
			                                            }]
                     
                               },{               
                   
			                              layout : 'column',
			                              border : false,
			                              labelSeparator : '：',
			                              items : [{
			                                                   columnWidth : .97,
			                                                   layout : 'form',
			                                                   border : false,
			                                                   items : [{
			                                                                        xtype : 'textarea',// 控件的类型为datefield
			                                                                        fieldLabel : '封锁内容',
			                                                                        name : 'fsnr',
			                                                                        anchor : '90%',
			                                                                        height:100
			                                                                        //format:'Y-m-d'
			                                                           }]
			                                            }]
                     
                               },{               
                   
			                              layout : 'column',
			                              border : false,
			                              labelSeparator : '：',
			                              items : [{
			                                                   columnWidth : .97,
			                                                   layout : 'form',
			                                                   border : false,
			                                                   items : [{
			                                                                        xtype : 'textarea',// 控件的类型为datefield
			                                                                        fieldLabel : '备注',
			                                                                        name : 'bz',
			                                                                        anchor : '90%',
			                                                                        height:100
			                                                                        //format:'Y-m-d'
			                                                           }]
			                                            }]
                     
                               },{   
					                            
					                                   layout : 'column',
					                                   border : false,
					                                   labelSeparator : '：',
					                                   items : [{                                                        
					                                                        columnWidth : .3,
					                                                        layout : 'form',
					                                                        border : false,
					                                                        items : [{
					                                                                             xtype : 'textfield',// 控件的类型为datefield
					                                                                             fieldLabel : '登记人',
					                                                                             name : 'djr',
					                                                                             anchor : '90%'
					                                                                             //allowBlank : false// 该选项值不允许为空
					                                                                      }]
					                                                 },{
					                                                        columnWidth : .3,
					                                                        layout : 'form',
					                                                        border : false,
					                                                        items : [{
					                                                                             xtype : 'textfield',// 控件的类型为datefield
					                                                                             fieldLabel : '解除时间',
					                                                                             name : 'jcsj',
					                                                                             anchor : '90%',
					                                                                            // value: new Date,
                                                                                                 listeners: {"focus": function(){
                                                                                                     WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}
                                                                                                 }
					                                                                             //allowBlank : false// 该选项值不允许为空
					                                                                      }]
					                                                 },{
					                                                       columnWidth : .3,
					                                                       layout : 'form',
					                                                       border : false,
					                                                       items : [{
					                                                                            xtype : 'textfield',// 控件的类型为datefield
					                                                                            fieldLabel : '填写人',
					                                                                            name : 'jcr',
					                                                                            anchor : '90%'
					                                                                            //allowBlank : false// 该选项值不允许为空
					                                                                     }]
					                                                }]
	                           }],
	                                                
              //为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
              buttons : [{
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
                                   text : '添加',
                                   handler : function() {
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                                          if (simpleForm_Save.form.isValid()) {
                                                 // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                                                 //this.disabled = true;
                                                 // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                                                 simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'保存中,请稍侯...',  
                                                                      url : 'wgztyfs_save.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                                                                      // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                                                                      success : function(form, action) {
                                                                             // 例如返回的json结构是"{success:true,data:'成功保存！'}"，
                                                                             //Ext.Msg.alert('操作',action.result.data);
                                                                      		Ext.Msg.alert('消息',action.result.msg);
                                                                      		//simpleForm_Query.form.reset();
                                                                      		// window.location.href='zyjhsq.jsp';
                                                                      		//simpleForm_Save.collapse();
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

                                   // 取消按钮就是简单的reset一下form的控件
                                   text : '修改',
                                   disabledClass:'x-item-disabled',
                                   handler : function() {
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                                          if (simpleForm_Save.form.isValid()) {
                                                 // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                                                 //this.disabled = true;
                                                 // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                                                 simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'修改中,请稍侯...',  
                                                                      url : 'wgztyfs_update.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                                                                      // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                                                                      success : function(form, action) {
                                                                             // 例如返回的json结构是"{success:true,data:'成功保存！'}"，
                                                                             //Ext.Msg.alert('操作',action.result.data);
                                                                      		Ext.Msg.alert('消息',action.result.msg);
                                                                      		//simpleForm_Query.form.reset();
                                                                      		
                                                                      		simple_Grid.getStore().reload();
                                                                      		
                                                                      },
                                                                      // 定义failure函数，就是网络通讯存在问题的时候将显示错误信息。
                                                                      failure : function() {
                                                                             Ext.Msg.alert('操作', '修改失败！');
                                                                             this.disabled = false;
                                                                      }
                                                               });
                                          }
                                    
                                   }
                            }, {

                                   // 取消按钮就是简单的reset一下form的控件
                                   text : '重置',
                                   handler : function() {
                                          simpleForm_Save.form.reset();
                                          //simpleForm_Query.collapse();
                                          
                                          simpleForm_Save.buttons[1].setVisible(false);
    									  simpleForm_Save.buttons[3].setVisible(false);
                                   }
                            }, {
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
                                    text : '删除',
                                    disabledClass:'x-item-disabled',
                                   	handler : function() {
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                                          if (simpleForm_Save.form.isValid()) {
                                                 // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                                                 //this.disabled = true;
                                                 // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                                                 simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'删除中,请稍侯...',  
                                                                      url : 'wgztyfs_delete.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                                                                      // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                                                                      success : function(form, action) {
                                                                             // 例如返回的json结构是"{success:true,data:'成功保存！'}"，
                                                                             //Ext.Msg.alert('操作',action.result.data);
                                                                      		Ext.Msg.alert('消息',action.result.msg);
                                                                      		simpleForm_Save.collapse();
                                                                      		simpleForm_Save.form.reset();
                                                                      		simpleForm_Save.buttons[1].setVisible(false);
    																		simpleForm_Save.buttons[3].setVisible(false);

                                                                      		
                                                                      		simple_Grid.getStore().reload();
                                                                      		
                                                                      },
                                                                      // 定义failure函数，就是网络通讯存在问题的时候将显示错误信息。
                                                                      failure : function() {
                                                                             Ext.Msg.alert('操作', '删除失败！');
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
                            }]
       });

//	alert("1");
	    
	var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '接触网故障停用封锁记录管理—查询',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 600,
              titleCollapse:true,
              collapsible:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              labelWidth : 80,
              items : [{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [ {
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '开始时间',
                                                                             name : 'begin',
                                                                             id:'begin',
                                                                             anchor : '90%',
                                                                             listeners: {"focus": function(){
                                                                                                     WdatePicker({dateFmt:'yyyy-MM-dd'})}
                                                                                                 }
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                             
                                                                      }]
                                                 },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '结束时间',
                                                                             name : 'end',
                                                                             id:'end',
                                                                             anchor : '90%',
                                                                             listeners: {"focus": function(){
                                                                                                     WdatePicker({dateFmt:'yyyy-MM-dd'})}
                                                                                                 }
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                             
                                                                      }]
                                                 },{               

			                                                   columnWidth : .30,
			                                                   layout : 'form',
			                                                   border : false,
			                                                   items : [{
			                                                                        xtype : 'textfield',// 控件的类型为datefield
			                                                                        fieldLabel : '封锁地点',
			                                                                        name : 'fsdd',
			                                                                        anchor : '90%',
			                                                                        id:'fsdd2',
			                                                                        height:20
			                                                                        //format:'Y-m-d'
			                                                           }]
			                                            
                     
                               }]
                            }                            
                                                         ],
              // 为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
              buttons : [{
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
                                   text : '查询',
                                   handler : function() {
                                          if (!simpleForm_Query.form.isValid()) {return };
                                   		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                                          if (simpleForm_Query.form.isValid()) {
											  	var where="1=1";										
											 	if(Ext.getCmp("begin").getValue()!="" && Ext.getCmp("begin").getValue()!=null ){
											 	
												where=where+" and fssj >= to_date('" + Ext.getCmp("begin").getValue() + "','yyyy-mm-dd') ";
											    
											}
											if(Ext.getCmp("end").getValue()!=null && Ext.getCmp("end").getValue()!="" ){
												where=where+" and fssj <= to_date('" + Ext.getCmp("end").getValue() + "','yyyy-mm-dd') ";
												}
												  if(Ext.getCmp("fsdd2").getValue()!=""&&Ext.getCmp("fsdd2").getValue()!="ALL" ){
													where=where+" and fsdd like'%"+Ext.getCmp("fsdd2").getValue()+"%'";	
												}
												store.baseParams.whereclause =where; 
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
                                          //simpleForm_Save.collapse();
                                         
                                   }
                            },{

                                   // 取消按钮就是简单的reset一下form的控件
                                   text : '查看报表',
                                   handler : function() {
                                          window.location.href='../../tjbb/query/wgztyfs.jsp?ymd1=' + Ext.getCmp("begin").getValue() + "&ymd2=" + Ext.getCmp("end").getValue(); 
                                        //  alert('../../tjbb/query/wgztyfs.jsp?ymd1='+Ext.getCmp("begin").getValue() +"&ymd2="+Ext.getCmp("end").getValue);
                                   }
                            }]
       });    
       
       
    //Grid上触发事件
    simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
    	// simpleForm_Query.collapse();
    	simpleForm_Save.expand();
    	
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	//alert(rowIndex);
    	//alert(record.get('jhsj')+' '+record.get('jhh')+' '+record.get('dwid'));
    	simpleForm_Save.buttons[1].setVisible(true);
        simpleForm_Save.buttons[3].setVisible(true);
            // simpleForm_Save.buttons[0].setVisible(false);
           // simpleForm_Save.buttons[1].setVisible(false);
             //simpleForm_Save.buttons[2].setVisible(false);
    	//simpleForm_Save.buttons[3].setVisible(false);
    	simpleForm_Save.getForm().loadRecord(record);
    });	
    	
    //从session取值赋值给form字段;
	/*Ext.Ajax.request({
		url: 'getSessionValue.jsp',
		success: function(response, opts) 
			{
			 simpleForm_Save.getForm().setValues([{id: "dwmc",value: response.responseText} ]);
			},		
		failure: function(response, opts) {
      		console.log('服务端失效的状态代码：' + response.status);
   			}
	});
    */
    var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		items: [simpleForm_Save,simpleForm_Query,simple_Grid]
	});
    
    simpleForm_Save.collapse();
    //simpleForm_Save.buttons[1].disabled=true;
    //simpleForm_Save.buttons[3].disabled=true;
    simpleForm_Save.buttons[1].setVisible(false);
    simpleForm_Save.buttons[3].setVisible(false);

});
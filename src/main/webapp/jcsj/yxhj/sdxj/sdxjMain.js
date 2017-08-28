Ext.onReady(function(){

    Ext.QuickTips.init();
 Ext.BLANK_IMAGE_URL = '../../../extjs-3.0/resources/images/default/s.gif';
    var bd = Ext.getBody();
      //定义工区列表
    var gqlist_store = new Ext.data.Store({
		proxy : new Ext.data.HttpProxy({
		url : '../../../share/combo_list.jsp?sql=select gqdm,gqjc from j_gyjc_gqzd where JGLBDM=1'
	}),
	reader : new Ext.data.JsonReader({root : 'root'
			},[{name : 'value',mapping : 'value'},
			   {name : 'text',mapping : 'text'}
			  ]
	)
	});
	gqlist_store.load(); 
	
	
     //定义线别列表
    var xllist_store = new Ext.data.Store({
		proxy : new Ext.data.HttpProxy({
		url : '../../../share/combo_list.jsp?sql=select xldm,xlm from j_gyjc_xlzd'
	}),
	reader : new Ext.data.JsonReader({root : 'root'
			},[{name : 'value',mapping : 'value'},
			   {name : 'text',mapping : 'text'}
			  ]
	)
	});
	xllist_store.load(); 
	
	
  //定义区间站场列表
    var qjzclist_store = new Ext.data.Store({
		proxy : new Ext.data.HttpProxy({
		url : '../../../share/combo_list.jsp?sql=select qjbm,mc from j_gyjc_qjzczd'
	}),
	reader : new Ext.data.JsonReader({root : 'root'
			},[{name : 'value',mapping : 'value'},
			   {name : 'text',mapping : 'text'}
			  ]
	)
	});
	qjzclist_store.load();      
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
 	     return '<a  href="del.jsp?albm='+value+'">删除</a>';
 	 };
 	 
 	 //定义Grid表头
   	 var columns = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
         new Ext.grid.RowNumberer(),
        //{header:'序号',dataIndex:'id',width:40,sortable:true,fixed:true},
        {header:'线别',dataIndex:'xlmc',sortable:true},
        {header:'单位名称',dataIndex:'gqmc',sortable:true},
        {header:'区站站场',dataIndex:'qjzcmc',sortable:true},
        {header:'中心里程',dataIndex:'glb',sortable:true},
        {header:'隧道号',dataIndex:'sdh',sortable:true},
        {header:'隧道名称',dataIndex:'sdm',sortable:true},
        {header:'上下行',dataIndex:'sxx',sortable:true},             
       	{header:'接触线最底高度',dataIndex:'jcxzdgd',sortable:true},
        {header:'隧道长度',dataIndex:'sdcd',sortable:true},       
        {header:'修建年份',dataIndex:'xjnf',sortable:true}, 
        //{header:'备注',dataIndex:'bz',fixed:true},
        {header:'删除',dataIndex:'id',width:60,renderer:renderDel,fixed:true}
    
     ]);
     
     var planRecord = Ext.data.Record.create([
        {name:'id',type:'int'},
        {name:'xb',type:'string'},
        {name:'xzjg',type:'string'},       
        {name:'qjzc',type:'string'},
    	{name:'glb',type:'string'},
    	{name:'sdh',type:'string'},
        {name:'sdm',type:'string'},
        {name:'sxx',type:'string'},
    	{name:'jcxzdgd',type:'string'},
    	{name:'sdcd',type:'string'},    	
    	{name:'xjnf',type:'string'},
    	{name:'bz',type:'string'},
    	{name:'gqmc',type:'string'},
    	{name:'xlmc',type:'string'},
    	{name:'qjzcmc',type:'string'}
     ]);
    
       	
     //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
	 var store = new Ext.data.Store({
     	//proxy告诉我们从哪里获得数据
     	proxy: new Ext.data.HttpProxy({url:'sdxjlist.jsp'}),        
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
        title: '查询列表', 
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
    });	

    //grid.render();//渲染表格
    Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
	// form start        

    /*
     * ========查询 =======================
    */
	var simpleForm_Query = new Ext.FormPanel({
		renderTo : document.body,
       	title: '隧道限界---->查询',
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
              columnWidth : .5,
              layout : 'form',
              border : false,
              items: [{
                    		xtype : 'combo',
                        	store : gqlist_store,
                        	valueField : "value",
                        	displayField : "text",
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择单位',
                        	emptyText : '选择单位',
                        	hiddenName : 'xzjg',
                        	editable : false,
                        	triggerAction : 'all',
                        	//allowBlank : false,
                        	fieldLabel : '单位名称',
                        	name : 'xzjg',
                        	anchor : '90%'
    			}]
              },{
              columnWidth : .5,
              layout : 'form',
              border : false,
              items: [{
                    		xtype : 'combo',
                        	store : xllist_store,
                        	valueField : "value",
                        	displayField : "text",
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择所属线别',
                        	emptyText : '选择线别',
                        	hiddenName : 'xb',
                        	editable : false,
                        	triggerAction : 'all',
                        	//allowBlank : false,
                        	fieldLabel : '线别',
                        	name : 'xb',
                        	anchor : '90%'
    			}]
              }]
			}
           ],
           // 为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
              buttons : [{
               // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
               buttonlAlign : 'right',
               text : '查询',
               handler : function() {
                    if (!simpleForm_Query.form.isValid()) {return };
                    // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                    if (simpleForm_Query.form.isValid()) {
                    // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                    //this.disabled = true;
                    // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                    simpleForm_Query.form.doAction('submit', {
                                     waitMsg:'查询中,请稍侯...',  
                                     url : 'skxQuery.jsp',
                                     method : 'post',
                                     params : '',
                                     // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                                     // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                                     success : function(form, action) {
                                     // 例如返回的json结构是"{success:true,data:'成功保存！'}"，
                                     //Ext.Msg.alert('操作',action.result.data);
                                     //Ext.Msg.alert('消息',action.result.msg);
                                     //simpleForm_Query.form.reset();
                                      simple_Grid.getStore().reload();                               		
                    				 },
                     // 定义failure函数，就是网络通讯存在问题的时候将显示错误信息。
                     failure : function() {
                            Ext.Msg.alert('操作', '保存失败！');
                       	 	this.disabled = false;
                     	 }
                  });
       			}
			}
          },
         {
                // 取消按钮就是简单的reset一下form的控件
                text : '重置',
                handler : function() {
                       simpleForm_Query.form.reset();
                       simpleForm_Save.collapse();
                     }
          }
          ]
       });
       
    /*====新增========*/
	var simpleForm_Save = new Ext.FormPanel({
        renderTo : document.body,
        title: '隧道限界---->编辑',
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
                    layout : 'column',
                    border : false,
                	items:[{xtype:'hidden',name:'id'},{xtype:'hidden',name:'albm'},{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// 控件的类型设置成combo
                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        	store : xllist_store,
                        	valueField : "value",// 设置下拉选择框的值
                       		displayField : "text",// 设置下拉选择框的显示文本
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选线路',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        	emptyText : '选择线路',// 在没有选择值时显示为选择学历
                        	hiddenName : 'xb',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        	editable : false,// 该下拉列表只允许选择，不允许输入
                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        	allowBlank : false,// 该选项值不允许为空
                        	fieldLabel : '线别',// 控件的标题是学历
                        	name : 'xb',// 再次提醒，name只是下拉列表的名称
                        	anchor : '95%'// input的宽度是90%
    					}]	
                	},{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// 控件的类型设置成combo
                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        	store : gqlist_store,
                        	valueField : "value",// 设置下拉选择框的值
                       		displayField : "text",// 设置下拉选择框的显示文本
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择单位名称',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        	emptyText : '选择单位名称',// 在没有选择值时显示为选择学历
                        	hiddenName : 'xzjg',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        	editable : false,// 该下拉列表只允许选择，不允许输入
                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        	allowBlank : false,// 该选项值不允许为空
                        	fieldLabel : '单位名称',// 控件的标题是学历
                        	name : 'xzjg',// 再次提醒，name只是下拉列表的名称
                        	id:'txt_gq',
                        	listeners:{"select":function(combo, planRecord_gq,index){
                                var gqbm=Ext.getCmp("txt_gq").value;
                                //alert(gqbm);                                
                           		var combo2 = Ext.getCmp('txt_qjzc'); 
                           		combo2.enable();      
								combo2.reset();   
								//combo2.disable();
								sql_qjzc="select * from J_GYJC_QJZCZD where  gqdm=\'"+gqbm+"\'";//
								//alert(sql_qjzc);
							    combo2.store.proxy = new Ext.data.HttpProxy({url:'../../../share/combo_list.jsp?sql='+sql_qjzc});
							    combo2.store.load();
                            	}
                            },
                        	anchor : '95%'// input的宽度是90%
    					}]	
                	},{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// 控件的类型设置成combo
                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        	store : qjzclist_store,
                        	valueField : "value",// 设置下拉选择框的值
                       		displayField : "text",// 设置下拉选择框的显示文本
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择区间站场',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        	emptyText : '选择区间站场',// 在没有选择值时显示为选择学历
                        	hiddenName : 'qjzc',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        	editable : false,// 该下拉列表只允许选择，不允许输入
                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        	allowBlank : false,// 该选项值不允许为空
                        	fieldLabel : '区间站场',// 控件的标题是学历
                        	name : 'qjzc',// 再次提醒，name只是下拉列表的名称
                        	id: 'txt_qjzc',
                        	anchor : '95%'// input的宽度是90%
                        	
    					}]	
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '中心里程',
                    		name: 'glb',
                    		anchor:'95%'
    					}]	
                	},{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '隧道号',
                    		name: 'sdh',
                    		anchor:'95%'
    					}]	
                	},{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '隧道名称',
                    		name: 'sdm',
                    		anchor:'95%'
    					}]	
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '上下行',
                    		name: 'sxx',
                    		anchor:'95%'
    					}]	
                	},{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '接触线最低高度',
                    		name: 'jcxzdgd',
                    		anchor:'95%'
    					}]	
                	},{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '隧道长度',
                    		name: 'sdcd',
                    		anchor:'95%'
    					}]	
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                	    columnWidth:.32,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel:'修建年份',
                    		blankText : '请选择修建年份',
                    		name: 'xjnf',
                    		allowBlank : false,// 该选项值不允许为空
                    		anchor:'95%'
                    		
                		}]
                	},{
                		columnWidth:.65,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'textarea',// 控件的类型为datefield
                            fieldLabel : '备注',
                            name : 'bz',
                            anchor : '97%',
                            height:25
                		}]
                	}]
                }],

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
                                                    url : 'sdxjSave.jsp',
                                                    method : 'post',
                                                    params : '',
                                                    // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                                                    // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                                                    success : function(form, action) {
                                                            // 例如返回的json结构是"{success:true,data:'成功保存！'}"，
                                                             //Ext.Msg.alert('操作',action.result.data);
                                                             if(action.result.msg!="")
                                                             {
                                                             	document.getElementById ("albm").value=action.result.msg;
                                                             	//simpleForm_Save.buttons[3].setVisible(true);
                                                             	//simpleForm_Save.buttons[4].setVisible(true);
                                                             	simple_Grid.getStore().reload();
                                                             	Ext.Msg.alert('消息','保存成功！');
                                                             }
                                                             //simpleForm_Query.form.reset();
                                                            
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
                                               url : 'sdxjUpdate.jsp',
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
                   //window.location.href='zyjhsqAdd.jsp';
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
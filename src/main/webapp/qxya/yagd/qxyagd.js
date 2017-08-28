
Ext.onReady(function(){
   Ext.QuickTips.init();
   Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
  
   var DWJB=document.getElementById ("DWJB").value;
   
   	//渲染返回html代码 renderTo 故障分类
 	 var renderYuanneirong =function(value)
 	 {
 	   //  return '<a href="xiangxi.jsp?yabh='+value+'">查看详细</a>';
 	    return '<a href="#">查看详细</a>';
 	 }; 	 
 	 var renderLiuchengtu =function(value)
 	 {  	  	 
	    return '<a href="#" mce_href="#" onclick="return liuchengtushow(' + value + ');">查看详细</a>';       
 	 };
     var rendershanchu =function(value)
 	 {
 	     return '<a href="qxya_del.jsp?yabh='+value+'">删除</a>';
 	 };
   
        //定义Grid表头
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
        //new Ext.grid.RowNumberer(),
        
        {header:'预案编号',dataIndex:'yabh'},
        {header:'专业',dataIndex:'ZYMC',sortable:true},
        {header:'预案名称',dataIndex:'yamc',sortable:true},
        {header:'故障类别',dataIndex:'LBMC',sortable:true},
        {header:'故障性质',dataIndex:'XZMC'},
        {header:'制定人',dataIndex:'zdr'},
        {header:'制定日期',dataIndex:'zdrq'},
        {header:'预案内容',dataIndex:'yabh',renderer:renderYuanneirong},
        {header:'预案流程图',dataIndex:'yabh',renderer:renderLiuchengtu},
        {header:'操作',dataIndex:'yabh',renderer:rendershanchu}
    ]); 
    
     var planRecord = Ext.data.Record.create([
    	{name:'yabh',type:'string'},
    	{name:'zy',type:'string'},
    	{name:'yamc',type:'string'},
    	{name:'gzlb',type:'string'},
    	{name:'gzxz',type:'string'},
    	{name:'XZMC',type:'string'},
    	{name:'LBMC',type:'string'},
    	{name:'ZYMC',type:'string'},
    	{name:'zdr',type:'string'},
    	{name:'zdrq',type:'string'},
    	{name:'yanr',type:'string'}
    	]);
    
     //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'../yacx/qxyacx_json.jsp'}), 
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
        }),
        renderTo : document.body
    });   
        
     
  
    //Grid上触发事件 renderTo
    simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){

  //  	 simpleForm_Query.collapse();
    	 simpleForm_Save.expand();
    	 simpleForm_Save.buttons[0].setVisible(false);
    	 simpleForm_Save.buttons[1].setVisible(true);
    	
    	var record=simple_Grid.getStore().getAt(rowIndex);
 //   	alert(rowIndex);
//    	alert(record.get('yabh'));
   
    	simpleForm_Save.getForm().loadRecord(record);
    	
    	 simpleForm_Query.collapse();
    	
    });	
    var zy_store = new Ext.data.Store({
				// proxy告诉我们从哪里获得数据
				proxy : new Ext.data.HttpProxy({
							url : '../../share/combo_list.jsp?sql=select sxid,sxmc from J_GDGY_SXZD  where sxid>015000 and sxid<016000'
						}),
				// reader告诉我们如何解析这个数据
				reader : new Ext.data.JsonReader({
							root : 'root'
						}, [{
									name : 'value',
									mapping : 'value'
								}, {
									name : 'text',
									mapping : 'text'
								}])
			});
	zy_store.load();
    
    var gzlb_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select sxid,sxmc from J_GDGY_SXZD  where sxid>009000 and sxid<010000'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
			});
	gzlb_store.load();
	
	var gzxz_store = new Ext.data.Store({
				// proxy告诉我们从哪里获得数据
				proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select sxid,sxmc from J_GDGY_SXZD  where sxid>008000 and sxid<009000'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
			});
	gzxz_store.load();
 
    var simpleForm_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '预案归档',
              buttonAlign : 'left',
              bodyStyle : 'padding:5px',             
              collapsible:true,
              titleCollapse:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              //labelWidth : 80,
              
              
              items : [{
                                   layout : 'column',// columnlayout
                                   
                                   border : false,// 没有边框                                   
                                   labelSeparator : '：',// 标题的分隔符号我们用中文冒号代替英文的冒号（labelSeparator:'：'）。
                                   // coulmnLayout里的控件将定义在items里
                                   items : [{
                                                        columnWidth : .33,                                                          
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{xtype:'hidden',name:'yabh'},{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '制定日期',
                                                                             name : 'zdrq',
                                                                             anchor : '95%',                                                                             
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                      },{
				                                                               xtype : 'combo',// 控件的类型设置成combo
				                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
				                                                            /*   store : new Ext.data.SimpleStore({
				                                                                      // 通过一个数组定义了returnValue和displayText两个字段。retrunValue字段指定是提交给后台的值，displayText字段指定是在下拉中显示的选择值。
				                                                                      fields : ["returnValue", "displayText"],
				                                                                      // 定义了几组数据.每组数据都是根据fiedls的定义来组成的，数组里第一个值就是retrunValue的值，第二个值就是displayText的值，例如[1,'小学']，就表示retrunValue是1，displayText是小学。
				                                                                      data : [['接触网', '接触网'], ['变电所', '变电所']]
				                                                               }),
				                                                               valueField : "returnValue",// 设置下拉选择框的值
				                                                               displayField : "displayText",// 设置下拉选择框的显示文本  */
				                                                               store : zy_store,
												                               valueField : "value",// 设置下拉选择框的值
													                           displayField : "text",// 设置下拉选择框的显示文本
				                                                               mode : 'local',// 数据是在本地
				                                                               //forceSelection : true,// 必须选择一个选项
				                                                               blankText : '请选择学历',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
				                                                               emptyText : '选择专业',// 在没有选择值时显示为选择学历
				                                                               hiddenName : 'zy',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
				                                                               editable : false,// 该下拉列表只允许选择，不允许输入
				                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
				                                                               allowBlank : false,// 该选项值不允许为空
				                                                               fieldLabel : '专业',// 控件的标题是学历
				                                                               name : 'education',// 再次提醒，name只是下拉列表的名称
				                                                               anchor : '95%'// input的宽度是90%
				                                                        }]
                                                 }, {
                                                        columnWidth : .33,                                                        
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
														                    xtype:'textfield',
														                    fieldLabel: '制定人',
														                    name: 'zdr',														                   
														                    anchor:'95%'
														                },{
				                                                               xtype : 'combo',// 控件的类型设置成combo
				                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
				                                                           /*    store : new Ext.data.SimpleStore({
				                                                                      // 通过一个数组定义了returnValue和displayText两个字段。retrunValue字段指定是提交给后台的值，displayText字段指定是在下拉中显示的选择值。
				                                                                      fields : ["returnValue", "displayText"],
				                                                                      // 定义了几组数据.每组数据都是根据fiedls的定义来组成的，数组里第一个值就是retrunValue的值，第二个值就是displayText的值，例如[1,'小学']，就表示retrunValue是1，displayText是小学。
				                                                                      data : [['永久性接地', '永久性接地'], ['断续性接地', '断续性接地'], ['瞬时性接地', '瞬时性接地']]
				                                                               }),
				                                                               valueField : "returnValue",// 设置下拉选择框的值
				                                                               displayField : "displayText",// 设置下拉选择框的显示文本   */
				                                                               store : gzxz_store,
												                               valueField : "value",// 设置下拉选择框的值
													                           displayField : "text",// 设置下拉选择框的显示文本
				                                                               mode : 'local',// 数据是在本地
				                                                               //forceSelection : true,// 必须选择一个选项
				                                                               blankText : '请选择学历',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
				                                                               emptyText : '选择故障性质',// 在没有选择值时显示为选择学历
				                                                               hiddenName : 'gzxz',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
				                                                               editable : false,// 该下拉列表只允许选择，不允许输入
				                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
				                                                               allowBlank : false,// 该选项值不允许为空
				                                                               fieldLabel : '故障性质',// 控件的标题是学历
				                                                               name : 'education',// 再次提醒，name只是下拉列表的名称
				                                                               anchor : '95%'// input的宽度是90%
				                                                        }]
                                                 }, {
                                                        columnWidth : .33,                                                        
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
														                    xtype:'textfield',
														                    fieldLabel: '预案名称',
														                    name: 'yamc',														                   
														                    anchor:'95%'
														                },{
				                                                               xtype : 'combo',// 控件的类型设置成combo
				                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
				                                                          /*     store : new Ext.data.SimpleStore({
				                                                                      // 通过一个数组定义了returnValue和displayText两个字段。retrunValue字段指定是提交给后台的值，displayText字段指定是在下拉中显示的选择值。
				                                                                      fields : ["returnValue", "displayText"],
				                                                                      // 定义了几组数据.每组数据都是根据fiedls的定义来组成的，数组里第一个值就是retrunValue的值，第二个值就是displayText的值，例如[1,'小学']，就表示retrunValue是1，displayText是小学。
				                                                                      data : [['接触网断线', '接触网断线'], ['支柱断', '支柱断']]   
				                                                               }),
				                                                               valueField : "returnValue",// 设置下拉选择框的值
				                                                               displayField : "displayText",// 设置下拉选择框的显示文本   */
				                                                               store : gzlb_store,
												                               valueField : "value",// 设置下拉选择框的值
													                           displayField : "text",// 设置下拉选择框的显示文本
				                                                               mode : 'local',// 数据是在本地
				                                                               //forceSelection : true,// 必须选择一个选项
				                                                               blankText : '请选择学历',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
				                                                               emptyText : '选择故障类别',// 在没有选择值时显示为选择学历
				                                                               hiddenName : 'gzlb',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
				                                                               editable : false,// 该下拉列表只允许选择，不允许输入
				                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
				                                                               allowBlank : false,// 该选项值不允许为空
				                                                               fieldLabel : '故障类别',// 控件的标题是学历
				                                                               name : 'education',// 再次提醒，name只是下拉列表的名称
				                                                               anchor : '95%'// input的宽度是90%
				                                                        }]
                                                 }]

                            },{
                                  xtype:"textarea",
                                  fieldLabel:"预案内容",                                  
                                  name:"yanr",
                                  height:200,
                                  anchor:"95%"
                               }],
              // 为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
              buttons : [{                                 
                                    text : '新增',                                     
                                   handler : function() {
                                   	              
                                                 simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'保存中,请稍侯...',  
                                                                      url: 'qxyagdsave.jsp',
                                                                      method: 'post',
                                                                      params: '',                                                                  
                                                                      success: function() {                                                                       
                                                                      	Ext.Msg.alert('消息','保存成功');                                                                
                                                                      	simpleForm_Save.form.reset();   
                                                                      	simple_Grid.getStore().reload();                                                                       	                                                                  		
                                                                      },
                                                                       failure : function() {
						                                                     Ext.Msg.alert('操作', '保存失败！');
						                                                     this.disabled = false;
						                                               }                                                                         
                                                              }); 
                                          }                             
                            },{                                 
                                    text : '修改',                                     
                                   handler : function() {
                                   	              
                                                  simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'修改中,请稍侯...',  
                                                                      url: 'update.jsp',
                                                                      method: 'post',
                                                                      params: '',                                                                  
                                                                      success: function() {   
                                                                        simple_Grid.getStore().reload();                                                                    
                                                                      	Ext.Msg.alert('消息','修改成功');                                                                       	                                                                    		
                                                                      },
                                                                       failure : function() {
						                                                     Ext.Msg.alert('操作', '修改失败！');
						                                                     this.disabled = false;
						                                               }                                                                         
                                                              }); 
                                          }                             
                            },{
                       
                                   // 取消按钮就是简单的reset一下form的控件
                                   text : '重置',
                                   handler : function() {
                                          simpleForm_Save.form.reset();
                                          simpleForm_Save.collapse();
                                         // window.location.href="";
                                          //window.location.href='zyjhsqAdd.jsp';
                                   }
                            }]
       });
       simpleForm_Save.collapse();      
       simpleForm_Save.buttons[1].setVisible(false);
    
      
     
       
       var zy2_store = new Ext.data.Store({
				// proxy告诉我们从哪里获得数据
				proxy : new Ext.data.HttpProxy({
							url : '../../share/combo_list.jsp?sql=select sxid,sxmc from J_GDGY_SXZD  where sxid>015000 and sxid<016000&all=all'
						}),
				// reader告诉我们如何解析这个数据
				reader : new Ext.data.JsonReader({
							root : 'root'
						}, [{
									name : 'value',
									mapping : 'value'
								}, {
									name : 'text',
									mapping : 'text'
								}])
			});
	zy2_store.load();
    
    var gzlb2_store = new Ext.data.Store({
				// proxy告诉我们从哪里获得数据
				proxy : new Ext.data.HttpProxy({
							url : '../../share/combo_list.jsp?sql=select sxid,sxmc from J_GDGY_SXZD  where sxid>009000 and sxid<010000&all=all'
						}),
				// reader告诉我们如何解析这个数据
				reader : new Ext.data.JsonReader({
							root : 'root'
						}, [{
									name : 'value',
									mapping : 'value'
								}, {
									name : 'text',
									mapping : 'text'
								}])
			});
	gzlb2_store.load();	  
	
    var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '预案检索',
              buttonAlign : 'left',
              bodyStyle : 'padding:5px',             
              collapsible:true,
              titleCollapse:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              //labelWidth : 80,
              
              
              items : [{
                                   layout : 'column',// columnlayout
                                   
                                   border : false,// 没有边框                                   
                                   labelSeparator : '：',// 标题的分隔符号我们用中文冒号代替英文的冒号（labelSeparator:'：'）。
                                   // coulmnLayout里的控件将定义在items里
                                   items : [{
                                                        columnWidth : .33,                                                          
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
														                    xtype:'textfield',
														                    fieldLabel: '关键字',
														                    name: 'gjz',	
														                    id: 'gjza',													                   
														                    anchor:'95%'
														                }]
                                                 }, {
                                                        columnWidth : .33,                                                        
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                        	                   xtype : 'combo',// 控件的类型设置成combo
				                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
				                                                         /*      store : new Ext.data.SimpleStore({
				                                                                      // 通过一个数组定义了returnValue和displayText两个字段。retrunValue字段指定是提交给后台的值，displayText字段指定是在下拉中显示的选择值。
				                                                                      fields : ["returnValue", "displayText"],
				                                                                      // 定义了几组数据.每组数据都是根据fiedls的定义来组成的，数组里第一个值就是retrunValue的值，第二个值就是displayText的值，例如[1,'小学']，就表示retrunValue是1，displayText是小学。
				                                                                      data : [['接触网', '接触网'], ['变电所', '变电所']]
				                                                               }),
				                                                               valueField : "returnValue",// 设置下拉选择框的值
				                                                               displayField : "displayText",// 设置下拉选择框的显示文本     */
				                                                               store : zy2_store,
												                               valueField : "value",// 设置下拉选择框的值
													                           displayField : "text",// 设置下拉选择框的显示文本
				                                                               mode : 'local',// 数据是在本地
				                                                               //forceSelection : true,// 必须选择一个选项
				                                                               blankText : '请选择学历',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
				                                                               emptyText : '选择专业',// 在没有选择值时显示为选择学历
				                                                               hiddenName : 'zy',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
				                                                               id : 'zya',
				                                                               editable : false,// 该下拉列表只允许选择，不允许输入
				                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
				                                                               allowBlank : true,// 该选项值不允许为空
				                                                               fieldLabel : '专业',// 控件的标题是学历
				                                                               name : 'education',// 再次提醒，name只是下拉列表的名称
				                                                               anchor : '95%'// input的宽度是90%
				                                                        }]
                                                 }, {
                                                        columnWidth : .33,                                                        
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
				                                                               xtype : 'combo',// 控件的类型设置成combo
				                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
				                                                           /*    store : new Ext.data.SimpleStore({
				                                                                      // 通过一个数组定义了returnValue和displayText两个字段。retrunValue字段指定是提交给后台的值，displayText字段指定是在下拉中显示的选择值。
				                                                                      fields : ["returnValue", "displayText"],
				                                                                      // 定义了几组数据.每组数据都是根据fiedls的定义来组成的，数组里第一个值就是retrunValue的值，第二个值就是displayText的值，例如[1,'小学']，就表示retrunValue是1，displayText是小学。
				                                                                      data : [['接触网断线', '接触网断线'], ['支柱断', '支柱断']]
				                                                               }),
				                                                               valueField : "returnValue",// 设置下拉选择框的值
				                                                               displayField : "displayText",// 设置下拉选择框的显示文本   */
				                                                               store : gzlb2_store,
												                               valueField : "value",// 设置下拉选择框的值
													                           displayField : "text",// 设置下拉选择框的显示文本
				                                                               mode : 'local',// 数据是在本地
				                                                               //forceSelection : true,// 必须选择一个选项
				                                                               blankText : '请选择学历',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
				                                                               emptyText : '选择故障类别',// 在没有选择值时显示为选择学历
				                                                               hiddenName : 'gzlb',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
				                                                               id : 'gzlba',
				                                                               editable : false,// 该下拉列表只允许选择，不允许输入
				                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
				                                                               allowBlank : true,// 该选项值不允许为空
				                                                               fieldLabel : '故障类别',// 控件的标题是学历
				                                                               name : 'education',// 再次提醒，name只是下拉列表的名称
				                                                               anchor : '95%'// input的宽度是97%
				                                                        }]
                                                 }]

                            }],
              // 为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
              buttons : [{                                 
                                    text : '查询',                                     
                                   handler : function() {
                                   	          if (!simpleForm_Query.form.isValid()) {return };
		                                   		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
		                                          if (simpleForm_Query.form.isValid()) {
		                                                 //点击查询按钮后，修改whereclause的值，作为基本条件，翻页不会消失
														//需要大家把原来query.jsp中的拼whereclause的逻辑拿到这里来									
														where=" 1=1 ";				
														if(Ext.getCmp("gjza").getValue()!="" ){
															where=where+" and yanr like '%"+Ext.getCmp("gjza").getValue()+"%'";
														}
														if(Ext.getCmp("zya").getValue()!="" ){
														    if(Ext.getCmp("zya").getValue()=="ALL" ){
														    }else{
															     where=where+" and ZY='"+Ext.getCmp("zya").getValue()+"'";	
															}
														}
														if(Ext.getCmp("gzlba").getValue()!="" ){
														    if(Ext.getCmp("gzlba").getValue()=="ALL" ){
														    }else{
														         where=where+" and GZLB='"+Ext.getCmp("gzlba").getValue()+"'";	
														    }     
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

       
 /*   
         //从session取值赋值给form字段;
	Ext.Ajax.request({
		url: '../../share/Authority.jsp?',
		success: function(response, opts) 
		{
			var Qx=response.responseText;			
			var Qxs=Qx.split("!#");
			Admin=Qxs[0];
			Qxfz=Qxs[4];
			if(DWJB=="3")
			{
				if(Admin==1)
				{
					simpleForm_Save.buttons[0].setVisible(true);
					simpleForm_Save.buttons[1].setVisible(false);
					simpleForm_Save.buttons[2].setVisible(true);
				}
				else if(Qxfz==1)
				{
					simpleForm_Save.buttons[0].setVisible(true);
					simpleForm_Save.buttons[1].setVisible(false);
					simpleForm_Save.buttons[2].setVisible(true);
				}
				else
				{
					simpleForm_Save.buttons[0].setVisible(false);
					simpleForm_Save.buttons[1].setVisible(false);
					simpleForm_Save.buttons[2].setVisible(true);
				}
			}
			else
			{
					simpleForm_Save.buttons[0].setVisible(false);
					simpleForm_Save.buttons[1].setVisible(false);
					simpleForm_Save.buttons[2].setVisible(true);
					
			}
		},		
		failure: function(response, opts) {
      		console.log('服务端失效的状态代码：' + response.status);
   		}
	});      
  */        
      
    var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items:[simpleForm_Save,simpleForm_Query,simple_Grid]		
	});
    
   
//   simpleForm_Query.render(document.body);   

    
  });
  
  

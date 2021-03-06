Ext.onReady(function(){

    Ext.QuickTips.init();
	Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var bd = Ext.getBody();
    
    var DWJB=document.getElementById ("DWJB").value; 
    var DWDM=document.getElementById ("DWDM").value; 
    //DWJB="2";
    //DWDM="17";
    var Sql="";
  	switch(DWJB)
  	{
  		case '1':
  			Sql="select LJDM,LJQC from J_GYJC_LJZD where LJDM='"+DWDM+"'";	
  			break;
  		case '2':
  			Sql="select LJDM,LJQC from J_GYJC_LJZD where LJDM='"+DWDM+"'";	
  			break;
  		case '3':
  			Sql="select DDDM,DDJC from j_gyjc_ddzd where DDDM='"+DWDM+"'";	
  			break;
  		case '4':
  			Sql="select GDDDM,GGDMC from J_GYJC_GDDZD where GDDDM='"+DWDM+"'";	
  			break;
  		case '5':
  			Sql="select CJDM,CJMC from J_GYJC_CJZD where CJDM='"+DWDM+"'";
  			break;
  		case '6':
  			Sql="select GQDM,GQMC from J_GYJC_GQZD where GQDM='"+DWDM+"'";	
  			break;
  		default:
　　			break;	
  	}
    
    

    var DW_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+Sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	DW_store.load();
	
	
	//故障等级下拉列表	
	var gzdj_sql = "select sxid,sxmc from j_gdgy_sxzd where sxid>'007000' and sxid<'008000'";
    var gzdj_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+gzdj_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	gzdj_store.load();
	
	//文化程度下拉列表	
	var whcd_sql = "select sxid,sxmc from j_gdgy_sxzd where sxid>'012000' and sxid<'013000'";
    var whcd_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+whcd_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	whcd_store.load();
	
	//政治面貌下拉列表	
	var zzmm_sql = "select sxid,sxmc from j_gdgy_sxzd where sxid>'013000' and sxid<'014000'";
    var zzmm_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+zzmm_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	zzmm_store.load();
	
	
	//人员类别下拉列表	
	var rylb_sql = "select sxid,sxmc from j_gdgy_sxzd where sxid>'014000' and sxid<'015000'";
    var rylb_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+rylb_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	rylb_store.load();
	
	//专业分类下拉列表	
	var zyfl_sql = "select sxid,sxmc from j_gdgy_sxzd where sxid>'015000' and sxid<'016000'";
    var zyfl_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+zyfl_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	zyfl_store.load();
	
	//安全等级下拉列表	
	var aqdj_sql = "select sxid,sxmc from j_gdgy_sxzd where sxid>'016000' and sxid<'017000'";
    var aqdj_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+aqdj_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	aqdj_store.load();
	
	//值班班次下拉列表	
	var zbbc_sql = "select sxid,sxmc from j_gdgy_sxzd where sxid>'017000' and sxid<'018000'";
    var zbbc_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+zbbc_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	zbbc_store.load();
	
		
	//技术等级下拉列表	
	var jsdj_sql = "select sxid,sxmc from j_gdgy_sxzd where sxid>'018000' and sxid<'019000'";
    var jsdj_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+jsdj_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	jsdj_store.load();
	
	//单位查询下拉列表
    var DWCX_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct SZDW,SZDW as szdw1 from z_jcsj_ry order by SZDW&all=all'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	DWCX_store.load();
    
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
 	     return '<a  href="RyDel.jsp?albm='+value+'">删除</a>';
 	 };
 	 
 	 //定义Grid表头
   	 var columns = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
         new Ext.grid.RowNumberer(),
        //{header:'序号',dataIndex:'id',width:40,sortable:true,fixed:true},
        {header:'姓名',dataIndex:'xm',width:320,sortable:true},
        {header:'所在单位',dataIndex:'szdw',width:620,sortable:true},
       {header:'部门',dataIndex:'bm',width:320,sortable:true},
       {header:'职务',dataIndex:'zw',width:320,sortable:true},
       {header:'专业',dataIndex:'zy',width:320,sortable:true},
       //{header:'工号',dataIndex:'gh',width:260,sortable:true},
       {header:'固定电话',dataIndex:'hkxz',width:460,sortable:true}, 
	   {header:'移动电话',dataIndex:'csd',width:460,sortable:true},
       {header:'性别',dataIndex:'xb',width:200,sortable:true},
       //{header:'工种',dataIndex:'gz',fixed:true},
       {header:'安全等级',dataIndex:'aqdj',fixed:true},
       //{header:'应对事故等级',dataIndex:'ydsgdj',fixed:true},
       //{header:'技术等级',dataIndex:'jsdj',fixed:true},
       {header:'班次',dataIndex:'bc',fixed:true},
       {header:'删除',dataIndex:'id',width:60,renderer:renderDel,fixed:true}
    
     ]);
     
     var planRecord = Ext.data.Record.create([
        {name:'id',type:'int'},
        {name:'bm',type:'string'},
        {name:'szdw',type:'string'},
        {name:'zw',type:'string'},
    	{name:'zy',type:'string'},
    	{name:'xm',type:'string'},
        {name:'gh',type:'string'},
        {name:'xb',type:'string'},
    	{name:'jg',type:'string'},
    	{name:'mz',type:'string'},
    	{name:'hkxz',type:'string'},
    	{name:'csd',type:'string'},
    	{name:'csrq',type:'string'},
    	{name:'sfzh',type:'string'},
    	{name:'whcd',type:'string'},
    	{name:'zzmm',type:'string'},
    	{name:'hyzk',type:'string'},
    	{name:'gz',type:'string'},
    	{name:'aqdj',type:'string'},
    	{name:'ydsgdj',type:'string'},
    	{name:'jsdj',type:'string'},
    	{name:'bc',type:'string'}
     ]);
    
       	
     //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
	 var store = new Ext.data.Store({
     	//proxy告诉我们从哪里获得数据
     	proxy: new Ext.data.HttpProxy({url:'RyList.jsp'}),        
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
     * ================  您当前的位置：事故案例---->案例查询 =======================
    */
	var simpleForm_Query = new Ext.FormPanel({
		renderTo : document.body,
       	title: '人员信息---->查询',
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
              columnWidth : .6,
              layout : 'form',
              border : false,
              items: [{
                    		xtype : 'combo',
                        	store : DWCX_store,
                       		valueField : "text",
                       		displayField : "text",
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择所在单位',
                        	emptyText : '选择单位',
                        	hiddenName : 'szdw',
                        	editable : true,
                        	triggerAction : 'all',
                        	//allowBlank : false,
                        	fieldLabel : '所在单位',
                        	name : 'szdw',
                        	anchor : '95%'
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
                                     url : 'RyQuery.jsp',
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
          }
         /* , {
                // 取消按钮就是简单的reset一下form的控件
                text : '重置',
                handler : function() {
                       simpleForm_Query.form.reset();
                       simpleForm_Save.collapse();
                     }
          }*/
          ]
       });
       
    /*==============案例归档---->事故报告新增========*/
	var simpleForm_Save = new Ext.FormPanel({
        renderTo : document.body,
        title: '人员编辑---->编辑',
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
                	items:[{xtype:'hidden',name:'id'},{xtype:'hidden',name:'albm'},
                	{
                    	columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '人员姓名',
                    		name: 'xm',
                    		anchor:'95%'
                		}]
                	},{
                		columnWidth:.3,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// 控件的类型设置成combo
                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        	store : DW_store,
                       		valueField : "text",
                       		displayField : "text",
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选所在单位',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        	emptyText : '选择所在单位',// 在没有选择值时显示为选择学历
                        	hiddenName : 'szdw',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        	editable : false,// 该下拉列表只允许选择，不允许输入
                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        	allowBlank : false,// 该选项值不允许为空
                        	fieldLabel : '所在单位',// 控件的标题是学历
                        	name : 'szdw',// 再次提醒，name只是下拉列表的名称
                        	anchor : '95%'// input的宽度是90%
    					}]	
                	},{
                    	columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '部门',
                    		name: 'bm',
                    		anchor:'95%'
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                		columnWidth:.3,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// 控件的类型设置成combo
                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        	store : zyfl_store,
                        	valueField : "text",// 设置下拉选择框的值
                       		displayField : "text",// 设置下拉选择框的显示文本
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择专业',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        	emptyText : '请选择专业',// 在没有选择值时显示为选择学历
                        	hiddenName : 'zy',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        	editable : false,// 该下拉列表只允许选择，不允许输入
                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        	allowBlank : false,// 该选项值不允许为空
                        	fieldLabel : '选择专业',// 控件的标题是学历
                        	name : 'zy',// 再次提醒，name只是下拉列表的名称
                        	anchor : '95%'// input的宽度是90%
    					}]	
                	},{
                    	columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '职务',
                    		name: 'zw',
                    		anchor:'95%'
                		}]
                	},{
                		columnWidth:.3,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '职工工号',
                    		name: 'gh',
                    		anchor:'95%'
    					}]	
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                    	columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'combo',// 控件的类型设置成combo
                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        	store : new Ext.data.SimpleStore({
                        		// 通过一个数组定义了returnValue和displayText两个字段。retrunValue字段指定是提交给后台的值，displayText字段指定是在下拉中显示的选择值。
                        		fields : ["returnValue", "displayText"],
                        		// 定义了几组数据.每组数据都是根据fiedls的定义来组成的，数组里第一个值就是retrunValue的值，第二个值就是displayText的值，例如[1,'小学']，就表示retrunValue是1，displayText是小学。
                        		data : [[ '男', '男'],[ '女', '女']]
                        	}),
                        	valueField : "returnValue",// 设置下拉选择框的值
                       		displayField : "displayText",// 设置下拉选择框的显示文本
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择性别',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        	emptyText : '选择性别',// 在没有选择值时显示为选择学历
                        	hiddenName : 'xb',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        	editable : false,// 该下拉列表只允许选择，不允许输入
                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        	allowBlank : false,// 该选项值不允许为空
                        	fieldLabel : '性别',// 控件的标题是学历
                        	name : 'xb',// 再次提醒，name只是下拉列表的名称
                        	anchor : '95%'// input的宽度是90%
                		}]
                	},{
                		columnWidth:.3,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '家庭住址',
                    		name: 'jg',
                    		anchor:'95%'
    					}]	
                	},{
                    	columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '民族',
                    		name: 'mz',
                    		anchor:'95%'
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                	    columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '固定电话',
                    		name: 'hkxz',
                    		anchor:'95%'
                		}]
                	},{
                	    columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'textfield',
                            fieldLabel : '移动电话',
                            name : 'csd',
                            anchor : '95%'
                		}]
                	},{
                	    columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'datefield',
                    		fieldLabel: '出生年月',
                    		name: 'csrq',
                    		anchor:'95%',
                    		format:'Y-m-d',
                    		allowBlank : false,// 该选项值不允许为空
    						timePicker:true
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                    	columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '身份证号',
                    		name: 'sfzh',
                    		anchor:'95%'
                		}]
                	},{
                    	columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'combo',// 控件的类型设置成combo
                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        	store : whcd_store,
                        	valueField : "text",// 设置下拉选择框的值
                       		displayField : "text",// 设置下拉选择框的显示文本
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择文化程度',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        	emptyText : '选择文化程度',// 在没有选择值时显示为选择学历
                        	hiddenName : 'whcd',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        	editable : false,// 该下拉列表只允许选择，不允许输入
                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        	allowBlank : false,// 该选项值不允许为空
                        	fieldLabel : '文化程度',// 控件的标题是学历
                        	name : 'whcd',// 再次提醒，name只是下拉列表的名称
                        	anchor : '95%'// input的宽度是90%
                		}]
                		
                	},{
                    	columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'combo',// 控件的类型设置成combo
                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        	store : zzmm_store,
                        	valueField : "text",// 设置下拉选择框的值
                       		displayField : "text",// 设置下拉选择框的显示文本
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择政治面貌',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        	emptyText : '选择政治面貌',// 在没有选择值时显示为选择学历
                        	hiddenName : 'zzmm',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        	editable : false,// 该下拉列表只允许选择，不允许输入
                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        	allowBlank : true,// 该选项值不允许为空
                        	fieldLabel : '政治面貌',// 控件的标题是学历
                        	name : 'zzmm',// 再次提醒，name只是下拉列表的名称
                        	anchor : '95%'// input的宽度是90%
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                    	columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'combo',// 控件的类型设置成combo
                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        	store : new Ext.data.SimpleStore({
                        		// 通过一个数组定义了returnValue和displayText两个字段。retrunValue字段指定是提交给后台的值，displayText字段指定是在下拉中显示的选择值。
                        		fields : ["returnValue", "displayText"],
                        		// 定义了几组数据.每组数据都是根据fiedls的定义来组成的，数组里第一个值就是retrunValue的值，第二个值就是displayText的值，例如[1,'小学']，就表示retrunValue是1，displayText是小学。
                        		data : [['已婚', '已婚'],
                                   		['已婚', '未婚'], ['离异', '离异']]
                        	}),
                        	valueField : "returnValue",// 设置下拉选择框的值
                       		displayField : "displayText",// 设置下拉选择框的显示文本
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择婚姻状况',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        	emptyText : '选择婚姻状况',// 在没有选择值时显示为选择学历
                        	hiddenName : 'hyzk',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        	editable : false,// 该下拉列表只允许选择，不允许输入
                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        	allowBlank : false,// 该选项值不允许为空
                        	fieldLabel : '婚姻状况',// 控件的标题是学历
                        	name : 'hyzk',// 再次提醒，name只是下拉列表的名称
                        	anchor : '95%'// input的宽度是90%
                		}]
                	},{
                    	columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'combo',// 控件的类型设置成combo
                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        	store : rylb_store,
                        	valueField : "text",// 设置下拉选择框的值
                       		displayField : "text",// 设置下拉选择框的显示文本
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择人员类别',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        	emptyText : '选择人员类别',// 在没有选择值时显示为选择学历
                        	hiddenName : 'gz',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        	editable : false,// 该下拉列表只允许选择，不允许输入
                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        	allowBlank : true,// 该选项值不允许为空
                        	fieldLabel : '人员类别',// 控件的标题是学历
                        	name : 'gz',// 再次提醒，name只是下拉列表的名称
                        	anchor : '95%'// input的宽度是90%
                		}]
                	},{
                    	columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'combo',// 控件的类型设置成combo
                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        	store : aqdj_store,
                        	valueField : "text",// 设置下拉选择框的值
                       		displayField : "text",// 设置下拉选择框的显示文本
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择安全等级',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        	emptyText : '选择安全等级',// 在没有选择值时显示为选择学历
                        	hiddenName : 'aqdj',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        	editable : false,// 该下拉列表只允许选择，不允许输入
                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        	allowBlank : false,// 该选项值不允许为空
                        	fieldLabel : '安全等级',// 控件的标题是学历
                        	name : 'aqdj',// 再次提醒，name只是下拉列表的名称
                        	anchor : '95%'// input的宽度是90%
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                    	columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'combo',// 控件的类型设置成combo
                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        	store : gzdj_store,
                        	valueField : "value",// 设置下拉选择框的值
                       		displayField : "text",// 设置下拉选择框的显示文本
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选应对事故等级',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        	emptyText : '选择应对事故等级',// 在没有选择值时显示为选择学历
                        	hiddenName : 'ydsgdj',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        	editable : true,// 该下拉列表只允许选择，不允许输入
                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        	allowBlank : true,// 该选项值不允许为空
                        	fieldLabel : '应对事故等级',// 控件的标题是学历
                        	name : 'ydsgdj',// 再次提醒，name只是下拉列表的名称
                        	anchor : '95%'// input的宽度是90%
                		}]
                	},{
                	    columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'combo',// 控件的类型设置成combo
                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        	store :zbbc_store,
                        	valueField : "text",// 设置下拉选择框的值
                       		displayField : "text",// 设置下拉选择框的显示文本
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选班次',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        	emptyText : '选择班次',// 在没有选择值时显示为选择学历
                        	hiddenName : 'bc',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        	editable : false,// 该下拉列表只允许选择，不允许输入
                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        	allowBlank : true,// 该选项值不允许为空
                        	fieldLabel : '班次',// 控件的标题是学历
                        	name : 'bc',// 再次提醒，name只是下拉列表的名称
                        	anchor : '95%'// input的宽度是90%
                		}]
                	},{
                	    columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'combo',// 控件的类型设置成combo
                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        	store :jsdj_store,
                        	valueField : "text",// 设置下拉选择框的值
                       		displayField : "text",// 设置下拉选择框的显示文本
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选技术等级',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        	emptyText : '选择技术等级',// 在没有选择值时显示为选择学历
                        	hiddenName : 'jsdj',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        	editable : false,// 该下拉列表只允许选择，不允许输入
                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        	allowBlank : true,// 该选项值不允许为空
                        	fieldLabel : '技术等级',// 控件的标题是学历
                        	name : 'jsdj',// 再次提醒，name只是下拉列表的名称
                        	anchor : '95%'// input的宽度是90%
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
                                                    url : 'RySave.jsp',
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
                                               url : 'RyUpdate.jsp',
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
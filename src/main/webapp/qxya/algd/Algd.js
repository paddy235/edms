Ext.onReady(function(){

    Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
   
    // turn on validation errors beside the field globally
    //Ext.BLANK_IMAGE_URL = '../../ext-3.0/resources/images/default/s.gif';

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
 	     return '<a  href="AlDel.jsp?id='+value+'">删除</a>';
 	 };
 	 
 	 //定义Grid表头
   	 var columns = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
        //new Ext.grid.RowNumberer(),
        {header:'序号',dataIndex:'id',width:40,sortable:true,fixed:true},
        {header:'案例名称',dataIndex:'almc',sortable:true},
        {header:'发生时间',dataIndex:'fssj',sortable:true},
        {header:'地点',dataIndex:'dd',sortable:true},
        {header:'线别',dataIndex:'xbbm',sortable:true},
        {header:'事故分类',dataIndex:'sgfl',sortable:true},
        {header:'事故类型',dataIndex:'sglx',sortable:true},
        {header:'事故所在单位',dataIndex:'sgszdw',sortable:true},
        {header:'是否归档',dataIndex:'sfgd',width:60,fixed:true},
       // {header:'详细',dataIndex:'id',width:60,renderer:renderXiangxi,fixed:true},
        {header:'删除',dataIndex:'id',width:60,renderer:renderDel,fixed:true}
     ]);
     
     var planRecord = Ext.data.Record.create([
    	{name:'id',type:'int'},
    	{name:'albm',type:'string'},
    	{name:'almc',type:'string'},
    	{name:'fssj',type:'string'},
    	{name:'dd',type:'string'},
    	{name:'xbbm',type:'string'},
    	{name:'sgfl',type:'string'},
    	{name:'sglx',type:'string'},
    	{name:'sgszdw',type:'string'},
    	{name:'zbddy',type:'string'},
    	{name:'gzxx',type:'string'},
    	{name:'gzqx',type:'string'},
    	{name:'sgyyjcs',type:'string'},
    	{name:'ylwt',type:'string'},
    	{name:'sfgd',type:'string'},
    	{name:'sjc',type:'string'}
     ]);
     
     //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
	 var store = new Ext.data.Store({
     	//proxy告诉我们从哪里获得数据
     	proxy: new Ext.data.HttpProxy({url:'AlgdLssj.jsp'}),        
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
    	
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	//alert(rowIndex);
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
       	title: '案例归档---->案例查询',
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
                    xtype:'datefield',
                    fieldLabel: '开始日期',
                    name: 'ksrq',
                    anchor:'95%',
                    format:'Y-m-d',
                    allowBlank : false
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
                   anchor:'95%',
                   format:'Y-m-d',
                   allowBlank : false
                }]
            },{
              columnWidth : .3,
              layout : 'form',
              border : false,
              items: [{
                    		xtype : 'combo',
                        	store : new Ext.data.SimpleStore({
                        		fields : ["returnValue", "displayText"],
                        		data : [['支柱折断', '支柱折断'],
                                   		['接触网断线', '接触网断线'], ['设备跳闸', '设备跳闸']]
                        	}),
                        	valueField : "returnValue",
                        	displayField : "displayText",
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择类型',
                        	emptyText : '选择事故类型',
                        	hiddenName : 'sglxcx',
                        	editable : false,
                        	triggerAction : 'all',
                        	//allowBlank : false,
                        	fieldLabel : '事故类型',
                        	name : 'sglxcx',
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
                                     url : 'AlQuery.jsp',
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
     /*
     * ================  您当前的位置：事故案例---->案例新增 =======================
     
	bd.createChild({html: '案例新增'});*/
    var simpleForm_Save = new Ext.FormPanel({
        renderTo : document.body,
        title: '案例归档---->案例',
        labelAlign : 'left',
        //bodyStyle:'padding:5px 5px 0',
        //labelWidth: 75, 
        collapsible:true,
        titleCollapse:true,
        method:'POST',
        frame:true,
        autoWidth:true,
        //width: 1000,
        //fileUpload: true,
        items: [{
            xtype:'tabpanel',
            title: '案例归档---->案例新增',
            activeTab: 0,
            //height:600,
            defaults:{autoHeight:true, bodyStyle:'padding:10px'},
            frame:true,
            items:[{
                title:'事故报告',
				frame:true,
                items : [{
                    layout : 'column',
                    border : false,
                	items:[{xtype:'hidden',name:'id'},{
                    	columnWidth:.5,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '案例名称',
                    		name: 'almc',
                    		anchor:'95%'
                		}]
                	},{
                		columnWidth:.5,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// 控件的类型设置成combo
                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        	store : new Ext.data.SimpleStore({
                        		// 通过一个数组定义了returnValue和displayText两个字段。retrunValue字段指定是提交给后台的值，displayText字段指定是在下拉中显示的选择值。
                        		fields : ["returnValue", "displayText"],
                        		// 定义了几组数据.每组数据都是根据fiedls的定义来组成的，数组里第一个值就是retrunValue的值，第二个值就是displayText的值，例如[1,'小学']，就表示retrunValue是1，displayText是小学。
                        		data : [['武广客专', '武广客专'],
                                   		['陇海线', '陇海线'], ['京广线', '京广线']]
                        	}),
                        	valueField : "returnValue",// 设置下拉选择框的值
                       		displayField : "displayText",// 设置下拉选择框的显示文本
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择线别',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        	emptyText : '选择作业线别',// 在没有选择值时显示为选择学历
                        	hiddenName : 'xbbm',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        	editable : false,// 该下拉列表只允许选择，不允许输入
                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        	allowBlank : false,// 该选项值不允许为空
                        	fieldLabel : '线&nbsp;&nbsp; &nbsp; &nbsp;别',// 控件的标题是学历
                        	name : 'xbbm',// 再次提醒，name只是下拉列表的名称
                        	anchor : '95%'// input的宽度是90%
    					}]	
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                    	columnWidth:.5,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'datefield',
                    		fieldLabel: '发生时间',
                    		name: 'fssj',
                    		anchor:'95%',
                    		format:'Y-m-d H:i:s',
    						timePicker:true
                		}]
                	},{
                		columnWidth:.5,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '地&nbsp;&nbsp; &nbsp; &nbsp;点',
                    		name: 'dd',
                    		anchor:'95%'
    					}]	
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                    	columnWidth:.5,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'combo',
                        	store : new Ext.data.SimpleStore({
                        		fields : ["returnValue", "displayText"],
                        		data : [['接触网', '接触网'],
                                   		['变电所', '变电所'], ['电力', '电力']]
                        	}),
                        	valueField : "returnValue",
                        	displayField : "displayText",
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择分类',
                        	emptyText : '选择事故分类',
                        	hiddenName : 'sgfl',
                        	editable : false,
                        	triggerAction : 'all',
                        	allowBlank : false,
                        	fieldLabel : '事故分类',
                        	name : 'sgfl',
                        	anchor : '95%'
                		}]
                	},{
                		columnWidth:.5,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',
                        	store : new Ext.data.SimpleStore({
                        		fields : ["returnValue", "displayText"],
                        		data : [['支柱折断', '支柱折断'],
                                   		['接触网断线', '接触网断线'], ['设备跳闸', '设备跳闸']]
                        	}),
                        	valueField : "returnValue",
                        	displayField : "displayText",
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择类型',
                        	emptyText : '选择事故类型',
                        	hiddenName : 'sglx',
                        	editable : false,
                        	triggerAction : 'all',
                        	allowBlank : false,
                        	fieldLabel : '事故类型',
                        	name : 'sglx',
                        	anchor : '95%'
    					}]	
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                    	columnWidth:.5,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'combo',
                        	store : new Ext.data.SimpleStore({
                        		fields : ["returnValue", "displayText"],
                        		data : [['长沙站', '长沙站'],
                                   		['湘潭站', '湘潭站'], ['李家段网工区', '李家段网工区']]
                        	}),
                        	valueField : "returnValue",
                        	displayField : "displayText",
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择单位',
                        	emptyText : '选择事故所在单位',
                        	hiddenName : 'sgszdw',
                        	editable : false,
                        	triggerAction : 'all',
                        	allowBlank : false,
                        	fieldLabel : '事故所在单位',
                        	name : 'sgszdw',
                        	anchor : '95%'
                		}]
                	},{
                		columnWidth:.5,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',
                        	store : new Ext.data.SimpleStore({
                        		fields : ["returnValue", "displayText"],
                        		data : [['张调度', '张调度'],
                                   		['侯调度', '侯调度'], ['赵调度', '赵调度']]
                        	}),
                        	valueField : "returnValue",
                        	displayField : "displayText",
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择调度员',
                        	emptyText : '选择调度员',
                        	hiddenName : 'zbddy',
                        	editable : false,
                        	triggerAction : 'all',
                        	allowBlank : false,
                        	fieldLabel : '值班调度员',
                        	name : 'zbddy',
                        	anchor : '95%'
    					}]	
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                    	//columnWidth:.9,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'textarea',// 控件的类型为datefield
                            fieldLabel : '故障信息',
                            name : 'gzxx',
                            anchor : '97%',
                            height:45
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'textarea',
                            fieldLabel : '故障抢修',
                            name : 'gzqx',
                            anchor : '97%',
                            height:70
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'textarea',
                            fieldLabel : '事故原因及影响',
                            name : 'sgyyjcs',
                            anchor : '97%',
                            height:80
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'textarea',// 控件的类型为datefield
                            fieldLabel : '遗留问题',
                            name : 'ylwt',
                            anchor : '97%',
                            height:45
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'checkbox',
                    		fieldLabel: '是否归档',
                    		//boxLabel: 'Dog',
                			name: 'sfgd',
                    		anchor:'97%'
                		}]
                	}]
                }]
            },{
                title:'事故图片',
                frame:true,
                //layout:'form',

                items : [{
                    layout : 'column',
                    border : false,
                	items:[{
                    	columnWidth:.5,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '图片名称',
                    		name: 'tpmc',
                    		anchor:'95%'
                		}]
                	},{
                		columnWidth:.5,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',
                       		store : new Ext.data.SimpleStore({
                        		fields : ["returnValue", "displayText"],
                        		data : [['事故照片', '事故照片'],
                                   		['设备照片', '设备照片']]
                        	}),
                        	valueField : "returnValue",
                       		displayField : "displayText",
                        	mode : 'local',
                        	//forceSelection : true,
                        	blankText : '请选择类型',
                        	emptyText : '选择图片类型',
                        	hiddenName : 'tplx',
                        	editable : false,
                        	triggerAction : 'all',
                        	//allowBlank : false,
                        	fieldLabel : '图片类型',
                        	name : 'tplx',
                        	anchor : '95%'
    					}]	
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'textarea',
                            fieldLabel : '图片描述',
                            name : 'tpms',
                            anchor : '97%',
                            height:45
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                		layout: 'form',
                		border:false,
                		fileUpload: true,
                		items: [{
                    		xtype: 'fileuploadfield',
            				id: 'tplj',
            				anchor: '97%',
            				//allowBlank: false,
           					msgTarget: 'side',
            				emptyText: '请选择图片',
           					fieldLabel: '图片上传',
            				name: 'tplj',
            				buttonText: '',
            				buttonCfg: {
                				iconCls: 'upload-icon'
            				}
                		}]
                	}]
                }]
            },{
                title:'事故影音',
                frame:true,
                //layout:'form',
                items : [{
                    layout : 'column',
                    border : false,
                	items:[{
                    	columnWidth:.5,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '影音名称',
                    		name: 'yymc',
                    		anchor:'95%'
                		}]
                	},{
                		columnWidth:.5,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// 控件的类型设置成combo
                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        	store : new Ext.data.SimpleStore({
                        		// 通过一个数组定义了returnValue和displayText两个字段。retrunValue字段指定是提交给后台的值，displayText字段指定是在下拉中显示的选择值。
                        		fields : ["returnValue", "displayText"],
                        		// 定义了几组数据.每组数据都是根据fiedls的定义来组成的，数组里第一个值就是retrunValue的值，第二个值就是displayText的值，例如[1,'小学']，就表示retrunValue是1，displayText是小学。
                        		data : [['线路录像', '线路录像'],
                                   		['现场录像', '现场录像'],['电话录音', '电话录音']]
                        	}),
                        	valueField : "returnValue",// 设置下拉选择框的值
                       		displayField : "displayText",// 设置下拉选择框的显示文本
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择类型',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        	emptyText : '选择影音类型',// 在没有选择值时显示为选择学历
                        	hiddenName : 'yylx',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        	editable : false,// 该下拉列表只允许选择，不允许输入
                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        	//allowBlank : false,// 该选项值不允许为空
                        	fieldLabel : '影音类型',// 控件的标题是学历
                        	name : 'yylx',// 再次提醒，name只是下拉列表的名称
                        	anchor : '95%'// input的宽度是90%
    					}]	
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'textarea',
                            fieldLabel : '影音描述',
                            name : 'yyms',
                            anchor : '97%',
                            height:45
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype: 'fileuploadfield',
            				id: 'yylj',
            				anchor: '97%',
            				//allowBlank: false,
           					msgTarget: 'side',
            				emptyText: '请选择影音',
           					fieldLabel: '影音上传',
            				name: 'yylj',
            				buttonText: '',
            				buttonCfg: {
                				iconCls: 'upload-icon'
            				}
                		}]
                	}]
                }]
            }]
        }],

        buttons: [{
            text: '保存',
             handler : function() {
                  if (!simpleForm_Save.form.isValid()) {return };
                  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                  if (simpleForm_Save.form.isValid()) {
                     // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                     //this.disabled = true;
                     // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                     simpleForm_Save.form.doAction('submit', {
                                                 	waitMsg:'保存中,请稍侯...',  
                                                    url : 'AlSave.jsp',
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
        },{

             // 取消按钮就是简单的reset一下form的控件
             text : '重置',
             handler : function() {
                   simpleForm_Save.form.reset();
                   //simpleForm_Query.collapse();
                   // window.location.href="";
                   //window.location.href='zyjhsqAdd.jsp';
             }
        }, {
            text : '修改',
            handler : function() {
            	if (!simpleForm_Save.form.isValid()) {return };
           		if (simpleForm_Save.form.isValid()) {
                	simpleForm_Save.form.doAction('submit', {
                                               waitMsg:'修改中,请稍侯...',  
                                               url : 'AlUpdate.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		Ext.Msg.alert('消息',action.result.msg);
                                               		simple_Grid.getStore().reload();
                                               },
                                               failure : function() {
                                                     Ext.Msg.alert('操作', '保存失败！');
                                                     this.disabled = false;
                                               }
            		});
           		 }
             }
         },{
            text: '取消'
        }]
    });
    
    //从session取值赋值给form字段;
	Ext.Ajax.request({
		url: 'GetSessionValue.jsp',
		success: function(response, opts) 
			{
			 simpleForm_Save.getForm().setValues([{id: "id",value: response.responseText} ]);
			},		
		failure: function(response, opts) {
      		console.log('服务端失效的状态代码：' + response.status);
   			}
	});
    
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Save,simpleForm_Query,simple_Grid]
	});
	
	 var tabs2 = new Ext.TabPanel({
        renderTo: document.body,
        activeTab: 0,
        width:600,
        height:250,
        plain:true,
        defaults:{autoScroll: true},
        items:[{
                title: 'Normal Tab',
                html: "Gztp.jsp"
            },{
                title: 'Ajax Tab 1',
                autoLoad:'Gzbg.jsp'
            },{
                title: 'Ajax Tab 2',
                autoLoad: {url: 'Gztp.jsp'}
            },{
                title: 'Event Tab',
                listeners: {activate: handleActivate},
                html: "I am tab 4's content. I also have an event listener attached."
            },{
                title: 'Disabled Tab',
                disabled:true,
                html: "Can't see me cause I'm disabled"
            }
        ]
    });

    function handleActivate(tab){
        alert(tab.title + ' was activated.');
    }
    
    simpleForm_Save.collapse();

    //simpleForm_Save.render(document.body);
});
    
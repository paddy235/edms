Ext.onReady(function() {
	
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
 	     return '<a  href="zyjhsq_del.jsp?id='+value+'">删除</a>';
 	 };
 
    //定义Grid表头
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
        //new Ext.grid.RowNumberer(),
        
        {header:'计划编号',dataIndex:'id',width:60},
        {header:'单位名称',dataIndex:'dwid',width:70,sortable:true},
        {header:'计划号',dataIndex:'jhh',width:60,sortable:true},
        {header:'计划时间',dataIndex:'jhsj',width:60,sortable:true},
       // {header:'详细',dataIndex:'id',width:60,renderer:renderXiangxi,fixed:true},
        {header:'删除',dataIndex:'id',width:60,renderer:renderDel,fixed:true}
    ]);
   
    
    var planRecord = Ext.data.Record.create([
    	{name:'id',type:'int'},
    	{name:'dwid',type:'string'},
    	{name:'jhh',type:'string'},
    	{name:'jhsj',type:'string'}
    	]);
    	
    
    //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'zyjhsq_json.jsp'}),        
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
   	//grid.addListener('cellClick',cellClick);
    //显示在html中id为container的层中
    //grid.render();//渲染表格
     Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
	 // form start

   
   
   
   //Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
	 
	 
	 // form start
	var simpleForm_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '作业计划申请',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 600,
              collapsible:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              labelWidth : 80,
              
              
              items : [{
                                   layout : 'column',// columnlayout
                                   border : false,// 没有边框
                                   labelSeparator : '：',// 标题的分隔符号我们用中文冒号代替英文的冒号（labelSeparator:'：'）。
                                   // coulmnLayout里的控件将定义在items里
                                   items : [{xtype:'hidden',name:'id'}
                                   				,{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'datefield',// 控件的类型为datefield
                                                                             fieldLabel : '单位',
                                                                             name : 'jhsj',
                                                                             anchor : '90%',
                                                                             format:'Y-m-d'
                                                                      }]
                                                 }, {
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '施工地点',
                                                                             name : 'jhh',
                                                                             anchor : '90%'
                                                                           //  format:'Y-m-d'
                                                                             //allowBlank : false// 该选项值不允许为空
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
                                                                      data : [[1, '全部'], [2, '带电作业'],
                                                                                    [3, '远离作业'], [4, '停电作业']]
                                                               }),
                                                               valueField : "returnValue",// 设置下拉选择框的值
                                                               displayField : "displayText",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               //forceSelection : true,// 必须选择一个选项
                                                               blankText : '请选择学历',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '选择作业类别',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'dwid',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : false,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '作业类型',// 控件的标题是学历
                                                               name : 'education',// 再次提醒，name只是下拉列表的名称
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                 }]

                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'datefield',// 控件的类型为datefield
                                                                             fieldLabel : '出生日期',
                                                                             name : 'birthday',
                                                                             anchor : '90%',
                                                                             format:'Y-m-d'
                                                                      }]
                                                 }, {
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
                                                                      data : [[1, '小学'], [2, '初中'],
                                                                                    [3, '高中'], [4, '中专'],
                                                                                    [5, '大专'], [6, '大学']]
                                                               }),
                                                               valueField : "returnValue",// 设置下拉选择框的值
                                                               displayField : "displayText",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               forceSelection : true,// 必须选择一个选项
                                                               blankText : '请选择学历',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '选择学历',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'education',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : false,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '学历',// 控件的标题是学历
                                                               name : 'education',// 再次提醒，name只是下拉列表的名称
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                 }, {
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '施工地点',
                                                                             name : 'jhh',
                                                                             anchor : '90%'
                                                                           //  format:'Y-m-d'
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 }]
                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'datefield',// 控件的类型为datefield
                                                                             fieldLabel : '出生日期',
                                                                             name : 'birthday',
                                                                             anchor : '90%',
                                                                             format:'Y-m-d'
                                                                      }]
                                                 }, {
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
                                                                      data : [[1, '小学'], [2, '初中'],
                                                                                    [3, '高中'], [4, '中专'],
                                                                                    [5, '大专'], [6, '大学']]
                                                               }),
                                                               valueField : "returnValue",// 设置下拉选择框的值
                                                               displayField : "displayText",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               forceSelection : true,// 必须选择一个选项
                                                               blankText : '请选择学历',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '选择学历',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'education',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : false,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '学历',// 控件的标题是学历
                                                               name : 'education',// 再次提醒，name只是下拉列表的名称
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                 }, {
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '施工地点',
                                                                             name : 'jhh',
                                                                             anchor : '90%'
                                                                           //  format:'Y-m-d'
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 }]
                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'datefield',// 控件的类型为datefield
                                                                             fieldLabel : '出生日期',
                                                                             name : 'birthday',
                                                                             anchor : '90%',
                                                                             format:'Y-m-d'
                                                                      }]
                                                 }, {
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
                                                                      data : [[1, '小学'], [2, '初中'],
                                                                                    [3, '高中'], [4, '中专'],
                                                                                    [5, '大专'], [6, '大学']]
                                                               }),
                                                               valueField : "returnValue",// 设置下拉选择框的值
                                                               displayField : "displayText",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               forceSelection : true,// 必须选择一个选项
                                                               blankText : '请选择学历',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '选择学历',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'education',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : false,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '学历',// 控件的标题是学历
                                                               name : 'education',// 再次提醒，name只是下拉列表的名称
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                 }, {
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '施工地点',
                                                                             name : 'jhh',
                                                                             anchor : '90%'
                                                                           //  format:'Y-m-d'
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 }]
                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'datefield',// 控件的类型为datefield
                                                                             fieldLabel : '出生日期',
                                                                             name : 'birthday',
                                                                             anchor : '90%',
                                                                             format:'Y-m-d'
                                                                      }]
                                                 }, {
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
                                                                      data : [[1, '小学'], [2, '初中'],
                                                                                    [3, '高中'], [4, '中专'],
                                                                                    [5, '大专'], [6, '大学']]
                                                               }),
                                                               valueField : "returnValue",// 设置下拉选择框的值
                                                               displayField : "displayText",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               forceSelection : true,// 必须选择一个选项
                                                               blankText : '请选择学历',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '选择学历',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'education',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : false,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '学历',// 控件的标题是学历
                                                               name : 'education',// 再次提醒，name只是下拉列表的名称
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                 }, {
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '施工地点',
                                                                             name : 'jhh',
                                                                             anchor : '90%'
                                                                           //  format:'Y-m-d'
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 }]
                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'datefield',// 控件的类型为datefield
                                                                             fieldLabel : '出生日期',
                                                                             name : 'birthday',
                                                                             anchor : '90%',
                                                                             format:'Y-m-d'
                                                                      }]
                                                 }, {
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
                                                                      data : [[1, '小学'], [2, '初中'],
                                                                                    [3, '高中'], [4, '中专'],
                                                                                    [5, '大专'], [6, '大学']]
                                                               }),
                                                               valueField : "returnValue",// 设置下拉选择框的值
                                                               displayField : "displayText",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               forceSelection : true,// 必须选择一个选项
                                                               blankText : '请选择学历',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '选择学历',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'education',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : false,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '学历',// 控件的标题是学历
                                                               name : 'education',// 再次提醒，name只是下拉列表的名称
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                 }, {
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '施工地点',
                                                                             name : 'jhh',
                                                                             anchor : '90%'
                                                                           //  format:'Y-m-d'
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 }]
                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'datefield',// 控件的类型为datefield
                                                                             fieldLabel : '出生日期',
                                                                             name : 'birthday',
                                                                             anchor : '90%',
                                                                             format:'Y-m-d'
                                                                      }]
                                                 }, {
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
                                                                      data : [[1, '小学'], [2, '初中'],
                                                                                    [3, '高中'], [4, '中专'],
                                                                                    [5, '大专'], [6, '大学']]
                                                               }),
                                                               valueField : "returnValue",// 设置下拉选择框的值
                                                               displayField : "displayText",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               forceSelection : true,// 必须选择一个选项
                                                               blankText : '请选择学历',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '选择学历',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'education',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : false,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '学历',// 控件的标题是学历
                                                               name : 'education',// 再次提醒，name只是下拉列表的名称
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                 }, {
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '施工地点',
                                                                             name : 'jhh',
                                                                             anchor : '90%'
                                                                           //  format:'Y-m-d'
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 }]
                            }
                           
                            ],
              // 为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
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
                                                                      url : 'save.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                                                                      // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                                                                      success : function(form, action) {
                                                                             // 例如返回的json结构是"{success:true,data:'成功保存！'}"，
                                                                             //Ext.Msg.alert('操作',action.result.data);
                                                                      		//Ext.Msg.alert('消息',action.result.msg);
                                                                      		//simpleForm_Query.form.reset();
                                                                      		// window.location.href='zyjhsq.jsp';
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
                                   text : '重置',
                                   handler : function() {
                                          simpleForm_Save.form.reset();
                                          //simpleForm_Query.collapse();
                                         // window.location.href="";
                                          //window.location.href='zyjhsqAdd.jsp';
                                   }
                            }, {
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
                                    text : '修改',
                                   handler : function() {
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                                          if (simpleForm_Save.form.isValid()) {
                                                 // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                                                 //this.disabled = true;
                                                 // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                                                 simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'修改中,请稍侯...',  
                                                                      url : 'Update.jsp',
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
                                          // 如果想form按以前的老办法提交，可以在formpanel的定义中加入一下设置：
                                          // onSubmit: Ext.emptyFn,
                                          // submit: function() {
                                          // this.getEl().dom.submit();}
                                          // 第一个设置的目的是取消formpanel的默认提交函数。第二就是设置新的提交方式为旧方式提交。

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
    	
    	simpleForm_Save.getForm().loadRecord(record);
    });	
    	
     
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Save,simple_Grid]
	});
    
    simpleForm_Save.collapse();

});
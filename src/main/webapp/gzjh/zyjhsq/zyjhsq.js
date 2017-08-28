Ext.onReady(function() {
	Ext.QuickTips.init();
	userDwid=document.getElementById("userDwid").value;
	var userdj=document.getElementById("userdj").value;
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    
 	//渲染返回html代码
 	 var renderXiangxi =function(value)
 	 {
 	     return '<a href="aa.jsp?id='+value+'">详细</a>';
 	 };
 	 var renderDel =function(value)
 	 {
 	     return '<a  href="zyjhsq_del.jsp?id='+value+'">删除</a>';
 	 };
      	 var zt =function (value)
 	 {
 	 	if (value=='-1') {return '已作废';}
  		if (value=='0')  {return '草拟计划';}
  		if (value=='1')  {return '<div  style="color:blue;">待供电段上报</div>';}
  		if (value=='2')  {return '<div  style="color:B08100;">待电调审批</div>';}
  		if (value=='3')  {return '<div  style="color:FF8100;">待电调主任审批</div>';}
  		if (value=='4')  {return '<div  style="color:red;">待施工主任审批</div>';}
		if (value=='5')  {return '<div  style="color:red;">待值班主任审批</div>';}
  	    if(value=="6")	 {return '<div  style="color:555800;">待归档</div>';}	
		if(value=="9")	 {return '<div  style="color:green;">已经归档</div>';}
 	 }
 	 
 	 ///////------******------------下拉列表框stor----------------********----------------
 	 	//////-------------------------下拉列表框的数据绑定------------------------------------

	/*--申请单位---*/
	var sql="";
	if(userdj=="3")
	{
	 sql="select dwdm,dwjc from v_j_gyjc_yhdw where jb=6 ";
	}else
	{
	 sql="select dwdm,dwjc from v_j_gyjc_yhdw where jb=6 and dwdm like '"+userDwid+"%25'";
	}
	
    //alert(sql);
 	var planRecord_sqdw = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
 	var store_sqdw = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_sqdw)
    });
   store_sqdw.load(); 
	/*--要领站---*/
	 var sql_ylz="select   distinct(ylz),t.dwid from z_yxgl_zyjh t where dwid=\'"+userDwid+"\'";
    
 	var planRecord_ylz = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
 	var store_ylz = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_ylz}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_ylz)
    });
   store_ylz.load();
   /*--计划类型---*/
   	 var sql_jhlx="select * from J_GDGY_SXZD where substr(sxid,0,3)=\'006\' and sxid!=\'006000\'";
    
 	var planRecord_jhlx = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
 	var store_jhlx = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_jhlx}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_jhlx)
    });
   store_jhlx.load(); 
/*--线别---*/
   	 var sql_xb="select xldm,xlm from J_gyjc_xlzd";
    
 	var planRecord_xb = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
 	var store_xb = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_xb}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_xb)
    });
   store_xb.load();
   //----------------*********************************
   
   /*--配合单位---*/
   	 var sql_phdw="select   distinct(phdw),t.dwid from z_yxgl_zyjh t where dwid=\'"+userDwid+"\'";
    
 	var planRecord_phdw = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
 	var store_phdw = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_phdw}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_phdw)
    });
   store_phdw.load();
   //----------------*********************************
 	 
 	 
 	 
 	 
    //定义Grid表头
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
        //new Ext.grid.RowNumberer(),
        
        {header:'序号',dataIndex:'xh',width:40,fixed:true},
        {header:'单位名称',dataIndex:'dwmc',width:70,sortable:true,fixed:true},
        {header:'填报时间',dataIndex:'tbsj',width:120,sortable:true,fixed:true},
        {header:'作业日期',dataIndex:'jhsj',width:80,sortable:true,fixed:true},
        {header:'线别',dataIndex:'xlm',width:60,fixed:true},
        {header:'填报人',dataIndex:'xingb',width:60,fixed:true},
        {header:'计划类别',dataIndex:'jhlb',width:60,sortable:true,fixed:true},

        {header:'配合单位',dataIndex:'phdw',width:60,sortable:true},
        {header:'维修项目',dataIndex:'wxxm',width:120,sortable:true},
		{header:'作业地点',dataIndex:'sgdd',width:120,sortable:true},
        {header:'工作领导人',dataIndex:'fzr',width:60,sortable:true},
		{header:'状态',dataIndex:'zt',width:60,renderer:zt,sortable:true},
        {header:'删除',dataIndex:'id',width:60,renderer:renderDel,fixed:true}
    ]);
   
    
    var planRecord = Ext.data.Record.create([
    	{name:'id',type:'int'},
    	{name:'xh',type:'int'},
    	{name:'dwid',type:'string'},
    	{name:'jhh',type:'string'},
    	{name:'jhsj',type:'string'},
    	{name:'xianb',type:'string'},
    	{name:'xingb',type:'string'},
    	{name:'jhlb',type:'string'},
    	{name:'sgdd',type:'string'},
    	{name:'ydsj',type:'string'},
    	{name:'wxxm',type:'string'},
    	{name:'phdw',type:'string'},
    	{name:'fzr',type:'string'},
    	{name:'jhlx',type:'string'},
    	{name:'tbsj',type:'string'},
    	{name:'nrjyq',type:'string'},
    	{name:'bz',type:'string'},
    	{name:'spr',type:'string'},
    	{name:'zt',type:'string'},
    	{name:'yxfw',type:'string'},
    	{name:'mlh',type:'string'},
    	{name:'ylz',type:'string'},
    	{name:'fsfw',type:'string'},
    	{name:'jhnr',type:'string'},
    	{name:'dwmc',type:'string'},
    	{name:'xlm',type:'string'},
    	{name:'sxmc',type:'string'},//计划类型的名称
    	{name:'gdcnr',type:'string'},
    	{name:'sjc',type:'string'}
    	
    	
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
              //width : 800,
              collapsible:true,
              titleCollapse:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              labelWidth : 70,
              
              
              items : [{
                                   layout : 'column',// columnlayout
                                   border : false,// 没有边框
                                   labelSeparator : '：',// 标题的分隔符号我们用中文冒号代替英文的冒号（labelSeparator:'：'）。
                                   // coulmnLayout里的控件将定义在items里
                                   items : [{xtype:'hidden',name:'id'},{xtype:'hidden',name:'jhh',value:'0'},{xtype:'hidden',name:'mlh',value:'0'}
                                   				,{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// 控件的类型设置成combo
                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                                                               store :store_sqdw,
                                                               valueField : "value",// 设置下拉选择框的值
                                                               displayField : "text",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               forceSelection : true,// 必须选择一个选项
                                                               blankText : '请选申请单位',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '请选申请单位',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'dwid',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : false,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '施工单位',// 控件的标题是学历
                                                               name : 'dwid',// 再次提醒，name只是下拉列表的名称
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                 },{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '填报时间',
                                                                             name : 'tbsj',
                                                                             anchor : '90%',
																			// allowBlank : false,	
																			 readOnly : true,
																			 id:'tbsj'
                                                                      }]
                                                 },{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
																			xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '填报人',
                                                                             name : 'xingb',
																		     readOnly : true,	
																			 id:'tbr',	
                                                                             anchor : '90%'
																			// allowBlank : false
                                                                           
                                                        }]
                                                 },{	columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// 控件的类型设置成combo
                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                                                               store :store_xb,
                                                               valueField : "value",// 设置下拉选择框的值
                                                               displayField : "text",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               forceSelection : true,// 必须选择一个选项
                                                               blankText : '请选择线别',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '请选择线别',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'xianb',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : false,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '线别',// 控件的标题是学历
                                                               name : 'xianb',// 再次提醒，name只是下拉列表的名称
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                 }]

                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [{			columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// 控件的类型设置成combo
                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                                                               store : new Ext.data.SimpleStore({
                                                                      // 通过一个数组定义了returnValue和displayText两个字段。retrunValue字段指定是提交给后台的值，displayText字段指定是在下拉中显示的选择值。
                                                                      fields : ["returnValue", "displayText"],
                                                                      // 定义了几组数据.每组数据都是根据fiedls的定义来组成的，数组里第一个值就是retrunValue的值，第二个值就是displayText的值，例如[1,'小学']，就表示retrunValue是1，displayText是小学。
                                                                      data : [['接触网', '接触网'],['电力线路', '电力线路'],['电力配电', '电力配电'],['牵引变电', '牵引变电'],['其它', '其它']]
                                                               }),
                                                               valueField : "returnValue",// 设置下拉选择框的值
                                                               displayField : "displayText",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               forceSelection : true,// 必须选择一个选项
                                                               blankText : '选择作业类别',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '选择作业类别',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'jhlb',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : false,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '计划类别',// 控件的标题是学历
                                                               name : 'jhlb',// 再次提醒，name只是下拉列表的名称
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                 },{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// 控件的类型设置成combo
                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                                                               store :store_jhlx,
                                                               valueField : "value",// 设置下拉选择框的值
                                                               displayField : "text",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               //forceSelection : true,// 必须选择一个选项
                                                               blankText : '选择计划类型',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '选择计划类型',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'jhlx',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : false,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '计划类型',// 控件的标题是学历
                                                               name : 'jhlx',// 再次提醒，name只是下拉列表的名称
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                 }, {
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
																 xtype : 'textfield',// 控件的类型为datefield
																 fieldLabel : '作业日期',
																 allowBlank : false,
																 name : 'jhsj',
																 anchor : '90%',
																 listeners: {"focus": function(){
																 WdatePicker({dateFmt:'yyyy-MM-dd'})}}
                                                         }]
                                                 },{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
																 xtype : 'textfield',// 控件的类型为datefield
																 fieldLabel : '作业时间',
																 name : 'ydsj',
																 id:'txt_ydsj',																 
                                                                 anchor : '90%'
                                                                           
                                                          }]
                                                 }]
                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [ {
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// 控件的类型设置成combo
                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                                                               store : store_phdw,
                                                               valueField : "value",// 设置下拉选择框的值
                                                               displayField : "value",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               //forceSelection : true,// 必须选择一个选项
                                                               blankText : '选择配合单位',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '选择配合单位',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'phdw',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : true,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               //allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '配合单位',// 控件的标题是学历
                                                               name : 'phdw',// 再次提醒，name只是下拉列表的名称
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                 }, {
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '工作领导人',
                                                                             name : 'fzr',
                                                                             anchor : '90%'
                                                                           //  format:'Y-m-d'
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 }, {
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
														items : [{
                                                               xtype : 'combo',// 控件的类型设置成combo
                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                                                               store : store_ylz,
                                                               valueField : "value",// 设置下拉选择框的值
                                                               displayField : "value",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               //forceSelection : true,// 必须选择一个选项
                                                               blankText : '选择要令站',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '选择要令站',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'ylz',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : true,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               //allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '要令站',// 控件的标题是学历
                                                               name : 'ylz',// 再次提醒，name只是下拉列表的名称
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                 } ,{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '维修项目',
                                                                             name : 'wxxm',
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
                                                        columnWidth : 0.25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
																 xtype : 'field',
																 fieldLabel : '作业地点',
																 name : 'sgdd',
																 anchor : '90%'
														  }]
                                                 }, {
                                                        columnWidth : 0.75,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '作业内容',
                                                                             name : 'jhnr',
                                                                             anchor : '97%'
                                                                      }]
                                                 }]
                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '停电范围',
                                                                             name : 'nrjyq',
                                                                             anchor : '90%'
                                                                      }]
                                                 },{
                                                        columnWidth : .35,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '封锁范围',
                                                                             name : 'fsfw',
                                                                             anchor : '90%'
                                                                      }]
                                                 },{
                                                        columnWidth : .4,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '轨道车运行',
                                                                             name : 'gdcnr',
                                                                             anchor : '95%'
                                                                      }]
                                                 }]
                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [{
                                                        columnWidth : .99,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textarea',// 控件的类型为datefield
                                                                             fieldLabel : '备注',
                                                                             name : 'bz',
                                                                             anchor : '98%',
                                                                             height:'40'
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
                                                                      		Ext.Msg.alert('消息',action.result.msg);
                                                                      		//simpleForm_Query.form.reset();
                                                                      		// window.location.href='zyjhsq.jsp';
                                                                      		simpleForm_Save.collapse();
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
                                          simpleForm_Save.buttons[0].setVisible(true);//新增
										  simpleForm_Save.buttons[2].setVisible(false);//修改
										  simpleForm_Save.buttons[4].setVisible(false);//上报
										  simpleForm_Save.buttons[5].setVisible(false);//汇总
                                   }
                            }, {
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
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
                                                                      url : 'Update.jsp',
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
                                          // 如果想form按以前的老办法提交，可以在formpanel的定义中加入一下设置：
                                          // onSubmit: Ext.emptyFn,
                                          // submit: function() {
                                          // this.getEl().dom.submit();}
                                          // 第一个设置的目的是取消formpanel的默认提交函数。第二就是设置新的提交方式为旧方式提交。

                                   }
                            }, {
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
                                   text : '添加停电区段',
                                   handler : function() {
                                        //var win;
                                         //alert("asdfasdf");
							      		 tdqj();
								        
								        //alert(document.getElementById("id").value);
								        //simpleForm_AddGdb.getForm().setValues([{id: 'jhid',value:document.getElementById("id").value}]);

                                   }
                            },{
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
                                   text : '上报',
                                   
                                   handler : function() {
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                                          if (simpleForm_Save.form.isValid()) {
                                                 // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                                                 //this.disabled = true;
                                                 // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                                                 simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'上报中,请稍侯...',  
                                                                      url : 'up.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                                                                      // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                                                                      success : function(form, action) {
                                                                             // 例如返回的json结构是"{success:true,data:'成功保存！'}"，
                                                                             //Ext.Msg.alert('操作',action.result.data);
                                                                      		//Ext.Msg.alert('消息',action.result.msg);
                                                                      		//simpleForm_Query.form.reset();
                                                                      		Ext.Msg.alert('消息',action.result.msg);
                                                                      		simpleForm_Save.collapse();
                                                                      		simple_Grid.getStore().reload();
                                                                      		
                                                                      },
                                                                      // 定义failure函数，就是网络通讯存在问题的时候将显示错误信息。
                                                                      failure : function() {
                                                                             Ext.Msg.alert('操作', '上报失败！');
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
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
                                   text : '汇总',
                                   
                                   handler : function() {
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                                          if (simpleForm_Save.form.isValid()) {
                                                 // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                                                 //this.disabled = true;
                                                 // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                                                 simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'汇总中,请稍侯...',  
                                                                      url : 'hz.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                                                                      // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                                                                      success : function(form, action) {
                                                                             // 例如返回的json结构是"{success:true,data:'成功保存！'}"，
                                                                             //Ext.Msg.alert('操作',action.result.data);
                                                                      		//Ext.Msg.alert('消息',action.result.msg);
                                                                      		//simpleForm_Query.form.reset();
                                                                      		Ext.Msg.alert('消息',action.result.msg);
                                                                      		simpleForm_Save.collapse();
                                                                      		simple_Grid.getStore().reload();
                                                                      		
                                                                      },
                                                                      // 定义failure函数，就是网络通讯存在问题的时候将显示错误信息。
                                                                      failure : function() {
                                                                             Ext.Msg.alert('操作', '汇总失败！');
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
    	 simpleForm_Save.expand();
    	
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	
    	    simpleForm_Save.buttons[2].setVisible(true);//修改
            simpleForm_Save.buttons[3].setVisible(false);//添加停电
            simpleForm_Save.buttons[0].setVisible(false);//新增
            //simpleForm_Save.buttons[1].setVisible(false);//重置
			if(document.getElementById("userdj").value==4){
				simpleForm_Save.buttons[4].setVisible(true);//运输段上报
			}else{
				simpleForm_Save.buttons[4].setVisible(false);//
			}
			if(document.getElementById("userdj").value==5){
				simpleForm_Save.buttons[5].setVisible(true);//工队汇总
			}else{
				simpleForm_Save.buttons[5].setVisible(false);//工队汇总
			}
			
    	simpleForm_Save.getForm().loadRecord(record);
		if(document.getElementById("userdj").value==4){     // 运输段自动填写填报人姓名和时间
				Ext.getCmp('tbr').getEl().dom.readOnly = true;
				simpleForm_Save.getForm().setValues([{id: "tbr",value:document.getElementById("userName").value} ]);
				simpleForm_Save.getForm().setValues([{id: "tbsj",value:get_nowTime()} ]);
		}
    });	
    	
    /*/从session取值赋值给form字段;
	Ext.Ajax.request({
		url: 'getSessionValue.jsp',
		success: function(response, opts) 
			{
			 simpleForm_Save.getForm().setValues([{id: "dwmc",value: response.responseText} ]);
			
			},		
		failure: function(response, opts) {
      		console.log('服务端失效的状态代码：' + response.status);
   			}
	});*/
     
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Save,simple_Grid]
	});
    
    simpleForm_Save.collapse();
    //simpleForm_Save.buttons[2].disabled=true;
    //simpleForm_Save.buttons[3].disabled=true;
    simpleForm_Save.buttons[2].setVisible(false);
    //simpleForm_Save.buttons[3].setVisible(false);
    simpleForm_Save.buttons[3].setVisible(false);
    simpleForm_Save.buttons[4].setVisible(false);
	simpleForm_Save.buttons[5].setVisible(false);
	if(document.getElementById("userdj").value==4){     // 运输段自动填写填报人姓名和时间
			Ext.getCmp('tbr').getEl().dom.readOnly = true;
			simpleForm_Save.getForm().setValues([{id: "tbr",value:document.getElementById("userName").value} ]);
			simpleForm_Save.getForm().setValues([{id: "tbsj",value:get_nowTime()} ]);
	}
});

function get_nowTime()
{
  //***得到当前时间**//
    var myyear,mymonth,myweek,myday,mytime,mymin,myhour,mysec;
	var mydate=new Date();
	myyear=mydate.getFullYear();
	mymonth=mydate.getMonth()+1;
	//alert(mymoth);
	//if(mymonth<10)
	//mymoth="0"+mymoth;
	myday=mydate.getDate();
	//if(myday<10)
	//myday="01";
	myhour=mydate.getHours();
	//if(myhour<10)
	//myhour="00";
	mymin=mydate.getMinutes();
	return myyear+"-"+mymonth+"-"+myday+" "+myhour+":"+mymin;
} 

var win;
var userDwid;


function tdqj()
    {
    	       //--****-------------下拉框数据绑定-----------------******-
/*--电调对应的变电所---*/
	var id='\'001\'';
	//alert(userDwid);
	 var sql="select gqdm,gqmc from J_GYJC_GQZD where jglbdm='2'";

 	var planRecord_bds = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
 	var store_bds = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_bds)
    });
   store_bds.load();
   //*--------停电区间---------------------*/
   var sql_tdqj="select * from J_GYJC_QJZCZD";
    	var planRecord_tdqj = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
 	var store_tdqj = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_tdqj}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_tdqj)
    });
   //store_tdqj.load();
   
   
   
   
   
    	     var simpleForm_AddGdb = new Ext.FormPanel({
              //renderTo : document.body,
     			
              labelAlign : 'left',
              //applyTo: 'hello-tabs',
              //title : '添加停电区段',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 580,
              collapsible:true,
              //titleCollapse:true,
              method:'POST',
              autoWidth:true,
              //autoScroll:true,
              frame : true,
              labelWidth : 70,
               items : [{
                                   layout : 'column',// columnlayout
                                   border : false,// 没有边框
                                   labelSeparator : '：',// 标题的分隔符号我们用中文冒号代替英文的冒号（labelSeparator:'：'）。
                                   // coulmnLayout里的控件将定义在items里
                                    items : [{xtype:'hidden',name:'tdqjid'}
                                    
                                    ,{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// 控件的类型设置成combo
                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                                                               store :store_bds,
                                                               listeners:{
                                                               			select:function(combo,planRecord_bds,index){
                                                               				
                                                               				var value = planRecord_bds.get('value');
                                                               				//Ext.Msg.alert(value);   
                                                               			    sql_tdqj="select * from J_GYJC_QJZCZD where gqdm=\'"+value+"\' and sx=\'1\'";
                                                               			    
                                                               				var combo2 = Ext.getCmp('combo_tdqj'); 
	                                                               		    combo2.enable();      
	                          											    combo2.reset();   
	                          											    //combo2.disable();
	                          											    //alert(sql_tdqj);
	                          										        combo2.store.proxy = new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_tdqj});
	                          										        combo2.store.load();
                                                               			}
                                                               			
                                                               },
                                                               valueField : "value",// 设置下拉选择框的值
                                                               displayField : "text",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               forceSelection : true,// 必须选择一个选项
                                                               blankText : '请选择变电所',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '请选择变电所',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'dwmc',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : false,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '变电所',// 控件的标题是学历
                                                               name : 'bds',// 再次提醒，name只是下拉列表的名称
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                 } ,{
                                                        columnWidth : .66,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// 控件的类型设置成combo
                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                                                               store : store_tdqj,
                                                               valueField : "value",// 设置下拉选择框的值
                                                               displayField : "text",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               forceSelection : true,// 必须选择一个选项
                                                               blankText : '请选择停电区间',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '请选择停电区间',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'tdqdmc',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : false,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '停电区间',// 控件的标题是学历
                                                               name : 'tdqdmc',// 再次提醒，name只是下拉列表的名称
                                                               id:'combo_tdqj',
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                 }
                                    
                                    
                                    ]
               }],
              // 为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
              buttons : [{
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
                                    text : '添加',
                                   handler : function() {
                                          if (!simpleForm_AddGdb.form.isValid()) {return };
                                   		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                                          if (simpleForm_AddGdb.form.isValid()) {
                                                 // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                                                 //this.disabled = true;
                                                 // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                                                 simpleForm_AddGdb.form.doAction('submit', {
                                                 					  waitMsg:'保存中,请稍侯...',  
                                                                      url : 'tdqj_save.jsp?jhid='+document.getElementById("id").value,
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
                                                                      		  // simpleForm_AddGdb.collapse();
																				//simpleForm_AddGdb.collapse();
                                                                      		simple_sp_Grid.getStore().reload();
                                                                      		 
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
                            },  {
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
                                    text : '删除',
                                   handler : function() {
                                          if (!simpleForm_AddGdb.form.isValid()) {return };
                                   		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                                          if (simpleForm_AddGdb.form.isValid()) {
                                                 // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                                                 //this.disabled = true;
                                                 // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                                                 simpleForm_AddGdb.form.doAction('submit', {
                                                 					  waitMsg:'修改中,请稍侯...',  
                                                                      url : 'tdqj_del.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                                                                      // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                                                                      success : function(form, action) {
                                                                             // 例如返回的json结构是"{success:true,data:'成功保存！'}"，
                                                                             //Ext.Msg.alert('操作',action.result.data);
                                                                      		//Ext.Msg.alert('消息',action.result.msg);
                                                                      		//simpleForm_Query.form.reset();
                                                                      		Ext.Msg.alert('消息',action.result.msg);
                                                                      		simple_sp_Grid.getStore().reload();
                                                                      		
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
    //simpleForm_AddGdb.getForm().setValues([{id: 'jhid',value:document.getElementById("id").value}]);
    	     //停电区间的标头
    var column_sp =new  Ext.grid.ColumnModel([
         {header:'序号',dataIndex:'xh',width:90,fixed:true},
          {header:'变电所',dataIndex:'dwmc',width:90,fixed:true},
           {header:'停电区间',dataIndex:'tdqdmc',width:290}
    
    ]);
    //停电区间的数据对应
      var planRecord_sp=Ext.data.Record.create([
      {name:'xh',type:'int'},
      {name:'tdqjid',type:'string'},
      {name:'dwmc',type:'string'},
      {name:'tdqdmc',type:'string'}
      ]);
      
              //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store_sp = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据 
        proxy: new Ext.data.HttpProxy({url:'tdqj_json.jsp?jhid='+document.getElementById("id").value}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_sp)
    });
	store_sp.load({params:{start:0, limit:3}});
        var simple_sp_Grid = new Ext.grid.GridPanel({
        //el:指定html元素用于显示的grid
        //el: 'grid3', 
        //applyTo: 'hello-grid',
        store:store_sp,
    	cm: column_sp,
    	sm: new Ext.grid.RowSelectionModel({singleSelcet:true}),
        //title: '停电区段显示',
        //列重新计算后自动填满
        viewConfig:{
        	forceFit:true,
         	columnsText:"显示的列",
         	sortAscText:"升序",
         	sortDescText:"降序"
        },
        loadMask:{msg:"数据加载中...."},        
        collapsible: true,
        //titleCollapse:true,
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
            pageSize: 3,
            store: store_sp,
            displayInfo: true,
            displayMsg: '第 {0} 条到 {1} 条,共 {2} 条',
            emptyMsg: "无记录"
        })
    
    });
      simple_sp_Grid.addListener('rowclick', function(simple_sp_Grid,rowIndex,event){
    	// simpleForm_Query.collapse();
    	 //simpleForm_Save.expand();
    	//simpleForm_AddGdb.expand();
    	var record=simple_sp_Grid.getStore().getAt(rowIndex);
    	//alert(rowIndex);
    	//alert(record.get('xh')+' '+record.get('dwmc')+' '+record.get('tdqdmc'));
    	//simpleForm_AddGdb.expand();
    	
	  
    	simpleForm_AddGdb.getForm().loadRecord(record);
    });	
    	
    // create the window on the first click and reuse on subsequent clicks
	if(!win){
		win = new Ext.Window({
		//applyTo:'hello-win',
		//layout:'fit',
		//renderto:document.body,
		width:700,
								                title: '添加停电区段',
                								layout:'column',
								                height:400,
								                //closeAction:'hide', 
								                plain: true,
								                closable: false,//隐藏右上方关闭按钮
								                autoScroll:true,
								                items: [simpleForm_AddGdb,simple_sp_Grid],
												
								                
								                buttons: [{
								                    text: '关闭',
								                    handler: function(){
								                       // win.hide();
								                        win.hide(this);
								                    }
								                }]
								            });
    }
		win.show(this);						        
    }
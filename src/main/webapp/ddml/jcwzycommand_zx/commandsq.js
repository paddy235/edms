Ext.onReady(function() {
	
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    
   
   // var bds_mlh=document.getElementById("bds_mlh").value;
    var jhid=document.getElementById("jhid").value;
    var ddtdm=document.getElementById("ddtdm").value;//电调台代码
    var userDwid=document.getElementById("userDwid").value;//电调台代码
       var username=document.getElementById("username").value;//电调台代码
    
    //alert("zcvzxvc");
    ddtdm=userDwid;
    var kpmc="";
    //alert(bds_mlh);
   
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
 	 	if(value=="0")
 	 	{
 	 	  return '未上报';
 	 	}
 	 	else if(value=="1")
 	 	{
 	 		return '待下令';
 	 	}
 	 	else if(value=="2")
 	 	{
 	 		return '<div  style="color:blue;">待受令</div>';
 	 	}
 	 		else if(value=="3")
 	 	{
 	 		return '<div  style="color:red;">施工中</div>';
 	 	}else if(value=="4")
 	 	{
 	 		return '<div  style="color:green;">等待消令</div>';
 	 	}else if(value=="5")
 	 	{
 	 		return '<div  style="color:green;">已完成</div>';
 	 	}
 	 	else
 	 	{
 	 		 return '作废';
 	 	}
 	 }
    //定义Grid表头
     var sm = new Ext.grid.CheckboxSelectionModel();
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
        //new Ext.grid.RowNumberer(),
        sm,
        {header:'序号',dataIndex:'xh',width:40,fixed:true},
        {header:'命令号',dataIndex:'mlh',width:70,fixed:true,sortable:true},
        {header:'命令类型',dataIndex:'mllx',width:70,fixed:true,sortable:true},
        {header:'受令变电所',dataIndex:'gqmc',width:90,fixed:true,sortable:true},
        {header:'操作卡片号',dataIndex:'czkah',width:250,fixed:true,sortable:true},
       // {header:'命令内容',dataIndex:'mlnr',width:40,sortable:true},
        {header:'停电单元',dataIndex:'tsdqj',width:60,sortable:true},
      //  {header:'批准时间',dataIndex:'pzsj',width:60,sortable:true},
      //  {header:'消令时间',dataIndex:'xlsj',width:60,sortable:true},
        // {header:'发令人',dataIndex:'flr',width:60,sortable:true},
         //{header:'受令人',dataIndex:'slr',width:60,sortable:true},
       // {header:'消令人',dataIndex:'xlr',width:60,sortable:true},
         {header:'状态',dataIndex:'mlzt',width:60,fixed:true,renderer:zt,sortable:true}
       // {header:'负责人',dataIndex:'fzr',width:60,sortable:true}
       // {header:'详细',dataIndex:'id',width:60,renderer:renderXiangxi,fixed:true},
        //{header:'删除',dataIndex:'id',width:60,renderer:renderDel,fixed:true}
    ]);
   
    
    var planRecord = Ext.data.Record.create([
    	{name:'commdid',type:'int'},
    	{name:'xh',type:'int'},
    	{name:'dwid',type:'string'},
    	{name:'dwmc',type:'string'},
    	{name:'jhid',type:'string'},
    	{name:'mlh',type:'string'},
    	{name:'sldwid',type:'string'},
    	{name:'sldwmc',type:'string'},
    	{name:'czkah',type:'string'},
    	{name:'mlnr',type:'string'},
    	{name:'tsdqj',type:'string'},
    	{name:'flsj',type:'string'},
    	{name:'pzsj',type:'string'},
    	{name:'xlsj',type:'string'},
    	{name:'flr',type:'string'},
    	{name:'slr',type:'string'},
    	{name:'xlr',type:'string'},
    	{name:'mlbz',type:'string'},
    	{name:'mlzt',type:'string'},
    	{name:'mllx',type:'string'},
    	{name:'ddy',type:'string'},
    	{name:'gqmc',type:'string'},
    	//{name:'tdqdmc',type:'string'},
    	{name:'czlx',type:'string'}
    	
    	]);
    	
    
    //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'commandsp_json.jsp?jhid='+jhid}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord)
    });
	store.load({params:{start:0, limit:10}});
	
	///下拉框加载
       //操作卡片
     var url_dwid='0';
    var sql="";
 	var store_czkp = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_czkp = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'look_card_json.jsp?dwid='+url_dwid}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },store_czkp)
    });
   store_czkp.load();
   
   ///----受令单位变电所-----------
    var sql="select gqdm,gqmc from J_GYJC_GQZD where jglbdm='2' and ddtdm=\'"+ddtdm+"\'";//
    //var sql="select gqdm,gqmc from J_GYJC_GQZD where  ddtdm=\'"+ddtdm+"\'";//
    
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
    ///-----受令单位网工区--------------------
    
   var sql_gq="select gqdm,gqmc from J_GYJC_GQZD where (jglbdm='1' ) ";//
   //var sql_gq="select gqdm,gqmc from J_GYJC_GQZD where ddtdm=\'"+ddtdm+"\'";//
   
 	var planRecord_gq = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_gq = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_gq}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_gq)
    });
     store_gq.load();
  ///-----区间战场--------------------
    
   var sql_qjzc="select * from J_GYJC_QJZCZD";//

 	var planRecord_qjzc = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_qjzc = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_qjzc}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_qjzc)
    });
     store_qjzc.load();
    //定义表格面板,指定列模型，仓库，选择模型(默认行选择模型)
    var simple_Grid = new Ext.grid.GridPanel({
        //el:指定html元素用于显示的grid
        //el: 'grid3', 
        store:store,
    	cm: columns,
    	sm: sm,
        title: '变电所倒闸命令',
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

    
            
                   var columns_zy = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
        //new Ext.grid.RowNumberer(),
        
        {header:'序号',dataIndex:'xh',width:40,fixed:true},
        {header:'命令号',dataIndex:'mlh',width:70,sortable:true},
        {header:'受令单位',dataIndex:'gqmc',width:60,sortable:true},
        {header:'发令时间',dataIndex:'flsj',width:60,sortable:true},
        {header:'供电臂',dataIndex:'GDB',width:60},
        {header:'作业闭锁',dataIndex:'zybs',width:60},
        {header:'命令内容',dataIndex:'mlnr',width:60},
        {header:'要求完成时间',dataIndex:'yqwcsj',width:60,sortable:true},
        {header:'批准时间',dataIndex:'pzsj',width:60,sortable:true},
        //{header:'消令时间',dataIndex:'xlsj',width:60,sortable:true},
         {header:'发令人',dataIndex:'flr',width:60,sortable:true},
         {header:'受令人',dataIndex:'slr',width:60,sortable:true},
        {header:'消令人',dataIndex:'xlr',width:60,sortable:true},
         {header:'状态',dataIndex:'mlzt',width:60,renderer:zt,sortable:true}
       // {header:'负责人',dataIndex:'fzr',width:60,sortable:true}
       // {header:'详细',dataIndex:'id',width:60,renderer:renderXiangxi,fixed:true},
        //{header:'删除',dataIndex:'id',width:60,renderer:renderDel,fixed:true}
    ]);
   
    
    var planRecord_zy = Ext.data.Record.create([
    	{name:'commdid',type:'int'},
    	{name:'xh',type:'int'},
    	{name:'dwid',type:'string'},
    	{name:'dwmc',type:'string'},
    	{name:'jhid',type:'string'},
    	{name:'mlh',type:'string'},
    	{name:'sldwid',type:'string'},
    	{name:'sldwmc',type:'string'},
    	{name:'flsj',type:'string'},
    	{name:'yqwcsj',type:'string'},
    	{name:'mlnr',type:'string'},
    	{name:'tdqd',type:'string'},
    	{name:'pzsj',type:'string'},
    	{name:'xlsj',type:'string'},
    	{name:'flr',type:'string'},
    	{name:'slr',type:'string'},
    	{name:'xlr',type:'string'},
    	{name:'mlbz',type:'string'},
    	{name:'mlzt',type:'string'},
    	{name:'gqmc',type:'string'},
    	{name:'GDB',type:'string'},
    	{name:'zybs',type:'string'},
    	{name:'slsj',type:'string'},
    	{name:'wcsj',type:'string'}
    	]);
    	
  
    //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store_zy = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'commandspzy_json.jsp?dwid='+userDwid}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_zy)
    });
	store_zy.load({params:{start:0, limit:10}});
    
    
    //定义表格面板,指定列模型，仓库，选择模型(默认行选择模型)
    var simple_Grid_zy = new Ext.grid.GridPanel({
        //el:指定html元素用于显示的grid
        //el: 'grid3', 
        store:store_zy,
    	cm: columns_zy,
    	sm: new Ext.grid.RowSelectionModel({singleSelcet:true}),
        title: '工区停电作业命令执行',
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
            store: store_zy,
            displayInfo: true,
            displayMsg: '第 {0} 条到 {1} 条,共 {2} 条',
            emptyMsg: "无记录"
        })
    });
       
       
       
       
     
     	var simpleFormZy_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '工区停电作业命令执行',
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
                                   items : [{xtype:'hidden',name:'commdid'},{xtype:'hidden',name:'sldwmc'},{xtype:'hidden',name:'jhid'}
                                   				,{
                                                        columnWidth :.33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '命令号',
                                                                             name : 'mlh',
                                                                             disabled:true, 
                                                                             //disabled:true,
                                                                             //allowBlank:false,//不允许为空 
                                                                             blankText:"不能为空，请填写",
                                                                             anchor : '90%'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 }, {
                                                        columnWidth :.33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// 控件的类型设置成combo
                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                                                               store :store_gq,
                                                               valueField : "value",// 设置下拉选择框的值
                                                               displayField : "text",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               disabled:true, 
                                                               //forceSelection : true,// 必须选择一个选项
                                                               blankText : '选择受令单位',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '选择受令单位',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'sldwid',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : false,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '受令单位',// 控件的标题是学历
                                                               name : 'sldwid',// 再次提醒，name只是下拉列表的名称
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                 },{
                                                        columnWidth :.33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '时间',
                                                                             name : 'flsj',
                                                                             disabled:true, 
                                                                             anchor : '90%', 
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd'})}}
                                                                      }]
                                                 }]

                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [{
                                                        columnWidth :.33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '供电臂',
                                                                             name : 'GDB',
                                                                             disabled:true, 
                                                                             //allowBlank:false,//不允许为空 
                                                                             blankText:"不能为空，请填写",
                                                                             anchor : '90%'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 },{
                                                        columnWidth :.33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '作业闭锁',
                                                                             name : 'zybs',
                                                                             disabled:true, 
                                                                             //allowBlank:false,//不允许为空 
                                                                             blankText:"不能为空，请填写",
                                                                             anchor : '90%'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 },{
                                                        columnWidth :.33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '发令人',
                                                                             name : 'flr',
                                                                            disabled:true, 
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
                                                        columnWidth :.33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '批准时间',
                                                                             name : 'pzsj',
                                                                             anchor : '90%',
                                                                             disabled:true, 
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                      }]
                                                 },{
                                                        columnWidth :.33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '要求完成时间',
                                                                             name : 'yqwcsj',
                                                                             anchor : '90%',
                                                                             disabled:true, 
                                                                             allowBlank:false,//不允许为空 
                                                                             allowBlank:false,//不允许为空 
                                                                             blankText:"不能为空，请填写",
                                                                             blankText:"请选择时间",
                                                                             //disabled:true,
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                      }]
                                                 },{
                                                        columnWidth :.33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '完成时间',
                                                                             name : 'wcsj',
                                                                             disabled:true, 
                                                                             anchor : '90%',
                                                                            listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                      }]
                                                 }]
                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [{
                                                        columnWidth : 1.06,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textarea',// 控件的类型为datefield
                                                                             fieldLabel : '命令内容',
                                                                             name : 'mlnr',
                                                                             disabled:true, 
                                                                             anchor : '90%',
                                                                             height:'40'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 }]
                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [{
                                                        columnWidth : 1.06,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textarea',// 控件的类型为datefield
                                                                             fieldLabel : '备注',
                                                                             name : 'mlbz',
                                                                             anchor : '90%',
                                                                             height:'40'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 }]
                            },{
                                   layout : 'column',// columnlayout
                                   border : false,// 没有边框
                                   labelSeparator : '：',// 标题的分隔符号我们用中文冒号代替英文的冒号（labelSeparator:'：'）。
                                   // coulmnLayout里的控件将定义在items里
                                   items : [{xtype:'hidden',name:'id'}
                                   				,{
                                                        columnWidth :.33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '受令人',
                                                                             name : 'slr',
                                                                             id:'txt_slr',
                                                                            // disabled:true, 
                                                                              allowBlank:true,//不允许为空 
                                                                             blankText:"不能为空，请填写",
                                                                             anchor : '90%'
                                                                           //  format:'Y-m-d'
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 },{
                                                        columnWidth :.33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '受令时间',
                                                                             name : 'slsj', 
                                                                             blankText:"不能为空，请填写",
                                                                              disabled:false, 
                                                                             anchor : '90%',
                                                                            listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                      }]
                                                 }]
 
                            },{
                                   layout : 'column',// columnlayout
                                   border : false,// 没有边框
                                   labelSeparator : '：',// 标题的分隔符号我们用中文冒号代替英文的冒号（labelSeparator:'：'）。
                                   // coulmnLayout里的控件将定义在items里
                                   items : [ {
                                                        columnWidth :.33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '消令人',
                                                                             name : 'xlr',
                                                                             id:'txt_xlr',
                                                                             //disabled:false, 
                                                                             anchor : '90%'
                                                                           //  format:'Y-m-d'
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 } , {
                                                        columnWidth :.33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '消令内容',
                                                                             name : 'xlnr',
                                                                             id:'txt_xlnr',
                                                                            disabled:false, 
                                                                             anchor : '90%'
                                                                           //  format:'Y-m-d'
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 }]}
                           
                            ],
              // 为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
              buttons : [{
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
                                    text : '受令',
                                    
                                   handler : function() {
                                          if (!simpleFormZy_Save.form.isValid()) {return };
                                   		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                                          if (simpleFormZy_Save.form.isValid()) {
                                                 // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                                                 //this.disabled = true;
                                                 // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                                                 simpleFormZy_Save.form.doAction('submit', {
                                                 					  waitMsg:'受令中,请稍侯...',  
                                                                      url : 'zy_sl.jsp?jhid='+jhid,
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
                                                                      		simpleFormZy_Save.collapse();
                                                                      		simple_Grid_zy.getStore().reload();
                                                                      	
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
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
                                    text : '请求消令',
                                    
                                   handler : function() {
                                    if(Ext.getCmp("txt_xlr").getValue()==""||Ext.getCmp("txt_xlnr").getValue()==""){Ext.Msg.alert('提示','消令人和内容不能为空！');return;};
                                  
                                          if (!simpleFormZy_Save.form.isValid()) {return };
                                   		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                                          if (simpleFormZy_Save.form.isValid()) {
                                                 // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                                                 //this.disabled = true;
                                                 // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                                                 simpleFormZy_Save.form.doAction('submit', {
                                                 					  waitMsg:'执行中,请稍侯...',  
                                                                      url : 'zy_zx.jsp?jhid='+jhid,
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
                                                                      		simpleFormZy_Save.collapse();
                                                                      		simple_Grid_zy.getStore().reload();
                                                                      	
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
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
                                    text : '不受令',
                                    
                                   handler : function() {
                                    //if(Ext.getCmp("txt_xlr").getValue()==""||Ext.getCmp("txt_xlnr").getValue()==""){Ext.Msg.alert('提示','消令人和内容不能为空！');return;};
                                  
                                          if (!simpleFormZy_Save.form.isValid()) {return };
                                   		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                                          if (simpleFormZy_Save.form.isValid()) {
                                                 // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                                                 //this.disabled = true;
                                                 // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                                                 simpleFormZy_Save.form.doAction('submit', {
                                                 					  waitMsg:'执行中,请稍侯...',  
                                                                      url : 'zy_bsl.jsp?jhid='+jhid,
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
                                                                      		simpleFormZy_Save.collapse();
                                                                      		simple_Grid_zy.getStore().reload();
                                                                      	
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
     
     simpleFormZy_Save.expand();
     simpleFormZy_Save.buttons[0].setVisible(false);
      simpleFormZy_Save.buttons[1].setVisible(false);
      simpleFormZy_Save.buttons[2].setVisible(false);
     
     
         //Grid上触发事件
    simple_Grid_zy.addListener('rowclick', function(simple_Grid_zy,rowIndex,event){
    	// simpleForm_Query.collapse();
    	 simpleFormZy_Save.expand();
    	var record=simple_Grid_zy.getStore().getAt(rowIndex);
    	
    	simpleFormZy_Save.getForm().loadRecord(record);
    	 
   if(record.get('mlzt')=='3')
   {  
    Ext.getCmp("txt_xlr").setValue(username);
   simpleFormZy_Save.buttons[0].setVisible(false);
    simpleFormZy_Save.buttons[1].setVisible(true);
    }
   else if(record.get('mlzt')=='2')
   { 
    simpleFormZy_Save.buttons[0].setVisible(true);
    simpleFormZy_Save.buttons[1].setVisible(false);
     simpleFormZy_Save.buttons[2].setVisible(true);
      Ext.getCmp("txt_xlr").setValue(username);
       Ext.getCmp("txt_slr").setValue(username);
   }else
   {   
       simpleFormZy_Save.buttons[1].setVisible(false);
     }
    	
    		
    });	
     
     kpnr="";
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleFormZy_Save,simple_Grid_zy]
	});
});


////--------------异步查看操作卡片号---------------------------------------------
     function getMessage(kpbh,com_sldw){   
         // 实例化Ext发送Ajax请求需要的Connection对象   
         
         var conn = new Ext.data.Connection();   
         // 发送异步请求   
         conn.request({   
         // 请求地址   
           url: 'look_card.jsp?kpbh='+kpbh+'&com_sldw='+com_sldw,   
           method: 'GET',   
           // 指定回调函数   
           callback: callback   
         });   
       } 
       var kpnr="";
       var i='0';
      function callback(options, success, response){ 
         if(success){   
           // 如果成功则使用Ext将JSON字符串转换为JavaScript对象   
           var jsonObj = Ext.util.JSON.decode(response.responseText);   
           //　到这就可以取你想要的东东了   
 		  // Ext.Msg.alert('操作卡片',jsonObj.id); 
 		   
 		   if(i=='0')
 		   {
 		     kpnr=jsonObj.kpnr;
 		     i='1';
 		   } 
 		   else
 		   {
 		    kpnr=jsonObj.kpnr;
 		   }
 		   //alert(jsonObj.kpnr);
 		   Ext.getCmp("txt_bds_mlnr").setValue(kpnr);
         }   
       } 
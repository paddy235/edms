Ext.onReady(function() {
	
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    
    	  ///////------******------------下拉列表框stor----------------********----------------
 	 	//////-------------------------下拉列表框的数据绑定------------------------------------

   //----------------*********************************
    
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
 	 		return '待确认';
 	 	}
 	 	else if(value=="2")
 	 	{
 	 		return '待施工';
 	 	}
 	 		else if(value=="3")
 	 	{
 	 		return '施工中';
 	 	}
 	 			else if(value=="4")
 	 	{
 	 		return '已完成';
 	 	}
 	 	else
 	 	{
 	 		 return '作废';
 	 	}
 	 }
    //定义Grid表头
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
        //new Ext.grid.RowNumberer(),
        
        {header:'序号',dataIndex:'xh',width:40,fixed:true},
        {header:'单位名称',dataIndex:'dwmc',width:70,sortable:true},
        {header:'计划号',dataIndex:'jhh',width:60,sortable:true},
        {header:'计划时间',dataIndex:'jhsj',width:60,sortable:true},
        {header:'线别',dataIndex:'xlm',width:60,fixed:true},
        {header:'行别',dataIndex:'xingb',width:40,fixed:true},
        {header:'计划类型',dataIndex:'sxmc',width:60,sortable:true},
        {header:'维修项目',dataIndex:'wxxmmc',width:60,sortable:true},
        {header:'配合单位',dataIndex:'phdw',width:60,sortable:true},
         {header:'状态',dataIndex:'zt',width:60,renderer:zt,sortable:true},
        {header:'负责人',dataIndex:'fzr',width:60,sortable:true}
       // {header:'详细',dataIndex:'id',width:60,renderer:renderXiangxi,fixed:true},
        //{header:'删除',dataIndex:'id',width:60,renderer:renderDel,fixed:true}
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
    	{name:'dwmc',type:'string'},
    	{name:'xlm',type:'string'},
    	{name:'sxmc',type:'string'},//计划类型的名称
    	{name:'wxxmmc',type:'string'},
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
        
       
    });
  
	 
	 // form start
	var simpleForm_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '工作票申请',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 800,
              //collapsible:true,
              //titleCollapse:true,
              method:'POST',
              //autoWidth:true,
              frame : true,
              labelWidth : 70,
              
              
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
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '单位',
                                                                             name : 'dwid',
                                                                             disabled:true,
                                                                             anchor : '90%'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 }, {
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '计划号',
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
                                                                             xtype : 'datefield',// 控件的类型为datefield
                                                                             fieldLabel : '计划时间',
                                                                             name : 'jhsj',
                                                                             anchor : '90%',
                                                                             format:'Y-m-d'
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
                                                               xtype : 'combo',// 控件的类型设置成combo
                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                                                               store : new Ext.data.SimpleStore({
                                                                      // 通过一个数组定义了returnValue和displayText两个字段。retrunValue字段指定是提交给后台的值，displayText字段指定是在下拉中显示的选择值。
                                                                      fields : ["returnValue", "displayText"],
                                                                      // 定义了几组数据.每组数据都是根据fiedls的定义来组成的，数组里第一个值就是retrunValue的值，第二个值就是displayText的值，例如[1,'小学']，就表示retrunValue是1，displayText是小学。
                                                                      data : [['上行', '上行'], ['下行', '下行']]
                                                               }),
                                                               valueField : "returnValue",// 设置下拉选择框的值
                                                               displayField : "displayText",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               forceSelection : true,// 必须选择一个选项
                                                               blankText : '请选择行别',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '请选择行别',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'xingb',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : false,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '行别',// 控件的标题是学历
                                                               name : 'xingb',// 再次提醒，name只是下拉列表的名称
                                                               anchor : '90%'// input的宽度是90%
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
                                                                      data : [['带电作业', '带电作业'],['远离作业', '远离作业'], ['停电作业', '停电作业']]
                                                               }),
                                                               valueField : "returnValue",// 设置下拉选择框的值
                                                               displayField : "displayText",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               //forceSelection : true,// 必须选择一个选项
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
                                                 }]
                            }
                           
                            ]
         
       });

	
	    
    
    //Grid上触发事件
    simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	
    	    simpleForm_Save.getForm().loadRecord(record);
    	    var jhid=document.getElementById("id").value;
             var jhlb=document.getElementById("jhlb").value;
             var lb="";
             if(jhlb=="停电作业")
             {
                  	  lb='0';
             }
             else if(jhlb=="带电作业")
             {
                      lb='1';
             }
            else
            {
                       lb='2';
            }
           
    	window.location.href='gzpsq.jsp?myid='+jhid+'&jhtype='+lb;
    });	
    	
   
    
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Save,simple_Grid]
	});
    
    simpleForm_Save.collapse();

});
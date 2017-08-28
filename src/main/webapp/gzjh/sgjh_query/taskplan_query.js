Ext.onReady(function() {
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    
 /*--申请单位---*/ 
    //定义Grid表头
    var columns = new Ext.grid.ColumnModel([ 
        {header:'序号',width:40,fixed:true,renderer:function(value,metadata,record,rowIndex, colIndex, store)
        {
              var start = store.lastOptions.params.start;
              if (isNaN(start)) 
              {
                 start = 0;
              }
              return start + rowIndex + 1;   
        }},
        {header:'施工等级',dataIndex:'SGDJ',width:70,sortable:true,fixed:true},
        {header:'施工单位',dataIndex:'SGDW',width:120,sortable:true},
        {header:'施工项目',dataIndex:'SGXM',width:80,sortable:true},
        {header:'施工地点',dataIndex:'SGDD',width:60},
        {header:'登记车站',dataIndex:'DJCZ',width:60},
        
        {header:'时间类型',dataIndex:'SGSJLX',width:60},
        {header:'开始时间',dataIndex:'KSSJ',width:60},
        {header:'结束时间',dataIndex:'JSSJ',width:60},
        {header:'施工时间(分钟)',dataIndex:'SGSJ',width:60},
        {header:'路用列车',dataIndex:'LYLC',width:60},
        {header:'施工内容',dataIndex:'SGNR',width:60}
        
    ]);
   
    
    var planRecord = Ext.data.Record.create([ 
    	{name:'RJHXH',type:'string'},
    	{name:'SGDJ',type:'string'},
    	{name:'SGDW',type:'string'},
    	{name:'SGXM',type:'string'},
    	{name:'SGDD',type:'string'},
    	{name:'DJCZ',type:'string'},
    	
    	{name:'SGSJLX',type:'string'},
    	{name:'KSSJ',type:'string'},
    	{name:'JSSJ',type:'string'},
    	{name:'SGSJ',type:'string'},
    	{name:'LYLC',type:'string'},
    	{name:'SGNR',type:'string'}
    	]);
    	
    
    //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'taskplan_query_json.jsp'}),        
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
        autoWidth: true,
        autoHeight: true, 
        bbar: new Ext.PagingToolbar({
            pageSize: 10,
            store: store,
            displayInfo: true,
            displayMsg: '第 {0} 条到 {1} 条,共 {2} 条',
            emptyMsg: "无记录"
        })
        
    });
    
     Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
	 // form start
	var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '作业计划—设置查询条件',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 600,
               titleCollapse:true,
              collapsible:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              labelWidth : 56,
              
              
              items : [{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [ {
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
																 xtype : 'textfield',// 控件的类型为datefield
																 fieldLabel : '作业日期',
																 name : 'jhsj',
																 id:'jhsj_id',
																 anchor : '60%',
																 listeners: {"focus": function(){
																 WdatePicker({dateFmt:'yyyy-MM-dd'})}}
                                                         }]
                                                 }]
                            } // 上面是第一行,以下每行布局同上！
                             ],
              // 为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
              buttons : [{
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
                                    text : '查询',
                                   handler : function() {
                                           
                                   		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                                          if (simpleForm_Query.form.isValid()) {
                                                    var dates=Ext.getCmp("jhsj_id").getValue();
                                                    
                                                     
													store.baseParams.whereclause =dates; 
				                                    simple_Grid.getStore().reload({ 
														params : { 
														start : 0, 
														limit : 10 
														} 
													});
                                          }

                                   }
                            }]
       });
   
    
  var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Query,simple_Grid]
	});
});

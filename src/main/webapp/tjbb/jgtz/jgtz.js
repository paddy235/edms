Ext.onReady(function() {
		this.renderChaxun=function(value){
    	win1 = new Ext.Window({
        	width:455,
        	height:420,
        	layout:'column',
       		title: '用户工区关系维护',
        	closeAction:'hide',
        	plain: true,
        	autoScroll:false,

        	html:'<iframe style="width:800;height:420" src="../query/jgtz.jsp?tzid='+value+'"></iframe>',
        	buttons: [{
					text: '关闭',
					handler: function(){
			    	// win.hide();
					win1.hide(this);
					}
			}]
    	});
    	win1.show(this);
  	};
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    
    
     var renderChaxun =function(value)
 	 {
 	     return '<a href="../query/jgtz.jsp?tzid='+value+'" target="_blank">报表打印</a>';
 	 };
   
    //定义Grid表头
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
        //new Ext.grid.RowNumberer(),
        
        {header:'序号',dataIndex:'xh',width:40,fixed:true},
        {header:'单位名称',dataIndex:'dwmc',width:60,sortable:true},
        {header:'通知编号',dataIndex:'tzbh',width:80,sortable:true},
        {header:'列车调度员',dataIndex:'lcddy',width:80,sortable:true},
        {header:'起始位置',dataIndex:'ksjtwz',width:60,sortable:true},
        {header:'终止位置',dataIndex:'jsjtwz',width:60,sortable:true},
        {header:'行别',dataIndex:'xb',width:40,sortable:true},
        {header:'起始里程',dataIndex:'m_ksjtwx',width:60,sortable:true},
        {header:'终止里程',dataIndex:'m_jsjtwx',width:60,sortable:true},
        {header:'通知时间',dataIndex:'tzsj',width:80,sortable:true},
        {header:'撤出时间',dataIndex:'ccsj',width:80,sortable:true},
        {header:'供电调度员',dataIndex:'gdddy',width:60,sortable:true},
        {header:'报表打印',dataIndex:'tzid',width:60,renderer:renderChaxun,fixed:true}
    ]);
   
    
    var planRecord = Ext.data.Record.create([
    	{name:'xh',type:'int'},
    	{name:'tzid',type:'int'},
    	{name:'dwid',type:'string'},
    	{name:'dwmc',type:'string'},
    	{name:'tzbh',type:'string'},
    	{name:'lcddy',type:'string'},
    	{name:'ksjtwz',type:'string'},
    	{name:'jsjtwz',type:'string'},
    	{name:'xb',type:'string'},
    	{name:'m_ksjtwx',type:'string'},
    	{name:'m_jsjtwx',type:'string'},
    	{name:'t_zbjgb',type:'string'},
    	{name:'t_jgb',type:'string'},
    	{name:'zbjgb',type:'string'},
    	{name:'jgb',type:'string'},
    	{name:'sgb',type:'string'},
    	{name:'tzsj',type:'string'},
    	{name:'ccsj',type:'string'},
    	{name:'gdddy',type:'string'}
    	
    	
    	]);
    	
    
    //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'jgtz_json.jsp'}),     
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
	var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '降弓通知—查询',
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
                                                                             xtype : 'datefield',// 控件的类型为datefield
                                                                             fieldLabel : '通知起始日期',
                                                                             name : 'ksrq',
                                                                             id:'time1',
                                                                             //value: new Date,
                                                                             anchor : '90%',
                                                                             format:'Y-m-d'
                                                                      }]
                                                 },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'datefield',// 控件的类型为datefield
                                                                             fieldLabel : '结束日期',
                                                                             name : 'jsrq',
                                                                             id:'time2',
                                                                             value: new Date,
                                                                             anchor : '90%',
                                                                             format:'Y-m-d'
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
	                                     //点击查询按钮后，修改whereclause的值，作为基本条件，翻页不会消失
										//需要大家把原来query.jsp中的拼whereclause的逻辑拿到这里来									
										var where="1=1 ";										
										if(Ext.getCmp("time1").getValue()!="" ){
											 where=where+" and ksrq>=to_date('"+Ext.util.Format.date(Ext.getCmp("time1").getValue(), 'Y-m-d')+"','yyyy-mm-dd')";	
	
										}
										if(Ext.getCmp("time2").getValue()!=""  ){
											where=where+" and ksrq<=to_date('"+Ext.util.Format.date(Ext.getCmp("time2").getValue(), 'Y-m-d')+"','yyyy-mm-dd')";		
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
                                          
                                          //simpleForm_Save.collapse();
                                         
                                   }
                            }]
       });    

	    
	       
       
       //Grid上触发事件
    simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
    	// simpleForm_Query.collapse();
    	
    	
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	//alert(rowIndex);
    	//alert(record.get('jhsj')+' '+record.get('jhh')+' '+record.get('dwid'));

    });	
    	
    
    
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		items: [simpleForm_Query,simple_Grid]
		
	});
    


});
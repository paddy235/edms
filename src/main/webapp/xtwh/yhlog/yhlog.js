Ext.onReady(function() {
	
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    
    //alert("aaa");
    
 	//渲染返回html代码

 
    //定义Grid表头
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
        //new Ext.grid.RowNumberer(),
        
        {header:'用户登录名',dataIndex:'YHDM',width:60},
        {header:'用户IP',dataIndex:'LOCATION_IP',width:60,sortable:true},
        {header:'登陆时间',dataIndex:'LOGIN_TIME',width:60,sortable:true},
        {header:'退出时间',dataIndex:'LOGOUT_TIME',width:60,sortable:true},
        {header:'登陆人员',dataIndex:'MEMO',width:60,sortable:true}
    ]);
   
    
    var planRecord = Ext.data.Record.create([
        {name:'YHDM',type:'string'},
    	{name:'LOCATION_IP',type:'string'},
    	{name:'LOGIN_TIME',type:'string'},
    	{name:'LOGOUT_TIME',type:'string'},
    	{name:'MEMO',type:'string'}
    	]);
    	
    
    //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'yhlog_json.jsp'}),   
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

    	simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
    	// simpleForm_Query.collapse();

    	var record=simple_Grid.getStore().getAt(rowIndex);
    	

    });	
   	//grid.addListener('cellClick',cellClick);
    //显示在html中id为container的层中
    //grid.render();//渲染表格
     Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
	 // form start

	var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '用户登陆信息查询',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 600,
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
                       items : [{
	                                columnWidth : .3,
	                                layout : 'form',
	                                border : false,
	                                items : [{
	                                                     xtype : 'field',
	                                                     fieldLabel : '用户登录名',
	                                                     name : 'YHDM',
	                                                     id:'yhdm_id',
	                                                     allowBlank : true// 该选项值不允许为空
	                                              }]
	                         },{
	                                columnWidth : .3,
	                                layout : 'form',
	                                border : false,
	                                items : [{
	                                         xtype : 'datefield',// 控件的类型为datefield
	                                         fieldLabel : '开始登陆时间',
	                                         name : 'LOGIN_TIME',
	                                         id:'time1',
	                                         //value: new Date,
	                                         anchor : '70%',
	                                         format:'Y-m-d'
	                                 		 }]
	                         },{
	                                columnWidth : .3,
	                                layout : 'form',
	                                border : false,
	                                items : [{
	                                         xtype : 'datefield',// 控件的类型为datefield
	                                         fieldLabel : '结束登陆时间',
	                                         name : 'LOGIN_TIME',
	                                         id:'time2',
	                                         //value: new Date,
	                                         anchor : '70%',
	                                         format:'Y-m-d'
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
										var where="1=1 ";										
										if(Ext.getCmp("yhdm_id").getValue()!=""  ){
											where=where+" and YHDM = '"+Ext.getCmp("yhdm_id").getValue()+"'";
										}
										if(Ext.getCmp("time1").getValue()!="" ){
											 where=where+" and LOGIN_TIME>=to_date('"+Ext.util.Format.date(Ext.getCmp("time1").getValue(), 'Y-m-d')+"','yyyy-mm-dd')";	
	
										}
										if(Ext.getCmp("time2").getValue()!=""  ){
											where=where+" and LOGIN_TIME<=to_date('"+Ext.util.Format.date(Ext.getCmp("time2").getValue(), 'Y-m-d')+"','yyyy-mm-dd')";		
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
                            },{

                                   // 取消按钮就是简单的reset一下form的控件
                                   text : '重置',
                                   handler : function() {
                                          simpleForm_Query.form.reset();
                                          
                                         // window.location.href="";
                                          //window.location.href='zyjhsqAdd.jsp';
                                   }
                            }]
       });
   
   
   
   //Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
 
   
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
		items: [simpleForm_Query,simple_Grid]
	});


 });
Ext.onReady(function() {
	
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    
    //alert("aaa");
    
 	//渲染返回html代码
 
 	 var renderDel =function(value)
 	 {
 	     return '<a  href="xtddml_del.jsp?cmdid='+value+'">删除</a>';
 	 };
 	 
 	 
 	
 	 
  
 
   
    //定义Grid表头
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
        //new Ext.grid.RowNumberer(),
        
        {header:'序号',dataIndex:'xh',width:40,fixed:true},
        {header:'时间',dataIndex:'xtsj',width:120,fixed:true,sortable:true},
        {header:'命令编号',dataIndex:'mlbh',width:70,fixed:true,sortable:true},
        {header:'命令内容',dataIndex:'mlnr',width:120,sortable:true},
        {header:'操作目的',dataIndex:'czmd',width:120,sortable:true},
        {header:'完成时间',dataIndex:'wcsj',width:120,fixed:true,sortable:true},
        {header:'汇报时间',dataIndex:'hbsj',width:120,sortable:true},
        {header:'系统调度员',dataIndex:'xtddy',width:50,sortable:true},
        {header:'值班调度员',dataIndex:'zbddy',width:50,sortable:true},
        //{header:'负责人',dataIndex:'fzr',width:60,sortable:true}
       // {header:'详细',dataIndex:'id',width:60,renderer:renderXiangxi,fixed:true},
        {header:'删除',dataIndex:'cmdid',width:60,renderer:renderDel,fixed:true}
    ]);
   
    
    var planRecord = Ext.data.Record.create([
    	{name:'cmdid',type:'int'},
    	{name:'xh',type:'int'},
    	{name:'xtsj',type:'string'},
    	{name:'mlbh',type:'string'},
    	{name:'mlnr',type:'string'},
    	{name:'czmd',type:'string'},
    	{name:'wcsj',type:'string'},
    	{name:'hbsj',type:'string'},
    	{name:'xtddy',type:'string'},
    	{name:'zbddy',type:'string'}
    	
    	]);
    
    //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'xtddml_json.jsp'}),        
        //reader告诉我们如何解析这个数据
        baseParams:{whereclause:'1=1'},
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
    var my_cjdm="";
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
    	my_cjdm=Ext.getCmp("cmd_id").getValue();
    	Ext.getCmp("cmd_id").disable();
    });	
   	//grid.addListener('cellClick',cellClick);
    //显示在html中id为container的层中
    //grid.render();//渲染表格
     Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
	 // form start

	


	var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '系统调度命令查询',
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
		                   items : [{  columnWidth : .24,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '命令编号',
                                                                             name : 'mlbh',
                                                                             id:'ml_bh',
                                                                             //disabled:true,
                                                                             //allowBlank : false,
                                                                             anchor : '90%'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 },{
                                    columnWidth : .23,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                             xtype : 'textfield',// 控件的类型为datefield
                                             fieldLabel : '开始日期',
                                             name : 'XTSJ',
                                             id:'sjsj1',
                                             //value: new Date,
                                             anchor : '90%',
                                             listeners: {"focus": function(){
                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                      }]
                             },{
                                    columnWidth : .23,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                             xtype : 'textfield',// 控件的类型为datefield
                                             fieldLabel : '结束日期',
                                             name : 'XTSJ',
                                             id:'sjsj2',
                                             //value: new Date,
                                             anchor : '90%',
                                             listeners: {"focus": function(){
                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                      }]
                             }]

                            }],
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
												if(Ext.getCmp("ml_bh").getValue()!=""&&Ext.getCmp("ml_bh").getValue()!="ALL" ){
													where=where+" and mlbh like '%"+Ext.getCmp("ml_bh").getValue()+"%'";
												}
											    if(Ext.getCmp("sjsj1").getValue()!=""  ){
											        where=where+" and XTSJ>=to_date('"+Ext.getCmp("sjsj1").getValue()+"','yyyy-mm-dd hh24:mi:ss')";
										        }
										        if(Ext.getCmp("sjsj2").getValue()!=""  ){
											        where=where+" and XTSJ<=to_date('"+Ext.getCmp("sjsj2").getValue()+"','yyyy-mm-dd hh24:mi:ss')";
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
   
   
   
   
   
   //Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
	 
	 
	 // form start
	var simpleForm_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '系统调度命令',
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
                                   items : [{xtype:'hidden',name:'cmdid',id:'cmd_id'}
                                   				, {
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '时间',
                                                                             name : 'xtsj',  
                                                                             allowBlank : false,
                                                                             anchor : '90%',
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 },{
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '命令编号',
                                                                             name : 'mlbh',
                                                                             id:'kkk',
                                                                             //disabled:true,
                                                                             allowBlank : false,
                                                                             anchor : '90%'
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
                                                                             fieldLabel : '命令内容',
                                                                             name : 'mlnr',
                                                                             
                                                                             anchor : '90%',
                                                                             height:50
                                                                             //format:'Y-m-d'
                                                                      }]
                                                 }]
                            },{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [{
                                                        columnWidth : 1.06,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textarea',// 控件的类型为datefield
                                                                             fieldLabel : '操作目的',
                                                                             name : 'czmd',
                                                                             anchor : '90%',
                                                                             height:'50'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 }]
                            },{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [{
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '完成时间',
                                                                             name : 'wcsj',
                                                                             id:'wcsj_dis',
                                                                             anchor : '90%',
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}},
                                                                             allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 }, {
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '汇报时间',
                                                                             name : 'hbsj',
                                                                             id:'hbsj_dis',
                                                                             anchor : '90%',
                                                                             //allowBlank : false,
                                                                            listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 }]
                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [{
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '系统调度员',
                                                                             name : 'xtddy',
                                                                             allowBlank : false,
                                                                             //disabled:true,
                                                                             anchor : '90%'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 },{
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '值班调度员',
                                                                             name : 'zbddy',
                                                                             id:'txt_zbddy',
                                                                             allowBlank : false,
                                                                             //disabled:true,
                                                                             anchor : '90%'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 }]
                            }],
              // 为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
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
                                                                      url : 'xtddml_add.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                                                                      // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                                                                      success : function(form, action) {
                                                                             // 例如返回的json结构是"{success:true,data:'成功保存！'}"，
                                                                            // Ext.Msg.alert('操作',action.result.data);
                                                                            simple_Grid.getStore().reload();
                                                                      		Ext.Msg.alert('消息',action.result.msg);
                                                                      		simpleForm_Query.form.reset();
                                                                      		
                                                                      		
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
                                               url : 'xtddml_update.jsp?cmdid='+my_cjdm,
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		simpleForm_Save.buttons[0].setVisible(true);
                                               		simple_Grid.getStore().reload();
                                               		Ext.Msg.alert('消息',action.result.msg);
                                               		Ext.getCmp("cmdid").enable();
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
                   Ext.getCmp("cmdid").enable();
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
    var myyear,mymonth,myweek,myday,mytime,mymin,myhour,mysec;
var mydate=new Date();
myyear=mydate.getFullYear();
mymonth=mydate.getMonth()+1;
myday=mydate.getDate();
myhour=mydate.getHours();
mymin=mydate.getMinutes();
mysec=mydate.getSeconds();
if(myday<10)
{
  myday="0"+myday;
}

mytime=myyear+"-"+mymonth+"-"+myday+" 00"+":00";

    var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Save,simpleForm_Query,simple_Grid]
	});
	simpleForm_Save.collapse();
	simpleForm_Save.buttons[1].setVisible(false);
	//simpleForm_Save.buttons[3].setVisible(false);
	//simpleForm_Save.buttons[4].setVisible(false);
	Ext.getCmp("cmdid").enable();
 });
Ext.onReady(function() {
	
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var userdwid=document.getElementById("userDwid").value;
    //alert(userdwid);
    var expander = new Ext.ux.grid.RowExpander({
        tpl : new Ext.Template(
            '<p><b>命令号:</b> {mlh} <b>发令时间:</b> {flsj} <b>批准时间:</b> {pzsj}  <b>要求完成时间:</b> {yqwcsj}  <b>消令时间:</b> {xlsj} <b>受令人:</b> {slr} </p>',
             '<p><b>作业命令内容:</b> {mlnr}</p>'
            )
    });
	
        ///----查询单位的comlist-----------
    var sql="select ddtdm,ddtmc from j_gyjc_ddtzd  where ddtdm like \'"+userdwid+"%25\'";

 	var planRecord_bdt = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_bdt = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_bdt)
    });
     store_bdt.load();
	        ///----查询单位的人员姓名-----------
    var sql_xm="select yhdm,yhmc from J_gyjc_yh where dwdm= \'"+userdwid+"\'";

 	var planRecord_xm = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_xm = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_xm}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_xm)
    });
    // store_xm.load();
 	
	//定义Grid表头
    var columns = new Ext.grid.ColumnModel([
        
        //new Ext.grid.RowNumberer(),
        expander,		
        {header:'序号',dataIndex:'xh',width:40,fixed:true},
        {header:'命令号',dataIndex:'bdsmlh',width:100,fixed:true},
        {header:'发令时间',dataIndex:'bdsflsj',width:40,sortable:true},
        {header:'受令处所',dataIndex:'gqmc',width:40,sortable:true},
        {header:'操作命令内容',dataIndex:'bdsmlnr',width:40,sortable:true},
        {header:'卡片号',dataIndex:'bdsczkah',width:40,sortable:true},
        {header:'批准时间',dataIndex:'bdspzsj',width:40,sortable:true},
         {header:'完成时间',dataIndex:'bdsxlsj',width:40,sortable:true},
          {header:'发令人',dataIndex:'bdsflr',width:40,sortable:true},
           {header:'受令人',dataIndex:'bdsslr',width:40,sortable:true}
           //{header:'命令号',dataIndex:'mlh',width:40,sortable:true},
           //{header:'发令时间',dataIndex:'flsj',width:40,sortable:true},
           //{header:'批准时间',dataIndex:'pzsj',width:40,sortable:true},
          // {header:'要求完成时间',dataIndex:'yqwcsj',width:40,sortable:true},
          // {header:'消令时间',dataIndex:'xlsj',width:40,sortable:true},
          // {header:'受令人',dataIndex:'slr',width:40,sortable:true},
          // {header:'作业命令内容',dataIndex:'mlnr',width:40,sortable:true}
           
      
    ]);
   
    
    var planRecord = Ext.data.Record.create([
    	{name:'xh',type:'int'},
    	{name:'bdsmlh',type:'string'},
    	{name:'bdsflsj',type:'string'},
    	{name:'bdssldwid',type:'string'},
    	{name:'bdsmlnr',type:'string'},
    	{name:'bdsczkah',type:'string'},
    	{name:'bdspzsj',type:'string'},
    	{name:'bdsxlsj',type:'string'},
    	{name:'bdsflr',type:'string'},
    	{name:'bdsslr',type:'string'},
    	{name:'mlh',type:'string'},
    	{name:'flsj',type:'string'},
    	{name:'pzsj',type:'string'},
    	{name:'yqwcsj',type:'string'},
    	{name:'xlsj',type:'string'},
    	{name:'slr',type:'string'},
    	{name:'mlnr',type:'string'},
    	{name:'gqmc',type:'string'}
    	]);
    	
        		
    //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'dutylog_query_json.jsp'}), 
        baseParams:{whereclause:'t.bdsdwid like '+"'"+userdwid+"%'"},//点击翻页的时候，这个值不会消失，作为基本参数，只有点击查询按钮时才会改变       
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
        plugins: expander,
        
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


	
    //显示在html中id为container的层中
    //grid.render();//渲染表格
    Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
	 // form start
	var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '值班日志查询—设置查询条件',
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
                                           		columnWidth : .25,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                                                layout : 'form',// formlayout用来放置控件
                                                border : false,// 没有边框
                                                items : [{
                                                			xtype : 'combo',// 控件的类型设置成combo
                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                                                               store :store_bdt,
                                                               //value:'全部',
                                                               valueField : "value",// 设置下拉选择框的值
                                                               displayField : "text",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               //forceSelection : true,// 必须选择一个选项
                                                               //blankText : '请选择作业单位',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '单位',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'taskunit',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : false,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               //allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '单位',// 控件的标题是学历
                                                               name : 'taskunit',// 再次提醒，name只是下拉列表的名称
                                                               id:'dw_id',
                                                               listeners:{"select":function(combo, planRecord_gq,index){
                                                                    var dwid=Ext.getCmp("dw_id").value;
                                                                    //alert(sldw);
                                                               		var combo2 = Ext.getCmp('txt_xm'); 
                                                               		combo2.enable();      
                          											combo2.reset();   
                          											//combo2.disable();
                          										    sql_xm="select yhdm,yhmc from J_gyjc_yh where dwdm= \'"+dwid+"\'";
                          											//alert(sql_qjzc);
                          										    combo2.store.proxy = new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_xm});
                          										    combo2.store.load();
                                                               		}
                                                               },
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                 		},{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '日期',
                                                                             name : 'ksrq',
                                                                             id:'txt_ksrq',
                                                                             //value: new Date,
                                                                             anchor : '90%',
                                                                             listeners : {
																					"focus" : function() {
																						WdatePicker({
																									dateFmt : 'yyyy-MM-dd'
																								})
																					}
																				}	
                                                                      }]
                                                 },{
                                           		columnWidth : .25,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                                                layout : 'form',// formlayout用来放置控件
                                                border : false,// 没有边框
                                                items : [{
                                                			xtype : 'combo',// 控件的类型设置成combo
                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                                                               store :store_xm,
                                                               //value:'全部',
                                                               valueField : "text",// 设置下拉选择框的值
                                                               displayField : "text",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               //forceSelection : true,// 必须选择一个选项
                                                               //blankText : '请选择作业单位',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '姓名',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'taskunit',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : false,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               //allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '姓名',// 控件的标题是学历
                                                               name : 'xm',// 再次提醒，name只是下拉列表的名称
                                                               id:'txt_xm',
                                                               anchor : '90%'// input的宽度是90%
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
                                                   var where="1=1 ";
				                                    //alert(Ext.getCmp("txt_ksrq").getValue());												
													if(Ext.getCmp("txt_ksrq").getValue()!="" ){
														where=where+" and trunc(t.bdsflsj) =to_date('"+Ext.getCmp("txt_ksrq").getValue()+"','yyyy-mm-dd')";	
													}
													//if(Ext.getCmp("txt_ksrq").getValue()!="" ){
														//where=where+"  and t.bdsflsj <to_date('"+Ext.getCmp("txt_ksrq").getValue()+"','yyyy-mm-dd')+2";	
													//}
													if(Ext.getCmp("dw_id").getValue()!=''  && Ext.getCmp("dw_id").getValue()!='all'){
														where=where+" and t.bdsdwid='"+Ext.getCmp("dw_id").getValue()+"' ";
													}else{
														where=where+"and t.bdsdwid like '"+userdwid+"%'";
													}
													if(Ext.getCmp("txt_xm").getValue()!=''  && Ext.getCmp("txt_xm").getValue()!='all'){
														where=where+" and t.bdsflr='"+Ext.getCmp("txt_xm").getValue()+"' ";
													}
													//alert(where);
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
                                         // window.location.href="";
                                          //window.location.href='zyjhsqAdd.jsp';
                                   }
                            }, {

                                   // 取消按钮就是简单的reset一下form的控件
                                   text : '查看报表',
                                   handler : function() {
                                          if(Ext.getCmp("txt_ksrq").getValue()!=""&&Ext.getCmp("dw_id").getValue()!=""&&Ext.getCmp("txt_xm").getValue()!="")
                                          {
		                                          var dwid=Ext.getCmp("dw_id").getValue();
		                                          var time=Ext.getCmp("txt_ksrq").getValue();
		                                          var name=Ext.getCmp("txt_xm").getValue();
		                                          //alert(name);
		                                          window.location.href='../../tjbb/query/zbrz.jsp?dwid='+dwid+'&time='+time+'&name='+name;
                                          }
                                          else
                                          {
                                                  Ext.Msg.alert('消息',"请选择查询条件！");
                                          }
                                          
                                   }
                            }]
       });
   
   
   
     
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Query,simple_Grid]
		
	});
	Ext.getCmp("txt_ksrq").setValue(new Date().getYear()+"-"+(new Date().getMonth()+1)+"-"+new Date().getDate());
    
    //simpleForm_Save.collapse();

});
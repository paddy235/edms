Ext.onReady(function() {
	
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var bd = Ext.getBody();
    var DWJB=document.getElementById ("DWJB").value;
    var DWDM=document.getElementById ("DWDM").value;
    var YHMC=document.getElementById ("YHMC").value;
    
	var renderzt1 =function(value)
 	{
 	    if (value=='0')  
  		{
  			return "<span style='color:black;font-weight:bold;'>电调未发送</span>";
  		}
 	 	else if(value=="1")
 	 	{
 	 		return "<span style='color:blue;font-weight:bold;'>电调已发送、列调未签收</span>";
 	 	}
 	 	else if (value=='2')  
  	    {
  	    	return "<span style='color:red;font-weight:bold;'>列调已签认、电调未归档</span>";
  	    }
 	 	else(value=="9")
 	 	{
 	 		return "<span style='color:green;font-weight:bold;'>电调已归档</span>";
 	 	}
 	 };
	 //下拉列表
	var sql="select xdtdm,xdtmc from j_gyjc_xdtzd where xdtdm like '"+DWDM+"%25'";
	var planRecord_xdt = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_xdt = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql}),      
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            root: 'root',
            successProperty :'success'
        },planRecord_xdt)
    });
    store_xdt.load();

	sql="select ddtdm,ddtmc from j_gyjc_ddtzd";
	var planRecord_ddt = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_ddt = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql}),      
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            root: 'root',
            successProperty :'success'
        },planRecord_ddt)
    });
    store_ddt.load();
    //定义Grid表头
    var tsbcolumns = new Ext.grid.ColumnModel([       
        new Ext.grid.RowNumberer(),
        {header:'停电日期',dataIndex:'TDSJ',width:110,sortable:true,fixed:true},
        {header:'时间',dataIndex:'TDSF',width:40,sortable:true,fixed:true},
        {header:'供电臂',dataIndex:'TDGDB',width:120,sortable:true},
        {header:'列调令号',dataIndex:'TD_XDMLH',width:60,sortable:true,fixed:true},
        {header:'列调时间',dataIndex:'TD_XDSJ',width:110,sortable:true,fixed:true},
        {header:'列调员',dataIndex:'TD_XDY',width:60,sortable:true,fixed:true},
        {header:'电调令号',dataIndex:'TD_DDMLH',width:60,sortable:true,fixed:true},
		{header:'电调时间',dataIndex:'TD_DDSJ',width:110,sortable:true,fixed:true},
        {header:'电调员',dataIndex:'TD_DDY',width:60,sortable:true,fixed:true},
        {header:'备注',dataIndex:'TD_BZ',width:100,sortable:true},
        {header:'状态',dataIndex:'ZT',width:150,renderer:renderzt1,fixed:true}
    ]);
   
    var tsbplanRecord = Ext.data.Record.create([
    	{name:'TDTZBH',type:'int'},
    	{name:'TDSJ',type:'string'},
    	{name:'TDSF',type:'string'},
    	{name:'TDGDB',type:'string'},
    	{name:'TDNR',type:'string'},
    	{name:'TD_XDMLH',type:'string'},
    	{name:'TD_XDSJ',type:'string'},
    	{name:'TD_XDT',type:'string'},
    	{name:'TD_XDY',type:'string'},
    	{name:'TD_DDMLH',type:'string'},
    	{name:'TD_DDSJ',type:'string'},
    	{name:'TD_DDT',type:'string'},
    	{name:'TD_DDY',type:'string'},
		{name:'TD_BZ',type:'string'},
    	{name:'ZT',type:'string'}
    	]);
    var whereclause_init="ZT=1 and TD_XDT LIKE '"+DWDM+"%'";
    var tsbstore = new Ext.data.Store({
        proxy: new Ext.data.HttpProxy({url:'tdtz_xd_json.jsp'}), 
        baseParams:{whereclause:whereclause_init},//未归档的这里可以看见       
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },tsbplanRecord)
    });
	tsbstore.load({params:{start:0, limit:6}});
    
    //定义表格面板,指定列模型，仓库，选择模型(默认行选择模型)
    var tsbsimple_Grid = new Ext.grid.GridPanel({
        //title : '停送电登记簿列表',
        store:tsbstore,
    	cm: tsbcolumns,
    	sm: new Ext.grid.RowSelectionModel({singleSelcet:true}),
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
            pageSize: 6,
            store: tsbstore,
            displayInfo: true,
            displayMsg: '第 {0} 条到 {1} 条,共 {2} 条',
            emptyMsg: "无记录"
        })

    });
    
    tsbsimple_Grid.addListener('rowclick', function(tsbsimple_Grid,rowIndex,event){
    	tsbsimpleForm_Save.expand();    	
    	var record=tsbsimple_Grid.getStore().getAt(rowIndex);
    	tsbsimpleForm_Save.getForm().loadRecord(record);
		Ext.getCmp("id_TD_XDY").setValue(YHMC); 
    	
    });	
    
   
    
    var tsbsimpleForm_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'center',
              title : '停电签认--列调签认',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 600,
              collapsible:true,
              titleCollapse:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              labelWidth : 60,
              
              
              items : [{
                       layout : 'column',// columnlayout
                       border : false,// 没有边框
                       labelSeparator : '：',// 标题的分隔符号我们用中文冒号代替英文的冒号（labelSeparator:'：'）。
                       // coulmnLayout里的控件将定义在items里
                       items : [{xtype:'hidden',name:'TDTZBH',id:'TDTZBH'},{xtype:'hidden',name:'ZT'},
						          {
												columnWidth : .2,
												layout : 'form',
												border : false,
												items : [{
																 xtype : 'textfield',// 控件的类型为datefield
																 fieldLabel : '停电日期',
																 name : 'TDSJ',
																 id:'txt_TDSJ',
																 allowBlank : false,
																 //id:'time',
																 anchor : '96%',
																 listeners: {"focus": function(){
																 WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
																 //allowBlank : false// 该选项值不允许为空
														  }]
                                             },{
                                            columnWidth : .2,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// 控件的类型为datefield
                                                         fieldLabel : '停电时分',
                                                         anchor : '96%',
                                                         name : 'TDSF'
                                                       //  format:'Y-m-d'
                                                         //allowBlank : false// 该选项值不允许为空
                                                  }]
                                     },{
                                            columnWidth : .2,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// 控件的类型为datefield
                                                         fieldLabel : '备注',
                                                         anchor : '96%',
                                                         name : 'TD_BZ'
                                                  }]
                                     },{
                                            columnWidth : .2,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// 控件的类型为datefield
                                                         fieldLabel : '列调令号',
                                                         anchor : '96%',
                                                         name : 'TD_XDMLH'
                                                  }]
                                     },{
                                            columnWidth : .2,
                                            layout : 'form',
                                            border : false,
                                            items : [{                                                         
														 xtype : 'textfield',
														 fieldLabel : '列调时间',
														 name : 'TD_XDSJ',
														 id:'txt_TD_XDSJ',
														 anchor : '96%',
														 listeners: {"focus": function(){
														 WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                  }]
                                     },{
                                            columnWidth : .4,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// 控件的类型为datefield
                                                         fieldLabel : '列调人员',
                                                         anchor : '96%',
                                                         name : 'TD_XDY',
														 id:'id_TD_XDY',
                                                         value:YHMC
                                                  }]
                                     },{
                                            columnWidth : .2,
                                            layout : 'form',
                                            border : false,
                                            items : [{
														  xtype : 'combo',// 控件的类型设置成combo
														   store :store_xdt,
														   valueField : "value",// 设置下拉选择框的值
														   displayField : "text",// 设置下拉选择框的显示文本
														   mode : 'local',// 数据是在本地
														   emptyText : '请选择列调台名',// 在没有选择值时显示为选择学历
														   hiddenName : 'TD_XDT',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
														   editable : false,// 该下拉列表只允许选择，不允许输入
														   triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
														   allowBlank : false,// 该选项值不允许为空
														   fieldLabel : '列调台名',// 控件的标题是学历
														   name : 'TD_XDT',// 再次提醒，name只是下拉列表的名称
														   id:'txt_TD_XDT',                                                               
														   anchor : '96%'// input的宽度是90%
                                                  }]
                                     },{
                                            columnWidth : .2,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// 控件的类型为datefield
                                                         fieldLabel : '电调令号',
                                                         anchor : '96%',
                                                         name : 'TD_DDMLH'
                                                  }]
                                     },{
                                            columnWidth : .2,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',
														 fieldLabel : '电调时间',
														 name : 'TD_DDSJ',
														 id:'txt_TD_DDSJ',
														 anchor : '96%',
														 listeners: {"focus": function(){
														 WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                  }]
                                     },{
                                            columnWidth : .4,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// 控件的类型为datefield
                                                         fieldLabel : '电调人员',
                                                         anchor : '96%',
                                                         name : 'TD_DDY'
                                                  }]
                                     },{
                                           		columnWidth : .2,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                                                layout : 'form',// formlayout用来放置控件
                                                border : false,// 没有边框
                                                items : [{
                                                		   xtype : 'combo',// 控件的类型设置成combo
														   store :store_ddt,
														   valueField : "value",// 设置下拉选择框的值
														   displayField : "text",// 设置下拉选择框的显示文本
														   mode : 'local',// 数据是在本地
														   emptyText : '请选择电调台名',// 在没有选择值时显示为选择学历
														   hiddenName : 'TD_DDT',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
														   editable : false,// 该下拉列表只允许选择，不允许输入
														   triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
														   allowBlank : false,// 该选项值不允许为空
														   fieldLabel : '电调台名',// 控件的标题是学历
														   name : 'TD_DDT',// 再次提醒，name只是下拉列表的名称
														   id:'txt_TD_DDT',                                                               
														   anchor : '96%'// input的宽度是90%
                                                        }]
                                            },{
                               columnWidth : .8,
                               layout : 'form',
                               border : false,
                               items : [{
                                   xtype : 'textarea',// 控件的类型为datefield
                                   fieldLabel : '供电臂',
                                   name : 'TDGDB',
                                   anchor : '96%',
                                   //  format:'Y-m-d'
                                   allowBlank : false// 该选项值不允许为空
                               }]
                           }]

                            }],
        buttons: [{
            text: '列调签认',
             handler : function() {
                  if (!tsbsimpleForm_Save.form.isValid()) {return };
                   if (tsbsimpleForm_Save.form.isValid()) {
                       tsbsimpleForm_Save.form.doAction('submit', {
                                         					  waitMsg:'保存中,请稍侯...',  
                                                              url : 'tdtz_xdqr.jsp',
                                                              method : 'post',
                                                              params : '',
                                                              success : function(form, action) {
                                                              		 Ext.Msg.alert('消息',action.result.msg);
                                                              		tsbsimple_Grid.getStore().reload();
                                                              		
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
                   tsbsimpleForm_Save.form.reset();
             }
        }]
    });
 
    	
    var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		items: [tsbsimpleForm_Save,tsbsimple_Grid]
		
	});

	 //=================================================================	
	var my_reload=function (){
		 //需要定期加载的store
	  	tsbsimple_Grid.getStore().reload();
	  	
	}
	setInterval(my_reload,30000);
 
 //================   
});

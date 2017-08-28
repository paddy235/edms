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
	var sql="select xdtdm,xdtmc from j_gyjc_xdtzd";
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

	sql="select ddtdm,ddtmc from j_gyjc_ddtzd where ddtdm like '"+DWDM+"%25'";
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
        {header:'送电日期',dataIndex:'SDSJ',width:110,sortable:true,fixed:true},
        //{header:'时间',dataIndex:'SDSF',width:40,sortable:true,fixed:true},
        {header:'供电臂',dataIndex:'SDGDB',width:160,sortable:true},
        {header:'列调令号',dataIndex:'SD_XDMLH',width:60,sortable:true,fixed:true},
        {header:'列调时间',dataIndex:'SD_XDSJ',width:110,sortable:true,fixed:true},
        {header:'列调员',dataIndex:'SD_XDY',width:60,sortable:true,fixed:true},
        {header:'电调令号',dataIndex:'SD_DDMLH',width:60,sortable:true,fixed:true},
		{header:'电调时间',dataIndex:'SD_DDSJ',width:110,sortable:true,fixed:true},
        {header:'电调员',dataIndex:'SD_DDY',width:60,sortable:true,fixed:true},
        {header:'备注',dataIndex:'SD_BZ',width:100,sortable:true},
        {header:'状态',dataIndex:'ZT',width:150,renderer:renderzt1,fixed:true}
    ]);
   
    var tsbplanRecord = Ext.data.Record.create([
    	{name:'SDTZBH',type:'int'},
    	{name:'SDSJ',type:'string'},
    	{name:'SDSF',type:'string'},
    	{name:'SDGDB',type:'string'},
    	{name:'SDNR',type:'string'},
    	{name:'SD_XDMLH',type:'string'},
    	{name:'SD_XDSJ',type:'string'},
    	{name:'SD_XDT',type:'string'},
    	{name:'SD_XDY',type:'string'},
    	{name:'SD_DDMLH',type:'string'},
    	{name:'SD_DDSJ',type:'string'},
    	{name:'SD_DDT',type:'string'},
    	{name:'SD_DDY',type:'string'},
		{name:'SD_BZ',type:'string'},
    	{name:'ZT',type:'string'}
    	]);
    var whereclause_init=" 1=1 ";
    var tsbstore = new Ext.data.Store({
        proxy: new Ext.data.HttpProxy({url:'sdtz_json.jsp'}), 
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
    
   
    
   
    var simpleForm_Query = new Ext.FormPanel({
		//renderTo : document.body,
       	title: '送电签认查询',
        labelAlign : 'left',
        bodyStyle:'padding:5px 5px 0',
        labelWidth: 80, 
        collapsible:true,
        titleCollapse:true,
        method:'POST',
        frame:true,
        autoWidth:true,
        //width: 1000,
        items : [{
            layout : 'column',// columnlayout
            border : false,// 没有边框
            items : [{
                columnWidth : .2,
                layout : 'form',
                border : false,
                items : [{
                    xtype:'datefield',
                    fieldLabel: '起始停电日期',
                    name: 'ksrq',
                    id: 'ksrq',
                    anchor:'95%',
                    format:'Y-m-d',
                    value:new Date(), 
                    allowBlank : false
                    //format:'Y-m-d H:i:s',
    				//timePicker:true
                }]
            }, {
               columnWidth : .2,
               layout : 'form',
               border : false,
               items : [{
                   xtype:'datefield',
                   fieldLabel: '结束停电日期',
                   name: 'jsrq',
                   id: 'jsrq',
                   anchor:'95%',
                   format:'Y-m-d',
                   value:new Date(), 
                   allowBlank : false
                }]
            },{
              columnWidth : .3,
              layout : 'form',
              border : false,
              items: [{
                    		xtype : 'combo',
                        	store : new Ext.data.SimpleStore({
                        		fields : ["returnValue", "displayText"],
                        		data : [['', '全部'],['0', '电调待发送'],
                                   		['1', '电调已发送、列调未签认'],['2', '列调已签认、电调未归档'],
                                   		['9', '电调已归档']
                                   		]
                        	}),
                        	valueField : "returnValue",
                        	displayField : "displayText",
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择状态',
                        	emptyText : '选择状态',
                        	hiddenName : 'ztbzcx',
                        	editable : false,
                        	triggerAction : 'all',
                        	//allowBlank : false,
                        	fieldLabel : '签认状态',
                        	name : 'ztbzcx',
                        	id : 'ztbzcx_id',
                        	anchor : '95%'
    			}]
              }]
			}
           ],
            buttons : [{
              buttonlAlign : 'right',
               text : '查询',
               handler : function() {
              
                    if (!simpleForm_Query.form.isValid()) {return };
                    if (simpleForm_Query.form.isValid()) {
                     	var where=" 1=1 ";												
						if(Ext.getCmp("ksrq").getValue()!="" ){
							where=where+" and trunc(SDSJ)>=to_date('"+Ext.util.Format.date(Ext.getCmp("ksrq").getValue(), 'Y-m-d')+"','yyyy-mm-dd')";	
						}
						if(Ext.getCmp("jsrq").getValue()!="" ){
							where=where+" and trunc(SDSJ)<=to_date('"+Ext.util.Format.date(Ext.getCmp("jsrq").getValue(), 'Y-m-d')+"','yyyy-mm-dd')";	
						}
						if(Ext.getCmp("ztbzcx_id").getValue()!='' && Ext.getCmp("ztbzcx_id").getValue()!='ALL'){
							where=where+" and ZT='"+Ext.getCmp("ztbzcx_id").getValue()+"' ";
						}
						tsbstore.baseParams.whereclause = where;
						
						tsbsimple_Grid.getStore().reload({ 
							params : { 
							start : 0, 
							limit : 6
							} 
						});
       			}
			}
          }]
       });
    
   
 //================   	
    var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		items: [simpleForm_Query,tsbsimple_Grid]
		
	});
});

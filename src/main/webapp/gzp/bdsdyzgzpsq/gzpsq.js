Ext.onReady(function() {
	
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../../extjs-3.0/resources/images/default/s.gif';
    //传值计划的Id和计划的类别Id
    var jhid=document.getElementById("jhid").value;
	var jhlb=document.getElementById("jhlb").value;
	var dwlb=document.getElementById("dwlb").value;
		 var gqid=document.getElementById("gqid").value;
	 

	dwlb="2";
	jhlb="0";
	
	var gzpurl="";
	var gzpSp="";
	var gzpXx="";
		var gzpSb="";
	if(dwlb=="1")//判断是网工区
	{
      if(jhlb=="0")//停电作业 绿色
		{
		   gzpurl="../ticket/operationTicket.jsp?jhid="+jhid+"&jhlb="+jhlb;//添加工作票
		   gzpXx="../ticket/operationTicket_look.jsp?jhlb="+jhlb+"&id=";//查看工作票
		   gzpDel="../ticket/gzp_gq_greenDel.jsp?jhlb="+jhlb+"&jhid="+jhid+"&id=";//删除工作票
		}
		else if(jhlb=="1")//带电作业 红色
		{
			gzpurl="../ticket/operationTicket_red.jsp?jhlb="+jhlb+"&jhid="+jhid;//添加工作票
		    gzpXx="../ticket/operationTicket_red_look.jsp?jhlb="+jhlb+"&id=";//查看工作票
		    gzpDel="../ticket/gzp_gq_redDel.jsp?jhlb="+jhlb+"&jhid="+jhid+"&id=";//删除工作票
		}
		else//远离作业 黑色
		{
			gzpurl="../ticket/operationTicket_black.jsp?jhlb="+jhlb+"&jhid="+jhid;//添加工作票
		    gzpXx="../ticket/operationTicket_black_look.jsp?jhlb="+jhlb+"&id=";//查看工作票
		    gzpDel="../ticket/gzp_gq_blackDel.jsp?jhlb="+jhlb+"&jhid="+jhid+"&id=";//删除工作票
		}
	}
	else//判断是变电所
	{
	  if(jhlb=="0")//停电作业 绿色
		{
		  gzpurl="../ticket/operationPlan_Electric.jsp?jhlb="+jhlb+"&jhid="+jhid;//添加工作票
		  gzpXx="../ticket/operationPlan_Electric_look.jsp?jhlb="+jhlb+"&id=";//查看工作票
		    gzpDel="../ticket/gzp_Bds_greenDel.jsp?jhlb="+jhlb+"&jhid="+jhid+"&id=";//删除工作票
		   gzpSb="../ticket/gzp_bds_greenSb.jsp?jhlb="+jhlb+"&jhid="+jhid+"&id=";//删除工作票
		}
		else if(jhlb=="1")//带电作业 红色
		{
			gzpurl="../ticket/operationTicket_Electric_red.jsp?jhlb="+jhlb+"&jhid="+jhid;//添加工作票
		}
		else//远离作业 黑色
		{
			gzpurl="../ticket/operationTicket_Electric_black.jsp?jhlb="+jhlb+"&jhid="+jhid;//添加工作票
			gzpXx="../ticket/bds_black_look.jsp?jhlb="+jhlb+"&id=";//查看工作票
			//gzpXx="../ticket/bds_black_look.jsp";//查看工作票
		    gzpDel="../ticket/gzp_Bds_blackDel.jsp?jhlb="+jhlb+"&jhid="+jhid+"&id=";//删除工作票
		}
	}
	 	 var zt =function (value)
 	 {
 	 	if(value=="0")
 	 	{
 	 	  return '待上报';
 	 	}
 	 	else if(value=="1")
 	 	{
 	 		return '待审批';
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
 	 	else if(value=="10")
 	 	{
 	 		return '已退回';
 	 	}
 	 	else
 	 	{
 	 		 return '作废';
 	 	}
 	 }
	
	//alert(jhid+"  "+jhlb);
   
    
 	//渲染返回html代码
 	 var renderXiangxi =function(value)
 	 {
 	     return '<a href="'+gzpSp+value+'">审批</a>';
 	 };
     	//渲染返回html代码
 	 var renderXiangxi =function(value)
 	 {
 	     
 	     return '<a href="'+gzpXx+value+'">详细</a>';
 	     
 	 };
 	 var renderDel =function(value)
 	 {
 	     return '<a  href="'+gzpDel+value+'">删除</a>';
 	 };
  	  	 var renderSb =function(value)
 	 {
 	     return '<a  href="'+gzpSb+value+'">上报</a>';
 	 };
    //定义Grid表头
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
        //new Ext.grid.RowNumberer(),
        
        {header:'序号',dataIndex:'xh',width:40,fixed:true},
         {header:'单位',dataIndex:'dwmc',width:70,sortable:true},
        {header:'工作票号',dataIndex:'gzph',width:70,sortable:true},
        //{header:'发票人',dataIndex:'fpr',width:60,sortable:true},
        {header:'发票时间',dataIndex:'fpsj',width:60,sortable:true},
        {header:'工作领导人',dataIndex:'gzldr',width:60},
        //{header:'出工人数',dataIndex:'cgrs',width:40},
        {header:'工作票内容',dataIndex:'zynr',width:60,sortable:true},
        {header:'完成时间',dataIndex:'jssj',width:60,sortable:true},
        {header:'调度员',dataIndex:'DDSHY',width:60,sortable:true},
        {header:'审核时间',dataIndex:'SPSJ',width:60,sortable:true},
        {header:'工作票状态',dataIndex:'gzpzt',width:60,renderer:zt,sortable:true},
        
       // {header:'负责人',dataIndex:'fzr',width:60,sortable:true},
        //{header:'操作',dataIndex:'gzpid',width:60,renderer:renderXiangxi,fixed:true},
         {header:'上报',dataIndex:'gzpid',width:60,renderer:renderSb,fixed:true},
        {header:'详细',dataIndex:'gzpid',width:60,renderer:renderXiangxi,fixed:true},
        {header:'删除',dataIndex:'gzpid',width:60,renderer:renderDel,fixed:true}
    ]);
   
    
    var planRecord = Ext.data.Record.create([
    	{name:'gzpid',type:'int'},
    	{name:'xh',type:'int'},
    	{name:'gzph',type:'string'},
    	{name:'dwmc',type:'string'},
    	//{name:'fpr',type:'string'},
    	{name:'fpsj',type:'string'},
    	{name:'gzldr',type:'string'},
    	    	    	    	{name:'DDSHY',type:'string'},
    	{name:'SPSJ',type:'string'},
    	{name:'cgrs',type:'string'},
    	{name:'zynr',type:'string'},
    	{name:'jssj',type:'string'},
    	{name:'gzpzt',type:'string'},
    	{name:'sjc',type:'string'}
    	]);
    	
    
    //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'gzpsq_json.jsp?jhid='+jhid+'&jhlb='+jhlb+'&dwlb='+dwlb+'&gqid='+gqid}),      
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
        //title: '工作票审批',
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
        }),
        
        //在Grid的上方添加按钮
        
        tbar: new Ext.Toolbar({ 
        	items:[ 
              { 
                    id:'buttonA',
                    pressed: true,
                    text:"添加工作票",
                    handler: function() {
                    	window.location.href=gzpurl;
                    	},
                    scope:this 
                }
             ] 
        }) 
        
    });
   	//Grid上触发事件
   	//grid.addListener('cellClick',cellClick);
    //显示在html中id为container的层中
    //grid.render();//渲染表格
     Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
	 // form start

   
   
   
   //Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
	 
	 
	 

	
	    
    
    //Grid上触发事件
//    simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
//    	// simpleForm_Query.collapse();
//    	 simpleForm_Save.expand();
//    	
//    	var record=simple_Grid.getStore().getAt(rowIndex);
//    	//alert(rowIndex);
//    	//alert(record.get('jhsj')+' '+record.get('jhh')+' '+record.get('dwid'));
//    	    
//             //simpleForm_Save.buttons[2].setVisible(false);
//    //simpleForm_Save.buttons[3].setVisible(false);
//    	simpleForm_Save.getForm().loadRecord(record);
//    });	
    	

    
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simple_Grid]
	});
    
   // simpleForm_Save.collapse();
    //simpleForm_Save.buttons[2].disabled=true;
    //simpleForm_Save.buttons[3].disabled=true;
    //设置按钮全不可用
	
   

});
Ext.onReady(function() {
	
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../../extjs-3.0/resources/images/default/s.gif';
    //传值计划的Id和计划的类别Id
    var jhid=document.getElementById("jhid").value;
	var jhlb=document.getElementById("jhlb").value;
	var dwlb=document.getElementById("dwlb").value;
	var gqid=document.getElementById("gqid").value;
	//alert("dwlb:"+dwlb);
	dwlb="1";
	jhlb="0";
	
	
	var gzpurl="";
	var gzpSp="";
	var gzpXx="";
	var gzpSb="";
	if(dwlb=="1")//判断是网工区
	{
      if(jhlb=="0")//停电作业 绿色
		{
		   gzpurl="../ticket/dzgzp_dd.jsp?jhid="+jhid+"&jhlb="+jhlb;//添加工作票
		   gzpXx="../ticket/dzgzp_look_dd.jsp?jhlb="+jhlb+"&id=";//查看工作票
		   gzpDel="../ticket/dzgzpDel_dd.jsp?jhlb="+jhlb+"&jhid="+jhid+"&id=";//删除工作票
		   gzpSb="../ticket/dzgzpSb.jsp?jhlb="+jhlb+"&jhid="+jhid+"&id=";//删除工作票
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
 	 	else if(value=="10")
 	 	{
 	 		return '已退回';
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
        {header:'倒闸票号',dataIndex:'gzph',width:70,sortable:true},
        {header:'作业目的',dataIndex:'ZYMD',width:60,sortable:true},
        {header:'作业根据',dataIndex:'ZYGJ',width:60,sortable:true}, 
        {header:'开始时间',dataIndex:'YXQS',width:60,sortable:true},
        {header:'结束时间',dataIndex:'YXQZ',width:60,sortable:true},
        {header:'倒闸者',dataIndex:'DZZ',width:60,sortable:true}, 
        {header:'签发人签字',dataIndex:'QFRQZ',width:60,sortable:true},
         {header:'调度员',dataIndex:'DDSHY',width:60,sortable:true},
        {header:'审核时间',dataIndex:'SPSJ',width:60,sortable:true},
        {header:'状态',dataIndex:'gzpzt',width:60,renderer:zt,sortable:true,hidden:true},
       // {header:'负责人',dataIndex:'fzr',width:60,sortable:true},
        {header:'上报',dataIndex:'gzpid',width:60,renderer:renderSb,fixed:true,hidden:true},
        {header:'操作',dataIndex:'gzpid',width:60,renderer:renderXiangxi,fixed:true},
        {header:'删除',dataIndex:'gzpid',width:60,renderer:renderDel,fixed:true}
    ]);
   
    
    var planRecord = Ext.data.Record.create([
    	{name:'gzpid',type:'int'},
    	{name:'xh',type:'int'},
    	{name:'gzph',type:'string'},
    	{name:'dwmc',type:'string'},
    	{name:'ZYMD',type:'string'},
    	{name:'ZYGJ',type:'string'},
    	{name:'YXQS',type:'string'},
    	{name:'YXQZ',type:'string'},
    	{name:'ZYCX',type:'string'},
    	{name:'DDSHY',type:'string'},
    	{name:'SPSJ',type:'string'},
    	{name:'DZZ',type:'string'},
    	{name:'DZZQZ',type:'string'},
    	{name:'QFRQZ',type:'string'},
    	{name:'gzpzt',type:'string'}
    	]);
    	
    
    //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'dzzysq_json.jsp?jhid='+jhid+'&jhlb='+jhlb+'&dwlb='+dwlb+'&gqid='+gqid}),      
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
                    text:"添加倒闸作业票",
                    handler: function() {
                    	window.location.href=gzpurl;
                    	},
                    scope:this 
                }
             ] 
        }) 
        
    });
 
     Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
 

    
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simple_Grid]
	}); 

});
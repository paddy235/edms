Ext.onReady(function() {
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var username=document.getElementById("txt_username").value;
    var userdj=document.getElementById("userdj").value;
    var userdwid=document.getElementById("userdwid").value;
    var ttyhmc=document.getElementById("ttyhmc").value;
    
    var stor_where="";
    var stor_where1="";
    var cell_where=" 1=1 ";
    var where1="";
	var sql="";
	
    if(userdj=='6')
    {
      stor_where="gz.gqpym in (select gq.gqdm from  j_gyjc_gqzd gq where gq.gqdm='"+userdwid+"')";
      stor_where1="gz.gqpym in (select gq.gqdm from  j_gyjc_gqzd gq where gq.gqdm='"+userdwid+"')";
	  sql="select gqdm,gqjc from j_gyjc_gqzd where jglbdm=1 and gqdm ='"+userdwid+"'";
    }
    else if(userdj=='3')
    {
      stor_where="gz.gqpym in (select gq.gqdm from  j_gyjc_gqzd gq where gq.ddtdm like '"+userdwid+"%')";
      stor_where1="gz.gqpym in (select gq.gqdm from  j_gyjc_gqzd gq where gq.ddtdm like '"+userdwid+"%')";
	  sql="select gqdm,gqjc from j_gyjc_gqzd where jglbdm=1 and ddtdm like '"+userdwid+"%25'  order by gqjc";
    }
    else if(userdj=='4'||userdj=='5')
    {
      stor_where="gz.gqpym in (select gq.gqdm from  j_gyjc_gqzd gq where gq.cjdm like '"+userdwid+"%')";
      stor_where1="gz.gqpym in (select gq.gqdm from  j_gyjc_gqzd gq where gq.cjdm like '"+userdwid+"%')";
	  sql="select gqdm,gqjc from j_gyjc_gqzd where jglbdm=1 and cjdm ='"+userdwid+"' order by gqjc";
    }
	else
    {
      stor_where=" 1=1 ";
      stor_where1=" 1=1 ";
	  sql="select gqdm,gqjc from j_gyjc_gqzd where jglbdm=1 order by gqjc";
    }
	
    stor_where=stor_where+"and gz.bgsj <=sysdate and gz.bgsj>=to_date('"+get_nowTime()+"','yyyy-mm-dd hh24:mi')";
    
	//工区、车间、段直接从工区里面选取管线的配电所，电调台找自己管辖的配电所，其它人不等录入跳闸情况
	//查询放开所有所
	sql="select gqdm,gqjc from j_gyjc_gqzd where jglbdm=1 order by gqjc";
 	var planRecord_bdt = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_bdt = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql+'&all=all'}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_bdt)
    });
    store_bdt.load();
     
   
    //所属段     
    var sql_ggdmc="select distinct o.gdddm,o.ggdmc from J_GYJC_GDDZD o";

 	var planRecord_ggdmc = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_ggdmc = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_ggdmc+'&all=all'}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_ggdmc)
    });
     store_ggdmc.load();

     var zt =function (value)
 	 {
 	 	if(value=="0")
 	 	{
 	 	  return '失败';
 	 	}
 	 	else if(value=="1")
 	 	{
 	 		return '成功';
 	 	}
 	 	else
 	 	{
 	 	    return '未启动';
 	 	}
 	 }
    
       
	var expander = new Ext.ux.grid.RowExpander({
        tpl : new Ext.Template(
            '<p><b>停电范围:</b> {sjgzdd} <b>跳闸原因:</b> {tzyy} </p> <p><b>停电范围车流情况:</b> {gzms} <b>备注:</b> {bz} </p> <p><b>接触网电流:</b> {ia} <b>馈线电线:</b> {ib}  <b>故障电压:</b> {ic}  <b>一次电抗:</b> {ua}  <b>阻抗角:</b> {ub}</p> ')
           
    });
	//定义Grid表头
  
    var columns = new Ext.grid.ColumnModel([
        
        //new Ext.grid.RowNumberer(),
        expander,		
        {header:'序号',dataIndex:'xh',width:35,fixed:true},

		{header:'配电所',dataIndex:'gqmc',width:90,sortable:true,fixed:true},
        {header:'跳闸时间',dataIndex:'bgsj',width:110,sortable:true,fixed:true},
        {header:'开关号',dataIndex:'kgh',width:60,sortable:true},
        {header:'保护动作',dataIndex:'bhzzmc',width:60,sortable:true},
        
		{header:'重合情况',dataIndex:'chzzt',renderer:zt,width:60,fixed:true,fixed:true},
		{header:'故标测距',dataIndex:'sgjl',width:60,sortable:true,fixed:true},
        {header:'类型',dataIndex:'lb',width:60,sortable:true,fixed:true},
		{header:'复合时间',dataIndex:'fhsj',width:110,sortable:true,fixed:true},

		{header:'恢复时间',dataIndex:'hfsj',width:110,sortable:true,fixed:true},
		{header:'停时(分)',dataIndex:'tdsf',width:60,sortable:true,fixed:true},
		{header:'登记人',dataIndex:'djr',width:80,sortable:true,fixed:true},
        {header:'审核人',dataIndex:'shr',width:80,sortable:true,fixed:true}
		
        //{header:'调度员',dataIndex:'ddy',width:70,sortable:true,fixed:true}
        //{header:'故障描述',dataIndex:'gzms',width:160,sortable:true},
        //{header:'故标',dataIndex:'sgjl',width:40,fixed:true},        
        //{header:'实际故障地点',dataIndex:'sjgzdd',width:60,fixed:true},        
        //{header:'停电区段',dataIndex:'tdqd',width:70,sortable:true},
        //{header:'跳闸原因',dataIndex:'tzyy',width:50,sortable:true},   
        //{header:'备注',dataIndex:'bz',width:50,sortable:true},
       
      
    ]);
   
      
    var planRecord = Ext.data.Record.create([
    	{name:'xh',type:'int'},
    	{name:'ydsgbm',type:'string'},
    	{name:'ydbgbh',type:'string'},
    	{name:'rksj',type:'string'},
    	{name:'bgsj',type:'string'},
    	{name:'gqpym',type:'string'},
    	{name:'tdqd',type:'string'},
    	{name:'gzms',type:'string'},
    	{name:'sgjl',type:'string'},	
    	{name:'ztbz',type:'string'},
    	{name:'chzzt',type:'string'},
    	{name:'sgjl',type:'string'},
    	{name:'ztbz',type:'string'},
    	{name:'gzbh',type:'string'},
    	{name:'gqmc',type:'string'},
    	{name:'gqdm',type:'string'},
    	{name:'kgh',type:'string'},//tzyy
        {name:'tzyy',type:'string'},
        {name:'fhsj',type:'string'},
    	{name:'tdsf',type:'string'},
    	{name:'lb',type:'string'},
    	{name:'bz',type:'string'},
    	{name:'ddy',type:'string'},  
    	{name:'sjgzdd',type:'string'},
    	{name:'kxmc',type:'string'},
    	{name:'bhzzmc',type:'string'},
    	{name:'shr',type:'string'},
    	{name:'bztzt',type:'string'},
    	{name:'hfsj',type:'string'},
    	{name:'djr',type:'string'},

		{name:'ia',type:'string'},
		{name:'ib',type:'string'},
		{name:'ic',type:'string'},
		{name:'ua',type:'string'},
		{name:'ub',type:'string'},

    	{name:'xb_add',type:'string'}

    	]);
   
    //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'tzgl_qy_cx_json.jsp'}),   
        baseParams:{whereclause:stor_where},//点击翻页的时候，这个值不会消失，作为基本参数，只有点击查询按钮时才会改变     
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
              title : '牵引跳闸记录查询',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 600,
               titleCollapse:true,
              collapsible:true,
              method:'POST',
              autoWidth:true,
              frame : true,
             labelWidth : 60,
              
              
              items : [{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [ {
                                           		columnWidth :.20,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                                                layout : 'form',// formlayout用来放置控件
                                                border : false,// 没有边框
                                                items : [{
                                                			xtype : 'combo',// 控件的类型设置成combo
                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                                                               store :store_ggdmc,
                                                              
                                                               valueField : "value",// 设置下拉选择框的值
                                                               displayField : "text",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               //forceSelection : true,// 必须选择一个选项
                                                               //blankText : '请选择作业单位',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '段别',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'gdd',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : false,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               //allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '段别',// 控件的标题是学历
                                                               name : 'gdd',// 再次提醒，name只是下拉列表的名称
                                                               id:'gdd_id',
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                },{
                                           		columnWidth :.20,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                                                layout : 'form',// formlayout用来放置控件
                                                border : false,// 没有边框
                                                items : [{
                                                			xtype : 'combo',// 控件的类型设置成combo
                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                                                               store :store_bdt,
                                                              
                                                               valueField : "value",// 设置下拉选择框的值
                                                               displayField : "text",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               //forceSelection : true,// 必须选择一个选项
                                                               //blankText : '请选择作业单位',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '所别',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'bds',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : false,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               //allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '所别',// 控件的标题是学历
                                                               name : 'bds',// 再次提醒，name只是下拉列表的名称
                                                               id:'bds_id',
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
												},{
												columnWidth : .30,
												layout : 'form',
												labelWidth : 100,
												border : false,
												items : [{
																 xtype : 'field',// 控件的类型为datefield
																 fieldLabel : '跳闸时间起始',																 
																 name : 'ksrq',
																 anchor : '90%',
																 id:'txt_ksrq',
																 listeners: {"focus": function(){
																 WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
														  }]
                                                 },{
                                                        columnWidth : .30,
                                                        layout : 'form',
														labelWidth : 100,
                                                        border : false,
                                                        items : [{
																 xtype : 'field',// 控件的类型为datefield
																 fieldLabel : '跳闸时间截止',
																 name : 'jsrq',																 
																 anchor : '90%',
																 id:'txt_jsrq',
																 listeners: {"focus": function(){
																 WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
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
				                                    var where=" 1=1 ";
				                                  
													if(Ext.getCmp("txt_ksrq").getValue()!="" ){
														where=where+" and gz.bgsj>=to_date('"+Ext.getCmp("txt_ksrq").getValue()+"','yyyy-mm-dd hh24:mi')";
														cell_where=cell_where+	" and gz.bgsj>=to_date('"+Ext.getCmp("txt_ksrq").getValue()+"','yyyy-mm-dd hh24:mi')";
														
													}
													if(Ext.getCmp("txt_jsrq").getValue()!="" ){
														where=where+"  and gz.bgsj <=to_date('"+Ext.getCmp("txt_jsrq").getValue()+"','yyyy-mm-dd hh24:mi')";	
													    cell_where=cell_where+"  and gz.bgsj <=to_date('"+Ext.getCmp("txt_jsrq").getValue()+"','yyyy-mm-dd hh24:mi')";	
													    
													 }
													
													if(Ext.getCmp("bds_id").getValue()!=''  && Ext.getCmp("bds_id").getValue()!='ALL'){
														where=where+" and gz.gqpym='"+Ext.getCmp("bds_id").getValue()+"' ";
														cell_where=cell_where+" and gz.gqpym='"+Ext.getCmp("bds_id").getValue()+"' ";
														
													}
													if(Ext.getCmp("gdd_id").getValue()!='' && Ext.getCmp("gdd_id").getValue()!='ALL'){
														where=where+" and gz.dm like '"+Ext.getCmp("gdd_id").getValue()+"%' ";
														cell_where=cell_where+" and gz.dm like '"+Ext.getCmp("gdd_id").getValue()+"%' ";
													}
												//	alert(where);
												//	store.baseParams.whereclause=stor_where1;
													store.baseParams.whereclause =where;
													where1=where;
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
                                   }
                            }]
       });
   

//Ext.getCmp("txt_ddy").setValue(username);    

     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		items: [simpleForm_Query,simple_Grid]
		
	});
    
    //simpleForm_Query.buttons[2].setVisible(false); 
function getTime()
{
  //***得到当前时间**//
    var myyear,mymonth,myweek,myday,mytime,mymin,myhour,mysec;
	var mydate=new Date();
	myyear=mydate.getFullYear();
	mymonth=mydate.getMonth()+1;
	//alert(mymonth<10);
	//if(mymonth<10)
	//mymoth="0"+mymoth;
	myday=mydate.getDate();
	if(myday<10)
	myday="0"+myday;

	myhour=mydate.getHours();
	if(myhour<10)
	myhour="0"+myhour;

	mymin=mydate.getMinutes();
	if(mymin<10)
	mymin="0"+mymin;

	mysec=mydate.getSeconds();

	return myyear+"-"+mymonth+"-"+myday+" "+myhour+":"+mymin;
}
   
function getTime2()
{
	var myyear,mymonth;
	var mydate=new Date();
	myyear=mydate.getFullYear();
	mymonth=mydate.getMonth()+1;
	if(mymonth<10)
	return myyear+"-"+mymonth+"-"+0+1+" "+0+0+":"+0+0;
}
   // Ext.getCmp("txt_ksrq").setValue(getTime2());
   // Ext.getCmp("txt_jsrq").setValue(getTime()); txt_ksrq
    //alert(get_nowTime());
    Ext.getCmp("txt_ksrq").setValue(get_nowTime());
    Ext.getCmp("txt_jsrq").setValue(getTime());
	

});
function get_nowTime()
{
  //***得到当前时间**//
    var myyear,mymonth,myweek,myday,mytime,mymin,myhour,mysec;
	var mydate=new Date();
	myyear=mydate.getFullYear();
	mymonth=mydate.getMonth()+1;
	//alert("0"+mymoth);
	//if(mymonth<10)
	//mymoth="0"+mymoth;
	myday=mydate.getDate();
	//if(myday<10)
	myday="01";
	myhour=mydate.getHours();
	//if(myhour<10)
	myhour="00";
	mymin=mydate.getMinutes();
	//if(mymin<10)
	mymin="00";
	mysec=mydate.getSeconds();
	return myyear+"-"+mymonth+"-"+myday+" "+myhour+":"+mymin;
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

Ext.onReady(function() {
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var userdwid=document.getElementById("userDwid").value;
    var userdj=document.getElementById("userdj").value;
    var dich_unit='';
    var dich_swit='';
    var dich_web='';
    var dich_jhh='';
     var dich_unit1='';
    var dich_swit1='';
    var dich_web1='';
    var dich_jhh1='';
    if(userdj=='6')
    {
        dich_unit=" bdsdz.sldwid like '"+userdwid+"%'";
        dich_swit=" glkgdz.sldwid like '"+userdwid+"%'";
        dich_web=" jcwzy.sldwid like '"+userdwid+"%'";
        dich_jhh=" gqdm like '"+userdwid+"%25'";
        //
          dich_unit1=" bdsdz.sldwid like '"+userdwid+"%'";
        dich_swit1=" glkgdz.sldwid like '"+userdwid+"%'";
        dich_web1=" jcwzy.sldwid like '"+userdwid+"%'";
        dich_jhh1=" gqdm like '"+userdwid+"%25'";
    }
    else if(userdj=='3')
    { 
       dich_unit=" bdsdz.dwid like '"+userdwid+"%'";//"jh.dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.ddtdm like "+"'"+dwid+"%')";
       dich_swit=" glkgdz.dwid like '"+userdwid+"%'";//"jh.dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.ddtdm like "+"'"+dwid+"%')";
       dich_web=" jcwzy.dwid like '"+userdwid+"%'";//"jh.dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.ddtdm like "+"'"+dwid+"%')";
       dich_jhh=" ddtdm like '"+userdwid+"%25'";
       //
       dich_unit1=" bdsdz.dwid like '"+userdwid+"%'";//"jh.dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.ddtdm like "+"'"+dwid+"%')";
       dich_swit1=" glkgdz.dwid like '"+userdwid+"%'";//"jh.dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.ddtdm like "+"'"+dwid+"%')";
       dich_web1=" jcwzy.dwid like '"+userdwid+"%'";//"jh.dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.ddtdm like "+"'"+dwid+"%')";
       dich_jhh1=" ddtdm like '"+userdwid+"%25'";
    }
    else if(userdj=='1'||userdj=='2')
    {
        dich_unit=" 1=1";
        dich_swit=" 1=1";
        dich_web=" 1=1";
        dich_jhh=" 1=1";
        //
        dich_unit1=" 1=1";
        dich_swit1=" 1=1";
        dich_web1=" 1=1";
        dich_jhh1=" 1=1";
    }
    else
    {
        dich_unit=" bdsdz.sldwid like "+"'"+userdwid+"%'";
        dich_swit=" glkgdz.sldwid like "+"'"+userdwid+"%'";
        dich_web=" jcwzy.sldwid like "+"'"+userdwid+"%'";
        dich_jhh=" cjdm like '"+userdwid+"%25'";
        //
        dich_unit1=" bdsdz.sldwid like "+"'"+userdwid+"%'";
        dich_swit1=" glkgdz.sldwid like "+"'"+userdwid+"%'";
        dich_web1=" jcwzy.sldwid like "+"'"+userdwid+"%'";
        dich_jhh1=" cjdm like '"+userdwid+"%25'";
    }
    //dich_unit=dich_unit+"  and bdsdz.flsj <=sysdate and bdsdz.flsj>=to_date('"+getTime()+"','yyyy-mm-dd hh24:mi')";
    //dich_web=dich_web+" and jcwzy.flsj <= sysdate and jcwzy.flsj>=to_date('"+getTime()+"','yyyy-mm-dd hh24:mi')";
    //dich_swit=dich_swit+" and glkgdz.flsj <=sysdate and glkgdz.flsj>=to_date('"+getTime()+"','yyyy-mm-dd hh24:mi')";
    
	//渲染返回html代码
	var render_mlzt = function(value){  		
  		if(value=="0")
 	 	{
 	 	  return '未上报';
 	 	}
 	 	else if(value=="1")
 	 	{
 	 		return '待上报';
 	 	}
 	 	else if(value=="2")
 	 	{
 	 		return '<div  style="color:blue;">待审核</div>';
 	 	}
 	 		else if(value=="3")
 	 	{
 	 		return '<div  style="color:red;">待施工</div>';
 	 	}
 	 			else if(value=="4")
 	 	{
 	 		return '<div  style="color:green;">执行中</div>';
 	 	} 	 			else if(value=="5")
 	 	{
 	 		return '<div  style="color:green;">已完成</div>';
 	 	}
 	 	else
 	 	{
 	 		 return '作废';
 	 	}
  		
 	};
 		var planRecord_dw = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_dw = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'../selectdw.jsp?all='+'all&zt='+'(jglbdm= 1 )'}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_dw)
    });
     store_dw.load();
     /////-----------------查询对应的计划号
     var sql_jhh="select id,jhh from z_yxgl_zyjh where dwid in (select gqdm from J_GYJC_GQZD where "+dich_jhh+" ) and rownum<10  order by jhsj desc";
    
    var planRecord_jhh = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_jhh = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_jhh}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_jhh)
    });
     store_jhh.load();
    //----变电所命令网格--------------------------
	//定义Grid表头
	
	
	//定义Grid表头
	 	var expander_unit = new Ext.ux.grid.RowExpander({
        tpl : new Ext.Template(
            '<p><b>操作卡片号:</b> {czkah} <b>停电单元:</b> {tsdqj} <b>操作类型:</b> {czlx} ',
            '<p><b>命令内容:</b> {mlnr}</p>',
            '<p><b>备注:</b> {mlbz}</p>')
        });
        var expander_switch = new Ext.ux.grid.RowExpander({
        tpl : new Ext.Template(
            '<p><b>受令单位:</b> {gqmc} <b>发令时间:</b> {flsj} <b>要求完成时间:</b> {yqwcsj}')
        });
        var expander_web = new Ext.ux.grid.RowExpander({
        tpl : new Ext.Template(
        '<p><b>完成时间:</b> {yqwcsj} ',
        '<p><b>命令内容:</b> {mlnr}</p>',
            '<p><b>备注:</b> {mlbz}</p>')
        });
    var columns_unit = new Ext.grid.ColumnModel([
        
        //new Ext.grid.RowNumberer(),
        expander_unit,		
        {header:'序号',dataIndex:'xh',width:40,fixed:true},
        {header:'命令号',dataIndex:'mlh',width:50,fixed:true,sortable:true},
        {header:'命令类型',dataIndex:'mllx',width:60,sortable:true},
        {header:'受令变电所',dataIndex:'gqmc',width:60,sortable:true},
        //{header:'操作卡片号',dataIndex:'czkah',width:60,sortable:true},
        //{header:'命令内容',dataIndex:'mlnr',width:60,sortable:true},
        {header:'发令时间',dataIndex:'flsj',width:110,fixed:true,sortable:false},	
        {header:'批准时间',dataIndex:'pzsj',width:110,fixed:true,sortable:false},
        //{header:'消令时间',dataIndex:'xlsj',width:110,fixed:true},
        {header:'发令人',dataIndex:'flr',width:50,sortable:false},
        {header:'受令人',dataIndex:'slr',width:50,sortable:false}
       // {header:'消令人',dataIndex:'xlr',width:50,sortable:true},
       // {header:'命令状态',dataIndex:'mlzt',renderer:render_mlzt,width:60,fixed:true,sortable:true}
    
    ]);
   
    
    var Record_unit = Ext.data.Record.create([
    	{name:'xh',type:'int'},
    	{name:'commdid',type:'int'},
    	{name:'dwid',type:'string'},
    	{name:'dwmc',type:'string'},
    	{name:'jhid',type:'string'},
    	{name:'mlh',type:'string'},
    	{name:'sldwid',type:'string'},
    	{name:'sldwmc',type:'string'},
    	{name:'czkah',type:'string'},
    	{name:'mlnr',type:'string'},
    	{name:'tsdqj',type:'string'},
    	{name:'flsj',type:'string'},
    	{name:'pzsj',type:'string'},
    	{name:'xlsj',type:'string'},
    	{name:'flr',type:'string'},
    	{name:'slr',type:'string'},
    	{name:'xlr',type:'string'},
    	{name:'mlbz',type:'string'},
    	{name:'mlzt',type:'string'},
    	{name:'mllx',type:'string'},
    	{name:'ddy',type:'string'},
    	{name:'gqmc',type:'string'},
    	//{name:'tdqdmc',type:'string'},
    	{name:'czlx',type:'string'}
    	]);
    	
    
    //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store_unit = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'command_adapter_unit_json.jsp'}),   
        baseParams:{whereclause:dich_unit},//点击翻页的时候，这个值不会消失，作为基本参数，只有点击查询按钮时才会改变       
             
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },Record_unit)
    });
	store_unit.load({params:{start:0, limit:3}});
    
     

 	//----接触网命令网格--------------------------
	//定义Grid表头
    var columns_web = new Ext.grid.ColumnModel([
        
        //new Ext.grid.RowNumberer(),
        expander_web,		
        {header:'序号',dataIndex:'xh',width:40,fixed:true},
        {header:'命令号',dataIndex:'mlh',width:50,fixed:true,sortable:true},
        {header:'受令单位',dataIndex:'gqmc',width:80,sortable:true},
        {header:'发令时间',dataIndex:'flsj',width:110,fixed:true,sortable:true},
        {header:'命令内容',dataIndex:'mlnr',width:80,sortable:true},
        //{header:'停送电区段',dataIndex:'tdqd',width:80,sortable:true},
          {header:'报告人',dataIndex:'zybs',width:60},
        {header:'批准时间',dataIndex:'pzsj',width:110,fixed:true,sortable:true},
        {header:'完成报告单',dataIndex:'tdqd',width:110,fixed:true},
        {header:'发令人',dataIndex:'flr',width:90,fixed:true,sortable:false},
        {header:'受令人',dataIndex:'slr',width:90,fixed:true,sortable:false}
        //{header:'消令人',dataIndex:'xlr',width:90,fixed:true,sortable:true},
        //{header:'命令状态',dataIndex:'mlzt',renderer:render_mlzt,width:60,fixed:true,sortable:true}
      
    ]);
   
    
    var Record_web = Ext.data.Record.create([
    	{name:'xh',type:'int'},
    	{name:'commandid',type:'int'},
    	{name:'dwid',type:'string'},
    	{name:'dwmc',type:'string'},
    	{name:'jhid',type:'string'},
    	{name:'mlh',type:'string'},
    	{name:'sldwid',type:'string'},
    	{name:'sldwmc',type:'string'},
    	{name:'flsj',type:'string'},
    	{name:'yqwcsj',type:'string'},
    	{name:'mlnr',type:'string'},
    	{name:'tdqd',type:'string'},
    	{name:'pzsj',type:'string'},
    	{name:'xlsj',type:'string'},
    	{name:'flr',type:'string'},
    	{name:'slr',type:'string'},
    	{name:'xlr',type:'string'},
    	{name:'mlbz',type:'string'},
    	{name:'mlzt',type:'string'},
    	{name:'gqmc',type:'string'},
    	{name:'ddy',type:'string'}
    	]);
    	
    
    //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store_web = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'command_touch_web_json.jsp'}),        
       baseParams:{whereclause:dich_web},//点击翻页的时候，这个值不会消失，作为基本参数，只有点击查询按钮时才会改变       
         reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },Record_web)
    });
	store_web.load({params:{start:0, limit:10}});
    
    
    //定义表格面板,指定列模型，仓库，选择模型(默认行选择模型)
    var simple_Grid_web = new Ext.grid.GridPanel({
        //el:指定html元素用于显示的grid
        //el: 'grid3', 
        store:store_web,
    	cm: columns_web,
    	sm: new Ext.grid.RowSelectionModel({singleSelcet:true}),
        //title: '工区作业命令',
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
        plugins: expander_web,
        
        //iconCls: 'icon-grid',
        //height:400,
        //bottom bar
        bbar: new Ext.PagingToolbar({
            pageSize: 3,
            store: store_web,
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
              title : '工区倒闸命令查询—设置查询条件',
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
                                           		columnWidth : .25,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                                                layout : 'form',// formlayout用来放置控件
                                                border : false,// 没有边框
                                                items : [{
                                                			xtype : 'combo',// 控件的类型设置成combo
                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                                                               store : store_dw,
                                                               //value:'全部',
                                                               valueField : "value",// 设置下拉选择框的值
                                                               displayField : "text",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               //forceSelection : true,// 必须选择一个选项
                                                               //blankText : '请选择作业单位',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '受令单位',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'taskunit',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : false,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               //allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '受令单位',// 控件的标题是学历
                                                               name : 'taskunit',// 再次提醒，name只是下拉列表的名称
                                                               id:'dw_id',
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                 		},{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '起始日期',
                                                                             name : 'ksrq',
                                                                             id:'txt_ksrq',
                                                                             anchor : '90%',
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                      }]
                                                 },{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '结束日期',
                                                                             name : 'jsrq',
                                                                             id:'txt_jsrq',
                                                                             //value: new Date,
                                                                             anchor : '90%',
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                      }]
                                                 }]
                            }                            
                                                         ],
              // 为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
              buttons : [{
                                   //在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
                                   text : '查询',
                                   handler : function() {
                                          if (!simpleForm_Query.form.isValid()) {return };
                                   		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                                          if (simpleForm_Query.form.isValid()) {
                                        
                                         
                                           var where_web=" 1=1 ";
                                  
                                                    if(Ext.getCmp("txt_ksrq").getValue()!="" ){
													     where_web=where_web+" and jcwzy.flsj >=to_date('"+Ext.getCmp("txt_ksrq").getValue()+"','yyyy-mm-dd hh24:mi')";	
													    
													}
													 //alert(Ext.getCmp("txt_jsrq").getValue());
													if(Ext.getCmp("txt_jsrq").getValue()!="" ){
														    where_web=where_web+"  and jcwzy.flsj <=to_date('"+Ext.getCmp("txt_jsrq").getValue()+"','yyyy-mm-dd hh24:mi')";	
												
													}
											 
												 
													
													 
													
													
													if(Ext.getCmp("dw_id").getValue()!='ALL')
													{  
														if(Ext.getCmp("dw_id").getValue()!=''  && Ext.getCmp("dw_id").getValue()!='all'){
															     where_web=where_web+" and jcwzy.sldwid='"+Ext.getCmp("dw_id").getValue()+"' ";
												
													     }  
													}
													else
													{
													  	   where_web=where_web+" and "+dich_web1;
													}
												
												 
													
													store_web.baseParams.whereclause = where_web; 
				                                    simple_Grid_web.getStore().reload({ 
														params : { 
														start : 0, 
														limit : 3 
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
   
   
   
     
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		items: [simpleForm_Query,simple_Grid_web]
		
	});

});
	              
function getTime()
{
      var myyear,mymonth,myweek,myday,mytime,mymin,myhour,mysec;
	var mydate=new Date();
	myyear=mydate.getFullYear();
	mymonth=mydate.getMonth()+1;
	if(mymonth<10)
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
	mytime=myyear+"-"+mymonth+"-"+myday+" "+myhour+":"+mymin;
 
	return mytime;
}
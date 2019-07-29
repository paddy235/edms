Ext.onReady(function() {
	 
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    //传值计划的Id和计划的类别Id
    var userdj=document.getElementById("userdj").value;
    var dwid=document.getElementById("dwid").value;iswgq
    var iswgq=document.getElementById("iswgq").value;
 var djch='1=1';
    var djch2='';
    var table='';
    
    if(userdj=='6')
    {
        djch="dwid="+"'"+dwid+"'";
        djch2="dwid="+"'"+dwid+"'";
    }
    else if(userdj=='3')
    { //alert(userdj);
       djch="   dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.ddtdm like "+"'"+dwid+"%')";
       djch2="   (dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.ddtdm like "+"'"+dwid+"%') or dwid='"+dwid+"')";
       
    }
    else if(userdj=='2'||userdj=='1')
    {
     djch="1=1";
      // djch=" gzpzt!=0";
       //djch2=" gzpzt!=0";
    }
    else
    {
       djch="dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.cjdm like "+"'"+dwid+"%')";
       djch2="dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.cjdm like "+"'"+dwid+"%') ";
    }
    djch=djch+"and fpsj <=sysdate and fpsj>=to_date('"+getTime()+"','yyyy-mm-dd hh24:mi')";
    
   
    if(iswgq=='1')
    {
     table='z_yxgl_gzpGq_Green';
    }
    else
    {
     table='z_yxgl_gzpGq_Green';
    }


	var gzpXx="";
	var zt =function (value)
 	 {
 	 	if(value=="0")
 	 	{
 	 	  return '待上报';
 	 	}
 	 	else if(value=="1")
 	 	{
 	 		return '待审核';
 	 	}
 	 	else if(value=="2")
 	 	{
 	 		return '<div  style="color:green;">审核通过</div>';
 	 	}
 	 		else if(value=="3")
 	 	{
 	 		return '<div  style="color:red;">施工中</div>';
 	 	}
 	 			else if(value=="4")
 	 	{
 	 		return '<div  style="color:green;">已完成</div>';
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
	

 	//渲染返回html代码
 	 var renderXiangxi =function(value)
 	 {
 	 	
         gzpXx="../ticket_cx/operationPlan_Electric_look.jsp?id=";//查看工作票
 	     return '<a href="'+gzpXx+value+'">详细</a>';
 	 };
 	 var renderDel =function(value)
 	 {
 	     return '<a  href="'+gzpDel+value+'">删除</a>';
 	 };
  	///----受令单位变电所-----------
    //var sql="select gqdm,gqmc from J_GYJC_GQZD where jglbdm='2' and ddtdm=\'"+ddtdm+"\'";//

 	var planRecord_dw = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_dw = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'../selectdw.jsp?all='+'all&zt='+'(jglbdm= 1 or jglbdm=2)'}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_dw)
    });
     store_dw.load();
     
     
     
     
     
     		var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '工作票—设置查询条件',
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
                                           		columnWidth : .3,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
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
                                                               emptyText : '选择作业单位',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'taskunit',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : false,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               //allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '作业单位',// 控件的标题是学历
                                                               name : 'taskunit',// 再次提醒，name只是下拉列表的名称
                                                               id:'dw_id',
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                 		},{
                                                        columnWidth : .35,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '起始日期',
                                                                             name : 'ksrq',
                                                                             id:'txt_ksrq',
                                                                             //value: new Date,
                                                                             anchor : '90%',
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                      }]
                                                 },{
                                                        columnWidth : .35,
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
                            // 上面是第一行，下面我们要创建一个checkbox选项输入。checkbox的设置和radio的设置大同小异，大家注意列宽的定义就行。
                            , {
                                   layout : 'column',// columnlayout
                                   border : false,// 没有边框
                                   labelSeparator : '：',// 标题的分隔符号我们用中文冒号代替英文的冒号（labelSeparator:'：'）。
                                   // coulmnLayout里的控件将定义在items里
                                   items : [{
                                                        columnWidth : .2,// 在加入性别的radio控件时就要注意了，这里需要加入两个radio，第一radio是有标题的，第二是没有的，而且两个radio加起来的宽度应该正好是余下的列宽（50%）
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             style : 'margin-top:5px',// 设置一个css属性，顶部的外补丁为5px（style:'margin-top:5px'），原因是为了选择按钮和标题对齐，大家可以将该属性去掉然后看看效果。
                                                                             xtype : 'radio',// Formlayout里加入了一个类型为radio的控件
                                                                             fieldLabel : '工作票状态',// 控件的标题是性别
                                                                             boxLabel : '全部',// 控件的选择显示文本是男
                                                                             name : 'jhzt',// input的name属性值是sex
                                                                             checked : true,// 该控件默认是已选的
                                                                             inputValue : '5',// 控件的值（value）是男
                                                                             anchor : '95%'// input的宽度是95%
                                                                      }]
                                                 },{
                                                        columnWidth : .1,// 我们已经设置了3列，3列的列宽分别为50%、25%、25%
                                                        layout : 'form',
                                                        labelWidth : 0,// 标题的宽度设置为0
                                                        labelSeparator : '',// 标题分隔符号为空
                                                        hideLabels : true,// 第二个raido控件的列设置就有所不同，因为它不需要标题，所以要设置隐藏标题
                                                        border : false,
                                                        items : [{
                                                                             style : 'margin-top:5px',
                                                                             xtype : 'radio',
                                                                             fieldLabel : '',
                                                                             boxLabel : '待上报',
                                                                             name : 'jhzt',
                                                                             inputValue : '0',
                                                                             anchor : '95%'
                                                                      }]
                                                 },{
                                                        columnWidth : .1,// 我们已经设置了3列，3列的列宽分别为50%、25%、25%
                                                        layout : 'form',
                                                        labelWidth : 0,// 标题的宽度设置为0
                                                        labelSeparator : '',// 标题分隔符号为空
                                                        hideLabels : true,// 第二个raido控件的列设置就有所不同，因为它不需要标题，所以要设置隐藏标题
                                                        border : false,
                                                        items : [{
                                                                             style : 'margin-top:5px',
                                                                             xtype : 'radio',
                                                                             fieldLabel : '',
                                                                             boxLabel : '待审核',
                                                                             name : 'jhzt',
                                                                             inputValue : '1',
                                                                             anchor : '95%'
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
                                                  var where="1=1";
                                                    if(Ext.getCmp("txt_ksrq").getValue()!="" ){
														where=where+" and fpsj >=to_date('"+Ext.getCmp("txt_ksrq").getValue()+"','yyyy-mm-dd hh24:mi')";	
													}
													if(Ext.getCmp("txt_jsrq").getValue()!="" ){
														where=where+"  and fpsj <=to_date('"+Ext.getCmp("txt_jsrq").getValue()+"','yyyy-mm-dd hh24:mi')";	
													}
													
													if(Ext.getCmp("dw_id").getValue()!='ALL'&& Ext.getCmp("dw_id").getValue()!='')
													{
														if(Ext.getCmp("dw_id").getValue()!=''  && Ext.getCmp("dw_id").getValue()!='all'){
															where=where+" and dwid='"+Ext.getCmp("dw_id").getValue()+"' ";
														}
													}
													else
													{
													    where=where+" and "+djch2;
													}
												   	var jhztvalue;
												    var jhzt = document.getElementsByName('jhzt');//根据名字得到一组数组

                                                    var ZTvalue="";
													for(var i =0;i<jhzt.length;i++){
													if(jhzt[i].checked){
													     jhztvalue = jhzt[i].id;		
													     ZTvalue= document.getElementById(jhztvalue).value;
													    }
													}
													if(ZTvalue!='' && ZTvalue!='5')
													{
													  where =where+" and gzpzt="+ZTvalue;
													}
													else
													{
													   //alert(where);
													}
													 
													 //alert(where);
													store.baseParams.table=table;
													store.baseParams.whereclause =where; 
													
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
                            }]
       });
       
    //定义Grid表头
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
        //new Ext.grid.RowNumberer(),
        
        {header:'序号',dataIndex:'xh',width:40,fixed:true},
        {header:'单位',dataIndex:'dwmc',width:80,fixed:true,sortable:true},
        //{header:'作业类别',dataIndex:'jhlb',width:80,fixed:true,sortable:true},
        {header:'工作票号',dataIndex:'gzph',width:80,fixed:true,sortable:true},
        {header:'发票人',dataIndex:'fpr',fixed:true,width:60,sortable:true},
        {header:'发票时间',dataIndex:'fpsj',width:110,fixed:true,sortable:true},
        {header:'工作领导人',dataIndex:'gzldr',fixed:true,width:80},
        //{header:'出工人数',dataIndex:'cgrs',fixed:true,width:60},
        {header:'工作票内容',dataIndex:'zynr',width:160,sortable:true},
         {header:'调度员',dataIndex:'DDSHY',width:60,sortable:true},
        {header:'审核时间',dataIndex:'SPSJ',width:60,sortable:true},
        {header:'完成时间',dataIndex:'jssj',width:110,fixed:true,sortable:true},
        {header:'状态',dataIndex:'gzpzt',width:60,fixed:true,renderer:zt,sortable:true},
        {header:'详细',dataIndex:'gzpid',width:60,renderer:renderXiangxi,fixed:true}
    ]);
   
    
    var planRecord = Ext.data.Record.create([
    	{name:'gzpid',type:'int'},
    	{name:'xh',type:'int'},
    	{name:'gzph',type:'string'},
    	{name:'dwmc',type:'string'},
    	//{name:'jhlb',type:'string'},
    	{name:'fpr',type:'string'},
    	{name:'fpsj',type:'string'},
    	{name:'gzldr',type:'string'},
    	{name:'cgrs',type:'string'},
    	{name:'zynr',type:'string'},
    	{name:'jssj',type:'string'},
    	    	{name:'DDSHY',type:'string'},
    	{name:'SPSJ',type:'string'},
    	{name:'gzpzt',type:'string'},
    	{name:'sjc',type:'string'}
    	]);
    	
    
    //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'gzpcx_json.jsp'}), 
         baseParams:{whereclause:djch,table:table},//点击翻页的时候，这个值不会消失，作为基本参数，只有点击查询按钮时才会改变       
            
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
        
      
    });
     Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
	

	
	    

    	

    
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Query,simple_Grid]
	});

    //Ext.getCmp("txt_wgq").setValue=true;
   // alert(Ext.getCmp("txt_wgq").getValue());txt_jsrq
   Ext.getCmp("txt_ksrq").setValue(getTime());
   Ext.getCmp("txt_jsrq").setValue(get_nowTime());
    
});
              function getTime()
       {
          //***得到当前时间**//
    var myyear,mymonth,myweek,myday,mytime,mymin,myhour,mysec;
	var mydate=new Date();
	myyear=mydate.getFullYear();
	mymonth=mydate.getMonth()+1;
	if(mymonth<10)
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
        }
        function get_nowTime()
{
     var now = new Date();
       
        var year = now.getFullYear();       //年
        var month = now.getMonth() + 1;     //月
        var day = now.getDate();            //日
       
        var hh = now.getHours();            //时
        var mm = now.getMinutes();          //分
       
        var clock = year + "-";
       
        if(month < 10)
            clock += "0";
       
        clock += month + "-";
       
        if(day < 10)
            clock += "0";
           
        clock += day + " ";
       
        if(hh < 10)
            clock += "0";
           
        clock += hh + ":";
        if (mm < 10) clock += '0'; 
        clock += mm; 
        return(clock); 

}
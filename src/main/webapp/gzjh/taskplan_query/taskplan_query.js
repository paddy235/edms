Ext.onReady(function() {
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var userdj=document.getElementById("userdj").value;
    var dwid=document.getElementById("dwid").value;
    var djch='';
    var dich2='';
	
    if(userdj=='6')
    {
        djch="jh.dwid="+dwid;
        dich2="jh.dwid="+dwid;
    }
    else if(userdj=='3')
    { //alert(userdj);
       djch=" jh.zt!=0 and jh.dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.ddtdm like "+"'"+dwid+"%')";
       dich2=" jh.zt!=0 and jh.dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.ddtdm like "+"'"+dwid+"%')";
    }
    else if(userdj=='4'||userdj=='5')
    {
        djch="jh.dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.cjdm like "+"'"+dwid+"%')";
        dich2="jh.dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.cjdm like "+"'"+dwid+"%')";
    }
    else
    {
       djch=" jh.zt!=0 ";
       dich2=" jh.zt!=0 ";
    }
	
    djch=djch+"and jh.jhsj <=sysdate and jh.jhsj>=to_date('"+get_nowTime()+"','yyyy-mm-dd hh24:mi')";
    var expander = new Ext.ux.grid.RowExpander({
        tpl : new Ext.Template(
            '<p><b>电调员:</b> {spr} <b>电调主任:</b> {ddzr} <b>行调调主任:</b> {xdzr} <b>天窗开始时间:</b> {tcsjks} <b>天窗结束时间:</b>{tcsjjs}</p>',
            '<p><b>作业地点:</b> {sgdd} <b>作业时间:</b> {ydsj}  <b>作业内容:</b> {jhnr}<b>停电范围:</b> {nrjyq} <b>封锁范围:</b> {fsfw} <b>轨道车运行:</b> {gdcnr}</p>',
            '<p><b>备注:</b> {bz}</p>')
    });
	//渲染返回html代码
	var render_jhzt = function(value){  		
  		if (value=='-1') {return '已作废';}
  		if (value=='0')  {return '草拟计划';}
		if (value=='8')  {return '计划已取消';}
  		if (value=='1')  {return '<div  style="color:blue;">待供电段上报</div>';}
  		if (value=='2')  {return '<div  style="color:B08100;">待电调审批</div>';}
  		if (value=='3')  {return '<div  style="color:FF8100;">待电调主任审批</div>';}
  		if (value=='4')  {return '<div  style="color:red;">待施工主任审批</div>';}
		if (value=='5')  {return '<div  style="color:red;">待值班主任审批</div>';}
  	    if(value=="6")	 {return '<div  style="color:555800;">待归档</div>';}	
		if(value=="9")	 {return '<div  style="color:green;">已经归档</div>';}
  		
 	};

/*--申请单位---*/
	 var sql="select dwdm,dwmc from v_j_gyjc_yhdw where jb=6 order by dwmc";

 	var planRecord_dw = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
 	var store_dw = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?all=all&sql='+sql}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_dw)
    });
   store_dw.load(); 
 	

	//定义Grid表头
    var columns = new Ext.grid.ColumnModel([
        
        //new Ext.grid.RowNumberer(),
         expander,		
        {header:'序号',dataIndex:'xh',width:40,fixed:true},
        {header:'单位名称',dataIndex:'dwmc',width:80,sortable:true,fixed:true},
        {header:'填报时间',dataIndex:'tbsj',width:120,sortable:true,fixed:true},
        {header:'作业日期',dataIndex:'jhsj',width:80,sortable:true,fixed:true},
        {header:'线别',dataIndex:'xlm',width:60,fixed:true},
        {header:'填报人',dataIndex:'xingb',width:60,fixed:true},
        {header:'计划类别',dataIndex:'jhlb',width:80,sortable:true,fixed:true},

		{header:'计划类型',dataIndex:'sxmc',width:80,sortable:true,fixed:true},
        {header:'维修项目',dataIndex:'wxxm',width:120,sortable:true},
	    {header:'配合单位',dataIndex:'phdw',width:60,sortable:true},
        {header:'工作领导人',dataIndex:'fzr',width:60,sortable:true},
        {header:'状态',dataIndex:'zt',renderer:render_jhzt,sortable:true,width:100,fixed:true}
       
    ]);
   
    
    var planRecord = Ext.data.Record.create([
    	{name:'xh',type:'int'},
    	{name:'id',type:'int'},
    	{name:'dwid',type:'string'},
    	{name:'jhh',type:'string'},
    	{name:'tdqd',type:'string'},
    	{name:'jhsj',type:'string'},
    	{name:'xb',type:'string'},
    	{name:'xingb',type:'string'},
    	{name:'jhlb',type:'string'},
    	{name:'sgdd',type:'string'},
    	{name:'ydsj',type:'string'},
    	{name:'wxxm',type:'string'},
    	{name:'phdw',type:'string'},
    	{name:'fzr',type:'string'},
    	{name:'jhlx',type:'string'},
    	{name:'tbsj',type:'string'},
    	{name:'nrjyq',type:'string'},
    	{name:'bz',type:'string'},
    	{name:'spr',type:'string'},
    	{name:'zt',type:'string'},
    	{name:'yxfw',type:'string'},
    	{name:'dwmc',type:'string'},
    	{name:'xlm',type:'string'},
    	{name:'fsfw',type:'string'},
    	{name:'ylz',type:'string'},
    	{name:'jhnr',type:'string'},
    	{name:'sxmc',type:'string'},//计划类型的名称
    	{name:'mlh',type:'string'},
    	{name:'gdcnr',type:'string'},
		{name:'ddzr',type:'string'},
		{name:'xdzr',type:'string'},
		{name:'tcsjks',type:'string'},
		{name:'tcsjjs',type:'string'},
    	{name:'sjc',type:'string'}
    	]);
    	
    
    //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'taskplan_query_json.jsp'}),
         baseParams:{whereclause:djch},//点击翻页的时候，这个值不会消失，作为基本参数，只有点击查询按钮时才会改变       
                
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
              title : '作业计划—设置查询条件',
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
                                           		columnWidth : .33,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                                                layout : 'form',// formlayout用来放置控件
                                                border : false,// 没有边框
                                                items : [{
                                                			xtype : 'combo',// 控件的类型设置成combo
                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                                                               store :store_dw,
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
                                                        columnWidth : .33,
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
                                                        columnWidth : .33,
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
                                                                             fieldLabel : '计划状态',// 控件的标题是性别
                                                                             boxLabel : '全部',// 控件的选择显示文本是男
                                                                             name : 'jhzt',// input的name属性值是sex
                                                                             //checked : true,// 该控件默认是已选的
                                                                             inputValue : '5',// 控件的值（value）是男
                                                                             anchor : '95%'// input的宽度是95%
                                                                      }]
                                                 },{
                                                        columnWidth : .12,// 我们已经设置了3列，3列的列宽分别为50%、25%、25%
                                                        layout : 'form',
                                                        labelWidth : 0,// 标题的宽度设置为0
                                                        labelSeparator : '',// 标题分隔符号为空
                                                        hideLabels : true,// 第二个raido控件的列设置就有所不同，因为它不需要标题，所以要设置隐藏标题
                                                        border : false,
                                                        items : [{
                                                                             style : 'margin-top:5px',
                                                                             xtype : 'radio',
                                                                             fieldLabel : '',
                                                                             boxLabel : '未上报',
                                                                             name : 'jhzt',
                                                                             inputValue : '0,1',
                                                                             anchor : '95%'
                                                                      }]
                                                 }, {
                                                        columnWidth : .12,// 我们已经设置了3列，3列的列宽分别为50%、25%、25%
                                                        layout : 'form',
                                                        labelWidth : 0,// 标题的宽度设置为0
                                                        labelSeparator : '',// 标题分隔符号为空
                                                        hideLabels : true,// 第二个raido控件的列设置就有所不同，因为它不需要标题，所以要设置隐藏标题
                                                        border : false,
                                                        items : [{
                                                                             style : 'margin-top:5px',
                                                                             xtype : 'radio',
                                                                             fieldLabel : '',
                                                                             boxLabel : '审批中',
                                                                             name : 'jhzt',
                                                                             inputValue : '2,3,4,5',
                                                                             anchor : '95%'
                                                                      }]
                                                 }, {
                                                	    columnWidth : .12,// 我们已经设置了3列，3列的列宽分别为50%、25%、25%
                                                        layout : 'form',
                                                        labelWidth : 0,// 标题的宽度设置为0
                                                        labelSeparator : '',// 标题分隔符号为空
                                                        hideLabels : true,// 第二个raido控件的列设置就有所不同，因为它不需要标题，所以要设置隐藏标题
                                                        border : false,
                                                        items : [{
                                                                             style : 'margin-top:5px',
                                                                             xtype : 'radio',
                                                                             fieldLabel : '',
                                                                             boxLabel : '归档',
                                                                             name : 'jhzt',
                                                                             inputValue : '6,9',
                                                                             anchor : '95%'
                                                                      }]
                                                 },{
                                                	    columnWidth : .12,// 我们已经设置了3列，3列的列宽分别为50%、25%、25%
                                                        layout : 'form',
                                                        labelWidth : 0,// 标题的宽度设置为0
                                                        labelSeparator : '',// 标题分隔符号为空
                                                        hideLabels : true,// 第二个raido控件的列设置就有所不同，因为它不需要标题，所以要设置隐藏标题
                                                        border : false,
                                                        items : [{
                                                                             style : 'margin-top:5px',
                                                                             xtype : 'radio',
                                                                             fieldLabel : '',
                                                                             boxLabel : '已取消',
                                                                             name : 'jhzt',
                                                                             inputValue : '8',
                                                                             anchor : '95%'
                                                                      }]
                                                 },{
                                                        columnWidth : .12,// 我们已经设置了3列，3列的列宽分别为50%、25%、25%
                                                        layout : 'form',
                                                        labelWidth : 0,// 标题的宽度设置为0
                                                        labelSeparator : '',// 标题分隔符号为空
                                                        hideLabels : true,// 第二个raido控件的列设置就有所不同，因为它不需要标题，所以要设置隐藏标题
                                                        border : false,
                                                        items : [{
                                                                             style : 'margin-top:5px',
                                                                             xtype : 'radio',
                                                                             fieldLabel : '',
                                                                             boxLabel : '已作废',
                                                                             name : 'jhzt',
                                                                             inputValue : '-1',
                                                                             anchor : '95%'
                                                                      }]
                                                 }]

                            }
,// 上面是第一行,以下每行布局同上！
                            {
                                   layout : 'column',
                                   border : 'false',
                                   labelSeparator : '：',
                                   items : [{
                                                        columnWidth : .5,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype: 'checkboxgroup',
            																 fieldLabel: '计划类型',
            																 style : 'margin-top:4px',// 设置一个css属性，顶部的外补丁为5px（style:'margin-top:5px'），原因是为了选择按钮和标题对齐，大家可以将该属性去掉然后看看效果。
            																// Distribute controls across 3 even columns, filling each row
            																// from left to right before starting the next row
            																columns: 6,
            																items: [
               																	 {boxLabel: '施工计划', name: 'zylb1',id:'txt_zylb1', inputValue: '006001', checked: true},
																				 {boxLabel: '维修计划', name: 'zylb2',id:'txt_zylb2', inputValue: '006002', checked: true}, 
                																 {boxLabel: '临时作业', name: 'zylb3', id:'txt_zylb3',inputValue: '006003', checked: true}                																 														
            																		  ],
                                                                             anchor : '95%'
                                                                      }]
                                                 }]

                            }// 上面是第一行,以下每行布局同上！
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
													//alert("OOOO");
                                                    if(Ext.getCmp("txt_ksrq").getValue()!="" ){
														where=where+" and jh.jhsj >=to_date('"+Ext.getCmp("txt_ksrq").getValue()+"','yyyy-mm-dd hh24:mi')";	
													}
													
													if(Ext.getCmp("txt_jsrq").getValue()!="" ){
														where=where+"  and jh.jhsj <=to_date('"+Ext.getCmp("txt_jsrq").getValue()+"','yyyy-mm-dd hh24:mi')";	
													}
													//alert(Ext.getCmp("dw_id").getValue());
													if(Ext.getCmp("dw_id").getValue()!='ALL'&& Ext.getCmp("dw_id").getValue()!='')
													{   //alert(Ext.getCmp("dw_id").getValue());
														if(Ext.getCmp("dw_id").getValue()!=''  && Ext.getCmp("dw_id").getValue()!='all'){
															where=where+" and jh.dwid='"+Ext.getCmp("dw_id").getValue()+"' ";
														}
													}else{
													   //where=where+"  and "+djch;
													   where=dich2;
													}
													//alert(where);
													var paymodevalue;
													   var tempmodel = document.getElementsByName('jhzt');//根据名字得到一组数组
													   var value="";
													   for(var i =0;i<tempmodel.length;i++){
													    if(tempmodel[i].checked){
													     paymodevalue = tempmodel[i].id;
													    value= document.getElementById(paymodevalue).value;
													    }
													   }
													 if(value!=''&& value!='5')
													 {
													   where =where+" and jh.zt in("+value+")";
													 }
													 else
													 {
													   where =where;
													 }
													//alert(where);
													 if(Ext.getCmp('txt_zylb1').checked && Ext.getCmp('txt_zylb2').checked && Ext.getCmp('txt_zylb3').checked)
													 {
													    where=where+" and (jhlx='006001' or jhlx='006002' or jhlx='006003')";
													 }
													 if(!Ext.getCmp('txt_zylb1').checked && Ext.getCmp('txt_zylb2').checked)
													 {
													    where=where+" and (jhlx='006002' or jhlx='006003')";
													 }
													 
													 if(Ext.getCmp('txt_zylb1').checked && !Ext.getCmp('txt_zylb2').checked)
													 {
													    where=where+" and jhlx='006001' ";
													 }
												   //alert(value);											
													//where =where +" and trim(qxdj) in ("+dj+")";
													//alert(where);
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
                            }, {

                                   // 取消按钮就是简单的reset一下form的控件
                                   text : '查看报表',
                                   handler : function() {
                                        ryshow();
                                         //window.location.href='../../tjbb/query/dfddmljl.jsp';
                                         
                                   }
                            }]
       });
   
   
    
     
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Query,simple_Grid]
	});
		simpleForm_Query.buttons[2].setVisible(false);
    Ext.getCmp("txt_ksrq").setValue(get_nowTime());
    Ext.getCmp("txt_jsrq").setValue(getTime());
    //simpleForm_Save.collapse();
      this.ryshow=function(value){
		//alert("TZSID"+value);
    	win1 = new Ext.Window({
        	width:document.body.clientWidth-20,
        	height:document.body.clientHeight-10,
        	layout:'column',
       		title: '供电维修作业计划报表',
        	closeAction:'hide',
        	plain: true,
        	autoScroll:false,
        	html:'<iframe style="width:100%;height:100%" src="../../tjbb/query/wxzyjh.jsp"></iframe>'
    	});
    	win1.show(this);
  	};
});
              function get_nowTime()
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
Ext.onReady(function() {
	   
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
     var userdwid=document.getElementById("userDwid").value;
     var gzbh=document.getElementById("gzbh").value;
     var dljcjgsj=document.getElementById("dljcjgsj").value;
     var txt_mlh=document.getElementById("mlh").value;
     var userName=document.getElementById("userName").value;
     //var dich='dwid like '+"'"+userdwid+"%' and tzsj <=sysdate and tzsj>=to_date('"+get_nowTime()+"','yyyy-mm-dd hh24:mi')";//tzsj
     //var dich1='dwid like '+"'"+userdwid+"%'";
     var dich=" tzsj <=sysdate and tzsj>=to_date('"+get_nowTime()+"','yyyy-mm-dd hh24:mi')";//tzsj
     var dich1=" 1=1 ";
    //alert(userName);
    var renderzt =function(value)
 	 {
 	     if(value=="0") 
 	 	{
 	 	    return "<span style='color:red;font-weight:bold;'>电调待发送</span>";

 	 	}
 	 	else if(value=="1")
 	 	{
 	 		return "<span style='color:blue;font-weight:bold;'>电调降弓已发送、行调未签收</span>";

 	 	}
 	 	else if(value=="2")
 	 	{
 	 	return "<span style='color:green;font-weight:bold;'>电调降弓已发送、行调未签认</span>";
 	 	
 	 	}
 	 	else if(value=="3")
 	 	{
 	 	return "<span style='color:red;font-weight:bold;'>行调降弓已签认、电调未签收</span>";
 	 	
 	 	}
 	 	else if(value=="4")
 	 	{
 	 	 return "<span style='color:red;font-weight:bold;'>电调撤弓待发送</span>";
 	 	 
 	 	}
 	 	else if(value=="5")
 	 	{return "<span style='color:blue;font-weight:bold;'>电调撤弓已发送、行调未签收</span>";
 	 	}
 	 	else if(value=="6")
 	 	{return "<span style='color:green;font-weight:bold;'>电调撤弓已发送、行调未签认</span>";
 	 	}
 	 	else if(value=="7")
 	 	{ return "<span style='color:red;font-weight:bold;'>行调撤弓已签认、电调未签收</span>";
 	 	}
 	 	else if(value=="8")
 	 	{return "<span style='color:black;font-weight:bold;'>行调撤弓已签认、电调已签收</span>";
 	 	}
 	 };
        ///----查询单位的comlist-----------
    var sql="select ddtdm,ddtmc from j_gyjc_ddtzd  where ddtdm like \'"+userdwid+"%25\'&all=all";
     
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
    //定义Grid表头
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
        //new Ext.grid.RowNumberer(),
        
        {header:'序号',dataIndex:'xh',width:35,fixed:true},
        {header:'单位名称',dataIndex:'dwmc',width:88,sortable:true},
        {header:'降弓命令号',dataIndex:'mlh',width:60,sortable:true},
       // {header:'降弓地点',dataIndex:'jgdd',width:60,sortable:true},
        // {header:'降弓原因',dataIndex:'jgyy',width:120,sortable:true},
        //{header:'终止位置',dataIndex:'jsjtwz',width:60,sortable:true},
       // {header:'行别',dataIndex:'xb',width:40,sortable:true},
        {header:'降弓',dataIndex:'jg',width:40,sortable:true},
        {header:'升弓',dataIndex:'sg',width:40,sortable:true},
       // {header:'准备降弓',dataIndex:'zbjg',width:60,sortable:true},
       // {header:'T降弓',dataIndex:'tjg',width:60,sortable:true},
        //{header:'电调',dataIndex:'ddy',width:60,sortable:true},
        {header:'降弓时间',dataIndex:'tzsj',width:88,sortable:true},
        //{header:'行调',dataIndex:'xdy',width:60,sortable:true},
        {header:'行调确认时间',dataIndex:'ccsj',width:88,sortable:true},
        //{header:'列车调度员',dataIndex:'xdy',width:50,sortable:true},
        //{header:'供电调度员',dataIndex:'ddy',width:50,sortable:true},
        {header:'状态',dataIndex:'zt',width:180,renderer:renderzt,fixed:true}
    ]);
   
    
    var planRecord = Ext.data.Record.create([
    	{name:'xh',type:'int'},
    	{name:'tzid',type:'int'},
    	{name:'dwid',type:'string'},
    	{name:'dwmc',type:'string'},
    	{name:'mlh',type:'string'},
    	{name:'lcddy',type:'string'},
    	{name:'jgdd',type:'string'},
    	{name:'jsjtwz',type:'string'},
    	{name:'xb',type:'string'},
    	{name:'m_ksjtwx',type:'string'},
    	{name:'m_jsjtwx',type:'string'},
    	{name:'zbjg',type:'string'},
    	{name:'tjg',type:'string'},
    	{name:'zbjgb',type:'string'},
    	{name:'jg',type:'string'},
    	{name:'sg',type:'string'},
    	{name:'tzsj',type:'string'},
    	{name:'ccsj',type:'string'},
    	{name:'gdddy',type:'string'},
    	{name:'xdy',type:'string'},
    	{name:'ddy',type:'string'},
    	{name:'pdqk',type:'string'},
    	{name:'bz',type:'string'},
    	{name:'jgyy',type:'string'},
    	{name:'sgmlh',type:'string'},
    	{name:'zt',type:'string'}
    	]);
    	
    
    //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'fallbow_notice_json.jsp'}), 
        baseParams:{whereclause:dich},//点击翻页的时候，这个值不会消失，作为基本参数，只有点击查询按钮时才会改变       
                  
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
	// form start
	var simpleForm_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '降弓通知书—登记',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 800,
              collapsible:true,
              titleCollapse:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              labelWidth : 100,
              
              
              items : [{
                                   layout : 'column',// columnlayout
                                   border : false,// 没有边框
                                   labelSeparator : '：',// 标题的分隔符号我们用中文冒号代替英文的冒号（labelSeparator:'：'）。
                                   // coulmnLayout里的控件将定义在items里
                                   items : [{xtype:'hidden',name:'tzid',id:'txt_tzid'}
                                   				,{
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '命令号',
                                                                             name : 'mlh',
                                                                             id:'txt_mlh',
                                                                             //value:'asdfasdf',
                                                                             anchor : '90%'
                                                                            
                                                                      }]
                                                 }, {
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '降弓地点',
                                                                             name : 'jgdd',
                                                                             anchor : '90%',
                                                                             //blankText : '请填写通知编号',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                                             //emptyText : '填写通知编号',
                                                                             allowBlank : false // 该选项值不允许为空
                                                                      }]
                                                 }, {
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// 控件的类型设置成combo
                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                                                               store : new Ext.data.SimpleStore({
                                                                      // 通过一个数组定义了returnValue和displayText两个字段。retrunValue字段指定是提交给后台的值，displayText字段指定是在下拉中显示的选择值。
                                                                      fields : ["returnValue", "displayText"],
                                                                      // 定义了几组数据.每组数据都是根据fiedls的定义来组成的，数组里第一个值就是retrunValue的值，第二个值就是displayText的值，例如[1,'小学']，就表示retrunValue是1，displayText是小学。
                                                                      data : [['上行', '上行'],['下行', '下行'],['垂直', '垂直']]
                                                               }),
                                                               valueField : "returnValue",// 设置下拉选择框的值
                                                               displayField : "displayText",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               //forceSelection : true,// 必须选择一个选项
                                                               blankText : '行别',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '行别',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'xb',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : false,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '行别',// 控件的标题是学历
                                                               name : 'xb',// 再次提醒，name只是下拉列表的名称
                                                               anchor : '90%'// input的宽度是90%
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
                                                                             fieldLabel : '降弓（例：178.235）',
                                                                             //labelSeparator : '（例：K178.235）',
                                                                             name : 'jg',
                                                                             id:'txt_jg',
                                                                             //readOnly:true,
                                                                             anchor : '90%'
                                                                             
                                                                            
                                                                      }]
                                                 },{
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '升弓（例：178.675）',
                                                                             //labelSeparator : '',
                                                                             name : 'sg',
                                                                             id:'txt_sg',
                                                                             listeners:{"blur":function(){
			                                                               		var txt_jg=Ext.getCmp("txt_jg").getValue();
			                                                               		var txt_sg=Ext.getCmp("txt_sg").getValue();
			                                                               		
			                                                               		  if(!isNaN(txt_jg) && !isNaN(txt_sg))
			                                                               		  {
			                                                               		     //alert(parseFloat(txt_jg.substring(1))+100);
			                                                               		     var jg=""; var tjg="";
			                                                               		     if(parseFloat(txt_jg)<=parseFloat(txt_sg))
			                                                               		     {
			                                                               		       //alert("K"+parseFloat(txt_jg.substring(1)-0.25).toString());
			                                                               		        jg=(parseFloat(txt_jg)-0.25).toString();
			                                                               		        tjg=(parseFloat(txt_jg)-0.15).toString();
			                                                               		     }
			                                                               		     else
			                                                               		     {//.toFixed(3)
			                                                               		        jg=(parseFloat(txt_jg)+0.25).toString();
			                                                               		        tjg=(parseFloat(txt_jg)+0.15).toString();
			                                                               		     }
			                                                               		     //alert(tjg);
			                                                               		     //alert(jg);
			                                                               		     var w=jg.indexOf('.');
			                                                               		     var s=tjg.indexOf('.');
			                                                               		     //alert(w);
			                                                               		     //alert(jg.substring(0,(w+4)));
			                                                               		     Ext.getCmp("txt_zbjg").setValue(jg.substring(0,(w+4)));
			                                                               		     Ext.getCmp("txt_tjg").setValue(tjg.substring(0,(s+4)));
			                                                               		     //Ext.getCmp("txt_tjg").readOnly=false;
			                                                               		     //Ext.getCmp("txt_tjg").getEl().dom.readOnly=false;
			                                                               		      //Ext.getCmp("txt_zbjg").setValue(jg);txt_zbjg
			                                                               		     //Ext.getCmp("txt_tjg").setValue(tjg);
			                                                               		  }
			                                                               		  else
			                                                               		  {
			                                                               		     Ext.Msg.alert('消息',"请确保输入的数据正确！");
			                                                               		  }
			                                                               		  
			                                                               		}
			                                                               		
                                                               },
                                                                             //labelWidth : 20,
                                                                             anchor : '90%'
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 }]
                            }
                            /*, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [{
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '准备降弓',
                                                                             name : 'zbjg',
                                                                             readOnly:true,
                                                                             id:'txt_zbjg',
                                                                             anchor : '90%'
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 }, {
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : 'T降弓',
                                                                             //labelSeparator : 'dfdfd',
                                                                             readOnly:true,
                                                                             name : 'tjg',
                                                                             id:'txt_tjg',
                                                                            // labelWidth : 20,
                                                                             anchor : '90%'
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 }]
                            }*/
                            , {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [{
                                                        columnWidth : 1.06,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textarea',// 控件的类型为datefield
                                                                             fieldLabel : '坡度情况',
                                                                             name : 'pdqk',
                                                                             anchor : '90%',
                                                                             height:40
                                                                             //format:'Y-m-d'
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
                                                                             fieldLabel : '降弓原因',
                                                                             name : 'jgyy',
                                                                             anchor : '90%',
                                                                             height:40
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
                                                                             fieldLabel : '备注',
                                                                             name : 'bz',
                                                                             anchor : '90%',
                                                                             height:40
                                                                             //format:'Y-m-d'
                                                                      }]
                                                 }]
                            },{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [ {
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '电调',
                                                                             name : 'ddy',
                                                                             id:'txt_ddy',
                                                                             anchor : '90%'
                                                                            //format:'Y-m-d'
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 },{
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '降弓时间',
                                                                             name : 'tzsj',
                                                                             anchor : '90%',
                                                                             id:'txt_tzsj',
                                                                             allowBlank : false,
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                      }]
                                                 }]
                            },{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [ {
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '行调',
                                                                             name : 'xdy',
                                                                             id:'txt_xdy',
                                                                             anchor : '90%'
                                                                            //format:'Y-m-d'
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 },{
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '行调确认时间',
                                                                             name : 'ccsj',
                                                                             anchor : '90%',
                                                                             id:'txt_ccsj',
                                                                             //allowBlank : false,
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                      }]
                                                 }]
                            }
                           
                            ],
              //为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
              buttons : [{
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
                                   text : '添加',
                                   handler : function() {
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                                          if (simpleForm_Save.form.isValid()) {
                                                 // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                                                 //this.disabled = true;
                                                 // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                                                 simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'保存中,请稍侯...',  
                                                                      url : 'fallbow_notice_save.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                                                                      // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                                                                      success : function(form, action) {
                                                                             // 例如返回的json结构是"{success:true,data:'成功保存！'}"，
                                                                             //Ext.Msg.alert('操作',action.result.data);
                                                                      		Ext.Msg.alert('消息',action.result.msg);
                                                                      		//simpleForm_Query.form.reset();
                                                                      		// window.location.href='zyjhsq.jsp';
                                                                      		//simpleForm_Save.collapse();
                                                                      		simple_Grid.getStore().reload();
                                                                      	
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

                                   // 取消按钮就是简单的reset一下form的控件
                                   text : '修改',
                                   disabledClass:'x-item-disabled',
                                   handler : function() {
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                                          if (simpleForm_Save.form.isValid()) {
                                                 // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                                                 //this.disabled = true;
                                                 // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                                                 simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'修改中,请稍侯...',  
                                                                      url : 'fallbow_notice_update.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                                                                      // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                                                                      success : function(form, action) {
                                                                             // 例如返回的json结构是"{success:true,data:'成功保存！'}"，
                                                                             //Ext.Msg.alert('操作',action.result.data);
                                                                      		Ext.Msg.alert('消息',action.result.msg);
                                                                      		//simpleForm_Query.form.reset();
                                                                      		
                                                                      		simple_Grid.getStore().reload();
                                                                      		
                                                                      },
                                                                      // 定义failure函数，就是网络通讯存在问题的时候将显示错误信息。
                                                                      failure : function() {
                                                                             Ext.Msg.alert('操作', '修改失败！');
                                                                             this.disabled = false;
                                                                      }
                                                               });
                                          }
                                    
                                   }
                            }, {

                                   // 取消按钮就是简单的reset一下form的控件
                                   text : '重置',
                                   handler : function() {
									   var mlh_1=Ext.getCmp("txt_mlh").getValue();
									   var mlh_int=parseInt(mlh_1);
                                          simpleForm_Save.form.reset();
                                          //simpleForm_Query.collapse();
                                       simpleForm_Save.buttons[0].setVisible(true);
    	                               simpleForm_Save.buttons[2].setVisible(true);
    	                               simpleForm_Save.buttons[1].setVisible(false);
    	                               simpleForm_Save.buttons[3].setVisible(false);
    	                               simpleForm_Save.buttons[4].setVisible(false);
    	                               simpleForm_Save.buttons[5].setVisible(false);
							          if(mlh_int>=37101 && mlh_int<37201)
								       {
								       	mlh_int=mlh_int+2;
								       if(mlh_int>=37200)								       
								          {mlh_int=37101}
								       }
								       
								       
								       else if(mlh_int>=37201 && mlh_int<37301)
								       {
								       	mlh_int=mlh_int+2;
								       if(mlh_int>=37300)								       
								          {mlh_int=37201}
								       }
										Ext.getCmp("txt_mlh").setValue(mlh_int);
										Ext.getCmp("txt_ddy").setValue(userName);
                                   }
                            }, {
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
                                    text : '删除',
                                    disabledClass:'x-item-disabled',
                                   	handler : function() {
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                                          if (simpleForm_Save.form.isValid()) {
                                                 // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                                                 //this.disabled = true;
                                                 // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                                                 simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'删除中,请稍侯...',  
                                                                      url : 'fallbow_notice_delete.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                                                                      // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                                                                      success : function(form, action) {
                                                                             // 例如返回的json结构是"{success:true,data:'成功保存！'}"，
                                                                             //Ext.Msg.alert('操作',action.result.data);
                                                                      		Ext.Msg.alert('消息',action.result.msg);
                                                                      		simpleForm_Save.collapse();
                                                                      		simpleForm_Save.form.reset();
                                                                      		simpleForm_Save.buttons[1].setVisible(false);
    																		simpleForm_Save.buttons[3].setVisible(false);
    																		

                                                                      		simple_Grid.getStore().reload();
                                                                      		
                                                                      },
                                                                      // 定义failure函数，就是网络通讯存在问题的时候将显示错误信息。
                                                                      failure : function() {
                                                                             Ext.Msg.alert('操作', '删除失败！');
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
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
                                    text : '撤出降弓通知书',
                                    disabledClass:'x-item-disabled',
                                   	handler : function() {
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                                          if (simpleForm_Save.form.isValid()) {
                                                 // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                                                 //this.disabled = true;
                                                 // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                                                 simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'撤出中,请稍侯...',  
                                                                      url : 'fallbow_out.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                                                                      // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                                                                      success : function(form, action) {
                                                                             // 例如返回的json结构是"{success:true,data:'成功保存！'}"，
                                                                             //Ext.Msg.alert('操作',action.result.data);
                                                                      		Ext.Msg.alert('消息',action.result.msg);
                                                                      		simpleForm_Save.collapse();
                                                                      		simpleForm_Save.form.reset();
                                                                      		simpleForm_Save.buttons[1].setVisible(false);
    																		simpleForm_Save.buttons[3].setVisible(false);
    																		

                                                                      		simple_Grid.getStore().reload();
                                                                      		
                                                                      },
                                                                      // 定义failure函数，就是网络通讯存在问题的时候将显示错误信息。
                                                                      failure : function() {
                                                                             Ext.Msg.alert('操作', '删除失败！');
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
                            },{
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
                                    text : '打印通知书',
                                    disabledClass:'x-item-disabled',
                                   	handler : function() {
                                   	var txt_tzid=Ext.getCmp("txt_tzid").getValue();
                                   	//alert(txt_tzid);
                                   	ryshow(txt_tzid);
                                    //window.location.href='../../tjbb/query/jgtz.jsp?tzid='+txt_tzid;
                                       // alert("OPOPO");
                                   }
                            }, {
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
                                    text : '发送行调',
                                    disabledClass:'x-item-disabled',
                                   	handler : function() {
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                                          if (simpleForm_Save.form.isValid()) {
                                                 // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                                                 //this.disabled = true;
                                                 // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                                                 simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'发送中,请稍侯...',  
                                                                      url : 'fallbow_fs.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                                                                      // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                                                                      success : function(form, action) {
                                                                             // 例如返回的json结构是"{success:true,data:'成功保存！'}"，
                                                                             //Ext.Msg.alert('操作',action.result.data);
                                                                      		Ext.Msg.alert('消息',action.result.msg);
                                                                      		simpleForm_Save.collapse();
                                                                      		simpleForm_Save.form.reset();
                                                                      		//simpleForm_Save.buttons[1].setVisible(false);
    																		//simpleForm_Save.buttons[3].setVisible(false);
                                                                      		simple_Grid.getStore().reload();
                                                                      		
                                                                      },
                                                                      // 定义failure函数，就是网络通讯存在问题的时候将显示错误信息。
                                                                      failure : function() {
                                                                             Ext.Msg.alert('操作', '发送失败！');
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
                            }]
       });

	var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '降弓通知书—查询',
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
                                   items : [{
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// 控件的类型设置成combo
                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                                                               store : store_bdt,
                                                               valueField : "value",// 设置下拉选择框的值
                                                               displayField : "text",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               forceSelection : true,// 必须选择一个选项
                                                               blankText : '单位',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '单位',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'tzdw',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : false,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               //allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '单位',// 控件的标题是学历
                                                               name : 'tzdw',// 再次提醒，name只是下拉列表的名称
                                                               id:'dw_id',   
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                 }, {
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '通知起始日期',
                                                                             name : 'ksrq',
                                                                             //value: new Date,
                                                                             anchor : '90%',
                                                                             id:'txt_ksrq',
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
														where=where+" and tzsj >=to_date('"+Ext.getCmp("txt_ksrq").getValue()+"','yyyy-mm-dd hh24:mi')";	
													}
													 //alert(Ext.getCmp("txt_jsrq").getValue());
													if(Ext.getCmp("txt_jsrq").getValue()!="" ){
														where=where+"  and tzsj <=to_date('"+Ext.getCmp("txt_jsrq").getValue()+"','yyyy-mm-dd hh24:mi')";	
													}
													if(Ext.getCmp("dw_id").getValue()!=''  && Ext.getCmp("dw_id").getValue()!='ALL'){
														where=where+" and dwid='"+Ext.getCmp("dw_id").getValue()+"' ";
													}
													//else
													//{
													//  where=where+'and dwid like '+"'"+userdwid+"%'"; 
													//}
													
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
                                          // 如果想form按以前的老办法提交，可以在formpanel的定义中加入一下设置：
                                          // onSubmit: Ext.emptyFn,
                                          // submit: function() {
                                          // this.getEl().dom.submit();}
                                          // 第一个设置的目的是取消formpanel的默认提交函数。第二就是设置新的提交方式为旧方式提交。

                                   }
                            }, {

                                   // 取消按钮就是简单的reset一下form的控件
                                   text : '重置',
                                   handler : function() {
                                          simpleForm_Query.form.reset();
                                            
                                          //simpleForm_Save.collapse();
                                         
                                   }
                            }]
       });    

	    
	       simpleForm_Save.buttons[6].setVisible(false);
       
       //Grid上触发事件
    simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
    	// simpleForm_Query.collapse();
    	simpleForm_Save.expand();
    	
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	//alert(rowIndex);
    	//alert(record.get('jhsj')+' '+record.get('jhh')+' '+record.get('dwid'));
    	simpleForm_Save.buttons[0].setVisible(false);
    	simpleForm_Save.buttons[1].setVisible(false);
        simpleForm_Save.buttons[3].setVisible(false);
        simpleForm_Save.buttons[4].setVisible(false);
        simpleForm_Save.buttons[5].setVisible(true);
        simpleForm_Save.buttons[6].setVisible(false);
        //simpleForm_Save.buttons[2].setVisible(true);
    	simpleForm_Save.getForm().loadRecord(record);
    	var zt=record.get('zt');
    	if(zt=='0')
    	{
    	   simpleForm_Save.buttons[4].setVisible(true);
    	   simpleForm_Save.buttons[1].setVisible(true);
           simpleForm_Save.buttons[3].setVisible(true);
           simpleForm_Save.buttons[6].setVisible(true);
           //txt_sgsj
           //Ext.getCmp("txt_sgsj").enable();
           //Ext.getCmp("txt_sgmlh").enable();
    	}
    	else
    	{
    	   //Ext.getCmp("txt_sgsj").enable();
    	   //Ext.getCmp("txt_sgmlh").enable();
    	   simpleForm_Save.buttons[1].setVisible(false);
    	   simpleForm_Save.buttons[2].setVisible(false);
    	   simpleForm_Save.buttons[3].setVisible(false);
    	}//alert("adfadf");
    	simpleForm_Save.buttons[4].setVisible(false);
    	//simpleForm_Save.buttons[6].setVisible(false);
    	
    	//Ext.getCmp("txt_sgmlh").setValue((parseInt(record.get('mlh'))+1));
    	//Ext.getCmp("txt_sgsj").setValue(getTime());
    	//txt_ksrq  txt_jsrq
    	
    	
    });	
    Ext.getCmp("txt_ddy").setValue(userName);
    
    Ext.getCmp("txt_ksrq").setValue(get_nowTime());
    	Ext.getCmp("txt_jsrq").setValue(getTime());
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		items: [simpleForm_Save,simpleForm_Query,simple_Grid]
		
	});
	if(gzbh!=null)
	{//alert(gzbh);
       Ext.getCmp("txt_mlh").setValue(gzbh);
    }
    if(dljcjgsj!=null)
    {
       Ext.getCmp("txt_tzsj").setValue(dljcjgsj);
    }
    simpleForm_Save.collapse();
    Ext.getCmp("txt_mlh").setValue(txt_mlh);
    simpleForm_Save.buttons[1].setVisible(false);
    simpleForm_Save.buttons[3].setVisible(false);
    simpleForm_Save.buttons[4].setVisible(false);
    simpleForm_Save.buttons[5].setVisible(false);
    //Ext.getCmp("dw_id").setValue(userdwid);
      this.ryshow=function(value){
		//alert("TZSID"+value);
    	win1 = new Ext.Window({
        	width:document.body.clientWidth-20,
        	height:document.body.clientHeight-10,
        	layout:'column',
       		title: '降弓通知书',
        	closeAction:'hide',
        	plain: true,
        	autoScroll:false,
        	html:'<iframe style="width:100%;height:100%" src="../../tjbb/query/jgtz.jsp?tzid='+value+'"></iframe>'
    	});
    	win1.show(this);
  	};

});


function getTime()
{
      var myyear,mymonth,myweek,myday,mytime,mymin,myhour,mysec;
	var mydate=new Date();
	myyear=mydate.getFullYear();
	mymonth=mydate.getMonth()+1;
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
	mytime=myyear+"-"+mymonth+"-"+myday+" "+myhour+":"+mymin;
	return mytime;
}
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
Ext.onReady(function() {
	
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    this.ryshow=function(){
		
    	win1 = new Ext.Window({
        	width:document.body.clientWidth-20,
        	height:document.body.clientHeight-10,
        	layout:'column',
       		title: '十八点报表',
        	closeAction:'hide',
        	plain: true,   
        	autoScroll:false,
        	html:'<iframe style="width:100%;height:100%" src="../../tjbb/query/sbdbb.jsp"></iframe>'
    	});
    	win1.show(this);  
  	};
    var userdwid=document.getElementById("userDwid").value;
    var userName=document.getElementById("userName").value;
    var qd=document.getElementById("qd").value;
    //var dich='dwid = '+"'"+userdwid+"' and jbsj <=sysdate and jbsj>=to_date('"+get_nowTime()+"','yyyy-mm-dd hh24:mi')";//jbsj
   // var dich1='dwid = '+"'"+userdwid+"'";
   var dich="";
   if(qd=='ddz')
   {
     dich="jlsj>=to_date('"+get_Time()+"','yyyy-mm-dd hh24:mi') and jlsj<=to_date('"+get_Time()+"','yyyy-mm-dd hh24:mi')+1";
   }
   else
   {
     dich="dddm='"+qd+"' and jlsj>=to_date('"+get_Time()+"','yyyy-mm-dd hh24:mi') and jlsj<=to_date('"+get_Time()+"','yyyy-mm-dd hh24:mi')+1";
   }
    
     var sql="select gqmc,gqmc from J_GYJC_GQZD where (jglbdm='1')";//
    var planRecord_bds = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_bds = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_bds)
    });
   //store_bds.load(); 
   
       var sql_fzr="select distinct(fzr),fzr from z_yxgl_sbdbd t where fzr is not null";//
    var planRecord_fzr = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_fzr = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_fzr}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_fzr)
    });
   store_fzr.load(); 
    //var txt_jb="";
    //定义Grid表头
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
        //new Ext.grid.RowNumberer(),
        
        {header:'序号',dataIndex:'xh',width:50,fixed:true},
        {header:'单位',dataIndex:'dwid',width:120,fixed:true,sortable:true},
        {header:'负责人',dataIndex:'fzr',width:80,fixed:true,sortable:true},
        {header:'值班人数',dataIndex:'zbrs',width:60,fixed:true,sortable:true},
        {header:'报告时间',dataIndex:'bgsj',width:120,fixed:true,sortable:true},
        {header:'车辆情况',dataIndex:'clqk',width:100,sortable:true},
        {header:'备注',dataIndex:'bz',width:100,sortable:true}
    ]);
   
    
    var planRecord = Ext.data.Record.create([
    	{name:'xh',type:'int'},
    	{name:'bdid',type:'int'},
    	{name:'dwid',type:'string'},
    	//{name:'dwmc',type:'string'},
    	{name:'fzr',type:'string'},
    	{name:'zbrs',type:'string'},
    	{name:'clqk',type:'string'},
    	{name:'bgsj',type:'string'},
    	{name:'bz',type:'string'},
    	{name:'dddm',type:'string'},
    	{name:'jlsj',type:'string'}
    	]);
    	
            		
    //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'sbdbdJson.jsp'}),
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
   	//Grid上触发事件
   	//grid.addListener('cellClick',cellClick);
    //显示在html中id为container的层中
    //grid.render();//渲染表格
    
    
    Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
	// form start
    simpleForm_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '十八点报到',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 800,
              collapsible:true,
              titleCollapse:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              labelWidth : 79,
              
              
              items : [{
                                   layout : 'column',// columnlayout
                                   border : false,// 没有边框
                                   labelSeparator : '：',// 标题的分隔符号我们用中文冒号代替英文的冒号（labelSeparator:'：'）。
                                   // coulmnLayout里的控件将定义在items里
                                   items : [{xtype:'hidden',name:'bdid',id:'txt_jbid'}
                                   				,{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// 控件的类型设置成combo
                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                                                               store : store_bds,
                                                               valueField : "value",// 设置下拉选择框的值
                                                               displayField : "text",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               //forceSelection : true,// 必须选择一个选项
                                                               blankText : '请选择单位',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '请选择单位',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'dwid',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : true,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '变电所',// 控件的标题是学历
                                                               name : 'dwid',// 再次提醒，name只是下拉列表的名称
                                                               id:'txt_dwid',
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                 }, {
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// 控件的类型设置成combo
                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                                                               store : store_fzr,
                                                               valueField : "value",// 设置下拉选择框的值
                                                               displayField : "text",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               //forceSelection : true,// 必须选择一个选项
                                                               blankText : '请选择负责人',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '请选择负责人',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'fzr',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : true,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '负责人',// 控件的标题是学历
                                                               name : 'fzr',// 再次提醒，name只是下拉列表的名称
                                                               id:'txt_fzr',
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                 },{
                                                 		columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '值班人数',
                                                                             //allowBlank:false,
                                                                             blankText : '填写值班人数',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               				 //emptyText : '填写值班人数',// 在没有选择值时显示为选择学历
                                                               				 name : 'zbrs',
                                                               				 //id:'txt_jlr',
                                                                             anchor : '95%'
                                                                      }]
                                                 }, {
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '报告时间',
                                                                             name : 'bgsj',
                                                                             id:'time',
                                                                             allowBlank : false,
                                                                             anchor : '90%',
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 }
                                                 
                                                 ]

                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [{
                                                        columnWidth : .99,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '车辆情况',
                                                                             name : 'clqk',
                                                                             anchor : '100%',
                                                                             value:'良好',
                                                                             id:'txt_clqk'
                                                                             
                                                                             //format:'Y-m-d'
                                                                      }]
                                                 }]
                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [{
                                                        columnWidth : .99,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textarea',// 控件的类型为datefield
                                                                             fieldLabel : '备注',
                                                                             name : 'bz',
                                                                             anchor : '100%',
                                                                             height:50
                                                                             //format:'Y-m-d'
                                                                      }]
                                                 }]
                            }
                            ],
              //为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
              buttons : [{
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
                                   text : '添加',
                                   id:'btn_jb',
                                   handler : function() {
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                                          if (simpleForm_Save.form.isValid()) {
                                                 // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                                                 //this.disabled = true;
                                                 // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                                                 simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'保存中,请稍侯...',  
                                                                      url : 'add.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                                                                      // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                                                                      success : function(form, action) {
                                                                            
                                                                      		Ext.Msg.alert('消息',action.result.msg);
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
                            
                            },{
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
                                   text : '修改',
                                   //id:'btn_jb',
                                   handler : function() {
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                                          if (simpleForm_Save.form.isValid()) {
                                                 // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                                                 //this.disabled = true;
                                                 // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                                                 simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'修改中,请稍侯...',  
                                                                      url : 'update.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                                                                      // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                                                                      success : function(form, action) {
                                                                            
                                                                      		Ext.Msg.alert('消息',action.result.msg);
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
                            
                            },{
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
                                   text : '删除',
                                   //id:'btn_jb',
                                   handler : function() {
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                                          if (simpleForm_Save.form.isValid()) {
                                                 // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                                                 //this.disabled = true;
                                                 // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                                                 simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'删除中,请稍侯...',  
                                                                      url : 'del.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                                                                      // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                                                                      success : function(form, action) {
                                                                            
                                                                      		Ext.Msg.alert('消息',action.result.msg);
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
                                   text : '查看报表',
                                   handler : function() {
                                  
                                        ryshow();
                                       //  window.location.href='../../tjbb/query/jjb.jsp?jbid='+Ext.getCmp("txt_jbid").getValue();
                                         
                                   }
                            }]
       });

	
	    
	var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '十八点报到—查询',
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
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '报告时间',
                                                                             name : 'jsrq',
                                                                             id:'txt_jsrq',
                                                                             //value: new Date,
                                                                             anchor : '90%',
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd'})}}
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                             
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
                                           var where=" and 1=1 ";
                                          //alert(Ext.getCmp("txt_ksrq").getValue());
                                              //  if(Ext.getCmp("txt_ksrq").getValue()!="" ){
													//	where=where+" and jlsj >=to_date('"+Ext.getCmp("txt_ksrq").getValue()+"','yyyy-mm-dd hh24:mi')";	
													//}
													 //alert(Ext.getCmp("txt_jsrq").getValue());
													if(Ext.getCmp("txt_jsrq").getValue()!="" ){
														where=where+"  and jlsj >=to_date('"+Ext.getCmp("txt_jsrq").getValue()+"','yyyy-mm-dd hh24:mi') and jlsj <=to_date('"+Ext.getCmp("txt_jsrq").getValue()+"','yyyy-mm-dd hh24:mi')+1";	
													}
													  if(qd=='ddz')
													   {
													     dich=" 1=1 ";
													   }
													   else
													   {
													     dich="dddm='"+qd+"'";
													   }
													store.baseParams.whereclause=dich;
													//alert(where);
													store.baseParams.whereclause =store.baseParams.whereclause+ where; 
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
        //Grid上触发事件
    simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
    		// simpleForm_Query.collapse();
    	 	simpleForm_Save.expand();
    		var record=simple_Grid.getStore().getAt(rowIndex);
    		simpleForm_Save.getForm().loadRecord(record);
    		 simpleForm_Save.buttons[0].setVisible(false);
    		 simpleForm_Save.buttons[2].setVisible(false);
    		// simpleForm_Save.buttons[1].setVisible(true);
    		simpleForm_Save.buttons[3].setVisible(true);
    });	
        simpleForm_Save.buttons[0].setVisible(false);
    	simpleForm_Save.buttons[3].setVisible(true);
    	simpleForm_Save.buttons[2].setVisible(false);
    //从session取值赋值给form字段;

   // Ext.getCmp("btn_jb").disable();
   // simpleForm_Save.buttons[1].setVisible(false);
    var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		items: [simpleForm_Save,simpleForm_Query,simple_Grid]
		
	});
	//simpleForm_Save.collapse();
	//alert("asdfasdf");
	//alert("asdfasdf");
var myyear,mymonth,myweek,myday,mytime,mymin,myhour,mysec;
var mydate=new Date();
myyear=mydate.getFullYear();
mymonth=mydate.getMonth()+1;
myday=mydate.getDate();
myhour=mydate.getHours();
mymin=mydate.getMinutes();
mysec=mydate.getSeconds();

mytime=myyear+"-"+mymonth+"-"+myday;//+" "+myhour+":"+mymin;

//Ext.getCmp("txt_ksrq").setValue(get_nowTime());//txt_jsrq
Ext.getCmp("txt_jsrq").setValue(mytime);

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
function get_Time()
{
          //***得到当前时间**//
    var myyear,mymonth,myweek,myday,mytime,mymin,myhour,mysec;
	var mydate=new Date();
	myyear=mydate.getFullYear();
	mymonth=mydate.getMonth()+1;
	//if(mymonth<10)
	//mymoth="0"+mymoth;
	myday=mydate.getDate();
	//if(myday<10)
	//myday="01";
	myhour=mydate.getHours();
	//if(myhour<10)
	//myhour="00";
	mymin=mydate.getMinutes();
	//if(mymin<10)
	//mymin="00";
	mysec=mydate.getSeconds();
	return myyear+"-"+mymonth+"-"+myday;
}
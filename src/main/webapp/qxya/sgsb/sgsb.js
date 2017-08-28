Ext.onReady(function() {

	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var username=document.getElementById("txt_username").value;
    //System.out.println("用户名？:"+username);
    //alert(username);
    
    
 	 var renderDel =function(value)
 	 {
 	     return '<a  href="sgsb_del.jsp?gzid='+value+'">删除</a>';
 	 };
  
   /*--故障类别---*/
	
	 var sql="select id,name from j_gdgy_wxxm";

 	var planRecord_wxxm = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
 	var gzlb_store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_wxxm)
    });
   gzlb_store.load(); 
     
     
 var sql="select dwdm,dwmc from v_j_gyjc_yhdw where jb=6";

 	var planRecord_sqdw = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
 	var zrbz_store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_sqdw)
    });
   zrbz_store.load();      
     
 
  var zzcdbz_store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_sqdw)
    });
   zzcdbz_store.load();
   
   
     var zzddbz_store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_sqdw)
    });
   zzddbz_store.load();
 

 var sql="select distinct yhdm, gwmc from j_gyjc_yh where dwjb=3";

 	var planRecord_sqdw = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
 	var zw_store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_sqdw)
    });
   zw_store.load();
     

     var simpleForm_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '事故速报添加',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 800,
              collapsible:true,
              titleCollapse:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              labelWidth : 70,
              
              
              items : [{ layout : 'column',// columnlayout
                                   border : false,// 没有边框
                                   labelSeparator : '：',// 标题的分隔符号我们用中文冒号代替英文的冒号（labelSeparator:'：'）。
                                   // coulmnLayout里的控件将定义在items里
                                   items : [{
                                           		columnWidth : .50,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                                                layout : 'form',// formlayout用来放置控件
                                                border : false,// 没有边框
                                                items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '故障地点',
                                                                             name : 'gzdd',
                                                                             id:'txt_gzdd',
                                                                             //id:'time',
                                                                             anchor : '90%'
                                                                           
                                                                      }
                                                        
                                                 		]
                                                 },{
                                                        columnWidth : .23,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '故障时间',
                                                                             name : 'gzfssj',
                                                                             id:'txt_gzfssj',
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             //allowBlank : false,
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 },
                                                 {
                                           		columnWidth : .25,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                                                layout : 'form',// formlayout用来放置控件
                                                border : false,// 没有边框
                                                items : [{
                                                               xtype : 'combo',// 控件的类型设置成combo
                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                                                               store :gzlb_store,
                                                               valueField : "value",// 设置下拉选择框的值
                                                               displayField : "text",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               //forceSelection : true,// 必须选择一个选项
                                                               blankText : '故障类别',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '故障类别',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'gzlb',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : true,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               //allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '故障类别',// 控件的标题是学历
                                                               name : 'gzlb',// 再次提醒，name只是下拉列表的名称
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                 		},{
                                           		columnWidth : .50,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                                                layout : 'form',// formlayout用来放置控件
                                                border : false,// 没有边框
                                                items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '停电区段',
                                                                             name : 'tdqd',
                                                                             id:'txt_tdqd',
                                                                             //id:'time',
                                                                             anchor : '90%'
                                                                           
                                                                      }
                                                        
                                                 		]
                                                 },{
                                           		columnWidth : .50,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                                                layout : 'form',// formlayout用来放置控件
                                                border : false,// 没有边框
                                                items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '影响范围',
                                                                             name : 'yxfw',
                                                                             id:'txt_yxfw',
                                                                             //id:'time',
                                                                             anchor : '90%'
                                                                           
                                                                      }
                                                        
                                                 		]
                                                 },{
                                                        columnWidth : .24,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// 控件的类型设置成combo
                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                                                               store :zrbz_store,
                                                               valueField : "value",// 设置下拉选择框的值
                                                               displayField : "text",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               //forceSelection : true,// 必须选择一个选项
                                                               blankText : '请选责任班组',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '请选责任班组',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'zrbz',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : true,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                              // allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '责任班组',// 控件的标题是学历
                                                               name : 'text_zrbz',// 再次提醒，name只是下拉列表的名称
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                 },{
                                                        columnWidth : .23,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '通知公司时间',
                                                                             name : 'gstzsj',
                                                                             id:'txt_gstzsj',
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             //allowBlank : false,
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 }, {
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '通知运输段时间',
                                                                             name : 'ysdtzsj',
                                                                             id:'txt_ysdtzsj',
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             //allowBlank : false,
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 },{
                                                        columnWidth : .26,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '通知班组时间',
                                                                             name : 'bztzsj',
                                                                             id:'txt_bztzsj',
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             //allowBlank : false,
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 }]

                            },{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [{
                                           		columnWidth : .24,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                                                layout : 'form',// formlayout用来放置控件
                                                border : false,// 没有边框
                                                items : [{
                                                			xtype : 'combo',// 控件的类型设置成combo
                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                                                               store :zzcdbz_store,
                                                               //value:'全部',
                                                               valueField : "text",// 设置下拉选择框的值
                                                               displayField : "text",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               //forceSelection : true,// 必须选择一个选项
                                                               //blankText : '请选择作业单位',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '最早出动班组',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'zzcdbz',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : true,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               //allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '最早出动班组',// 控件的标题是学历
                                                               name : 'zzcdbz',// 再次提醒，name只是下拉列表的名称
                                                               //id:'bds_id',
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                 		},
                                                 {
                                                        columnWidth : .23,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '时间',
                                                                             name : 'sj1',
                                                                             id:'txt_sj1',
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             //allowBlank : false,
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 },
                                                 		{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '人数',
                                                                             name : 'rs1',
                                                                             //allowBlank : false,
                                                                             //readOnly:true,
                                                                             //id:'txt_ddy',
                                                                             //disabled:true,
                                                                             anchor : '90%'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 },{
                                           		columnWidth : .26,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                                                layout : 'form',// formlayout用来放置控件
                                                border : false,// 没有边框
                                                items : [{
                                                			xtype : 'combo',// 控件的类型设置成combo
                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                                                               store :zzddbz_store,
                                                               //value:'全部',
                                                               valueField : "text",// 设置下拉选择框的值
                                                               displayField : "text",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               //forceSelection : true,// 必须选择一个选项
                                                               //blankText : '请选择作业单位',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '最早到达班组',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'zzddbz',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : true,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               //allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '最早到达班组',// 控件的标题是学历
                                                               name : 'zzddbz',// 再次提醒，name只是下拉列表的名称
                                                               //id:'bds_id',
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                 		}
                                              ]
                            },{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [
                                                 {
                                                        columnWidth : .24,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '时间',
                                                                             name : 'sj2',
                                                                             id:'txt_sj2',
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             //allowBlank : false,
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 },
                                                 		{
                                                        columnWidth : .23,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '人数',
                                                                             name : 'rs2',
                                                                             //allowBlank : false,
                                                                             //readOnly:true,
                                                                             id:'txt_rs2',
                                                                             //disabled:true,
                                                                             anchor : '90%'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 },{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '抢修领导人',
                                                                             name : 'qxldr',
                                                                             //allowBlank : false,
                                                                             //readOnly:true,
                                                                             id:'txt_qxldr',
                                                                             //disabled:true,
                                                                             anchor : '90%'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 },{
                                           		columnWidth : .26,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                                                layout : 'form',// formlayout用来放置控件
                                                border : false,// 没有边框
                                                items : [{
                                                			xtype : 'combo',// 控件的类型设置成combo
                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                                                               store :zw_store,
                                                               //value:'全部',
                                                               valueField : "text",// 设置下拉选择框的值
                                                               displayField : "text",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               //forceSelection : true,// 必须选择一个选项
                                                               //blankText : '请选择作业单位',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '职务',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'zw',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : true,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               //allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '职务',// 控件的标题是学历
                                                               name : 'zw',// 再次提醒，name只是下拉列表的名称
                                                               id:'bds_zw',
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                 		}
                                              ]
                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [{
                                                        columnWidth : .24,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '总人数',
                                                                             name : 'zrs',
                                                                             //allowBlank : false,
                                                                             //readOnly:true,
                                                                             id:'txt_zrs',
                                                                             //disabled:true,
                                                                             anchor : '90%'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 },{
                                                        columnWidth : .23,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '停电开始时间',
                                                                             name : 'tdkssj',
                                                                             id:'txt_tdkssj',
                                                                             allowBlank : false,
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 }, {
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '停电结束时间',
                                                                             name : 'tdjssj',
                                                                             id:'txt_tdjssj',
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             allowBlank : false,
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 }, {
                                                        columnWidth : .26,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '停时（分）',
                                                                             name : 'ztdsj',
                                                                             //allowBlank : false,
                                                                             id:'txt_ztdsj',
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             listeners:{"focus":function(){
	                                                                             var tdkssj=Ext.getCmp("txt_tdkssj").getValue();
	                                                                             var tdjssj=Ext.getCmp("txt_tdjssj").getValue();
	                                                                             var bg = new Date(tdkssj.replace("-","/")).getTime();
																				 var fh = new Date(tdjssj.replace("-","/")).getTime();
																				 if(tdkssj!=''&& tdjssj!='')
																				 {
																				    Ext.getCmp("txt_ztdsj").setValue((fh-bg)/60000);
																				 }
																				 
                                                                             }}
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 }
                                              ]
                            } ,{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [ {
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '抢修开始时间',
                                                                             name : 'qxkssj',
                                                                             id:'txt_qxkssj',
                                                                             allowBlank : false,
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 }, {
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '抢修结束时间',
                                                                             name : 'qxjssj',
                                                                             id:'txt_qxjssj',
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             allowBlank : false,
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 }, {
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '抢修时（分）',
                                                                             name : 'zqxsj',
                                                                             //allowBlank : false,
                                                                             id:'txt_zqxsj',
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             listeners:{"focus":function(){
	                                                                             var qxkssj=Ext.getCmp("txt_qxkssj").getValue();
	                                                                             var qxjssj=Ext.getCmp("txt_qxjssj").getValue();
	                                                                             var bg = new Date(qxkssj.replace("-","/")).getTime();
																				 var fh = new Date(qxjssj.replace("-","/")).getTime();
																				 if(qxkssj!=''&& qxjssj!='')
																				 {
																				    Ext.getCmp("txt_zqxsj").setValue((fh-bg)/60000);
																				 }
																				 
                                                                             }}
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 }]
                            },{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [{
                                           		columnWidth : .50,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                                                layout : 'form',// formlayout用来放置控件
                                                border : false,// 没有边框
                                                items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '设备损坏及人员伤亡情况',
                                                                             name : 'sbqk',
                                                                             id:'txt_sbqk',
                                                                             //id:'time',
                                                                             anchor : '90%'
                                                                           
                                                                      }
                                                        
                                                 		]
                                                 },{
                                           		columnWidth : .50,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                                                layout : 'form',// formlayout用来放置控件
                                                border : false,// 没有边框
                                                items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '影响列车',
                                                                             name : 'yxlc',
                                                                             id:'txt_yxlc',
                                                                             //id:'time',
                                                                             anchor : '90%'
                                                                           
                                                                      }
                                                        
                                                 		]
                                                 }]
                            } ,{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [{
                                           		columnWidth : .50,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                                                layout : 'form',// formlayout用来放置控件
                                                border : false,// 没有边框
                                                items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '处理结果',
                                                                             name : 'cljg',
                                                                             id:'txt_cljg',
                                                                             //id:'time',
                                                                             anchor : '90%'
                                                                           
                                                                      }
                                                        
                                                 		]
                                                 },{
                                           		columnWidth : .50,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                                                layout : 'form',// formlayout用来放置控件
                                                border : false,// 没有边框
                                                items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '原因',
                                                                             name : 'yy',
                                                                             id:'txt_yy',
                                                                             //id:'time',
                                                                             anchor : '90%'
                                                                           
                                                                      }
                                                        
                                                 		]
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
                                                                             fieldLabel : '检修情况记录内容',
                                                                             name : 'jxqkjl',
                                                                             id:'txt_jxqkjl',
                                                                             anchor : '90%',
                                                                             height:'50'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 },{  columnWidth : .20,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '值班调度员',
                                                                             name : 'zbddy',
                                                                             id:'txt_zbddy',
                                                                             //readOnly:true,
                                                                             //disabled:true,
                                                                             anchor : '90%'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 },{
                                                        columnWidth : .20,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '填报时间',
                                                                             name : 'tbsj',
                                                                             id:'txt_tbsj',
                                                                             allowBlank : false,
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 },{
                                    columnWidth : .3,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                                         xtype : 'textfield',// 控件的类型为datefield
                                                         //fieldLabel : '工作ID',
                                                         name : 'gzid',
                                                         id:'gzid',
                                                         hidden:true,
                                                         hideLable:true,
                                                       //  format:'Y-m-d'
                                                         allowBlank : true// 该选项值不允许为空
                                                  }]
                             }]
                            }
                           
                            ],
              // 为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
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
                                                                      url : 'sgsb_add.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                                                                      // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                                                                      success : function(form, action) {
                                                                             // 例如返回的json结构是"{success:true,data:'成功保存！'}"，
                                                                             //Ext.Msg.alert('操作',action.result.data);
                                                                             simple_Grid.getStore().reload();
                                                                      		Ext.Msg.alert('消息',action.result.msg);
                                                                      		//simpleForm_Query.form.reset();
                                                                      		// window.location.href='zyjhsq.jsp';
                                                                      		//simpleForm_Save.collapse();
                                                                      		
                                                                      	
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
                                   text : '重置',
                                   handler : function() {
                                            simpleForm_Save.form.reset();
                                             Ext.getCmp("txt_zbddy").setValue(username);
                                            simpleForm_Save.buttons[0].setVisible(true);
									        simpleForm_Save.buttons[1].setVisible(true);
									        simpleForm_Save.buttons[2].setVisible(false);
									        simpleForm_Save.buttons[3].setVisible(false);
                                   }
                            }, {
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
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
                                                                      url : 'sgsb_update.jsp?gzid='+my_cjdm,
                                                                      method : 'post',
                                                                      params : '',
                                                                      // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                                                                      // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                                                                      success : function(form, action) {
                                                                             // 例如返回的json结构是"{success:true,data:'成功保存！'}"，
                                                                            simpleForm_Save.buttons[0].setVisible(true);
                                               		                        simple_Grid.getStore().reload();
                                               		                        Ext.Msg.alert('消息',action.result.msg);
                                               		                        Ext.getCmp("gzid").enable(); 
                                                                      		
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
                            }]
       });
       

 	       
       
 //var expander = new Ext.ux.grid.RowExpander({
  //      tpl : new Ext.Template(
   //         '<p><b>恢复时间:</b> {hfsj}  <b>审核人:</b> {shr}  <b>复合时间:</b> {fhsj} </p> <p><b>实际故障地点:</b> {sjgzdd} </p> <p><b>故障描述:</b> {gzms} </p>  <p><b>跳闸原因:</b> {tzyy} </p> <p><b>备注:</b> {bz} </p> ')
           
  //  });
	//定义Grid表头
  
    var columns = new Ext.grid.ColumnModel([
        
        //new Ext.grid.RowNumberer(),
    //    expander,		
        {header:'故障ID',dataIndex:'gzid',width:50,sortable:true,fixed:true},
        {header:'故障时间',dataIndex:'gzfssj',width:110,sortable:true,fixed:true},
        {header:'故障类别',dataIndex:'gzlbname',width:60,sortable:true,fixed:true},
        {header:'故障地点',dataIndex:'gzdd',width:250,sortable:true,fixed:true},
        {header:'责任班组',dataIndex:'zrbz',width:60,sortable:true,fixed:true},
       // {header:'停电区段',dataIndex:'tdqd',width:250,sortable:true,fixed:true},
        {header:'抢修领导人',dataIndex:'qxldr',width:60,sortable:true,fixed:true},
        {header:'停时(分)',dataIndex:'ztdsj',width:60,sortable:true,fixed:true},
        {header:'抢修时(分)',dataIndex:'zqxsj',width:55,sortable:true,fixed:true},
        
        {header:'处理结果',dataIndex:'cljg',width:150,sortable:true,fixed:true},
        {header:'原因',dataIndex:'yy',width:150,sortable:true,fixed:true},
        {header:'值班调度员',dataIndex:'zbddy',width:80,sortable:true,fixed:true},
        {header:'删除',dataIndex:'gzid',width:90,renderer:renderDel,fixed:true}
        
      
    ]);
   
      
    var planRecord = Ext.data.Record.create([
    	{name:'gzid',type:'int'},
    	{name:'gzfssj',type:'string'},
    	{name:'gzdd',type:'string'},
    	{name:'gzlb',type:'string'},
    	{name:'gzlbname',type:'string'}, 
    	{name:'tdqd',type:'string'},
    	{name:'yxfw',type:'string'},
    	{name:'zrbz',type:'string'},
    	{name:'gstzsj',type:'string'},
    	{name:'ysdtzsj',type:'string'},	
    	{name:'bztzsj',type:'string'},
    	{name:'yxlc',type:'string'},
    	{name:'zzcdbz',type:'string'},
    	{name:'sj1',type:'string'},
    	{name:'rs1',type:'string'},
    	{name:'zzddbz',type:'string'},
    	{name:'sj2',type:'string'},
    	{name:'rs2',type:'string'},
        {name:'qxldr',type:'string'},
        {name:'zw',type:'string'},
    	{name:'zrs',type:'string'},
    	{name:'tdkssj',type:'string'},
    	{name:'tdjssj',type:'string'},
    	{name:'ztdsj',type:'string'},  
    	{name:'qxkssj',type:'string'},
    	{name:'qxjssj',type:'string'},
    	{name:'zqxsj',type:'string'},
    	{name:'sbqk',type:'string'},
    	{name:'cljg',type:'string'},	
    	{name:'yy',type:'string'},
    	{name:'jxqkjl',type:'string'},
    	{name:'zbddy',type:'string'},
    	{name:'tbsj',type:'string'}

    	]);

    //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'sgsb_query_json.jsp'}),   
        baseParams:{whereclause:'1=1'},//点击翻页的时候，这个值不会消失，作为基本参数，只有点击查询按钮时才会改变     
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


	  
    //显示在html中id为container的层中
    //grid.render();//渲染表格
    Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
	 // form start
	var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '事故速报查询',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 600,
               titleCollapse:true,
              collapsible:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              labelWidth : 56, 
              items : [{ layout : 'column',// columnlayout
                                   border : false,// 没有边框
                                   labelSeparator : '：',// 标题的分隔符号我们用中文冒号代替英文的冒号（labelSeparator:'：'）。
                                   // coulmnLayout里的控件将定义在items里
                                   items : [{
                                           		columnWidth : .25,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                                                layout : 'form',// formlayout用来放置控件
                                                border : false,// 没有边框
                                                items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '故障地点',
                                                                             name : 'gzdd',
                                                                             id:'txtgzdd',
                                                                             //id:'time',
                                                                             anchor : '90%'
                                                                           
                                                                      }
                                                        
                                                 		]
                                                 }, {
                                           		columnWidth : .25,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                                                layout : 'form',// formlayout用来放置控件
                                                border : false,// 没有边框
                                                items : [{
                                                               xtype : 'combo',// 控件的类型设置成combo
                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                                                               store :gzlb_store,
                                                               valueField : "value",// 设置下拉选择框的值
                                                               displayField : "text",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               //forceSelection : true,// 必须选择一个选项
                                                               blankText : '故障类别',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '故障类别',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'gzlb',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : true,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               //allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '故障类别',// 控件的标题是学历
                                                               name : 'gzlb',// 再次提醒，name只是下拉列表的名称
                                                               id:'textgzlb',
                                                               anchor : '90%'// input的宽度是90%
                                                        }]
                                                 	},{
                                    columnWidth : .23,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                             xtype : 'textfield',// 控件的类型为datefield
                                             fieldLabel : '故障开始时间',
                                             name : 'gzfssj',
                                             id:'gzfssj1',
                                             //value: new Date,
                                             anchor : '90%',
                                             listeners: {"focus": function(){
                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                      }]
                             },{
                                    columnWidth : .23,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                             xtype : 'textfield',// 控件的类型为datefield
                                             fieldLabel : '结束时间',
                                             name : 'gzfssj',
                                             id:'gzfssj2',
                                             //value: new Date,
                                             anchor : '90%',
                                             listeners: {"focus": function(){
                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                      }]
                             }]

                            }],
              // 为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
              buttons : [{
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
                                    text : '查询',
                                   handler : function() {
                                          if (!simpleForm_Query.form.isValid()) {return };
                                   		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                                          if (simpleForm_Query.form.isValid()) {
				                              var where=" 1=1 "; 
				                              //alert(Ext.getCmp("txtgzdd").getValue());       
				                                if(Ext.getCmp("txtgzdd").getValue()!=""&&Ext.getCmp("txtgzdd").getValue()!="ALL" ){
													where=where+" and gzdd like '%"+Ext.getCmp("txtgzdd").getValue()+"%'";
												}
												if(Ext.getCmp("textgzlb").getValue()!=""&&Ext.getCmp("textgzlb").getValue()!="ALL" ){
													where=where+" and gzlb like '%"+Ext.getCmp("textgzlb").getValue()+"%'";
												}
											    if(Ext.getCmp("gzfssj1").getValue()!=""  ){
											        where=where+" and gzfssj>=to_date('"+Ext.getCmp("gzfssj1").getValue()+"','yyyy-mm-dd hh24:mi')";
										        }
										        if(Ext.getCmp("gzfssj2").getValue()!=""  ){
											        where=where+" and gzfssj<=to_date('"+Ext.getCmp("gzfssj2").getValue()+"','yyyy-mm-dd hh24:mi')";
										        }
												
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
                                   }
                            },
                             {
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
            text : '打印记录',
            handler : function() {
            						var where=" 1=1 ";
                                  
                                    if(Ext.getCmp("txt_dw").getValue()!=''  && Ext.getCmp("txt_dw").getValue()!='ALL'){
										if(Ext.getCmp("txt_dw").getValue()=='003')
										{
										  where=where+" and (gq.ddtdm='00303' or gq.ddtdm='00304')";
										
										}
										else if(Ext.getCmp("txt_dw").getValue()=='002')
										{
										   where=where+" and (gq.ddtdm='00301' or gq.ddtdm='00302')";
										}
										else
										{
										where=where+" and gq.ddtdm='"+Ext.getCmp("txt_dw").getValue()+"' ";
										ddtdm_cell=Ext.getCmp("txt_dw").getValue();
										}
										
									}
									
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
									
									if(Ext.getCmp("xlm_id").getValue()!='' && Ext.getCmp("xlm_id").getValue()!='ALL'){
										where=where+" and gz.xb='"+Ext.getCmp("xlm_id").getValue()+"' ";
										cell_where=cell_where+" and gz.xb='"+Ext.getCmp("xlm_id").getValue()+"' ";
									}
									
									if(Ext.getCmp("ggdmc_id").getValue()!='' && Ext.getCmp("ggdmc_id").getValue()!='all'){
										where=where+" and gz.dm like '"+Ext.getCmp("ggdmc_id").getValue()+"%' ";
										cell_where=cell_where+" and gz.dm like '"+Ext.getCmp("ggdmc_id").getValue()+"%' ";
									}
									if(Ext.getCmp("txt_gzmscx").getValue()!=""){
										where=where+" and gz.gzms like '%25"+Ext.getCmp("txt_gzmscx").getValue()+"%25' ";
										cell_where=cell_where+" and gz.gzms like '%25"+Ext.getCmp("txt_gzmscx").getValue()+"%25' ";
									}
									
									if(Ext.getCmp("lbcx_id").getValue()!=''  && Ext.getCmp("lbcx_id").getValue()!='ALL'){
										where=where+" and gz.lb='"+Ext.getCmp("lbcx_id").getValue()+"' ";
										cell_where=cell_where+" and gz.lb='"+Ext.getCmp("lbcx_id").getValue()+"' ";	
									}
								        ryshow(" and "+where);
                                   }
                            }]
       });
       
       
       simpleForm_Save.collapse();
          	//Grid上触发事件
    var my_cjdm="";
       	simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
    	// simpleForm_Query.collapse();
    	simpleForm_Save.expand();
    	simpleForm_Save.buttons[0].setVisible(false);
    	simpleForm_Save.buttons[1].setVisible(true);
    	//simpleForm_Save.buttons[3].setVisible(true);
    	//simpleForm_Save.buttons[4].setVisible(true);
    	var record=simple_Grid.getStore().getAt(rowIndex);
    
    	
    	simpleForm_Save.getForm().loadRecord(record);
    	my_cjdm=Ext.getCmp("gzid").getValue();
    
    	Ext.getCmp("gzid").disable();
    });
   

Ext.getCmp("txt_zbddy").setValue(username);    
        	//双击事件
var onRowDoubleClick = function(grid, rowIndex, e){ 
        simpleForm_Save.expand();
    	simpleForm_Save.buttons[0].setVisible(true);
        //simpleForm_Save.buttons[1].setVisible(true);
        simpleForm_Save.buttons[1].setVisible(true);
        simpleForm_Save.buttons[2].setVisible(true);
        simpleForm_Save.buttons[3].setVisible(true);
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	simpleForm_Save.getForm().loadRecord(record);
    	
    	var ttyhmcs=ttyhmc.split("!#");
    	for(var i=0;i<ttyhmcs.length;i++)
    	{
	    	if(record.get('zzddy')==ttyhmcs[i])
	    	{
		        simpleForm_Save.buttons[0].setVisible(true);
		        //simpleForm_Save.buttons[1].setVisible(true);
		        simpleForm_Save.buttons[1].setVisible(true);
		        simpleForm_Save.buttons[2].setVisible(true);
		        simpleForm_Save.buttons[3].setVisible(true);
		        break;
	    	}
	    	else
	    	{
	    		simpleForm_Save.buttons[0].setVisible(false);
		        //simpleForm_Save.buttons[1].setVisible(true);
		        simpleForm_Save.buttons[1].setVisible(false);
		        simpleForm_Save.buttons[2].setVisible(false);
		        simpleForm_Save.buttons[3].setVisible(false);
	    	}
	    }
    	
    	if(username=='关文生'||username=='曹向阳'||username=='陈利')
    	{ 
    	simpleForm_Save.buttons[1].setVisible(true);
        simpleForm_Save.buttons[2].setVisible(true);
        simpleForm_Save.buttons[3].setVisible(true);
    	}
    	
    	
    }
   var my_cjdm="";
   simple_Grid.addListener('rowdblclick', onRowDoubleClick);
     
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		items: [simpleForm_Save,simpleForm_Query,simple_Grid]
		
	});
    
    simpleForm_Save.buttons[0].setVisible(true);
    simpleForm_Save.buttons[1].setVisible(true);
    simpleForm_Save.buttons[2].setVisible(true);
    simpleForm_Save.buttons[3].setVisible(false);
    simpleForm_Save.collapse();
    my_cjdm=Ext.getCmp("gzid").getValue();
    Ext.getCmp("gzid").enable();
    
    //simpleForm_Query.buttons[2].setVisible(false); 
    
     function getTime()
       {
          //***得到当前时间**//
    var myyear,mymonth,myweek,myday,mytime,mymin,myhour,mysec;
	var mydate=new Date();
	myyear=mydate.getFullYear();
	mymonth=mydate.getMonth()+1;
	if(mymonth<10)
	mymoth="0"+mymoth;
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
   // Ext.getCmp("txt_jsrq").setValue(getTime()); txt_ksrq
    Ext.getCmp("txt_ksrq").setValue(get_nowTime());
     Ext.getCmp("txt_jsrq").setValue(getTime());
   function getTime2()
  {
    var myyear,mymonth;
	var mydate=new Date();
	myyear=mydate.getFullYear();
	mymonth=mydate.getMonth()+1;
	if(mymonth<10)
	//mymoth="0"+mymoth;
	return myyear+"-"+mymonth+"-"+0+1+" "+0+0+":"+0+0;
  }
   // Ext.getCmp("txt_ksrq").setValue(getTime2());

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
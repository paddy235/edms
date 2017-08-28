Ext.onReady(function() {
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var planRecord = Ext.data.Record.create([
    	{name:'YHDM',type:'string'},
    	{name:'YHMC',type:'string'},
    	{name:'YHMM',type:'string'},
    	{name:'YHIP',type:'string'},
    	{name:'GWMC',type:'string'},
    	{name:'DWJB',type:'string'},
    	{name:'DWDM',type:'string'},
    	{name:'ZCSJ',type:'string'},
    	{name:'SESSION_DATE',type:'string'},
    	{name:'SESSIONID',type:'string'},
    	{name:'BZ',type:'string'},
    	{name:'DDTDM',type:'string'}
    	]);
     var store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'yhxx_json.jsp'}),        
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord)
    });
    //store.load();
 	var SSDWDM_store = new Ext.data.Store({
	proxy : new Ext.data.HttpProxy({
			url : '../../share/combo_list.jsp?sql=select DWDM,DWJC from v_j_gyjc_yhdw'
		}),
		reader : new Ext.data.JsonReader({root : 'root'
				},[{name : 'value',mapping : 'value'},
				   {name : 'text',mapping : 'text'}
				  ]
			)
	});
	SSDWDM_store.load();

	
	var simpleForm_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '用户添加',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 600,
              collapsible:true,
              titleCollapse:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              labelWidth : 80,
              
              
              items : [{
                                   layout : 'column',// columnlayout
                                   border : false,// 没有边框
                                   labelSeparator : '：',// 标题的分隔符号我们用中文冒号代替英文的冒号（labelSeparator:'：'）。
                                   // coulmnLayout里的控件将定义在items里
                                  items : [{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',
                                                                             fieldLabel : '用户登录名',
                                                                             name : 'YHDM',
                                                                             id:'YHDM_ID',
                                                                             allowBlank : true// 该选项值不允许为空
                                                                      }]
                                                 },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',
                                                                             fieldLabel : '用户名称',
                                                                             name : 'YHMC',
                                                                             id:'YHMC',
                                                                             allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',
                                                                             inputType:'password', //密码类型
                                                                             fieldLabel : '用户密码',
                                                                             name : 'YHMM',
                                                                             id:'YHMM',
                                                                             allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '用户IP',
                                                                             name : 'YHIP',
                                                                             id:'YHIP',
                                                                             allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '岗位名称',
                                                                             name : 'GWMC',
                                                                             id:'GWMC',
                                                                             allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// 控件的类型设置成combo
                                                               // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                                                               store : new Ext.data.SimpleStore({
                                                                      // 通过一个数组定义了returnValue和displayText两个字段。retrunValue字段指定是提交给后台的值，displayText字段指定是在下拉中显示的选择值。
                                                                      fields : ["returnValue", "displayText"],
                                                                      // 定义了几组数据.每组数据都是根据fiedls的定义来组成的，数组里第一个值就是retrunValue的值，第二个值就是displayText的值，例如[1,'小学']，就表示retrunValue是1，displayText是小学。
                                                                     data : [['1', '神朔铁路分公司'], ['2', '神朔铁路分公司调度指挥所'], 
                                                                  ['3', '电调台'], ['4', '运输段'], 
                                                                  ['5', '工队'], ['6', '工区或者变电所'], ['7', '行调']]
                                                   			}),
                                                               valueField : "returnValue",// 设置下拉选择框的值
                                                               displayField : "displayText",// 设置下拉选择框的显示文本
                                                               mode : 'local',// 数据是在本地
                                                               forceSelection : true,// 必须选择一个选项
                                                               blankText : '请选择单位级别',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                               emptyText : '请选择单位级别',// 在没有选择值时显示为选择学历
                                                               hiddenName : 'DWJB',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                                                               editable : false,// 该下拉列表只允许选择，不允许输入
                                                               triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                                                               allowBlank : false,// 该选项值不允许为空
                                                               fieldLabel : '单位级别',// 控件的标题是学历
                                                               name : 'JGLB',// 再次提醒，name只是下拉列表的名称
                                                               id : 'dwdj_id',// 再次提醒，name只是下拉列表的名称
                                                               anchor : '80%',// input的宽度是90%
                                                               listeners:{"select":function(combo, planRecord_gq,index){
                                                                    var sldw=Ext.getCmp("dwdj_id").value;
                                                                    //alert(sldw);
                                                               		var combo2 = Ext.getCmp('DWDM_id'); 
                                                               		combo2.enable();      
                          											combo2.reset();   
                          											//combo2.disable();
                          											sql_qjzc="select DWDM,DWJC from v_j_gyjc_yhdw where jb=\'"+sldw+"\'";//
                          											//alert(sql_qjzc);
                          										    combo2.store.proxy = new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_qjzc});
                          										    combo2.store.load();
                                                               		}
                                                               }
                                                        }]
                                                 },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                    		xtype : 'combo',// 控件的类型设置成combo
                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        	store : SSDWDM_store,
                        	valueField : "value",
                        	displayField : "text",
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择所属单位',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        	emptyText : '选择所属单位',// 在没有选择值时显示为选择学历
                        	hiddenName : 'DWDM',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        	editable : true,// 该下拉列表只允许选择，不允许输入
                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        	//allowBlank : false,// 该选项值不允许为空
                        	fieldLabel : '单位代码',// 控件的标题是学历
                        	name : 'DWDM',// 再次提醒，name只是下拉列表的名称
                        	id : 'DWDM_id',// 再次提醒，name只是下拉列表的名称
                        	anchor : '80%'// input的宽度是90%
    					}]
                                                 },{
                                                        columnWidth : .6,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textarea',// 控件的类型为datefield
                                                                             fieldLabel : '备注信息',
                                                                             name : 'BZ',
                                                                             id:'BZ',
                                                                             anchor : '90%',
                                                                             height:'60'
                                                                             
                                                                      }]
                                                 }]

                            }],
              // 为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
        buttons: [{
            text : '修改',
            Enabled:false,
            handler : function() {
            	if (!simpleForm_Save.form.isValid()) {return };
           		if (simpleForm_Save.form.isValid()) {
                	simpleForm_Save.form.doAction('submit', {
                                               waitMsg:'修改中,请稍侯...',  
                                               url : 'Update.jsp?YHDM='+yh,
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {                                               		
                                               		Ext.Msg.alert('消息',action.result.msg);
                                               },
                                               failure : function() {
                                                     Ext.Msg.alert('操作', '保存失败！');
                                                     this.disabled = false;
                                               }
            		});
           		 }
             }
         }]
    }); 
    


    var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Save]
	});
	//simpleForm_Save.collapse();
	//simpleForm_Save.buttons[1].setVisible(false);
	//simpleForm_Save.buttons[3].setVisible(false);
	//simpleForm_Save.buttons[4].setVisible(false);
	Ext.getCmp("YHDM_ID").disable();
	store.load({callback:function(records,success,totalRecords){
     //alert(records[0].data.YHDM.toString())
	 Ext.getCmp("YHDM_ID").setValue(records[0].data.YHDM.toString());
	 Ext.getCmp("YHMC").setValue(records[0].data.YHMC.toString());
	 Ext.getCmp("YHMM").setValue(records[0].data.YHMM.toString());
	 Ext.getCmp("YHIP").setValue(records[0].data.YHIP.toString());
	 Ext.getCmp("GWMC").setValue(records[0].data.GWMC.toString());
	 Ext.getCmp("dwdj_id").setValue(records[0].data.DWJB.toString());
	 Ext.getCmp("DWDM_id").setValue(records[0].data.DWDM.toString());
     Ext.getCmp("BZ").setValue(records[0].data.BZ.toString());
	}});
 });
 
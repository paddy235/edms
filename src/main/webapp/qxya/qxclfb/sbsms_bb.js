Ext.onReady(function() {
	  Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';

  //产品类别下拉列表	
	var nyfl_sql = "select SBFLID,SBFLNAME from J_GDGY_SBFL  where SBFLID like (substr('020000',0,2)||'%25') and sbflid!='020000'";
    var nyfl_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+nyfl_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	nyfl_store.load();
	
	//专业分类下拉列表	
	var zyfl_sql = "select SBFLID,SBFLNAME from J_GDGY_SBFL  where SBFLID in('070000','010000','020000')";
    var zyfl_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+zyfl_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	zyfl_store.load(); 
	
	//级别分类下拉列表	
	var jbfl_sql = "select sxid,sxmc from j_gdgy_sxzd where sxid>'021000' and sxid<'022000'";
    var jbfl_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+jbfl_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	jbfl_store.load();
	//得到产品的型号下拉框
    var cpxh_sql = "select distinct CPXH,CPXH from Z_JCSJ_cpsms";
    var cpxh_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+cpxh_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	cpxh_store.load(); 
   //得到产品的生产厂家下拉框
    var sccj_sql = "select distinct sccj,sccj from Z_JCSJ_cpsms";
    var sccj_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+sccj_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	sccj_store.load(); 
     
 
	var simpleForm_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '地方命令',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 800,
              collapsible:true,
              titleCollapse:true,
              method:'POST',
              autoWidth:true,
              frame : true, 
              labelWidth : 80, 
              items : [{
                    layout : 'column',
                    border : false,
                	items:[ 
                	{
                    	columnWidth:.7,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '说明书名称',
                    		blankText : '说明书名称',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历
                    		allowBlank : false,// 该选项值不允许为空
                    		name: 'gzzdmc',
                    		id:'gzzdmc_id',
                    		anchor:'95%'
                		}]
                	}, 
                	{
                	    columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'datefield',
                    		fieldLabel: '发布日期',
                    		name: 'fbrq',
                    		id:'fbrq_id',
                    		anchor:'95%',
                    		format:'Y-m-d',
                    		blankText : '请填写日期',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历
                    		allowBlank : false,// 该选项值不允许为空
                    		value: new Date(),
    						timePicker:true
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[ 
                	{
                		columnWidth:.35,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// 控件的类型设置成combo
                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        	store : zyfl_store,
                        	valueField : "value",// 设置下拉选择框的值
                       		displayField : "text",// 设置下拉选择框的显示文本
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择专业分类',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        	emptyText : '选择专业分类',// 在没有选择值时显示为选择学历
                        	hiddenName : 'zyfl',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        	editable : false,// 该下拉列表只允许选择，不允许输入
                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        	allowBlank : false,// 该选项值不允许为空
                        	fieldLabel : '专业分类',// 控件的标题是学历
                        	name : 'zyfl',// 再次提醒，name只是下拉列表的名称
                        	id:'zyfl_id',
                        	listeners:{"select":function(combo, zyfl_store,index){
                        	var zyfl_id=Ext.getCmp("zyfl_id").value;
                        	//根据产品分类，得到产品的类型
                        	var combo2 = Ext.getCmp('nrfl_id'); 
                            combo2.enable();      
                          	combo2.reset(); 
                          	nyfl_sql = "select SBFLID,SBFLNAME from J_GDGY_SBFL  where SBFLID like (substr('"+zyfl_id+"',0,2)||'%25') and sbflid!='"+zyfl_id+"'";
                        	combo2.store.proxy = new Ext.data.HttpProxy({url : '../../share/combo_list.jsp?sql='+nyfl_sql});
                          	combo2.store.load();
                          	
                        	}},
                        	anchor : '95%'// input的宽度是90%
    					}]	
                	},{
                		columnWidth:.35,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// 控件的类型设置成combo
                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        	store :nyfl_store,
                        	valueField : "value",// 设置下拉选择框的值
                       		displayField : "text",// 设置下拉选择框的显示文本
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择产品类别',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        	emptyText : '选择产品类别',// 在没有选择值时显示为选择学历
                        	hiddenName : 'nrfl',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        	editable : false,// 该下拉列表只允许选择，不允许输入
                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        	allowBlank : false,// 该选项值不允许为空
                        	fieldLabel : '产品类别',// 控件的标题是学历
                        	name : 'nrfl',// 再次提醒，name只是下拉列表的名称
                        	id:'nrfl_id',
                        	listeners:{"select":function(combo, zyfl_store,index){
                        	var zylb_id=Ext.getCmp("nrfl_id").value;
                        	//根据产品类型，得到产品的型号
                        	var combo2 = Ext.getCmp('cpxh_id'); 
                            combo2.enable();      
                          	combo2.reset(); 
                          	alert(zylb_id);
                          	cpxh_sql = "select distinct CPXH,CPXH from Z_JCSJ_cpsms where cplb='"+zylb_id+"'";
                          	alert(cpxh_sql);
                          	combo2.store.proxy = new Ext.data.HttpProxy({url : '../../share/combo_list.jsp?sql='+cpxh_sql});
                          	combo2.store.load();
                          	//根据产品类型，得到生产厂家
                          	var combo3 = Ext.getCmp('sccj_id'); 
                            combo3.enable();      
                          	combo3.reset(); 
                          	//alert(zylb_id);
                          	sccj_sql = "select distinct sccj,sccj from Z_JCSJ_cpsms where cplb='"+zylb_id+"'";
                          	combo3.store.proxy = new Ext.data.HttpProxy({url : '../../share/combo_list.jsp?sql='+sccj_sql});
                          	combo3.store.load();
                        	}},
                        	anchor : '95%'// input的宽度是90%
    					}]	
                	},{
                		columnWidth:.3,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// 控件的类型设置成combo
                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        	store : cpxh_store,
                        	valueField : "text",// 设置下拉选择框的值
                       		displayField : "text",// 设置下拉选择框的显示文本
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择产品型号',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        	emptyText : '选择产品型号',// 在没有选择值时显示为选择学历
                        	hiddenName : 'cpxh',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        	editable : true,// 该下拉列表只允许选择，不允许输入
                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        	allowBlank : true,// 该选项值不允许为空
                        	fieldLabel : '产品型号',// 控件的标题是学历
                        	name : 'cpxh',// 再次提醒，name只是下拉列表的名称
                        	id:'cpxh_id',
                        	anchor : '95%'// input的宽度是90%
    					}]	
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[ { layout: 'form',
                		border:false,
                		//fileUpload: true,
                		items: [{
                    		xtype : 'combo',// 控件的类型设置成combo
                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        	store : sccj_store,
                        	valueField : "text",// 设置下拉选择框的值
                       		displayField : "text",// 设置下拉选择框的显示文本
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择生产厂家',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        	emptyText : '选择生产厂家',// 在没有选择值时显示为选择学历
                        	hiddenName : 'sccj',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        	editable : true,// 该下拉列表只允许选择，不允许输入
                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        	allowBlank : true,// 该选项值不允许为空
                        	fieldLabel : '生产厂家',// 控件的标题是学历
                        	name : 'sccj',// 再次提醒，name只是下拉列表的名称
                        	id:'sccj_id',
                        	anchor : '95%'// input的宽度是90%
    					}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[ 
                	{
                		layout: 'form',
                		border:false,
                		//fileUpload: true,
                		items: [{
                    		xtype: 'fileuploadfield',
            				id: 'gzzdlj_id',
            				anchor: '95%',
            				//allowBlank: false,
           					msgTarget: 'side',
            				emptyText: '请选择设备说明书',
           					fieldLabel: '设备说明书',
            				name: 'gzzdlj',
            				blankText : '须设备说明书',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历
                    		allowBlank : false,// 该选项值不允许为空
            				buttonText: '',
            				fileUpload: true,     
            				buttonCfg: {
                				iconCls: 'upload-icon'
            				}
                		}]
                	}]
                }
               ,{
                    layout : 'column',
                     border : false,
                 	items:[ 
                 	{
                     	columnWidth:1,
                		layout: 'form',
                 		border:false,
                 		items: [{
                     		xtype:'textfield',
                     		fieldLabel: '产品原型技术提供厂家',
                     		name: 'jstgcj',
                     		id:'jstgcj_id',
                     		anchor:'95%'
                 		}]
                 	}] 
                 }],
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
                                                                      url : 'gzzdSave.jsp',
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
                                                                      		simpleForm_Save.collapse();
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
                            }]
       });

	
	     
    	
   
    
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Save]
	});
    
    simpleForm_Save.expand(); 
 


});
     
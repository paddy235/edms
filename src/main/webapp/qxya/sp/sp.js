
var custom,customEl;
var ResizableExample = {
    init : function(){
        custom = new Ext.Resizable('custom', {
            wrap:true,
            pinned:true,
            minWidth:50,
            minHeight: 50,
            preserveRatio: true,
            handles: 'all',
            draggable:true,           
            dynamic:true
        });
        customEl = custom.getEl();
        document.body.insertBefore(customEl.dom, document.body.firstChild);
        customEl.on('dblclick', function(){
            customEl.hide(true);
        });
        customEl.hide();
    }
};

Ext.EventManager.onDocumentReady(ResizableExample.init, ResizableExample, true);

function liuchengtushow(path)
{
	//alert("3"+path);
	document.getElementById ("custom").src="../Images/"+path+".JPG";
	customEl.center();
	customEl.show(true);
};
function tphide()
{
	customEl.hide(true);
};
var renderYuanneirong =function(value)
 	 {
 	    //var url = 'ShowGzzd.jsp?id='+value;
 	 	//alert(url);
  	    return '<a href="'+value+'" target="view_window">查看详细</a>';
 	 }; 	
void function  input_onclick3(url)
{
    //alert("开始加载图纸信息，确定后请等待......");
	open_window(url,900,500,1);
}
function open_window(url,thisWidth,thisHeight,scrollbar){
//打开一居中窗口
    var left =(screen.width-thisWidth)/2;
    var top = (screen.height-thisHeight)/2;
    //left=300;   
    window.open(url,"","left="+left+",top="+top+",height="+thisHeight+",width="+thisWidth+",toolbar=no,location=no,directories=no,menubar=no,scrollbars="+scrollbar+",resizable=yes,status=1,center:yes");
	
}
var win1;
function MPG(path) {
	//alert(path);
	player.innerHTML='<EMBED src="../vedio/'+path+'" width=664 height=424 ShowStatusBar=1></EMBED>';
}

var custom,customEl;
var ResizableExample = {
    init : function(){
        custom = new Ext.Resizable('custom', {
            wrap:true,
            pinned:true,
            minWidth:50,
            minHeight: 50,
            preserveRatio: true,
            handles: 'all',
            draggable:true,           
            dynamic:true
        });
        customEl = custom.getEl();
        document.body.insertBefore(customEl.dom, document.body.firstChild);
        customEl.on('dblclick', function(){
            customEl.hide(true);
        });
        customEl.hide();
    }
};

function tpshow()
{
	//alert("3"+path);
	document.getElementById ("custom").src="glb.JPG";
	customEl.center();
	customEl.show(true);
};
Ext.onReady(function(){
     Ext.QuickTips.init();    
     Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
   this.yyshow=function(path){
       MPG(path);
       if(!win1){
            win1 = new Ext.Window({
                applyTo:'hello-win',
                layout:'fit',
                width:680,
                height:460,
                closeAction:'hide',
                plain: true, 
                items: new Ext.TabPanel({
                    applyTo: 'hello-tabs',
                    autoTabs:true,
                    activeTab:0,
                    deferredRender:false,
                    border:false
                })
            });
        }
        win1.show(this);
}; 
var dwjb=document.getElementById("dwjb").value;
  //内容分类下拉列表	
	var nyfl_sql = "select sxid,sxmc from j_gdgy_sxzd where sxid>'020000' and sxid<'021000'";
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
	var zyfl_sql = "select sxid,sxmc from j_gdgy_sxzd where sxid>'015000' and sxid<'016000'";
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
	
	
  	//渲染返回html代码 renderTo 故障分类
 	 var renderYuanneirong =function(value)
 	 {
 	    //var url = 'ShowGzzd.jsp?id='+value;
 	 	//alert(url);
  	    return '<a href="../vedio/'+value+'" target="view_window">下载</a>';
 	 }; 	 
 	 var renderLiuchengtu =function(value)
 	 {  	  	 
	    return '<a href="#" mce_href="#" onclick="return liuchengtushow(' + value + ');">查看详细</a>';       
 	 };
     var rendershanchu =function(value)
 	 {
 	     return '<a href="gzzdDel.jsp?id='+value+'">删除</a>';
 	     alter(value);
 	 };
   
      //定义Grid表头
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
        //new Ext.grid.RowNumberer(),
         {header:'序号',dataIndex:'xh',width:40,fixed:true},
        //{header:'编号',dataIndex:'id',width:35,fixed:true},
        {header:'视频名称',dataIndex:'gzzdmc',width:360,fixed:true,sortable:true},
        //{header:'发布单位',dataIndex:'fbdw',sortable:true},
        //{header:'发布日期',dataIndex:'fbrq',sortable:true},
        //{header:'专业分类',dataIndex:'zyfl'},
        //{header:'内容分类',dataIndex:'nrfl'},
       	//{header:'级别分类',dataIndex:'jbfl'},
       	//{header:'视频简述',dataIndex:'gzzdjs'},
        {header:'下载',dataIndex:'gzzdlj',renderer:renderYuanneirong}   
        //{header:'操作',dataIndex:'id',renderer:rendershanchu}
    ]); 
    
     var planRecord = Ext.data.Record.create([
        {name:'xh',type:'int'},
    	{name:'id',type:'int'},
    	{name:'gzzdmc',type:'string'},
    	//{name:'fbdw',type:'string'},
    	{name:'fbrq',type:'string'},
    	{name:'zyfl',type:'string'},
    	{name:'nrfl',type:'string'},
    	{name:'jbfl',type:'string'},
    	{name:'gzzdjs',type:'string'},
    	{name:'gzzdlj',type:'string'}
    	]);
    
     //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'gzzdList.jsp'}),        
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
        //tbar:[{xtype:'textfield',id:'tf_name',name:'tfname',width:90,emptyText:'项目名称' },
          //     { text:'查询1212', iconCls:'table_refresh', id:'bar_sel',handler:function(){alert("sdf")} } ],
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
        renderTo : document.body
    });    
 
    //Grid上触发事件 renderTo 
    simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){ 
 	//	simpleForm_Query.collapse();
            // simple_Grid.collapse();   
        	 simpleForm_Save.expand();
    	
    	var record=simple_Grid.getStore().getAt(rowIndex);
 //   	alert(rowIndex);
    	//alert(record.get('gzzdlj'));
   
    	simpleForm_Save.getForm().loadRecord(record);
    	
		//simpleForm_Query.collapse();
    	
    });	
    //双击事件
   simple_Grid.addListener('rowdblclick', function(simple_Grid,rowIndex,event){ 
           var record=simple_Grid.getStore().getAt(rowIndex);
           yyshow(record.get('gzzdlj'));
    });	
   
    /*==============修改========*/
 
	var simpleForm_Save = new Ext.FormPanel({
        renderTo : document.body,
        title: '视频---编辑',
        buttonAlign : 'left',
        bodyStyle : 'padding:5px',             
        collapsible:true,
        titleCollapse:true,
        method:'POST',
        autoWidth:true,
        fileUpload: true,        
        frame : true,
        //labelWidth : 80,
 
        items : [{
                    layout : 'column',
                    border : false,
                	items:[{xtype:'hidden',name:'id',id:'xiu_id'},{xtype:'hidden',name:'albm'},
                	{
                    	columnWidth:.7,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '视频名称',
                    		blankText : '请填写视频名称',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历
                    		allowBlank : false,// 该选项值不允许为空
                    		name: 'gzzdmc',
                    		id:'gzzdmc_id',
                    		anchor:'95%'
                		}]
                	},
                	/*{
                    	columnWidth:.35,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '发布单位',
                    		name: 'fbdw',
                    		blankText : '请填写发布单位',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历
                    		allowBlank : false,// 该选项值不允许为空
                    		anchor:'95%'
                    		
                		}]
                	},
                	*/
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
                	items:[{xtype:'hidden',name:'id'},{xtype:'hidden',name:'albm'},
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
            				emptyText: '请选择视频',
           					fieldLabel: '视频上传',
            				name: 'gzzdlj',
            				blankText : '须上电报',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历
                    		allowBlank : false,// 该选项值不允许为空
            				buttonText: '',
            				buttonCfg: {
                				iconCls: 'upload-icon'
            				}
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{xtype:'hidden',name:'id'},{xtype:'hidden',name:'albm'},
                	{
                    	columnWidth:1,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '视频描述',
                    		name: 'gzzdjs',
                    		id:'gzzdjs_id',
                    		anchor:'95%'
                		}]
                	}]
                }],
              
  // 为form添加按钮了
    
  buttons: [{
            text: '新增',
             handler : function() {
                  if (!simpleForm_Save.form.isValid()) {return };
                  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                  if (simpleForm_Save.form.isValid()) { 
                  	 var gzzdmc_id =Ext.getCmp("gzzdmc_id").getValue();
                  	 //var zyfl_id =Ext.getCmp("zyfl_id").getValue();
                  	 //var nrfl_id =Ext.getCmp("nrfl_id").getValue();                  
                  	 //var jbfl_id =Ext.getCmp("jbfl_id").getValue();
                  	 var fbrq_id =Ext.util.Format.date(Ext.getCmp("fbrq_id").getValue(), 'Y-m-d');
                  	 var gzzdjs_id =Ext.getCmp("gzzdjs_id").getValue();
          			 var gzzdlj_id =Ext.getCmp("gzzdlj_id").getValue();
    
                     simpleForm_Save.form.doAction('submit', {
                     	waitMsg:'保存中,请稍侯...',  
                        url : 'gzzdSave.jsp?gzzdmc_id='+gzzdmc_id+'&fbrq_id='+fbrq_id+'&gzzdjs_id='+gzzdjs_id+'&gzzdlj_id='+gzzdlj_id,
                        
                        method : 'post',
                        params : '',
                        // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                        // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                        success : function(form, action) {
                                // 例如返回的json结构是"{success:true,data:'成功保存！'}"，
                                 //Ext.Msg.alert('操作',action.result.data);
                                 if(action.result.msg!="")
                                 {
                                 	document.getElementById ("albm").value=action.result.msg;
                                 	//simpleForm_Save.buttons[3].setVisible(true);
                                 	//simpleForm_Save.buttons[4].setVisible(true);
                                 	simple_Grid.getStore().reload();
                                 	Ext.Msg.alert('消息','保存成功！');
                                 }
                                 //simpleForm_Query.form.reset();
                                
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
            text : '修改',
            Enabled:false,
            handler : function() {
            	if (!simpleForm_Save.form.isValid()) {return };
           		if (simpleForm_Save.form.isValid()) {
           		var xiu_id =Ext.getCmp("xiu_id").getValue();
           		var gzzdmc_id =Ext.getCmp("gzzdmc_id").getValue();
           		
           		//var zyfl_id =Ext.getCmp("zyfl_id").getValue();
           		//var nrfl_id =Ext.getCmp("nrfl_id").getValue();
           		//var jbfl_id =Ext.getCmp("jbfl_id").getValue();
           		//alert("nrfl_id:"+nrfl_id+"gzzdmc_id:"+gzzdmc_id);
           		 var fbrq_id =Ext.util.Format.date(Ext.getCmp("fbrq_id").getValue(), 'Y-m-d');
           		//alert("fbrq_id:"+fbrq_id);
           		var gzzdjs_id =Ext.getCmp("gzzdjs_id").getValue();
           		 
           		//alert("xiu_id:"+xiu_id);
           			var tppath =document.getElementById ("gzzdlj_id").value;
           			//alert("tppath:"+tppath);
                	simpleForm_Save.form.doAction('submit', {
                                               waitMsg:'修改中,请稍侯...',  
                                               url : 'gzzdUpdate.jsp?gzzdPath='+tppath+'&id='+xiu_id+'&gzzdmc='+gzzdmc_id+'&fbrq='+fbrq_id+'&gzzdjs='+gzzdjs_id,
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		simpleForm_Save.buttons[0].setVisible(true);
                                               		simple_Grid.getStore().reload();
                                               		Ext.Msg.alert('消息',action.result.msg);
                                               },
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
                   simpleForm_Save.form.reset();
                   simpleForm_Save.buttons[0].setVisible(true);
                   simpleForm_Save.buttons[1].setVisible(false); 
             }
        }]
       });
   	simpleForm_Save.collapse();

    
    var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '视频---查询',
              buttonAlign : 'left',
              bodyStyle : 'padding:5px',             
              collapsible:true,
              titleCollapse:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              //labelWidth : 80,
              
              
              items : [{
                                   layout : 'column',// columnlayout
                                   
                                   border : false,// 没有边框                                   
                                   labelSeparator : '：',// 标题的分隔符号我们用中文冒号代替英文的冒号（labelSeparator:'：'）。
                                   // coulmnLayout里的控件将定义在items里
                                   items : [{
                                                  columnWidth : .5,                                                          
                                                  layout : 'form',
                                                  border : false,
                                                  items : [{
								                    xtype:'textfield',
								                    fieldLabel: '关键字',
								                    name: 'gjz',														                   
								                    anchor:'95%'
								                }]
                                           }]

                            }],
              // 为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
              buttons : [{
               // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
               buttonlAlign : 'right',
               text : '查询',
               handler : function() {
                    if (!simpleForm_Query.form.isValid()) {return };
                    // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                    if (simpleForm_Query.form.isValid()) {
                    // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                    //this.disabled = true;
                    // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                    simpleForm_Query.form.doAction('submit', {
                                     waitMsg:'查询中,请稍侯...',  
                                     url : 'gzzdQuery.jsp',
                                     method : 'post',
                                     params : '',
                                     // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                                     // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                                     success : function(form, action) {
                                     // 例如返回的json结构是"{success:true,data:'成功保存！'}"，
                                     //Ext.Msg.alert('操作',action.result.data);
                                     //Ext.Msg.alert('消息',action.result.msg);
                                     //simpleForm_Query.form.reset();
                                      simple_Grid.getStore().reload();                               		
                    				 },
                     // 定义failure函数，就是网络通讯存在问题的时候将显示错误信息。
                     failure : function() {
                            Ext.Msg.alert('操作', '保存失败！');
                       	 	this.disabled = false;
                     	 }
                  });
       			}
			}
          },{

	                 // 取消按钮就是简单的reset一下form的控件
	                 text : '重置',
	                 handler : function() {
	                        simpleForm_Query.form.reset();
	                        simpleForm_Save.collapse();
	                       // window.location.href="";
	                        //window.location.href='zyjhsqAdd.jsp';tpshow
	                 }
	          },{

	                 // 取消按钮就是简单的reset一下form的控件
	                 text : '查看分界图',
	                 handler : function() {
	                         tpshow();
	                       // window.location.href="";
	                        //window.location.href='zyjhsqAdd.jsp';tpshow
	                 }
	          }]
       }); 
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items:[simpleForm_Save,simpleForm_Query,simple_Grid]		
	});
	if(dwjb=="1")
	{
	simpleForm_Save.hide();
	}
	 //bar_sel
  })
  
  

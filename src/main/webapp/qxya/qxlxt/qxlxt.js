
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
Ext.onReady(function(){//alert("sdfsdfsd");
     Ext.QuickTips.init();    
     Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
   var dich=" 1=1";
 
 
	
  
	
  	//渲染返回html代码 renderTo 故障分类
 	 var renderYuanneirong =function(value)
 	 {
 	    //var url = 'ShowGzzd.jsp?id='+value;
 	 	//alert("sdfsdfsdf");
  	    return '<a href="lxt\\'+value+'" target="view_window">查看详细</a>';
 	 }; 	 
 	 var renderLiuchengtu =function(value)
 	 {  	  	 
	    return '<a href="#" mce_href="#" onclick="return liuchengtushow(' + value + ');">查看详细</a>';       
 	 };
     var rendershanchu =function(value)
 	 { 
 	     return '<a href="#" onclike="">删除</a>';
 	 };
     
      //定义Grid表头
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
        //new Ext.grid.RowNumberer(),
         {header:'序号',dataIndex:'xh',width:40,fixed:true},
        //{header:'编号',dataIndex:'id',width:35,fixed:true},  
       	{header:'路线图名称',dataIndex:'ZYZDSMC',width:360,fixed:true,sortable:true},
        //{header:'发布单位',dataIndex:'fbdw',sortable:true},
        {header:'发布日期',dataIndex:'FBRQ',sortable:true},
        {header:'详细内容',dataIndex:'GZZDLJ',renderer:renderYuanneirong}
        //{header:'操作',dataIndex:'id',renderer:rendershanchu}
    ]); 
    
     var planRecord = Ext.data.Record.create([
        {name:'xh',type:'int'},
    	{name:'id',type:'int'},
    	{name:'ZYZDSMC',type:'string'},
    	//{name:'fbdw',type:'string'},
    	{name:'FBRQ',type:'string'}, 
    	{name:'GZZDLJ',type:'string'}
    	]);
    
     //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'gzzdList.jsp'}),        
        //reader告诉我们如何解析这个数据
        baseParams:{whereclause:dich},
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
    	//alert(record.get('id'));
   
    	simpleForm_Save.getForm().loadRecord(record);
    	 
    	
    });	
    	 
   
    /*==============修改========*/
 
	var simpleForm_Save = new Ext.FormPanel({
        renderTo : document.body,
        title: '抢修路线图---编辑',
        buttonAlign : 'left',
        bodyStyle : 'padding:5px',             
        collapsible:true,
        titleCollapse:true,
        method:'POST',
        autoWidth:true,
        fileUpload: true,        
        frame : true, 
        rame:true,
        items : [{
                    layout : 'column',
                    border : false,
                	items:[{xtype:'hidden',name:'id',id:'xiu_id'},
                	{
                    	columnWidth:.7,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '路线图名称',
                    		blankText : '路线图名称',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历
                    		allowBlank : false,// 该选项值不允许为空
                    		name: 'ZYZDSMC',
                    		id:'ZYZDSMC_id',
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
                    		name: 'FBRQ',
                    		id:'FBRQ_id',
                    		anchor:'95%',
                    		format:'Y-m-d',
                    		blankText : '请填写日期',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历
                    		allowBlank : false,// 该选项值不允许为空
                    		value: new Date(),
    						timePicker:true
                		}]
                	}]
                } ,{
                    layout : 'column',
                    border : false,
                	items:[ 
                	{
                		layout: 'form',
                		border:false,
                		//fileUpload: true,
                		items: [{
                    		xtype: 'fileuploadfield',
            				id: 'GZZDLJ_id',
            				anchor: '95%',
            				//allowBlank: false,
           					msgTarget: 'side',
            				emptyText: '请选择路线图',
           					fieldLabel: '路线图',
            				name: 'GZZDLJ',
            				blankText : '须路线图',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历
                    		allowBlank : false,// 该选项值不允许为空
            				buttonText: '',
            				buttonCfg: {
                				iconCls: 'upload-icon'
            				}
                		}]
                	}]
                }  
                ],
              
  // 为form添加按钮了
    
  buttons: [{
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
                                    text : '添加',
                                    
                                   handler : function() {
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                                          if (simpleForm_Save.form.isValid()) {
                                          
							                     var ZYZDSMC_id =Ext.getCmp("ZYZDSMC_id").getValue();
							                  	 var FBRQ_id =Ext.util.Format.date(Ext.getCmp("FBRQ_id").getValue(), 'Y-m-d');
							                  	    //alert("asdf");
                                                   simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'保存中,请稍侯...',  
                                                                      url : 'gzzdSave.jsp?ZYZDSMC_id='+ZYZDSMC_id+'&FBRQ_id='+FBRQ_id,
                                                                      method : 'post',
                                                                      params : '',
                                                                      // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                                                                      // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                                                                      success : function(form, action) { 
                                                                      		Ext.Msg.alert('消息',action.result.msg); 
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
                                          

                                   }
                            }, {
            text : '修改',
            Enabled:false,
            handler : function() {
            	if (!simpleForm_Save.form.isValid()) {return };
           		if (simpleForm_Save.form.isValid()) {
 
   				    var ZYZDSMC_id =Ext.getCmp("ZYZDSMC_id").getValue();
					var FBRQ_id =Ext.util.Format.date(Ext.getCmp("FBRQ_id").getValue(), 'Y-m-d');
							                  	
		    
             var xiu_id =Ext.getCmp("xiu_id").getValue(); 
             //var gzzdjs_id =Ext.getCmp("gzzdjs_id").getValue();
           		//alert("xiu_id:"+xiu_id);
           			var tppath =document.getElementById ("GZZDLJ_id").value;
           			//alert("tppath:"+tppath);
                	simpleForm_Save.form.doAction('submit', {
                                               waitMsg:'修改中,请稍侯...',  
                                               url : 'gzzdUpdate.jsp?tppath='+tppath+'&xiu_id='+xiu_id+'&ZYZDSMC_id='+ZYZDSMC_id+'&FBRQ_id='+FBRQ_id,
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
        }, {
                                   // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
                                    text : '删除',
                                    disabledClass:'x-item-disabled',
                                   	handler : function() { 
                                   	Ext.Msg.confirm('提示', '您确定要删除这条信息么？', function(e){
  
                                     
                                     if(e=='yes')
                                     {  //alert("asdfasdfasdf");
                                   	      var xiu_id =Ext.getCmp("xiu_id").getValue();
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                                          if (simpleForm_Save.form.isValid()) {
                                                 // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                                                 //this.disabled = true;
                                                 // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                                                 simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'删除中,请稍侯...',  
                                                                      url : 'gzzdDel.jsp?id='+xiu_id,
                                                                      method : 'post',
                                                                      params : '',
                                                                      // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                                                                      // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                                                                      success : function(form, action) { //alert("asdfasdf");
                                                                            simple_Grid.getStore().reload(); 
                                               								Ext.Msg.alert('消息',action.result.msg);
                                                                      },
                                                                      // 定义failure函数，就是网络通讯存在问题的时候将显示错误信息。
                                                                      failure : function() {
                                                                             Ext.Msg.alert('操作', '删除失败！');
                                                                             this.disabled = false;
                                                                      }
                                                               });
                                          }
                                       }
                                          
                                          
});
                                   }
                            }]
       });
   	simpleForm_Save.collapse();

    
    var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '抢修路线图--查询',
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
								                    id:'gjz_id',													                   
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
                        var where="  1=1 "; 
                        
                         if(Ext.getCmp("gjz_id").getValue()!="" ){ 
							where=where +" and ZYZDSMC like '%"+Ext.getCmp("gjz_id").getValue()+"%'";
						  } 
				 
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
          },{

	                 // 取消按钮就是简单的reset一下form的控件
	                 text : '重置',
	                 handler : function() {
	                        simpleForm_Query.form.reset();
	                        simpleForm_Save.collapse();
	                       // window.location.href="";
	                        //window.location.href='zyjhsqAdd.jsp';
	                 }
	          }]
       });
    
    
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items:[simpleForm_Save,simpleForm_Query,simple_Grid]		
	}); 
	 
  })
  
  

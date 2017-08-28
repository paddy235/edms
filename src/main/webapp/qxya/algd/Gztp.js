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

function tpshow(path)
{
	//alert("3"+path);
	document.getElementById ("custom").src="../Images/"+path;
	customEl.center();
	customEl.show(true);
};
function tphide()
{
	customEl.hide(true);
};


Ext.onReady(function(){

    Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var bd = Ext.getBody();
    var albm=document.getElementById ("tpalbm").value;
    
    /*
     * ================  案例查询表单 =======================
    */
    //渲染返回html代码
 	 var renderTpXs =function(value)
 	 {
 	 	 return '<a href=javascript:tpshow("'+value+'");>显示</a>';  
 	     //return '<a href="#" mce_href="#" onclick="return tpshow('+value+');">显示</a>';   
 	 };
 	 var renderDel =function(value)
 	 {
 	     return '<a  href="GztpDel.jsp?id='+value+'&albm='+albm+'">删除</a>';
 	 };
 	 
 	 //定义Grid表头
   	 var columns = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
         new Ext.grid.RowNumberer(),
        //{header:'序号',dataIndex:'id',width:40,sortable:true,fixed:true},
        {header:'图片名称',dataIndex:'tpmc',width:100,sortable:true},
        {header:'图片类型',dataIndex:'sxmc',width:100,sortable:true},
        {header:'图片描述',dataIndex:'tpms',width:600,sortable:true},
        {header:'上传时间',dataIndex:'scsj',width:130,sortable:true},
        {header:'图片显示',dataIndex:'tplj',width:60,renderer:renderTpXs,fixed:true},
       // {header:'详细',dataIndex:'id',width:60,renderer:renderXiangxi,fixed:true},
        {header:'删除',dataIndex:'tplj',width:60,renderer:renderDel,fixed:true}
     ]);
     
     var planRecord = Ext.data.Record.create([
    	{name:'id',type:'int'},
    	{name:'tpmc',type:'string'},
    	{name:'tplx',type:'string'},
    	{name:'tpms',type:'string'},
    	{name:'tplj',type:'string'},
    	{name:'scsj',type:'string'},
    	{name:'albm',type:'string'},
    	{name:'sxmc',type:'string'},
    	{name:'sjc',type:'string'}
     ]);
     
     //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
	 var store = new Ext.data.Store({
     	//proxy告诉我们从哪里获得数据
     	proxy: new Ext.data.HttpProxy({url:'GztpLssj.jsp?albm='+albm}),        
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
        //title: '历史事故图片',
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
        //width:1000,
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
    simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
    	// simpleForm_Query.collapse();
    	simpleForm_Save.expand();
    	simpleForm_Save.buttons[0].setVisible(false);
    	simpleForm_Save.buttons[1].setVisible(true);
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	//alert(rowIndex);
    	//alert(record.get('albm'));
    	simpleForm_Save.getForm().loadRecord(record);
    });	

    //grid.render();//渲染表格
    Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
	// form start        
    
    var TPLX_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select sxid,sxmc from J_GDGY_SXZD  where sxid>010000 and sxid<011000'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	TPLX_store.load();
    
	var simpleForm_Save = new Ext.FormPanel({
        renderTo : document.body,
        title: '案例归档---->新增事故图片',
        labelAlign : 'left',
        bodyStyle:'padding:5px 5px 0',
        labelWidth: 60, 
        collapsible:true,
        titleCollapse:true,
        method:'POST',
        frame:true,
        autoWidth:true, 
        fileUpload: true,
        items : [{
                    layout : 'column',
                    border : false,
                	items:[{xtype:'hidden',name:'id',id:'tp_id'},{xtype:'hidden',name:'albm'},{
                    	columnWidth:.5,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '图片名称',
                    		name: 'tpmc',
                    		id:'tpmc_id',
                    		allowBlank : false,
                    		anchor:'95%'
                		}]
                	},{
                		columnWidth:.5,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',
                       		store : TPLX_store,
                        	valueField : "value",
                        	displayField : "text",
                        	mode : 'local',
                        	//forceSelection : true,
                        	blankText : '请选择类型',
                        	emptyText : '选择图片类型',
                        	hiddenName : 'tplx',
                        	editable : false,
                        	triggerAction : 'all',
                        	allowBlank : false,
                        	fieldLabel : '图片类型',
                        	name : 'tplx',
                        	id:'tplx_id',
                        	anchor : '95%'
    					}]	
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'textarea',
                            fieldLabel : '图片描述',
                            name : 'tpms',
                            anchor : '97%',
                            id:'tpms_id',
                            height:45
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                		layout: 'form',
                		border:false,
                		//fileUpload: true,
                		items: [{
                    		xtype: 'fileuploadfield',
            				anchor: '97%',
            				allowBlank: false,
           					msgTarget: 'side',
            				emptyText: '请选择图片',
           					fieldLabel: '图片上传',
            				name: 'tplj',
            				id:'tplj_id',
            				buttonText: '',
            				buttonCfg: {
                				iconCls: 'upload-icon'
            				}
                		}]
                	}]
                }],
         buttons: [{
            text: '新增',
             handler : function() {
                  if (!simpleForm_Save.form.isValid()) {return };
                  if (simpleForm_Save.form.isValid()) {
                  	 //if(tppath.substr(tppath.length - 4,4).toLowerCase() != ".jpg")
                  	 //{
                  	 //	Ext.Msg.alert("提示","只能上传jpg格式的文件！");   
                	 //	return; 
                  	 //}
                  	 var tpms_id =Ext.getCmp("tpms_id").getValue();
                  	 var tplx_id =Ext.getCmp("tplx_id").getValue();
                  	 var tpmc_id =Ext.getCmp("tpmc_id").getValue();
                  	 var tplj_id =Ext.getCmp("tplj_id").getValue();
                     simpleForm_Save.form.doAction('submit', {
                                                 	waitMsg:'保存中,请稍侯...',  
                                                    url : 'GztpSave.jsp?albm='+albm+'&tpms_id='+tpms_id+'&tplx_id='+tplx_id+'&tpmc_id='+tpmc_id+'&tplj_id='+tplj_id,
                                                    method : 'post',
                                                    params : '',
                                                    success : function(form, action) {
                                                            Ext.Msg.alert('消息',action.result.msg);
                                                            simple_Grid.getStore().reload();
                                                    },
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
 
           			//if(tppath.substr(tppath.length - 4,4).toLowerCase() != ".jpg")
                  	//{
                  	// 	Ext.Msg.alert("提示","只能上传jpg格式的文件！");   
                	//	return; 
                  	// }
                  	var tp_id =Ext.getCmp("tp_id").getValue();
                  	var tpms_id =Ext.getCmp("tpms_id").getValue();
                  	var tplx_id =Ext.getCmp("tplx_id").getValue();
                  	var tpmc_id =Ext.getCmp("tpmc_id").getValue();
                  	var tplj_id =Ext.getCmp("tplj_id").getValue();
                	simpleForm_Save.form.doAction('submit', {
                                               waitMsg:'修改中,请稍侯...',  
                                               url : 'GztpUpdate.jsp?tpms_id='+tpms_id+'&tplx_id='+tplx_id+'&tpmc_id='+tpmc_id+'&tplj_id='+tplj_id+'&tp_id='+tp_id,
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		simpleForm_Save.buttons[0].setVisible(true);
                                               		simple_Grid.getStore().reload();
                                               		Ext.Msg.alert('消息',action.result.msg);
                                               },
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
                   simpleForm_Save.form.reset();
                   simpleForm_Save.buttons[0].setVisible(true);
                   simpleForm_Save.buttons[1].setVisible(false);
             }
        },{
            text: '添加影音',
           handler : function() {
           		window.location.href='Gzyy.jsp?albm='+albm;
           		//window.alert("albm:"+albm);
             }
        },{
            text: '返回',
           handler : function() {
           		window.location.href='Algd.jsp';
             }
        }]
      });
	
	 var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Save,simple_Grid]
	});
	//simpleForm_Save.collapse();
	simpleForm_Save.buttons[1].setVisible(false);
  });
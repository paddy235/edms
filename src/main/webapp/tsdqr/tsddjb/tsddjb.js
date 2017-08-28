function sound() {
	//alert(path);
	player.innerHTML='<EMBED src="vedio/msg.wav" ShowStatusBar=1 AUTOSTART=true></EMBED>';
}
Ext.onReady(function() {
	
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var bd = Ext.getBody();
    var DWJB=document.getElementById ("DWJB").value;
    var DWDM=document.getElementById ("DWDM").value;
    var YHMC=document.getElementById ("YHMC").value;
    sound();

    
	var renderzt1 =function(value)
 	{
 	    if (value=='0')  
  		{
  			return "<span style='color:red;font-weight:bold;'>电调待发送</span>";
  		}
 	 	else if(value=="1")
 	 	{
 	 		return "<span style='color:blue;font-weight:bold;'>电调停电计划已发送、行调未签收</span>";
 	 	}
 	 	else if (value=='2')  
  	    {
  	    	return "<span style='color:green;font-weight:bold;'>电调停电计划已发送、行调未签认</span>";
  	    }
 	 	else if(value=="3")
 	 	{
 	 		return "<span style='color:red;font-weight:bold;'>停电计划行调已签认、电调未签收</span>";
 	 	}
 	 	else if(value=="4")
 	 	{
 	 		return "<span style='color:red;font-weight:bold;'>送电时间电调待发送</span>";
 	 	}
 	 	else if(value=="5")
 	 	{
 	 		return "<span style='color:blue;font-weight:bold;'>送电时间电调已发送、行调未签收</span>";
 	 	}
 	 	else if(value=="6")
 	 	{
 	 		return "<span style='color:green;font-weight:bold;'>送电时间电调已发送、行调未签认</span>";
 	 	}
 	 	else if(value=="7")
 	 	{
 	 		 return "<span style='color:red;font-weight:bold;'>送电时间行调已签认、电调未签收</span>";
 	 	}
 	 	else if(value=="8")
 	 	{
 	 		return "<span style='color:black;font-weight:bold;'>送电时间行调已签认、电调已签收</span>";
 	 	}
 	 };

    //定义Grid表头
    var tsbcolumns = new Ext.grid.ColumnModel([       
        new Ext.grid.RowNumberer(),
        {header:'日期',dataIndex:'TSDRQ',width:80,sortable:true,fixed:true},
        {header:'区间、地点',dataIndex:'QJDD',width:100,sortable:true},
        {header:'停电单元',dataIndex:'TDDY',width:220,sortable:true},
        {header:'停电时分',dataIndex:'QZSJ',width:60,sortable:true,fixed:true},
        {header:'供电调度员',dataIndex:'T_GDDDY',width:80,sortable:true,fixed:true},
        //{header:'停电时间',dataIndex:'LD_TDQZSJ',width:60,sortable:true},
        //{header:'送电时间',dataIndex:'LD_TDQZSJ1',width:60,sortable:true},
        //{header:'列车调度员',dataIndex:'LD_DDY',width:80,sortable:true},
        //{header:'送到时分',dataIndex:'SD_SF',width:80,sortable:true},
        //{header:'供电调度员',dataIndex:'SD_GDDDY',width:80,sortable:true},
        //{header:'列车调度员',dataIndex:'SD_LCDDY',width:80,sortable:true},
        {header:'备考',dataIndex:'BK',width:60,sortable:true},
        {header:'状态',dataIndex:'ZT',width:210,renderer:renderzt1,fixed:true}
    ]);
   
    var tsbplanRecord = Ext.data.Record.create([
    	{name:'TDSBH',type:'int'},
    	{name:'TSDRQ',type:'string'},
    	{name:'QJDD',type:'string'},
    	{name:'TDDY',type:'string'},
    	{name:'QZSJ',type:'string'},
    	{name:'T_GDDDY',type:'string'},
    	{name:'LD_TDQZSJ',type:'string'},
    	{name:'LD_TDQZSJ1',type:'string'},
    	{name:'LD_DDY',type:'string'},
    	{name:'SD_SF',type:'string'},
    	{name:'SD_GDDDY',type:'string'},
    	{name:'SD_LCDDY',type:'string'},
    	{name:'BK',type:'string'},
    	{name:'ZT',type:'string'}
    	]);
    	
    var tsbstore = new Ext.data.Store({
        proxy: new Ext.data.HttpProxy({url:'tsb_json.jsp'}), 
        baseParams:{whereclause:'1=1'},//点击翻页的时候，这个值不会消失，作为基本参数，只有点击查询按钮时才会改变       
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },tsbplanRecord)
    });
	tsbstore.load({params:{start:0, limit:6}});
    
    //定义表格面板,指定列模型，仓库，选择模型(默认行选择模型)
    var tsbsimple_Grid = new Ext.grid.GridPanel({
        //title : '停送电登记簿列表',
        store:tsbstore,
    	cm: tsbcolumns,
    	sm: new Ext.grid.RowSelectionModel({singleSelcet:true}),
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
            pageSize: 6,
            store: tsbstore,
            displayInfo: true,
            displayMsg: '第 {0} 条到 {1} 条,共 {2} 条',
            emptyMsg: "无记录"
        })

    });
    
    tsbsimple_Grid.addListener('rowclick', function(tsbsimple_Grid,rowIndex,event){
    	tsbsimpleForm_Save.expand();
    	tsbsimpleForm_Save.buttons[0].setVisible(false);
    	var record=tsbsimple_Grid.getStore().getAt(rowIndex);
    	tsbsimpleForm_Save.getForm().loadRecord(record);
    	var zt=record.get('ZT');
    	if(zt=="0")
    	{
       	 	tsbsimpleForm_Save.buttons[1].setVisible(true);
        	tsbsimpleForm_Save.buttons[3].setVisible(true);
        	tsbsimpleForm_Save.buttons[4].setVisible(true);
        }
        else
        {
        	tsbsimpleForm_Save.buttons[1].setVisible(false);
        	tsbsimpleForm_Save.buttons[3].setVisible(false);
        	tsbsimpleForm_Save.buttons[4].setVisible(false);
        }
    	
    });	
    
    var simpleForm_Query = new Ext.FormPanel({
		//renderTo : document.body,
       	title: '停送电登记簿--查询',
        labelAlign : 'left',
        bodyStyle:'padding:5px 5px 0',
        labelWidth: 60, 
        collapsible:true,
        titleCollapse:true,
        method:'POST',
        frame:true,
        autoWidth:true,
        //width: 1000,
        items : [{
            layout : 'column',// columnlayout
            border : false,// 没有边框
            items : [{
                columnWidth : .33,
                layout : 'form',
                border : false,
                items : [{
                    xtype:'datefield',
                    fieldLabel: '开始日期',
                    name: 'ksrq',
                    id: 'ksrq',
                    anchor:'95%',
                    format:'Y-m-d',
                    value:new Date(), 
                    allowBlank : false
                    //format:'Y-m-d H:i:s',
    				//timePicker:true
                }]
            }, {
               columnWidth : .33,
               layout : 'form',
               border : false,
               items : [{
                   xtype:'datefield',
                   fieldLabel: '结束日期',
                   name: 'jsrq',
                   id: 'jsrq',
                   anchor:'95%',
                   format:'Y-m-d',
                   value:new Date(), 
                   allowBlank : false
                }]
            },{
              columnWidth : .33,
              layout : 'form',
              border : false,
              items: [{
                    		xtype : 'combo',
                        	store : new Ext.data.SimpleStore({
                        		fields : ["returnValue", "displayText"],
                        		data : [['', '全部'],['0', '电调待发送'],
                                   		['1', '电调停电计划已发送、行调未签收'],['2', '电调停电计划已发送、行调未签认'],
                                   		['3', '停电计划行调已签认、电调未签收'],['4', '送电时间电调待发送'],
                                   		['5', '送电时间电调已发送、行调未签收'],['6', '送电时间电调已发送、行调未签认'],
                                   		['7', '送电时间行调已签认、电调未签收'],['8', '送电时间行调已签认、电调已签收']
                                   		]
                        	}),
                        	valueField : "returnValue",
                        	displayField : "displayText",
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择状态',
                        	emptyText : '选择状态',
                        	hiddenName : 'ztbzcx',
                        	editable : false,
                        	triggerAction : 'all',
                        	//allowBlank : false,
                        	fieldLabel : '状态',
                        	name : 'ztbzcx',
                        	id : 'ztbzcx_id',
                        	anchor : '95%'
    			}]
              }]
			}
           ],
            buttons : [{
              buttonlAlign : 'right',
               text : '查询',
               handler : function() {
              
                    if (!simpleForm_Query.form.isValid()) {return };
                    if (simpleForm_Query.form.isValid()) {
                     	var where=" 1=1 ";												
						if(Ext.getCmp("ksrq").getValue()!="" ){
							where=where+" and trunc(TSDRQ)>=to_date('"+Ext.util.Format.date(Ext.getCmp("ksrq").getValue(), 'Y-m-d')+"','yyyy-mm-dd')";	
						}
						if(Ext.getCmp("jsrq").getValue()!="" ){
							where=where+" and trunc(TSDRQ)<=to_date('"+Ext.util.Format.date(Ext.getCmp("jsrq").getValue(), 'Y-m-d')+"','yyyy-mm-dd')";	
						}
						if(Ext.getCmp("ztbzcx_id").getValue()!='' && Ext.getCmp("ztbzcx_id").getValue()!='ALL'){
							where=where+" and ZT='"+Ext.getCmp("ztbzcx_id").getValue()+"' ";
						}
						tsbstore.baseParams.whereclause = where;
						
						tsbsimple_Grid.getStore().reload({ 
							params : { 
							start : 0, 
							limit : 6
							} 
						});
       			}
			}
          }, {

                                   // 取消按钮就是简单的reset一下form的控件
                                   text : '查看报表',
                                   handler : function() {
                                        var kssj=Ext.util.Format.date(Ext.getCmp("ksrq").getValue(), 'Y-m-d');
                                        var jssj=Ext.util.Format.date(Ext.getCmp("jsrq").getValue(), 'Y-m-d');
                                        var zt=Ext.getCmp("ztbzcx_id").getValue();
                                        ryshow(kssj,jssj,zt);
                                         //window.location.href='../../tjbb/query/dfddmljl.jsp';
                                         
                                   }
                            }]
       });
    
    
    var tsbsimpleForm_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '停送电登记簿--新增',
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
                       items : [{xtype:'hidden',name:'TDSBH',id:'TDSBH'},{xtype:'hidden',name:'ZT'},{
                                            columnWidth : .33,
                                            layout : 'form',
                                            border : false,
                                            items : [{
			                                             xtype : 'datefield',// 控件的类型为datefield
			                                             fieldLabel : '日期',
			                                             name : 'TSDRQ',
			                                             //value: new Date,
			                                             anchor : '90%',
			                                             format:'Y-m-d',
			                                             allowBlank : false
			                                      }]
                                     },{
                                            columnWidth : .33,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// 控件的类型为datefield
                                                         fieldLabel : '停电时分',
                                                         anchor : '90%',
                                                         name : 'QZSJ'
                                                       //  format:'Y-m-d'
                                                         //allowBlank : false// 该选项值不允许为空
                                                  }]
                                     },{
                                            columnWidth : .33,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// 控件的类型为datefield
                                                         fieldLabel : '供电调度员',
                                                         anchor : '90%',
                                                         name : 'T_GDDDY',
                                                         value:YHMC
                                                       //  format:'Y-m-d'
                                                         //allowBlank : false// 该选项值不允许为空
                                                  }]
                                     },{
                                            columnWidth : .99,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// 控件的类型为datefield
                                                         fieldLabel : '区间、地点',
                                                         name : 'QJDD',
                                                         anchor : '97%',
                                                       //  format:'Y-m-d'
                                                         allowBlank : false// 该选项值不允许为空
                                                  }]
                                     },{
                                            columnWidth : .99,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textarea',// 控件的类型为datefield
                                                         fieldLabel : '停电单元',
                                                         name : 'TDDY',
                                                         anchor : '97%',
                                                         height:'80',
                                                       //  format:'Y-m-d'
                                                         allowBlank : false// 该选项值不允许为空
                                                  }]
                                     },{
                                            columnWidth : .99,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// 控件的类型为datefield
                                                         fieldLabel : '备考',
                                                         anchor : '97%',
                                                         name : 'BK'
                                                       //  format:'Y-m-d'
                                                         //allowBlank : false// 该选项值不允许为空
                                                  }]
                                     }]

                            }],
              // 为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
        buttons: [{
            text: '新增',
             handler : function() {
                  if (!tsbsimpleForm_Save.form.isValid()) {return };
                  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                  if (tsbsimpleForm_Save.form.isValid()) {
                     // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                     //this.disabled = true;
                     // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                     tsbsimpleForm_Save.form.doAction('submit', {
                                         					  waitMsg:'保存中,请稍侯...',  
                                                              url : 'tsddjb_Save.jsp',
                                                              method : 'post',
                                                              params : '',
                                                              // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                                                              // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                                                              success : function(form, action) {
                                                                     // 例如返回的json结构是"{success:true,data:'成功保存！'}"，
                                                                     //Ext.Msg.alert('操作',action.result.data);
                                                              		 Ext.Msg.alert('消息',action.result.msg);
                                                              		//tsbsimpleForm_Save.form.reset();
                                                              		tsbsimpleForm_Save.buttons[4].setVisible(false);
                                                              		tsbsimple_Grid.getStore().reload();
                                                              		
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
            	if (!tsbsimpleForm_Save.form.isValid()) {return };
           		if (tsbsimpleForm_Save.form.isValid()) {
                	tsbsimpleForm_Save.form.doAction('submit', {
                                               waitMsg:'修改中,请稍侯...',  
                                               url : 'tsddjb_Update.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		tsbsimpleForm_Save.buttons[0].setVisible(true);
                                               		tsbsimpleForm_Save.buttons[4].setVisible(false);
                                               		tsbsimple_Grid.getStore().reload();
                                               		Ext.Msg.alert('消息',action.result.msg);
                                               		
                                               },
                                               failure : function() {
                                                     Ext.Msg.alert('操作', '修改失败！');
                                                     this.disabled = false;
                                               }
            		});
           		 }
             }
         },{
             // 取消按钮就是简单的reset一下form的控件
             text : '重置',
             handler : function() {
                   tsbsimpleForm_Save.form.reset();
                   tsbsimpleForm_Save.buttons[0].setVisible(true);
                   tsbsimpleForm_Save.buttons[1].setVisible(false);
             }
        }, {
            text : '删除',
            Enabled:false,
            handler : function() {
            	if (!tsbsimpleForm_Save.form.isValid()) {return };
           		if (tsbsimpleForm_Save.form.isValid()) {
                	tsbsimpleForm_Save.form.doAction('submit', {
                                               waitMsg:'删除中,请稍侯...',  
                                               url : 'tsddjb_Del.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		tsbsimple_Grid.getStore().reload();
                                               		Ext.Msg.alert('消息',action.result.msg);
                                               		
                                               },
                                               failure : function() {
                                                     Ext.Msg.alert('操作', '删除失败！');
                                                     this.disabled = false;
                                               }
            		});
           		 }
             }
         },{
             text : '发送行调',
             handler : function() {
            	if (!tsbsimpleForm_Save.form.isValid()) {return };
           		if (tsbsimpleForm_Save.form.isValid()) {
                	tsbsimpleForm_Save.form.doAction('submit', {
                                               waitMsg:'发送中,请稍侯...',  
                                               url : 'tsddjbfa_Update.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		tsbsimple_Grid.getStore().reload();
                                               		Ext.Msg.alert('消息',action.result.msg);
                                               		//window.location.href='../../xdhq/xdhq.jsp';
                                               },
                                               failure : function() {
                                                     Ext.Msg.alert('操作', '修改失败！');
                                                     this.disabled = false;
                                               }
            		});
           		 }
             }
        }]
    });
 
 //================   	
    var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		items: [tsbsimpleForm_Save,simpleForm_Query,tsbsimple_Grid]
		
	});
	tsbsimpleForm_Save.buttons[1].setVisible(false);
	tsbsimpleForm_Save.buttons[3].setVisible(false);
	tsbsimpleForm_Save.buttons[4].setVisible(false);
	//tsbsimpleForm_Save.collapse();
	
	
	    //simpleForm_Save.collapse();
         this.ryshow=function(kssj,jssj,zt){
		//alert("kssj"+kssj+"jssj"+jssj);
		
    	win1 = new Ext.Window({
        	width:document.body.clientWidth-20,
        	height:document.body.clientHeight-10,
        	layout:'column',
       		title: '地方调度命令记录',
        	closeAction:'hide',
        	plain: true,
        	autoScroll:false,
        	html:'<iframe style="width:100%;height:100%" src="../../tjbb/query/tsddjb.jsp?kssj='+kssj+'&jssj='+jssj+'&zt='+zt+'"></iframe>'
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
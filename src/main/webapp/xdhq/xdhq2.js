function sound() {
	//alert(path);
	player.innerHTML='<EMBED src="vedio/msg.wav" ShowStatusBar=1 AUTOSTART=true></EMBED>';
}
Ext.onReady(function() {
	
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../extjs-3.0/resources/images/default/s.gif';
    var bd = Ext.getBody();
    var DWJB=document.getElementById ("DWJB").value;
    var DWDM=document.getElementById ("DWDM").value;
	var YHMC=document.getElementById ("YHMC").value;
	var YYYHMC="";
    
	var renderzt1 =function(value)
 	{
 	    if (value=='0')  
  		{
  			return "<span style='color:red;font-weight:bold;'>电调待发送</span>";
  		}
 	 	else if(value=="1")
 	 	{
 	 		if(DWJB=="7")
 	 		{
 	 		   sound();
 	 		   return "<span style='color:blue;font-weight:bold;'>电调停电计划已发送、行调未签收</span>";
 	 		}
 	 		else
 	 		{
 	 			return "<span style='color:blue;font-weight:bold;'>电调停电计划已发送、行调未签收</span>";
 	 		}
 	 	}
 	 	else if (value=='2')  
  	    {
  	    	if(DWJB=="7")
 	 		{
  	    		return "<span style='color:red;font-weight:bold;'>电调停电计划已发送、行调未签认</span>";
  	    	}
  	    	else
  	    	{
  	    		return "<span style='color:green;font-weight:bold;'>电调停电计划已发送、行调未签认</span>";
  	    	}
  	    }
 	 	else if(value=="3")
 	 	{
 	 		if(DWJB=="3")
 	 		{
 	 		   sound();
 	 		   return "<span style='color:red;font-weight:bold;'>停电计划行调已签认、电调未签收</span>";
 	 		}
 	 		else
 	 		{
 	 			return "<span style='color:green;font-weight:bold;'>停电计划行调已签认、电调未签收</span>";
 	 		}
 	 	}
 	 	else if(value=="4")
 	 	{
 	 		if(DWJB=="3")
 	 		{
 	 			return "<span style='color:red;font-weight:bold;'>送电时间电调待发送</span>";
 	 		}
 	 		else
 	 		{
 	 			return "<span style='color:black;font-weight:bold;'>停电计划行调已签认、电调已签收</span>";
 	 		}
 	 	}
 	 	else if(value=="5")
 	 	{
 	 		if(DWJB=="7")
 	 		{
 	 		   sound();
 	 		   return "<span style='color:blue;font-weight:bold;'>送电时间电调已发送、行调未签收</span>";
 	 		}
 	 		else
 	 		{
 	 			return "<span style='color:blue;font-weight:bold;'>送电时间电调已发送、行调未签收</span>";
 	 		}
 	 	}
 	 	else if(value=="6")
 	 	{
 	 		if(DWJB=="7")
 	 		{
 	 			return "<span style='color:red;font-weight:bold;'>送电时间电调已发送、行调未签认</span>";
 	 		}
 	 		else
 	 		{
 	 			return "<span style='color:green;font-weight:bold;'>送电时间电调已发送、行调未签认</span>";
 	 		}
 	 	}
 	 	else if(value=="7")
 	 	{
 	 		if(DWJB=="3")
 	 		{
				sound();
 	 		    return "<span style='color:red;font-weight:bold;'>送电时间行调已签认、电调未签收</span>";
 	 		}
 	 		else
 	 		{
 	 			return "<span style='color:green;font-weight:bold;'>送电时间行调已签认、电调未签收</span>";
 	 		}
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
        {header:'电调台',dataIndex:'DDTMC',width:120,sortable:true},
        //{header:'停电单元',dataIndex:'TDDY',width:120,sortable:true},
        //{header:'停电时分',dataIndex:'QZSJ',width:60,sortable:true,fixed:true},
        {header:'供电调度员',dataIndex:'T_GDDDY',width:60,sortable:true},
        {header:'行调台',dataIndex:'XDTMC',width:120,sortable:true},
        //{header:'停电时间',dataIndex:'LD_TDQZSJ',width:120,sortable:true},
        //{header:'送电时间',dataIndex:'LD_TDQZSJ1',width:120,sortable:true},
        {header:'列车调度员',dataIndex:'LD_DDY',width:60,sortable:true},
        {header:'送电时分',dataIndex:'SD_SF',width:120,sortable:true},
        {header:'供电调度员',dataIndex:'SD_GDDDY',width:60,sortable:true},
        {header:'列调签认时间',dataIndex:'xdqrsj',width:120,sortable:true},
        {header:'电调签认时间',dataIndex:'ddqrsj',width:120,sortable:true},
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
    	
    	{name:'XDTMC',type:'string'},
    	{name:'DDTMC',type:'string'},
    	{name:'xdqrsj',type:'string'},
    	{name:'ddqrsj',type:'string'},
    	{name:'ZT',type:'string'}
    	]);
    	
    var tsbstore = new Ext.data.Store({
        proxy: new Ext.data.HttpProxy({url:'tsb_json.jsp'}), 
        baseParams:{whereclause:' zt!='+'0'},//点击翻页的时候，这个值不会消失，作为基本参数，只有点击查询按钮时才会改变       
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },tsbplanRecord)
    });
	tsbstore.load({params:{start:0, limit:6}});
    
    //定义表格面板,指定列模型，仓库，选择模型(默认行选择模型)
    var tsbsimple_Grid = new Ext.grid.GridPanel({
    	title : '停送电登记簿列表',
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
    	var record=tsbsimple_Grid.getStore().getAt(rowIndex);
    	tsbsimpleForm_Save.getForm().loadRecord(record);
    	var zt=record.get('ZT');
    	
    	if(DWJB=="7")
 	 	{
 	 		if(zt=="1"||zt=="2"||zt=="5"||zt=="6")
 	 		{
	 	 		tsbsimpleForm_Save.buttons[0].setVisible(false);
	    		tsbsimpleForm_Save.buttons[1].setVisible(true);
	    		tsbsimpleForm_Save.buttons[2].setVisible(false);
	    	}
	    	else
	    	{
	    		tsbsimpleForm_Save.buttons[0].setVisible(false);
        		tsbsimpleForm_Save.buttons[1].setVisible(false);
        		tsbsimpleForm_Save.buttons[2].setVisible(false);
	    	}
	    	
	    	if(zt=="2"||zt=="6")
	    	{
	    		tsbsimpleForm_Save.buttons[1].setText("行调签认");
	    	}
	    	else if(zt=="5")
	    	{
	    		tsbsimpleForm_Save.buttons[1].setText("行调签收");
	    	}
	    	
	    	if(zt=="2")
	    	{
	    		//Ext.getCmp("ID_LD_TDQZSJ").getEl().dom.allowBlank=false;
		   		Ext.getCmp("ID_LD_TDQZSJ").setValue(getTime());
		   		Ext.getCmp("ID_LD_TDQZSJ1").setValue(getTime());
		   		Ext.getCmp("ID_LD_DDY").setValue(YHMC);
	    	}
	    	if(zt=="6")
	    		Ext.getCmp("ID_SD_LCDDY").setValue(YHMC);
 	 	}	 
 	 	else if(DWJB=="3")
 	 	{
 	 		if(zt=="3"||zt=="4"||zt=="7")
 	 		{
	 	 		tsbsimpleForm_Save.buttons[0].setVisible(true);
	    		tsbsimpleForm_Save.buttons[1].setVisible(false);
	    	}
	    	else
	    	{
	    		tsbsimpleForm_Save.buttons[0].setVisible(false);
        		tsbsimpleForm_Save.buttons[1].setVisible(false);
	    	}
	    	
	    	if(zt=="4")
	    	{
	    		Ext.getCmp("ID_SD_SF").setValue(getTime());
	    		Ext.getCmp("ID_SD_GDDDY").setValue(YHMC);
	    		tsbsimpleForm_Save.buttons[0].setText("发送行调");
	    	}
	    	if(zt=="7")
	    	{
	    		tsbsimpleForm_Save.buttons[0].setText("电调签收");
	    	}
 	 	}
 	 	else
 	 	{
 	 		tsbsimpleForm_Save.buttons[0].setVisible(false);
        	tsbsimpleForm_Save.buttons[1].setVisible(false);
 	 	}
    	
    	//*
    	if(zt=="2")
    	{
       	 	//Ext.getCmp("ID_LD_TDQZSJ").enable();
       	 	
       	 	Ext.getCmp("ID_LD_TDQZSJ").getEl().dom.readOnly=false;
		    Ext.getCmp("ID_LD_TDQZSJ1").getEl().dom.readOnly=false;
		    Ext.getCmp("ID_LD_DDY").getEl().dom.readOnly=false;
		    Ext.getCmp("ID_BK").getEl().dom.readOnly=false;
		    
		    Ext.getCmp("ID_SD_SF").getEl().dom.readOnly=true;
		    Ext.getCmp("ID_SD_GDDDY").getEl().dom.readOnly=true;
		    Ext.getCmp("ID_SD_LCDDY").getEl().dom.readOnly=true;
        }
        else if(zt=="4")
        {
        	Ext.getCmp("ID_LD_TDQZSJ").getEl().dom.readOnly=true;
		    Ext.getCmp("ID_LD_TDQZSJ1").getEl().dom.readOnly=true;
		    Ext.getCmp("ID_LD_DDY").getEl().dom.readOnly=true;
		    Ext.getCmp("ID_SD_LCDDY").getEl().dom.readOnly=true;
        	
        	Ext.getCmp("ID_SD_SF").getEl().dom.readOnly=false;
		    Ext.getCmp("ID_SD_GDDDY").getEl().dom.readOnly=false;
		    Ext.getCmp("ID_BK").getEl().dom.readOnly=false;
		    
        }
        else if(zt=="6")
        {
        	Ext.getCmp("ID_LD_TDQZSJ").getEl().dom.readOnly=true;
		    Ext.getCmp("ID_LD_TDQZSJ1").getEl().dom.readOnly=true;
		    Ext.getCmp("ID_LD_DDY").getEl().dom.readOnly=true;
        	Ext.getCmp("ID_SD_SF").getEl().dom.readOnly=true;
		    Ext.getCmp("ID_SD_GDDDY").getEl().dom.readOnly=true;
		   
        	Ext.getCmp("ID_SD_LCDDY").getEl().dom.readOnly=false;
        	Ext.getCmp("ID_BK").getEl().dom.readOnly=false;
        }
        else
        {
        	Ext.getCmp("ID_LD_TDQZSJ").getEl().dom.readOnly=true;
		    Ext.getCmp("ID_LD_TDQZSJ1").getEl().dom.readOnly=true;
		    Ext.getCmp("ID_LD_DDY").getEl().dom.readOnly=true;
        	Ext.getCmp("ID_SD_SF").getEl().dom.readOnly=true;
		    Ext.getCmp("ID_SD_GDDDY").getEl().dom.readOnly=true;
        	Ext.getCmp("ID_SD_LCDDY").getEl().dom.readOnly=true;
        	Ext.getCmp("ID_BK").getEl().dom.readOnly=true;
        }
        //*/
        
    	
    });	
    
    var tsbsimpleForm_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '停送电登记簿--会签',
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
			                                             readOnly:true,
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
                                                         readOnly:true,
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
                                                         readOnly:true,
                                                         name : 'T_GDDDY'
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
                                                         readOnly:true,
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
                                                         readOnly:true,
                                                         height:'80',
                                                       //  format:'Y-m-d'
                                                         allowBlank : false// 该选项值不允许为空
                                                  }]
                                     },{
                                            columnWidth : .33,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'field',// 控件的类型为datefield
                                                         fieldLabel : '停电时间',
                                                         name : 'LD_TDQZSJ',
                                                         id:'ID_LD_TDQZSJ',
                                                         //disabled:true,
                                                         readOnly:true,
                                                         anchor : '90%',
                                                         listeners: {"focus": function(){
                                                         WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                         //allowBlank : false// 该选项值不允许为空
                                                  }]
                                     },{
                                            columnWidth : .33,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'field',// 控件的类型为datefield
                                                         fieldLabel : '送电时间',
                                                         name : 'LD_TDQZSJ1',
                                                         id:'ID_LD_TDQZSJ1',
                                                         readOnly:true,
                                                         anchor : '90%',
                                                         listeners: {"focus": function(){
                                                         WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                         //allowBlank : false// 该选项值不允许为空
                                                  }]
                                     },{
                                            columnWidth : .33,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// 控件的类型为datefield
                                                         fieldLabel : '列车调度员',
                                                         name : 'LD_DDY',
                                                         id:'ID_LD_DDY',
                                                         readOnly:true,
                                                         anchor : '90%'
                                                       //  format:'Y-m-d'
                                                         //allowBlank : false// 该选项值不允许为空
                                                  }]
                                     },{
                                            columnWidth : .33,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'field',// 控件的类型为datefield
                                                         fieldLabel : '送电时分',
                                                         name : 'SD_SF',
                                                         id:'ID_SD_SF',
                                                         readOnly:true,
                                                         anchor : '90%',
                                                         listeners: {"focus": function(){
                                                         WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                         //allowBlank : false// 该选项值不允许为空
                                                  }]
                                     },{
                                            columnWidth : .33,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// 控件的类型为datefield
                                                         fieldLabel : '供电调度员',
                                                         name : 'SD_GDDDY',
                                                         id:'ID_SD_GDDDY',
                                                         readOnly:true,
                                                         anchor : '90%'
                                                       //  format:'Y-m-d'
                                                       //  allowBlank : false// 该选项值不允许为空
                                                  }]
                                     },{
                                            columnWidth : .33,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// 控件的类型为datefield
                                                         fieldLabel : '列车调度员',
                                                         name : 'SD_LCDDY',
                                                         id:'ID_SD_LCDDY',
                                                         readOnly:true,
                                                         anchor : '90%'
                                                       //  format:'Y-m-d'
                                                        // allowBlank : false// 该选项值不允许为空
                                                  }]
                                     },{
                                            columnWidth : .99,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// 控件的类型为datefield
                                                         fieldLabel : '备考',
                                                         anchor : '97%',
                                                         id : 'ID_BK',
                                                         name : 'BK'
                                                       //  format:'Y-m-d'
                                                         //allowBlank : false// 该选项值不允许为空
                                                  }]
                                     }]

                            }],
              // 为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
        buttons: [{
            text: '电调签收',
            Enabled:false,
            handler : function() {
            	if (!tsbsimpleForm_Save.form.isValid()) {return };
           		if (tsbsimpleForm_Save.form.isValid()) {
                	tsbsimpleForm_Save.form.doAction('submit', {
                                               waitMsg:'发送中,请稍侯...',  
                                               url : 'tsddjb_Update.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		tsbsimpleForm_Save.collapse();
                                               		tsbsimple_Grid.getStore().reload();
                                               		Ext.Msg.alert('消息',action.result.msg);
                                               },
                                               failure : function() {
                                                     Ext.Msg.alert('操作', '发送失败！');
                                                     this.disabled = false;
                                               }
            		});
           		 }
             }
        }, {
            text : '行调签收',
            Enabled:false,
            handler : function() {
            	if (!tsbsimpleForm_Save.form.isValid()) {return };
           		if (tsbsimpleForm_Save.form.isValid()) {
                	tsbsimpleForm_Save.form.doAction('submit', {
                                               waitMsg:'签收中,请稍侯...',  
                                               url : 'tsddjb_Update.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		tsbsimpleForm_Save.collapse();
                                               		tsbsimple_Grid.getStore().reload();
                                               		Ext.Msg.alert('消息',action.result.msg);
                                               		
                                               },
                                               failure : function() {
                                                     //Ext.Msg.alert('操作', '签收失败！');
                                                     this.disabled = false;
                                               }
            		});
           		 }
             }
         },{
             text : '返回停送电登记簿',
             handler : function() {
            	 window.location.href='../yxgl/tsddjb/tsddjb.jsp';
             }
        }]
    });
  
  	tsbsimpleForm_Save.collapse();
	tsbsimpleForm_Save.buttons[0].setVisible(false);
    tsbsimpleForm_Save.buttons[1].setVisible(false);
    if(DWJB=="7")
 	{
 		tsbsimpleForm_Save.buttons[2].setVisible(false);
 	}
///////-------------------下拉列表框stor行调通知书----------------********----------------
 
    var renderzt =function(value)
 	 {
 	   
  		if (value=='1')  
  		{
  			return "<span style='color:red;font-weight:bold;'>电调待发送</span>";
  		}
  	    else if (value=='2')  
  	    {
  	    	if(DWJB=="7")
 	 		{
  	       		sound();
 	 			return "<span style='color:blue;font-weight:bold;'>电调已发送、行调未签收</span>";
 	 		}
 	 		else
 	 		{
 	 			return "<span style='color:blue;font-weight:bold;'>电调已发送、行调未签收</span>";
 	 		}
  	    }
  	    else if (value=='3')  
  	    {
  	    	if(DWJB=="7")
 	 		{
  	    		return "<span style='color:red;font-weight:bold;'>电调已发送、行调未签认</span>";
  	    	}
  	    	else
  	    	{
  	    		return "<span style='color:green;font-weight:bold;'>电调已发送、行调未签认</span>";
  	    	}
  	    }
  	    else if (value=='4')  
  	    {
  	    	if(DWJB=="3")
 	 		{
  	       		sound();
 	 			return "<span style='color:red;font-weight:bold;'>行调已签认、电调未签收</span>";
 	 		}
 	 		else
 	 		{
 	 			return "<span style='color:green;font-weight:bold;'>行调已签认、电调未签收</span>";
 	 		}
  	    }
  	    else if (value=='5')  
  	    {
 	 		return "<span style='color:black;font-weight:bold;'>行调已签认、电调已签收</span>";
  	    }
  		
 	 };    
 		
    //定义Grid表头
    var columnsX = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
        new Ext.grid.RowNumberer(),
        {header:'通知书号',dataIndex:'TZSH',width:60,sortable:true,fixed:true},
        {header:'通知日期',dataIndex:'TZRQ',width:110,sortable:true,fixed:true},
        {header:'电调台',dataIndex:'DWMC',width:70,sortable:true},
        {header:'供电调度员',dataIndex:'DDMC',width:60,sortable:true},
        {header:'行调台',dataIndex:'XDTMC',width:70,sortable:true},
        {header:'列车调度员',dataIndex:'XDMC',width:60,sortable:true},
        {header:'通知内容',dataIndex:'TZNR',width:200,sortable:true},
        {header:'状态',dataIndex:'ZT',width:160,renderer:renderzt,fixed:true,sortable:true}
        //{header:'删除',dataIndex:'TZSID',width:60,renderer:renderDel_tzsid,fixed:true}
    ]);
   
    var planRecordX = Ext.data.Record.create([
    	{name:'TZSID',type:'int'},
    	{name:'TZSH',type:'string'},
    	{name:'TZRQ',type:'string'},
    	{name:'XDTDM',type:'string'},//
    	{name:'DDMC',type:'string'},
    	{name:'XDMC',type:'string'},
    	{name:'TZNR',type:'string'},
    	{name:'DWMC',type:'string'},
    	{name:'XDTMC',type:'string'},
    	{name:'ZT',type:'string'}
    	]);
    	
    
    //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url:'xdtzs_json.jsp'}),        
        //reader告诉我们如何解析这个数据
        baseParams:{whereclause:'zt!='+'1'},
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecordX)
    });
    
	store.load({params:{start:0, limit:6}});
	
    //定义表格面板,指定列模型，仓库，选择模型(默认行选择模型)
    var simpleX_Grid = new Ext.grid.GridPanel({
        //el:指定html元素用于显示的grid
        //el: 'grid3',
        title : '通知书列表', 
        store:store,
    	cm: columnsX,
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
            pageSize: 6,
            store: store,
            displayInfo: true,
            displayMsg: '第 {0} 条到 {1} 条,共 {2} 条',
            emptyMsg: "无记录"
        })
    });
   	//Grid上触发事件
   
    simpleX_Grid.addListener('rowclick', function(simpleX_Grid,rowIndex,event){
    	simpleFormX_Save.expand();
    	var record=simpleX_Grid.getStore().getAt(rowIndex);
    	simpleFormX_Save.getForm().loadRecord(record);
    	var zt=record.get('ZT');
    	
    	if(DWJB=="7")
 	 	{
 	 		if(zt=="2"||zt=="3")
 	 		{
	 	 		simpleFormX_Save.buttons[0].setVisible(false);
	    		simpleFormX_Save.buttons[1].setVisible(true);
	    		simpleFormX_Save.buttons[2].setVisible(false);
	    	}
	    	else
	    	{
	    		simpleFormX_Save.buttons[0].setVisible(false);
        		simpleFormX_Save.buttons[1].setVisible(false);
        		simpleFormX_Save.buttons[2].setVisible(false);
	    	}
	    	
	    	if(zt=="3")
	    	{
	 	 		Ext.getCmp("ID_XDMC").getEl().dom.readOnly=false;
	 	 		simpleFormX_Save.buttons[1].setText("行调签认");
	    		Ext.getCmp("ID_XDMC").setValue(YHMC);
	    	}
 	 	}	 
 	 	else if(DWJB=="3")
 	 	{
 	 		Ext.getCmp("ID_LD_DDY").getEl().dom.readOnly=true;
 	 		if(zt=="1"||zt=="4")
 	 		{
	 	 		simpleFormX_Save.buttons[0].setVisible(true);
	    		simpleFormX_Save.buttons[1].setVisible(false);
	    	}
	    	else
	    	{
	    		simpleFormX_Save.buttons[0].setVisible(false);
        		simpleFormX_Save.buttons[1].setVisible(false);
	    	}
	    	
	    	if(zt=="4")
 	 		{
 	 			simpleFormX_Save.buttons[0].setText("电调签收");
 	 		}	
 	 	}
 	 	else
 	 	{
 	 		tsbsimpleForm_Save.buttons[0].setVisible(false);
        	tsbsimpleForm_Save.buttons[1].setVisible(false);
 	 	}
    });	


        //document.location.reload();
    	//setTimeout(alert("刷新操作!"),10000000);
       //setTimeout(simpleX_Grid.getStore().reload(),10000000);
 	  //setinterval(simpleFormX_Save.getForm().loadRecord(record),60);//每10秒钟刷新一次

     Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
      
     var xdt_store = new Ext.data.Store({
	 proxy : new Ext.data.HttpProxy({
			url : '../share/combo_list.jsp?sql=select distinct XDTDM,XDTMC from J_GYJC_XDTZD'
		}),
		reader : new Ext.data.JsonReader({root : 'root'
				},[{name : 'value',mapping : 'value'},
				   {name : 'text',mapping : 'text'}
				  ]
			)
	});
	xdt_store.load();
	 
	 // form start
	var simpleFormX_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '通知书--会签',
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
                       items : [{xtype:'hidden',name:'TZSID',id:'tzs_id'},{xtype:'hidden',name:'ZT',id:'ID_ZT'},{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
			                                             xtype : 'textfield',// 控件的类型为datefield
			                                             fieldLabel : '通知日期',
			                                             name : 'TZRQ',
			                                             id:'tz_rq',
			                                             readOnly:true,
			                                             //value: new Date,
			                                            // readOnly : true,//该属性表示不可更改
			                                             anchor : '90%',
			                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}
                                                                       },
			                                        
			                                             allowBlank : false// 该选项值不允许为空
			                                      }]
                                     },{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// 控件的类型为datefield
                                                         fieldLabel : '通知书号',
                                                         name : 'TZSH',
                                                         readOnly:true,
                                                         //readOnly : true,//该属性表示不可更改
                                                       //  format:'Y-m-d'
                                                         allowBlank : false// 该选项值不允许为空
                                                  }]
                                     },
                                     	{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// 控件的类型为datefield
                                                         fieldLabel : '供电调度员',
                                                         name : 'DDMC',
                                                         id:'dd_mc',
                                                         readOnly : true,//该属性表示不可更改
                                                         value:yh,
                                                       //  format:'Y-m-d'
                                                         allowBlank : false// 该选项值不允许
                                                  }]
                                     },{
                                        	columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
										        		xtype : 'combo',// 控件的类型设置成combo
										           		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
										            	store : xdt_store,
										            	valueField : "value",
										            	readOnly:true,
										            	displayField : "text",
										            	mode : 'local',// 数据是在本地
										            	//forceSelection : true,// 必须选择一个选项
										            	blankText : '请选择行调台',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
										            	emptyText : '选择行调台',// 在没有选择值时显示为选择学历
										            	hiddenName : 'XDTDM',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
										            	editable : false,// 该下拉列表只允许选择，不允许输入
										            	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
										            	//allowBlank : false,// 该选项值不允许为空
										            	fieldLabel : '行调台',// 控件的标题是学历
										            	name : 'XDTDM',// 再次提醒，name只是下拉列表的名称
										            	anchor : '90%',// input的宽度是90%
										            	id:'xdt',
										            	allowBlank : false
													}]
                                     },{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// 控件的类型为datefield
                                                         fieldLabel : '列车调度员',
                                                         id : 'ID_XDMC',
                                                         readOnly:true,
                                                         name : 'XDMC'
                                                       //  format:'Y-m-d'
                                                         //allowBlank : false// 该选项值不允许为空
                                                  }]
                                     },{
                                            columnWidth : .99,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textarea',// 控件的类型为datefield
                                                         fieldLabel : '通知内容',
                                                         name : 'TZNR',
                                                         anchor : '90%',
                                                         height:'80',
                                                       //  format:'Y-m-d'
                                                         allowBlank : false// 该选项值不允许为空
                                                  }]
                                     }]

                            }],
              // 为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
        buttons: [{
            text : '电调签收',
            Enabled:false,
            handler : function() {
            	if (!simpleFormX_Save.form.isValid()) {return };
           		if (simpleFormX_Save.form.isValid()) {
                	simpleFormX_Save.form.doAction('submit', {
                                               waitMsg:'发送中,请稍侯...',  
                                               url : 'xdtzs_Update.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		//simpleFormX_Save.buttons[0].setVisible(false);
                                               		simpleFormX_Save.collapse();
                                               		simpleX_Grid.getStore().reload();
                                               		Ext.Msg.alert('消息',action.result.msg);
                                               		
                                               },
                                               failure : function() {
                                                     //Ext.Msg.alert('操作', '发送失败！');
                                                     this.disabled = false;
                                               }
            		});
           		 }
             }
         },{
            text : '行调签收',
            Enabled:false,
            handler : function() {
            	if (!simpleFormX_Save.form.isValid()) {return };
           		if (simpleFormX_Save.form.isValid()) {
                	simpleFormX_Save.form.doAction('submit', {
                                               waitMsg:'签认中,请稍侯...',  
                                               url : 'xdtzs_Update.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		simpleFormX_Save.collapse();
                                               		simpleX_Grid.getStore().reload();
                                               		Ext.Msg.alert('消息',action.result.msg);
                                               		
                                               },
                                               failure : function() {
                                                     //Ext.Msg.alert('操作', '签认失败！');
                                                     this.disabled = false;
                                               }
            		});
           		 }
             }
         },{
             text : '返回行调通知书',
             handler : function() {
            	 window.location.href='../yxgl/tzs/tzs.jsp';
             }
        }]
    }); 
    
	simpleFormX_Save.collapse();
	simpleFormX_Save.buttons[0].setVisible(false);
	simpleFormX_Save.buttons[1].setVisible(false);
	if(DWJB=="7")
 	{
 		simpleFormX_Save.buttons[2].setVisible(false);
 	}

	

 ///////------******------------下拉列表框stor降弓通知通知----------------********----------------
var renderzt2 =function(value)
 	{
 	    if (value=='0')  
  		{
  			return "<span style='color:red;font-weight:bold;'>电调待发送</span>";
  		}
 	 	else if(value=="1")
 	 	{
 	 		if(DWJB=="7")
 	 		{
 	 		   sound();
 	 		   return "<span style='color:blue;font-weight:bold;'>电调降弓已发送、行调未签收</span>";
 	 		}
 	 		else
 	 		{
 	 			return "<span style='color:blue;font-weight:bold;'>电调降弓已发送、行调未签收</span>";
 	 		}
 	 	}
 	 	else if (value=='2')  
  	    {
  	    	if(DWJB=="7")
 	 		{
  	    		return "<span style='color:red;font-weight:bold;'>电调降弓已发送、行调未签认</span>";
  	    	}
  	    	else
  	    	{
  	    		return "<span style='color:green;font-weight:bold;'>电调降弓已发送、行调未签认</span>";
  	    	}
  	    }
 	 	else if(value=="3")
 	 	{
 	 		if(DWJB=="3")
 	 		{
 	 		   sound();
 	 		   return "<span style='color:red;font-weight:bold;'>行调降弓已签认、电调未签收</span>";
 	 		}
 	 		else
 	 		{
 	 			return "<span style='color:green;font-weight:bold;'>行调降弓已签认、电调未签收</span>";
 	 		}
 	 	}
 	 	else if(value=="4")
 	 	{
 	 		if(DWJB=="3")
 	 		{
 	 			return "<span style='color:red;font-weight:bold;'>电调撤弓待发送</span>";
 	 		}
 	 		else
 	 		{
 	 			return "<span style='color:black;font-weight:bold;'>行调降弓已签认、电调已签收</span>";
 	 		}
 	 	}
 	 	else if(value=="5")
 	 	{
 	 		if(DWJB=="7")
 	 		{
 	 		   sound();
 	 		   return "<span style='color:blue;font-weight:bold;'>电调撤弓已发送、行调未签收</span>";
 	 		}
 	 		else
 	 		{
 	 			return "<span style='color:blue;font-weight:bold;'>电调撤弓已发送、行调未签收</span>";
 	 		}
 	 	}
 	 	else if(value=="6")
 	 	{
 	 		if(DWJB=="7")
 	 		{
 	 			return "<span style='color:red;font-weight:bold;'>电调撤弓已发送、行调未签认</span>";
 	 		}
 	 		else
 	 		{
 	 			return "<span style='color:green;font-weight:bold;'>电调撤弓已发送、行调未签认</span>";
 	 		}
 	 	}
 	 	else if(value=="7")
 	 	{
 	 		if(DWJB=="3")
 	 		{
				sound();
 	 		    return "<span style='color:red;font-weight:bold;'>行调撤弓已签认、电调未签收</span>";
 	 		}
 	 		else
 	 		{
 	 			return "<span style='color:green;font-weight:bold;'>行调撤弓已签认、电调未签收</span>";
 	 		}
 	 	}
 	 	else if(value=="8")
 	 	{
 	 		return "<span style='color:black;font-weight:bold;'>行调撤弓已签认、电调已签收</span>";
 	 	}
 	};
 
var columns = new Ext.grid.ColumnModel([       
        new Ext.grid.RowNumberer(),
        {header:'降弓命令号',dataIndex:'mlh',width:70,sortable:true,fixed:true},
        {header:'降弓时间',dataIndex:'tzsj',width:100,sortable:true},
        {header:'降弓地点',dataIndex:'jgdd',width:80,sortable:true},
        {header:'电调台',dataIndex:'dwmc',width:110,sortable:true},
        //{header:'降弓原因',dataIndex:'jgyy',width:120,sortable:true},
        //{header:'终止位置',dataIndex:'jsjtwz',width:60,sortable:true},
       // {header:'行别',dataIndex:'xb',width:40,sortable:true},
        //{header:'准备降弓',dataIndex:'zbjg',width:60,sortable:true},
        //{header:'T降弓',dataIndex:'tjg',width:60,sortable:true},
        {header:'供电调度员',dataIndex:'ddy',width:80,sortable:true},
        {header:'行调台',dataIndex:'XDTMC',width:110,sortable:true},
        {header:'列车调度员',dataIndex:'xdy',width:80,sortable:true},
        //{header:'撤弓命令号',dataIndex:'sgmlh',width:60,sortable:true},
        {header:'撤弓时间',dataIndex:'ccsj',width:100,sortable:true},
        //{header:'供电调度员',dataIndex:'JGDDY',width:60,sortable:true},
        //{header:'列车调度员',dataIndex:'JGXDY',width:60,sortable:true},
        {header:'状态',dataIndex:'zt',width:180,renderer:renderzt2,fixed:true}
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
    	{name:'JGDDY',type:'string'},
    	{name:'JGXDY',type:'string'},
    	{name:'XDTMC',type:'string'},
    	{name:'zt',type:'string'}
    	]);
    	
    var store = new Ext.data.Store({
        proxy: new Ext.data.HttpProxy({url:'jgtzs_json.jsp'}), 
        //baseParams:{whereclause:'dwid = '+"'"+DWDM+"'"},//点击翻页的时候，这个值不会消失，作为基本参数，只有点击查询按钮时才会改变       
        baseParams:{whereclause:' zt!='+'0'},
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord)
    });
	store.load({params:{start:0, limit:6}});
    
    //定义表格面板,指定列模型，仓库，选择模型(默认行选择模型)
    var simple_Grid = new Ext.grid.GridPanel({
    	title : '降弓通知列表',
        store:store,
    	cm: columns,
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
            store: store,
            displayInfo: true,
            displayMsg: '第 {0} 条到 {1} 条,共 {2} 条',
            emptyMsg: "无记录"
        })

    });
    
       
    //Grid上触发事件
    simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
    	simpleForm_Save.expand();
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	simpleForm_Save.getForm().loadRecord(record);
    	var zt=record.get('zt');
    	if(DWJB=="7")
 	 	{
 	 		if(zt=="1"||zt=="2"||zt=="5"||zt=="6")
 	 		{
	 	 		simpleForm_Save.buttons[0].setVisible(false);
	    		simpleForm_Save.buttons[1].setVisible(true);
	    		simpleForm_Save.buttons[2].setVisible(false);
	    	}
	    	else
	    	{
	    		simpleForm_Save.buttons[0].setVisible(false);
        		simpleForm_Save.buttons[1].setVisible(false);
        		simpleForm_Save.buttons[2].setVisible(false);
	    	}
	    	
	    	if(zt=="2"||zt=="6")
	    	{
	    		simpleForm_Save.buttons[1].setText("行调签认");
	    	}
	    	else if(zt=="5")
	    	{
	    		simpleForm_Save.buttons[1].setText("行调签收");
	    	}
	    	
	    	if(zt=="2")
	    	{
		   		//Ext.getCmp("ID_LD_TDQZSJ1").setValue(getTime());
		   		Ext.getCmp("ID_xdy").setValue(YHMC);
	    	}
	    	if(zt=="6")
	    	{
	    		Ext.getCmp("ID_JGXDY").setValue(YHMC);
	    	}
 	 	}	 
 	 	else if(DWJB=="3")
 	 	{
 	 		if(zt=="3"||zt=="4"||zt=="7")
 	 		{
	 	 		simpleForm_Save.buttons[0].setVisible(true);
	    		simpleForm_Save.buttons[1].setVisible(false);
	    	}
	    	else
	    	{
	    		simpleForm_Save.buttons[0].setVisible(false);
        		simpleForm_Save.buttons[1].setVisible(false);
	    	}
	    	
	    	if(zt=="4")
	    	{
	    		Ext.getCmp("txt_sgmlh").setValue((parseInt(record.get('mlh'))+1));
	    		Ext.getCmp("txt_sgsj").setValue(getTime());
	    		Ext.getCmp("ID_JGDDY").setValue(YHMC);
	    		simpleForm_Save.buttons[0].setText("发送行调");
	    	}
	    	if(zt=="7")
	    	{
	    		simpleForm_Save.buttons[0].setText("电调签收");
	    	}
 	 	}
 	 	else
 	 	{
 	 		simpleForm_Save.buttons[0].setVisible(false);
        	simpleForm_Save.buttons[1].setVisible(false);
 	 	}
    	
    	//*
    	if(zt=="2")
    	{
       	 	//Ext.getCmp("ID_LD_TDQZSJ").enable();
		    Ext.getCmp("txt_tzsj").getEl().dom.readOnly=false;
		    Ext.getCmp("ID_xdy").getEl().dom.readOnly=false;
		    
		    Ext.getCmp("txt_sgmlh").getEl().dom.readOnly=true;
		    Ext.getCmp("txt_sgsj").getEl().dom.readOnly=true;
		    Ext.getCmp("ID_JGDDY").getEl().dom.readOnly=true;
		    Ext.getCmp("ID_JGXDY").getEl().dom.readOnly=true;
        }
        else if(zt=="4")
        {
        	Ext.getCmp("txt_tzsj").getEl().dom.readOnly=true;
		    Ext.getCmp("ID_xdy").getEl().dom.readOnly=true;
		    
		    Ext.getCmp("txt_sgmlh").getEl().dom.readOnly=false;
		    Ext.getCmp("txt_sgsj").getEl().dom.readOnly=false;
		    Ext.getCmp("ID_JGDDY").getEl().dom.readOnly=false;
		    Ext.getCmp("ID_JGXDY").getEl().dom.readOnly=true; 
        }
        else if(zt=="6")
        {
        	Ext.getCmp("txt_tzsj").getEl().dom.readOnly=true;
		    Ext.getCmp("ID_xdy").getEl().dom.readOnly=true;
		    Ext.getCmp("txt_sgmlh").getEl().dom.readOnly=true;
		    Ext.getCmp("ID_JGDDY").getEl().dom.readOnly=true;
		   
		    Ext.getCmp("txt_sgsj").getEl().dom.readOnly=false;
		    Ext.getCmp("ID_JGXDY").getEl().dom.readOnly=false; 
        }
        else
        {
        	Ext.getCmp("txt_tzsj").getEl().dom.readOnly=true;
		    Ext.getCmp("ID_xdy").getEl().dom.readOnly=true;
		    Ext.getCmp("txt_sgmlh").getEl().dom.readOnly=true;
		    Ext.getCmp("txt_sgsj").getEl().dom.readOnly=true;
		    Ext.getCmp("ID_JGDDY").getEl().dom.readOnly=true;
		    Ext.getCmp("ID_JGXDY").getEl().dom.readOnly=true;
        }
    });	

    Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
	// form start
	var simpleForm_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '降弓通知—会签',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 800,
              collapsible:true,
              titleCollapse:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              labelWidth : 70,

              items : [{
                                   layout : 'column',// columnlayout
                                   border : false,// 没有边框
                                   labelSeparator : '：',// 标题的分隔符号我们用中文冒号代替英文的冒号（labelSeparator:'：'）。
                                   // coulmnLayout里的控件将定义在items里
                                   items : [{xtype:'hidden',name:'tzid',id:'txt_tzid'},{xtype:'hidden',name:'zt',id:'txt_zt'}
                                   				, {
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '降弓地点',
                                                                             name : 'jgdd',
                                                                             anchor : '90%',
                                                                             readOnly:true,
                                                                             //blankText : '请填写通知编号',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                                                                             //emptyText : '填写通知编号',
                                                                             allowBlank : false // 该选项值不允许为空
                                                                      }]
                                                 }, {
                                                        columnWidth : .25,
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
                                                               readOnly:true,
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
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '降弓（例：178.235）',
                                                                             //labelSeparator : '（例：K178.235）',
                                                                             name : 'jg',
                                                                             readOnly:true,
                                                                             id:'txt_jg',
                                                                             //readOnly:true,
                                                                             anchor : '90%'
                                                                             
                                                                            
                                                                      }]
                                                 },{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '升弓（例：178.675）',
                                                                             //labelSeparator : '',
                                                                             name : 'sg',
                                                                             id:'txt_sg',
                                                                             readOnly:true,
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
			                                                               		     Ext.getCmp("txt_zbjg").setValue(jg);
			                                                               		     Ext.getCmp("txt_tjg").setValue(tjg);
			                                                               		  }
			                                                               		  else
			                                                               		  {
			                                                               		     Ext.Msg.alert('消息',"请确保输入的数据正确！");
			                                                               		  }
			                                                               		  
			                                                               		}
			                                                               		
                                                               },

                                                                             anchor : '90%'
                                                              }]
                                                 },{
                                                        columnWidth : .25,
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
                                                        columnWidth : .25,
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
                            },  {
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
                                                                             anchor : '92%',
                                                                             readOnly:true,
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
                                                                             anchor : '92%',
                                                                             readOnly:true,
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
                                                                             readOnly:true,
                                                                             anchor : '92%',
                                                                             height:40
                                                                             //format:'Y-m-d'
                                                                      }]
                                                 }]
                            },{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [ {
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// 控件的类型为datefield
                                                                             fieldLabel : '降弓命令号',
                                                                             name : 'mlh',
                                                                             id:'txt_mlh',
                                                                             readOnly:true,
                                                                             //value:'asdfasdf',
                                                                             anchor : '90%'
                                                                            
                                                                      }]
                                                 },{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '降弓时间',
                                                                             name : 'tzsj',
                                                                             readOnly:true,
                                                                             anchor : '90%',
                                                                             id:'txt_tzsj',
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 },{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '供电调度员',
                                                                             name : 'ddy',
                                                                             readOnly:true,
                                                                             anchor : '90%'
                                                                            //format:'Y-m-d'
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 },{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '列车调度员',
                                                                             name : 'xdy',
                                                                             id : 'ID_xdy',
                                                                             readOnly:true,
                                                                             anchor : '90%'
                                                                             //format:'Y-m-d'
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 }]
                            },{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '：',
                                   items : [ {
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '撤弓命令号',
                                                                             name : 'sgmlh',
                                                                             readOnly:true,
                                                                             id:'txt_sgmlh',
                                                                             anchor : '90%'
                                                                             
                                                                      }]
                                                 },  {
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '撤弓时间',
                                                                             name : 'ccsj',
                                                                             anchor : '90%',
                                                                             //disabled:true,
                                                                             readOnly:true,
                                                                             id:'txt_sgsj',
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// 该选项值不允许为空
                                                                      }]
                                                 }, {
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '供电调度员',
                                                                             name : 'JGDDY',
                                                                             id:'ID_JGDDY',
                                                                             readOnly:true,
                                                                             anchor : '90%'
                                                                       }]
                                                 }, {
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// 控件的类型为datefield
                                                                             fieldLabel : '列车调度员',
                                                                             name : 'JGXDY',
                                                                             id : 'ID_JGXDY',
                                                                             readOnly:true,
                                                                             anchor : '90%'
                                                                             
                                                                      }]
                                                 }]
                            }
                           
                            ],
              //为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
               buttons: [{
            text: '电调签收',
            Enabled:false,
            handler : function() {
            	if (!simpleForm_Save.form.isValid()) {return };
           		if (simpleForm_Save.form.isValid()) {
                	simpleForm_Save.form.doAction('submit', {
                                               waitMsg:'发送中,请稍侯...',  
                                               url : 'jgtz_Update.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		simpleForm_Save.collapse();
                                               		simple_Grid.getStore().reload();
                                               		Ext.Msg.alert('消息',action.result.msg);
                                               },
                                               failure : function() {
                                                     //Ext.Msg.alert('操作', '发送失败！');
                                                     this.disabled = false;
                                               }
            		});
           		 }
             }
        }, {
            text : '行调签收',
            Enabled:false,
            handler : function() {
            	if (!simpleForm_Save.form.isValid()) {return };
           		if (simpleForm_Save.form.isValid()) {
                	simpleForm_Save.form.doAction('submit', {
                                               waitMsg:'签收中,请稍侯...',  
                                               url : 'jgtz_Update.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		simpleForm_Save.collapse();
                                               		simple_Grid.getStore().reload();
                                               		Ext.Msg.alert('消息',action.result.msg);
                                               		
                                               },
                                               failure : function() {
                                                    //Ext.Msg.alert('操作', '签收失败！');
                                                     this.disabled = false;
                                               }
            		});
           		 }
             }
         },{
             text : '返回降弓通知',
             handler : function() {
            	 window.location.href='../yxgl/fallbow_notice/fallbow_notice.jsp';
             }
        }]
       });


    simpleForm_Save.collapse();
    simpleForm_Save.buttons[0].setVisible(false);
	simpleForm_Save.buttons[1].setVisible(false);
	if(DWJB=="7")
 	{
 		simpleForm_Save.buttons[2].setVisible(false);
 	}

 //=================================================================	
	var my_reload=function (){
		                                  //需要定期加载的store
	  	tsbsimple_Grid.getStore().reload();
	  	
	  	simpleX_Grid.getStore().reload();
	  	
	  	simple_Grid.getStore().reload();
	  	
	}
	setInterval(my_reload,30000);
 
 //================   	
var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		items: [tsbsimpleForm_Save,tsbsimple_Grid,simpleForm_Save,simple_Grid,simpleFormX_Save,simpleX_Grid]
		
	});
});


function getTime()
{
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
	mytime=myyear+"-"+mymonth+"-"+myday+" "+myhour+":"+mymin;
	return mytime;
}
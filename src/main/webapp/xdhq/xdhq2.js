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
  			return "<span style='color:red;font-weight:bold;'>���������</span>";
  		}
 	 	else if(value=="1")
 	 	{
 	 		if(DWJB=="7")
 	 		{
 	 		   sound();
 	 		   return "<span style='color:blue;font-weight:bold;'>���ͣ��ƻ��ѷ��͡��е�δǩ��</span>";
 	 		}
 	 		else
 	 		{
 	 			return "<span style='color:blue;font-weight:bold;'>���ͣ��ƻ��ѷ��͡��е�δǩ��</span>";
 	 		}
 	 	}
 	 	else if (value=='2')  
  	    {
  	    	if(DWJB=="7")
 	 		{
  	    		return "<span style='color:red;font-weight:bold;'>���ͣ��ƻ��ѷ��͡��е�δǩ��</span>";
  	    	}
  	    	else
  	    	{
  	    		return "<span style='color:green;font-weight:bold;'>���ͣ��ƻ��ѷ��͡��е�δǩ��</span>";
  	    	}
  	    }
 	 	else if(value=="3")
 	 	{
 	 		if(DWJB=="3")
 	 		{
 	 		   sound();
 	 		   return "<span style='color:red;font-weight:bold;'>ͣ��ƻ��е���ǩ�ϡ����δǩ��</span>";
 	 		}
 	 		else
 	 		{
 	 			return "<span style='color:green;font-weight:bold;'>ͣ��ƻ��е���ǩ�ϡ����δǩ��</span>";
 	 		}
 	 	}
 	 	else if(value=="4")
 	 	{
 	 		if(DWJB=="3")
 	 		{
 	 			return "<span style='color:red;font-weight:bold;'>�͵�ʱ����������</span>";
 	 		}
 	 		else
 	 		{
 	 			return "<span style='color:black;font-weight:bold;'>ͣ��ƻ��е���ǩ�ϡ������ǩ��</span>";
 	 		}
 	 	}
 	 	else if(value=="5")
 	 	{
 	 		if(DWJB=="7")
 	 		{
 	 		   sound();
 	 		   return "<span style='color:blue;font-weight:bold;'>�͵�ʱ�����ѷ��͡��е�δǩ��</span>";
 	 		}
 	 		else
 	 		{
 	 			return "<span style='color:blue;font-weight:bold;'>�͵�ʱ�����ѷ��͡��е�δǩ��</span>";
 	 		}
 	 	}
 	 	else if(value=="6")
 	 	{
 	 		if(DWJB=="7")
 	 		{
 	 			return "<span style='color:red;font-weight:bold;'>�͵�ʱ�����ѷ��͡��е�δǩ��</span>";
 	 		}
 	 		else
 	 		{
 	 			return "<span style='color:green;font-weight:bold;'>�͵�ʱ�����ѷ��͡��е�δǩ��</span>";
 	 		}
 	 	}
 	 	else if(value=="7")
 	 	{
 	 		if(DWJB=="3")
 	 		{
				sound();
 	 		    return "<span style='color:red;font-weight:bold;'>�͵�ʱ���е���ǩ�ϡ����δǩ��</span>";
 	 		}
 	 		else
 	 		{
 	 			return "<span style='color:green;font-weight:bold;'>�͵�ʱ���е���ǩ�ϡ����δǩ��</span>";
 	 		}
 	 	}
 	 	else if(value=="8")
 	 	{
 	 		return "<span style='color:black;font-weight:bold;'>�͵�ʱ���е���ǩ�ϡ������ǩ��</span>";
 	 	}
 	 };

    //����Grid��ͷ
    var tsbcolumns = new Ext.grid.ColumnModel([       
        new Ext.grid.RowNumberer(),
        {header:'����',dataIndex:'TSDRQ',width:80,sortable:true,fixed:true},
        {header:'���䡢�ص�',dataIndex:'QJDD',width:100,sortable:true},
        {header:'���̨',dataIndex:'DDTMC',width:120,sortable:true},
        //{header:'ͣ�絥Ԫ',dataIndex:'TDDY',width:120,sortable:true},
        //{header:'ͣ��ʱ��',dataIndex:'QZSJ',width:60,sortable:true,fixed:true},
        {header:'�������Ա',dataIndex:'T_GDDDY',width:60,sortable:true},
        {header:'�е�̨',dataIndex:'XDTMC',width:120,sortable:true},
        //{header:'ͣ��ʱ��',dataIndex:'LD_TDQZSJ',width:120,sortable:true},
        //{header:'�͵�ʱ��',dataIndex:'LD_TDQZSJ1',width:120,sortable:true},
        {header:'�г�����Ա',dataIndex:'LD_DDY',width:60,sortable:true},
        {header:'�͵�ʱ��',dataIndex:'SD_SF',width:120,sortable:true},
        {header:'�������Ա',dataIndex:'SD_GDDDY',width:60,sortable:true},
        {header:'�е�ǩ��ʱ��',dataIndex:'xdqrsj',width:120,sortable:true},
        {header:'���ǩ��ʱ��',dataIndex:'ddqrsj',width:120,sortable:true},
        {header:'����',dataIndex:'BK',width:60,sortable:true},
        {header:'״̬',dataIndex:'ZT',width:210,renderer:renderzt1,fixed:true}
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
        baseParams:{whereclause:' zt!='+'0'},//�����ҳ��ʱ�����ֵ������ʧ����Ϊ����������ֻ�е����ѯ��ťʱ�Ż�ı�       
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },tsbplanRecord)
    });
	tsbstore.load({params:{start:0, limit:6}});
    
    //���������,ָ����ģ�ͣ��ֿ⣬ѡ��ģ��(Ĭ����ѡ��ģ��)
    var tsbsimple_Grid = new Ext.grid.GridPanel({
    	title : 'ͣ�͵�Ǽǲ��б�',
        store:tsbstore,
    	cm: tsbcolumns,
    	sm: new Ext.grid.RowSelectionModel({singleSelcet:true}),
        viewConfig:{
        	forceFit:true,
         	columnsText:"��ʾ����",
         	sortAscText:"����",
         	sortDescText:"����"
        },
        loadMask:{msg:"���ݼ�����...."},        
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
            displayMsg: '�� {0} ���� {1} ��,�� {2} ��',
            emptyMsg: "�޼�¼"
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
	    		tsbsimpleForm_Save.buttons[1].setText("�е�ǩ��");
	    	}
	    	else if(zt=="5")
	    	{
	    		tsbsimpleForm_Save.buttons[1].setText("�е�ǩ��");
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
	    		tsbsimpleForm_Save.buttons[0].setText("�����е�");
	    	}
	    	if(zt=="7")
	    	{
	    		tsbsimpleForm_Save.buttons[0].setText("���ǩ��");
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
              title : 'ͣ�͵�Ǽǲ�--��ǩ',
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
                       border : false,// û�б߿�
                       labelSeparator : '��',// ����ķָ���������������ð�Ŵ���Ӣ�ĵ�ð�ţ�labelSeparator:'��'����
                       // coulmnLayout��Ŀؼ���������items��
                       items : [{xtype:'hidden',name:'TDSBH',id:'TDSBH'},{xtype:'hidden',name:'ZT'},{
                                            columnWidth : .33,
                                            layout : 'form',
                                            border : false,
                                            items : [{
			                                             xtype : 'datefield',// �ؼ�������Ϊdatefield
			                                             fieldLabel : '����',
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
                                                         xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                         fieldLabel : 'ͣ��ʱ��',
                                                         anchor : '90%',
                                                         readOnly:true,
                                                         name : 'QZSJ'
                                                       //  format:'Y-m-d'
                                                         //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                  }]
                                     },{
                                            columnWidth : .33,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                         fieldLabel : '�������Ա',
                                                         anchor : '90%',
                                                         readOnly:true,
                                                         name : 'T_GDDDY'
                                                       //  format:'Y-m-d'
                                                         //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                  }]
                                     },{
                                            columnWidth : .99,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                         fieldLabel : '���䡢�ص�',
                                                         name : 'QJDD',
                                                         readOnly:true,
                                                         anchor : '97%',
                                                       //  format:'Y-m-d'
                                                         allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                  }]
                                     },{
                                            columnWidth : .99,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textarea',// �ؼ�������Ϊdatefield
                                                         fieldLabel : 'ͣ�絥Ԫ',
                                                         name : 'TDDY',
                                                         anchor : '97%',
                                                         readOnly:true,
                                                         height:'80',
                                                       //  format:'Y-m-d'
                                                         allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                  }]
                                     },{
                                            columnWidth : .33,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'field',// �ؼ�������Ϊdatefield
                                                         fieldLabel : 'ͣ��ʱ��',
                                                         name : 'LD_TDQZSJ',
                                                         id:'ID_LD_TDQZSJ',
                                                         //disabled:true,
                                                         readOnly:true,
                                                         anchor : '90%',
                                                         listeners: {"focus": function(){
                                                         WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                         //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                  }]
                                     },{
                                            columnWidth : .33,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'field',// �ؼ�������Ϊdatefield
                                                         fieldLabel : '�͵�ʱ��',
                                                         name : 'LD_TDQZSJ1',
                                                         id:'ID_LD_TDQZSJ1',
                                                         readOnly:true,
                                                         anchor : '90%',
                                                         listeners: {"focus": function(){
                                                         WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                         //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                  }]
                                     },{
                                            columnWidth : .33,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                         fieldLabel : '�г�����Ա',
                                                         name : 'LD_DDY',
                                                         id:'ID_LD_DDY',
                                                         readOnly:true,
                                                         anchor : '90%'
                                                       //  format:'Y-m-d'
                                                         //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                  }]
                                     },{
                                            columnWidth : .33,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'field',// �ؼ�������Ϊdatefield
                                                         fieldLabel : '�͵�ʱ��',
                                                         name : 'SD_SF',
                                                         id:'ID_SD_SF',
                                                         readOnly:true,
                                                         anchor : '90%',
                                                         listeners: {"focus": function(){
                                                         WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                         //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                  }]
                                     },{
                                            columnWidth : .33,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                         fieldLabel : '�������Ա',
                                                         name : 'SD_GDDDY',
                                                         id:'ID_SD_GDDDY',
                                                         readOnly:true,
                                                         anchor : '90%'
                                                       //  format:'Y-m-d'
                                                       //  allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                  }]
                                     },{
                                            columnWidth : .33,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                         fieldLabel : '�г�����Ա',
                                                         name : 'SD_LCDDY',
                                                         id:'ID_SD_LCDDY',
                                                         readOnly:true,
                                                         anchor : '90%'
                                                       //  format:'Y-m-d'
                                                        // allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                  }]
                                     },{
                                            columnWidth : .99,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                         fieldLabel : '����',
                                                         anchor : '97%',
                                                         id : 'ID_BK',
                                                         name : 'BK'
                                                       //  format:'Y-m-d'
                                                         //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                  }]
                                     }]

                            }],
              // Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
        buttons: [{
            text: '���ǩ��',
            Enabled:false,
            handler : function() {
            	if (!tsbsimpleForm_Save.form.isValid()) {return };
           		if (tsbsimpleForm_Save.form.isValid()) {
                	tsbsimpleForm_Save.form.doAction('submit', {
                                               waitMsg:'������,���Ժ�...',  
                                               url : 'tsddjb_Update.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		tsbsimpleForm_Save.collapse();
                                               		tsbsimple_Grid.getStore().reload();
                                               		Ext.Msg.alert('��Ϣ',action.result.msg);
                                               },
                                               failure : function() {
                                                     Ext.Msg.alert('����', '����ʧ�ܣ�');
                                                     this.disabled = false;
                                               }
            		});
           		 }
             }
        }, {
            text : '�е�ǩ��',
            Enabled:false,
            handler : function() {
            	if (!tsbsimpleForm_Save.form.isValid()) {return };
           		if (tsbsimpleForm_Save.form.isValid()) {
                	tsbsimpleForm_Save.form.doAction('submit', {
                                               waitMsg:'ǩ����,���Ժ�...',  
                                               url : 'tsddjb_Update.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		tsbsimpleForm_Save.collapse();
                                               		tsbsimple_Grid.getStore().reload();
                                               		Ext.Msg.alert('��Ϣ',action.result.msg);
                                               		
                                               },
                                               failure : function() {
                                                     //Ext.Msg.alert('����', 'ǩ��ʧ�ܣ�');
                                                     this.disabled = false;
                                               }
            		});
           		 }
             }
         },{
             text : '����ͣ�͵�Ǽǲ�',
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
///////-------------------�����б��stor�е�֪ͨ��----------------********----------------
 
    var renderzt =function(value)
 	 {
 	   
  		if (value=='1')  
  		{
  			return "<span style='color:red;font-weight:bold;'>���������</span>";
  		}
  	    else if (value=='2')  
  	    {
  	    	if(DWJB=="7")
 	 		{
  	       		sound();
 	 			return "<span style='color:blue;font-weight:bold;'>����ѷ��͡��е�δǩ��</span>";
 	 		}
 	 		else
 	 		{
 	 			return "<span style='color:blue;font-weight:bold;'>����ѷ��͡��е�δǩ��</span>";
 	 		}
  	    }
  	    else if (value=='3')  
  	    {
  	    	if(DWJB=="7")
 	 		{
  	    		return "<span style='color:red;font-weight:bold;'>����ѷ��͡��е�δǩ��</span>";
  	    	}
  	    	else
  	    	{
  	    		return "<span style='color:green;font-weight:bold;'>����ѷ��͡��е�δǩ��</span>";
  	    	}
  	    }
  	    else if (value=='4')  
  	    {
  	    	if(DWJB=="3")
 	 		{
  	       		sound();
 	 			return "<span style='color:red;font-weight:bold;'>�е���ǩ�ϡ����δǩ��</span>";
 	 		}
 	 		else
 	 		{
 	 			return "<span style='color:green;font-weight:bold;'>�е���ǩ�ϡ����δǩ��</span>";
 	 		}
  	    }
  	    else if (value=='5')  
  	    {
 	 		return "<span style='color:black;font-weight:bold;'>�е���ǩ�ϡ������ǩ��</span>";
  	    }
  		
 	 };    
 		
    //����Grid��ͷ
    var columnsX = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        new Ext.grid.RowNumberer(),
        {header:'֪ͨ���',dataIndex:'TZSH',width:60,sortable:true,fixed:true},
        {header:'֪ͨ����',dataIndex:'TZRQ',width:110,sortable:true,fixed:true},
        {header:'���̨',dataIndex:'DWMC',width:70,sortable:true},
        {header:'�������Ա',dataIndex:'DDMC',width:60,sortable:true},
        {header:'�е�̨',dataIndex:'XDTMC',width:70,sortable:true},
        {header:'�г�����Ա',dataIndex:'XDMC',width:60,sortable:true},
        {header:'֪ͨ����',dataIndex:'TZNR',width:200,sortable:true},
        {header:'״̬',dataIndex:'ZT',width:160,renderer:renderzt,fixed:true,sortable:true}
        //{header:'ɾ��',dataIndex:'TZSID',width:60,renderer:renderDel_tzsid,fixed:true}
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
    	
    
    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'xdtzs_json.jsp'}),        
        //reader����������ν����������
        baseParams:{whereclause:'zt!='+'1'},
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecordX)
    });
    
	store.load({params:{start:0, limit:6}});
	
    //���������,ָ����ģ�ͣ��ֿ⣬ѡ��ģ��(Ĭ����ѡ��ģ��)
    var simpleX_Grid = new Ext.grid.GridPanel({
        //el:ָ��htmlԪ��������ʾ��grid
        //el: 'grid3',
        title : '֪ͨ���б�', 
        store:store,
    	cm: columnsX,
    	sm: new Ext.grid.RowSelectionModel({singleSelcet:true}),
        //title: '��ҵ�ƻ���ʾ',
        //�����¼�����Զ�����
        viewConfig:{
        	forceFit:true,
         	columnsText:"��ʾ����",
         	sortAscText:"����",
         	sortDescText:"����"
        },
        loadMask:{msg:"���ݼ�����...."},        
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
            displayMsg: '�� {0} ���� {1} ��,�� {2} ��',
            emptyMsg: "�޼�¼"
        })
    });
   	//Grid�ϴ����¼�
   
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
	 	 		simpleFormX_Save.buttons[1].setText("�е�ǩ��");
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
 	 			simpleFormX_Save.buttons[0].setText("���ǩ��");
 	 		}	
 	 	}
 	 	else
 	 	{
 	 		tsbsimpleForm_Save.buttons[0].setVisible(false);
        	tsbsimpleForm_Save.buttons[1].setVisible(false);
 	 	}
    });	


        //document.location.reload();
    	//setTimeout(alert("ˢ�²���!"),10000000);
       //setTimeout(simpleX_Grid.getStore().reload(),10000000);
 	  //setinterval(simpleFormX_Save.getForm().loadRecord(record),60);//ÿ10����ˢ��һ��

     Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
      
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
              title : '֪ͨ��--��ǩ',
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
                       border : false,// û�б߿�
                       labelSeparator : '��',// ����ķָ���������������ð�Ŵ���Ӣ�ĵ�ð�ţ�labelSeparator:'��'����
                       // coulmnLayout��Ŀؼ���������items��
                       items : [{xtype:'hidden',name:'TZSID',id:'tzs_id'},{xtype:'hidden',name:'ZT',id:'ID_ZT'},{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
			                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
			                                             fieldLabel : '֪ͨ����',
			                                             name : 'TZRQ',
			                                             id:'tz_rq',
			                                             readOnly:true,
			                                             //value: new Date,
			                                            // readOnly : true,//�����Ա�ʾ���ɸ���
			                                             anchor : '90%',
			                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}
                                                                       },
			                                        
			                                             allowBlank : false// ��ѡ��ֵ������Ϊ��
			                                      }]
                                     },{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                         fieldLabel : '֪ͨ���',
                                                         name : 'TZSH',
                                                         readOnly:true,
                                                         //readOnly : true,//�����Ա�ʾ���ɸ���
                                                       //  format:'Y-m-d'
                                                         allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                  }]
                                     },
                                     	{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                         fieldLabel : '�������Ա',
                                                         name : 'DDMC',
                                                         id:'dd_mc',
                                                         readOnly : true,//�����Ա�ʾ���ɸ���
                                                         value:yh,
                                                       //  format:'Y-m-d'
                                                         allowBlank : false// ��ѡ��ֵ������
                                                  }]
                                     },{
                                        	columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
										        		xtype : 'combo',// �ؼ����������ó�combo
										           		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
										            	store : xdt_store,
										            	valueField : "value",
										            	readOnly:true,
										            	displayField : "text",
										            	mode : 'local',// �������ڱ���
										            	//forceSelection : true,// ����ѡ��һ��ѡ��
										            	blankText : '��ѡ���е�̨',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
										            	emptyText : 'ѡ���е�̨',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
										            	hiddenName : 'XDTDM',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
										            	editable : false,// �������б�ֻ����ѡ�񣬲���������
										            	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
										            	//allowBlank : false,// ��ѡ��ֵ������Ϊ��
										            	fieldLabel : '�е�̨',// �ؼ��ı�����ѧ��
										            	name : 'XDTDM',// �ٴ����ѣ�nameֻ�������б������
										            	anchor : '90%',// input�Ŀ����90%
										            	id:'xdt',
										            	allowBlank : false
													}]
                                     },{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                         fieldLabel : '�г�����Ա',
                                                         id : 'ID_XDMC',
                                                         readOnly:true,
                                                         name : 'XDMC'
                                                       //  format:'Y-m-d'
                                                         //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                  }]
                                     },{
                                            columnWidth : .99,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textarea',// �ؼ�������Ϊdatefield
                                                         fieldLabel : '֪ͨ����',
                                                         name : 'TZNR',
                                                         anchor : '90%',
                                                         height:'80',
                                                       //  format:'Y-m-d'
                                                         allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                  }]
                                     }]

                            }],
              // Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
        buttons: [{
            text : '���ǩ��',
            Enabled:false,
            handler : function() {
            	if (!simpleFormX_Save.form.isValid()) {return };
           		if (simpleFormX_Save.form.isValid()) {
                	simpleFormX_Save.form.doAction('submit', {
                                               waitMsg:'������,���Ժ�...',  
                                               url : 'xdtzs_Update.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		//simpleFormX_Save.buttons[0].setVisible(false);
                                               		simpleFormX_Save.collapse();
                                               		simpleX_Grid.getStore().reload();
                                               		Ext.Msg.alert('��Ϣ',action.result.msg);
                                               		
                                               },
                                               failure : function() {
                                                     //Ext.Msg.alert('����', '����ʧ�ܣ�');
                                                     this.disabled = false;
                                               }
            		});
           		 }
             }
         },{
            text : '�е�ǩ��',
            Enabled:false,
            handler : function() {
            	if (!simpleFormX_Save.form.isValid()) {return };
           		if (simpleFormX_Save.form.isValid()) {
                	simpleFormX_Save.form.doAction('submit', {
                                               waitMsg:'ǩ����,���Ժ�...',  
                                               url : 'xdtzs_Update.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		simpleFormX_Save.collapse();
                                               		simpleX_Grid.getStore().reload();
                                               		Ext.Msg.alert('��Ϣ',action.result.msg);
                                               		
                                               },
                                               failure : function() {
                                                     //Ext.Msg.alert('����', 'ǩ��ʧ�ܣ�');
                                                     this.disabled = false;
                                               }
            		});
           		 }
             }
         },{
             text : '�����е�֪ͨ��',
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

	

 ///////------******------------�����б��stor����֪֪ͨͨ----------------********----------------
var renderzt2 =function(value)
 	{
 	    if (value=='0')  
  		{
  			return "<span style='color:red;font-weight:bold;'>���������</span>";
  		}
 	 	else if(value=="1")
 	 	{
 	 		if(DWJB=="7")
 	 		{
 	 		   sound();
 	 		   return "<span style='color:blue;font-weight:bold;'>��������ѷ��͡��е�δǩ��</span>";
 	 		}
 	 		else
 	 		{
 	 			return "<span style='color:blue;font-weight:bold;'>��������ѷ��͡��е�δǩ��</span>";
 	 		}
 	 	}
 	 	else if (value=='2')  
  	    {
  	    	if(DWJB=="7")
 	 		{
  	    		return "<span style='color:red;font-weight:bold;'>��������ѷ��͡��е�δǩ��</span>";
  	    	}
  	    	else
  	    	{
  	    		return "<span style='color:green;font-weight:bold;'>��������ѷ��͡��е�δǩ��</span>";
  	    	}
  	    }
 	 	else if(value=="3")
 	 	{
 	 		if(DWJB=="3")
 	 		{
 	 		   sound();
 	 		   return "<span style='color:red;font-weight:bold;'>�е�������ǩ�ϡ����δǩ��</span>";
 	 		}
 	 		else
 	 		{
 	 			return "<span style='color:green;font-weight:bold;'>�е�������ǩ�ϡ����δǩ��</span>";
 	 		}
 	 	}
 	 	else if(value=="4")
 	 	{
 	 		if(DWJB=="3")
 	 		{
 	 			return "<span style='color:red;font-weight:bold;'>�������������</span>";
 	 		}
 	 		else
 	 		{
 	 			return "<span style='color:black;font-weight:bold;'>�е�������ǩ�ϡ������ǩ��</span>";
 	 		}
 	 	}
 	 	else if(value=="5")
 	 	{
 	 		if(DWJB=="7")
 	 		{
 	 		   sound();
 	 		   return "<span style='color:blue;font-weight:bold;'>��������ѷ��͡��е�δǩ��</span>";
 	 		}
 	 		else
 	 		{
 	 			return "<span style='color:blue;font-weight:bold;'>��������ѷ��͡��е�δǩ��</span>";
 	 		}
 	 	}
 	 	else if(value=="6")
 	 	{
 	 		if(DWJB=="7")
 	 		{
 	 			return "<span style='color:red;font-weight:bold;'>��������ѷ��͡��е�δǩ��</span>";
 	 		}
 	 		else
 	 		{
 	 			return "<span style='color:green;font-weight:bold;'>��������ѷ��͡��е�δǩ��</span>";
 	 		}
 	 	}
 	 	else if(value=="7")
 	 	{
 	 		if(DWJB=="3")
 	 		{
				sound();
 	 		    return "<span style='color:red;font-weight:bold;'>�е�������ǩ�ϡ����δǩ��</span>";
 	 		}
 	 		else
 	 		{
 	 			return "<span style='color:green;font-weight:bold;'>�е�������ǩ�ϡ����δǩ��</span>";
 	 		}
 	 	}
 	 	else if(value=="8")
 	 	{
 	 		return "<span style='color:black;font-weight:bold;'>�е�������ǩ�ϡ������ǩ��</span>";
 	 	}
 	};
 
var columns = new Ext.grid.ColumnModel([       
        new Ext.grid.RowNumberer(),
        {header:'���������',dataIndex:'mlh',width:70,sortable:true,fixed:true},
        {header:'����ʱ��',dataIndex:'tzsj',width:100,sortable:true},
        {header:'�����ص�',dataIndex:'jgdd',width:80,sortable:true},
        {header:'���̨',dataIndex:'dwmc',width:110,sortable:true},
        //{header:'����ԭ��',dataIndex:'jgyy',width:120,sortable:true},
        //{header:'��ֹλ��',dataIndex:'jsjtwz',width:60,sortable:true},
       // {header:'�б�',dataIndex:'xb',width:40,sortable:true},
        //{header:'׼������',dataIndex:'zbjg',width:60,sortable:true},
        //{header:'T����',dataIndex:'tjg',width:60,sortable:true},
        {header:'�������Ա',dataIndex:'ddy',width:80,sortable:true},
        {header:'�е�̨',dataIndex:'XDTMC',width:110,sortable:true},
        {header:'�г�����Ա',dataIndex:'xdy',width:80,sortable:true},
        //{header:'���������',dataIndex:'sgmlh',width:60,sortable:true},
        {header:'����ʱ��',dataIndex:'ccsj',width:100,sortable:true},
        //{header:'�������Ա',dataIndex:'JGDDY',width:60,sortable:true},
        //{header:'�г�����Ա',dataIndex:'JGXDY',width:60,sortable:true},
        {header:'״̬',dataIndex:'zt',width:180,renderer:renderzt2,fixed:true}
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
        //baseParams:{whereclause:'dwid = '+"'"+DWDM+"'"},//�����ҳ��ʱ�����ֵ������ʧ����Ϊ����������ֻ�е����ѯ��ťʱ�Ż�ı�       
        baseParams:{whereclause:' zt!='+'0'},
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord)
    });
	store.load({params:{start:0, limit:6}});
    
    //���������,ָ����ģ�ͣ��ֿ⣬ѡ��ģ��(Ĭ����ѡ��ģ��)
    var simple_Grid = new Ext.grid.GridPanel({
    	title : '����֪ͨ�б�',
        store:store,
    	cm: columns,
    	sm: new Ext.grid.RowSelectionModel({singleSelcet:true}),
        viewConfig:{
        	forceFit:true,
         	columnsText:"��ʾ����",
         	sortAscText:"����",
         	sortDescText:"����"
        },
        loadMask:{msg:"���ݼ�����...."},        
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
            displayMsg: '�� {0} ���� {1} ��,�� {2} ��',
            emptyMsg: "�޼�¼"
        })

    });
    
       
    //Grid�ϴ����¼�
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
	    		simpleForm_Save.buttons[1].setText("�е�ǩ��");
	    	}
	    	else if(zt=="5")
	    	{
	    		simpleForm_Save.buttons[1].setText("�е�ǩ��");
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
	    		simpleForm_Save.buttons[0].setText("�����е�");
	    	}
	    	if(zt=="7")
	    	{
	    		simpleForm_Save.buttons[0].setText("���ǩ��");
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

    Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	// form start
	var simpleForm_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '����֪ͨ����ǩ',
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
                                   border : false,// û�б߿�
                                   labelSeparator : '��',// ����ķָ���������������ð�Ŵ���Ӣ�ĵ�ð�ţ�labelSeparator:'��'����
                                   // coulmnLayout��Ŀؼ���������items��
                                   items : [{xtype:'hidden',name:'tzid',id:'txt_tzid'},{xtype:'hidden',name:'zt',id:'txt_zt'}
                                   				, {
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '�����ص�',
                                                                             name : 'jgdd',
                                                                             anchor : '90%',
                                                                             readOnly:true,
                                                                             //blankText : '����д֪ͨ���',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                                             //emptyText : '��д֪ͨ���',
                                                                             allowBlank : false // ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 }, {
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store : new Ext.data.SimpleStore({
                                                                      // ͨ��һ�����鶨����returnValue��displayText�����ֶΡ�retrunValue�ֶ�ָ�����ύ����̨��ֵ��displayText�ֶ�ָ��������������ʾ��ѡ��ֵ��
                                                                      fields : ["returnValue", "displayText"],
                                                                      // �����˼�������.ÿ�����ݶ��Ǹ���fiedls�Ķ�������ɵģ��������һ��ֵ����retrunValue��ֵ���ڶ���ֵ����displayText��ֵ������[1,'Сѧ']���ͱ�ʾretrunValue��1��displayText��Сѧ��
                                                                      data : [['����', '����'],['����', '����'],['��ֱ', '��ֱ']]
                                                               }),
                                                               valueField : "returnValue",// ��������ѡ����ֵ
                                                               displayField : "displayText",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               blankText : '�б�',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '�б�',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'xb',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               readOnly:true,
                                                               allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '�б�',// �ؼ��ı�����ѧ��
                                                               name : 'xb',// �ٴ����ѣ�nameֻ�������б������
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 }]

                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '����������178.235��',
                                                                             //labelSeparator : '������K178.235��',
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
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '����������178.675��',
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
			                                                               		     Ext.Msg.alert('��Ϣ',"��ȷ�������������ȷ��");
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
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '׼������',
                                                                             name : 'zbjg',
                                                                             readOnly:true,
                                                                             id:'txt_zbjg',
                                                                             anchor : '90%'
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 }, {
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : 'T����',
                                                                             //labelSeparator : 'dfdfd',
                                                                             readOnly:true,
                                                                             name : 'tjg',
                                                                             id:'txt_tjg',
                                                                            // labelWidth : 20,
                                                                             anchor : '90%'
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 }]
                            },  {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{
                                                        columnWidth : 1.06,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textarea',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '�¶����',
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
                                   labelSeparator : '��',
                                   items : [{
                                                        columnWidth : 1.06,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textarea',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '����ԭ��',
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
                                   labelSeparator : '��',
                                   items : [{
                                                        columnWidth : 1.06,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textarea',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��ע',
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
                                   labelSeparator : '��',
                                   items : [ {
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '���������',
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
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '����ʱ��',
                                                                             name : 'tzsj',
                                                                             readOnly:true,
                                                                             anchor : '90%',
                                                                             id:'txt_tzsj',
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '�������Ա',
                                                                             name : 'ddy',
                                                                             readOnly:true,
                                                                             anchor : '90%'
                                                                            //format:'Y-m-d'
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '�г�����Ա',
                                                                             name : 'xdy',
                                                                             id : 'ID_xdy',
                                                                             readOnly:true,
                                                                             anchor : '90%'
                                                                             //format:'Y-m-d'
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 }]
                            },{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [ {
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '���������',
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
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '����ʱ��',
                                                                             name : 'ccsj',
                                                                             anchor : '90%',
                                                                             //disabled:true,
                                                                             readOnly:true,
                                                                             id:'txt_sgsj',
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 }, {
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '�������Ա',
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
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '�г�����Ա',
                                                                             name : 'JGXDY',
                                                                             id : 'ID_JGXDY',
                                                                             readOnly:true,
                                                                             anchor : '90%'
                                                                             
                                                                      }]
                                                 }]
                            }
                           
                            ],
              //Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
               buttons: [{
            text: '���ǩ��',
            Enabled:false,
            handler : function() {
            	if (!simpleForm_Save.form.isValid()) {return };
           		if (simpleForm_Save.form.isValid()) {
                	simpleForm_Save.form.doAction('submit', {
                                               waitMsg:'������,���Ժ�...',  
                                               url : 'jgtz_Update.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		simpleForm_Save.collapse();
                                               		simple_Grid.getStore().reload();
                                               		Ext.Msg.alert('��Ϣ',action.result.msg);
                                               },
                                               failure : function() {
                                                     //Ext.Msg.alert('����', '����ʧ�ܣ�');
                                                     this.disabled = false;
                                               }
            		});
           		 }
             }
        }, {
            text : '�е�ǩ��',
            Enabled:false,
            handler : function() {
            	if (!simpleForm_Save.form.isValid()) {return };
           		if (simpleForm_Save.form.isValid()) {
                	simpleForm_Save.form.doAction('submit', {
                                               waitMsg:'ǩ����,���Ժ�...',  
                                               url : 'jgtz_Update.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		simpleForm_Save.collapse();
                                               		simple_Grid.getStore().reload();
                                               		Ext.Msg.alert('��Ϣ',action.result.msg);
                                               		
                                               },
                                               failure : function() {
                                                    //Ext.Msg.alert('����', 'ǩ��ʧ�ܣ�');
                                                     this.disabled = false;
                                               }
            		});
           		 }
             }
         },{
             text : '���ؽ���֪ͨ',
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
		                                  //��Ҫ���ڼ��ص�store
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
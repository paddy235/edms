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
  			return "<span style='color:red;font-weight:bold;'>���������</span>";
  		}
 	 	else if(value=="1")
 	 	{
 	 		return "<span style='color:blue;font-weight:bold;'>���ͣ��ƻ��ѷ��͡��е�δǩ��</span>";
 	 	}
 	 	else if (value=='2')  
  	    {
  	    	return "<span style='color:green;font-weight:bold;'>���ͣ��ƻ��ѷ��͡��е�δǩ��</span>";
  	    }
 	 	else if(value=="3")
 	 	{
 	 		return "<span style='color:red;font-weight:bold;'>ͣ��ƻ��е���ǩ�ϡ����δǩ��</span>";
 	 	}
 	 	else if(value=="4")
 	 	{
 	 		return "<span style='color:red;font-weight:bold;'>�͵�ʱ����������</span>";
 	 	}
 	 	else if(value=="5")
 	 	{
 	 		return "<span style='color:blue;font-weight:bold;'>�͵�ʱ�����ѷ��͡��е�δǩ��</span>";
 	 	}
 	 	else if(value=="6")
 	 	{
 	 		return "<span style='color:green;font-weight:bold;'>�͵�ʱ�����ѷ��͡��е�δǩ��</span>";
 	 	}
 	 	else if(value=="7")
 	 	{
 	 		 return "<span style='color:red;font-weight:bold;'>�͵�ʱ���е���ǩ�ϡ����δǩ��</span>";
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
        {header:'ͣ�絥Ԫ',dataIndex:'TDDY',width:220,sortable:true},
        {header:'ͣ��ʱ��',dataIndex:'QZSJ',width:60,sortable:true,fixed:true},
        {header:'�������Ա',dataIndex:'T_GDDDY',width:80,sortable:true,fixed:true},
        //{header:'ͣ��ʱ��',dataIndex:'LD_TDQZSJ',width:60,sortable:true},
        //{header:'�͵�ʱ��',dataIndex:'LD_TDQZSJ1',width:60,sortable:true},
        //{header:'�г�����Ա',dataIndex:'LD_DDY',width:80,sortable:true},
        //{header:'�͵�ʱ��',dataIndex:'SD_SF',width:80,sortable:true},
        //{header:'�������Ա',dataIndex:'SD_GDDDY',width:80,sortable:true},
        //{header:'�г�����Ա',dataIndex:'SD_LCDDY',width:80,sortable:true},
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
    	{name:'ZT',type:'string'}
    	]);
    	
    var tsbstore = new Ext.data.Store({
        proxy: new Ext.data.HttpProxy({url:'tsb_json.jsp'}), 
        baseParams:{whereclause:'1=1'},//�����ҳ��ʱ�����ֵ������ʧ����Ϊ����������ֻ�е����ѯ��ťʱ�Ż�ı�       
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },tsbplanRecord)
    });
	tsbstore.load({params:{start:0, limit:6}});
    
    //���������,ָ����ģ�ͣ��ֿ⣬ѡ��ģ��(Ĭ����ѡ��ģ��)
    var tsbsimple_Grid = new Ext.grid.GridPanel({
        //title : 'ͣ�͵�Ǽǲ��б�',
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
       	title: 'ͣ�͵�Ǽǲ�--��ѯ',
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
            border : false,// û�б߿�
            items : [{
                columnWidth : .33,
                layout : 'form',
                border : false,
                items : [{
                    xtype:'datefield',
                    fieldLabel: '��ʼ����',
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
                   fieldLabel: '��������',
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
                        		data : [['', 'ȫ��'],['0', '���������'],
                                   		['1', '���ͣ��ƻ��ѷ��͡��е�δǩ��'],['2', '���ͣ��ƻ��ѷ��͡��е�δǩ��'],
                                   		['3', 'ͣ��ƻ��е���ǩ�ϡ����δǩ��'],['4', '�͵�ʱ����������'],
                                   		['5', '�͵�ʱ�����ѷ��͡��е�δǩ��'],['6', '�͵�ʱ�����ѷ��͡��е�δǩ��'],
                                   		['7', '�͵�ʱ���е���ǩ�ϡ����δǩ��'],['8', '�͵�ʱ���е���ǩ�ϡ������ǩ��']
                                   		]
                        	}),
                        	valueField : "returnValue",
                        	displayField : "displayText",
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ��״̬',
                        	emptyText : 'ѡ��״̬',
                        	hiddenName : 'ztbzcx',
                        	editable : false,
                        	triggerAction : 'all',
                        	//allowBlank : false,
                        	fieldLabel : '״̬',
                        	name : 'ztbzcx',
                        	id : 'ztbzcx_id',
                        	anchor : '95%'
    			}]
              }]
			}
           ],
            buttons : [{
              buttonlAlign : 'right',
               text : '��ѯ',
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

                                   // ȡ����ť���Ǽ򵥵�resetһ��form�Ŀؼ�
                                   text : '�鿴����',
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
              title : 'ͣ�͵�Ǽǲ�--����',
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
                                                         name : 'T_GDDDY',
                                                         value:YHMC
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
                                                         height:'80',
                                                       //  format:'Y-m-d'
                                                         allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                  }]
                                     },{
                                            columnWidth : .99,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                         fieldLabel : '����',
                                                         anchor : '97%',
                                                         name : 'BK'
                                                       //  format:'Y-m-d'
                                                         //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                  }]
                                     }]

                            }],
              // Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
        buttons: [{
            text: '����',
             handler : function() {
                  if (!tsbsimpleForm_Save.form.isValid()) {return };
                  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                  if (tsbsimpleForm_Save.form.isValid()) {
                     // ���水ťҪ���ľ�������basicform�Ŀͻ�����֤����֤ͨ���������øð�ť״̬Ϊdisable����ֹ2���ύ��Ȼ�����simpleForm.form.doAction�����ύ����
                     //this.disabled = true;
                     // doAction�����ĵ�һ��������submit������˼�Ǳ�ʾִ�е����ύ�������ύ�ĺ�̨ҳ����test.jsp��url:'test.asp'�����ύ��ʽ��post��method:'post'����û�������ύ������params:''��
                     tsbsimpleForm_Save.form.doAction('submit', {
                                         					  waitMsg:'������,���Ժ�...',  
                                                              url : 'tsddjb_Save.jsp',
                                                              method : 'post',
                                                              params : '',
                                                              // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                                              // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                                              success : function(form, action) {
                                                                     // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                                                     //Ext.Msg.alert('����',action.result.data);
                                                              		 Ext.Msg.alert('��Ϣ',action.result.msg);
                                                              		//tsbsimpleForm_Save.form.reset();
                                                              		tsbsimpleForm_Save.buttons[4].setVisible(false);
                                                              		tsbsimple_Grid.getStore().reload();
                                                              		
                                                              },
                                                              // ����failure��������������ͨѶ���������ʱ����ʾ������Ϣ��
                                                              failure : function() {
                                                                     Ext.Msg.alert('����', '����ʧ�ܣ�');
                                                                     this.disabled = false;
                                                              }
                                                       });
                   }
                   // �����form����ǰ���ϰ취�ύ��������formpanel�Ķ����м���һ�����ã�
                   // onSubmit: Ext.emptyFn,
                   // submit: function() {
                   // this.getEl().dom.submit();}
                   // ��һ�����õ�Ŀ����ȡ��formpanel��Ĭ���ύ�������ڶ����������µ��ύ��ʽΪ�ɷ�ʽ�ύ��

            }
        }, {
            text : '�޸�',
            Enabled:false,
            handler : function() {
            	if (!tsbsimpleForm_Save.form.isValid()) {return };
           		if (tsbsimpleForm_Save.form.isValid()) {
                	tsbsimpleForm_Save.form.doAction('submit', {
                                               waitMsg:'�޸���,���Ժ�...',  
                                               url : 'tsddjb_Update.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		tsbsimpleForm_Save.buttons[0].setVisible(true);
                                               		tsbsimpleForm_Save.buttons[4].setVisible(false);
                                               		tsbsimple_Grid.getStore().reload();
                                               		Ext.Msg.alert('��Ϣ',action.result.msg);
                                               		
                                               },
                                               failure : function() {
                                                     Ext.Msg.alert('����', '�޸�ʧ�ܣ�');
                                                     this.disabled = false;
                                               }
            		});
           		 }
             }
         },{
             // ȡ����ť���Ǽ򵥵�resetһ��form�Ŀؼ�
             text : '����',
             handler : function() {
                   tsbsimpleForm_Save.form.reset();
                   tsbsimpleForm_Save.buttons[0].setVisible(true);
                   tsbsimpleForm_Save.buttons[1].setVisible(false);
             }
        }, {
            text : 'ɾ��',
            Enabled:false,
            handler : function() {
            	if (!tsbsimpleForm_Save.form.isValid()) {return };
           		if (tsbsimpleForm_Save.form.isValid()) {
                	tsbsimpleForm_Save.form.doAction('submit', {
                                               waitMsg:'ɾ����,���Ժ�...',  
                                               url : 'tsddjb_Del.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		tsbsimple_Grid.getStore().reload();
                                               		Ext.Msg.alert('��Ϣ',action.result.msg);
                                               		
                                               },
                                               failure : function() {
                                                     Ext.Msg.alert('����', 'ɾ��ʧ�ܣ�');
                                                     this.disabled = false;
                                               }
            		});
           		 }
             }
         },{
             text : '�����е�',
             handler : function() {
            	if (!tsbsimpleForm_Save.form.isValid()) {return };
           		if (tsbsimpleForm_Save.form.isValid()) {
                	tsbsimpleForm_Save.form.doAction('submit', {
                                               waitMsg:'������,���Ժ�...',  
                                               url : 'tsddjbfa_Update.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		tsbsimple_Grid.getStore().reload();
                                               		Ext.Msg.alert('��Ϣ',action.result.msg);
                                               		//window.location.href='../../xdhq/xdhq.jsp';
                                               },
                                               failure : function() {
                                                     Ext.Msg.alert('����', '�޸�ʧ�ܣ�');
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
       		title: '�ط����������¼',
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
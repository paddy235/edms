Ext.onReady(function() {
		this.ryshow=function(value){
		//alert("TZSID"+value);
    	win1 = new Ext.Window({
        	width:700,
        	height:500,
        	layout:'column',
       		title: '֪ͨ��',
        	closeAction:'hide',
        	plain: true,
        	autoScroll:false,

        	html:'<iframe style="width:690;height:420" src="../../tjbb/query/tzs.jsp?tzsid='+value+'"></iframe>',
        	buttons: [{
					text: '�ر�',
					handler: function(){
			    	// win.hide();
					win1.hide(this);
					}
			}]
    	});
    	win1.show(this);
  	};
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    
    //alert("aaa");
    
 	//��Ⱦ����html����
	var renderzt1 =function(value)
 	{
 	    if (value=='0')  
  		{
  			return "<span style='color:black;font-weight:bold;'>���δ����</span>";
  		}
 	 	else if(value=="1")
 	 	{
 	 		return "<span style='color:red;font-weight:bold;'>����ѷ��͡��е�δǩ��</span>";
 	 	}
 	 	else if (value=='2')  
  	    {
  	    	return "<span style='color:green;font-weight:bold;'>�е���ǩ�ϣ����</span>";
  	    }
 	 };
 	 var renderDel =function(value)
 	 {
 	     return '<a  href="tzs_del.jsp?TZSID='+value+'">ɾ��</a>';
 	 };
 
    //����Grid��ͷ
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        //new Ext.grid.RowNumberer(),
        {header:'֪ͨ����',dataIndex:'TZRQ',width:80,fixed:true},
        {header:'֪ͨ���',dataIndex:'TZSH',width:80,fixed:true},        
        {header:'���Ա',dataIndex:'DDMC',width:80,fixed:true},
        {header:'�е�Ա',dataIndex:'XDMC',width:80,fixed:true},
        {header:'�е�̨',dataIndex:'XDTMC',width:80,fixed:true},
        {header:'֪ͨ������',dataIndex:'TZNR',width:80},
		{header:'״̬',dataIndex:'ZT',width:150,renderer:renderzt1,fixed:true},
        {header:'ɾ��',dataIndex:'TZSID',width:60,renderer:renderDel,fixed:true}
    ]);
   
    
    var planRecord = Ext.data.Record.create([
    	{name:'TZSID',type:'int'},
    	{name:'TZSH',type:'string'},
    	{name:'TZRQ',type:'string'},
    	{name:'XDTDM',type:'string'},
    	{name:'DDMC',type:'string'},
    	{name:'XDMC',type:'string'},
    	{name:'TZNR',type:'string'},
		{name:'ZT',type:'string'},
    	{name:'XDTMC',type:'string'}
    	]);
    	
    
    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'tzs_json.jsp'}),        
        //reader����������ν����������
        baseParams:{whereclause:'1=1'},
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord)
    });
     
	store.load({params:{start:0, limit:10}});
	
    
    //���������,ָ����ģ�ͣ��ֿ⣬ѡ��ģ��(Ĭ����ѡ��ģ��)
    var simple_Grid = new Ext.grid.GridPanel({
        //el:ָ��htmlԪ��������ʾ��grid
        //el: 'grid3', 
        store:store,
    	cm: columns,
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
            pageSize: 10,
            store: store,
            displayInfo: true,
            displayMsg: '�� {0} ���� {1} ��,�� {2} ��',
            emptyMsg: "�޼�¼"
        })
      
    });
   	//Grid�ϴ����¼�
   
    	simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
    	// simpleForm_Query.collapse();
    	simpleForm_Save.expand();
    	var record=simple_Grid.getStore().getAt(rowIndex);
		var zt=record.get('ZT');
    	simpleForm_Save.getForm().loadRecord(record);
		if(zt=="0")
    	{
       	 	simpleForm_Save.buttons[0].setVisible(false);
			simpleForm_Save.buttons[1].setVisible(true);
        	simpleForm_Save.buttons[2].setVisible(true);
        	simpleForm_Save.buttons[3].setVisible(true);
        }
        else
        {
        	simpleForm_Save.buttons[0].setVisible(false);
        	simpleForm_Save.buttons[1].setVisible(false);
        	simpleForm_Save.buttons[3].setVisible(false);
        }
    	
    });	
   	//grid.addListener('cellClick',cellClick);
    //��ʾ��html��idΪcontainer�Ĳ���
    //grid.render();//��Ⱦ���
     Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	 // form start
     var xdt_store = new Ext.data.Store({
	 proxy : new Ext.data.HttpProxy({
			url : '../../share/combo_list.jsp?sql=select distinct XDTDM,XDTMC from J_GYJC_XDTZD'
		}),
		reader : new Ext.data.JsonReader({root : 'root'
				},[{name : 'value',mapping : 'value'},
				   {name : 'text',mapping : 'text'}
				  ]
			)
	});
	xdt_store.load();
	var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '֪ͨ���ѯ',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 600,
              collapsible:true,
              titleCollapse:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              labelWidth : 60,
              
              
              items : [{
                       layout : 'column',// columnlayout
                       border : false,// û�б߿�
                       labelSeparator : '��',// ����ķָ���������������ð�Ŵ���Ӣ�ĵ�ð�ţ�labelSeparator:'��'����
                       // coulmnLayout��Ŀؼ���������items��
                       items : [{
                                    columnWidth : .2,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                             xtype : 'datefield',// �ؼ�������Ϊdatefield
                                             fieldLabel : '��ʼ����',
                                             name : 'TZRQ',
                                             id:'tzrq1',
                                             //value: new Date,
                                             anchor : '90%',
                                             format:'Y-m-d'
                                      }]
                             },{
                                    columnWidth : .2,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                             xtype : 'datefield',// �ؼ�������Ϊdatefield
                                             fieldLabel : '��������',
                                             name : 'TZRQ',
                                             id:'tzrq2',
                                             //value: new Date,
                                             anchor : '90%',
                                             format:'Y-m-d'
                                      }]
                             },{
                                    columnWidth : .2,
                                    layout : 'form',
                                    border : false,
                                    items : [{
								        		xtype : 'combo',// �ؼ����������ó�combo
								           		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
								            	store : xdt_store,
								            	valueField : "value",
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
								            	id:'xdt',
								            	anchor : '90%'// input�Ŀ����90%
											}]
                             }]

                   	 }],
              // Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
              buttons : [{
                           // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
                            text : '��ѯ',
                           handler : function() {
                                  if (!simpleForm_Query.form.isValid()) {return };
                           		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                                  if (simpleForm_Query.form.isValid()) {
                                         //�����ѯ��ť���޸�whereclause��ֵ����Ϊ������������ҳ������ʧ
										//��Ҫ��Ұ�ԭ��query.jsp�е�ƴwhereclause���߼��õ�������									
										var where="1=1 ";										
										if(Ext.getCmp("tzrq1").getValue()!=""  ){
											where=where+" and TZRQ>=to_date('"+Ext.util.Format.date(Ext.getCmp("tzrq1").getValue(), 'Y-m-d')+"','yyyy-mm-dd')";
										}
										if(Ext.getCmp("tzrq2").getValue()!=""  ){
											where=where+" and TZRQ<=to_date('"+Ext.util.Format.date(Ext.getCmp("tzrq2").getValue(), 'Y-m-d')+"','yyyy-mm-dd')";
										}
										if(Ext.getCmp("xdt").getValue()!=""&&Ext.getCmp("xdt").getValue()!="ALL"  ){
											where=where+" and a.XDTDM ='"+Ext.getCmp("xdt").getValue()+"'";	
										}
										store.baseParams.whereclause = where; 
										
										simple_Grid.getStore().reload({ 
											params : { 
											start : 0, 
											limit : 10 
											} 
										});
									}
                           }
                    }, {

                           // ȡ����ť���Ǽ򵥵�resetһ��form�Ŀؼ�
                           text : '����',
                           handler : function() {
                                  simpleForm_Query.form.reset();
                                  simpleForm_Save.collapse();
                                 // window.location.href="";
                                  //window.location.href='zyjhsqAdd.jsp';
                           }
                    }]
       });
   
   
   
   //Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	 
	 
	 // form start
	var simpleForm_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '֪ͨ�����',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 600,
              collapsible:true,
              titleCollapse:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              labelWidth : 60,
              
              
              items : [{
                       layout : 'column',// columnlayout
                       border : false,// û�б߿�
                       labelSeparator : '��',// ����ķָ���������������ð�Ŵ���Ӣ�ĵ�ð�ţ�labelSeparator:'��'����
                       // coulmnLayout��Ŀؼ���������items��
                       items : [{xtype:'hidden',name:'TZSID',id:'tzs_id'},{
                                            columnWidth : .2,
                                            layout : 'form',
                                            border : false,
                                            items : [{
			                                             xtype : 'datefield',// �ؼ�������Ϊdatefield
			                                             fieldLabel : '֪ͨ����',
			                                             name : 'TZRQ',
			                                             id:'tz_rq',
			                                             //value: new Date,
			                                             anchor : '90%',
			                                             format:'Y-m-d',
			                                             allowBlank : false
			                                      }]
                                     },{
                                            columnWidth : .2,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                         fieldLabel : '֪ͨ���',
                                                         name : 'TZSH'
                                                  }]
                                     },{
                                            columnWidth : .2,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                         fieldLabel : '�������',
                                                         name : 'DDMC',
                                                         id:'dd_mc',
                                                         value:yh,
                                                       //  format:'Y-m-d'
                                                         allowBlank : false// ��ѡ��ֵ������
                                                  }]
                                     },{
                                        	columnWidth : .2,
                                            layout : 'form',
                                            border : false,
                                            items : [{
										        		xtype : 'combo',// �ؼ����������ó�combo
										           		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
										            	store : xdt_store,
										            	valueField : "value",
										            	displayField : "text",
										            	mode : 'local',// �������ڱ���
										            	//forceSelection : true,// ����ѡ��һ��ѡ��
										            	blankText : '��ѡ���е�̨',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
										            	emptyText : 'ѡ���е�̨',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
										            	hiddenName : 'XDTDM',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
										            	editable : false,// �������б�ֻ����ѡ�񣬲���������
										            	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
										            	//allowBlank : false,// ��ѡ��ֵ������Ϊ��
										            	fieldLabel : '�е�̨��',// �ؼ��ı�����ѧ��
										            	name : 'XDTDM',// �ٴ����ѣ�nameֻ�������б������
										            	anchor : '90%',// input�Ŀ����90%
										            	allowBlank : false
													}]
                                     },{
                                            columnWidth : .2,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                         fieldLabel : '�е�����',
                                                         name : 'XDMC'
                                                  }]
                                     },{
                                            columnWidth : .99,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                         xtype : 'textarea',// �ؼ�������Ϊdatefield
                                                         fieldLabel : '֪ͨ����',
                                                         name : 'TZNR',
                                                         anchor : '98%',
                                                         height:'80'
                                                  }]
                                     }]

                            }],
              // Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
        buttons: [{
            text: '����',
             handler : function() {
                  if (!simpleForm_Save.form.isValid()) {return };
                  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                  if (simpleForm_Save.form.isValid()) {
                     // ���水ťҪ���ľ�������basicform�Ŀͻ�����֤����֤ͨ���������øð�ť״̬Ϊdisable����ֹ2���ύ��Ȼ�����simpleForm.form.doAction�����ύ����
                     //this.disabled = true;
                     // doAction�����ĵ�һ��������submit������˼�Ǳ�ʾִ�е����ύ�������ύ�ĺ�̨ҳ����test.jsp��url:'test.asp'�����ύ��ʽ��post��method:'post'����û�������ύ������params:''��
                     simpleForm_Save.form.doAction('submit', {
                                         					  waitMsg:'������,���Ժ�...',  
                                                              url : 'Save.jsp',
                                                              method : 'post',
                                                              params : '',
                                                              // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                                              // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                                              success : function(form, action) {
                                                                     // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                                                     Ext.Msg.alert('����',action.result.data);
                                                              		Ext.Msg.alert('��Ϣ',action.result.msg);
                                                              		simpleForm_Query.form.reset();
                                                              		simple_Grid.getStore().reload();
                                                              		
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
            	if (!simpleForm_Save.form.isValid()) {return };
           		if (simpleForm_Save.form.isValid()) {
                	simpleForm_Save.form.doAction('submit', {
                                               waitMsg:'�޸���,���Ժ�...',  
                                               url : 'Update.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		simple_Grid.getStore().reload();
                                               		Ext.Msg.alert('��Ϣ',action.result.msg);
                                               		
                                               },
                                               failure : function() {
                                                     Ext.Msg.alert('����', '����ʧ�ܣ�');
                                                     this.disabled = false;
                                               }
            		});
           		 }
             }
         },{

             // ȡ����ť���Ǽ򵥵�resetһ��form�Ŀؼ�
             text : '����',
             handler : function() {
                   simpleForm_Save.form.reset();
                   simpleForm_Save.buttons[0].setVisible(true);
                   simpleForm_Save.buttons[1].setVisible(false);
                   simpleForm_Save.buttons[3].setVisible(false);
                   //simpleForm_Save.buttons[4].setVisible(false);
                   //simpleForm_Query.collapse();
                   // window.location.href="";
             }
        },   {
            text : '�����е�',
            Enabled:false,
            handler : function() {
            	if (!simpleForm_Save.form.isValid()) {return };
           		if (simpleForm_Save.form.isValid()) {
                	simpleForm_Save.form.doAction('submit', {
                                               waitMsg:'������,���Ժ�...',  
                                               url : 'tzs_to_xd.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		simpleForm_Save.buttons[0].setVisible(false);
													simpleForm_Save.buttons[1].setVisible(false);
													simpleForm_Save.buttons[3].setVisible(false);
                                               		simple_Grid.getStore().reload();
                                               		Ext.Msg.alert('��Ϣ',action.result.msg);
                                               		
                                               },
                                               failure : function() {
                                                     Ext.Msg.alert('����', '����ʧ�ܣ�');
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
		items: [simpleForm_Save,simpleForm_Query,simple_Grid]
	});
	simpleForm_Save.collapse();
	simpleForm_Save.buttons[1].setVisible(false);
	simpleForm_Save.buttons[3].setVisible(false);
	
 });
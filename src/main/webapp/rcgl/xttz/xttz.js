Ext.onReady(function(){

    Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
	
    //��Ⱦ����html����
 	 var renderDel =function(value)
 	 {
 	     return '<a  href="xttzDel.jsp?ymd='+value+'">ɾ��</a>';
 	 };
 	 
 	 //����Grid��ͷ
   	 var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
         new Ext.grid.RowNumberer(),
        {header:'֪ͨʱ��',dataIndex:'ymd',sortable:true,width:116},
        {header:'��Ч����',dataIndex:'days',sortable:true,width:56},
        {header:'��Ҫ�̶�',dataIndex:'priority',sortable:true,width:56},
        {header:'����',dataIndex:'title',sortable:true,width:166},
        {header:'����',dataIndex:'content',sortable:true},
        {header:'������',dataIndex:'auther',sortable:true,width:56},
        {header:'�������',dataIndex:'flag',width:56}
        ]);
     
     var planRecord = Ext.data.Record.create([    	
    	{name:'ymd',type:'string'},
    	{name:'days',type:'string'},
    	{name:'priority',type:'string'},
    	{name:'title',type:'string'},
    	{name:'content',type:'string'},
    	{name:'auther',type:'string'},
    	{name:'flag',type:'string'}
     ]);
     
     //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
	 var store = new Ext.data.Store({
     	proxy: new Ext.data.HttpProxy({url:'xttz_json.jsp'}),  
     	baseParams:{whereclause:'1=1'},//�����ҳ��ʱ�����ֵ������ʧ����Ϊ����������ֻ�е����ѯ��ťʱ�Ż�ı�
     	reader: new Ext.data.JsonReader({
     		totalProperty: 'totalCount',
     		root: 'root',
     		successProperty :'success'
        },planRecord)
    });
	store.load({params:{start:0, limit:10}});
	
	//���������,ָ����ģ�ͣ��ֿ⣬ѡ��ģ��(Ĭ����ѡ��ģ��)
    var simple_Grid = new Ext.grid.GridPanel({
        title: '֪ͨ�б�', 
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
        autoWidth: true,
        autoHeight: true,
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
    	simpleForm_Save.expand();
    	//simpleForm_Save.buttons[0].setVisible(false);
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	simpleForm_Save.getForm().loadRecord(record);
    });	

    //grid.render();//��Ⱦ���
    Ext.form.Field.prototype.msgTarget = 'side'; 

	var SGLX_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select sxid,sxmc from J_GDGY_SXZD  where sxid>009000 and sxid<010000 order by sxid'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	SGLX_store.load();
    
	var simpleForm_Query = new Ext.FormPanel({
		//renderTo : document.body,
       	title: '֪ͨ��ѯ',
        labelAlign : 'left',
        bodyStyle:'padding:5px 5px 0',
        //labelWidth: 75, 
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
                columnWidth : .3,
                layout : 'form',
                border : false,
                items : [{
                    xtype:'datefield',
                    fieldLabel: '��ʼ����',
                    id: 'ksrq',
                    anchor:'95%',
                    format:'Y-m-d',
                    allowBlank : true
                }]
            }, {
               columnWidth : .3,
               layout : 'form',
               border : false,
               items : [{
                   xtype:'datefield',
                   fieldLabel: '��������',
                   id: 'jsrq',
                   anchor:'95%',
                   format:'Y-m-d',
                   allowBlank : true
                }]
            },{
              columnWidth : .3,
              layout : 'form',
              border : false,
              items: [{
                    		xtype : 'combo',
                        	store : new Ext.data.SimpleStore({
                        		fields : ["returnValue", "displayText"],
                        		data : [['', 'ȫ��'],['1', 'һ��'],
                                   		['2', '��Ҫ'], ['3', '����']]
                        	}),
                        	valueField : "returnValue",
                        	displayField : "displayText",
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��Ҫ�̶�',
                        	emptyText : '��Ҫ�̶�',
                        	hiddenName : 'priority',
                        	editable : false,
                        	triggerAction : 'all',
                        	//allowBlank : false,
                        	fieldLabel : '��Ҫ�̶�',
                        	id : 'priority_id',
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
                    	//�����ѯ��ť���޸�whereclause��ֵ����Ϊ������������ҳ������ʧ
						//��Ҫ��Ұ�ԭ��query.jsp�е�ƴwhereclause���߼��õ�������									
						var where="1=1 ";												
						if(Ext.getCmp("ksrq").getValue()!="" ){
							where=where+" and ymd>=to_date('"+Ext.util.Format.date(Ext.getCmp("ksrq").getValue(), 'Y-m-d')+"','yyyy-mm-dd')";	
						}
						if(Ext.getCmp("jsrq").getValue()!="" ){
							where=where+" and ymd<=to_date('"+Ext.util.Format.date(Ext.getCmp("jsrq").getValue(), 'Y-m-d')+"','yyyy-mm-dd')";	
						}
						if(Ext.getCmp("priority_id").getValue()!=''  && Ext.getCmp("priority_id").getValue()!='all'){
							where=where+" and priority="+Ext.getCmp("priority_id").getValue()+" ";
						}
						//alert(where);
						store.baseParams.whereclause = where; 
						simple_Grid.getStore().reload({ 
							params : { 
							start : 0, 
							limit : 10 
							} 
						});
       				}
			}
          }]
       });

    var simpleForm_Save = new Ext.FormPanel({
       	renderTo : document.body,
       	title: '֪ͨ�༭',
        labelAlign : 'left',
        bodyStyle:'padding:5px 5px 0',
        labelWidth: 55, 
        collapsible:true,
        titleCollapse:true,
        method:'POST',
        frame:true,
        autoWidth:true,
        autoHeight: true,
        //width: 1000,
        items: [{
            layout:'column',		//��һ��
            items:[{
                columnWidth:.5,
                layout: 'form',
                items:[{
                    xtype : 'textfield',// �ؼ�������Ϊdatefield
                    fieldLabel : '֪ͨʱ��',
                    name : 'ymd',
                    allowBlank : false,
                    anchor : '90%',
                    listeners: {
                        		'focus': function(){WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})}
                   	},
                    format:'Y-m-d H:i:s'
               	}]
            },{
                columnWidth:.21,
                layout: 'form',
                items:[{
                    xtype : 'textfield',// �ؼ�������Ϊdatefield
                    fieldLabel : '��ʾ����',
                    name : 'days',
                    allowBlank : false,
                    anchor : '90%'
                    
               	}]
            },{
                columnWidth:.29,
                layout: 'form',
                items:[{
                    		xtype : 'combo',
                        	store : new Ext.data.SimpleStore({
                        		fields : ["returnValue", "displayText"],
                        		data : [['1', 'һ��'],
                                   		['2', '��Ҫ'], ['3', '����']]
                        	}),
                        	valueField : "returnValue",
                        	displayField : "displayText",
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��Ҫ�̶�',
                        	emptyText : '��Ҫ�̶�',
                        	hiddenName : 'priority',
                        	editable : false,
                        	triggerAction : 'all',
                        	allowBlank : false,
                        	fieldLabel : '��Ҫ�̶�',
                        	name : 'priority',
                        	anchor : '95%'
    				}]
            }]
           },{
            layout:'column',		//��һ��
            items:[{
                columnWidth:.5,
                layout: 'form',
                items:[{
                    xtype : 'textfield',// �ؼ�������Ϊdatefield
                    fieldLabel : '������',
                    name : 'auther',
                    allowBlank : false,
                    anchor : '90%'
               	}]
            },{
                columnWidth:.5,
                layout: 'form',
                items:[{
                    		xtype : 'combo',
                        	store : new Ext.data.SimpleStore({
                        		fields : ["returnValue", "displayText"],
                        		data : [['0', '��Ч'],
                                   		['1', '����']]
                        	}),
                        	valueField : "returnValue",
                        	displayField : "displayText",
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '���',
                        	emptyText : '���',
                        	hiddenName : 'flag',
                        	editable : false,
                        	triggerAction : 'all',
                        	allowBlank : false,
                        	fieldLabel : '���',
                        	name : 'flag',
                        	anchor : '95%'
    			}]
            }]
           },{
            layout:'column',		//�ڶ���
            items:[{
                columnWidth:.99,
                layout: 'form',
                items:[{
                xtype : 'field',// �ؼ�������Ϊdatefield
                fieldLabel : '����',
                name : 'title',
                anchor : '99%'
                //allowBlank : false// ��ѡ��ֵ������Ϊ��
         	}]
            }]
           },{
            layout:'column',		//������
            items:[{
                columnWidth:.99,
                layout: 'form',
                items:[{
                xtype : 'textarea',// �ؼ�������Ϊdatefield
                fieldLabel : '����',
                name : 'content',
                id:'content', 
                anchor : '99%',
                height:80
                //allowBlank : false// ��ѡ��ֵ������Ϊ��
         		}]
            }]
           }
           ],

         buttons: [{
            text: '����',
             handler : function() {
                  if (!simpleForm_Save.form.isValid()) {return };
                  if (simpleForm_Save.form.isValid()) {
                     simpleForm_Save.form.doAction('submit', {
                                                 	waitMsg:'������,���Ժ�...',  
                                                    url : 'xttzSave.jsp',
                                                    method : 'post',
                                                    params : '',
                                                    success : function(form, action) {
                                                             if(action.result.msg!="")
                                                             {	store.baseParams.whereclause = "1=1"; 
																simple_Grid.getStore().reload({ 
																	params : { 
																	start : 0, 
																	limit : 10 
																	} 
																});
                                                             	Ext.Msg.alert('��Ϣ','����ɹ���');
                                                             }                                                            
                                                    },
                                                    failure : function() {
                                                             Ext.Msg.alert('����', '����ʧ�ܣ�');
                                                             this.disabled = false;
                                                    }
                     });
                   }
            }
        }, {
            text : 'ɾ��',
            Enabled:false,
            handler : function() {
            	if (!simpleForm_Save.form.isValid()) {return };
           		if (simpleForm_Save.form.isValid()) {
                	simpleForm_Save.form.doAction('submit', {
                                               waitMsg:'�޸���,���Ժ�...',  
                                               url : 'xttzDel.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		store.baseParams.whereclause = "1=1"; 
																simple_Grid.getStore().reload({ 
																	params : { 
																	start : 0, 
																	limit : 10 
																	} 
																});
                                               		Ext.Msg.alert('��Ϣ',action.result.msg);
                                               },
                                               failure : function() {
                                                     Ext.Msg.alert('����', 'ɾ��ʧ�ܣ�');
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
	//simple_Grid.collapse();
	simpleForm_Query.collapse();
	if(ddz=='0'){
		simpleForm_Save.buttons[1].setVisible(false);
		simpleForm_Save.buttons[0].setVisible(false);
	}
//	var my_reload=function (){
//		//��Ҫ���ڼ��ص�store
//	  	simple_Grid.getStore().reload();
//	}
//	setInterval(my_reload,3000);

});

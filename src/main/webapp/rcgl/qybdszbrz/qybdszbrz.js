Ext.onReady(function() {
	
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    
    //alert("aaa");
    
 	//��Ⱦ����html����
 	 var renderXiangxi =function(value)
 	 {
 	     return '<a href="aa.jsp?id='+value+'">��ϸ</a>';
 	 };
 	 

 	 var renderDel =function(value)
 	 {
 	     return '<a  href="qybdszbrz_del.jsp?RZID='+value+'">ɾ��</a>';
 	 };
 

 
 
 
    //����Grid��ͷ
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        //new Ext.grid.RowNumberer(),
        
        {header:'����',dataIndex:'RZSJ',width:60},
        {header:'����',dataIndex:'BDS',width:60},
        {header:'ֵ����',dataIndex:'ZBR',width:60},
        {header:'������',dataIndex:'FZR',width:60},
        {header:'��������',dataIndex:'CQRS',width:60},
        {header:'����',dataIndex:'TQ',width:60},
        {header:'���п���',dataIndex:'YXKG',width:60},
       
        {header:'ɾ��',dataIndex:'RZID',width:60,renderer:renderDel,fixed:true}
    ]);
   
    
    var planRecord = Ext.data.Record.create([
    	{name:'RZID',type:'int'},
    	{name:'RZSJ',type:'string'},
    	{name:'BDS',type:'string'},
    	{name:'ZBR',type:'string'},
    	{name:'FZR',type:'string'},
    	{name:'CQRS',type:'string'},
    	{name:'TQ',type:'string'},
    	{name:'YXKG',type:'string'}
    	]);
    	
    
    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'qybdszbrz_json.jsp'}),        
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
        
        //��Grid���Ϸ���Ӱ�ť
        /*
        tbar: new Ext.Toolbar({ 
        	items:[ 
                { 
                    id:'buttonA',
                    text:"���",
                    handler: this.showAdd,
                    scope:this 
                },
                { 
                    id:'buttonA',
                    text:"���",
                    handler: this.showAdd,
                    scope:this 
                }
             ] 
        }) 
        */
    });
   	//Grid�ϴ����¼�
   var my_kpid="";
    	simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
    	// simpleForm_Query.collapse();
    	simpleForm_Save.expand();
    	simpleForm_Save.buttons[0].setVisible(false);
    	simpleForm_Save.buttons[1].setVisible(true);
    	//simpleForm_Save.buttons[3].setVisible(true);
    	//simpleForm_Save.buttons[4].setVisible(true);;
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	//alert(record);
    	//alert(record.get('albm'));
    	
    	simpleForm_Save.getForm().loadRecord(record);
    	
    });	
   	//grid.addListener('cellClick',cellClick);
    //��ʾ��html��idΪcontainer�Ĳ���
    //grid.render();//��Ⱦ���
     Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	 // form start
     var dw_store = new Ext.data.Store({
	 proxy : new Ext.data.HttpProxy({
			url : '../../share/combo_list.jsp?sql=select distinct GQDM,GQMC from J_GYJC_GQZD where JGLBDM=2&all=all'
		}),
		reader : new Ext.data.JsonReader({root : 'root'
				},[{name : 'value',mapping : 'value'},
				   {name : 'text',mapping : 'text'}
				  ]
			)
	});
	dw_store.load();
	var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : 'ǣ�������ֵ����־��ѯ',
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
                       items : [{
                                    columnWidth : .3,
                                    layout : 'form',
                                    border : false,
                                    items : [{
								        		xtype : 'combo',// �ؼ����������ó�combo
								           		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
								            	store : dw_store,
								            	valueField : "value",
								            	displayField : "text",
								            	mode : 'local',// �������ڱ���
								            	//forceSelection : true,// ����ѡ��һ��ѡ��
								            	blankText : '��ѡ��λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
								            	emptyText : 'ѡ��λ',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
								            	hiddenName : 'BDS',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
								            	editable : false,// �������б�ֻ����ѡ�񣬲���������
								            	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
								            	//allowBlank : false,// ��ѡ��ֵ������Ϊ��
								            	fieldLabel : '��λ����',// �ؼ��ı�����ѧ��
								            	name : 'BDS',// �ٴ����ѣ�nameֻ�������б������
								            	id:'bds_mc',
								            	anchor : '70%'// input�Ŀ����90%
												}]
                             },{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
																 xtype : 'textfield',// �ؼ�������Ϊdatefield
																 fieldLabel : '����',
																// allowBlank : false,
																 name : 'RZSJ',
																 id:'rzsj_id',
																 anchor : '90%',
																 listeners: {"focus": function(){
																 WdatePicker({dateFmt:'yyyy-MM-dd'})}}
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
										if(Ext.getCmp("bds_mc").getValue()!=""&&Ext.getCmp("bds_mc").getValue()!="ALL"  ){
											where=where+" and BDS like '%"+Ext.getCmp("bds_mc").getValue()+"%'";
										}
										if(Ext.getCmp("rzsj_id").getValue()!=""&&Ext.getCmp("rzsj_id").getValue()!="ALL"  ){
											where=where+" and RZSJ =to_date('"+Ext.getCmp("rzsj_id").getValue()+"','yyyy-MM-dd')";	
	
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
              title : 'ǣ�������ֵ����־',
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
                                   items : [{xtype:'hidden',name:'RZID'},{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
																 xtype : 'textfield',// �ؼ�������Ϊdatefield
																 fieldLabel : '����',
																 allowBlank : false,
																 name : 'RZSJ',
																 anchor : '90%',
																 listeners: {"focus": function(){
																 WdatePicker({dateFmt:'yyyy-MM-dd'})}}
                                                         }]
                                                 },{
                                            columnWidth : .25,
                                            layout : 'form',
                                            border : false,
                                            items : [{
								        		xtype : 'combo',// �ؼ����������ó�combo
								           		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
								            	store : dw_store,
								            	valueField : "value",
								            	displayField : "text",
								            	mode : 'local',// �������ڱ���
								            	//forceSelection : true,// ����ѡ��һ��ѡ��
								            	blankText : '��ѡ�����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
								            	emptyText : 'ѡ�����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
								            	hiddenName : 'BDS',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
								            	editable : false,// �������б�ֻ����ѡ�񣬲���������
								            	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
								            	//allowBlank : false,// ��ѡ��ֵ������Ϊ��
								            	fieldLabel : '��������',// �ؼ��ı�����ѧ��
								            	name : 'BDS',// �ٴ����ѣ�nameֻ�������б������
								            	anchor : '90%'// input�Ŀ����90%
												}]
                                                 },{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : 'ֵ����',
                                                                             name : 'ZBR',
                                                                            id:'ZBR_ID',
                                                                           //  format:'Y-m-d'
                                                                             allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '������',
                                                                             name : 'FZR',
                                                                             anchor : '75%',
                                                                           //  format:'Y-m-d'
                                                                             allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��������',
                                                                             name : 'CQRS',
                                                                             anchor : '90%',
                                                                           //  format:'Y-m-d'
                                                                             allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '����',
                                                                             name : 'TQ',
                                                                             anchor : '90%',
                                                                           //  format:'Y-m-d'
                                                                             allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth : .9,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textarea',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '���п���',
                                                                             name : 'YXKG',
                                                                             anchor : '100%',
                                                                             height:'50',
                                                                           //  format:'Y-m-d'
                                                                             allowBlank : false// ��ѡ��ֵ������Ϊ��
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
                                               		simpleForm_Save.buttons[0].setVisible(true);
                                               		simple_Grid.getStore().reload();
                                               		Ext.Msg.alert('��Ϣ',action.result.msg);
                                               		//Ext.getCmp("KP_ID").enable();
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
                   //simpleForm_Save.buttons[3].setVisible(false);
                   //simpleForm_Save.buttons[4].setVisible(false);
                   //simpleForm_Query.collapse();
                   // window.location.href="";
                  // Ext.getCmp("KP_ID").enable();
             }
        }]
    }); 
    
    //��sessionȡֵ��ֵ��form�ֶ�;
	//Ext.Ajax.request({
		//url: 'GetSessionValue.jsp',
		//success: function(response, opts) 
			//{
			// simpleForm_Save.getForm().setValues([{albm: "albm",value: response.responseText} ]);
			//},		
		//failure: function(response, opts) {
      		//console.log('�����ʧЧ��״̬���룺' + response.status);
   			//}
	//});
    
    var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Save,simpleForm_Query,simple_Grid]
	});
	simpleForm_Save.collapse();
	simpleForm_Save.buttons[1].setVisible(false);
	//simpleForm_Save.buttons[3].setVisible(false);
	//simpleForm_Save.buttons[4].setVisible(false);
	//Ext.getCmp("KP_ID").enable();
 });
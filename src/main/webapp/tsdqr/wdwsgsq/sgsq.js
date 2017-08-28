Ext.onReady(function() {
	
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    
    //alert("aaa");
    
 	//��Ⱦ����html����
 
 	 var renderDel =function(value)
 	 {
 	     return '<a  href="sgsq_del.jsp?sgid='+value+'">ɾ��</a>';
 	 };
 	 
 	 
 	
 	 
  
 
    //����Grid��ͷ
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        //new Ext.grid.RowNumberer(),
      
        {header:'ʩ��ID',dataIndex:'sgid',width:40},
        {header:'����ʱ��',dataIndex:'sqsj',width:60,sortable:true},
        {header:'ʩ����ʼʱ��',dataIndex:'sgkssj',width:60,sortable:true},
        {header:'ʩ������ʱ��',dataIndex:'sgjssj',width:60,sortable:true},
        {header:'ʩ��ʱ��',dataIndex:'sgsj',width:40,sortable:true},
        {header:'ʩ���ص�',dataIndex:'sgdd',width:60,sortable:true},
        {header:'ʩ������',dataIndex:'sgnr',width:60,sortable:true},
        {header:'ͣ�緶Χ',dataIndex:'tdfw',width:60,fixed:true},
        {header:'�����ڿ���·',dataIndex:'fstkxl',width:60,sortable:true},
        {header:'�����',dataIndex:'gdc',width:60,sortable:true},
        {header:'��ע',dataIndex:'bz',width:60,sortable:true},
        {header:'������',dataIndex:'sqr',width:60,fixed:true},
        {header:'ɾ��',dataIndex:'sgid',width:60,renderer:renderDel,fixed:true}
    ]);
   
    
    var planRecord = Ext.data.Record.create([
    	{name:'sgid',type:'int'},
    	{name:'sqsj',type:'string'},
    	{name:'sgkssj',type:'string'},
    	{name:'sgjssj',type:'string'},
    	{name:'sgsj',type:'string'},
    	{name:'sgdd',type:'string'},
    	{name:'sgnr',type:'string'},
    	{name:'tdfw',type:'string'},
    	{name:'fstkxl',type:'string'},
    	{name:'gdc',type:'string'},
    	{name:'bz',type:'string'},
    	{name:'sqr',type:'string'}
    	]);
    	
    
    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'sgsq_json.jsp'}),        
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
    var my_cjdm="";
       	simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
    	// simpleForm_Query.collapse();
    	simpleForm_Save.expand();
    	simpleForm_Save.buttons[0].setVisible(false);
    	simpleForm_Save.buttons[1].setVisible(true);
    	//simpleForm_Save.buttons[3].setVisible(true);
    	//simpleForm_Save.buttons[4].setVisible(true);
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	//alert(record);
    	//alert(record.get('albm'));
    	
    	simpleForm_Save.getForm().loadRecord(record);
    	my_cjdm=Ext.getCmp("sgid").getValue();
    	Ext.getCmp("sgid").disable();
    });	
   	//grid.addListener('cellClick',cellClick);
    //��ʾ��html��idΪcontainer�Ĳ���
    //grid.render();//��Ⱦ���
     Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	 // form start

	



	var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '������Ϣ��ѯ',
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
                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                             fieldLabel : '��ʼ����',
                                             name : 'SJSJ',
                                             id:'sjsj1',
                                             //value: new Date,
                                             anchor : '55%',
                                             listeners: {"focus": function(){
                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                      }]
                             },{
                                    columnWidth : .3,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                             fieldLabel : '��������',
                                             name : 'SJSJ',
                                             id:'sjsj2',
                                             //value: new Date,
                                             anchor : '55%',
                                             listeners: {"focus": function(){
                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
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
												if(Ext.getCmp("czdmid").getValue()!=""&&Ext.getCmp("czdmid").getValue()!="ALL" ){
													where=where+" and CZDM like '%"+Ext.getCmp("czdmid").getValue()+"%'";
												}
											    if(Ext.getCmp("sjsj1").getValue()!=""  ){
											        where=where+" and SJSJ>=to_date('"+Ext.getCmp("sjsj1").getValue()+"','yyyy-mm-dd hh24:mi:ss')";
										        }
										        if(Ext.getCmp("sjsj2").getValue()!=""  ){
											        where=where+" and SJSJ<=to_date('"+Ext.getCmp("sjsj2").getValue()+"','yyyy-mm-dd hh24:mi:ss')";
										        }
												if(Ext.getCmp("jcxhid").getValue()!=""&&Ext.getCmp("jcxhid").getValue()!="ALL" ){
													where=where+" and JCXH like'%"+Ext.getCmp("jcxhid").getValue()+"%'";	
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
              title : 'ʩ���������',
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
                                                        columnWidth : .23,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '����ʱ��',
                                                                             name : 'sqsj',
                                                                             id:'txt_sqsj',
                                                                             anchor : '90%',
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth : .23,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : 'ʩ����ʼʱ��',
                                                                             name : 'sgkssj',
                                                                             id:'txt_sgkssj',
                                                                             allowBlank : false,
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 }, {
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : 'ʩ������ʱ��',
                                                                             name : 'sgjssj',
                                                                             id:'txt_sgjssj',
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             allowBlank : false,
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth : .26,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : 'ʩ��ʱ�䣨�֣�',
                                                                             name : 'sgsj',
                                                                             //allowBlank : false,
                                                                             id:'txt_sgsj',
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             listeners:{"focus":function(){
	                                                                             var sgkssj=Ext.getCmp("txt_sgkssj").getValue();
	                                                                             var sgjssj=Ext.getCmp("txt_sgjssj").getValue();
	                                                                             var bg = new Date(sgkssj.replace("-","/")).getTime();
																				 var fh = new Date(sgjssj.replace("-","/")).getTime();
																				 if(sgkssj!=''&& sgjssj!='')
																				 {
																				    Ext.getCmp("txt_sgsj").setValue((fh-bg)/60000);
																				 }
																				 
                                                                             }}
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 }]

                            },{
                                   layout : 'column',// columnlayout
                                   border : false,// û�б߿�
                                   labelSeparator : '��',// ����ķָ���������������ð�Ŵ���Ӣ�ĵ�ð�ţ�labelSeparator:'��'����
                                   // coulmnLayout��Ŀؼ���������items��
                                   items : [{
                                                        columnWidth : .50,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : 'ʩ���ص�',
                                                                             name : 'sgdd',
                                                                             id:'txt_sgdd',
                                                                             //readOnly:true,
                                                                             //disabled:true,
                                                                             anchor : '90%'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 },{
                                                        columnWidth : .49,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : 'ʩ������',
                                                                             name : 'sgnr',
                                                                            // readOnly:true,
                                                                             id:'txt_sgnr',
                                                                             //disabled:true,
                                                                             anchor : '90%'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 }]

                            },{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{
                                                        columnWidth : .97,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textarea',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : 'ͣ�緶Χ',
                                                                             name : 'tdfw',
                                                                             id:'txt_tdfw',
                                                                             anchor : '97%',
                                                                             height:30
                                                                             //format:'Y-m-d'
                                                                      }]
                                                 }]
                            },{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{
                                                        columnWidth : .97,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textarea',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '�����ڿ���·',
                                                                             name : 'fstkxl',
                                                                             id : 'txt_fstkxl',
                                                                             anchor : '97%',
                                                                             height:30
                                                                             //format:'Y-m-d'
                                                                      }]
                                                 }]
                            },{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{
                                                        columnWidth : .97,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textarea',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '�����',
                                                                             name : 'gdc',
                                                                             id : 'txt_gdc',
                                                                             anchor : '97%',
                                                                             height:30
                                                                             //format:'Y-m-d'
                                                                      }]
                                                 }]
                            },{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{
                                                        columnWidth : .97,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textarea',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��ע',
                                                                             name : 'bz',
                                                                             id : 'txt_bz',
                                                                             anchor : '97%',
                                                                             height:'30'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 }]
                            },{
                           layout : 'column',// columnlayout
                           border : false,// û�б߿�
                           labelSeparator : '��',// ����ķָ���������������ð�Ŵ���Ӣ�ĵ�ð�ţ�labelSeparator:'��'����
                           // coulmnLayout��Ŀؼ���������items��
                          items : [{
                                                        columnWidth : .23,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '������',
                                                                             name : 'sqr',
                                                                             id:'txt_sqr',
                                                                             //readOnly:true,
                                                                             //disabled:true,
                                                                             anchor : '90%'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 },{
                                    columnWidth : .3,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                                         xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                         //fieldLabel : '����ID',
                                                         name : 'sgid',
                                                         id:'sgid',
                                                         hidden:true,
                                                         hideLable:true,
                                                       //  format:'Y-m-d'
                                                         allowBlank : true// ��ѡ��ֵ������Ϊ��
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
                                                                      url : 'save.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                                                      // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                                                      success : function(form, action) {
                                                                             // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                                                            // Ext.Msg.alert('����',action.result.data);
                                                                            simple_Grid.getStore().reload();
                                                                      		Ext.Msg.alert('��Ϣ',action.result.msg);
                                                                      		simpleForm_Query.form.reset();
                                                                      		
                                                                      		
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
                                               url : 'Update.jsp?sgid='+my_cjdm,
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		simpleForm_Save.buttons[0].setVisible(true);
                                               		simple_Grid.getStore().reload();
                                               		Ext.Msg.alert('��Ϣ',action.result.msg);
                                               		Ext.getCmp("sgid").enable();
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
                   Ext.getCmp("sgid").enable();
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
    var myyear,mymonth,myweek,myday,mytime,mymin,myhour,mysec;
var mydate=new Date();
myyear=mydate.getFullYear();
mymonth=mydate.getMonth()+1;
myday=mydate.getDate();
myhour=mydate.getHours();
mymin=mydate.getMinutes();
mysec=mydate.getSeconds();
if(myday<10)
{
  myday="0"+myday;
}

mytime=myyear+"-"+mymonth+"-"+myday+" 00"+":00";

    var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Save,simpleForm_Query,simple_Grid]
	});
	simpleForm_Save.collapse();
	simpleForm_Save.buttons[1].setVisible(false);
	//simpleForm_Save.buttons[3].setVisible(false);
	//simpleForm_Save.buttons[4].setVisible(false);
	Ext.getCmp("sgid").enable();
 });
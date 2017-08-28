Ext.onReady(function() {
	
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    
         	 ///----���λ-----------
    //������
     	var planRecord_dw = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_dw = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'select_gq.jsp'}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_dw)
    });
     store_dw.load();
   
    //����Grid��ͷ
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        //new Ext.grid.RowNumberer(),
        
        {header:'���',dataIndex:'xh',width:40,fixed:true},
        {header:'��¼���',dataIndex:'jlbh',width:40,hidden:true},
		{header:'����',dataIndex:'jlrq',width:50,sortable:true},
        {header:'��������',dataIndex:'mc',width:60,sortable:true},
        {header:'�ص�����',dataIndex:'ddnr',width:100,sortable:true},
        {header:'��׼ʱ��',dataIndex:'pzsj',width:50,sortable:true},
        {header:'Ҫ�����ʱ��',dataIndex:'yqwcsj',width:50,sortable:true},
        {header:'������ʱ��',dataIndex:'wxlsj',width:50,sortable:true},
        {header:'��д��',dataIndex:'txr',width:40,sortable:true}
    ]);
   
    
    var planRecord = Ext.data.Record.create([
    	{name:'xh',type:'int'},
    	{name:'jlbh',type:'int'},
    	{name:'jlrq',type:'string'},
    	{name:'gqmc',type:'string'},
    	{name:'ddnr',type:'string'},
    	{name:'pzsj',type:'string'},
    	{name:'yqwcsj',type:'string'},
    	{name:'wxlsj',type:'string'},
    	{name:'mc',type:'string'},
    	{name:'txr',type:'string'}
	]);    	
    
    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'wxlqkjl_json.jsp'}),        
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
   	//grid.addListener('cellClick',cellClick);
    //��ʾ��html��idΪcontainer�Ĳ���
    //grid.render();//��Ⱦ���
    
    
    Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	// form start
	var simpleForm_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '�������¼�����Ǽ�',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 800,
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
                                   items : [{xtype:'hidden',name:'jlbh'},												
										        {
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                				xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store :store_dw,
                                                               //value:'ȫ��',
                                                               valueField : "value",// ��������ѡ����ֵ
                                                               displayField : "text",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               //blankText : '��ѡ����ҵ��λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '��λ',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'gqmc',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '��λ',// �ؼ��ı�����ѧ��
                                                               name : 'taskunit',// �ٴ����ѣ�nameֻ�������б������
                                                               id:'gq',
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                   }, {
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'datefield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��¼����',
                                                                             name : 'jlrq',
                                                                             anchor : '90%',
                                                                             value: new Date,
                                                                             format:'Y-m-d'
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
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
			                                                                        fieldLabel : '�ص�����',
			                                                                        name : 'ddnr',
			                                                                        anchor : '90%',
			                                                                        height:100
			                                                                        //format:'Y-m-d'
			                                                                 }]
			                                            }]
                     
                               },{   
					                            
					                                   layout : 'column',
					                                   border : false,
					                                   labelSeparator : '��',
					                                   items : [{                                                        
					                                                        columnWidth : .3,
					                                                        layout : 'form',
					                                                        border : false,
					                                                        items : [{
					                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
					                                                                             fieldLabel : '��׼ʱ��',
					                                                                             listeners: {"focus": function(){
                                                                                                     WdatePicker({dateFmt:'HH:mm'})}
                                                                                                 },
					                                                                             name : 'pzsj',
					                                                                             anchor : '90%'
					                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
					                                                                      }]
					                                                 },{
					                                                        columnWidth : .3,
					                                                        layout : 'form',
					                                                        border : false,
					                                                        items : [{
					                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
					                                                                             fieldLabel : 'Ҫ�����ʱ��',
					                                                                             listeners: {"focus": function(){
                                                                                                     WdatePicker({dateFmt:'HH:mm'})}
                                                                                                 },
					                                                                             name : 'yqwcsj',
					                                                                             anchor : '90%'
					                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
					                                                                      }]
					                                                 },{
					                                                        columnWidth : .3,
					                                                        layout : 'form',
					                                                        border : false,
					                                                        items : [{
					                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
					                                                                             fieldLabel : '������ʱ��',
					                                                                             name : 'wxlsj',
					                                                                             anchor : '90%'
					                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
					                                                                      }]
					                                                 },{
					                                                       columnWidth : .3,
					                                                       layout : 'form',
					                                                       border : false,
					                                                       items : [{
					                                                                            xtype : 'textfield',// �ؼ�������Ϊdatefield
					                                                                            fieldLabel : '��д��',
					                                                                            name : 'txr',
					                                                                            anchor : '90%'
					                                                                            //allowBlank : false// ��ѡ��ֵ������Ϊ��
					                                                                     }]
					                                                }]
	                           }],
	                                                
              //Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
              buttons : [{
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
                                   text : '���',
                                   handler : function() {
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                                          if (simpleForm_Save.form.isValid()) {
                                                 // ���水ťҪ���ľ�������basicform�Ŀͻ�����֤����֤ͨ���������øð�ť״̬Ϊdisable����ֹ2���ύ��Ȼ�����simpleForm.form.doAction�����ύ����
                                                 //this.disabled = true;
                                                 // doAction�����ĵ�һ��������submit������˼�Ǳ�ʾִ�е����ύ�������ύ�ĺ�̨ҳ����test.jsp��url:'test.asp'�����ύ��ʽ��post��method:'post'����û�������ύ������params:''��
                                                 simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'������,���Ժ�...',  
                                                                      url : 'wxlqkjl_save.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                                                      // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                                                      success : function(form, action) {
                                                                             // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                                                             //Ext.Msg.alert('����',action.result.data);
                                                                      		Ext.Msg.alert('��Ϣ',action.result.msg);
                                                                      		//simpleForm_Query.form.reset();
                                                                      		// window.location.href='zyjhsq.jsp';
                                                                      		//simpleForm_Save.collapse();
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

                                   // ȡ����ť���Ǽ򵥵�resetһ��form�Ŀؼ�
                                   text : '�޸�',
                                   disabledClass:'x-item-disabled',
                                   handler : function() {
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                                          if (simpleForm_Save.form.isValid()) {
                                                 // ���水ťҪ���ľ�������basicform�Ŀͻ�����֤����֤ͨ���������øð�ť״̬Ϊdisable����ֹ2���ύ��Ȼ�����simpleForm.form.doAction�����ύ����
                                                 //this.disabled = true;
                                                 // doAction�����ĵ�һ��������submit������˼�Ǳ�ʾִ�е����ύ�������ύ�ĺ�̨ҳ����test.jsp��url:'test.asp'�����ύ��ʽ��post��method:'post'����û�������ύ������params:''��
                                                 simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'�޸���,���Ժ�...',  
                                                                      url : 'wxlqkjl_update.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                                                      // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                                                      success : function(form, action) {
                                                                             // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                                                             //Ext.Msg.alert('����',action.result.data);
                                                                      		Ext.Msg.alert('��Ϣ',action.result.msg);
                                                                      		//simpleForm_Query.form.reset();
                                                                      		
                                                                      		simple_Grid.getStore().reload();
                                                                      		
                                                                      },
                                                                      // ����failure��������������ͨѶ���������ʱ����ʾ������Ϣ��
                                                                      failure : function() {
                                                                             Ext.Msg.alert('����', '�޸�ʧ�ܣ�');
                                                                             this.disabled = false;
                                                                      }
                                                               });
                                          }                                    
                                   }
                            }, {

                                   // ȡ����ť���Ǽ򵥵�resetһ��form�Ŀؼ�
                                   text : '����',
                                   handler : function() {
                                          simpleForm_Save.form.reset();
                                          //simpleForm_Query.collapse();
                                          
                                          simpleForm_Save.buttons[1].setVisible(false);
    									  simpleForm_Save.buttons[3].setVisible(false);
                                   }
                            }, {
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
                                    text : 'ɾ��',
                                    disabledClass:'x-item-disabled',
                                   	handler : function() {
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                                          if (simpleForm_Save.form.isValid()) {
                                                 // ���水ťҪ���ľ�������basicform�Ŀͻ�����֤����֤ͨ���������øð�ť״̬Ϊdisable����ֹ2���ύ��Ȼ�����simpleForm.form.doAction�����ύ����
                                                 //this.disabled = true;
                                                 // doAction�����ĵ�һ��������submit������˼�Ǳ�ʾִ�е����ύ�������ύ�ĺ�̨ҳ����test.jsp��url:'test.asp'�����ύ��ʽ��post��method:'post'����û�������ύ������params:''��
                                                 simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'ɾ����,���Ժ�...',  
                                                                      url : 'wxlqkjl_delete.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                                                      // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                                                      success : function(form, action) {
                                                                             // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                                                             //Ext.Msg.alert('����',action.result.data);
                                                                      		//Ext.Msg.alert('��Ϣ',action.result.msg);
                                                                      		simpleForm_Save.collapse();
                                                                      		simpleForm_Save.form.reset();
                                                                      		simpleForm_Save.buttons[1].setVisible(false);
    																		simpleForm_Save.buttons[3].setVisible(false);
                                                                    		
                                                                      		simple_Grid.getStore().reload();
                                                                      		
                                                                      },
                                                                      // ����failure��������������ͨѶ���������ʱ����ʾ������Ϣ��
                                                                      failure : function() {
                                                                             Ext.Msg.alert('����', 'ɾ��ʧ�ܣ�');
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
                            }]
       });

//	alert("1");
	    
	var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '�������¼������ѯ',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 600,
              titleCollapse:true,
              collapsible:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              labelWidth : 80,
              items : [{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [ {
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                			xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store :store_dw,
                                                               //value:'ȫ��',
                                                               valueField : "value",// ��������ѡ����ֵ
                                                               displayField : "text",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               //blankText : '��ѡ����ҵ��λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '��λ',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'taskunit',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '��λ',// �ؼ��ı�����ѧ��
                                                               name : 'taskunit',// �ٴ����ѣ�nameֻ�������б������
                                                               id:'gq_id',
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��ʼʱ��',
                                                                             name : 'begin',
                                                                             id:'begin',
                                                                             anchor : '90%',
                                                                             listeners: {"focus": function(){
                                                                                                     WdatePicker({dateFmt:'yyyy-MM-dd'})}
                                                                                                 }
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                             
                                                                      }]
                                                 },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '����ʱ��',
                                                                             name : 'end',
                                                                             id:'end',
                                                                             anchor : '90%',
                                                                             listeners: {"focus": function(){
                                                                                                     WdatePicker({dateFmt:'yyyy-MM-dd'})}
                                                                                                 }
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                             
                                                                      }]
                                                 }]
                            }                            
                                                         ],
              // Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
              buttons : [{
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
                                   text : '��ѯ',
                                   handler : function() {
                                          if (!simpleForm_Query.form.isValid()) {return };
                                   		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                                          if (simpleForm_Query.form.isValid()) {
											  	var where="1=1";	
											  	if(Ext.getCmp("gq_id").getValue()!="")
											  	{
											  		where = where  + " and xl.gqmc = '" + Ext.getCmp("gq_id").getValue() + "'";
											  	}
											 	if(Ext.getCmp("begin").getValue()!="" && Ext.getCmp("end").getValue()!="" ){
											 	
													where=where+" and jlrq between to_date('" + Ext.getCmp("begin").getValue() + "','yyyy-mm-dd') and to_date('" + Ext.getCmp("end").getValue() + "','yyyy-mm-dd')" ;
											    	
												}
												alert(where);
												store.baseParams.whereclause =where; 
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
                                          //simpleForm_Save.collapse();
                                         
                                   }
                            },{

                                   // ȡ����ť���Ǽ򵥵�resetһ��form�Ŀؼ�
                                   text : '�鿴����',
                                   handler : function() {
                                          window.location.href="../../tjbb/query/wxlqkjl.jsp?gqmc=" + Ext.getCmp("gq_id").getValue() + "&ymd1=" + Ext.getCmp("begin").getValue() +"&ymd2="+Ext.getCmp("end").getValue();                                        
                                   }
                            }]
       });    
       
       
    //Grid�ϴ����¼�
    simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
    	// simpleForm_Query.collapse();
    	simpleForm_Save.expand();
    	
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	//alert(rowIndex);
    	//alert(record.get('jhsj')+' '+record.get('jhh')+' '+record.get('dwid'));
    	simpleForm_Save.buttons[1].setVisible(true);
        simpleForm_Save.buttons[3].setVisible(true);
            // simpleForm_Save.buttons[0].setVisible(false);
           // simpleForm_Save.buttons[1].setVisible(false);
             //simpleForm_Save.buttons[2].setVisible(false);
    	//simpleForm_Save.buttons[3].setVisible(false);
    	simpleForm_Save.getForm().loadRecord(record);
    });	
    	
    //��sessionȡֵ��ֵ��form�ֶ�;
	Ext.Ajax.request({
		url: 'getSessionValue.jsp',
		success: function(response, opts) 
			{
			 simpleForm_Save.getForm().setValues([{id: "dwmc",value: response.responseText} ]);
			},		
		failure: function(response, opts) {
      		console.log('�����ʧЧ��״̬���룺' + response.status);
   			}
	});
    
    var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		items: [simpleForm_Save,simpleForm_Query,simple_Grid]
	});
    
    simpleForm_Save.collapse();
    //simpleForm_Save.buttons[1].disabled=true;
    //simpleForm_Save.buttons[3].disabled=true;
    simpleForm_Save.buttons[1].setVisible(false);
    simpleForm_Save.buttons[3].setVisible(false);

});
Ext.onReady(function() {
	  Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';

  //��Ʒ��������б�	
	var nyfl_sql = "select SBFLID,SBFLNAME from J_GDGY_SBFL  where SBFLID like (substr('020000',0,2)||'%25') and sbflid!='020000'";
    var nyfl_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+nyfl_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	nyfl_store.load();
	
	//רҵ���������б�	
	var zyfl_sql = "select SBFLID,SBFLNAME from J_GDGY_SBFL  where SBFLID in('070000','010000','020000')";
    var zyfl_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+zyfl_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	zyfl_store.load(); 
	
	//������������б�	
	var jbfl_sql = "select sxid,sxmc from j_gdgy_sxzd where sxid>'021000' and sxid<'022000'";
    var jbfl_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+jbfl_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	jbfl_store.load();
	//�õ���Ʒ���ͺ�������
    var cpxh_sql = "select distinct CPXH,CPXH from Z_JCSJ_cpsms";
    var cpxh_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+cpxh_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	cpxh_store.load(); 
   //�õ���Ʒ����������������
    var sccj_sql = "select distinct sccj,sccj from Z_JCSJ_cpsms";
    var sccj_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+sccj_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	sccj_store.load(); 
     
 
	var simpleForm_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '�ط�����',
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
                    layout : 'column',
                    border : false,
                	items:[ 
                	{
                    	columnWidth:.7,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '˵��������',
                    		blankText : '˵��������',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��
                    		allowBlank : false,// ��ѡ��ֵ������Ϊ��
                    		name: 'gzzdmc',
                    		id:'gzzdmc_id',
                    		anchor:'95%'
                		}]
                	}, 
                	{
                	    columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'datefield',
                    		fieldLabel: '��������',
                    		name: 'fbrq',
                    		id:'fbrq_id',
                    		anchor:'95%',
                    		format:'Y-m-d',
                    		blankText : '����д����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��
                    		allowBlank : false,// ��ѡ��ֵ������Ϊ��
                    		value: new Date(),
    						timePicker:true
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[ 
                	{
                		columnWidth:.35,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store : zyfl_store,
                        	valueField : "value",// ��������ѡ����ֵ
                       		displayField : "text",// ��������ѡ������ʾ�ı�
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ��רҵ����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ��רҵ����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'zyfl',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	allowBlank : false,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : 'רҵ����',// �ؼ��ı�����ѧ��
                        	name : 'zyfl',// �ٴ����ѣ�nameֻ�������б������
                        	id:'zyfl_id',
                        	listeners:{"select":function(combo, zyfl_store,index){
                        	var zyfl_id=Ext.getCmp("zyfl_id").value;
                        	//���ݲ�Ʒ���࣬�õ���Ʒ������
                        	var combo2 = Ext.getCmp('nrfl_id'); 
                            combo2.enable();      
                          	combo2.reset(); 
                          	nyfl_sql = "select SBFLID,SBFLNAME from J_GDGY_SBFL  where SBFLID like (substr('"+zyfl_id+"',0,2)||'%25') and sbflid!='"+zyfl_id+"'";
                        	combo2.store.proxy = new Ext.data.HttpProxy({url : '../../share/combo_list.jsp?sql='+nyfl_sql});
                          	combo2.store.load();
                          	
                        	}},
                        	anchor : '95%'// input�Ŀ����90%
    					}]	
                	},{
                		columnWidth:.35,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store :nyfl_store,
                        	valueField : "value",// ��������ѡ����ֵ
                       		displayField : "text",// ��������ѡ������ʾ�ı�
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ���Ʒ���',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ���Ʒ���',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'nrfl',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	allowBlank : false,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : '��Ʒ���',// �ؼ��ı�����ѧ��
                        	name : 'nrfl',// �ٴ����ѣ�nameֻ�������б������
                        	id:'nrfl_id',
                        	listeners:{"select":function(combo, zyfl_store,index){
                        	var zylb_id=Ext.getCmp("nrfl_id").value;
                        	//���ݲ�Ʒ���ͣ��õ���Ʒ���ͺ�
                        	var combo2 = Ext.getCmp('cpxh_id'); 
                            combo2.enable();      
                          	combo2.reset(); 
                          	alert(zylb_id);
                          	cpxh_sql = "select distinct CPXH,CPXH from Z_JCSJ_cpsms where cplb='"+zylb_id+"'";
                          	alert(cpxh_sql);
                          	combo2.store.proxy = new Ext.data.HttpProxy({url : '../../share/combo_list.jsp?sql='+cpxh_sql});
                          	combo2.store.load();
                          	//���ݲ�Ʒ���ͣ��õ���������
                          	var combo3 = Ext.getCmp('sccj_id'); 
                            combo3.enable();      
                          	combo3.reset(); 
                          	//alert(zylb_id);
                          	sccj_sql = "select distinct sccj,sccj from Z_JCSJ_cpsms where cplb='"+zylb_id+"'";
                          	combo3.store.proxy = new Ext.data.HttpProxy({url : '../../share/combo_list.jsp?sql='+sccj_sql});
                          	combo3.store.load();
                        	}},
                        	anchor : '95%'// input�Ŀ����90%
    					}]	
                	},{
                		columnWidth:.3,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store : cpxh_store,
                        	valueField : "text",// ��������ѡ����ֵ
                       		displayField : "text",// ��������ѡ������ʾ�ı�
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ���Ʒ�ͺ�',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ���Ʒ�ͺ�',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'cpxh',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : true,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	allowBlank : true,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : '��Ʒ�ͺ�',// �ؼ��ı�����ѧ��
                        	name : 'cpxh',// �ٴ����ѣ�nameֻ�������б������
                        	id:'cpxh_id',
                        	anchor : '95%'// input�Ŀ����90%
    					}]	
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[ { layout: 'form',
                		border:false,
                		//fileUpload: true,
                		items: [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store : sccj_store,
                        	valueField : "text",// ��������ѡ����ֵ
                       		displayField : "text",// ��������ѡ������ʾ�ı�
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ����������',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ����������',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'sccj',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : true,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	allowBlank : true,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : '��������',// �ؼ��ı�����ѧ��
                        	name : 'sccj',// �ٴ����ѣ�nameֻ�������б������
                        	id:'sccj_id',
                        	anchor : '95%'// input�Ŀ����90%
    					}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[ 
                	{
                		layout: 'form',
                		border:false,
                		//fileUpload: true,
                		items: [{
                    		xtype: 'fileuploadfield',
            				id: 'gzzdlj_id',
            				anchor: '95%',
            				//allowBlank: false,
           					msgTarget: 'side',
            				emptyText: '��ѡ���豸˵����',
           					fieldLabel: '�豸˵����',
            				name: 'gzzdlj',
            				blankText : '���豸˵����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��
                    		allowBlank : false,// ��ѡ��ֵ������Ϊ��
            				buttonText: '',
            				fileUpload: true,     
            				buttonCfg: {
                				iconCls: 'upload-icon'
            				}
                		}]
                	}]
                }
               ,{
                    layout : 'column',
                     border : false,
                 	items:[ 
                 	{
                     	columnWidth:1,
                		layout: 'form',
                 		border:false,
                 		items: [{
                     		xtype:'textfield',
                     		fieldLabel: '��Ʒԭ�ͼ����ṩ����',
                     		name: 'jstgcj',
                     		id:'jstgcj_id',
                     		anchor:'95%'
                 		}]
                 	}] 
                 }],
              // Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
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
                                                                      url : 'gzzdSave.jsp',
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
                                                                      		simpleForm_Save.collapse();
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
                            }]
       });

	
	     
    	
   
    
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Save]
	});
    
    simpleForm_Save.expand(); 
 


});
     
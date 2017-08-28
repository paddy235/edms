Ext.onReady(function() {
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var planRecord = Ext.data.Record.create([
    	{name:'YHDM',type:'string'},
    	{name:'YHMC',type:'string'},
    	{name:'YHMM',type:'string'},
    	{name:'YHIP',type:'string'},
    	{name:'GWMC',type:'string'},
    	{name:'DWJB',type:'string'},
    	{name:'DWDM',type:'string'},
    	{name:'ZCSJ',type:'string'},
    	{name:'SESSION_DATE',type:'string'},
    	{name:'SESSIONID',type:'string'},
    	{name:'BZ',type:'string'},
    	{name:'DDTDM',type:'string'}
    	]);
     var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'yhxx_json.jsp'}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord)
    });
    //store.load();
 	var SSDWDM_store = new Ext.data.Store({
	proxy : new Ext.data.HttpProxy({
			url : '../../share/combo_list.jsp?sql=select DWDM,DWJC from v_j_gyjc_yhdw'
		}),
		reader : new Ext.data.JsonReader({root : 'root'
				},[{name : 'value',mapping : 'value'},
				   {name : 'text',mapping : 'text'}
				  ]
			)
	});
	SSDWDM_store.load();

	
	var simpleForm_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '�û����',
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
                                                                             xtype : 'field',
                                                                             fieldLabel : '�û���¼��',
                                                                             name : 'YHDM',
                                                                             id:'YHDM_ID',
                                                                             allowBlank : true// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',
                                                                             fieldLabel : '�û�����',
                                                                             name : 'YHMC',
                                                                             id:'YHMC',
                                                                             allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',
                                                                             inputType:'password', //��������
                                                                             fieldLabel : '�û�����',
                                                                             name : 'YHMM',
                                                                             id:'YHMM',
                                                                             allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '�û�IP',
                                                                             name : 'YHIP',
                                                                             id:'YHIP',
                                                                             allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��λ����',
                                                                             name : 'GWMC',
                                                                             id:'GWMC',
                                                                             allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store : new Ext.data.SimpleStore({
                                                                      // ͨ��һ�����鶨����returnValue��displayText�����ֶΡ�retrunValue�ֶ�ָ�����ύ����̨��ֵ��displayText�ֶ�ָ��������������ʾ��ѡ��ֵ��
                                                                      fields : ["returnValue", "displayText"],
                                                                      // �����˼�������.ÿ�����ݶ��Ǹ���fiedls�Ķ�������ɵģ��������һ��ֵ����retrunValue��ֵ���ڶ���ֵ����displayText��ֵ������[1,'Сѧ']���ͱ�ʾretrunValue��1��displayText��Сѧ��
                                                                     data : [['1', '��˷��·�ֹ�˾'], ['2', '��˷��·�ֹ�˾����ָ����'], 
                                                                  ['3', '���̨'], ['4', '�����'], 
                                                                  ['5', '����'], ['6', '�������߱����'], ['7', '�е�']]
                                                   			}),
                                                               valueField : "returnValue",// ��������ѡ����ֵ
                                                               displayField : "displayText",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               forceSelection : true,// ����ѡ��һ��ѡ��
                                                               blankText : '��ѡ��λ����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '��ѡ��λ����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'DWJB',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '��λ����',// �ؼ��ı�����ѧ��
                                                               name : 'JGLB',// �ٴ����ѣ�nameֻ�������б������
                                                               id : 'dwdj_id',// �ٴ����ѣ�nameֻ�������б������
                                                               anchor : '80%',// input�Ŀ����90%
                                                               listeners:{"select":function(combo, planRecord_gq,index){
                                                                    var sldw=Ext.getCmp("dwdj_id").value;
                                                                    //alert(sldw);
                                                               		var combo2 = Ext.getCmp('DWDM_id'); 
                                                               		combo2.enable();      
                          											combo2.reset();   
                          											//combo2.disable();
                          											sql_qjzc="select DWDM,DWJC from v_j_gyjc_yhdw where jb=\'"+sldw+"\'";//
                          											//alert(sql_qjzc);
                          										    combo2.store.proxy = new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_qjzc});
                          										    combo2.store.load();
                                                               		}
                                                               }
                                                        }]
                                                 },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store : SSDWDM_store,
                        	valueField : "value",
                        	displayField : "text",
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ��������λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ��������λ',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'DWDM',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : true,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	//allowBlank : false,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : '��λ����',// �ؼ��ı�����ѧ��
                        	name : 'DWDM',// �ٴ����ѣ�nameֻ�������б������
                        	id : 'DWDM_id',// �ٴ����ѣ�nameֻ�������б������
                        	anchor : '80%'// input�Ŀ����90%
    					}]
                                                 },{
                                                        columnWidth : .6,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textarea',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��ע��Ϣ',
                                                                             name : 'BZ',
                                                                             id:'BZ',
                                                                             anchor : '90%',
                                                                             height:'60'
                                                                             
                                                                      }]
                                                 }]

                            }],
              // Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
        buttons: [{
            text : '�޸�',
            Enabled:false,
            handler : function() {
            	if (!simpleForm_Save.form.isValid()) {return };
           		if (simpleForm_Save.form.isValid()) {
                	simpleForm_Save.form.doAction('submit', {
                                               waitMsg:'�޸���,���Ժ�...',  
                                               url : 'Update.jsp?YHDM='+yh,
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {                                               		
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
		items: [simpleForm_Save]
	});
	//simpleForm_Save.collapse();
	//simpleForm_Save.buttons[1].setVisible(false);
	//simpleForm_Save.buttons[3].setVisible(false);
	//simpleForm_Save.buttons[4].setVisible(false);
	Ext.getCmp("YHDM_ID").disable();
	store.load({callback:function(records,success,totalRecords){
     //alert(records[0].data.YHDM.toString())
	 Ext.getCmp("YHDM_ID").setValue(records[0].data.YHDM.toString());
	 Ext.getCmp("YHMC").setValue(records[0].data.YHMC.toString());
	 Ext.getCmp("YHMM").setValue(records[0].data.YHMM.toString());
	 Ext.getCmp("YHIP").setValue(records[0].data.YHIP.toString());
	 Ext.getCmp("GWMC").setValue(records[0].data.GWMC.toString());
	 Ext.getCmp("dwdj_id").setValue(records[0].data.DWJB.toString());
	 Ext.getCmp("DWDM_id").setValue(records[0].data.DWDM.toString());
     Ext.getCmp("BZ").setValue(records[0].data.BZ.toString());
	}});
 });
 
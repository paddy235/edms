Ext.onReady(function() {
	     
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var username=document.getElementById("txt_username").value;
    var userdj=document.getElementById("userdj").value;
    var userdwid=document.getElementById("userdwid").value;
    var ttyhmc=document.getElementById("ttyhmc").value;
    
    var stor_where="";
    var stor_where1="";
    var cell_where=" 1=1 ";
    var where1="";
	var sql="";
	
    if(userdj=='6')
    {
      stor_where="gz.gqpym in (select gq.gqdm from  j_gyjc_gqzd gq where gq.gqdm='"+userdwid+"')";
      stor_where1="gz.gqpym in (select gq.gqdm from  j_gyjc_gqzd gq where gq.gqdm='"+userdwid+"')";
	  sql="select gqdm,gqjc from j_gyjc_gqzd where jglbdm=1 and gqdm ='"+userdwid+"'";
    }
    else if(userdj=='3')
    {
      stor_where="gz.gqpym in (select gq.gqdm from  j_gyjc_gqzd gq where gq.ddtdm like '"+userdwid+"%')";
      stor_where1="gz.gqpym in (select gq.gqdm from  j_gyjc_gqzd gq where gq.ddtdm like '"+userdwid+"%')";
	  sql="select gqdm,gqjc from j_gyjc_gqzd where jglbdm=1 and ddtdm like '"+userdwid+"%25'  order by gqjc";
    }
    else if(userdj=='4'||userdj=='5')
    {
      stor_where="gz.gqpym in (select gq.gqdm from  j_gyjc_gqzd gq where gq.cjdm like '"+userdwid+"%')";
      stor_where1="gz.gqpym in (select gq.gqdm from  j_gyjc_gqzd gq where gq.cjdm like '"+userdwid+"%')";
	  sql="select gqdm,gqjc from j_gyjc_gqzd where jglbdm=1 and cjdm ='"+userdwid+"' order by gqjc";
    }
	else
    {
      stor_where=" 1=1 ";
      stor_where1=" 1=1 ";
	  sql="select gqdm,gqjc from j_gyjc_gqzd where jglbdm=1 order by gqjc";
    }
	
    stor_where=stor_where+"and gz.bgsj <=sysdate and gz.bgsj>=to_date('"+get_nowTime()+"','yyyy-mm-dd hh24:mi')";
    
	//���������䡢��ֱ�Ӵӹ�������ѡȡ���ߵ�����������̨���Լ���Ͻ��������������˲���¼����բ���
	
 	var planRecord_bdt = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_bdt = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_bdt)
    });
    store_bdt.load();
     
    var sql_lb="select distinct bg.lb,bg.lb from Z_YXGL_DLGZJL bg";

 	var planRecord_lb = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_lb = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_lb}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_lb)
    });
    store_lb.load();
   
     var zt =function (value)
 	 {
 	 	if(value=="0")
 	 	{
 	 	  return 'ʧ��';
 	 	}
 	 	else if(value=="1")
 	 	{
 	 		return '�ɹ�';
 	 	}
 	 	else
 	 	{
 	 	    return 'δ����';
 	 	}
 	 }
     var simpleForm_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : 'ǣ����բ��¼���',
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
                                   items : [{xtype:'hidden',name:'ydsgbm'}
                                   		   ,{
                                           		columnWidth : .25,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                                                layout : 'form',// formlayout�������ÿؼ�
                                                border : false,// û�б߿�
                                                items : [{
                                                			xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store :store_bdt,
                                                               //value:'ȫ��',
                                                               valueField : "value",// ��������ѡ����ֵ
                                                               displayField : "text",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               //blankText : '��ѡ����ҵ��λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '��ͤ',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'gqdm',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : true,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '�����',// �ؼ��ı�����ѧ��
                                                               name : 'gqdm',// �ٴ����ѣ�nameֻ�������б������
                                                               id:'txt_tzdw',                                                               
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                            },{
												columnWidth : .25,
												layout : 'form',
												border : false,
												items : [{
																 xtype : 'textfield',// �ؼ�������Ϊdatefield
																 fieldLabel : '��բʱ��',
																 name : 'bgsj',
																 id:'txt_bgsj',
																 allowBlank : false,
																 //id:'time',
																 anchor : '90%',
																 listeners: {"focus": function(){
																 WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
																 //allowBlank : false// ��ѡ��ֵ������Ϊ��
														  }]
                                             },{
												columnWidth : .25,
												layout : 'form',
												border : false,
												items : [{
																 xtype : 'textfield',// �ؼ�������Ϊdatefield
																 fieldLabel : '���غ�',
																 name : 'kgh',
																 //allowBlank : false,
																 //readOnly:true,
																 //id:'txt_ddy',
																 //disabled:true,
																 anchor : '90%'
																// format:'Y-m-d'
													  }]
                                              },{
												columnWidth : .25,
												layout : 'form',
												border : false,
												items : [{
																 xtype : 'textfield',// �ؼ�������Ϊdatefield
																 fieldLabel : '��������',
																 name : 'bhzzmc',
																 //allowBlank : false,
																 //id:'txt_tdsj',
																 //id:'time',
																 anchor : '90%'
																 //allowBlank : false// ��ѡ��ֵ������Ϊ��
															  }]
                                             }]

                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{
                                           		columnWidth : .25,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                                                layout : 'form',// formlayout�������ÿؼ�
                                                border : false,// û�б߿�
                                                items : [{
                                                			xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store :new Ext.data.SimpleStore({
                                                                      // ͨ��һ�����鶨����returnValue��displayText�����ֶΡ�retrunValue�ֶ�ָ�����ύ����̨��ֵ��displayText�ֶ�ָ��������������ʾ��ѡ��ֵ��
                                                                      fields : ["returnValue", "displayText"],
                                                                      // �����˼�������.ÿ�����ݶ��Ǹ���fiedls�Ķ�������ɵģ��������һ��ֵ����retrunValue��ֵ���ڶ���ֵ����displayText��ֵ������[1,'Сѧ']���ͱ�ʾretrunValue��1��displayText��Сѧ��
                                                                      data : [['1', '�ɹ�'], ['0', 'ʧ��'], ['2', 'δ����']]
                                                               }),
                                                              // value:'ȫ��',
                                                               valueField : "returnValue",// ��������ѡ����ֵ
                                                               displayField : "displayText",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               //blankText : '��ѡ����ҵ��λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '�غ����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'chzzt',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               //allowBlank : false,
                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '�غ����',// �ؼ��ı�����ѧ��
                                                               name : 'chzzt',// �ٴ����ѣ�nameֻ�������б������
                                                               //id:'bds_id',
                                                               anchor : '90%'// input�Ŀ����90%
												}]
										 },{
													columnWidth : .25,
													layout : 'form',
													border : false,
													items : [{
																		 xtype : 'textfield',// numberfield�ؼ�������Ϊdatefield
																		 fieldLabel : '�ʱ�',
																		 name : 'sgjl',
																		 id:'txt_sgjl',
																		 anchor : '90%',
																		 listeners:{"blur":function(){
																				var txt_jg=Ext.getCmp("txt_sgjl").getValue();
																				if(isNaN(txt_jg))
																				{
																				   Ext.Msg.alert('��Ϣ',"���������֣�");
																				   Ext.getCmp("txt_sgjl").setValue("0");
																				}
																			   
																		 }}
																		 //allowBlank : false// ��ѡ��ֵ������Ϊ��
																  }]
											 },{
                                           		columnWidth : .25,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                                                layout : 'form',// formlayout�������ÿؼ�
                                                border : false,// û�б߿�
                                                items : [{
                                                			xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store :store_lb,
                                                               //value:'ȫ��',
                                                               valueField : "text",// ��������ѡ����ֵ
                                                               displayField : "text",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               //blankText : '��ѡ����ҵ��λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'lb',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               //allowBlank : false,
                                                               editable : true,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '����',// �ؼ��ı�����ѧ��
                                                               name : 'lb',// �ٴ����ѣ�nameֻ�������б������
                                                               //id:'bds_id',
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
											},{
											columnWidth : .25,
											layout : 'form',
											border : false,
											items : [{
																 xtype : 'textfield',// �ؼ�������Ϊdatefield
																 fieldLabel : '����ʱ��',
																 name : 'fhsj',
																 id:'txt_fhsj',
																 //id:'time',
																 anchor : '90%',
																 //allowBlank : false,
																 listeners: {"focus": function(){
																 WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
																 //allowBlank : false// ��ѡ��ֵ������Ϊ��
													 }]
									 } ]
                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [ {
											columnWidth : .25,
											layout : 'form',
											border : false,
											items : [{
																 xtype : 'textfield',// �ؼ�������Ϊdatefield
																 fieldLabel : '�ָ�ʱ��',
																 name : 'hfsj',
																 id:'txt_hfsj',
																 //allowBlank : false,
																 //id:'time',
																 anchor : '90%',
																 listeners: {"focus": function(){
																 WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
																 //allowBlank : false// ��ѡ��ֵ������Ϊ��
														  }]
									 },{
											columnWidth : .25,
											layout : 'form',
											border : false,
											items : [{
																 xtype : 'textfield',// �ؼ�������Ϊdatefield
																 fieldLabel : 'ͣʱ���֣�',
																 name : 'tdsf',
																 //allowBlank : false,
																 id:'txt_tdsj',
																 //id:'time',
																 anchor : '90%',
																 listeners:{"focus":function(){
																	 var bgsj=Ext.getCmp("txt_bgsj").getValue();
																	 var fhsj=Ext.getCmp("txt_fhsj").getValue();
																	 var bg = new Date(bgsj.replace("-","/")).getTime();
																	 var fh = new Date(fhsj.replace("-","/")).getTime();
																	 if(bgsj!=''&& fhsj!='')
																	 {
																		Ext.getCmp("txt_tdsj").setValue((fh-bg)/60000);
																	 }
																	 
																 }}
																 //allowBlank : false// ��ѡ��ֵ������Ϊ��
														  }]
									 }, {
											columnWidth : .25,
											layout : 'form',
											border : false,
											items : [{
																 xtype : 'textfield',// �ؼ�������Ϊdatefield
																 fieldLabel : '�Ǽ���',
																 name : 'djr',
																 id:'txt_djr',
																 //id:'time',
																 anchor : '90%'
															   
														  }]
									 },{
											columnWidth : .25,
											layout : 'form',
											border : false,
											items : [{
																 xtype : 'textfield',// �ؼ�������Ϊdatefield
																 fieldLabel : '�����',
																 name : 'shr',
																 anchor : '90%'
																// format:'Y-m-d'
														  }]
									 }]
                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{
                                                        columnWidth : .5,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : 'ͣ�緶Χ',
                                                                             name : 'sjgzdd',
                                                                            // allowBlank : false,
                                                                             anchor : '95%'
                                                                      }]
                                                 },{
                                                        columnWidth : .5,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��բԭ��',
                                                                             name : 'tzyy',
                                                                            // allowBlank : false,
                                                                             anchor : '95%'
                                                                             //height:30
                                                                             //format:'Y-m-d'
                                                                      }]
                                                 }]
                            },{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{
                                                        columnWidth : .5,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textarea',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : 'ͣ�緶Χ<br>�������',
                                                                             name : 'gzms',
                                                                             //allowBlank : false,
                                                                             anchor : '95%',
                                                                             height:30
                                                                             //format:'Y-m-d'
                                                                      }]
                                                 },{
                                                        columnWidth : .5,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textarea',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��ע',
                                                                             name : 'bz',
                                                                             anchor : '95%',
                                                                             height:'30'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 }]
                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [ {
											columnWidth : .20,
											layout : 'form',
											border : false,
											items : [{
																 xtype : 'textfield',// �ؼ�������Ϊdatefield
																 fieldLabel : '�Ӵ�������',
																 name : 'ia',
																 anchor : '90%'
															   
														  }]
									 },{
											columnWidth : .20,
											layout : 'form',
											border : false,
											items : [{
																 xtype : 'textfield',// �ؼ�������Ϊdatefield
																 fieldLabel : '���ߵ���',
																 name : 'ib',
																 id:'ib_id',
																 //id:'time',
																 anchor : '90%'
															   
														  }]
									 }, {
											columnWidth : .20,
											layout : 'form',
											border : false,
											items : [{
																 xtype : 'textfield',// �ؼ�������Ϊdatefield
																 fieldLabel : '���ϵ�ѹ',
																 name : 'ic',
																 id:'ic_id',
																 //id:'time',
																 anchor : '90%'
															   
														  }]
									 }, {
											columnWidth : .20,
											layout : 'form',
											border : false,
											items : [{
																 xtype : 'textfield',// �ؼ�������Ϊdatefield
																 fieldLabel : 'һ�ε翹',
																 name : 'ua',
																 anchor : '90%'
															   
														  }]
									 },{
											columnWidth : .20,
											layout : 'form',
											border : false,
											items : [{
																 xtype : 'textfield',// �ؼ�������Ϊdatefield
																 fieldLabel : '�迹��',
																 name : 'ub',
																 anchor : '90%'
																// format:'Y-m-d'
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
                                                                      url : 'tzgl_qy_add.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                                                      // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                                                      success : function(form, action) {
                                                                             // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                                                             //Ext.Msg.alert('����',action.result.data);
                                                                             simple_Grid.getStore().reload();
                                                                      		Ext.Msg.alert('��Ϣ',action.result.msg);
                                                                      		//simpleForm_Query.form.reset();
                                                                      		// window.location.href='zyjhsq.jsp';
                                                                      		//simpleForm_Save.collapse();
                                                                      		
                                                                      	
                                                                      },
                                                                      // ����failure��������������ͨѶ���������ʱ����ʾ������Ϣ��
                                                                      failure : function() {
                                                                             Ext.Msg.alert('����', '����ʧ�ܣ�');
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
                                            simpleForm_Save.buttons[0].setVisible(true);
									        simpleForm_Save.buttons[1].setVisible(true);
									        simpleForm_Save.buttons[2].setVisible(false);
									        simpleForm_Save.buttons[3].setVisible(false);
											simpleForm_Save.buttons[4].setVisible(false);
                                   }
                            }, {
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
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
                                                                      url : 'tzgl_qy_update.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                                                      // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                                                      success : function(form, action) {
                                                                             // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                                                              
                                                                      		Ext.Msg.alert('����',action.result.msg);
                                                                      		simple_Grid.getStore().reload();
                                                                      		
                                                                      },
                                                                      // ����failure��������������ͨѶ���������ʱ����ʾ������Ϣ��
                                                                      failure : function() {
                                                                             Ext.Msg.alert('����', '����ʧ�ܣ�');
                                                                             this.disabled = false;
                                                                      }
                                                               });
                                          }
                                        

                                   }
                            },{
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
                                    text : 'ȷ��',
                                    disabledClass:'x-item-disabled',
                                   handler : function() {
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		   if (simpleForm_Save.form.isValid()) {
                                                 simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'ȷ����,���Ժ�...',  
                                                                      url : 'tzgl_qy_ok.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      success : function(form, action) {
                                                                        	Ext.Msg.alert('����',action.result.msg);
                                                                      		simple_Grid.getStore().reload();
                                                                      		
                                                                      },
                                                                      failure : function() {
                                                                             Ext.Msg.alert('����', 'ȷ��ʧ�ܣ�');
                                                                             this.disabled = false;
                                                                      }
                                                               });
                                          }
                                        

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
                                                                      url : 'tzgl_qy_del.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                                                      // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                                                      success : function(form, action) {
                                                                             // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                                                      		Ext.Msg.alert('����',action.result.msg);
                                                                      		simple_Grid.getStore().reload();
                                                                      },
                                                                      // ����failure��������������ͨѶ���������ʱ����ʾ������Ϣ��
                                                                      failure : function() {
                                                                             Ext.Msg.alert('����', 'ɾ��ʧ�ܣ�');
                                                                             this.disabled = false;
                                                                      }
                                                               });
                                          }

                                   }
                            }]
       });
       
       
       
	var expander = new Ext.ux.grid.RowExpander({
        tpl : new Ext.Template(
            '<p><b>ͣ�緶Χ:</b> {sjgzdd} <b>��բԭ��:</b> {tzyy} </p> <p><b>ͣ�緶Χ�������:</b> {gzms} <b>��ע:</b> {bz} </p> <p><b>�Ӵ�������:</b> {ia} <b>���ߵ���:</b> {ib}  <b>���ϵ�ѹ:</b> {ic}  <b>һ�ε翹:</b> {ua}  <b>�迹��:</b> {ub}</p> ')
           
    });
	//����Grid��ͷ
  
    var columns = new Ext.grid.ColumnModel([
        
        //new Ext.grid.RowNumberer(),
        expander,		
        {header:'���',dataIndex:'xh',width:35,fixed:true},

		{header:'�����',dataIndex:'gqmc',width:90,sortable:true,fixed:true},
        {header:'��բʱ��',dataIndex:'bgsj',width:110,sortable:true,fixed:true},
        {header:'���غ�',dataIndex:'kgh',width:60,sortable:true},
        {header:'��������',dataIndex:'bhzzmc',width:60,sortable:true},
        
		{header:'�غ����',dataIndex:'chzzt',renderer:zt,width:60,fixed:true,fixed:true},
		{header:'�ʱ���',dataIndex:'sgjl',width:60,sortable:true,fixed:true},
        {header:'����',dataIndex:'lb',width:60,sortable:true,fixed:true},
		{header:'����ʱ��',dataIndex:'fhsj',width:110,sortable:true,fixed:true},

		{header:'�ָ�ʱ��',dataIndex:'hfsj',width:110,sortable:true,fixed:true},
		{header:'ͣʱ(��)',dataIndex:'tdsf',width:60,sortable:true,fixed:true},
		{header:'�Ǽ���',dataIndex:'djr',width:80,sortable:true,fixed:true},
        {header:'�����',dataIndex:'shr',width:80,sortable:true,fixed:true}
		
        //{header:'����Ա',dataIndex:'ddy',width:70,sortable:true,fixed:true}
        //{header:'��������',dataIndex:'gzms',width:160,sortable:true},
        //{header:'�ʱ�',dataIndex:'sgjl',width:40,fixed:true},        
        //{header:'ʵ�ʹ��ϵص�',dataIndex:'sjgzdd',width:60,fixed:true},        
        //{header:'ͣ������',dataIndex:'tdqd',width:70,sortable:true},
        //{header:'��բԭ��',dataIndex:'tzyy',width:50,sortable:true},   
        //{header:'��ע',dataIndex:'bz',width:50,sortable:true},
       
      
    ]);
   
      
    var planRecord = Ext.data.Record.create([
    	{name:'xh',type:'int'},
    	{name:'ydsgbm',type:'string'},
    	{name:'ydbgbh',type:'string'},
    	{name:'rksj',type:'string'},
    	{name:'bgsj',type:'string'},
    	{name:'gqpym',type:'string'},
    	{name:'tdqd',type:'string'},
    	{name:'gzms',type:'string'},
    	{name:'sgjl',type:'string'},	
    	{name:'ztbz',type:'string'},
    	{name:'chzzt',type:'string'},
    	{name:'sgjl',type:'string'},
    	{name:'ztbz',type:'string'},
    	{name:'gzbh',type:'string'},
    	{name:'gqmc',type:'string'},
    	{name:'gqdm',type:'string'},
    	{name:'kgh',type:'string'},//tzyy
        {name:'tzyy',type:'string'},
        {name:'fhsj',type:'string'},
    	{name:'tdsf',type:'string'},
    	{name:'lb',type:'string'},
    	{name:'bz',type:'string'},
    	{name:'ddy',type:'string'},  
    	{name:'sjgzdd',type:'string'},
    	{name:'kxmc',type:'string'},
    	{name:'bhzzmc',type:'string'},
    	{name:'shr',type:'string'},
    	{name:'bztzt',type:'string'},    	
    	{name:'hfsj',type:'string'},
    	{name:'djr',type:'string'},

		{name:'ia',type:'string'},
		{name:'ib',type:'string'},
		{name:'ic',type:'string'},
		{name:'ua',type:'string'},
		{name:'ub',type:'string'},

    	{name:'xb_add',type:'string'}

    	]);
   
    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'tzgl_qy_json.jsp'}),   
        baseParams:{whereclause:stor_where},//�����ҳ��ʱ�����ֵ������ʧ����Ϊ����������ֻ�е����ѯ��ťʱ�Ż�ı�     
        //reader����������ν����������
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
        plugins: expander,
        bbar: new Ext.PagingToolbar({
            pageSize: 10,
            store: store,
            displayInfo: true,
            displayMsg: '�� {0} ���� {1} ��,�� {2} ��',
            emptyMsg: "�޼�¼"
        })
        
});


	  
    //��ʾ��html��idΪcontainer�Ĳ���
    //grid.render();//��Ⱦ���
    Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	 // form start
	var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : 'ǣ����բ��¼����',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 600,
               titleCollapse:true,
              collapsible:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              labelWidth : 56,
              
              
              items : [{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [ {
                                           		columnWidth :.33,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                                                layout : 'form',// formlayout�������ÿؼ�
                                                border : false,// û�б߿�
                                                items : [{
                                                			xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store :store_bdt,
                                                               //value:'ȫ��',
                                                               valueField : "value",// ��������ѡ����ֵ
                                                               displayField : "text",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               //blankText : '��ѡ����ҵ��λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'taskunit',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '����',// �ؼ��ı�����ѧ��
                                                               name : 'taskunit',// �ٴ����ѣ�nameֻ�������б������
                                                               id:'bds_id',
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 		},{
                                                        columnWidth : .33,
                                                        layout : 'form',
														labelWidth : 100,
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��բʱ����ʼ',
                                                                             name : 'ksrq',
                                                                             anchor : '90%',
                                                                             id:'txt_ksrq',
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                      }]
                                                 },{
                                                        columnWidth : .33,
                                                        layout : 'form',
														labelWidth : 100,
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��բʱ���ֹ',
                                                                             name : 'jsrq',
                                                                             //value: new Date,
                                                                             anchor : '90%',
                                                                             id:'txt_jsrq',
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
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
				                                    var where=" 1=1 ";
				                                   
													if(Ext.getCmp("txt_ksrq").getValue()!="" ){
														where=where+" and gz.bgsj>=to_date('"+Ext.getCmp("txt_ksrq").getValue()+"','yyyy-mm-dd hh24:mi')";
														cell_where=cell_where+	" and gz.bgsj>=to_date('"+Ext.getCmp("txt_ksrq").getValue()+"','yyyy-mm-dd hh24:mi')";
														
													}
													if(Ext.getCmp("txt_jsrq").getValue()!="" ){
														where=where+"  and gz.bgsj <=to_date('"+Ext.getCmp("txt_jsrq").getValue()+"','yyyy-mm-dd hh24:mi')";	
													    cell_where=cell_where+"  and gz.bgsj <=to_date('"+Ext.getCmp("txt_jsrq").getValue()+"','yyyy-mm-dd hh24:mi')";	
													    
													 }
													
													if(Ext.getCmp("bds_id").getValue()!=''  && Ext.getCmp("bds_id").getValue()!='ALL'){
														where=where+" and gz.gqpym='"+Ext.getCmp("bds_id").getValue()+"' ";
														cell_where=cell_where+" and gz.gqpym='"+Ext.getCmp("bds_id").getValue()+"' ";
														
													}
													
													//alert(where);
												//	store.baseParams.whereclause=stor_where1;
													store.baseParams.whereclause =where;
													where1=where;
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
                                   }
                            }]
       });
   

//Ext.getCmp("txt_ddy").setValue(username);    
//˫���¼�
var onRowDoubleClick = function(grid, rowIndex, e){ 
        simpleForm_Save.expand();
    	simpleForm_Save.buttons[0].setVisible(false);
        simpleForm_Save.buttons[1].setVisible(true);
        simpleForm_Save.buttons[2].setVisible(true);
		simpleForm_Save.buttons[4].setVisible(true)
		if(document.getElementById("APPROVE").value=='true'){
			simpleForm_Save.buttons[3].setVisible(true);
		}
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	simpleForm_Save.getForm().loadRecord(record);
    	
    }
   simple_Grid.addListener('rowdblclick', onRowDoubleClick);
     
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		items: [simpleForm_Save,simpleForm_Query,simple_Grid]
		
	});
    
    simpleForm_Save.buttons[0].setVisible(true);
    simpleForm_Save.buttons[1].setVisible(true);
    simpleForm_Save.buttons[2].setVisible(false);
    simpleForm_Save.buttons[3].setVisible(false);
	simpleForm_Save.buttons[4].setVisible(false);
    simpleForm_Save.collapse();
    
    //simpleForm_Query.buttons[2].setVisible(false); 
function getTime()
{
  //***�õ���ǰʱ��**//
    var myyear,mymonth,myweek,myday,mytime,mymin,myhour,mysec;
	var mydate=new Date();
	myyear=mydate.getFullYear();
	mymonth=mydate.getMonth()+1;
	//alert(mymonth<10);
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

	return myyear+"-"+mymonth+"-"+myday+" "+myhour+":"+mymin;
}
   
function getTime2()
{
	var myyear,mymonth;
	var mydate=new Date();
	myyear=mydate.getFullYear();
	mymonth=mydate.getMonth()+1;
	if(mymonth<10)
	return myyear+"-"+mymonth+"-"+0+1+" "+0+0+":"+0+0;
}
   // Ext.getCmp("txt_ksrq").setValue(getTime2());
   // Ext.getCmp("txt_jsrq").setValue(getTime()); txt_ksrq
    //alert(get_nowTime());
    Ext.getCmp("txt_ksrq").setValue(get_nowTime());
    Ext.getCmp("txt_jsrq").setValue(getTime());
	

});
function get_nowTime()
{
  //***�õ���ǰʱ��**//
    var myyear,mymonth,myweek,myday,mytime,mymin,myhour,mysec;
	var mydate=new Date();
	myyear=mydate.getFullYear();
	mymonth=mydate.getMonth()+1;
	//alert("0"+mymoth);
	//if(mymonth<10)
	//mymoth="0"+mymoth;
	myday=mydate.getDate();
	//if(myday<10)
	myday="01";
	myhour=mydate.getHours();
	//if(myhour<10)
	myhour="00";
	mymin=mydate.getMinutes();
	//if(mymin<10)
	mymin="00";
	mysec=mydate.getSeconds();
	return myyear+"-"+mymonth+"-"+myday+" "+myhour+":"+mymin;
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
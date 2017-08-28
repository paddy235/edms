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
 	     return '<a  href="qjzc_del.jsp?QJBM='+value+'">ɾ��</a>';
 	 };
 
    //����Grid��ͷ
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        //new Ext.grid.RowNumberer(),
        
        {header:'�������',dataIndex:'QJBM',width:40},
        {header:'����վ������',dataIndex:'MC',width:60,sortable:true},
        {header:'��ʼ�����',dataIndex:'QSGLB',width:60,sortable:true},
        {header:'��ֹ�����',dataIndex:'JZGLB',width:60,sortable:true},
        {header:'��������',dataIndex:'GQMC',width:60,sortable:true},
        {header:'��·����',dataIndex:'XLM',width:60,sortable:true},
        {header:'����',dataIndex:'SX',width:60,sortable:true},
        {header:'ɾ��',dataIndex:'QJBM',width:60,renderer:renderDel,fixed:true}
    ]);
   
    
    var planRecord = Ext.data.Record.create([
    	{name:'QJBM',type:'string'},
    	{name:'MC',type:'string'},
    	{name:'QSGLB',type:'string'},
    	{name:'JZGLB',type:'string'},
    	{name:'GQDM',type:'string'},
    	{name:'XLDM',type:'string'},
    	{name:'SX',type:'string'},
    	{name:'GQMC',type:'string'},
    	{name:'XLM',type:'string'}
    	]);
    	
    
    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'qjzc_json.jsp'}), 
        baseParams:{whereclause:'1=1'},
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
    var my_qj="";
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
    	my_qj=Ext.getCmp("QJ_BM").getValue();    	
    	Ext.getCmp("QJ_BM").disable();
    });	
   	//grid.addListener('cellClick',cellClick);
    //��ʾ��html��idΪcontainer�Ĳ���
    //grid.render();//��Ⱦ���
     Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	 // form start
     //combo_list start
     var QJDM_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct QJBM,QJBM from J_GYJC_QJZCZD &all=all'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	QJDM_store.load();
	
     var QJMC_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct MC,MC from J_GYJC_QJZCZD&all=all'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	QJMC_store.load();
	
	
	var GQDM_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct GQDM,GQMC from J_GYJC_GQZD where JGLBDM=1&all=all'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	GQDM_store.load();
	
	var XLDM_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select XLDM,XLM from J_GYJC_XLZD&all=all'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	XLDM_store.load();
	
	var SX_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select QJSXDM,QJSXMC from J_GYJC_QJZCSX&all=all'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	SX_store.load();
	var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '����վ����ѯ',
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
	                                                 xtype : 'field',// �ؼ�������Ϊdatefield
	                                                 fieldLabel : '����վ������',
	                                                 name : 'QJBM',
	                                                 id:'qj_id',
	                                                
	                                               //  format:'Y-m-d'
	                                                 allowBlank : false// ��ѡ��ֵ������Ϊ��
	                                          }]
                                     },{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
						                    		xtype : 'combo',// �ؼ����������ó�combo
						                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
						                        	store : QJMC_store,
						                        	valueField : "value",
						                        	displayField : "text",
						                        	mode : 'local',// �������ڱ���
						                        	//forceSelection : true,// ����ѡ��һ��ѡ��
						                        	blankText : '��ѡ������վ������',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
						                        	emptyText : 'ѡ������վ������',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
						                        	hiddenName : 'MC',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
						                        	editable : true,// �������б�ֻ����ѡ�񣬲���������
						                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
						                        	//allowBlank : false,// ��ѡ��ֵ������Ϊ��
						                        	fieldLabel : '����վ������',// �ؼ��ı�����ѧ��
						                        	name : 'MC',// �ٴ����ѣ�nameֻ�������б������
						                        	id:'qj_mc',
						                        	anchor : '70%'// input�Ŀ����90%
						    					}]
                                     },{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
						                    		xtype : 'combo',// �ؼ����������ó�combo
						                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
						                        	store : GQDM_store,
						                        	valueField : "value",
						                        	displayField : "text",
						                        	mode : 'local',// �������ڱ���
						                        	//forceSelection : true,// ����ѡ��һ��ѡ��
						                        	blankText : '��ѡ����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
						                        	emptyText : 'ѡ�񹩹���',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
						                        	hiddenName : 'GQDM',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
						                        	editable : true,// �������б�ֻ����ѡ�񣬲���������
						                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
						                        	//allowBlank : false,// ��ѡ��ֵ������Ϊ��
						                        	fieldLabel : '����',// �ؼ��ı�����ѧ��
						                        	name : 'GQDM',// �ٴ����ѣ�nameֻ�������б������
						                        	id:'gq_id',
						                        	anchor : '70%'// input�Ŀ����90%
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
										if(Ext.getCmp("qj_id").getValue()!=""&&Ext.getCmp("qj_id").getValue()!="ALL" ){
											where=where+" and QJBM like '%"+Ext.getCmp("qj_id").getValue()+"%'";
										}
										if(Ext.getCmp("qj_mc").getValue()!=""&&Ext.getCmp("qj_mc").getValue()!="ALL" ){
											where=where+" and MC like'%"+Ext.getCmp("qj_mc").getValue()+"%'";	
										}
										if(Ext.getCmp("gq_id").getValue()!="" &&Ext.getCmp("gq_id").getValue()!="ALL"){
											where=where+" and b.GQDM like'%"+Ext.getCmp("gq_id").getValue()+"%'";	
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
              title : '����վ�����',
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
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '����վ������',
                                                                             name : 'QJBM',
                                                                             id:'QJ_BM',
                                                                            
                                                                           //  format:'Y-m-d'
                                                                             allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '����վ������',
                                                                             name : 'MC',
                                                                            
                                                                           //  format:'Y-m-d'
                                                                             allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��ʼ�����',
                                                                             name : 'QSGLB',
                                                                            
                                                                           //  format:'Y-m-d'
                                                                             allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��ֹ�����',
                                                                             name : 'JZGLB',
                                                                             allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
									                    		xtype : 'combo',// �ؼ����������ó�combo
									                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
									                        	store : GQDM_store,
									                        	valueField : "value",
									                        	displayField : "text",
									                        	mode : 'local',// �������ڱ���
									                        	//forceSelection : true,// ����ѡ��һ��ѡ��
									                        	blankText : '��ѡ����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
									                        	emptyText : 'ѡ�񹩹���',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
									                        	hiddenName : 'GQDM',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
									                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
									                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
									                        	//allowBlank : false,// ��ѡ��ֵ������Ϊ��
									                        	fieldLabel : '����',// �ؼ��ı�����ѧ��
									                        	name : 'GQDM',// �ٴ����ѣ�nameֻ�������б������
									                        	anchor : '70%'// input�Ŀ����90%
									    					}]
                                                 },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
									                    		xtype : 'combo',// �ؼ����������ó�combo
									                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
									                        	store : XLDM_store,
									                        	valueField : "value",
									                        	displayField : "text",
									                        	mode : 'local',// �������ڱ���
									                        	//forceSelection : true,// ����ѡ��һ��ѡ��
									                        	blankText : '��ѡ����·',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
									                        	emptyText : 'ѡ����·',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
									                        	hiddenName : 'XLDM',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
									                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
									                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
									                        	//allowBlank : false,// ��ѡ��ֵ������Ϊ��
									                        	fieldLabel : '��·',// �ؼ��ı�����ѧ��
									                        	name : 'XLDM',// �ٴ����ѣ�nameֻ�������б������
									                        	anchor : '70%'// input�Ŀ����90%
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
                                                                      data : [['1', '����'], ['2', 'վ��']]
                                                               }),
                                                               valueField : "returnValue",// ��������ѡ����ֵ
                                                               displayField : "displayText",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               forceSelection : true,// ����ѡ��һ��ѡ��
                                                               blankText : '��ѡ������վ������',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '��ѡ������վ������',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'SX',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '��չ��ʶ',// �ؼ��ı�����ѧ��
                                                               name : 'SX',// �ٴ����ѣ�nameֻ�������б������
                                                               id : 'sx_id',// �ٴ����ѣ�nameֻ�������б������
                                                               anchor : '80%',// input�Ŀ����90%
                                                               listeners:{"select":function(combo, planRecord_gq,index){
                                                                    var sldw=Ext.getCmp("sx_id").value;
                                                                    //alert(sldw);
                                                               		}
                                                               }
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
                                               url : 'Update.jsp?QJBM='+my_qj,
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		simpleForm_Save.buttons[0].setVisible(true);
                                               		simple_Grid.getStore().reload();
                                               		Ext.Msg.alert('��Ϣ',action.result.msg);
                                               		Ext.getCmp("QJ_BM").enable();
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
                   Ext.getCmp("QJ_BM").enable();
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
	Ext.getCmp("QJ_BM").enable();
 });
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
 	     return '<a  href="cjzd_del.jsp?CJDM='+value+'">ɾ��</a>';
 	 };
 
    //����Grid��ͷ
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        //new Ext.grid.RowNumberer(),
        
        {header:'���Ӵ���',dataIndex:'CJDM',width:60},
        {header:'���Ӽ��',dataIndex:'CJJC',width:50,sortable:true},
        {header:'��������',dataIndex:'CJMC',width:60,sortable:true},
        {header:'���ӵ绰',dataIndex:'CJDH',width:60,sortable:true},
        {header:'���Ӵ���',dataIndex:'CJCZ',width:60,sortable:true},
        {header:'���ӵ�ַ',dataIndex:'CJDZ',width:140,sortable:true},
        {header:'������',dataIndex:'GGDMC',width:60,sortable:true},
        {header:'����ƴ����',dataIndex:'CJPYM',width:50,sortable:true},
        {header:'����',dataIndex:'JD',width:30,sortable:true},
        {header:'γ��',dataIndex:'WD',width:30,sortable:true},
        {header:'ɾ��',dataIndex:'CJDM',width:60,renderer:renderDel,fixed:true}
    ]);
   
    
    var planRecord = Ext.data.Record.create([
    	{name:'CJDM',type:'string'},
    	{name:'CJJC',type:'string'},
    	{name:'CJMC',type:'string'},
    	{name:'CJDH',type:'string'},
    	{name:'CJCZ',type:'string'},
    	{name:'CJDZ',type:'string'},
    	{name:'DDM',type:'string'},
    	{name:'CJPYM',type:'string'},
    	{name:'JD',type:'string'},
    	{name:'WD',type:'string'},
    	{name:'GGDMC',type:'string'}
    	]);
    	
    
    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'cjzd_json.jsp'}),        
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
    	my_cjdm=Ext.getCmp("CJDM_ID").getValue();
    	Ext.getCmp("CJDM_ID").disable();
    });	
   	//grid.addListener('cellClick',cellClick);
    //��ʾ��html��idΪcontainer�Ĳ���
    //grid.render();//��Ⱦ���
     Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	 // form start
	/*var CJDM_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct CJDM,CJDM from J_GYJC_CJZD&all=all'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	CJDM_store.load();*/
	
	var CJMC_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct CJMC,CJMC from J_GYJC_CJZD&all=all'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	CJMC_store.load();
	
	var SSD_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct GDDDM,GGDMC from J_GYJC_GDDZD&all=all'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	SSD_store.load();
	
	var SSD1_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct GDDDM,GGDMC from J_GYJC_GDDZD'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	SSD1_store.load();
	var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '���Ӳ�ѯ',
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
                                                         fieldLabel : '���Ӵ���',
                                                         name : 'CJDM',
                                                        id:'CJ_DM',
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
								                        	store : CJMC_store,
								                        	valueField : "value",
								                        	displayField : "text",
								                        	mode : 'local',// �������ڱ���
								                        	//forceSelection : true,// ����ѡ��һ��ѡ��
								                        	blankText : '��ѡ�񹤶�',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
								                        	emptyText : 'ѡ�񹤶�',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
								                        	hiddenName : 'CJMC',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
								                        	editable : true,// �������б�ֻ����ѡ�񣬲���������
								                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
								                        	//allowBlank : false,// ��ѡ��ֵ������Ϊ��
								                        	fieldLabel : '��������',// �ؼ��ı�����ѧ��
								                        	name : 'CJMC',// �ٴ����ѣ�nameֻ�������б������
								                        	id:'CJ_MC',
								                        	anchor : '80%'// input�Ŀ����90%
								    					}]	
								           },{
		                                        columnWidth : .3,
		                                        layout : 'form',
		                                        border : false,
		                                        items : [{
								                    		xtype : 'combo',// �ؼ����������ó�combo
								                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
								                        	store : SSD_store,
								                        	valueField : "value",
								                        	displayField : "text",
								                        	mode : 'local',// �������ڱ���
								                        	//forceSelection : true,// ����ѡ��һ��ѡ��
								                        	blankText : '��ѡ�񹩵��',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
								                        	emptyText : 'ѡ�������',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
								                        	hiddenName : 'DDM',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
								                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
								                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
								                        	//allowBlank : false,// ��ѡ��ֵ������Ϊ��
								                        	fieldLabel : '���������',// �ؼ��ı�����ѧ��
								                        	name : 'DDM',// �ٴ����ѣ�nameֻ�������б������
								                        	id:'D_MC',
								                        	anchor : '80%'// input�Ŀ����90%
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
										if(Ext.getCmp("CJ_DM").getValue()!=""&&Ext.getCmp("CJ_DM").getValue()!="ALL" ){
											where=where+" and CJDM like '%"+Ext.getCmp("CJ_DM").getValue()+"%'";
										}
										if(Ext.getCmp("CJ_MC").getValue()!=""&&Ext.getCmp("CJ_MC").getValue()!="ALL" ){
											where=where+" and CJMC like'%"+Ext.getCmp("CJ_MC").getValue()+"%'";	
										}
										if(Ext.getCmp("D_MC").getValue()!=""&&Ext.getCmp("D_MC").getValue()!="ALL" ){
											where=where+" and DDM like'%"+Ext.getCmp("D_MC").getValue()+"%'";	
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
              title : '�������',
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
                                                         fieldLabel : '���Ӵ���',
                                                         name : 'CJDM',
                                                        id:'CJDM_ID',
                                                       //  format:'Y-m-d'
                                                         allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                  }]
                             },{
                                    columnWidth : .3,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                                         xtype : 'field',// �ؼ�������Ϊdatefield
                                                         fieldLabel : '���Ӽ��',
                                                         name : 'CJJC',
                                                        
                                                       //  format:'Y-m-d'
                                                         allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                  }]
                             },{
                                    columnWidth : .3,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                                         xtype : 'field',// �ؼ�������Ϊdatefield
                                                         fieldLabel : '��������',
                                                         name : 'CJMC',
                                                        
                                                       //  format:'Y-m-d'
                                                         allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                  }]
                             },{
                                    columnWidth : .3,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                                         xtype : 'field',// �ؼ�������Ϊdatefield
                                                         fieldLabel : '���ӵ绰',
                                                         name : 'CJDH',
                                                         allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                  }]
                             },{
                                    columnWidth : .3,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                                         xtype : 'field',// �ؼ�������Ϊdatefield
                                                         fieldLabel : '���Ӵ���',
                                                         name : 'CJCZ',
                                                         allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                  }]
                             },{
                                    columnWidth : .3,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                                         xtype : 'field',// �ؼ�������Ϊdatefield
                                                         fieldLabel : '����',
                                                         name : 'JD',
                                                         allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                  }]
                             },{
                                    columnWidth : .3,
                                    layout : 'form',
                                    border : false,
                                    items : [{
								xtype : 'combo',// �ؼ����������ó�combo
						   		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
						    	store : SSD1_store,
						    	valueField : "value",
						    	displayField : "text",
						    	mode : 'local',// �������ڱ���
						    	//forceSelection : true,// ����ѡ��һ��ѡ��
						    	blankText : '��ѡ�������',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
						    	emptyText : 'ѡ�������',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
						    	hiddenName : 'DDM',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
						    	editable : false,// �������б�ֻ����ѡ�񣬲���������
						    	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
						    	//allowBlank : false,// ��ѡ��ֵ������Ϊ��
						    	fieldLabel : '���������',// �ؼ��ı�����ѧ��
						    	name : 'DDM',// �ٴ����ѣ�nameֻ�������б������
						    	anchor : '80%'// input�Ŀ����90%
							}]
                             },{
                                    columnWidth : .3,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                                         xtype : 'field',// �ؼ�������Ϊdatefield
                                                         fieldLabel : '����ƴ����',
                                                         name : 'CJPYM',
                                                         allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                  }]
                             },{
                                    columnWidth : .3,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                                         xtype : 'field',// �ؼ�������Ϊdatefield
                                                         fieldLabel : 'γ��',
                                                         name : 'WD',
                                                         allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                  }]
                             },{
                                    columnWidth : .9,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                                         xtype : 'field',// �ؼ�������Ϊdatefield
                                                         fieldLabel : '���ӵ�ַ',
                                                         name : 'CJDZ',
                                                         anchor : '89%',
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
                                                                      url : 'save.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                                                      // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                                                      success : function(form, action) {
                                                                             // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                                                             Ext.Msg.alert('����',action.result.data);
                                                                      		Ext.Msg.alert('��Ϣ',action.result.msg);
                                                                      		simpleForm_Query.form.reset();
                                                                      		 window.location.href='cjzd.jsp';
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
                                               url : 'Update.jsp?CJDM='+my_cjdm,
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		simpleForm_Save.buttons[0].setVisible(true);
                                               		simple_Grid.getStore().reload();
                                               		Ext.Msg.alert('��Ϣ',action.result.msg);
                                               		Ext.getCmp("CJDM_ID").enable();
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
                   Ext.getCmp("CJDM_ID").enable();
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
	Ext.getCmp("CJDM_ID").enable();
 });
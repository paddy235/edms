Ext.onReady(function(){

    Ext.QuickTips.init();
Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var bd = Ext.getBody();
    
    /*
     * ================  ������ѯ�� =======================
    */
    //��Ⱦ����html����
 	 var renderXiangxi =function(value)
 	 {
 	     return '<a href="aa.jsp?id='+value+'">��ϸ</a>';
 	 };
 	 var renderDel =function(value)
 	 {
 	     return '<a  href="gqzdDel.jsp?GQDM='+value+'">ɾ��</a>';
 	 };
 	 
 	 //����Grid��ͷ
   	 var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
         new Ext.grid.RowNumberer(),
        //{header:'���',dataIndex:'id',width:40,sortable:true,fixed:true},
        {header:'��������',dataIndex:'GQDM',width:50},
        {header:'�������',dataIndex:'GQJC',width:50,sortable:true},
        {header:'��������',dataIndex:'GQMC',width:60,sortable:true},
        {header:'�����绰',dataIndex:'GQDH',width:50,sortable:true},
        {header:'��������',dataIndex:'GQCZ',width:50,sortable:true},
        {header:'������ַ',dataIndex:'GQDZ',width:70,sortable:true},
        {header:'�������',dataIndex:'JGLBMC',width:50,sortable:true},
        {header:'��������',dataIndex:'CJMC',width:50,sortable:true},
        {header:'�������̨',dataIndex:'DDTMC',width:70,sortable:true},
        {header:'����ƴ����',dataIndex:'GQPYM',width:45,sortable:true},
        {header:'����',dataIndex:'JD',width:40,sortable:true},
        {header:'γ��',dataIndex:'WD',width:40,sortable:true},
        {header:'ɾ��',dataIndex:'GQDM',width:40,renderer:renderDel,fixed:true}
    ]);
     
     var planRecord = Ext.data.Record.create([
        {name:'GQDM',type:'string'},
    	{name:'GQJC',type:'string'},
    	{name:'GQMC',type:'string'},
    	{name:'GQDH',type:'string'},
    	{name:'GQCZ',type:'string'},
    	{name:'GQDZ',type:'string'},
    	{name:'JGLBDM',type:'string'},
    	{name:'CJDM',type:'string'},
    	{name:'DDTDM',type:'string'},
    	{name:'GQPYM',type:'string'},
    	{name:'JD',type:'string'},
    	{name:'WD',type:'string'},
    	{name:'JGLBMC',type:'string'},
    	{name:'CJMC',type:'string'},
    	{name:'DDTMC',type:'string'}
    	]);
    
       	
     //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
	 var store = new Ext.data.Store({
     	//proxy�������Ǵ�����������
     	proxy: new Ext.data.HttpProxy({url:'gqzdList.jsp'}),     
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
        //title: '��ѯ�б�', 
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
        //width:1000,
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
    var my_gq="";
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
    	my_gq=Ext.getCmp("GQ_DM").getValue();    	
    	Ext.getCmp("GQ_DM").disable();
    });	

    //grid.render();//��Ⱦ���
    Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	// form start   
   
	 	
	var GQDM_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct GQDM,GQDM from J_GYJC_GQZD&all=all'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	GQDM_store.load();
	
	var GQMC_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct GQMC,GQMC from J_GYJC_GQZD&all=all'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	GQMC_store.load();
	
	var SSCJ_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct CJDM,CJMC from J_GYJC_CJZD&all=all'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	SSCJ_store.load();
	
    var JGLB_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct JGLBDM,JGLBMC from J_GYJC_JGLB&all=all'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	JGLB_store.load();
	
	var SSDDT_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct DDTDM,DDTMC from J_GYJC_DDTZD&all=all'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	SSDDT_store.load();

    /*
     * ================  ����ǰ��λ�ã��¹ʰ���---->������ѯ =======================
    */
	var simpleForm_Query = new Ext.FormPanel({
		renderTo : document.body,
       	title: '������ѯ',
        labelAlign : 'left',
        //bodyStyle:'padding:5px 5px 0',
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
	                    		xtype : 'combo',// �ؼ����������ó�combo
	                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
	                        	store : GQMC_store,
	                        	valueField : "value",
	                        	displayField : "text",
	                        	mode : 'local',// �������ڱ���
	                        	//forceSelection : true,// ����ѡ��һ��ѡ��
	                        	blankText : '��ѡ����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
	                        	emptyText : 'ѡ����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
	                        	hiddenName : 'GQMC',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
	                        	editable : true,// �������б�ֻ����ѡ�񣬲���������
	                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
	                        	//allowBlank : false,// ��ѡ��ֵ������Ϊ��
	                        	fieldLabel : '��������',// �ؼ��ı�����ѧ��
	                        	name : 'GQMC',// �ٴ����ѣ�nameֻ�������б������
	                        	id:'gq_mc',
	                        	anchor : '80%'// input�Ŀ����90%
    					}]	
		           },{
		                columnWidth : .3,
		                layout : 'form',
		                border : false,
		                items : [{
	                    		xtype : 'combo',// �ؼ����������ó�combo
	                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
	                        	store : JGLB_store,
	                        	valueField : "value",
	                        	displayField : "text",
	                        	mode : 'local',// �������ڱ���
	                        	//forceSelection : true,// ����ѡ��һ��ѡ��
	                        	blankText : '��ѡ��������',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
	                        	emptyText : 'ѡ��������',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
	                        	hiddenName : 'JGLBDM',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
	                        	editable : true,// �������б�ֻ����ѡ�񣬲���������
	                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
	                        	//allowBlank : false,// ��ѡ��ֵ������Ϊ��
	                        	fieldLabel : '�������',// �ؼ��ı�����ѧ��
	                        	name : 'JGLBDM',// �ٴ����ѣ�nameֻ�������б������
	                        	id:'jglb_id',
	                        	anchor : '80%'// input�Ŀ����90%
	    					}]	
		           },{
	                    columnWidth : .3,
	                    layout : 'form',
	                    border : false,
	                    items : [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store : SSCJ_store,
                        	valueField : "value",
                        	displayField : "text",
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ�񹤶�����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ�񹤶�����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'CJDM',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	//allowBlank : false,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : '������������',// �ؼ��ı�����ѧ��
                        	name : 'CJDM',// �ٴ����ѣ�nameֻ�������б������
                        	id:'cj_id',
                        	anchor : '80%'// input�Ŀ����90%
    					}]	
		           }]
			}],
           // Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
              buttons : [{
               // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
               buttonlAlign : 'right',
 	                       text : '��ѯ',
	                       handler : function() {
	                              if (!simpleForm_Query.form.isValid()) {return };
	                       		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
	                              if (simpleForm_Query.form.isValid()) {
	                                     //�����ѯ��ť���޸�whereclause��ֵ����Ϊ������������ҳ������ʧ
										//��Ҫ��Ұ�ԭ��query.jsp�е�ƴwhereclause���߼��õ�������									
										var where="1=1 ";										
										if(Ext.getCmp("gq_mc").getValue()!=""&&Ext.getCmp("gq_mc").getValue()!="ALL" ){
											where=where+" and GQMC = '"+Ext.getCmp("gq_mc").getValue()+"'";
										}
										if(Ext.getCmp("jglb_id").getValue()!=""&&Ext.getCmp("jglb_id").getValue()!="ALL" ){
											where=where+" and a.JGLBDM ='"+Ext.getCmp("jglb_id").getValue()+"'";	
										}
										if(Ext.getCmp("cj_id").getValue()!=""&&Ext.getCmp("cj_id").getValue()!="ALL" ){
											where=where+" and a.CJDM ='"+Ext.getCmp("cj_id").getValue()+"'";	
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
                            },{
				                // ȡ����ť���Ǽ򵥵�resetһ��form�Ŀؼ�
				                text : '����',
				                handler : function() {
				                       simpleForm_Query.form.reset();
				                       simpleForm_Save.collapse();
				                     }
				          }]
       });
     var SSCJ1_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct CJDM,CJMC from J_GYJC_CJZD'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	SSCJ1_store.load();
	
	 var JGLB1_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct JGLBDM,JGLBMC from J_GYJC_JGLB'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	JGLB1_store.load();

	var SSDDT1_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct DDTDM,DDTMC from J_GYJC_DDTZD'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	SSDDT1_store.load();
    /*==============�����鵵---->�¹ʱ�������========*/
	var simpleForm_Save = new Ext.FormPanel({
        renderTo : document.body,
        title: '�������',
        labelAlign : 'left',
        bodyStyle:'padding:5px 5px 0',
        //labelWidth: 75, 
        collapsible:true,
        titleCollapse:true,
        method:'POST',
        frame:true,
        autoWidth:true,
        //width: 1000,
        //fileUpload: true,
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
                                                                 fieldLabel : '��������',
                                                                 name : 'GQDM',
                                                                 id:'GQ_DM',
                                                                
                                                               //  format:'Y-m-d'
                                                                 blankText:"����Ϊ�գ�����д",
                                                                 allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                          }]
                                     },{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                                 xtype : 'field',// �ؼ�������Ϊdatefield
                                                                 fieldLabel : '�������',
                                                                 name : 'GQJC',
                                                                
                                                               //  format:'Y-m-d'
                                                                 blankText:"����Ϊ�գ�����д",
                                                                 allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                          }]
                                     },{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                                 xtype : 'field',// �ؼ�������Ϊdatefield
                                                                 fieldLabel : '��������',
                                                                 name : 'GQMC',
                                                                
                                                               //  format:'Y-m-d'
                                                                 blankText:"����Ϊ�գ�����д",
                                                                 allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                          }]
                                     },{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                                 xtype : 'field',// �ؼ�������Ϊdatefield
                                                                 fieldLabel : '�����绰',
                                                                 name : 'GQDH',
                                                                 allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                          }]
                                     },{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                                 xtype : 'field',// �ؼ�������Ϊdatefield
                                                                 fieldLabel : '��������',
                                                                 name : 'GQCZ',
                                                                 allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                          }]
                                     },{
                                            columnWidth : .3,
                                            layout : 'form',
                                            border : false,
                                            items : [{
						                    		xtype : 'combo',// �ؼ����������ó�combo
						                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
						                        	store : JGLB1_store,
						                        	valueField : "value",
						                        	displayField : "text",
						                        	mode : 'local',// �������ڱ���
						                        	//forceSelection : true,// ����ѡ��һ��ѡ��
						                        	blankText : '��ѡ��������',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
						                        	emptyText : 'ѡ��������',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
						                        	hiddenName : 'JGLBDM',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
						                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
						                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
						                        	//allowBlank : false,// ��ѡ��ֵ������Ϊ��
						                        	fieldLabel : '�������',// �ؼ��ı�����ѧ��
						                        	name : 'JGLBDM',// �ٴ����ѣ�nameֻ�������б������
						                        	anchor : '80%'// input�Ŀ����90%
							    					}]	
									 },{
                                                columnWidth : .3,
                                                layout : 'form',
                                            border : false,
                                            items : [{
						                    		xtype : 'combo',// �ؼ����������ó�combo
						                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
						                        	store : SSCJ1_store,
						                        	valueField : "value",
						                        	displayField : "text",
						                        	mode : 'local',// �������ڱ���
						                        	//forceSelection : true,// ����ѡ��һ��ѡ��
						                        	blankText : '��ѡ�񹤶�����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
						                        	emptyText : 'ѡ�񹤶�����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
						                        	hiddenName : 'CJDM',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
						                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
						                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
						                        	//allowBlank : false,// ��ѡ��ֵ������Ϊ��
						                        	fieldLabel : '������������',// �ؼ��ı�����ѧ��
						                        	name : 'CJDM',// �ٴ����ѣ�nameֻ�������б������
						                        	anchor : '80%'// input�Ŀ����90%
							    					}]	
									},{
                                                columnWidth : .3,
                                                layout : 'form',
                                            border : false,
                                            items : [{
						                    		xtype : 'combo',// �ؼ����������ó�combo
						                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
						                        	store : SSDDT1_store,
						                        	valueField : "value",
						                        	displayField : "text",
						                        	mode : 'local',// �������ڱ���
						                        	//forceSelection : true,// ����ѡ��һ��ѡ��
						                        	blankText : '��ѡ����̨',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
						                        	emptyText : 'ѡ����̨',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
						                        	hiddenName : 'DDTDM',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
						                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
						                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
						                        	//allowBlank : false,// ��ѡ��ֵ������Ϊ��
						                        	fieldLabel : '���̨',// �ؼ��ı�����ѧ��
						                        	name : 'DDTDM',// �ٴ����ѣ�nameֻ�������б������
						                        	anchor : '80%'// input�Ŀ����90%
							    					}]	
   									},{
                                                columnWidth : .3,
                                                layout : 'form',
                                            border : false,
                                            items : [{
                                                                 xtype : 'field',// �ؼ�������Ϊdatefield
                                                                 fieldLabel : '����ƴ����',
                                                                 name : 'GQPYM',
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
                                                                 fieldLabel : '������ַ',
                                                                 name : 'GQDZ',
                                                                 anchor : '90%',
                                                                 allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                          }]
                                     }]

                }],

        buttons: [{
            text: '����',
                  handler : function() {
                  if (!simpleForm_Save.form.isValid()) {return };
                  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                  if (simpleForm_Save.form.isValid()) {
                     simpleForm_Save.form.doAction('submit', {
                                                 	waitMsg:'������,���Ժ�...',  
                                                    url : 'gqzdSave.jsp',
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
                                               url : 'gqzdUpdate.jsp?GQDM='+my_gq,
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		simpleForm_Save.buttons[0].setVisible(true);
                                               		simple_Grid.getStore().reload();
                                               		Ext.Msg.alert('��Ϣ',action.result.msg);
                     	                            Ext.getCmp("GQ_DM").enable();
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
                  Ext.getCmp("GQ_DM").enable();
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
	Ext.getCmp("GQ_DM").enable();
 });
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
 	     return '<a  href="kx_del.jsp?ROWID='+value+'">ɾ��</a>';
 	 };
 
    //����Grid��ͷ
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        //new Ext.grid.RowNumberer(),
        
        {header:'��������',dataIndex:'GQMC',width:60},
        {header:'���غ�',dataIndex:'KGH',width:40,sortable:true},
        {header:'��������',dataIndex:'KXMC',width:60,sortable:true},
        {header:'������',dataIndex:'SXX',width:30,sortable:true},
        {header:'��·��',dataIndex:'XLM',width:60,sortable:true},
        {header:'ͣ������',dataIndex:'TDQD',width:60,sortable:true},
        {header:'�г����Ʒ�Χ',dataIndex:'XCXZFW',width:60,sortable:true},
        {header:'����װ�ô���',dataIndex:'BHZZDM',width:60,sortable:true},
        {header:'�����',dataIndex:'GLB',width:60,sortable:true},
        {header:'���װ�ô���',dataIndex:'CJZZDM',width:60,sortable:true},
        {header:'ɾ��',dataIndex:'ROWID',width:60,renderer:renderDel,fixed:true}
    ]);
   
    
    var planRecord = Ext.data.Record.create([
        {name:'xh',type:'int'},
    	{name:'GQDM',type:'string'},
    	{name:'KGH',type:'string'},
    	{name:'KXMC',type:'string'},
    	{name:'SXX',type:'string'},
    	{name:'XLDM',type:'string'},
    	{name:'TDQD',type:'string'},
    	{name:'XCXZFW',type:'string'},
    	{name:'BHZZDM',type:'string'},
    	{name:'GLB',type:'string'},
    	{name:'CJZZDM',type:'string'},
    	{name:'XLM',type:'string'},
    	{name:'GQMC',type:'string'},
    	{name:'ROWID',type:'string'}
    	]);
    	
    
    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'kx_json.jsp'}),   
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
    var my_kx="";
    var my_kx1="";
    	simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
    	// simpleForm_Query.collapse();
    	simpleForm_Save.expand();
    	simpleForm_Save.buttons[0].setVisible(false);
    	simpleForm_Save.buttons[1].setVisible(true);
    	//simpleForm_Save.buttons[3].setVisible(true);
    	//simpleForm_Save.buttons[4].setVisible(true);
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	simpleForm_Save.getForm().loadRecord(record);
    	my_kx=Ext.getCmp("GQ_DM").getValue();  
    	my_kx1=Ext.getCmp("BHZZ_ID").getValue(); 
    	Ext.getCmp("GQ_DM").disable();
    	Ext.getCmp("BHZZ_ID").disable();
    });	
   	//grid.addListener('cellClick',cellClick);
    //��ʾ��html��idΪcontainer�Ĳ���
    //grid.render();//��Ⱦ���
     Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	 // form start
     	var GQDMCX_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct GQDM,GQMC from J_GYJC_GQZD where JGLBDM=2  or JGLBDM=4 or JGLBDM=5 or JGLBDM=6 &all=all'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	GQDMCX_store.load();
	 	var XLMC_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct XLDM,XLM from J_GYJC_XLZD&all=all'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	XLMC_store.load();
	var BHZZ_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct BHZZLXBM,BHZZLXMC from J_GDGY_BHZZLX&all=all'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	BHZZ_store.load();
	var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '���߲�ѯ',
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
						                		columnWidth:.3,
						                		layout: 'form',
						                		border : false,
						                		items: [{
						                    		xtype : 'combo',// �ؼ����������ó�combo
						                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
						                        	store : GQDMCX_store,
						                        	valueField : "value",
						                        	displayField : "text",
						                        	mode : 'local',// �������ڱ���
						                        	//forceSelection : true,// ����ѡ��һ��ѡ��
						                        	blankText : '��ѡ����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
						                        	emptyText : 'ѡ����ҵ����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
						                        	hiddenName : 'GQDM',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
						                        	editable : true,// �������б�ֻ����ѡ�񣬲���������
						                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
						                        	//allowBlank : false,// ��ѡ��ֵ������Ϊ��
						                        	fieldLabel : '����',// �ؼ��ı�����ѧ��
						                        	name : 'GQDM',// �ٴ����ѣ�nameֻ�������б������
						                        	id:'gq_id',
						                        	anchor : '80%'// input�Ŀ����90%
						    					}]	
						           },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��������',
                                                                             name : 'KXMC',
                                                                             id:'kx_mc',
                                                                             allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
									                    		xtype : 'combo',// �ؼ����������ó�combo
									                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
									                        	store : XLMC_store,
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
									                        	fieldLabel : '��·����',// �ؼ��ı�����ѧ��
									                        	name : 'XLDM',// �ٴ����ѣ�nameֻ�������б������
									                        	id:'xl_m',
									                        	anchor : '80%'// input�Ŀ����90%
									    					}]
                                                 }]

                            }],
              // Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
               buttons : [{
	                        text : '��ѯ',
	                       handler : function() {
	                              if (!simpleForm_Query.form.isValid()) {return };
	                       		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
	                              if (simpleForm_Query.form.isValid()) {
	                                     //�����ѯ��ť���޸�whereclause��ֵ����Ϊ������������ҳ������ʧ
										//��Ҫ��Ұ�ԭ��query.jsp�е�ƴwhereclause���߼��õ�������									
										var where="1=1 ";										
										if(Ext.getCmp("gq_id").getValue()!=""&&Ext.getCmp("gq_id").getValue()!="ALL" ){
											where=where+" and a.GQDM = '"+Ext.getCmp("gq_id").getValue()+"'";
										}
										if(Ext.getCmp("kx_mc").getValue()!="" ){
											where=where+" and KXMC like'%"+Ext.getCmp("kx_mc").getValue()+"%'";	
										}
										if(Ext.getCmp("xl_m").getValue()!=""&&Ext.getCmp("xl_m").getValue()!="ALL"  ){
											where=where+" and a.XLDM ='"+Ext.getCmp("xl_m").getValue()+"'";	
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
                                                        items: [{
									                    		xtype : 'combo',// �ؼ����������ó�combo
									                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
									                        	store : GQDMCX_store,
									                        	valueField : "value",
									                        	displayField : "text",
									                        	mode : 'local',// �������ڱ���
									                        	//forceSelection : true,// ����ѡ��һ��ѡ��
									                        	blankText : '��ѡ����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
									                        	emptyText : 'ѡ����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
									                        	hiddenName : 'GQDM',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
									                        	editable : true,// �������б�ֻ����ѡ�񣬲���������
									                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
									                        	allowBlank : false,// ��ѡ��ֵ������Ϊ��
									                        	fieldLabel : '��������',// �ؼ��ı�����ѧ��
									                        	name : 'GQDM',// �ٴ����ѣ�nameֻ�������б������
									                        	anchor : '80%',// input�Ŀ����90%
									                        	id: 'GQ_DM'
    														}]	
                                                 },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '���غ�',
                                                                             name : 'KGH',
                                                                             anchor:'80%',
                                                                            
                                                                           //  format:'Y-m-d'
                                                                             allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth : .4,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��������',
                                                                             name : 'KXMC',
                                                                            
                                                                           //  format:'Y-m-d'
                                                                             anchor:'90%',
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
                                                                      data : [['0', '����'], ['1', '����'], ['2', '��ֱ']]
                                                               }),
                                                               valueField : "returnValue",// ��������ѡ����ֵ
                                                               displayField : "displayText",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               forceSelection : true,// ����ѡ��һ��ѡ��
                                                               blankText : '��ѡ��������',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '��ѡ��������',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'SXX',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '������',// �ؼ��ı�����ѧ��
                                                               name : 'SSX',// �ٴ����ѣ�nameֻ�������б������
                                                               id : 'ssx_id',// �ٴ����ѣ�nameֻ�������б������
                                                               anchor : '80%',// input�Ŀ����90%
                                                               listeners:{"select":function(combo, planRecord_gq,index){
                                                                    var sldw=Ext.getCmp("ssx_id").value;
                                                                    //alert(sldw);
                                                               		}
                                                               }
                                                        }]
                                                 },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items: [{
									                    		xtype : 'combo',// �ؼ����������ó�combo
									                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
									                        	store : XLMC_store,
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
									                        	fieldLabel : '��·����',// �ؼ��ı�����ѧ��
									                        	allowBlank : false,
									                        	name : 'XLDM',// �ٴ����ѣ�nameֻ�������б������
									                        	anchor : '80%'// input�Ŀ����90%
									    					}]	
                                                 },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items: [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '����װ�ô���',
                                                                             name : 'BHZZDM',
                                                                             id:'BHZZ_ID',
                                                                             allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]	
                                                 },{
                                                        columnWidth : .6,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : 'ͣ������',
                                                                             name : 'TDQD',
                                                                             anchor:'90%',
                                                                             allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '�����',
                                                                             name : 'GLB',
                                                                             allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth : .6,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '�г����Ʒ�Χ',
                                                                             name : 'XCXZFW',
                                                                             anchor:'90%'
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '���װ�ô���',
                                                                             name : 'CJZZDM'
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
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
                                               url : 'Update.jsp?GQDM='+my_kx+'&BHZZDM='+my_kx1,
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		simpleForm_Save.buttons[0].setVisible(true);
                                               		simple_Grid.getStore().reload();
                                               		Ext.Msg.alert('��Ϣ',action.result.msg);
                                               		Ext.getCmp("GQ_DM").enable();
                                               		Ext.getCmp("BHZZ_ID").enable();
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
                   Ext.getCmp("BHZZ_ID").enable();
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
	//Ext.getCmp("txt_zy_xlsj").enable();
	Ext.getCmp("GQ_DM").enable();
	Ext.getCmp("BHZZ_ID").enable();
 });
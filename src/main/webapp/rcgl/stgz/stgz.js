Ext.onReady(function() {
		this.ryshow=function(value){
		//window.open("xxx.jsp");
	    //alert(value);
    	win1 = new Ext.Window({
        	width:document.body.clientWidth-20,
        	height:document.body.clientHeight-10,
        	layout:'column',
       		title: '��ͤ���ϼ�¼',
        	closeAction:'hide',
        	plain: true,
        	autoScroll:false,
        	html:'<iframe style="width:100%;height:100%" src="../../tjbb/query/stgz.jsp?where='+value+'"></iframe>'
     	});
    	win1.show(this);
  	};
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    
    //alert("aaa");
    
 	//��Ⱦ����html����

 	 var renderDel =function(value)
 	 {
 	     return '<a  href="stgz_del.jsp?JLID='+value+'">ɾ��</a>';
 	 };
 
    //����Grid��ͷ
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        //new Ext.grid.RowNumberer(),
        
        {header:'����',dataIndex:'DJRQ',width:100},
        {header:'��ͤ',dataIndex:'GQMC',width:50},
        {header:'�豸���',dataIndex:'LB',width:40},
        {header:'�豸����',dataIndex:'SBMC',width:50},
        {header:'���ϸſ�',dataIndex:'GK',width:120},
        {header:'��ע',dataIndex:'BZ',width:100},
        {header:'�Ǽ���',dataIndex:'DJR',width:50},
        {header:'�ָ�����',dataIndex:'HFRQ',width:100},
        {header:'��д��',dataIndex:'TXR',width:50},
        {header:'ɾ��',dataIndex:'JLID',width:40,renderer:renderDel,fixed:true}
    ]);
   
    	
    var planRecord = Ext.data.Record.create([
    	{name:'JLID',type:'string'},
    	{name:'DJRQ',type:'string'},
    	{name:'GQMC',type:'string'},
    	{name:'LB',type:'string'},
    	{name:'SBMC',type:'string'},
    	{name:'GK',type:'string'},
    	{name:'BZ',type:'string'},
    	{name:'DJR',type:'string'},
    	{name:'HFRQ',type:'string'},
    	{name:'TXR',type:'string'},
    	{name:'GQDM',type:'string'}
    	]);
    	
    
    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'stgz_json.jsp'}),        
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
     var gq_store = new Ext.data.Store({
	 proxy : new Ext.data.HttpProxy({
			url : "../../share/combo_list.jsp?sql=select  GQDM,GQMC from J_GYJC_GQZD where JGLBDM !=1 and ddtdm like '"+dwid+"%25'"
		}),
		reader : new Ext.data.JsonReader({root : 'root'
				},[{name : 'value',mapping : 'value'},
				   {name : 'text',mapping : 'text'}
				  ]
			)
	});
	gq_store.load();
	var sbmc_store = new Ext.data.Store({
	 proxy : new Ext.data.HttpProxy({
			url : "../../share/combo_list.jsp?sql=select distinct SBMC sbmc1,SBMC sbmc2 from Z_YXGL_STGZ ORDER BY SBMC"
		}),
		reader : new Ext.data.JsonReader({root : 'root'
				},[{name : 'value',mapping : 'value'},
				   {name : 'text',mapping : 'text'}
				  ]
			)
	});
	sbmc_store.load();
	var lb_store = new Ext.data.Store({
	 proxy : new Ext.data.HttpProxy({
			url : "../../share/combo_list.jsp?sql=select distinct LB lb1,LB lb2 from Z_YXGL_STGZ ORDER BY LB"
		}),
		reader : new Ext.data.JsonReader({root : 'root'
				},[{name : 'value',mapping : 'value'},
				   {name : 'text',mapping : 'text'}
				  ]
			)
	});
	lb_store.load();	
	var gq_store1 = new Ext.data.Store({
	 proxy : new Ext.data.HttpProxy({
			url : "../../share/combo_list.jsp?sql=select  GQDM,GQMC from J_GYJC_GQZD where JGLBDM !=1 and ddtdm like '"+dwid+"%25'&all=all"
		}),
		reader : new Ext.data.JsonReader({root : 'root'
				},[{name : 'value',mapping : 'value'},
				   {name : 'text',mapping : 'text'}
				  ]
			)
	});
	gq_store1.load();
	
     var ddt_store = new Ext.data.Store({
	 proxy : new Ext.data.HttpProxy({
			url : '../../share/combo_list.jsp?sql=select distinct DDTDM,DDTMC from J_GYJC_DDTZD &all=all'
		}),
		reader : new Ext.data.JsonReader({root : 'root'
				},[{name : 'value',mapping : 'value'},
				   {name : 'text',mapping : 'text'}
				  ]
			)
	});
	ddt_store.load();
	var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '��ͤ���ϲ�ѯ',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 600,
              collapsible:true,
              titleCollapse:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              labelWidth : 35,
              
              
              items : [{
                       layout : 'column',// columnlayout
                       border : false,// û�б߿�
                       labelSeparator : '��',// ����ķָ���������������ð�Ŵ���Ӣ�ĵ�ð�ţ�labelSeparator:'��'����
                       // coulmnLayout��Ŀؼ���������items��
                       items : [{
                                    columnWidth : .18,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                             fieldLabel : '����',
                                             name : 'DHRQ',
                                             id:'rq2',
                                             anchor : '90%',
                                             //value: new Date,
                                             listeners: {
						                        		'focus': function(){WdatePicker({dateFmt:'yyyy-MM-dd'})}
						                   	}
						                   // format:'Y-m-d H:i:s'
                                      }]
                             },{
                                    columnWidth : .18,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                             fieldLabel : '����',
                                             name : 'DHRQ',
                                             id:'rq3',
                                             anchor : '90%',
                                             //value: new Date,
                                             listeners: {
						                        		'focus': function(){WdatePicker({dateFmt:'yyyy-MM-dd'})}
						                   	}
						                   // format:'Y-m-d H:i:s'
                                      }]
                             },{
                                    columnWidth : .19,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                            xtype : 'combo',// �ؼ����������ó�combo
							           		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
							            	store : ddt_store,
							            	valueField : "value",
							            	displayField : "text",
							            	mode : 'local',// �������ڱ���
							            	//forceSelection : true,// ����ѡ��һ��ѡ��
							            	blankText : '��ѡ���̨',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
							            	emptyText : 'ѡ����̨',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
							            	hiddenName : 'DDT',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
							            	editable : false,// �������б�ֻ����ѡ�񣬲���������
							            	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
							            	//allowBlank : false,// ��ѡ��ֵ������Ϊ��
							            	fieldLabel : '���',// �ؼ��ı�����ѧ��
							            	name : 'DDT',// �ٴ����ѣ�nameֻ�������б������
							            	id:'ddt1',
							            	anchor : '90%'// input�Ŀ����90%
                                      }]
                             },{
                                    columnWidth : .19,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                            xtype : 'combo',// �ؼ����������ó�combo
							           		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
							            	store : gq_store1,
							            	valueField : "value",
							            	displayField : "text",
							            	mode : 'local',// �������ڱ���
							            	//forceSelection : true,// ����ѡ��һ��ѡ��
							            	blankText : '��ѡ��ͤ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
							            	emptyText : 'ѡ����ͤ',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
							            	hiddenName : 'BDS',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
							            	editable : false,// �������б�ֻ����ѡ�񣬲���������
							            	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
							            	//allowBlank : false,// ��ѡ��ֵ������Ϊ��
							            	fieldLabel : '��ͤ',// �ؼ��ı�����ѧ��
							            	name : 'BDS',// �ٴ����ѣ�nameֻ�������б������
							            	id:'bds1',
							            	anchor : '90%'// input�Ŀ����90%
                                      }]
                             },{
                                    columnWidth : .19,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                            xtype : 'combo',// �ؼ����������ó�combo
							           		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
							            	store : lb_store,
							            	valueField : "value",
							            	displayField : "text",
							            	mode : 'local',// �������ڱ���
							            	//forceSelection : true,// ����ѡ��һ��ѡ��
							            	blankText : '��ѡ���',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
							            	emptyText : 'ѡ�����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
							            	hiddenName : 'lblb',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
							            	editable : true,// �������б�ֻ����ѡ�񣬲���������
							            	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
							            	//allowBlank : false,// ��ѡ��ֵ������Ϊ��
							            	fieldLabel : '���',// �ؼ��ı�����ѧ��
							            	name : 'lblb',// �ٴ����ѣ�nameֻ�������б������
							            	id:'lb1',
							            	anchor : '90%'// input�Ŀ����90%
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
										if(Ext.getCmp("rq2").getValue()!=""  ){
											where=where+" and to_char(DJRQ,'yyyy-mm-dd')>='"+Ext.getCmp("rq2").getValue()+"'";
										}
										if(Ext.getCmp("rq3").getValue()!=""  ){
											where=where+" and to_char(DJRQ,'yyyy-mm-dd')>='"+Ext.getCmp("rq3").getValue()+"'";
										}
										if(Ext.getCmp("bds1").getValue()!=""&&Ext.getCmp("bds1").getValue()!="ALL"  ){
											where=where+" and a.GQDM ='"+Ext.getCmp("bds1").getValue()+"'";	
										}
										if(Ext.getCmp("lb1").getValue()!="" ){
											where=where+" and a.LB ='"+Ext.getCmp("lb1").getValue()+"'";	
										}
										if(Ext.getCmp("ddt1").getValue()!=""&&Ext.getCmp("ddt1").getValue()!="ALL"  ){
											where=where+" and b.DDTDM ='"+Ext.getCmp("ddt1").getValue()+"'";	
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
                    },  {
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
            text : '��ӡ��¼',
                  hidden: true,
            handler : function() {
                                        //var win;
                                         
								       ryshow(store.baseParams.whereclause);

                                   }
                            }]
       });
   
   
   
   //Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	 
	 
	 // form start
	var simpleForm_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '��ͤ���Ϲ���',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 600,
              collapsible:true,
              titleCollapse:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              items : [{//1
                       layout : 'column',// columnlayout
                       border : false,// û�б߿�
                       labelSeparator : '��',// ����ķָ���������������ð�Ŵ���Ӣ�ĵ�ð�ţ�labelSeparator:'��'����
                       labelWidth : 55,
                       items : [{xtype:'hidden',name:'JLID',id:'JLID'},
           					   {
                                columnWidth : .25,
                                layout : 'form',
                                border : false,
                                items : [{
                                         xtype : 'textfield',// �ؼ�������Ϊdatefield
                                         fieldLabel : '�Ǽ�����',
                                         name : 'DJRQ',
                                         anchor : '90%',
                                         allowBlank : false,
                                         listeners: {
					                        'focus': function(){WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}
					                   	}
                                  		}]
                                 },
                                {
                                columnWidth : .25,
                                layout : 'form',
                                border : false,
                                items : [{
							        		xtype : 'combo',// �ؼ����������ó�combo
							           		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
							            	store : gq_store,
							            	valueField : "value",
							            	displayField : "text",
							            	mode : 'local',// �������ڱ���
							            	//forceSelection : true,// ����ѡ��һ��ѡ��
							            	blankText : 'ѡ����ͤ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
							            	emptyText : 'ѡ����ͤ',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
							            	hiddenName : 'GQDM',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
							            	editable : false,// �������б�ֻ����ѡ�񣬲���������
							            	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
							            	allowBlank : false,// ��ѡ��ֵ������Ϊ��
							            	fieldLabel : '��ͤ',// �ؼ��ı�����ѧ��
							            	name : 'GQDM',// �ٴ����ѣ�nameֻ�������б������
							            	anchor : '90%'// input�Ŀ����90%
										}]
                        		 },
                             	{
                                columnWidth : .25,
                                layout : 'form',
                                border : false,
                                items : [{
							        		xtype : 'combo',// �ؼ����������ó�combo
							           		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
							            	store : lb_store,
							            	valueField : "value",
							            	displayField : "text",
							            	mode : 'local',// �������ڱ���
							            	//forceSelection : true,// ����ѡ��һ��ѡ��
							            	blankText : '�������',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
							            	emptyText : '�������',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
							            	hiddenName : 'LB',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
							            	editable : true,// �������б�ֻ����ѡ�񣬲���������
							            	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
							            	allowBlank : false,// ��ѡ��ֵ������Ϊ��
							            	fieldLabel : '�������',// �ؼ��ı�����ѧ��
							            	name : 'LB',// �ٴ����ѣ�nameֻ�������б������
							            	anchor : '90%'// input�Ŀ����90%
										}]
                        		 },
                        		 {
                                columnWidth : .24,
                                layout : 'form',
                                border : false,
                                items : [{
							        		xtype : 'combo',// �ؼ����������ó�combo
							           		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
							            	store : sbmc_store,
							            	valueField : "value",
							            	displayField : "text",
							            	mode : 'local',// �������ڱ���
							            	//forceSelection : true,// ����ѡ��һ��ѡ��
							            	blankText : '�豸����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
							            	emptyText : '�豸����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
							            	hiddenName : 'SBMC',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
							            	editable : true,// �������б�ֻ����ѡ�񣬲���������
							            	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
							            	allowBlank : false,// ��ѡ��ֵ������Ϊ��
							            	fieldLabel : '�豸',// �ؼ��ı�����ѧ��
							            	name : 'SBMC',// �ٴ����ѣ�nameֻ�������б������
							            	anchor : '90%'// input�Ŀ����90%
										}]
                        		 }
                           ]

                    },{//2
                       layout : 'column',// columnlayout
                       border : false,// û�б߿�
                       labelSeparator : '��',// ����ķָ���������������ð�Ŵ���Ӣ�ĵ�ð�ţ�labelSeparator:'��'����
                       labelWidth : 55,
                       items : [{
                                columnWidth : .99,
                                layout : 'form',
                                border : false,
                                items : [{
                                         xtype : 'textfield',// �ؼ�������Ϊdatefield
                                         fieldLabel : '�ſ�',
                                         name : 'GK',
                                         anchor : '98%'
                                  		}]
                                }]

                    },{//3
                       layout : 'column',// columnlayout
                       border : false,// û�б߿�
                       labelSeparator : '��',// ����ķָ���������������ð�Ŵ���Ӣ�ĵ�ð�ţ�labelSeparator:'��'����
                       labelWidth : 55,
                       items : [{xtype:'hidden',name:'JLID',id:'jl_id'},
           					   {
                                columnWidth : .36,
                                layout : 'form',
                                border : false,
                                items : [{
                                         xtype : 'textfield',// �ؼ�������Ϊdatefield
                                         fieldLabel : '��ע',
                                         name : 'BZ',
                                         anchor : '90%'
                                  		}]
                                 },
                                {
                                columnWidth : .19,
                                layout : 'form',
                                border : false,
                                items : [{
                                         xtype : 'textfield',// �ؼ�������Ϊdatefield
                                         fieldLabel : '�Ǽ���',
                                         name : 'DJR',
                                         value:yh,
                                         anchor : '90%'
                                  		}]
                                 },
                             	{
                                columnWidth : .25,
                                layout : 'form',
                                border : false,
                                items : [{
                                         xtype : 'textfield',// �ؼ�������Ϊdatefield
                                         fieldLabel : '�ָ�����',
                                         name : 'HFRQ',
                                         listeners: {
					                        'focus': function(){WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}
					                   	},
                                         anchor : '90%'
                                  		}]
                                 },
                        		 {
                                columnWidth : .19,
                                layout : 'form',
                                border : false,
                                items : [{
                                         xtype : 'textfield',// �ؼ�������Ϊdatefield
                                         fieldLabel : '��д��',
                                         name : 'TXR',
                                         anchor : '90%'
                                  		}]
                                 }
                           ]

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
                                  url : 'Save.jsp?flag=1',
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
                   }        }
        }, {
            text : '�޸�',
            Enabled:false,
            handler : function() {
            	if (!simpleForm_Save.form.isValid()) {return };
           		if (simpleForm_Save.form.isValid()) {
                	simpleForm_Save.form.doAction('submit', {
                           waitMsg:'�޸���,���Ժ�...',  
                           url : 'Save.jsp?flag=0',
                           method : 'post',
                           params : '',
                           success : function(form, action) {
                           		simpleForm_Save.buttons[0].setVisible(true);
                           		simple_Grid.getStore().reload();
                           		Ext.Msg.alert('��Ϣ',action.result.msg);
                           },
                           failure : function() {
                                 Ext.Msg.alert('����', '�޸�ʧ�ܣ�');
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
             }
        }]
    }); 
    
    
    var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Save,simpleForm_Query,simple_Grid]
	});
	simpleForm_Save.collapse();
	simpleForm_Save.buttons[1].setVisible(false);
	//simpleForm_Save.buttons[3].setVisible(false);
	//simpleForm_Save.buttons[4].setVisible(false);
	
 });
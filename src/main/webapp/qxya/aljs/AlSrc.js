Ext.onReady(function(){

    Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var bd = Ext.getBody();
    ///var albm="";
    
    /*
     * ================  ������ѯ�� =======================
    */
     //��Ⱦ����html����
     var renderSfgd= function(value){
  		return (value=="0")?"δ�鵵":"�ѹ鵵";
 	 };
 	 
 	 //����Grid��ͷ
   	 var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        new Ext.grid.RowNumberer(),
        //{header:'���',dataIndex:'id',width:40,sortable:true,fixed:true},
        {header:'��������',dataIndex:'almc',sortable:true},
        {header:'����ʱ��',dataIndex:'fssj',sortable:true},
        {header:'�ص�',dataIndex:'dd',sortable:true},
        {header:'�߱�',dataIndex:'xlm',sortable:true},
        {header:'�¹ʷ���',dataIndex:'sgfl',sortable:true},
        {header:'�¹�����',dataIndex:'sxmc',sortable:true},
        {header:'�¹����ڵ�λ',dataIndex:'ggdmc',sortable:true},
        {header:'ֵ�����Ա',dataIndex:'yhmc',sortable:true}
        //{header:'�Ƿ�鵵',dataIndex:'sfgd',width:60,fixed:true}
       // {header:'��ϸ',dataIndex:'id',width:60,renderer:renderXiangxi,fixed:true},
        //{header:'ɾ��',dataIndex:'id',width:60,renderer:renderDel,fixed:true}
     ]);
     
     var planRecord = Ext.data.Record.create([
    	{name:'id',type:'int'},
    	{name:'albm',type:'string'},
    	{name:'almc',type:'string'},
    	{name:'fssj',type:'string'},
    	{name:'dd',type:'string'},
    	{name:'xbbm',type:'string'},
    	{name:'sgfl',type:'string'},
    	{name:'sglx',type:'string'},
    	{name:'sgszdw',type:'string'},
    	{name:'zbddy',type:'string'},
    	{name:'gzxx',type:'string'},
    	{name:'gzqx',type:'string'},
    	{name:'sgyyjcs',type:'string'},
    	{name:'ylwt',type:'string'},
    	{name:'sfgd',type:'string'},
    	
    	{name:'xlm',type:'string'},
    	{name:'sxmc',type:'string'},
    	{name:'ggdmc',type:'string'},
    	{name:'yhmc',type:'string'},
    	{name:'sjc',type:'string'}
     ]);
     
     //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
	 var store = new Ext.data.Store({
     	//proxy�������Ǵ�����������
     	proxy: new Ext.data.HttpProxy({url:'AlgdGdsj.jsp'}), 
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
    });
    
    //Grid�ϴ����¼�
    simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
    	// simpleForm_Query.collapse();
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	//albm=record.get('albm');
    	simpleForm_Save.expand();
    	simpleForm_Save.buttons[0].setVisible(true);
    	simpleForm_Save.getForm().loadRecord(record);
    });	

    //grid.render();//��Ⱦ���
    Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	// form start        

    /*
     * ================  ����ǰ��λ�ã��¹ʰ���---->������ѯ =======================
    */
	var xlzdcx_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct XLDM,XLM from J_GYJC_XLZD&all=all'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	xlzdcx_store.load();
	
 	var SGLXCX_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select sxid,sxmc from J_GDGY_SXZD  where sxid>009000 and sxid<010000&all=all'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	SGLXCX_store.load();
    
	var simpleForm_Query = new Ext.FormPanel({
		renderTo : document.body,
       	title: '��������---->������ѯ',
        labelAlign : 'left',
        //bodyStyle:'padding:5px 5px 0',
        labelWidth: 60, 
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
                columnWidth : .33,
                layout : 'form',
                border : false,
                items : [{
                    xtype:'datefield',
                    fieldLabel: '��ʼ����',
                    name: 'ksrq',
                    id: 'ksrq',
                    anchor:'95%',
                    format:'Y-m-d',
                    allowBlank : false
                    //format:'Y-m-d H:i:s',
    				//timePicker:true
                }]
            }, {
               columnWidth : .33,
               layout : 'form',
               border : false,
               items : [{
                   xtype:'datefield',
                   fieldLabel: '��������',
                   name: 'jsrq',
                   id: 'jsrq',
                   anchor:'95%',
                   format:'Y-m-d',
                   //id:'glb',
	               // listeners:{"select":function(){
					//	     this.setValue("2009-12-20");    
						      //Ext.getCmp("glb").setValue("2009-10-20");                                                          	  
					//}},
                   allowBlank : false
                }]
            }, {
                		columnWidth:.33,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store : xlzdcx_store,
                        	valueField : "value",
                        	displayField : "text",
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ���߱�',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ����ҵ�߱�',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'xbbmcx',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	//allowBlank : false,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : '��&nbsp;&nbsp; &nbsp; &nbsp;��',// �ؼ��ı�����ѧ��
                        	name : 'xbbmcx',// �ٴ����ѣ�nameֻ�������б������
                        	id : 'xbbmcx_id',
                        	anchor : '95%'// input�Ŀ����90%
    					}]	
           },{
              columnWidth : .33,
              layout : 'form',
              border : false,
              items: [{
                    		xtype : 'combo',
                        	store : SGLXCX_store,
                        	valueField : "value",
                        	displayField : "text",
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ������',
                        	emptyText : 'ѡ���¹�����',
                        	hiddenName : 'sglxcx',
                        	editable : false,
                        	triggerAction : 'all',
                        	//allowBlank : false,
                        	fieldLabel : '�¹�����',
                        	name : 'sglxcx',
                        	id : 'sglxcx_id',
                        	anchor : '95%'
    			}]
              },{
               columnWidth : .33,
               layout : 'form',
               border : false,
               items: [{
                    		xtype:'textfield',
                    		fieldLabel: '��������',
                    		name: 'almccx',
                    		id: 'almccx',
                    		anchor:'95%'
                		}]
            }]
			}
           ],
           // Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
              buttons : [{
               // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
               buttonlAlign : 'right',
               text : '��ѯ',
               handler : function() {
                    if (!simpleForm_Query.form.isValid()) {return };
                    // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                    if (simpleForm_Query.form.isValid()) {
                    // ���水ťҪ���ľ�������basicform�Ŀͻ�����֤����֤ͨ���������øð�ť״̬Ϊdisable����ֹ2���ύ��Ȼ�����simpleForm.form.doAction�����ύ����
                    //this.disabled = true;
                    var where=" sfgd='1' ";												
						if(Ext.getCmp("ksrq").getValue()!="" ){
							where=where+" and fssj>=to_date('"+Ext.util.Format.date(Ext.getCmp("ksrq").getValue(), 'Y-m-d H:i:s')+"','yyyy-mm-dd hh24:mi:ss')";	
						}
						if(Ext.getCmp("jsrq").getValue()!="" ){
							where=where+" and fssj<=to_date('"+Ext.util.Format.date(Ext.getCmp("jsrq").getValue(), 'Y-m-d H:i:s')+"','yyyy-mm-dd hh24:mi:ss')";	
						}
						if(Ext.getCmp("xbbmcx_id").getValue()!="" && Ext.getCmp("xbbmcx_id").getValue()!='ALL'){
							where=where+" and xbbm='"+Ext.getCmp("xbbmcx_id").getValue()+"' ";
						}
						if(Ext.getCmp("sglxcx_id").getValue()!="" && Ext.getCmp("sglxcx_id").getValue()!='ALL'){
							where=where+" and sglx='"+Ext.getCmp("sglxcx_id").getValue()+"' ";
						}
						if(Ext.getCmp("almccx").getValue()!=""){
							where=where+" and almc like '%"+Ext.getCmp("almccx").getValue()+"%'";
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
          }
          ]
       });
     
     
     /*
     * ================  ����ǰ��λ�ã���������---->������ϸ =======================  
    */ 
    var xlzd_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct XLDM,XLM from J_GYJC_XLZD'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	xlzd_store.load();
    
    var SGLX_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select sxid,sxmc from J_GDGY_SXZD  where sxid>009000 and sxid<010000'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	SGLX_store.load();
	
	var sql="select * from J_GYJC_GDDZD";
    var SGSZDW_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	SGSZDW_store.load();
	
	var DDY_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select yhxh,yhmc from j_gyjc_yh where dwjb=\'3\''
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	DDY_store.load();
	
    var simpleForm_Save = new Ext.FormPanel({
        renderTo : document.body,
        title: '��������---->������ϸ',
        labelAlign : 'left',
        bodyStyle:'padding:5px 5px 0',
        labelWidth: 80, 
        collapsible:true,
        titleCollapse:true,
        method:'POST',
        frame:true,
        autoWidth:true,
        //width: 1000,
        items : [{
                    layout : 'column',
                    border : false,
                	items:[{xtype:'hidden',name:'id'},{xtype:'hidden',name:'albm'},{
                    	columnWidth:.5,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '��������',
                    		name: 'almc',
                    		anchor:'95%'
                		}]
                	},{
                		columnWidth:.5,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store : xlzd_store,
                        	valueField : "value",// ��������ѡ����ֵ
                       		displayField : "text",// ��������ѡ������ʾ�ı�
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ���߱�',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ����ҵ�߱�',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'xbbm',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	//allowBlank : false,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : '��&nbsp;&nbsp; &nbsp; &nbsp;��',// �ؼ��ı�����ѧ��
                        	name : 'xbbm',// �ٴ����ѣ�nameֻ�������б������
                        	anchor : '95%'// input�Ŀ����90%
    					}]	
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                    	columnWidth:.5,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '����ʱ��',
                    		name: 'fssj',
                    		anchor:'95%',
                    		format:'Y-m-d H:i:s',
                    		listeners: {
                        		'focus': function(){WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}
                   			},
    						timePicker:true
                		}]
                	},{
                		columnWidth:.5,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '��&nbsp;&nbsp; &nbsp; &nbsp;��',
                    		name: 'dd',
                    		anchor:'95%'
    					}]	
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                    	columnWidth:.5,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'combo',
                        	store : new Ext.data.SimpleStore({
                        		fields : ["returnValue", "displayText"],
                        		data : [['�Ӵ���', '�Ӵ���'],
                                   		['�����', '�����'], ['����', '����']]
                        	}),
                        	valueField : "returnValue",
                        	displayField : "displayText",
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ�����',
                        	emptyText : 'ѡ���¹ʷ���',
                        	hiddenName : 'sgfl',
                        	editable : false,
                        	triggerAction : 'all',
                        	//allowBlank : false,
                        	fieldLabel : '�¹ʷ���',
                        	name : 'sgfl',
                        	anchor : '95%'
                		}]
                	},{
                		columnWidth:.5,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',
                        	store : SGLX_store,
                        	valueField : "value",
                        	displayField : "text",
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ������',
                        	emptyText : 'ѡ���¹�����',
                        	hiddenName : 'sglx',
                        	editable : false,
                        	triggerAction : 'all',
                        	//allowBlank : false,
                        	fieldLabel : '�¹�����',
                        	name : 'sglx',
                        	anchor : '95%'
    					}]	
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                    	columnWidth:.5,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'combo',
                        	store : SGSZDW_store,
                        	valueField : "value",
                        	displayField : "text",
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ��λ',
                        	emptyText : 'ѡ���¹����ڵ�λ',
                        	hiddenName : 'sgszdw',
                        	editable : false,
                        	triggerAction : 'all',
                        	//allowBlank : false,
                        	fieldLabel : '�¹����ڵ�λ',
                        	name : 'sgszdw',
                        	anchor : '95%'
                		}]
                	},{
                		columnWidth:.5,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',
                        	store : DDY_store,
                        	valueField : "value",
                        	displayField : "text",
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ�����Ա',
                        	emptyText : 'ѡ�����Ա',
                        	hiddenName : 'zbddy',
                        	editable : false,
                        	triggerAction : 'all',
                        	//allowBlank : false,
                        	fieldLabel : 'ֵ�����Ա',
                        	name : 'zbddy',
                        	anchor : '95%'
    					}]	
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                    	//columnWidth:.9,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'textarea',// �ؼ�������Ϊdatefield
                            fieldLabel : '������Ϣ',
                            name : 'gzxx',
                            anchor : '98%',
                            height:80
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'textarea',
                            fieldLabel : '��������',
                            name : 'gzqx',
                            anchor : '98%',
                            height:70
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'textarea',
                            fieldLabel : 'ԭ��Ӱ��',
                            name : 'sgyyjcs',
                            anchor : '98%',
                            height:45
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'textarea',// �ؼ�������Ϊdatefield
                            fieldLabel : '��������',
                            name : 'ylwt',
                            anchor : '98%',
                            height:45
                		}]
                	}]
                }],
            buttons: [{
            	text: '�鿴ͼƬӰ��',
           		handler : function() {
                	var albm=document.getElementById ("albm").value;
           		    window.location.href='Gztpyy.jsp?albm='+albm;
             }
        }]
    }); 
    
	var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Save,simpleForm_Query,simple_Grid]
	});
	simpleForm_Save.collapse();
    simpleForm_Save.buttons[0].setVisible(false);
});
    
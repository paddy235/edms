Ext.onReady(function(){

    Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var bd = Ext.getBody();
    var sql="";
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
 	     return '<a  href="AlDel.jsp?albm='+value+'">ɾ��</a>';
 	 };
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
        {header:'�Ƿ�鵵',dataIndex:'sfgd',width:60,renderer:renderSfgd,fixed:true},
       // {header:'��ϸ',dataIndex:'id',width:60,renderer:renderXiangxi,fixed:true},
        {header:'ɾ��',dataIndex:'albm',width:60,renderer:renderDel,fixed:true}
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
     	proxy: new Ext.data.HttpProxy({url:'GzbgLssj.jsp'}), 
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
        //title: '��ʷ�¹ʱ���', 
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
    simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
    	// simpleForm_Query.collapse();
    	simpleForm_Save.expand();
    	simpleForm_Save.buttons[0].setVisible(false);
    	simpleForm_Save.buttons[1].setVisible(true);
    	simpleForm_Save.buttons[3].setVisible(true);
    	simpleForm_Save.buttons[4].setVisible(true);
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	//alert(rowIndex);
    	//alert(record.get('albm'));
    	
    	simpleForm_Save.getForm().loadRecord(record);
    });	

    //grid.render();//��Ⱦ���
    Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	// form start        

    /*
     * ================  ����ǰ��λ�ã��¹ʰ���---->������ѯ =======================
    */   
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
       	title: '�����鵵---->������ѯ',
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
                   allowBlank : false
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
                    // doAction�����ĵ�һ��������submit������˼�Ǳ�ʾִ�е����ύ�������ύ�ĺ�̨ҳ����test.jsp��url:'test.asp'�����ύ��ʽ��post��method:'post'����û�������ύ������params:''��
                    var where="1=1 ";												
						if(Ext.getCmp("ksrq").getValue()!="" ){
							where=where+" and fssj>=to_date('"+Ext.util.Format.date(Ext.getCmp("ksrq").getValue(), 'Y-m-d H:i:s')+"','yyyy-mm-dd hh24:mi:ss')";	
						}
						if(Ext.getCmp("jsrq").getValue()!="" ){
							where=where+" and fssj<=to_date('"+Ext.util.Format.date(Ext.getCmp("jsrq").getValue(), 'Y-m-d H:i:s')+"','yyyy-mm-dd hh24:mi:ss')";	
						}
						if(Ext.getCmp("sglxcx_id").getValue()!='' && Ext.getCmp("sglxcx_id").getValue()!='ALL'){
							where=where+" and sglx='"+Ext.getCmp("sglxcx_id").getValue()+"' ";
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
         /* , {
                // ȡ����ť���Ǽ򵥵�resetһ��form�Ŀؼ�
                text : '����',
                handler : function() {
                       simpleForm_Query.form.reset();
                       simpleForm_Save.collapse();
                     }
          }*/
          ]
       });
       
    /*==============�����鵵---->�¹ʱ�������========*/
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
	
	var sql="select GDDDM,GGDMC from J_GYJC_GDDZD";
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
					url : '../../share/combo_list.jsp?sql=select yhdm,yhmc from j_gyjc_yh where dwjb=\'3\''
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
        title: '�����鵵---->�����¹ʱ���',
        labelAlign : 'left',
        bodyStyle:'padding:5px 5px 0',
        labelWidth: 80, 
        collapsible:true,
        titleCollapse:true,
        method:'POST',
        frame:true,
        autoWidth:true,
        //width: 1000,
        //fileUpload: true,
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
                    		allowBlank : false,
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
                        	allowBlank : false,// ��ѡ��ֵ������Ϊ��
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
                        	allowBlank : false,
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
                        	allowBlank : false,
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
                        	allowBlank : false,
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
                        	allowBlank : false,
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
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'checkbox',
                    		fieldLabel: '�Ƿ�鵵',
                    		//boxLabel: 'Dog',
                			name: 'sfgd',
                    		anchor:'97%'
                		}]
                	}]
                }],

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
                                                    url : 'GzbgSave.jsp',
                                                    method : 'post',
                                                    params : '',
                                                    // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                                    // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                                    success : function(form, action) {
                                                            // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                                             //Ext.Msg.alert('����',action.result.data);
                                                             if(action.result.msg!="")
                                                             {
                                                             	document.getElementById ("albm").value=action.result.msg;
                                                             	simpleForm_Save.buttons[3].setVisible(true);
                                                             	simpleForm_Save.buttons[4].setVisible(true);
                                                             	simple_Grid.getStore().reload();
                                                             	Ext.Msg.alert('��Ϣ','����ɹ���');
                                                             }
                                                             //simpleForm_Query.form.reset();
                                                            
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
                                               url : 'GzbgUpdate.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		simpleForm_Save.buttons[0].setVisible(true);
                                               		simple_Grid.getStore().reload();
                                               		Ext.Msg.alert('��Ϣ',action.result.msg);
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
                   simpleForm_Save.buttons[3].setVisible(false);
                   simpleForm_Save.buttons[4].setVisible(false);
                   //simpleForm_Query.collapse();
                   // window.location.href="";
                   //window.location.href='zyjhsqAdd.jsp';
             }
        },{
            text: '���ͼƬ',
           handler : function() {
                var albm=document.getElementById ("albm").value;
           		window.location.href='Gztp.jsp?albm='+albm;
             }
        },{
            text: '���Ӱ��',
           handler : function() {
                var albm=document.getElementById ("albm").value;
           		window.location.href='Gzyy.jsp?albm='+albm;
             }
        }]
    }); 
    
    //��sessionȡֵ��ֵ��form�ֶ�;
	Ext.Ajax.request({
		url: 'GetSessionValue.jsp',
		success: function(response, opts) 
			{
			 simpleForm_Save.getForm().setValues([{albm: "albm",value: response.responseText} ]);
			},		
		failure: function(response, opts) {
      		console.log('�����ʧЧ��״̬���룺' + response.status);
   			}
	});
    
    var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Save,simpleForm_Query,simple_Grid]
	});
	simpleForm_Save.collapse();
	simpleForm_Save.buttons[1].setVisible(false);
	simpleForm_Save.buttons[3].setVisible(false);
	simpleForm_Save.buttons[4].setVisible(false);
 });
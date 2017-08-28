Ext.onReady(function(){

    Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
   
    // turn on validation errors beside the field globally
    //Ext.BLANK_IMAGE_URL = '../../ext-3.0/resources/images/default/s.gif';

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
 	     return '<a  href="AlDel.jsp?id='+value+'">ɾ��</a>';
 	 };
 	 
 	 //����Grid��ͷ
   	 var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        //new Ext.grid.RowNumberer(),
        {header:'���',dataIndex:'id',width:40,sortable:true,fixed:true},
        {header:'��������',dataIndex:'almc',sortable:true},
        {header:'����ʱ��',dataIndex:'fssj',sortable:true},
        {header:'�ص�',dataIndex:'dd',sortable:true},
        {header:'�߱�',dataIndex:'xbbm',sortable:true},
        {header:'�¹ʷ���',dataIndex:'sgfl',sortable:true},
        {header:'�¹�����',dataIndex:'sglx',sortable:true},
        {header:'�¹����ڵ�λ',dataIndex:'sgszdw',sortable:true},
        {header:'�Ƿ�鵵',dataIndex:'sfgd',width:60,fixed:true},
       // {header:'��ϸ',dataIndex:'id',width:60,renderer:renderXiangxi,fixed:true},
        {header:'ɾ��',dataIndex:'id',width:60,renderer:renderDel,fixed:true}
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
    	{name:'sjc',type:'string'}
     ]);
     
     //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
	 var store = new Ext.data.Store({
     	//proxy�������Ǵ�����������
     	proxy: new Ext.data.HttpProxy({url:'AlgdLssj.jsp'}),        
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
	var simpleForm_Query = new Ext.FormPanel({
		renderTo : document.body,
       	title: '�����鵵---->������ѯ',
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
                    xtype:'datefield',
                    fieldLabel: '��ʼ����',
                    name: 'ksrq',
                    anchor:'95%',
                    format:'Y-m-d',
                    allowBlank : false
                    //format:'Y-m-d H:i:s',
    				//timePicker:true
                }]
            }, {
               columnWidth : .3,
               layout : 'form',
               border : false,
               items : [{
                   xtype:'datefield',
                   fieldLabel: '��������',
                   name: 'jsrq',
                   anchor:'95%',
                   format:'Y-m-d',
                   allowBlank : false
                }]
            },{
              columnWidth : .3,
              layout : 'form',
              border : false,
              items: [{
                    		xtype : 'combo',
                        	store : new Ext.data.SimpleStore({
                        		fields : ["returnValue", "displayText"],
                        		data : [['֧���۶�', '֧���۶�'],
                                   		['�Ӵ�������', '�Ӵ�������'], ['�豸��բ', '�豸��բ']]
                        	}),
                        	valueField : "returnValue",
                        	displayField : "displayText",
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
                    simpleForm_Query.form.doAction('submit', {
                                     waitMsg:'��ѯ��,���Ժ�...',  
                                     url : 'AlQuery.jsp',
                                     method : 'post',
                                     params : '',
                                     // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                     // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                     success : function(form, action) {
                                     // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                     //Ext.Msg.alert('����',action.result.data);
                                     //Ext.Msg.alert('��Ϣ',action.result.msg);
                                     //simpleForm_Query.form.reset();
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
     /*
     * ================  ����ǰ��λ�ã��¹ʰ���---->�������� =======================
     
	bd.createChild({html: '��������'});*/
    var simpleForm_Save = new Ext.FormPanel({
        renderTo : document.body,
        title: '�����鵵---->����',
        labelAlign : 'left',
        //bodyStyle:'padding:5px 5px 0',
        //labelWidth: 75, 
        collapsible:true,
        titleCollapse:true,
        method:'POST',
        frame:true,
        autoWidth:true,
        //width: 1000,
        //fileUpload: true,
        items: [{
            xtype:'tabpanel',
            title: '�����鵵---->��������',
            activeTab: 0,
            //height:600,
            defaults:{autoHeight:true, bodyStyle:'padding:10px'},
            frame:true,
            items:[{
                title:'�¹ʱ���',
				frame:true,
                items : [{
                    layout : 'column',
                    border : false,
                	items:[{xtype:'hidden',name:'id'},{
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
                        	store : new Ext.data.SimpleStore({
                        		// ͨ��һ�����鶨����returnValue��displayText�����ֶΡ�retrunValue�ֶ�ָ�����ύ����̨��ֵ��displayText�ֶ�ָ��������������ʾ��ѡ��ֵ��
                        		fields : ["returnValue", "displayText"],
                        		// �����˼�������.ÿ�����ݶ��Ǹ���fiedls�Ķ�������ɵģ��������һ��ֵ����retrunValue��ֵ���ڶ���ֵ����displayText��ֵ������[1,'Сѧ']���ͱ�ʾretrunValue��1��displayText��Сѧ��
                        		data : [['����ר', '����ר'],
                                   		['¤����', '¤����'], ['������', '������']]
                        	}),
                        	valueField : "returnValue",// ��������ѡ����ֵ
                       		displayField : "displayText",// ��������ѡ������ʾ�ı�
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
                    		xtype:'datefield',
                    		fieldLabel: '����ʱ��',
                    		name: 'fssj',
                    		anchor:'95%',
                    		format:'Y-m-d H:i:s',
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
                        	store : new Ext.data.SimpleStore({
                        		fields : ["returnValue", "displayText"],
                        		data : [['֧���۶�', '֧���۶�'],
                                   		['�Ӵ�������', '�Ӵ�������'], ['�豸��բ', '�豸��բ']]
                        	}),
                        	valueField : "returnValue",
                        	displayField : "displayText",
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
                        	store : new Ext.data.SimpleStore({
                        		fields : ["returnValue", "displayText"],
                        		data : [['��ɳվ', '��ɳվ'],
                                   		['��̶վ', '��̶վ'], ['��Ҷ�������', '��Ҷ�������']]
                        	}),
                        	valueField : "returnValue",
                        	displayField : "displayText",
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
                        	store : new Ext.data.SimpleStore({
                        		fields : ["returnValue", "displayText"],
                        		data : [['�ŵ���', '�ŵ���'],
                                   		['�����', '�����'], ['�Ե���', '�Ե���']]
                        	}),
                        	valueField : "returnValue",
                        	displayField : "displayText",
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
                            anchor : '97%',
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
                    		xtype : 'textarea',
                            fieldLabel : '��������',
                            name : 'gzqx',
                            anchor : '97%',
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
                            fieldLabel : '�¹�ԭ��Ӱ��',
                            name : 'sgyyjcs',
                            anchor : '97%',
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
                    		xtype : 'textarea',// �ؼ�������Ϊdatefield
                            fieldLabel : '��������',
                            name : 'ylwt',
                            anchor : '97%',
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
                }]
            },{
                title:'�¹�ͼƬ',
                frame:true,
                //layout:'form',

                items : [{
                    layout : 'column',
                    border : false,
                	items:[{
                    	columnWidth:.5,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: 'ͼƬ����',
                    		name: 'tpmc',
                    		anchor:'95%'
                		}]
                	},{
                		columnWidth:.5,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',
                       		store : new Ext.data.SimpleStore({
                        		fields : ["returnValue", "displayText"],
                        		data : [['�¹���Ƭ', '�¹���Ƭ'],
                                   		['�豸��Ƭ', '�豸��Ƭ']]
                        	}),
                        	valueField : "returnValue",
                       		displayField : "displayText",
                        	mode : 'local',
                        	//forceSelection : true,
                        	blankText : '��ѡ������',
                        	emptyText : 'ѡ��ͼƬ����',
                        	hiddenName : 'tplx',
                        	editable : false,
                        	triggerAction : 'all',
                        	//allowBlank : false,
                        	fieldLabel : 'ͼƬ����',
                        	name : 'tplx',
                        	anchor : '95%'
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
                            fieldLabel : 'ͼƬ����',
                            name : 'tpms',
                            anchor : '97%',
                            height:45
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                		layout: 'form',
                		border:false,
                		fileUpload: true,
                		items: [{
                    		xtype: 'fileuploadfield',
            				id: 'tplj',
            				anchor: '97%',
            				//allowBlank: false,
           					msgTarget: 'side',
            				emptyText: '��ѡ��ͼƬ',
           					fieldLabel: 'ͼƬ�ϴ�',
            				name: 'tplj',
            				buttonText: '',
            				buttonCfg: {
                				iconCls: 'upload-icon'
            				}
                		}]
                	}]
                }]
            },{
                title:'�¹�Ӱ��',
                frame:true,
                //layout:'form',
                items : [{
                    layout : 'column',
                    border : false,
                	items:[{
                    	columnWidth:.5,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: 'Ӱ������',
                    		name: 'yymc',
                    		anchor:'95%'
                		}]
                	},{
                		columnWidth:.5,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store : new Ext.data.SimpleStore({
                        		// ͨ��һ�����鶨����returnValue��displayText�����ֶΡ�retrunValue�ֶ�ָ�����ύ����̨��ֵ��displayText�ֶ�ָ��������������ʾ��ѡ��ֵ��
                        		fields : ["returnValue", "displayText"],
                        		// �����˼�������.ÿ�����ݶ��Ǹ���fiedls�Ķ�������ɵģ��������һ��ֵ����retrunValue��ֵ���ڶ���ֵ����displayText��ֵ������[1,'Сѧ']���ͱ�ʾretrunValue��1��displayText��Сѧ��
                        		data : [['��·¼��', '��·¼��'],
                                   		['�ֳ�¼��', '�ֳ�¼��'],['�绰¼��', '�绰¼��']]
                        	}),
                        	valueField : "returnValue",// ��������ѡ����ֵ
                       		displayField : "displayText",// ��������ѡ������ʾ�ı�
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ������',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ��Ӱ������',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'yylx',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	//allowBlank : false,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : 'Ӱ������',// �ؼ��ı�����ѧ��
                        	name : 'yylx',// �ٴ����ѣ�nameֻ�������б������
                        	anchor : '95%'// input�Ŀ����90%
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
                            fieldLabel : 'Ӱ������',
                            name : 'yyms',
                            anchor : '97%',
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
                    		xtype: 'fileuploadfield',
            				id: 'yylj',
            				anchor: '97%',
            				//allowBlank: false,
           					msgTarget: 'side',
            				emptyText: '��ѡ��Ӱ��',
           					fieldLabel: 'Ӱ���ϴ�',
            				name: 'yylj',
            				buttonText: '',
            				buttonCfg: {
                				iconCls: 'upload-icon'
            				}
                		}]
                	}]
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
                                                    url : 'AlSave.jsp',
                                                    method : 'post',
                                                    params : '',
                                                    // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                                    // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                                    success : function(form, action) {
                                                            // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                                             //Ext.Msg.alert('����',action.result.data);
                                                             Ext.Msg.alert('��Ϣ',action.result.msg);
                                                             //simpleForm_Query.form.reset();
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
        },{

             // ȡ����ť���Ǽ򵥵�resetһ��form�Ŀؼ�
             text : '����',
             handler : function() {
                   simpleForm_Save.form.reset();
                   //simpleForm_Query.collapse();
                   // window.location.href="";
                   //window.location.href='zyjhsqAdd.jsp';
             }
        }, {
            text : '�޸�',
            handler : function() {
            	if (!simpleForm_Save.form.isValid()) {return };
           		if (simpleForm_Save.form.isValid()) {
                	simpleForm_Save.form.doAction('submit', {
                                               waitMsg:'�޸���,���Ժ�...',  
                                               url : 'AlUpdate.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		Ext.Msg.alert('��Ϣ',action.result.msg);
                                               		simple_Grid.getStore().reload();
                                               },
                                               failure : function() {
                                                     Ext.Msg.alert('����', '����ʧ�ܣ�');
                                                     this.disabled = false;
                                               }
            		});
           		 }
             }
         },{
            text: 'ȡ��'
        }]
    });
    
    //��sessionȡֵ��ֵ��form�ֶ�;
	Ext.Ajax.request({
		url: 'GetSessionValue.jsp',
		success: function(response, opts) 
			{
			 simpleForm_Save.getForm().setValues([{id: "id",value: response.responseText} ]);
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
	
	 var tabs2 = new Ext.TabPanel({
        renderTo: document.body,
        activeTab: 0,
        width:600,
        height:250,
        plain:true,
        defaults:{autoScroll: true},
        items:[{
                title: 'Normal Tab',
                html: "Gztp.jsp"
            },{
                title: 'Ajax Tab 1',
                autoLoad:'Gzbg.jsp'
            },{
                title: 'Ajax Tab 2',
                autoLoad: {url: 'Gztp.jsp'}
            },{
                title: 'Event Tab',
                listeners: {activate: handleActivate},
                html: "I am tab 4's content. I also have an event listener attached."
            },{
                title: 'Disabled Tab',
                disabled:true,
                html: "Can't see me cause I'm disabled"
            }
        ]
    });

    function handleActivate(tab){
        alert(tab.title + ' was activated.');
    }
    
    simpleForm_Save.collapse();

    //simpleForm_Save.render(document.body);
});
    
Ext.onReady(function(){

    Ext.QuickTips.init();
	Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var bd = Ext.getBody();
    
    var DWJB=document.getElementById ("DWJB").value; 
    var DWDM=document.getElementById ("DWDM").value; 
    //DWJB="2";
    //DWDM="17";
    var Sql="";
  	switch(DWJB)
  	{
  		case '1':
  			Sql="select LJDM,LJQC from J_GYJC_LJZD where LJDM='"+DWDM+"'";	
  			break;
  		case '2':
  			Sql="select LJDM,LJQC from J_GYJC_LJZD where LJDM='"+DWDM+"'";	
  			break;
  		case '3':
  			Sql="select DDDM,DDJC from j_gyjc_ddzd where DDDM='"+DWDM+"'";	
  			break;
  		case '4':
  			Sql="select GDDDM,GGDMC from J_GYJC_GDDZD where GDDDM='"+DWDM+"'";	
  			break;
  		case '5':
  			Sql="select CJDM,CJMC from J_GYJC_CJZD where CJDM='"+DWDM+"'";
  			break;
  		case '6':
  			Sql="select GQDM,GQMC from J_GYJC_GQZD where GQDM='"+DWDM+"'";	
  			break;
  		default:
����			break;	
  	}
    
    

    var DW_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+Sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	DW_store.load();
	
	
	//���ϵȼ������б�	
	var gzdj_sql = "select sxid,sxmc from j_gdgy_sxzd where sxid>'007000' and sxid<'008000'";
    var gzdj_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+gzdj_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	gzdj_store.load();
	
	//�Ļ��̶������б�	
	var whcd_sql = "select sxid,sxmc from j_gdgy_sxzd where sxid>'012000' and sxid<'013000'";
    var whcd_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+whcd_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	whcd_store.load();
	
	//������ò�����б�	
	var zzmm_sql = "select sxid,sxmc from j_gdgy_sxzd where sxid>'013000' and sxid<'014000'";
    var zzmm_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+zzmm_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	zzmm_store.load();
	
	
	//��Ա��������б�	
	var rylb_sql = "select sxid,sxmc from j_gdgy_sxzd where sxid>'014000' and sxid<'015000'";
    var rylb_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+rylb_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	rylb_store.load();
	
	//רҵ���������б�	
	var zyfl_sql = "select sxid,sxmc from j_gdgy_sxzd where sxid>'015000' and sxid<'016000'";
    var zyfl_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+zyfl_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	zyfl_store.load();
	
	//��ȫ�ȼ������б�	
	var aqdj_sql = "select sxid,sxmc from j_gdgy_sxzd where sxid>'016000' and sxid<'017000'";
    var aqdj_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+aqdj_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	aqdj_store.load();
	
	//ֵ���������б�	
	var zbbc_sql = "select sxid,sxmc from j_gdgy_sxzd where sxid>'017000' and sxid<'018000'";
    var zbbc_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+zbbc_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	zbbc_store.load();
	
		
	//�����ȼ������б�	
	var jsdj_sql = "select sxid,sxmc from j_gdgy_sxzd where sxid>'018000' and sxid<'019000'";
    var jsdj_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+jsdj_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	jsdj_store.load();
	
	//��λ��ѯ�����б�
    var DWCX_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select distinct SZDW,SZDW as szdw1 from z_jcsj_ry order by SZDW&all=all'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	DWCX_store.load();
    
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
 	     return '<a  href="RyDel.jsp?albm='+value+'">ɾ��</a>';
 	 };
 	 
 	 //����Grid��ͷ
   	 var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
         new Ext.grid.RowNumberer(),
        //{header:'���',dataIndex:'id',width:40,sortable:true,fixed:true},
        {header:'����',dataIndex:'xm',width:320,sortable:true},
        {header:'���ڵ�λ',dataIndex:'szdw',width:620,sortable:true},
       {header:'����',dataIndex:'bm',width:320,sortable:true},
       {header:'ְ��',dataIndex:'zw',width:320,sortable:true},
       {header:'רҵ',dataIndex:'zy',width:320,sortable:true},
       //{header:'����',dataIndex:'gh',width:260,sortable:true},
       {header:'�̶��绰',dataIndex:'hkxz',width:460,sortable:true}, 
	   {header:'�ƶ��绰',dataIndex:'csd',width:460,sortable:true},
       {header:'�Ա�',dataIndex:'xb',width:200,sortable:true},
       //{header:'����',dataIndex:'gz',fixed:true},
       {header:'��ȫ�ȼ�',dataIndex:'aqdj',fixed:true},
       //{header:'Ӧ���¹ʵȼ�',dataIndex:'ydsgdj',fixed:true},
       //{header:'�����ȼ�',dataIndex:'jsdj',fixed:true},
       {header:'���',dataIndex:'bc',fixed:true},
       {header:'ɾ��',dataIndex:'id',width:60,renderer:renderDel,fixed:true}
    
     ]);
     
     var planRecord = Ext.data.Record.create([
        {name:'id',type:'int'},
        {name:'bm',type:'string'},
        {name:'szdw',type:'string'},
        {name:'zw',type:'string'},
    	{name:'zy',type:'string'},
    	{name:'xm',type:'string'},
        {name:'gh',type:'string'},
        {name:'xb',type:'string'},
    	{name:'jg',type:'string'},
    	{name:'mz',type:'string'},
    	{name:'hkxz',type:'string'},
    	{name:'csd',type:'string'},
    	{name:'csrq',type:'string'},
    	{name:'sfzh',type:'string'},
    	{name:'whcd',type:'string'},
    	{name:'zzmm',type:'string'},
    	{name:'hyzk',type:'string'},
    	{name:'gz',type:'string'},
    	{name:'aqdj',type:'string'},
    	{name:'ydsgdj',type:'string'},
    	{name:'jsdj',type:'string'},
    	{name:'bc',type:'string'}
     ]);
    
       	
     //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
	 var store = new Ext.data.Store({
     	//proxy�������Ǵ�����������
     	proxy: new Ext.data.HttpProxy({url:'RyList.jsp'}),        
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
    });	

    //grid.render();//��Ⱦ���
    Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	// form start        

    /*
     * ================  ����ǰ��λ�ã��¹ʰ���---->������ѯ =======================
    */
	var simpleForm_Query = new Ext.FormPanel({
		renderTo : document.body,
       	title: '��Ա��Ϣ---->��ѯ',
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
              columnWidth : .6,
              layout : 'form',
              border : false,
              items: [{
                    		xtype : 'combo',
                        	store : DWCX_store,
                       		valueField : "text",
                       		displayField : "text",
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ�����ڵ�λ',
                        	emptyText : 'ѡ��λ',
                        	hiddenName : 'szdw',
                        	editable : true,
                        	triggerAction : 'all',
                        	//allowBlank : false,
                        	fieldLabel : '���ڵ�λ',
                        	name : 'szdw',
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
                                     url : 'RyQuery.jsp',
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
       
    /*==============�����鵵---->�¹ʱ�������========*/
	var simpleForm_Save = new Ext.FormPanel({
        renderTo : document.body,
        title: '��Ա�༭---->�༭',
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
                    layout : 'column',
                    border : false,
                	items:[{xtype:'hidden',name:'id'},{xtype:'hidden',name:'albm'},
                	{
                    	columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '��Ա����',
                    		name: 'xm',
                    		anchor:'95%'
                		}]
                	},{
                		columnWidth:.3,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store : DW_store,
                       		valueField : "text",
                       		displayField : "text",
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ���ڵ�λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ�����ڵ�λ',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'szdw',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	allowBlank : false,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : '���ڵ�λ',// �ؼ��ı�����ѧ��
                        	name : 'szdw',// �ٴ����ѣ�nameֻ�������б������
                        	anchor : '95%'// input�Ŀ����90%
    					}]	
                	},{
                    	columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '����',
                    		name: 'bm',
                    		anchor:'95%'
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                		columnWidth:.3,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store : zyfl_store,
                        	valueField : "text",// ��������ѡ����ֵ
                       		displayField : "text",// ��������ѡ������ʾ�ı�
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ��רҵ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : '��ѡ��רҵ',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'zy',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	allowBlank : false,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : 'ѡ��רҵ',// �ؼ��ı�����ѧ��
                        	name : 'zy',// �ٴ����ѣ�nameֻ�������б������
                        	anchor : '95%'// input�Ŀ����90%
    					}]	
                	},{
                    	columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: 'ְ��',
                    		name: 'zw',
                    		anchor:'95%'
                		}]
                	},{
                		columnWidth:.3,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: 'ְ������',
                    		name: 'gh',
                    		anchor:'95%'
    					}]	
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                    	columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store : new Ext.data.SimpleStore({
                        		// ͨ��һ�����鶨����returnValue��displayText�����ֶΡ�retrunValue�ֶ�ָ�����ύ����̨��ֵ��displayText�ֶ�ָ��������������ʾ��ѡ��ֵ��
                        		fields : ["returnValue", "displayText"],
                        		// �����˼�������.ÿ�����ݶ��Ǹ���fiedls�Ķ�������ɵģ��������һ��ֵ����retrunValue��ֵ���ڶ���ֵ����displayText��ֵ������[1,'Сѧ']���ͱ�ʾretrunValue��1��displayText��Сѧ��
                        		data : [[ '��', '��'],[ 'Ů', 'Ů']]
                        	}),
                        	valueField : "returnValue",// ��������ѡ����ֵ
                       		displayField : "displayText",// ��������ѡ������ʾ�ı�
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ���Ա�',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ���Ա�',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'xb',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	allowBlank : false,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : '�Ա�',// �ؼ��ı�����ѧ��
                        	name : 'xb',// �ٴ����ѣ�nameֻ�������б������
                        	anchor : '95%'// input�Ŀ����90%
                		}]
                	},{
                		columnWidth:.3,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '��ͥסַ',
                    		name: 'jg',
                    		anchor:'95%'
    					}]	
                	},{
                    	columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '����',
                    		name: 'mz',
                    		anchor:'95%'
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                	    columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '�̶��绰',
                    		name: 'hkxz',
                    		anchor:'95%'
                		}]
                	},{
                	    columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'textfield',
                            fieldLabel : '�ƶ��绰',
                            name : 'csd',
                            anchor : '95%'
                		}]
                	},{
                	    columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'datefield',
                    		fieldLabel: '��������',
                    		name: 'csrq',
                    		anchor:'95%',
                    		format:'Y-m-d',
                    		allowBlank : false,// ��ѡ��ֵ������Ϊ��
    						timePicker:true
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                    	columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '���֤��',
                    		name: 'sfzh',
                    		anchor:'95%'
                		}]
                	},{
                    	columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store : whcd_store,
                        	valueField : "text",// ��������ѡ����ֵ
                       		displayField : "text",// ��������ѡ������ʾ�ı�
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ���Ļ��̶�',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ���Ļ��̶�',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'whcd',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	allowBlank : false,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : '�Ļ��̶�',// �ؼ��ı�����ѧ��
                        	name : 'whcd',// �ٴ����ѣ�nameֻ�������б������
                        	anchor : '95%'// input�Ŀ����90%
                		}]
                		
                	},{
                    	columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store : zzmm_store,
                        	valueField : "text",// ��������ѡ����ֵ
                       		displayField : "text",// ��������ѡ������ʾ�ı�
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ��������ò',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ��������ò',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'zzmm',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	allowBlank : true,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : '������ò',// �ؼ��ı�����ѧ��
                        	name : 'zzmm',// �ٴ����ѣ�nameֻ�������б������
                        	anchor : '95%'// input�Ŀ����90%
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                    	columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store : new Ext.data.SimpleStore({
                        		// ͨ��һ�����鶨����returnValue��displayText�����ֶΡ�retrunValue�ֶ�ָ�����ύ����̨��ֵ��displayText�ֶ�ָ��������������ʾ��ѡ��ֵ��
                        		fields : ["returnValue", "displayText"],
                        		// �����˼�������.ÿ�����ݶ��Ǹ���fiedls�Ķ�������ɵģ��������һ��ֵ����retrunValue��ֵ���ڶ���ֵ����displayText��ֵ������[1,'Сѧ']���ͱ�ʾretrunValue��1��displayText��Сѧ��
                        		data : [['�ѻ�', '�ѻ�'],
                                   		['�ѻ�', 'δ��'], ['����', '����']]
                        	}),
                        	valueField : "returnValue",// ��������ѡ����ֵ
                       		displayField : "displayText",// ��������ѡ������ʾ�ı�
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ�����״��',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ�����״��',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'hyzk',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	allowBlank : false,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : '����״��',// �ؼ��ı�����ѧ��
                        	name : 'hyzk',// �ٴ����ѣ�nameֻ�������б������
                        	anchor : '95%'// input�Ŀ����90%
                		}]
                	},{
                    	columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store : rylb_store,
                        	valueField : "text",// ��������ѡ����ֵ
                       		displayField : "text",// ��������ѡ������ʾ�ı�
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ����Ա���',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ����Ա���',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'gz',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	allowBlank : true,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : '��Ա���',// �ؼ��ı�����ѧ��
                        	name : 'gz',// �ٴ����ѣ�nameֻ�������б������
                        	anchor : '95%'// input�Ŀ����90%
                		}]
                	},{
                    	columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store : aqdj_store,
                        	valueField : "text",// ��������ѡ����ֵ
                       		displayField : "text",// ��������ѡ������ʾ�ı�
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ��ȫ�ȼ�',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ��ȫ�ȼ�',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'aqdj',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	allowBlank : false,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : '��ȫ�ȼ�',// �ؼ��ı�����ѧ��
                        	name : 'aqdj',// �ٴ����ѣ�nameֻ�������б������
                        	anchor : '95%'// input�Ŀ����90%
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                    	columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store : gzdj_store,
                        	valueField : "value",// ��������ѡ����ֵ
                       		displayField : "text",// ��������ѡ������ʾ�ı�
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡӦ���¹ʵȼ�',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ��Ӧ���¹ʵȼ�',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'ydsgdj',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : true,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	allowBlank : true,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : 'Ӧ���¹ʵȼ�',// �ؼ��ı�����ѧ��
                        	name : 'ydsgdj',// �ٴ����ѣ�nameֻ�������б������
                        	anchor : '95%'// input�Ŀ����90%
                		}]
                	},{
                	    columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store :zbbc_store,
                        	valueField : "text",// ��������ѡ����ֵ
                       		displayField : "text",// ��������ѡ������ʾ�ı�
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ���',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'bc',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	allowBlank : true,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : '���',// �ؼ��ı�����ѧ��
                        	name : 'bc',// �ٴ����ѣ�nameֻ�������б������
                        	anchor : '95%'// input�Ŀ����90%
                		}]
                	},{
                	    columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store :jsdj_store,
                        	valueField : "text",// ��������ѡ����ֵ
                       		displayField : "text",// ��������ѡ������ʾ�ı�
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ�����ȼ�',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ�����ȼ�',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'jsdj',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	allowBlank : true,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : '�����ȼ�',// �ؼ��ı�����ѧ��
                        	name : 'jsdj',// �ٴ����ѣ�nameֻ�������б������
                        	anchor : '95%'// input�Ŀ����90%
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
                                                    url : 'RySave.jsp',
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
                                                             	//simpleForm_Save.buttons[3].setVisible(true);
                                                             	//simpleForm_Save.buttons[4].setVisible(true);
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
                                               url : 'RyUpdate.jsp',
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
                   //simpleForm_Save.buttons[3].setVisible(false);
                   //simpleForm_Save.buttons[4].setVisible(false);
                   //simpleForm_Query.collapse();
                   // window.location.href="";
                   //window.location.href='zyjhsqAdd.jsp';
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
 });
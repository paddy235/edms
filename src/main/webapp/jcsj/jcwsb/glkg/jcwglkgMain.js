Ext.onReady(function(){

    Ext.QuickTips.init();
	Ext.BLANK_IMAGE_URL = '../../../extjs-3.0/resources/images/default/s.gif';
    var bd = Ext.getBody();
    
    /*
     * ================  ��ѯ���� =======================
    */
    //��Ⱦ����html����
 	 var renderXiangxi =function(value)
 	 {
 	     return '<a href="aa.jsp?id='+value+'">��ϸ</a>';
 	 };
 	 var renderDel =function(value)
 	 {
 	     return '<a  href="xcDel.jsp?ID='+value+'">ɾ��</a>';
 	 };
	var expander = new Ext.ux.grid.RowExpander({
        tpl : new Ext.Template(
            '<p><b>   ��������:</b> {SCRQ}          <b>   Ͷ������:</b> {TYRQ}	 <b>   ��������:</b> {SCCJ}</p>'        	      	
            ) });	
 	 //����Grid��ͷ
 	 // select ID,SCBH,QJZC,XBBM,SXXBM,SBLX,SBXH,SBCZ,ZZH,SCRQ,TYRQ,SCCJ,GLB from Z_JCSJ_XC
   	 var columns = new Ext.grid.ColumnModel([
 	    expander,		
        new Ext.grid.RowNumberer(),
        {header:'���뿪�ر��',dataIndex:'XCBH',sortable:true,width:120,sortable:true},
        {header:'����վ��',dataIndex:'QJZC',sortable:true},
        {header:'�߱�',dataIndex:'XBBM',sortable:true},
        {header:'������',dataIndex:'SXXBM',sortable:true,width:40,sortable:true}, 
        {header:'���뿪������',dataIndex:'SBLX',sortable:true,width:120,sortable:true}, 
        {header:'�Ƿ���ӵص�բ',dataIndex:'SBXH',sortable:true,width:120,sortable:true},
       	{header:'�Ƿ������',dataIndex:'SBCZ',sortable:true,width:120,sortable:true},
        {header:'֧����',dataIndex:'ZZH',sortable:true,width:60,sortable:true},
        {header:'�����',dataIndex:'GLB',sortable:true,width:60,sortable:true},     
       	//{header:'��������',dataIndex:'SCRQ',sortable:true,width:130,sortable:true},     
       	//{header:'Ͷ������',dataIndex:'TYRQ',sortable:true,width:130,sortable:true},    
       	//{header:'��������',dataIndex:'SCCJ',sortable:true},
       	{header:'ɾ��',dataIndex:'ID',width:60,renderer:renderDel,fixed:true}
     ]);
 	 // select ID,SCBH,QJZC,XBBM,SXXBM,SBLX,SBXH,SBCZ,ZZH,SCRQ,TYRQ,SCCJ,GLB from Z_JCSJ_XC
     var planRecord = Ext.data.Record.create([
        {name:'ID',type:'int'},
        {name:'XCBH',type:'string'},
        {name:'QJZC',type:'string'},       
        {name:'XBBM',type:'string'},
    	{name:'SXXBM',type:'string'},
    	{name:'SBLX',type:'string'},	
        {name:'SBXH',type:'string'},
    	{name:'SBCZ',type:'string'},
    	{name:'ZZH',type:'string'},    	
    	{name:'GLB',type:'string'},
    	{name:'SCRQ',type:'string'},
    	{name:'TYRQ',type:'string'},
    	{name:'SCCJ',type:'string'}
     ]);
    
       	
     //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
	 var store = new Ext.data.Store({
     	//proxy�������Ǵ�����������
     	proxy: new Ext.data.HttpProxy({url:'jcwglkglist.jsp'}),        
     	//reader����������ν����������
     	reader: new Ext.data.JsonReader({
     		totalProperty: 'totalCount',
     		root: 'root',
     		successProperty :'success'
        },planRecord)
    });
	store.load({params:{start:0, limit:10}});
	
//����������,ָ����ģ�ͣ��ֿ⣬ѡ��ģ��(Ĭ����ѡ��ģ��)
    var simple_Grid = new Ext.grid.GridPanel({
        //renderTo : 'Sbxx',
        //title: '�豸��Ϣ', 
        store:store,
    	cm: columns,
    	sm: new Ext.grid.RowSelectionModel({singleSelcet:true}),
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
    
    //Grid�ϴ����¼�
    simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
    	// simpleForm_Query.collapse();
    	//simpleForm_Save.expand();
    	simpleForm_Save.buttons[0].setVisible(false);
    	simpleForm_Save.buttons[1].setVisible(true);
    	//simpleForm_Save.buttons[3].setVisible(true);
    	//simpleForm_Save.buttons[4].setVisible(true);
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	//alert(record);
    	//alert(record.get('albm'));
    	
    	simpleForm_Save.getForm().loadRecord(record);
    });	

    //grid.render();//��Ⱦ����
    Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	// form start        

    /*
     * ========��ѯ =======================
    */
	var simpleForm_Query = new Ext.FormPanel({
		renderTo : document.body,
       	title: '���뿪��---->��ѯ',
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
              columnWidth : .32,
              layout : 'form',
              border : false,
              items: [{
                    		xtype : 'combo',
                        	store : new Ext.data.SimpleStore({
                        		fields : ["returnValue", "displayText"],
                        		data : [['', 'ȫ��'],['��ɳվ', '��ɳվ'],['��ɳ-��̶', '��ɳ-��̶'], ['��̶վ', '��̶վ'],['����-�Ϻ�����', '����-�Ϻ�����'],['�Ϻ�վ', '�Ϻ�վ'], ['�Ϻ�-��������', '�Ϻ�-��������']]}),
                        	valueField : "returnValue",
                        	displayField : "displayText",
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ������վ��',
                        	emptyText : 'ѡ������վ��',
                        	hiddenName : 'QJZC',
                        	editable : false,
                        	triggerAction : 'all',
                        	//allowBlank : false,
                        	fieldLabel : '����վ��',
                        	name : 'qjzc',
                        	anchor : '90%'
    			}]
              },{
              columnWidth : .32,
              layout : 'form',
              border : false,
              items: [{
                    		xtype : 'combo',
                        	store : new Ext.data.SimpleStore({
                        		fields : ["returnValue", "displayText"],
                        		data : [['', 'ȫ��'],['������ר��', '������ר��'],['�������ר��', '�������ר��'],['������', '������']]
                        	}),
                        	valueField : "returnValue",
                        	displayField : "displayText",
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ�������߱�',
                        	emptyText : 'ѡ���߱�',
                        	hiddenName : 'XBBM',
                        	editable : false,
                        	triggerAction : 'all',
                        	//allowBlank : false,
                        	fieldLabel : '�߱�',
                        	name : 'xbbm',
                        	anchor : '90%'
    			}]
              },{
              columnWidth : .3,
              layout : 'form',
              border : false,
              items: [{
                    		xtype : 'combo',
                        	store : new Ext.data.SimpleStore({
                        		fields : ["returnValue", "displayText"],
                        			data : [['', 'ȫ��'],['�ֶ�ʽ���뿪��', '�ֶ�ʽ���뿪��'],['�綯ʽ���뿪��', '�綯ʽ���뿪��']]
                        	}),
                        	valueField : "returnValue",
                        	displayField : "displayText",
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ����뿪������',
                        	emptyText : 'ѡ����뿪������',
                        	hiddenName : 'SBLX',
                        	editable : false,
                        	triggerAction : 'all',
                        	//allowBlank : false,
                        	fieldLabel : '���뿪������',
                        	name : 'SBLX',
                        	anchor : '90%'
    			}]
              }]
			}
           ],
           // Ϊform���Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
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
                                     url : 'jcwglkgQuery.jsp',
                                     method : 'post',
                                     params : '',
                                     // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                     // success����ĺ�������������������һ��form�������ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                     success : function(form, action) {
                                     // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                     //Ext.Msg.alert('����',action.result.data);
                                     //Ext.Msg.alert('��Ϣ',action.result.msg);
                                     //simpleForm_Query.form.reset();
                                      simple_Grid.getStore().reload();                               		
                    				 },
                     // ����failure��������������ͨѶ���������ʱ����ʾ������Ϣ��
                     failure : function() {
                            Ext.Msg.alert('����', '��ѯʧ�ܣ�');
                       	 	this.disabled = false;
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
                     }
          }]
       });
       
    /*====����========*/
	var simpleForm_Save = new Ext.FormPanel({
        renderTo : document.body,
        title: '���뿪��---->�༭',
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
                	items:[{xtype:'hidden',name:'ID'},{xtype:'hidden',name:'ID'},{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store : new Ext.data.SimpleStore({
                        		// ͨ��һ�����鶨����returnValue��displayText�����ֶΡ�retrunValue�ֶ�ָ�����ύ����̨��ֵ��displayText�ֶ�ָ��������������ʾ��ѡ��ֵ��
                        		fields : ["returnValue", "displayText"],
                        		// �����˼�������.ÿ�����ݶ��Ǹ���fiedls�Ķ�������ɵģ��������һ��ֵ����retrunValue��ֵ���ڶ���ֵ����displayText��ֵ������[1,'Сѧ']���ͱ�ʾretrunValue��1��displayText��Сѧ��
                        		data : [['������ר��', '������ר��'],['�������ר��', '�������ר��'],['������', '������']]
                        	}),
                        	valueField : "returnValue",// ��������ѡ����ֵ
                       		displayField : "displayText",// ��������ѡ������ʾ�ı�
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ���߱�',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ��ѡ���߱�',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'XBBM',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б������ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	allowBlank : false,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : '�߱�',// �ؼ��ı�����ѧ��
                        	name : 'XBBM',// �ٴ����ѣ�nameֻ�������б�������
                        	anchor : '95%'// input�Ŀ�����90%
    					}]	
                	},{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store : new Ext.data.SimpleStore({
                        		// ͨ��һ�����鶨����returnValue��displayText�����ֶΡ�retrunValue�ֶ�ָ�����ύ����̨��ֵ��displayText�ֶ�ָ��������������ʾ��ѡ��ֵ��
                        		fields : ["returnValue", "displayText"],
                        		// �����˼�������.ÿ�����ݶ��Ǹ���fiedls�Ķ�������ɵģ��������һ��ֵ����retrunValue��ֵ���ڶ���ֵ����displayText��ֵ������[1,'Сѧ']���ͱ�ʾretrunValue��1��displayText��Сѧ��
                        		data : [['����', '����'],['����', '����'],['����', '����']]
                        	}),
                        	valueField : "returnValue",// ��������ѡ����ֵ
                       		displayField : "displayText",// ��������ѡ������ʾ�ı�
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ��������',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ��������',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'SXXBM',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б������ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	allowBlank : false,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : '������',// �ؼ��ı�����ѧ��
                        	name : 'sxxbm',// �ٴ����ѣ�nameֻ�������б�������
                        	anchor : '95%'// input�Ŀ�����90%
    					}]	
                	},{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store : new Ext.data.SimpleStore({
                        		// ͨ��һ�����鶨����returnValue��displayText�����ֶΡ�retrunValue�ֶ�ָ�����ύ����̨��ֵ��displayText�ֶ�ָ��������������ʾ��ѡ��ֵ��
                        		fields : ["returnValue", "displayText"],
                        		// �����˼�������.ÿ�����ݶ��Ǹ���fiedls�Ķ�������ɵģ��������һ��ֵ����retrunValue��ֵ���ڶ���ֵ����displayText��ֵ������[1,'Сѧ']���ͱ�ʾretrunValue��1��displayText��Сѧ��
                        		data : [['��ɳվ', '��ɳվ'],['��ɳ-��̶', '��ɳ-��̶'], ['��̶վ', '��̶վ'],['����-�Ϻ�����', '����-�Ϻ�����'],['�Ϻ�վ', '�Ϻ�վ'], ['�Ϻ�-��������', '�Ϻ�-��������']]
                        	}),
                        	valueField : "returnValue",// ��������ѡ����ֵ
                       		displayField : "displayText",// ��������ѡ������ʾ�ı�
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ������վ��',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ������վ��',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'QJZC',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б������ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	allowBlank : false,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : '����վ��',// �ؼ��ı�����ѧ��
                        	name : 'qjzc',// �ٴ����ѣ�nameֻ�������б�������
                        	anchor : '95%'// input�Ŀ�����90%
    					}]	
                	}]
                },
                
                {
                    layout : 'column',
                    border : false,
                	items:[{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store : new Ext.data.SimpleStore({
                        		// ͨ��һ�����鶨����returnValue��displayText�����ֶΡ�retrunValue�ֶ�ָ�����ύ����̨��ֵ��displayText�ֶ�ָ��������������ʾ��ѡ��ֵ��
                        		fields : ["returnValue", "displayText"],
                        		// �����˼�������.ÿ�����ݶ��Ǹ���fiedls�Ķ�������ɵģ��������һ��ֵ����retrunValue��ֵ���ڶ���ֵ����displayText��ֵ������[1,'Сѧ']���ͱ�ʾretrunValue��1��displayText��Сѧ��
                        		data : [['�ֶ�ʽ���뿪��', '�ֶ�ʽ���뿪��'],['�綯ʽ���뿪��', '�綯ʽ���뿪��']]
                        	}),
                        	valueField : "returnValue",// ��������ѡ����ֵ
                       		displayField : "displayText",// ��������ѡ������ʾ�ı�
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ����뿪������',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ����뿪������',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'SBLX',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б������ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	allowBlank : false,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : '���뿪������',// �ؼ��ı�����ѧ��
                        	name : 'SBLX',// �ٴ����ѣ�nameֻ�������б�������
                        	anchor : '95%'// input�Ŀ�����90%
    					}]	
                	},{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '���뿪�ر��',
                    		name: 'XCBH',
                    		anchor:'95%'
    					}]	
                	},{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store : new Ext.data.SimpleStore({
                        		// ͨ��һ�����鶨����returnValue��displayText�����ֶΡ�retrunValue�ֶ�ָ�����ύ����̨��ֵ��displayText�ֶ�ָ��������������ʾ��ѡ��ֵ��
                        		fields : ["returnValue", "displayText"],
                        		// �����˼�������.ÿ�����ݶ��Ǹ���fiedls�Ķ�������ɵģ��������һ��ֵ����retrunValue��ֵ���ڶ���ֵ����displayText��ֵ������[1,'Сѧ']���ͱ�ʾretrunValue��1��displayText��Сѧ��
                        		data : [['���ӵص�բ', '���ӵص�բ'],['�����ӵص�բ', '�����ӵص�բ']]
                        	}),
                        	valueField : "returnValue",// ��������ѡ����ֵ
                       		displayField : "displayText",// ��������ѡ������ʾ�ı�
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ���Ƿ���ӵص�բ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ���Ƿ���ӵص�բ',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'SBXH',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б������ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	allowBlank : false,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : '�Ƿ���ӵص�բ',// �ؼ��ı�����ѧ��
                        	name : 'SBXH',// �ٴ����ѣ�nameֻ�������б�������
                        	anchor : '95%'// input�Ŀ�����90%
    					}]	
                	}]
                },
                
                {
                    layout : 'column',
                    border : false,
                	items:[{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store : new Ext.data.SimpleStore({
                        		// ͨ��һ�����鶨����returnValue��displayText�����ֶΡ�retrunValue�ֶ�ָ�����ύ����̨��ֵ��displayText�ֶ�ָ��������������ʾ��ѡ��ֵ��
                        		fields : ["returnValue", "displayText"],
                        		// �����˼�������.ÿ�����ݶ��Ǹ���fiedls�Ķ�������ɵģ��������һ��ֵ����retrunValue��ֵ���ڶ���ֵ����displayText��ֵ������[1,'Сѧ']���ͱ�ʾretrunValue��1��displayText��Сѧ��
                        		data : [['������', '������'],['��������', '��������']]
                        	}),
                        	valueField : "returnValue",// ��������ѡ����ֵ
                       		displayField : "displayText",// ��������ѡ������ʾ�ı�
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ���Ƿ�����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ���Ƿ�����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'SBCZ',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б������ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	allowBlank : false,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : '�Ƿ�����',// �ؼ��ı�����ѧ��
                        	name : 'SBCZ',// �ٴ����ѣ�nameֻ�������б�������
                        	anchor : '95%'// input�Ŀ�����90%
    					}]	
                	},{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '����֧��',
                    		name: 'ZZH',
                    		anchor:'95%'
    					}]	
                	},{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '�����',
                    		name: 'GLB',
                    		anchor:'95%'
    					}]	
                	}]
                },
                
                {
                    layout : 'column',
                    border : false,
                	items:[{
                	    columnWidth:.32,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'datefield',
                    		fieldLabel: 'Ͷ������',
                    		name: 'TYRQ',
                    		anchor:'95%',
                    		format:'Y-m-d',
    						timePicker:true
                		}]
                	},{
                	    columnWidth:.32,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'datefield',
                    		fieldLabel: '��������',
                    		name: 'SCRQ',
                    		anchor:'95%',
                    		format:'Y-m-d',
    						timePicker:true
                		}]
                	},{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store : new Ext.data.SimpleStore({
                        		// ͨ��һ�����鶨����returnValue��displayText�����ֶΡ�retrunValue�ֶ�ָ�����ύ����̨��ֵ��displayText�ֶ�ָ��������������ʾ��ѡ��ֵ��
                        		fields : ["returnValue", "displayText"],
                        		// �����˼�������.ÿ�����ݶ��Ǹ���fiedls�Ķ�������ɵģ��������һ��ֵ����retrunValue��ֵ���ڶ���ֵ����displayText��ֵ������[1,'Сѧ']���ͱ�ʾretrunValue��1��displayText��Сѧ��
                        		data : [['����������', '����������'],['������˳�', '������˳�'],['����������', '����������'],['�������������ĳ�', '�������������ĳ�'],['������˳�', '���������ֱ̾�����Ʒ��']]
                        	}),
                        	valueField : "returnValue",// ��������ѡ����ֵ
                       		displayField : "displayText",// ��������ѡ������ʾ�ı�
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ����������',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ����������',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'SCCJ',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б������ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	allowBlank : false,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : '�豸��������',// �ؼ��ı�����ѧ��
                        	name : 'SCCJ',// �ٴ����ѣ�nameֻ�������б�������
                        	anchor : '95%'// input�Ŀ�����90%
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
                                                    url : 'jcwglkgSave.jsp',
                                                    method : 'post',
                                                    params : '',
                                                    // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                                    // success����ĺ�������������������һ��form�������ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                                    success : function(form, action) {
                                                            // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                                             //Ext.Msg.alert('����',action.result.data);
                                                             if(action.result.msg!="")
                                                             {
                                                             	//document.getElementById ("albm").value=action.result.msg;
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
                                               url : 'xianluUpdate.jsp',
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
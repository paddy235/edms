Ext.onReady(function() {
		this.renderPrint=function(value){
    	win1 = new Ext.Window({
        	width:820,
        	height:500,
        	layout:'column',
       		title: '֪ͨ��',
        	closeAction:'hide',
        	plain: true,
        	autoScroll:false,

        	html:'<iframe style="width:800;height:420" src="../query/tzs.jsp?tzsid='+value+'"></iframe>',
        	buttons: [{
					text: '�ر�',
					handler: function(){
			    	// win.hide();
					win1.hide(this);
					}
			}]
    	});
    	win1.show(this);
  	};
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    
    //alert("aaa");
    
 	//��Ⱦ����html����

 	 var renderPrint =function(value)
 	 {
 	     return '<a  href="../query/tzs.jsp?tzsid='+value+'" target="_blank">��ӡ֪ͨ��</a>';
 	 };
 
    //����Grid��ͷ
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        //new Ext.grid.RowNumberer(),
        
        {header:'֪ͨ���',dataIndex:'TZSH',width:10},
        {header:'֪ͨ����',dataIndex:'TZRQ',width:10},
        {header:'�������',dataIndex:'DDMC',width:10},
        {header:'�е�����',dataIndex:'XDMC',width:10},
        {header:'�е�̨',dataIndex:'XDTMC',width:10},
        {header:'֪ͨ����',dataIndex:'TZNR',width:60},
        {header:'��ӡ֪ͨ��',dataIndex:'TZSID',width:80,renderer:renderPrint,fixed:true}
    ]);
   
    
    var planRecord = Ext.data.Record.create([
    	{name:'TZSID',type:'int'},
    	{name:'TZSH',type:'string'},
    	{name:'TZRQ',type:'string'},
    	{name:'XDTDM',type:'string'},
    	{name:'DDMC',type:'string'},
    	{name:'XDMC',type:'string'},
    	{name:'TZNR',type:'string'},
    	{name:'XDTMC',type:'string'}
    	]);
    	
    
    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'tzs1_json.jsp'}),        
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

    	//simpleForm_Save.buttons[3].setVisible(true);
    	//simpleForm_Save.buttons[4].setVisible(true);;
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	//alert(record);
    	//alert(record.get('albm'));
    	

    	
    });	
   	//grid.addListener('cellClick',cellClick);
    //��ʾ��html��idΪcontainer�Ĳ���
    //grid.render();//��Ⱦ���
     Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	 // form start
     var xdt_store = new Ext.data.Store({
	 proxy : new Ext.data.HttpProxy({
			url : '../../share/combo_list.jsp?sql=select distinct XDTDM,XDTMC from J_GYJC_XDTZD &all=all'
		}),
		reader : new Ext.data.JsonReader({root : 'root'
				},[{name : 'value',mapping : 'value'},
				   {name : 'text',mapping : 'text'}
				  ]
			)
	});
	xdt_store.load();
	var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '֪ͨ���ѯ',
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
                                             xtype : 'datefield',// �ؼ�������Ϊdatefield
                                             fieldLabel : '��ʼ����',
                                             name : 'TZRQ',
                                             id:'tzrq1',
                                             //value: new Date,
                                             anchor : '90%',
                                             format:'Y-m-d'
                                      }]
                             },{
                                    columnWidth : .3,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                             xtype : 'datefield',// �ؼ�������Ϊdatefield
                                             fieldLabel : '��������',
                                             name : 'TZRQ',
                                             id:'tzrq2',
                                             //value: new Date,
                                             anchor : '90%',
                                             format:'Y-m-d'
                                      }]
                             },{
                                    columnWidth : .3,
                                    layout : 'form',
                                    border : false,
                                    items : [{
								        		xtype : 'combo',// �ؼ����������ó�combo
								           		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
								            	store : xdt_store,
								            	valueField : "value",
								            	displayField : "text",
								            	mode : 'local',// �������ڱ���
								            	//forceSelection : true,// ����ѡ��һ��ѡ��
								            	blankText : '��ѡ���е�̨',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
								            	emptyText : 'ѡ���е�̨',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
								            	hiddenName : 'XDTDM',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
								            	editable : false,// �������б�ֻ����ѡ�񣬲���������
								            	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
								            	//allowBlank : false,// ��ѡ��ֵ������Ϊ��
								            	fieldLabel : '�е�̨',// �ؼ��ı�����ѧ��
								            	name : 'XDTDM',// �ٴ����ѣ�nameֻ�������б������
								            	id:'xdt',
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
										if(Ext.getCmp("tzrq1").getValue()!=""  ){
											where=where+" and TZRQ>=to_date('"+Ext.util.Format.date(Ext.getCmp("tzrq1").getValue(), 'Y-m-d')+"','yyyy-mm-dd')";
										}
										if(Ext.getCmp("tzrq2").getValue()!=""  ){
											where=where+" and TZRQ<=to_date('"+Ext.util.Format.date(Ext.getCmp("tzrq2").getValue(), 'Y-m-d')+"','yyyy-mm-dd')";
										}
										if(Ext.getCmp("xdt").getValue()!=""&&Ext.getCmp("xdt").getValue()!="ALL"  ){
											where=where+" and a.XDTDM ='"+Ext.getCmp("xdt").getValue()+"'";	
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
                               
                                 // window.location.href="";
                                  //window.location.href='zyjhsqAdd.jsp';
                           }
                    }]
       });
   
   
   

    
    var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Query,simple_Grid]
	});

	
 });
Ext.onReady(function() {
		this.ryshow=function(value){
    	win1 = new Ext.Window({
        	width:document.body.clientWidth-20,
        	height:document.body.clientHeight-10,
        	layout:'column',
       		title: '������Ϸ���',
        	closeAction:'hide',
        	plain: true,
        	autoScroll:false,
        	html:'<iframe style="width:100%;height:100%" src="../../tjbb/query/gdgzfx.jsp?where='+value+'"></iframe>'        	
    	});
    	win1.show(this);
  	};
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    
    //alert("aaa");
    
 	//��Ⱦ����html����

 	 var renderDel =function(value)
 	 {
 	     return '<a  href="gdgzfx_del.jsp?GZID='+value+'">ɾ��</a>';
 	 };
 
    //����Grid��ͷ
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        //new Ext.grid.RowNumberer(),
        
        {header:'����',dataIndex:'SJ',width:20},
        {header:'���',dataIndex:'LB',width:18},
        {header:'��λ',dataIndex:'GGDMC',width:18},
        {header:'�ſ�',dataIndex:'GK',width:100},
        {header:'ԭ��',dataIndex:'YY',width:40},
        {header:'��ע',dataIndex:'BZ',width:40},
        {header:'ɾ��',dataIndex:'GZID',width:60,renderer:renderDel,fixed:true}
    ]);
   
    	
    var planRecord = Ext.data.Record.create([
    	{name:'GZID',type:'int'},
    	{name:'SJ',type:'string'},
    	{name:'LB',type:'string'},
    	{name:'GK',type:'string'},
    	{name:'YY',type:'string'},
    	{name:'BZ',type:'string'},
    	{name:'GDDMC',type:'string'},
        {name:'bh',type:'string'},
        {name:'dd',type:'string'},
        {name:'yxxc',type:'string'},
        {name:'tdsf',type:'string'},
    	{name:'GGDMC',type:'string'}
    	]);
    	
    
    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'gdgzfx_json.jsp'}),        
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
     
      var sql_LB="select distinct LB,LB from z_tjbb_gdgzfx";
      
      var planRecord_LB = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
 	var store_LB = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_LB}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_LB)
    });
   store_LB.load();
   
     var gdd_store = new Ext.data.Store({
	 proxy : new Ext.data.HttpProxy({
			url : '../../share/combo_list.jsp?sql=select distinct GDDDM,GGDMC from J_GYJC_GDDZD &all=all'
		}),
		reader : new Ext.data.JsonReader({root : 'root'
				},[{name : 'value',mapping : 'value'},
				   {name : 'text',mapping : 'text'}
				  ]
			)
	});
	
	gdd_store.load();
	
	  var gdd1_store = new Ext.data.Store({
	 proxy : new Ext.data.HttpProxy({
			url : '../../share/combo_list.jsp?sql=select distinct GDDDM,GGDMC from J_GYJC_GDDZD'
		}),
		reader : new Ext.data.JsonReader({root : 'root'
				},[{name : 'value',mapping : 'value'},
				   {name : 'text',mapping : 'text'}
				  ]
			)
	});
	gdd1_store.load();
      
	var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '������Ϸ�����ѯ',
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
                                    columnWidth : .33,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                             fieldLabel : '��ʼ����',
                                             name : 'SJ',
                                             id:'rq2',
                                             anchor : '90%',
                                             //value: new Date,
                                             listeners: {
						                        		'focus': function(){WdatePicker({dateFmt:'yyyy-MM-dd'})}
						                   	}
						                   // format:'Y-m-d H:i:s'
                                      }]
                             },{
                                    columnWidth : .33,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                             fieldLabel : '��������',
                                             name : 'SJ',
                                             id:'rq3',
                                             anchor : '90%',
                                             //value: new Date,
                                             listeners: {
						                        		'focus': function(){WdatePicker({dateFmt:'yyyy-MM-dd'})}
						                   	}
						                   // format:'Y-m-d H:i:s'
                                      }]
                             },{
                                            columnWidth : .33,
                                            layout : 'form',
                                            border : false,
                                            items : [{
                                                   xtype : 'combo',// �ؼ����������ó�combo
                                                   // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                   store : store_LB,
                                                   valueField : "value",// ��������ѡ����ֵ
                                                   displayField : "value",// ��������ѡ������ʾ�ı�
                                                   mode : 'local',// �������ڱ���
                                                   //forceSelection : true,// ����ѡ��һ��ѡ��
                                                   blankText : 'ѡ�����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                   emptyText : 'ѡ�����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                   hiddenName : 'LB',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                   editable : true,// �������б�ֻ����ѡ�񣬲���������
                                                   triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                   fieldLabel : '���',// �ؼ��ı�����ѧ��
                                                   name : 'LB',// �ٴ����ѣ�nameֻ�������б������
                                                   id:'lb_id',
                                                   anchor : '90%'// input�Ŀ����90%
                                            }]
                                     },{
					                                    columnWidth : .33,
					                                    layout : 'form',
					                                    border : false,
					                                    items : [{
					                                            xtype : 'combo',// �ؼ����������ó�combo
															           		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
															            	store : gdd_store,
															            	valueField : "value",
															            	displayField : "text",
															            	mode : 'local',// �������ڱ���
															            	//forceSelection : true,// ����ѡ��һ��ѡ��
															            	blankText : '��ѡ��λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
															            	emptyText : 'ѡ��λ',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
															            	hiddenName : 'GDDMC',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
															            	editable : false,// �������б�ֻ����ѡ�񣬲���������
															            	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
															            	//allowBlank : false,// ��ѡ��ֵ������Ϊ��
															            	fieldLabel : '�����',// �ؼ��ı�����ѧ��
															            	name : 'GDDMC',// �ٴ����ѣ�nameֻ�������б������
															            	id:'gdd1',
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
											where=where+" and SJ>=to_date('"+Ext.getCmp("rq2").getValue()+"','yyyy-mm-dd')";
										}
										if(Ext.getCmp("rq3").getValue()!=""  ){
											where=where+" and SJ<=to_date('"+Ext.getCmp("rq3").getValue()+"','yyyy-mm-dd')";
										}
										if(Ext.getCmp("lb_id").getValue()!=""&&Ext.getCmp("lb_id").getValue()!="ALL"  ){
											where=where+" and LB = '"+Ext.getCmp("lb_id").getValue()+"'";
										}
										if(Ext.getCmp("gdd1").getValue()!=""&&Ext.getCmp("gdd1").getValue()!="ALL"  ){
											where=where+" and GDDMC = '"+Ext.getCmp("gdd1").getValue()+"'";
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
                                        var where="1=1 ";										
										if(Ext.getCmp("rq2").getValue()!=""  ){
											where=where+" and SJ>=to_date('"+Ext.getCmp("rq2").getValue()+"','yyyy-mm-dd')";
										}
										if(Ext.getCmp("rq3").getValue()!=""  ){
											where=where+" and SJ<=to_date('"+Ext.getCmp("rq3").getValue()+"','yyyy-mm-dd')";
										}
										if(Ext.getCmp("lb_id").getValue()!=""&&Ext.getCmp("lb_id").getValue()!="ALL"  ){
											where=where+" and LB = '"+Ext.getCmp("lb_id").getValue()+"'";
										}
										if(Ext.getCmp("gdd1").getValue()!=""&&Ext.getCmp("gdd1").getValue()!="ALL"  ){
											where=where+" and GDDMC = '"+Ext.getCmp("gdd1").getValue()+"'";
										}  
										ryshow(where);
								       //ryshow(store.baseParams.whereclause);

                                   }
                            }]
       });
   
   
   
   //Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	 
	 
	 // form start
	var simpleForm_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '������Ϸ������',
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
                       items : [{xtype:'hidden',name:'GZID',id:'gzid'},{
                                           
			                                    columnWidth : .33,
			                                    layout : 'form',
			                                    border : false,
			                                    items : [{
			                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
			                                             fieldLabel : 'ʱ��',
			                                             name : 'SJ',
			                                             anchor : '90%',
			                                             //value: new Date,
			                                             listeners: {
									                        		'focus': function(){WdatePicker({dateFmt:'yyyy-MM-dd'})}
									                   	},
									                   // format:'Y-m-d H:i:s'
									                   	allowBlank : false
		                                      		  }]
                                                 },{
					                                    columnWidth : .33,
					                                    layout : 'form',
					                                    border : false,
					                                    items : [{
					                                            xtype : 'combo',// �ؼ����������ó�combo
															           		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
															            	store : gdd1_store,
															            	valueField : "value",
															            	displayField : "text",
															            	mode : 'local',// �������ڱ���
															            	//forceSelection : true,// ����ѡ��һ��ѡ��
															            	blankText : '��ѡ�����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
															            	emptyText : 'ѡ�񹩵��',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
															            	hiddenName : 'GDDMC',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
															            	editable : false,// �������б�ֻ����ѡ�񣬲���������
															            	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
															            	//allowBlank : false,// ��ѡ��ֵ������Ϊ��
															            	fieldLabel : '��λ',// �ؼ��ı�����ѧ��
															            	name : 'GDDMC',// �ٴ����ѣ�nameֻ�������б������
															            	//id:'ddt1',
															            	anchor : '90%',// input�Ŀ����90%
															            	allowBlank : false
					                                      }]
					                             },{
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store : store_LB,
                                                               valueField : "value",// ��������ѡ����ֵ
                                                               displayField : "value",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               blankText : 'ѡ�����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : 'ѡ�����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'LB',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : true,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               fieldLabel : '���',// �ؼ��ı�����ѧ��
                                                               name : 'LB',// �ٴ����ѣ�nameֻ�������б������
                                                               anchor : '90%',// input�Ŀ����90%
                                                               allowBlank : false
                                                        }]
                                                 },{
                                           
			                                    columnWidth : .33,
			                                    layout : 'form',
			                                    border : false,
			                                    items : [{
			                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
			                                             fieldLabel : '�ص�',
			                                             name : 'dd',
			                                             anchor : '90%',
			                                             //value: new Date,
									                   // format:'Y-m-d H:i:s'
									                   	allowBlank : false
		                                      		  }]
                                                 },{
                                           
			                                    columnWidth : .33,
			                                    layout : 'form',
			                                    border : false,
			                                    items : [{
			                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
			                                             fieldLabel : 'Ӱ���г�',
			                                             name : 'yxxc',
			                                             anchor : '90%',
			                                             //value: new Date,
									                   // format:'Y-m-d H:i:s'
									                   	allowBlank : false
		                                      		  }]
                                                 },{
                                           
			                                    columnWidth : .33,
			                                    layout : 'form',
			                                    border : false,
			                                    items : [{
			                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
			                                             fieldLabel : 'ͣ��ʱ��',
			                                             name : 'tdsf',
			                                             anchor : '90%',
			                                             //value: new Date,
									                   // format:'Y-m-d H:i:s'
									                   	allowBlank : false
		                                      		  }]
                                                 },{
                                                columnWidth : 1.01,
                                                layout : 'form',
                                                border : false,
                                                items : [{
                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                             fieldLabel : 'ԭ�򼰴�ʩ',
                                                             name : 'YY',
                                                             anchor : '95%',
                                                           //  format:'Y-m-d'
                                                             allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                      }]
                                                 },{
                                                columnWidth : 1.01,
                                                layout : 'form',
                                                border : false,
                                                items : [{
                                                             xtype : 'textarea',// �ؼ�������Ϊdatefield
                                                             fieldLabel : '�ſ�',
                                                             name : 'GK',
                                                             anchor : '95%',
                                                              height:'80'
                                                           //  format:'Y-m-d'
                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                      }]
                                                 },{
                                                columnWidth : 1.01,
                                                layout : 'form',
                                                border : false,
                                                items : [{
                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                             fieldLabel : '��ע',
                                                             name : 'BZ',
                                                             anchor : '95%'
                                                           //  format:'Y-m-d'
                                                            // allowBlank : false// ��ѡ��ֵ������Ϊ��
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
                                               url : 'Update.jsp',
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
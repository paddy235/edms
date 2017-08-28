Ext.onReady(function() {
	
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    
    //alert("aaa");
    
 	//��Ⱦ����html����

 
    //����Grid��ͷ
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        //new Ext.grid.RowNumberer(),
        
        {header:'�û���¼��',dataIndex:'YHDM',width:60},
        {header:'�û�IP',dataIndex:'LOCATION_IP',width:60,sortable:true},
        {header:'��½ʱ��',dataIndex:'LOGIN_TIME',width:60,sortable:true},
        {header:'�˳�ʱ��',dataIndex:'LOGOUT_TIME',width:60,sortable:true},
        {header:'��½��Ա',dataIndex:'MEMO',width:60,sortable:true}
    ]);
   
    
    var planRecord = Ext.data.Record.create([
        {name:'YHDM',type:'string'},
    	{name:'LOCATION_IP',type:'string'},
    	{name:'LOGIN_TIME',type:'string'},
    	{name:'LOGOUT_TIME',type:'string'},
    	{name:'MEMO',type:'string'}
    	]);
    	
    
    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'yhlog_json.jsp'}),   
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

    	simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
    	// simpleForm_Query.collapse();

    	var record=simple_Grid.getStore().getAt(rowIndex);
    	

    });	
   	//grid.addListener('cellClick',cellClick);
    //��ʾ��html��idΪcontainer�Ĳ���
    //grid.render();//��Ⱦ���
     Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	 // form start

	var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '�û���½��Ϣ��ѯ',
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
	                                                     xtype : 'field',
	                                                     fieldLabel : '�û���¼��',
	                                                     name : 'YHDM',
	                                                     id:'yhdm_id',
	                                                     allowBlank : true// ��ѡ��ֵ������Ϊ��
	                                              }]
	                         },{
	                                columnWidth : .3,
	                                layout : 'form',
	                                border : false,
	                                items : [{
	                                         xtype : 'datefield',// �ؼ�������Ϊdatefield
	                                         fieldLabel : '��ʼ��½ʱ��',
	                                         name : 'LOGIN_TIME',
	                                         id:'time1',
	                                         //value: new Date,
	                                         anchor : '70%',
	                                         format:'Y-m-d'
	                                 		 }]
	                         },{
	                                columnWidth : .3,
	                                layout : 'form',
	                                border : false,
	                                items : [{
	                                         xtype : 'datefield',// �ؼ�������Ϊdatefield
	                                         fieldLabel : '������½ʱ��',
	                                         name : 'LOGIN_TIME',
	                                         id:'time2',
	                                         //value: new Date,
	                                         anchor : '70%',
	                                         format:'Y-m-d'
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
										if(Ext.getCmp("yhdm_id").getValue()!=""  ){
											where=where+" and YHDM = '"+Ext.getCmp("yhdm_id").getValue()+"'";
										}
										if(Ext.getCmp("time1").getValue()!="" ){
											 where=where+" and LOGIN_TIME>=to_date('"+Ext.util.Format.date(Ext.getCmp("time1").getValue(), 'Y-m-d')+"','yyyy-mm-dd')";	
	
										}
										if(Ext.getCmp("time2").getValue()!=""  ){
											where=where+" and LOGIN_TIME<=to_date('"+Ext.util.Format.date(Ext.getCmp("time2").getValue(), 'Y-m-d')+"','yyyy-mm-dd')";		
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
                                          
                                         // window.location.href="";
                                          //window.location.href='zyjhsqAdd.jsp';
                                   }
                            }]
       });
   
   
   
   //Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
 
   
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
		items: [simpleForm_Query,simple_Grid]
	});


 });
Ext.onReady(function() {
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    
 /*--���뵥λ---*/ 
    //����Grid��ͷ
    var columns = new Ext.grid.ColumnModel([ 
        {header:'���',width:40,fixed:true,renderer:function(value,metadata,record,rowIndex, colIndex, store)
        {
              var start = store.lastOptions.params.start;
              if (isNaN(start)) 
              {
                 start = 0;
              }
              return start + rowIndex + 1;   
        }},
        {header:'ʩ���ȼ�',dataIndex:'SGDJ',width:70,sortable:true,fixed:true},
        {header:'ʩ����λ',dataIndex:'SGDW',width:120,sortable:true},
        {header:'ʩ����Ŀ',dataIndex:'SGXM',width:80,sortable:true},
        {header:'ʩ���ص�',dataIndex:'SGDD',width:60},
        {header:'�Ǽǳ�վ',dataIndex:'DJCZ',width:60},
        
        {header:'ʱ������',dataIndex:'SGSJLX',width:60},
        {header:'��ʼʱ��',dataIndex:'KSSJ',width:60},
        {header:'����ʱ��',dataIndex:'JSSJ',width:60},
        {header:'ʩ��ʱ��(����)',dataIndex:'SGSJ',width:60},
        {header:'·���г�',dataIndex:'LYLC',width:60},
        {header:'ʩ������',dataIndex:'SGNR',width:60}
        
    ]);
   
    
    var planRecord = Ext.data.Record.create([ 
    	{name:'RJHXH',type:'string'},
    	{name:'SGDJ',type:'string'},
    	{name:'SGDW',type:'string'},
    	{name:'SGXM',type:'string'},
    	{name:'SGDD',type:'string'},
    	{name:'DJCZ',type:'string'},
    	
    	{name:'SGSJLX',type:'string'},
    	{name:'KSSJ',type:'string'},
    	{name:'JSSJ',type:'string'},
    	{name:'SGSJ',type:'string'},
    	{name:'LYLC',type:'string'},
    	{name:'SGNR',type:'string'}
    	]);
    	
    
    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'taskplan_query_json.jsp'}),        
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
        autoWidth: true,
        autoHeight: true, 
        bbar: new Ext.PagingToolbar({
            pageSize: 10,
            store: store,
            displayInfo: true,
            displayMsg: '�� {0} ���� {1} ��,�� {2} ��',
            emptyMsg: "�޼�¼"
        })
        
    });
    
     Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	 // form start
	var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '��ҵ�ƻ������ò�ѯ����',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 600,
               titleCollapse:true,
              collapsible:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              labelWidth : 56,
              
              
              items : [{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [ {
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
																 xtype : 'textfield',// �ؼ�������Ϊdatefield
																 fieldLabel : '��ҵ����',
																 name : 'jhsj',
																 id:'jhsj_id',
																 anchor : '60%',
																 listeners: {"focus": function(){
																 WdatePicker({dateFmt:'yyyy-MM-dd'})}}
                                                         }]
                                                 }]
                            } // �����ǵ�һ��,����ÿ�в���ͬ�ϣ�
                             ],
              // Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
              buttons : [{
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
                                    text : '��ѯ',
                                   handler : function() {
                                           
                                   		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                                          if (simpleForm_Query.form.isValid()) {
                                                    var dates=Ext.getCmp("jhsj_id").getValue();
                                                    
                                                     
													store.baseParams.whereclause =dates; 
				                                    simple_Grid.getStore().reload({ 
														params : { 
														start : 0, 
														limit : 10 
														} 
													});
                                          }

                                   }
                            }]
       });
   
    
  var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Query,simple_Grid]
	});
});

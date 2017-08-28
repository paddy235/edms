Ext.onReady(function() {
	
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var bd = Ext.getBody();
    var DWJB=document.getElementById ("DWJB").value;
    var DWDM=document.getElementById ("DWDM").value;
    var YHMC=document.getElementById ("YHMC").value;
    
	var renderzt1 =function(value)
 	{
 	    if (value=='0')  
  		{
  			return "<span style='color:black;font-weight:bold;'>���δ����</span>";
  		}
 	 	else if(value=="1")
 	 	{
 	 		return "<span style='color:blue;font-weight:bold;'>����ѷ��͡��е�δǩ��</span>";
 	 	}
 	 	else if (value=='2')  
  	    {
  	    	return "<span style='color:red;font-weight:bold;'>�е���ǩ�ϡ����δ�鵵</span>";
  	    }
 	 	else(value=="9")
 	 	{
 	 		return "<span style='color:green;font-weight:bold;'>����ѹ鵵</span>";
 	 	}
 	 };
	 //�����б�
	var sql="select xdtdm,xdtmc from j_gyjc_xdtzd";
	var planRecord_xdt = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_xdt = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql}),      
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            root: 'root',
            successProperty :'success'
        },planRecord_xdt)
    });
    store_xdt.load();

	sql="select ddtdm,ddtmc from j_gyjc_ddtzd where ddtdm like '"+DWDM+"%25'";
	var planRecord_ddt = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_ddt = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql}),      
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            root: 'root',
            successProperty :'success'
        },planRecord_ddt)
    });
    store_ddt.load();
    //����Grid��ͷ
    var tsbcolumns = new Ext.grid.ColumnModel([       
        new Ext.grid.RowNumberer(),
        {header:'�͵�����',dataIndex:'SDSJ',width:110,sortable:true,fixed:true},
        //{header:'ʱ��',dataIndex:'SDSF',width:40,sortable:true,fixed:true},
        {header:'�����',dataIndex:'SDGDB',width:160,sortable:true},
        {header:'�е����',dataIndex:'SD_XDMLH',width:60,sortable:true,fixed:true},
        {header:'�е�ʱ��',dataIndex:'SD_XDSJ',width:110,sortable:true,fixed:true},
        {header:'�е�Ա',dataIndex:'SD_XDY',width:60,sortable:true,fixed:true},
        {header:'������',dataIndex:'SD_DDMLH',width:60,sortable:true,fixed:true},
		{header:'���ʱ��',dataIndex:'SD_DDSJ',width:110,sortable:true,fixed:true},
        {header:'���Ա',dataIndex:'SD_DDY',width:60,sortable:true,fixed:true},
        {header:'��ע',dataIndex:'SD_BZ',width:100,sortable:true},
        {header:'״̬',dataIndex:'ZT',width:150,renderer:renderzt1,fixed:true}
    ]);
   
    var tsbplanRecord = Ext.data.Record.create([
    	{name:'SDTZBH',type:'int'},
    	{name:'SDSJ',type:'string'},
    	{name:'SDSF',type:'string'},
    	{name:'SDGDB',type:'string'},
    	{name:'SDNR',type:'string'},
    	{name:'SD_XDMLH',type:'string'},
    	{name:'SD_XDSJ',type:'string'},
    	{name:'SD_XDT',type:'string'},
    	{name:'SD_XDY',type:'string'},
    	{name:'SD_DDMLH',type:'string'},
    	{name:'SD_DDSJ',type:'string'},
    	{name:'SD_DDT',type:'string'},
    	{name:'SD_DDY',type:'string'},
		{name:'SD_BZ',type:'string'},
    	{name:'ZT',type:'string'}
    	]);
    var whereclause_init=" 1=1 ";
    var tsbstore = new Ext.data.Store({
        proxy: new Ext.data.HttpProxy({url:'sdtz_json.jsp'}), 
        baseParams:{whereclause:whereclause_init},//δ�鵵��������Կ���       
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },tsbplanRecord)
    });
	tsbstore.load({params:{start:0, limit:6}});
    
    //���������,ָ����ģ�ͣ��ֿ⣬ѡ��ģ��(Ĭ����ѡ��ģ��)
    var tsbsimple_Grid = new Ext.grid.GridPanel({
        //title : 'ͣ�͵�Ǽǲ��б�',
        store:tsbstore,
    	cm: tsbcolumns,
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
        //width:780,
        autoWidth: true,
        autoHeight: true,
        //plugins: expander,
        //iconCls: 'icon-grid',
        //height:400,
        //bottom bar
        bbar: new Ext.PagingToolbar({
            pageSize: 6,
            store: tsbstore,
            displayInfo: true,
            displayMsg: '�� {0} ���� {1} ��,�� {2} ��',
            emptyMsg: "�޼�¼"
        })

    });
    
   
    
   
    var simpleForm_Query = new Ext.FormPanel({
		//renderTo : document.body,
       	title: '�͵�ǩ�ϲ�ѯ',
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
            layout : 'column',// columnlayout
            border : false,// û�б߿�
            items : [{
                columnWidth : .2,
                layout : 'form',
                border : false,
                items : [{
                    xtype:'datefield',
                    fieldLabel: '��ʼͣ������',
                    name: 'ksrq',
                    id: 'ksrq',
                    anchor:'95%',
                    format:'Y-m-d',
                    value:new Date(), 
                    allowBlank : false
                    //format:'Y-m-d H:i:s',
    				//timePicker:true
                }]
            }, {
               columnWidth : .2,
               layout : 'form',
               border : false,
               items : [{
                   xtype:'datefield',
                   fieldLabel: '����ͣ������',
                   name: 'jsrq',
                   id: 'jsrq',
                   anchor:'95%',
                   format:'Y-m-d',
                   value:new Date(), 
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
                        		data : [['', 'ȫ��'],['0', '���������'],
                                   		['1', '����ѷ��͡��е�δǩ��'],['2', '�е���ǩ�ϡ����δ�鵵'],
                                   		['9', '����ѹ鵵']
                                   		]
                        	}),
                        	valueField : "returnValue",
                        	displayField : "displayText",
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ��״̬',
                        	emptyText : 'ѡ��״̬',
                        	hiddenName : 'ztbzcx',
                        	editable : false,
                        	triggerAction : 'all',
                        	//allowBlank : false,
                        	fieldLabel : 'ǩ��״̬',
                        	name : 'ztbzcx',
                        	id : 'ztbzcx_id',
                        	anchor : '95%'
    			}]
              }]
			}
           ],
            buttons : [{
              buttonlAlign : 'right',
               text : '��ѯ',
               handler : function() {
              
                    if (!simpleForm_Query.form.isValid()) {return };
                    if (simpleForm_Query.form.isValid()) {
                     	var where=" 1=1 ";												
						if(Ext.getCmp("ksrq").getValue()!="" ){
							where=where+" and trunc(SDSJ)>=to_date('"+Ext.util.Format.date(Ext.getCmp("ksrq").getValue(), 'Y-m-d')+"','yyyy-mm-dd')";	
						}
						if(Ext.getCmp("jsrq").getValue()!="" ){
							where=where+" and trunc(SDSJ)<=to_date('"+Ext.util.Format.date(Ext.getCmp("jsrq").getValue(), 'Y-m-d')+"','yyyy-mm-dd')";	
						}
						if(Ext.getCmp("ztbzcx_id").getValue()!='' && Ext.getCmp("ztbzcx_id").getValue()!='ALL'){
							where=where+" and ZT='"+Ext.getCmp("ztbzcx_id").getValue()+"' ";
						}
						tsbstore.baseParams.whereclause = where;
						
						tsbsimple_Grid.getStore().reload({ 
							params : { 
							start : 0, 
							limit : 6
							} 
						});
       			}
			}
          }]
       });
    
   
 //================   	
    var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		items: [simpleForm_Query,tsbsimple_Grid]
		
	});
});

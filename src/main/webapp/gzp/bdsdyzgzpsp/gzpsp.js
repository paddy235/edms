Ext.onReady(function() {
	
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../../extjs-3.0/resources/images/default/s.gif';
    //��ֵ�ƻ���Id�ͼƻ������Id
    var jhid=document.getElementById("jhid").value;
	var jhlb=document.getElementById("jhlb").value;
	var dwlb=document.getElementById("dwlb").value;
	var dwid=document.getElementById("dwid").value;
	//alert("jhlb:"+jhlb);
	//alert("dwlb:"+dwlb);
	dwlb="2";
	jhlb="0";
	
	var gzpurl="";
	var gzpSp="";
	if(dwlb=="1")//�ж���������
	{
		if(jhlb=="0")//ͣ����ҵ ��ɫ
		{
		  
		   gzpSp="../ticket_sp/operationPlan_Electric_look.jsp?id=";//��������Ʊ
		 
		}
		else if(jhlb=="1")//������ҵ ��ɫ
		{
		
		    gzpSp="../ticket_sp/operationTicket_red_look.jsp?id=";//��������Ʊ
		
		}
		else//Զ����ҵ ��ɫ
		{
			
		    gzpSp="../ticket_sp/operationTicket_black_look.jsp?id=";//��������Ʊ
		   
		}
	}
	else//�ж��Ǳ����
	{
		if(jhlb=="0")//ͣ����ҵ ��ɫ
		{
		  gzpSp="../ticket_sp/operationPlan_Electric_look.jsp?id=";//�鿴����Ʊ
		 
		}
		else if(jhlb=="1")//������ҵ ��ɫ
		{
			gzpurl="../ticket_sp/operationTicket_Electric_red.jsp?jhid="+jhid;//��ӹ���Ʊ
		}
		else//Զ����ҵ ��ɫ
		{
			 gzpSp="../ticket/operationTicket_Electric_red.jsp?id=";//�鿴����Ʊ
		}
	}
	 	 var zt =function (value)
 	 {
 	 	if(value=="0")
 	 	{
 	 	  return 'δ�ϱ�';
 	 	}
 	 	else if(value=="1")
 	 	{
 	 		return '������';
 	 	}
 	 	else if(value=="2")
 	 	{
 	 		return '��ʩ��';
 	 	}
 	 		else if(value=="3")
 	 	{
 	 		return 'ʩ����';
 	 	}
 	 			else if(value=="4")
 	 	{
 	 		return '�����';
 	 	}
 	 	else
 	 	{
 	 		 return '����';
 	 	}
 	 }
	
	//alert(jhid+"  "+jhlb);
   
    
 	//��Ⱦ����html����
 	 var renderXiangxi =function(value)
 	 { 
 	     return '<a href="'+gzpSp+value+'">����</a>';
 	 };

 
    //����Grid��ͷ
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        //new Ext.grid.RowNumberer(),
        
        {header:'���',dataIndex:'xh',width:40,fixed:true},
         {header:'��λ',dataIndex:'dwmc',width:70,sortable:true},
        {header:'����Ʊ��',dataIndex:'gzph',width:70,sortable:true},
        {header:'��Ʊ��',dataIndex:'fpr',width:60,sortable:true},
        {header:'��Ʊʱ��',dataIndex:'fpsj',width:60,sortable:true},
        {header:'�����쵼��',dataIndex:'gzldr',width:60},
        //{header:'��������',dataIndex:'cgrs',width:40},
        {header:'����Ʊ����',dataIndex:'zynr',width:60,sortable:true},
        {header:'���ʱ��',dataIndex:'jssj',width:60,sortable:true},
           {header:'����Ա',dataIndex:'DDSHY',width:60,sortable:true},
        {header:'���ʱ��',dataIndex:'SPSJ',width:60,sortable:true},
        {header:'����Ʊ״̬',dataIndex:'gzpzt',width:60,renderer:zt,sortable:true},
       // {header:'������',dataIndex:'fzr',width:60,sortable:true},
        {header:'����',dataIndex:'gzpid',width:60,renderer:renderXiangxi,fixed:true}
        //{header:'ɾ��',dataIndex:'gzpid',width:60,renderer:renderDel,fixed:true}
    ]);
   
    
    var planRecord = Ext.data.Record.create([
    	{name:'gzpid',type:'int'},
    	{name:'xh',type:'int'},
    	{name:'gzph',type:'string'},
    	{name:'fpr',type:'string'},
    	{name:'fpsj',type:'string'},
    	{name:'gzldr',type:'string'},
    	{name:'dwmc',type:'string'},
    	    	    	{name:'DDSHY',type:'string'},
    	{name:'SPSJ',type:'string'},
    	{name:'cgrs',type:'string'},
    	{name:'zynr',type:'string'},
    	{name:'jssj',type:'string'},
    	{name:'gzpzt',type:'string'},
    	{name:'sjc',type:'string'}
    	]);
    	
    
    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'gzpsp_json.jsp?jhid='+jhid+'&jhlb='+jhlb+'&dwlb='+dwlb+'&dwid='+dwid}),      
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
        title: '����Ʊ����',
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
   	//grid.addListener('cellClick',cellClick);
    //��ʾ��html��idΪcontainer�Ĳ���
    //grid.render();//��Ⱦ���
     Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	 // form start

   
   
   
   //Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	 
	 
	 

	
	    
    
    //Grid�ϴ����¼�
//    simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
//    	// simpleForm_Query.collapse();
//    	 simpleForm_Save.expand();
//    	
//    	var record=simple_Grid.getStore().getAt(rowIndex);
//    	//alert(rowIndex);
//    	//alert(record.get('jhsj')+' '+record.get('jhh')+' '+record.get('dwid'));
//    	    
//             //simpleForm_Save.buttons[2].setVisible(false);
//    //simpleForm_Save.buttons[3].setVisible(false);
//    	simpleForm_Save.getForm().loadRecord(record);
//    });	
    	

    
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simple_Grid]
	});
    
   // simpleForm_Save.collapse();
    //simpleForm_Save.buttons[2].disabled=true;
    //simpleForm_Save.buttons[3].disabled=true;
    //���ð�ťȫ������
	
   

});
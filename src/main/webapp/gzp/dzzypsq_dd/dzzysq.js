Ext.onReady(function() {
	
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../../extjs-3.0/resources/images/default/s.gif';
    //��ֵ�ƻ���Id�ͼƻ������Id
    var jhid=document.getElementById("jhid").value;
	var jhlb=document.getElementById("jhlb").value;
	var dwlb=document.getElementById("dwlb").value;
	var gqid=document.getElementById("gqid").value;
	//alert("dwlb:"+dwlb);
	dwlb="1";
	jhlb="0";
	
	
	var gzpurl="";
	var gzpSp="";
	var gzpXx="";
	var gzpSb="";
	if(dwlb=="1")//�ж���������
	{
      if(jhlb=="0")//ͣ����ҵ ��ɫ
		{
		   gzpurl="../ticket/dzgzp_dd.jsp?jhid="+jhid+"&jhlb="+jhlb;//��ӹ���Ʊ
		   gzpXx="../ticket/dzgzp_look_dd.jsp?jhlb="+jhlb+"&id=";//�鿴����Ʊ
		   gzpDel="../ticket/dzgzpDel_dd.jsp?jhlb="+jhlb+"&jhid="+jhid+"&id=";//ɾ������Ʊ
		   gzpSb="../ticket/dzgzpSb.jsp?jhlb="+jhlb+"&jhid="+jhid+"&id=";//ɾ������Ʊ
		}
		else if(jhlb=="1")//������ҵ ��ɫ
		{
			gzpurl="../ticket/operationTicket_red.jsp?jhlb="+jhlb+"&jhid="+jhid;//��ӹ���Ʊ
		    gzpXx="../ticket/operationTicket_red_look.jsp?jhlb="+jhlb+"&id=";//�鿴����Ʊ
		    gzpDel="../ticket/gzp_gq_redDel.jsp?jhlb="+jhlb+"&jhid="+jhid+"&id=";//ɾ������Ʊ
		}
		else//Զ����ҵ ��ɫ
		{
			gzpurl="../ticket/operationTicket_black.jsp?jhlb="+jhlb+"&jhid="+jhid;//��ӹ���Ʊ
		    gzpXx="../ticket/operationTicket_black_look.jsp?jhlb="+jhlb+"&id=";//�鿴����Ʊ
		    gzpDel="../ticket/gzp_gq_blackDel.jsp?jhlb="+jhlb+"&jhid="+jhid+"&id=";//ɾ������Ʊ
		}
	}
	else//�ж��Ǳ����
	{
	  if(jhlb=="0")//ͣ����ҵ ��ɫ
		{
		  gzpurl="../ticket/operationPlan_Electric.jsp?jhlb="+jhlb+"&jhid="+jhid;//��ӹ���Ʊ
		  gzpXx="../ticket/operationPlan_Electric_look.jsp?jhlb="+jhlb+"&id=";//�鿴����Ʊ
		    gzpDel="../ticket/gzp_Bds_greenDel.jsp?jhlb="+jhlb+"&jhid="+jhid+"&id=";//ɾ������Ʊ
		}
		else if(jhlb=="1")//������ҵ ��ɫ
		{
			gzpurl="../ticket/operationTicket_Electric_red.jsp?jhlb="+jhlb+"&jhid="+jhid;//��ӹ���Ʊ
		}
		else//Զ����ҵ ��ɫ
		{
			gzpurl="../ticket/operationTicket_Electric_black.jsp?jhlb="+jhlb+"&jhid="+jhid;//��ӹ���Ʊ
			gzpXx="../ticket/bds_black_look.jsp?jhlb="+jhlb+"&id=";//�鿴����Ʊ
			//gzpXx="../ticket/bds_black_look.jsp";//�鿴����Ʊ
		    gzpDel="../ticket/gzp_Bds_blackDel.jsp?jhlb="+jhlb+"&jhid="+jhid+"&id=";//ɾ������Ʊ
		}
	}
	 	 var zt =function (value)
 	 {
 	 	if(value=="0")
 	 	{
 	 	  return '���ϱ�';
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
 	 	else if(value=="10")
 	 	{
 	 		return '���˻�';
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
     	//��Ⱦ����html����
 	 var renderXiangxi =function(value)
 	 {
 	     
 	     return '<a href="'+gzpXx+value+'">��ϸ</a>';
 	     
 	 };
 	 var renderDel =function(value)
 	 {
 	     return '<a  href="'+gzpDel+value+'">ɾ��</a>';
 	 };
 	  	 var renderSb =function(value)
 	 {
 	     return '<a  href="'+gzpSb+value+'">�ϱ�</a>';
 	 };
 
    //����Grid��ͷ
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        //new Ext.grid.RowNumberer(),
        
        {header:'���',dataIndex:'xh',width:40,fixed:true},
         {header:'��λ',dataIndex:'dwmc',width:70,sortable:true},
        {header:'��բƱ��',dataIndex:'gzph',width:70,sortable:true},
        {header:'��ҵĿ��',dataIndex:'ZYMD',width:60,sortable:true},
        {header:'��ҵ����',dataIndex:'ZYGJ',width:60,sortable:true}, 
        {header:'��ʼʱ��',dataIndex:'YXQS',width:60,sortable:true},
        {header:'����ʱ��',dataIndex:'YXQZ',width:60,sortable:true},
        {header:'��բ��',dataIndex:'DZZ',width:60,sortable:true}, 
        {header:'ǩ����ǩ��',dataIndex:'QFRQZ',width:60,sortable:true},
         {header:'����Ա',dataIndex:'DDSHY',width:60,sortable:true},
        {header:'���ʱ��',dataIndex:'SPSJ',width:60,sortable:true},
        {header:'״̬',dataIndex:'gzpzt',width:60,renderer:zt,sortable:true,hidden:true},
       // {header:'������',dataIndex:'fzr',width:60,sortable:true},
        {header:'�ϱ�',dataIndex:'gzpid',width:60,renderer:renderSb,fixed:true,hidden:true},
        {header:'����',dataIndex:'gzpid',width:60,renderer:renderXiangxi,fixed:true},
        {header:'ɾ��',dataIndex:'gzpid',width:60,renderer:renderDel,fixed:true}
    ]);
   
    
    var planRecord = Ext.data.Record.create([
    	{name:'gzpid',type:'int'},
    	{name:'xh',type:'int'},
    	{name:'gzph',type:'string'},
    	{name:'dwmc',type:'string'},
    	{name:'ZYMD',type:'string'},
    	{name:'ZYGJ',type:'string'},
    	{name:'YXQS',type:'string'},
    	{name:'YXQZ',type:'string'},
    	{name:'ZYCX',type:'string'},
    	{name:'DDSHY',type:'string'},
    	{name:'SPSJ',type:'string'},
    	{name:'DZZ',type:'string'},
    	{name:'DZZQZ',type:'string'},
    	{name:'QFRQZ',type:'string'},
    	{name:'gzpzt',type:'string'}
    	]);
    	
    
    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'dzzysq_json.jsp?jhid='+jhid+'&jhlb='+jhlb+'&dwlb='+dwlb+'&gqid='+gqid}),      
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
        //title: '����Ʊ����',
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
        }),
        
        //��Grid���Ϸ���Ӱ�ť
        
        tbar: new Ext.Toolbar({ 
        	items:[ 
              { 
                    id:'buttonA',
                    pressed: true,
                    text:"��ӵ�բ��ҵƱ",
                    handler: function() {
                    	window.location.href=gzpurl;
                    	},
                    scope:this 
                }
             ] 
        }) 
        
    });
 
     Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
 

    
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simple_Grid]
	}); 

});
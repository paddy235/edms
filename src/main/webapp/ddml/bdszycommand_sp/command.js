Ext.onReady(function() {
	
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    
   
   // var bds_mlh=document.getElementById("bds_mlh").value;
    var jhid=document.getElementById("jhid").value;
    var ddtdm=document.getElementById("ddtdm").value;//���̨����
    var userDwid=document.getElementById("userDwid").value;//���̨����
    var username=document.getElementById("username").value;//���̨����
    //alert("zcvzxvc");
    ddtdm=userDwid;
    var kpmc="";
    //alert(bds_mlh);
      var sql_bds_GDB="select distinct zy.bdb,zy.bdb from z_yxgl_cmd_jcwzy zy where ltype='0'";//

 	var planRecord_bds_GDB = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_bds_GDB = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_bds_GDB}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_bds_GDB)
    });
     store_bds_GDB.load(); 
 	//��Ⱦ����html����
 	 var renderXiangxi =function(value)
 	 {
 	     return '<a href="aa.jsp?id='+value+'">��ϸ</a>';
 	 };
 	 var renderDel =function(value)
 	 {
 	     return '<a  href="zyjhsq_del.jsp?id='+value+'">ɾ��</a>';
 	 };
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
 	 		return '<div  style="color:blue;">������</div>';
 	 	}
 	 		else if(value=="3")
 	 	{
 	 		return '<div  style="color:red;">ʩ����</div>';
 	 	}
 	 			else if(value=="4")
 	 	{
 	 		return '<div  style="color:green;">�ȴ�����</div>';
 	 	}else if(value=="5")
 	 	{
 	 		return '<div  style="color:green;">�����</div>';
 	 	}
 	 	else
 	 	{
 	 		 return '����';
 	 	}
 	 }
    //����Grid��ͷ
    
    
    	
    
	///���������
       //������Ƭ
     var url_dwid='0';
    var sql="";
 	var store_czkp = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_czkp = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'look_card_json.jsp?dwid='+url_dwid}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },store_czkp)
    });
   store_czkp.load();
   
   ///----���λ�����-----------
    var sql="select gqdm,gqmc from J_GYJC_GQZD where jglbdm='2' and ddtdm=\'"+ddtdm+"\'";//
    //var sql="select gqdm,gqmc from J_GYJC_GQZD where  ddtdm=\'"+ddtdm+"\'";//
    
 	var planRecord_bds = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_bds = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_bds)
    });
     store_bds.load();
    ///-----���λ������--------------------
    
   var sql_gq="select gqdm,gqmc from J_GYJC_GQZD where (jglbdm='2') and ddtdm=\'"+ddtdm+"\'";//
   //var sql_gq="select gqdm,gqmc from J_GYJC_GQZD where ddtdm=\'"+ddtdm+"\'";//
   
 	var planRecord_gq = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_gq = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_gq}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_gq)
    });
     store_gq.load();
  ///-----����ս��--------------------
    
   var sql_qjzc="select * from J_GYJC_QJZCZD";//

 	var planRecord_qjzc = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_qjzc = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_qjzc}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_qjzc)
    });
     store_qjzc.load();
    //���������,ָ����ģ�ͣ��ֿ⣬ѡ��ģ��(Ĭ����ѡ��ģ��)
    
   	//Grid�ϴ����¼�
   	//grid.addListener('cellClick',cellClick);
    //��ʾ��html��idΪcontainer�Ĳ���
    //grid.render();//��Ⱦ���
     Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	 // form start
 
    
               var sm = new Ext.grid.CheckboxSelectionModel();
                   var columns_zy = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        //new Ext.grid.RowNumberer(),
        sm, 
        {header:'���',dataIndex:'xh',width:40,fixed:true},
        {header:'�����',dataIndex:'mlh',width:70,sortable:true},
        {header:'���λ',dataIndex:'gqmc',width:60,sortable:true},
        {header:'����ʱ��',dataIndex:'flsj',width:60,sortable:true},
        {header:'�����',dataIndex:'GDB',width:60,hidden:false},
         {header:'��ҵ����',dataIndex:'zybs',width:60},
        {header:'��������',dataIndex:'mlnr',width:60},
        {header:'Ҫ�����ʱ��',dataIndex:'yqwcsj',width:60,sortable:true},
        {header:'��׼ʱ��',dataIndex:'pzsj',width:60,sortable:true},
        //{header:'����ʱ��',dataIndex:'xlsj',width:60,sortable:true},
         {header:'������',dataIndex:'flr',width:60,sortable:true},
         {header:'������',dataIndex:'slr',width:60,sortable:true},
        {header:'������',dataIndex:'xlr',width:60,sortable:true},
         {header:'״̬',dataIndex:'mlzt',width:60,renderer:zt,sortable:true,hidden:true}
       // {header:'������',dataIndex:'fzr',width:60,sortable:true}
       // {header:'��ϸ',dataIndex:'id',width:60,renderer:renderXiangxi,fixed:true},
        //{header:'ɾ��',dataIndex:'id',width:60,renderer:renderDel,fixed:true}
    ]);
   
    
    var planRecord_zy = Ext.data.Record.create([
    	{name:'commdid',type:'int'},
    	{name:'xh',type:'int'},
    	{name:'dwid',type:'string'},
    	{name:'dwmc',type:'string'},
    	{name:'jhid',type:'string'},
    	{name:'mlh',type:'string'},
    	{name:'sldwid',type:'string'},
    	{name:'sldwmc',type:'string'},
    	{name:'flsj',type:'string'},
    	{name:'yqwcsj',type:'string'},
    	{name:'mlnr',type:'string'},
    	{name:'tdqd',type:'string'},
    	{name:'pzsj',type:'string'},
    	{name:'xlsj',type:'string'},
    	{name:'slsj',type:'string'},
    	{name:'flr',type:'string'},
    	{name:'slr',type:'string'},
    	{name:'xlr',type:'string'},
    	{name:'mlbz',type:'string'},
    	{name:'mlzt',type:'string'},
    	{name:'gqmc',type:'string'},
    	{name:'xlnr',type:'string'},
    	{name:'GDB',type:'string'},
    	{name:'zybs',type:'string'}
    	]);
    	
  
    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store_zy = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'command_json.jsp?jhid='+jhid}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_zy)
    });
	store_zy.load({params:{start:0, limit:10}});
 
 
   
    //���������,ָ����ģ�ͣ��ֿ⣬ѡ��ģ��(Ĭ����ѡ��ģ��)
    var simple_Grid_zy = new Ext.grid.GridPanel({
        //el:ָ��htmlԪ��������ʾ��grid
        //el: 'grid3', 
        store:store_zy,
    	cm: columns_zy,
    	sm:sm,
        title: '�����ͣ����ҵ�����¼����',
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
            store: store_zy,
            displayInfo: true,
            displayMsg: '�� {0} ���� {1} ��,�� {2} ��',
            emptyMsg: "�޼�¼"
        })
    });
       
       
       
       
     
     	var simpleFormZy_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '�����ͣ����ҵ�����¼����',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 800,
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
                                   items : [{xtype:'hidden',name:'commdid'},{xtype:'hidden',name:'sldwmc'},{xtype:'hidden',name:'jhid'},{xtype:'hidden',name:'kph'}
                                   				,{
                                                        columnWidth :.33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '�����',
                                                                             name : 'mlh',
                                                                             id:'txt_mlh',
                                                                              disabled:true,
                                                                             //allowBlank:false,//������Ϊ�� 
                                                                             blankText:"����Ϊ�գ�����д",
                                                                             anchor : '90%'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 }, {
                                                        columnWidth :.33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store :store_gq,
                                                               valueField : "value",// ��������ѡ����ֵ
                                                               displayField : "text",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               blankText : 'ѡ�����λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : 'ѡ�����λ',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'sldwid',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '���λ',// �ؼ��ı�����ѧ��
                                                                 allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               name : 'sldwid',// �ٴ����ѣ�nameֻ�������б������
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 },{
                                                        columnWidth :.33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : 'ʱ��',
                                                                             name : 'flsj',
                                                                             anchor : '90%',
                                                                             disabled:false,
                                                                              allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd'})}}
                                                                      }]
                                                 }]

                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{
                                                        columnWidth :.33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��ҵ����',
                                                                             name : 'zybs',
                                                                             //
                                                                             //allowBlank:false,//������Ϊ�� 
                                                                             blankText:"����Ϊ�գ�����д",
                                                                             anchor : '90%'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 },{
                                                        columnWidth :.33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '������',
                                                                             name : 'flr',
                                                                             value:username,
                                                                             id:'txt_flr',
                                                                            //  allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                                             anchor : '90%'
                                                                           //  format:'Y-m-d'
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth :.33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��׼ʱ��',
                                                                             name : 'pzsj',
                                                                             anchor : '90%',
                                                                             
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                      }]
                                                 }]
                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{
                                                        columnWidth :.33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store : store_bds_GDB,
                                                               valueField : "value",// ��������ѡ����ֵ
                                                               displayField : "value",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               blankText : 'ѡ�񹩵��',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : 'ѡ�񹩵��',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'GDB',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : true,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '�����',// �ؼ��ı�����ѧ��
                                                               name : 'GDB',// �ٴ����ѣ�nameֻ�������б������
                                                               id:'txt_phdw',
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 },{
                                                        columnWidth :.33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : 'Ҫ�����ʱ��',
                                                                             name : 'yqwcsj',
                                                                             anchor : '90%',
                                                                            // allowBlank:false,//������Ϊ�� 
                                                                             allowBlank:true,//������Ϊ�� 
                                                                             blankText:"����Ϊ�գ�����д",
                                                                             blankText:"��ѡ��ʱ��",
                                                                             //
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                      }]
                                                 },{
                                                        columnWidth :.33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '���ʱ��',
                                                                             name : 'wcsj',
                                                                             
                                                                             anchor : '90%',
                                                                            listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                      }]
                                                 }]
                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{
                                                        columnWidth : 1.06,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textarea',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��������',
                                                                             name : 'mlnr',
                                                                             anchor : '90%',
                                                                             height:'40'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 }]
                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{
                                                        columnWidth : 1.06,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textarea',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��ע',
                                                                             name : 'mlbz',
                                                                             anchor : '90%',
                                                                             height:'40'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 }]
                            },{
                                   layout : 'column',// columnlayout
                                   border : false,// û�б߿�
                                   labelSeparator : '��',// ����ķָ���������������ð�Ŵ���Ӣ�ĵ�ð�ţ�labelSeparator:'��'����
                                   // coulmnLayout��Ŀؼ���������items��
                                   items : [{xtype:'hidden',name:'id'}
                                   				,{
                                                        columnWidth :.33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '������',
                                                                             name : 'slr',
                                                                              
                                                                             anchor : '90%'
                                                                           //  format:'Y-m-d'
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth :.33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '����ʱ��',
                                                                             name : 'slsj',
                                                                              
                                                                             anchor : '90%',
                                                                            listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                      }]
                                                 },{
                                                        columnWidth :.33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '������',
                                                                             name : 'xlr',
                                                                             
                                                                             anchor : '90%'
                                                                           //  format:'Y-m-d'
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 }]
 
                            },{
                                   layout : 'column',// columnlayout
                                   border : false,// û�б߿�
                                   labelSeparator : '��',// ����ķָ���������������ð�Ŵ���Ӣ�ĵ�ð�ţ�labelSeparator:'��'����
                                   // coulmnLayout��Ŀؼ���������items��
                                   items : [{
                                                        columnWidth :.33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��������',
                                                                             name : 'xlnr',
                                                                             id:'txt_xlnr',
                                                                               
                                                                             anchor : '90%'
                                                                           //  format:'Y-m-d'
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 }]}
                           
                            ],
              // Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
              buttons : [{
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
                                    text : '���',
                                    
                                   handler : function() {
                                   var conn = new Ext.data.Connection();    
									         conn.request({    
									           url : '../../look_card_json.jsp?dwid='+ddtdm+'&LTYPE=1',  
									           method: 'GET',    
									           callback: function(options, success, response) { 
									           if(success){    
									           var jsonObj = Ext.util.JSON.decode(response.responseText);   
                                     var values=GetGridSelectVelue(simple_Grid_zy); 
                                          if (!simpleFormZy_Save.form.isValid()) {return };
                                   		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                                          if (simpleFormZy_Save.form.isValid()) {
                                                 // ���水ťҪ���ľ�������basicform�Ŀͻ�����֤����֤ͨ���������øð�ť״̬Ϊdisable����ֹ2���ύ��Ȼ�����simpleForm.form.doAction�����ύ����
                                                 //this.disabled = true;
                                                 // doAction�����ĵ�һ��������submit������˼�Ǳ�ʾִ�е����ύ�������ύ�ĺ�̨ҳ����test.jsp��url:'test.asp'�����ύ��ʽ��post��method:'post'����û�������ύ������params:''��
                                                 simpleFormZy_Save.form.doAction('submit', {
                                                 					  waitMsg:'������,���Ժ�...',  
                                                                      url : 'save.jsp?jhid='+jhid,
                                                                      method : 'post',
                                                                       params :{mlh:jsonObj.msg},
                                                                      // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                                                      // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                                                      success : function(form, action) {
                                                                             // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                                                             //Ext.Msg.alert('����',action.result.data);
                                                                      		Ext.Msg.alert('��Ϣ',action.result.msg);
                                                                      		//simpleForm_Query.form.reset();
                                                                      		// window.location.href='zyjhsq.jsp';
                                                                      		simpleFormZy_Save.collapse();
                                                                      		simple_Grid_zy.getStore().reload();
                                                                      	
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
   } }
         }); 
                                   }
                            },{
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
                                    text : '�޸�',
                                    
                                   handler : function() {
                                          if (!simpleFormZy_Save.form.isValid()) {return };
                                   		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                                          if (simpleFormZy_Save.form.isValid()) {
                                                 // ���水ťҪ���ľ�������basicform�Ŀͻ�����֤����֤ͨ���������øð�ť״̬Ϊdisable����ֹ2���ύ��Ȼ�����simpleForm.form.doAction�����ύ����
                                                 //this.disabled = true;
                                                 // doAction�����ĵ�һ��������submit������˼�Ǳ�ʾִ�е����ύ�������ύ�ĺ�̨ҳ����test.jsp��url:'test.asp'�����ύ��ʽ��post��method:'post'����û�������ύ������params:''��
                                                 simpleFormZy_Save.form.doAction('submit', {
                                                 					  waitMsg:'������,���Ժ�...',  
                                                                      url : 'zy_update.jsp?jhid='+jhid,
                                                                      method : 'post',
                                                                      params : '',
                                                                      // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                                                      // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                                                      success : function(form, action) {
                                                                             // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                                                             //Ext.Msg.alert('����',action.result.data);
                                                                      		Ext.Msg.alert('��Ϣ',action.result.msg);
                                                                      		//simpleForm_Query.form.reset();
                                                                      		// window.location.href='zyjhsq.jsp';
                                                                      		simpleFormZy_Save.collapse();
                                                                      		simple_Grid_zy.getStore().reload();
                                                                      	
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

                                   // ȡ����ť���Ǽ򵥵�resetһ��form�Ŀؼ�
                                   text : '����',
                                   handler : function() {
                                          simpleFormZy_Save.form.reset();
                                          //simpleForm_Query.collapse();
                                         // window.location.href="";
                                          //window.location.href='zyjhsqAdd.jsp';
                                   }
                            }, {
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
                                    text : '����',
                                    disabledClass:'x-item-disabled',
                                   handler : function() {
                                            var conn = new Ext.data.Connection();    
									         conn.request({    
									           url : '../../look_card_json.jsp?dwid='+ddtdm+'&LTYPE=1',  
									           method: 'GET',    
									           callback: function(options, success, response) { 
									           if(success){    
									           var jsonObj = Ext.util.JSON.decode(response.responseText);   
                                     var values=GetGridSelectVelue(simple_Grid_zy); 
                                          if (!simpleFormZy_Save.form.isValid()) {return };
                                          
                                    if (simpleFormZy_Save.form.isValid()) {
                                                 // ���水ťҪ���ľ�������basicform�Ŀͻ�����֤����֤ͨ���������øð�ť״̬Ϊdisable����ֹ2���ύ��Ȼ�����simpleForm.form.doAction�����ύ����
                                                 //this.disabled = true;
                                                 // doAction�����ĵ�һ��������submit������˼�Ǳ�ʾִ�е����ύ�������ύ�ĺ�̨ҳ����test.jsp��url:'test.asp'�����ύ��ʽ��post��method:'post'����û�������ύ������params:''��
                                                 simpleFormZy_Save.form.doAction('submit', {
                                                 					  waitMsg:'������,���Ժ�...',  
                                                                      url : 'zy_sp.jsp?ddtdm='+ddtdm,
                                                                      method : 'post',
                                                                      params :{values:values,mlh:jsonObj.msg},
                                                                      // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                                                      // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                                                      success : function(form, action) {
                                                                             // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                                                             //Ext.Msg.alert('����',action.result.data);
                                                                      		Ext.Msg.alert('��Ϣ',action.result.msg);
                                                                      		//simpleForm_Query.form.reset();
                                                                      			simpleFormZy_Save.collapse();
                                                                      		simple_Grid_zy.getStore().reload();
                                                                      		
                                                                      },
                                                                      // ����failure��������������ͨѶ���������ʱ����ʾ������Ϣ��
                                                                      failure : function() {
                                                                             Ext.Msg.alert('����', '��ҵ��������ʧ�ܣ�');
                                                                             this.disabled = false;
                                                                      }
                                                               });
                                          } }   
           } 
         }); 
                                          // �����form����ǰ���ϰ취�ύ��������formpanel�Ķ����м���һ�����ã�
                                          // onSubmit: Ext.emptyFn,
                                          // submit: function() {
                                          // this.getEl().dom.submit();}
                                          // ��һ�����õ�Ŀ����ȡ��formpanel��Ĭ���ύ�������ڶ����������µ��ύ��ʽΪ�ɷ�ʽ�ύ��

                                   }
                            }, {
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
                                    text : 'ɾ��',
                                    disabledClass:'x-item-disabled',
                                   handler : function() {
                                          if (!simpleFormZy_Save.form.isValid()) {return };
                                   		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                                          if (simpleFormZy_Save.form.isValid()) {
                                                 // ���水ťҪ���ľ�������basicform�Ŀͻ�����֤����֤ͨ���������øð�ť״̬Ϊdisable����ֹ2���ύ��Ȼ�����simpleForm.form.doAction�����ύ����
                                                 //this.disabled = true;
                                                 // doAction�����ĵ�һ��������submit������˼�Ǳ�ʾִ�е����ύ�������ύ�ĺ�̨ҳ����test.jsp��url:'test.asp'�����ύ��ʽ��post��method:'post'����û�������ύ������params:''��
                                                 simpleFormZy_Save.form.doAction('submit', {
                                                 					  waitMsg:'ɾ����,���Ժ�...',  
                                                                      url : 'zy_del.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                                                      // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                                                      success : function(form, action) {
                                                                             // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                                                             //Ext.Msg.alert('����',action.result.data);
                                                                      		//Ext.Msg.alert('��Ϣ',action.result.msg);
                                                                      		//simpleForm_Query.form.reset();
                                                                      		simpleFormZy_Save.collapse();
                                                                      		simple_Grid_zy.getStore().reload();
                                                                      		
                                                                      },
                                                                      // ����failure��������������ͨѶ���������ʱ����ʾ������Ϣ��
                                                                      failure : function() {
                                                                             Ext.Msg.alert('����', 'ɾ��ʧ�ܣ�');
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
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
                                    text : '�������',
                                    disabledClass:'x-item-disabled',
                                   handler : function() {
                                  
                                          if (!simpleFormZy_Save.form.isValid()) {return };
                                   		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                                          if (simpleFormZy_Save.form.isValid()) {
                                                 // ���水ťҪ���ľ�������basicform�Ŀͻ�����֤����֤ͨ���������øð�ť״̬Ϊdisable����ֹ2���ύ��Ȼ�����simpleForm.form.doAction�����ύ����
                                                 //this.disabled = true;
                                                 // doAction�����ĵ�һ��������submit������˼�Ǳ�ʾִ�е����ύ�������ύ�ĺ�̨ҳ����test.jsp��url:'test.asp'�����ύ��ʽ��post��method:'post'����û�������ύ������params:''��
                                                 simpleFormZy_Save.form.doAction('submit', {
                                                 					  waitMsg:'��ȡ��,���Ժ�...',  
                                                                      url : 'zy_zx.jsp?jhid='+jhid,
                                                                      method : 'post',
                                                                      params : '',
                                                                      // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                                                      // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                                                      success : function(form, action) {
                                                                             // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                                                             //Ext.Msg.alert('����',action.result.data);
                                                                      		//Ext.Msg.alert('��Ϣ',action.result.msg);
                                                                      		//simpleForm_Query.form.reset();
                                                                      		 simpleFormZy_Save.collapse();
                                                                      		simple_Grid_zy.getStore().reload();
                                                                      		 
                                                                      },
                                                                      // ����failure��������������ͨѶ���������ʱ����ʾ������Ϣ��
                                                                      failure : function() {
                                                                             Ext.Msg.alert('����', '��ȡʧ�ܣ�');
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
                            }]
       });
     
     simpleFormZy_Save.expand();
     simpleFormZy_Save.buttons[0].setVisible(true);
     simpleFormZy_Save.buttons[1].setVisible(true);
     simpleFormZy_Save.buttons[2].setVisible(false);
     simpleFormZy_Save.buttons[3].setVisible(false);  
       simpleFormZy_Save.buttons[4].setVisible(true);  
      simpleFormZy_Save.buttons[5].setVisible(false);  
     
     
         //Grid�ϴ����¼�
    simple_Grid_zy.addListener('rowclick', function(simple_Grid_zy,rowIndex,event){
    	// simpleForm_Query.collapse();
    	 simpleFormZy_Save.expand();
    	
    	var record=simple_Grid_zy.getStore().getAt(rowIndex);
    		simpleFormZy_Save.getForm().loadRecord(record);
    		return;
    	//alert(record.get('mlzt'));
    	//alert(rowIndex);
    	//alert(record.get('GDB')+' '+record.get('jhh')+' '+record.get('dwid'));
    	 if(record.get('mlzt')=='2'||record.get('mlzt')=='3')
    	 {
    	     	simpleFormZy_Save.buttons[2].setVisible(false);
    	simpleFormZy_Save.buttons[3].setVisible(false);
        simpleFormZy_Save.buttons[0].setVisible(false);
        simpleFormZy_Save.buttons[4].setVisible(false); 
        simpleFormZy_Save.buttons[1].setVisible(false); 
         simpleFormZy_Save.buttons[5].setVisible(false);  
    	 }
    	 else if(record.get('mlzt')=='4')
    	 { simpleFormZy_Save.buttons[5].setVisible(true); 
    	 simpleFormZy_Save.buttons[2].setVisible(false);
    	simpleFormZy_Save.buttons[3].setVisible(false);
        simpleFormZy_Save.buttons[0].setVisible(false);
        simpleFormZy_Save.buttons[4].setVisible(false); 
        simpleFormZy_Save.buttons[1].setVisible(false); 
    	 }
    	 else
    	 {
    	simpleFormZy_Save.buttons[2].setVisible(true);
    	simpleFormZy_Save.buttons[3].setVisible(true);
        simpleFormZy_Save.buttons[0].setVisible(false);
        simpleFormZy_Save.buttons[1].setVisible(true);
        simpleFormZy_Save.buttons[4].setVisible(true); 
        simpleFormZy_Save.buttons[5].setVisible(false); 
         // Ext.getCmp("txt_flr").setValue(username);
        }
    
    		
    });	
     
     kpnr="";
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleFormZy_Save,simple_Grid_zy]
	});
});

 
  
       function GetGridSelectVelue(o)
       {  
				if (o.getSelectionModel().hasSelection()){
				     var records=o.getSelectionModel().getSelections();
				     var mycars="";
					  for(var i=0;i<records.length;i++){
					  
					  if(records[i].data.mlzt=='1')
					  {
					      mycars=mycars+records[i].data.commdid+"|";  
					      
					  }
					  } 
					 
					  return mycars;
					  }else
					  { 
					    Ext.Msg.alert('��ʾ', '��ѡ��Ҫ�����ļ�¼!');
					  }
      }
Ext.onReady(function() {
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    //--�õ���ǰ�û���dwid-***
    userDwid=document.getElementById("userDwid").value;
    ddtdm=document.getElementById("ddtdm").value;
    //jhid=document.getElementById("jhid").value;
    //alert(userDwid);
    
   	
   	
    
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
 	 	if (value=='-1') {return '������';}
  		if (value=='0')  {return '����ƻ�';}
  		if (value=='1')  {return '<div  style="color:blue;">��������ϱ�</div>';}
  		if (value=='2')  {return '<div  style="color:B08100;">���������</div>';}
  		if (value=='3')  {return '<div  style="color:FF8100;">�������������</div>';}
  		if (value=='4')  {return '<div  style="color:red;">��ʩ����������</div>';}
		if (value=='5')  {return '<div  style="color:red;">��ֵ����������</div>';}
  	    if(value=="6")	 {return '<div  style="color:555800;">���鵵</div>';}	
		if(value=="9")	 {return '<div  style="color:green;">�Ѿ��鵵</div>';}
 	 }
 
    //����Grid��ͷ
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        //new Ext.grid.RowNumberer(),
        
        {header:'���',dataIndex:'xh',width:40,fixed:true},
        {header:'��λ����',dataIndex:'dwmc',width:70,sortable:true,fixed:true},
        {header:'�ʱ��',dataIndex:'tbsj',width:120,sortable:true,fixed:true},
        {header:'��ҵ����',dataIndex:'jhsj',width:80,sortable:true,fixed:true},
        {header:'�߱�',dataIndex:'xlm',width:60,fixed:true},
        {header:'���',dataIndex:'xingb',width:60,fixed:true},
        {header:'�ƻ����',dataIndex:'jhlb',width:60,sortable:true,fixed:true},

        {header:'��ϵ�λ',dataIndex:'phdw',width:60,sortable:true},
        {header:'ά����Ŀ',dataIndex:'wxxm',width:120,sortable:true},
		{header:'��ҵ�ص�',dataIndex:'sgdd',width:120,sortable:true},
        {header:'�����쵼��',dataIndex:'fzr',width:60,sortable:true},
		{header:'״̬',dataIndex:'zt',width:60,renderer:zt,sortable:true}
       // {header:'ɾ��',dataIndex:'id',width:60,renderer:renderDel,fixed:true}
    ]);

    //�������ݵĶ�Ӧ
    var planRecord = Ext.data.Record.create([
    		{name:'id',type:'int'},
    	{name:'xh',type:'int'},
    	{name:'dwid',type:'string'},
    	{name:'jhh',type:'string'},
    	{name:'jhsj',type:'string'},
    	{name:'xianb',type:'string'},
    	{name:'xingb',type:'string'},
    	{name:'jhlb',type:'string'},
    	{name:'sgdd',type:'string'},
    	{name:'ydsj',type:'string'},
    	{name:'wxxm',type:'string'},
    	{name:'phdw',type:'string'},
    	{name:'fzr',type:'string'},
    	{name:'jhlx',type:'string'},
    	{name:'tbsj',type:'string'},
    	{name:'nrjyq',type:'string'},
    	{name:'bz',type:'string'},
    	{name:'spr',type:'string'},
    	{name:'zt',type:'string'},
    	{name:'yxfw',type:'string'},
    	{name:'mlh',type:'string'},
    	{name:'ylz',type:'string'},
    	{name:'fsfw',type:'string'},
    	{name:'jhnr',type:'string'},
    	{name:'dwmc',type:'string'},
    	{name:'xlm',type:'string'},
    	{name:'sxmc',type:'string'},//�ƻ����͵�����
    	{name:'gdcnr',type:'string'},
    	{name:'sjc',type:'string'}
    	
    	]);
    	
    
    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ����������� 
        proxy: new Ext.data.HttpProxy({url:'zyjhsgdsp_json.jsp?type=sp'}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord)
    });
	store.load({params:{start:0, limit:10}});
	
	
	//////-------------------------�����б������ݰ�------------------------------------
	
	/*--Ҫ��վ---*/
	 var sql_ylz="select   distinct(ylz),t.dwid from z_yxgl_zyjh t where dwid=\'"+userDwid+"\'";
    
 	var planRecord_ylz = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
 	var store_ylz = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_ylz}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_ylz)
    });
   store_ylz.load();
   /*--�ƻ�����---*/
   	 var sql_jhlx="select * from J_GDGY_SXZD where substr(sxid,0,3)=\'006\' and sxid!=\'006000\'";
    
 	var planRecord_jhlx = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
 	var store_jhlx = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_jhlx+'&all=all'}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_jhlx)
    });
   store_jhlx.load(); 
/*--�߱�---*/
   	 var sql_xb="select * from J_gyjc_xlzd";
    
 	var planRecord_xb = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
 	var store_xb = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_xb+'&all=all'}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_xb)
    });
   store_xb.load();
      /*--��ϵ�λ---*/
   	 var sql_phdw="select   distinct(phdw),t.dwid from z_yxgl_zyjh t where dwid=\'"+userDwid+"\'";
    
 	var planRecord_phdw = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
 	var store_phdw = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_phdw}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_phdw)
    });
   store_phdw.load();
   //----------------*********************************
	
   
    
	
	
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
        //���������,ָ����ģ�ͣ��ֿ⣬ѡ��ģ��(Ĭ����ѡ��ģ��)

   	//Grid�ϴ����¼�
   	//grid.addListener('cellClick',cellClick);
    //��ʾ��html��idΪcontainer�Ĳ���
    //grid.render();//��Ⱦ���
     Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	 // form start

   
   
   
   //Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	    //��ӹ������Ϣ

	 
	 // form start
	var simpleForm_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : 'ʩ����������',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 800,
              collapsible:true,
              titleCollapse:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              labelWidth : 70,
              
              
              items : [{
                                   layout : 'column',// columnlayout
                                   border : false,// û�б߿�
                                   labelSeparator : '��',// ����ķָ���������������ð�Ŵ���Ӣ�ĵ�ð�ţ�labelSeparator:'��'����
                                   // coulmnLayout��Ŀؼ���������items��
                                   items : [{xtype:'hidden',name:'id'},{xtype:'hidden',name:'dwid'},{xtype:'hidden',name:'jhh',value:'0'},{xtype:'hidden',name:'mlh',value:'0'}
                                   				,{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��λ',
                                                                             name : 'dwmc',
                                                                             //disabled:true,
                                                                             anchor : '90%'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 },{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '�ʱ��',
                                                                             name : 'tbsj',
                                                                             anchor : '90%',
																			 readOnly : true,
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                            //format:'Y-m-d H:i'
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
																			xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '���',
                                                                             name : 'xingb',
																			 readOnly : true,
                                                                             anchor : '90%',
																			 allowBlank : false
                                                                           
                                                        }]
                                                 },{	columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store :store_xb,
                                                               valueField : "value",// ��������ѡ����ֵ
                                                               displayField : "text",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               forceSelection : true,// ����ѡ��һ��ѡ��
                                                               blankText : '��ѡ���߱�',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '��ѡ���߱�',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'xianb',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '�߱�',// �ؼ��ı�����ѧ��
                                                               name : 'xianb',// �ٴ����ѣ�nameֻ�������б������
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 }]

                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{			columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store : new Ext.data.SimpleStore({
                                                                      // ͨ��һ�����鶨����returnValue��displayText�����ֶΡ�retrunValue�ֶ�ָ�����ύ����̨��ֵ��displayText�ֶ�ָ��������������ʾ��ѡ��ֵ��
                                                                      fields : ["returnValue", "displayText"],
                                                                      // �����˼�������.ÿ�����ݶ��Ǹ���fiedls�Ķ�������ɵģ��������һ��ֵ����retrunValue��ֵ���ڶ���ֵ����displayText��ֵ������[1,'Сѧ']���ͱ�ʾretrunValue��1��displayText��Сѧ��
                                                                      data : [['�Ӵ���', '�Ӵ���'],['������·', '������·'],['�������', '�������'],['ǣ�����', 'ǣ�����'],['����', '����']]
                                                               }),
                                                               valueField : "returnValue",// ��������ѡ����ֵ
                                                               displayField : "displayText",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               forceSelection : true,// ����ѡ��һ��ѡ��
                                                               blankText : 'ѡ����ҵ���',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : 'ѡ����ҵ���',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'jhlb',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '�ƻ����',// �ؼ��ı�����ѧ��
                                                               name : 'jhlb',// �ٴ����ѣ�nameֻ�������б������
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 },{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store :store_jhlx,
                                                               valueField : "value",// ��������ѡ����ֵ
                                                               displayField : "text",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               blankText : 'ѡ��ƻ�����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : 'ѡ��ƻ�����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'jhlx',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '�ƻ�����',// �ؼ��ı�����ѧ��
                                                               name : 'jhlx',// �ٴ����ѣ�nameֻ�������б������
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 }, {
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
																 xtype : 'textfield',// �ؼ�������Ϊdatefield
																 fieldLabel : '��ҵ����',
																 name : 'jhsj',
																 anchor : '90%',
																 listeners: {"focus": function(){
																 WdatePicker({dateFmt:'yyyy-MM-dd'})}}
                                                         }]
                                                 },{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
																 xtype : 'field',// �ؼ�������Ϊdatefield
																 fieldLabel : '��ҵʱ��',
																 name : 'ydsj',
																 id:'txt_ydsj',
																
                                                                  anchor : '90%'
                                                                           
                                                          }]
                                                 }]
                            },  {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [ {
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store : store_phdw,
                                                               valueField : "value",// ��������ѡ����ֵ
                                                               displayField : "value",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               blankText : 'ѡ����ϵ�λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : 'ѡ����ϵ�λ',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'phdw',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : true,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '��ϵ�λ',// �ؼ��ı�����ѧ��
                                                               name : 'phdw',// �ٴ����ѣ�nameֻ�������б������
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 }, {
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '�����쵼��',
                                                                             name : 'fzr',
                                                                             anchor : '90%'
                                                                           //  format:'Y-m-d'
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },  {
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
														items : [{
                                                               xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store : store_ylz,
                                                               valueField : "value",// ��������ѡ����ֵ
                                                               displayField : "value",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               blankText : 'ѡ��Ҫ��վ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : 'ѡ��Ҫ��վ',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'ylz',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : true,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : 'Ҫ��վ',// �ؼ��ı�����ѧ��
                                                               name : 'ylz',// �ٴ����ѣ�nameֻ�������б������
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 } ,{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : 'ά����Ŀ',
                                                                             name : 'wxxm',
                                                                             anchor : '90%'
                                                                           //  format:'Y-m-d'
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 }]
                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{
                                                        columnWidth : 0.25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
																 xtype : 'field',
																 fieldLabel : '��ҵ�ص�',
																 name : 'sgdd',
																 anchor : '90%'
														  }]
                                                 }, {
                                                        columnWidth : 0.75,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��ҵ����',
                                                                             name : 'jhnr',
                                                                             anchor : '97%'
                                                                      }]
                                                 }]
                            },  {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : 'ͣ�緶Χ',
                                                                             name : 'nrjyq',
                                                                             anchor : '90%'
                                                                      }]
                                                 },{
                                                        columnWidth : .35,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '������Χ',
                                                                             name : 'fsfw',
                                                                             anchor : '90%'
                                                                      }]
                                                 },{
                                                        columnWidth : .4,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '���������',
                                                                             name : 'gdcnr',
                                                                             anchor : '95%'
                                                                      }]
                                                 }]
                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{
                                                        columnWidth : .99,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textarea',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��ע',
                                                                             name : 'bz',
                                                                             anchor : '98%',
                                                                             height:'40'
                                                                      }]
                                                 }]
                            }
                           
                            ],
              // Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
              buttons : [{
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
                                    text : '����',                                    
                                   handler : function() {
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                                          if (simpleForm_Save.form.isValid()) {
                                                 // ���水ťҪ���ľ�������basicform�Ŀͻ�����֤����֤ͨ���������øð�ť״̬Ϊdisable����ֹ2���ύ��Ȼ�����simpleForm.form.doAction�����ύ����
                                                 //this.disabled = true;
                                                 // doAction�����ĵ�һ��������submit������˼�Ǳ�ʾִ�е����ύ�������ύ�ĺ�̨ҳ����test.jsp��url:'test.asp'�����ύ��ʽ��post��method:'post'����û�������ύ������params:''��
                                                 simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'������,���Ժ�...',  
                                                                      url : 'sgdsp.jsp',
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
                                                                      		simpleForm_Save.collapse();
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
                            },  {
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
                                   text : '����',                                    
                                   handler : function() {
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                                          if (simpleForm_Save.form.isValid()) {
                                                 // ���水ťҪ���ľ�������basicform�Ŀͻ�����֤����֤ͨ���������øð�ť״̬Ϊdisable����ֹ2���ύ��Ȼ�����simpleForm.form.doAction�����ύ����
                                                 //this.disabled = true;
                                                 // doAction�����ĵ�һ��������submit������˼�Ǳ�ʾִ�е����ύ�������ύ�ĺ�̨ҳ����test.jsp��url:'test.asp'�����ύ��ʽ��post��method:'post'����û�������ύ������params:''��
                                                 simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'������,���Ժ�...',  
                                                                      url : 'zf.jsp',
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
                                                                      		simpleForm_Save.collapse();
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
                            },  {
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
                                   text : '���ͣ�絥Ԫ',
                                   handler : function() {
                                        //var win;
                                        //win=null;
							      		tdqj();
								        
								        //alert(document.getElementById("id").value);
								        //simpleForm_AddGdb.getForm().setValues([{id: 'jhid',value:document.getElementById("id").value}]);

                                   }
                            }]
       });

	    
    
    //Grid�ϴ����¼�simple_sp_Grid
    simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
    	// simpleForm_Query.collapse();
    	 simpleForm_Save.expand();
    	//simpleForm_AddGdb.expand();
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	//alert(rowIndex);
    	//alert(record.get('id')+' '+record.get('jhh')+' '+record.get('dwid'));
    	//simpleForm_AddGdb.expand();
    	simpleForm_Save.getForm().loadRecord(record);
    	//alert(record.get('id'));
    	//simpleForm_AddGdb.getForm().setValues([{id: 'jhid',value:record.get('id')} ]);
    	simpleForm_Save.buttons[0].setVisible(true);
    	simpleForm_Save.buttons[1].setVisible(false);
    	simpleForm_Save.buttons[2].setVisible(false);
    });	
    

 
	

    
    var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		
		items: [simpleForm_Save,simple_Grid]
	});
    
    simpleForm_Save.collapse();
	//simpleForm_AddGdb.collapse();
	  simpleForm_Save.buttons[0].setVisible(false);
    simpleForm_Save.buttons[1].setVisible(false);
    simpleForm_Save.buttons[2].setVisible(false);
});


var win;
var userDwid;
var ddtdm;
var sql_tdqj;
var mark=0;
function tdqj()
    {//alert(document.getElementById("id").value);
   //win=null;
 if(mark==0){
mark=1;
    	       //--****-------------���������ݰ�-----------------******-
/*--�����Ӧ�ı����---*/
	var id='\'001\'';
	//alert(userDwid);
	 var sql="select gqdm,gqmc from J_GYJC_GQZD where ddtdm=\'"+userDwid+"\' and jglbdm=\'2\'";

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
   //*--------ͣ������---------------------*/
   var sql_tdqj="select * from J_GYJC_QJZCZD";
    	var planRecord_tdqj = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
 	var store_tdqj = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_tdqj}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_tdqj)
    });
   //store_tdqj.load();

   var column_sp =new  Ext.grid.ColumnModel([
         {header:'���',dataIndex:'xh',width:90,fixed:true},
          {header:'�����',dataIndex:'dwmc',width:90,fixed:true},
           {header:'ͣ�絥Ԫ',dataIndex:'tdqdmc',width:290}
    
    ]);
   
       //ͣ����������ݶ�Ӧ
      var planRecord_sp=Ext.data.Record.create([
      {name:'xh',type:'int'},
      {name:'tdqjid',type:'string'},
      {name:'dwmc',type:'string'},
      {name:'tdqdmc',type:'string'}
      ]);
      
              //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store_sp = new Ext.data.Store({
        //proxy�������Ǵ����������� 
        proxy: new Ext.data.HttpProxy({url:'tdqj_json.jsp'}),        
        //reader����������ν����������
        baseParams:{jhid:document.getElementById("id").value},
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_sp)
    });
    store_sp.load({params:{start:0, limit:3}});
  
    	     var simpleForm_AddGdb = new Ext.FormPanel({
              //renderTo : document.body,
     			
              labelAlign : 'left',
              //applyTo: 'hello-tabs',
              //title : '���ͣ������',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 580,
              collapsible:true,
              //titleCollapse:true,
              method:'POST',
              autoWidth:true,
              //autoScroll:true,
              frame : true,
              labelWidth : 70,
               items : [{
                                   layout : 'column',// columnlayout
                                   border : false,// û�б߿�
                                   labelSeparator : '��',// ����ķָ���������������ð�Ŵ���Ӣ�ĵ�ð�ţ�labelSeparator:'��'����
                                   // coulmnLayout��Ŀؼ���������items��
                                    items : [{xtype:'hidden',name:'tdqjid'},{xtype:'hidden',name:'tdqjmc',id:'txt_tdqjmc'}
                                    
                                    ,{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store :store_bds,
                                                               listeners:{
                                                               			select:function(combo,planRecord_bds,index){
                                                               				
                                                               				var value = planRecord_bds.get('value');
                                                               				//Ext.Msg.alert(value);   
                                                               			    sql_tdqj="select * from J_GYJC_QJZCZD where gqdm=\'"+value+"\' and sx=\'1\'";

                                                               			    var combo2 = Ext.getCmp('combo_tdqj'); 
                                                               			   //var combo2 = document.getElementsByName('tdqjmc'); 
                                                               			   //alert(combo2);
	                                                               		    combo2.enable();      
	                          											    combo2.reset();   
	                          											    //combo2.disable();
	                          											    //alert(sql_tdqj);
	                          										        combo2.store.proxy = new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_tdqj});
	                          										        combo2.store.load();
                                                               			}
                                                               			
                                                               },
                                                               valueField : "value",// ��������ѡ����ֵ
                                                               displayField : "text",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               forceSelection : true,// ����ѡ��һ��ѡ��
                                                               blankText : '��ѡ������',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '��ѡ������',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'dwmc',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '�����',// �ؼ��ı�����ѧ��
                                                               name : 'dwmc',// �ٴ����ѣ�nameֻ�������б������
                                                               id:'dwmc_id',
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 } ,{
                                                        columnWidth : .6,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store :store_tdqj,
                                                                listeners:{select:function(combo,planRecord_tdqj,index){
                                                               			
                                                               				var text = planRecord_tdqj.data.text;
                                                               				Ext.getCmp('txt_tdqjmc').setValue(text);
                                                               			}
                                                               			
                                                               },
                                                               valueField : "value",// ��������ѡ����ֵ
                                                               displayField : "text",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               forceSelection : true,// ����ѡ��һ��ѡ��
                                                               blankText : '��ѡ��ͣ�絥Ԫ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '��ѡ��ͣ�絥Ԫ',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'tdqdmc',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : 'ͣ�絥Ԫ',// �ؼ��ı�����ѧ��
                                                               name : 'tdqdmc',// �ٴ����ѣ�nameֻ�������б������
                                                               id:'combo_tdqj',
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 }
                                    
                                    
                                    ]
               }],
              // Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
              buttons : [{
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
                                    text : '���',
                                   handler : function() {
                                          if (!simpleForm_AddGdb.form.isValid()) {return };
                                           
                                   		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                                          if (simpleForm_AddGdb.form.isValid()) {
                                                 // ���水ťҪ���ľ�������basicform�Ŀͻ�����֤����֤ͨ���������øð�ť״̬Ϊdisable����ֹ2���ύ��Ȼ�����simpleForm.form.doAction�����ύ����
                                                 //this.disabled = true;
                                                 // doAction�����ĵ�һ��������submit������˼�Ǳ�ʾִ�е����ύ�������ύ�ĺ�̨ҳ����test.jsp��url:'test.asp'�����ύ��ʽ��post��method:'post'����û�������ύ������params:''��
                                                 simpleForm_AddGdb.form.doAction('submit', {
                                                 					  waitMsg:'������,���Ժ�...',  
                                                                      url : 'tdqj_save.jsp?jhid='+document.getElementById("id").value,
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
                                                                      		  // simpleForm_AddGdb.collapse();
																				//simpleForm_AddGdb.collapse();
                                                                      		simple_sp_Grid.getStore().reload();
                                                                      		 
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
                            },  {
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
                                    text : 'ɾ��',
                                   handler : function() {
                                          if (!simpleForm_AddGdb.form.isValid()) {return };
                                   		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                                          if (simpleForm_AddGdb.form.isValid()) {
                                                 // ���水ťҪ���ľ�������basicform�Ŀͻ�����֤����֤ͨ���������øð�ť״̬Ϊdisable����ֹ2���ύ��Ȼ�����simpleForm.form.doAction�����ύ����
                                                 //this.disabled = true;
                                                 // doAction�����ĵ�һ��������submit������˼�Ǳ�ʾִ�е����ύ�������ύ�ĺ�̨ҳ����test.jsp��url:'test.asp'�����ύ��ʽ��post��method:'post'����û�������ύ������params:''��
                                                 simpleForm_AddGdb.form.doAction('submit', {
                                                 					  waitMsg:'�޸���,���Ժ�...',  
                                                                      url : 'tdqj_del.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                                                      // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                                                      success : function(form, action) {
                                                                             // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                                                             //Ext.Msg.alert('����',action.result.data);
                                                                      		//Ext.Msg.alert('��Ϣ',action.result.msg);
                                                                      		//simpleForm_Query.form.reset();
                                                                      		Ext.Msg.alert('��Ϣ',action.result.msg);
                                                                      		simple_sp_Grid.getStore().reload();
                                                                      		
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
                            }]
    });
    //simpleForm_AddGdb.getForm().setValues([{id: 'jhid',value:document.getElementById("id").value}]);
    	     //ͣ������ı�ͷ
    
	
	
        var simple_sp_Grid = new Ext.grid.GridPanel({
        //el:ָ��htmlԪ��������ʾ��grid
        //el: 'grid3', 
        //applyTo: 'hello-grid',
        store:store_sp,
        id:'sp_grid',
    	cm: column_sp,
    	sm: new Ext.grid.RowSelectionModel({singleSelcet:true}),
        //title: 'ͣ��������ʾ',
        //�����¼�����Զ�����
        viewConfig:{
        	forceFit:true,
         	columnsText:"��ʾ����",
         	sortAscText:"����",
         	sortDescText:"����"
        },
        loadMask:{msg:"���ݼ�����...."},        
        collapsible: true,
        //titleCollapse:true,
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
            pageSize: 3,
            store: store_sp,
            displayInfo: true,
            displayMsg: '�� {0} ���� {1} ��,�� {2} ��',
            emptyMsg: "�޼�¼"
        })
    
    });
      simple_sp_Grid.addListener('rowclick', function(simple_sp_Grid,rowIndex,event){
    	var record=simple_sp_Grid.getStore().getAt(rowIndex);
    	
    	simpleForm_AddGdb.getForm().loadRecord(record);
    });	
}   	
    // create the window on the first click and reuse on subsequent clicks
	if(!win){
		win = new Ext.Window({
		//applyTo:'hello-win',
		//layout:'fit',
		//renderto:document.body,
		width:700,
								                title: '���ͣ�絥Ԫ',
                								layout:'column',
								                height:400,
								                //closeAction:'hide', 
								                plain: true,
								                closable: false,//�������Ϸ��رհ�ť
								                autoScroll:true,
								                items: [simpleForm_AddGdb,simple_sp_Grid],
												
								                
								                buttons: [{
								                    text: '�ر�',
								                    handler: function(){
								                       // win.hide();
								                        win.hide(this);
								                    }
								                }]
								            });
    }
		//store_sp.load({params:{start:0, limit:3}});
		//simple_Grid.getStore().reload();
		var _sp_Grid=Ext.getCmp("sp_grid");
		_sp_Grid.getStore().baseParams.jhid = document.getElementById("id").value;
		_sp_Grid.getStore().reload();
		var _dwmc_id=Ext.getCmp("dwmc_id");
		_dwmc_id.reset();
		var _combo_tdqj=Ext.getCmp("combo_tdqj");
		_combo_tdqj.reset();
		win.show(this);	
							        
    }
Ext.onReady(function() {
	
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    
   
    
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
 	 		return '��ȷ��';
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
 	 
 	 
 	  ///////------******------------�����б��stor----------------********----------------
 	 	//////-------------------------�����б������ݰ�------------------------------------

	/*--ά����Ŀ---*/
	var id='\'001\'';
	 var sql="select * from j_gdgy_wxxm";

 	var planRecord_wxxm = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
 	var store_wxxm = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql+'&all=all'}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_wxxm)
    });
   store_wxxm.load(); 
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
   	 var sql_xb="select * from J_gyjc_xlzd where kzbs=\'0\'";
    
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
   //----------------*********************************
 	 
    //����Grid��ͷ
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        //new Ext.grid.RowNumberer(),
        
        {header:'���',dataIndex:'xh',width:40,fixed:true},
        {header:'��λ����',dataIndex:'dwmc',width:70,sortable:true},
        {header:'�ƻ���',dataIndex:'jhh',width:60,sortable:true},
        {header:'�ƻ�ʱ��',dataIndex:'jhsj',width:60,sortable:true},
        {header:'�߱�',dataIndex:'xlm',width:60,fixed:true},
        {header:'�б�',dataIndex:'xingb',width:40,fixed:true},
        {header:'�ƻ�����',dataIndex:'sxmc',width:60,sortable:true},
        {header:'ά����Ŀ',dataIndex:'wxxmmc',width:60,sortable:true},
        {header:'��ϵ�λ',dataIndex:'phdw',width:60,sortable:true},
         {header:'״̬',dataIndex:'zt',width:60,renderer:zt,sortable:true},
        {header:'������',dataIndex:'fzr',width:60,sortable:true}
       // {header:'��ϸ',dataIndex:'id',width:60,renderer:renderXiangxi,fixed:true},
        //{header:'ɾ��',dataIndex:'id',width:60,renderer:renderDel,fixed:true}
    ]);
   
    
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
    	{name:'dwmc',type:'string'},
    	{name:'xlm',type:'string'},
    	{name:'sxmc',type:'string'},//�ƻ����͵�����
    	{name:'wxxmmc',type:'string'},
    	{name:'sjc',type:'string'}
    	
    	
    	]);
    	
    
    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'zyjhsq_json.jsp'}),        
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
   	//grid.addListener('cellClick',cellClick);
    //��ʾ��html��idΪcontainer�Ĳ���
    //grid.render();//��Ⱦ���
     Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	 // form start

   
   
   
   //Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	 
	 
	 // form start
	var simpleForm_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '����Ʊ����',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 800,
              //collapsible:true,
              //titleCollapse:true,
              method:'POST',
              autoWidth:true,
              //frame : true,
              labelWidth : 70,
              
              
              items : [{
                                   layout : 'column',// columnlayout
                                   border : false,// û�б߿�
                                   labelSeparator : '��',// ����ķָ���������������ð�Ŵ���Ӣ�ĵ�ð�ţ�labelSeparator:'��'����
                                   // coulmnLayout��Ŀؼ���������items��
                                   items : [{xtype:'hidden',name:'id'}
                                   				,{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��λ',
                                                                             name : 'dwmc',
                                                                             disabled:true,
                                                                             anchor : '90%'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 }, {
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '�ƻ���',
                                                                             name : 'jhh',
                                                                             anchor : '90%'
                                                                           //  format:'Y-m-d'
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'datefield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '�ƻ�ʱ��',
                                                                             name : 'jhsj',
                                                                             anchor : '90%',
                                                                             format:'Y-m-d'
                                                                      }]
                                                 }]

                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{
                                                        columnWidth : .3,
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
                                                 }, {
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store : new Ext.data.SimpleStore({
                                                                      // ͨ��һ�����鶨����returnValue��displayText�����ֶΡ�retrunValue�ֶ�ָ�����ύ����̨��ֵ��displayText�ֶ�ָ��������������ʾ��ѡ��ֵ��
                                                                      fields : ["returnValue", "displayText"],
                                                                      // �����˼�������.ÿ�����ݶ��Ǹ���fiedls�Ķ�������ɵģ��������һ��ֵ����retrunValue��ֵ���ڶ���ֵ����displayText��ֵ������[1,'Сѧ']���ͱ�ʾretrunValue��1��displayText��Сѧ��
                                                                      data : [['����', '����'], ['����', '����']]
                                                               }),
                                                               valueField : "returnValue",// ��������ѡ����ֵ
                                                               displayField : "displayText",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               forceSelection : true,// ����ѡ��һ��ѡ��
                                                               blankText : '��ѡ���б�',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '��ѡ���б�',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'xingb',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '�б�',// �ؼ��ı�����ѧ��
                                                               name : 'xingb',// �ٴ����ѣ�nameֻ�������б������
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 }, {
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store : new Ext.data.SimpleStore({
                                                                      // ͨ��һ�����鶨����returnValue��displayText�����ֶΡ�retrunValue�ֶ�ָ�����ύ����̨��ֵ��displayText�ֶ�ָ��������������ʾ��ѡ��ֵ��
                                                                      fields : ["returnValue", "displayText"],
                                                                      // �����˼�������.ÿ�����ݶ��Ǹ���fiedls�Ķ�������ɵģ��������һ��ֵ����retrunValue��ֵ���ڶ���ֵ����displayText��ֵ������[1,'Сѧ']���ͱ�ʾretrunValue��1��displayText��Сѧ��
                                                                      data : [['������ҵ', '������ҵ'],['Զ����ҵ', 'Զ����ҵ'], ['ͣ����ҵ', 'ͣ����ҵ']]
                                                               }),
                                                               valueField : "returnValue",// ��������ѡ����ֵ
                                                               displayField : "displayText",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
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
                                                 }]
                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{
                                                        columnWidth : .3,
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
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store :store_wxxm,
                                                               valueField : "value",// ��������ѡ����ֵ
                                                               displayField : "text",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               blankText : 'ѡ��ά����Ŀ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : 'ѡ��ά����Ŀ',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'wxxm',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : 'ά����Ŀ',// �ؼ��ı�����ѧ��
                                                               name : 'wxxm',// �ٴ����ѣ�nameֻ�������б������
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 }, {
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : 'Ҫ��ʱ��',
                                                                             name : 'ydsj',
                                                                             anchor : '90%'
                                                                           //  format:'Y-m-d'
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 }]
                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [ {
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��ϵ�λ',
                                                                             name : 'phdw',
                                                                             anchor : '90%'
                                                                           //  format:'Y-m-d'
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 }, {
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '������',
                                                                             name : 'fzr',
                                                                             anchor : '90%'
                                                                           //  format:'Y-m-d'
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 } ,{
                                                        columnWidth : .3,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'datefield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '�ʱ��',
                                                                             name : 'tbsj',
                                                                             anchor : '90%',
                                                                            format:'Y-m-d'
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 }]
                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{
                                                        columnWidth : 0.9,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : 'ʩ���ص�',
                                                                             name : 'sgdd',
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
                                                        columnWidth : .9,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textarea',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '���ݼ�Ҫ��',
                                                                             name : 'nrjyq',
                                                                             anchor : '90%',
                                                                             height:100
                                                                             //format:'Y-m-d'
                                                                      }]
                                                 }]
                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{
                                                        columnWidth : .9,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textarea',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��ע',
                                                                             name : 'bz',
                                                                             anchor : '90%',
                                                                             height:'100'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 }]
                            }
                           
                            ],
              // Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
              buttons : [{
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
                                    text : '���',
                                    
                                   handler : function() {
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                                          if (simpleForm_Save.form.isValid()) {
                                                 // ���水ťҪ���ľ�������basicform�Ŀͻ�����֤����֤ͨ���������øð�ť״̬Ϊdisable����ֹ2���ύ��Ȼ�����simpleForm.form.doAction�����ύ����
                                                 //this.disabled = true;
                                                 // doAction�����ĵ�һ��������submit������˼�Ǳ�ʾִ�е����ύ�������ύ�ĺ�̨ҳ����test.jsp��url:'test.asp'�����ύ��ʽ��post��method:'post'����û�������ύ������params:''��
                                                 simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'������,���Ժ�...',  
                                                                      url : 'save.jsp',
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
                            }, {

                                   // ȡ����ť���Ǽ򵥵�resetһ��form�Ŀؼ�
                                   text : '����',
                                   handler : function() {
                                          simpleForm_Save.form.reset();
                                          //simpleForm_Query.collapse();
                                         // window.location.href="";
                                          //window.location.href='zyjhsqAdd.jsp';
                                   }
                            }, {
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
                                    text : '�޸�',
                                    disabledClass:'x-item-disabled',
                                   handler : function() {
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                                          if (simpleForm_Save.form.isValid()) {
                                                 // ���水ťҪ���ľ�������basicform�Ŀͻ�����֤����֤ͨ���������øð�ť״̬Ϊdisable����ֹ2���ύ��Ȼ�����simpleForm.form.doAction�����ύ����
                                                 //this.disabled = true;
                                                 // doAction�����ĵ�һ��������submit������˼�Ǳ�ʾִ�е����ύ�������ύ�ĺ�̨ҳ����test.jsp��url:'test.asp'�����ύ��ʽ��post��method:'post'����û�������ύ������params:''��
                                                 simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'�޸���,���Ժ�...',  
                                                                      url : 'Update.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                                                      // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                                                      success : function(form, action) {
                                                                             // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                                                             //Ext.Msg.alert('����',action.result.data);
                                                                      		//Ext.Msg.alert('��Ϣ',action.result.msg);
                                                                      		//simpleForm_Query.form.reset();
                                                                      		
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
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
                                   text : '������Ӧ����Ʊ',
                                   
                                   handler : function() {
                                   	//var myid=Ext.get(hidden.id);//
                                   var jhid=document.getElementById("id").value;
                                   var jhlb=document.getElementById("jhlb").value;
                                   var lb="";
                                   if(jhlb=="ͣ����ҵ")
                                   {
                                   	    lb='0';
                                   }
                                   else if(jhlb=="������ҵ")
                                   {
                                   		lb='1';
                                   }
                                   else
                                   {
                                   	    lb='2';
                                   }
                                   //	var myid = Ext.get('id').value;
                                   	//alert(jhid);
                                   	//alert(jhlb);
                                   	window.location.href='gzpsp.jsp?myid='+jhid+'&jhtype='+lb;
//                                          if (!simpleForm_Save.form.isValid()) {return };
//                                   		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
//                                          if (simpleForm_Save.form.isValid()) {
//                                                 // ���水ťҪ���ľ�������basicform�Ŀͻ�����֤����֤ͨ���������øð�ť״̬Ϊdisable����ֹ2���ύ��Ȼ�����simpleForm.form.doAction�����ύ����
//                                                 //this.disabled = true;
//                                                 // doAction�����ĵ�һ��������submit������˼�Ǳ�ʾִ�е����ύ�������ύ�ĺ�̨ҳ����test.jsp��url:'test.asp'�����ύ��ʽ��post��method:'post'����û�������ύ������params:''��
//                                                 simpleForm_Save.form.doAction('submit', {
//                                                 					  waitMsg:'������,���Ժ�...',  
//                                                                      url : 'up.jsp',
//                                                                      method : 'post',
//                                                                      params : '',
//                                                                      // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
//                                                                      // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
//                                                                      success : function(form, action) {
//                                                                             // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
//                                                                             //Ext.Msg.alert('����',action.result.data);
//                                                                      		//Ext.Msg.alert('��Ϣ',action.result.msg);
//                                                                      		//simpleForm_Query.form.reset();
//                                                                      		Ext.Msg.alert('��Ϣ',action.result.msg);
//                                                                      		simpleForm_Save.collapse();
//                                                                      		simple_Grid.getStore().reload();
//                                                                      		
//                                                                      },
//                                                                      // ����failure��������������ͨѶ���������ʱ����ʾ������Ϣ��
//                                                                      failure : function() {
//                                                                             Ext.Msg.alert('����', '�ϱ�ʧ�ܣ�');
//                                                                             this.disabled = false;
//                                                                      }
//                                                               });
//                                          }
                                          // �����form����ǰ���ϰ취�ύ��������formpanel�Ķ����м���һ�����ã�
                                          // onSubmit: Ext.emptyFn,
                                          // submit: function() {
                                          // this.getEl().dom.submit();}
                                          // ��һ�����õ�Ŀ����ȡ��formpanel��Ĭ���ύ�������ڶ����������µ��ύ��ʽΪ�ɷ�ʽ�ύ��

                                   }
                            }]
       });

	
	    
    
    //Grid�ϴ����¼�
    simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
    	// simpleForm_Query.collapse();
    	// simpleForm_Save.expand();
    	
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	//alert(rowIndex);
    	//alert(record.get('jhsj')+' '+record.get('jhh')+' '+record.get('dwid'));
    	    simpleForm_Save.buttons[2].setVisible(false);
            simpleForm_Save.buttons[3].setVisible(true);
             simpleForm_Save.buttons[0].setVisible(false);
            simpleForm_Save.buttons[1].setVisible(false);
             //simpleForm_Save.buttons[2].setVisible(false);
    //simpleForm_Save.buttons[3].setVisible(false);
    	simpleForm_Save.getForm().loadRecord(record);
    	       var jhid=document.getElementById("id").value;
                                   var jhlb=document.getElementById("jhlb").value;
                                   var lb="";
                                   if(jhlb=="ͣ����ҵ")
                                   {
                                   	    lb='0';
                                   }
                                   else if(jhlb=="������ҵ")
                                   {
                                   		lb='1';
                                   }
                                   else
                                   {
                                   	    lb='2';
                                   }
           //alert(record.get('dwid'));
                                   	window.location.href='gzpsp.jsp?myid='+jhid+'&jhtype='+lb+'&sldwid='+record.get('dwid');
    });	
    	
   
    
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Save,simple_Grid]
	});
    
    simpleForm_Save.collapse();
    //simpleForm_Save.buttons[2].disabled=true;
    //simpleForm_Save.buttons[3].disabled=true;
    //���ð�ťȫ������
    simpleForm_Save.buttons[0].setVisible(false);
    simpleForm_Save.buttons[1].setVisible(false);
    simpleForm_Save.buttons[2].setVisible(false);
    simpleForm_Save.buttons[3].setVisible(false);

});
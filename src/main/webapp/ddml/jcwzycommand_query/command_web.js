Ext.onReady(function() {
 	
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var userdwid=document.getElementById("userDwid").value;
    var userdj=document.getElementById("userdj").value;
  var dich_web='';
    var dich_jhh='';
    var dich_web1='';
    var dich_jhh1='';
    //alert(userdj);
    if(userdj=='6')
    {
       dich_web=" jcwzy.sldwid like '"+userdwid+"%'";
        dich_jhh=" gqdm like '"+userdwid+"%25'";
        //
       dich_web1=" jcwzy.sldwid like '"+userdwid+"%'";
        dich_jhh1=" gqdm like '"+userdwid+"%25'";
    }
    else if(userdj=='3')
    { //alert(userdj);
     dich_web=" jcwzy.dwid like '"+userdwid+"%'";//"jh.dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.ddtdm like "+"'"+dwid+"%')";
       dich_jhh=" ddtdm like '"+userdwid+"%25'";
       //
      dich_web1=" jcwzy.dwid like '"+userdwid+"%'";//"jh.dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.ddtdm like "+"'"+dwid+"%')";
       dich_jhh1=" ddtdm like '"+userdwid+"%25'";
    }
    else if(userdj=='1'||userdj=='2')
    {
      dich_web=" 1=1";
        dich_jhh=" 1=1";
        //
      dich_web1=" 1=1";
        dich_jhh1=" 1=1";
    }
    else
    {
       dich_web=" jcwzy.sldwid like "+"'"+userdwid+"%'";
        dich_jhh=" cjdm like '"+userdwid+"%25'";
        //    
         dich_web1=" jcwzy.sldwid like "+"'"+userdwid+"%'";
        dich_jhh1=" cjdm like '"+userdwid+"%25'";
    }//and fpsj <=sysdate and fpsj>=to_date('"+getTime()+"','yyyy-mm-dd hh24:mi')
    dich_web=dich_web+" and jcwzy.flsj <= sysdate and jcwzy.flsj>=to_date('"+getTime()+"','yyyy-mm-dd hh24:mi')";
     //��Ⱦ����html����
	var render_mlzt = function(value){  		
  		if (value=='1')  {return '��ȷ��';}
  		if (value=='2')  {return '<div  style="color:blue;">��ʩ��</div>';}
  		if (value=='3')  {return '<div  style="color:red;">ʩ����</div>';}
  		if (value=='4')  {return '<div  style="color:green;">�����</div>';}
  	    if(value=="6"){   return '<div  style="color:blue;">��ʩ��</div>';}
  		if(value=="-1"){   return '����';}
  		
 	};
 		var planRecord_dw = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_dw = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../selectdw.jsp?all='+'all&zt='+'(jglbdm= 1 or jglbdm=2)'}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_dw)
    });
     store_dw.load();
     /////-----------------��ѯ��Ӧ�ļƻ���
     var sql_jhh="select id,jhh from z_yxgl_zyjh where dwid in (select gqdm from J_GYJC_GQZD where "+dich_jhh+" ) and rownum<10  order by jhsj desc";
    //alert(sql_jhh);
    var planRecord_jhh = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_jhh = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_jhh}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_jhh)
    });
     store_jhh.load();
    //----�������������--------------------------
	//����Grid��ͷ
	
	
	//����Grid��ͷ
    var expander_web = new Ext.ux.grid.RowExpander({
        tpl : new Ext.Template(
        '<p><b>Ҫ�����ʱ��:</b> {yqwcsj}',
        '<p><b>��������:</b> {mlnr}</p>',
            '<p><b>��ע:</b> {mlbz}</p>')
        });
   	
    
     
   
    

 	//----�Ӵ�����������--------------------------
	//����Grid��ͷ
    var columns_web = new Ext.grid.ColumnModel([
        
        //new Ext.grid.RowNumberer(),
        expander_web,		
        {header:'���',dataIndex:'xh',width:40,fixed:true},
        {header:'�����',dataIndex:'commandid',width:50,fixed:true,sortable:true},
        {header:'����������',dataIndex:'gqmc',width:80,sortable:true},
        {header:'����ʱ��',dataIndex:'flsj',width:110,fixed:true,sortable:true},
        //{header:'��������',dataIndex:'mlnr',width:80,sortable:true},
        //{header:'ͣ�͵�����',dataIndex:'tdqd',width:80,sortable:true},
        {header:'��׼ʱ��',dataIndex:'pzsj',width:110,fixed:true,sortable:true},
        {header:'����ʱ��',dataIndex:'xlsj',width:110,fixed:true},
        {header:'������',dataIndex:'flr',width:90,fixed:true,sortable:true},
        {header:'������',dataIndex:'slr',width:90,fixed:true,sortable:true},
        {header:'������',dataIndex:'xlr',width:90,fixed:true,sortable:true},
        {header:'����״̬',dataIndex:'mlzt',renderer:render_mlzt,width:60,fixed:true,sortable:true}
      
    ]);
   
    
    var Record_web = Ext.data.Record.create([
    	{name:'xh',type:'int'},
    	{name:'commandid',type:'int'},
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
    	{name:'flr',type:'string'},
    	{name:'slr',type:'string'},
    	{name:'xlr',type:'string'},
    	{name:'mlbz',type:'string'},
    	{name:'mlzt',type:'string'},
    	{name:'gqmc',type:'string'},
    	{name:'ddy',type:'string'}
    	]);
    	
    
    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store_web = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'command_touch_web_json.jsp'}),        
       baseParams:{whereclause:dich_web},//�����ҳ��ʱ�����ֵ������ʧ����Ϊ����������ֻ�е����ѯ��ťʱ�Ż�ı�       
         reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },Record_web)
    });
	store_web.load({params:{start:0, limit:10}});
    
    
    //���������,ָ����ģ�ͣ��ֿ⣬ѡ��ģ��(Ĭ����ѡ��ģ��)
    var simple_Grid_web = new Ext.grid.GridPanel({
        //el:ָ��htmlԪ��������ʾ��grid
        //el: 'grid3', 
        store:store_web,
    	cm: columns_web,
    	sm: new Ext.grid.RowSelectionModel({singleSelcet:true}),
        title: '�Ӵ�����ҵ����',
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
        plugins: expander_web,
        
        //iconCls: 'icon-grid',
        //height:400,
        //bottom bar
        bbar: new Ext.PagingToolbar({
            pageSize: 10,
            store: store_web,
            displayInfo: true,
            displayMsg: '�� {0} ���� {1} ��,�� {2} ��',
            emptyMsg: "�޼�¼"
        })
        
});


	
    //��ʾ��html��idΪcontainer�Ĳ���
    //grid.render();//��Ⱦ���
    Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	 // form start
	var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '���������ѯ�����ò�ѯ����',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 600,
               titleCollapse:true,
              collapsible:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              labelWidth : 60,
              
              
              items : [{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [ {
                                           		columnWidth : .25,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                                                layout : 'form',// formlayout�������ÿؼ�
                                                border : false,// û�б߿�
                                                items : [{
                                                			xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store : store_dw,
                                                               //value:'ȫ��',
                                                               valueField : "value",// ��������ѡ����ֵ
                                                               displayField : "text",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               //blankText : '��ѡ����ҵ��λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '���λ',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'taskunit',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '���λ',// �ؼ��ı�����ѧ��
                                                               name : 'taskunit',// �ٴ����ѣ�nameֻ�������б������
                                                               id:'dw_id',
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 		},{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��ʼ����',
                                                                             name : 'ksrq',
                                                                             id:'txt_ksrq',
                                                                             anchor : '90%',
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                      }]
                                                 },{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��������',
                                                                             name : 'jsrq',
                                                                             id:'txt_jsrq',
                                                                             //value: new Date,
                                                                             anchor : '90%',
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                      }]
                                                 },{
                                           		columnWidth : .25,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                                                layout : 'form',// formlayout�������ÿؼ�
                                                border : false,// û�б߿�
                                                items : [{
                                                			xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store : store_jhh,
                                                               //value:'ȫ��',
                                                               valueField : "text",// ��������ѡ����ֵ
                                                               displayField : "text",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               //blankText : '��ѡ����ҵ��λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '�ƻ���',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'jhh',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : true,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '�ƻ���',// �ؼ��ı�����ѧ��
                                                               name : 'jhh',// �ٴ����ѣ�nameֻ�������б������
                                                               id:'txt_jhh',
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 		}]
                            },{
                                   layout : 'column',// columnlayout
                                   border : false,// û�б߿�
                                   labelSeparator : '��',// ����ķָ���������������ð�Ŵ���Ӣ�ĵ�ð�ţ�labelSeparator:'��'����
                                   // coulmnLayout��Ŀؼ���������items��
                                   items : [{
                                                        columnWidth : .2,// �ڼ����Ա��radio�ؼ�ʱ��Ҫע���ˣ�������Ҫ��������radio����һradio���б���ģ��ڶ���û�еģ���������radio�������Ŀ��Ӧ�����������µ��п�50%��
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             style : 'margin-top:5px',// ����һ��css���ԣ��������ⲹ��Ϊ5px��style:'margin-top:5px'����ԭ����Ϊ��ѡ��ť�ͱ�����룬��ҿ��Խ�������ȥ��Ȼ�󿴿�Ч����
                                                                             xtype : 'radio',// Formlayout�������һ������Ϊradio�Ŀؼ�
                                                                             fieldLabel : '�ƻ�״̬',// �ؼ��ı������Ա�
                                                                             boxLabel : 'ȫ��',// �ؼ���ѡ����ʾ�ı�����
                                                                             name : 'jhzt',// input��name����ֵ��sex
                                                                             //checked : true,// �ÿؼ�Ĭ������ѡ��
                                                                             inputValue : '5',// �ؼ���ֵ��value������
                                                                             anchor : '95%'// input�Ŀ����95%
                                                                      }]
                                                 },{
                                                        columnWidth : .12,// �����Ѿ�������3�У�3�е��п�ֱ�Ϊ50%��25%��25%
                                                        layout : 'form',
                                                        labelWidth : 0,// ����Ŀ������Ϊ0
                                                        labelSeparator : '',// ����ָ�����Ϊ��
                                                        hideLabels : true,// �ڶ���raido�ؼ��������þ�������ͬ����Ϊ������Ҫ���⣬����Ҫ�������ر���
                                                        border : false,
                                                        items : [{
                                                                             style : 'margin-top:5px',
                                                                             xtype : 'radio',
                                                                             fieldLabel : '',
                                                                             boxLabel : '��ȷ��',
                                                                             name : 'jhzt',
                                                                             inputValue : '1',
                                                                             anchor : '95%'
                                                                      }]
                                                 }, {
                                                        columnWidth : .12,// �����Ѿ�������3�У�3�е��п�ֱ�Ϊ50%��25%��25%
                                                        layout : 'form',
                                                        labelWidth : 0,// ����Ŀ������Ϊ0
                                                        labelSeparator : '',// ����ָ�����Ϊ��
                                                        hideLabels : true,// �ڶ���raido�ؼ��������þ�������ͬ����Ϊ������Ҫ���⣬����Ҫ�������ر���
                                                        border : false,
                                                        items : [{
                                                                             style : 'margin-top:5px',
                                                                             xtype : 'radio',
                                                                             fieldLabel : '',
                                                                             boxLabel : '��ʩ��',
                                                                             name : 'jhzt',
                                                                             inputValue : '2',
                                                                             anchor : '95%'
                                                                      }]
                                                 }, {
                                                	    columnWidth : .12,// �����Ѿ�������3�У�3�е��п�ֱ�Ϊ50%��25%��25%
                                                        layout : 'form',
                                                        labelWidth : 0,// ����Ŀ������Ϊ0
                                                        labelSeparator : '',// ����ָ�����Ϊ��
                                                        hideLabels : true,// �ڶ���raido�ؼ��������þ�������ͬ����Ϊ������Ҫ���⣬����Ҫ�������ر���
                                                        border : false,
                                                        items : [{
                                                                             style : 'margin-top:5px',
                                                                             xtype : 'radio',
                                                                             fieldLabel : '',
                                                                             boxLabel : 'ʩ����',
                                                                             name : 'jhzt',
                                                                             inputValue : '3',
                                                                             anchor : '95%'
                                                                      }]
                                                 },{
                                                	    columnWidth : .12,// �����Ѿ�������3�У�3�е��п�ֱ�Ϊ50%��25%��25%
                                                        layout : 'form',
                                                        labelWidth : 0,// ����Ŀ������Ϊ0
                                                        labelSeparator : '',// ����ָ�����Ϊ��
                                                        hideLabels : true,// �ڶ���raido�ؼ��������þ�������ͬ����Ϊ������Ҫ���⣬����Ҫ�������ر���
                                                        border : false,
                                                        items : [{
                                                                             style : 'margin-top:5px',
                                                                             xtype : 'radio',
                                                                             fieldLabel : '',
                                                                             boxLabel : '�����',
                                                                             name : 'jhzt',
                                                                             inputValue : '4',
                                                                             anchor : '95%'
                                                                      }]
                                                 }]

                            }                            
                                                         ],
              // Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
              buttons : [{
                                   //��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
                                   text : '��ѯ',
                                   handler : function() {
                                          if (!simpleForm_Query.form.isValid()) {return };
                                   		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                                          if (simpleForm_Query.form.isValid()) {
                                           var where=" 1=1 ";
                                           var where_switch=" 1=1 ";
                                           var where_web=" 1=1 ";
                                          //alert(Ext.getCmp("txt_ksrq").getValue());
                                                    if(Ext.getCmp("txt_ksrq").getValue()!="" ){
													    where_web=where_web+" and jcwzy.flsj >=to_date('"+Ext.getCmp("txt_ksrq").getValue()+"','yyyy-mm-dd hh24:mi')";	
													    
													}
													 //alert(Ext.getCmp("txt_jsrq").getValue());
													if(Ext.getCmp("txt_jsrq").getValue()!="" ){
													    where_web=where_web+"  and jcwzy.flsj <=to_date('"+Ext.getCmp("txt_jsrq").getValue()+"','yyyy-mm-dd hh24:mi')";	
												
													}
													///���ݼƻ��Ž��в�ѯ��ȷ��
													if(Ext.getCmp("txt_jhh").getValue()!="" ){
													      where_web=where_web+"  and jcwzy.jhid =(select id from z_yxgl_zyjh where jhh='"+Ext.getCmp("txt_jhh").getValue()+"')";	
												
													}
													
													
														var paymodevalue;
													   var tempmodel = document.getElementsByName('jhzt');//�������ֵõ�һ������
													   var value="";
													   for(var i =0;i<tempmodel.length;i++){
													    if(tempmodel[i].checked){
													     paymodevalue = tempmodel[i].id;
													    value= document.getElementById(paymodevalue).value;
													    }
													   }
													  
													 if(value!=''&& value!='5')
													 {
													   where_web=where_web+" and jcwzy.mlzt ="+value;
													 }
													
													
													if(Ext.getCmp("dw_id").getValue()!='ALL')
													{   //alert(Ext.getCmp("dw_id").getValue());
														if(Ext.getCmp("dw_id").getValue()!=''  && Ext.getCmp("dw_id").getValue()!='all'){
														    where_web=where_web+" and jcwzy.sldwid='"+Ext.getCmp("dw_id").getValue()+"' ";
												
													     }
													}
													else
													{
													   where_web=where_web+" and "+dich_web1;
													}
													
													
													store_web.baseParams.whereclause = where_web; 
				                                    simple_Grid_web.getStore().reload({ 
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
                                   }
                            }]
       });
   
   
      Ext.getCmp("txt_jsrq").setValue(get_nowTime());
     Ext.getCmp("txt_ksrq").setValue(getTime());
     
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		items: [simpleForm_Query,simple_Grid_web]
		
	});

});
function getTime()
{
          //***�õ���ǰʱ��**//
    var myyear,mymonth,myweek,myday,mytime,mymin,myhour,mysec;
	var mydate=new Date();
	myyear=mydate.getFullYear();
	mymonth=mydate.getMonth()+1;
	if(mymonth<10)
	//mymoth="0"+mymoth;
	myday=mydate.getDate();
	//if(myday<10)
	myday="01";
	myhour=mydate.getHours();
	//if(myhour<10)
	myhour="00";
	mymin=mydate.getMinutes();
	//if(mymin<10)
	mymin="00";
	mysec=mydate.getSeconds();
	return myyear+"-"+mymonth+"-"+myday+" "+myhour+":"+mymin;
}
function get_nowTime()
{
      var myyear,mymonth,myweek,myday,mytime,mymin,myhour,mysec;
	var mydate=new Date();
	myyear=mydate.getFullYear();
	mymonth=mydate.getMonth()+1;
	if(mymonth<10)
	//mymoth="0"+mymoth;
	myday=mydate.getDate();
	if(myday<10)
	myday="0"+myday;
	myhour=mydate.getHours();
	if(myhour<10)
	myhour="0"+myhour;
	mymin=mydate.getMinutes();
	if(mymin<10)
	mymin="0"+mymin;
	mysec=mydate.getSeconds();
	mytime=myyear+"-"+mymonth+"-"+myday+" "+myhour+":"+mymin;
	return mytime;
}
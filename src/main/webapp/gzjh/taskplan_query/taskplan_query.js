Ext.onReady(function() {
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var userdj=document.getElementById("userdj").value;
    var dwid=document.getElementById("dwid").value;
    var djch='';
    var dich2='';
	
    if(userdj=='6')
    {
        djch="jh.dwid="+dwid;
        dich2="jh.dwid="+dwid;
    }
    else if(userdj=='3')
    { //alert(userdj);
       djch=" jh.zt!=0 and jh.dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.ddtdm like "+"'"+dwid+"%')";
       dich2=" jh.zt!=0 and jh.dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.ddtdm like "+"'"+dwid+"%')";
    }
    else if(userdj=='4'||userdj=='5')
    {
        djch="jh.dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.cjdm like "+"'"+dwid+"%')";
        dich2="jh.dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.cjdm like "+"'"+dwid+"%')";
    }
    else
    {
       djch=" jh.zt!=0 ";
       dich2=" jh.zt!=0 ";
    }
	
    djch=djch+"and jh.jhsj <=sysdate and jh.jhsj>=to_date('"+get_nowTime()+"','yyyy-mm-dd hh24:mi')";
    var expander = new Ext.ux.grid.RowExpander({
        tpl : new Ext.Template(
            '<p><b>���Ա:</b> {spr} <b>�������:</b> {ddzr} <b>�е�������:</b> {xdzr} <b>�촰��ʼʱ��:</b> {tcsjks} <b>�촰����ʱ��:</b>{tcsjjs}</p>',
            '<p><b>��ҵ�ص�:</b> {sgdd} <b>��ҵʱ��:</b> {ydsj}  <b>��ҵ����:</b> {jhnr}<b>ͣ�緶Χ:</b> {nrjyq} <b>������Χ:</b> {fsfw} <b>���������:</b> {gdcnr}</p>',
            '<p><b>��ע:</b> {bz}</p>')
    });
	//��Ⱦ����html����
	var render_jhzt = function(value){  		
  		if (value=='-1') {return '������';}
  		if (value=='0')  {return '����ƻ�';}
		if (value=='8')  {return '�ƻ���ȡ��';}
  		if (value=='1')  {return '<div  style="color:blue;">��������ϱ�</div>';}
  		if (value=='2')  {return '<div  style="color:B08100;">���������</div>';}
  		if (value=='3')  {return '<div  style="color:FF8100;">�������������</div>';}
  		if (value=='4')  {return '<div  style="color:red;">��ʩ����������</div>';}
		if (value=='5')  {return '<div  style="color:red;">��ֵ����������</div>';}
  	    if(value=="6")	 {return '<div  style="color:555800;">���鵵</div>';}	
		if(value=="9")	 {return '<div  style="color:green;">�Ѿ��鵵</div>';}
  		
 	};

/*--���뵥λ---*/
	 var sql="select dwdm,dwmc from v_j_gyjc_yhdw where jb=6 order by dwmc";

 	var planRecord_dw = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
 	var store_dw = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?all=all&sql='+sql}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_dw)
    });
   store_dw.load(); 
 	

	//����Grid��ͷ
    var columns = new Ext.grid.ColumnModel([
        
        //new Ext.grid.RowNumberer(),
         expander,		
        {header:'���',dataIndex:'xh',width:40,fixed:true},
        {header:'��λ����',dataIndex:'dwmc',width:80,sortable:true,fixed:true},
        {header:'�ʱ��',dataIndex:'tbsj',width:120,sortable:true,fixed:true},
        {header:'��ҵ����',dataIndex:'jhsj',width:80,sortable:true,fixed:true},
        {header:'�߱�',dataIndex:'xlm',width:60,fixed:true},
        {header:'���',dataIndex:'xingb',width:60,fixed:true},
        {header:'�ƻ����',dataIndex:'jhlb',width:80,sortable:true,fixed:true},

		{header:'�ƻ�����',dataIndex:'sxmc',width:80,sortable:true,fixed:true},
        {header:'ά����Ŀ',dataIndex:'wxxm',width:120,sortable:true},
	    {header:'��ϵ�λ',dataIndex:'phdw',width:60,sortable:true},
        {header:'�����쵼��',dataIndex:'fzr',width:60,sortable:true},
        {header:'״̬',dataIndex:'zt',renderer:render_jhzt,sortable:true,width:100,fixed:true}
       
    ]);
   
    
    var planRecord = Ext.data.Record.create([
    	{name:'xh',type:'int'},
    	{name:'id',type:'int'},
    	{name:'dwid',type:'string'},
    	{name:'jhh',type:'string'},
    	{name:'tdqd',type:'string'},
    	{name:'jhsj',type:'string'},
    	{name:'xb',type:'string'},
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
    	{name:'fsfw',type:'string'},
    	{name:'ylz',type:'string'},
    	{name:'jhnr',type:'string'},
    	{name:'sxmc',type:'string'},//�ƻ����͵�����
    	{name:'mlh',type:'string'},
    	{name:'gdcnr',type:'string'},
		{name:'ddzr',type:'string'},
		{name:'xdzr',type:'string'},
		{name:'tcsjks',type:'string'},
		{name:'tcsjjs',type:'string'},
    	{name:'sjc',type:'string'}
    	]);
    	
    
    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'taskplan_query_json.jsp'}),
         baseParams:{whereclause:djch},//�����ҳ��ʱ�����ֵ������ʧ����Ϊ����������ֻ�е����ѯ��ťʱ�Ż�ı�       
                
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
        plugins: expander,
        
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
        
});

	
    //��ʾ��html��idΪcontainer�Ĳ���
    //grid.render();//��Ⱦ���
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
                                           		columnWidth : .33,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                                                layout : 'form',// formlayout�������ÿؼ�
                                                border : false,// û�б߿�
                                                items : [{
                                                			xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store :store_dw,
                                                               //value:'ȫ��',
                                                               valueField : "value",// ��������ѡ����ֵ
                                                               displayField : "text",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               //blankText : '��ѡ����ҵ��λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : 'ѡ����ҵ��λ',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'taskunit',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '��ҵ��λ',// �ؼ��ı�����ѧ��
                                                               name : 'taskunit',// �ٴ����ѣ�nameֻ�������б������
                                                               id:'dw_id',
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 		},{
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '��ʼ����',
                                                                             name : 'ksrq',
                                                                             id:'txt_ksrq',
                                                                             //value: new Date,
                                                                             anchor : '90%',
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                      }]
                                                 },{
                                                        columnWidth : .33,
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
                                                 }]
                            }                            
                            // �����ǵ�һ�У���������Ҫ����һ��checkboxѡ�����롣checkbox�����ú�radio�����ô�ͬС�죬���ע���п�Ķ�����С�
                            , {
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
                                                                             boxLabel : 'δ�ϱ�',
                                                                             name : 'jhzt',
                                                                             inputValue : '0,1',
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
                                                                             boxLabel : '������',
                                                                             name : 'jhzt',
                                                                             inputValue : '2,3,4,5',
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
                                                                             boxLabel : '�鵵',
                                                                             name : 'jhzt',
                                                                             inputValue : '6,9',
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
                                                                             boxLabel : '��ȡ��',
                                                                             name : 'jhzt',
                                                                             inputValue : '8',
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
                                                                             boxLabel : '������',
                                                                             name : 'jhzt',
                                                                             inputValue : '-1',
                                                                             anchor : '95%'
                                                                      }]
                                                 }]

                            }
,// �����ǵ�һ��,����ÿ�в���ͬ�ϣ�
                            {
                                   layout : 'column',
                                   border : 'false',
                                   labelSeparator : '��',
                                   items : [{
                                                        columnWidth : .5,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype: 'checkboxgroup',
            																 fieldLabel: '�ƻ�����',
            																 style : 'margin-top:4px',// ����һ��css���ԣ��������ⲹ��Ϊ5px��style:'margin-top:5px'����ԭ����Ϊ��ѡ��ť�ͱ�����룬��ҿ��Խ�������ȥ��Ȼ�󿴿�Ч����
            																// Distribute controls across 3 even columns, filling each row
            																// from left to right before starting the next row
            																columns: 6,
            																items: [
               																	 {boxLabel: 'ʩ���ƻ�', name: 'zylb1',id:'txt_zylb1', inputValue: '006001', checked: true},
																				 {boxLabel: 'ά�޼ƻ�', name: 'zylb2',id:'txt_zylb2', inputValue: '006002', checked: true}, 
                																 {boxLabel: '��ʱ��ҵ', name: 'zylb3', id:'txt_zylb3',inputValue: '006003', checked: true}                																 														
            																		  ],
                                                                             anchor : '95%'
                                                                      }]
                                                 }]

                            }// �����ǵ�һ��,����ÿ�в���ͬ�ϣ�
                             ],
              // Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
              buttons : [{
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
                                    text : '��ѯ',
                                   handler : function() {
                                          if (!simpleForm_Query.form.isValid()) {return };
                                   		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                                          if (simpleForm_Query.form.isValid()) {
                                              var where="1=1";
													//alert("OOOO");
                                                    if(Ext.getCmp("txt_ksrq").getValue()!="" ){
														where=where+" and jh.jhsj >=to_date('"+Ext.getCmp("txt_ksrq").getValue()+"','yyyy-mm-dd hh24:mi')";	
													}
													
													if(Ext.getCmp("txt_jsrq").getValue()!="" ){
														where=where+"  and jh.jhsj <=to_date('"+Ext.getCmp("txt_jsrq").getValue()+"','yyyy-mm-dd hh24:mi')";	
													}
													//alert(Ext.getCmp("dw_id").getValue());
													if(Ext.getCmp("dw_id").getValue()!='ALL'&& Ext.getCmp("dw_id").getValue()!='')
													{   //alert(Ext.getCmp("dw_id").getValue());
														if(Ext.getCmp("dw_id").getValue()!=''  && Ext.getCmp("dw_id").getValue()!='all'){
															where=where+" and jh.dwid='"+Ext.getCmp("dw_id").getValue()+"' ";
														}
													}else{
													   //where=where+"  and "+djch;
													   where=dich2;
													}
													//alert(where);
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
													   where =where+" and jh.zt in("+value+")";
													 }
													 else
													 {
													   where =where;
													 }
													//alert(where);
													 if(Ext.getCmp('txt_zylb1').checked && Ext.getCmp('txt_zylb2').checked && Ext.getCmp('txt_zylb3').checked)
													 {
													    where=where+" and (jhlx='006001' or jhlx='006002' or jhlx='006003')";
													 }
													 if(!Ext.getCmp('txt_zylb1').checked && Ext.getCmp('txt_zylb2').checked)
													 {
													    where=where+" and (jhlx='006002' or jhlx='006003')";
													 }
													 
													 if(Ext.getCmp('txt_zylb1').checked && !Ext.getCmp('txt_zylb2').checked)
													 {
													    where=where+" and jhlx='006001' ";
													 }
												   //alert(value);											
													//where =where +" and trim(qxdj) in ("+dj+")";
													//alert(where);
													store.baseParams.whereclause =where; 
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
                                          //simpleForm_Save.collapse();
                                         // window.location.href="";
                                          //window.location.href='zyjhsqAdd.jsp';
                                   }
                            }, {

                                   // ȡ����ť���Ǽ򵥵�resetһ��form�Ŀؼ�
                                   text : '�鿴����',
                                   handler : function() {
                                        ryshow();
                                         //window.location.href='../../tjbb/query/dfddmljl.jsp';
                                         
                                   }
                            }]
       });
   
   
    
     
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Query,simple_Grid]
	});
		simpleForm_Query.buttons[2].setVisible(false);
    Ext.getCmp("txt_ksrq").setValue(get_nowTime());
    Ext.getCmp("txt_jsrq").setValue(getTime());
    //simpleForm_Save.collapse();
      this.ryshow=function(value){
		//alert("TZSID"+value);
    	win1 = new Ext.Window({
        	width:document.body.clientWidth-20,
        	height:document.body.clientHeight-10,
        	layout:'column',
       		title: '����ά����ҵ�ƻ�����',
        	closeAction:'hide',
        	plain: true,
        	autoScroll:false,
        	html:'<iframe style="width:100%;height:100%" src="../../tjbb/query/wxzyjh.jsp"></iframe>'
    	});
    	win1.show(this);
  	};
});
              function get_nowTime()
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
function getTime()
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
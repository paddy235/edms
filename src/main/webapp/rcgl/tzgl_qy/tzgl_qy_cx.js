Ext.onReady(function() {
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var username=document.getElementById("txt_username").value;
    var userdj=document.getElementById("userdj").value;
    var userdwid=document.getElementById("userdwid").value;
    var ttyhmc=document.getElementById("ttyhmc").value;
    
    var stor_where="";
    var stor_where1="";
    var cell_where=" 1=1 ";
    var where1="";
	var sql="";
	
    if(userdj=='6')
    {
      stor_where="gz.gqpym in (select gq.gqdm from  j_gyjc_gqzd gq where gq.gqdm='"+userdwid+"')";
      stor_where1="gz.gqpym in (select gq.gqdm from  j_gyjc_gqzd gq where gq.gqdm='"+userdwid+"')";
	  sql="select gqdm,gqjc from j_gyjc_gqzd where jglbdm=1 and gqdm ='"+userdwid+"'";
    }
    else if(userdj=='3')
    {
      stor_where="gz.gqpym in (select gq.gqdm from  j_gyjc_gqzd gq where gq.ddtdm like '"+userdwid+"%')";
      stor_where1="gz.gqpym in (select gq.gqdm from  j_gyjc_gqzd gq where gq.ddtdm like '"+userdwid+"%')";
	  sql="select gqdm,gqjc from j_gyjc_gqzd where jglbdm=1 and ddtdm like '"+userdwid+"%25'  order by gqjc";
    }
    else if(userdj=='4'||userdj=='5')
    {
      stor_where="gz.gqpym in (select gq.gqdm from  j_gyjc_gqzd gq where gq.cjdm like '"+userdwid+"%')";
      stor_where1="gz.gqpym in (select gq.gqdm from  j_gyjc_gqzd gq where gq.cjdm like '"+userdwid+"%')";
	  sql="select gqdm,gqjc from j_gyjc_gqzd where jglbdm=1 and cjdm ='"+userdwid+"' order by gqjc";
    }
	else
    {
      stor_where=" 1=1 ";
      stor_where1=" 1=1 ";
	  sql="select gqdm,gqjc from j_gyjc_gqzd where jglbdm=1 order by gqjc";
    }
	
    stor_where=stor_where+"and gz.bgsj <=sysdate and gz.bgsj>=to_date('"+get_nowTime()+"','yyyy-mm-dd hh24:mi')";
    
	//���������䡢��ֱ�Ӵӹ�������ѡȡ���ߵ�����������̨���Լ���Ͻ��������������˲���¼����բ���
	//��ѯ�ſ�������
	sql="select gqdm,gqjc from j_gyjc_gqzd where jglbdm=1 order by gqjc";
 	var planRecord_bdt = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_bdt = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql+'&all=all'}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_bdt)
    });
    store_bdt.load();
     
   
    //������     
    var sql_ggdmc="select distinct o.gdddm,o.ggdmc from J_GYJC_GDDZD o";

 	var planRecord_ggdmc = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_ggdmc = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_ggdmc+'&all=all'}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_ggdmc)
    });
     store_ggdmc.load();

     var zt =function (value)
 	 {
 	 	if(value=="0")
 	 	{
 	 	  return 'ʧ��';
 	 	}
 	 	else if(value=="1")
 	 	{
 	 		return '�ɹ�';
 	 	}
 	 	else
 	 	{
 	 	    return 'δ����';
 	 	}
 	 }
    
       
	var expander = new Ext.ux.grid.RowExpander({
        tpl : new Ext.Template(
            '<p><b>ͣ�緶Χ:</b> {sjgzdd} <b>��բԭ��:</b> {tzyy} </p> <p><b>ͣ�緶Χ�������:</b> {gzms} <b>��ע:</b> {bz} </p> <p><b>�Ӵ�������:</b> {ia} <b>���ߵ���:</b> {ib}  <b>���ϵ�ѹ:</b> {ic}  <b>һ�ε翹:</b> {ua}  <b>�迹��:</b> {ub}</p> ')
           
    });
	//����Grid��ͷ
  
    var columns = new Ext.grid.ColumnModel([
        
        //new Ext.grid.RowNumberer(),
        expander,		
        {header:'���',dataIndex:'xh',width:35,fixed:true},

		{header:'�����',dataIndex:'gqmc',width:90,sortable:true,fixed:true},
        {header:'��բʱ��',dataIndex:'bgsj',width:110,sortable:true,fixed:true},
        {header:'���غ�',dataIndex:'kgh',width:60,sortable:true},
        {header:'��������',dataIndex:'bhzzmc',width:60,sortable:true},
        
		{header:'�غ����',dataIndex:'chzzt',renderer:zt,width:60,fixed:true,fixed:true},
		{header:'�ʱ���',dataIndex:'sgjl',width:60,sortable:true,fixed:true},
        {header:'����',dataIndex:'lb',width:60,sortable:true,fixed:true},
		{header:'����ʱ��',dataIndex:'fhsj',width:110,sortable:true,fixed:true},

		{header:'�ָ�ʱ��',dataIndex:'hfsj',width:110,sortable:true,fixed:true},
		{header:'ͣʱ(��)',dataIndex:'tdsf',width:60,sortable:true,fixed:true},
		{header:'�Ǽ���',dataIndex:'djr',width:80,sortable:true,fixed:true},
        {header:'�����',dataIndex:'shr',width:80,sortable:true,fixed:true}
		
        //{header:'����Ա',dataIndex:'ddy',width:70,sortable:true,fixed:true}
        //{header:'��������',dataIndex:'gzms',width:160,sortable:true},
        //{header:'�ʱ�',dataIndex:'sgjl',width:40,fixed:true},        
        //{header:'ʵ�ʹ��ϵص�',dataIndex:'sjgzdd',width:60,fixed:true},        
        //{header:'ͣ������',dataIndex:'tdqd',width:70,sortable:true},
        //{header:'��բԭ��',dataIndex:'tzyy',width:50,sortable:true},   
        //{header:'��ע',dataIndex:'bz',width:50,sortable:true},
       
      
    ]);
   
      
    var planRecord = Ext.data.Record.create([
    	{name:'xh',type:'int'},
    	{name:'ydsgbm',type:'string'},
    	{name:'ydbgbh',type:'string'},
    	{name:'rksj',type:'string'},
    	{name:'bgsj',type:'string'},
    	{name:'gqpym',type:'string'},
    	{name:'tdqd',type:'string'},
    	{name:'gzms',type:'string'},
    	{name:'sgjl',type:'string'},	
    	{name:'ztbz',type:'string'},
    	{name:'chzzt',type:'string'},
    	{name:'sgjl',type:'string'},
    	{name:'ztbz',type:'string'},
    	{name:'gzbh',type:'string'},
    	{name:'gqmc',type:'string'},
    	{name:'gqdm',type:'string'},
    	{name:'kgh',type:'string'},//tzyy
        {name:'tzyy',type:'string'},
        {name:'fhsj',type:'string'},
    	{name:'tdsf',type:'string'},
    	{name:'lb',type:'string'},
    	{name:'bz',type:'string'},
    	{name:'ddy',type:'string'},  
    	{name:'sjgzdd',type:'string'},
    	{name:'kxmc',type:'string'},
    	{name:'bhzzmc',type:'string'},
    	{name:'shr',type:'string'},
    	{name:'bztzt',type:'string'},
    	{name:'hfsj',type:'string'},
    	{name:'djr',type:'string'},

		{name:'ia',type:'string'},
		{name:'ib',type:'string'},
		{name:'ic',type:'string'},
		{name:'ua',type:'string'},
		{name:'ub',type:'string'},

    	{name:'xb_add',type:'string'}

    	]);
   
    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'tzgl_qy_cx_json.jsp'}),   
        baseParams:{whereclause:stor_where},//�����ҳ��ʱ�����ֵ������ʧ����Ϊ����������ֻ�е����ѯ��ťʱ�Ż�ı�     
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
              title : 'ǣ����բ��¼��ѯ',
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
                                           		columnWidth :.20,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                                                layout : 'form',// formlayout�������ÿؼ�
                                                border : false,// û�б߿�
                                                items : [{
                                                			xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store :store_ggdmc,
                                                              
                                                               valueField : "value",// ��������ѡ����ֵ
                                                               displayField : "text",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               //blankText : '��ѡ����ҵ��λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '�α�',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'gdd',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '�α�',// �ؼ��ı�����ѧ��
                                                               name : 'gdd',// �ٴ����ѣ�nameֻ�������б������
                                                               id:'gdd_id',
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                },{
                                           		columnWidth :.20,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                                                layout : 'form',// formlayout�������ÿؼ�
                                                border : false,// û�б߿�
                                                items : [{
                                                			xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store :store_bdt,
                                                              
                                                               valueField : "value",// ��������ѡ����ֵ
                                                               displayField : "text",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               //blankText : '��ѡ����ҵ��λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'bds',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '����',// �ؼ��ı�����ѧ��
                                                               name : 'bds',// �ٴ����ѣ�nameֻ�������б������
                                                               id:'bds_id',
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
												},{
												columnWidth : .30,
												layout : 'form',
												labelWidth : 100,
												border : false,
												items : [{
																 xtype : 'field',// �ؼ�������Ϊdatefield
																 fieldLabel : '��բʱ����ʼ',																 
																 name : 'ksrq',
																 anchor : '90%',
																 id:'txt_ksrq',
																 listeners: {"focus": function(){
																 WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
														  }]
                                                 },{
                                                        columnWidth : .30,
                                                        layout : 'form',
														labelWidth : 100,
                                                        border : false,
                                                        items : [{
																 xtype : 'field',// �ؼ�������Ϊdatefield
																 fieldLabel : '��բʱ���ֹ',
																 name : 'jsrq',																 
																 anchor : '90%',
																 id:'txt_jsrq',
																 listeners: {"focus": function(){
																 WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
														  }]
                                                 }]
                            }                            
                                                         ],
              // Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
              buttons : [{
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
                                    text : '��ѯ',
                                   handler : function() {
                                          if (!simpleForm_Query.form.isValid()) {return };
                                   		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                                          if (simpleForm_Query.form.isValid()) {
				                                    var where=" 1=1 ";
				                                  
													if(Ext.getCmp("txt_ksrq").getValue()!="" ){
														where=where+" and gz.bgsj>=to_date('"+Ext.getCmp("txt_ksrq").getValue()+"','yyyy-mm-dd hh24:mi')";
														cell_where=cell_where+	" and gz.bgsj>=to_date('"+Ext.getCmp("txt_ksrq").getValue()+"','yyyy-mm-dd hh24:mi')";
														
													}
													if(Ext.getCmp("txt_jsrq").getValue()!="" ){
														where=where+"  and gz.bgsj <=to_date('"+Ext.getCmp("txt_jsrq").getValue()+"','yyyy-mm-dd hh24:mi')";	
													    cell_where=cell_where+"  and gz.bgsj <=to_date('"+Ext.getCmp("txt_jsrq").getValue()+"','yyyy-mm-dd hh24:mi')";	
													    
													 }
													
													if(Ext.getCmp("bds_id").getValue()!=''  && Ext.getCmp("bds_id").getValue()!='ALL'){
														where=where+" and gz.gqpym='"+Ext.getCmp("bds_id").getValue()+"' ";
														cell_where=cell_where+" and gz.gqpym='"+Ext.getCmp("bds_id").getValue()+"' ";
														
													}
													if(Ext.getCmp("gdd_id").getValue()!='' && Ext.getCmp("gdd_id").getValue()!='ALL'){
														where=where+" and gz.dm like '"+Ext.getCmp("gdd_id").getValue()+"%' ";
														cell_where=cell_where+" and gz.dm like '"+Ext.getCmp("gdd_id").getValue()+"%' ";
													}
												//	alert(where);
												//	store.baseParams.whereclause=stor_where1;
													store.baseParams.whereclause =where;
													where1=where;
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
                                   }
                            }]
       });
   

//Ext.getCmp("txt_ddy").setValue(username);    

     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		items: [simpleForm_Query,simple_Grid]
		
	});
    
    //simpleForm_Query.buttons[2].setVisible(false); 
function getTime()
{
  //***�õ���ǰʱ��**//
    var myyear,mymonth,myweek,myday,mytime,mymin,myhour,mysec;
	var mydate=new Date();
	myyear=mydate.getFullYear();
	mymonth=mydate.getMonth()+1;
	//alert(mymonth<10);
	//if(mymonth<10)
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

	return myyear+"-"+mymonth+"-"+myday+" "+myhour+":"+mymin;
}
   
function getTime2()
{
	var myyear,mymonth;
	var mydate=new Date();
	myyear=mydate.getFullYear();
	mymonth=mydate.getMonth()+1;
	if(mymonth<10)
	return myyear+"-"+mymonth+"-"+0+1+" "+0+0+":"+0+0;
}
   // Ext.getCmp("txt_ksrq").setValue(getTime2());
   // Ext.getCmp("txt_jsrq").setValue(getTime()); txt_ksrq
    //alert(get_nowTime());
    Ext.getCmp("txt_ksrq").setValue(get_nowTime());
    Ext.getCmp("txt_jsrq").setValue(getTime());
	

});
function get_nowTime()
{
  //***�õ���ǰʱ��**//
    var myyear,mymonth,myweek,myday,mytime,mymin,myhour,mysec;
	var mydate=new Date();
	myyear=mydate.getFullYear();
	mymonth=mydate.getMonth()+1;
	//alert("0"+mymoth);
	//if(mymonth<10)
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
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

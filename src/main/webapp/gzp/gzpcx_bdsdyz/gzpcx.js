Ext.onReady(function() {
	 
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    //��ֵ�ƻ���Id�ͼƻ������Id
    var userdj=document.getElementById("userdj").value;
    var dwid=document.getElementById("dwid").value;iswgq
    var iswgq=document.getElementById("iswgq").value;
 var djch='1=1';
    var djch2='';
    var table='';
    
    if(userdj=='6')
    {
        djch="dwid="+"'"+dwid+"'";
        djch2="dwid="+"'"+dwid+"'";
    }
    else if(userdj=='3')
    { //alert(userdj);
       djch="   dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.ddtdm like "+"'"+dwid+"%')";
       djch2="   (dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.ddtdm like "+"'"+dwid+"%') or dwid='"+dwid+"')";
       
    }
    else if(userdj=='2'||userdj=='1')
    {
     djch="1=1";
      // djch=" gzpzt!=0";
       //djch2=" gzpzt!=0";
    }
    else
    {
       djch="dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.cjdm like "+"'"+dwid+"%')";
       djch2="dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.cjdm like "+"'"+dwid+"%') ";
    }
    djch=djch+"and fpsj <=sysdate and fpsj>=to_date('"+getTime()+"','yyyy-mm-dd hh24:mi')";
    
   
    if(iswgq=='1')
    {
     table='z_yxgl_gzpGq_Green';
    }
    else
    {
     table='z_yxgl_gzpGq_Green';
    }


	var gzpXx="";
	var zt =function (value)
 	 {
 	 	if(value=="0")
 	 	{
 	 	  return '���ϱ�';
 	 	}
 	 	else if(value=="1")
 	 	{
 	 		return '�����';
 	 	}
 	 	else if(value=="2")
 	 	{
 	 		return '<div  style="color:green;">���ͨ��</div>';
 	 	}
 	 		else if(value=="3")
 	 	{
 	 		return '<div  style="color:red;">ʩ����</div>';
 	 	}
 	 			else if(value=="4")
 	 	{
 	 		return '<div  style="color:green;">�����</div>';
 	 	}	 	
 	 	else if(value=="10")
 	 	{
 	 		return '���˻�';
 	 	}
 	 	else
 	 	{
 	 		 return '����';
 	 	}
 	 }
	

 	//��Ⱦ����html����
 	 var renderXiangxi =function(value)
 	 {
 	 	
         gzpXx="../ticket_cx/operationPlan_Electric_look.jsp?id=";//�鿴����Ʊ
 	     return '<a href="'+gzpXx+value+'">��ϸ</a>';
 	 };
 	 var renderDel =function(value)
 	 {
 	     return '<a  href="'+gzpDel+value+'">ɾ��</a>';
 	 };
  	///----���λ�����-----------
    //var sql="select gqdm,gqmc from J_GYJC_GQZD where jglbdm='2' and ddtdm=\'"+ddtdm+"\'";//

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
     
     
     
     
     
     		var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '����Ʊ�����ò�ѯ����',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 600,
               titleCollapse:true,
              collapsible:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              labelWidth : 80,
              
              
              items : [{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [ {
                                           		columnWidth : .3,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
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
                                                        columnWidth : .35,
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
                                                        columnWidth : .35,
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
                                                                             fieldLabel : '����Ʊ״̬',// �ؼ��ı������Ա�
                                                                             boxLabel : 'ȫ��',// �ؼ���ѡ����ʾ�ı�����
                                                                             name : 'jhzt',// input��name����ֵ��sex
                                                                             checked : true,// �ÿؼ�Ĭ������ѡ��
                                                                             inputValue : '5',// �ؼ���ֵ��value������
                                                                             anchor : '95%'// input�Ŀ����95%
                                                                      }]
                                                 },{
                                                        columnWidth : .1,// �����Ѿ�������3�У�3�е��п�ֱ�Ϊ50%��25%��25%
                                                        layout : 'form',
                                                        labelWidth : 0,// ����Ŀ������Ϊ0
                                                        labelSeparator : '',// ����ָ�����Ϊ��
                                                        hideLabels : true,// �ڶ���raido�ؼ��������þ�������ͬ����Ϊ������Ҫ���⣬����Ҫ�������ر���
                                                        border : false,
                                                        items : [{
                                                                             style : 'margin-top:5px',
                                                                             xtype : 'radio',
                                                                             fieldLabel : '',
                                                                             boxLabel : '���ϱ�',
                                                                             name : 'jhzt',
                                                                             inputValue : '0',
                                                                             anchor : '95%'
                                                                      }]
                                                 },{
                                                        columnWidth : .1,// �����Ѿ�������3�У�3�е��п�ֱ�Ϊ50%��25%��25%
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
                                                                             inputValue : '1',
                                                                             anchor : '95%'
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
                                                  var where="1=1";
                                                    if(Ext.getCmp("txt_ksrq").getValue()!="" ){
														where=where+" and fpsj >=to_date('"+Ext.getCmp("txt_ksrq").getValue()+"','yyyy-mm-dd hh24:mi')";	
													}
													if(Ext.getCmp("txt_jsrq").getValue()!="" ){
														where=where+"  and fpsj <=to_date('"+Ext.getCmp("txt_jsrq").getValue()+"','yyyy-mm-dd hh24:mi')";	
													}
													
													if(Ext.getCmp("dw_id").getValue()!='ALL'&& Ext.getCmp("dw_id").getValue()!='')
													{
														if(Ext.getCmp("dw_id").getValue()!=''  && Ext.getCmp("dw_id").getValue()!='all'){
															where=where+" and dwid='"+Ext.getCmp("dw_id").getValue()+"' ";
														}
													}
													else
													{
													    where=where+" and "+djch2;
													}
												   	var jhztvalue;
												    var jhzt = document.getElementsByName('jhzt');//�������ֵõ�һ������

                                                    var ZTvalue="";
													for(var i =0;i<jhzt.length;i++){
													if(jhzt[i].checked){
													     jhztvalue = jhzt[i].id;		
													     ZTvalue= document.getElementById(jhztvalue).value;
													    }
													}
													if(ZTvalue!='' && ZTvalue!='5')
													{
													  where =where+" and gzpzt="+ZTvalue;
													}
													else
													{
													   //alert(where);
													}
													 
													 //alert(where);
													store.baseParams.table=table;
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
                            }]
       });
       
    //����Grid��ͷ
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        //new Ext.grid.RowNumberer(),
        
        {header:'���',dataIndex:'xh',width:40,fixed:true},
        {header:'��λ',dataIndex:'dwmc',width:80,fixed:true,sortable:true},
        //{header:'��ҵ���',dataIndex:'jhlb',width:80,fixed:true,sortable:true},
        {header:'����Ʊ��',dataIndex:'gzph',width:80,fixed:true,sortable:true},
        {header:'��Ʊ��',dataIndex:'fpr',fixed:true,width:60,sortable:true},
        {header:'��Ʊʱ��',dataIndex:'fpsj',width:110,fixed:true,sortable:true},
        {header:'�����쵼��',dataIndex:'gzldr',fixed:true,width:80},
        //{header:'��������',dataIndex:'cgrs',fixed:true,width:60},
        {header:'����Ʊ����',dataIndex:'zynr',width:160,sortable:true},
         {header:'����Ա',dataIndex:'DDSHY',width:60,sortable:true},
        {header:'���ʱ��',dataIndex:'SPSJ',width:60,sortable:true},
        {header:'���ʱ��',dataIndex:'jssj',width:110,fixed:true,sortable:true},
        {header:'״̬',dataIndex:'gzpzt',width:60,fixed:true,renderer:zt,sortable:true},
        {header:'��ϸ',dataIndex:'gzpid',width:60,renderer:renderXiangxi,fixed:true}
    ]);
   
    
    var planRecord = Ext.data.Record.create([
    	{name:'gzpid',type:'int'},
    	{name:'xh',type:'int'},
    	{name:'gzph',type:'string'},
    	{name:'dwmc',type:'string'},
    	//{name:'jhlb',type:'string'},
    	{name:'fpr',type:'string'},
    	{name:'fpsj',type:'string'},
    	{name:'gzldr',type:'string'},
    	{name:'cgrs',type:'string'},
    	{name:'zynr',type:'string'},
    	{name:'jssj',type:'string'},
    	    	{name:'DDSHY',type:'string'},
    	{name:'SPSJ',type:'string'},
    	{name:'gzpzt',type:'string'},
    	{name:'sjc',type:'string'}
    	]);
    	
    
    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'gzpcx_json.jsp'}), 
         baseParams:{whereclause:djch,table:table},//�����ҳ��ʱ�����ֵ������ʧ����Ϊ����������ֻ�е����ѯ��ťʱ�Ż�ı�       
            
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
        
      
    });
     Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	

	
	    

    	

    
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Query,simple_Grid]
	});

    //Ext.getCmp("txt_wgq").setValue=true;
   // alert(Ext.getCmp("txt_wgq").getValue());txt_jsrq
   Ext.getCmp("txt_ksrq").setValue(getTime());
   Ext.getCmp("txt_jsrq").setValue(get_nowTime());
    
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
     var now = new Date();
       
        var year = now.getFullYear();       //��
        var month = now.getMonth() + 1;     //��
        var day = now.getDate();            //��
       
        var hh = now.getHours();            //ʱ
        var mm = now.getMinutes();          //��
       
        var clock = year + "-";
       
        if(month < 10)
            clock += "0";
       
        clock += month + "-";
       
        if(day < 10)
            clock += "0";
           
        clock += day + " ";
       
        if(hh < 10)
            clock += "0";
           
        clock += hh + ":";
        if (mm < 10) clock += '0'; 
        clock += mm; 
        return(clock); 

}
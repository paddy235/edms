Ext.onReady(function() {
	     var ddtdm_cell="";
		this.ryshow=function(value1){
		//window.open("xxx.jsp");
	    
    	win1 = new Ext.Window({
        	width:document.body.clientWidth-20,
        	height:document.body.clientHeight-10,
        	layout:'column',
       		title: 'ǣ����բ��¼',
        	closeAction:'hide',
        	plain: true,
        	autoScroll:false,
        	html:'<iframe style="width:100%;height:100%" src="../../tjbb/query/tzjl.jsp?whereyxgl='+value1+'"></iframe>'
     	});
    	win1.show(this);
  	};
	
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var username=document.getElementById("txt_username").value;
    var userdj=document.getElementById("userdj").value;
    var userdwid=document.getElementById("userdwid").value;
    var ttyhmc=document.getElementById("ttyhmc").value;
    userdwid='00';
    var stor_where="";
    var stor_where1="";
    var cell_where=" 1=1 ";
   
    if(userdj=='6')
    {
      stor_where="gz.gqpym in (select gq.gqpym from  j_gyjc_gqzd gq where gq.gqdm='"+userdwid+"')";
      stor_where1="gz.gqpym in (select gq.gqpym from  j_gyjc_gqzd gq where gq.gqdm='"+userdwid+"')";
    }
    else if(userdj='3')
    {
      stor_where="gz.gqpym in (select gq.gqpym from  j_gyjc_gqzd gq where gq.ddtdm like '"+userdwid+"%')";
      stor_where1="gz.gqpym in (select gq.gqpym from  j_gyjc_gqzd gq where gq.ddtdm like '"+userdwid+"%')";
    }
    else
    {
      stor_where="gz.gqpym in (select gq.gqpym from  j_gyjc_gqzd gq where gq.cjdm like '"+userdwid+"%')";
      stor_where1="gz.gqpym in (select gq.gqpym from  j_gyjc_gqzd gq where gq.cjdm like '"+userdwid+"%')";
    }
    stor_where=stor_where+"and gz.bgsj <=sysdate and gz.bgsj>=to_date('"+get_nowTime()+"','yyyy-mm-dd hh24:mi')";
            ///----��ѯ��λ��comlist-----------gz.bgsj
    var sql="select ddtdm,ddtmc from j_gyjc_ddtzd  where ddtdm like \'"+userdwid+"%25\'";

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
     //store_bdt.load();
     
    var sql_lb="select distinct bg.lb,bg.lb from Z_XXGX_YDGZBG bg";

 	var planRecord_lb = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_lb = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_lb}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_lb)
    });
     store_lb.load();
     

     
     //�߱�
    var sql_xlm="select distinct o.xldm,o.xlm from J_GYJC_XLZD o";
 	var planRecord_xlm = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_xlm = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_xlm+'&all=all'}),  // '&all=all' ��������ȫ��    
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_xlm)
    });
     store_xlm.load();
     
      //�߱�1
    var store_xlm1 = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_xlm}),  // '&all=all' ��������ȫ��    
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_xlm)
    });
     store_xlm1.load();
     
     //���̨
     
 	var planRecord_ddt = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_ddt = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'ddt.jsp'}),  // '&all=all' ��������ȫ��    
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_ddt)
    });
     store_ddt.load();
     
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
 	     ///----���λ-----------
   // var sql="select gqdm,gqmc from J_GYJC_GQZD where jglbdm='2' ";//

 	var planRecord_dw = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_dw = new Ext.data.Store({//
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../sldw_pym.jsp?zt='+'(jglbdm!= 1 )'+'&all=all'}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_dw)
    });
     store_dw.load();
     ////�õ��ĵ�λ��dwid
      	var planRecord_dwid = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_dwid = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../sldw_dwid.jsp?zt='+'(jglbdm!= 1 )'}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_dwid)
    });
     store_dwid.load();
     
     
     /////��Ӧ��ͣ�絥Ԫ
     var sql_tddy="select bhzzdm,kxmc from j_gdgy_kx";
     	var planRecord_tddy = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_tddy = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_tddy}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_tddy)
    });
    store_tddy.load();
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
 	 	else if(value=="2")
 	 	{
 	 	    return 'δ����';
 	 	}
 	 	else if(value=="3")
 	 	{
 	 	    return '�ѳ���';
 	 	}
 	 }
     
       
       
       
 var expander = new Ext.ux.grid.RowExpander({
        tpl : new Ext.Template(
            '<p><b>ͣ������:</b> {tdqd} </p> <p><b>���ϸſ�:</b> {gzms} </p>  <p><b>��բԭ��:</b> {tzyy} </p> <p><b>��ע:</b> {bz} </p> ')
     
    });
	//����Grid��ͷ
  
    var columns = new Ext.grid.ColumnModel([
        
        //new Ext.grid.RowNumberer(),
        expander,		
        {header:'���',dataIndex:'xh',width:35,fixed:true},
        {header:'��բʱ��',dataIndex:'bgsj',width:130,sortable:true,fixed:true},
        //{header:'�߱�',dataIndex:'xb',width:100,sortable:true,fixed:true},
        //{header:'������',dataIndex:'ssd',width:100,sortable:true,fixed:true},
        {header:'��ͤ',dataIndex:'gqmc',width:90,sortable:true},
        {header:'���غ�',dataIndex:'kgh',width:45,sortable:true},
        {header:'����װ��',dataIndex:'bhzzmc',width:40,sortable:true},
        {header:'�ʱ�',dataIndex:'sgjl',width:40,sortable:true},
        {header:'����ʱ��',dataIndex:'fhsj',width:130,sortable:true},
        {header:'ͣʱ(��)',dataIndex:'tdsf',width:55,sortable:true},
        {header:'���',dataIndex:'lb',width:60,sortable:true},
        {header:'�غ�բ״̬',dataIndex:'chzzt',renderer:zt,width:40,sortable:true},
        //{header:'��������',dataIndex:'gzms',width:160,sortable:true},
        //{header:'ʵ�ʹ��ϵص�',dataIndex:'sjgzdd',width:60,fixed:true},
        //{header:'ͣ������',dataIndex:'tdqd',width:70,sortable:true},
        //{header:'��բԭ��',dataIndex:'tzyy',width:50,sortable:true},
        //{header:'��ע',dataIndex:'bz',width:50,sortable:true},
        {header:'����Ա',dataIndex:'ddy',width:70,sortable:true,fixed:true}
        //{header:'�����',dataIndex:'shr',width:70,sortable:true,fixed:true}
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
    	{name:'xb_add',type:'string'}

    	]);
   
    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'remotefault_query_json.jsp'}),   
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
              title : 'ǣ����բ��¼����',
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
                                                               store :store_xlm,
                                                               //value:'ȫ��',
                                                               valueField : "value",// ��������ѡ����ֵ
                                                               displayField : "text",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               //blankText : '��ѡ����ҵ��λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '�߱�',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'xlm',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                              // allowBlank : false,//��ʾ�Ƿ��Ϊ��
                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '�߱�',// �ؼ��ı�����ѧ��
                                                               name:'xlm',
                                                               id : 'xlm_id',// �ٴ����ѣ�nameֻ�������б������
                                                               //id:'bds_id',
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 },
                                   	           {
                                           		columnWidth : .33,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                                                layout : 'form',// formlayout�������ÿؼ�
                                                border : false,// û�б߿�
                                                items : [{
                                                			xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store :store_ddt,
                                                               //value:'ȫ��',
                                                               valueField : "value",// ��������ѡ����ֵ
                                                               displayField : "text",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               //blankText : '��ѡ����ҵ��λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '���̨',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'adw',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '���̨',// �ؼ��ı�����ѧ��
                                                               name : 'adw',// �ٴ����ѣ�nameֻ�������б������
                                                               id:'txt_dw',
                                                                listeners:{"select":function(combo, planRecord_bdt,index){
                                                                
                                                                    var sldw=Ext.getCmp("txt_dw").value;
                                                                   
                                                                    var sql_bds_dw="select gqpym,gqmc from j_gyjc_gqzd t where t.ddtdm like \'"+sldw+"%25\' and (jglbdm!= 1 )";
                                                               		var combo2 = Ext.getCmp('bds_id'); 
                                                               		combo2.enable();      
                          											combo2.reset();  
                          											//alert(sql_bds_dw); 
                          											//combo2.disable();
                          											//sql_qjzc="select * from J_GYJC_QJZCZD where  gqdm=\'"+sldw+"\'";//\'"+userdwid+"%25\'";
                          											//alert(sql_qjzc);
                          										   combo2.store.proxy = new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_bds_dw});
                          										    combo2.store.load();
                                                               		}
                                                               },
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 		},
                                                 			
                                                 		{
                                           		columnWidth : .33,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                                                layout : 'form',// formlayout�������ÿؼ�
                                                border : false,// û�б߿�
                                                items : [{
                                                			xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store :store_ggdmc,
                                                               //value:'ȫ��',
                                                               valueField : "value",// ��������ѡ����ֵ
                                                               displayField : "text",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               //blankText : '��ѡ����ҵ��λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '������',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'ggdmc',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                              // allowBlank : false,
                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '������',// �ؼ��ı�����ѧ��
                                                               id : 'ggdmc_id',// �ٴ����ѣ�nameֻ�������б������
                                                               name : 'ggdmc',
                                                              // id:'bds_id',
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 },
                                                 	{
                                           		columnWidth :.33,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
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
                                                               emptyText : '��ͤ',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'taskunit',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '��ͤ',// �ؼ��ı�����ѧ��
                                                               name : 'taskunit',// �ٴ����ѣ�nameֻ�������б������
                                                               id:'bds_id',
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
                                                                             anchor : '90%',
                                                                             id:'txt_ksrq',
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
                                                                             //value: new Date,
                                                                             anchor : '90%',
                                                                             id:'txt_jsrq',
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                      }]
                                                 },{
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '���ϸſ�',
                                                                             name : 'gzmscx',
                                                                             //value: new Date,
                                                                             anchor : '90%',
                                                                             id:'txt_gzmscx'
                                                                             
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
				                                    var where="1=1 ";
				                                    //alert(Ext.getCmp("txt_ksrq").getValue());	
				                                   // alert(Ext.getCmp("txt_dw").getValue());
				                                    if(Ext.getCmp("txt_dw").getValue()!=''  && Ext.getCmp("txt_dw").getValue()!='ALL'){
														if(Ext.getCmp("txt_dw").getValue()=='003')
														{
														  where=where+" and (gq.ddtdm='00303' or gq.ddtdm='00304')";
														
														}
														else if(Ext.getCmp("txt_dw").getValue()=='002')
														{
														   where=where+" and (gq.ddtdm='00301' or gq.ddtdm='00302')";
														}
														else
														{
														where=where+" and gq.ddtdm='"+Ext.getCmp("txt_dw").getValue()+"' ";
														ddtdm_cell=Ext.getCmp("txt_dw").getValue();
														}
														
													}
													
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
													
													if(Ext.getCmp("xlm_id").getValue()!='' && Ext.getCmp("xlm_id").getValue()!='ALL'){
														where=where+" and gz.xb='"+Ext.getCmp("xlm_id").getValue()+"' ";
														cell_where=cell_where+" and gz.xb='"+Ext.getCmp("xlm_id").getValue()+"' ";
														
													}
													
													if(Ext.getCmp("ggdmc_id").getValue()!='' && Ext.getCmp("ggdmc_id").getValue()!='ALL'){
														where=where+" and gz.dm like '"+Ext.getCmp("ggdmc_id").getValue()+"%' ";
														cell_where=cell_where+" and gz.dm like '"+Ext.getCmp("ggdmc_id").getValue()+"%' ";
														
													}
													if(Ext.getCmp("txt_gzmscx").getValue()!=""){
														where=where+" and gz.gzms like '%"+Ext.getCmp("txt_gzmscx").getValue()+"%' ";
														cell_where=cell_where+" and gz.gzms like '%"+Ext.getCmp("txt_gzmscx").getValue()+"%' ";
														
													}
													
													//alert(Ext.getCmp("bds_id").getValue());
												//	store.baseParams.whereclause=stor_where1;
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
                                   }
                            },
                             {
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
            text : '��ӡ��¼',
            handler : function() {
									    var where="1=1 ";
	                                   if(Ext.getCmp("txt_dw").getValue()!=''  && Ext.getCmp("txt_dw").getValue()!='ALL'){
											if(Ext.getCmp("txt_dw").getValue()=='003')
											{
											  where=where+" and (gq.ddtdm='00303' or gq.ddtdm='00304')";
											
											}
											else if(Ext.getCmp("txt_dw").getValue()=='002')
											{
											   where=where+" and (gq.ddtdm='00301' or gq.ddtdm='00302')";
											}
											else
											{
											where=where+" and gq.ddtdm='"+Ext.getCmp("txt_dw").getValue()+"' ";
											ddtdm_cell=Ext.getCmp("txt_dw").getValue();
											}
											
										}
										
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
										
										if(Ext.getCmp("xlm_id").getValue()!='' && Ext.getCmp("xlm_id").getValue()!='ALL'){
											where=where+" and gz.xb='"+Ext.getCmp("xlm_id").getValue()+"' ";
											cell_where=cell_where+" and gz.xb='"+Ext.getCmp("xlm_id").getValue()+"' ";
											
										}
										
										if(Ext.getCmp("ggdmc_id").getValue()!='' && Ext.getCmp("ggdmc_id").getValue()!='ALL'){
											where=where+" and gz.dm like '"+Ext.getCmp("ggdmc_id").getValue()+"%' ";
											cell_where=cell_where+" and gz.dm like '"+Ext.getCmp("ggdmc_id").getValue()+"%' ";
											
										}
										if(Ext.getCmp("txt_gzmscx").getValue()!=""){
											where=where+" and gz.gzms like '%"+Ext.getCmp("txt_gzmscx").getValue()+"%' ";
											cell_where=cell_where+" and gz.gzms like '%"+Ext.getCmp("txt_gzmscx").getValue()+"%' ";
											
										}
								        ryshow(where);

                                   }
                            }]
       });
   

 
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		items: [simpleForm_Query,simple_Grid]
		
	});
    
 
    
     function getTime()
       {
          //***�õ���ǰʱ��**//
    var myyear,mymonth,myweek,myday,mytime,mymin,myhour,mysec;
	var mydate=new Date();
	myyear=mydate.getFullYear();
	mymonth=mydate.getMonth()+1;
	if(mymonth<10)
	mymoth="0"+mymoth;
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
   // Ext.getCmp("txt_jsrq").setValue(getTime()); txt_ksrq
    Ext.getCmp("txt_ksrq").setValue(get_nowTime());
     Ext.getCmp("txt_jsrq").setValue(getTime());
   function getTime2()
  {
    var myyear,mymonth;
	var mydate=new Date();
	myyear=mydate.getFullYear();
	mymonth=mydate.getMonth()+1;
	if(mymonth<10)
	//mymoth="0"+mymoth;
	return myyear+"-"+mymonth+"-"+0+1+" "+0+0+":"+0+0;
  }
   // Ext.getCmp("txt_ksrq").setValue(getTime2());

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
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
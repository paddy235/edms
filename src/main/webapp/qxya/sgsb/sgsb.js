Ext.onReady(function() {

	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var username=document.getElementById("txt_username").value;
    //System.out.println("�û�����:"+username);
    //alert(username);
    
    
 	 var renderDel =function(value)
 	 {
 	     return '<a  href="sgsb_del.jsp?gzid='+value+'">ɾ��</a>';
 	 };
  
   /*--�������---*/
	
	 var sql="select id,name from j_gdgy_wxxm";

 	var planRecord_wxxm = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
 	var gzlb_store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_wxxm)
    });
   gzlb_store.load(); 
     
     
 var sql="select dwdm,dwmc from v_j_gyjc_yhdw where jb=6";

 	var planRecord_sqdw = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
 	var zrbz_store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_sqdw)
    });
   zrbz_store.load();      
     
 
  var zzcdbz_store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_sqdw)
    });
   zzcdbz_store.load();
   
   
     var zzddbz_store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_sqdw)
    });
   zzddbz_store.load();
 

 var sql="select distinct yhdm, gwmc from j_gyjc_yh where dwjb=3";

 	var planRecord_sqdw = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
 	var zw_store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_sqdw)
    });
   zw_store.load();
     

     var simpleForm_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '�¹��ٱ����',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 800,
              collapsible:true,
              titleCollapse:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              labelWidth : 70,
              
              
              items : [{ layout : 'column',// columnlayout
                                   border : false,// û�б߿�
                                   labelSeparator : '��',// ����ķָ���������������ð�Ŵ���Ӣ�ĵ�ð�ţ�labelSeparator:'��'����
                                   // coulmnLayout��Ŀؼ���������items��
                                   items : [{
                                           		columnWidth : .50,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                                                layout : 'form',// formlayout�������ÿؼ�
                                                border : false,// û�б߿�
                                                items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '���ϵص�',
                                                                             name : 'gzdd',
                                                                             id:'txt_gzdd',
                                                                             //id:'time',
                                                                             anchor : '90%'
                                                                           
                                                                      }
                                                        
                                                 		]
                                                 },{
                                                        columnWidth : .23,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '����ʱ��',
                                                                             name : 'gzfssj',
                                                                             id:'txt_gzfssj',
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             //allowBlank : false,
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },
                                                 {
                                           		columnWidth : .25,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                                                layout : 'form',// formlayout�������ÿؼ�
                                                border : false,// û�б߿�
                                                items : [{
                                                               xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store :gzlb_store,
                                                               valueField : "value",// ��������ѡ����ֵ
                                                               displayField : "text",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               blankText : '�������',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '�������',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'gzlb',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : true,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '�������',// �ؼ��ı�����ѧ��
                                                               name : 'gzlb',// �ٴ����ѣ�nameֻ�������б������
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 		},{
                                           		columnWidth : .50,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                                                layout : 'form',// formlayout�������ÿؼ�
                                                border : false,// û�б߿�
                                                items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : 'ͣ������',
                                                                             name : 'tdqd',
                                                                             id:'txt_tdqd',
                                                                             //id:'time',
                                                                             anchor : '90%'
                                                                           
                                                                      }
                                                        
                                                 		]
                                                 },{
                                           		columnWidth : .50,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                                                layout : 'form',// formlayout�������ÿؼ�
                                                border : false,// û�б߿�
                                                items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : 'Ӱ�췶Χ',
                                                                             name : 'yxfw',
                                                                             id:'txt_yxfw',
                                                                             //id:'time',
                                                                             anchor : '90%'
                                                                           
                                                                      }
                                                        
                                                 		]
                                                 },{
                                                        columnWidth : .24,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store :zrbz_store,
                                                               valueField : "value",// ��������ѡ����ֵ
                                                               displayField : "text",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               blankText : '��ѡ���ΰ���',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '��ѡ���ΰ���',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'zrbz',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : true,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                              // allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '���ΰ���',// �ؼ��ı�����ѧ��
                                                               name : 'text_zrbz',// �ٴ����ѣ�nameֻ�������б������
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 },{
                                                        columnWidth : .23,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '֪ͨ��˾ʱ��',
                                                                             name : 'gstzsj',
                                                                             id:'txt_gstzsj',
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             //allowBlank : false,
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 }, {
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '֪ͨ�����ʱ��',
                                                                             name : 'ysdtzsj',
                                                                             id:'txt_ysdtzsj',
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             //allowBlank : false,
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth : .26,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '֪ͨ����ʱ��',
                                                                             name : 'bztzsj',
                                                                             id:'txt_bztzsj',
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             //allowBlank : false,
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 }]

                            },{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{
                                           		columnWidth : .24,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                                                layout : 'form',// formlayout�������ÿؼ�
                                                border : false,// û�б߿�
                                                items : [{
                                                			xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store :zzcdbz_store,
                                                               //value:'ȫ��',
                                                               valueField : "text",// ��������ѡ����ֵ
                                                               displayField : "text",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               //blankText : '��ѡ����ҵ��λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '�����������',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'zzcdbz',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : true,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '�����������',// �ؼ��ı�����ѧ��
                                                               name : 'zzcdbz',// �ٴ����ѣ�nameֻ�������б������
                                                               //id:'bds_id',
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 		},
                                                 {
                                                        columnWidth : .23,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : 'ʱ��',
                                                                             name : 'sj1',
                                                                             id:'txt_sj1',
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             //allowBlank : false,
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },
                                                 		{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '����',
                                                                             name : 'rs1',
                                                                             //allowBlank : false,
                                                                             //readOnly:true,
                                                                             //id:'txt_ddy',
                                                                             //disabled:true,
                                                                             anchor : '90%'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 },{
                                           		columnWidth : .26,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                                                layout : 'form',// formlayout�������ÿؼ�
                                                border : false,// û�б߿�
                                                items : [{
                                                			xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store :zzddbz_store,
                                                               //value:'ȫ��',
                                                               valueField : "text",// ��������ѡ����ֵ
                                                               displayField : "text",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               //blankText : '��ѡ����ҵ��λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '���絽�����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'zzddbz',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : true,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '���絽�����',// �ؼ��ı�����ѧ��
                                                               name : 'zzddbz',// �ٴ����ѣ�nameֻ�������б������
                                                               //id:'bds_id',
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 		}
                                              ]
                            },{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [
                                                 {
                                                        columnWidth : .24,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : 'ʱ��',
                                                                             name : 'sj2',
                                                                             id:'txt_sj2',
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             //allowBlank : false,
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },
                                                 		{
                                                        columnWidth : .23,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '����',
                                                                             name : 'rs2',
                                                                             //allowBlank : false,
                                                                             //readOnly:true,
                                                                             id:'txt_rs2',
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
                                                                             fieldLabel : '�����쵼��',
                                                                             name : 'qxldr',
                                                                             //allowBlank : false,
                                                                             //readOnly:true,
                                                                             id:'txt_qxldr',
                                                                             //disabled:true,
                                                                             anchor : '90%'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 },{
                                           		columnWidth : .26,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                                                layout : 'form',// formlayout�������ÿؼ�
                                                border : false,// û�б߿�
                                                items : [{
                                                			xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store :zw_store,
                                                               //value:'ȫ��',
                                                               valueField : "text",// ��������ѡ����ֵ
                                                               displayField : "text",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               //blankText : '��ѡ����ҵ��λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : 'ְ��',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'zw',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : true,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : 'ְ��',// �ؼ��ı�����ѧ��
                                                               name : 'zw',// �ٴ����ѣ�nameֻ�������б������
                                                               id:'bds_zw',
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 		}
                                              ]
                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{
                                                        columnWidth : .24,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '������',
                                                                             name : 'zrs',
                                                                             //allowBlank : false,
                                                                             //readOnly:true,
                                                                             id:'txt_zrs',
                                                                             //disabled:true,
                                                                             anchor : '90%'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 },{
                                                        columnWidth : .23,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : 'ͣ�翪ʼʱ��',
                                                                             name : 'tdkssj',
                                                                             id:'txt_tdkssj',
                                                                             allowBlank : false,
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 }, {
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : 'ͣ�����ʱ��',
                                                                             name : 'tdjssj',
                                                                             id:'txt_tdjssj',
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             allowBlank : false,
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 }, {
                                                        columnWidth : .26,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : 'ͣʱ���֣�',
                                                                             name : 'ztdsj',
                                                                             //allowBlank : false,
                                                                             id:'txt_ztdsj',
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             listeners:{"focus":function(){
	                                                                             var tdkssj=Ext.getCmp("txt_tdkssj").getValue();
	                                                                             var tdjssj=Ext.getCmp("txt_tdjssj").getValue();
	                                                                             var bg = new Date(tdkssj.replace("-","/")).getTime();
																				 var fh = new Date(tdjssj.replace("-","/")).getTime();
																				 if(tdkssj!=''&& tdjssj!='')
																				 {
																				    Ext.getCmp("txt_ztdsj").setValue((fh-bg)/60000);
																				 }
																				 
                                                                             }}
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 }
                                              ]
                            } ,{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [ {
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '���޿�ʼʱ��',
                                                                             name : 'qxkssj',
                                                                             id:'txt_qxkssj',
                                                                             allowBlank : false,
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 }, {
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '���޽���ʱ��',
                                                                             name : 'qxjssj',
                                                                             id:'txt_qxjssj',
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             allowBlank : false,
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 }, {
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '����ʱ���֣�',
                                                                             name : 'zqxsj',
                                                                             //allowBlank : false,
                                                                             id:'txt_zqxsj',
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             listeners:{"focus":function(){
	                                                                             var qxkssj=Ext.getCmp("txt_qxkssj").getValue();
	                                                                             var qxjssj=Ext.getCmp("txt_qxjssj").getValue();
	                                                                             var bg = new Date(qxkssj.replace("-","/")).getTime();
																				 var fh = new Date(qxjssj.replace("-","/")).getTime();
																				 if(qxkssj!=''&& qxjssj!='')
																				 {
																				    Ext.getCmp("txt_zqxsj").setValue((fh-bg)/60000);
																				 }
																				 
                                                                             }}
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 }]
                            },{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{
                                           		columnWidth : .50,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                                                layout : 'form',// formlayout�������ÿؼ�
                                                border : false,// û�б߿�
                                                items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '�豸�𻵼���Ա�������',
                                                                             name : 'sbqk',
                                                                             id:'txt_sbqk',
                                                                             //id:'time',
                                                                             anchor : '90%'
                                                                           
                                                                      }
                                                        
                                                 		]
                                                 },{
                                           		columnWidth : .50,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                                                layout : 'form',// formlayout�������ÿؼ�
                                                border : false,// û�б߿�
                                                items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : 'Ӱ���г�',
                                                                             name : 'yxlc',
                                                                             id:'txt_yxlc',
                                                                             //id:'time',
                                                                             anchor : '90%'
                                                                           
                                                                      }
                                                        
                                                 		]
                                                 }]
                            } ,{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{
                                           		columnWidth : .50,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                                                layout : 'form',// formlayout�������ÿؼ�
                                                border : false,// û�б߿�
                                                items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '������',
                                                                             name : 'cljg',
                                                                             id:'txt_cljg',
                                                                             //id:'time',
                                                                             anchor : '90%'
                                                                           
                                                                      }
                                                        
                                                 		]
                                                 },{
                                           		columnWidth : .50,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                                                layout : 'form',// formlayout�������ÿؼ�
                                                border : false,// û�б߿�
                                                items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : 'ԭ��',
                                                                             name : 'yy',
                                                                             id:'txt_yy',
                                                                             //id:'time',
                                                                             anchor : '90%'
                                                                           
                                                                      }
                                                        
                                                 		]
                                                 }]
                            },{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{
                                                        columnWidth : 1.06,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textarea',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '���������¼����',
                                                                             name : 'jxqkjl',
                                                                             id:'txt_jxqkjl',
                                                                             anchor : '90%',
                                                                             height:'50'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 },{  columnWidth : .20,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : 'ֵ�����Ա',
                                                                             name : 'zbddy',
                                                                             id:'txt_zbddy',
                                                                             //readOnly:true,
                                                                             //disabled:true,
                                                                             anchor : '90%'
                                                                            // format:'Y-m-d'
                                                                      }]
                                                 },{
                                                        columnWidth : .20,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '�ʱ��',
                                                                             name : 'tbsj',
                                                                             id:'txt_tbsj',
                                                                             allowBlank : false,
                                                                             //id:'time',
                                                                             anchor : '90%',
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                    columnWidth : .3,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                                         xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                         //fieldLabel : '����ID',
                                                         name : 'gzid',
                                                         id:'gzid',
                                                         hidden:true,
                                                         hideLable:true,
                                                       //  format:'Y-m-d'
                                                         allowBlank : true// ��ѡ��ֵ������Ϊ��
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
                                                                      url : 'sgsb_add.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                                                      // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                                                      success : function(form, action) {
                                                                             // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                                                             //Ext.Msg.alert('����',action.result.data);
                                                                             simple_Grid.getStore().reload();
                                                                      		Ext.Msg.alert('��Ϣ',action.result.msg);
                                                                      		//simpleForm_Query.form.reset();
                                                                      		// window.location.href='zyjhsq.jsp';
                                                                      		//simpleForm_Save.collapse();
                                                                      		
                                                                      	
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
                                             Ext.getCmp("txt_zbddy").setValue(username);
                                            simpleForm_Save.buttons[0].setVisible(true);
									        simpleForm_Save.buttons[1].setVisible(true);
									        simpleForm_Save.buttons[2].setVisible(false);
									        simpleForm_Save.buttons[3].setVisible(false);
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
                                                                      url : 'sgsb_update.jsp?gzid='+my_cjdm,
                                                                      method : 'post',
                                                                      params : '',
                                                                      // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                                                      // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                                                      success : function(form, action) {
                                                                             // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                                                            simpleForm_Save.buttons[0].setVisible(true);
                                               		                        simple_Grid.getStore().reload();
                                               		                        Ext.Msg.alert('��Ϣ',action.result.msg);
                                               		                        Ext.getCmp("gzid").enable(); 
                                                                      		
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
       

 	       
       
 //var expander = new Ext.ux.grid.RowExpander({
  //      tpl : new Ext.Template(
   //         '<p><b>�ָ�ʱ��:</b> {hfsj}  <b>�����:</b> {shr}  <b>����ʱ��:</b> {fhsj} </p> <p><b>ʵ�ʹ��ϵص�:</b> {sjgzdd} </p> <p><b>��������:</b> {gzms} </p>  <p><b>��բԭ��:</b> {tzyy} </p> <p><b>��ע:</b> {bz} </p> ')
           
  //  });
	//����Grid��ͷ
  
    var columns = new Ext.grid.ColumnModel([
        
        //new Ext.grid.RowNumberer(),
    //    expander,		
        {header:'����ID',dataIndex:'gzid',width:50,sortable:true,fixed:true},
        {header:'����ʱ��',dataIndex:'gzfssj',width:110,sortable:true,fixed:true},
        {header:'�������',dataIndex:'gzlbname',width:60,sortable:true,fixed:true},
        {header:'���ϵص�',dataIndex:'gzdd',width:250,sortable:true,fixed:true},
        {header:'���ΰ���',dataIndex:'zrbz',width:60,sortable:true,fixed:true},
       // {header:'ͣ������',dataIndex:'tdqd',width:250,sortable:true,fixed:true},
        {header:'�����쵼��',dataIndex:'qxldr',width:60,sortable:true,fixed:true},
        {header:'ͣʱ(��)',dataIndex:'ztdsj',width:60,sortable:true,fixed:true},
        {header:'����ʱ(��)',dataIndex:'zqxsj',width:55,sortable:true,fixed:true},
        
        {header:'������',dataIndex:'cljg',width:150,sortable:true,fixed:true},
        {header:'ԭ��',dataIndex:'yy',width:150,sortable:true,fixed:true},
        {header:'ֵ�����Ա',dataIndex:'zbddy',width:80,sortable:true,fixed:true},
        {header:'ɾ��',dataIndex:'gzid',width:90,renderer:renderDel,fixed:true}
        
      
    ]);
   
      
    var planRecord = Ext.data.Record.create([
    	{name:'gzid',type:'int'},
    	{name:'gzfssj',type:'string'},
    	{name:'gzdd',type:'string'},
    	{name:'gzlb',type:'string'},
    	{name:'gzlbname',type:'string'}, 
    	{name:'tdqd',type:'string'},
    	{name:'yxfw',type:'string'},
    	{name:'zrbz',type:'string'},
    	{name:'gstzsj',type:'string'},
    	{name:'ysdtzsj',type:'string'},	
    	{name:'bztzsj',type:'string'},
    	{name:'yxlc',type:'string'},
    	{name:'zzcdbz',type:'string'},
    	{name:'sj1',type:'string'},
    	{name:'rs1',type:'string'},
    	{name:'zzddbz',type:'string'},
    	{name:'sj2',type:'string'},
    	{name:'rs2',type:'string'},
        {name:'qxldr',type:'string'},
        {name:'zw',type:'string'},
    	{name:'zrs',type:'string'},
    	{name:'tdkssj',type:'string'},
    	{name:'tdjssj',type:'string'},
    	{name:'ztdsj',type:'string'},  
    	{name:'qxkssj',type:'string'},
    	{name:'qxjssj',type:'string'},
    	{name:'zqxsj',type:'string'},
    	{name:'sbqk',type:'string'},
    	{name:'cljg',type:'string'},	
    	{name:'yy',type:'string'},
    	{name:'jxqkjl',type:'string'},
    	{name:'zbddy',type:'string'},
    	{name:'tbsj',type:'string'}

    	]);

    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'sgsb_query_json.jsp'}),   
        baseParams:{whereclause:'1=1'},//�����ҳ��ʱ�����ֵ������ʧ����Ϊ����������ֻ�е����ѯ��ťʱ�Ż�ı�     
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


	  
    //��ʾ��html��idΪcontainer�Ĳ���
    //grid.render();//��Ⱦ���
    Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	 // form start
	var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '�¹��ٱ���ѯ',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 600,
               titleCollapse:true,
              collapsible:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              labelWidth : 56, 
              items : [{ layout : 'column',// columnlayout
                                   border : false,// û�б߿�
                                   labelSeparator : '��',// ����ķָ���������������ð�Ŵ���Ӣ�ĵ�ð�ţ�labelSeparator:'��'����
                                   // coulmnLayout��Ŀؼ���������items��
                                   items : [{
                                           		columnWidth : .25,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                                                layout : 'form',// formlayout�������ÿؼ�
                                                border : false,// û�б߿�
                                                items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '���ϵص�',
                                                                             name : 'gzdd',
                                                                             id:'txtgzdd',
                                                                             //id:'time',
                                                                             anchor : '90%'
                                                                           
                                                                      }
                                                        
                                                 		]
                                                 }, {
                                           		columnWidth : .25,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                                                layout : 'form',// formlayout�������ÿؼ�
                                                border : false,// û�б߿�
                                                items : [{
                                                               xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store :gzlb_store,
                                                               valueField : "value",// ��������ѡ����ֵ
                                                               displayField : "text",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               blankText : '�������',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '�������',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'gzlb',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : true,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '�������',// �ؼ��ı�����ѧ��
                                                               name : 'gzlb',// �ٴ����ѣ�nameֻ�������б������
                                                               id:'textgzlb',
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 	},{
                                    columnWidth : .23,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                             fieldLabel : '���Ͽ�ʼʱ��',
                                             name : 'gzfssj',
                                             id:'gzfssj1',
                                             //value: new Date,
                                             anchor : '90%',
                                             listeners: {"focus": function(){
                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                      }]
                             },{
                                    columnWidth : .23,
                                    layout : 'form',
                                    border : false,
                                    items : [{
                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                             fieldLabel : '����ʱ��',
                                             name : 'gzfssj',
                                             id:'gzfssj2',
                                             //value: new Date,
                                             anchor : '90%',
                                             listeners: {"focus": function(){
                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                      }]
                             }]

                            }],
              // Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
              buttons : [{
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
                                    text : '��ѯ',
                                   handler : function() {
                                          if (!simpleForm_Query.form.isValid()) {return };
                                   		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                                          if (simpleForm_Query.form.isValid()) {
				                              var where=" 1=1 "; 
				                              //alert(Ext.getCmp("txtgzdd").getValue());       
				                                if(Ext.getCmp("txtgzdd").getValue()!=""&&Ext.getCmp("txtgzdd").getValue()!="ALL" ){
													where=where+" and gzdd like '%"+Ext.getCmp("txtgzdd").getValue()+"%'";
												}
												if(Ext.getCmp("textgzlb").getValue()!=""&&Ext.getCmp("textgzlb").getValue()!="ALL" ){
													where=where+" and gzlb like '%"+Ext.getCmp("textgzlb").getValue()+"%'";
												}
											    if(Ext.getCmp("gzfssj1").getValue()!=""  ){
											        where=where+" and gzfssj>=to_date('"+Ext.getCmp("gzfssj1").getValue()+"','yyyy-mm-dd hh24:mi')";
										        }
										        if(Ext.getCmp("gzfssj2").getValue()!=""  ){
											        where=where+" and gzfssj<=to_date('"+Ext.getCmp("gzfssj2").getValue()+"','yyyy-mm-dd hh24:mi')";
										        }
												
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
            						var where=" 1=1 ";
                                  
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
									
									if(Ext.getCmp("ggdmc_id").getValue()!='' && Ext.getCmp("ggdmc_id").getValue()!='all'){
										where=where+" and gz.dm like '"+Ext.getCmp("ggdmc_id").getValue()+"%' ";
										cell_where=cell_where+" and gz.dm like '"+Ext.getCmp("ggdmc_id").getValue()+"%' ";
									}
									if(Ext.getCmp("txt_gzmscx").getValue()!=""){
										where=where+" and gz.gzms like '%25"+Ext.getCmp("txt_gzmscx").getValue()+"%25' ";
										cell_where=cell_where+" and gz.gzms like '%25"+Ext.getCmp("txt_gzmscx").getValue()+"%25' ";
									}
									
									if(Ext.getCmp("lbcx_id").getValue()!=''  && Ext.getCmp("lbcx_id").getValue()!='ALL'){
										where=where+" and gz.lb='"+Ext.getCmp("lbcx_id").getValue()+"' ";
										cell_where=cell_where+" and gz.lb='"+Ext.getCmp("lbcx_id").getValue()+"' ";	
									}
								        ryshow(" and "+where);
                                   }
                            }]
       });
       
       
       simpleForm_Save.collapse();
          	//Grid�ϴ����¼�
    var my_cjdm="";
       	simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
    	// simpleForm_Query.collapse();
    	simpleForm_Save.expand();
    	simpleForm_Save.buttons[0].setVisible(false);
    	simpleForm_Save.buttons[1].setVisible(true);
    	//simpleForm_Save.buttons[3].setVisible(true);
    	//simpleForm_Save.buttons[4].setVisible(true);
    	var record=simple_Grid.getStore().getAt(rowIndex);
    
    	
    	simpleForm_Save.getForm().loadRecord(record);
    	my_cjdm=Ext.getCmp("gzid").getValue();
    
    	Ext.getCmp("gzid").disable();
    });
   

Ext.getCmp("txt_zbddy").setValue(username);    
        	//˫���¼�
var onRowDoubleClick = function(grid, rowIndex, e){ 
        simpleForm_Save.expand();
    	simpleForm_Save.buttons[0].setVisible(true);
        //simpleForm_Save.buttons[1].setVisible(true);
        simpleForm_Save.buttons[1].setVisible(true);
        simpleForm_Save.buttons[2].setVisible(true);
        simpleForm_Save.buttons[3].setVisible(true);
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	simpleForm_Save.getForm().loadRecord(record);
    	
    	var ttyhmcs=ttyhmc.split("!#");
    	for(var i=0;i<ttyhmcs.length;i++)
    	{
	    	if(record.get('zzddy')==ttyhmcs[i])
	    	{
		        simpleForm_Save.buttons[0].setVisible(true);
		        //simpleForm_Save.buttons[1].setVisible(true);
		        simpleForm_Save.buttons[1].setVisible(true);
		        simpleForm_Save.buttons[2].setVisible(true);
		        simpleForm_Save.buttons[3].setVisible(true);
		        break;
	    	}
	    	else
	    	{
	    		simpleForm_Save.buttons[0].setVisible(false);
		        //simpleForm_Save.buttons[1].setVisible(true);
		        simpleForm_Save.buttons[1].setVisible(false);
		        simpleForm_Save.buttons[2].setVisible(false);
		        simpleForm_Save.buttons[3].setVisible(false);
	    	}
	    }
    	
    	if(username=='������'||username=='������'||username=='����')
    	{ 
    	simpleForm_Save.buttons[1].setVisible(true);
        simpleForm_Save.buttons[2].setVisible(true);
        simpleForm_Save.buttons[3].setVisible(true);
    	}
    	
    	
    }
   var my_cjdm="";
   simple_Grid.addListener('rowdblclick', onRowDoubleClick);
     
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		items: [simpleForm_Save,simpleForm_Query,simple_Grid]
		
	});
    
    simpleForm_Save.buttons[0].setVisible(true);
    simpleForm_Save.buttons[1].setVisible(true);
    simpleForm_Save.buttons[2].setVisible(true);
    simpleForm_Save.buttons[3].setVisible(false);
    simpleForm_Save.collapse();
    my_cjdm=Ext.getCmp("gzid").getValue();
    Ext.getCmp("gzid").enable();
    
    //simpleForm_Query.buttons[2].setVisible(false); 
    
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
        }
Ext.onReady(function() {
	
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var userdwid=document.getElementById("userDwid").value;
    //alert(userdwid);
    var expander = new Ext.ux.grid.RowExpander({
        tpl : new Ext.Template(
            '<p><b>�����:</b> {mlh} <b>����ʱ��:</b> {flsj} <b>��׼ʱ��:</b> {pzsj}  <b>Ҫ�����ʱ��:</b> {yqwcsj}  <b>����ʱ��:</b> {xlsj} <b>������:</b> {slr} </p>',
             '<p><b>��ҵ��������:</b> {mlnr}</p>'
            )
    });
	
        ///----��ѯ��λ��comlist-----------
    var sql="select ddtdm,ddtmc from j_gyjc_ddtzd  where ddtdm like \'"+userdwid+"%25\'";

 	var planRecord_bdt = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_bdt = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_bdt)
    });
     store_bdt.load();
	        ///----��ѯ��λ����Ա����-----------
    var sql_xm="select yhdm,yhmc from J_gyjc_yh where dwdm= \'"+userdwid+"\'";

 	var planRecord_xm = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_xm = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_xm}),        
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_xm)
    });
    // store_xm.load();
 	
	//����Grid��ͷ
    var columns = new Ext.grid.ColumnModel([
        
        //new Ext.grid.RowNumberer(),
        expander,		
        {header:'���',dataIndex:'xh',width:40,fixed:true},
        {header:'�����',dataIndex:'bdsmlh',width:100,fixed:true},
        {header:'����ʱ��',dataIndex:'bdsflsj',width:40,sortable:true},
        {header:'�����',dataIndex:'gqmc',width:40,sortable:true},
        {header:'������������',dataIndex:'bdsmlnr',width:40,sortable:true},
        {header:'��Ƭ��',dataIndex:'bdsczkah',width:40,sortable:true},
        {header:'��׼ʱ��',dataIndex:'bdspzsj',width:40,sortable:true},
         {header:'���ʱ��',dataIndex:'bdsxlsj',width:40,sortable:true},
          {header:'������',dataIndex:'bdsflr',width:40,sortable:true},
           {header:'������',dataIndex:'bdsslr',width:40,sortable:true}
           //{header:'�����',dataIndex:'mlh',width:40,sortable:true},
           //{header:'����ʱ��',dataIndex:'flsj',width:40,sortable:true},
           //{header:'��׼ʱ��',dataIndex:'pzsj',width:40,sortable:true},
          // {header:'Ҫ�����ʱ��',dataIndex:'yqwcsj',width:40,sortable:true},
          // {header:'����ʱ��',dataIndex:'xlsj',width:40,sortable:true},
          // {header:'������',dataIndex:'slr',width:40,sortable:true},
          // {header:'��ҵ��������',dataIndex:'mlnr',width:40,sortable:true}
           
      
    ]);
   
    
    var planRecord = Ext.data.Record.create([
    	{name:'xh',type:'int'},
    	{name:'bdsmlh',type:'string'},
    	{name:'bdsflsj',type:'string'},
    	{name:'bdssldwid',type:'string'},
    	{name:'bdsmlnr',type:'string'},
    	{name:'bdsczkah',type:'string'},
    	{name:'bdspzsj',type:'string'},
    	{name:'bdsxlsj',type:'string'},
    	{name:'bdsflr',type:'string'},
    	{name:'bdsslr',type:'string'},
    	{name:'mlh',type:'string'},
    	{name:'flsj',type:'string'},
    	{name:'pzsj',type:'string'},
    	{name:'yqwcsj',type:'string'},
    	{name:'xlsj',type:'string'},
    	{name:'slr',type:'string'},
    	{name:'mlnr',type:'string'},
    	{name:'gqmc',type:'string'}
    	]);
    	
        		
    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'dutylog_query_json.jsp'}), 
        baseParams:{whereclause:'t.bdsdwid like '+"'"+userdwid+"%'"},//�����ҳ��ʱ�����ֵ������ʧ����Ϊ����������ֻ�е����ѯ��ťʱ�Ż�ı�       
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
              title : 'ֵ����־��ѯ�����ò�ѯ����',
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
                                           		columnWidth : .25,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                                                layout : 'form',// formlayout�������ÿؼ�
                                                border : false,// û�б߿�
                                                items : [{
                                                			xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store :store_bdt,
                                                               //value:'ȫ��',
                                                               valueField : "value",// ��������ѡ����ֵ
                                                               displayField : "text",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               //blankText : '��ѡ����ҵ��λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '��λ',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'taskunit',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '��λ',// �ؼ��ı�����ѧ��
                                                               name : 'taskunit',// �ٴ����ѣ�nameֻ�������б������
                                                               id:'dw_id',
                                                               listeners:{"select":function(combo, planRecord_gq,index){
                                                                    var dwid=Ext.getCmp("dw_id").value;
                                                                    //alert(sldw);
                                                               		var combo2 = Ext.getCmp('txt_xm'); 
                                                               		combo2.enable();      
                          											combo2.reset();   
                          											//combo2.disable();
                          										    sql_xm="select yhdm,yhmc from J_gyjc_yh where dwdm= \'"+dwid+"\'";
                          											//alert(sql_qjzc);
                          										    combo2.store.proxy = new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_xm});
                          										    combo2.store.load();
                                                               		}
                                                               },
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 		},{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '����',
                                                                             name : 'ksrq',
                                                                             id:'txt_ksrq',
                                                                             //value: new Date,
                                                                             anchor : '90%',
                                                                             listeners : {
																					"focus" : function() {
																						WdatePicker({
																									dateFmt : 'yyyy-MM-dd'
																								})
																					}
																				}	
                                                                      }]
                                                 },{
                                           		columnWidth : .25,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                                                layout : 'form',// formlayout�������ÿؼ�
                                                border : false,// û�б߿�
                                                items : [{
                                                			xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store :store_xm,
                                                               //value:'ȫ��',
                                                               valueField : "text",// ��������ѡ����ֵ
                                                               displayField : "text",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               //blankText : '��ѡ����ҵ��λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'taskunit',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '����',// �ؼ��ı�����ѧ��
                                                               name : 'xm',// �ٴ����ѣ�nameֻ�������б������
                                                               id:'txt_xm',
                                                               anchor : '90%'// input�Ŀ����90%
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
													if(Ext.getCmp("txt_ksrq").getValue()!="" ){
														where=where+" and trunc(t.bdsflsj) =to_date('"+Ext.getCmp("txt_ksrq").getValue()+"','yyyy-mm-dd')";	
													}
													//if(Ext.getCmp("txt_ksrq").getValue()!="" ){
														//where=where+"  and t.bdsflsj <to_date('"+Ext.getCmp("txt_ksrq").getValue()+"','yyyy-mm-dd')+2";	
													//}
													if(Ext.getCmp("dw_id").getValue()!=''  && Ext.getCmp("dw_id").getValue()!='all'){
														where=where+" and t.bdsdwid='"+Ext.getCmp("dw_id").getValue()+"' ";
													}else{
														where=where+"and t.bdsdwid like '"+userdwid+"%'";
													}
													if(Ext.getCmp("txt_xm").getValue()!=''  && Ext.getCmp("txt_xm").getValue()!='all'){
														where=where+" and t.bdsflr='"+Ext.getCmp("txt_xm").getValue()+"' ";
													}
													//alert(where);
													store.baseParams.whereclause = where; 
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
                                          if(Ext.getCmp("txt_ksrq").getValue()!=""&&Ext.getCmp("dw_id").getValue()!=""&&Ext.getCmp("txt_xm").getValue()!="")
                                          {
		                                          var dwid=Ext.getCmp("dw_id").getValue();
		                                          var time=Ext.getCmp("txt_ksrq").getValue();
		                                          var name=Ext.getCmp("txt_xm").getValue();
		                                          //alert(name);
		                                          window.location.href='../../tjbb/query/zbrz.jsp?dwid='+dwid+'&time='+time+'&name='+name;
                                          }
                                          else
                                          {
                                                  Ext.Msg.alert('��Ϣ',"��ѡ���ѯ������");
                                          }
                                          
                                   }
                            }]
       });
   
   
   
     
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Query,simple_Grid]
		
	});
	Ext.getCmp("txt_ksrq").setValue(new Date().getYear()+"-"+(new Date().getMonth()+1)+"-"+new Date().getDate());
    
    //simpleForm_Save.collapse();

});
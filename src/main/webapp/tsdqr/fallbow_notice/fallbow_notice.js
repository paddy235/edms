Ext.onReady(function() {
	   
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
     var userdwid=document.getElementById("userDwid").value;
     var gzbh=document.getElementById("gzbh").value;
     var dljcjgsj=document.getElementById("dljcjgsj").value;
     var txt_mlh=document.getElementById("mlh").value;
     var userName=document.getElementById("userName").value;
     //var dich='dwid like '+"'"+userdwid+"%' and tzsj <=sysdate and tzsj>=to_date('"+get_nowTime()+"','yyyy-mm-dd hh24:mi')";//tzsj
     //var dich1='dwid like '+"'"+userdwid+"%'";
     var dich=" tzsj <=sysdate and tzsj>=to_date('"+get_nowTime()+"','yyyy-mm-dd hh24:mi')";//tzsj
     var dich1=" 1=1 ";
    //alert(userName);
    var renderzt =function(value)
 	 {
 	     if(value=="0") 
 	 	{
 	 	    return "<span style='color:red;font-weight:bold;'>���������</span>";

 	 	}
 	 	else if(value=="1")
 	 	{
 	 		return "<span style='color:blue;font-weight:bold;'>��������ѷ��͡��е�δǩ��</span>";

 	 	}
 	 	else if(value=="2")
 	 	{
 	 	return "<span style='color:green;font-weight:bold;'>��������ѷ��͡��е�δǩ��</span>";
 	 	
 	 	}
 	 	else if(value=="3")
 	 	{
 	 	return "<span style='color:red;font-weight:bold;'>�е�������ǩ�ϡ����δǩ��</span>";
 	 	
 	 	}
 	 	else if(value=="4")
 	 	{
 	 	 return "<span style='color:red;font-weight:bold;'>�������������</span>";
 	 	 
 	 	}
 	 	else if(value=="5")
 	 	{return "<span style='color:blue;font-weight:bold;'>��������ѷ��͡��е�δǩ��</span>";
 	 	}
 	 	else if(value=="6")
 	 	{return "<span style='color:green;font-weight:bold;'>��������ѷ��͡��е�δǩ��</span>";
 	 	}
 	 	else if(value=="7")
 	 	{ return "<span style='color:red;font-weight:bold;'>�е�������ǩ�ϡ����δǩ��</span>";
 	 	}
 	 	else if(value=="8")
 	 	{return "<span style='color:black;font-weight:bold;'>�е�������ǩ�ϡ������ǩ��</span>";
 	 	}
 	 };
        ///----��ѯ��λ��comlist-----------
    var sql="select ddtdm,ddtmc from j_gyjc_ddtzd  where ddtdm like \'"+userdwid+"%25\'&all=all";
     
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
    //����Grid��ͷ
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        //new Ext.grid.RowNumberer(),
        
        {header:'���',dataIndex:'xh',width:35,fixed:true},
        {header:'��λ����',dataIndex:'dwmc',width:88,sortable:true},
        {header:'���������',dataIndex:'mlh',width:60,sortable:true},
       // {header:'�����ص�',dataIndex:'jgdd',width:60,sortable:true},
        // {header:'����ԭ��',dataIndex:'jgyy',width:120,sortable:true},
        //{header:'��ֹλ��',dataIndex:'jsjtwz',width:60,sortable:true},
       // {header:'�б�',dataIndex:'xb',width:40,sortable:true},
        {header:'����',dataIndex:'jg',width:40,sortable:true},
        {header:'����',dataIndex:'sg',width:40,sortable:true},
       // {header:'׼������',dataIndex:'zbjg',width:60,sortable:true},
       // {header:'T����',dataIndex:'tjg',width:60,sortable:true},
        //{header:'���',dataIndex:'ddy',width:60,sortable:true},
        {header:'����ʱ��',dataIndex:'tzsj',width:88,sortable:true},
        //{header:'�е�',dataIndex:'xdy',width:60,sortable:true},
        {header:'�е�ȷ��ʱ��',dataIndex:'ccsj',width:88,sortable:true},
        //{header:'�г�����Ա',dataIndex:'xdy',width:50,sortable:true},
        //{header:'�������Ա',dataIndex:'ddy',width:50,sortable:true},
        {header:'״̬',dataIndex:'zt',width:180,renderer:renderzt,fixed:true}
    ]);
   
    
    var planRecord = Ext.data.Record.create([
    	{name:'xh',type:'int'},
    	{name:'tzid',type:'int'},
    	{name:'dwid',type:'string'},
    	{name:'dwmc',type:'string'},
    	{name:'mlh',type:'string'},
    	{name:'lcddy',type:'string'},
    	{name:'jgdd',type:'string'},
    	{name:'jsjtwz',type:'string'},
    	{name:'xb',type:'string'},
    	{name:'m_ksjtwx',type:'string'},
    	{name:'m_jsjtwx',type:'string'},
    	{name:'zbjg',type:'string'},
    	{name:'tjg',type:'string'},
    	{name:'zbjgb',type:'string'},
    	{name:'jg',type:'string'},
    	{name:'sg',type:'string'},
    	{name:'tzsj',type:'string'},
    	{name:'ccsj',type:'string'},
    	{name:'gdddy',type:'string'},
    	{name:'xdy',type:'string'},
    	{name:'ddy',type:'string'},
    	{name:'pdqk',type:'string'},
    	{name:'bz',type:'string'},
    	{name:'jgyy',type:'string'},
    	{name:'sgmlh',type:'string'},
    	{name:'zt',type:'string'}
    	]);
    	
    
    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'fallbow_notice_json.jsp'}), 
        baseParams:{whereclause:dich},//�����ҳ��ʱ�����ֵ������ʧ����Ϊ����������ֻ�е����ѯ��ťʱ�Ż�ı�       
                  
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
	// form start
	var simpleForm_Save = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '����֪ͨ�顪�Ǽ�',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 800,
              collapsible:true,
              titleCollapse:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              labelWidth : 100,
              
              
              items : [{
                                   layout : 'column',// columnlayout
                                   border : false,// û�б߿�
                                   labelSeparator : '��',// ����ķָ���������������ð�Ŵ���Ӣ�ĵ�ð�ţ�labelSeparator:'��'����
                                   // coulmnLayout��Ŀؼ���������items��
                                   items : [{xtype:'hidden',name:'tzid',id:'txt_tzid'}
                                   				,{
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '�����',
                                                                             name : 'mlh',
                                                                             id:'txt_mlh',
                                                                             //value:'asdfasdf',
                                                                             anchor : '90%'
                                                                            
                                                                      }]
                                                 }, {
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '�����ص�',
                                                                             name : 'jgdd',
                                                                             anchor : '90%',
                                                                             //blankText : '����д֪ͨ���',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                                             //emptyText : '��д֪ͨ���',
                                                                             allowBlank : false // ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 }, {
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store : new Ext.data.SimpleStore({
                                                                      // ͨ��һ�����鶨����returnValue��displayText�����ֶΡ�retrunValue�ֶ�ָ�����ύ����̨��ֵ��displayText�ֶ�ָ��������������ʾ��ѡ��ֵ��
                                                                      fields : ["returnValue", "displayText"],
                                                                      // �����˼�������.ÿ�����ݶ��Ǹ���fiedls�Ķ�������ɵģ��������һ��ֵ����retrunValue��ֵ���ڶ���ֵ����displayText��ֵ������[1,'Сѧ']���ͱ�ʾretrunValue��1��displayText��Сѧ��
                                                                      data : [['����', '����'],['����', '����'],['��ֱ', '��ֱ']]
                                                               }),
                                                               valueField : "returnValue",// ��������ѡ����ֵ
                                                               displayField : "displayText",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
                                                               blankText : '�б�',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '�б�',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'xb',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '�б�',// �ؼ��ı�����ѧ��
                                                               name : 'xb',// �ٴ����ѣ�nameֻ�������б������
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 }]

                            }, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '����������178.235��',
                                                                             //labelSeparator : '������K178.235��',
                                                                             name : 'jg',
                                                                             id:'txt_jg',
                                                                             //readOnly:true,
                                                                             anchor : '90%'
                                                                             
                                                                            
                                                                      }]
                                                 },{
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '����������178.675��',
                                                                             //labelSeparator : '',
                                                                             name : 'sg',
                                                                             id:'txt_sg',
                                                                             listeners:{"blur":function(){
			                                                               		var txt_jg=Ext.getCmp("txt_jg").getValue();
			                                                               		var txt_sg=Ext.getCmp("txt_sg").getValue();
			                                                               		
			                                                               		  if(!isNaN(txt_jg) && !isNaN(txt_sg))
			                                                               		  {
			                                                               		     //alert(parseFloat(txt_jg.substring(1))+100);
			                                                               		     var jg=""; var tjg="";
			                                                               		     if(parseFloat(txt_jg)<=parseFloat(txt_sg))
			                                                               		     {
			                                                               		       //alert("K"+parseFloat(txt_jg.substring(1)-0.25).toString());
			                                                               		        jg=(parseFloat(txt_jg)-0.25).toString();
			                                                               		        tjg=(parseFloat(txt_jg)-0.15).toString();
			                                                               		     }
			                                                               		     else
			                                                               		     {//.toFixed(3)
			                                                               		        jg=(parseFloat(txt_jg)+0.25).toString();
			                                                               		        tjg=(parseFloat(txt_jg)+0.15).toString();
			                                                               		     }
			                                                               		     //alert(tjg);
			                                                               		     //alert(jg);
			                                                               		     var w=jg.indexOf('.');
			                                                               		     var s=tjg.indexOf('.');
			                                                               		     //alert(w);
			                                                               		     //alert(jg.substring(0,(w+4)));
			                                                               		     Ext.getCmp("txt_zbjg").setValue(jg.substring(0,(w+4)));
			                                                               		     Ext.getCmp("txt_tjg").setValue(tjg.substring(0,(s+4)));
			                                                               		     //Ext.getCmp("txt_tjg").readOnly=false;
			                                                               		     //Ext.getCmp("txt_tjg").getEl().dom.readOnly=false;
			                                                               		      //Ext.getCmp("txt_zbjg").setValue(jg);txt_zbjg
			                                                               		     //Ext.getCmp("txt_tjg").setValue(tjg);
			                                                               		  }
			                                                               		  else
			                                                               		  {
			                                                               		     Ext.Msg.alert('��Ϣ',"��ȷ�������������ȷ��");
			                                                               		  }
			                                                               		  
			                                                               		}
			                                                               		
                                                               },
                                                                             //labelWidth : 20,
                                                                             anchor : '90%'
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 }]
                            }
                            /*, {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '׼������',
                                                                             name : 'zbjg',
                                                                             readOnly:true,
                                                                             id:'txt_zbjg',
                                                                             anchor : '90%'
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 }, {
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : 'T����',
                                                                             //labelSeparator : 'dfdfd',
                                                                             readOnly:true,
                                                                             name : 'tjg',
                                                                             id:'txt_tjg',
                                                                            // labelWidth : 20,
                                                                             anchor : '90%'
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 }]
                            }*/
                            , {
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [{
                                                        columnWidth : 1.06,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textarea',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '�¶����',
                                                                             name : 'pdqk',
                                                                             anchor : '90%',
                                                                             height:40
                                                                             //format:'Y-m-d'
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
                                                                             fieldLabel : '����ԭ��',
                                                                             name : 'jgyy',
                                                                             anchor : '90%',
                                                                             height:40
                                                                             //format:'Y-m-d'
                                                                      }]
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
                                                                             fieldLabel : '��ע',
                                                                             name : 'bz',
                                                                             anchor : '90%',
                                                                             height:40
                                                                             //format:'Y-m-d'
                                                                      }]
                                                 }]
                            },{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [ {
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '���',
                                                                             name : 'ddy',
                                                                             id:'txt_ddy',
                                                                             anchor : '90%'
                                                                            //format:'Y-m-d'
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '����ʱ��',
                                                                             name : 'tzsj',
                                                                             anchor : '90%',
                                                                             id:'txt_tzsj',
                                                                             allowBlank : false,
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                      }]
                                                 }]
                            },{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '��',
                                   items : [ {
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '�е�',
                                                                             name : 'xdy',
                                                                             id:'txt_xdy',
                                                                             anchor : '90%'
                                                                            //format:'Y-m-d'
                                                                             //allowBlank : false// ��ѡ��ֵ������Ϊ��
                                                                      }]
                                                 },{
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'textfield',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '�е�ȷ��ʱ��',
                                                                             name : 'ccsj',
                                                                             anchor : '90%',
                                                                             id:'txt_ccsj',
                                                                             //allowBlank : false,
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                      }]
                                                 }]
                            }
                           
                            ],
              //Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
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
                                                                      url : 'fallbow_notice_save.jsp',
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
                                                                      		//simpleForm_Save.collapse();
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
                                                                      url : 'fallbow_notice_update.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                                                      // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                                                      success : function(form, action) {
                                                                             // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                                                             //Ext.Msg.alert('����',action.result.data);
                                                                      		Ext.Msg.alert('��Ϣ',action.result.msg);
                                                                      		//simpleForm_Query.form.reset();
                                                                      		
                                                                      		simple_Grid.getStore().reload();
                                                                      		
                                                                      },
                                                                      // ����failure��������������ͨѶ���������ʱ����ʾ������Ϣ��
                                                                      failure : function() {
                                                                             Ext.Msg.alert('����', '�޸�ʧ�ܣ�');
                                                                             this.disabled = false;
                                                                      }
                                                               });
                                          }
                                    
                                   }
                            }, {

                                   // ȡ����ť���Ǽ򵥵�resetһ��form�Ŀؼ�
                                   text : '����',
                                   handler : function() {
									   var mlh_1=Ext.getCmp("txt_mlh").getValue();
									   var mlh_int=parseInt(mlh_1);
                                          simpleForm_Save.form.reset();
                                          //simpleForm_Query.collapse();
                                       simpleForm_Save.buttons[0].setVisible(true);
    	                               simpleForm_Save.buttons[2].setVisible(true);
    	                               simpleForm_Save.buttons[1].setVisible(false);
    	                               simpleForm_Save.buttons[3].setVisible(false);
    	                               simpleForm_Save.buttons[4].setVisible(false);
    	                               simpleForm_Save.buttons[5].setVisible(false);
							          if(mlh_int>=37101 && mlh_int<37201)
								       {
								       	mlh_int=mlh_int+2;
								       if(mlh_int>=37200)								       
								          {mlh_int=37101}
								       }
								       
								       
								       else if(mlh_int>=37201 && mlh_int<37301)
								       {
								       	mlh_int=mlh_int+2;
								       if(mlh_int>=37300)								       
								          {mlh_int=37201}
								       }
										Ext.getCmp("txt_mlh").setValue(mlh_int);
										Ext.getCmp("txt_ddy").setValue(userName);
                                   }
                            }, {
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
                                    text : 'ɾ��',
                                    disabledClass:'x-item-disabled',
                                   	handler : function() {
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                                          if (simpleForm_Save.form.isValid()) {
                                                 // ���水ťҪ���ľ�������basicform�Ŀͻ�����֤����֤ͨ���������øð�ť״̬Ϊdisable����ֹ2���ύ��Ȼ�����simpleForm.form.doAction�����ύ����
                                                 //this.disabled = true;
                                                 // doAction�����ĵ�һ��������submit������˼�Ǳ�ʾִ�е����ύ�������ύ�ĺ�̨ҳ����test.jsp��url:'test.asp'�����ύ��ʽ��post��method:'post'����û�������ύ������params:''��
                                                 simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'ɾ����,���Ժ�...',  
                                                                      url : 'fallbow_notice_delete.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                                                      // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                                                      success : function(form, action) {
                                                                             // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                                                             //Ext.Msg.alert('����',action.result.data);
                                                                      		Ext.Msg.alert('��Ϣ',action.result.msg);
                                                                      		simpleForm_Save.collapse();
                                                                      		simpleForm_Save.form.reset();
                                                                      		simpleForm_Save.buttons[1].setVisible(false);
    																		simpleForm_Save.buttons[3].setVisible(false);
    																		

                                                                      		simple_Grid.getStore().reload();
                                                                      		
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
                                    text : '��������֪ͨ��',
                                    disabledClass:'x-item-disabled',
                                   	handler : function() {
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                                          if (simpleForm_Save.form.isValid()) {
                                                 // ���水ťҪ���ľ�������basicform�Ŀͻ�����֤����֤ͨ���������øð�ť״̬Ϊdisable����ֹ2���ύ��Ȼ�����simpleForm.form.doAction�����ύ����
                                                 //this.disabled = true;
                                                 // doAction�����ĵ�һ��������submit������˼�Ǳ�ʾִ�е����ύ�������ύ�ĺ�̨ҳ����test.jsp��url:'test.asp'�����ύ��ʽ��post��method:'post'����û�������ύ������params:''��
                                                 simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'������,���Ժ�...',  
                                                                      url : 'fallbow_out.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                                                      // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                                                      success : function(form, action) {
                                                                             // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                                                             //Ext.Msg.alert('����',action.result.data);
                                                                      		Ext.Msg.alert('��Ϣ',action.result.msg);
                                                                      		simpleForm_Save.collapse();
                                                                      		simpleForm_Save.form.reset();
                                                                      		simpleForm_Save.buttons[1].setVisible(false);
    																		simpleForm_Save.buttons[3].setVisible(false);
    																		

                                                                      		simple_Grid.getStore().reload();
                                                                      		
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
                            },{
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
                                    text : '��ӡ֪ͨ��',
                                    disabledClass:'x-item-disabled',
                                   	handler : function() {
                                   	var txt_tzid=Ext.getCmp("txt_tzid").getValue();
                                   	//alert(txt_tzid);
                                   	ryshow(txt_tzid);
                                    //window.location.href='../../tjbb/query/jgtz.jsp?tzid='+txt_tzid;
                                       // alert("OPOPO");
                                   }
                            }, {
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
                                    text : '�����е�',
                                    disabledClass:'x-item-disabled',
                                   	handler : function() {
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                                          if (simpleForm_Save.form.isValid()) {
                                                 // ���水ťҪ���ľ�������basicform�Ŀͻ�����֤����֤ͨ���������øð�ť״̬Ϊdisable����ֹ2���ύ��Ȼ�����simpleForm.form.doAction�����ύ����
                                                 //this.disabled = true;
                                                 // doAction�����ĵ�һ��������submit������˼�Ǳ�ʾִ�е����ύ�������ύ�ĺ�̨ҳ����test.jsp��url:'test.asp'�����ύ��ʽ��post��method:'post'����û�������ύ������params:''��
                                                 simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'������,���Ժ�...',  
                                                                      url : 'fallbow_fs.jsp',
                                                                      method : 'post',
                                                                      params : '',
                                                                      // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                                                      // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                                                      success : function(form, action) {
                                                                             // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                                                             //Ext.Msg.alert('����',action.result.data);
                                                                      		Ext.Msg.alert('��Ϣ',action.result.msg);
                                                                      		simpleForm_Save.collapse();
                                                                      		simpleForm_Save.form.reset();
                                                                      		//simpleForm_Save.buttons[1].setVisible(false);
    																		//simpleForm_Save.buttons[3].setVisible(false);
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
                            }]
       });

	var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '����֪ͨ�顪��ѯ',
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
                                   items : [{
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                               xtype : 'combo',// �ؼ����������ó�combo
                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                               store : store_bdt,
                                                               valueField : "value",// ��������ѡ����ֵ
                                                               displayField : "text",// ��������ѡ������ʾ�ı�
                                                               mode : 'local',// �������ڱ���
                                                               forceSelection : true,// ����ѡ��һ��ѡ��
                                                               blankText : '��λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                               emptyText : '��λ',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                               hiddenName : 'tzdw',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                               //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                                                               fieldLabel : '��λ',// �ؼ��ı�����ѧ��
                                                               name : 'tzdw',// �ٴ����ѣ�nameֻ�������б������
                                                               id:'dw_id',   
                                                               anchor : '90%'// input�Ŀ����90%
                                                        }]
                                                 }, {
                                                        columnWidth : .33,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// �ؼ�������Ϊdatefield
                                                                             fieldLabel : '֪ͨ��ʼ����',
                                                                             name : 'ksrq',
                                                                             //value: new Date,
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
                                                                             id:'txt_jsrq',
                                                                             //value: new Date,
                                                                             anchor : '90%',
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
                                                   var where="1=1";
                                                  if(Ext.getCmp("txt_ksrq").getValue()!="" ){
														where=where+" and tzsj >=to_date('"+Ext.getCmp("txt_ksrq").getValue()+"','yyyy-mm-dd hh24:mi')";	
													}
													 //alert(Ext.getCmp("txt_jsrq").getValue());
													if(Ext.getCmp("txt_jsrq").getValue()!="" ){
														where=where+"  and tzsj <=to_date('"+Ext.getCmp("txt_jsrq").getValue()+"','yyyy-mm-dd hh24:mi')";	
													}
													if(Ext.getCmp("dw_id").getValue()!=''  && Ext.getCmp("dw_id").getValue()!='ALL'){
														where=where+" and dwid='"+Ext.getCmp("dw_id").getValue()+"' ";
													}
													//else
													//{
													//  where=where+'and dwid like '+"'"+userdwid+"%'"; 
													//}
													
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
                                          simpleForm_Query.form.reset();
                                            
                                          //simpleForm_Save.collapse();
                                         
                                   }
                            }]
       });    

	    
	       simpleForm_Save.buttons[6].setVisible(false);
       
       //Grid�ϴ����¼�
    simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
    	// simpleForm_Query.collapse();
    	simpleForm_Save.expand();
    	
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	//alert(rowIndex);
    	//alert(record.get('jhsj')+' '+record.get('jhh')+' '+record.get('dwid'));
    	simpleForm_Save.buttons[0].setVisible(false);
    	simpleForm_Save.buttons[1].setVisible(false);
        simpleForm_Save.buttons[3].setVisible(false);
        simpleForm_Save.buttons[4].setVisible(false);
        simpleForm_Save.buttons[5].setVisible(true);
        simpleForm_Save.buttons[6].setVisible(false);
        //simpleForm_Save.buttons[2].setVisible(true);
    	simpleForm_Save.getForm().loadRecord(record);
    	var zt=record.get('zt');
    	if(zt=='0')
    	{
    	   simpleForm_Save.buttons[4].setVisible(true);
    	   simpleForm_Save.buttons[1].setVisible(true);
           simpleForm_Save.buttons[3].setVisible(true);
           simpleForm_Save.buttons[6].setVisible(true);
           //txt_sgsj
           //Ext.getCmp("txt_sgsj").enable();
           //Ext.getCmp("txt_sgmlh").enable();
    	}
    	else
    	{
    	   //Ext.getCmp("txt_sgsj").enable();
    	   //Ext.getCmp("txt_sgmlh").enable();
    	   simpleForm_Save.buttons[1].setVisible(false);
    	   simpleForm_Save.buttons[2].setVisible(false);
    	   simpleForm_Save.buttons[3].setVisible(false);
    	}//alert("adfadf");
    	simpleForm_Save.buttons[4].setVisible(false);
    	//simpleForm_Save.buttons[6].setVisible(false);
    	
    	//Ext.getCmp("txt_sgmlh").setValue((parseInt(record.get('mlh'))+1));
    	//Ext.getCmp("txt_sgsj").setValue(getTime());
    	//txt_ksrq  txt_jsrq
    	
    	
    });	
    Ext.getCmp("txt_ddy").setValue(userName);
    
    Ext.getCmp("txt_ksrq").setValue(get_nowTime());
    	Ext.getCmp("txt_jsrq").setValue(getTime());
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		items: [simpleForm_Save,simpleForm_Query,simple_Grid]
		
	});
	if(gzbh!=null)
	{//alert(gzbh);
       Ext.getCmp("txt_mlh").setValue(gzbh);
    }
    if(dljcjgsj!=null)
    {
       Ext.getCmp("txt_tzsj").setValue(dljcjgsj);
    }
    simpleForm_Save.collapse();
    Ext.getCmp("txt_mlh").setValue(txt_mlh);
    simpleForm_Save.buttons[1].setVisible(false);
    simpleForm_Save.buttons[3].setVisible(false);
    simpleForm_Save.buttons[4].setVisible(false);
    simpleForm_Save.buttons[5].setVisible(false);
    //Ext.getCmp("dw_id").setValue(userdwid);
      this.ryshow=function(value){
		//alert("TZSID"+value);
    	win1 = new Ext.Window({
        	width:document.body.clientWidth-20,
        	height:document.body.clientHeight-10,
        	layout:'column',
       		title: '����֪ͨ��',
        	closeAction:'hide',
        	plain: true,
        	autoScroll:false,
        	html:'<iframe style="width:100%;height:100%" src="../../tjbb/query/jgtz.jsp?tzid='+value+'"></iframe>'
    	});
    	win1.show(this);
  	};

});


function getTime()
{
      var myyear,mymonth,myweek,myday,mytime,mymin,myhour,mysec;
	var mydate=new Date();
	myyear=mydate.getFullYear();
	mymonth=mydate.getMonth()+1;
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
	mytime=myyear+"-"+mymonth+"-"+myday+" "+myhour+":"+mymin;
	return mytime;
}
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
var DWDM=document.getElementById ("DWDM").value;
var YHMC=document.getElementById ("YHMC").value;
var ttyhmc=document.getElementById("ttyhmc").value;

Ext.onReady(function(){

	this.ryshow=function(value1){    
    	win1 = new Ext.Window({
        	width:document.body.clientWidth-20,
        	height:document.body.clientHeight-10,
        	layout:'column',
       		title: '����ͨ��',
        	closeAction:'hide',
        	plain: true,
        	autoScroll:false,
        	html:'<iframe style="width:100%;height:100%" src="../../tjbb/query/wtk.jsp?whereyxgl='+value1+'"></iframe>'
     	});
    	win1.show(this);
  	};
	
	
    Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
	var where1="";	
    //��Ⱦ����html����
 	 var renderDel =function(value)
 	 {
 	     return '<a  href="GzbgDel.jsp?gzbm='+value+'">ɾ��</a>';
 	 };
 	 var renderSfgd= function(value){
  		return (value=="0")?"δ�鵵":"�ѹ鵵";
 	 };
 	 
 	 //����Grid��ͷ
   	 var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
         new Ext.grid.RowNumberer(),
        //{header:'���',dataIndex:'id',width:40,sortable:true,fixed:true},
        {header:'ͨ��ʱ��',dataIndex:'SJ',sortable:true,width:80},
        {header:'֪ͨ��λ',dataIndex:'TZDWMC',sortable:true,width:80}, 
        {header:'������',dataIndex:'JSR',sortable:true,width:100},
        {header:'���յ绰',dataIndex:'JSDH',sortable:true,width:60},
        {header:'ͨ������',dataIndex:'TBNR',sortable:true,width:80},
        {header:'ֵ�����',dataIndex:'ZBDD',sortable:true,width:50}, 
        {header:'��ע',dataIndex:'BZ',sortable:true,width:40}
       // {header:'��ϸ',dataIndex:'id',width:60,renderer:renderXiangxi,fixed:true},
       // {header:'ɾ��',dataIndex:'gzbm',width:60,renderer:renderDel,fixed:true}
     ]);
     
     var planRecord = Ext.data.Record.create([
    	{name:'GZTBID',type:'string'},
    	{name:'SJ',type:'string'},
    	{name:'TZDWDM',type:'string'},
    	{name:'TZDWMC',type:'string'},
    	{name:'JSR',type:'string'},
    	{name:'JSDH',type:'string'},
    	{name:'TBNR',type:'string'},
    	{name:'ZBDD',type:'string'},
    	{name:'BZ',type:'string'} 
     ]);
     
     //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
	 var store = new Ext.data.Store({
     	proxy: new Ext.data.HttpProxy({url:'gztbLssj.jsp'}),      
     	baseParams:{whereclause:'1=1'},   
     	reader: new Ext.data.JsonReader({
     		totalProperty: 'totalCount',
     		root: 'root',
     		successProperty :'success'
        },planRecord)
    });
	store.load({params:{start:0, limit:10}});
	
	//���������,ָ����ģ�ͣ��ֿ⣬ѡ��ģ��(Ĭ����ѡ��ģ��)
    var simple_Grid = new Ext.grid.GridPanel({
        //title: 'δ������ϱ���', 
        store:store,
    	cm: columns,
    	sm: new Ext.grid.RowSelectionModel({singleSelcet:true}),
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
        //width:1000,
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
    
    //Grid�ϴ����¼�
    simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
    	simpleForm_Save.expand();
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	simpleForm_Save.getForm().loadRecord(record);
    	simpleForm_Save.buttons[3].setVisible(true); 
     
    	
    	simpleForm_Save.getForm().setValues([{id: "GZTBID",value: record.get("GZTBID")} ]);
    });	

    //grid.render();//��Ⱦ���
    Ext.form.Field.prototype.msgTarget = 'side'; 

    /*
     * ================  ����ǰ��λ�ã����Ͼ���---->�˹�����༭ =======================
    */
    
	var simpleForm_Query = new Ext.FormPanel({
		//renderTo : document.body,
       	title: '����ͨ����ѯ',
        labelAlign : 'left',
        bodyStyle:'padding:5px 5px 0',
        labelWidth: 60, 
        collapsible:true,
        titleCollapse:true,
        method:'POST',
        frame:true,
        autoWidth:true,
        //width: 1000,
        items : [{
            layout : 'column',// columnlayout
            border : false,// û�б߿�
            items : [{
            layout : 'column',// columnlayout
            border : false,// û�б߿�
            items : [{
                columnWidth : .3,
                layout : 'form',
                border : false,
                items : [{
                    xtype:'datefield',
                    fieldLabel: '��ʼ����',
                    name: 'ksrq',
                    id: 'ksrq',
                    anchor:'90%',
                    format:'Y-m-d'
                    //value:new Date(),
                    //allowBlank : false
                    //format:'Y-m-d H:i:s',
    				//timePicker:true
                }]
            }, {
               columnWidth : .3,
               layout : 'form',
               border : false,
               items : [{
                   xtype:'datefield',
                   fieldLabel: '��������',
                   name: 'jsrq',
                   id: 'jsrq',
                   anchor:'90%',
                   format:'Y-m-d'
                   //allowBlank : false
                }]
            }]
			}
           ], 
            buttons : [{
              buttonlAlign : 'right',
               text : '��ѯ',
               handler : function() {
               		if (!simpleForm_Query.form.isValid()) {return };
                    if (simpleForm_Query.form.isValid()) {
                       var where=" 1 = 1 ";										
						if(Ext.getCmp("ksrq").getValue()!="" ){
							where=where+" and trunc(fssj)>=to_date('"+Ext.util.Format.date(Ext.getCmp("ksrq").getValue(), 'Y-m-d')+"','yyyy-mm-dd')";	
						}
						if(Ext.getCmp("jsrq").getValue()!="" ){
							where=where+" and trunc(fssj)>=to_date('"+Ext.util.Format.date(Ext.getCmp("ksrq").getValue(), 'Y-m-d')+"','yyyy-mm-dd')";	
						} 
						store.baseParams.whereclause = where;
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

               text : '����',
               handler : function() {
                      simpleForm_Query.form.reset();
               }
         }
          ]}]
       });

    var simpleForm_Save = new Ext.FormPanel({
       	renderTo : document.body,
       	title: '����ͨ���༭',
        labelAlign : 'left',
        bodyStyle:'padding:5px 5px 0',
        labelWidth: 60, 
        collapsible:true,
        titleCollapse:true,
        method:'POST',
        frame:true,
        autoWidth:true,
        autoHeight: true,
        //width: 1000,
        items: [{xtype:'hidden',name:'GZTBID'},{
            layout:'column',		//��һ��
            items:[{
                columnWidth:.33,
                layout: 'form',
                items:[{
                    xtype : 'textfield',// �ؼ�������Ϊdatefield
                    fieldLabel : 'ͨ��ʱ��',
                    name : 'SJ',
                    allowBlank : false,
                    anchor : '90%',
                    listeners: {
                        		'focus': function(){WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}
                   	}
               	}]
            },{
                columnWidth:.33,
                layout: 'form',
                items:[{
                    xtype : 'textfield',// �ؼ�������Ϊdatefield
                    fieldLabel : '֪ͨ��λ',
                    name : 'TZDWMC', 
                    allowBlank : false,
                    anchor : '90%'
               	}]
            },{
                columnWidth:.33,
                layout: 'form',
                items:[{
                    xtype : 'textfield',// �ؼ�������Ϊdatefield
                    fieldLabel : '������',
                    name : 'JSR', 
                    allowBlank : false,
                    anchor : '90%'
               	}]
            }]
           },{
            layout:'column',		//������
            items:[{
	            columnWidth : .33,
	            layout : 'form',
	            border : false,
	            items : [{
	                xtype : 'textfield',// �ؼ�������Ϊdatefield
                    fieldLabel : '���յ绰',
                    name : 'JSDH',
                    //allowBlank : false,
                    anchor : '90%'
	            }]
	     },{
	            columnWidth : .33,
	            layout : 'form',
	            border : false,
	            items : [{
	                xtype : 'textfield',// �ؼ�������Ϊdatefield
                    fieldLabel : 'ͨ������',
                    name : 'TBNR',
                    //allowBlank : false,
                    anchor : '90%'
	            }]
	     },{
	            columnWidth : .33,
	            layout : 'form',
	            border : false,
	            items : [{
	                xtype : 'textfield',// �ؼ�������Ϊdatefield
                    fieldLabel : 'ֵ�����',
                    name : 'ZBDD',
                    //allowBlank : false,
                    anchor : '90%'
	            }]
	     }]
       },{
            layout:'column',		//������
            items:[{
	            columnWidth:.99,
                layout: 'form',
                items:[{
              		 xtype : 'textarea',
                     fieldLabel : '��ע',
                     name : 'BZ',
                     anchor : '97%',
                     height:45
         	}]
	     }]
       }],

         buttons: [{
            text: '����',
             handler : function() {
                  if (!simpleForm_Save.form.isValid()) {return };
                  if (simpleForm_Save.form.isValid()) {
                     simpleForm_Save.form.doAction('submit', {
                                                 	waitMsg:'������,���Ժ�...',  
                                                    url : 'gztbSave.jsp',
                                                    method : 'post',
                                                    params : '',
                                                    success : function(form, action) {
                                                             simple_Grid.getStore().reload();
                                                             simpleForm_Save.buttons[3].setVisible(false);
                                                             Ext.Msg.alert('��Ϣ',action.result.msg);
                                                    },
                                                    failure : function() {
                                                             Ext.Msg.alert('��Ϣ', '����ʧ�ܣ�');
                                                             this.disabled = false;
                                                    }
                     });
                   }
            }
        }, {
            text : '�޸�',
            Enabled:false,
            handler : function() {
            	if (!simpleForm_Save.form.isValid()) {return };
           		if (simpleForm_Save.form.isValid()) {
                	simpleForm_Save.form.doAction('submit', {
                                               waitMsg:'�޸���,���Ժ�...',  
                                               url : 'gztbUpdate.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		simpleForm_Save.buttons[0].setVisible(true);
                                               		//simpleForm_Save.buttons[3].setVisible(false);
                                               		simple_Grid.getStore().reload();
                                               		Ext.Msg.alert('��Ϣ',action.result.msg);
                                               },
                                               failure : function() {
                                                     Ext.Msg.alert('��Ϣ', '����ʧ�ܣ�');
                                                     this.disabled = false;
                                               }
            		});
           		 }
             }
         },{
             // ȡ����ť���Ǽ򵥵�resetһ��form�Ŀؼ�
             text : '����',
             handler : function() {
                   simpleForm_Save.form.reset();
                   simpleForm_Save.buttons[0].setVisible(true);
                   simpleForm_Save.buttons[1].setVisible(false);
                   simpleForm_Save.buttons[3].setVisible(false);
             }
        },{
             text : 'ɾ��',
             Enabled:false,
             handler : function() {
                	simpleForm_Save.form.doAction('submit', {
                                               waitMsg:'ɾ����,���Ժ�...',  
                                               url : 'gztbDel.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		simple_Grid.getStore().reload();
                                               		Ext.Msg.alert('��Ϣ',action.result.msg);
                                               },
                                               failure : function() {
                                                     Ext.Msg.alert('��Ϣ', 'ɾ��ʧ�ܣ�');
                                                     this.disabled = false;
                                               }
            		});
             }
        }]
    });
   
   var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Save,simpleForm_Query,simple_Grid]
	});
	//simple_Grid.collapse();
	simpleForm_Save.buttons[1].setVisible(true);
	simpleForm_Save.buttons[3].setVisible(true); 

});

var win;
function MPG(path) {
	//alert(path);
	player.innerHTML='<EMBED src="../vedio/'+path+'" width=664 height=424 ShowStatusBar=1></EMBED>';
}
Ext.onReady(function(){
	 
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var bd = Ext.getBody();
    var albm=document.getElementById ("yyalbm").value;

    this.yyshow=function(path){
       MPG(path);
       if(!win){
            win = new Ext.Window({
                applyTo:'hello-win',
                layout:'fit',
                width:680,
                height:460,
                closeAction:'hide',
                plain: true,

                items: new Ext.TabPanel({
                    applyTo: 'hello-tabs',
                    autoTabs:true,
                    activeTab:0,
                    deferredRender:false,
                    border:false
                })
            });
        }
        win.show(this);
    };
   

   	
    //��Ⱦ����html����
 	 var renderYyXs =function(value)
 	 {
 	     return '<a href=javascript:yyshow("'+value+'");>��ʾ</a>';   
 	 };
 	 var renderDel =function(value)
 	 {
 	     return '<a  href="GzyyDel.jsp?id='+value+'&albm='+albm+'">ɾ��</a>';
 	 };
 	 
 	 //����Grid��ͷ
   	 var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
         new Ext.grid.RowNumberer(),
        //{header:'���',dataIndex:'id',width:40,sortable:true,fixed:true},
        {header:'Ӱ������',dataIndex:'yymc',width: 100,sortable:true},
        {header:'Ӱ������',dataIndex:'sxmc',width: 100,sortable:true},
        {header:'Ӱ������',dataIndex:'yyms',width: 600,sortable:true},
        {header:'�ϴ�ʱ��',dataIndex:'scsj',width: 130,sortable:true},
        {header:'Ӱ����ʾ',dataIndex:'yylj',width: 60,renderer:renderYyXs,fixed:true},
       // {header:'��ϸ',dataIndex:'id',width:60,renderer:renderXiangxi,fixed:true},
        {header:'ɾ��',dataIndex:'yylj',width:60,renderer:renderDel,fixed:true}
     ]);
     
     var planRecord = Ext.data.Record.create([
    	{name:'id',type:'int'},
    	{name:'yymc',type:'string'},
    	{name:'yylx',type:'string'},
    	{name:'yyms',type:'string'},
    	{name:'yylj',type:'string'},
    	{name:'scsj',type:'string'},
    	{name:'albm',type:'string'},
    	
    	{name:'sxmc',type:'string'},
    	{name:'sjc',type:'string'}
     ]);
     
     //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
	 var store = new Ext.data.Store({
     	//proxy�������Ǵ�����������
     	proxy: new Ext.data.HttpProxy({url:'GzyyLssj.jsp?albm='+albm}),        
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
        //title: '��ʷ�¹�Ӱ��',
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
    	// simpleForm_Query.collapse();
    	simpleForm_Save.expand();
    	simpleForm_Save.buttons[0].setVisible(false);
    	simpleForm_Save.buttons[1].setVisible(true);
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	//alert(rowIndex);
    	//alert(record.get('albm'));
    	simpleForm_Save.getForm().loadRecord(record);
    });	

    //grid.render();//��Ⱦ���
    Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
	// form start        
    
    var YYLX_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select sxid,sxmc from J_GDGY_SXZD  where sxid>011000 and sxid<012000'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	YYLX_store.load();
    
	var simpleForm_Save = new Ext.FormPanel({
        renderTo : document.body,
        title: '�����鵵---->�����¹�Ӱ��',
        labelAlign : 'left',
        bodyStyle:'padding:5px 5px 0',
        labelWidth: 60,  
        collapsible:true,
        titleCollapse:true,
        method:'POST',
        frame:true,
        autoWidth:true, 
        fileUpload: true,
        items : [{
                    layout : 'column',
                    border : false,
                	items:[{xtype:'hidden',name:'id',id:'yy_id'},{xtype:'hidden',name:'albm'},{
                    	columnWidth:.5,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: 'Ӱ������',
                    		name: 'yymc',
                    		id: 'yymc_id',
                    		allowBlank : false,
                    		anchor:'95%'
                		}]
                	},{
                		columnWidth:.5,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',
                       		xtype : 'combo',
                       		store : YYLX_store,
                        	valueField : "value",
                        	displayField : "text",
                        	mode : 'local',
                        	//forceSelection : true,
                        	blankText : '��ѡ������',
                        	emptyText : 'ѡ��Ӱ������',
                        	hiddenName : 'yylx',
                        	editable : false,
                        	triggerAction : 'all',
                        	allowBlank : false,
                        	fieldLabel : 'Ӱ������',
                        	name : 'yylx',
                        	id : 'yylx_id',
                        	anchor : '95%'
    					}]	
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype : 'textarea',
                            fieldLabel : 'Ӱ������',
                            name : 'yyms',
                            id: 'yyms_id',
                            anchor : '97%',
                            height:45
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype: 'fileuploadfield',
            				id: 'yylj',
            				anchor: '97%',
            				allowBlank: false,
           					msgTarget: 'side',
            				emptyText: '��ѡ��Ӱ��',
           					fieldLabel: 'Ӱ���ϴ�',
            				name: 'yylj',
            				id: 'yylj_id',
            				buttonText: '',
            				buttonCfg: {
                				iconCls: 'upload-icon'
            				}
                		}]
                	}]
                }],
         buttons: [{
            text: '����',
             handler : function() {
                  if (!simpleForm_Save.form.isValid()) {return };
                  if (simpleForm_Save.form.isValid()) {
                  	 var yypath =document.getElementById ("yylj").value;
                  	 //if(yypath.substr(yypath.length - 4,4).toLowerCase() != ".wav")
                  	 //{
                  	 //	 Ext.Msg.alert("��ʾ","ֻ���ϴ� wav ��ʽ���ļ���");   
                	 //	 return; 
                  	 //}
                  	 var yy_id =Ext.getCmp("yy_id").getValue();
                  	 var yyms_id =Ext.getCmp("yyms_id").getValue();
                  	 var yylx_id =Ext.getCmp("yylx_id").getValue();
                  	 var yymc_id =Ext.getCmp("yymc_id").getValue();
                  	 var yylj_id =Ext.getCmp("yylj_id").getValue();
                     simpleForm_Save.form.doAction('submit', {
                                                 	waitMsg:'������,���Ժ�...',  
                                                    url : 'GzyySave.jsp?albm='+albm+'&yyms_id='+yyms_id+'&yylx_id='+yylx_id+'&yymc_id='+yymc_id+'&yylj_id='+yylj_id,
                                                    method : 'post',
                                                    params : '',
                                                    success : function(form, action) {
                                                            Ext.Msg.alert('��Ϣ',action.result.msg);
                                                            simple_Grid.getStore().reload();
                                                    },
                                                    failure : function() {
                                                             Ext.Msg.alert('����', '����ʧ�ܣ�');
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
                  	 //if(yypath.substr(yypath.length - 4,4).toLowerCase() != ".wav")
                  	 //{
                  	 //	 Ext.Msg.alert("��ʾ","ֻ���ϴ� wav ��ʽ���ļ���");   
                	 //	 return; 
                  	 //}
                  	 var yy_id =Ext.getCmp("yy_id").getValue();
                  	 var yyms_id =Ext.getCmp("yyms_id").getValue();
                  	 var yylx_id =Ext.getCmp("yylx_id").getValue();
                  	 var yymc_id =Ext.getCmp("yymc_id").getValue();
                  	 var yylj_id =Ext.getCmp("yylj_id").getValue();
                	simpleForm_Save.form.doAction('submit', {
                                               waitMsg:'�޸���,���Ժ�...',  
                                               url : 'GzyyUpdate.jsp?yyms_id='+yyms_id+'&yylx_id='+yylx_id+'&yymc_id='+yymc_id+'&yylj_id='+yylj_id+'&yy_id='+yy_id,
                                                    method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		simpleForm_Save.buttons[0].setVisible(true);
                                               		simple_Grid.getStore().reload();
                                               		Ext.Msg.alert('��Ϣ',action.result.msg);
                                               },
                                               failure : function() {
                                                     Ext.Msg.alert('����', '����ʧ�ܣ�');
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
                   simpleForm_Save.buttons[1].setVisible(false)
             }
        },{
            text: '���ͼƬ',
           handler : function() {
           		window.location.href='Gztp.jsp?albm='+albm;
           		//window.alert("albm:"+albm);
             }
        },{
            text: '����',
           handler : function() {
           		window.location.href='Algd.jsp';
             }
        }]
      });
      
	
	 var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Save,simple_Grid]
	});
	//simpleForm_Save.collapse();
	simpleForm_Save.buttons[1].setVisible(false);
  });
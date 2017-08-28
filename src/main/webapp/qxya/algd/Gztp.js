var custom,customEl;
var ResizableExample = {
    init : function(){
        custom = new Ext.Resizable('custom', {
            wrap:true,
            pinned:true,
            minWidth:50,
            minHeight: 50,
            preserveRatio: true,
            handles: 'all',
            draggable:true,           
            dynamic:true
        });
        customEl = custom.getEl();
        document.body.insertBefore(customEl.dom, document.body.firstChild);
        customEl.on('dblclick', function(){
            customEl.hide(true);
        });
        customEl.hide();
    }
};

Ext.EventManager.onDocumentReady(ResizableExample.init, ResizableExample, true);

function tpshow(path)
{
	//alert("3"+path);
	document.getElementById ("custom").src="../Images/"+path;
	customEl.center();
	customEl.show(true);
};
function tphide()
{
	customEl.hide(true);
};


Ext.onReady(function(){

    Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var bd = Ext.getBody();
    var albm=document.getElementById ("tpalbm").value;
    
    /*
     * ================  ������ѯ�� =======================
    */
    //��Ⱦ����html����
 	 var renderTpXs =function(value)
 	 {
 	 	 return '<a href=javascript:tpshow("'+value+'");>��ʾ</a>';  
 	     //return '<a href="#" mce_href="#" onclick="return tpshow('+value+');">��ʾ</a>';   
 	 };
 	 var renderDel =function(value)
 	 {
 	     return '<a  href="GztpDel.jsp?id='+value+'&albm='+albm+'">ɾ��</a>';
 	 };
 	 
 	 //����Grid��ͷ
   	 var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
         new Ext.grid.RowNumberer(),
        //{header:'���',dataIndex:'id',width:40,sortable:true,fixed:true},
        {header:'ͼƬ����',dataIndex:'tpmc',width:100,sortable:true},
        {header:'ͼƬ����',dataIndex:'sxmc',width:100,sortable:true},
        {header:'ͼƬ����',dataIndex:'tpms',width:600,sortable:true},
        {header:'�ϴ�ʱ��',dataIndex:'scsj',width:130,sortable:true},
        {header:'ͼƬ��ʾ',dataIndex:'tplj',width:60,renderer:renderTpXs,fixed:true},
       // {header:'��ϸ',dataIndex:'id',width:60,renderer:renderXiangxi,fixed:true},
        {header:'ɾ��',dataIndex:'tplj',width:60,renderer:renderDel,fixed:true}
     ]);
     
     var planRecord = Ext.data.Record.create([
    	{name:'id',type:'int'},
    	{name:'tpmc',type:'string'},
    	{name:'tplx',type:'string'},
    	{name:'tpms',type:'string'},
    	{name:'tplj',type:'string'},
    	{name:'scsj',type:'string'},
    	{name:'albm',type:'string'},
    	{name:'sxmc',type:'string'},
    	{name:'sjc',type:'string'}
     ]);
     
     //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
	 var store = new Ext.data.Store({
     	//proxy�������Ǵ�����������
     	proxy: new Ext.data.HttpProxy({url:'GztpLssj.jsp?albm='+albm}),        
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
        //title: '��ʷ�¹�ͼƬ',
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
    
    var TPLX_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql=select sxid,sxmc from J_GDGY_SXZD  where sxid>010000 and sxid<011000'
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	TPLX_store.load();
    
	var simpleForm_Save = new Ext.FormPanel({
        renderTo : document.body,
        title: '�����鵵---->�����¹�ͼƬ',
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
                	items:[{xtype:'hidden',name:'id',id:'tp_id'},{xtype:'hidden',name:'albm'},{
                    	columnWidth:.5,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: 'ͼƬ����',
                    		name: 'tpmc',
                    		id:'tpmc_id',
                    		allowBlank : false,
                    		anchor:'95%'
                		}]
                	},{
                		columnWidth:.5,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',
                       		store : TPLX_store,
                        	valueField : "value",
                        	displayField : "text",
                        	mode : 'local',
                        	//forceSelection : true,
                        	blankText : '��ѡ������',
                        	emptyText : 'ѡ��ͼƬ����',
                        	hiddenName : 'tplx',
                        	editable : false,
                        	triggerAction : 'all',
                        	allowBlank : false,
                        	fieldLabel : 'ͼƬ����',
                        	name : 'tplx',
                        	id:'tplx_id',
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
                            fieldLabel : 'ͼƬ����',
                            name : 'tpms',
                            anchor : '97%',
                            id:'tpms_id',
                            height:45
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{
                		layout: 'form',
                		border:false,
                		//fileUpload: true,
                		items: [{
                    		xtype: 'fileuploadfield',
            				anchor: '97%',
            				allowBlank: false,
           					msgTarget: 'side',
            				emptyText: '��ѡ��ͼƬ',
           					fieldLabel: 'ͼƬ�ϴ�',
            				name: 'tplj',
            				id:'tplj_id',
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
                  	 //if(tppath.substr(tppath.length - 4,4).toLowerCase() != ".jpg")
                  	 //{
                  	 //	Ext.Msg.alert("��ʾ","ֻ���ϴ�jpg��ʽ���ļ���");   
                	 //	return; 
                  	 //}
                  	 var tpms_id =Ext.getCmp("tpms_id").getValue();
                  	 var tplx_id =Ext.getCmp("tplx_id").getValue();
                  	 var tpmc_id =Ext.getCmp("tpmc_id").getValue();
                  	 var tplj_id =Ext.getCmp("tplj_id").getValue();
                     simpleForm_Save.form.doAction('submit', {
                                                 	waitMsg:'������,���Ժ�...',  
                                                    url : 'GztpSave.jsp?albm='+albm+'&tpms_id='+tpms_id+'&tplx_id='+tplx_id+'&tpmc_id='+tpmc_id+'&tplj_id='+tplj_id,
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
 
           			//if(tppath.substr(tppath.length - 4,4).toLowerCase() != ".jpg")
                  	//{
                  	// 	Ext.Msg.alert("��ʾ","ֻ���ϴ�jpg��ʽ���ļ���");   
                	//	return; 
                  	// }
                  	var tp_id =Ext.getCmp("tp_id").getValue();
                  	var tpms_id =Ext.getCmp("tpms_id").getValue();
                  	var tplx_id =Ext.getCmp("tplx_id").getValue();
                  	var tpmc_id =Ext.getCmp("tpmc_id").getValue();
                  	var tplj_id =Ext.getCmp("tplj_id").getValue();
                	simpleForm_Save.form.doAction('submit', {
                                               waitMsg:'�޸���,���Ժ�...',  
                                               url : 'GztpUpdate.jsp?tpms_id='+tpms_id+'&tplx_id='+tplx_id+'&tpmc_id='+tpmc_id+'&tplj_id='+tplj_id+'&tp_id='+tp_id,
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
                   simpleForm_Save.buttons[1].setVisible(false);
             }
        },{
            text: '���Ӱ��',
           handler : function() {
           		window.location.href='Gzyy.jsp?albm='+albm;
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
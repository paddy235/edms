
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

function liuchengtushow(path)
{
	//alert("3"+path);
	document.getElementById ("custom").src="../Images/"+path+".JPG";
	customEl.center();
	customEl.show(true);
};
function tphide()
{
	customEl.hide(true);
};
var renderYuanneirong =function(value)
 	 {
 	    //var url = 'ShowGzzd.jsp?id='+value;
 	 	//alert(url);
  	    return '<a href="'+value+'" target="view_window">�鿴��ϸ</a>';
 	 }; 	
void function  input_onclick3(url)
{
    //alert("��ʼ����ͼֽ��Ϣ��ȷ������ȴ�......");
	open_window(url,900,500,1);
}
function open_window(url,thisWidth,thisHeight,scrollbar){
//��һ���д���
    var left =(screen.width-thisWidth)/2;
    var top = (screen.height-thisHeight)/2;
    //left=300;   
    window.open(url,"","left="+left+",top="+top+",height="+thisHeight+",width="+thisWidth+",toolbar=no,location=no,directories=no,menubar=no,scrollbars="+scrollbar+",resizable=yes,status=1,center:yes");
	
}
var win1;
function MPG(path) {
	//alert(path);
	player.innerHTML='<EMBED src="../vedio/'+path+'" width=664 height=424 ShowStatusBar=1></EMBED>';
}

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

function tpshow()
{
	//alert("3"+path);
	document.getElementById ("custom").src="glb.JPG";
	customEl.center();
	customEl.show(true);
};
Ext.onReady(function(){
     Ext.QuickTips.init();    
     Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
   this.yyshow=function(path){
       MPG(path);
       if(!win1){
            win1 = new Ext.Window({
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
        win1.show(this);
}; 
var dwjb=document.getElementById("dwjb").value;
  //���ݷ��������б�	
	var nyfl_sql = "select sxid,sxmc from j_gdgy_sxzd where sxid>'020000' and sxid<'021000'";
    var nyfl_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+nyfl_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	nyfl_store.load();
	
	//רҵ���������б�	
	var zyfl_sql = "select sxid,sxmc from j_gdgy_sxzd where sxid>'015000' and sxid<'016000'";
    var zyfl_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+zyfl_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	zyfl_store.load(); 
	
	//������������б�	
	var jbfl_sql = "select sxid,sxmc from j_gdgy_sxzd where sxid>'021000' and sxid<'022000'";
    var jbfl_store = new Ext.data.Store({
			proxy : new Ext.data.HttpProxy({
					url : '../../share/combo_list.jsp?sql='+jbfl_sql
				}),
				reader : new Ext.data.JsonReader({root : 'root'
						},[{name : 'value',mapping : 'value'},
						   {name : 'text',mapping : 'text'}
						  ]
				)
	});
	jbfl_store.load();
	
	
  	//��Ⱦ����html���� renderTo ���Ϸ���
 	 var renderYuanneirong =function(value)
 	 {
 	    //var url = 'ShowGzzd.jsp?id='+value;
 	 	//alert(url);
  	    return '<a href="../vedio/'+value+'" target="view_window">����</a>';
 	 }; 	 
 	 var renderLiuchengtu =function(value)
 	 {  	  	 
	    return '<a href="#" mce_href="#" onclick="return liuchengtushow(' + value + ');">�鿴��ϸ</a>';       
 	 };
     var rendershanchu =function(value)
 	 {
 	     return '<a href="gzzdDel.jsp?id='+value+'">ɾ��</a>';
 	     alter(value);
 	 };
   
      //����Grid��ͷ
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        //new Ext.grid.RowNumberer(),
         {header:'���',dataIndex:'xh',width:40,fixed:true},
        //{header:'���',dataIndex:'id',width:35,fixed:true},
        {header:'��Ƶ����',dataIndex:'gzzdmc',width:360,fixed:true,sortable:true},
        //{header:'������λ',dataIndex:'fbdw',sortable:true},
        //{header:'��������',dataIndex:'fbrq',sortable:true},
        //{header:'רҵ����',dataIndex:'zyfl'},
        //{header:'���ݷ���',dataIndex:'nrfl'},
       	//{header:'�������',dataIndex:'jbfl'},
       	//{header:'��Ƶ����',dataIndex:'gzzdjs'},
        {header:'����',dataIndex:'gzzdlj',renderer:renderYuanneirong}   
        //{header:'����',dataIndex:'id',renderer:rendershanchu}
    ]); 
    
     var planRecord = Ext.data.Record.create([
        {name:'xh',type:'int'},
    	{name:'id',type:'int'},
    	{name:'gzzdmc',type:'string'},
    	//{name:'fbdw',type:'string'},
    	{name:'fbrq',type:'string'},
    	{name:'zyfl',type:'string'},
    	{name:'nrfl',type:'string'},
    	{name:'jbfl',type:'string'},
    	{name:'gzzdjs',type:'string'},
    	{name:'gzzdlj',type:'string'}
    	]);
    
     //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'gzzdList.jsp'}),        
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
        //tbar:[{xtype:'textfield',id:'tf_name',name:'tfname',width:90,emptyText:'��Ŀ����' },
          //     { text:'��ѯ1212', iconCls:'table_refresh', id:'bar_sel',handler:function(){alert("sdf")} } ],
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
        }),
        renderTo : document.body
    });    
 
    //Grid�ϴ����¼� renderTo 
    simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){ 
 	//	simpleForm_Query.collapse();
            // simple_Grid.collapse();   
        	 simpleForm_Save.expand();
    	
    	var record=simple_Grid.getStore().getAt(rowIndex);
 //   	alert(rowIndex);
    	//alert(record.get('gzzdlj'));
   
    	simpleForm_Save.getForm().loadRecord(record);
    	
		//simpleForm_Query.collapse();
    	
    });	
    //˫���¼�
   simple_Grid.addListener('rowdblclick', function(simple_Grid,rowIndex,event){ 
           var record=simple_Grid.getStore().getAt(rowIndex);
           yyshow(record.get('gzzdlj'));
    });	
   
    /*==============�޸�========*/
 
	var simpleForm_Save = new Ext.FormPanel({
        renderTo : document.body,
        title: '��Ƶ---�༭',
        buttonAlign : 'left',
        bodyStyle : 'padding:5px',             
        collapsible:true,
        titleCollapse:true,
        method:'POST',
        autoWidth:true,
        fileUpload: true,        
        frame : true,
        //labelWidth : 80,
 
        items : [{
                    layout : 'column',
                    border : false,
                	items:[{xtype:'hidden',name:'id',id:'xiu_id'},{xtype:'hidden',name:'albm'},
                	{
                    	columnWidth:.7,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '��Ƶ����',
                    		blankText : '����д��Ƶ����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��
                    		allowBlank : false,// ��ѡ��ֵ������Ϊ��
                    		name: 'gzzdmc',
                    		id:'gzzdmc_id',
                    		anchor:'95%'
                		}]
                	},
                	/*{
                    	columnWidth:.35,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '������λ',
                    		name: 'fbdw',
                    		blankText : '����д������λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��
                    		allowBlank : false,// ��ѡ��ֵ������Ϊ��
                    		anchor:'95%'
                    		
                		}]
                	},
                	*/
                	{
                	    columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'datefield',
                    		fieldLabel: '��������',
                    		name: 'fbrq',
                    		id:'fbrq_id',
                    		anchor:'95%',
                    		format:'Y-m-d',
                    		blankText : '����д����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��
                    		allowBlank : false,// ��ѡ��ֵ������Ϊ��
                    		value: new Date(),
    						timePicker:true
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{xtype:'hidden',name:'id'},{xtype:'hidden',name:'albm'},
                	{
                		layout: 'form',
                		border:false,
                		//fileUpload: true,
                		items: [{
                    		xtype: 'fileuploadfield',
            				id: 'gzzdlj_id',
            				anchor: '95%',
            				//allowBlank: false,
           					msgTarget: 'side',
            				emptyText: '��ѡ����Ƶ',
           					fieldLabel: '��Ƶ�ϴ�',
            				name: 'gzzdlj',
            				blankText : '���ϵ籨',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��
                    		allowBlank : false,// ��ѡ��ֵ������Ϊ��
            				buttonText: '',
            				buttonCfg: {
                				iconCls: 'upload-icon'
            				}
                		}]
                	}]
                },{
                    layout : 'column',
                    border : false,
                	items:[{xtype:'hidden',name:'id'},{xtype:'hidden',name:'albm'},
                	{
                    	columnWidth:1,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '��Ƶ����',
                    		name: 'gzzdjs',
                    		id:'gzzdjs_id',
                    		anchor:'95%'
                		}]
                	}]
                }],
              
  // Ϊform��Ӱ�ť��
    
  buttons: [{
            text: '����',
             handler : function() {
                  if (!simpleForm_Save.form.isValid()) {return };
                  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                  if (simpleForm_Save.form.isValid()) { 
                  	 var gzzdmc_id =Ext.getCmp("gzzdmc_id").getValue();
                  	 //var zyfl_id =Ext.getCmp("zyfl_id").getValue();
                  	 //var nrfl_id =Ext.getCmp("nrfl_id").getValue();                  
                  	 //var jbfl_id =Ext.getCmp("jbfl_id").getValue();
                  	 var fbrq_id =Ext.util.Format.date(Ext.getCmp("fbrq_id").getValue(), 'Y-m-d');
                  	 var gzzdjs_id =Ext.getCmp("gzzdjs_id").getValue();
          			 var gzzdlj_id =Ext.getCmp("gzzdlj_id").getValue();
    
                     simpleForm_Save.form.doAction('submit', {
                     	waitMsg:'������,���Ժ�...',  
                        url : 'gzzdSave.jsp?gzzdmc_id='+gzzdmc_id+'&fbrq_id='+fbrq_id+'&gzzdjs_id='+gzzdjs_id+'&gzzdlj_id='+gzzdlj_id,
                        
                        method : 'post',
                        params : '',
                        // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                        // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                        success : function(form, action) {
                                // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                 //Ext.Msg.alert('����',action.result.data);
                                 if(action.result.msg!="")
                                 {
                                 	document.getElementById ("albm").value=action.result.msg;
                                 	//simpleForm_Save.buttons[3].setVisible(true);
                                 	//simpleForm_Save.buttons[4].setVisible(true);
                                 	simple_Grid.getStore().reload();
                                 	Ext.Msg.alert('��Ϣ','����ɹ���');
                                 }
                                 //simpleForm_Query.form.reset();
                                
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
            text : '�޸�',
            Enabled:false,
            handler : function() {
            	if (!simpleForm_Save.form.isValid()) {return };
           		if (simpleForm_Save.form.isValid()) {
           		var xiu_id =Ext.getCmp("xiu_id").getValue();
           		var gzzdmc_id =Ext.getCmp("gzzdmc_id").getValue();
           		
           		//var zyfl_id =Ext.getCmp("zyfl_id").getValue();
           		//var nrfl_id =Ext.getCmp("nrfl_id").getValue();
           		//var jbfl_id =Ext.getCmp("jbfl_id").getValue();
           		//alert("nrfl_id:"+nrfl_id+"gzzdmc_id:"+gzzdmc_id);
           		 var fbrq_id =Ext.util.Format.date(Ext.getCmp("fbrq_id").getValue(), 'Y-m-d');
           		//alert("fbrq_id:"+fbrq_id);
           		var gzzdjs_id =Ext.getCmp("gzzdjs_id").getValue();
           		 
           		//alert("xiu_id:"+xiu_id);
           			var tppath =document.getElementById ("gzzdlj_id").value;
           			//alert("tppath:"+tppath);
                	simpleForm_Save.form.doAction('submit', {
                                               waitMsg:'�޸���,���Ժ�...',  
                                               url : 'gzzdUpdate.jsp?gzzdPath='+tppath+'&id='+xiu_id+'&gzzdmc='+gzzdmc_id+'&fbrq='+fbrq_id+'&gzzdjs='+gzzdjs_id,
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		simpleForm_Save.buttons[0].setVisible(true);
                                               		simple_Grid.getStore().reload();
                                               		Ext.Msg.alert('��Ϣ',action.result.msg);
                                               },
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
                   simpleForm_Save.form.reset();
                   simpleForm_Save.buttons[0].setVisible(true);
                   simpleForm_Save.buttons[1].setVisible(false); 
             }
        }]
       });
   	simpleForm_Save.collapse();

    
    var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '��Ƶ---��ѯ',
              buttonAlign : 'left',
              bodyStyle : 'padding:5px',             
              collapsible:true,
              titleCollapse:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              //labelWidth : 80,
              
              
              items : [{
                                   layout : 'column',// columnlayout
                                   
                                   border : false,// û�б߿�                                   
                                   labelSeparator : '��',// ����ķָ���������������ð�Ŵ���Ӣ�ĵ�ð�ţ�labelSeparator:'��'����
                                   // coulmnLayout��Ŀؼ���������items��
                                   items : [{
                                                  columnWidth : .5,                                                          
                                                  layout : 'form',
                                                  border : false,
                                                  items : [{
								                    xtype:'textfield',
								                    fieldLabel: '�ؼ���',
								                    name: 'gjz',														                   
								                    anchor:'95%'
								                }]
                                           }]

                            }],
              // Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
              buttons : [{
               // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
               buttonlAlign : 'right',
               text : '��ѯ',
               handler : function() {
                    if (!simpleForm_Query.form.isValid()) {return };
                    // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                    if (simpleForm_Query.form.isValid()) {
                    // ���水ťҪ���ľ�������basicform�Ŀͻ�����֤����֤ͨ���������øð�ť״̬Ϊdisable����ֹ2���ύ��Ȼ�����simpleForm.form.doAction�����ύ����
                    //this.disabled = true;
                    // doAction�����ĵ�һ��������submit������˼�Ǳ�ʾִ�е����ύ�������ύ�ĺ�̨ҳ����test.jsp��url:'test.asp'�����ύ��ʽ��post��method:'post'����û�������ύ������params:''��
                    simpleForm_Query.form.doAction('submit', {
                                     waitMsg:'��ѯ��,���Ժ�...',  
                                     url : 'gzzdQuery.jsp',
                                     method : 'post',
                                     params : '',
                                     // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                     // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                     success : function(form, action) {
                                     // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                                     //Ext.Msg.alert('����',action.result.data);
                                     //Ext.Msg.alert('��Ϣ',action.result.msg);
                                     //simpleForm_Query.form.reset();
                                      simple_Grid.getStore().reload();                               		
                    				 },
                     // ����failure��������������ͨѶ���������ʱ����ʾ������Ϣ��
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
	                        simpleForm_Query.form.reset();
	                        simpleForm_Save.collapse();
	                       // window.location.href="";
	                        //window.location.href='zyjhsqAdd.jsp';tpshow
	                 }
	          },{

	                 // ȡ����ť���Ǽ򵥵�resetһ��form�Ŀؼ�
	                 text : '�鿴�ֽ�ͼ',
	                 handler : function() {
	                         tpshow();
	                       // window.location.href="";
	                        //window.location.href='zyjhsqAdd.jsp';tpshow
	                 }
	          }]
       }); 
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items:[simpleForm_Save,simpleForm_Query,simple_Grid]		
	});
	if(dwjb=="1")
	{
	simpleForm_Save.hide();
	}
	 //bar_sel
  })
  
  

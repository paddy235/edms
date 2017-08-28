
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
	document.getElementById ("custom").src="../Images/"+5+".JPG";
	customEl.center();
	customEl.show(true);
};
function tphide()
{
	customEl.hide(true);
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
Ext.onReady(function(){
     Ext.QuickTips.init();    
     Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
   
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
  	    return '<a href="'+value+'" target="view_window">�鿴��ϸ</a>';
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
        new Ext.grid.RowNumberer(),
        
        //{header:'���',dataIndex:'id',width:35,fixed:true},
        {header:'�����ƶ�����',dataIndex:'gzzdmc',width:500,fixed:true,sortable:true},
        //{header:'������λ',dataIndex:'fbdw',sortable:true},
        {header:'��������',dataIndex:'fbrq',sortable:true},
        {header:'רҵ����',dataIndex:'zyfl'},
        {header:'���ݷ���',dataIndex:'nrfl'},
       	{header:'�������',dataIndex:'jbfl'},
       	//{header:'�����ƶȼ���',dataIndex:'gzzdjs'},
        {header:'��ϸ����',dataIndex:'gzzdlj',renderer:renderYuanneirong},       
        {header:'����',dataIndex:'id',renderer:rendershanchu}
    ]); 
    
     var planRecord = Ext.data.Record.create([
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
 //        simple_Grid.collapse();   
 //   	 simpleForm_Save.expand();
    	
    	var record=simple_Grid.getStore().getAt(rowIndex);
 //   	alert(rowIndex);
//    	alert(record.get('yabh'));
   
    	simpleForm_Save.getForm().loadRecord(record);
    	
		//simpleForm_Query.collapse();
    	
    });	
    	 
   
    /*==============�޸�========*/
 
	var simpleForm_Save = new Ext.FormPanel({
        renderTo : document.body,
        title: '�����ƶ�---�༭',
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
                	items:[{xtype:'hidden',name:'id'},{xtype:'hidden',name:'albm'},
                	{
                    	columnWidth:.7,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '�����ƶ�����',
                    		blankText : '����д�ƶ�����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��
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
                		columnWidth:.35,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store : zyfl_store,
                        	valueField : "text",// ��������ѡ����ֵ
                       		displayField : "text",// ��������ѡ������ʾ�ı�
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ��רҵ����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ��רҵ����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'zyfl',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	allowBlank : false,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : 'רҵ����',// �ؼ��ı�����ѧ��
                        	name : 'zyfl',// �ٴ����ѣ�nameֻ�������б������
                        	id:'zyfl_id',
                        	anchor : '95%'// input�Ŀ����90%
    					}]	
                	},{
                		columnWidth:.35,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store :nyfl_store,
                        	valueField : "text",// ��������ѡ����ֵ
                       		displayField : "text",// ��������ѡ������ʾ�ı�
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ�����ݷ���',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ�����ݷ���',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'nrfl',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	allowBlank : false,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : '���ݷ���',// �ؼ��ı�����ѧ��
                        	name : 'nrfl',// �ٴ����ѣ�nameֻ�������б������
                        	id:'nrfl_id',
                        	anchor : '95%'// input�Ŀ����90%
    					}]	
                	},{
                		columnWidth:.3,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// �ؼ����������ó�combo
                       		// ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        	store : jbfl_store,
                        	valueField : "text",// ��������ѡ����ֵ
                       		displayField : "text",// ��������ѡ������ʾ�ı�
                        	mode : 'local',// �������ڱ���
                        	//forceSelection : true,// ����ѡ��һ��ѡ��
                        	blankText : '��ѡ�񼶱����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        	emptyText : 'ѡ�񼶱����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        	hiddenName : 'jbfl',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        	editable : false,// �������б�ֻ����ѡ�񣬲���������
                        	triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        	allowBlank : true,// ��ѡ��ֵ������Ϊ��
                        	fieldLabel : '�������',// �ؼ��ı�����ѧ��
                        	name : 'jbfl',// �ٴ����ѣ�nameֻ�������б������
                        	id:'jbfl_id',
                        	anchor : '95%'// input�Ŀ����90%
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
            				emptyText: '��ѡ������ƶ��ĵ�',
           					fieldLabel: '�����ƶ��ϴ�',
            				name: 'gzzdlj',
            				blankText : '���ϴ������ƶ�',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��
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
                    		fieldLabel: '�����ƶ�����',
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
                  	 var zyfl_id =Ext.getCmp("zyfl_id").getValue();
                  	 var nrfl_id =Ext.getCmp("nrfl_id").getValue();                  
                  	 var jbfl_id =Ext.getCmp("jbfl_id").getValue();
                  	 var fbrq_id =Ext.util.Format.date(Ext.getCmp("fbrq_id").getValue(), 'Y-m-d');
                  	 var gzzdjs_id =Ext.getCmp("gzzdjs_id").getValue();
          			 var gzzdlj_id =Ext.getCmp("gzzdlj_id").getValue();
    
                     simpleForm_Save.form.doAction('submit', {
                     	waitMsg:'������,���Ժ�...',  
                        url : 'gzzdSave.jsp?gzzdmc_id='+gzzdmc_id+'&zyfl_id='+zyfl_id+'&nrfl_id='+nrfl_id+'&jbfl_id='+jbfl_id+'&fbrq_id='+fbrq_id+'&gzzdjs_id='+gzzdjs_id+'&gzzdlj_id='+gzzdlj_id,
                        
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
           			var tppath =document.getElementById ("gzzdlj").value;
                	simpleForm_Save.form.doAction('submit', {
                                               waitMsg:'�޸���,���Ժ�...',  
                                               url : 'gzzdUpdate.jsp?gzzdPath='+tppath,
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
                   //simpleForm_Save.buttons[3].setVisible(false);
                   //simpleForm_Save.buttons[4].setVisible(false);
                   //simpleForm_Query.collapse();
                   // window.location.href="";
                   //window.location.href='zyjhsqAdd.jsp';
             }
        }]
       });
   	simpleForm_Save.collapse();

    
    var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '�����ƶ�---��ѯ',
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
                                           }, {
                                                  columnWidth : .5,                                                        
                                                  layout : 'form',
                                                  border : false,
                                                  items : [{
                                                             xtype : 'combo',// �ؼ����������ó�combo
                                                             // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                             store : zyfl_store,
                                                             valueField : "text",// ��������ѡ����ֵ
                                                             displayField : "text",// ��������ѡ������ʾ�ı�
                                                             mode : 'local',// �������ڱ���
                                                             //forceSelection : true,// ����ѡ��һ��ѡ��
                                                             blankText : '��ѡ��רҵ����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                             emptyText : 'ѡ��רҵ����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                             hiddenName : 'zyfl',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                             editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                             triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                             allowBlank : true,// ��ѡ��ֵ������Ϊ��
                                                             fieldLabel : 'רҵ����',// �ؼ��ı�����ѧ��
                                                             name : 'zyfl',// �ٴ����ѣ�nameֻ�������б������
                                                             anchor : '95%'// input�Ŀ����97%
                                                      }]
                                           },{
                                                  columnWidth : .5,                                                        
                                                  layout : 'form',
                                                  border : false,
                                                  items : [{
                                                             xtype : 'combo',// �ؼ����������ó�combo
                                                             // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                             store : jbfl_store,
                                                             valueField : "text",// ��������ѡ����ֵ
                                                             displayField : "text",// ��������ѡ������ʾ�ı�
                                                             mode : 'local',// �������ڱ���
                                                             //forceSelection : true,// ����ѡ��һ��ѡ��
                                                             blankText : '��ѡ��ȼ�����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                             emptyText : 'ѡ��ȼ�����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                             hiddenName : 'jbfl',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                             editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                             triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                             allowBlank : true,// ��ѡ��ֵ������Ϊ��
                                                             fieldLabel : '�ȼ�����',// �ؼ��ı�����ѧ��
                                                             name : 'jbfl',// �ٴ����ѣ�nameֻ�������б������
                                                             anchor : '95%'// input�Ŀ����97%
                                                      }]
                                                 },{
                                                  columnWidth : .5,                                                        
                                                  layout : 'form',
                                                  border : false,
                                                  items : [{
                                                             xtype : 'combo',// �ؼ����������ó�combo
                                                             // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                                                             store : nyfl_store,
                                                             valueField : "text",// ��������ѡ����ֵ
                                                             displayField : "text",// ��������ѡ������ʾ�ı�
                                                             mode : 'local',// �������ڱ���
                                                             //forceSelection : true,// ����ѡ��һ��ѡ��
                                                             blankText : '��ѡ�����ݷ���',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                                                             emptyText : 'ѡ�����ݷ���',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                                                             hiddenName : 'nrfl',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                                                             editable : false,// �������б�ֻ����ѡ�񣬲���������
                                                             triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                                                             allowBlank : true,// ��ѡ��ֵ������Ϊ��
                                                             fieldLabel : '���ݷ���',// �ؼ��ı�����ѧ��
                                                             name : 'nrfl',// �ٴ����ѣ�nameֻ�������б������
                                                             anchor : '95%'// input�Ŀ����97%
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
	                        //window.location.href='zyjhsqAdd.jsp';
	                 }
	          }]
       });
   
      

   
	
  
    
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items:[simpleForm_Save,simpleForm_Query,simple_Grid]		
	});
	
	
	


	
	//simple_Viewport.render(document.body);
  })
  
  

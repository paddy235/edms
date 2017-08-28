
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
Ext.onReady(function(){//alert("sdfsdfsd");
     Ext.QuickTips.init();    
     Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
   var dich=" 1=1";
 
 
	
  
	
  	//��Ⱦ����html���� renderTo ���Ϸ���
 	 var renderYuanneirong =function(value)
 	 {
 	    //var url = 'ShowGzzd.jsp?id='+value;
 	 	//alert("sdfsdfsdf");
  	    return '<a href="lxt\\'+value+'" target="view_window">�鿴��ϸ</a>';
 	 }; 	 
 	 var renderLiuchengtu =function(value)
 	 {  	  	 
	    return '<a href="#" mce_href="#" onclick="return liuchengtushow(' + value + ');">�鿴��ϸ</a>';       
 	 };
     var rendershanchu =function(value)
 	 { 
 	     return '<a href="#" onclike="">ɾ��</a>';
 	 };
     
      //����Grid��ͷ
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        //new Ext.grid.RowNumberer(),
         {header:'���',dataIndex:'xh',width:40,fixed:true},
        //{header:'���',dataIndex:'id',width:35,fixed:true},  
       	{header:'·��ͼ����',dataIndex:'ZYZDSMC',width:360,fixed:true,sortable:true},
        //{header:'������λ',dataIndex:'fbdw',sortable:true},
        {header:'��������',dataIndex:'FBRQ',sortable:true},
        {header:'��ϸ����',dataIndex:'GZZDLJ',renderer:renderYuanneirong}
        //{header:'����',dataIndex:'id',renderer:rendershanchu}
    ]); 
    
     var planRecord = Ext.data.Record.create([
        {name:'xh',type:'int'},
    	{name:'id',type:'int'},
    	{name:'ZYZDSMC',type:'string'},
    	//{name:'fbdw',type:'string'},
    	{name:'FBRQ',type:'string'}, 
    	{name:'GZZDLJ',type:'string'}
    	]);
    
     //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'gzzdList.jsp'}),        
        //reader����������ν����������
        baseParams:{whereclause:dich},
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
            // simple_Grid.collapse();   
        	 simpleForm_Save.expand();
    	
    	var record=simple_Grid.getStore().getAt(rowIndex);
 //   	alert(rowIndex);
    	//alert(record.get('id'));
   
    	simpleForm_Save.getForm().loadRecord(record);
    	 
    	
    });	
    	 
   
    /*==============�޸�========*/
 
	var simpleForm_Save = new Ext.FormPanel({
        renderTo : document.body,
        title: '����·��ͼ---�༭',
        buttonAlign : 'left',
        bodyStyle : 'padding:5px',             
        collapsible:true,
        titleCollapse:true,
        method:'POST',
        autoWidth:true,
        fileUpload: true,        
        frame : true, 
        rame:true,
        items : [{
                    layout : 'column',
                    border : false,
                	items:[{xtype:'hidden',name:'id',id:'xiu_id'},
                	{
                    	columnWidth:.7,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '·��ͼ����',
                    		blankText : '·��ͼ����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��
                    		allowBlank : false,// ��ѡ��ֵ������Ϊ��
                    		name: 'ZYZDSMC',
                    		id:'ZYZDSMC_id',
                    		anchor:'95%'
                		}]
                	}, 
                	{
                	    columnWidth:.3,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'datefield',
                    		fieldLabel: '��������',
                    		name: 'FBRQ',
                    		id:'FBRQ_id',
                    		anchor:'95%',
                    		format:'Y-m-d',
                    		blankText : '����д����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��
                    		allowBlank : false,// ��ѡ��ֵ������Ϊ��
                    		value: new Date(),
    						timePicker:true
                		}]
                	}]
                } ,{
                    layout : 'column',
                    border : false,
                	items:[ 
                	{
                		layout: 'form',
                		border:false,
                		//fileUpload: true,
                		items: [{
                    		xtype: 'fileuploadfield',
            				id: 'GZZDLJ_id',
            				anchor: '95%',
            				//allowBlank: false,
           					msgTarget: 'side',
            				emptyText: '��ѡ��·��ͼ',
           					fieldLabel: '·��ͼ',
            				name: 'GZZDLJ',
            				blankText : '��·��ͼ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��
                    		allowBlank : false,// ��ѡ��ֵ������Ϊ��
            				buttonText: '',
            				buttonCfg: {
                				iconCls: 'upload-icon'
            				}
                		}]
                	}]
                }  
                ],
              
  // Ϊform��Ӱ�ť��
    
  buttons: [{
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
                                    text : '���',
                                    
                                   handler : function() {
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                                          if (simpleForm_Save.form.isValid()) {
                                          
							                     var ZYZDSMC_id =Ext.getCmp("ZYZDSMC_id").getValue();
							                  	 var FBRQ_id =Ext.util.Format.date(Ext.getCmp("FBRQ_id").getValue(), 'Y-m-d');
							                  	    //alert("asdf");
                                                   simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'������,���Ժ�...',  
                                                                      url : 'gzzdSave.jsp?ZYZDSMC_id='+ZYZDSMC_id+'&FBRQ_id='+FBRQ_id,
                                                                      method : 'post',
                                                                      params : '',
                                                                      // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                                                      // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                                                      success : function(form, action) { 
                                                                      		Ext.Msg.alert('��Ϣ',action.result.msg); 
                                                                      		simpleForm_Save.collapse();
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
                            }, {
            text : '�޸�',
            Enabled:false,
            handler : function() {
            	if (!simpleForm_Save.form.isValid()) {return };
           		if (simpleForm_Save.form.isValid()) {
 
   				    var ZYZDSMC_id =Ext.getCmp("ZYZDSMC_id").getValue();
					var FBRQ_id =Ext.util.Format.date(Ext.getCmp("FBRQ_id").getValue(), 'Y-m-d');
							                  	
		    
             var xiu_id =Ext.getCmp("xiu_id").getValue(); 
             //var gzzdjs_id =Ext.getCmp("gzzdjs_id").getValue();
           		//alert("xiu_id:"+xiu_id);
           			var tppath =document.getElementById ("GZZDLJ_id").value;
           			//alert("tppath:"+tppath);
                	simpleForm_Save.form.doAction('submit', {
                                               waitMsg:'�޸���,���Ժ�...',  
                                               url : 'gzzdUpdate.jsp?tppath='+tppath+'&xiu_id='+xiu_id+'&ZYZDSMC_id='+ZYZDSMC_id+'&FBRQ_id='+FBRQ_id,
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
        }, {
                                   // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
                                    text : 'ɾ��',
                                    disabledClass:'x-item-disabled',
                                   	handler : function() { 
                                   	Ext.Msg.confirm('��ʾ', '��ȷ��Ҫɾ��������Ϣô��', function(e){
  
                                     
                                     if(e=='yes')
                                     {  //alert("asdfasdfasdf");
                                   	      var xiu_id =Ext.getCmp("xiu_id").getValue();
                                          if (!simpleForm_Save.form.isValid()) {return };
                                   		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                                          if (simpleForm_Save.form.isValid()) {
                                                 // ���水ťҪ���ľ�������basicform�Ŀͻ�����֤����֤ͨ���������øð�ť״̬Ϊdisable����ֹ2���ύ��Ȼ�����simpleForm.form.doAction�����ύ����
                                                 //this.disabled = true;
                                                 // doAction�����ĵ�һ��������submit������˼�Ǳ�ʾִ�е����ύ�������ύ�ĺ�̨ҳ����test.jsp��url:'test.asp'�����ύ��ʽ��post��method:'post'����û�������ύ������params:''��
                                                 simpleForm_Save.form.doAction('submit', {
                                                 					  waitMsg:'ɾ����,���Ժ�...',  
                                                                      url : 'gzzdDel.jsp?id='+xiu_id,
                                                                      method : 'post',
                                                                      params : '',
                                                                      // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                                                                      // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                                                                      success : function(form, action) { //alert("asdfasdf");
                                                                            simple_Grid.getStore().reload(); 
                                               								Ext.Msg.alert('��Ϣ',action.result.msg);
                                                                      },
                                                                      // ����failure��������������ͨѶ���������ʱ����ʾ������Ϣ��
                                                                      failure : function() {
                                                                             Ext.Msg.alert('����', 'ɾ��ʧ�ܣ�');
                                                                             this.disabled = false;
                                                                      }
                                                               });
                                          }
                                       }
                                          
                                          
});
                                   }
                            }]
       });
   	simpleForm_Save.collapse();

    
    var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '����·��ͼ--��ѯ',
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
								                    id:'gjz_id',													                   
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
                        var where="  1=1 "; 
                        
                         if(Ext.getCmp("gjz_id").getValue()!="" ){ 
							where=where +" and ZYZDSMC like '%"+Ext.getCmp("gjz_id").getValue()+"%'";
						  } 
				 
						  //alert(where);
						store.baseParams.whereclause =where; 
                                 simple_Grid.getStore().reload({ 
							params : { 
							start : 0, 
							limit : 10 
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
	 
  })
  
  

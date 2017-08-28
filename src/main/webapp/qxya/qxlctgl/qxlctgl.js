
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



Ext.onReady(function(){
     Ext.QuickTips.init();    
     Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
   
   
     var DWJB=document.getElementById ("DWJB").value;
   
   
  	//��Ⱦ����html���� renderTo ���Ϸ���
 	 var renderYuanneirong =function(value)
 	 {
 	   //  return '<a href="xiangxi.jsp?yabh='+value+'">�鿴��ϸ</a>';
 	    return '<a href="#">�鿴��ϸ</a>';
 	 }; 	 
 	 var renderLiuchengtu =function(value)
 	 {  	  	 
	    return '<a href="#" mce_href="#" onclick="return liuchengtushow(' + value + ');">�鿴��ϸ</a>';       
 	 };
  
   
      //����Grid��ͷ
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        //new Ext.grid.RowNumberer(),
        
        {header:'Ԥ�����',dataIndex:'yabh'},
        {header:'רҵ',dataIndex:'ZYMC',sortable:true},
        {header:'Ԥ������',dataIndex:'yamc',sortable:true},
        {header:'�������',dataIndex:'LBMC',sortable:true},
        {header:'��������',dataIndex:'XZMC'},
        {header:'�ƶ���',dataIndex:'zdr'},
        {header:'�ƶ�����',dataIndex:'zdrq'},
        {header:'Ԥ������',dataIndex:'yabh',renderer:renderYuanneirong},
        {header:'Ԥ������ͼ',dataIndex:'yabh',renderer:renderLiuchengtu}       
    ]); 
    
     var planRecord = Ext.data.Record.create([
    	{name:'yabh',type:'int'},
    	{name:'zy',type:'string'},
    	{name:'yamc',type:'string'},
    	{name:'gzlb',type:'string'},
    	{name:'gzxz',type:'string'},
    	{name:'ZYMC',type:'string'},
    	{name:'XZMC',type:'string'},
    	{name:'LBMC',type:'string'},
    	{name:'zdr',type:'string'},
    	{name:'zdrq',type:'string'},
    	{name:'yanr',type:'string'}
    	]);
    
     //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url:'../yacx/qxyacx_json.jsp'}),   
        baseParams:{whereclause:'1=1'},        
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

    	 simpleForm_Query.collapse();
 //        simple_Grid.collapse();   
    	 simpleForm_Upload.expand();
    	
    	var record=simple_Grid.getStore().getAt(rowIndex);
 //   	alert(rowIndex);
//    	alert(record.get('yabh'));
   
    	simpleForm_Upload.getForm().loadRecord(record);
    	
    	 simpleForm_Query.collapse();
    	
    });	
    	 
   
    /*==============�ϴ�����ͼ========*/
 
	var simpleForm_Upload = new Ext.FormPanel({
        renderTo : document.body,
        fileUpload: true,
        title: '�ϴ�����ͼ',
        labelAlign : 'left',
        bodyStyle:'padding:5px 5px 0',
        //labelWidth: 75, 
        collapsible:true,
        titleCollapse:true,
        method:'POST',
        frame:true,
        autoWidth:true,
        //width: 1000,
        //fileUpload: true,
       
         items : [{
                     layout : 'column',// columnlayout
                     
                     border : false,// û�б߿�                                   
                     labelSeparator : '��',// ����ķָ���������������ð�Ŵ���Ӣ�ĵ�ð�ţ�labelSeparator:'��'����
                     // coulmnLayout��Ŀؼ���������items��
                     items : [{xtype:'hidden',name:'yabh'}]
                     },{
                       columnWidth : 1.0,                                                        
                       layout : 'form',
                       border : false,
                       xtype:"textarea",
                       fieldLabel:"Ԥ������",                                  
                       name:"yanr",
                       height:200,
                       anchor:"95%"
                     },{
                    layout : 'column',
                    border : false,
                	items:[{
                		layout: 'form',
                		border:false,
                		fileUpload: true,
                		items: [{
                    		xtype: 'fileuploadfield',
            				id: 'lctlj',
            				anchor: '95%',
            				//allowBlank: false,
           					msgTarget: 'side',
            				emptyText: '��ѡ������ͼ',
           					fieldLabel: '����ͼ�ϴ�',
            				name: 'lctlj',
            				buttonText: '',
            				buttonCfg: {
                				iconCls: 'upload-icon'
            				}
                		}]
                	}]
                }],
              // Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
              buttons : [{                                 
                                    text : '�ϴ�����ͼ',                                     
                                   handler : function() {
                                   	            
                                                 simpleForm_Upload.form.doAction('submit', {
                                                 					  waitMsg:'�ϴ���,���Ժ�...',  
                                                                      url: 'upload.jsp',
                                                                      method: 'post',
                                                                      params: '',                                                                  
                                                                      success: function() {   
                                                                        simple_Grid.getStore().reload();                                                                    
                                                                      	Ext.Msg.alert('��Ϣ','�ϴ��ɹ�');                                                                       	                                                                    		
                                                                      },
                                                                       failure : function() {
						                                                     Ext.Msg.alert('��Ϣ', '�ϴ�ʧ�ܣ�');
						                                                     this.disabled = false;
						                                               }                                                                         
                                                              }); 
                                          }                             
                            }]
       });
   	simpleForm_Upload.collapse();    
 
    var zy_store = new Ext.data.Store({
				// proxy�������Ǵ�����������
				proxy : new Ext.data.HttpProxy({
							url : '../../share/combo_list.jsp?sql=select sxid,sxmc from J_GDGY_SXZD  where sxid>015000 and sxid<016000&all=all'
						}),
				// reader����������ν����������
				reader : new Ext.data.JsonReader({
							root : 'root'
						}, [{
									name : 'value',
									mapping : 'value'
								}, {
									name : 'text',
									mapping : 'text'
								}])
			});
	zy_store.load();
    
    var gzlb_store = new Ext.data.Store({
				// proxy�������Ǵ�����������
				proxy : new Ext.data.HttpProxy({
							url : '../../share/combo_list.jsp?sql=select sxid,sxmc from J_GDGY_SXZD  where sxid>009000 and sxid<010000&all=all'
						}),
				// reader����������ν����������
				reader : new Ext.data.JsonReader({
							root : 'root'
						}, [{
									name : 'value',
									mapping : 'value'
								}, {
									name : 'text',
									mapping : 'text'
								}])
			});
	gzlb_store.load();	 
   
    var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : 'Ԥ������',
              buttonAlign : 'left',
              bodyStyle : 'padding:5px',             
              collapsible:true,
              titleCollapse:true,
              method:'POST',
              //autoWidth:true,
              frame : true,
              //labelWidth : 80,
              
              
              items : [{
                                   layout : 'column',// columnlayout
                                   
                                   border : false,// û�б߿�                                   
                                   labelSeparator : '��',// ����ķָ���������������ð�Ŵ���Ӣ�ĵ�ð�ţ�labelSeparator:'��'����
                                   // coulmnLayout��Ŀؼ���������items��
                                   items : [{
                                                        columnWidth : .33,                                                          
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
														                    xtype:'textfield',
														                    fieldLabel: '�ؼ���',
														                    name: 'gjz',	
														                    id: 'gjza',													                   
														                    anchor:'95%'
														                }]
                                                 }, {
                                                        columnWidth : .33,                                                        
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                        	                   xtype : 'combo',// �ؼ����������ó�combo
				                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
				                                                         /*      store : new Ext.data.SimpleStore({
				                                                                      // ͨ��һ�����鶨����returnValue��displayText�����ֶΡ�retrunValue�ֶ�ָ�����ύ����̨��ֵ��displayText�ֶ�ָ��������������ʾ��ѡ��ֵ��
				                                                                      fields : ["returnValue", "displayText"],
				                                                                      // �����˼�������.ÿ�����ݶ��Ǹ���fiedls�Ķ�������ɵģ��������һ��ֵ����retrunValue��ֵ���ڶ���ֵ����displayText��ֵ������[1,'Сѧ']���ͱ�ʾretrunValue��1��displayText��Сѧ��
				                                                                      data : [['�Ӵ���', '�Ӵ���'], ['�����', '�����']]
				                                                               }),
				                                                               valueField : "returnValue",// ��������ѡ����ֵ
				                                                               displayField : "displayText",// ��������ѡ������ʾ�ı�    */
				                                                               store : zy_store,
												                               valueField : "value",// ��������ѡ����ֵ
													                           displayField : "text",// ��������ѡ������ʾ�ı�
				                                                               mode : 'local',// �������ڱ���
				                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
				                                                               blankText : '��ѡ��ѧ��',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
				                                                               emptyText : 'ѡ��רҵ',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
				                                                               hiddenName : 'zy',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
				                                                               id : 'zya',
				                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
				                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
				                                                               allowBlank : true,// ��ѡ��ֵ������Ϊ��
				                                                               fieldLabel : 'רҵ',// �ؼ��ı�����ѧ��
				                                                               name : 'education',// �ٴ����ѣ�nameֻ�������б������
				                                                               anchor : '95%'// input�Ŀ����90%
				                                                        }]
                                                 }, {
                                                        columnWidth : .33,                                                        
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
				                                                               xtype : 'combo',// �ؼ����������ó�combo
				                                                               // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
				                                                          /*     store : new Ext.data.SimpleStore({
				                                                                      // ͨ��һ�����鶨����returnValue��displayText�����ֶΡ�retrunValue�ֶ�ָ�����ύ����̨��ֵ��displayText�ֶ�ָ��������������ʾ��ѡ��ֵ��
				                                                                      fields : ["returnValue", "displayText"],
				                                                                      // �����˼�������.ÿ�����ݶ��Ǹ���fiedls�Ķ�������ɵģ��������һ��ֵ����retrunValue��ֵ���ڶ���ֵ����displayText��ֵ������[1,'Сѧ']���ͱ�ʾretrunValue��1��displayText��Сѧ��
				                                                                      data : [['�Ӵ�������', '�Ӵ�������'], ['֧����', '֧����']]
				                                                               }),
				                                                               valueField : "returnValue",// ��������ѡ����ֵ
				                                                               displayField : "displayText",// ��������ѡ������ʾ�ı�    */
				                                                               store : gzlb_store,
												                               valueField : "value",// ��������ѡ����ֵ
													                           displayField : "text",// ��������ѡ������ʾ�ı�
				                                                               mode : 'local',// �������ڱ���
				                                                               //forceSelection : true,// ����ѡ��һ��ѡ��
				                                                               blankText : '��ѡ��ѧ��',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
				                                                               emptyText : 'ѡ��������',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
				                                                               hiddenName : 'gzlb',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
				                                                               id : 'gzlba',
				                                                               editable : false,// �������б�ֻ����ѡ�񣬲���������
				                                                               triggerAction : 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
				                                                               allowBlank : true,// ��ѡ��ֵ������Ϊ��
				                                                               fieldLabel : '�������',// �ؼ��ı�����ѧ��
				                                                               name : 'education',// �ٴ����ѣ�nameֻ�������б������
				                                                               anchor : '95%'// input�Ŀ����97%
				                                                        }]
                                                 }]

                            }],
              // Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
              buttons : [{                                 
                                    text : '��ѯ',                                     
                                   handler : function() {                                   	              
                                                if (!simpleForm_Query.form.isValid()) {return };
		                                   		  // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
		                                          if (simpleForm_Query.form.isValid()) {
		                                                 //�����ѯ��ť���޸�whereclause��ֵ����Ϊ������������ҳ������ʧ
														//��Ҫ��Ұ�ԭ��query.jsp�е�ƴwhereclause���߼��õ�������									
														where=" 1=1 ";				
														if(Ext.getCmp("gjza").getValue()!="" ){
															where=where+" and yanr like '%"+Ext.getCmp("gjza").getValue()+"%'";
														}
														if(Ext.getCmp("zya").getValue()!="" ){
														    if(Ext.getCmp("zya").getValue()=="ALL" ){
														    }else{
															     where=where+" and ZY='"+Ext.getCmp("zya").getValue()+"'";	
															}
														}
														if(Ext.getCmp("gzlba").getValue()!="" ){
														    if(Ext.getCmp("gzlba").getValue()=="ALL" ){
														    }else{
														         where=where+" and GZLB='"+Ext.getCmp("gzlba").getValue()+"'";	
														    }     
														}
														
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
                                          simpleForm_Upload.collapse();
                                         // window.location.href="";
                                          //window.location.href='zyjhsqAdd.jsp'; 
                                   }
                            }]
       });
   
 /*     
             //��sessionȡֵ��ֵ��form�ֶ�;
	Ext.Ajax.request({
		url: '../../share/Authority.jsp?',
		success: function(response, opts) 
		{
			var Qx=response.responseText;			
			var Qxs=Qx.split("!#");
			Admin=Qxs[0];
			Qxfz=Qxs[4];
			if(DWJB=="3")
			{
				if(Admin==1)
				{
					simpleForm_Upload.buttons[0].setVisible(true);
				}
				else if(Qxfz==1)
				{
					simpleForm_Upload.buttons[0].setVisible(true);
				}
				else
				{
					simpleForm_Upload.buttons[0].setVisible(false);
				}
			}
			else
			{
					simpleForm_Save.buttons[0].setVisible(false);
			}
		},		
		failure: function(response, opts) {
      		console.log('�����ʧЧ��״̬���룺' + response.status);
   		}
	});      
   
*/	
  
    
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items:[simpleForm_Upload,simpleForm_Query,simple_Grid]		
	});
	
	
	


	
	//simple_Viewport.render(document.body);
  })
  
  

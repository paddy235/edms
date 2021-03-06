	
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
	//alert("path="+path);
	document.getElementById ("custom").src="zhaopian/"+path+".JPG";
	customEl.center();
	customEl.show(true);
};
function tphide()
{
	customEl.hide(true);
};



Ext.onReady(function(){

    Ext.QuickTips.init();
	Ext.BLANK_IMAGE_URL = '../../../extjs-3.0/resources/images/default/s.gif';
    var bd = Ext.getBody();
    
    /*
     * ================  案例查询表单 =======================
    */
    //渲染返回html代码

 	 var renderDel =function(value)
 	 {
 	     return '<a  href="zzhDel.jsp?zzhbm='+value+'">删除</a>';
 	 };
 	
	 var renderTpXs =function(value)
 	 {
 	 	 //alert("value"+value);
 	     return '<a href="#" mce_href="#" onclick="return tpshow('+value+');">显示</a>';   
 	 };
 	 
 
	 var expander = new Ext.ux.grid.RowExpander({
        tpl : new Ext.Template(
            '<p><b>跨距:</b> {KJ}          <b>拉出值:</b> {LCZ}</p>',
        	'<p><b>接触线高度:</b> {JCXGD}  <b>侧面限界:</b> {CMXJ}</p>',
        	'<p><b>曲线半径:</b> {QXBJ}  	  <b>在区间站场内序号:</b> {SXH}</p>',
            '<p><b>经度:</b> {JD}  	      <b>纬度:</b> {WD}</p>',
			'<p><b>生产厂家:</b> {SCCJ}  	      <b>投运日期:</b> {RYRQ}</p>')
    });	
	 
 	 var columns = new Ext.grid.ColumnModel([
 	     expander,		
         new Ext.grid.RowNumberer(),
        {header:'支柱名称',dataIndex:'ZZHMC',sortable:true,width:60,sortable:true},
        {header:'区间站场',dataIndex:'QJZC',sortable:true},
        {header:'线别',dataIndex:'XBBM',sortable:true},
        {header:'上下行',dataIndex:'SXXBM',sortable:true,width:60,sortable:true},
        {header:'公里标',dataIndex:'ZZGLB',sortable:true,width:60,sortable:true},
        {header:'设备型号',dataIndex:'SBXH',sortable:true,width:60,sortable:true},
        {header:'支柱类别',dataIndex:'ZZLB',sortable:true,width:60,sortable:true},             
       	{header:'支柱材质',dataIndex:'ZZCZ',sortable:true,width:60,sortable:true},
       	//{header:'生产厂家',dataIndex:'SCCJ',sortable:true},
       	//{header:'投运日期',dataIndex:'RYRQ',sortable:true,width:130,sortable:true},         
       	{header:'查看照片',dataIndex:'ZZHBM',width:60,renderer:renderTpXs,fixed:true},
       	{header:'删除',dataIndex:'ZZHBM',width:60,renderer:renderDel,fixed:true}
     ]);
     
     var planRecord = Ext.data.Record.create([
        {name:'ZZHBM',type:'int'},
        {name:'ZZHMC',type:'string'},
        {name:'QJZC',type:'string'},       
        {name:'XBBM',type:'string'},
    	{name:'SXXBM',type:'string'},
    	{name:'ZZGLB',type:'string'},
        {name:'SBXH',type:'string'},
        {name:'ZZLB',type:'string'},
    	{name:'ZZCZ',type:'string'},
    	{name:'KJ',type:'string'},    	
    	{name:'LCZ',type:'string'},
    	{name:'JCXGD',type:'string'},
    	{name:'CMXJ',type:'string'},
        {name:'QXBJ',type:'string'},
        {name:'SCCJ',type:'string'},
    	{name:'RYRQ',type:'string'},
    	{name:'JD',type:'string'},    	
    	{name:'WD',type:'string'},
    	{name:'SXH',type:'string'},    	
    	{name:'ZP',type:'string'}
     ]);
    
     //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
	 var store = new Ext.data.Store({
     	proxy: new Ext.data.HttpProxy({url:'zzhlist.jsp'}),        
     	reader: new Ext.data.JsonReader({
     		totalProperty: 'totalCount',
     		root: 'root',
     		successProperty :'success'
        },planRecord)
    });
	store.load({params:{start:0, limit:10}});
	
	//定义表格面板,指定列模型，仓库，选择模型(默认行选择模型)
    var simple_Grid = new Ext.grid.GridPanel({
        //renderTo : 'Sbxx',
        //title: '设备信息', 
        store:store,
    	cm: columns,
    	sm: new Ext.grid.RowSelectionModel({singleSelcet:true}),
        viewConfig:{
        	forceFit:true,
         	columnsText:"显示的列",
         	sortAscText:"升序",
         	sortDescText:"降序"
        },
        loadMask:{msg:"数据加载中...."},        
        collapsible: true,
        titleCollapse:true,
        animCollapse: false,
        columnLines: true,
        autoWidth: true,
        autoHeight: true,
        plugins: expander,
        bbar: new Ext.PagingToolbar({
            pageSize: 10,
            store: store,
            displayInfo: true,
            displayMsg: '第 {0} 条到 {1} 条,共 {2} 条',
            emptyMsg: "无记录"
        })
    });
	 
    
    //Grid上触发事件
    simple_Grid.addListener('rowclick', function(simple_Grid,rowIndex,event){
    	// simpleForm_Query.collapse();
    	//simpleForm_Save.expand();
    	simpleForm_Save.buttons[0].setVisible(false);
    	simpleForm_Save.buttons[1].setVisible(true);
    	//simpleForm_Save.buttons[3].setVisible(true);
    	//simpleForm_Save.buttons[4].setVisible(true);
    	var record=simple_Grid.getStore().getAt(rowIndex);
    	//alert(record);
    	//alert(record.get('albm'));
    	
    	simpleForm_Save.getForm().loadRecord(record);
    });	

    //grid.render();//渲染表格
    Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
	// form start        

    /*
     * ========查询 =======================
    */
	var simpleForm_Query = new Ext.FormPanel({
		renderTo : document.body,
       	title: '接触网支柱---->查询',
        labelAlign : 'left',
        //bodyStyle:'padding:5px 5px 0',
        //labelWidth: 75, 
        collapsible:true,
        titleCollapse:true,
        method:'POST',
        frame:true,
        autoWidth:true,
        //width: 1000,
        items : [{
            layout : 'column',// columnlayout
            border : false,// 没有边框
            items : [{
              columnWidth : .5,
              layout : 'form',
              border : false,
              items: [{
                    		xtype : 'combo',
                        	store : new Ext.data.SimpleStore({
                        		fields : ["returnValue", "displayText"],
                        		data : [['', '全部'],['长沙站', '长沙站'],
                                   		['长沙-湘潭', '长沙-湘潭'], ['湘潭站', '湘潭站']]}),
                        	valueField : "returnValue",
                        	displayField : "displayText",
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择区间站场',
                        	emptyText : '选择区间站场',
                        	hiddenName : 'QJZC',
                        	editable : false,
                        	triggerAction : 'all',
                        	//allowBlank : false,
                        	fieldLabel : '区间站场',
                        	name : 'qjzc',
                        	anchor : '90%'
    			}]
              },{
              columnWidth : .5,
              layout : 'form',
              border : false,
              items: [{
                    		xtype : 'combo',
                        	store : new Ext.data.SimpleStore({
                        		fields : ["returnValue", "displayText"],
                        		data : [['', '全部'],['武广客运专线', '武广客运专线'],['合武客运专线', '合武客运专线'],['京广线', '京广线']]
                        	}),
                        	valueField : "returnValue",
                        	displayField : "displayText",
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择所属线别',
                        	emptyText : '选择线别',
                        	hiddenName : 'XBBM',
                        	editable : false,
                        	triggerAction : 'all',
                        	//allowBlank : false,
                        	fieldLabel : '线别',
                        	name : 'xbbm',
                        	anchor : '90%'
    			}]
              }]
			}
           ],
           // 为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
              buttons : [{
               // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
               buttonlAlign : 'right',
               text : '查询',
               handler : function() {
                    if (!simpleForm_Query.form.isValid()) {return };
                    // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                    if (simpleForm_Query.form.isValid()) {
                    // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                    //this.disabled = true;
                    // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                    simpleForm_Query.form.doAction('submit', {
                                     waitMsg:'查询中,请稍侯...',  
                                     url : 'zzhQuery.jsp',
                                     method : 'post',
                                     params : '',
                                     // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                                     // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                                     success : function(form, action) {
                                     // 例如返回的json结构是"{success:true,data:'成功保存！'}"，
                                     //Ext.Msg.alert('操作',action.result.data);
                                     //Ext.Msg.alert('消息',action.result.msg);
                                     //simpleForm_Query.form.reset();
                                      simple_Grid.getStore().reload();                               		
                    				 },
                     // 定义failure函数，就是网络通讯存在问题的时候将显示错误信息。
                     failure : function() {
                            Ext.Msg.alert('操作', '保存失败！');
                       	 	this.disabled = false;
                     	 }
                  });
       			}
			}
          }, {
                // 取消按钮就是简单的reset一下form的控件
                text : '重置',
                handler : function() {
                       simpleForm_Query.form.reset();
                       simpleForm_Save.collapse();
                     }
          }]
       });
       
    /*====新增========*/
	var simpleForm_Save = new Ext.FormPanel({
        renderTo : document.body,
        title: '接触网支柱---->编辑',
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
                    layout : 'column',
                    border : false,
                	items:[{xtype:'hidden',name:'ZZHBM'},{xtype:'hidden',name:'ZZHBM'},{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// 控件的类型设置成combo
                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        	store : new Ext.data.SimpleStore({
                        		// 通过一个数组定义了returnValue和displayText两个字段。retrunValue字段指定是提交给后台的值，displayText字段指定是在下拉中显示的选择值。
                        		fields : ["returnValue", "displayText"],
                        		// 定义了几组数据.每组数据都是根据fiedls的定义来组成的，数组里第一个值就是retrunValue的值，第二个值就是displayText的值，例如[1,'小学']，就表示retrunValue是1，displayText是小学。
                        		data : [['武广客运专线', '武广客运专线'],['合武客运专线', '合武客运专线'],['京广线', '京广线']]
                        	}),
                        	valueField : "returnValue",// 设置下拉选择框的值
                       		displayField : "displayText",// 设置下拉选择框的显示文本
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选线路',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        	emptyText : '选择线路',// 在没有选择值时显示为选择学历
                        	hiddenName : 'XBBM',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        	editable : false,// 该下拉列表只允许选择，不允许输入
                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        	allowBlank : false,// 该选项值不允许为空
                        	fieldLabel : '线别',// 控件的标题是学历
                        	name : 'XBBM',// 再次提醒，name只是下拉列表的名称
                        	anchor : '95%'// input的宽度是90%
    					}]	
                	},{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// 控件的类型设置成combo
                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        	store : new Ext.data.SimpleStore({
                        		// 通过一个数组定义了returnValue和displayText两个字段。retrunValue字段指定是提交给后台的值，displayText字段指定是在下拉中显示的选择值。
                        		fields : ["returnValue", "displayText"],
                        		// 定义了几组数据.每组数据都是根据fiedls的定义来组成的，数组里第一个值就是retrunValue的值，第二个值就是displayText的值，例如[1,'小学']，就表示retrunValue是1，displayText是小学。
                        		data : [['上行', '上行'],['下行', '下行'],['其它', '其它']]
                        	}),
                        	valueField : "returnValue",// 设置下拉选择框的值
                       		displayField : "displayText",// 设置下拉选择框的显示文本
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择上下行',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        	emptyText : '选择上下行',// 在没有选择值时显示为选择学历
                        	hiddenName : 'SXXBM',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        	editable : false,// 该下拉列表只允许选择，不允许输入
                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        	allowBlank : false,// 该选项值不允许为空
                        	fieldLabel : '上下行',// 控件的标题是学历
                        	name : 'sxxbm',// 再次提醒，name只是下拉列表的名称
                        	anchor : '95%'// input的宽度是90%
    					}]	
                	},{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// 控件的类型设置成combo
                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        	store : new Ext.data.SimpleStore({
                        		// 通过一个数组定义了returnValue和displayText两个字段。retrunValue字段指定是提交给后台的值，displayText字段指定是在下拉中显示的选择值。
                        		fields : ["returnValue", "displayText"],
                        		// 定义了几组数据.每组数据都是根据fiedls的定义来组成的，数组里第一个值就是retrunValue的值，第二个值就是displayText的值，例如[1,'小学']，就表示retrunValue是1，displayText是小学。
                        		data : [['长沙站', '长沙站'],['长沙-湘潭', '长沙-湘潭'], ['湘潭站', '湘潭站'],['武南-南湖区间', '武南-南湖区间'],['南湖站', '南湖站'], ['南湖-流芳区间', '南湖-流芳区间']]
                        	}),
                        	valueField : "returnValue",// 设置下拉选择框的值
                       		displayField : "displayText",// 设置下拉选择框的显示文本
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择区间站场',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        	emptyText : '选择区间站场',// 在没有选择值时显示为选择学历
                        	hiddenName : 'QJZC',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        	editable : false,// 该下拉列表只允许选择，不允许输入
                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        	allowBlank : false,// 该选项值不允许为空
                        	fieldLabel : '区间站场',// 控件的标题是学历
                        	name : 'qjzc',// 再次提醒，name只是下拉列表的名称
                        	anchor : '95%'// input的宽度是90%
    					}]	
                	}]
                },
                
                {
                    layout : 'column',
                    border : false,
                	items:[{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '支柱名称',
                    		name: 'ZZHMC',
                    		anchor:'95%'
    					}]	
                	},{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '公里标',
                    		name: 'ZZGLB',
                    		anchor:'95%'
    					}]	
                	},{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '支柱型号',
                    		name: 'SBXH',
                    		anchor:'95%'
    					}]	
                	}]
                },
                
                {
                    layout : 'column',
                    border : false,
                	items:[{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// 控件的类型设置成combo
                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        	store : new Ext.data.SimpleStore({
                        		// 通过一个数组定义了returnValue和displayText两个字段。retrunValue字段指定是提交给后台的值，displayText字段指定是在下拉中显示的选择值。
                        		fields : ["returnValue", "displayText"],
                        		// 定义了几组数据.每组数据都是根据fiedls的定义来组成的，数组里第一个值就是retrunValue的值，第二个值就是displayText的值，例如[1,'小学']，就表示retrunValue是1，displayText是小学。
                        		data : [['中心柱', '中心柱'],['锚柱', '锚柱'], ['中间柱', '中间柱'],['中心锚节', '中心锚节']]
                        	}),
                        	valueField : "returnValue",// 设置下拉选择框的值
                       		displayField : "displayText",// 设置下拉选择框的显示文本
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择支柱类别',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        	emptyText : '选择支柱类别',// 在没有选择值时显示为选择学历
                        	hiddenName : 'ZZLB',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        	editable : false,// 该下拉列表只允许选择，不允许输入
                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        	allowBlank : false,// 该选项值不允许为空
                        	fieldLabel : '支柱类别',// 控件的标题是学历
                        	name : 'zzlb',// 再次提醒，name只是下拉列表的名称
                        	anchor : '95%'// input的宽度是90%
    					}]	
                	},{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// 控件的类型设置成combo
                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        	store : new Ext.data.SimpleStore({
                        		// 通过一个数组定义了returnValue和displayText两个字段。retrunValue字段指定是提交给后台的值，displayText字段指定是在下拉中显示的选择值。
                        		fields : ["returnValue", "displayText"],
                        		// 定义了几组数据.每组数据都是根据fiedls的定义来组成的，数组里第一个值就是retrunValue的值，第二个值就是displayText的值，例如[1,'小学']，就表示retrunValue是1，displayText是小学。
                        		data : [['钢柱', '钢柱'],['水泥柱', '水泥柱']]
                        	}),
                        	valueField : "returnValue",// 设置下拉选择框的值
                       		displayField : "displayText",// 设置下拉选择框的显示文本
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择支柱材质',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        	emptyText : '选择支柱材质',// 在没有选择值时显示为选择学历
                        	hiddenName : 'ZZCZ',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        	editable : false,// 该下拉列表只允许选择，不允许输入
                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        	allowBlank : false,// 该选项值不允许为空
                        	fieldLabel : '支柱材质',// 控件的标题是学历
                        	name : 'zzcz',// 再次提醒，name只是下拉列表的名称
                        	anchor : '95%'// input的宽度是90%
    					}]	
                	},{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '跨距',
                    		name: 'KJ',
                    		anchor:'95%'
    					}]	
                	}]
                },
                
                {
                    layout : 'column',
                    border : false,
                	items:[{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '拉出值',
                    		name: 'LCZ',
                    		anchor:'95%'
    					}]	
                	},{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '接触线高度',
                    		name: 'JCXGD',
                    		anchor:'95%'
    					}]	
                	},{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '侧面限界',
                    		name: 'CMXJ',
                    		anchor:'95%'
    					}]	
                	}]
                },
                 {
                    layout : 'column',
                    border : false,
                	items:[{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '曲线半径',
                    		name: 'QXBJ',
                    		anchor:'95%'
    					}]	
                	},{
                	    columnWidth:.32,
                		layout: 'form',
                		border:false,
                		items: [{
                    		xtype:'datefield',
                    		fieldLabel: '投运日期',
                    		name: 'RYRQ',
                    		anchor:'95%',
                    		format:'Y-m-d',
    						timePicker:true
                		}]
                	},{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype : 'combo',// 控件的类型设置成combo
                       		// 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        	store : new Ext.data.SimpleStore({
                        		// 通过一个数组定义了returnValue和displayText两个字段。retrunValue字段指定是提交给后台的值，displayText字段指定是在下拉中显示的选择值。
                        		fields : ["returnValue", "displayText"],
                        		// 定义了几组数据.每组数据都是根据fiedls的定义来组成的，数组里第一个值就是retrunValue的值，第二个值就是displayText的值，例如[1,'小学']，就表示retrunValue是1，displayText是小学。
                        		data : [['宝鸡构件厂', '宝鸡构件厂'],['保定电杆厂', '保定电杆厂'],['电气化三处', '电气化三处'],['西安电气化器材厂', '西安电气化器材厂'],['保定电杆厂', '电气化工程局保定制品厂']]
                        	}),
                        	valueField : "returnValue",// 设置下拉选择框的值
                       		displayField : "displayText",// 设置下拉选择框的显示文本
                        	mode : 'local',// 数据是在本地
                        	//forceSelection : true,// 必须选择一个选项
                        	blankText : '请选择生产厂家',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        	emptyText : '选择生产厂家',// 在没有选择值时显示为选择学历
                        	hiddenName : 'SCCJ',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        	editable : false,// 该下拉列表只允许选择，不允许输入
                        	triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        	allowBlank : false,// 该选项值不允许为空
                        	fieldLabel : '生产厂家',// 控件的标题是学历
                        	name : 'sccj',// 再次提醒，name只是下拉列表的名称
                        	anchor : '95%'// input的宽度是90%
    					}]	
                	}]
                 },
                 
                {
                    layout : 'column',
                    border : false,
                	items:[{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '顺序号',
                    		name: 'SXH',
                    		anchor:'95%'
    					}]	
                	},{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '经度',
                    		name: 'JD',
                    		anchor:'95%'
    					}]	
                	},{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '纬度',
                    		name: 'WD',
                    		anchor:'95%'
    					}]	
                	}]
                },
                  {
                    layout : 'column',
                    border : false,
                	items:[{
                		columnWidth:.32,
                		layout: 'form',
                		border : false,
                		items: [{
                    		xtype:'textfield',
                    		fieldLabel: '照片路径',
                    		name: 'ZP',
                    		anchor:'95%'
    					}]	
                	}]
                }],

        buttons: [{
            text: '新增',
             handler : function() {
                  if (!simpleForm_Save.form.isValid()) {return };
                  // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                  if (simpleForm_Save.form.isValid()) {
                     // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                     //this.disabled = true;
                     // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                     simpleForm_Save.form.doAction('submit', {
                                                 	waitMsg:'保存中,请稍侯...',  
                                                    url : 'zzhSave.jsp',
                                                    method : 'post',
                                                    params : '',
                                                    // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                                                    // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                                                    success : function(form, action) {
                                                            // 例如返回的json结构是"{success:true,data:'成功保存！'}"，
                                                             //Ext.Msg.alert('操作',action.result.data);
                                                             if(action.result.msg!="")
                                                             {
                                                             	document.getElementById ("albm").value=action.result.msg;
                                                             	//simpleForm_Save.buttons[3].setVisible(true);
                                                             	//simpleForm_Save.buttons[4].setVisible(true);
                                                             	simple_Grid.getStore().reload();
                                                             	Ext.Msg.alert('消息','保存成功！');
                                                             }
                                                             //simpleForm_Query.form.reset();
                                                            
                                                    },
                                                    // 定义failure函数，就是网络通讯存在问题的时候将显示错误信息。
                                                    failure : function() {
                                                             Ext.Msg.alert('操作', '保存失败！');
                                                             this.disabled = false;
                                                    }
                     });
                   }
                   // 如果想form按以前的老办法提交，可以在formpanel的定义中加入一下设置：
                   // onSubmit: Ext.emptyFn,
                   // submit: function() {
                   // this.getEl().dom.submit();}
                   // 第一个设置的目的是取消formpanel的默认提交函数。第二就是设置新的提交方式为旧方式提交。

            }
        }, {
            text : '修改',
            Enabled:false,
            handler : function() {
            	if (!simpleForm_Save.form.isValid()) {return };
           		if (simpleForm_Save.form.isValid()) {
                	simpleForm_Save.form.doAction('submit', {
                                               waitMsg:'修改中,请稍侯...',  
                                               url : 'zzhUpdate.jsp',
                                               method : 'post',
                                               params : '',
                                               success : function(form, action) {
                                               		simpleForm_Save.buttons[0].setVisible(true);
                                               		simple_Grid.getStore().reload();
                                               		Ext.Msg.alert('消息',action.result.msg);
                                               },
                                               failure : function() {
                                                     Ext.Msg.alert('操作', '保存失败！');
                                                     this.disabled = false;
                                               }
            		});
           		 }
             }
         },{

             // 取消按钮就是简单的reset一下form的控件
             text : '重置',
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
    
    //从session取值赋值给form字段;
	//Ext.Ajax.request({
		//url: 'GetSessionValue.jsp',
		//success: function(response, opts) 
			//{
			// simpleForm_Save.getForm().setValues([{albm: "albm",value: response.responseText} ]);
			//},		
		//failure: function(response, opts) {
      		//console.log('服务端失效的状态代码：' + response.status);
   			//}
	//});
    
    var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		autoScroll:true,
		items: [simpleForm_Save,simpleForm_Query,simple_Grid]
	});
	simpleForm_Save.collapse();
	simpleForm_Save.buttons[1].setVisible(false);
	//simpleForm_Save.buttons[3].setVisible(false);
	//simpleForm_Save.buttons[4].setVisible(false);
 });
Ext.onReady(function () {

    Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var userdj = document.getElementById("userdj").value;
    var userdwid = document.getElementById("dwid").value;
    var djch = "";
    var sql = "";

    if (userdj == '6') {
        djch = "qx.dwid='" + userdwid + "'";
        sql = "select gqdm,gqjc from j_gyjc_gqzd where  gqdm ='" + userdwid + "'";
    }
    else if (userdj == '3') {
        djch = "qx.dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.ddtdm like " + "'" + userdwid + "%')";
        sql = "select gqdm,gqjc from j_gyjc_gqzd where  ddtdm like '" + userdwid + "%25' order by gqjc";
    }
    else if (userdj == '4' || userdj == '5') {
        djch = "qx.dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.cjdm like " + "'" + userdwid + "%')";
        sql = "select gqdm,gqjc from j_gyjc_gqzd where  cjdm ='" + userdwid + "' order by gqjc";
    }
    else {
        djch = "1=2";
        sql = "select gqdm,gqjc from j_gyjc_gqzd where 1=2 order by gqjc";
    }
    //alert(djch);
    //工区、车间、段直接从工区里面选取管线的配电所
    var planRecord_bdt = Ext.data.Record.create([
        {name: 'value', type: 'string'},
        {name: 'text', type: 'string'}
    ]);
    var store_bdt = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url: '../../share/combo_list.jsp?sql=' + sql}),
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty: 'success'
        }, planRecord_bdt)
    });
    store_bdt.load();

    var planRecord_bdtall = Ext.data.Record.create([
        {name: 'value', type: 'string'},
        {name: 'text', type: 'string'}
    ]);
    var store_bdtall = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url: '../../share/combo_list.jsp?sql=' + sql + '&all=all'}),
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty: 'success'
        }, planRecord_bdtall)
    });
    store_bdtall.load();

    //设备名称
    var sql_sb = "select distinct(sbmc), qx.sbmc from z_yxgl_qxgl  qx";

    var planRecord_sb = Ext.data.Record.create([
        {name: 'value', type: 'string'},
        {name: 'text', type: 'string'}
    ]);
    var store_sb = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url: '../../share/combo_list.jsp?sql=' + sql_sb}),
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty: 'success'
        }, planRecord_sb)
    });
    store_sb.load();


    //定义Grid表头
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
        //new Ext.grid.RowNumberer(),

        {header: '序号', dataIndex: 'xh', width: 40, fixed: true},
        {header: '所属工区', dataIndex: 'dwmc', width: 80, fixed: true, sortable: true},
        {header: '发现时间', dataIndex: 'fxsj', width: 120, fixed: true, sortable: true},
        {header: '汇报人', dataIndex: 'fkr', width: 60, fixed: true, sortable: true},
        {header: '设备缺陷名称', dataIndex: 'sbmc', width: 80, sortable: true},

        {header: '设备缺陷内容', dataIndex: 'qxnr', width: 120, sortable: true},

        {header: '当班发现电调', dataIndex: 'fkbm', width: 80, fixed: true, sortable: true},
        {header: '恢复时间', dataIndex: 'xjsj', width: 120, fixed: true, sortable: true},
        {header: '处理情况', dataIndex: 'clcs', width: 80, sortable: true},
        {header: '消缺汇报人', dataIndex: 'xlbgr', width: 80, fixed: true, sortable: true},
        {header: '处理确认电调', dataIndex: 'clfzr', width: 80, fixed: true, sortable: true}

    ]);


    var planRecord = Ext.data.Record.create([
        {name: 'xh', type: 'int'},
        {name: 'qxid', type: 'int'},
        {name: 'dwid', type: 'string'},
        {name: 'dwmc', type: 'string'},
        {name: 'qjbh', type: 'string'},
        {name: 'qjmc', type: 'string'},
        {name: 'xb', type: 'string'},
        {name: 'gh', type: 'string'},
        {name: 'fxsj', type: 'string'},
        {name: 'sbmc', type: 'string'},
        {name: 'qxnr', type: 'string'},
        {name: 'qxdj', type: 'string'},
        {name: 'fkr', type: 'string'},
        {name: 'fkbm', type: 'string'},
        {name: 'zrr', type: 'string'},
        {name: 'zrbm', type: 'string'},
        {name: 'cljg', type: 'string'},
        {name: 'xjsj', type: 'string'},
        {name: 'xlbgr', type: 'string'},
        {name: 'clfzr', type: 'string'},
        {name: 'clcs', type: 'string'},
        {name: 'mc', type: 'string'},
        {name: 'clgc', type: 'string'}
    ]);


    //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url: 'facility_defect_json.jsp'}),
        baseParams: {whereclause: djch},//点击翻页的时候，这个值不会消失，作为基本参数，只有点击查询按钮时才会改变

        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty: 'success'
        }, planRecord)
    });
    store.load({params: {start: 0, limit: 10}});


    //定义表格面板,指定列模型，仓库，选择模型(默认行选择模型)
    var simple_Grid = new Ext.grid.GridPanel({
        //el:指定html元素用于显示的grid
        //el: 'grid3', 
        store: store,
        cm: columns,
        sm: new Ext.grid.RowSelectionModel({singleSelcet: true}),
        //title: '作业计划显示',
        //列重新计算后自动填满
        viewConfig: {
            forceFit: true,
            columnsText: "显示的列",
            sortAscText: "升序",
            sortDescText: "降序"
        },
        loadMask: {msg: "数据加载中...."},
        collapsible: true,
        titleCollapse: true,
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
            displayMsg: '第 {0} 条到 {1} 条,共 {2} 条',
            emptyMsg: "无记录"
        })


    });


    Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
    // form start
    var simpleForm_Save = new Ext.FormPanel({
        renderTo: document.body,
        labelAlign: 'left',
        title: '设备缺陷管理—登记',
        buttonAlign: 'right',
        bodyStyle: 'padding:5px',
        //width : 800,
        collapsible: true,
        titleCollapse: true,
        method: 'POST',
        autoWidth: true,
        frame: true,
        labelWidth: 80,


        items: [{
            layout: 'column',// columnlayout
            border: false,// 没有边框
            labelSeparator: '：',// 标题的分隔符号我们用中文冒号代替英文的冒号（labelSeparator:'：'）。
            // coulmnLayout里的控件将定义在items里
            items: [{xtype: 'hidden', name: 'qxid'}
                , {
                    columnWidth: .25,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                    layout: 'form',// formlayout用来放置控件
                    border: false,// 没有边框
                    items: [{
                        xtype: 'combo',// 控件的类型设置成combo
                        // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        store: store_bdt,
                        //value:'全部',
                        valueField: "value",// 设置下拉选择框的值
                        displayField: "text",// 设置下拉选择框的显示文本
                        mode: 'local',// 数据是在本地
                        //forceSelection : true,// 必须选择一个选项
                        //blankText : '请选择作业单位',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        emptyText: '所亭工区',// 在没有选择值时显示为选择学历
                        hiddenName: 'dwid',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        editable: true,// 该下拉列表只允许选择，不允许输入
                        triggerAction: 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        allowBlank: false,// 该选项值不允许为空
                        fieldLabel: '所属工区',// 控件的标题是学历
                        name: 'dwid',// 再次提醒，name只是下拉列表的名称
                        id: 'txt_dwid',
                        anchor: '90%'// input的宽度是90%
                    }]
                }, {
                    columnWidth: .25,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'field',// 控件的类型为datefield
                        fieldLabel: '发现日期',
                        name: 'fxsj',
                        anchor: '90%',
                        listeners: {
                            "focus": function () {
                                WdatePicker({dateFmt: 'yyyy-MM-dd HH:mm'})
                            }
                        },
                        allowBlank: false

                    }]
                }, {
                    columnWidth: .25,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',// 控件的类型为datefield
                        fieldLabel: '汇报人',
                        name: 'fkr',
                        anchor: '90%',
                        allowBlank: false// 该选项值不允许为空
                    }]
                }, {
                    columnWidth: .25,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'combo',// 控件的类型设置成combo
                        // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        store: store_sb,
                        valueField: "value",// 设置下拉选择框的值
                        displayField: "text",// 设置下拉选择框的显示文本
                        mode: 'local',// 数据是在本地
                        //forceSelection : true,// 必须选择一个选项
                        blankText: '设备缺陷名称',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        emptyText: '设备缺陷名称',// 在没有选择值时显示为选择学历
                        hiddenName: 'sbmc',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        editable: true,// 该下拉列表只允许选择，不允许输入
                        triggerAction: 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        allowBlank: false,// 该选项值不允许为空
                        fieldLabel: '设备缺陷名称',// 控件的标题是学历
                        name: 'sbmc',// 再次提醒，name只是下拉列表的名称
                        anchor: '90%'// input的宽度是90%
                    }]
                }]

        }, {
            layout: 'column',
            border: false,
            labelSeparator: '：',
            items: [{
                columnWidth: .99,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textarea',// 控件的类型为datefield
                    fieldLabel: '设备缺陷内容',
                    name: 'qxnr',
                    anchor: '98%',
                    height: 40
                    //format:'Y-m-d'
                }]
            }]
        }, {
            layout: 'column',
            border: false,
            labelSeparator: '：',
            items: [{
                columnWidth: .25,
                layout: 'form',
                border: false,
                hidden: true,
                items: [{
                    xtype: 'combo',// 控件的类型设置成combo
                    // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                    store: new Ext.data.SimpleStore({
                        // 通过一个数组定义了returnValue和displayText两个字段。retrunValue字段指定是提交给后台的值，displayText字段指定是在下拉中显示的选择值。
                        fields: ["returnValue", "displayText"],
                        // 定义了几组数据.每组数据都是根据fiedls的定义来组成的，数组里第一个值就是retrunValue的值，第二个值就是displayText的值，例如[1,'小学']，就表示retrunValue是1，displayText是小学。
                        data: [['影响安全', '影响安全'], ['主要缺陷', '主要缺陷'], ['一般缺陷', '一般缺陷']]
                    }),
                    valueField: "returnValue",// 设置下拉选择框的值
                    displayField: "displayText",// 设置下拉选择框的显示文本
                    mode: 'local',// 数据是在本地
                    //forceSelection : true,// 必须选择一个选项
                    blankText: '缺陷等级',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                    emptyText: '缺陷等级',// 在没有选择值时显示为选择学历
                    hiddenName: 'qxdj',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                    editable: false,// 该下拉列表只允许选择，不允许输入
                    triggerAction: 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                    //allowBlank : false,// 该选项值不允许为空
                    fieldLabel: '缺陷等级',// 控件的标题是学历
                    name: 'qxdj',// 再次提醒，name只是下拉列表的名称
                    anchor: '90%'// input的宽度是90%
                }]
            }, {
                columnWidth: .25,
                layout: 'form',
                border: false,
                hidden:true,
                items: [{
                    xtype: 'textfield',// 控件的类型为datefield
                    fieldLabel: '责任人',
                    name: 'zrr',
                    anchor: '90%'
                    //allowBlank : false// 该选项值不允许为空
                }]
            }, {
                columnWidth: .25,
                layout: 'form',
                border: false,
                hidden:true,
                items: [{
                    xtype: 'textfield',// 控件的类型为datefield
                    fieldLabel: '责任部门',
                    name: 'zrbm',
                    anchor: '90%'
                    //allowBlank : false// 该选项值不允许为空
                }]
            }, {
                columnWidth: .25,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textfield',// 控件的类型为datefield
                    fieldLabel: '发现当班电调',
                    name: 'fkbm',
                    anchor: '90%'
                    //allowBlank : false// 该选项值不允许为空
                }]
            }]
        }, {
            layout: 'column',
            border: false,
            labelSeparator: '：',
            items: [{
                columnWidth: .50,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textarea',// 控件的类型为datefield
                    fieldLabel: '处理情况',
                    name: 'clcs',
                    anchor: '95%',
                    height: 40
                    //format:'Y-m-d'
                }]
            }, {
                columnWidth: .50,
                layout: 'form',
                border: false,
                hidden:true,
                items: [{
                    xtype: 'textarea',// 控件的类型为datefield
                    fieldLabel: '处理过程',
                    name: 'clgc',
                    anchor: '95%',
                    height: 40
                    //format:'Y-m-d'
                }]
            }]
        }, {
            layout: 'column',
            border: false,
            labelSeparator: '：',
            items: [{
                columnWidth: .25,
                layout: 'form',
                border: false,
                labelWidth: 120,
                hidden:true,
                items: [{
                    xtype: 'combo',// 控件的类型设置成combo
                    // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                    store: new Ext.data.SimpleStore({
                        // 通过一个数组定义了returnValue和displayText两个字段。retrunValue字段指定是提交给后台的值，displayText字段指定是在下拉中显示的选择值。
                        fields: ["returnValue", "displayText"],
                        // 定义了几组数据.每组数据都是根据fiedls的定义来组成的，数组里第一个值就是retrunValue的值，第二个值就是displayText的值，例如[1,'小学']，就表示retrunValue是1，displayText是小学。
                        data: [['已消记', '已消记'], ['未消记', '未消记']]
                    }),
                    valueField: "returnValue",// 设置下拉选择框的值
                    displayField: "displayText",// 设置下拉选择框的显示文本
                    mode: 'local',// 数据是在本地
                    //forceSelection : true,// 必须选择一个选项
                    blankText: '处理结果',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                    emptyText: '处理结果',// 在没有选择值时显示为选择学历
                    hiddenName: 'cljg',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                    editable: false,// 该下拉列表只允许选择，不允许输入
                    triggerAction: 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                    //allowBlank : false,// 该选项值不允许为空
                    fieldLabel: '处理结果',// 控件的标题是学历
                    name: 'cljg',// 再次提醒，name只是下拉列表的名称
                    anchor: '90%'// input的宽度是90%
                }]
            }, {
                columnWidth: .25,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'field',// 控件的类型为datefield
                    fieldLabel: '恢复日期',
                    name: 'xjsj',
                    anchor: '90%',
                    listeners: {
                        "focus": function () {
                            WdatePicker({dateFmt: 'yyyy-MM-dd HH:mm'})
                        }
                    }
                    //allowBlank : false// 该选项值不允许为空
                }]
            }, {
                columnWidth: .25,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textfield',// 控件的类型为datefield
                    fieldLabel: '消缺汇报人',
                    name: 'xlbgr',
                    anchor: '90%'
                    //allowBlank : false// 该选项值不允许为空
                }]
            }, {
                columnWidth: .25,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textfield',// 控件的类型为datefield
                    fieldLabel: '处理确认电调',
                    name: 'clfzr',
                    anchor: '90%'
                    //allowBlank : false// 该选项值不允许为空
                }]
            }]
        }

        ],
        //为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
        buttons: [{
            // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
            text: '添加',
            id: 'txt_qxAdd',
            handler: function () {
                if (!simpleForm_Save.form.isValid()) {
                    return
                }
                ;
                // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                if (simpleForm_Save.form.isValid()) {
                    // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                    //this.disabled = true;
                    // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                    simpleForm_Save.form.doAction('submit', {
                        waitMsg: '保存中,请稍侯...',
                        url: 'facility_defect_save.jsp',
                        method: 'post',
                        params: '',
                        // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                        // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                        success: function (form, action) {
                            // 例如返回的json结构是"{success:true,data:'成功保存！'}"，
                            //Ext.Msg.alert('操作',action.result.data);
                            Ext.Msg.alert('消息', action.result.msg);
                            //simpleForm_Query.form.reset();
                            // window.location.href='zyjhsq.jsp';
                            //simpleForm_Save.collapse();
                            simple_Grid.getStore().reload();

                        },
                        // 定义failure函数，就是网络通讯存在问题的时候将显示错误信息。
                        failure: function () {
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

            // 取消按钮就是简单的reset一下form的控件
            text: '修改',
            id: 'txt_qxUpd',
            disabledClass: 'x-item-disabled',
            handler: function () {
                if (!simpleForm_Save.form.isValid()) {
                    return
                }
                ;
                // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                if (simpleForm_Save.form.isValid()) {
                    // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                    //this.disabled = true;
                    // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                    simpleForm_Save.form.doAction('submit', {
                        waitMsg: '修改中,请稍侯...',
                        url: 'facility_defect_update.jsp',
                        method: 'post',
                        params: '',
                        // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                        // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                        success: function (form, action) {
                            // 例如返回的json结构是"{success:true,data:'成功保存！'}"，
                            //Ext.Msg.alert('操作',action.result.data);
                            Ext.Msg.alert('消息', action.result.msg);
                            //simpleForm_Query.form.reset();

                            simple_Grid.getStore().reload();

                        },
                        // 定义failure函数，就是网络通讯存在问题的时候将显示错误信息。
                        failure: function () {
                            Ext.Msg.alert('操作', '修改失败！');
                            this.disabled = false;
                        }
                    });
                }

            }
        }, {

            // 取消按钮就是简单的reset一下form的控件
            text: '重置',
            id: 'txt_qxCz',
            handler: function () {
                simpleForm_Save.form.reset();
                //simpleForm_Query.collapse();

                simpleForm_Save.buttons[1].setVisible(false);
                simpleForm_Save.buttons[3].setVisible(false);
            }
        }, {
            // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
            text: '删除',
            id: 'txt_qxDel',
            disabledClass: 'x-item-disabled',
            handler: function () {
                if (!simpleForm_Save.form.isValid()) {
                    return
                }
                ;
                // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                if (simpleForm_Save.form.isValid()) {
                    // 保存按钮要做的就是先做basicform的客户端验证，验证通过了则设置该按钮状态为disable，防止2次提交。然后调用simpleForm.form.doAction方法提交数据
                    //this.disabled = true;
                    // doAction方法的第一个参数“submit”的意思是表示执行的是提交操作，提交的后台页面是test.jsp（url:'test.asp'），提交方式是post（method:'post'），没有其它提交参数（params:''）
                    simpleForm_Save.form.doAction('submit', {
                        waitMsg: '删除中,请稍侯...',
                        url: 'facility_defect_delete.jsp',
                        method: 'post',
                        params: '',
                        // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                        // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                        success: function (form, action) {
                            // 例如返回的json结构是"{success:true,data:'成功保存！'}"，
                            //Ext.Msg.alert('操作',action.result.data);
                            //Ext.Msg.alert('消息',action.result.msg);
                            simpleForm_Save.collapse();
                            simpleForm_Save.form.reset();
                            simpleForm_Save.buttons[1].setVisible(false);
                            simpleForm_Save.buttons[3].setVisible(false);


                            simple_Grid.getStore().reload();

                        },
                        // 定义failure函数，就是网络通讯存在问题的时候将显示错误信息。
                        failure: function () {
                            Ext.Msg.alert('操作', '删除失败！');
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
        }]
    });


    var simpleForm_Query = new Ext.FormPanel({
        renderTo: document.body,
        labelAlign: 'left',
        title: '设备缺陷管理—查询',
        buttonAlign: 'right',
        bodyStyle: 'padding:5px',
        //width : 600,
        titleCollapse: true,
        collapsible: true,
        method: 'POST',
        autoWidth: true,
        frame: true,
        labelWidth: 80,
        items: [{
            layout: 'column',
            border: false,
            labelSeparator: '：',
            items: [{
                columnWidth: .25,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                layout: 'form',// formlayout用来放置控件
                border: false,// 没有边框
                items: [{
                    xtype: 'combo',// 控件的类型设置成combo
                    // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                    store: store_bdtall,
                    //value:'全部',
                    valueField: "value",// 设置下拉选择框的值
                    displayField: "text",// 设置下拉选择框的显示文本
                    mode: 'local',// 数据是在本地
                    //forceSelection : true,// 必须选择一个选项
                    //blankText : '请选择作业单位',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                    emptyText: '所亭工区',// 在没有选择值时显示为选择学历
                    hiddenName: 'dwid1',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                    editable: true,// 该下拉列表只允许选择，不允许输入
                    triggerAction: 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                    //allowBlank : false,// 该选项值不允许为空
                    fieldLabel: '单位',// 控件的标题是学历
                    name: 'dwid1',// 再次提醒，name只是下拉列表的名称
                    id: 'txt_dwid1',
                    anchor: '90%'// input的宽度是90%
                }]
            }, {
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'field',// 控件的类型为datefield
                    fieldLabel: '开始时间',
                    name: 'kssj',
                    anchor: '90%',
                    id: 'txt_ksrq',
                    listeners: {
                        "focus": function () {
                            WdatePicker({dateFmt: 'yyyy-MM-dd HH:mm'})
                        }
                    }
                    //allowBlank : false// 该选项值不允许为空

                }]
            }, {
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'field',// 控件的类型为datefield
                    fieldLabel: '结束时间',
                    name: 'jssj',
                    anchor: '90%',
                    id: 'txt_jsrq',
                    listeners: {
                        "focus": function () {
                            WdatePicker({dateFmt: 'yyyy-MM-dd HH:mm'})
                        }
                    }
                    //allowBlank : false// 该选项值不允许为空

                }]
            }]
        }
        ],
        // 为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
        buttons: [{
            // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
            text: '查询',
            handler: function () {
                if (!simpleForm_Query.form.isValid()) {
                    return
                }
                ;
                // 在formpanel类中，form属性指向的是formpanle里的basicform对象，我们可通过formpanle.form来使用该basicform对象。在被例子，我们已经将formpanel对象赋值给了simpleForm这个变量，所以我们可以通过simpleForm.form访问面板里的basicform对象。
                if (simpleForm_Query.form.isValid()) {
                    var where = "1=1";
                    if (Ext.getCmp("txt_ksrq").getValue() != "") {
                        where = where + " and qx.fxsj >=to_date('" + Ext.getCmp(
                                "txt_ksrq").getValue() + "','yyyy-mm-dd hh24:mi')";
                    }
                    //alert(Ext.getCmp("txt_jsrq").getValue());
                    if (Ext.getCmp("txt_jsrq").getValue() != "") {
                        where = where + "  and qx.fxsj <=to_date('" + Ext.getCmp(
                                "txt_jsrq").getValue() + "','yyyy-mm-dd hh24:mi')";
                    }
                    if (Ext.getCmp("txt_dwid1").getValue() != '' && Ext.getCmp("txt_dwid1").getValue() != 'ALL') {
                        where = where + " and qx.dwid='" + Ext.getCmp("txt_dwid1").getValue() + "' ";
                    } else {
                        where = where + " and " + djch;
                    }

                    //where =where +" and trim(qxdj) in ("+dj+")";
                    //alert(where);
                    store.baseParams.whereclause = where;
                    simple_Grid.getStore().reload({
                        params: {
                            start: 0,
                            limit: 10
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

            // 取消按钮就是简单的reset一下form的控件
            text: '重置',
            handler: function () {
                simpleForm_Query.form.reset();
                //simpleForm_Save.collapse();

            }
        }]
    });


    //Grid上触发事件
    simple_Grid.addListener('rowclick', function (simple_Grid, rowIndex, event) {
        // simpleForm_Query.collapse();
        simpleForm_Save.expand();

        var record = simple_Grid.getStore().getAt(rowIndex);
        //alert(rowIndex);
        //alert(record.get('jhsj')+' '+record.get('jhh')+' '+record.get('dwid'));
        simpleForm_Save.buttons[1].setVisible(true);
        simpleForm_Save.buttons[3].setVisible(true);
        simpleForm_Save.getForm().loadRecord(record);
        //如果等级不等于工区级的，按钮不能用
        /*if(userdj!=6)
         {
         Ext.getCmp("txt_qxAdd").disable();
         Ext.getCmp("txt_qxDel").disable();
         Ext.getCmp("txt_qxCz").disable();
         Ext.getCmp("txt_qxUpd").disable();
         }
         else
         {*/
        Ext.getCmp("txt_qxAdd").enable();
        Ext.getCmp("txt_qxDel").enable();
        Ext.getCmp("txt_qxCz").enable();
        Ext.getCmp("txt_qxUpd").enable();

        //}
    });


    var simple_Viewport = new Ext.Viewport({
        layout: 'column',
        items: [simpleForm_Save, simpleForm_Query, simple_Grid]
    });

    simpleForm_Save.collapse();
    simpleForm_Save.buttons[1].setVisible(false);
    simpleForm_Save.buttons[3].setVisible(false);


});
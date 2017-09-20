Ext.onReady(function () {

    Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var bd = Ext.getBody();
    var DWJB = document.getElementById("DWJB").value;
    var DWDM = document.getElementById("DWDM").value;
    var YHMC = document.getElementById("YHMC").value;

    var renderzt1 = function (value) {
        if (value == '0') {
            return "<span style='color:black;font-weight:bold;'>电调未发送</span>";
        }
        else if (value == "1") {
            return "<span style='color:blue;font-weight:bold;'>电调已发送、列调未签收</span>";
        }
        else if (value == '2') {
            return "<span style='color:red;font-weight:bold;'>列调已签认、电调未归档</span>";
        }
        else(value == "9")
        {
            return "<span style='color:green;font-weight:bold;'>电调已归档</span>";
        }
    };
    //下拉列表
    var sql = "select xdtdm,xdtmc from j_gyjc_xdtzd";
    var planRecord_xdt = Ext.data.Record.create([
        {name: 'value', type: 'string'},
        {name: 'text', type: 'string'}
    ]);
    var store_xdt = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url: '../../share/combo_list.jsp?sql=' + sql}),
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            root: 'root',
            successProperty: 'success'
        }, planRecord_xdt)
    });
    store_xdt.load();

    sql = "select ddtdm,ddtmc from j_gyjc_ddtzd where ddtdm like '" + DWDM + "%25'";
    var planRecord_ddt = Ext.data.Record.create([
        {name: 'value', type: 'string'},
        {name: 'text', type: 'string'}
    ]);
    var store_ddt = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url: '../../share/combo_list.jsp?sql=' + sql}),
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            root: 'root',
            successProperty: 'success'
        }, planRecord_ddt)
    });
    store_ddt.load();
    //定义Grid表头
    var tsbcolumns = new Ext.grid.ColumnModel([
        new Ext.grid.RowNumberer(),
        {header: '停电日期', dataIndex: 'TDSJ', width: 110, sortable: true, fixed: true},
        {header: '时间', dataIndex: 'TDSF', width: 40, sortable: true, fixed: true},
        {header: '供电臂', dataIndex: 'TDGDB', width: 120, sortable: true},
        {header: '列调令号', dataIndex: 'TD_XDMLH', width: 60, sortable: true, fixed: true},
        {header: '列调时间', dataIndex: 'TD_XDSJ', width: 110, sortable: true, fixed: true},
        {header: '列调员', dataIndex: 'TD_XDY', width: 60, sortable: true, fixed: true},
        {header: '电调令号', dataIndex: 'TD_DDMLH', width: 60, sortable: true, fixed: true},
        {header: '电调时间', dataIndex: 'TD_DDSJ', width: 110, sortable: true, fixed: true},
        {header: '电调员', dataIndex: 'TD_DDY', width: 60, sortable: true, fixed: true},
        {header: '备注', dataIndex: 'TD_BZ', width: 100, sortable: true},
        {header: '状态', dataIndex: 'ZT', width: 150, renderer: renderzt1, fixed: true}
    ]);

    var tsbplanRecord = Ext.data.Record.create([
        {name: 'TDTZBH', type: 'int'},
        {name: 'TDSJ', type: 'string'},
        {name: 'TDSF', type: 'string'},
        {name: 'TDGDB', type: 'string'},
        {name: 'TDNR', type: 'string'},
        {name: 'TD_XDMLH', type: 'string'},
        {name: 'TD_XDSJ', type: 'string'},
        {name: 'TD_XDT', type: 'string'},
        {name: 'TD_XDY', type: 'string'},
        {name: 'TD_DDMLH', type: 'string'},
        {name: 'TD_DDSJ', type: 'string'},
        {name: 'TD_DDT', type: 'string'},
        {name: 'TD_DDY', type: 'string'},
        {name: 'TD_BZ', type: 'string'},
        {name: 'ZT', type: 'string'}
    ]);
    var whereclause_init = "ZT!=9 and TD_DDT LIKE '" + DWDM + "%'";
    var tsbstore = new Ext.data.Store({
        proxy: new Ext.data.HttpProxy({url: 'tdtz_json.jsp'}),
        baseParams: {whereclause: whereclause_init},//未归档的这里可以看见
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty: 'success'
        }, tsbplanRecord)
    });
    tsbstore.load({params: {start: 0, limit: 6}});

    //定义表格面板,指定列模型，仓库，选择模型(默认行选择模型)
    var tsbsimple_Grid = new Ext.grid.GridPanel({
        //title : '停送电登记簿列表',
        store: tsbstore,
        cm: tsbcolumns,
        sm: new Ext.grid.RowSelectionModel({singleSelcet: true}),
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
            pageSize: 6,
            store: tsbstore,
            displayInfo: true,
            displayMsg: '第 {0} 条到 {1} 条,共 {2} 条',
            emptyMsg: "无记录"
        })

    });

    tsbsimple_Grid.addListener('rowclick', function (tsbsimple_Grid, rowIndex, event) {
        tsbsimpleForm_Save.expand();
        tsbsimpleForm_Save.buttons[0].setVisible(false);
        var record = tsbsimple_Grid.getStore().getAt(rowIndex);
        tsbsimpleForm_Save.getForm().loadRecord(record);
        var zt = record.get('ZT');
        tsbsimpleForm_Save.buttons[5].setVisible(false);
        if (zt == "0") {
            tsbsimpleForm_Save.buttons[1].setVisible(true);
            tsbsimpleForm_Save.buttons[3].setVisible(true);
            tsbsimpleForm_Save.buttons[4].setVisible(true);
            tsbsimpleForm_Save.buttons[5].setVisible(false);
        }
        else if (zt == "1") {
            // tsbsimpleForm_Save.buttons[1].setVisible(false);
            // tsbsimpleForm_Save.buttons[3].setVisible(false);
            tsbsimpleForm_Save.buttons[4].setVisible(false);
            tsbsimpleForm_Save.buttons[5].setVisible(false);
        }
        else if (zt == "2") {
            tsbsimpleForm_Save.buttons[5].setVisible(true);
        }
    });


    var tsbsimpleForm_Save = new Ext.FormPanel({
        renderTo: document.body,
        labelAlign: 'center',
        title: '停电签认--新增',
        buttonAlign: 'right',
        bodyStyle: 'padding:5px',
        //width : 600,
        collapsible: true,
        titleCollapse: true,
        method: 'POST',
        autoWidth: true,
        frame: true,
        labelWidth: 60,


        items: [{
            layout: 'column',// columnlayout
            border: false,// 没有边框
            labelSeparator: '：',// 标题的分隔符号我们用中文冒号代替英文的冒号（labelSeparator:'：'）。
            // coulmnLayout里的控件将定义在items里
            items: [{xtype: 'hidden', name: 'TDTZBH', id: 'TDTZBH'}, {xtype: 'hidden', name: 'ZT'},
                {
                    columnWidth: .2,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',// 控件的类型为datefield
                        fieldLabel: '停电日期',
                        name: 'TDSJ',
                        id: 'txt_TDSJ',
                        allowBlank: false,
                        //id:'time',
                        anchor: '96%',
                        listeners: {
                            "focus": function () {
                                WdatePicker({dateFmt: 'yyyy-MM-dd'})
                            }
                        }
                        //allowBlank : false// 该选项值不允许为空
                    }]
                }, {
                    columnWidth: .2,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',// 控件的类型为datefield
                        fieldLabel: '停电时分',
                        anchor: '96%',
                        name: 'TDSF'
                        //  format:'Y-m-d'
                        //allowBlank : false// 该选项值不允许为空
                    }]
                }, {
                    columnWidth: .2,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',// 控件的类型为datefield
                        fieldLabel: '列调令号',
                        anchor: '96%',
                        name: 'TD_XDMLH'
                    }]
                }, {
                    columnWidth: .2,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: '列调时间',
                        name: 'TD_XDSJ',
                        id: 'txt_TD_XDSJ',
                        anchor: '96%',
                        listeners: {
                            "focus": function () {
                                WdatePicker({dateFmt: 'yyyy-MM-dd HH:mm'})
                            }
                        }
                    }]
                }, {
                    columnWidth: .2,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',// 控件的类型为datefield
                        fieldLabel: '列调人员',
                        anchor: '96%',
                        name: 'TD_XDY'
                    }]
                }, {
                    columnWidth: .2,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'combo',// 控件的类型设置成combo
                        store: store_xdt,
                        valueField: "value",// 设置下拉选择框的值
                        displayField: "text",// 设置下拉选择框的显示文本
                        mode: 'local',// 数据是在本地
                        emptyText: '请选择列调台名',// 在没有选择值时显示为选择学历
                        hiddenName: 'TD_XDT',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        editable: false,// 该下拉列表只允许选择，不允许输入
                        triggerAction: 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        allowBlank: false,// 该选项值不允许为空
                        fieldLabel: '列调台名',// 控件的标题是学历
                        name: 'TD_XDT',// 再次提醒，name只是下拉列表的名称
                        id: 'txt_TD_XDT',
                        anchor: '96%'// input的宽度是90%
                    }]
                }, {
                    columnWidth: .2,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',// 控件的类型为datefield
                        fieldLabel: '电调令号',
                        anchor: '96%',
                        name: 'TD_DDMLH'
                    }]
                }, {
                    columnWidth: .2,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: '电调时间',
                        name: 'TD_DDSJ',
                        id: 'txt_TD_DDSJ',
                        anchor: '96%',
                        listeners: {
                            "focus": function () {
                                WdatePicker({dateFmt: 'yyyy-MM-dd HH:mm'})
                            }
                        }
                    }]
                }, {
                    columnWidth: .2,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',// 控件的类型为datefield
                        fieldLabel: '电调人员',
                        anchor: '96%',
                        name: 'TD_DDY',
                        value: YHMC
                    }]
                },  {
                    columnWidth: .2,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                    layout: 'form',// formlayout用来放置控件
                    border: false,// 没有边框
                    items: [{
                        xtype: 'combo',// 控件的类型设置成combo
                        store: store_ddt,
                        valueField: "value",// 设置下拉选择框的值
                        displayField: "text",// 设置下拉选择框的显示文本
                        mode: 'local',// 数据是在本地
                        emptyText: '请选择电调台名',// 在没有选择值时显示为选择学历
                        hiddenName: 'TD_DDT',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        editable: false,// 该下拉列表只允许选择，不允许输入
                        triggerAction: 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        allowBlank: false,// 该选项值不允许为空
                        fieldLabel: '电调台名',// 控件的标题是学历
                        name: 'TD_DDT',// 再次提醒，name只是下拉列表的名称
                        id: 'txt_TD_DDT',
                        anchor: '96%'// input的宽度是90%
                    }]
                },{
                    columnWidth: .2,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',// 控件的类型为datefield
                        fieldLabel: '备注',
                        anchor: '96%',
                        name: 'TD_BZ'
                    }]
                }, {
                    columnWidth: .8,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textarea',// 控件的类型为datefield
                        fieldLabel: '供电臂',
                        name: 'TDGDB',
                        anchor: '96%',
                        //  format:'Y-m-d'
                        allowBlank: false// 该选项值不允许为空
                    }]
                }]

        }],
        buttons: [{
            text: '新增',
            handler: function () {
                if (!tsbsimpleForm_Save.form.isValid()) {
                    return
                }
                ;
                if (tsbsimpleForm_Save.form.isValid()) {
                    tsbsimpleForm_Save.form.doAction('submit', {
                        waitMsg: '保存中,请稍侯...',
                        url: 'tdtz_Save.jsp',
                        method: 'post',
                        params: '',
                        success: function (form, action) {
                            Ext.Msg.alert('消息', action.result.msg);
                            //tsbsimpleForm_Save.form.reset();
                            tsbsimpleForm_Save.buttons[4].setVisible(false);
                            tsbsimple_Grid.getStore().reload();

                        },

                        failure: function () {
                            Ext.Msg.alert('操作', '保存失败！');
                            this.disabled = false;
                        }
                    });
                }
            }
        }, {
            text: '修改',
            Enabled: false,
            handler: function () {
                if (!tsbsimpleForm_Save.form.isValid()) {
                    return
                }
                ;
                if (tsbsimpleForm_Save.form.isValid()) {
                    tsbsimpleForm_Save.form.doAction('submit', {
                        waitMsg: '修改中,请稍侯...',
                        url: 'tdtz_Update.jsp',
                        method: 'post',
                        params: '',
                        success: function (form, action) {
                            tsbsimple_Grid.getStore().reload();
                            Ext.Msg.alert('消息', action.result.msg);

                        },
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
            handler: function () {
                tsbsimpleForm_Save.form.reset();
                tsbsimpleForm_Save.buttons[0].setVisible(true);
                // tsbsimpleForm_Save.buttons[1].setVisible(false);
                // tsbsimpleForm_Save.buttons[3].setVisible(false);
                tsbsimpleForm_Save.buttons[4].setVisible(false);
                tsbsimpleForm_Save.buttons[5].setVisible(false);
            }
        }, {
            text: '删除',
            Enabled: false,
            handler: function () {
                tsbsimpleForm_Save.buttons[0].setVisible(true);
                // tsbsimpleForm_Save.buttons[1].setVisible(false);
                // tsbsimpleForm_Save.buttons[3].setVisible(false);
                tsbsimpleForm_Save.buttons[4].setVisible(false);
                tsbsimpleForm_Save.buttons[5].setVisible(false);
                if (!tsbsimpleForm_Save.form.isValid()) {
                    return
                }
                ;
                if (tsbsimpleForm_Save.form.isValid()) {
                    tsbsimpleForm_Save.form.doAction('submit', {
                        waitMsg: '删除中,请稍侯...',
                        url: 'tdtz_Del.jsp',
                        method: 'post',
                        params: '',
                        success: function (form, action) {
                            tsbsimple_Grid.getStore().reload();
                            Ext.Msg.alert('消息', action.result.msg);

                        },
                        failure: function () {
                            Ext.Msg.alert('操作', '删除失败！');
                            this.disabled = false;
                        }
                    });
                }
            }
        }, {
            text: '发送列调',
            handler: function () {
                tsbsimpleForm_Save.buttons[0].setVisible(true);
                // tsbsimpleForm_Save.buttons[1].setVisible(false);
                // tsbsimpleForm_Save.buttons[3].setVisible(false);
                tsbsimpleForm_Save.buttons[4].setVisible(false);
                tsbsimpleForm_Save.buttons[5].setVisible(false);
                if (!tsbsimpleForm_Save.form.isValid()) {
                    return
                }
                ;
                if (tsbsimpleForm_Save.form.isValid()) {
                    tsbsimpleForm_Save.form.doAction('submit', {
                        waitMsg: '发送中,请稍侯...',
                        url: 'tdtz_to_xd.jsp',
                        method: 'post',
                        params: '',
                        success: function (form, action) {
                            tsbsimple_Grid.getStore().reload();
                            Ext.Msg.alert('消息', action.result.msg);
                        },
                        failure: function () {
                            Ext.Msg.alert('操作', '修改失败！');
                            this.disabled = false;
                        }
                    });
                }
            }
        }, {
            text: '电调归档',
            handler: function () {
                tsbsimpleForm_Save.buttons[0].setVisible(true);
                tsbsimpleForm_Save.buttons[2].setVisible(true);
                // tsbsimpleForm_Save.buttons[1].setVisible(false);
                // tsbsimpleForm_Save.buttons[3].setVisible(false);
                tsbsimpleForm_Save.buttons[4].setVisible(false);
                tsbsimpleForm_Save.buttons[5].setVisible(false);
                if (!tsbsimpleForm_Save.form.isValid()) {
                    return
                }
                ;
                if (tsbsimpleForm_Save.form.isValid()) {
                    tsbsimpleForm_Save.form.doAction('submit', {
                        waitMsg: '归档中,请稍侯...',
                        url: 'tdtz_ddgd.jsp',
                        method: 'post',
                        params: '',
                        success: function (form, action) {
                            tsbsimple_Grid.getStore().reload();
                            Ext.Msg.alert('消息', action.result.msg);
                        },
                        failure: function () {
                            Ext.Msg.alert('操作', '修改失败！');
                            this.disabled = false;
                        }
                    });
                }
            }
        }]
    });

    //================
    var simple_Viewport = new Ext.Viewport({
        layout: 'column',
        items: [tsbsimpleForm_Save, tsbsimple_Grid]
    });
    // tsbsimpleForm_Save.buttons[1].setVisible(false);
    // tsbsimpleForm_Save.buttons[3].setVisible(false);
    tsbsimpleForm_Save.buttons[4].setVisible(false);
    tsbsimpleForm_Save.buttons[5].setVisible(false);
});

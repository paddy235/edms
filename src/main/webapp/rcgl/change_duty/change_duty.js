Ext.onReady(function () {

    Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    getMessage();
    var userdwid = document.getElementById("userDwid").value;
    var userName = document.getElementById("userName").value;

    //var txt_jb="";
    //定义Grid表头
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //自动行号
        //new Ext.grid.RowNumberer(),

        {header: '序号', dataIndex: 'xh', width: 50, fixed: true},
        {header: '交班人', dataIndex: 'jiaobr', width: 60, fixed: true, sortable: true},
        {header: '交接班时间', dataIndex: 'jbsj', width: 120, fixed: true, sortable: true},
        {header: '接班人', dataIndex: 'jbr', width: 60, fixed: true, sortable: true},
        {header: '天气', dataIndex: 'tq', width: 50, fixed: true, sortable: true},
        {header: '技术资料规章', dataIndex: 'jszlgz', width: 100, fixed: true, sortable: true},
        {header: '调度设备状态', dataIndex: 'ddsbzt', width: 80, fixed: true, sortable: true},
        {header: '备品', dataIndex: 'bp', width: 80, fixed: true, sortable: true},
        {header: '卫生', dataIndex: 'ws', width: 80, fixed: true, sortable: true},
        {header: '确认事项', dataIndex: 'zdsx', width: 100, sortable: true}
    ]);


    var planRecord = Ext.data.Record.create([
        {name: 'xh', type: 'int'},
        {name: 'jbid', type: 'int'},
        {name: 'dwid', type: 'string'},
        {name: 'dwmc', type: 'string'},
        {name: 'jbr', type: 'string'},
        {name: 'jiaobr', type: 'string'},
        {name: 'jszlgz', type: 'string'},
        {name: 'ddsbzt', type: 'string'},
        {name: 'bp', type: 'string'},
        {name: 'ws', type: 'string'},
        {name: 'zdsx', type: 'string'},
        {name: 'tq', type: 'string'},
        {name: 'jbsj', type: 'string'}
    ]);


    //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url: 'change_duty_json.jsp'}),
        baseParams: {whereclause: '1=1'},//点击翻页的时候，这个值不会消失，作为基本参数，只有点击查询按钮时才会改变

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
    //Grid上触发事件
    //grid.addListener('cellClick',cellClick);
    //显示在html中id为container的层中
    //grid.render();//渲染表格


    Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
    // form start
    simpleForm_Save = new Ext.FormPanel({
        renderTo: document.body,
        labelAlign: 'left',
        title: '交接班管理',
        buttonAlign: 'right',
        bodyStyle: 'padding:5px',
        //width : 800,
        collapsible: true,
        titleCollapse: true,
        method: 'POST',
        autoWidth: true,
        frame: true,
        labelWidth: 79,


        items: [{
            layout: 'column',// columnlayout
            border: false,// 没有边框
            labelSeparator: '：',// 标题的分隔符号我们用中文冒号代替英文的冒号（labelSeparator:'：'）。
            // coulmnLayout里的控件将定义在items里
            items: [{xtype: 'hidden', name: 'jbid', id: 'txt_jbid'}
                , {
                    columnWidth: .22,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',// 控件的类型为datefield
                        fieldLabel: '交班人',
                        name: 'jiaobr',
                        id: 'txt_jbr',
                        anchor: '90%'

                    }]
                }, {
                    columnWidth: .27,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'field',// 控件的类型为datefield

                        fieldLabel: '交接班时间',
                        labelWidth: '10%',
                        name: 'jbsj',
                        anchor: '90%',
                        //readOnly:true,
                        //value: new Date,
                        id: 'txt_jbsj',
                        listeners: {
                            "focus": function () {
                                WdatePicker({dateFmt: 'yyyy-MM-dd HH:mm'})
                            }
                        }
                        //allowBlank : false// 该选项值不允许为空
                    }]

                }, {
                    columnWidth: .22,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',// 控件的类型为datefield
                        fieldLabel: '接班人',
                        allowBlank: false,
                        blankText: '填写接班人',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        emptyText: '请填写接班人',// 在没有选择值时显示为选择学历
                        name: 'jbr',
                        //id:'txt_jlr',
                        anchor: '90%'
                    }]
                }, {
                    columnWidth: .2,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',// 控件的类型为datefield
                        fieldLabel: '天气',
                        //allowBlank:false,
                        blankText: '填写天气',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        emptyText: '请写天气',// 在没有选择值时显示为选择学历
                        name: 'tq',
                        //id:'txt_jlr',
                        value: '晴',
                        anchor: '90%'
                    }]
                }

            ]

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
                    fieldLabel: '技术资料规章',
                    name: 'jszlgz',
                    anchor: '90%',
                    value: '良好',
                    height: 35
                    //format:'Y-m-d'
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
                    fieldLabel: '调度设备状态',
                    name: 'ddsbzt',
                    anchor: '90%',
                    value: '良好',
                    height: 35
                    //format:'Y-m-d'
                }]
            }]
        }
            , {
                layout: 'column',
                border: false,
                labelSeparator: '：',
                items: [{
                    columnWidth: .99,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textarea',// 控件的类型为datefield
                        fieldLabel: '备品',
                        name: 'bp',
                        anchor: '90%',
                        value: '良好',
                        height: 35
                        //format:'Y-m-d'
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
                        fieldLabel: '卫生',
                        name: 'ws',
                        anchor: '90%',
                        value: '良好',
                        height: 35
                        //format:'Y-m-d'
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
                        fieldLabel: '要确认事项',
                        name: 'zdsx',
                        anchor: '90%',
                        //value:'良好',
                        id: 'txt_yqrsx',
                        height: 100
                        //format:'Y-m-d'
                    }]
                }]
            }, {
                layout: 'column',// columnlayout
                border: false,// 没有边框
                labelSeparator: '：',// 标题的分隔符号我们用中文冒号代替英文的冒号（labelSeparator:'：'）。
                // coulmnLayout里的控件将定义在items里
                items: [{
                    columnWidth: .5,// 在加入性别的radio控件时就要注意了，这里需要加入两个radio，第一radio是有标题的，第二是没有的，而且两个radio加起来的宽度应该正好是余下的列宽（50%）
                    layout: 'form',
                    border: false,
                    items: [{
                        style: 'margin-top:5px',// 设置一个css属性，顶部的外补丁为5px（style:'margin-top:5px'），原因是为了选择按钮和标题对齐，大家可以将该属性去掉然后看看效果。
                        xtype: 'radio',// Formlayout里加入了一个类型为radio的控件
                        fieldLabel: '是否确认',// 控件的标题是性别
                        boxLabel: '是',// 控件的选择显示文本是男
                        name: 'check',// input的name属性值是sex
                        inputValue: 'true',// 控件的值（value）是男
                        //columns: 2,
                        listeners: {
                            'check': function (checkbox, checked) {
                                if (checked) {
                                    Ext.getCmp("btn_jb").enable();

                                }
                            }
                        },
                        anchor: '50%'// input的宽度是95%
                    }]
                }, {
                    columnWidth: .5,// 我们已经设置了3列，3列的列宽分别为50%、25%、25%
                    layout: 'form',
                    labelWidth: 20,// 标题的宽度设置为0
                    labelSeparator: '',// 标题分隔符号为空
                    hideLabels: true,// 第二个raido控件的列设置就有所不同，因为它不需要标题，所以要设置隐藏标题
                    border: false,
                    items: [{
                        style: 'margin-top:5px',
                        xtype: 'radio',
                        boxLabel: '否',
                        name: 'check',
                        inputValue: 'true',
                        checked: true,// 该控件默认是已选的
                        listeners: {
                            'check': function (checkbox, checked) {
                                if (checked) {

                                    Ext.getCmp("btn_jb").disable();

                                }
                            }
                        },
                        anchor: '95%'
                    }]
                }]

            }
        ],
        //为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
        buttons: [{
            // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
            text: '接班',
            id: 'btn_jb',
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
                        url: 'change_duty_save.jsp',
                        method: 'post',
                        params: '',
                        // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                        // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                        success: function (form, action) {

                            Ext.Msg.alert('消息', action.result.msg);
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
            text: '查看报表',
            handler: function () {

                window.location.href = '../../tjbb/query/jjb.jsp?jbid=' + Ext.getCmp("txt_jbid").getValue();

            }
        }]
    });


    var simpleForm_Query = new Ext.FormPanel({
        renderTo: document.body,
        labelAlign: 'left',
        title: '交接班记录—查询',
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
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'field',// 控件的类型为datefield
                    fieldLabel: '开始时间',
                    name: 'ksrq',
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
                    fieldLabel: '终止时间',
                    name: 'jsrq',
                    id: 'txt_jsrq',
                    //value: new Date,
                    anchor: '90%',
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
                    var where = " and 1=1 ";
                    //alert(Ext.getCmp("txt_ksrq").getValue());
                    if (Ext.getCmp("txt_ksrq").getValue() != "") {
                        where = where + " and jbsj >=to_date('" + Ext.getCmp(
                                "txt_ksrq").getValue() + "','yyyy-mm-dd hh24:mi')";
                    }
                    //alert(Ext.getCmp("txt_jsrq").getValue());
                    if (Ext.getCmp("txt_jsrq").getValue() != "") {
                        where = where + "  and jbsj <=to_date('" + Ext.getCmp(
                                "txt_jsrq").getValue() + "','yyyy-mm-dd hh24:mi')";
                    }

                    //alert(where);
                    store.baseParams.whereclause = store.baseParams.whereclause + where;
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
        simpleForm_Save.getForm().loadRecord(record);
        simpleForm_Save.buttons[0].setVisible(false);
        simpleForm_Save.buttons[1].setVisible(true);
    });


    //从session取值赋值给form字段;
    Ext.Ajax.request({
        url: 'getDutyman.jsp',
        success: function (response, opts) {
            simpleForm_Save.getForm().setValues([{id: "jbr", value: response.responseText}]);
        },
        failure: function (response, opts) {
            console.log('服务端失效的状态代码：' + response.status);
        }
    });
    Ext.getCmp("btn_jb").disable();
    simpleForm_Save.buttons[1].setVisible(false);
    var simple_Viewport = new Ext.Viewport({
        layout: 'column',
        items: [simpleForm_Save, simpleForm_Query, simple_Grid]

    });
    //simpleForm_Save.collapse();
    //alert("asdfasdf");
    //alert("asdfasdf");
    function jbsj() {
        var myyear, mymonth, myweek, myday, mytime, mymin, myhour, mysec;
        var mydate = new Date();
        myyear = mydate.getFullYear();
        mymonth = mydate.getMonth() + 1;
        myday = mydate.getDate();
        myhour = mydate.getHours();
        mymin = mydate.getMinutes();
        mysec = mydate.getSeconds();
        mytime = myyear + "-" + mymonth + "-" + myday + " " + myhour + ":" + mymin;
        //alert(y+'-'+m'-'+d+' '+h+':'+mi;);
        // alert( mytime);
        Ext.getCmp("txt_jbsj").setValue(mytime);
    }

    jbsj();
    setInterval(jbsj, 5000);

});
var txt_jbr = "";
var simpleForm_Save;
////--------------异步查看需要查看的记事的内容---------------------------------------------
function getMessage() {
    // 实例化Ext发送Ajax请求需要的Connection对象
    //alert("asdfdf");
    var conn = new Ext.data.Connection();
    // 发送异步请求
    conn.request({
        // 请求地址
        url: 'jsnr.jsp',
        method: 'GET',
        // 指定回调函数
        callback: callback
    });
}
function callback(options, success, response) {
    if (success) {
        // 如果成功则使用Ext将JSON字符串转换为JavaScript对象
        var jsonObj = Ext.util.JSON.decode(response.responseText);
        //　到这就可以取你想要的东东了
        //Ext.Msg.alert('操作卡片',jsonObj.id);
        //alert(jsonObj.id);jlr  txt_jbr
        Ext.getCmp("txt_yqrsx").setValue(jsonObj.id.replace(/<br>/g, "\n"));
        txt_jbr = jsonObj.jlr;
        //alert(txt_jbr);
        Ext.getCmp("txt_jbr").setValue(jsonObj.jlr);
        //Ext.getCmp("txt_yqrsx").getValue();
        if (txt_jbr == "") {
            simpleForm_Save.collapse();
        }
        else {
            simpleForm_Save.expand();
        }
    }
}
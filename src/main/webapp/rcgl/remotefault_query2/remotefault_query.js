Ext.onReady(function () {
    var ddtdm_cell = "";
    this.ryshow = function (value1) {
        //window.open("xxx.jsp");

        win1 = new Ext.Window({
            width: document.body.clientWidth - 20,
            height: document.body.clientHeight - 10,
            layout: 'column',
            title: '跳闸记录',
            closeAction: 'hide',
            plain: true,
            autoScroll: false,
            html: '<iframe style="width:100%;height:100%" src="../../tjbb/query/tzjl.jsp?whereyxgl=' + value1 + '"></iframe>'
        });
        win1.show(this);
    };

    Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var username = document.getElementById("txt_username").value;
    var userdj = document.getElementById("userdj").value;
    var userdwid = document.getElementById("userdwid").value;
    var ttyhmc = document.getElementById("ttyhmc").value;
    userdwid = '00';
    var stor_where = "";
    var stor_where1 = "";
    var cell_where = " 1=1 ";

    if (userdj == '6') {
        stor_where = "gz.gqpym in (select gq.gqpym from  j_gyjc_gqzd gq where gq.gqdm='" + userdwid + "')";
        stor_where1 = "gz.gqpym in (select gq.gqpym from  j_gyjc_gqzd gq where gq.gqdm='" + userdwid + "')";
    }
    else if (userdj = '3') {
        stor_where = "gz.gqpym in (select gq.gqpym from  j_gyjc_gqzd gq where gq.ddtdm like '" + userdwid + "%')";
        stor_where1 = "gz.gqpym in (select gq.gqpym from  j_gyjc_gqzd gq where gq.ddtdm like '" + userdwid + "%')";
    }
    else {
        stor_where = "gz.gqpym in (select gq.gqpym from  j_gyjc_gqzd gq where gq.cjdm like '" + userdwid + "%')";
        stor_where1 = "gz.gqpym in (select gq.gqpym from  j_gyjc_gqzd gq where gq.cjdm like '" + userdwid + "%')";
    }
    stor_where = " gz.bgsj <=sysdate and gz.bgsj>=to_date('" + get_nowTime() + "','yyyy-mm-dd hh24:mi')";
    ///----查询单位的comlist-----------gz.bgsj
    var sql = "select ddtdm,ddtmc from j_gyjc_ddtzd  where ddtdm like \'" + userdwid + "%25\'";

    var planRecord_bdt = Ext.data.Record.create([
        {name: 'value', type: 'string'},
        {name: 'text', type: 'string'}
    ]);
    var store_bdt = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url: '../../share/combo_list.jsp?sql=' + sql + '&all=all'}),
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty: 'success'
        }, planRecord_bdt)
    });
    //store_bdt.load();

    var sql_lb = "select distinct bg.lb,bg.lb from Z_XXGX_YDGZBG2 bg";

    var planRecord_lb = Ext.data.Record.create([
        {name: 'value', type: 'string'},
        {name: 'text', type: 'string'}
    ]);
    var store_lb = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url: '../../share/combo_list.jsp?sql=' + sql_lb}),
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty: 'success'
        }, planRecord_lb)
    });
    store_lb.load();


    //线别
    var sql_xlm = "select distinct o.xldm,o.xlm from J_GYJC_XLZD o";
    var planRecord_xlm = Ext.data.Record.create([
        {name: 'value', type: 'string'},
        {name: 'text', type: 'string'}
    ]);
    var store_xlm = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url: '../../share/combo_list.jsp?sql=' + sql_xlm + '&all=all'}),  // '&all=all' 的作用是全部
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty: 'success'
        }, planRecord_xlm)
    });
    store_xlm.load();

    //线别1
    var store_xlm1 = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url: '../../share/combo_list.jsp?sql=' + sql_xlm}),  // '&all=all' 的作用是全部
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty: 'success'
        }, planRecord_xlm)
    });
    store_xlm1.load();

    //电调台

    var planRecord_ddt = Ext.data.Record.create([
        {name: 'value', type: 'string'},
        {name: 'text', type: 'string'}
    ]);
    var store_ddt = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url: 'ddt.jsp'}),  // '&all=all' 的作用是全部
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty: 'success'
        }, planRecord_ddt)
    });
    store_ddt.load();

    //所属段

    var sql_ggdmc = "select distinct o.gdddm,o.ggdmc from J_GYJC_GDDZD o";

    var planRecord_ggdmc = Ext.data.Record.create([
        {name: 'value', type: 'string'},
        {name: 'text', type: 'string'}
    ]);
    var store_ggdmc = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url: '../../share/combo_list.jsp?sql=' + sql_ggdmc + '&all=all'}),
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty: 'success'
        }, planRecord_ggdmc)
    });
    store_ggdmc.load();
    ///----受令单位-----------
    //var sql="select gqdm,gqmc from J_GYJC_GQZD where jglbdm='2' and ddtdm=\'"+ddtdm+"\'";//

    var planRecord_dw = Ext.data.Record.create([
        {name: 'value', type: 'string'},
        {name: 'text', type: 'string'}
    ]);
    var store_dw = new Ext.data.Store({//
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url: '../sldw_pym.jsp?zt=' + '(jglbdm!= 1 )' + '&all=all'}),
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty: 'success'
        }, planRecord_dw)
    });
    store_dw.load();
    ////得到的单位是dwid
    var planRecord_dwid = Ext.data.Record.create([
        {name: 'value', type: 'string'},
        {name: 'text', type: 'string'}
    ]);
    var store_dwid = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url: '../sldw_dwid.jsp?zt=' + '(jglbdm!= 1 )'}),
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty: 'success'
        }, planRecord_dwid)
    });
    store_dwid.load();


    /////对应的停电单元
    var sql_tddy = "select bhzzdm,kxmc from j_gdgy_kx";
    var planRecord_tddy = Ext.data.Record.create([
        {name: 'value', type: 'string'},
        {name: 'text', type: 'string'}
    ]);
    var store_tddy = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url: '../../share/combo_list.jsp?sql=' + sql_tddy}),
        //reader告诉我们如何解析这个数据
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty: 'success'
        }, planRecord_tddy)
    });
    store_tddy.load();
    var zt = function (value) {
        if (value == "0") {
            return '失败';
        }
        else if (value == "1") {
            return '成功';
        }
        else if (value == "2") {
            return '未启动';
        }
        else if (value == "3") {
            return '已撤除';
        }
    }
    var simpleForm_Save = new Ext.FormPanel({
        renderTo: document.body,
        labelAlign: 'left',
        title: '跳闸记录添加',
        buttonAlign: 'right',
        bodyStyle: 'padding:5px',
        //width : 800,
        collapsible: true,
        titleCollapse: true,
        method: 'POST',
        autoWidth: true,
        frame: true,
        labelWidth: 70,


        items: [{
            layout: 'column',// columnlayout
            border: false,// 没有边框
            labelSeparator: '：',// 标题的分隔符号我们用中文冒号代替英文的冒号（labelSeparator:'：'）。
            // coulmnLayout里的控件将定义在items里
            items: [{xtype: 'hidden', name: 'ydsgbm'}
                , {
                    columnWidth: .33,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',// 控件的类型为datefield
                        fieldLabel: '跳闸时间',
                        name: 'bgsj',
                        id: 'txt_bgsj',
                        allowBlank: false,
                        //id:'time',
                        anchor: '90%',
                        listeners: {
                            "focus": function () {
                                WdatePicker({dateFmt: 'yyyy-MM-dd HH:mm:ss'})
                                var bgsj = Ext.getCmp("txt_bgsj").getValue();
                                var fhsj = Ext.getCmp("txt_fhsj").getValue();
                                var bg = new Date(bgsj.replace("-", "/")).getTime();
                                var fh = new Date(fhsj.replace("-", "/")).getTime();
                                if (bgsj != '' && fhsj != '') {
                                    Ext.getCmp("txt_tdsj").setValue(Math.round((fh - bg) / 60000));
                                }
                            }
                        }
                        //allowBlank : false// 该选项值不允许为空
                    }]
                },
                {
                    columnWidth: .33,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                    layout: 'form',// formlayout用来放置控件
                    border: false,// 没有边框
                    hidden: true,
                    items: [{
                        xtype: 'combo',// 控件的类型设置成combo
                        // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        store: store_xlm1,
                        //value:'全部',
                        valueField: "value",// 设置下拉选择框的值
                        displayField: "text",// 设置下拉选择框的显示文本
                        mode: 'local',// 数据是在本地
                        //forceSelection : true,// 必须选择一个选项
                        //blankText : '请选择作业单位',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        emptyText: '线别',// 在没有选择值时显示为选择学历
                        hiddenName: 'xb_add',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        allowBlank: true,
                        // editable : true,// 该下拉列表只允许选择，不允许输入
                        triggerAction: 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        //allowBlank : false,// 该选项值不允许为空
                        fieldLabel: '线别',// 控件的标题是学历
                        name: 'xb_add',// 再次提醒，name只是下拉列表的名称
                        //id:'bds_id',
                        anchor: '90%'// input的宽度是90%

                    }]
                }, {
                    columnWidth: .33,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                    layout: 'form',// formlayout用来放置控件
                    border: false,// 没有边框
                    items: [{
                        xtype: 'combo',// 控件的类型设置成combo
                        // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        store: store_dwid,
                        //value:'全部',
                        valueField: "value",// 设置下拉选择框的值
                        displayField: "text",// 设置下拉选择框的显示文本
                        mode: 'local',// 数据是在本地
                        //forceSelection : true,// 必须选择一个选项
                        //blankText : '请选择作业单位',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        emptyText: '所别',// 在没有选择值时显示为选择学历
                        hiddenName: 'gqdm',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        editable: true,// 该下拉列表只允许选择，不允许输入
                        triggerAction: 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        allowBlank: false,// 该选项值不允许为空
                        fieldLabel: '所别',// 控件的标题是学历
                        name: 'gqdm',// 再次提醒，name只是下拉列表的名称
                        id: 'txt_tzdw',
                        listeners: {
                            "select": function (combo, planRecord_bds, index) {
                                var sldw = Ext.getCmp("txt_tzdw").value;
                                //alert(sldw);
                                var combo2 = Ext.getCmp('txt_tddy');
                                combo2.enable();
                                combo2.reset();   //
                                combo2.store.proxy = new Ext.data.HttpProxy(
                                    {url: '../../share/combo_list.jsp?sql=select bhzzdm,tdqd from j_gdgy_kx'});
                                combo2.store.load();
                            }
                        },
                        anchor: '90%'// input的宽度是90%
                    }]
                }]

        }, {
            layout: 'column',
            border: false,
            labelSeparator: '：',
            items: [{
                columnWidth: .33,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textfield',// 控件的类型为datefield
                    fieldLabel: '开关号',
                    name: 'kgh',
                    //allowBlank : false,
                    //readOnly:true,
                    //id:'txt_ddy',
                    //disabled:true,
                    anchor: '90%'
                    // format:'Y-m-d'
                }]
            }, {
                columnWidth: .33,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textfield',// 控件的类型为datefield
                    fieldLabel: '保护装置',
                    name: 'bhzzmc',
                    //allowBlank : false,
                    //id:'txt_tdsj',
                    //id:'time',
                    anchor: '90%'
                    //allowBlank : false// 该选项值不允许为空
                }]
            }, {
                columnWidth: .33,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textfield',// numberfield控件的类型为datefield
                    fieldLabel: '故标',
                    name: 'sgjl',
                    id: 'txt_sgjl',
                    //allowBlank : false,
                    //id:'txt_tdsj',
                    //id:'time',
                    anchor: '90%',
                    listeners: {
                        "blur": function () {
                            var txt_jg = Ext.getCmp("txt_sgjl").getValue();
                            /*改为文本，本能定位事故地点*/
                            /*if(isNaN(txt_jg))
                             {
                             Ext.Msg.alert('消息',"请输入数字！");
                             Ext.getCmp("txt_sgjl").setValue("0");
                             }*/

                        }
                    }
                    //allowBlank : false// 该选项值不允许为空
                }]
            }
                , {
                    columnWidth: .33,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',// 控件的类型为datefield
                        fieldLabel: '复合时间',
                        name: 'fhsj',
                        id: 'txt_fhsj',
                        //id:'time',
                        anchor: '90%',
                        //allowBlank : false,
                        listeners: {
                            "focus": function () {
                                WdatePicker({dateFmt: 'yyyy-MM-dd HH:mm:ss'})
                                var bgsj = Ext.getCmp("txt_bgsj").getValue();
                                var fhsj = Ext.getCmp("txt_fhsj").getValue();
                                var bg = new Date(bgsj.replace("-", "/")).getTime();
                                var fh = new Date(fhsj.replace("-", "/")).getTime();
                                if (bgsj != '' && fhsj != '') {
                                    Ext.getCmp("txt_tdsj").setValue(Math.round((fh - bg) / 60000));
                                }
                            }
                        }
                        //allowBlank : false// 该选项值不允许为空
                    }]
                }, {
                    columnWidth: .33,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',// 控件的类型为datefield
                        fieldLabel: '停时（分）',
                        name: 'tdsf',
                        //allowBlank : false,
                        id: 'txt_tdsj',
                        //id:'time',
                        anchor: '90%',
                        listeners: {
                            "blur": function () {
                                var sf = Ext.getCmp("txt_tdsj").getValue();
                                if (isNaN(sf)) {
                                    Ext.Msg.alert('消息', "请输入数字！");

                                    var bgsj = Ext.getCmp("txt_bgsj").getValue();
                                    var fhsj = Ext.getCmp("txt_fhsj").getValue();
                                    var bg = new Date(bgsj.replace("-", "/")).getTime();
                                    var fh = new Date(fhsj.replace("-", "/")).getTime();
                                    if (bgsj != '' && fhsj != '') {
                                        Ext.getCmp("txt_tdsj").setValue(Math.round((fh - bg) / 60000));
                                    }
                                }
                            }
                        }
                        //allowBlank : false// 该选项值不允许为空
                    }]
                }
                , {
                    columnWidth: .33,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',// 控件的类型为datefield
                        fieldLabel: '跳闸原因',
                        name: 'tzyy',
                        //allowBlank : false,
                        //readOnly:true,
                        //id:'txt_ddy',
                        //disabled:true,
                        anchor: '90%'
                        // format:'Y-m-d'
                    }]
                }]
        }, {
            layout: 'column',
            border: false,
            labelSeparator: '：',
            items: [{
                columnWidth: .33,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                layout: 'form',// formlayout用来放置控件
                border: false,// 没有边框
                items: [{
                    xtype: 'combo',// 控件的类型设置成combo
                    // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                    store: new Ext.data.SimpleStore({
                        // 通过一个数组定义了returnValue和displayText两个字段。retrunValue字段指定是提交给后台的值，displayText字段指定是在下拉中显示的选择值。
                        fields: ["returnValue", "displayText"],
                        // 定义了几组数据.每组数据都是根据fiedls的定义来组成的，数组里第一个值就是retrunValue的值，第二个值就是displayText的值，例如[1,'小学']，就表示retrunValue是1，displayText是小学。
                        data: [['供电', '供电'], ['机车', '机车'], ['外部', '外部'], ['原因不明', '原因不明']]
                    }),
                    valueField: "returnValue",// 设置下拉选择框的值
                    displayField: "displayText",// 设置下拉选择框的显示文本
                    mode: 'local',// 数据是在本地
                    //forceSelection : true,// 必须选择一个选项
                    //blankText : '请选择作业单位',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                    emptyText: '类别',// 在没有选择值时显示为选择学历
                    hiddenName: 'lb',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                    allowBlank: false,
                    editable: true,// 该下拉列表只允许选择，不允许输入
                    triggerAction: 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                    //allowBlank : false,// 该选项值不允许为空
                    fieldLabel: '类别',// 控件的标题是学历
                    name: 'lb',// 再次提醒，name只是下拉列表的名称
                    //id:'bds_id',
                    anchor: '90%'// input的宽度是90%
                }]
            },
                {
                    columnWidth: .33,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                    layout: 'form',// formlayout用来放置控件
                    border: false,// 没有边框
                    items: [{
                        xtype: 'combo',// 控件的类型设置成combo
                        // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        store: new Ext.data.SimpleStore({
                            // 通过一个数组定义了returnValue和displayText两个字段。retrunValue字段指定是提交给后台的值，displayText字段指定是在下拉中显示的选择值。
                            fields: ["returnValue", "displayText"],
                            // 定义了几组数据.每组数据都是根据fiedls的定义来组成的，数组里第一个值就是retrunValue的值，第二个值就是displayText的值，例如[1,'小学']，就表示retrunValue是1，displayText是小学。
                            data: [['1', '成功'], ['0', '失败'], ['2', '未启动'], ['3', '已撤除']]
                        }),
                        // value:'全部',
                        valueField: "returnValue",// 设置下拉选择框的值
                        displayField: "displayText",// 设置下拉选择框的显示文本
                        mode: 'local',// 数据是在本地
                        //forceSelection : true,// 必须选择一个选项
                        //blankText : '请选择作业单位',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        emptyText: '重合闸状态',// 在没有选择值时显示为选择学历
                        hiddenName: 'chzzt',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        allowBlank: false,
                        editable: false,// 该下拉列表只允许选择，不允许输入
                        triggerAction: 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        //allowBlank : false,// 该选项值不允许为空
                        fieldLabel: '重合闸状态',// 控件的标题是学历
                        name: 'chzzt',// 再次提醒，name只是下拉列表的名称
                        //id:'bds_id',
                        anchor: '90%'// input的宽度是90%
                    }]
                }, {
                    columnWidth: .33,
                    layout: 'form',
                    border: false,
                    hidden: true,
                    items: [{
                        xtype: 'field',// 控件的类型为datefield
                        fieldLabel: '调度员',
                        name: 'ddy',
                        id: 'txt_ddy',
                        //readOnly:true,
                        //disabled:true,
                        anchor: '90%'
                        // format:'Y-m-d'
                    }]
                }]
        }, {
            layout: 'column',
            border: false,
            labelSeparator: '：',
            items: [{
                columnWidth: 1.06,
                layout: 'form',
                border: false,
                hidden: true,
                items: [{
                    xtype: 'textarea',// 控件的类型为datefield
                    fieldLabel: '停电区段',
                    name: 'tdqd',
                    // allowBlank : false,
                    anchor: '90%',
                    height: 30
                    //format:'Y-m-d'
                }]
            }]
        },
            /* {
             layout : 'column',
             border : false,
             labelSeparator : '：',
             items : [{
             columnWidth : 1.06,
             layout : 'form',
             border : false,
             items : [{
             xtype : 'textarea',// 控件的类型为datefield
             fieldLabel : '故障地点',
             name : 'sjgzdd',
             // allowBlank : false,
             anchor : '90%',

             height:30
             //format:'Y-m-d'
             }]
             }]
             },*/
            {
                layout: 'column',
                border: false,
                labelSeparator: '：',
                items: [{
                    columnWidth: 1.06,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textarea',// 控件的类型为datefield
                        fieldLabel: '故障概况',
                        name: 'gzms',
                        //allowBlank : false,
                        anchor: '90%',
                        height: 50
                        //format:'Y-m-d'
                    }]
                }]
            }, {
                layout: 'column',
                border: false,
                labelSeparator: '：',
                items: [{
                    columnWidth: 1.06,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textarea',// 控件的类型为datefield
                        fieldLabel: '备注',
                        name: 'bz',
                        anchor: '90%',
                        height: '50'
                        // format:'Y-m-d'
                    }]
                }]
            }, {
                layout: 'column',
                border: false,
                labelSeparator: '：',
                hidden: true,
                items: [{
                    columnWidth: 1.06,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',// 控件的类型为datefield
                        fieldLabel: '审核人',
                        name: 'shr',
                        anchor: '90%'
                        // format:'Y-m-d'
                    }]
                }]
            }

        ],
        // 为form添加按钮了，在formpanel的buttons属性中我们加入了一个保存按钮和取消按钮
        buttons: [{
            // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
            text: '添加',

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
                        url: 'remotefault_add.jsp',
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
            text: '重置',
            handler: function () {
                simpleForm_Save.form.reset();
                Ext.getCmp("txt_ddy").setValue(username);
                simpleForm_Save.buttons[0].setVisible(true);
                simpleForm_Save.buttons[1].setVisible(true);
                simpleForm_Save.buttons[2].setVisible(false);
                simpleForm_Save.buttons[3].setVisible(false);
            }
        }, {
            // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
            text: '修改',
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
                        url: 'remotefault_update.jsp',
                        method: 'post',
                        params: '',
                        // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                        // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                        success: function (form, action) {
                            // 例如返回的json结构是"{success:true,data:'成功保存！'}"，

                            Ext.Msg.alert('操作', action.result.msg);
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
            // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
            text: '删除',
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
                        url: 'remotefault_del.jsp',
                        method: 'post',
                        params: '',
                        // 提交成功后执行success定义的函数，后台返回的数据格式是需要我们注意的，一定要json格式，而且必须包含“success:true”，不然不会执行success定义的函数。
                        // success定义的函数返回两个参数，第一是form本身，第二个是ajax返回的响应结果，在action.result这个json数组了保存了后台返回的数据。
                        success: function (form, action) {
                            // 例如返回的json结构是"{success:true,data:'成功保存！'}"，
                            Ext.Msg.alert('操作', action.result.msg);
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


    var expander = new Ext.ux.grid.RowExpander({
        tpl: new Ext.Template(
            '<p><b>停电区段:</b> {tdqd} </p> <p><b>故障概况:</b> {gzms} </p>  <p><b>跳闸原因:</b> {tzyy} </p> <p><b>备注:</b> {bz} </p> ')

    });
    //定义Grid表头

    var columns = new Ext.grid.ColumnModel([

        //new Ext.grid.RowNumberer(),
        expander,
        {header: '序号', dataIndex: 'xh', width: 35, fixed: true},
        {header: '跳闸时间', dataIndex: 'bgsj', width: 130, sortable: true, fixed: true},
        //{header:'线别',dataIndex:'xb',width:100,sortable:true,fixed:true},
        //{header:'所属段',dataIndex:'ssd',width:100,sortable:true,fixed:true},
        {header: '所别', dataIndex: 'gqmc', width: 90, sortable: true},
        {header: '开关号', dataIndex: 'kgh', width: 45, sortable: true},
        {header: '保护装置', dataIndex: 'bhzzmc', width: 40, sortable: true},
        {header: '故标', dataIndex: 'sgjl', width: 40, sortable: true},
        {header: '复合时间', dataIndex: 'fhsj', width: 130, sortable: true, fixed: true},
        {header: '停时(分)', dataIndex: 'tdsf', width: 55, sortable: true, fixed: true},
        {header: '类别', dataIndex: 'lb', width: 60, sortable: true, fixed: true},
        {header: '重合闸状态', dataIndex: 'chzzt', renderer: zt, width: 40, sortable: true, fixed: true}
        //{header:'故障描述',dataIndex:'gzms',width:160,sortable:true},
        //{header:'实际故障地点',dataIndex:'sjgzdd',width:60,fixed:true},
        //{header:'停电区段',dataIndex:'tdqd',width:70,sortable:true},
        //{header:'跳闸原因',dataIndex:'tzyy',width:50,sortable:true},
        //{header:'备注',dataIndex:'bz',width:50,sortable:true},
        // {header: '调度员', dataIndex: 'ddy', width: 70, sortable: true, fixed: true}
        //{header:'审核人',dataIndex:'shr',width:70,sortable:true,fixed:true}
    ]);


    var planRecord = Ext.data.Record.create([
        {name: 'xh', type: 'int'},
        {name: 'ydsgbm', type: 'string'},
        {name: 'ydbgbh', type: 'string'},
        {name: 'rksj', type: 'string'},
        {name: 'bgsj', type: 'string'},
        {name: 'gqpym', type: 'string'},
        {name: 'tdqd', type: 'string'},
        {name: 'gzms', type: 'string'},
        {name: 'sgjl', type: 'string'},
        {name: 'ztbz', type: 'string'},
        {name: 'chzzt', type: 'string'},
        {name: 'sgjl', type: 'string'},
        {name: 'ztbz', type: 'string'},
        {name: 'gzbh', type: 'string'},
        {name: 'gqmc', type: 'string'},
        {name: 'gqdm', type: 'string'},
        {name: 'kgh', type: 'string'},//tzyy
        {name: 'tzyy', type: 'string'},
        {name: 'fhsj', type: 'string'},
        {name: 'tdsf', type: 'string'},
        {name: 'lb', type: 'string'},
        {name: 'bz', type: 'string'},
        {name: 'ddy', type: 'string'},
        {name: 'sjgzdd', type: 'string'},
        {name: 'kxmc', type: 'string'},
        {name: 'bhzzmc', type: 'string'},
        {name: 'shr', type: 'string'},
        {name: 'xb_add', type: 'string'}

    ]);

    //Ext为我们提供了一个桥梁Ext.data.Store，用于转换各种类型的数据。
    var store = new Ext.data.Store({
        //proxy告诉我们从哪里获得数据
        proxy: new Ext.data.HttpProxy({url: 'remotefault_query_json.jsp'}),
        baseParams: {whereclause: stor_where},//点击翻页的时候，这个值不会消失，作为基本参数，只有点击查询按钮时才会改变
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
        plugins: expander,

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


    //显示在html中id为container的层中
    //grid.render();//渲染表格
    Ext.form.Field.prototype.msgTarget = 'side';// 设置控件的错误信息显示位置，主要可选的位置有：qtip,title,under,side,[elementId]
    // form start
    var simpleForm_Query = new Ext.FormPanel({
        renderTo: document.body,
        labelAlign: 'left',
        title: '跳闸记录管理',
        buttonAlign: 'right',
        bodyStyle: 'padding:5px',
        //width : 600,
        titleCollapse: true,
        collapsible: true,
        method: 'POST',
        autoWidth: true,
        frame: true,
        labelWidth: 56,


        items: [{
            layout: 'column',
            border: false,
            labelSeparator: '：',
            items: [{
                columnWidth: .33,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                layout: 'form',// formlayout用来放置控件
                border: false,// 没有边框
                items: [{
                    xtype: 'combo',// 控件的类型设置成combo
                    // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                    store: store_xlm,
                    //value:'全部',
                    valueField: "value",// 设置下拉选择框的值
                    displayField: "text",// 设置下拉选择框的显示文本
                    mode: 'local',// 数据是在本地
                    //forceSelection : true,// 必须选择一个选项
                    //blankText : '请选择作业单位',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                    emptyText: '线别',// 在没有选择值时显示为选择学历
                    hiddenName: 'xlm',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                    // allowBlank : false,//表示是否可为空
                    editable: false,// 该下拉列表只允许选择，不允许输入
                    triggerAction: 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                    //allowBlank : false,// 该选项值不允许为空
                    fieldLabel: '线别',// 控件的标题是学历
                    name: 'xlm',
                    id: 'xlm_id',// 再次提醒，name只是下拉列表的名称
                    //id:'bds_id',
                    anchor: '90%'// input的宽度是90%
                }]
            },
                {
                    columnWidth: .33,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                    layout: 'form',// formlayout用来放置控件
                    border: false,// 没有边框
                    items: [{
                        xtype: 'combo',// 控件的类型设置成combo
                        // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        store: store_ddt,
                        //value:'全部',
                        valueField: "value",// 设置下拉选择框的值
                        displayField: "text",// 设置下拉选择框的显示文本
                        mode: 'local',// 数据是在本地
                        //forceSelection : true,// 必须选择一个选项
                        //blankText : '请选择作业单位',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        emptyText: '电调台',// 在没有选择值时显示为选择学历
                        hiddenName: 'adw',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        editable: false,// 该下拉列表只允许选择，不允许输入
                        triggerAction: 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        //allowBlank : false,// 该选项值不允许为空
                        fieldLabel: '电调台',// 控件的标题是学历
                        name: 'adw',// 再次提醒，name只是下拉列表的名称
                        id: 'txt_dw',
                        listeners: {
                            "select": function (combo, planRecord_bdt, index) {

                                var sldw = Ext.getCmp("txt_dw").value;

                                var sql_bds_dw = "select gqpym,gqmc from j_gyjc_gqzd t where t.ddtdm like \'" + sldw + "%25\' and (jglbdm!= 1 )";
                                var combo2 = Ext.getCmp('bds_id');
                                combo2.enable();
                                combo2.reset();
                                //alert(sql_bds_dw);
                                //combo2.disable();
                                //sql_qjzc="select * from J_GYJC_QJZCZD where  gqdm=\'"+sldw+"\'";//\'"+userdwid+"%25\'";
                                //alert(sql_qjzc);
                                combo2.store.proxy = new Ext.data.HttpProxy(
                                    {url: '../../share/combo_list.jsp?sql=' + sql_bds_dw});
                                combo2.store.load();
                            }
                        },
                        anchor: '90%'// input的宽度是90%
                    }]
                },

                {
                    columnWidth: .33,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                    layout: 'form',// formlayout用来放置控件
                    border: false,// 没有边框
                    items: [{
                        xtype: 'combo',// 控件的类型设置成combo
                        // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        store: store_ggdmc,
                        //value:'全部',
                        valueField: "value",// 设置下拉选择框的值
                        displayField: "text",// 设置下拉选择框的显示文本
                        mode: 'local',// 数据是在本地
                        //forceSelection : true,// 必须选择一个选项
                        //blankText : '请选择作业单位',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        emptyText: '所属段',// 在没有选择值时显示为选择学历
                        hiddenName: 'ggdmc',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        // allowBlank : false,
                        editable: false,// 该下拉列表只允许选择，不允许输入
                        triggerAction: 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        //allowBlank : false,// 该选项值不允许为空
                        fieldLabel: '所属段',// 控件的标题是学历
                        id: 'ggdmc_id',// 再次提醒，name只是下拉列表的名称
                        name: 'ggdmc',
                        // id:'bds_id',
                        anchor: '90%'// input的宽度是90%
                    }]
                },
                {
                    columnWidth: .33,// 设置了该列的宽度占总宽度的50%（columnWidth:.5）
                    layout: 'form',// formlayout用来放置控件
                    border: false,// 没有边框
                    items: [{
                        xtype: 'combo',// 控件的类型设置成combo
                        // 这里定义了一个sotre属性，就是选择值存储的地方，因为是在客户端的数据，所以使用了一个简单存储（SimpleStore）。
                        store: store_dw,
                        //value:'全部',
                        valueField: "value",// 设置下拉选择框的值
                        displayField: "text",// 设置下拉选择框的显示文本
                        mode: 'local',// 数据是在本地
                        //forceSelection : true,// 必须选择一个选项
                        //blankText : '请选择作业单位',// 提交form时，该项如果没有选择，则提示错误信息"请选择学历"
                        emptyText: '所别',// 在没有选择值时显示为选择学历
                        hiddenName: 'taskunit',// 大家要注意的是hiddenName和name属性，name只是下拉列表的名称，作用是可通过，而hiddenName才是提交到后台的input的name。如果没有设置hiddenName，在后台是接收不到数据的，这个大家一定要注意。
                        editable: false,// 该下拉列表只允许选择，不允许输入
                        triggerAction: 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
                        //allowBlank : false,// 该选项值不允许为空
                        fieldLabel: '所别',// 控件的标题是学历
                        name: 'taskunit',// 再次提醒，name只是下拉列表的名称
                        id: 'bds_id',
                        anchor: '90%'// input的宽度是90%
                    }]
                }, {
                    columnWidth: .33,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'field',// 控件的类型为datefield
                        fieldLabel: '起始日期',
                        name: 'ksrq',
                        anchor: '90%',
                        id: 'txt_ksrq',
                        listeners: {
                            "focus": function () {
                                WdatePicker({dateFmt: 'yyyy-MM-dd HH:mm'})
                            }
                        }
                    }]
                }, {
                    columnWidth: .33,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'field',// 控件的类型为datefield
                        fieldLabel: '结束日期',
                        name: 'jsrq',
                        //value: new Date,
                        anchor: '90%',
                        id: 'txt_jsrq',
                        listeners: {
                            "focus": function () {
                                WdatePicker({dateFmt: 'yyyy-MM-dd HH:mm'})
                            }
                        }
                    }]
                }, {
                    columnWidth: .33,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'field',// 控件的类型为datefield
                        fieldLabel: '故障概况',
                        name: 'gzmscx',
                        //value: new Date,
                        anchor: '90%',
                        id: 'txt_gzmscx'

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
                    var where = "1=1 ";
                    //alert(Ext.getCmp("txt_ksrq").getValue());
                    // alert(Ext.getCmp("txt_dw").getValue());
                    if (Ext.getCmp("txt_dw").getValue() != '' && Ext.getCmp("txt_dw").getValue() != 'ALL') {
                        if (Ext.getCmp("txt_dw").getValue() == '003') {
                            where = where + " and (gq.ddtdm='00303' or gq.ddtdm='00304')";

                        }
                        else if (Ext.getCmp("txt_dw").getValue() == '002') {
                            where = where + " and (gq.ddtdm='00301' or gq.ddtdm='00302')";
                        }
                        else {
                            where = where + " and gq.ddtdm='" + Ext.getCmp("txt_dw").getValue() + "' ";
                            ddtdm_cell = Ext.getCmp("txt_dw").getValue();
                        }

                    }

                    if (Ext.getCmp("txt_ksrq").getValue() != "") {
                        where = where + " and gz.bgsj>=to_date('" + Ext.getCmp(
                                "txt_ksrq").getValue() + "','yyyy-mm-dd hh24:mi')";
                        cell_where = cell_where + " and gz.bgsj>=to_date('" + Ext.getCmp(
                                "txt_ksrq").getValue() + "','yyyy-mm-dd hh24:mi')";

                    }
                    if (Ext.getCmp("txt_jsrq").getValue() != "") {
                        where = where + "  and gz.bgsj <=to_date('" + Ext.getCmp(
                                "txt_jsrq").getValue() + "','yyyy-mm-dd hh24:mi')";
                        cell_where = cell_where + "  and gz.bgsj <=to_date('" + Ext.getCmp(
                                "txt_jsrq").getValue() + "','yyyy-mm-dd hh24:mi')";

                    }

                    if (Ext.getCmp("bds_id").getValue() != '' && Ext.getCmp("bds_id").getValue() != 'ALL') {
                        where = where + " and gz.gqpym='" + Ext.getCmp("bds_id").getValue() + "' ";
                        cell_where = cell_where + " and gz.gqpym='" + Ext.getCmp("bds_id").getValue() + "' ";

                    }

                    if (Ext.getCmp("xlm_id").getValue() != '' && Ext.getCmp("xlm_id").getValue() != 'ALL') {
                        where = where + " and gz.xb='" + Ext.getCmp("xlm_id").getValue() + "' ";
                        cell_where = cell_where + " and gz.xb='" + Ext.getCmp("xlm_id").getValue() + "' ";

                    }

                    if (Ext.getCmp("ggdmc_id").getValue() != '' && Ext.getCmp("ggdmc_id").getValue() != 'ALL') {
                        where = where + " and gz.dm like '" + Ext.getCmp("ggdmc_id").getValue() + "%' ";
                        cell_where = cell_where + " and gz.dm like '" + Ext.getCmp("ggdmc_id").getValue() + "%' ";

                    }
                    if (Ext.getCmp("txt_gzmscx").getValue() != "") {
                        where = where + " and gz.gzms like '%" + Ext.getCmp("txt_gzmscx").getValue() + "%' ";
                        cell_where = cell_where + " and gz.gzms like '%" + Ext.getCmp("txt_gzmscx").getValue() + "%' ";

                    }

                    //alert(Ext.getCmp("bds_id").getValue());
                    //	store.baseParams.whereclause=stor_where1;
                    store.baseParams.whereclause = where;
                    simple_Grid.getStore().reload({
                        params: {
                            start: 0,
                            limit: 10
                        }
                    });
                }

            }
        }, {

            // 取消按钮就是简单的reset一下form的控件
            text: '重置',
            handler: function () {
                simpleForm_Query.form.reset();
            }
        },
            {
                // 在buttons里定义的按钮默认是Ext.Button，所以按钮的属性定义可以查看Ext.Button的API。在这里两个按钮都没用到其它属性，只是设置了显示文本（text）和单击事件。
                text: '打印记录',
                hidden: true,
                handler: function () {
                    var where = "1=1 ";
                    if (Ext.getCmp("txt_dw").getValue() != '' && Ext.getCmp("txt_dw").getValue() != 'ALL') {
                        if (Ext.getCmp("txt_dw").getValue() == '003') {
                            where = where + " and (gq.ddtdm='00303' or gq.ddtdm='00304')";

                        }
                        else if (Ext.getCmp("txt_dw").getValue() == '002') {
                            where = where + " and (gq.ddtdm='00301' or gq.ddtdm='00302')";
                        }
                        else {
                            where = where + " and gq.ddtdm='" + Ext.getCmp("txt_dw").getValue() + "' ";
                            ddtdm_cell = Ext.getCmp("txt_dw").getValue();
                        }

                    }

                    if (Ext.getCmp("txt_ksrq").getValue() != "") {
                        where = where + " and gz.bgsj>=to_date('" + Ext.getCmp(
                                "txt_ksrq").getValue() + "','yyyy-mm-dd hh24:mi')";
                        cell_where = cell_where + " and gz.bgsj>=to_date('" + Ext.getCmp(
                                "txt_ksrq").getValue() + "','yyyy-mm-dd hh24:mi')";

                    }
                    if (Ext.getCmp("txt_jsrq").getValue() != "") {
                        where = where + "  and gz.bgsj <=to_date('" + Ext.getCmp(
                                "txt_jsrq").getValue() + "','yyyy-mm-dd hh24:mi')";
                        cell_where = cell_where + "  and gz.bgsj <=to_date('" + Ext.getCmp(
                                "txt_jsrq").getValue() + "','yyyy-mm-dd hh24:mi')";

                    }

                    if (Ext.getCmp("bds_id").getValue() != '' && Ext.getCmp("bds_id").getValue() != 'ALL') {
                        where = where + " and gz.gqpym='" + Ext.getCmp("bds_id").getValue() + "' ";
                        cell_where = cell_where + " and gz.gqpym='" + Ext.getCmp("bds_id").getValue() + "' ";

                    }

                    if (Ext.getCmp("xlm_id").getValue() != '' && Ext.getCmp("xlm_id").getValue() != 'ALL') {
                        where = where + " and gz.xb='" + Ext.getCmp("xlm_id").getValue() + "' ";
                        cell_where = cell_where + " and gz.xb='" + Ext.getCmp("xlm_id").getValue() + "' ";

                    }

                    if (Ext.getCmp("ggdmc_id").getValue() != '' && Ext.getCmp("ggdmc_id").getValue() != 'ALL') {
                        where = where + " and gz.dm like '" + Ext.getCmp("ggdmc_id").getValue() + "%' ";
                        cell_where = cell_where + " and gz.dm like '" + Ext.getCmp("ggdmc_id").getValue() + "%' ";

                    }
                    if (Ext.getCmp("txt_gzmscx").getValue() != "") {
                        where = where + " and gz.gzms like '%" + Ext.getCmp("txt_gzmscx").getValue() + "%' ";
                        cell_where = cell_where + " and gz.gzms like '%" + Ext.getCmp("txt_gzmscx").getValue() + "%' ";

                    }
                    ryshow(where);

                }
            }]
    });


    Ext.getCmp("txt_ddy").setValue(username);
    //双击事件
    var onRowDoubleClick = function (grid, rowIndex, e) {
        simpleForm_Save.expand();
        simpleForm_Save.buttons[0].setVisible(true);
        //simpleForm_Save.buttons[1].setVisible(true);
        simpleForm_Save.buttons[1].setVisible(true);
        simpleForm_Save.buttons[2].setVisible(true);
        simpleForm_Save.buttons[3].setVisible(true);
        var record = simple_Grid.getStore().getAt(rowIndex);
        simpleForm_Save.getForm().loadRecord(record);

        var ttyhmcs = ttyhmc.split("!#");
        for (var i = 0; i < ttyhmcs.length; i++) {
            if (record.get('ddy') == ttyhmcs[i]) {
                simpleForm_Save.buttons[0].setVisible(true);
                //simpleForm_Save.buttons[1].setVisible(true);
                simpleForm_Save.buttons[1].setVisible(true);
                simpleForm_Save.buttons[2].setVisible(true);
                simpleForm_Save.buttons[3].setVisible(true);
                break;
            }
            else {
                simpleForm_Save.buttons[0].setVisible(false);
                //simpleForm_Save.buttons[1].setVisible(true);
                simpleForm_Save.buttons[1].setVisible(false);
                simpleForm_Save.buttons[2].setVisible(false);
                simpleForm_Save.buttons[3].setVisible(false);
            }
        }

        if (username == '关文生' || username == '曹向阳' || username == '陈利') {
            simpleForm_Save.buttons[1].setVisible(true);
            simpleForm_Save.buttons[2].setVisible(true);
            simpleForm_Save.buttons[3].setVisible(true);
        }


    }
    simple_Grid.addListener('rowdblclick', onRowDoubleClick);

    var simple_Viewport = new Ext.Viewport({
        layout: 'column',
        items: [simpleForm_Save, simpleForm_Query, simple_Grid]

    });

    simpleForm_Save.buttons[0].setVisible(true);
    simpleForm_Save.buttons[1].setVisible(true);
    simpleForm_Save.buttons[2].setVisible(false);
    simpleForm_Save.buttons[3].setVisible(false);
    simpleForm_Save.collapse();

    function getTime() {
        //***得到当前时间**//
        var myyear, mymonth, myweek, myday, mytime, mymin, myhour, mysec;
        var mydate = new Date();
        myyear = mydate.getFullYear();
        mymonth = mydate.getMonth() + 1;
        if (mymonth < 10)
            mymonth = "0" + mymonth;
        myday = mydate.getDate();
        if (myday < 10)
            myday = "0" + myday;
        myhour = mydate.getHours();
        if (myhour < 10)
            myhour = "0" + myhour;
        mymin = mydate.getMinutes();
        if (mymin < 10)
            mymin = "0" + mymin;
        mysec = mydate.getSeconds();
        return myyear + "-" + mymonth + "-" + myday + " " + myhour + ":" + mymin;
    }

    // Ext.getCmp("txt_jsrq").setValue(getTime()); txt_ksrq
    Ext.getCmp("txt_ksrq").setValue(get_nowTime());
    Ext.getCmp("txt_jsrq").setValue(getTime());
    function getTime2() {
        var myyear, mymonth;
        var mydate = new Date();
        myyear = mydate.getFullYear();
        mymonth = mydate.getMonth() + 1;
        if (mymonth < 10)
        //mymoth="0"+mymoth;
            return myyear + "-" + mymonth + "-" + 0 + 1 + " " + 0 + 0 + ":" + 0 + 0;
    }

    // Ext.getCmp("txt_ksrq").setValue(getTime2());

});
function get_nowTime() {
    //***得到当前时间**//
    var myyear, mymonth, myweek, myday, mytime, mymin, myhour, mysec;
    var mydate = new Date();
    myyear = mydate.getFullYear();
    mymonth = mydate.getMonth() + 1;
    if (mymonth < 10)
    //mymoth="0"+mymoth;
        myday = mydate.getDate();
    //if(myday<10)
    myday = "01";
    myhour = mydate.getHours();
    //if(myhour<10)
    myhour = "00";
    mymin = mydate.getMinutes();
    //if(mymin<10)
    mymin = "00";
    mysec = mydate.getSeconds();
    return myyear + "-" + mymonth + "-" + myday + " " + myhour + ":" + mymin;
}
                                                      
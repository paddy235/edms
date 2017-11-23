Ext.onReady(function () {

    Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    getMessage();
    var userdwid = document.getElementById("userDwid").value;
    var userName = document.getElementById("userName").value;

    //var txt_jb="";
    //����Grid��ͷ
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        //new Ext.grid.RowNumberer(),

        {header: '���', dataIndex: 'xh', width: 50, fixed: true},
        {header: '������', dataIndex: 'jiaobr', width: 60, fixed: true, sortable: true},
        {header: '���Ӱ�ʱ��', dataIndex: 'jbsj', width: 120, fixed: true, sortable: true},
        {header: '�Ӱ���', dataIndex: 'jbr', width: 60, fixed: true, sortable: true},
        {header: '����', dataIndex: 'tq', width: 50, fixed: true, sortable: true},
        {header: '�������Ϲ���', dataIndex: 'jszlgz', width: 100, fixed: true, sortable: true},
        {header: '�����豸״̬', dataIndex: 'ddsbzt', width: 80, fixed: true, sortable: true},
        {header: '��Ʒ', dataIndex: 'bp', width: 80, fixed: true, sortable: true},
        {header: '����', dataIndex: 'ws', width: 80, fixed: true, sortable: true},
        {header: 'ȷ������', dataIndex: 'zdsx', width: 100, sortable: true}
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


    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url: 'change_duty_json.jsp'}),
        baseParams: {whereclause: '1=1'},//�����ҳ��ʱ�����ֵ������ʧ����Ϊ����������ֻ�е����ѯ��ťʱ�Ż�ı�

        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty: 'success'
        }, planRecord)
    });
    store.load({params: {start: 0, limit: 10}});


    //���������,ָ����ģ�ͣ��ֿ⣬ѡ��ģ��(Ĭ����ѡ��ģ��)
    var simple_Grid = new Ext.grid.GridPanel({
        //el:ָ��htmlԪ��������ʾ��grid
        //el: 'grid3', 
        store: store,
        cm: columns,
        sm: new Ext.grid.RowSelectionModel({singleSelcet: true}),
        //title: '��ҵ�ƻ���ʾ',
        //�����¼�����Զ�����
        viewConfig: {
            forceFit: true,
            columnsText: "��ʾ����",
            sortAscText: "����",
            sortDescText: "����"
        },
        loadMask: {msg: "���ݼ�����...."},
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
            displayMsg: '�� {0} ���� {1} ��,�� {2} ��',
            emptyMsg: "�޼�¼"
        })


    });
    //Grid�ϴ����¼�
    //grid.addListener('cellClick',cellClick);
    //��ʾ��html��idΪcontainer�Ĳ���
    //grid.render();//��Ⱦ���


    Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
    // form start
    simpleForm_Save = new Ext.FormPanel({
        renderTo: document.body,
        labelAlign: 'left',
        title: '���Ӱ����',
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
            border: false,// û�б߿�
            labelSeparator: '��',// ����ķָ���������������ð�Ŵ���Ӣ�ĵ�ð�ţ�labelSeparator:'��'����
            // coulmnLayout��Ŀؼ���������items��
            items: [{xtype: 'hidden', name: 'jbid', id: 'txt_jbid'}
                , {
                    columnWidth: .22,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',// �ؼ�������Ϊdatefield
                        fieldLabel: '������',
                        name: 'jiaobr',
                        id: 'txt_jbr',
                        anchor: '90%'

                    }]
                }, {
                    columnWidth: .27,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'field',// �ؼ�������Ϊdatefield

                        fieldLabel: '���Ӱ�ʱ��',
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
                        //allowBlank : false// ��ѡ��ֵ������Ϊ��
                    }]

                }, {
                    columnWidth: .22,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',// �ؼ�������Ϊdatefield
                        fieldLabel: '�Ӱ���',
                        allowBlank: false,
                        blankText: '��д�Ӱ���',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        emptyText: '����д�Ӱ���',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        name: 'jbr',
                        //id:'txt_jlr',
                        anchor: '90%'
                    }]
                }, {
                    columnWidth: .2,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',// �ؼ�������Ϊdatefield
                        fieldLabel: '����',
                        //allowBlank:false,
                        blankText: '��д����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        emptyText: '��д����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        name: 'tq',
                        //id:'txt_jlr',
                        value: '��',
                        anchor: '90%'
                    }]
                }

            ]

        }, {
            layout: 'column',
            border: false,
            labelSeparator: '��',
            items: [{
                columnWidth: .99,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textarea',// �ؼ�������Ϊdatefield
                    fieldLabel: '�������Ϲ���',
                    name: 'jszlgz',
                    anchor: '90%',
                    value: '����',
                    height: 35
                    //format:'Y-m-d'
                }]
            }]
        }, {
            layout: 'column',
            border: false,
            labelSeparator: '��',
            items: [{
                columnWidth: .99,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textarea',// �ؼ�������Ϊdatefield
                    fieldLabel: '�����豸״̬',
                    name: 'ddsbzt',
                    anchor: '90%',
                    value: '����',
                    height: 35
                    //format:'Y-m-d'
                }]
            }]
        }
            , {
                layout: 'column',
                border: false,
                labelSeparator: '��',
                items: [{
                    columnWidth: .99,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textarea',// �ؼ�������Ϊdatefield
                        fieldLabel: '��Ʒ',
                        name: 'bp',
                        anchor: '90%',
                        value: '����',
                        height: 35
                        //format:'Y-m-d'
                    }]
                }]
            }, {
                layout: 'column',
                border: false,
                labelSeparator: '��',
                items: [{
                    columnWidth: .99,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textarea',// �ؼ�������Ϊdatefield
                        fieldLabel: '����',
                        name: 'ws',
                        anchor: '90%',
                        value: '����',
                        height: 35
                        //format:'Y-m-d'
                    }]
                }]
            }, {
                layout: 'column',
                border: false,
                labelSeparator: '��',
                items: [{
                    columnWidth: .99,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textarea',// �ؼ�������Ϊdatefield
                        fieldLabel: 'Ҫȷ������',
                        name: 'zdsx',
                        anchor: '90%',
                        //value:'����',
                        id: 'txt_yqrsx',
                        height: 100
                        //format:'Y-m-d'
                    }]
                }]
            }, {
                layout: 'column',// columnlayout
                border: false,// û�б߿�
                labelSeparator: '��',// ����ķָ���������������ð�Ŵ���Ӣ�ĵ�ð�ţ�labelSeparator:'��'����
                // coulmnLayout��Ŀؼ���������items��
                items: [{
                    columnWidth: .5,// �ڼ����Ա��radio�ؼ�ʱ��Ҫע���ˣ�������Ҫ��������radio����һradio���б���ģ��ڶ���û�еģ���������radio�������Ŀ��Ӧ�����������µ��п�50%��
                    layout: 'form',
                    border: false,
                    items: [{
                        style: 'margin-top:5px',// ����һ��css���ԣ��������ⲹ��Ϊ5px��style:'margin-top:5px'����ԭ����Ϊ��ѡ��ť�ͱ�����룬��ҿ��Խ�������ȥ��Ȼ�󿴿�Ч����
                        xtype: 'radio',// Formlayout�������һ������Ϊradio�Ŀؼ�
                        fieldLabel: '�Ƿ�ȷ��',// �ؼ��ı������Ա�
                        boxLabel: '��',// �ؼ���ѡ����ʾ�ı�����
                        name: 'check',// input��name����ֵ��sex
                        inputValue: 'true',// �ؼ���ֵ��value������
                        //columns: 2,
                        listeners: {
                            'check': function (checkbox, checked) {
                                if (checked) {
                                    Ext.getCmp("btn_jb").enable();

                                }
                            }
                        },
                        anchor: '50%'// input�Ŀ����95%
                    }]
                }, {
                    columnWidth: .5,// �����Ѿ�������3�У�3�е��п�ֱ�Ϊ50%��25%��25%
                    layout: 'form',
                    labelWidth: 20,// ����Ŀ������Ϊ0
                    labelSeparator: '',// ����ָ�����Ϊ��
                    hideLabels: true,// �ڶ���raido�ؼ��������þ�������ͬ����Ϊ������Ҫ���⣬����Ҫ�������ر���
                    border: false,
                    items: [{
                        style: 'margin-top:5px',
                        xtype: 'radio',
                        boxLabel: '��',
                        name: 'check',
                        inputValue: 'true',
                        checked: true,// �ÿؼ�Ĭ������ѡ��
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
        //Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
        buttons: [{
            // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
            text: '�Ӱ�',
            id: 'btn_jb',
            handler: function () {
                if (!simpleForm_Save.form.isValid()) {
                    return
                }
                ;
                // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                if (simpleForm_Save.form.isValid()) {
                    // ���水ťҪ���ľ�������basicform�Ŀͻ�����֤����֤ͨ���������øð�ť״̬Ϊdisable����ֹ2���ύ��Ȼ�����simpleForm.form.doAction�����ύ����
                    //this.disabled = true;
                    // doAction�����ĵ�һ��������submit������˼�Ǳ�ʾִ�е����ύ�������ύ�ĺ�̨ҳ����test.jsp��url:'test.asp'�����ύ��ʽ��post��method:'post'����û�������ύ������params:''��
                    simpleForm_Save.form.doAction('submit', {
                        waitMsg: '������,���Ժ�...',
                        url: 'change_duty_save.jsp',
                        method: 'post',
                        params: '',
                        // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                        // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                        success: function (form, action) {

                            Ext.Msg.alert('��Ϣ', action.result.msg);
                            simple_Grid.getStore().reload();

                        },
                        // ����failure��������������ͨѶ���������ʱ����ʾ������Ϣ��
                        failure: function () {
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

            // ȡ����ť���Ǽ򵥵�resetһ��form�Ŀؼ�
            text: '�鿴����',
            handler: function () {

                window.location.href = '../../tjbb/query/jjb.jsp?jbid=' + Ext.getCmp("txt_jbid").getValue();

            }
        }]
    });


    var simpleForm_Query = new Ext.FormPanel({
        renderTo: document.body,
        labelAlign: 'left',
        title: '���Ӱ��¼����ѯ',
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
            labelSeparator: '��',
            items: [{
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'field',// �ؼ�������Ϊdatefield
                    fieldLabel: '��ʼʱ��',
                    name: 'ksrq',
                    anchor: '90%',
                    id: 'txt_ksrq',
                    listeners: {
                        "focus": function () {
                            WdatePicker({dateFmt: 'yyyy-MM-dd HH:mm'})
                        }
                    }
                    //allowBlank : false// ��ѡ��ֵ������Ϊ��

                }]
            }, {
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'field',// �ؼ�������Ϊdatefield
                    fieldLabel: '��ֹʱ��',
                    name: 'jsrq',
                    id: 'txt_jsrq',
                    //value: new Date,
                    anchor: '90%',
                    listeners: {
                        "focus": function () {
                            WdatePicker({dateFmt: 'yyyy-MM-dd HH:mm'})
                        }
                    }
                    //allowBlank : false// ��ѡ��ֵ������Ϊ��

                }]
            }]
        }
        ],
        // Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
        buttons: [{
            // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
            text: '��ѯ',
            handler: function () {
                if (!simpleForm_Query.form.isValid()) {
                    return
                }
                ;
                // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
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
                // �����form����ǰ���ϰ취�ύ��������formpanel�Ķ����м���һ�����ã�
                // onSubmit: Ext.emptyFn,
                // submit: function() {
                // this.getEl().dom.submit();}
                // ��һ�����õ�Ŀ����ȡ��formpanel��Ĭ���ύ�������ڶ����������µ��ύ��ʽΪ�ɷ�ʽ�ύ��

            }
        }, {

            // ȡ����ť���Ǽ򵥵�resetһ��form�Ŀؼ�
            text: '����',
            handler: function () {
                simpleForm_Query.form.reset();
                //simpleForm_Save.collapse();

            }
        }]
    });
    //Grid�ϴ����¼�
    simple_Grid.addListener('rowclick', function (simple_Grid, rowIndex, event) {
        // simpleForm_Query.collapse();
        simpleForm_Save.expand();
        var record = simple_Grid.getStore().getAt(rowIndex);
        simpleForm_Save.getForm().loadRecord(record);
        simpleForm_Save.buttons[0].setVisible(false);
        simpleForm_Save.buttons[1].setVisible(true);
    });


    //��sessionȡֵ��ֵ��form�ֶ�;
    Ext.Ajax.request({
        url: 'getDutyman.jsp',
        success: function (response, opts) {
            simpleForm_Save.getForm().setValues([{id: "jbr", value: response.responseText}]);
        },
        failure: function (response, opts) {
            console.log('�����ʧЧ��״̬���룺' + response.status);
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
////--------------�첽�鿴��Ҫ�鿴�ļ��µ�����---------------------------------------------
function getMessage() {
    // ʵ����Ext����Ajax������Ҫ��Connection����
    //alert("asdfdf");
    var conn = new Ext.data.Connection();
    // �����첽����
    conn.request({
        // �����ַ
        url: 'jsnr.jsp',
        method: 'GET',
        // ָ���ص�����
        callback: callback
    });
}
function callback(options, success, response) {
    if (success) {
        // ����ɹ���ʹ��Ext��JSON�ַ���ת��ΪJavaScript����
        var jsonObj = Ext.util.JSON.decode(response.responseText);
        //������Ϳ���ȡ����Ҫ�Ķ�����
        //Ext.Msg.alert('������Ƭ',jsonObj.id);
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
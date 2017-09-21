Ext.onReady(function () {

    Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var bd = Ext.getBody();
    var DWJB = document.getElementById("DWJB").value;
    var DWDM = document.getElementById("DWDM").value;
    var YHMC = document.getElementById("YHMC").value;

    var renderzt1 = function (value) {
        if (value == '0') {
            return "<span style='color:black;font-weight:bold;'>���δ����</span>";
        }
        else if (value == "1") {
            return "<span style='color:blue;font-weight:bold;'>����ѷ��͡��е�δǩ��</span>";
        }
        else if (value == '2') {
            return "<span style='color:red;font-weight:bold;'>�е���ǩ�ϡ����δ�鵵</span>";
        }
        else(value == "9")
        {
            return "<span style='color:green;font-weight:bold;'>����ѹ鵵</span>";
        }
    };
    //�����б�
    var sql = "select xdtdm,xdtmc from j_gyjc_xdtzd";
    var planRecord_xdt = Ext.data.Record.create([
        {name: 'value', type: 'string'},
        {name: 'text', type: 'string'}
    ]);
    var store_xdt = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url: '../../share/combo_list.jsp?sql=' + sql}),
        //reader����������ν����������
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
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url: '../../share/combo_list.jsp?sql=' + sql}),
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            root: 'root',
            successProperty: 'success'
        }, planRecord_ddt)
    });
    store_ddt.load();
    //����Grid��ͷ
    var tsbcolumns = new Ext.grid.ColumnModel([
        new Ext.grid.RowNumberer(),
        {header: 'ͣ������', dataIndex: 'TDSJ', width: 110, sortable: true, fixed: true},
        {header: 'ʱ��', dataIndex: 'TDSF', width: 40, sortable: true, fixed: true},
        {header: '�����', dataIndex: 'TDGDB', width: 120, sortable: true},
        {header: '�е����', dataIndex: 'TD_XDMLH', width: 60, sortable: true, fixed: true},
        {header: '�е�ʱ��', dataIndex: 'TD_XDSJ', width: 110, sortable: true, fixed: true},
        {header: '�е�Ա', dataIndex: 'TD_XDY', width: 60, sortable: true, fixed: true},
        {header: '������', dataIndex: 'TD_DDMLH', width: 60, sortable: true, fixed: true},
        {header: '���ʱ��', dataIndex: 'TD_DDSJ', width: 110, sortable: true, fixed: true},
        {header: '���Ա', dataIndex: 'TD_DDY', width: 60, sortable: true, fixed: true},
        {header: '��ע', dataIndex: 'TD_BZ', width: 100, sortable: true},
        {header: '״̬', dataIndex: 'ZT', width: 150, renderer: renderzt1, fixed: true}
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
        baseParams: {whereclause: whereclause_init},//δ�鵵��������Կ���
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty: 'success'
        }, tsbplanRecord)
    });
    tsbstore.load({params: {start: 0, limit: 6}});

    //���������,ָ����ģ�ͣ��ֿ⣬ѡ��ģ��(Ĭ����ѡ��ģ��)
    var tsbsimple_Grid = new Ext.grid.GridPanel({
        //title : 'ͣ�͵�Ǽǲ��б�',
        store: tsbstore,
        cm: tsbcolumns,
        sm: new Ext.grid.RowSelectionModel({singleSelcet: true}),
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
            pageSize: 6,
            store: tsbstore,
            displayInfo: true,
            displayMsg: '�� {0} ���� {1} ��,�� {2} ��',
            emptyMsg: "�޼�¼"
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
        title: 'ͣ��ǩ��--����',
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
            border: false,// û�б߿�
            labelSeparator: '��',// ����ķָ���������������ð�Ŵ���Ӣ�ĵ�ð�ţ�labelSeparator:'��'����
            // coulmnLayout��Ŀؼ���������items��
            items: [{xtype: 'hidden', name: 'TDTZBH', id: 'TDTZBH'}, {xtype: 'hidden', name: 'ZT'},
                {
                    columnWidth: .2,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',// �ؼ�������Ϊdatefield
                        fieldLabel: 'ͣ������',
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
                        //allowBlank : false// ��ѡ��ֵ������Ϊ��
                    }]
                }, {
                    columnWidth: .2,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',// �ؼ�������Ϊdatefield
                        fieldLabel: 'ͣ��ʱ��',
                        anchor: '96%',
                        name: 'TDSF'
                        //  format:'Y-m-d'
                        //allowBlank : false// ��ѡ��ֵ������Ϊ��
                    }]
                }, {
                    columnWidth: .2,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',// �ؼ�������Ϊdatefield
                        fieldLabel: '�е����',
                        anchor: '96%',
                        name: 'TD_XDMLH'
                    }]
                }, {
                    columnWidth: .2,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: '�е�ʱ��',
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
                        xtype: 'textfield',// �ؼ�������Ϊdatefield
                        fieldLabel: '�е���Ա',
                        anchor: '96%',
                        name: 'TD_XDY'
                    }]
                }, {
                    columnWidth: .2,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'combo',// �ؼ����������ó�combo
                        store: store_xdt,
                        valueField: "value",// ��������ѡ����ֵ
                        displayField: "text",// ��������ѡ������ʾ�ı�
                        mode: 'local',// �������ڱ���
                        emptyText: '��ѡ���е�̨��',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        hiddenName: 'TD_XDT',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        editable: false,// �������б�ֻ����ѡ�񣬲���������
                        triggerAction: 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        allowBlank: false,// ��ѡ��ֵ������Ϊ��
                        fieldLabel: '�е�̨��',// �ؼ��ı�����ѧ��
                        name: 'TD_XDT',// �ٴ����ѣ�nameֻ�������б������
                        id: 'txt_TD_XDT',
                        anchor: '96%'// input�Ŀ����90%
                    }]
                }, {
                    columnWidth: .2,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',// �ؼ�������Ϊdatefield
                        fieldLabel: '������',
                        anchor: '96%',
                        name: 'TD_DDMLH'
                    }]
                }, {
                    columnWidth: .2,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: '���ʱ��',
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
                        xtype: 'textfield',// �ؼ�������Ϊdatefield
                        fieldLabel: '�����Ա',
                        anchor: '96%',
                        name: 'TD_DDY',
                        value: YHMC
                    }]
                },  {
                    columnWidth: .2,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                    layout: 'form',// formlayout�������ÿؼ�
                    border: false,// û�б߿�
                    items: [{
                        xtype: 'combo',// �ؼ����������ó�combo
                        store: store_ddt,
                        valueField: "value",// ��������ѡ����ֵ
                        displayField: "text",// ��������ѡ������ʾ�ı�
                        mode: 'local',// �������ڱ���
                        emptyText: '��ѡ����̨��',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        hiddenName: 'TD_DDT',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        editable: false,// �������б�ֻ����ѡ�񣬲���������
                        triggerAction: 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        allowBlank: false,// ��ѡ��ֵ������Ϊ��
                        fieldLabel: '���̨��',// �ؼ��ı�����ѧ��
                        name: 'TD_DDT',// �ٴ����ѣ�nameֻ�������б������
                        id: 'txt_TD_DDT',
                        anchor: '96%'// input�Ŀ����90%
                    }]
                },{
                    columnWidth: .2,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',// �ؼ�������Ϊdatefield
                        fieldLabel: '��ע',
                        anchor: '96%',
                        name: 'TD_BZ'
                    }]
                }, {
                    columnWidth: .8,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textarea',// �ؼ�������Ϊdatefield
                        fieldLabel: '�����',
                        name: 'TDGDB',
                        anchor: '96%',
                        //  format:'Y-m-d'
                        allowBlank: false// ��ѡ��ֵ������Ϊ��
                    }]
                }]

        }],
        buttons: [{
            text: '����',
            handler: function () {
                if (!tsbsimpleForm_Save.form.isValid()) {
                    return
                }
                ;
                if (tsbsimpleForm_Save.form.isValid()) {
                    tsbsimpleForm_Save.form.doAction('submit', {
                        waitMsg: '������,���Ժ�...',
                        url: 'tdtz_Save.jsp',
                        method: 'post',
                        params: '',
                        success: function (form, action) {
                            Ext.Msg.alert('��Ϣ', action.result.msg);
                            //tsbsimpleForm_Save.form.reset();
                            tsbsimpleForm_Save.buttons[4].setVisible(false);
                            tsbsimple_Grid.getStore().reload();

                        },

                        failure: function () {
                            Ext.Msg.alert('����', '����ʧ�ܣ�');
                            this.disabled = false;
                        }
                    });
                }
            }
        }, {
            text: '�޸�',
            Enabled: false,
            handler: function () {
                if (!tsbsimpleForm_Save.form.isValid()) {
                    return
                }
                ;
                if (tsbsimpleForm_Save.form.isValid()) {
                    tsbsimpleForm_Save.form.doAction('submit', {
                        waitMsg: '�޸���,���Ժ�...',
                        url: 'tdtz_Update.jsp',
                        method: 'post',
                        params: '',
                        success: function (form, action) {
                            tsbsimple_Grid.getStore().reload();
                            Ext.Msg.alert('��Ϣ', action.result.msg);

                        },
                        failure: function () {
                            Ext.Msg.alert('����', '�޸�ʧ�ܣ�');
                            this.disabled = false;
                        }
                    });
                }
            }
        }, {
            // ȡ����ť���Ǽ򵥵�resetһ��form�Ŀؼ�
            text: '����',
            handler: function () {
                tsbsimpleForm_Save.form.reset();
                tsbsimpleForm_Save.buttons[0].setVisible(true);
                // tsbsimpleForm_Save.buttons[1].setVisible(false);
                // tsbsimpleForm_Save.buttons[3].setVisible(false);
                tsbsimpleForm_Save.buttons[4].setVisible(false);
                tsbsimpleForm_Save.buttons[5].setVisible(false);
            }
        }, {
            text: 'ɾ��',
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
                        waitMsg: 'ɾ����,���Ժ�...',
                        url: 'tdtz_Del.jsp',
                        method: 'post',
                        params: '',
                        success: function (form, action) {
                            tsbsimple_Grid.getStore().reload();
                            Ext.Msg.alert('��Ϣ', action.result.msg);

                        },
                        failure: function () {
                            Ext.Msg.alert('����', 'ɾ��ʧ�ܣ�');
                            this.disabled = false;
                        }
                    });
                }
            }
        }, {
            text: '�����е�',
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
                        waitMsg: '������,���Ժ�...',
                        url: 'tdtz_to_xd.jsp',
                        method: 'post',
                        params: '',
                        success: function (form, action) {
                            tsbsimple_Grid.getStore().reload();
                            Ext.Msg.alert('��Ϣ', action.result.msg);
                        },
                        failure: function () {
                            Ext.Msg.alert('����', '�޸�ʧ�ܣ�');
                            this.disabled = false;
                        }
                    });
                }
            }
        }, {
            text: '����鵵',
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
                        waitMsg: '�鵵��,���Ժ�...',
                        url: 'tdtz_ddgd.jsp',
                        method: 'post',
                        params: '',
                        success: function (form, action) {
                            tsbsimple_Grid.getStore().reload();
                            Ext.Msg.alert('��Ϣ', action.result.msg);
                        },
                        failure: function () {
                            Ext.Msg.alert('����', '�޸�ʧ�ܣ�');
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

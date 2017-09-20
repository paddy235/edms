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
    //���������䡢��ֱ�Ӵӹ�������ѡȡ���ߵ������
    var planRecord_bdt = Ext.data.Record.create([
        {name: 'value', type: 'string'},
        {name: 'text', type: 'string'}
    ]);
    var store_bdt = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url: '../../share/combo_list.jsp?sql=' + sql}),
        //reader����������ν����������
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
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url: '../../share/combo_list.jsp?sql=' + sql + '&all=all'}),
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty: 'success'
        }, planRecord_bdtall)
    });
    store_bdtall.load();

    //�豸����
    var sql_sb = "select distinct(sbmc), qx.sbmc from z_yxgl_qxgl  qx";

    var planRecord_sb = Ext.data.Record.create([
        {name: 'value', type: 'string'},
        {name: 'text', type: 'string'}
    ]);
    var store_sb = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url: '../../share/combo_list.jsp?sql=' + sql_sb}),
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty: 'success'
        }, planRecord_sb)
    });
    store_sb.load();


    //����Grid��ͷ
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        //new Ext.grid.RowNumberer(),

        {header: '���', dataIndex: 'xh', width: 40, fixed: true},
        {header: '��������', dataIndex: 'dwmc', width: 80, fixed: true, sortable: true},
        {header: '����ʱ��', dataIndex: 'fxsj', width: 120, fixed: true, sortable: true},
        {header: '�㱨��', dataIndex: 'fkr', width: 60, fixed: true, sortable: true},
        {header: '�豸ȱ������', dataIndex: 'sbmc', width: 80, sortable: true},

        {header: '�豸ȱ������', dataIndex: 'qxnr', width: 120, sortable: true},

        {header: '���෢�ֵ��', dataIndex: 'fkbm', width: 80, fixed: true, sortable: true},
        {header: '�ָ�ʱ��', dataIndex: 'xjsj', width: 120, fixed: true, sortable: true},
        {header: '�������', dataIndex: 'clcs', width: 80, sortable: true},
        {header: '��ȱ�㱨��', dataIndex: 'xlbgr', width: 80, fixed: true, sortable: true},
        {header: '����ȷ�ϵ��', dataIndex: 'clfzr', width: 80, fixed: true, sortable: true}

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


    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url: 'facility_defect_json.jsp'}),
        baseParams: {whereclause: djch},//�����ҳ��ʱ�����ֵ������ʧ����Ϊ����������ֻ�е����ѯ��ťʱ�Ż�ı�

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


    Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
    // form start
    var simpleForm_Save = new Ext.FormPanel({
        renderTo: document.body,
        labelAlign: 'left',
        title: '�豸ȱ�ݹ����Ǽ�',
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
            border: false,// û�б߿�
            labelSeparator: '��',// ����ķָ���������������ð�Ŵ���Ӣ�ĵ�ð�ţ�labelSeparator:'��'����
            // coulmnLayout��Ŀؼ���������items��
            items: [{xtype: 'hidden', name: 'qxid'}
                , {
                    columnWidth: .25,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                    layout: 'form',// formlayout�������ÿؼ�
                    border: false,// û�б߿�
                    items: [{
                        xtype: 'combo',// �ؼ����������ó�combo
                        // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        store: store_bdt,
                        //value:'ȫ��',
                        valueField: "value",// ��������ѡ����ֵ
                        displayField: "text",// ��������ѡ������ʾ�ı�
                        mode: 'local',// �������ڱ���
                        //forceSelection : true,// ����ѡ��һ��ѡ��
                        //blankText : '��ѡ����ҵ��λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        emptyText: '��ͤ����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        hiddenName: 'dwid',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        editable: true,// �������б�ֻ����ѡ�񣬲���������
                        triggerAction: 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        allowBlank: false,// ��ѡ��ֵ������Ϊ��
                        fieldLabel: '��������',// �ؼ��ı�����ѧ��
                        name: 'dwid',// �ٴ����ѣ�nameֻ�������б������
                        id: 'txt_dwid',
                        anchor: '90%'// input�Ŀ����90%
                    }]
                }, {
                    columnWidth: .25,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'field',// �ؼ�������Ϊdatefield
                        fieldLabel: '��������',
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
                        xtype: 'textfield',// �ؼ�������Ϊdatefield
                        fieldLabel: '�㱨��',
                        name: 'fkr',
                        anchor: '90%',
                        allowBlank: false// ��ѡ��ֵ������Ϊ��
                    }]
                }, {
                    columnWidth: .25,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'combo',// �ؼ����������ó�combo
                        // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                        store: store_sb,
                        valueField: "value",// ��������ѡ����ֵ
                        displayField: "text",// ��������ѡ������ʾ�ı�
                        mode: 'local',// �������ڱ���
                        //forceSelection : true,// ����ѡ��һ��ѡ��
                        blankText: '�豸ȱ������',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        emptyText: '�豸ȱ������',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        hiddenName: 'sbmc',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        editable: true,// �������б�ֻ����ѡ�񣬲���������
                        triggerAction: 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        allowBlank: false,// ��ѡ��ֵ������Ϊ��
                        fieldLabel: '�豸ȱ������',// �ؼ��ı�����ѧ��
                        name: 'sbmc',// �ٴ����ѣ�nameֻ�������б������
                        anchor: '90%'// input�Ŀ����90%
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
                    fieldLabel: '�豸ȱ������',
                    name: 'qxnr',
                    anchor: '98%',
                    height: 40
                    //format:'Y-m-d'
                }]
            }]
        }, {
            layout: 'column',
            border: false,
            labelSeparator: '��',
            items: [{
                columnWidth: .25,
                layout: 'form',
                border: false,
                hidden: true,
                items: [{
                    xtype: 'combo',// �ؼ����������ó�combo
                    // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                    store: new Ext.data.SimpleStore({
                        // ͨ��һ�����鶨����returnValue��displayText�����ֶΡ�retrunValue�ֶ�ָ�����ύ����̨��ֵ��displayText�ֶ�ָ��������������ʾ��ѡ��ֵ��
                        fields: ["returnValue", "displayText"],
                        // �����˼�������.ÿ�����ݶ��Ǹ���fiedls�Ķ�������ɵģ��������һ��ֵ����retrunValue��ֵ���ڶ���ֵ����displayText��ֵ������[1,'Сѧ']���ͱ�ʾretrunValue��1��displayText��Сѧ��
                        data: [['Ӱ�찲ȫ', 'Ӱ�찲ȫ'], ['��Ҫȱ��', '��Ҫȱ��'], ['һ��ȱ��', 'һ��ȱ��']]
                    }),
                    valueField: "returnValue",// ��������ѡ����ֵ
                    displayField: "displayText",// ��������ѡ������ʾ�ı�
                    mode: 'local',// �������ڱ���
                    //forceSelection : true,// ����ѡ��һ��ѡ��
                    blankText: 'ȱ�ݵȼ�',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                    emptyText: 'ȱ�ݵȼ�',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                    hiddenName: 'qxdj',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                    editable: false,// �������б�ֻ����ѡ�񣬲���������
                    triggerAction: 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                    //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                    fieldLabel: 'ȱ�ݵȼ�',// �ؼ��ı�����ѧ��
                    name: 'qxdj',// �ٴ����ѣ�nameֻ�������б������
                    anchor: '90%'// input�Ŀ����90%
                }]
            }, {
                columnWidth: .25,
                layout: 'form',
                border: false,
                hidden:true,
                items: [{
                    xtype: 'textfield',// �ؼ�������Ϊdatefield
                    fieldLabel: '������',
                    name: 'zrr',
                    anchor: '90%'
                    //allowBlank : false// ��ѡ��ֵ������Ϊ��
                }]
            }, {
                columnWidth: .25,
                layout: 'form',
                border: false,
                hidden:true,
                items: [{
                    xtype: 'textfield',// �ؼ�������Ϊdatefield
                    fieldLabel: '���β���',
                    name: 'zrbm',
                    anchor: '90%'
                    //allowBlank : false// ��ѡ��ֵ������Ϊ��
                }]
            }, {
                columnWidth: .25,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textfield',// �ؼ�������Ϊdatefield
                    fieldLabel: '���ֵ�����',
                    name: 'fkbm',
                    anchor: '90%'
                    //allowBlank : false// ��ѡ��ֵ������Ϊ��
                }]
            }]
        }, {
            layout: 'column',
            border: false,
            labelSeparator: '��',
            items: [{
                columnWidth: .50,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textarea',// �ؼ�������Ϊdatefield
                    fieldLabel: '�������',
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
                    xtype: 'textarea',// �ؼ�������Ϊdatefield
                    fieldLabel: '�������',
                    name: 'clgc',
                    anchor: '95%',
                    height: 40
                    //format:'Y-m-d'
                }]
            }]
        }, {
            layout: 'column',
            border: false,
            labelSeparator: '��',
            items: [{
                columnWidth: .25,
                layout: 'form',
                border: false,
                labelWidth: 120,
                hidden:true,
                items: [{
                    xtype: 'combo',// �ؼ����������ó�combo
                    // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                    store: new Ext.data.SimpleStore({
                        // ͨ��һ�����鶨����returnValue��displayText�����ֶΡ�retrunValue�ֶ�ָ�����ύ����̨��ֵ��displayText�ֶ�ָ��������������ʾ��ѡ��ֵ��
                        fields: ["returnValue", "displayText"],
                        // �����˼�������.ÿ�����ݶ��Ǹ���fiedls�Ķ�������ɵģ��������һ��ֵ����retrunValue��ֵ���ڶ���ֵ����displayText��ֵ������[1,'Сѧ']���ͱ�ʾretrunValue��1��displayText��Сѧ��
                        data: [['������', '������'], ['δ����', 'δ����']]
                    }),
                    valueField: "returnValue",// ��������ѡ����ֵ
                    displayField: "displayText",// ��������ѡ������ʾ�ı�
                    mode: 'local',// �������ڱ���
                    //forceSelection : true,// ����ѡ��һ��ѡ��
                    blankText: '������',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                    emptyText: '������',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                    hiddenName: 'cljg',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                    editable: false,// �������б�ֻ����ѡ�񣬲���������
                    triggerAction: 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                    //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                    fieldLabel: '������',// �ؼ��ı�����ѧ��
                    name: 'cljg',// �ٴ����ѣ�nameֻ�������б������
                    anchor: '90%'// input�Ŀ����90%
                }]
            }, {
                columnWidth: .25,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'field',// �ؼ�������Ϊdatefield
                    fieldLabel: '�ָ�����',
                    name: 'xjsj',
                    anchor: '90%',
                    listeners: {
                        "focus": function () {
                            WdatePicker({dateFmt: 'yyyy-MM-dd HH:mm'})
                        }
                    }
                    //allowBlank : false// ��ѡ��ֵ������Ϊ��
                }]
            }, {
                columnWidth: .25,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textfield',// �ؼ�������Ϊdatefield
                    fieldLabel: '��ȱ�㱨��',
                    name: 'xlbgr',
                    anchor: '90%'
                    //allowBlank : false// ��ѡ��ֵ������Ϊ��
                }]
            }, {
                columnWidth: .25,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textfield',// �ؼ�������Ϊdatefield
                    fieldLabel: '����ȷ�ϵ��',
                    name: 'clfzr',
                    anchor: '90%'
                    //allowBlank : false// ��ѡ��ֵ������Ϊ��
                }]
            }]
        }

        ],
        //Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
        buttons: [{
            // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
            text: '���',
            id: 'txt_qxAdd',
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
                        url: 'facility_defect_save.jsp',
                        method: 'post',
                        params: '',
                        // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                        // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                        success: function (form, action) {
                            // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                            //Ext.Msg.alert('����',action.result.data);
                            Ext.Msg.alert('��Ϣ', action.result.msg);
                            //simpleForm_Query.form.reset();
                            // window.location.href='zyjhsq.jsp';
                            //simpleForm_Save.collapse();
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
            text: '�޸�',
            id: 'txt_qxUpd',
            disabledClass: 'x-item-disabled',
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
                        waitMsg: '�޸���,���Ժ�...',
                        url: 'facility_defect_update.jsp',
                        method: 'post',
                        params: '',
                        // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                        // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                        success: function (form, action) {
                            // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                            //Ext.Msg.alert('����',action.result.data);
                            Ext.Msg.alert('��Ϣ', action.result.msg);
                            //simpleForm_Query.form.reset();

                            simple_Grid.getStore().reload();

                        },
                        // ����failure��������������ͨѶ���������ʱ����ʾ������Ϣ��
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
            id: 'txt_qxCz',
            handler: function () {
                simpleForm_Save.form.reset();
                //simpleForm_Query.collapse();

                simpleForm_Save.buttons[1].setVisible(false);
                simpleForm_Save.buttons[3].setVisible(false);
            }
        }, {
            // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
            text: 'ɾ��',
            id: 'txt_qxDel',
            disabledClass: 'x-item-disabled',
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
                        waitMsg: 'ɾ����,���Ժ�...',
                        url: 'facility_defect_delete.jsp',
                        method: 'post',
                        params: '',
                        // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                        // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                        success: function (form, action) {
                            // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                            //Ext.Msg.alert('����',action.result.data);
                            //Ext.Msg.alert('��Ϣ',action.result.msg);
                            simpleForm_Save.collapse();
                            simpleForm_Save.form.reset();
                            simpleForm_Save.buttons[1].setVisible(false);
                            simpleForm_Save.buttons[3].setVisible(false);


                            simple_Grid.getStore().reload();

                        },
                        // ����failure��������������ͨѶ���������ʱ����ʾ������Ϣ��
                        failure: function () {
                            Ext.Msg.alert('����', 'ɾ��ʧ�ܣ�');
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
        }]
    });


    var simpleForm_Query = new Ext.FormPanel({
        renderTo: document.body,
        labelAlign: 'left',
        title: '�豸ȱ�ݹ�����ѯ',
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
                columnWidth: .25,// �����˸��еĿ��ռ�ܿ�ȵ�50%��columnWidth:.5��
                layout: 'form',// formlayout�������ÿؼ�
                border: false,// û�б߿�
                items: [{
                    xtype: 'combo',// �ؼ����������ó�combo
                    // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                    store: store_bdtall,
                    //value:'ȫ��',
                    valueField: "value",// ��������ѡ����ֵ
                    displayField: "text",// ��������ѡ������ʾ�ı�
                    mode: 'local',// �������ڱ���
                    //forceSelection : true,// ����ѡ��һ��ѡ��
                    //blankText : '��ѡ����ҵ��λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                    emptyText: '��ͤ����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                    hiddenName: 'dwid1',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                    editable: true,// �������б�ֻ����ѡ�񣬲���������
                    triggerAction: 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                    //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                    fieldLabel: '��λ',// �ؼ��ı�����ѧ��
                    name: 'dwid1',// �ٴ����ѣ�nameֻ�������б������
                    id: 'txt_dwid1',
                    anchor: '90%'// input�Ŀ����90%
                }]
            }, {
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'field',// �ؼ�������Ϊdatefield
                    fieldLabel: '��ʼʱ��',
                    name: 'kssj',
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
                    fieldLabel: '����ʱ��',
                    name: 'jssj',
                    anchor: '90%',
                    id: 'txt_jsrq',
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
        //alert(rowIndex);
        //alert(record.get('jhsj')+' '+record.get('jhh')+' '+record.get('dwid'));
        simpleForm_Save.buttons[1].setVisible(true);
        simpleForm_Save.buttons[3].setVisible(true);
        simpleForm_Save.getForm().loadRecord(record);
        //����ȼ������ڹ������ģ���ť������
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
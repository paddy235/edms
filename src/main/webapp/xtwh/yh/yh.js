Ext.onReady(function () {
    this.ryshow = function (value) {
        win1 = new Ext.Window({
            width: 455,
            height: 420,
            layout: 'column',
            title: '�û�������ϵά��',
            closeAction: 'hide',
            plain: true,
            autoScroll: false,

            html: '<iframe style="width:800;height:420" src="yhgq.jsp?YHDM=' + value + '"></iframe>',
            buttons: [{
                text: '�ر�',
                handler: function () {
                    // win.hide();
                    win1.hide(this);
                }
            }]
        });
        win1.show(this);
    };
    Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';

    //alert("aaa");

    //��Ⱦ����html����
    var renderXiangxi = function (value) {
        return '<a href="aa.jsp?id=' + value + '">��ϸ</a>';
    };
    var renderDel = function (value) {
        return '<a  href="yh_del.jsp?YHDM=' + value + '">ɾ��</a>';
    };

    //����Grid��ͷ
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        //new Ext.grid.RowNumberer(),

        {header: '�û���¼��', dataIndex: 'YHDM', width: 60},
        {header: '�û�����', dataIndex: 'YHMC', width: 70, sortable: true},
        {header: '�û�IP', dataIndex: 'YHIP', width: 60, sortable: true},
        {header: '��λ����', dataIndex: 'GWMC', width: 60, sortable: true},
        {header: '��λ����', dataIndex: 'DWJB', width: 60, sortable: true},
        {header: '������λ', dataIndex: 'DWMC', width: 60, sortable: true},
        {header: 'ע��ʱ��', dataIndex: 'ZCSJ', width: 60, sortable: true},
        {header: '��½ʱ��', dataIndex: 'SESSION_DATE', width: 60, sortable: true},
        {header: '�ỰID��', dataIndex: 'SESSIONID', width: 60, sortable: true},
        {header: '��ע��Ϣ', dataIndex: 'BZ', width: 60, sortable: true},
        {header: 'ɾ��', dataIndex: 'YHDM', width: 60, renderer: renderDel, fixed: true}
    ]);


    var planRecord = Ext.data.Record.create([
        {name: 'YHDM', type: 'string'},
        {name: 'YHMC', type: 'string'},
        {name: 'YHMM', type: 'string'},
        {name: 'YHIP', type: 'string'},
        {name: 'GWMC', type: 'string'},
        {name: 'DWJB', type: 'string'},
        {name: 'DWDM', type: 'string'},
        {name: 'ZCSJ', type: 'string'},
        {name: 'SESSION_DATE', type: 'string'},
        {name: 'SESSIONID', type: 'string'},
        {name: 'BZ', type: 'string'},
        {name: 'DDTDM', type: 'string'},
        {name: 'DWMC', type: 'string'}
    ]);


    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url: 'yh_json.jsp'}),
        baseParams: {whereclause: '1=1'},
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

        //��Grid���Ϸ���Ӱ�ť
        /*
         tbar: new Ext.Toolbar({
         items:[
         {
         id:'buttonA',
         text:"���",
         handler: this.showAdd,
         scope:this
         },
         {
         id:'buttonA',
         text:"���",
         handler: this.showAdd,
         scope:this
         }
         ]
         })
         */
    });
    //Grid�ϴ����¼�
    var my_yhdm = "";
    simple_Grid.addListener('rowclick', function (simple_Grid, rowIndex, event) {
        // simpleForm_Query.collapse();
        simpleForm_Save.expand();
        simpleForm_Save.buttons[0].setVisible(false);
        simpleForm_Save.buttons[1].setVisible(true);
        //simpleForm_Save.buttons[3].setVisible(true);
        //simpleForm_Save.buttons[4].setVisible(true);


        var record = simple_Grid.getStore().getAt(rowIndex);
        //alert(record);
        //alert(record.get('albm'));

        simpleForm_Save.getForm().loadRecord(record);
        my_yhdm = Ext.getCmp("YHDM_ID").getValue();
        Ext.getCmp("YHDM_ID").disable();

    });
    //grid.render();//��Ⱦ���
    Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
    // form start

    var YHDM_store = new Ext.data.Store({
        proxy: new Ext.data.HttpProxy({
            url: '../../share/combo_list.jsp?sql=select distinct YHDM,YHDM from J_GYJC_YH&all=all'
        }),
        reader: new Ext.data.JsonReader({
                root: 'root'
            }, [{name: 'value', mapping: 'value'},
                {name: 'text', mapping: 'text'}
            ]
        )
    });
    YHDM_store.load();
    var YHMC_store = new Ext.data.Store({
        proxy: new Ext.data.HttpProxy({
            url: '../../share/combo_list.jsp?sql=select distinct YHMC,YHMC from J_GYJC_YH&all=all'
        }),
        reader: new Ext.data.JsonReader({
                root: 'root'
            }, [{name: 'value', mapping: 'value'},
                {name: 'text', mapping: 'text'}
            ]
        )
    });
    YHMC_store.load();
    var GQDM_store = new Ext.data.Store({
        proxy: new Ext.data.HttpProxy({
            url: '../../share/combo_list.jsp?sql=select distinct GQDM,GQDM from J_GYJC_GQZD&all=all'
        }),
        reader: new Ext.data.JsonReader({
                root: 'root'
            }, [{name: 'value', mapping: 'value'},
                {name: 'text', mapping: 'text'}
            ]
        )
    });
    GQDM_store.load();
    var SSDWDM_store = new Ext.data.Store({
        proxy: new Ext.data.HttpProxy({
            url: '../../share/combo_list.jsp?sql=select DWDM,DWJC from v_j_gyjc_yhdw'
        }),
        reader: new Ext.data.JsonReader({
                root: 'root'
            }, [{name: 'value', mapping: 'value'},
                {name: 'text', mapping: 'text'}
            ]
        )
    });
    SSDWDM_store.load();

    var SSDWMC_store = new Ext.data.Store({
        proxy: new Ext.data.HttpProxy({
            url: '../../share/combo_list.jsp?sql=select DWDM,DWMC from v_j_gyjc_yhdw&all=all'
        }),
        reader: new Ext.data.JsonReader({
                root: 'root'
            }, [{name: 'value', mapping: 'value'},
                {name: 'text', mapping: 'text'}
            ]
        )
    });
    SSDWMC_store.load();
    var simpleForm_Query = new Ext.FormPanel({
        renderTo: document.body,
        labelAlign: 'left',
        title: '�û���ѯ',
        buttonAlign: 'right',
        bodyStyle: 'padding:5px',
        //width : 600,
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
            items: [{
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'combo',// �ؼ����������ó�combo
                    // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                    store: YHDM_store,
                    valueField: "value",
                    displayField: "text",
                    mode: 'local',// �������ڱ���
                    //forceSelection : true,// ����ѡ��һ��ѡ��
                    blankText: '��ѡ���û���',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                    emptyText: 'ѡ���û���',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                    hiddenName: 'YHDM_Q',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                    editable: true,// �������б�ֻ����ѡ�񣬲���������
                    triggerAction: 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                    //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                    fieldLabel: '�û���¼��',// �ؼ��ı�����ѧ��
                    name: 'YHDM_Q',// �ٴ����ѣ�nameֻ�������б������
                    id: 'yhdm',
                    anchor: '80%'// input�Ŀ����90%
                }]
            }, {
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'combo',// �ؼ����������ó�combo
                    // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                    store: YHMC_store,
                    valueField: "value",
                    displayField: "text",
                    mode: 'local',// �������ڱ���
                    //forceSelection : true,// ����ѡ��һ��ѡ��
                    blankText: '��ѡ���û�����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                    emptyText: 'ѡ���û�����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                    hiddenName: 'YHMC',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                    editable: true,// �������б�ֻ����ѡ�񣬲���������
                    triggerAction: 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                    //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                    fieldLabel: '�û�����',// �ؼ��ı�����ѧ��
                    name: 'YHMC',// �ٴ����ѣ�nameֻ�������б������
                    id: 'yhmc_q',
                    anchor: '80%'// input�Ŀ����90%
                }]
            }, {
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'combo',// �ؼ����������ó�combo
                    // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                    store: SSDWMC_store,
                    valueField: "value",
                    displayField: "text",
                    mode: 'local',// �������ڱ���
                    //forceSelection : true,// ����ѡ��һ��ѡ��
                    blankText: '��ѡ��������λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                    emptyText: 'ѡ��������λ',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                    hiddenName: 'DWDM',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                    editable: true,// �������б�ֻ����ѡ�񣬲���������
                    triggerAction: 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                    //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                    fieldLabel: '��λ����',// �ؼ��ı�����ѧ��
                    name: 'DWDM',// �ٴ����ѣ�nameֻ�������б������
                    id: 'dwmc_id',// �ٴ����ѣ�nameֻ�������б������
                    anchor: '80%'// input�Ŀ����90%
                }]
            }]

        }],
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
                    //�����ѯ��ť���޸�whereclause��ֵ����Ϊ������������ҳ������ʧ
                    //��Ҫ��Ұ�ԭ��query.jsp�е�ƴwhereclause���߼��õ�������
                    var where = "1=1 ";
                    if (Ext.getCmp("yhdm").getValue() != "" && Ext.getCmp("yhdm").getValue() != "ALL") {
                        where = where + " and YHDM like '%" + Ext.getCmp("yhdm").getValue() + "%'";
                    }
                    if (Ext.getCmp("yhmc_q").getValue() != "" && Ext.getCmp("yhmc_q").getValue() != "ALL") {
                        where = where + " and YHMC like'%" + Ext.getCmp("yhmc_q").getValue() + "%'";
                    }
                    if (Ext.getCmp("dwmc_id").getValue() != "" && Ext.getCmp("dwmc_id").getValue() != "ALL") {
                        where = where + " and a.DWDM ='" + Ext.getCmp("dwmc_id").getValue() + "'";
                    }
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

            // ȡ����ť���Ǽ򵥵�resetһ��form�Ŀؼ�
            text: '����',
            handler: function () {
                simpleForm_Query.form.reset();
                simpleForm_Save.collapse();
                // window.location.href="";
                //window.location.href='zyjhsqAdd.jsp';
            }
        }]
    });


    //Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]


    // form start
    var simpleForm_Save = new Ext.FormPanel({
        renderTo: document.body,
        labelAlign: 'left',
        title: '�û����',
        buttonAlign: 'right',
        bodyStyle: 'padding:5px',
        //width : 600,
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
            items: [{
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textfield',
                    fieldLabel: '�û���¼��',
                    name: 'YHDM',
                    id: 'YHDM_ID',
                    anchor: '80%',
                    allowBlank: false// ��ѡ��ֵ������Ϊ��
                }]
            }, {
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textfield',
                    fieldLabel: '�û�����',
                    name: 'YHMC',
                    anchor: '80%',
                    allowBlank: false// ��ѡ��ֵ������Ϊ��
                }]
            }, {
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textfield',
                    inputType: 'password', //��������
                    fieldLabel: '�û�����',
                    name: 'YHMM',
                    anchor: '80%',
                    allowBlank: false// ��ѡ��ֵ������Ϊ��
                }]
            }, {
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'field',// �ؼ�������Ϊdatefield
                    fieldLabel: '�û�IP',
                    name: 'YHIP',
                    anchor: '80%',
                    allowBlank: false// ��ѡ��ֵ������Ϊ��
                }]
            }, {
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'field',// �ؼ�������Ϊdatefield
                    fieldLabel: '��λ����',
                    name: 'GWMC',
                    anchor: '80%',
                    allowBlank: false// ��ѡ��ֵ������Ϊ��
                }]
            }, {
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'combo',// �ؼ����������ó�combo
                    // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                    store: new Ext.data.SimpleStore({
                        // ͨ��һ�����鶨����returnValue��displayText�����ֶΡ�retrunValue�ֶ�ָ�����ύ����̨��ֵ��displayText�ֶ�ָ��������������ʾ��ѡ��ֵ��
                        fields: ["returnValue", "displayText"],
                        // �����˼�������.ÿ�����ݶ��Ǹ���fiedls�Ķ�������ɵģ��������һ��ֵ����retrunValue��ֵ���ڶ���ֵ����displayText��ֵ������[1,'Сѧ']���ͱ�ʾretrunValue��1��displayText��Сѧ��
                        data: [['1', '��˷��·�ֹ�˾'], ['2', '��˷��·�ֹ�˾����ָ����'],
                            ['3', '���̨'], ['4', '�����'],
                            ['5', '����'], ['6', '�������߱����'], ['7', '�е�']]
                    }),
                    valueField: "returnValue",// ��������ѡ����ֵ
                    displayField: "displayText",// ��������ѡ������ʾ�ı�
                    mode: 'local',// �������ڱ���
                    forceSelection: true,// ����ѡ��һ��ѡ��
                    blankText: '��ѡ��λ����',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                    emptyText: '��ѡ��λ����',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                    hiddenName: 'DWJB',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                    editable: false,// �������б�ֻ����ѡ�񣬲���������
                    triggerAction: 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                    allowBlank: false,// ��ѡ��ֵ������Ϊ��
                    fieldLabel: '��λ����',// �ؼ��ı�����ѧ��
                    name: 'JGLB',// �ٴ����ѣ�nameֻ�������б������
                    id: 'dwdj_id',// �ٴ����ѣ�nameֻ�������б������
                    anchor: '80%',// input�Ŀ����90%
                    listeners: {
                        "select": function (combo, planRecord_gq, index) {
                            var sldw = Ext.getCmp("dwdj_id").value;
                            //alert(sldw);
                            var combo2 = Ext.getCmp('DWDM_id');
                            combo2.enable();
                            combo2.reset();
                            //combo2.disable();
                            sql_qjzc = "select DWDM,DWJC from v_j_gyjc_yhdw where jb=\'" + sldw + "\'";//
                            //alert(sql_qjzc);
                            combo2.store.proxy = new Ext.data.HttpProxy(
                                {url: '../../share/combo_list.jsp?sql=' + sql_qjzc});
                            combo2.store.load();
                        }
                    }
                }]
            }, {
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'combo',// �ؼ����������ó�combo
                    // ���ﶨ����һ��sotre���ԣ�����ѡ��ֵ�洢�ĵط�����Ϊ���ڿͻ��˵����ݣ�����ʹ����һ���򵥴洢��SimpleStore����
                    store: SSDWDM_store,
                    valueField: "value",
                    displayField: "text",
                    mode: 'local',// �������ڱ���
                    //forceSelection : true,// ����ѡ��һ��ѡ��
                    blankText: '��ѡ��������λ',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                    emptyText: 'ѡ��������λ',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                    hiddenName: 'DWDM',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                    editable: true,// �������б�ֻ����ѡ�񣬲���������
                    triggerAction: 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                    //allowBlank : false,// ��ѡ��ֵ������Ϊ��
                    fieldLabel: '��λ����',// �ؼ��ı�����ѧ��
                    name: 'DWDM',// �ٴ����ѣ�nameֻ�������б������
                    id: 'DWDM_id',// �ٴ����ѣ�nameֻ�������б������
                    anchor: '80%'// input�Ŀ����90%
                }]
            }, {
                columnWidth: .6,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'field',// �ؼ�������Ϊdatefield
                    fieldLabel: '��ע��Ϣ',
                    name: 'BZ',
                    anchor: '90%',
                    height: '50'

                }]
            }]

        }],
        // Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
        buttons: [{
            text: '����',
            handler: function () {
                if (!simpleForm_Save.form.isValid()) {
                    return
                }
                ;
                // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                if (simpleForm_Save.form.isValid()) {
                    simpleForm_Save.form.doAction('submit', {
                        waitMsg: '������,���Ժ�...',
                        url: 'Save.jsp',
                        method: 'post',
                        params: '',
                        // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                        // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                        success: function (form, action) {
                            // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                            Ext.Msg.alert('����', action.result.data);
                            Ext.Msg.alert('��Ϣ', action.result.msg);
                            simpleForm_Query.form.reset();
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
            text: '�޸�',
            Enabled: false,
            handler: function () {
                if (!simpleForm_Save.form.isValid()) {
                    return
                }
                ;
                if (simpleForm_Save.form.isValid()) {
                    simpleForm_Save.form.doAction('submit', {
                        waitMsg: '�޸���,���Ժ�...',
                        url: 'Update.jsp?YHDM=' + my_yhdm,
                        method: 'post',
                        params: '',
                        success: function (form, action) {
                            simpleForm_Save.buttons[0].setVisible(true);
                            simple_Grid.getStore().reload();
                            Ext.Msg.alert('��Ϣ', action.result.msg);
                            Ext.getCmp("YHDM_ID").enable();
                        },
                        failure: function () {
                            Ext.Msg.alert('����', '����ʧ�ܣ�');
                            this.disabled = false;
                        }
                    });
                }
            }
        }, {

            // ȡ����ť���Ǽ򵥵�resetһ��form�Ŀؼ�
            text: '����',
            handler: function () {
                simpleForm_Save.form.reset();
                simpleForm_Save.buttons[0].setVisible(true);
                simpleForm_Save.buttons[1].setVisible(false);
                //simpleForm_Save.buttons[3].setVisible(false);
                //simpleForm_Save.buttons[4].setVisible(false);
                //simpleForm_Query.collapse();
                // window.location.href="";
                Ext.getCmp("YHDM_ID").enable();
            }
        }, {
            // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
            text: 'Ȩ������',
            handler: function () {
                //var win;

                qxsz(document.getElementById("YHDM_ID").value);

                //alert(document.getElementById("id").value);
                //simpleForm_AddGdb.getForm().setValues([{id: 'jhid',value:document.getElementById("id").value}]);

            }
        }, {
            // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
            text: '��������',
            handler: function () {
                //var win;

                ryshow(document.getElementById("YHDM_ID").value);

            }
        }]
    });

    //��sessionȡֵ��ֵ��form�ֶ�;
    //Ext.Ajax.request({
    //url: 'GetSessionValue.jsp',
    //success: function(response, opts)
    //{
    // simpleForm_Save.getForm().setValues([{albm: "albm",value: response.responseText} ]);
    //},
    //failure: function(response, opts) {
    //console.log('�����ʧЧ��״̬���룺' + response.status);
    //}
    //});


    var simple_Viewport = new Ext.Viewport({
        layout: 'column',
        autoScroll: true,
        items: [simpleForm_Save, simpleForm_Query, simple_Grid]
    });
    simpleForm_Save.collapse();
    simpleForm_Save.buttons[1].setVisible(false);
    //simpleForm_Save.buttons[3].setVisible(false);
    //simpleForm_Save.buttons[4].setVisible(false);
    Ext.getCmp("YHDM_ID").enable();
});

//---------------------------------�����´���--------------------------------
//--------------------------------checkboxʹ��-------------------------------
var win;
var mark = 0;
function qxsz(yh) {
    Ext.QuickTips.init();
    var planRecord = Ext.data.Record.create([
        {name: 'JSDM', type: 'string'}
    ]);
    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store_yhjs = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url: 'yhjs_json.jsp?YHDM=' + yh}),
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalRecords',
            root: 'root',
            successProperty: 'success'
        }, planRecord)
    });
    if (mark == 0) {
        mark = 1;
        var jsForm_Save = new Ext.FormPanel({
            renderTo: document.body,
            labelAlign: 'left',
            bodyStyle: 'padding:5px 5px 0',
            collapsible: false,
            titleCollapse: false,
            method: 'POST',
            frame: true,
            autoWidth: true,
            items: [{
                bodyStyle: 'padding-right:5px;',
                items: {
                    xtype: 'fieldset',
                    title: '��ɫ����',
                    autoHeight: true,
                    defaultType: 'checkbox', // each item will be a checkbox
                    items: [{
                        xtype: 'field',
                        name: 'YHMC',
                        id: 'YHMC',
                        fieldLabel: '�û�����',
                        value: yh,
                        disabled: true
                    }, {
                        fieldLabel: '�û���ɫ',
                        boxLabel: '����Ա',
                        name: 'ADMIN',
                        id: 'ADMIN'
                    }, {
                        fieldLabel: '',
                        labelSeparator: '',
                        boxLabel: '����',
                        name: 'APPROVE',
                        id: 'APPROVE'
                    }, {
                        checked: false,
                        fieldLabel: '',
                        labelSeparator: '',
                        boxLabel: '�༭',
                        name: 'EDIT',
                        id: 'EDIT'
                    }, {
                        checked: false,
                        fieldLabel: '',
                        labelSeparator: '',
                        boxLabel: '�������',
                        name: 'BRWOSE',
                        id: 'BRWOSE'
                    }, {
                        checked: false,
                        fieldLabel: '',
                        labelSeparator: '',
                        boxLabel: '���޸���',
                        name: 'QXFZ',
                        id: 'QXFZ'
                    }, {
                        checked: false,
                        fieldLabel: '',
                        labelSeparator: '',
                        boxLabel: '���ȳ�',
                        name: 'DDZ',
                        id: 'DDZ'
                    }]

                },
                buttons: [{
                    text: '����',
                    scope: this,
                    handler: function () {
                        if (!jsForm_Save.form.isValid()) {
                            return
                        }
                        ;
                        // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                        if (jsForm_Save.form.isValid()) {
                            jsForm_Save.form.doAction('submit', {
                                waitMsg: '������,���Ժ�...',
                                url: 'yhjs_Save.jsp?YHMC=' + Ext.getCmp("YHMC").getValue(),
                                method: 'post',
                                params: '', success: function (form, action) {
                                    Ext.Msg.alert('��Ϣ', action.result.msg);
                                },
                                // ����failure��������������ͨѶ���������ʱ����ʾ������Ϣ��
                                failure: function () {
                                    Ext.Msg.alert('����', '����ʧ�ܣ�');
                                    this.disabled = false;
                                }
                            });
                        }
                    }
                }, {
                    text: '�ر�',
                    scope: this,
                    handler: function () {
                        win.hide(win);
                    }
                }]
            }]
        });
    }
    // create the window on the first click and reuse on subsequent clicks
    if (!win) {
        win = new Ext.Window({
            width: 400,
            title: 'Ȩ������',
            layout: 'column',
            height: 350,
            plain: true,
            closable: false,
            autoScroll: true,
            items: [jsForm_Save]
        });
    }
    Ext.getCmp("YHMC").setValue(yh);
    Ext.getCmp("ADMIN").setValue(false);
    Ext.getCmp("APPROVE").setValue(false);
    Ext.getCmp("EDIT").setValue(false);
    Ext.getCmp("BRWOSE").setValue(false);
    Ext.getCmp("QXFZ").setValue(false);
    Ext.getCmp("DDZ").setValue(false);

    store_yhjs.load({
        callback: function (records, success, totalRecords) {
            //alert(records[i].data.JSDM.toString());
            for (i = 0; i < records.length; i++) {
                //alert(records[i].data.JSDM.toString());
                Ext.getCmp(records[i].data.JSDM.toString()).setValue(true);
            }

        }
    });
    win.show(this);
}
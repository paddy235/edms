Ext.onReady(function () {

    Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../../extjs-3.0/resources/images/default/s.gif';
    var bd = Ext.getBody();

    /*
     * ================  ������ѯ���� =======================
     */
    //��Ⱦ����html����
    var renderXiangxi = function (value) {
        return '<a href="aa.jsp?id=' + value + '">��ϸ</a>';
    };
    var renderDel = function (value) {
        return '<a  href="RyDel.jsp?albm=' + value + '">ɾ��</a>';
    };

    //����Grid��ͷ
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        new Ext.grid.RowNumberer(),
        //{header:'���',dataIndex:'id',width:40,sortable:true,fixed:true},
        {header: '���������', dataIndex: 'xm', width: 240, sortable: true},
        {header: '��ѹ������', dataIndex: 'szdw', width: 180, sortable: true},
        {header: '����ͺ�', dataIndex: 'bm', sortable: true},
        {header: '���ѹ', dataIndex: 'zw', sortable: true},
        {header: '���б��', dataIndex: 'zy', sortable: true},
        {header: '�����', dataIndex: 'gh', width: 80, sortable: true},
        {header: '�����', dataIndex: 'xb', width: 80, sortable: true},
        //{header:'��Ե�ͺ�',dataIndex:'gz',width:80,fixed:true},
        //{header:'����',dataIndex:'aqdj',width:80,fixed:true},
        // {header:'������',dataIndex:'ydsgdj',width:80,fixed:true},
        //{header:'����',dataIndex:'bc',width:40,fixed:true},
        {header: '��������', dataIndex: 'jsdj', width: 120, fixed: true},
        {header: '����', dataIndex: 'id', width: 60, renderer: renderDel, fixed: true}

    ]);

    var planRecord = Ext.data.Record.create([
        {name: 'id', type: 'int'},
        {name: 'bm', type: 'string'},
        {name: 'szdw', type: 'string'},
        {name: 'zw', type: 'string'},
        {name: 'zy', type: 'string'},
        {name: 'xm', type: 'string'},
        {name: 'gh', type: 'string'},
        {name: 'xb', type: 'string'},
        {name: 'jg', type: 'string'},
        {name: 'mz', type: 'string'},
        {name: 'hkxz', type: 'string'},
        {name: 'csd', type: 'string'},
        {name: 'csrq', type: 'string'},
        {name: 'sfzh', type: 'string'},
        {name: 'whcd', type: 'string'},
        {name: 'zzmm', type: 'string'},
        {name: 'hyzk', type: 'string'},
        {name: 'gz', type: 'string'},
        {name: 'aqdj', type: 'string'},
        {name: 'ydsgdj', type: 'string'},
        {name: 'jsdj', type: 'string'},
        {name: 'bc', type: 'string'}
    ]);


    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url: 'RyList.jsp'}),
        //reader����������ν����������
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty: 'success'
        }, planRecord)
    });
    store.load({params: {start: 0, limit: 10}});

    //����������,ָ����ģ�ͣ��ֿ⣬ѡ��ģ��(Ĭ����ѡ��ģ��)
    var simple_Grid = new Ext.grid.GridPanel({
        //el:ָ��htmlԪ��������ʾ��grid
        //el: 'grid3',
        //title: '��ѯ�б�', 
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
        //width:1000,
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

        //��Grid���Ϸ����Ӱ�ť
        /*
         tbar: new Ext.Toolbar({
         items:[
         {
         id:'buttonA',
         text:"����",
         handler: this.showAdd,
         scope:this
         },
         {
         id:'buttonA',
         text:"����",
         handler: this.showAdd,
         scope:this
         }
         ]
         })
         */
    });

    //Grid�ϴ����¼�
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
    });

    //grid.render();//��Ⱦ����
    Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
    // form start

    /*
     * ================  ����ǰ��λ�ã��¹ʰ���---->������ѯ =======================
     */
    var simpleForm_Query = new Ext.FormPanel({
        renderTo: document.body,
        title: '������豸��ѯ',
        labelAlign: 'left',
        //bodyStyle:'padding:5px 5px 0',
        //labelWidth: 75, 
        collapsible: true,
        titleCollapse: true,
        method: 'POST',
        frame: true,
        autoWidth: true,
        //width: 1000,
        items: [{
            layout: 'column',// columnlayout
            border: false,// û�б߿�
            items: [{
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'combo',
                    store: new Ext.data.SimpleStore({
                        fields: ["returnValue", "displayText"],
                        data: [['', 'ȫ��'], ['���ҹ�ǣ����', '���ҹ�ǣ����'], ['��ľ��ǣ����', '��ľ��ǣ����'], ['����ǣ����', '����ǣ����'], ['�³Ǵ�ǣ����', '�³Ǵ�ǣ����'], ['����ǣ����', '����ǣ����'], ['��ͷǣ����', '��ͷǣ����'], ['����ǣ����', '����ǣ����'], ['��ְǣ����', '��ְǣ����'], ['����¥ǣ����', '����¥ǣ����']]
                    }),
                    valueField: "returnValue",
                    displayField: "displayText",
                    mode: 'local',// �������ڱ���
                    //forceSelection : true,// ����ѡ��һ��ѡ��
                    blankText: '��ѡ�����ڵ�λ',
                    emptyText: 'ѡ��λ',
                    hiddenName: 'xm',
                    editable: false,
                    triggerAction: 'all',
                    //allowBlank : false,
                    fieldLabel: '���ڵ�λ',
                    name: 'xm',
                    anchor: '95%'
                }]
            }]
        }
        ],
        // Ϊform���Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
        buttons: [{
            // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
            buttonlAlign: 'right',
            text: '��ѯ',
            handler: function () {
                if (!simpleForm_Query.form.isValid()) {
                    return
                }
                ;
                // ��formpanel���У�form����ָ�����formpanle���basicform�������ǿ�ͨ��formpanle.form��ʹ�ø�basicform�����ڱ����ӣ������Ѿ���formpanel����ֵ����simpleForm����������������ǿ���ͨ��simpleForm.form����������basicform����
                if (simpleForm_Query.form.isValid()) {
                    // ���水ťҪ���ľ�������basicform�Ŀͻ�����֤����֤ͨ���������øð�ť״̬Ϊdisable����ֹ2���ύ��Ȼ�����simpleForm.form.doAction�����ύ����
                    //this.disabled = true;
                    // doAction�����ĵ�һ��������submit������˼�Ǳ�ʾִ�е����ύ�������ύ�ĺ�̨ҳ����test.jsp��url:'test.asp'�����ύ��ʽ��post��method:'post'����û�������ύ������params:''��
                    simpleForm_Query.form.doAction('submit', {
                        waitMsg: '��ѯ��,���Ժ�...',
                        url: 'RyQuery.jsp',
                        method: 'post',
                        params: '',
                        // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                        // success����ĺ�������������������һ��form�������ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                        success: function (form, action) {
                            // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                            //Ext.Msg.alert('����',action.result.data);
                            //Ext.Msg.alert('��Ϣ',action.result.msg);
                            //simpleForm_Query.form.reset();
                            simple_Grid.getStore().reload();
                        },
                        // ����failure��������������ͨѶ���������ʱ����ʾ������Ϣ��
                        failure: function () {
                            Ext.Msg.alert('����', '����ʧ�ܣ�');
                            this.disabled = false;
                        }
                    });
                }
            }
        }
            , {
                // ȡ����ť���Ǽ򵥵�resetһ��form�Ŀؼ�
                text: '����',
                handler: function () {
                    simpleForm_Query.form.reset();
                    simpleForm_Save.collapse();
                }
            }
        ]
    });

    /*==============�����鵵---->�¹ʱ�������========*/
    var simpleForm_Save = new Ext.FormPanel({
        renderTo: document.body,
        title: '������豸�༭',
        labelAlign: 'left',
        bodyStyle: 'padding:5px 5px 0',
        //labelWidth: 75, 
        collapsible: true,
        titleCollapse: true,
        method: 'POST',
        frame: true,
        autoWidth: true,
        //width: 1000,
        //fileUpload: true,
        items: [{
            layout: 'column',
            border: false,
            items: [{xtype: 'hidden', name: 'id'}, {xtype: 'hidden', name: 'albm'},
                {
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
                            data: [['', 'ȫ��'], ['���ҹ�ǣ����', '���ҹ�ǣ����'], ['��ľ��ǣ����', '��ľ��ǣ����'], ['����ǣ����', '����ǣ����'], ['�³Ǵ�ǣ����', '�³Ǵ�ǣ����'], ['����ǣ����', '����ǣ����'], ['��ͷǣ����', '��ͷǣ����'], ['����ǣ����', '����ǣ����'], ['��ְǣ����', '��ְǣ����'], ['����¥ǣ����', '����¥ǣ����']]
                        }),
                        valueField: "returnValue",// ��������ѡ����ֵ
                        displayField: "displayText",// ��������ѡ������ʾ�ı�
                        mode: 'local',// �������ڱ���
                        //forceSelection : true,// ����ѡ��һ��ѡ��
                        blankText: '��ѡ������',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        emptyText: 'ѡ������',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        hiddenName: 'xm',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б������ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        editable: false,// �������б�ֻ����ѡ�񣬲���������
                        triggerAction: 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        allowBlank: false,// ��ѡ��ֵ������Ϊ��
                        fieldLabel: '��ѹ������',// �ؼ��ı�����ѧ��
                        name: 'xm',// �ٴ����ѣ�nameֻ�������б�������
                        anchor: '95%'// input�Ŀ�����90%
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
                            data: [['ǣ����ѹ��', 'ǣ����ѹ��',],
                                ['������ѹ��', '������ѹ��'], ['�����ѹ��', '�����ѹ��'], ['���ñ�ѹ��', '���ñ�ѹ��']]
                        }),
                        valueField: "returnValue",// ��������ѡ����ֵ
                        displayField: "displayText",// ��������ѡ������ʾ�ı�
                        mode: 'local',// �������ڱ���
                        //forceSelection : true,// ����ѡ��һ��ѡ��
                        blankText: '��ѡ��ѹ������',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        emptyText: 'ѡ���ѹ������',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        hiddenName: 'szdw',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б������ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        editable: false,// �������б�ֻ����ѡ�񣬲���������
                        triggerAction: 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        allowBlank: false,// ��ѡ��ֵ������Ϊ��
                        fieldLabel: '��ѹ������',// �ؼ��ı�����ѧ��
                        name: 'szdw',// �ٴ����ѣ�nameֻ�������б�������
                        anchor: '95%'// input�Ŀ�����90%
                    }]
                }, {
                    columnWidth: .3,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: '����ͺ�',
                        name: 'bm',
                        anchor: '95%'
                    }]
                }]
        }, {
            layout: 'column',
            border: false,
            items: [{
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textfield',
                    fieldLabel: '���б��',
                    name: 'zy',
                    anchor: '95%'
                }]
            }, {
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textfield',
                    fieldLabel: '���ѹ��KV/KV)',
                    name: 'zw',
                    anchor: '95%'
                }]
            }, {
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textfield',
                    fieldLabel: '�������A/A��',
                    name: 'gh',
                    anchor: '95%'
                }]
            }]
        }, {
            layout: 'column',
            border: false,
            items: [{
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
                        data: [['����', '����'], ['����', '����']]
                    }),
                    valueField: "returnValue",// ��������ѡ����ֵ
                    displayField: "displayText",// ��������ѡ������ʾ�ı�
                    mode: 'local',// �������ڱ���
                    //forceSelection : true,// ����ѡ��һ��ѡ��
                    blankText: '��ѡ���豸״̬',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                    emptyText: 'ѡ���豸״̬',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                    hiddenName: 'jg',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б������ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                    editable: false,// �������б�ֻ����ѡ�񣬲���������
                    triggerAction: 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                    allowBlank: false,// ��ѡ��ֵ������Ϊ��
                    fieldLabel: '�豸״̬',// �ؼ��ı�����ѧ��
                    name: 'jg',// �ٴ����ѣ�nameֻ�������б�������
                    anchor: '95%'// input�Ŀ�����90%
                }]
            }, {
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textfield',
                    fieldLabel: '�����(KVA)',
                    name: 'xb',
                    anchor: '95%'
                }]
            }, {
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textfield',
                    fieldLabel: '����',
                    name: 'mz',
                    anchor: '95%'
                }]
            }]
        }, {
            layout: 'column',
            border: false,
            items: [{
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textfield',
                    fieldLabel: '�������',
                    name: 'hkxz',
                    anchor: '95%'
                }]
            }, {
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textfield',
                    fieldLabel: '��ȴ��ʽ',
                    name: 'csd',
                    anchor: '95%'
                }]
            }, {
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'datefield',
                    fieldLabel: 'Ͷ������',
                    name: 'csrq',
                    anchor: '95%',
                    format: 'Y-m-d',
                    timePicker: true
                }]
            }]
        }, {
            layout: 'column',
            border: false,
            items: [{
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textfield',
                    fieldLabel: '���ص�����A��',
                    name: 'sfzh',
                    anchor: '95%'
                }]
            }, {
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textfield',
                    fieldLabel: '��������(KW)��',
                    name: 'whcd',
                    anchor: '95%'
                }]
            }, {
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textfield',
                    fieldLabel: '��·����(KW)',
                    name: 'zzmm',
                    anchor: '95%'
                }]
            }]
        }, {
            layout: 'column',
            border: false,
            items: [{
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textfield',
                    fieldLabel: '�迹��ѹ(%)',
                    name: 'hyzk',
                    anchor: '95%'
                }]
            }, {
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textfield',
                    fieldLabel: '��Ե�ͺ�',
                    name: 'gz',
                    anchor: '95%'
                }]
            }, {
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textfield',
                    fieldLabel: '����(KG)',
                    name: 'aqdj',
                    anchor: '95%'
                }]
            }]
        }, {
            layout: 'column',
            border: false,
            items: [{
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textfield',
                    fieldLabel: '������(KG)',
                    name: 'ydsgdj',
                    anchor: '95%'
                }]
            }, {
                columnWidth: .3,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textfield',
                    fieldLabel: '����(KG)',
                    name: 'bc',
                    anchor: '95%'
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
                        data: [['������ѹ����', '������ѹ����'], ['����������ѹ����', '����������ѹ����'], ['��ɳ��ѹ����', '��ɳ��ѹ����'], ['��������˹ͨ��˾', '��������˹ͨ��˾']]
                    }),
                    valueField: "returnValue",// ��������ѡ����ֵ
                    displayField: "displayText",// ��������ѡ������ʾ�ı�
                    mode: 'local',// �������ڱ���
                    //forceSelection : true,// ����ѡ��һ��ѡ��
                    blankText: '��ѡ����������',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                    emptyText: 'ѡ����������',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                    hiddenName: 'jsdj',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б������ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                    editable: false,// �������б�ֻ����ѡ�񣬲���������
                    triggerAction: 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                    allowBlank: false,// ��ѡ��ֵ������Ϊ��
                    fieldLabel: '��������',// �ؼ��ı�����ѧ��
                    name: 'jsdj',// �ٴ����ѣ�nameֻ�������б�������
                    anchor: '95%'// input�Ŀ�����90%
                }]
            }]
        }],

        buttons: [{
            text: '����',
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
                        url: 'RySave.jsp',
                        method: 'post',
                        params: '',
                        // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                        // success����ĺ�������������������һ��form�������ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                        success: function (form, action) {
                            // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                            //Ext.Msg.alert('����',action.result.data);
                            if (action.result.msg != "") {
                                document.getElementById("albm").value = action.result.msg;
                                //simpleForm_Save.buttons[3].setVisible(true);
                                //simpleForm_Save.buttons[4].setVisible(true);
                                simple_Grid.getStore().reload();
                                Ext.Msg.alert('��Ϣ', '����ɹ���');
                            }
                            //simpleForm_Query.form.reset();

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
                        url: 'RyUpdate.jsp',
                        method: 'post',
                        params: '',
                        success: function (form, action) {
                            simpleForm_Save.buttons[0].setVisible(true);
                            simple_Grid.getStore().reload();
                            Ext.Msg.alert('��Ϣ', action.result.msg);
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
                //window.location.href='zyjhsqAdd.jsp';
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
});
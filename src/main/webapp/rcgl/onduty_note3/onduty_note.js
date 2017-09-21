Ext.onReady(function () {

    Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var userdwid = document.getElementById("userDwid").value;
    var yhmc = document.getElementById("yhmc").value;
    //����Grid��ͷ
    var columns = new Ext.grid.ColumnModel([
        //expander,			
        //�Զ��к�
        //new Ext.grid.RowNumberer(),

        {header: '���', dataIndex: 'xh', width: 30},
        {header: '����ʱ��', dataIndex: 'jssj', width: 50, sortable: true},
        {header: '����', dataIndex: 'tq', width: 40, sortable: true},
        {header: '�Ƿ�Ӱ���ȷ��', dataIndex: 'sfjbrqr', width: 50, sortable: true},
        {header: '��������', dataIndex: 'jsnr', width: 280, sortable: true}
        //{header:'�Ӱ���ȷ��',dataIndex:'jbrqr',width:80,fixed:true,sortable:true}
    ]);


    var planRecord = Ext.data.Record.create([
        {name: 'xh', type: 'int'},
        {name: 'jsid', type: 'int'},
        {name: 'dwid', type: 'string'},
        {name: 'dwmc', type: 'string'},
        {name: 'tq', type: 'string'},
        {name: 'jssj', type: 'string'},
        {name: 'sfjbrqr', type: 'string'},
        {name: 'jsnr', type: 'string'},
        {name: 'jbrqr', type: 'string'}


    ]);


    //ExtΪ�����ṩ��һ������Ext.data.Store������ת���������͵����ݡ�
    var store = new Ext.data.Store({
        //proxy�������Ǵ�����������
        proxy: new Ext.data.HttpProxy({url: 'onduty_note_json.jsp'}),
        // baseParams: {whereclause: 'dwid = ' + "'" + userdwid + "' and jlr='" + yhmc + "'"},//�����ҳ��ʱ�����ֵ������ʧ����Ϊ����������ֻ�е����ѯ��ťʱ�Ż�ı�
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
    //grid.addListener('cellClick',cellClick);
    //��ʾ��html��idΪcontainer�Ĳ���
    //grid.render();//��Ⱦ���


    Ext.form.Field.prototype.msgTarget = 'side';// ���ÿؼ��Ĵ�����Ϣ��ʾλ�ã���Ҫ��ѡ��λ���У�qtip,title,under,side,[elementId]
    // form start
    var simpleForm_Save = new Ext.FormPanel({
        renderTo: document.body,
        labelAlign: 'left',
        title: 'ֵ�����μ���',
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
            border: false,// û�б߿�
            labelSeparator: '��',// ����ķָ���������������ð�Ŵ���Ӣ�ĵ�ð�ţ�labelSeparator:'��'����
            // coulmnLayout��Ŀؼ���������items��
            items: [{xtype: 'hidden', name: 'jsid'}
                , {
                    columnWidth: .3,
                    layout: 'form',
                    border: false,
                    items: [{
                        xtype: 'textfield',// �ؼ�������Ϊdatefield
                        fieldLabel: '����',
                        name: 'tq',
                        anchor: '90%'

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
                        listeners: {
                            "focus": function () {
                                WdatePicker({dateFmt: 'yyyy-MM-dd HH:mm'})
                            }
                        }

                        //value: new Date,
                        //format:'Y-m-d'
                        //allowBlank : false// ��ѡ��ֵ������Ϊ��
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
                            data: [['��', '��'], ['��', '��']]
                        }),
                        valueField: "returnValue",// ��������ѡ����ֵ
                        displayField: "displayText",// ��������ѡ������ʾ�ı�
                        mode: 'local',// �������ڱ���
                        //forceSelection : true,// ����ѡ��һ��ѡ��
                        blankText: '��',// �ύformʱ���������û��ѡ������ʾ������Ϣ"��ѡ��ѧ��"
                        //emptyText : '��ѡ���ǻ��',// ��û��ѡ��ֵʱ��ʾΪѡ��ѧ��
                        hiddenName: 'sfjbrqr',// ���Ҫע�����hiddenName��name���ԣ�nameֻ�������б�����ƣ������ǿ�ͨ������hiddenName�����ύ����̨��input��name�����û������hiddenName���ں�̨�ǽ��ղ������ݵģ�������һ��Ҫע�⡣
                        editable: false,// �������б�ֻ����ѡ�񣬲���������
                        triggerAction: 'all',// ��Ϊ���������ֻ��ѡ��ģ�����һ��Ҫ��������triggerActionΪall����Ȼ����ѡ����ĳ��ѡ������������ֻ�����ƥ��ѡ��ֵ�ı���ѡ�������ѡ�����ǲ�������ʾ�ˣ�������Ͳ��ܸ�������ѡ���ˡ�
                        allowBlank: false,// ��ѡ��ֵ������Ϊ��
                        fieldLabel: '�Ӱ���ȷ��',// �ؼ��ı�����ѧ��
                        name: 'sfjbrqr',// �ٴ����ѣ�nameֻ�������б������
                        id: 'txt_sfqr',
                        anchor: '90%'// input�Ŀ����90%
                    }]
                }
            ]

        }, {
            layout: 'column',
            border: false,
            labelSeparator: '��',
            items: [{
                columnWidth: .97,
                layout: 'form',
                border: false,
                items: [{
                    xtype: 'textarea',// �ؼ�������Ϊdatefield
                    fieldLabel: '��������',
                    name: 'jsnr',
                    anchor: '90%',
                    height: 200
                    //format:'Y-m-d'
                }]
            }]
        }
        ],
        //Ϊform��Ӱ�ť�ˣ���formpanel��buttons���������Ǽ�����һ�����水ť��ȡ����ť
        buttons: [{
            // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
            text: '���',
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
                        url: 'onduty_note_save.jsp',
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
                        url: 'onduty_note_update.jsp',
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
            handler: function () {
                simpleForm_Save.form.reset();
                simpleForm_Save.buttons[1].setVisible(false);
                simpleForm_Save.buttons[3].setVisible(false);
                //simpleForm_Query.collapse();
                // window.location.href="";
                //window.location.href='zyjhsqAdd.jsp';
            }
        }, {
            // ��buttons�ﶨ��İ�ťĬ����Ext.Button�����԰�ť�����Զ�����Բ鿴Ext.Button��API��������������ť��û�õ��������ԣ�ֻ����������ʾ�ı���text���͵����¼���
            text: 'ɾ��',
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
                        url: 'onduty_note_delete.jsp',
                        method: 'post',
                        params: '',
                        // �ύ�ɹ���ִ��success����ĺ�������̨���ص����ݸ�ʽ����Ҫ����ע��ģ�һ��Ҫjson��ʽ�����ұ��������success:true������Ȼ����ִ��success����ĺ�����
                        // success����ĺ�������������������һ��form�����ڶ�����ajax���ص���Ӧ�������action.result���json�����˱����˺�̨���ص����ݡ�
                        success: function (form, action) {
                            // ���緵�ص�json�ṹ��"{success:true,data:'�ɹ����棡'}"��
                            //Ext.Msg.alert('����',action.result.data);
                            //Ext.Msg.alert('��Ϣ',action.result.msg);
                            //simpleForm_Save.form.reset();
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
        title: 'ֵ�����μ��¡���ѯ',
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
                    //value: new Date,
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
                    var where = " and 1=1 ";
                    //alert(Ext.getCmp("txt_ksrq").getValue());
                    if (Ext.getCmp("txt_ksrq").getValue() != "") {
                        where = where + " and jssj >=to_date('" + Ext.getCmp(
                                "txt_ksrq").getValue() + "','yyyy-mm-dd hh24:mi')";
                    }
                    if (Ext.getCmp("txt_jsrq").getValue() != "") {
                        where = where + "  and jssj <=to_date('" + Ext.getCmp(
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
        //alert(rowIndex);
        //alert(record.get('sfjbrqr'));
        simpleForm_Save.buttons[1].setVisible(true);
        simpleForm_Save.buttons[3].setVisible(true);
        // simpleForm_Save.buttons[0].setVisible(false);
        // simpleForm_Save.buttons[1].setVisible(false);
        //simpleForm_Save.buttons[2].setVisible(false);
        //simpleForm_Save.buttons[3].setVisible(false);
        simpleForm_Save.getForm().loadRecord(record);
    });

    //��sessionȡֵ��ֵ��form�ֶ�;
    Ext.Ajax.request({
        url: 'getSessionValue.jsp',
        success: function (response, opts) {
            simpleForm_Save.getForm().setValues([{id: "dwmc", value: response.responseText}]);
        },
        failure: function (response, opts) {
            console.log('�����ʧЧ��״̬���룺' + response.status);
        }
    });

    var simple_Viewport = new Ext.Viewport({
        layout: 'column',
        items: [simpleForm_Save, simpleForm_Query, simple_Grid]

    });

    simpleForm_Save.collapse();

    //simpleForm_Save.buttons[2].disabled=true;
    //simpleForm_Save.buttons[3].disabled=true;
    simpleForm_Save.buttons[1].setVisible(false);
    simpleForm_Save.buttons[3].setVisible(false);

    Ext.getCmp("txt_sfqr").setValue("��");

    if (yhmc != "����ƽ" && yhmc != "�´���" && yhmc != "���" && yhmc != "������" && yhmc != "����ΰ") {
        simpleForm_Save.hide();
    }
});
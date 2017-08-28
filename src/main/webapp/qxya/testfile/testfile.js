Ext.onReady(function(){

    Ext.QuickTips.init();

    

    var fp = new Ext.FormPanel({

        renderTo: 'fi-form',

        fileUpload: true,              //��־�˱������а����ļ�����
enctype:'multipart/form-data',
        width: 500,

        frame: true,

        title: '�ϴ��ļ�',

        autoHeight: true,

        bodyStyle: 'padding: 10px 10px 0 10px;',

        labelWidth: 50,

        defaults: {

            anchor: '95%',

            allowBlank: false,

            msgTarget: 'side'

        },

        items: [{

            xtype: 'textfield',
            id:'tpmc',

            fieldLabel: '�ļ�����'

        },{

            xtype: 'fileuploadfield',     //��������

            id: 'form-file',

            emptyText: '����ѡ���ļ�',

            fieldLabel: 'Photo',

            name: '�ļ�·��',

            buttonCfg: {

                text: '',

                iconCls: 'upload-icon'     //��ťͼ��

            }

        }],

        buttons: [{

            text: '����',

            handler: function(){

                if(fp.getForm().isValid()){

                     fp.getForm().submit({

                         url: 'testfileSave.jsp?tpmc='+Ext.getCmp("tpmc").getValue(),     //��̨����ҳ�棨������php��asp��aspx��jsp�ȵȣ�

                         waitMsg: '�����ϴ�...',

                         success: function(fp, o){

                             Ext.MessageBox.alert('��ϲ��', '�ϴ� �ɹ���');

                         }

                     });

                }

            }

        },{

            text: '����',

            handler: function(){

                fp.getForm().reset();

            }

        }]

    });

    

});

Ext.onReady(function(){

    Ext.QuickTips.init();

    

    var fp = new Ext.FormPanel({

        renderTo: 'fi-form',

        fileUpload: true,              //标志此表单数据中包含文件数据
enctype:'multipart/form-data',
        width: 500,

        frame: true,

        title: '上传文件',

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

            fieldLabel: '文件名称'

        },{

            xtype: 'fileuploadfield',     //表单域类型

            id: 'form-file',

            emptyText: '请您选择文件',

            fieldLabel: 'Photo',

            name: '文件路径',

            buttonCfg: {

                text: '',

                iconCls: 'upload-icon'     //按钮图标

            }

        }],

        buttons: [{

            text: '保存',

            handler: function(){

                if(fp.getForm().isValid()){

                     fp.getForm().submit({

                         url: 'testfileSave.jsp?tpmc='+Ext.getCmp("tpmc").getValue(),     //后台处理页面（可以是php，asp，aspx，jsp等等）

                         waitMsg: '正在上传...',

                         success: function(fp, o){

                             Ext.MessageBox.alert('恭喜您', '上传 成功！');

                         }

                     });

                }

            }

        },{

            text: '重置',

            handler: function(){

                fp.getForm().reset();

            }

        }]

    });

    

});

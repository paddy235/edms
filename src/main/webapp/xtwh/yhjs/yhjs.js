  //����Ĵ������� filedset ���涯̬�ĴӺ�̨ url �ж�ȡ��Ȩ�ޣ����� checkbox ����䵽 filedset �� 

        var storeUserRole=new Ext.data.JsonStore({
                autoLoad : true,
                 url: "js_json.jsp",
                  fields: [  'JSDM','JSMC']
          }); 
 
       var addUserModule= function (value){
            var size = storeUserRole.getTotalCount();
            
            // ��� fieldset
            var fieldset = Ext.getCmp("userRoleFieldset");

            for(var i=0;i<size;i++){
                var JSDM = storeUserRole.getAt(i).data.JSDM;
                var JSMC = storeUserRole.getAt(i).data.JSMC;
                
                var checkboxModule = new Ext.form.Checkbox({    
                    id:"addboxModule"+i,                
                    name:"userModule",
                    boxLabel :JSMC,  
                                    labelSeparator:"",  // ��û�б���ʱ����Ҫ ��:�� �ţ���Ҫ����ָ�                    
                                               inputValue : JSDM
                }); 
                
                if(JSMC == "�û�����"){
                    // ��Ϊֻ�й���Ա���С��û������Ȩ�ޡ�������һ�������û�����Ȩ�޵�ѡ��
                    roleBoxIndex1 = i;
                    Ext.getCmp("addboxModule"+i).setDisabled(true);
                }
                
                fieldset.add(checkboxModule); // ��������һ�� fieldset ����Ҳ������һ�� form ���߱�Ķ�����
            }                        
        } 



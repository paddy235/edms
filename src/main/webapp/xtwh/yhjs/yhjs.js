  //下面的代码是在 filedset 里面动态的从后台 url 中读取出权限，生成 checkbox 并填充到 filedset 中 

        var storeUserRole=new Ext.data.JsonStore({
                autoLoad : true,
                 url: "js_json.jsp",
                  fields: [  'JSDM','JSMC']
          }); 
 
       var addUserModule= function (value){
            var size = storeUserRole.getTotalCount();
            
            // 获得 fieldset
            var fieldset = Ext.getCmp("userRoleFieldset");

            for(var i=0;i<size;i++){
                var JSDM = storeUserRole.getAt(i).data.JSDM;
                var JSMC = storeUserRole.getAt(i).data.JSMC;
                
                var checkboxModule = new Ext.form.Checkbox({    
                    id:"addboxModule"+i,                
                    name:"userModule",
                    boxLabel :JSMC,  
                                    labelSeparator:"",  // 当没有标题时，不要 “:” 号，不要标题分隔                    
                                               inputValue : JSDM
                }); 
                
                if(JSMC == "用户管理"){
                    // 因为只有管理员才有“用户管理的权限”，所以一般封掉“用户管理”权限的选项
                    roleBoxIndex1 = i;
                    Ext.getCmp("addboxModule"+i).setDisabled(true);
                }
                
                fieldset.add(checkboxModule); // 这里我是一个 fieldset ，你也可以是一个 form 或者别的东西。
            }                        
        } 



Ext.onReady(function() {
	Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = '../../extjs-3.0/resources/images/default/s.gif';
    var userdwid=document.getElementById("userDwid").value;
    var userdj=document.getElementById("userdj").value;
    var dich_unit='';
    var dich_swit='';
    var dich_web='';
    var dich_jhh='';
     var dich_unit1='';
    var dich_swit1='';
    var dich_web1='';
    var dich_jhh1='';
    if(userdj=='6')
    {
        dich_unit=" bdsdz.sldwid like '"+userdwid+"%'";
        dich_swit=" glkgdz.sldwid like '"+userdwid+"%'";
        dich_web=" jcwzy.sldwid like '"+userdwid+"%'";
        dich_jhh=" gqdm like '"+userdwid+"%25'";
        //
          dich_unit1=" bdsdz.sldwid like '"+userdwid+"%'";
        dich_swit1=" glkgdz.sldwid like '"+userdwid+"%'";
        dich_web1=" jcwzy.sldwid like '"+userdwid+"%'";
        dich_jhh1=" gqdm like '"+userdwid+"%25'";
    }
    else if(userdj=='3')
    { 
       dich_unit=" bdsdz.dwid like '"+userdwid+"%'";//"jh.dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.ddtdm like "+"'"+dwid+"%')";
       dich_swit=" glkgdz.dwid like '"+userdwid+"%'";//"jh.dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.ddtdm like "+"'"+dwid+"%')";
       dich_web=" jcwzy.dwid like '"+userdwid+"%'";//"jh.dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.ddtdm like "+"'"+dwid+"%')";
       dich_jhh=" ddtdm like '"+userdwid+"%25'";
       //
       dich_unit1=" bdsdz.dwid like '"+userdwid+"%'";//"jh.dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.ddtdm like "+"'"+dwid+"%')";
       dich_swit1=" glkgdz.dwid like '"+userdwid+"%'";//"jh.dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.ddtdm like "+"'"+dwid+"%')";
       dich_web1=" jcwzy.dwid like '"+userdwid+"%'";//"jh.dwid in(select gq.gqdm from j_gyjc_gqzd gq where gq.ddtdm like "+"'"+dwid+"%')";
       dich_jhh1=" ddtdm like '"+userdwid+"%25'";
    }
    else if(userdj=='1'||userdj=='2')
    {
        dich_unit=" 1=1";
        dich_swit=" 1=1";
        dich_web=" 1=1";
        dich_jhh=" 1=1";
        //
        dich_unit1=" 1=1";
        dich_swit1=" 1=1";
        dich_web1=" 1=1";
        dich_jhh1=" 1=1";
    }
    else
    {
        dich_unit=" bdsdz.sldwid like "+"'"+userdwid+"%'";
        dich_swit=" glkgdz.sldwid like "+"'"+userdwid+"%'";
        dich_web=" jcwzy.sldwid like "+"'"+userdwid+"%'";
        dich_jhh=" cjdm like '"+userdwid+"%25'";
        //
        dich_unit1=" bdsdz.sldwid like "+"'"+userdwid+"%'";
        dich_swit1=" glkgdz.sldwid like "+"'"+userdwid+"%'";
        dich_web1=" jcwzy.sldwid like "+"'"+userdwid+"%'";
        dich_jhh1=" cjdm like '"+userdwid+"%25'";
    }
    //dich_unit=dich_unit+"  and bdsdz.flsj <=sysdate and bdsdz.flsj>=to_date('"+getTime()+"','yyyy-mm-dd hh24:mi')";
    //dich_web=dich_web+" and jcwzy.flsj <= sysdate and jcwzy.flsj>=to_date('"+getTime()+"','yyyy-mm-dd hh24:mi')";
    //dich_swit=dich_swit+" and glkgdz.flsj <=sysdate and glkgdz.flsj>=to_date('"+getTime()+"','yyyy-mm-dd hh24:mi')";
    
	//????????html????
	var render_mlzt = function(value){  		
  		if(value=="0")
 	 	{
 	 	  return '??????';
 	 	}
 	 	else if(value=="1")
 	 	{
 	 		return '??????';
 	 	}
 	 	else if(value=="2")
 	 	{
 	 		return '<div  style="color:blue;">??????</div>';
 	 	}
 	 		else if(value=="3")
 	 	{
 	 		return '<div  style="color:red;">??????</div>';
 	 	}
 	 			else if(value=="4")
 	 	{
 	 		return '<div  style="color:green;">??????</div>';
 	 	} 	 			else if(value=="5")
 	 	{
 	 		return '<div  style="color:green;">??????</div>';
 	 	}
 	 	else
 	 	{
 	 		 return '????';
 	 	}
  		
 	};
 		var planRecord_dw = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_dw = new Ext.data.Store({
        //proxy??????????????????????
        proxy: new Ext.data.HttpProxy({url:'../selectdw.jsp?all='+'all&zt='+'(jglbdm= 1 )'}),        
        //reader????????????????????????
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_dw)
    });
     store_dw.load();
     /////-----------------????????????????
     var sql_jhh="select id,jhh from z_yxgl_zyjh where dwid in (select gqdm from J_GYJC_GQZD where "+dich_jhh+" ) and rownum<10  order by jhsj desc";
    
    var planRecord_jhh = Ext.data.Record.create([
    	{name:'value',type:'string'},
    	{name:'text',type:'string'}
    	]);
    var store_jhh = new Ext.data.Store({
        //proxy??????????????????????
        proxy: new Ext.data.HttpProxy({url:'../../share/combo_list.jsp?sql='+sql_jhh}),        
        //reader????????????????????????
        reader: new Ext.data.JsonReader({
            //totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },planRecord_jhh)
    });
     store_jhh.load();
    //----??????????????--------------------------
	//????Grid????
	
	
	//????Grid????
	 	var expander_unit = new Ext.ux.grid.RowExpander({
        tpl : new Ext.Template(
            '<p><b>??????????:</b> {czkah} <b>????????:</b> {tsdqj} <b>????????:</b> {czlx} ',
            '<p><b>????????:</b> {mlnr}</p>',
            '<p><b>????:</b> {mlbz}</p>')
        });
        var expander_switch = new Ext.ux.grid.RowExpander({
        tpl : new Ext.Template(
            '<p><b>????????:</b> {gqmc} <b>????????:</b> {flsj} <b>????????????:</b> {yqwcsj}')
        });
        var expander_web = new Ext.ux.grid.RowExpander({
        tpl : new Ext.Template(
        '<p><b>????????:</b> {yqwcsj} ',
        '<p><b>????????:</b> {mlnr}</p>',
            '<p><b>????:</b> {mlbz}</p>')
        });
    var columns_unit = new Ext.grid.ColumnModel([
        
        //new Ext.grid.RowNumberer(),
        expander_unit,		
        {header:'????',dataIndex:'xh',width:40,fixed:true},
        {header:'??????',dataIndex:'mlh',width:50,fixed:true,sortable:true},
        {header:'????????',dataIndex:'mllx',width:60,sortable:true},
        {header:'??????????',dataIndex:'gqmc',width:60,sortable:true},
        //{header:'??????????',dataIndex:'czkah',width:60,sortable:true},
        //{header:'????????',dataIndex:'mlnr',width:60,sortable:true},
        {header:'????????',dataIndex:'flsj',width:110,fixed:true,sortable:false},	
        {header:'????????',dataIndex:'pzsj',width:110,fixed:true,sortable:false},
        //{header:'????????',dataIndex:'xlsj',width:110,fixed:true},
        {header:'??????',dataIndex:'flr',width:50,sortable:false},
        {header:'??????',dataIndex:'slr',width:50,sortable:false}
       // {header:'??????',dataIndex:'xlr',width:50,sortable:true},
       // {header:'????????',dataIndex:'mlzt',renderer:render_mlzt,width:60,fixed:true,sortable:true}
    
    ]);
   
    
    var Record_unit = Ext.data.Record.create([
    	{name:'xh',type:'int'},
    	{name:'commdid',type:'int'},
    	{name:'dwid',type:'string'},
    	{name:'dwmc',type:'string'},
    	{name:'jhid',type:'string'},
    	{name:'mlh',type:'string'},
    	{name:'sldwid',type:'string'},
    	{name:'sldwmc',type:'string'},
    	{name:'czkah',type:'string'},
    	{name:'mlnr',type:'string'},
    	{name:'tsdqj',type:'string'},
    	{name:'flsj',type:'string'},
    	{name:'pzsj',type:'string'},
    	{name:'xlsj',type:'string'},
    	{name:'flr',type:'string'},
    	{name:'slr',type:'string'},
    	{name:'xlr',type:'string'},
    	{name:'mlbz',type:'string'},
    	{name:'mlzt',type:'string'},
    	{name:'mllx',type:'string'},
    	{name:'ddy',type:'string'},
    	{name:'gqmc',type:'string'},
    	//{name:'tdqdmc',type:'string'},
    	{name:'czlx',type:'string'}
    	]);
    	
    
    //Ext????????????????????Ext.data.Store??????????????????????????
    var store_unit = new Ext.data.Store({
        //proxy??????????????????????
        proxy: new Ext.data.HttpProxy({url:'command_adapter_unit_json.jsp'}),   
        baseParams:{whereclause:dich_unit},//????????????????????????????????????????????????????????????????????????       
             
        //reader????????????????????????
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },Record_unit)
    });
	store_unit.load({params:{start:0, limit:3}});
    
     

 	//----??????????????--------------------------
	//????Grid????
    var columns_web = new Ext.grid.ColumnModel([
        
        //new Ext.grid.RowNumberer(),
        expander_web,		
        {header:'????',dataIndex:'xh',width:40,fixed:true},
        {header:'??????',dataIndex:'mlh',width:50,fixed:true,sortable:true},
        {header:'????????',dataIndex:'gqmc',width:80,sortable:true},
        {header:'????????',dataIndex:'flsj',width:110,fixed:true,sortable:true},
        {header:'????????',dataIndex:'mlnr',width:80,sortable:true},
        //{header:'??????????',dataIndex:'tdqd',width:80,sortable:true},
          {header:'??????',dataIndex:'zybs',width:60},
        {header:'????????',dataIndex:'pzsj',width:110,fixed:true,sortable:true},
        {header:'??????????',dataIndex:'tdqd',width:110,fixed:true},
        {header:'??????',dataIndex:'flr',width:90,fixed:true,sortable:false},
        {header:'??????',dataIndex:'slr',width:90,fixed:true,sortable:false}
        //{header:'??????',dataIndex:'xlr',width:90,fixed:true,sortable:true},
        //{header:'????????',dataIndex:'mlzt',renderer:render_mlzt,width:60,fixed:true,sortable:true}
      
    ]);
   
    
    var Record_web = Ext.data.Record.create([
    	{name:'xh',type:'int'},
    	{name:'commandid',type:'int'},
    	{name:'dwid',type:'string'},
    	{name:'dwmc',type:'string'},
    	{name:'jhid',type:'string'},
    	{name:'mlh',type:'string'},
    	{name:'sldwid',type:'string'},
    	{name:'sldwmc',type:'string'},
    	{name:'flsj',type:'string'},
    	{name:'yqwcsj',type:'string'},
    	{name:'mlnr',type:'string'},
    	{name:'tdqd',type:'string'},
    	{name:'pzsj',type:'string'},
    	{name:'xlsj',type:'string'},
    	{name:'flr',type:'string'},
    	{name:'slr',type:'string'},
    	{name:'xlr',type:'string'},
    	{name:'mlbz',type:'string'},
    	{name:'mlzt',type:'string'},
    	{name:'gqmc',type:'string'},
    	{name:'ddy',type:'string'}
    	]);
    	
    
    //Ext????????????????????Ext.data.Store??????????????????????????
    var store_web = new Ext.data.Store({
        //proxy??????????????????????
        proxy: new Ext.data.HttpProxy({url:'command_touch_web_json.jsp'}),        
       baseParams:{whereclause:dich_web},//????????????????????????????????????????????????????????????????????????       
         reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'root',
            successProperty :'success'
        },Record_web)
    });
	store_web.load({params:{start:0, limit:10}});
    
    
    //????????????,??????????????????????????(??????????????)
    var simple_Grid_web = new Ext.grid.GridPanel({
        //el:????html??????????????grid
        //el: 'grid3', 
        store:store_web,
    	cm: columns_web,
    	sm: new Ext.grid.RowSelectionModel({singleSelcet:true}),
        //title: '????????????',
        //????????????????????
        viewConfig:{
        	forceFit:true,
         	columnsText:"????????",
         	sortAscText:"????",
         	sortDescText:"????"
        },
        loadMask:{msg:"??????????...."},        
        collapsible: true,
        titleCollapse:true,
        animCollapse: false,
        columnLines: true,
        //width:780,
        autoWidth: true,
        autoHeight: true,
        plugins: expander_web,
        
        //iconCls: 'icon-grid',
        //height:400,
        //bottom bar
        bbar: new Ext.PagingToolbar({
            pageSize: 3,
            store: store_web,
            displayInfo: true,
            displayMsg: '?? {0} ???? {1} ??,?? {2} ??',
            emptyMsg: "??????"
        })
        
});


	
    //??????html??id??container??????
    //grid.render();//????????
    Ext.form.Field.prototype.msgTarget = 'side';// ??????????????????????????????????????????????qtip,title,under,side,[elementId]
	 // form start
	var simpleForm_Query = new Ext.FormPanel({
              renderTo : document.body,
              labelAlign : 'left',
              title : '????????????????????????????????????',
              buttonAlign : 'right',
              bodyStyle : 'padding:5px',
              //width : 600,
               titleCollapse:true,
              collapsible:true,
              method:'POST',
              autoWidth:true,
              frame : true,
              labelWidth : 60,
              
              
              items : [{
                                   layout : 'column',
                                   border : false,
                                   labelSeparator : '??',
                                   items : [ {
                                           		columnWidth : .25,// ??????????????????????????50%??columnWidth:.5??
                                                layout : 'form',// formlayout????????????
                                                border : false,// ????????
                                                items : [{
                                                			xtype : 'combo',// ????????????????combo
                                                               // ??????????????sotre??????????????????????????????????????????????????????????????????????????SimpleStore????
                                                               store : store_dw,
                                                               //value:'????',
                                                               valueField : "value",// ??????????????????
                                                               displayField : "text",// ????????????????????????
                                                               mode : 'local',// ????????????
                                                               //forceSelection : true,// ????????????????
                                                               //blankText : '??????????????',// ????form????????????????????????????????????"??????????"
                                                               emptyText : '????????',// ????????????????????????????
                                                               hiddenName : 'taskunit',// ??????????????hiddenName??name??????name????????????????????????????????????hiddenName????????????????input??name??????????????hiddenName??????????????????????????????????????????????
                                                               editable : false,// ????????????????????????????????
                                                               triggerAction : 'all',// ????????????????????????????????????????????triggerAction??all????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                                               //allowBlank : false,// ??????????????????
                                                               fieldLabel : '????????',// ????????????????
                                                               name : 'taskunit',// ??????????name??????????????????
                                                               id:'dw_id',
                                                               anchor : '90%'// input????????90%
                                                        }]
                                                 		},{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// ????????????datefield
                                                                             fieldLabel : '????????',
                                                                             name : 'ksrq',
                                                                             id:'txt_ksrq',
                                                                             anchor : '90%',
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                      }]
                                                 },{
                                                        columnWidth : .25,
                                                        layout : 'form',
                                                        border : false,
                                                        items : [{
                                                                             xtype : 'field',// ????????????datefield
                                                                             fieldLabel : '????????',
                                                                             name : 'jsrq',
                                                                             id:'txt_jsrq',
                                                                             //value: new Date,
                                                                             anchor : '90%',
                                                                             listeners: {"focus": function(){
                                                                             WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})}}
                                                                      }]
                                                 }]
                            }                            
                                                         ],
              // ??form??????????????formpanel??buttons??????????????????????????????????????
              buttons : [{
                                   //??buttons??????????????????Ext.Button????????????????????????????Ext.Button??API??????????????????????????????????????????????????????text??????????????
                                   text : '????',
                                   handler : function() {
                                          if (!simpleForm_Query.form.isValid()) {return };
                                   		  // ??formpanel??????form????????????formpanle????basicform????????????????formpanle.form????????basicform??????????????????????????formpanel????????????simpleForm??????????????????????????simpleForm.form????????????basicform??????
                                          if (simpleForm_Query.form.isValid()) {
                                        
                                         
                                           var where_web=" 1=1 ";
                                  
                                                    if(Ext.getCmp("txt_ksrq").getValue()!="" ){
													     where_web=where_web+" and jcwzy.flsj >=to_date('"+Ext.getCmp("txt_ksrq").getValue()+"','yyyy-mm-dd hh24:mi')";	
													    
													}
													 //alert(Ext.getCmp("txt_jsrq").getValue());
													if(Ext.getCmp("txt_jsrq").getValue()!="" ){
														    where_web=where_web+"  and jcwzy.flsj <=to_date('"+Ext.getCmp("txt_jsrq").getValue()+"','yyyy-mm-dd hh24:mi')";	
												
													}
											 
												 
													
													 
													
													
													if(Ext.getCmp("dw_id").getValue()!='ALL')
													{  
														if(Ext.getCmp("dw_id").getValue()!=''  && Ext.getCmp("dw_id").getValue()!='all'){
															     where_web=where_web+" and jcwzy.sldwid='"+Ext.getCmp("dw_id").getValue()+"' ";
												
													     }  
													}
													else
													{
													  	   where_web=where_web+" and "+dich_web1;
													}
												
												 
													
													store_web.baseParams.whereclause = where_web; 
				                                    simple_Grid_web.getStore().reload({ 
														params : { 
														start : 0, 
														limit : 3 
														} 
													});
                                          }
                   
                                   }
                            }, {

                                   // ??????????????????reset????form??????
                                   text : '????',
                                   handler : function() {
                                          simpleForm_Query.form.reset();
                                   }
                            }]
       });
   
   
   
     
     var simple_Viewport = new Ext.Viewport({
		layout: 'column',
		items: [simpleForm_Query,simple_Grid_web]
		
	});

});
	              
function getTime()
{
      var myyear,mymonth,myweek,myday,mytime,mymin,myhour,mysec;
	var mydate=new Date();
	myyear=mydate.getFullYear();
	mymonth=mydate.getMonth()+1;
	if(mymonth<10)
	//mymoth="0"+mymoth;
	myday=mydate.getDate();
	if(myday<10)
	myday="0"+myday;
	myhour=mydate.getHours();
	if(myhour<10)
	myhour="0"+myhour;
	mymin=mydate.getMinutes();
	if(mymin<10)
	mymin="0"+mymin;
	mysec=mydate.getSeconds();
	mytime=myyear+"-"+mymonth+"-"+myday+" "+myhour+":"+mymin;
 
	return mytime;
}
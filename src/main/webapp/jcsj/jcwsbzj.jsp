<%@ page language="java" import="java.util.*" pageEncoding="GB18030"%>


<html>
  <head>
    <title>故障预通知</title>

	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" type="text/css" href="default.css"> 
 <script type="text/javascript" src="mycalendar2.js"></script>
  </head>
  
  <body>
   <form>     
      <div style="position:absolute;left:10px;top:10px;width:40%" >        
         <font size=2 color="blue"><b>查询条件:</font>      
     </div>
      <div style="position:absolute;left:10px;top:30px;width:100%;height:200;overflow-x:hidden;overflow-y:auto">        
        <table id="mytable" style="WIDTH:100%" cellSpacing=0 cellPadding=0 border=0>
        <tbody>
          <tr height=40px>
            <td><font size=2>单位名称</td><td><input type="text" width="100%"></td>
            <td>设备名称</td><td><select name="ctl00$ContentPlaceHolder1$dropSbmc" onchange="javascript:setTimeout('__doPostBack(\'ctl00$ContentPlaceHolder1$dropSbmc\',\'\')', 0)" id="ctl00_ContentPlaceHolder1_dropSbmc" style="width:129px;">
						<option selected="selected" value=""></option>
						<option value="010100001">接触线</option>
						<option value="010200001">承力索</option>
						<option value="010300001">供电线</option>
						<option value="010400001">回流线</option>
						<option value="010500001">正馈线</option>
						<option value="010600001">保护线</option>
						<option value="010700001">架空地线</option>
						<option value="010900001">支柱</option>
						<option value="011000001">软横跨</option>
						<option value="011100001">硬横跨</option>
						<option value="011200001">隔离开关</option>
						<option value="011300001">线岔</option>
						<option value="011400001">分相绝缘器</option>
						<option value="011500001">分段绝缘器</option>
						<option value="011600001">限界门</option>
						<option value="011700001">绝缘子</option>
						<option value="011800001">过电压保护装置</option>
						<option value="011900001">跨越接触网电力线</option>
						<option value="012000001">补偿装置</option>
						<option value="012100001">绝缘锚段关节</option>
						<option value="012200001">非绝缘锚段关节</option>
						<option value="012300001">中心锚结</option>
						<option value="012400001">吸上线</option>
						<option value="012500001">变压器</option>
						<option value="012600001">加强线</option>
						<option value="012700001">并联线</option>
						<option value="012800001">捷接线</option>
						<option value="013000001">隧道悬挂</option>
						<option value="013100001">隧道</option>
						<option value="013200001">隧道接触悬挂长度</option>
						<option value="013300001">跨越接触网的桥梁</option>
						<option value="013400001">桥梁</option>
						<option value="013500001">串联电容补偿装置</option>
						<option value="013600001">负荷开关</option>
					</select></td>
			 <td>悬挂类型</td><td><select name="ctl00$ContentPlaceHolder1$dropXglx" id="ctl00_ContentPlaceHolder1_dropXglx" style="width:149px;">
						<option value=""></option>
						<option value="002001">全补偿链型</option>
						<option value="002002">半补偿链型</option>
						<option value="002003">简单悬挂</option>

					</select></td>		
			   		
          </tr>
          <tr height=40px>
            <td><font size=2>区间（站场）</td><td><select name="ctl00$ContentPlaceHolder1$QjzcSelect1$Qjzc" onchange="javascript:setTimeout('__doPostBack(\'ctl00$ContentPlaceHolder1$QjzcSelect1$Qjzc\',\'\')', 0)" id="ctl00_ContentPlaceHolder1_QjzcSelect1_Qjzc" style="width:149px;">
					</select></td>
		    <td>材质</td>
		    <td> <select name="ctl00$ContentPlaceHolder1$dropCz" onchange="javascript:setTimeout('__doPostBack(\'ctl00$ContentPlaceHolder1$dropCz\',\'\')', 0)" id="ctl00_ContentPlaceHolder1_dropCz" style="width:129px;">

					</select></td>
		    <td>生产厂家</td>
		    <td><select name="ctl00$ContentPlaceHolder1$dropSccj" id="ctl00_ContentPlaceHolder1_dropSccj" style="width:149px;">
						<option value=""></option>
						<option value="2">保定朝雄电气化电力器材有限公司1</option>
						<option value="3">宝鸡器材厂</option>
						<option value="4">沧州凯达铁路电气化器材有限公司</option>
						<option value="5">常州飞捷</option>
						<option value="6">常州武进恒通金属钢丝公司</option>
						<option value="7">德国nkt电缆股份有限公司</option>
						<option value="8">德国安凯特</option>
						<option value="9">德国西门子公司</option>
						<option value="10">阜新市电缆厂</option>
						<option value="11">杭州塘栖钢丝绳厂</option>
						<option value="12">杭州万胜中兴钢缆有限公司</option>
						<option value="13">河北邢台电缆有限责任公司</option>
						<option value="14">河北邢台鑫辉铜业</option>
						<option value="15">济宁钢丝绳总厂</option>
						<option value="16">江苏常州安凯特电缆有限公司</option>
						<option value="17">江苏常州斯凯特电车线厂</option>
						<option value="18">江苏江阴市电工合金有限公司</option>
						<option value="19">江荫市合金铜材厂</option>
						<option value="20">江阴市电工合金有限公司</option>
						<option value="21">辽宁宝林集团大连金州电缆有限公司</option>
						<option value="22">马鞍山鼎泰科技公司</option>
						<option value="23">日本NEC公司</option>
						<option value="24">山东电车线厂</option>
						<option value="25">山东泰安电车线厂</option>
						<option value="26">山东烟台</option>
						<option value="27">上海电缆厂</option>
						<option value="28">上海珊欣铜业有限公司</option>
						<option value="29">沈阳北恒厂</option>
						<option value="30">沈阳北恒电车线制造有限公司</option>
						<option value="31">沈阳北恒电缆集团</option>
						<option value="32">沈阳北恒日立铜材有限公司</option>
						<option value="33">沈阳北恒铜业有限公司</option>
						<option value="34">沈阳阜新电缆厂</option>
						<option value="35">泰安电车线厂</option>
						<option value="36">泰安集团</option>
						<option value="37">泰安泰山电车线有限公司</option>
						<option value="38">塘栖上缆厂</option>
						<option value="39">无锡太湖铜材厂</option>
						<option value="40">西门子公司</option>
						<option value="41">湘潭电车线厂</option>
						<option value="42">湘潭电缆厂</option>
						<option value="43">刑台金晖铜业有限公司</option>
						<option value="44">刑台鑫辉铜业特种线材有限公司</option>
						<option value="45">邢台电缆厂</option>
						<option value="46">烟台金辉铜业有限公司</option>
						<option value="47">烟台鑫辉电缆厂</option>
						<option value="48">烟台鑫晖电车线厂</option>
						<option value="49">烟台鑫晖铜业有限公司</option>
						<option value="50">云南铜业古河电器有限公司</option>
					</select></td>
          </tr>
          <tr height=40px>
            <td><font size=2>线别</td><td><select name="ctl00$ContentPlaceHolder1$XbSelect1$Xbmc" onchange="javascript:setTimeout('__doPostBack(\'ctl00$ContentPlaceHolder1$XbSelect1$Xbmc\',\'\')', 0)" id="ctl00_ContentPlaceHolder1_XbSelect1_Xbmc" style="width:149px;">

					</select>
          </td>
          <td>规格型号</td>
          <td><select name="ctl00$ContentPlaceHolder1$dropGgxh" id="ctl00_ContentPlaceHolder1_dropGgxh" style="width:129px;">

					</select></td>
          <td>出厂日期</td>
          <td> <INPUT id=txtQsrq style="WIDTH: 149px" onfocus="setday(this)" name=txtQsrq ></td>
          </tr>      
          <tr height=40px>
            <td><font size=2>线路类型</td><td ><select name="ctl00$ContentPlaceHolder1$dropXllx" onchange="javascript:setTimeout('__doPostBack(\'ctl00$ContentPlaceHolder1$dropXllx\',\'\')', 0)" id="ctl00_ContentPlaceHolder1_dropXllx" style="width:150px;">
						<option value=""></option>
						<option value="007001">干线</option>
						<option value="007002">支线</option>
						<option value="007003">枢纽</option>
						<option value="007004">专用线</option>

					</select></td>
			  <td>供电方式</td> 
          <td><select name="ctl00$ContentPlaceHolder1$dropGdfs" id="ctl00_ContentPlaceHolder1_dropGdfs" style="width:129px;">
						<option value=""></option>
						<option value="001001">AT</option>
						<option value="001002">BT</option>
						<option value="001003">直接供电</option>
						<option value="001004">直供加回流</option>

					</select></td> 
          <td>投运日期</td> 
          <td><INPUT id=txtQsrq style="WIDTH: 149px" onfocus="setday(this)" name=txtQsrq></td> 		
          </tr>            
          <tr height=40px>
          <td>年度</td> 
          <td><select name="ctl00$ContentPlaceHolder1$NdSelect1$Qsnd" onchange="javascript:setTimeout('__doPostBack(\'ctl00$ContentPlaceHolder1$NdSelect1$Qsnd\',\'\')', 0)" id="ctl00_ContentPlaceHolder1_NdSelect1_Qsnd" style="width:149px;">
							<option selected="selected" value="2009">2008</option>

						</select></td>    
		  <td></td>
		  <td></td>
		  <td> <input type="button" name="ctl00$ContentPlaceHolder1$btnOk" value="查询"  id="ctl00_ContentPlaceHolder1_btnOk" class="blueButtonCss" style="width:57px;" /></td>
		  <td><input type="button" name="ctl00$ContentPlaceHolder1$btnAdd" value="添加" id="ctl00_ContentPlaceHolder1_btnAdd" class="blueButtonCss" style="width:57px;" /></td>     
          </tr>             
        </tbody>
        </table>        
     </div >
      
      <div style="position:absolute;left:10px;top:235px;width:100%" >        
         <font size=2 color="blue"><b>变电所倒闸操作命令:</font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="button" style="width:70px" value="删除">&nbsp;&nbsp;&nbsp; <input type="button" style="width:70px" value="设备调整">    
     </div> 
    <div style="position:absolute;left:10px;top:260px;width:100%;height:250px;overflow-x:auto;overflow-y:auto">       
        <table id="mytable" style="WIDTH:100%" cellSpacing=0 cellPadding=0 border=0>
        <tbody>
          <tr>
            <td>选择</td><td>工区</td><td>区间（站场）</td><td>线别名称</td><td>线路类型</td><td>设备名称</td><td>材质</td><td>规格型号</td><td>单位</td><td>数量</td><td>支柱号</td><td>生产厂家</td><td>出厂序号</td><td>悬挂类型</td><td>供电方式</td><td>出厂日期</td><td>投运日期</td><td>备注</td><td>修改</td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td><select style="width:80px"><option></option>
            </select> </td>
            <td><select style="width:80px"><option></option>
            </select> </td>
            <td><select style="width:80px"><option></option>
            </select> </td>
            <td><select style="width:80px"><option></option>
            </select> </td>
            <td><select style="width:80px"><option></option>
            </select> </td>
            <td><select style="width:80px"><option></option>
            </select> </td>
            <td><select style="width:80px"><option></option>
            </select> </td>
            <td><input type="text" style="width:40px"></td>
            <td><input type="text" style="width:30px"> </td>
            <td><input type="text" style="width:50px"></td>
            <td><select style="width:80px"><option></option>
            </select> </td>
            <td><input type="text" style="width:80px"><br></td>
            <td><select style="width:80px"><option></option>
            </select> </td>
            <td><select style="width:80px"><option></option>
            </select> </td>
            <td><input type="text" style="width:80px"></td>
            <td><input type="text" style="width:80px"></td>
            <td><input type="text" style="width:80px"></td>
            <td><a href="#">保存</a> <a href="#">取消</a></td>          
          </tr>
         <tr>
            <td><input type="checkbox"></td>
            <td>长沙接触网工区</td>
            <td>长沙站</td>
            <td>武广客运专线</td>
            <td>干线</td>
            <td>隔离开关</td>
            <td>带接地刀闸</td>
            <td>手动隔离开关</td>
            <td>台</td>
            <td>1</td>
            <td>45</td>
            <td>RIBE</td>
            <td>465</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>2009-03-01</td>
            <td>2009-03-26</td>
            <td>ge4</td>
            <td><a href="#">修改</a></td>           
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
              <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
              <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
              <td>&nbsp;</td>
            <td>&nbsp;</td>
        
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
              <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
              <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
              <td>&nbsp;</td>
            <td>&nbsp;</td>
         
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
              <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
              <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
              <td>&nbsp;</td>
            <td>&nbsp;</td>
         
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
              <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
              <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
              <td>&nbsp;</td>
            <td>&nbsp;</td>
          
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
              <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
              <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
              <td>&nbsp;</td>
            <td>&nbsp;</td>
         
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
              <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
              <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
              <td>&nbsp;</td>
            <td>&nbsp;</td>
          
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
              <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
              <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
              <td>&nbsp;</td>
            <td>&nbsp;</td>
       
          </tr>
        </tbody>
        </table>
        
     </div > 
   </form>
  </body>
</html>

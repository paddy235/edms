<%@ page language="java" import="java.util.*" pageEncoding="GB18030"%>


<html>
  <head>
    <title>����Ԥ֪ͨ</title>

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
         <font size=2 color="blue"><b>��ѯ����:</font>      
     </div>
      <div style="position:absolute;left:10px;top:30px;width:100%;height:200;overflow-x:hidden;overflow-y:auto">        
        <table id="mytable" style="WIDTH:100%" cellSpacing=0 cellPadding=0 border=0>
        <tbody>
          <tr height=40px>
            <td><font size=2>��λ����</td><td><input type="text" width="100%"></td>
            <td>�豸����</td><td><select name="ctl00$ContentPlaceHolder1$dropSbmc" onchange="javascript:setTimeout('__doPostBack(\'ctl00$ContentPlaceHolder1$dropSbmc\',\'\')', 0)" id="ctl00_ContentPlaceHolder1_dropSbmc" style="width:129px;">
						<option selected="selected" value=""></option>
						<option value="010100001">�Ӵ���</option>
						<option value="010200001">������</option>
						<option value="010300001">������</option>
						<option value="010400001">������</option>
						<option value="010500001">������</option>
						<option value="010600001">������</option>
						<option value="010700001">�ܿյ���</option>
						<option value="010900001">֧��</option>
						<option value="011000001">����</option>
						<option value="011100001">Ӳ���</option>
						<option value="011200001">���뿪��</option>
						<option value="011300001">�߲�</option>
						<option value="011400001">�����Ե��</option>
						<option value="011500001">�ֶξ�Ե��</option>
						<option value="011600001">�޽���</option>
						<option value="011700001">��Ե��</option>
						<option value="011800001">����ѹ����װ��</option>
						<option value="011900001">��Խ�Ӵ���������</option>
						<option value="012000001">����װ��</option>
						<option value="012100001">��Եê�ιؽ�</option>
						<option value="012200001">�Ǿ�Եê�ιؽ�</option>
						<option value="012300001">����ê��</option>
						<option value="012400001">������</option>
						<option value="012500001">��ѹ��</option>
						<option value="012600001">��ǿ��</option>
						<option value="012700001">������</option>
						<option value="012800001">�ݽ���</option>
						<option value="013000001">�������</option>
						<option value="013100001">���</option>
						<option value="013200001">����Ӵ����ҳ���</option>
						<option value="013300001">��Խ�Ӵ���������</option>
						<option value="013400001">����</option>
						<option value="013500001">�������ݲ���װ��</option>
						<option value="013600001">���ɿ���</option>
					</select></td>
			 <td>��������</td><td><select name="ctl00$ContentPlaceHolder1$dropXglx" id="ctl00_ContentPlaceHolder1_dropXglx" style="width:149px;">
						<option value=""></option>
						<option value="002001">ȫ��������</option>
						<option value="002002">�벹������</option>
						<option value="002003">������</option>

					</select></td>		
			   		
          </tr>
          <tr height=40px>
            <td><font size=2>���䣨վ����</td><td><select name="ctl00$ContentPlaceHolder1$QjzcSelect1$Qjzc" onchange="javascript:setTimeout('__doPostBack(\'ctl00$ContentPlaceHolder1$QjzcSelect1$Qjzc\',\'\')', 0)" id="ctl00_ContentPlaceHolder1_QjzcSelect1_Qjzc" style="width:149px;">
					</select></td>
		    <td>����</td>
		    <td> <select name="ctl00$ContentPlaceHolder1$dropCz" onchange="javascript:setTimeout('__doPostBack(\'ctl00$ContentPlaceHolder1$dropCz\',\'\')', 0)" id="ctl00_ContentPlaceHolder1_dropCz" style="width:129px;">

					</select></td>
		    <td>��������</td>
		    <td><select name="ctl00$ContentPlaceHolder1$dropSccj" id="ctl00_ContentPlaceHolder1_dropSccj" style="width:149px;">
						<option value=""></option>
						<option value="2">�������۵����������������޹�˾1</option>
						<option value="3">�������ĳ�</option>
						<option value="4">���ݿ�����·�������������޹�˾</option>
						<option value="5">���ݷɽ�</option>
						<option value="6">���������ͨ������˿��˾</option>
						<option value="7">�¹�nkt���¹ɷ����޹�˾</option>
						<option value="8">�¹�������</option>
						<option value="9">�¹������ӹ�˾</option>
						<option value="10">�����е��³�</option>
						<option value="11">�������ܸ�˿����</option>
						<option value="12">������ʤ���˸������޹�˾</option>
						<option value="13">�ӱ���̨�����������ι�˾</option>
						<option value="14">�ӱ���̨�λ�ͭҵ</option>
						<option value="15">������˿���ܳ�</option>
						<option value="16">���ճ��ݰ����ص������޹�˾</option>
						<option value="17">���ճ���˹���ص糵�߳�</option>
						<option value="18">���ս����е繤�Ͻ����޹�˾</option>
						<option value="19">�����кϽ�ͭ�ĳ�</option>
						<option value="20">�����е繤�Ͻ����޹�˾</option>
						<option value="21">�������ּ��Ŵ������ݵ������޹�˾</option>
						<option value="22">��ɽ��̩�Ƽ���˾</option>
						<option value="23">�ձ�NEC��˾</option>
						<option value="24">ɽ���糵�߳�</option>
						<option value="25">ɽ��̩���糵�߳�</option>
						<option value="26">ɽ����̨</option>
						<option value="27">�Ϻ����³�</option>
						<option value="28">�Ϻ�ɺ��ͭҵ���޹�˾</option>
						<option value="29">�������㳧</option>
						<option value="30">��������糵���������޹�˾</option>
						<option value="31">����������¼���</option>
						<option value="32">������������ͭ�����޹�˾</option>
						<option value="33">��������ͭҵ���޹�˾</option>
						<option value="34">�������µ��³�</option>
						<option value="35">̩���糵�߳�</option>
						<option value="36">̩������</option>
						<option value="37">̩��̩ɽ�糵�����޹�˾</option>
						<option value="38">�������³�</option>
						<option value="39">����̫��ͭ�ĳ�</option>
						<option value="40">�����ӹ�˾</option>
						<option value="41">��̶�糵�߳�</option>
						<option value="42">��̶���³�</option>
						<option value="43">��̨����ͭҵ���޹�˾</option>
						<option value="44">��̨�λ�ͭҵ�����߲����޹�˾</option>
						<option value="45">��̨���³�</option>
						<option value="46">��̨���ͭҵ���޹�˾</option>
						<option value="47">��̨�λԵ��³�</option>
						<option value="48">��̨���͵糵�߳�</option>
						<option value="49">��̨����ͭҵ���޹�˾</option>
						<option value="50">����ͭҵ�źӵ������޹�˾</option>
					</select></td>
          </tr>
          <tr height=40px>
            <td><font size=2>�߱�</td><td><select name="ctl00$ContentPlaceHolder1$XbSelect1$Xbmc" onchange="javascript:setTimeout('__doPostBack(\'ctl00$ContentPlaceHolder1$XbSelect1$Xbmc\',\'\')', 0)" id="ctl00_ContentPlaceHolder1_XbSelect1_Xbmc" style="width:149px;">

					</select>
          </td>
          <td>����ͺ�</td>
          <td><select name="ctl00$ContentPlaceHolder1$dropGgxh" id="ctl00_ContentPlaceHolder1_dropGgxh" style="width:129px;">

					</select></td>
          <td>��������</td>
          <td> <INPUT id=txtQsrq style="WIDTH: 149px" onfocus="setday(this)" name=txtQsrq ></td>
          </tr>      
          <tr height=40px>
            <td><font size=2>��·����</td><td ><select name="ctl00$ContentPlaceHolder1$dropXllx" onchange="javascript:setTimeout('__doPostBack(\'ctl00$ContentPlaceHolder1$dropXllx\',\'\')', 0)" id="ctl00_ContentPlaceHolder1_dropXllx" style="width:150px;">
						<option value=""></option>
						<option value="007001">����</option>
						<option value="007002">֧��</option>
						<option value="007003">��Ŧ</option>
						<option value="007004">ר����</option>

					</select></td>
			  <td>���緽ʽ</td> 
          <td><select name="ctl00$ContentPlaceHolder1$dropGdfs" id="ctl00_ContentPlaceHolder1_dropGdfs" style="width:129px;">
						<option value=""></option>
						<option value="001001">AT</option>
						<option value="001002">BT</option>
						<option value="001003">ֱ�ӹ���</option>
						<option value="001004">ֱ���ӻ���</option>

					</select></td> 
          <td>Ͷ������</td> 
          <td><INPUT id=txtQsrq style="WIDTH: 149px" onfocus="setday(this)" name=txtQsrq></td> 		
          </tr>            
          <tr height=40px>
          <td>���</td> 
          <td><select name="ctl00$ContentPlaceHolder1$NdSelect1$Qsnd" onchange="javascript:setTimeout('__doPostBack(\'ctl00$ContentPlaceHolder1$NdSelect1$Qsnd\',\'\')', 0)" id="ctl00_ContentPlaceHolder1_NdSelect1_Qsnd" style="width:149px;">
							<option selected="selected" value="2009">2008</option>

						</select></td>    
		  <td></td>
		  <td></td>
		  <td> <input type="button" name="ctl00$ContentPlaceHolder1$btnOk" value="��ѯ"  id="ctl00_ContentPlaceHolder1_btnOk" class="blueButtonCss" style="width:57px;" /></td>
		  <td><input type="button" name="ctl00$ContentPlaceHolder1$btnAdd" value="���" id="ctl00_ContentPlaceHolder1_btnAdd" class="blueButtonCss" style="width:57px;" /></td>     
          </tr>             
        </tbody>
        </table>        
     </div >
      
      <div style="position:absolute;left:10px;top:235px;width:100%" >        
         <font size=2 color="blue"><b>�������բ��������:</font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="button" style="width:70px" value="ɾ��">&nbsp;&nbsp;&nbsp; <input type="button" style="width:70px" value="�豸����">    
     </div> 
    <div style="position:absolute;left:10px;top:260px;width:100%;height:250px;overflow-x:auto;overflow-y:auto">       
        <table id="mytable" style="WIDTH:100%" cellSpacing=0 cellPadding=0 border=0>
        <tbody>
          <tr>
            <td>ѡ��</td><td>����</td><td>���䣨վ����</td><td>�߱�����</td><td>��·����</td><td>�豸����</td><td>����</td><td>����ͺ�</td><td>��λ</td><td>����</td><td>֧����</td><td>��������</td><td>�������</td><td>��������</td><td>���緽ʽ</td><td>��������</td><td>Ͷ������</td><td>��ע</td><td>�޸�</td>
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
            <td><a href="#">����</a> <a href="#">ȡ��</a></td>          
          </tr>
         <tr>
            <td><input type="checkbox"></td>
            <td>��ɳ�Ӵ�������</td>
            <td>��ɳվ</td>
            <td>������ר��</td>
            <td>����</td>
            <td>���뿪��</td>
            <td>���ӵص�բ</td>
            <td>�ֶ����뿪��</td>
            <td>̨</td>
            <td>1</td>
            <td>45</td>
            <td>RIBE</td>
            <td>465</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>2009-03-01</td>
            <td>2009-03-26</td>
            <td>ge4</td>
            <td><a href="#">�޸�</a></td>           
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

<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<b></b>
<html xmlns="http://www.w3.org/1999/xhtml"> 
<head> 
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
 <title>�ޱ����ĵ�</title>
  <style type="text/css">
   #nav{ width:1000px; height:20px; font-size:11px; font-family:����} 
   #nav ul{ margin:0; padding:0; list-style-type:none; text-align:center}
   #nav ul li{ float:left;width:94px; height:25px;border:1px solid #11a3ff; background-color:#eeaea;} /*#nav ul li a,#nav ul li a:visited{ text-decoration:none; color:#000000; display:block} #nav ul li a:hover{ text-decoration:none}*/
   #content{ width:900px; height:300px; border:1px solid #11a3ff} 
   .moveon{ background-color:#11a3ff; color:#FFFFFF}
   .moveout{ background-color:#eaeaea; color:#000000} 
   .contentmoveon{ display:block}
   .contentmoveout{ display:none} 
  </style> 
  <script type="text/javascript"> 
  function tabnav(type,typecontent,num) { 
      for(i=1;i<10;i++) {
       if(i==num) { 
       document.getElementById(type+i).className="moveon"; 
       document.getElementById(typecontent+i).className="contentmoveon"; } 
       else { document.getElementById(type+i).className="moveout";
        document.getElementById(typecontent+i).className="contentmoveout"; } } } 
      </script> 
 </head> 
 <body> 
 <table>
 <tr>
 <td><font size="6" face="����">ϵ<br><br>ͳ<br><br>��<br><br>��</font></td>
 <td>
 <div id="nav"> <ul>
  <li id="tab1" class="moveon" onmouseover="tabnav('tab','content','1')"><font size="4"><b>���й���</b></font></li> 
  <li id="tab2" onmouseover="tabnav('tab','content','2')"><font size="4"><b>�豸���</b></font></li>
  <li id="tab3" onmouseover="tabnav('tab','content','3')"><font size="4"><b>���޸���</b></font></li> 
  <li id="tab4" onmouseover="tabnav('tab','content','4')"><font size="4"><b>��������</b></font></li>
  <li id="tab5" onmouseover="tabnav('tab','content','5')"><font size="4"><b>�����¹�</b></font></li>
  <li id="tab6" onmouseover="tabnav('tab','content','6')"><font size="4"><b>����Ԥ��</b></font></li>
  <li id="tab7" onmouseover="tabnav('tab','content','7')"><font size="4"><b>��Ϣ����</b></font></li>
  <li id="tab8" onmouseover="tabnav('tab','content','8')"><font size="4"><b>ͳ�Ʊ���</b></font></li>
  <li id="tab9" onmouseover="tabnav('tab','content','9')"><font size="4"><b>ϵͳά��</b></font></li>
  </ul> 
  </div> 
  <div id="content"> 
  <div id="content1" class="contentmoveon"> 
  <ul>
  <font size="4"> 
  <li>�ƻ���������ƻ����ռ����ܣ�·�ּƻ����ơ����͡���˼��´�ƻ���ѯ;���䡢������д����Ʊ��·���ռ�����ˡ��·�����Ʊ��</li> 
  <li>���������������������ϵͳ������������ˣ��е�����������飩ǩ������߱�����Ĳ�ѯ���ܡ�������ƣ��е����ա�ȷ��������֪ͨ�顣���յ����������֪ͨ��</li> 
  <li>�ճ��������Ӱ��¼��ֵ����־����բ��¼����բ����ص����Ӵ��������������ͤ�ȣ���</li>  
  </ul> 
  </div>  
  <div id="content2" class="contentmoveon"> 
  <ul>
  <font size="4"> 
  <li></li>  
  </ul> 
  </div> 
  <div id="content3" class="contentmoveout">
  <ul> 
  <font size="4"> 
  <li>������ϣ���Ҫ����Զ��ϵͳ������Ϻ��˹�������ϣ�</li> 
  <li>�������ޣ��ɷ�Ϊ�������ϴ������̡�������顢�����ų����ƶ����޷������������ޡ�������ɵȽ׶Σ�</li> 
  <li>���Ϸ��������棺ϵͳ���ݹ������޹��̼�¼�Զ������Ѽ�¼���ϱ�����д��Ŀ���ݣ����Ѵ�����ϱ�����з���������ɸ��ݹ��������������������ϰ����⣬�鵵��Ĺ��ϱ�����Ϊ��ʷ���ϴ��������Ͻ��б��ܺͲ��ģ��������Ź��ϴ������̵Ľ�����</li>  
  </ul>
  </div>
  <div id="content4" class="contentmoveout"> 
  <ul> 
  <font size="4"> 
  <li>�����豸�ֲ����ѯ��ǣ������ɲ鿴��·ͼ�����ߡ�������֧���ţ�������ֶ�ʾ��ͼ�������ⲿ�����ȣ���������ɲ鿴��·ͼ������·�������½�ͷλ�á��ⲿ��Դ��·�˺ţ�������Ԫ������ͼ�ȣ�</li> 
  <li>���޻��߹���ǣ������ɽ�����ҵ����������������ȵ�״̬�ͷֲ���ѯ����������ɽ�������������״̬�ͷֲ���ѯ���������������÷���������¹��ϲ����ǵ��豸��������״̬�ͷֲ���ѯ��</li> 
  <li>��������Ӵ�������ֵ����Ա����������ȫ�ȼ���ͨѶ��ʽ��</li>
  <li>�����ƶȹ���ʵ�ֲ������йع����ƶȵĲ�ѯ��</li>
  </ul> 
  </div>
  <div id="content5" class="contentmoveout"> 
  <ul> 
  <font size="4"> 
   <li>�¹ʰ��������ɡ��浵����ѯ��</li>
   <li>�������ݰ����¹�ʱ�䡢�¹ʷ��ࡢ�¹ʵص㡢�¹����β��š��¹ʷ�������ȡ�</li>
  </ul> 
  </div>
  <div id="content6" class="contentmoveout"> 
  <ul> 
  <font size="4"> 
   <li>�Թ�����ص�����Ԥ�����д浵����ѯ��������</li>
   <li>���а����Ӵ��߶��ߡ����������ߡ�֧���۶ϡ��ֶξ�Ե�����ϡ�����֧���ϸˡ������߶��ߡ����뿪�ع��ϡ���Ե�ӹ��ϡ������Ե�����ϡ�����¹ʾ�Ԯ��Ԥ���ȣ�</li>
   <li>ÿ������Ԥ������������У�������֯��������ʩ�ͽӴ����¹����ޱش����߲��ϣ�������֯��������ʩ�͹����ޱش����߲��ϡ�</li>
  </ul> 
  </div>
  <div id="content7" class="contentmoveout"> 
  <ul> 
  <font size="4"> 
  <li>Զ�����ݽӿڣ�ͨ����ȫ�����ʩ��ʵ����Զ��ϵͳ�İ�ȫ���룬ȷ�����ݵĵ����䣻</li>
  <li> �е����ݽӿڣ����ϻ��¹ʷ������ε��г���Ϣ��</li>
  <li>����ϵͳ�ӿڣ��¹ʷ�������Ͱ���ϵͳ��Ϣ����</li>
  <li>���豸ͼֽ����ϵͳ�����ݽӿڣ�</li>
  <li>���豸��������ϵͳ�����ݽӿڣ�</li>
  <li>���������Ӵ�����������¼��Ľӿڣ�</li>  
  </ul> 
  </div>
  <div id="content8" class="contentmoveout"> 
  <ul> 
  <font size="4"> 
  <li>�Թ�Ͻ�����ڹ����豸�͵����豸�������������ͳ�ƺͷ�������ɹ����ձ����ɡ��촰ͳ�ơ���բ�����ȡ����ȹ����й涨�ĸ��ֱ���Ļ��ܺͲ�ѯ���ܣ�</li>
  <li>ǣ�����磺����ͤΪ������λ����Ρ��֡����Զ�����������</li>
  <li>�������磺�Ա������Ϊ������λ����Ρ��֡����Զ�������ˣ�</li>
  <li>���������ǣ���������ͳ�Ʊ�����Ĺ�����բ����ǣ�����繭�����ϱ�ǣ�����繭�����Ϸ�����ǣ�������촰ͳ�Ʊ�ǣ�����硢ˮ���¹��ٱ��ȡ�</li>
  </ul> 
  </div>
  <div id="content9" class="contentmoveout"> 
  <ul> 
  <font size="4"> 
  <li>ϵͳ����Ա��ͨ��ϵͳά�����û�����ģ���ϵͳ�û�����֯�����ͽ�ɫȨ�޽��й���������û��������û���ɾ���û��������û�Ȩ�޵ȣ�</li>
  <li>����־�����У��԰���ϵͳ��¼��־���ؼ�������־���й����ѯ��</li>
  <li>���ֵ��������Ҫ�Ի����ֵ��ҵ���ֵ����ά�����磺����������ְ��ְ�ơ�ѧ����</li>
  <li>����Ӧ�û����������ã��绰���ż�¼��������ƽ̨�ȡ�</li>
  </ul> 
  </div>
  </div> 
  </td>
  </tr>
  </table>
  </body>
  </html>
<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<b></b>
<html xmlns="http://www.w3.org/1999/xhtml"> 
<head> 
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
 <title>无标题文档</title>
  <style type="text/css">
   #nav{ width:1000px; height:20px; font-size:11px; font-family:宋体} 
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
 <td><font size="6" face="隶书">系<br><br>统<br><br>简<br><br>介</font></td>
 <td>
 <div id="nav"> <ul>
  <li id="tab1" class="moveon" onmouseover="tabnav('tab','content','1')"><font size="4"><b>运行管理</b></font></li> 
  <li id="tab2" onmouseover="tabnav('tab','content','2')"><font size="4"><b>设备监控</b></font></li>
  <li id="tab3" onmouseover="tabnav('tab','content','3')"><font size="4"><b>抢修辅助</b></font></li> 
  <li id="tab4" onmouseover="tabnav('tab','content','4')"><font size="4"><b>基础数据</b></font></li>
  <li id="tab5" onmouseover="tabnav('tab','content','5')"><font size="4"><b>典型事故</b></font></li>
  <li id="tab6" onmouseover="tabnav('tab','content','6')"><font size="4"><b>抢修预案</b></font></li>
  <li id="tab7" onmouseover="tabnav('tab','content','7')"><font size="4"><b>信息共享</b></font></li>
  <li id="tab8" onmouseover="tabnav('tab','content','8')"><font size="4"><b>统计报表</b></font></li>
  <li id="tab9" onmouseover="tabnav('tab','content','9')"><font size="4"><b>系统维护</b></font></li>
  </ul> 
  </div> 
  <div id="content"> 
  <div id="content1" class="contentmoveon"> 
  <ul>
  <font size="4"> 
  <li>计划管理：班组计划的收集汇总，路局计划编制、报送、审核及下达；计划查询;车间、班组填写工作票，路局收集、审核、下发工作票；</li> 
  <li>调度命令管理：电调编制命令，系统传送命令，受令人（行调、电调、班组）签收命令，具备命令的查询功能。电调编制，行调接收、确认升降弓通知书。比照调度命令管理通知；</li> 
  <li>日常管理：交接班记录、值班日志、跳闸记录、倒闸命令（地调、接触网工区、变电所亭等）。</li>  
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
  <li>报告故障：主要包括远动系统报告故障和人工报告故障；</li> 
  <li>故障抢修：可分为启动故障处理流程、情况调查、故障排除、制定抢修方案、故障抢修、抢修完成等阶段；</li> 
  <li>故障分析及报告：系统根据故障抢修过程记录自动生成已记录故障报告填写项目内容，对已处理故障报告进行分类管理，并可根据故障情况将故障添加至故障案例库，归档后的故障报告作为历史故障处理档案资料进行保管和查阅，并代表着故障处理流程的结束。</li>  
  </ul>
  </div>
  <div id="content4" class="contentmoveout"> 
  <ul> 
  <font size="4"> 
  <li>供电设备分布与查询：牵引供电可查看线路图（沿线、场所、支柱号）、供电分段示意图及供电外部环境等；电力供电可查看线路图（电缆路径、电缆接头位置、外部电源线路杆号）、柜屏元件布置图等；</li> 
  <li>抢修机具管理：牵引供电可进行作业车、轨道车、汽车等的状态和分布查询；电力供电可进行抢修汽车的状态和分布查询，抢修照明、备用发电机、电缆故障测试仪等设备的数量、状态和分布查询；</li> 
  <li>班组管理：接触网工区值班人员的人数、安全等级和通讯方式；</li>
  <li>规章制度管理：实现部、局有关规章制度的查询。</li>
  </ul> 
  </div>
  <div id="content5" class="contentmoveout"> 
  <ul> 
  <font size="4"> 
   <li>事故案例的生成、存档、查询；</li>
   <li>案例内容包括事故时间、事故分类、事故地点、事故责任部门、事故分析报告等。</li>
  </ul> 
  </div>
  <div id="content6" class="contentmoveout"> 
  <ul> 
  <font size="4"> 
   <li>对供电相关的抢修预案进行存档、查询及分析；</li>
   <li>其中包括接触线断线、承力索断线、支柱折断、分段绝缘器故障、软横跨支柱断杆、供电线断线、隔离开关故障、绝缘子故障、分相绝缘器故障、配合事故救援等预案等；</li>
   <li>每种抢修预案调出后均附有：抢修组织、技术措施和接触网事故抢修必带工具材料，抢修组织、技术措施和故抢修必带工具材料。</li>
  </ul> 
  </div>
  <div id="content7" class="contentmoveout"> 
  <ul> 
  <font size="4"> 
  <li>远动数据接口：通过安全隔离措施，实现与远动系统的安全隔离，确保数据的单向传输；</li>
  <li> 行调数据接口：故障或事故发生区段的行车信息；</li>
  <li>安监系统接口：事故分析报告和安监系统信息共享；</li>
  <li>与设备图纸管理系统的数据接口；</li>
  <li>与设备履历管理系统的数据接口；</li>
  <li>与变电所、接触网工区数据录入的接口；</li>  
  </ul> 
  </div>
  <div id="content8" class="contentmoveout"> 
  <ul> 
  <font size="4"> 
  <li>对管辖区段内供电设备和电力设备的运行情况进行统计和分析，完成供电日报生成、天窗统计、跳闸分析等。调度规则中规定的各种报表的汇总和查询功能；</li>
  <li>牵引供电：以所亭为基本单位填报，段、局、部自动汇总审批；</li>
  <li>电力供电：以变配电所为基本单位填报，段、局、部自动汇总审核；</li>
  <li>具体包括：牵引供电电量统计表、供电的故障跳闸报表、牵引供电弓网故障表、牵引供电弓网故障分析表、牵引供电天窗统计表、牵引供电、水电事故速报等。</li>
  </ul> 
  </div>
  <div id="content9" class="contentmoveout"> 
  <ul> 
  <font size="4"> 
  <li>系统管理员可通过系统维护中用户管理模块对系统用户、组织机构和角色权限进行管理；如添加用户，查找用户，删除用户，授予用户权限等；</li>
  <li>在日志管理中，对包括系统登录日志、关键操作日志进行管理查询；</li>
  <li>在字典管理中主要对基础字典和业务字典进行维护，如：行政机构、职务、职称、学历等</li>
  <li>其他应用环境参数设置：电话拨号及录音、短信平台等。</li>
  </ul> 
  </div>
  </div> 
  </td>
  </tr>
  </table>
  </body>
  </html>
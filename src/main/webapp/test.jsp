<%@ page 
language="java"
contentType="text/html; charset=gb2312"
pageEncoding="GB2312"
autoFlush="true"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="mor.commons.util.UpLoadFile"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML><HEAD><TITLE>铁路供电调度管理指挥系统 EDMS</TITLE>
<META http-equiv=Content-Type content="text/html; charset=gb2312">


</HEAD>
<script language="vbscript">
Function str2asc(strstr) 
 str2asc = hex(asc(strstr)) 
End Function 
Function asc2str(ascasc) 
 asc2str = chr(ascasc) 
End Function
</script> 

<script language="javascript">
/*这里开始时UrlEncode和UrlDecode函数*/ 
function UrlEncode(str){ 
  var ret=""; 
  var strSpecial="!\"#$%&'()*+,/:;<=>?[]^`{|}~%"; 
  var tt= "";

  for(var i=0;i<str.length;i++){ 
   var chr = str.charAt(i); 
    var c=str2asc(chr); 
    tt += chr+":"+c+"n"; 
    if(parseInt("0x"+c) > 0x7f){ 
      ret+="%"+c.slice(0,2)+"%"+c.slice(-2); 
    }else{ 
      if(chr==" ") 
        ret+="+"; 
      else if(strSpecial.indexOf(chr)!=-1) 
        ret+="%"+c.toString(16); 
      else 
        ret+=chr; 
    } 
  } 
  return ret; 
} 
function UrlDecode(str){ 
  var ret=""; 
  for(var i=0;i<str.length;i++){ 
   var chr = str.charAt(i); 
    if(chr == "+"){ 
      ret+=" "; 
    }else if(chr=="%"){ 
     var asc = str.substring(i+1,i+3); 
     if(parseInt("0x"+asc)>0x7f){ 
      ret+=asc2str(parseInt("0x"+asc+str.substring(i+4,i+6))); 
      i+=5; 
     }else{ 
      ret+=asc2str(parseInt("0x"+asc)); 
      i+=2; 
     } 
    }else{ 
      ret+= chr; 
    } 
  } 
  return ret; 
}
</script>
<BODY style="margin:0" scroll="no">

<br>
<%
System.out.println(request.getParameter("url"));
DbTrade db=new DbTrade();
String sql="select * from tab";
java.sql.ResultSet rset=db.executeQuery(sql);
while(rset.next()){
	//out.println(rset.getString(1)+"<br>");
}
db.close();
%>
<h2 align="center">struts  测试jsp界面访问servlet</h2>

<form action="testAction.do?code=1" method=post>
<input type="submit" value="提交">
<a href="test.jsp?url=select * form table where a like 'dd%25'" target="_self">aa</a>
</form>
</body>
</html>

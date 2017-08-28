<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>  
  <%  String name = request.getParameter("id") ;
  		System.out.print(name+"lllllll");
    %>

    <title>图纸信息</title>
  </head>
  <body>
          <object id="TuPian" name="showdwf"     
          codebase="ftp://ftp.autodesk.com/pub/whip/whip.cab#4,0,42,102”(在没有插件时指定位置)"   
          width="100%" style="height: 100%">  
          <param   name="Filename"　value=""/>   
          <param   name="View"   value="100+200+300+400"/>   
          <param   name="NamedView"   value="view1"/>   
          <param   name="LayerOn"   value="layer1,layer2"/>   
          <param   name="LayerOff"   value="layer3"/>   
          <param   name="UserInterface"   value="on"/>   
          <param   name="BackColor"   value="255"/>  
          <embed   name="TuPian"   
              pluginspage="http://www.autodesk.com/products/whip" 
              width="100%"   
              height="100%"   
              src="<%=name %>"         
              view="100+200+300+400"   
              namedview="view1"     
          	  layeron="layer1,layer2"   
              layeroff="layer3"     
              userinterface="on"   
              backcolor="255">  
              
          </object>
  </body>
</html>

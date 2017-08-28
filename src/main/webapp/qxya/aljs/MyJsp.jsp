<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>   
<%@ page import="org.apache.commons.fileupload.*" %>     
<%@ page import="java.util.*" %>     
<%@ page import="java.util.Iterator" %>     
<%@ page import="java.io.File" %>    
<%   
  String temp=getServletContext().getRealPath("/")+"temp";   //临时目录    
  String loadpath=getServletContext().getRealPath("/")+"dir"; //上传文件存放目录
   
  DiskFileUpload fu = new DiskFileUpload();    
  fu.setSizeMax(1*1024*1024*1024);   // 设置允许用户上传文件大小,单位:字节    
  //fu.setSizeThreshold(409600);   // 设置最多只允许在内存中存储的数据,单位:字节    
  //fu.setRepositoryPath(temp); // 设置一旦文件大小超过getSizeThreshold()的值时数据存放在硬盘的目录    
  
  //开始读取上传信息    
  List fileItems = fu.parseRequest(request);    
  Iterator iter = fileItems.iterator(); // 依次处理每个上传的文件    
  
  String name = "";   
    FileItem itemi = (FileItem) iter.next();// 忽略其他不是文件域的所有表单信息 
        
    if (!itemi.isFormField()) {    
         name = itemi.getName();//获取上传文件名,包括路径  
           
         name=name.substring(name.lastIndexOf("\\")+1);//从全路径中提取文件名    
        // out.println(name);    
         long size = itemi.getSize();    
         if((name==null||name.equals("")) && size==0)    
         return;    
         //out.println(itemi.getName()+"    Size="+itemi.getSize()+"<br>");//输出上传文件信息    
       //System.out.println(name);   
         File fNew= new File(loadpath, "tempfile.txt");     
          
         itemi.write(fNew);     
  		out.println("{success:true,msg:'File was successfully uploaded.'}");   
 }
 else
 {System.out.println(itemi+"22");  }    
 %>  



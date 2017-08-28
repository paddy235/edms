<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="mor.commons.util.UpLoadFile"%>
<%@page import="java.util.Date"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>
<%@page import="org.apache.commons.fileupload.FileItem"%>
<%@page import="org.apache.commons.fileupload.FileUpload"%>
<%@page import="org.apache.commons.fileupload.FileUploadException"%>
<%@page import="org.apache.commons.fileupload.RequestContext"%>
 <%@page import="org.apache.commons.fileupload.disk.DiskFileItemFactory"%>
<%@page import="org.apache.commons.fileupload.servlet.ServletFileUpload"%>
<%@page import="org.apache.commons.fileupload.servlet.ServletRequestContext"%>
<%@page import="java.util.*"%>
<%@page import="java.io.*"%>
<%
System.out.println("开始进行修改……");

String xiu_id = request.getParameter("xiu_id");
String ZYZDSMC =new String(request.getParameter("ZYZDSMC_id").getBytes("ISO8859-1"),"GB2312");
 
String fbrq =new String(request.getParameter("FBRQ_id").getBytes("ISO8859-1"),"GB2312"); 
 

String gzzdPath = request.getParameter("tppath");
 
String sql_Upd="";
 
String Name="";
DbTrade db_connection=new DbTrade();
 
try {
   	int num=gzzdPath.lastIndexOf("\\");
	if(num>1)
	{   
	  //(id,CPSMSMC,FBRQ,ZYFL,CPLB,CPXH,SCCJ,CPYXJSTGCJ,SMSLJ)
   		String SavePath="jcsj\\sbzds\\zds\\";//用于存放上传文件的目录;
	   	String[] filePaths = null;
         //UpLoadFile upd=new UpLoadFile();
         //upd.FileUpload(request,SavePath,frmString.format(maxid));
        RequestContext ctx = new ServletRequestContext(request);  
        boolean isMultiPart = FileUpload.isMultipartContent(ctx);//必须是multi的表单模式才行
        System.out.println("content type: " + ctx.getContentType());
        if(isMultiPart){    
         DiskFileItemFactory factory = new DiskFileItemFactory();    
         factory.setSizeThreshold(1000 * 1024); // 设置保存到内存中的大小：1M    
         ServletFileUpload upload = new ServletFileUpload(factory);   
         upload.setSizeMax(500 * 1024 * 1024);// 设置最大上传文件的大小500M 
         List items = upload.parseRequest(ctx);//解析请求里的上传文件单元    
         
         if(items != null && items.size() > 0)
         {
        	 filePaths = new String[items.size()];
         }
         
         //初始化返回的文件名数组    
          Iterator it = items.iterator();    
          int flag = -1;
          while (it.hasNext()) 
          {      flag ++;      
          FileItem item = (FileItem) it.next();      
          boolean isForm = item.isFormField();//是否是表单域      
          if (!isForm) {       //如果不适表单域，则是文件上传       
          String fileName = item.getName();//获取上传的文件名    
              System.out.println(fileName); 
          if (!fileName.equals("")) {        //到达这个时候，上传文件所必须的条件都满足了，可以上传了，首先要给上传的文件起个名字       
           String writeFile = "" + System.currentTimeMillis();//以时间起个名字。        
           filePaths[flag] = writeFile;        
           System.out.println(flag + ": " + filePaths[flag]); 
           // System.out.println(fileName.substring(fileName.indexOf(".")+1)); 
           writeFile =request.getRealPath("/")+"jcsj\\qxlxt\\lxt\\"+ xiu_id+"."+fileName.substring(fileName.lastIndexOf(".")+1);//文件的全路径        
           System.out.println(writeFile);       
           File file = new File(writeFile); 
          
           try
           { 
           item.write(file);//上传文件 
           Name=xiu_id+"."+fileName.substring(fileName.lastIndexOf(".")+1);     
           }catch(Exception ex)
           {
               System.out.println("上传文件失败：" + ex.getMessage());
           }}}}}
           
	   	sql_Upd="update Z_JCSJ_qxlxt set ZYZDSMC='"+ZYZDSMC+"',fbrq=to_date('"+fbrq+"','yyyy-MM-dd'),GZZDLJ='"+Name+"' where ID='"+xiu_id+"'";
	}
	else
	{
    		sql_Upd="update Z_JCSJ_qxlxt set ZYZDSMC='"+ZYZDSMC+"',fbrq=to_date('"+fbrq+"','yyyy-MM-dd') where ID='"+xiu_id+"'";
	}
    if(Name!=""||(num<2&&Name==""))
	{
    	
		System.out.println(sql_Upd);
		db_connection.executeUpdate(sql_Upd);
		db_connection.close();
    	out.print("{success:true,msg:'修改成功！'}");
    	 
    }
} 

catch(Exception ex) {
 System.out.println("修改失败！"+ex.getMessage() );
}

%>

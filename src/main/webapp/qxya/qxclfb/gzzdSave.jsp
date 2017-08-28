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
//String albm = request.getParameter("albm");
//String albm=session.getAttribute("albm").toString();

//id,gzzdmc,fbdw,fbrq,zyfl,nrfl,jbfl,gzzdjs,gzzdlj
String ZYZDSMC =new String(request.getParameter("ZYZDSMC_id").getBytes("ISO8859-1"),"GB2312");
 
String fbrq =new String(request.getParameter("FBRQ_id").getBytes("ISO8859-1"),"GB2312");  
 
 
Date nowDate =new Date();
SimpleDateFormat frmDate=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
DecimalFormat frmString=new DecimalFormat("0000"); 
//String nowDateTime=frmDate.format(nowDate);  
//连接数据库
DbTrade db_connection=new DbTrade();  
String sql="";

String Name="";
int bool=0,maxid=0;

//得到主键
	try 
	{
		sql="select max(id) maxid from Z_JCSJ_qxclfb ";
   		ResultSet rs=db_connection.executeQuery(sql);
   		while(rs.next()){
	   		maxid=rs.getInt("maxid")+1;
   		}   		
   		String SavePath="jcsj\\sbsms\\sms\\";//用于存放上传文件的目录;
		 
		System.out.println("insertsql="+request);   
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
           writeFile =request.getRealPath("/")+"jcsj\\qxclfb\\fbt\\"+ maxid+"."+fileName.substring(fileName.lastIndexOf(".")+1);//文件的全路径        
           System.out.println(writeFile);       
           File file = new File(writeFile); 
          
           try
           { 
           item.write(file);//上传文件 
           Name=maxid+"."+fileName.substring(fileName.lastIndexOf(".")+1);     
           }catch(Exception ex)
           {
               System.out.println("上传文件失败：" + ex.getMessage());
           }
           
          }     

         }
         }
         
         }
        
        
	   //	Name = new UpLoadFile().FileUpload(request,SavePath,frmString.format(maxid));
	   //	System.out.println("Name="+Name);
	   	
	   	
	   	
	   	
	   	
	   	
   		//boolean b=new UpLoadFile().FileUpload(tzpath,SavePath,Name);
		//插入数据
		if(!Name.equals(""))
		{
		sql="insert into Z_JCSJ_qxclfb(id,ZYZDSMC,fbrq,GZZDLJ) values('"+maxid+"','"+ZYZDSMC+"',to_date('"+fbrq+"','yyyy-MM-dd'),'"+Name+"')";
			
			
	
		//sql="insert into z_jcsj_tz(id,tzmc,xb,xzjg,fbrq,zyfl,nrfl,qjzc,th,tzjs,tzlj) values('"+maxid+"','"+tzmc+"','"+xb+"','"+xzjg+"',to_date('"+fbrq+"','yyyy-MM-dd'),'"+zyfl+"','"+nrfl+"','"+qjzc+"','"+th+"','"+tzjs+"','"+Name+"')";
    	db_connection.executeUpdate(sql);
    	db_connection.close();
    	bool=1;
    	}
    	else
    	{bool=3;}
    	
    	
    }
 	catch (Exception e) {bool=0;}

	System.out.println("insertsql="+sql);
//System.out.println(albm);

if(bool==1)
{
    out.print("{success:true,msg:'保存成功！'}");
}
else if(bool==3)
{out.print("{success:true,msg:'文件上传过大！'}");}
else
{
	out.print("{success:true,msg:'保存失败！'}");
}
%>

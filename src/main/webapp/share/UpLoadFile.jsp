<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="java.io.*"%>   
<%!
public boolean FileUpload(String FilePath,String SavePath,String Name)
{
	try
	{
		System.out.println("FilePath  "+FilePath);  
		System.out.println("SavePath  "+SavePath); 
		System.out.println("Name  "+Name); 
		String fileName = FilePath.substring(FilePath.lastIndexOf("\\")+1);   
		String extfile = fileName.substring(fileName.indexOf("."));   
		if(extfile.toLowerCase().equals(".jpg"))
		{	
			extfile=".JPG";
		}
													
		String uploadPath=this.getServletContext().getRealPath("/")+SavePath; //用于存放上传文件的目录;
		System.out.println("开始进行文件上传");         
		System.out.println("uploadPath  "+uploadPath+Name+extfile); 	
		OutputStream ot = new FileOutputStream(uploadPath+Name+extfile);
		
		int size = 0; 
		byte[] Buffer = new byte[6096];  
			  	
	    InputStream in=new FileInputStream(FilePath); 
	    System.out.println(FilePath);
	    while((size = in.read(Buffer)) != -1)    
        {    
             //System.out.println(size);    
             ot.write(Buffer,0,size);    
        }               
	    in.close();     
	    ot.close();     
	    System.out.println("文件上传成功！"); 
	    
	    return true;
	}
	catch(Exception e)
	{
	 	return false;
	}   
}
%>




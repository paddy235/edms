<%@ page import="java.sql.*"%>
<%
    Class.forName("oracle.jdbc.driver.OracleDriver").newInstance();   
	String dbUrl="jdbc:oracle:thin:@localhost:1521:EMIS"; 
	String dbUser="EDMS"; 
	String dbPassword="EDMS"; 
	Connection conn = DriverManager.getConnection(dbUrl,dbUser,dbPassword);
	Statement stmt=conn.createStatement();  
	//Statement Stmt1 = conn.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE,ResultSet.CONCUR_READ_ONLY);

%>

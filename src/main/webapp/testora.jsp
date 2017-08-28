<%@page contentType="text/html;charset=gb2312"%>
<%@page import="java.sql.*"%>
<%
    String result = ""; // 查询结果字符串
    String sql = "select * from tabs"; 
    String url ="jdbc:oracle:thin:@//10.40.176.40:1521/tmisprod.sstl.cn";
    String username = "edms"; // 用户名
    String password = "edms"; //密码
    Class.forName("oracle.jdbc.driver.OracleDriver").newInstance();
    Connection conn =DriverManager.getConnection(url, username, password); 
    Statement stmt = conn.createStatement();
    ResultSet rs = stmt.executeQuery(sql);
    while ( rs.next() ) {
    result += "\n 表名：" +rs.getString(1) + "<BR>";
    }
    rs.close(); // 关闭结果集
    stmt.close(); // 关闭执行语句对象
    conn.close(); // 关闭与数据库的连接
%>
<HTML>
<BODY>
<%=result%>
</BODY>
</HTML>

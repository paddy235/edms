<%@page contentType="text/html;charset=gb2312"%>
<%@page import="java.sql.*"%>
<%
    String result = ""; // ��ѯ����ַ���
    String sql = "select * from tabs"; 
    String url ="jdbc:oracle:thin:@//10.40.176.40:1521/tmisprod.sstl.cn";
    String username = "edms"; // �û���
    String password = "edms"; //����
    Class.forName("oracle.jdbc.driver.OracleDriver").newInstance();
    Connection conn =DriverManager.getConnection(url, username, password); 
    Statement stmt = conn.createStatement();
    ResultSet rs = stmt.executeQuery(sql);
    while ( rs.next() ) {
    result += "\n ������" +rs.getString(1) + "<BR>";
    }
    rs.close(); // �رս����
    stmt.close(); // �ر�ִ��������
    conn.close(); // �ر������ݿ������
%>
<HTML>
<BODY>
<%=result%>
</BODY>
</HTML>

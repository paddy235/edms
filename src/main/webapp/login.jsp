<%@ page
        language="java"
        contentType="text/html; charset=gb2312"
        pageEncoding="GB2312"
        autoFlush="true"
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML>
<HEAD><TITLE>中国神华神朔铁路分公司供电调度管理信息系统</TITLE>
    <META http-equiv=Content-Type content="text/html; charset=gb2312">
    <style type="text/css">
        <!--
        .td_border1 {
            BORDER-COLLAPSE: collapse;
            BORDER-BOTTOM: solid windowtext .5pt;
            BORDER-LEFT: none;
            BORDER-RIGHT: none;
            BORDER-TOP: solid windowtext .5pt;

        }

        .user {
            BORDER-COLLAPSE: 3;
            BORDER-BOTTOM: none;
            BORDER-LEFT: none;
            BORDER-RIGHT: none;
            BORDER-TOP: none;
            border-color: #000000;
            font-size: 14px
        }

        .pwd {
            BORDER-COLLAPSE: collapse;
            BORDER-BOTTOM: none;
            BORDER-LEFT: none;
            BORDER-RIGHT: none;
            BORDER-TOP: none;
            border-color: #000000;
            font-size: 12px
        }

        -->
    </style>
    <script language="JavaScript">
        self.moveTo(0, 0)
        self.resizeTo(screen.availWidth, screen.availHeight)
    </script>
    <SCRIPT language=JavaScript type=text/JavaScript>
        flag = false;

        function loadfocus() {
            document.loginForm.userID.focus();
        }
        function passfocus() {
            document.loginForm.userPWD.focus();
        }
        function quxiao() {
            document.loginForm.userID.value = "";
            document.loginForm.userPWD.value = "";
            document.loginForm.userID.focus();
        }
        function nullpass() {
            if (document.loginForm.userPWD.value == "") {
                if (flag == true)
                    alert("请输入密码!");
                flag = true;
                document.loginForm.userPWD.focus();
                return false;
            }
        }
        function nulluser() {
            if (document.loginForm.userID.value == "") {
                alert("请输入用户名！");
                document.loginForm.userID.focus();
                return false;
            }
        }
        function check() {
            if (nulluser() == false) return false;
            if (nullpass() == false) return false;
            loginForm.submit();
        }
        function hc() {
            if (event.keyCode == 13) passfocus();
        }
        function tj() {
            if (event.keyCode == 13) check();
        }
    </SCRIPT>

</HEAD>
<BODY style="margin:0" onload="loadfocus()">
    <FORM name=loginForm onsubmit="" action="LoginManager" method=post>
        <table background="images/login_iamges/login-GDDD-new.jpg" width=1002 height=611 align="center" border="0" cellpadding="0" cellspacing="0">

            <tr align="center">
                <td height=168 colspan=2>&nbsp;</td>
            </tr>

            <tr align="center">
                <td width="58%" height=333>
                    <table width=200 height=55 align="right" border="0" cellpadding="0" cellspacing="0">
                        <tr align="left" height=30>
                            <td>
                                <input name="userID" type="text" size="25" class="user" onkeydown="hc()">
                            </td>
                        </tr>
                        <tr align="left">
                            <td>
                                <input name="userPWD" type="password" size="35" class="pwd" onkeydown="tj()">
                            </td>
                        </tr>
                    </table>
                </td>
                <td>
                    <table width=160 height=48 align="left" border="0" cellpadding="0" cellspacing="0">
                        <tr align="center">
                            <td width=48% height=49 valign="bottom">
                                <img src="images/login_iamges/queding.jpg" height="48" width="130" align="bottom" style="cursor:pointer;" onClick="return check()">
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

            <tr align="center">
                <td colspan=2>&nbsp;</td>
            </tr>

        </table>

        <%
            System.out.println("error_info" + (String) session.getAttribute("error_info"));
        %>
    </FORM>
</BODY>
</HTML>

<%@ page contentType="text/html; charset=gb2312" language="java" import="java.sql.*" errorPage="" %>
<%@page import="mor.commons.db.DbTrade" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <title>中国神华神朔铁路分公司供电调度管理信息系统</title>
    <meta http-equiv="Content-Type" content="text/html; charset=gb2312">

    <title></title>
    <STYLE>.navPoint {
        FONT-SIZE: 7pt;
        CURSOR: hand;
        FONT-FAMILY: Webdings
    }

    P {
        FONT-SIZE: 7pt
    }
    </STYLE>
    <style rel="stylesheet" type="text/css" media="all">
        <!--
        a:link, a:visited {
            text-decoration: none;
            color: #333333;
        }

        a:hover {
            text-decoration: none;
            color: #FF6600
        }

        #main {
            width: 400px;
            position: absolute;
            left: 600px;
            top: 100px;
            background: #EFEFFF;
            text-align: left
        }

        #ChatHead {
            text-align: right;
            padding: 3px;
            border: 1px solid #003399;
            background: #DCDCFF;
            font-size: 11px;
            color: #3366FF;
            cursor: move;
        }

        #ChatHead a:link, #ChatHead a:visited, {
            font-size: 14px;
            font-weight: bold;
            padding: 0 3px
        }

        -->
    </STYLE>
    <%
        //根据具体目录情况，修改myURL得值，例如当前页面在运行管理下，则myURL="../errorpage.jsp"
        String myURL = "errorpage.jsp";
        if (session.getAttribute("YHDM") == null) {
            System.out.println("连接过期，请重新登录");
            response.sendRedirect(myURL);
        }
        String menu = (String) request.getParameter("menu");
        String deft = (String) request.getParameter("deft");

    %>
    <script src="./tishi.js"></script>

    <script language="JavaScript">
        function switchSysBar() {

            if (switchPoint.innerText == 7) {
                switchPoint.innerText = 8
                document.all("frmTitle").style.display = "none";
                document.all("main").style.left = "10px";
                document.all("main").style.width = screen.width - 15;
            } else {
                switchPoint.innerText = 7
                document.all("frmTitle").style.display = "";
                document.all("main").style.left = "220px";
                document.all("main").style.width = screen.width - 225;
            }
        }
    </SCRIPT>

    <script language="javascript" type="text/javascript">
        <!--
        function $(d) {
            return document.getElementById(d);
        }
        function gs(d) {
            var t = $(d);
            if (t) {
                return t.style;
            } else {
                return null;
            }
        }
        function gs2(d, a) {
            if (d.currentStyle) {
                var curVal = d.currentStyle[a]
            } else {
                var curVal = document.defaultView.getComputedStyle(d, null)[a]
            }
            return curVal;
        }
        function ChatHidden() {
            gs("ChatBody").display = "none";
            gs("main").width = "10px";
            gs("main").height = "20px";
        }
        function ChatShow() {
            gs("ChatBody").display = "";
            if (document.all("frmTitle").style.display == "none")
                gs("main").width = screen.width - 15;
            else
                gs("main").width = screen.width - 225;
            gs("main").height = screen.height - 324;

        }
        function ChatClose() {
            gs("main").display = "none";
            ChatShow();
        }
        if (document.getElementById) {
            (function () {
                    if (window.opera) {
                        document.write("<input type='hidden' id='Q' value=' '>");
                    }

                    var n = 500;
                    var dragok = false;
                    var y, x, d, dy, dx;

                    function move(e) {
                        if (!e) e = window.event;
                        if (dragok) {
                            d.style.left = dx + e.clientX - x + "px";
                            d.style.top = dy + e.clientY - y + "px";
                            return false;
                        }
                    }

                    function down(e) {
                        if (!e) e = window.event;
                        var temp = (typeof e.target != "undefined") ? e.target : e.srcElement;
                        if (temp.tagName != "HTML" | "BODY" && temp.className != "dragclass") {
                            temp = (typeof temp.parentNode != "undefined") ? temp.parentNode : temp.parentElement;
                        }
                        if ('TR' == temp.tagName) {
                            temp = (typeof temp.parentNode != "undefined") ? temp.parentNode : temp.parentElement;
                            temp = (typeof temp.parentNode != "undefined") ? temp.parentNode : temp.parentElement;
                            temp = (typeof temp.parentNode != "undefined") ? temp.parentNode : temp.parentElement;
                        }

                        if (temp.className == "dragclass") {
                            if (window.opera) {
                                document.getElementById("Q").focus();
                            }
                            dragok = true;
                            temp.style.zIndex = n++;
                            d = temp;
                            dx = parseInt(gs2(temp, "left")) | 0;
                            dy = parseInt(gs2(temp, "top")) | 0;
                            x = e.clientX;
                            y = e.clientY;
//document.onmousemove = move;
                            return false;
                        }
                    }

                    function up() {
                        dragok = false;
                        document.onmousemove = null;
                    }

                    document.onmousedown = down;
                    document.onmouseup = up;

                })();
        }

        -->
    </script>
</head>

<body style="MARGIN: 0px" bgColor=#d4d0c8>
    <table align="center" width="100%" height="100%" border="0" cols=3 cellSpacing=0 cellPadding=0>
        <tr>
            <td width="209" height="100%" id="frmTitle">
                <iframe width="100%" height="100%" align="middle" id="menu" name="menu" src="<%=menu%>" scrolling="no" frameborder="0">
                </iframe>
            </td>

            <td width="2" height="100%" nowrap background="images/middle.gif" onclick=switchSysBar()><SPAN
                    class=navPoint id=switchPoint title=点击：显示/隐藏导航><FONT color=#000000 style="font-size:7pt">7</FONT></SPAN>
            </td>
            <td width="100%" height="100%">
                <iframe width="100%" height="100%" align="middle" id="contents" name="contents" src="<%=deft %>" scrolling="auto" frameborder="0">
                </iframe>
            </td>
        </tr>
    </table>
    <div id="main" class="dragclass" style="left:100px;top:1px;display:none">
        <div id="ChatHead">
            <a href="#" onclick="ChatHidden();">-</a>
            <a href="#" onclick="ChatShow();">+</a>
            <a href="#" onclick="ChatClose();">x</a>
        </div>
        <div id="ChatBody">
            <div id="ChatContent"></div>
            <div id="ChatBtn"></div>
            <iframe width="100%" height="100%" align="middle" id="sp" name="zbrz" src="" scrolling="auto" frameborder="0">
            </iframe>
        </div>
    </div>
</body>
<script language="javascript" type="text/javascript">

    function ShowDiv(url) {
        alert(document.body.clientWidth + "--" + document.body.offsetHeight + "--" + document.body.scrollHeight);
        document.all("main").style.left = "100px";
        document.all("main").style.top = "1px";
        document.all("main").style.width = document.body.clientWidth - 200;
        document.all("main").style.height = document.body.clientHeight - 25;
        document.all("sp").src = url;
        document.all("main").style.display = "";
    }
    //ShowDiv("yxgl/xttz/xttz_look.jsp");

    function open_window(url, thisWidth, thisHeight, scrollbar) {
//打开一居中窗口
        var left = 0;
        var top = 0;
        window.open(url, "",
            "left=" + left + ",top=" + top + ",height=" + thisHeight + ",width=" + thisWidth + ",toolbar=no,location=no,directories=no,menubar=no,scrollbars=" + scrollbar + ",resizable=yes,status=1,center:yes");

    };
</script>
</html>  

<%@ page contentType="text/html; charset=gb2312" language="java" import="java.sql.*" errorPage="" %>
<%@page import="mor.commons.db.DbTrade" %>

<html>
<head>
    <title>�й�����˷��·�ֹ�˾������ȹ�����Ϣϵͳ</title>
    <meta http-equiv="Content-Type" content="text/html; charset=gb2312">
    <meta http-equiv="refresh" content="60">
</head>
<SCRIPT language=JavaScript>
    <
    !--
        function CLASS_MSN_MESSAGE(id, width, height, caption, title, message, target, action) {
            this.id = id;
            this.title = title;
            this.caption = caption;
            this.message = message;
            this.target = target;
            this.action = action;
            this.width = width ? width : 200;
            this.width = 400;
            this.height = height ? height : 120;
            this.height = 300;
            this.timeout = 150;
            this.speed = 20;
            this.step = 1;
            this.right = screen.width - 1;
            this.bottom = screen.height;
            this.left = this.right - this.width;
            this.top = this.bottom - this.height;
            this.timer = 0;
            this.pause = false;
            this.close = false;
            this.autoHide = true;
        }

    /*
     *    ������Ϣ����
     */
    CLASS_MSN_MESSAGE.prototype.hide = function () {
        if (this.onunload()) {
            var offset = this.height > this.bottom - this.top ? this.height : this.bottom - this.top;
            var me = this;
            if (this.timer > 0) {
                window.clearInterval(me.timer);
            }
            var fun = function () {
                if (me.pause == false || me.close) {
                    var x = me.left;
                    var y = 0;
                    var width = me.width;
                    var height = 0;
                    if (me.offset > 0) {
                        height = me.offset;
                    }

                    y = me.bottom - height;

                    if (y >= me.bottom) {
//                    window.clearInterval(me.timer);
//                    me.Pop.hide();
                    } else {
                        me.offset = me.offset - me.step;
                    }
                    me.Pop.show(x, y, width, height);
                }
            }
            this.timer = window.setInterval(fun, this.speed)
        }
    }

    /*
     *    ��Ϣж���¼���������д
     */
    CLASS_MSN_MESSAGE.prototype.onunload = function () {
        return true;
    }
    /*
     *    ��Ϣ�����¼���Ҫʵ���Լ������ӣ�����д��
     *
     */
    CLASS_MSN_MESSAGE.prototype.oncommand = function () {
        //this.close = true;
        this.hide();
        //window.open("/index.html");

    }
    CLASS_MSN_MESSAGE.prototype.show = function () {
        var oPopup = window.createPopup(); //IE5.5+
        this.Pop = oPopup;

        var w = this.width;
        var h = this.height;

        var str = "<DIV style='BORDER-RIGHT: #455690 1px solid; BORDER-TOP: #a6b4cf 1px solid; Z-INDEX: 99999; LEFT: 0px; BORDER-LEFT: #a6b4cf 1px solid; WIDTH: " + w + "px; BORDER-BOTTOM: #455690 1px solid; POSITION: absolute; TOP: 0px; HEIGHT: " + h + "px; BACKGROUND-COLOR: #c9d3f3'>"
        str += "<TABLE style='BORDER-TOP: #ffffff 1px solid; BORDER-LEFT: #ffffff 1px solid' cellSpacing=0 cellPadding=0 width='100%' bgColor=#cfdef4 border=0>"
        str += "<TR>"
        str += "<TD style='FONT-SIZE: 12px;COLOR: #0f2c8c' width=30 height=24></TD>"
        str += "<TD style='PADDING-LEFT: 4px; FONT-WEIGHT: normal; FONT-SIZE: 12px; COLOR: #1f336b; PADDING-TOP: 4px' vAlign=center width='100%'>" + this.caption + "</TD>"
        str += "<TD style='PADDING-RIGHT: 2px; PADDING-TOP: 2px' vAlign=center align=right width=19>"
        str += "<SPAN title=�ر� style='FONT-WEIGHT: bold; FONT-SIZE: 12px; CURSOR: hand; COLOR: red; MARGIN-RIGHT: 4px' id='btSysClose' >��</SPAN></TD>"
        str += "</TR>"
        str += "<TR>"
        str += "<TD style='PADDING-RIGHT: 1px;PADDING-BOTTOM: 1px' colSpan=3 height=" + (h - 28) + ">"
        str += "<DIV style='BORDER-RIGHT: #b9c9ef 1px solid; PADDING-RIGHT: 8px; BORDER-TOP: #728eb8 1px solid; PADDING-LEFT: 8px; FONT-SIZE: 12px; PADDING-BOTTOM: 8px; BORDER-LEFT: #728eb8 1px solid; WIDTH: 100%; COLOR: #1f336b; PADDING-TOP: 8px; BORDER-BOTTOM: #b9c9ef 1px solid; HEIGHT: 100%'>" + this.title + "<br>"
        str += "<DIV style='WORD-BREAK: break-all' align=left><A href='javascript:void(0)' hidefocus=false id='btCommand'><FONT color=#ff0000>" + this.message + "</FONT></A><A href='http:' hidefocus=false id='ommand'><FONT color=#ff0000></FONT></A></DIV>"
        str += "</DIV>"
        str += "</TD>"
        str += "</TR>"
        str += "</TABLE>"
        str += "</DIV>"

        oPopup.document.body.innerHTML = str;
        this.offset = 0;
        var me = this;
        oPopup.document.body.onmouseover = function () {
            me.pause = true;
        }
        oPopup.document.body.onmouseout = function () {
            me.pause = false;
        }
        var fun = function () {
            var x = me.left;
            var y = 0;
            var width = me.width;
            var height = me.height;
            if (me.offset > me.height) {
                height = me.height;
            } else {
                height = me.offset;
            }
            y = me.bottom - me.offset;
            if (y <= me.top) {
                me.timeout--;
                if (me.timeout == 0) {
//                window.clearInterval(me.timer);
//                if(me.autoHide){
//                    me.hide();
//                }
                }
            } else {
                me.offset = me.offset + me.step;
            }
            me.Pop.show(x, y, width, height);
        }

        this.timer = window.setInterval(fun, this.speed)
        var btClose = oPopup.document.getElementById("btSysClose");
        btClose.onclick = function () {
            me.close = true;
            me.hide();
        }

        var btCommand = oPopup.document.getElementById("btCommand");
        btCommand.onclick = function () {
            me.oncommand();
        }
        var ommand = oPopup.document.getElementById("ommand");
        ommand.onclick = function () {
            //this.close = true;
            me.hide();
            window.open(ommand.href);
        }
    }
    /**//*
     ** �����ٶȷ���
     **/
    CLASS_MSN_MESSAGE.prototype.speed = function (s) {
        var t = 20;
        try {
            t = praseInt(s);
        } catch (e) {
        }
        this.speed = t;
    }
    /**//*
     ** ���ò�������
     **/
    CLASS_MSN_MESSAGE.prototype.step = function (s) {
        var t = 1;
        try {
            t = praseInt(s);
        } catch (e) {
        }
        this.step = t;
    }

    CLASS_MSN_MESSAGE.prototype.rect = function (left, right, top, bottom) {
        try {
            this.left = left != null ? left : this.right - this.width;
            this.right = right != null ? right : this.left + this.width;
            this.bottom = bottom != null ? (bottom > screen.height ? screen.height : bottom) : screen.height;
            this.top = top != null ? top : this.bottom - this.height;
        } catch (e) {
        }
    }

</SCRIPT>

<body bgcolor="#FFFFFF" text="#000000">

</body>
</noframes>
</html>
<%
    String msg = "";
    int count = 0;
//�жϵ�ǰ�û�id���������Ҫ
    String userDwid = "";
    String userdj = "";
    if ((String) session.getAttribute("DWDM") != null) {
        userDwid = (String) session.getAttribute("DWDM");
        userdj = (String) session.getAttribute("DWJB");
    } else {
        response.sendRedirect("login.jsp");
    }
    try {
        DbTrade db_connection = new DbTrade();
        //������Ҫ��ʾ�Ĵ��뿪ʼ
        //Ĭ���ǵ��̨��¼�ˣ����Ĵ�������2��5��5�ǹ鵵��ʾ
        String bdsyddzml_query = "select count(*) from Z_YXGL_CMD_DZ where mlzt='1112'";
        String sql_Query = "select count(*) from z_yxgl_zyjh s,J_GYJC_GQZD t  where s.dwid=t.gqdm and t.ddtdm like '" + userDwid + "%'and (zt=2 or zt=5)";
        if (userDwid.equalsIgnoreCase("021")) { //021�ǵ�����ε�¼�ˣ����Ĵ�������3
            bdsyddzml_query = "select count(*) from Z_YXGL_CMD_DZ where mlzt='2' and ltype='1'";
            sql_Query = "select count(*) from z_yxgl_zyjh s,J_GYJC_GQZD t  where s.dwid=t.gqdm and t.ddtdm like '" + userDwid + "%'and zt=3";
        }
        if (userDwid.equalsIgnoreCase("023")) { //023���е����ε�¼�ˣ����Ĵ�������4
            sql_Query = "select count(*) from z_yxgl_zyjh s  where  zt=4";
        }
        String bdszyml_query = "select count(*) from z_yxgl_zyjh s  where  zt=42";
        String gqzyml_query = "select count(*) from z_yxgl_zyjh s  where  zt=42";
        String bdsdzml_query = "select count(*) from z_yxgl_zyjh s  where  zt=42";

        //����Ʊ
        String bdsdyzgzp_query = "select count(*) from z_yxgl_zyjh s  where  zt=42";
        if (userdj.equals("3") && !userDwid.equals("021") && !userDwid.equals("023")) {
            bdsdyzgzp_query = "select count(*) from z_yxgl_gzpbds_green s  where  gzpzt = '1'";
        }
        int zyjh = 0;
        //�����������
        int bdszyml = 0;
        int gqzyml = 0;
        int bdsdzml = 0;
        int bdsyddzml = 0;
        //����Ʊ����
        int bdsdyzgzp = 0;
        //System.out.println("�Զ���ʾ-----"+sql_Query);
        java.sql.ResultSet listResultSet = db_connection.executeQuery(sql_Query);
        while (listResultSet.next()) {
            zyjh = listResultSet.getInt(1);
        }

        java.sql.ResultSet listResultSet1 = db_connection.executeQuery(bdszyml_query);
        while (listResultSet1.next()) {
            bdszyml = listResultSet1.getInt(1);
        }

        java.sql.ResultSet listResultSet2 = db_connection.executeQuery(gqzyml_query);
        while (listResultSet2.next()) {
            gqzyml = listResultSet2.getInt(1);
        }

        java.sql.ResultSet listResultSet3 = db_connection.executeQuery(bdsdzml_query);
        while (listResultSet3.next()) {
            bdsdzml = listResultSet3.getInt(1);
        }

        java.sql.ResultSet listResultSet4 = db_connection.executeQuery(bdsyddzml_query);
        while (listResultSet4.next()) {
            bdsyddzml = listResultSet4.getInt(1);
        }
        //�������һ�ֹ���Ʊ
        java.sql.ResultSet listResultSet_bdsdyzgzp = db_connection.executeQuery(bdsdyzgzp_query);
        while (listResultSet_bdsdyzgzp.next()) {
            bdsdyzgzp = listResultSet_bdsdyzgzp.getInt(1);
        }
        if (zyjh > 0) {
            count++;
            msg = "���д�����Ĺ����ƻ�(" + zyjh + ")!<br/>";
        }
        if (bdszyml > 0) {
            count++;
            msg += "���д�����ı������ҵ����(" + bdszyml + ")!<br/>";
        }
        if (gqzyml > 0) {
            count++;
            msg += "���д�����Ĺ�����ҵ����(" + gqzyml + ")!<br/>";
        }
        if (bdsdzml > 0) {
            count++;
            msg += "���д�����ı������բ����(" + bdsdzml + ")!<br/>";
        }
        if (bdsyddzml > 0) {
            count++;
            msg += "���д������Զ����բ����(" + bdsyddzml + ")!<br/>";
        }
        //�������һ�ֹ���Ʊ
        if (bdsdyzgzp > 0) {
            count++;
            msg += "���д�����ı������һ�ֹ���Ʊ(" + bdsdyzgzp + ")!<br/>";
        }
        if (msg.equals("")) {
            msg = "û����ʾ��Ϣ";
        }
        //������Ҫ��ʾ�Ĵ������
        db_connection.close();
    } catch (Exception ex) {
        System.out.println("�Զ�������ʾ����-----" + ex);
    }
%>
<SCRIPT language=JavaScript>
    var count =<%=count%>;

    var msg = "<%=msg%>";
    function ShowDiv(msg, count) {
        var MSG1 = new CLASS_MSN_MESSAGE("id", 210, 126, "�����ƻ���ʾ��", "���� " + count + " ����ʾ��Ϣ", msg);
        MSG1.rect(null, null, null, screen.height - 50);
        MSG1.speed = 1;
        MSG1.step = 2;
        MSG1.show();
    }
    if (count > 0) {
        ShowDiv(msg, count);
        document.write(
            '<EMBED name="sound" src="./images/alert.wav" loop="1" autostart="true" hidden=false width="0" height="0" ></EMBED>');
    }
</SCRIPT>
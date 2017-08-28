//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package mor.report;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

public class BeanPersist {
    private String[][] data = null;
    private String message = "";
    private Connection conn = null;

    public BeanPersist() {
    }

    public void setConn(Connection in_conn) {
        this.conn = in_conn;
    }

    public void closeConn() {
        try {
            if(this.conn != null) {
                this.conn.close();
            }
        } catch (SQLException var2) {
            this.message = var2.toString();
        }

    }

    public static void main(String[] args) {
        BeanPersist a = new BeanPersist();
        a.upData("AAADOsAAHAAAFDSAAV~DF3-12~11-10 12:30~11-11 18:30~6.0~1.0~1.0~~~~~~~~~~~");
    }

    public String save_data(String ymd, String sa_data) {
        this.parseData(sa_data);

        for(int i = 0; i < this.data.length; ++i) {
            String insert = this.getInsert(ymd);
            String delete = this.getDelete(ymd);

            for(int j = 0; j < this.data[i].length; ++j) {
                if(j == 0) {
                    String aa = this.data[i][0].substring(this.data[i][0].indexOf("<") + 1, this.data[i][0].indexOf(">"));
                    String[] bb = aa.split("@");
                    if(bb.length > 1) {
                        insert = insert + "'" + bb[0] + "','" + bb[1] + "',";
                        delete = delete + " and jwddm='" + bb[0] + "' and qddm='" + bb[1] + "' ";
                    }
                } else {
                    if(j == 1) {
                        this.data[i][j] = this.data[i][j].toUpperCase();
                        delete = delete + " and db001='" + this.data[i][j] + "'";
                    }

                    if(j == 2) {
                        this.data[i][j] = this.data[i][j].toUpperCase();
                    }

                    if(j > 0 && j < 5) {
                        insert = insert + "'" + this.data[i][j] + "',";
                    } else if(this.data[i][j].equalsIgnoreCase("")) {
                        insert = insert + "0,";
                    } else {
                        insert = insert + this.data[i][j] + ",";
                    }
                }
            }

            insert = insert.substring(0, insert.length() - 1) + ")";
            this.setData(delete, insert);
        }

        return this.message;
    }

    private void parseData(String in_data) {
        if(in_data == null) {
            this.message = "字符串为空";
        }

        String[] Lines = in_data.split("#");
        this.data = new String[Lines.length][];

        for(int i = 0; i < Lines.length; ++i) {
            String[] cell = Lines[i].split("~", -1);
            this.data[i] = new String[cell.length];

            for(int j = 0; j < cell.length; ++j) {
                this.data[i][j] = cell[j];
            }
        }

    }

    private String getInsert(String ymd) {
        String insert = "insert into jd_fj_cltj (zcrq,jwddm,qddm,";

        for(int m = 1; m < 18; ++m) {
            if(m < 10) {
                insert = insert + "DB00" + m + ",";
            } else {
                insert = insert + "DB0" + m + ",";
            }
        }

        insert = insert + "DB018) VALUES('" + ymd + "',";
        return insert;
    }

    private String getDelete(String ymd) {
        String delete = "delete  from jd_fj_cltj where zcrq='" + ymd + "'";
        return delete;
    }

    private void setData(String delsql, String irtsql) {
        try {
            Statement statement = this.conn.createStatement();
            statement.execute(delsql);
            statement.execute(irtsql);
            statement.close();
        } catch (SQLException var4) {
            this.message = var4.toString();
        }

    }

    public void delData(String rowid) {
        String delstr = "delete from jd_fj_cltj where rowid='" + rowid + "'";

        try {
            Statement statement = this.conn.createStatement();
            statement.execute(delstr);
            statement.close();
        } catch (SQLException var4) {
            this.message = var4.toString();
        }

    }

    public void upData(String update_sql) {
        String[] Line = update_sql.split("~");
        System.out.println(Line.length);
        String str = "";
        if(Line.length == 18) {
            str = this.getUp(Line);
            System.out.println(str);

            try {
                Statement statement = this.conn.createStatement();
                statement.execute(str);
                statement.close();
            } catch (SQLException var5) {
                this.message = var5.toString();
            }
        }

    }

    private String getUp(String[] Line) {
        String str = "update jd_fj_cltj set ";

        for(int i = 2; i < 19; ++i) {
            if(i < 10) {
                if(i < 5) {
                    str = str + "DB00" + i + "='" + Line[i - 1] + "',";
                } else if(Line[i - 1].equalsIgnoreCase("")) {
                    str = str + "DB00" + i + "=0,";
                } else {
                    str = str + "DB00" + i + "=" + Line[i - 1] + ",";
                }
            } else if(Line[i - 1].equalsIgnoreCase("")) {
                str = str + "DB0" + i + "=0,";
            } else {
                str = str + "DB0" + i + "=" + Line[i - 1] + ",";
            }
        }

        str = str.substring(0, str.length() - 1);
        str = str + " where rowid='" + Line[0] + "'";
        return str;
    }

    public String get_update_str(String cc) {
        String temp = "0";
        if(cc == null || cc.equalsIgnoreCase("")) {
            temp = "0";
        }

        try {
            int a = Integer.parseInt(cc.substring(cc.length() - 1, cc.length()));
            temp = String.valueOf(a % 2);
        } catch (Exception var6) {
            System.out.println("cc==" + cc);

            try {
                int a = Integer.parseInt(cc.substring(cc.length() - 2, cc.length() - 1));
                temp = String.valueOf(a % 2);
            } catch (Exception var5) {
                temp = "0";
            }
        }

        return temp;
    }
}

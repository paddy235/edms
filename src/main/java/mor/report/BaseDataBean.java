//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package mor.report;

import java.io.BufferedReader;
import java.io.FileReader;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.Hashtable;

public abstract class BaseDataBean {
    protected Connection conn;
    protected String FJCode = null;
    protected boolean Recalc = false;
    protected String LocalPath;
    protected String RQ;
    protected boolean MAXDATE;
    protected boolean SHIFT;
    protected Hashtable hash;
    protected Hashtable hash2;
    protected StringBuffer FormulaStr = null;
    protected int x1 = -1;
    protected int x2 = -1;
    protected int y1 = -1;
    protected int y2 = -1;
    public String QueryParam = "";
    protected String SubId = "";
    protected String[][] Data = null;
    protected String[][] preData = null;

    public BaseDataBean() {
    }

    public String getQueryParam() {
        return this.QueryParam;
    }

    public String getSubId() {
        return this.SubId;
    }

    public String getDateCell() {
        String s = (String)this.hash2.get("Date");
        if(s == null) {
            s = "3,2";
        }

        return s;
    }

    public boolean CanSave() {
        String s = (String)this.hash2.get("CanSave");
        boolean b = true;
        if(s != null) {
            b = s.equalsIgnoreCase("true");
        }

        return b;
    }

    public int getX1() {
        if(this.x1 != -1) {
            return this.x1;
        } else {
            this.x1 = Integer.parseInt((String)this.hash2.get("x1"));
            return this.x1;
        }
    }

    public int getY1() {
        if(this.y1 != -1) {
            return this.y1;
        } else {
            this.y1 = Integer.parseInt((String)this.hash2.get("y1"));
            return this.y1;
        }
    }

    public int getX2() {
        if(this.x2 != -1) {
            return this.x2;
        } else {
            this.x2 = Integer.parseInt((String)this.hash2.get("x2"));
            return this.x2;
        }
    }

    public int getY2() {
        if(this.y2 != -1) {
            return this.y2;
        } else {
            this.y2 = Integer.parseInt((String)this.hash2.get("y2"));
            return this.y2;
        }
    }

    public abstract int getID();

    public String getFJCode() {
        return this.FJCode;
    }

    public String getArea() {
        return this.getX1() + "," + this.getY1() + "," + this.getX2() + "," + this.getY2();
    }

    public String getCellFile() {
        return (String)this.hash2.get("CellFile");
    }

    public String getTableName() {
        return (String)this.hash2.get("TableName");
    }

    public boolean IsAutoCalc() {
        String s = (String)this.hash2.get("AutoCalc");
        boolean b = false;
        if(s != null) {
            b = s.equalsIgnoreCase("true");
        }

        return b;
    }

    protected void fillCell(StringBuffer buf, int x, int y) {
    }

    public String SettingCell() {
        StringBuffer buf = new StringBuffer();
        if(this.FormulaStr != null) {
            buf.append(F1.Parse(this.FormulaStr.toString()));
        }

        String focus = (String)this.hash2.get("Focus");
        if(focus == null) {
            focus = "2,5";
        }

        buf.append("DCellWeb1.MoveToCell(" + focus + ");\n");
        this.fillCell(buf, this.getX1(), this.getY1());
        return buf.toString();
    }

    protected abstract String getConfigFile();

    public void LoadConfig() {
        this.hash = new Hashtable();
        this.hash2 = new Hashtable();

        try {
            FileReader fileInStream = new FileReader(this.LocalPath + this.getConfigFile());
            BufferedReader dataInStream = new BufferedReader(fileInStream);
            byte sec = 0;

            String Line;
            while((Line = dataInStream.readLine()) != null) {
                if(Line.trim().length() != 0 && Line.charAt(0) != 35) {
                    if(Line.equalsIgnoreCase("[datamap]")) {
                        sec = 0;
                    } else if(Line.equalsIgnoreCase("[cell]")) {
                        sec = 1;
                    } else {
                        String[] pair = Line.split("=", 2);
                        if(Line.equalsIgnoreCase("[formula]")) {
                            this.FormulaStr = new StringBuffer();
                            sec = 2;
                        } else {
                            switch(sec) {
                            case 0:
                                this.hash.put(pair[1].trim(), pair[0].trim());
                                break;
                            case 1:
                                this.hash2.put(pair[0].trim(), pair[1].trim());
                                break;
                            case 2:
                                this.FormulaStr.append(Line + "\n");
                            }
                        }
                    }
                }
            }

            dataInStream.close();
            fileInStream.close();
        } catch (Exception var6) {
            var6.printStackTrace();
        }

    }

    protected String V2QS(Object[] v) {
        StringBuffer buf = new StringBuffer();

        for(int i = 0; i < v.length; ++i) {
            if(v[i] == null) {
                buf.append("''");
            } else {
                buf.append("'" + (String)v[i] + "'");
            }

            if(i < v.length - 1) {
                buf.append(",");
            }
        }

        return buf.toString();
    }

    protected String V2S(Object[] v) {
        StringBuffer buf = new StringBuffer();

        for(int i = 0; i < v.length; ++i) {
            buf.append((String)v[i]);
            if(i < v.length - 1) {
                buf.append(",");
            }
        }

        return buf.toString();
    }

    protected String[][] parseData(String s) {
        String[][] data = (String[][])null;
        if(s == null) {
            return null;
        } else {
            String[] Lines = s.split("#@");
            data = new String[Lines.length][];

            for(int i = 0; i < Lines.length; ++i) {
                String[] cell = Lines[i].split("!,", -1);
                data[i] = new String[cell.length];

                for(int j = 0; j < cell.length; ++j) {
                    data[i][j] = cell[j];
                }
            }

            return data;
        }
    }

    public void LoadData() {
    }

    public void SaveData(String oldData, String newData) {
    }

    protected void ExecuteProc() {
        String s = (String)this.hash2.get("ProcName");
        if(s != null) {
            if(s.trim().length() != 0) {
                s = "{ call " + s + " }";
                s = s.replaceAll("#RQ", this.RQ);
                if(this.FJCode != null) {
                    s = s.replaceAll("#FJ", this.FJCode);
                }

                try {
                    CallableStatement cst = this.conn.prepareCall(s);
                    cst.execute();
                } catch (Exception var4) {
                    var4.printStackTrace();
                }

            }
        }
    }

    public void setFJCode(String string) {
        this.FJCode = string;
    }

    public void setLocalPath(String string) {
        this.LocalPath = string;
    }

    public void setRecalc(boolean b) {
        this.Recalc = b;
    }

    public void setShift(boolean b) {
        this.SHIFT = b;
    }

    public boolean GetShift() {
        return this.SHIFT;
    }

    public void setMaxDate(boolean b) {
        this.MAXDATE = b;
    }

    public boolean getMaxDate() {
        return this.MAXDATE;
    }

    public void setConn(Connection connection) {
        this.conn = connection;
    }

    public void close() throws SQLException {
        this.conn.close();
    }

    public void setRQ(String string) {
        this.RQ = string;
    }

    public void setSubId(String string) {
        this.SubId = string;
    }

    public void LoadOther() {
    }
}

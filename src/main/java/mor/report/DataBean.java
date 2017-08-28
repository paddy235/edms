//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package mor.report;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.Vector;

public class DataBean extends BaseDataBean5 {
    private int _id;
    private String _filename;
    public Vector subtables = null;

    private String constructData(String[][] d, int x1, int y1, int x2, int y2) {
        StringBuffer s = new StringBuffer();

        for(int i = y1 - this.getY1(); i <= y2 - this.getY1(); ++i) {
            for(int j = x1 - this.getX1(); j <= x2 - this.getX1(); ++j) {
                s.append(d[i][j]);
                if(j < x2 - this.getX1()) {
                    s.append("!,");
                }
            }

            s.append("#@");
        }

        return s.toString();
    }

    public DataBean(int id, String filename) {
        this._id = id;
        this._filename = filename;
    }

    public int getID() {
        return this._id;
    }

    public String getConfigFile() {
        return this._filename;
    }

    public void LoadConfig() {
        super.LoadConfig();
        if(this.subtables != null) {
            for(int i = 0; i < this.subtables.size(); ++i) {
                ((DataBean)this.subtables.get(i)).LoadConfig();
            }

        }
    }

    public void isShift() {
        String shift = (String)this.hash2.get("SHIFT");
        if(shift == null) {
            shift = "false";
        }

        if(shift.equalsIgnoreCase("true")) {
            super.setShift(true);
        }

    }

    public void setMDate() {
        String md = (String)this.hash2.get("MAXDATE");
        if(md != null && !md.equalsIgnoreCase("")) {
            super.setMaxDate(true);
        } else {
            super.setMaxDate(false);
        }

    }

    public boolean getShift() {
        return super.GetShift();
    }

    public void setLocalPath(String string) {
        super.setLocalPath(string);
        if(this.subtables != null) {
            for(int i = 0; i < this.subtables.size(); ++i) {
                ((DataBean)this.subtables.get(i)).setLocalPath(string);
            }

        }
    }

    public void setRecalc(boolean b) {
        super.setRecalc(b);
        if(this.subtables != null) {
            for(int i = 0; i < this.subtables.size(); ++i) {
                ((DataBean)this.subtables.get(i)).setRecalc(b);
            }

        }
    }

    protected void fillCell(StringBuffer buf, int x, int y) {
        if(this.subtables == null) {
            super.fillCell(buf, x, y);
        } else {
            for(int i = 0; i < this.subtables.size(); ++i) {
                DataBean b = (DataBean)this.subtables.get(i);
                b.fillCell(buf, b.getX1(), b.getY1());
            }
        }

    }

    public void LoadData() {
        if(this.subtables == null) {
            super.LoadData();
        } else {
            for(int i = 0; i < this.subtables.size(); ++i) {
                ((DataBean)this.subtables.get(i)).LoadData();
            }
        }

    }

    public void SaveData(String oldData, String newData) {
        if(this.subtables == null) {
            super.SaveData(oldData, newData);
        } else {
            if(oldData.equals(newData)) {
                return;
            }

            String[][] _s1 = this.parseData(oldData);
            String[][] _s2 = this.parseData(newData);

            for(int i = 0; i < this.subtables.size(); ++i) {
                DataBean b = (DataBean)this.subtables.get(i);
                String s1 = this.constructData(_s1, b.getX1(), b.getY1(), b.getX2(), b.getY2());
                String s2 = this.constructData(_s2, b.getX1(), b.getY1(), b.getX2(), b.getY2());
                b.SaveData(s1, s2);
            }
        }

    }

    public void close() throws SQLException {
        super.close();
        if(this.subtables != null) {
            for(int i = 0; i < this.subtables.size(); ++i) {
                ((DataBean)this.subtables.get(i)).close();
            }

        }
    }

    public void setConn(Connection connection) {
        super.setConn(connection);
        if(this.subtables != null) {
            for(int i = 0; i < this.subtables.size(); ++i) {
                ((DataBean)this.subtables.get(i)).setConn(connection);
            }

        }
    }

    public void setRQ(String string) {
        super.setRQ(string);
        if(this.subtables != null) {
            for(int i = 0; i < this.subtables.size(); ++i) {
                ((DataBean)this.subtables.get(i)).setRQ(string);
            }

        }
    }
}

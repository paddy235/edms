//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package mor.report;

import java.sql.ResultSet;
import java.sql.Statement;

public abstract class BaseDataBean5 extends BaseDataBean4 {
    private String fjm = "";

    public BaseDataBean5() {
    }

    public void getHeader() {
        super.getHeader();
        if(this.FJCode != null) {
            if(this.RowKey != null) {
                for(int i = 0; i < this.RowKey.length; ++i) {
                    if(this.RowKey[i] != null) {
                        for(int j = 0; j < this.RowKey[i].length; ++j) {
                            if(this.RowKey[i][j] != null) {
                                this.RowKey[i][j] = this.RowKey[i][j].replaceAll("#FJ", this.FJCode);
                            }
                        }
                    }
                }

            }
        }
    }

    protected void fillCell(StringBuffer buf, int x, int y) {
        super.fillCell(buf, x, y);
        if(this.FJCode != null) {
            String fjcell = (String)this.hash2.get("FJMCell");
            if(fjcell != null) {
                buf.append("DCellWeb1.S(" + fjcell + ",0,\"" + this.fjm + "\")");
            }
        }
    }

    String getFJM() {
        String sql = "select fjjc from fjzd where fjdm=" + this.FJCode;

        try {
            Statement st = this.conn.createStatement();
            ResultSet rs = st.executeQuery(sql);
            if(rs.next()) {
                this.fjm = rs.getString(1);
            }
        } catch (Exception var4) {
            var4.printStackTrace();
        }

        return this.fjm;
    }

    public void LoadOther() {
        this.getFJM();
    }
}

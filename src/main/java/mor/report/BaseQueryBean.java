//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package mor.report;

import java.io.BufferedReader;
import java.io.FileReader;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Hashtable;
import java.util.Vector;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public abstract class BaseQueryBean {
    public Connection conn;
    public String LocalPath;
    protected Hashtable hash2;
    protected String[] ColNames;
    protected Hashtable ColName_Index;
    public Vector Params;
    private Vector Data;
    private int MatchCount;
    public String sql = null;

    public BaseQueryBean() {
    }

    public abstract String getPageUrl();

    protected abstract String getConfigFile();

    public void prepare() {
        this.sql = (String)this.hash2.get("Query");
        String s = (String)this.hash2.get("ColName");
        this.ColNames = s.split(",", -1);
        this.ColName_Index = new Hashtable();

        for(int i = 0; i < this.ColNames.length; ++i) {
            this.ColName_Index.put(this.ColNames[i], new Integer(i));
        }

        this.Params = new Vector();
        Pattern p = Pattern.compile("#(\\w*)");
        Matcher m = p.matcher(this.sql);

        while(m.find()) {
            this.Params.add(m.group(1));
        }

        this.Data = new Vector();
    }

    public void execute() {
        try {
            Pattern p = Pattern.compile("from", 2);
            Matcher m = p.matcher(this.sql);
            m.find();
            String s1 = this.sql.substring(0, m.end());
            String s2 = this.sql.substring(m.end());
            p = Pattern.compile("select (.*) from", 2);
            m = p.matcher(s1);
            m.find();
            String countSQL = "select count(*) from" + s2;
            Statement stm = this.conn.createStatement();
            System.out.println(countSQL);
            ResultSet rs = stm.executeQuery(countSQL);
            rs.next();
            this.MatchCount = rs.getInt(1);
            int limit = this.getLimit();
            stm.setFetchSize(limit);
            rs = stm.executeQuery(this.sql);
            int k = 0;

            while(rs.next()) {
                String[] cols = new String[this.ColNames.length];

                for(int i = 0; i < this.ColNames.length; ++i) {
                    cols[i] = rs.getString(i + 1);
                }

                this.Data.add(cols);
                ++k;
                if(k == limit) {
                    break;
                }
            }
        } catch (Exception var12) {
            var12.printStackTrace();
        }

    }

    public int getMatchCount() {
        return this.MatchCount;
    }

    public int getFetchCount() {
        return this.Data.size();
    }

    public int getParamCount() {
        return this.Params.size();
    }

    public int getColCount() {
        return this.ColNames.length;
    }

    public String getColName(int k) {
        return this.ColNames[k];
    }

    public String getParamName(int k) {
        return (String)this.Params.get(k);
    }

    public String getFieldValue(int row, int k) {
        if(this.Data != null && row >= 0 && row < this.Data.size()) {
            String[] cols = (String[])this.Data.get(row);
            return cols == null?null:cols[k];
        } else {
            return null;
        }
    }

    public String getFieldValue(int row, String FieldName) {
        int k = ((Integer)this.ColName_Index.get(FieldName)).intValue();
        return this.getFieldValue(row, k);
    }

    public int getLimit() {
        String s = (String)this.hash2.get("limit");
        return s == null?0:Integer.parseInt(s);
    }

    public void LoadConfig() {
        this.hash2 = new Hashtable();

        try {
            FileReader fileInStream = new FileReader(this.LocalPath + this.getConfigFile());
            BufferedReader dataInStream = new BufferedReader(fileInStream);
            byte sec = 0;

            String Line;
            while((Line = dataInStream.readLine()) != null) {
                if(Line.trim().length() != 0) {
                    if(Line.equalsIgnoreCase("[data]")) {
                        sec = 0;
                    } else {
                        String[] pair = Line.split("=", 2);
                        switch(sec) {
                        case 0:
                            this.hash2.put(pair[0].trim(), pair[1].trim());
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
            buf.append("'" + (String)v[i] + "'");
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
}

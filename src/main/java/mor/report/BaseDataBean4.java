//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package mor.report;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Statement;
import java.util.Enumeration;
import java.util.HashSet;

public abstract class BaseDataBean4 extends BaseDataBean {
    public String[][] RowKey;
    public String[] KeyName;

    public BaseDataBean4() {
    }

    public void getHeader() {
        String[] Header = ((String)this.hash2.get("RowHeader")).split(",", -1);
        this.RowKey = new String[Header.length][];

        for(int i = 0; i < Header.length; ++i) {
            if(Header[i] != null && Header[i].trim().length() != 0) {
                this.RowKey[i] = Header[i].split("/", -1);
            } else {
                this.RowKey[i] = null;
            }
        }

        this.KeyName = ((String)this.hash2.get("KeyName")).split("/", -1);
    }

    public String getWhereClause(int index) {
        StringBuffer clause = new StringBuffer();
        clause.append(" where zcrq='");
        clause.append(this.getRQ());
        clause.append("'");

        for(int j = 0; j < this.KeyName.length; ++j) {
            if(this.RowKey[index][j] != null && this.RowKey[index][j].trim().length() != 0) {
                clause.append(" and ");
                clause.append(this.KeyName[j]);
                clause.append("='");
                clause.append(this.RowKey[index][j]);
                clause.append("' ");
            }
        }

        return clause.toString();
    }

    public String getRQ() {
        if(this.getMaxDate()) {
            try {
                String sql = "select max(zcrq) rq from " + this.getTableName() + " where zcrq<='" + this.RQ + "'";
                Statement st = this.conn.createStatement();
                ResultSet rs = st.executeQuery(sql);
                if(rs.next()) {
                    this.RQ = rs.getString("rq");
                }

                rs.close();
                st.close();
            } catch (Exception var4) {
                var4.printStackTrace();
            }
        }

        return this.RQ;
    }

    public void LoadData() {
        try {
            this.getHeader();
            this.ExecuteProc();
            this.Data = new String[this.RowKey.length][];

            int i;
            for(i = 0; i < this.RowKey.length; ++i) {
                this.Data[i] = new String[this.getX2() - this.getX1() + 1];
            }

            for(i = 0; i < this.RowKey.length; ++i) {
                if(this.RowKey[i] != null) {
                    String sql = "select * from " + this.getTableName() + this.getWhereClause(i);
                    Statement st = this.conn.createStatement();
                    ResultSet rs = st.executeQuery(sql);
                    ResultSetMetaData meta = rs.getMetaData();
                    int cols = meta.getColumnCount();

                    while(rs.next()) {
                        for(int k = 1; k <= cols; ++k) {
                            String colName = meta.getColumnName(k);
                            String fIndex = (String)this.hash.get(colName);
                            if(fIndex != null) {
                                int k1 = Integer.parseInt(fIndex.substring(1)) - this.getX1();
                                this.Data[i][k1] = rs.getString(k);
                            }
                        }
                    }
                }
            }
        } catch (Exception var11) {
            var11.printStackTrace();
        }

    }

    protected void fillCell(StringBuffer buf, int x, int y) {
        String s = (String)this.hash2.get("SField");
        HashSet TextSet = new HashSet();
        int j;
        if(s != null) {
            String[] list = s.split(",");

            for(j = 0; j < list.length; ++j) {
                TextSet.add(list[j]);
            }
        }

        if(this.Data != null) {
            for(int i = 0; i < this.Data.length && i < this.RowKey.length; ++i) {
                if(this.RowKey[i] == null) {
                    ++y;
                } else {
                    int tx = x;

                    for(j = 0; j < this.Data[i].length; ++j) {
                        if(!this.hash.values().contains("C" + (j + this.getX1()))) {
                            ++tx;
                        } else {
                            boolean _D = true;
                            _D = !TextSet.contains(String.valueOf(j + this.getX1()));
                            if(_D) {
                                if(this.Data[i][j] == null) {
                                    ++tx;
                                    continue;
                                }

                                if(this.Data[i][j].length() == 0) {
                                    ++tx;
                                    continue;
                                }

                                buf.append("DCellWeb1.D(");
                                buf.append(tx);
                                buf.append(",");
                                buf.append(y);
                                buf.append(",0,");
                                buf.append(this.Data[i][j]);
                                buf.append(");\n");
                            } else {
                                buf.append("DCellWeb1.S(");
                                buf.append(tx);
                                buf.append(",");
                                buf.append(y);
                                buf.append(",0,\"");
                                if(this.Data[i][j] != null) {
                                    buf.append(this.Data[i][j]);
                                }

                                buf.append("\");\n");
                            }

                            ++tx;
                        }
                    }

                    ++y;
                }
            }
        }

    }

    public void SaveData(String oldData, String newData) {
        this.getHeader();
        this.Data = this.parseData(newData);
        if(!newData.equals(oldData)) {
            this.preData = this.parseData(oldData);

            try {
                for(int i = 0; i < this.Data.length; ++i) {
                    String s1 = this.V2S(this.Data[i]);
                    String s2 = this.V2S(this.preData[i]);
                    if(!s1.equals(s2)) {
                        if(i >= this.RowKey.length) {
                            break;
                        }

                        if(this.RowKey[i] != null) {
                            String sql = "select count(*) from " + this.getTableName() + this.getWhereClause(i);
                            Statement st = this.conn.createStatement();
                            ResultSet rs = st.executeQuery(sql);
                            rs.next();
                            int rows = rs.getInt(1);
                            if(rows == 0) {
                                sql = this.InsertData(i);
                            } else {
                                sql = this.UpdateData(i);
                            }

                            st.executeUpdate(sql);
                        }
                    }
                }
            } catch (Exception var10) {
                var10.printStackTrace();
            }

        }
    }

    public String InsertData(int dataIdx) {
        String sql = "";
        StringBuffer F_Names = new StringBuffer();
        StringBuffer F_Values = new StringBuffer();
        F_Names.append("zcrq,");
        F_Values.append("'" + this.RQ + "',");

        for(int j = 0; j < this.KeyName.length; ++j) {
            F_Names.append(this.KeyName[j] + ",");
            F_Values.append("'" + this.RowKey[dataIdx][j] + "',");
        }

        Enumeration e = this.hash.keys();

        while(e.hasMoreElements()) {
            String key = (String)e.nextElement();
            String value = (String)this.hash.get(key);
            F_Names.append(key + ",");
            int k = Integer.parseInt(value.substring(1)) - this.getX1();
            F_Values.append("'" + this.Data[dataIdx][k] + "',");
        }

        F_Names.append("sjbz");
        F_Values.append("'1111'");
        sql = "insert into " + this.getTableName() + " (" + F_Names.toString() + ") values (" + F_Values.toString() + ")";
        return sql;
    }

    public String UpdateData(int dataIdx) {
        String sql = "";
        String F_Updates = "";
        boolean flag = false;
        Enumeration e = this.hash.keys();

        while(e.hasMoreElements()) {
            String key = (String)e.nextElement();
            String value = (String)this.hash.get(key);
            int k = Integer.parseInt(value.substring(1)) - this.getX1();
            F_Updates = F_Updates + key + "='" + this.Data[dataIdx][k] + "',";
            if(this.Data[dataIdx][k].length() > 0 && !this.Data[dataIdx][k].equals("0")) {
                flag = true;
            }
        }

        if(flag) {
            F_Updates = F_Updates + "SJBZ='1111'";
        } else {
            F_Updates = F_Updates + "SJBZ='0000'";
        }

        sql = "update " + this.getTableName() + " set " + F_Updates + this.getWhereClause(dataIdx) + " and nvl(SJBZ,'0000')<>'1010' ";
        return sql;
    }

    protected void ExecuteProc() {
        if(this.Recalc || this.IsAutoCalc()) {
            super.ExecuteProc();
        }

    }
}

//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package mor.report;

import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.io.Reader;
import java.io.StringReader;
import java.io.StringWriter;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

class F1 {
    public static final int YYEOF = -1;
    private static final int YY_BUFFERSIZE = 16384;
    public static final int COL = 2;
    public static final int YYINITIAL = 0;
    public static final int CELL = 3;
    public static final int ROW = 1;
    private static final char[] yycmap = new char[]{'\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0003', '\u0002', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0003', '\u0000', '\u0000', '\u0001', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\t', '\u0000', '\u0000', '\b', '\b', '\b', '\b', '\b', '\b', '\b', '\b', '\b', '\b', '\u0000', '\u000e', '\u0000', '\u0007', '\u0000', '\u0000', '\u0000', '\f', '\f', '\f', '\f', '\f', '\f', '\f', '\f', '\f', '\f', '\f', '\f', '\f', '\f', '\f', '\f', '\f', '\f', '\f', '\f', '\f', '\f', '\f', '\f', '\f', '\f', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\n', '\u0000', '\r', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u000b', '\u0000', '\u0000', '\u0005', '\u0000', '\u0000', '\u0004', '\u0000', '\u0000', '\u0000', '\u0000', '\u0006', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000', '\u0000'};
    private static final int[] yy_rowMap = new int[]{0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 135, 240, 255, 165, 270, 285, 300, 315, 330, 345, 360, 375, 60, 60, 390, 405, 420, 435, 60, 60, 450, 465, 480, 465, 495, 495};
    private static final String yy_packed0 = "\u0001\u0005\u0001\u0006\u0001\u0005\u0001\u0007\u0001\b\u0005\u0005\u0001\t\u0005\u0005\u0001\u0006\u0001\u0005\u0001\u0007\u0001\b\u0005\u0005\u0001\t\u0001\u0005\u0001\n\u0003\u0005\u0001\u0006\u0001\u0005\u0001\u0007\u0001\u000b\u0005\u0005\u0001\t\u0005\u0005\u0001\u0006\u0001\u0005\u0001\u0007\u0001\b\u0005\u0005\u0001\t\u0001\u0005\u0001\f\u0002\u0005\u000f\u0000\u0002\u0006\u0001\u0000\f\u0006\u0003\u0000\u0001\u0007\u0010\u0000\u0001\r\u000e\u0000\u0001\u000e\u0007\u0000\u0001\u000f\b\u0000\u0001\u0010\u0004\u0000\u0001\u0011\u0007\u0000\u0001\r\u0002\u0000\u0001\u0012\u000e\u0000\u0001\u0013\u0003\u0000\u0001\u0014\b\u0000\u0001\u0015\u0013\u0000\u0001\u0016\u000e\u0000\u0001\u0017\u0003\u0000\u000e\u0018\b\u0000\u0001\u0019\u0001\u0012\r\u0000\u0001\u001a\u0001\u0013\r\u0000\u0001\u001b\u000e\u0000\u0001\u001c\u0012\u0000\u0001\u001d\u0003\u0000\u000e\u0018\u0001\u001e\u000e\u001f\u0001\u0000\u000e \u0005\u0000\u0001!\u0016\u0000\u0001\"\u0002\u0000\u000e\u001f\u0001#\u000e \u0001$\b\u0000\u0001%\u000f\u0000\u0001&\u0002\u0000\u0001\"\n\u0000\u0001%\u0001'\u0011\u0000\u0001(\u0006\u0000\u0001)\u0012\u0000\u0001*\u0006\u0000";
    private static final int[] yytrans = yy_unpack();
    private static final int YY_UNKNOWN_ERROR = 0;
    private static final int YY_ILLEGAL_STATE = 1;
    private static final int YY_NO_MATCH = 2;
    private static final int YY_PUSHBACK_2BIG = 3;
    private static final String[] YY_ERROR_MSG = new String[]{"Unkown internal scanner error", "Internal error: unknown state", "Error: could not match input", "Error: pushback value was too large"};
    private static final byte[] YY_ATTRIBUTE = new byte[]{0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 0, 0, 0, 0, 9, 9, 0, 0, 0, 1, 0, 1};
    private Reader yy_reader;
    private int yy_state;
    private int yy_lexical_state;
    private char[] yy_buffer;
    private int yy_markedPos;
    private int yy_pushbackPos;
    private int yy_currentPos;
    private int yy_startRead;
    private int yy_endRead;
    private int yyline;
    private int yychar;
    private int yycolumn;
    private boolean yy_atBOL;
    private boolean yy_atEOF;
    int x;
    int y;
    int i;
    int k1;
    int k2;
    PrintWriter _out;

    private int _col2x(StringBuffer s, int i) {
        return i == s.length()?0:s.charAt(i) - 65 + 1 + 26 * this._col2x(s, i + 1);
    }

    private int col2x(String s) {
        StringBuffer buf = new StringBuffer(s);
        buf.reverse();
        return this._col2x(buf, 0);
    }

    void _x2col(int x, StringBuffer buf) {
        char c;
        if(x < 27) {
            c = (char)(65 + x - 1);
            buf.append(c);
        } else {
            int m = (x - 1) % 26;
            int d = (x - 1) / 26;
            c = (char)(65 + m);
            buf.append(c);
            this._x2col(d, buf);
        }
    }

    String x2col(int x) {
        StringBuffer buf = new StringBuffer();
        this._x2col(x, buf);
        buf.reverse();
        return buf.toString();
    }

    public static StringBuffer Parse(String s) {
        StringWriter str = new StringWriter();

        try {
            F1 scanner = new F1(new StringReader(s));
            scanner._out = new PrintWriter(str);

            while(!scanner.yy_atEOF) {
                scanner.yylex();
            }
        } catch (Exception var3) {
            var3.printStackTrace();
        }

        return str.getBuffer();
    }

    public static void main(String[] argv) {
        try {
            F1 scanner = new F1(new FileReader(argv[0]));
            StringWriter str = new StringWriter();
            scanner._out = new PrintWriter(str);

            while(!scanner.yy_atEOF) {
                scanner.yylex();
            }
        } catch (Exception var3) {
            var3.printStackTrace();
        }

    }

    F1(Reader in) {
        this.yy_lexical_state = 0;
        this.yy_buffer = new char[16384];
        this.yy_atBOL = true;
        this.yy_reader = in;
    }

    F1(InputStream in) {
        this((Reader)(new InputStreamReader(in)));
    }

    private static int[] yy_unpack() {
        int[] trans = new int[510];
        int offset = 0;
        yy_unpack("\u0001\u0005\u0001\u0006\u0001\u0005\u0001\u0007\u0001\b\u0005\u0005\u0001\t\u0005\u0005\u0001\u0006\u0001\u0005\u0001\u0007\u0001\b\u0005\u0005\u0001\t\u0001\u0005\u0001\n\u0003\u0005\u0001\u0006\u0001\u0005\u0001\u0007\u0001\u000b\u0005\u0005\u0001\t\u0005\u0005\u0001\u0006\u0001\u0005\u0001\u0007\u0001\b\u0005\u0005\u0001\t\u0001\u0005\u0001\f\u0002\u0005\u000f\u0000\u0002\u0006\u0001\u0000\f\u0006\u0003\u0000\u0001\u0007\u0010\u0000\u0001\r\u000e\u0000\u0001\u000e\u0007\u0000\u0001\u000f\b\u0000\u0001\u0010\u0004\u0000\u0001\u0011\u0007\u0000\u0001\r\u0002\u0000\u0001\u0012\u000e\u0000\u0001\u0013\u0003\u0000\u0001\u0014\b\u0000\u0001\u0015\u0013\u0000\u0001\u0016\u000e\u0000\u0001\u0017\u0003\u0000\u000e\u0018\b\u0000\u0001\u0019\u0001\u0012\r\u0000\u0001\u001a\u0001\u0013\r\u0000\u0001\u001b\u000e\u0000\u0001\u001c\u0012\u0000\u0001\u001d\u0003\u0000\u000e\u0018\u0001\u001e\u000e\u001f\u0001\u0000\u000e \u0005\u0000\u0001!\u0016\u0000\u0001\"\u0002\u0000\u000e\u001f\u0001#\u000e \u0001$\b\u0000\u0001%\u000f\u0000\u0001&\u0002\u0000\u0001\"\n\u0000\u0001%\u0001'\u0011\u0000\u0001(\u0006\u0000\u0001)\u0012\u0000\u0001*\u0006\u0000", offset, trans);
        return trans;
    }

    private static int yy_unpack(String packed, int offset, int[] trans) {
        int i = 0;
        int j = offset;
        int l = packed.length();

        while(i < l) {
            int count = packed.charAt(i++);
            int value = packed.charAt(i++);
            //@TODO 反编译报错
//            int value = value - 1;

            while(true) {
                trans[j++] = value;
                --count;
                if(count <= 0) {
                    break;
                }
            }
        }

        return j;
    }

    private boolean yy_refill() throws IOException {
        if(this.yy_startRead > 0) {
            System.arraycopy(this.yy_buffer, this.yy_startRead, this.yy_buffer, 0, this.yy_endRead - this.yy_startRead);
            this.yy_endRead -= this.yy_startRead;
            this.yy_currentPos -= this.yy_startRead;
            this.yy_markedPos -= this.yy_startRead;
            this.yy_pushbackPos -= this.yy_startRead;
            this.yy_startRead = 0;
        }

        if(this.yy_currentPos >= this.yy_buffer.length) {
            char[] newBuffer = new char[this.yy_currentPos * 2];
            System.arraycopy(this.yy_buffer, 0, newBuffer, 0, this.yy_buffer.length);
            this.yy_buffer = newBuffer;
        }

        int numRead = this.yy_reader.read(this.yy_buffer, this.yy_endRead, this.yy_buffer.length - this.yy_endRead);
        if(numRead < 0) {
            return true;
        } else {
            this.yy_endRead += numRead;
            return false;
        }
    }

    public final void yyclose() throws IOException {
        this.yy_atEOF = true;
        this.yy_endRead = this.yy_startRead;
        if(this.yy_reader != null) {
            this.yy_reader.close();
        }

    }

    public final void yyreset(Reader reader) throws IOException {
        this.yyclose();
        this.yy_reader = reader;
        this.yy_atBOL = true;
        this.yy_atEOF = false;
        this.yy_endRead = this.yy_startRead = 0;
        this.yy_currentPos = this.yy_markedPos = this.yy_pushbackPos = 0;
        this.yyline = this.yychar = this.yycolumn = 0;
        this.yy_lexical_state = 0;
    }

    public final int yystate() {
        return this.yy_lexical_state;
    }

    public final void yybegin(int newState) {
        this.yy_lexical_state = newState;
    }

    public final String yytext() {
        return new String(this.yy_buffer, this.yy_startRead, this.yy_markedPos - this.yy_startRead);
    }

    public final char yycharat(int pos) {
        return this.yy_buffer[this.yy_startRead + pos];
    }

    public final int yylength() {
        return this.yy_markedPos - this.yy_startRead;
    }

    private void yy_ScanError(int errorCode) {
        String message;
        try {
            message = YY_ERROR_MSG[errorCode];
        } catch (ArrayIndexOutOfBoundsException var4) {
            message = YY_ERROR_MSG[0];
        }

        throw new Error(message);
    }

    private void yypushback(int number) {
        if(number > this.yylength()) {
            this.yy_ScanError(3);
        }

        this.yy_markedPos -= number;
    }

    public Yytoken yylex() throws IOException {
        int yy_endRead_l = this.yy_endRead;
        char[] yy_buffer_l = this.yy_buffer;
        char[] yycmap_l = yycmap;
        int[] yytrans_l = yytrans;
        int[] yy_rowMap_l = yy_rowMap;
        byte[] yy_attr_l = YY_ATTRIBUTE;

        while(true) {
            label94:
            while(true) {
                int yy_markedPos_l = this.yy_markedPos;
                int yy_action = -1;
                int yy_currentPos_l = this.yy_currentPos = this.yy_startRead = yy_markedPos_l;
                this.yy_state = this.yy_lexical_state;

                int yy_input;
                while(true) {
                    if(yy_currentPos_l < yy_endRead_l) {
                        yy_input = yy_buffer_l[yy_currentPos_l++];
                    } else {
                        if(this.yy_atEOF) {
                            yy_input = -1;
                            break;
                        }

                        this.yy_currentPos = yy_currentPos_l;
                        this.yy_markedPos = yy_markedPos_l;
                        boolean eof = this.yy_refill();
                        yy_currentPos_l = this.yy_currentPos;
                        yy_markedPos_l = this.yy_markedPos;
                        yy_buffer_l = this.yy_buffer;
                        yy_endRead_l = this.yy_endRead;
                        if(eof) {
                            yy_input = -1;
                            break;
                        }

                        yy_input = yy_buffer_l[yy_currentPos_l++];
                    }

                    int yy_next = yytrans_l[yy_rowMap_l[this.yy_state] + yycmap_l[yy_input]];
                    if(yy_next == -1) {
                        break;
                    }

                    this.yy_state = yy_next;
                    int yy_attributes = yy_attr_l[this.yy_state];
                    if((yy_attributes & 1) == 1) {
                        yy_action = this.yy_state;
                        yy_markedPos_l = yy_currentPos_l;
                        if((yy_attributes & 8) == 8) {
                            break;
                        }
                    }
                }

                this.yy_markedPos = yy_markedPos_l;
                String s;
                int i;
                StringBuffer buf;
                int last;
                Pattern p;
                Matcher m;
                switch(yy_action) {
                case 4:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                    this._out.print(this.yytext());
                case 5:
                case 6:
                case 43:
                case 44:
                case 45:
                case 46:
                case 47:
                case 48:
                case 49:
                case 50:
                    break;
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                case 30:
                case 31:
                case 32:
                case 33:
                case 36:
                case 37:
                case 38:
                case 40:
                case 42:
                default:
                    if(yy_input == -1 && this.yy_startRead == this.yy_currentPos) {
                        this.yy_atEOF = true;
                        return null;
                    }

                    this.yy_ScanError(2);
                    break;
                case 28:
                    this.yybegin(3);
                    break;
                case 29:
                    p = Pattern.compile("([A-Z]+)=(.*);");
                    m = p.matcher(this.yytext());
                    m.find();
                    this.x = this.col2x(m.group(1));
                    s = m.group(2);
                    p = Pattern.compile("[A-Z]+");

                    for(i = this.k1; i <= this.k2; ++i) {
                        buf = new StringBuffer();
                        p = Pattern.compile("[A-Z]+");
                        m = p.matcher(s);

                        for(last = 0; m.find(); last = m.end()) {
                            buf.append(s.substring(last, m.start()));
                            buf.append(m.group() + i);
                        }

                        buf.append(s.substring(last));
                        this._out.println("DCellWeb1.SetFormula(" + this.x + "," + i + ",0,\"" + buf + "\");");
                    }
                    break;
                case 34:
                    p = Pattern.compile("r([0-9]+)=(.*);");
                    m = p.matcher(this.yytext());
                    m.find();
                    this.y = Integer.parseInt(m.group(1));
                    s = m.group(2);
                    p = Pattern.compile("r[0-9]+");
                    i = this.k1;

                    while(true) {
                        if(i > this.k2) {
                            continue label94;
                        }

                        buf = new StringBuffer();
                        p = Pattern.compile("r([0-9]+)");
                        m = p.matcher(s);

                        for(last = 0; m.find(); last = m.end()) {
                            buf.append(s.substring(last, m.start()));
                            buf.append(this.x2col(i) + m.group(1));
                        }

                        buf.append(s.substring(last));
                        this._out.println("DCellWeb1.SetFormula(" + i + "," + this.y + ",0,\"" + buf + "\");");
                        ++i;
                    }
                case 35:
                    p = Pattern.compile("([A-Z]+)([0-9]+)=(.*);");
                    m = p.matcher(this.yytext());
                    m.find();
                    this.y = Integer.parseInt(m.group(2));
                    this.x = this.col2x(m.group(1));
                    s = m.group(3);
                    this._out.println("DCellWeb1.SetFormula(" + this.x + "," + this.y + ",0,\"" + s + "\");");
                    break;
                case 39:
                    p = Pattern.compile("col=([A-Z]+)-([A-Z]+)");
                    m = p.matcher(this.yytext());
                    m.find();
                    this.k1 = this.col2x(m.group(1));
                    this.k2 = this.col2x(m.group(2));
                    this.yybegin(2);
                    break;
                case 41:
                    p = Pattern.compile("row=r(\\d+)-r(\\d+)");
                    m = p.matcher(this.yytext());
                    if(m.find()) {
                        this.k1 = Integer.parseInt(m.group(1));
                        this.k2 = Integer.parseInt(m.group(2));
                    }

                    this.yybegin(1);
                }
            }
        }
    }
}

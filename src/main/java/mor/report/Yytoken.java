//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package mor.report;

class Yytoken {
    public int m_index;
    public String m_text;
    public int m_line;
    public int m_charBegin;
    public int m_charEnd;

    Yytoken(int index, String text, int line, int charBegin, int charEnd) {
        this.m_index = index;
        this.m_text = text;
        this.m_line = line;
        this.m_charBegin = charBegin;
        this.m_charEnd = charEnd;
    }

    public String toString() {
        return "Text   : " + this.m_text + "\nindex : " + this.m_index + "\nline  : " + this.m_line + "\ncBeg. : " + this.m_charBegin + "\ncEnd. : " + this.m_charEnd;
    }
}

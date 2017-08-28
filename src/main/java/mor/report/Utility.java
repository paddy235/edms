//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package mor.report;

class Utility {
    private static final String[] errorMsg = new String[]{"Error: Unmatched end-of-comment punctuation.", "Error: Unmatched start-of-comment punctuation.", "Error: Unclosed string.", "Error: Illegal character."};
    public static final int E_ENDCOMMENT = 0;
    public static final int E_STARTCOMMENT = 1;
    public static final int E_UNCLOSEDSTR = 2;
    public static final int E_UNMATCHED = 3;

    Utility() {
    }

    public static void error(int code) {
        System.out.println(errorMsg[code]);
    }
}

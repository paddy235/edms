//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package mor.commons.db;

import java.beans.BeanInfo;
import java.beans.IntrospectionException;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.math.BigDecimal;
import java.sql.Date;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

public class ResultSetProcessor {
    private static final int PROPERTY_NOT_FOUND = -1;
    private static final Map primitiveDefaults = new HashMap();
    private static final ResultSetProcessor instance = new ResultSetProcessor();

    static {
        primitiveDefaults.put(Integer.TYPE, new Integer(0));
        primitiveDefaults.put(Short.TYPE, new Short((short) 0));
        primitiveDefaults.put(Byte.TYPE, new Byte((byte) 0));
        primitiveDefaults.put(Float.TYPE, new Float(0.0F));
        primitiveDefaults.put(Double.TYPE, new Double(0.0D));
        primitiveDefaults.put(Long.TYPE, new Long(0L));
        primitiveDefaults.put(Boolean.TYPE, Boolean.FALSE);
        primitiveDefaults.put(Character.TYPE, new Character('\u0000'));
    }

    protected ResultSetProcessor() {
    }

    public static ResultSetProcessor instance() {
        return instance;
    }

    public Object[] toArray(ResultSet rs) throws SQLException {
        ResultSetMetaData meta = rs.getMetaData();
        int cols = meta.getColumnCount();
        Object[] result = new Object[cols];

        for(int i = 0; i < cols; ++i) {
            result[i] = rs.getObject(i + 1);
        }

        return result;
    }

    public Object toBean(ResultSet rs, Class type) throws SQLException {
        PropertyDescriptor[] props = this.propertyDescriptors(type);
        ResultSetMetaData rsmd = rs.getMetaData();
        int[] columnToProperty = this.mapColumnsToProperties(rsmd, props);
        int cols = rsmd.getColumnCount();
        return this.createBean(rs, type, props, columnToProperty, cols);
    }

    public List toBeanList(ResultSet rs, Class type) throws SQLException {
        List results = new ArrayList();
        if(!rs.next()) {
            return results;
        } else {
            PropertyDescriptor[] props = this.propertyDescriptors(type);
            ResultSetMetaData rsmd = rs.getMetaData();
            int[] columnToProperty = this.mapColumnsToProperties(rsmd, props);
            int cols = rsmd.getColumnCount();

            do {
                results.add(this.createBean(rs, type, props, columnToProperty, cols));
            } while(rs.next());

            return results;
        }
    }

    private Object createBean(ResultSet rs, Class type, PropertyDescriptor[] props, int[] columnToProperty, int cols) throws SQLException {
        Object bean = this.newInstance(type);

        for(int i = 1; i <= cols; ++i) {
            if(columnToProperty[i] != -1) {
                Object value = rs.getObject(i);
                PropertyDescriptor prop = props[columnToProperty[i]];
                Class propType = prop.getPropertyType();
                if(propType != null && value == null && propType.isPrimitive()) {
                    value = primitiveDefaults.get(propType);
                }

                this.callSetter(bean, prop, value);
            }
        }

        return bean;
    }

    private int[] mapColumnsToProperties(ResultSetMetaData rsmd, PropertyDescriptor[] props) throws SQLException {
        int cols = rsmd.getColumnCount();
        int[] columnToProperty = new int[cols + 1];

        for(int col = 1; col <= cols; ++col) {
            String columnName = DbUtil.fieldNameToPropertyName(rsmd.getColumnName(col));

            for(int i = 0; i < props.length; ++i) {
                if(columnName.equalsIgnoreCase(props[i].getName())) {
                    columnToProperty[col] = i;
                    break;
                }

                columnToProperty[col] = -1;
            }
        }

        return columnToProperty;
    }

    public Map toMap(ResultSet rs) throws SQLException {
        Map result = new ResultSetProcessor.CaseInsensitiveHashMap();
        ResultSetMetaData rsmd = rs.getMetaData();
        int cols = rsmd.getColumnCount();

        for(int i = 1; i <= cols; ++i) {
            result.put(rsmd.getColumnName(i), rs.getObject(i));
        }

        return result;
    }

    private void callSetter(Object target, PropertyDescriptor prop, Object value) throws SQLException {
        Method setter = prop.getWriteMethod();
        if(setter != null) {
            Class[] params = setter.getParameterTypes();
            if(BigDecimal.class.isInstance(value)) {
                if(!params[0].equals(Long.TYPE) && !params[0].equals(Long.class)) {
                    if(!params[0].equals(Integer.TYPE) && !params[0].equals(Integer.class)) {
                        value = Double.valueOf(value.toString());
                    } else {
                        value = Integer.valueOf(value.toString());
                    }
                } else {
                    value = Long.valueOf(value.toString());
                }
            } else if(Timestamp.class.isInstance(value)) {
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                if(params[0].equals(Date.class)) {
                    value = Date.valueOf(sdf.format(value));
                } else if(params[0].equals(String.class)) {
                    value = sdf.format(value);
                }
            }

            try {
                if(this.isCompatibleType(value, params[0])) {
                    setter.invoke(target, new Object[]{value});
                }

            } catch (IllegalArgumentException var7) {
                throw new SQLException("Cannot set " + prop.getName() + ": " + var7.getMessage());
            } catch (IllegalAccessException var8) {
                throw new SQLException("Cannot set " + prop.getName() + ": " + var8.getMessage());
            } catch (InvocationTargetException var9) {
                throw new SQLException("Cannot set " + prop.getName() + ": " + var9.getMessage());
            }
        }
    }

    private boolean isCompatibleType(Object value, Class type) {
        return value != null && !type.isInstance(value)?(type.equals(Integer.TYPE) && Integer.class.isInstance(value)?true:(type.equals(Long.TYPE) && Long.class.isInstance(value)?true:(type.equals(Double.TYPE) && Double.class.isInstance(value)?true:(type.equals(Float.TYPE) && Float.class.isInstance(value)?true:(type.equals(Short.TYPE) && Short.class.isInstance(value)?true:(type.equals(Byte.TYPE) && Byte.class.isInstance(value)?true:(type.equals(Character.TYPE) && Character.class.isInstance(value)?true:type.equals(Boolean.TYPE) && Boolean.class.isInstance(value)))))))):true;
    }

    private Object newInstance(Class c) throws SQLException {
        try {
            return c.newInstance();
        } catch (InstantiationException var3) {
            throw new SQLException("Cannot create " + c.getName() + ": " + var3.getMessage());
        } catch (IllegalAccessException var4) {
            throw new SQLException("Cannot create " + c.getName() + ": " + var4.getMessage());
        }
    }

    private PropertyDescriptor[] propertyDescriptors(Class c) throws SQLException {
        BeanInfo beanInfo = null;

        try {
            beanInfo = Introspector.getBeanInfo(c);
        } catch (IntrospectionException var4) {
            throw new SQLException("Bean introspection failed: " + var4.getMessage());
        }

        return beanInfo.getPropertyDescriptors();
    }

    private static class CaseInsensitiveHashMap extends HashMap {
        private CaseInsensitiveHashMap() {
        }

        public boolean containsKey(Object key) {
            return super.containsKey(key.toString().toLowerCase());
        }

        public Object get(Object key) {
            return super.get(key.toString().toLowerCase());
        }

        public Object put(Object key, Object value) {
            return super.put(key.toString().toLowerCase(), value);
        }

        public void putAll(Map m) {
            Iterator iter = m.keySet().iterator();

            while(iter.hasNext()) {
                Object key = iter.next();
                Object value = m.get(key);
                this.put(key, value);
            }

        }

        public Object remove(Object key) {
            return super.remove(key.toString().toLowerCase());
        }
    }
}

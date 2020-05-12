package serializer;

import java.util.Map;

public interface Serializer {
    Map<String, Object> asMap();
    Object asObj();
    boolean isValid();
}

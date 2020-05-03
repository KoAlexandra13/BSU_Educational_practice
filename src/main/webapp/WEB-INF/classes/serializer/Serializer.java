package serializer;

import java.util.Map;

public interface Serializer {
    abstract Map<String, Object> asMap();
    abstract Object asObj();
    abstract boolean isValid();
}

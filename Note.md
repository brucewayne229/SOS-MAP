## Parameters :
 - Option.zoom
 - GeolocateControl: options.positionOptions, options.trackUserLocation, options.showUserLocation (cung cấp một nút sử dụng API định vị địa lý của trình duyệt để xác định vị trí của người dùng trên bản đồ.)
## GeoJSON :
 - Type: kiểu dữ liệu của file GeoJSON này. Gồm các loại sau:
    + Feature: Chỉ 1 đối tượng địa lý.
    + FeatureCollection: Tập hợp nhiều đối tượng địa lý.  
- geometry: toạ độ của đối tượng. Gồm các loại sau:
    + Point: Một điểm. Thường được dùng việc hiển thị marker.
    + LineString: Một đường thẳng.
    + MultiLineString: Tập hợp nhiều đường thẳng.
    + Polygon: Một đa giác.
    + MultiPolygon: Tập hợp nhiều đa giác.
    + GeometryCollection: Tập hợp nhiều loại hình học khác nhau.
- properties: danh sách thuộc tính của đối tượng.
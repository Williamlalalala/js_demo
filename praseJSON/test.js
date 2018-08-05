var change = function() {
    let str = '[{"ClassRoomLocation":"\u6c99\u6cb3\u6821\u533a","ClassRoomBuilding":"\u7b2c\u4e8c\u6559\u5b66\u697c","ClassRoomFloor":1,"ClassRoomTime":1,"ClassRoomName":"103","ClassRoomCapacity":280},{"ClassRoomLocation":"\u6c99\u6cb3\u6821\u533a","ClassRoomBuilding":"\u7b2c\u4e8c\u6559\u5b66\u697c","ClassRoomFloor":1,"ClassRoomTime":1,"ClassRoomName":"105","ClassRoomCapacity":176},{"ClassRoomLocation":"\u6c99\u6cb3\u6821\u533a","ClassRoomBuilding":"\u7b2c\u4e8c\u6559\u5b66\u697c","ClassRoomFloor":1,"ClassRoomTime":1,"ClassRoomName":"108","ClassRoomCapacity":280}]';
    let obj = JSON.parse(str);
    console.log(obj);
}
change();
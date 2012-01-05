

var nodeunit = require("nodeunit");
var nodeshark = require("../");

exports['NodeSharkTest'] = nodeunit.testCase({
  "process packet": function(test) {
    var dissector = new nodeshark.Dissector();
    var buffer = new Buffer([
      0x58, 0x6d, 0x8f, 0x67, 0x8a, 0x4d, 0x00, 0x1b, 0x21, 0xcf, 0xa1, 0x00, 0x08, 0x00, 0x45, 0x00,
      0x00, 0x3b, 0xd1, 0xb0, 0x40, 0x00, 0x40, 0x11, 0xc5, 0xde, 0x0a, 0x14, 0x08, 0x65, 0xc0, 0xa8,
      0xd0, 0x01, 0xc5, 0x32, 0x00, 0x35, 0x00, 0x27, 0xa3, 0x5b, 0x65, 0x89, 0x01, 0x00, 0x00, 0x01,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x04, 0x6d, 0x61, 0x69, 0x6c, 0x04, 0x6c, 0x69, 0x76, 0x65,
      0x03, 0x63, 0x6f, 0x6d, 0x00, 0x00, 0x01, 0x00, 0x01
    ]);
    var packetHeader = {
      secs: 10,
      nsecs: 20,
      caplen: buffer.length,
      len: buffer.length
    };
    dissector.dissect(packetHeader, buffer);
    test.done();
  }
});
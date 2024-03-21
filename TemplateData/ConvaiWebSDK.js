!(function (e, t) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    var o = t();
    for (var r in o) ("object" == typeof exports ? exports : e)[r] = o[r];
  }
})(this, () =>
  (() => {
    var __webpack_modules__ = {
        387: (e, t, o) => {
          var r = o(19),
            s = r,
            n = Function("return this")();
          s.exportSymbol("proto.service.ActionConfig", null, n),
            s.exportSymbol("proto.service.ActionConfig.Character", null, n),
            s.exportSymbol("proto.service.ActionConfig.Object", null, n),
            s.exportSymbol("proto.service.AudioConfig", null, n),
            s.exportSymbol("proto.service.BlendShapesData", null, n),
            s.exportSymbol("proto.service.FaceModel", null, n),
            s.exportSymbol("proto.service.FeedbackRequest", null, n),
            s.exportSymbol("proto.service.FeedbackRequest.Feedback", null, n),
            s.exportSymbol("proto.service.FeedbackResponse", null, n),
            s.exportSymbol("proto.service.GetResponseRequest", null, n),
            s.exportSymbol(
              "proto.service.GetResponseRequest.GetResponseConfig",
              null,
              n
            ),
            s.exportSymbol(
              "proto.service.GetResponseRequest.GetResponseData",
              null,
              n
            ),
            s.exportSymbol("proto.service.GetResponseRequestSingle", null, n),
            s.exportSymbol("proto.service.GetResponseResponse", null, n),
            s.exportSymbol(
              "proto.service.GetResponseResponse.ActionResponse",
              null,
              n
            ),
            s.exportSymbol(
              "proto.service.GetResponseResponse.AudioResponse",
              null,
              n
            ),
            s.exportSymbol(
              "proto.service.GetResponseResponse.BehaviorTreeResponse",
              null,
              n
            ),
            s.exportSymbol(
              "proto.service.GetResponseResponse.EmotionResponse",
              null,
              n
            ),
            s.exportSymbol(
              "proto.service.GetResponseResponse.UserTranscript",
              null,
              n
            ),
            s.exportSymbol("proto.service.HelloRequest", null, n),
            s.exportSymbol("proto.service.HelloResponse", null, n),
            s.exportSymbol("proto.service.STTRequest", null, n),
            s.exportSymbol("proto.service.STTResponse", null, n),
            s.exportSymbol("proto.service.TriggerConfig", null, n),
            s.exportSymbol("proto.service.Viseme", null, n),
            s.exportSymbol("proto.service.VisemesData", null, n),
            (proto.service.AudioConfig = function (e) {
              r.Message.initialize(this, e, 0, -1, null, null);
            }),
            s.inherits(proto.service.AudioConfig, r.Message),
            s.DEBUG &&
              !COMPILED &&
              (proto.service.AudioConfig.displayName =
                "proto.service.AudioConfig"),
            r.Message.GENERATE_TO_OBJECT &&
              ((proto.service.AudioConfig.prototype.toObject = function (e) {
                return proto.service.AudioConfig.toObject(e, this);
              }),
              (proto.service.AudioConfig.toObject = function (e, t) {
                var o = {
                  sampleRateHertz: r.Message.getFieldWithDefault(t, 1, 0),
                  disableAudio: r.Message.getFieldWithDefault(t, 2, !1),
                  enableFacialData: r.Message.getFieldWithDefault(t, 3, !1),
                  faceModel: r.Message.getFieldWithDefault(t, 4, 0),
                };
                return e && (o.$jspbMessageInstance = t), o;
              })),
            (proto.service.AudioConfig.deserializeBinary = function (e) {
              var t = new r.BinaryReader(e),
                o = new proto.service.AudioConfig();
              return proto.service.AudioConfig.deserializeBinaryFromReader(
                o,
                t
              );
            }),
            (proto.service.AudioConfig.deserializeBinaryFromReader = function (
              e,
              t
            ) {
              for (; t.nextField() && !t.isEndGroup(); )
                switch (t.getFieldNumber()) {
                  case 1:
                    var o = t.readInt32();
                    e.setSampleRateHertz(o);
                    break;
                  case 2:
                    (o = t.readBool()), e.setDisableAudio(o);
                    break;
                  case 3:
                    (o = t.readBool()), e.setEnableFacialData(o);
                    break;
                  case 4:
                    (o = t.readEnum()), e.setFaceModel(o);
                    break;
                  default:
                    t.skipField();
                }
              return e;
            }),
            (proto.service.AudioConfig.prototype.serializeBinary = function () {
              var e = new r.BinaryWriter();
              return (
                proto.service.AudioConfig.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
              );
            }),
            (proto.service.AudioConfig.serializeBinaryToWriter = function (
              e,
              t
            ) {
              var o = void 0;
              0 !== (o = e.getSampleRateHertz()) && t.writeInt32(1, o),
                (o = e.getDisableAudio()) && t.writeBool(2, o),
                (o = e.getEnableFacialData()) && t.writeBool(3, o),
                0 !== (o = e.getFaceModel()) && t.writeEnum(4, o);
            }),
            (proto.service.AudioConfig.prototype.getSampleRateHertz =
              function () {
                return r.Message.getFieldWithDefault(this, 1, 0);
              }),
            (proto.service.AudioConfig.prototype.setSampleRateHertz = function (
              e
            ) {
              r.Message.setProto3IntField(this, 1, e);
            }),
            (proto.service.AudioConfig.prototype.getDisableAudio = function () {
              return r.Message.getFieldWithDefault(this, 2, !1);
            }),
            (proto.service.AudioConfig.prototype.setDisableAudio = function (
              e
            ) {
              r.Message.setProto3BooleanField(this, 2, e);
            }),
            (proto.service.AudioConfig.prototype.getEnableFacialData =
              function () {
                return r.Message.getFieldWithDefault(this, 3, !1);
              }),
            (proto.service.AudioConfig.prototype.setEnableFacialData =
              function (e) {
                r.Message.setProto3BooleanField(this, 3, e);
              }),
            (proto.service.AudioConfig.prototype.getFaceModel = function () {
              return r.Message.getFieldWithDefault(this, 4, 0);
            }),
            (proto.service.AudioConfig.prototype.setFaceModel = function (e) {
              r.Message.setProto3EnumField(this, 4, e);
            }),
            (proto.service.TriggerConfig = function (e) {
              r.Message.initialize(this, e, 0, -1, null, null);
            }),
            s.inherits(proto.service.TriggerConfig, r.Message),
            s.DEBUG &&
              !COMPILED &&
              (proto.service.TriggerConfig.displayName =
                "proto.service.TriggerConfig"),
            r.Message.GENERATE_TO_OBJECT &&
              ((proto.service.TriggerConfig.prototype.toObject = function (e) {
                return proto.service.TriggerConfig.toObject(e, this);
              }),
              (proto.service.TriggerConfig.toObject = function (e, t) {
                var o = {
                  triggerName: r.Message.getFieldWithDefault(t, 1, ""),
                  triggerMessage: r.Message.getFieldWithDefault(t, 2, ""),
                };
                return e && (o.$jspbMessageInstance = t), o;
              })),
            (proto.service.TriggerConfig.deserializeBinary = function (e) {
              var t = new r.BinaryReader(e),
                o = new proto.service.TriggerConfig();
              return proto.service.TriggerConfig.deserializeBinaryFromReader(
                o,
                t
              );
            }),
            (proto.service.TriggerConfig.deserializeBinaryFromReader =
              function (e, t) {
                for (; t.nextField() && !t.isEndGroup(); )
                  switch (t.getFieldNumber()) {
                    case 1:
                      var o = t.readString();
                      e.setTriggerName(o);
                      break;
                    case 2:
                      (o = t.readString()), e.setTriggerMessage(o);
                      break;
                    default:
                      t.skipField();
                  }
                return e;
              }),
            (proto.service.TriggerConfig.prototype.serializeBinary =
              function () {
                var e = new r.BinaryWriter();
                return (
                  proto.service.TriggerConfig.serializeBinaryToWriter(this, e),
                  e.getResultBuffer()
                );
              }),
            (proto.service.TriggerConfig.serializeBinaryToWriter = function (
              e,
              t
            ) {
              var o = void 0;
              (o = e.getTriggerName()).length > 0 && t.writeString(1, o),
                (o = e.getTriggerMessage()).length > 0 && t.writeString(2, o);
            }),
            (proto.service.TriggerConfig.prototype.getTriggerName =
              function () {
                return r.Message.getFieldWithDefault(this, 1, "");
              }),
            (proto.service.TriggerConfig.prototype.setTriggerName = function (
              e
            ) {
              r.Message.setProto3StringField(this, 1, e);
            }),
            (proto.service.TriggerConfig.prototype.getTriggerMessage =
              function () {
                return r.Message.getFieldWithDefault(this, 2, "");
              }),
            (proto.service.TriggerConfig.prototype.setTriggerMessage =
              function (e) {
                r.Message.setProto3StringField(this, 2, e);
              }),
            (proto.service.ActionConfig = function (e) {
              r.Message.initialize(
                this,
                e,
                0,
                -1,
                proto.service.ActionConfig.repeatedFields_,
                null
              );
            }),
            s.inherits(proto.service.ActionConfig, r.Message),
            s.DEBUG &&
              !COMPILED &&
              (proto.service.ActionConfig.displayName =
                "proto.service.ActionConfig"),
            (proto.service.ActionConfig.repeatedFields_ = [1, 2, 3]),
            r.Message.GENERATE_TO_OBJECT &&
              ((proto.service.ActionConfig.prototype.toObject = function (e) {
                return proto.service.ActionConfig.toObject(e, this);
              }),
              (proto.service.ActionConfig.toObject = function (e, t) {
                var o = {
                  actionsList: r.Message.getRepeatedField(t, 1),
                  charactersList: r.Message.toObjectList(
                    t.getCharactersList(),
                    proto.service.ActionConfig.Character.toObject,
                    e
                  ),
                  objectsList: r.Message.toObjectList(
                    t.getObjectsList(),
                    proto.service.ActionConfig.Object.toObject,
                    e
                  ),
                  classification: r.Message.getFieldWithDefault(t, 4, ""),
                  contextLevel: r.Message.getFieldWithDefault(t, 5, 0),
                  currentAttentionObject: r.Message.getFieldWithDefault(
                    t,
                    6,
                    ""
                  ),
                };
                return e && (o.$jspbMessageInstance = t), o;
              })),
            (proto.service.ActionConfig.deserializeBinary = function (e) {
              var t = new r.BinaryReader(e),
                o = new proto.service.ActionConfig();
              return proto.service.ActionConfig.deserializeBinaryFromReader(
                o,
                t
              );
            }),
            (proto.service.ActionConfig.deserializeBinaryFromReader = function (
              e,
              t
            ) {
              for (; t.nextField() && !t.isEndGroup(); )
                switch (t.getFieldNumber()) {
                  case 1:
                    var o = t.readString();
                    e.addActions(o);
                    break;
                  case 2:
                    (o = new proto.service.ActionConfig.Character()),
                      t.readMessage(
                        o,
                        proto.service.ActionConfig.Character
                          .deserializeBinaryFromReader
                      ),
                      e.addCharacters(o);
                    break;
                  case 3:
                    (o = new proto.service.ActionConfig.Object()),
                      t.readMessage(
                        o,
                        proto.service.ActionConfig.Object
                          .deserializeBinaryFromReader
                      ),
                      e.addObjects(o);
                    break;
                  case 4:
                    (o = t.readString()), e.setClassification(o);
                    break;
                  case 5:
                    (o = t.readInt32()), e.setContextLevel(o);
                    break;
                  case 6:
                    (o = t.readString()), e.setCurrentAttentionObject(o);
                    break;
                  default:
                    t.skipField();
                }
              return e;
            }),
            (proto.service.ActionConfig.prototype.serializeBinary =
              function () {
                var e = new r.BinaryWriter();
                return (
                  proto.service.ActionConfig.serializeBinaryToWriter(this, e),
                  e.getResultBuffer()
                );
              }),
            (proto.service.ActionConfig.serializeBinaryToWriter = function (
              e,
              t
            ) {
              var o = void 0;
              (o = e.getActionsList()).length > 0 &&
                t.writeRepeatedString(1, o),
                (o = e.getCharactersList()).length > 0 &&
                  t.writeRepeatedMessage(
                    2,
                    o,
                    proto.service.ActionConfig.Character.serializeBinaryToWriter
                  ),
                (o = e.getObjectsList()).length > 0 &&
                  t.writeRepeatedMessage(
                    3,
                    o,
                    proto.service.ActionConfig.Object.serializeBinaryToWriter
                  ),
                (o = e.getClassification()).length > 0 && t.writeString(4, o),
                0 !== (o = e.getContextLevel()) && t.writeInt32(5, o),
                (o = e.getCurrentAttentionObject()).length > 0 &&
                  t.writeString(6, o);
            }),
            (proto.service.ActionConfig.Character = function (e) {
              r.Message.initialize(this, e, 0, -1, null, null);
            }),
            s.inherits(proto.service.ActionConfig.Character, r.Message),
            s.DEBUG &&
              !COMPILED &&
              (proto.service.ActionConfig.Character.displayName =
                "proto.service.ActionConfig.Character"),
            r.Message.GENERATE_TO_OBJECT &&
              ((proto.service.ActionConfig.Character.prototype.toObject =
                function (e) {
                  return proto.service.ActionConfig.Character.toObject(e, this);
                }),
              (proto.service.ActionConfig.Character.toObject = function (e, t) {
                var o = {
                  name: r.Message.getFieldWithDefault(t, 1, ""),
                  bio: r.Message.getFieldWithDefault(t, 2, ""),
                };
                return e && (o.$jspbMessageInstance = t), o;
              })),
            (proto.service.ActionConfig.Character.deserializeBinary = function (
              e
            ) {
              var t = new r.BinaryReader(e),
                o = new proto.service.ActionConfig.Character();
              return proto.service.ActionConfig.Character.deserializeBinaryFromReader(
                o,
                t
              );
            }),
            (proto.service.ActionConfig.Character.deserializeBinaryFromReader =
              function (e, t) {
                for (; t.nextField() && !t.isEndGroup(); )
                  switch (t.getFieldNumber()) {
                    case 1:
                      var o = t.readString();
                      e.setName(o);
                      break;
                    case 2:
                      (o = t.readString()), e.setBio(o);
                      break;
                    default:
                      t.skipField();
                  }
                return e;
              }),
            (proto.service.ActionConfig.Character.prototype.serializeBinary =
              function () {
                var e = new r.BinaryWriter();
                return (
                  proto.service.ActionConfig.Character.serializeBinaryToWriter(
                    this,
                    e
                  ),
                  e.getResultBuffer()
                );
              }),
            (proto.service.ActionConfig.Character.serializeBinaryToWriter =
              function (e, t) {
                var o = void 0;
                (o = e.getName()).length > 0 && t.writeString(1, o),
                  (o = e.getBio()).length > 0 && t.writeString(2, o);
              }),
            (proto.service.ActionConfig.Character.prototype.getName =
              function () {
                return r.Message.getFieldWithDefault(this, 1, "");
              }),
            (proto.service.ActionConfig.Character.prototype.setName = function (
              e
            ) {
              r.Message.setProto3StringField(this, 1, e);
            }),
            (proto.service.ActionConfig.Character.prototype.getBio =
              function () {
                return r.Message.getFieldWithDefault(this, 2, "");
              }),
            (proto.service.ActionConfig.Character.prototype.setBio = function (
              e
            ) {
              r.Message.setProto3StringField(this, 2, e);
            }),
            (proto.service.ActionConfig.Object = function (e) {
              r.Message.initialize(this, e, 0, -1, null, null);
            }),
            s.inherits(proto.service.ActionConfig.Object, r.Message),
            s.DEBUG &&
              !COMPILED &&
              (proto.service.ActionConfig.Object.displayName =
                "proto.service.ActionConfig.Object"),
            r.Message.GENERATE_TO_OBJECT &&
              ((proto.service.ActionConfig.Object.prototype.toObject =
                function (e) {
                  return proto.service.ActionConfig.Object.toObject(e, this);
                }),
              (proto.service.ActionConfig.Object.toObject = function (e, t) {
                var o = {
                  name: r.Message.getFieldWithDefault(t, 1, ""),
                  description: r.Message.getFieldWithDefault(t, 2, ""),
                };
                return e && (o.$jspbMessageInstance = t), o;
              })),
            (proto.service.ActionConfig.Object.deserializeBinary = function (
              e
            ) {
              var t = new r.BinaryReader(e),
                o = new proto.service.ActionConfig.Object();
              return proto.service.ActionConfig.Object.deserializeBinaryFromReader(
                o,
                t
              );
            }),
            (proto.service.ActionConfig.Object.deserializeBinaryFromReader =
              function (e, t) {
                for (; t.nextField() && !t.isEndGroup(); )
                  switch (t.getFieldNumber()) {
                    case 1:
                      var o = t.readString();
                      e.setName(o);
                      break;
                    case 2:
                      (o = t.readString()), e.setDescription(o);
                      break;
                    default:
                      t.skipField();
                  }
                return e;
              }),
            (proto.service.ActionConfig.Object.prototype.serializeBinary =
              function () {
                var e = new r.BinaryWriter();
                return (
                  proto.service.ActionConfig.Object.serializeBinaryToWriter(
                    this,
                    e
                  ),
                  e.getResultBuffer()
                );
              }),
            (proto.service.ActionConfig.Object.serializeBinaryToWriter =
              function (e, t) {
                var o = void 0;
                (o = e.getName()).length > 0 && t.writeString(1, o),
                  (o = e.getDescription()).length > 0 && t.writeString(2, o);
              }),
            (proto.service.ActionConfig.Object.prototype.getName = function () {
              return r.Message.getFieldWithDefault(this, 1, "");
            }),
            (proto.service.ActionConfig.Object.prototype.setName = function (
              e
            ) {
              r.Message.setProto3StringField(this, 1, e);
            }),
            (proto.service.ActionConfig.Object.prototype.getDescription =
              function () {
                return r.Message.getFieldWithDefault(this, 2, "");
              }),
            (proto.service.ActionConfig.Object.prototype.setDescription =
              function (e) {
                r.Message.setProto3StringField(this, 2, e);
              }),
            (proto.service.ActionConfig.prototype.getActionsList = function () {
              return r.Message.getRepeatedField(this, 1);
            }),
            (proto.service.ActionConfig.prototype.setActionsList = function (
              e
            ) {
              r.Message.setField(this, 1, e || []);
            }),
            (proto.service.ActionConfig.prototype.addActions = function (e, t) {
              r.Message.addToRepeatedField(this, 1, e, t);
            }),
            (proto.service.ActionConfig.prototype.clearActionsList =
              function () {
                this.setActionsList([]);
              }),
            (proto.service.ActionConfig.prototype.getCharactersList =
              function () {
                return r.Message.getRepeatedWrapperField(
                  this,
                  proto.service.ActionConfig.Character,
                  2
                );
              }),
            (proto.service.ActionConfig.prototype.setCharactersList = function (
              e
            ) {
              r.Message.setRepeatedWrapperField(this, 2, e);
            }),
            (proto.service.ActionConfig.prototype.addCharacters = function (
              e,
              t
            ) {
              return r.Message.addToRepeatedWrapperField(
                this,
                2,
                e,
                proto.service.ActionConfig.Character,
                t
              );
            }),
            (proto.service.ActionConfig.prototype.clearCharactersList =
              function () {
                this.setCharactersList([]);
              }),
            (proto.service.ActionConfig.prototype.getObjectsList = function () {
              return r.Message.getRepeatedWrapperField(
                this,
                proto.service.ActionConfig.Object,
                3
              );
            }),
            (proto.service.ActionConfig.prototype.setObjectsList = function (
              e
            ) {
              r.Message.setRepeatedWrapperField(this, 3, e);
            }),
            (proto.service.ActionConfig.prototype.addObjects = function (e, t) {
              return r.Message.addToRepeatedWrapperField(
                this,
                3,
                e,
                proto.service.ActionConfig.Object,
                t
              );
            }),
            (proto.service.ActionConfig.prototype.clearObjectsList =
              function () {
                this.setObjectsList([]);
              }),
            (proto.service.ActionConfig.prototype.getClassification =
              function () {
                return r.Message.getFieldWithDefault(this, 4, "");
              }),
            (proto.service.ActionConfig.prototype.setClassification = function (
              e
            ) {
              r.Message.setProto3StringField(this, 4, e);
            }),
            (proto.service.ActionConfig.prototype.getContextLevel =
              function () {
                return r.Message.getFieldWithDefault(this, 5, 0);
              }),
            (proto.service.ActionConfig.prototype.setContextLevel = function (
              e
            ) {
              r.Message.setProto3IntField(this, 5, e);
            }),
            (proto.service.ActionConfig.prototype.getCurrentAttentionObject =
              function () {
                return r.Message.getFieldWithDefault(this, 6, "");
              }),
            (proto.service.ActionConfig.prototype.setCurrentAttentionObject =
              function (e) {
                r.Message.setProto3StringField(this, 6, e);
              }),
            (proto.service.STTRequest = function (e) {
              r.Message.initialize(
                this,
                e,
                0,
                -1,
                null,
                proto.service.STTRequest.oneofGroups_
              );
            }),
            s.inherits(proto.service.STTRequest, r.Message),
            s.DEBUG &&
              !COMPILED &&
              (proto.service.STTRequest.displayName =
                "proto.service.STTRequest"),
            (proto.service.STTRequest.oneofGroups_ = [[1, 2]]),
            (proto.service.STTRequest.RequestTypeCase = {
              REQUEST_TYPE_NOT_SET: 0,
              AUDIO_CONFIG: 1,
              AUDIO_CHUNK: 2,
            }),
            (proto.service.STTRequest.prototype.getRequestTypeCase =
              function () {
                return r.Message.computeOneofCase(
                  this,
                  proto.service.STTRequest.oneofGroups_[0]
                );
              }),
            r.Message.GENERATE_TO_OBJECT &&
              ((proto.service.STTRequest.prototype.toObject = function (e) {
                return proto.service.STTRequest.toObject(e, this);
              }),
              (proto.service.STTRequest.toObject = function (e, t) {
                var o,
                  r = {
                    audioConfig:
                      (o = t.getAudioConfig()) &&
                      proto.service.AudioConfig.toObject(e, o),
                    audioChunk: t.getAudioChunk_asB64(),
                  };
                return e && (r.$jspbMessageInstance = t), r;
              })),
            (proto.service.STTRequest.deserializeBinary = function (e) {
              var t = new r.BinaryReader(e),
                o = new proto.service.STTRequest();
              return proto.service.STTRequest.deserializeBinaryFromReader(o, t);
            }),
            (proto.service.STTRequest.deserializeBinaryFromReader = function (
              e,
              t
            ) {
              for (; t.nextField() && !t.isEndGroup(); )
                switch (t.getFieldNumber()) {
                  case 1:
                    var o = new proto.service.AudioConfig();
                    t.readMessage(
                      o,
                      proto.service.AudioConfig.deserializeBinaryFromReader
                    ),
                      e.setAudioConfig(o);
                    break;
                  case 2:
                    (o = t.readBytes()), e.setAudioChunk(o);
                    break;
                  default:
                    t.skipField();
                }
              return e;
            }),
            (proto.service.STTRequest.prototype.serializeBinary = function () {
              var e = new r.BinaryWriter();
              return (
                proto.service.STTRequest.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
              );
            }),
            (proto.service.STTRequest.serializeBinaryToWriter = function (
              e,
              t
            ) {
              var o = void 0;
              null != (o = e.getAudioConfig()) &&
                t.writeMessage(
                  1,
                  o,
                  proto.service.AudioConfig.serializeBinaryToWriter
                ),
                null != (o = r.Message.getField(e, 2)) && t.writeBytes(2, o);
            }),
            (proto.service.STTRequest.prototype.getAudioConfig = function () {
              return r.Message.getWrapperField(
                this,
                proto.service.AudioConfig,
                1
              );
            }),
            (proto.service.STTRequest.prototype.setAudioConfig = function (e) {
              r.Message.setOneofWrapperField(
                this,
                1,
                proto.service.STTRequest.oneofGroups_[0],
                e
              );
            }),
            (proto.service.STTRequest.prototype.clearAudioConfig = function () {
              this.setAudioConfig(void 0);
            }),
            (proto.service.STTRequest.prototype.hasAudioConfig = function () {
              return null != r.Message.getField(this, 1);
            }),
            (proto.service.STTRequest.prototype.getAudioChunk = function () {
              return r.Message.getFieldWithDefault(this, 2, "");
            }),
            (proto.service.STTRequest.prototype.getAudioChunk_asB64 =
              function () {
                return r.Message.bytesAsB64(this.getAudioChunk());
              }),
            (proto.service.STTRequest.prototype.getAudioChunk_asU8 =
              function () {
                return r.Message.bytesAsU8(this.getAudioChunk());
              }),
            (proto.service.STTRequest.prototype.setAudioChunk = function (e) {
              r.Message.setOneofField(
                this,
                2,
                proto.service.STTRequest.oneofGroups_[0],
                e
              );
            }),
            (proto.service.STTRequest.prototype.clearAudioChunk = function () {
              r.Message.setOneofField(
                this,
                2,
                proto.service.STTRequest.oneofGroups_[0],
                void 0
              );
            }),
            (proto.service.STTRequest.prototype.hasAudioChunk = function () {
              return null != r.Message.getField(this, 2);
            }),
            (proto.service.STTResponse = function (e) {
              r.Message.initialize(this, e, 0, -1, null, null);
            }),
            s.inherits(proto.service.STTResponse, r.Message),
            s.DEBUG &&
              !COMPILED &&
              (proto.service.STTResponse.displayName =
                "proto.service.STTResponse"),
            r.Message.GENERATE_TO_OBJECT &&
              ((proto.service.STTResponse.prototype.toObject = function (e) {
                return proto.service.STTResponse.toObject(e, this);
              }),
              (proto.service.STTResponse.toObject = function (e, t) {
                var o = { text: r.Message.getFieldWithDefault(t, 1, "") };
                return e && (o.$jspbMessageInstance = t), o;
              })),
            (proto.service.STTResponse.deserializeBinary = function (e) {
              var t = new r.BinaryReader(e),
                o = new proto.service.STTResponse();
              return proto.service.STTResponse.deserializeBinaryFromReader(
                o,
                t
              );
            }),
            (proto.service.STTResponse.deserializeBinaryFromReader = function (
              e,
              t
            ) {
              for (; t.nextField() && !t.isEndGroup(); )
                if (1 === t.getFieldNumber()) {
                  var o = t.readString();
                  e.setText(o);
                } else t.skipField();
              return e;
            }),
            (proto.service.STTResponse.prototype.serializeBinary = function () {
              var e = new r.BinaryWriter();
              return (
                proto.service.STTResponse.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
              );
            }),
            (proto.service.STTResponse.serializeBinaryToWriter = function (
              e,
              t
            ) {
              var o;
              (o = e.getText()).length > 0 && t.writeString(1, o);
            }),
            (proto.service.STTResponse.prototype.getText = function () {
              return r.Message.getFieldWithDefault(this, 1, "");
            }),
            (proto.service.STTResponse.prototype.setText = function (e) {
              r.Message.setProto3StringField(this, 1, e);
            }),
            (proto.service.GetResponseRequest = function (e) {
              r.Message.initialize(
                this,
                e,
                0,
                -1,
                null,
                proto.service.GetResponseRequest.oneofGroups_
              );
            }),
            s.inherits(proto.service.GetResponseRequest, r.Message),
            s.DEBUG &&
              !COMPILED &&
              (proto.service.GetResponseRequest.displayName =
                "proto.service.GetResponseRequest"),
            (proto.service.GetResponseRequest.oneofGroups_ = [[1, 2]]),
            (proto.service.GetResponseRequest.RequestTypeCase = {
              REQUEST_TYPE_NOT_SET: 0,
              GET_RESPONSE_CONFIG: 1,
              GET_RESPONSE_DATA: 2,
            }),
            (proto.service.GetResponseRequest.prototype.getRequestTypeCase =
              function () {
                return r.Message.computeOneofCase(
                  this,
                  proto.service.GetResponseRequest.oneofGroups_[0]
                );
              }),
            r.Message.GENERATE_TO_OBJECT &&
              ((proto.service.GetResponseRequest.prototype.toObject = function (
                e
              ) {
                return proto.service.GetResponseRequest.toObject(e, this);
              }),
              (proto.service.GetResponseRequest.toObject = function (e, t) {
                var o,
                  r = {
                    getResponseConfig:
                      (o = t.getGetResponseConfig()) &&
                      proto.service.GetResponseRequest.GetResponseConfig.toObject(
                        e,
                        o
                      ),
                    getResponseData:
                      (o = t.getGetResponseData()) &&
                      proto.service.GetResponseRequest.GetResponseData.toObject(
                        e,
                        o
                      ),
                  };
                return e && (r.$jspbMessageInstance = t), r;
              })),
            (proto.service.GetResponseRequest.deserializeBinary = function (e) {
              var t = new r.BinaryReader(e),
                o = new proto.service.GetResponseRequest();
              return proto.service.GetResponseRequest.deserializeBinaryFromReader(
                o,
                t
              );
            }),
            (proto.service.GetResponseRequest.deserializeBinaryFromReader =
              function (e, t) {
                for (; t.nextField() && !t.isEndGroup(); )
                  switch (t.getFieldNumber()) {
                    case 1:
                      var o =
                        new proto.service.GetResponseRequest.GetResponseConfig();
                      t.readMessage(
                        o,
                        proto.service.GetResponseRequest.GetResponseConfig
                          .deserializeBinaryFromReader
                      ),
                        e.setGetResponseConfig(o);
                      break;
                    case 2:
                      (o =
                        new proto.service.GetResponseRequest.GetResponseData()),
                        t.readMessage(
                          o,
                          proto.service.GetResponseRequest.GetResponseData
                            .deserializeBinaryFromReader
                        ),
                        e.setGetResponseData(o);
                      break;
                    default:
                      t.skipField();
                  }
                return e;
              }),
            (proto.service.GetResponseRequest.prototype.serializeBinary =
              function () {
                var e = new r.BinaryWriter();
                return (
                  proto.service.GetResponseRequest.serializeBinaryToWriter(
                    this,
                    e
                  ),
                  e.getResultBuffer()
                );
              }),
            (proto.service.GetResponseRequest.serializeBinaryToWriter =
              function (e, t) {
                var o = void 0;
                null != (o = e.getGetResponseConfig()) &&
                  t.writeMessage(
                    1,
                    o,
                    proto.service.GetResponseRequest.GetResponseConfig
                      .serializeBinaryToWriter
                  ),
                  null != (o = e.getGetResponseData()) &&
                    t.writeMessage(
                      2,
                      o,
                      proto.service.GetResponseRequest.GetResponseData
                        .serializeBinaryToWriter
                    );
              }),
            (proto.service.GetResponseRequest.GetResponseConfig = function (e) {
              r.Message.initialize(this, e, 0, -1, null, null);
            }),
            s.inherits(
              proto.service.GetResponseRequest.GetResponseConfig,
              r.Message
            ),
            s.DEBUG &&
              !COMPILED &&
              (proto.service.GetResponseRequest.GetResponseConfig.displayName =
                "proto.service.GetResponseRequest.GetResponseConfig"),
            r.Message.GENERATE_TO_OBJECT &&
              ((proto.service.GetResponseRequest.GetResponseConfig.prototype.toObject =
                function (e) {
                  return proto.service.GetResponseRequest.GetResponseConfig.toObject(
                    e,
                    this
                  );
                }),
              (proto.service.GetResponseRequest.GetResponseConfig.toObject =
                function (e, t) {
                  var o,
                    s = {
                      characterId: r.Message.getFieldWithDefault(t, 2, ""),
                      apiKey: r.Message.getFieldWithDefault(t, 3, ""),
                      sessionId: r.Message.getFieldWithDefault(t, 4, ""),
                      audioConfig:
                        (o = t.getAudioConfig()) &&
                        proto.service.AudioConfig.toObject(e, o),
                      actionConfig:
                        (o = t.getActionConfig()) &&
                        proto.service.ActionConfig.toObject(e, o),
                      speaker: r.Message.getFieldWithDefault(t, 7, ""),
                      languageCode: r.Message.getFieldWithDefault(t, 8, ""),
                    };
                  return e && (s.$jspbMessageInstance = t), s;
                })),
            (proto.service.GetResponseRequest.GetResponseConfig.deserializeBinary =
              function (e) {
                var t = new r.BinaryReader(e),
                  o = new proto.service.GetResponseRequest.GetResponseConfig();
                return proto.service.GetResponseRequest.GetResponseConfig.deserializeBinaryFromReader(
                  o,
                  t
                );
              }),
            (proto.service.GetResponseRequest.GetResponseConfig.deserializeBinaryFromReader =
              function (e, t) {
                for (; t.nextField() && !t.isEndGroup(); )
                  switch (t.getFieldNumber()) {
                    case 2:
                      var o = t.readString();
                      e.setCharacterId(o);
                      break;
                    case 3:
                      (o = t.readString()), e.setApiKey(o);
                      break;
                    case 4:
                      (o = t.readString()), e.setSessionId(o);
                      break;
                    case 5:
                      (o = new proto.service.AudioConfig()),
                        t.readMessage(
                          o,
                          proto.service.AudioConfig.deserializeBinaryFromReader
                        ),
                        e.setAudioConfig(o);
                      break;
                    case 6:
                      (o = new proto.service.ActionConfig()),
                        t.readMessage(
                          o,
                          proto.service.ActionConfig.deserializeBinaryFromReader
                        ),
                        e.setActionConfig(o);
                      break;
                    case 7:
                      (o = t.readString()), e.setSpeaker(o);
                      break;
                    case 8:
                      (o = t.readString()), e.setLanguageCode(o);
                      break;
                    default:
                      t.skipField();
                  }
                return e;
              }),
            (proto.service.GetResponseRequest.GetResponseConfig.prototype.serializeBinary =
              function () {
                var e = new r.BinaryWriter();
                return (
                  proto.service.GetResponseRequest.GetResponseConfig.serializeBinaryToWriter(
                    this,
                    e
                  ),
                  e.getResultBuffer()
                );
              }),
            (proto.service.GetResponseRequest.GetResponseConfig.serializeBinaryToWriter =
              function (e, t) {
                var o = void 0;
                (o = e.getCharacterId()).length > 0 && t.writeString(2, o),
                  (o = e.getApiKey()).length > 0 && t.writeString(3, o),
                  (o = e.getSessionId()).length > 0 && t.writeString(4, o),
                  null != (o = e.getAudioConfig()) &&
                    t.writeMessage(
                      5,
                      o,
                      proto.service.AudioConfig.serializeBinaryToWriter
                    ),
                  null != (o = e.getActionConfig()) &&
                    t.writeMessage(
                      6,
                      o,
                      proto.service.ActionConfig.serializeBinaryToWriter
                    ),
                  (o = e.getSpeaker()).length > 0 && t.writeString(7, o),
                  (o = e.getLanguageCode()).length > 0 && t.writeString(8, o);
              }),
            (proto.service.GetResponseRequest.GetResponseConfig.prototype.getCharacterId =
              function () {
                return r.Message.getFieldWithDefault(this, 2, "");
              }),
            (proto.service.GetResponseRequest.GetResponseConfig.prototype.setCharacterId =
              function (e) {
                r.Message.setProto3StringField(this, 2, e);
              }),
            (proto.service.GetResponseRequest.GetResponseConfig.prototype.getApiKey =
              function () {
                return r.Message.getFieldWithDefault(this, 3, "");
              }),
            (proto.service.GetResponseRequest.GetResponseConfig.prototype.setApiKey =
              function (e) {
                r.Message.setProto3StringField(this, 3, e);
              }),
            (proto.service.GetResponseRequest.GetResponseConfig.prototype.getSessionId =
              function () {
                return r.Message.getFieldWithDefault(this, 4, "");
              }),
            (proto.service.GetResponseRequest.GetResponseConfig.prototype.setSessionId =
              function (e) {
                r.Message.setProto3StringField(this, 4, e);
              }),
            (proto.service.GetResponseRequest.GetResponseConfig.prototype.getAudioConfig =
              function () {
                return r.Message.getWrapperField(
                  this,
                  proto.service.AudioConfig,
                  5
                );
              }),
            (proto.service.GetResponseRequest.GetResponseConfig.prototype.setAudioConfig =
              function (e) {
                r.Message.setWrapperField(this, 5, e);
              }),
            (proto.service.GetResponseRequest.GetResponseConfig.prototype.clearAudioConfig =
              function () {
                this.setAudioConfig(void 0);
              }),
            (proto.service.GetResponseRequest.GetResponseConfig.prototype.hasAudioConfig =
              function () {
                return null != r.Message.getField(this, 5);
              }),
            (proto.service.GetResponseRequest.GetResponseConfig.prototype.getActionConfig =
              function () {
                return r.Message.getWrapperField(
                  this,
                  proto.service.ActionConfig,
                  6
                );
              }),
            (proto.service.GetResponseRequest.GetResponseConfig.prototype.setActionConfig =
              function (e) {
                r.Message.setWrapperField(this, 6, e);
              }),
            (proto.service.GetResponseRequest.GetResponseConfig.prototype.clearActionConfig =
              function () {
                this.setActionConfig(void 0);
              }),
            (proto.service.GetResponseRequest.GetResponseConfig.prototype.hasActionConfig =
              function () {
                return null != r.Message.getField(this, 6);
              }),
            (proto.service.GetResponseRequest.GetResponseConfig.prototype.getSpeaker =
              function () {
                return r.Message.getFieldWithDefault(this, 7, "");
              }),
            (proto.service.GetResponseRequest.GetResponseConfig.prototype.setSpeaker =
              function (e) {
                r.Message.setProto3StringField(this, 7, e);
              }),
            (proto.service.GetResponseRequest.GetResponseConfig.prototype.getLanguageCode =
              function () {
                return r.Message.getFieldWithDefault(this, 8, "");
              }),
            (proto.service.GetResponseRequest.GetResponseConfig.prototype.setLanguageCode =
              function (e) {
                r.Message.setProto3StringField(this, 8, e);
              }),
            (proto.service.GetResponseRequest.GetResponseData = function (e) {
              r.Message.initialize(
                this,
                e,
                0,
                -1,
                null,
                proto.service.GetResponseRequest.GetResponseData.oneofGroups_
              );
            }),
            s.inherits(
              proto.service.GetResponseRequest.GetResponseData,
              r.Message
            ),
            s.DEBUG &&
              !COMPILED &&
              (proto.service.GetResponseRequest.GetResponseData.displayName =
                "proto.service.GetResponseRequest.GetResponseData"),
            (proto.service.GetResponseRequest.GetResponseData.oneofGroups_ = [
              [1, 2, 3],
            ]),
            (proto.service.GetResponseRequest.GetResponseData.InputTypeCase = {
              INPUT_TYPE_NOT_SET: 0,
              AUDIO_DATA: 1,
              TEXT_DATA: 2,
              TRIGGER_DATA: 3,
            }),
            (proto.service.GetResponseRequest.GetResponseData.prototype.getInputTypeCase =
              function () {
                return r.Message.computeOneofCase(
                  this,
                  proto.service.GetResponseRequest.GetResponseData
                    .oneofGroups_[0]
                );
              }),
            r.Message.GENERATE_TO_OBJECT &&
              ((proto.service.GetResponseRequest.GetResponseData.prototype.toObject =
                function (e) {
                  return proto.service.GetResponseRequest.GetResponseData.toObject(
                    e,
                    this
                  );
                }),
              (proto.service.GetResponseRequest.GetResponseData.toObject =
                function (e, t) {
                  var o,
                    s = {
                      audioData: t.getAudioData_asB64(),
                      textData: r.Message.getFieldWithDefault(t, 2, ""),
                      triggerData:
                        (o = t.getTriggerData()) &&
                        proto.service.TriggerConfig.toObject(e, o),
                    };
                  return e && (s.$jspbMessageInstance = t), s;
                })),
            (proto.service.GetResponseRequest.GetResponseData.deserializeBinary =
              function (e) {
                var t = new r.BinaryReader(e),
                  o = new proto.service.GetResponseRequest.GetResponseData();
                return proto.service.GetResponseRequest.GetResponseData.deserializeBinaryFromReader(
                  o,
                  t
                );
              }),
            (proto.service.GetResponseRequest.GetResponseData.deserializeBinaryFromReader =
              function (e, t) {
                for (; t.nextField() && !t.isEndGroup(); )
                  switch (t.getFieldNumber()) {
                    case 1:
                      var o = t.readBytes();
                      e.setAudioData(o);
                      break;
                    case 2:
                      (o = t.readString()), e.setTextData(o);
                      break;
                    case 3:
                      (o = new proto.service.TriggerConfig()),
                        t.readMessage(
                          o,
                          proto.service.TriggerConfig
                            .deserializeBinaryFromReader
                        ),
                        e.setTriggerData(o);
                      break;
                    default:
                      t.skipField();
                  }
                return e;
              }),
            (proto.service.GetResponseRequest.GetResponseData.prototype.serializeBinary =
              function () {
                var e = new r.BinaryWriter();
                return (
                  proto.service.GetResponseRequest.GetResponseData.serializeBinaryToWriter(
                    this,
                    e
                  ),
                  e.getResultBuffer()
                );
              }),
            (proto.service.GetResponseRequest.GetResponseData.serializeBinaryToWriter =
              function (e, t) {
                var o = void 0;
                null != (o = r.Message.getField(e, 1)) && t.writeBytes(1, o),
                  null != (o = r.Message.getField(e, 2)) && t.writeString(2, o),
                  null != (o = e.getTriggerData()) &&
                    t.writeMessage(
                      3,
                      o,
                      proto.service.TriggerConfig.serializeBinaryToWriter
                    );
              }),
            (proto.service.GetResponseRequest.GetResponseData.prototype.getAudioData =
              function () {
                return r.Message.getFieldWithDefault(this, 1, "");
              }),
            (proto.service.GetResponseRequest.GetResponseData.prototype.getAudioData_asB64 =
              function () {
                return r.Message.bytesAsB64(this.getAudioData());
              }),
            (proto.service.GetResponseRequest.GetResponseData.prototype.getAudioData_asU8 =
              function () {
                return r.Message.bytesAsU8(this.getAudioData());
              }),
            (proto.service.GetResponseRequest.GetResponseData.prototype.setAudioData =
              function (e) {
                r.Message.setOneofField(
                  this,
                  1,
                  proto.service.GetResponseRequest.GetResponseData
                    .oneofGroups_[0],
                  e
                );
              }),
            (proto.service.GetResponseRequest.GetResponseData.prototype.clearAudioData =
              function () {
                r.Message.setOneofField(
                  this,
                  1,
                  proto.service.GetResponseRequest.GetResponseData
                    .oneofGroups_[0],
                  void 0
                );
              }),
            (proto.service.GetResponseRequest.GetResponseData.prototype.hasAudioData =
              function () {
                return null != r.Message.getField(this, 1);
              }),
            (proto.service.GetResponseRequest.GetResponseData.prototype.getTextData =
              function () {
                return r.Message.getFieldWithDefault(this, 2, "");
              }),
            (proto.service.GetResponseRequest.GetResponseData.prototype.setTextData =
              function (e) {
                r.Message.setOneofField(
                  this,
                  2,
                  proto.service.GetResponseRequest.GetResponseData
                    .oneofGroups_[0],
                  e
                );
              }),
            (proto.service.GetResponseRequest.GetResponseData.prototype.clearTextData =
              function () {
                r.Message.setOneofField(
                  this,
                  2,
                  proto.service.GetResponseRequest.GetResponseData
                    .oneofGroups_[0],
                  void 0
                );
              }),
            (proto.service.GetResponseRequest.GetResponseData.prototype.hasTextData =
              function () {
                return null != r.Message.getField(this, 2);
              }),
            (proto.service.GetResponseRequest.GetResponseData.prototype.getTriggerData =
              function () {
                return r.Message.getWrapperField(
                  this,
                  proto.service.TriggerConfig,
                  3
                );
              }),
            (proto.service.GetResponseRequest.GetResponseData.prototype.setTriggerData =
              function (e) {
                r.Message.setOneofWrapperField(
                  this,
                  3,
                  proto.service.GetResponseRequest.GetResponseData
                    .oneofGroups_[0],
                  e
                );
              }),
            (proto.service.GetResponseRequest.GetResponseData.prototype.clearTriggerData =
              function () {
                this.setTriggerData(void 0);
              }),
            (proto.service.GetResponseRequest.GetResponseData.prototype.hasTriggerData =
              function () {
                return null != r.Message.getField(this, 3);
              }),
            (proto.service.GetResponseRequest.prototype.getGetResponseConfig =
              function () {
                return r.Message.getWrapperField(
                  this,
                  proto.service.GetResponseRequest.GetResponseConfig,
                  1
                );
              }),
            (proto.service.GetResponseRequest.prototype.setGetResponseConfig =
              function (e) {
                r.Message.setOneofWrapperField(
                  this,
                  1,
                  proto.service.GetResponseRequest.oneofGroups_[0],
                  e
                );
              }),
            (proto.service.GetResponseRequest.prototype.clearGetResponseConfig =
              function () {
                this.setGetResponseConfig(void 0);
              }),
            (proto.service.GetResponseRequest.prototype.hasGetResponseConfig =
              function () {
                return null != r.Message.getField(this, 1);
              }),
            (proto.service.GetResponseRequest.prototype.getGetResponseData =
              function () {
                return r.Message.getWrapperField(
                  this,
                  proto.service.GetResponseRequest.GetResponseData,
                  2
                );
              }),
            (proto.service.GetResponseRequest.prototype.setGetResponseData =
              function (e) {
                r.Message.setOneofWrapperField(
                  this,
                  2,
                  proto.service.GetResponseRequest.oneofGroups_[0],
                  e
                );
              }),
            (proto.service.GetResponseRequest.prototype.clearGetResponseData =
              function () {
                this.setGetResponseData(void 0);
              }),
            (proto.service.GetResponseRequest.prototype.hasGetResponseData =
              function () {
                return null != r.Message.getField(this, 2);
              }),
            (proto.service.GetResponseRequestSingle = function (e) {
              r.Message.initialize(this, e, 0, -1, null, null);
            }),
            s.inherits(proto.service.GetResponseRequestSingle, r.Message),
            s.DEBUG &&
              !COMPILED &&
              (proto.service.GetResponseRequestSingle.displayName =
                "proto.service.GetResponseRequestSingle"),
            r.Message.GENERATE_TO_OBJECT &&
              ((proto.service.GetResponseRequestSingle.prototype.toObject =
                function (e) {
                  return proto.service.GetResponseRequestSingle.toObject(
                    e,
                    this
                  );
                }),
              (proto.service.GetResponseRequestSingle.toObject = function (
                e,
                t
              ) {
                var o,
                  r = {
                    responseConfig:
                      (o = t.getResponseConfig()) &&
                      proto.service.GetResponseRequest.toObject(e, o),
                    responseData:
                      (o = t.getResponseData()) &&
                      proto.service.GetResponseRequest.toObject(e, o),
                  };
                return e && (r.$jspbMessageInstance = t), r;
              })),
            (proto.service.GetResponseRequestSingle.deserializeBinary =
              function (e) {
                var t = new r.BinaryReader(e),
                  o = new proto.service.GetResponseRequestSingle();
                return proto.service.GetResponseRequestSingle.deserializeBinaryFromReader(
                  o,
                  t
                );
              }),
            (proto.service.GetResponseRequestSingle.deserializeBinaryFromReader =
              function (e, t) {
                for (; t.nextField() && !t.isEndGroup(); )
                  switch (t.getFieldNumber()) {
                    case 1:
                      var o = new proto.service.GetResponseRequest();
                      t.readMessage(
                        o,
                        proto.service.GetResponseRequest
                          .deserializeBinaryFromReader
                      ),
                        e.setResponseConfig(o);
                      break;
                    case 2:
                      (o = new proto.service.GetResponseRequest()),
                        t.readMessage(
                          o,
                          proto.service.GetResponseRequest
                            .deserializeBinaryFromReader
                        ),
                        e.setResponseData(o);
                      break;
                    default:
                      t.skipField();
                  }
                return e;
              }),
            (proto.service.GetResponseRequestSingle.prototype.serializeBinary =
              function () {
                var e = new r.BinaryWriter();
                return (
                  proto.service.GetResponseRequestSingle.serializeBinaryToWriter(
                    this,
                    e
                  ),
                  e.getResultBuffer()
                );
              }),
            (proto.service.GetResponseRequestSingle.serializeBinaryToWriter =
              function (e, t) {
                var o = void 0;
                null != (o = e.getResponseConfig()) &&
                  t.writeMessage(
                    1,
                    o,
                    proto.service.GetResponseRequest.serializeBinaryToWriter
                  ),
                  null != (o = e.getResponseData()) &&
                    t.writeMessage(
                      2,
                      o,
                      proto.service.GetResponseRequest.serializeBinaryToWriter
                    );
              }),
            (proto.service.GetResponseRequestSingle.prototype.getResponseConfig =
              function () {
                return r.Message.getWrapperField(
                  this,
                  proto.service.GetResponseRequest,
                  1
                );
              }),
            (proto.service.GetResponseRequestSingle.prototype.setResponseConfig =
              function (e) {
                r.Message.setWrapperField(this, 1, e);
              }),
            (proto.service.GetResponseRequestSingle.prototype.clearResponseConfig =
              function () {
                this.setResponseConfig(void 0);
              }),
            (proto.service.GetResponseRequestSingle.prototype.hasResponseConfig =
              function () {
                return null != r.Message.getField(this, 1);
              }),
            (proto.service.GetResponseRequestSingle.prototype.getResponseData =
              function () {
                return r.Message.getWrapperField(
                  this,
                  proto.service.GetResponseRequest,
                  2
                );
              }),
            (proto.service.GetResponseRequestSingle.prototype.setResponseData =
              function (e) {
                r.Message.setWrapperField(this, 2, e);
              }),
            (proto.service.GetResponseRequestSingle.prototype.clearResponseData =
              function () {
                this.setResponseData(void 0);
              }),
            (proto.service.GetResponseRequestSingle.prototype.hasResponseData =
              function () {
                return null != r.Message.getField(this, 2);
              }),
            (proto.service.GetResponseResponse = function (e) {
              r.Message.initialize(
                this,
                e,
                0,
                -1,
                null,
                proto.service.GetResponseResponse.oneofGroups_
              );
            }),
            s.inherits(proto.service.GetResponseResponse, r.Message),
            s.DEBUG &&
              !COMPILED &&
              (proto.service.GetResponseResponse.displayName =
                "proto.service.GetResponseResponse"),
            (proto.service.GetResponseResponse.oneofGroups_ = [
              [2, 3, 4, 5, 6, 7, 8],
            ]),
            (proto.service.GetResponseResponse.ResponseTypeCase = {
              RESPONSE_TYPE_NOT_SET: 0,
              ACTION_RESPONSE: 2,
              AUDIO_RESPONSE: 3,
              DEBUG_LOG: 4,
              USER_QUERY: 5,
              BT_RESPONSE: 6,
              EMOTION_RESPONSE: 7,
              INTERACTION_ID: 8,
            }),
            (proto.service.GetResponseResponse.prototype.getResponseTypeCase =
              function () {
                return r.Message.computeOneofCase(
                  this,
                  proto.service.GetResponseResponse.oneofGroups_[0]
                );
              }),
            r.Message.GENERATE_TO_OBJECT &&
              ((proto.service.GetResponseResponse.prototype.toObject =
                function (e) {
                  return proto.service.GetResponseResponse.toObject(e, this);
                }),
              (proto.service.GetResponseResponse.toObject = function (e, t) {
                var o,
                  s = {
                    sessionId: r.Message.getFieldWithDefault(t, 1, ""),
                    actionResponse:
                      (o = t.getActionResponse()) &&
                      proto.service.GetResponseResponse.ActionResponse.toObject(
                        e,
                        o
                      ),
                    audioResponse:
                      (o = t.getAudioResponse()) &&
                      proto.service.GetResponseResponse.AudioResponse.toObject(
                        e,
                        o
                      ),
                    debugLog: r.Message.getFieldWithDefault(t, 4, ""),
                    userQuery:
                      (o = t.getUserQuery()) &&
                      proto.service.GetResponseResponse.UserTranscript.toObject(
                        e,
                        o
                      ),
                    btResponse:
                      (o = t.getBtResponse()) &&
                      proto.service.GetResponseResponse.BehaviorTreeResponse.toObject(
                        e,
                        o
                      ),
                    emotionResponse: r.Message.getFieldWithDefault(t, 7, ""),
                    interactionId: r.Message.getFieldWithDefault(t, 8, ""),
                  };
                return e && (s.$jspbMessageInstance = t), s;
              })),
            (proto.service.GetResponseResponse.deserializeBinary = function (
              e
            ) {
              var t = new r.BinaryReader(e),
                o = new proto.service.GetResponseResponse();
              return proto.service.GetResponseResponse.deserializeBinaryFromReader(
                o,
                t
              );
            }),
            (proto.service.GetResponseResponse.deserializeBinaryFromReader =
              function (e, t) {
                for (; t.nextField() && !t.isEndGroup(); )
                  switch (t.getFieldNumber()) {
                    case 1:
                      var o = t.readString();
                      e.setSessionId(o);
                      break;
                    case 2:
                      (o =
                        new proto.service.GetResponseResponse.ActionResponse()),
                        t.readMessage(
                          o,
                          proto.service.GetResponseResponse.ActionResponse
                            .deserializeBinaryFromReader
                        ),
                        e.setActionResponse(o);
                      break;
                    case 3:
                      (o =
                        new proto.service.GetResponseResponse.AudioResponse()),
                        t.readMessage(
                          o,
                          proto.service.GetResponseResponse.AudioResponse
                            .deserializeBinaryFromReader
                        ),
                        e.setAudioResponse(o);
                      break;
                    case 4:
                      (o = t.readString()), e.setDebugLog(o);
                      break;
                    case 5:
                      (o =
                        new proto.service.GetResponseResponse.UserTranscript()),
                        t.readMessage(
                          o,
                          proto.service.GetResponseResponse.UserTranscript
                            .deserializeBinaryFromReader
                        ),
                        e.setUserQuery(o);
                      break;
                    case 6:
                      (o =
                        new proto.service.GetResponseResponse.BehaviorTreeResponse()),
                        t.readMessage(
                          o,
                          proto.service.GetResponseResponse.BehaviorTreeResponse
                            .deserializeBinaryFromReader
                        ),
                        e.setBtResponse(o);
                      break;
                    case 7:
                      (o = t.readString()), e.setEmotionResponse(o);
                      break;
                    case 8:
                      (o = t.readString()), e.setInteractionId(o);
                      break;
                    default:
                      t.skipField();
                  }
                return e;
              }),
            (proto.service.GetResponseResponse.prototype.serializeBinary =
              function () {
                var e = new r.BinaryWriter();
                return (
                  proto.service.GetResponseResponse.serializeBinaryToWriter(
                    this,
                    e
                  ),
                  e.getResultBuffer()
                );
              }),
            (proto.service.GetResponseResponse.serializeBinaryToWriter =
              function (e, t) {
                var o = void 0;
                (o = e.getSessionId()).length > 0 && t.writeString(1, o),
                  null != (o = e.getActionResponse()) &&
                    t.writeMessage(
                      2,
                      o,
                      proto.service.GetResponseResponse.ActionResponse
                        .serializeBinaryToWriter
                    ),
                  null != (o = e.getAudioResponse()) &&
                    t.writeMessage(
                      3,
                      o,
                      proto.service.GetResponseResponse.AudioResponse
                        .serializeBinaryToWriter
                    ),
                  null != (o = r.Message.getField(e, 4)) && t.writeString(4, o),
                  null != (o = e.getUserQuery()) &&
                    t.writeMessage(
                      5,
                      o,
                      proto.service.GetResponseResponse.UserTranscript
                        .serializeBinaryToWriter
                    ),
                  null != (o = e.getBtResponse()) &&
                    t.writeMessage(
                      6,
                      o,
                      proto.service.GetResponseResponse.BehaviorTreeResponse
                        .serializeBinaryToWriter
                    ),
                  null != (o = r.Message.getField(e, 7)) && t.writeString(7, o),
                  null != (o = r.Message.getField(e, 8)) && t.writeString(8, o);
              }),
            (proto.service.GetResponseResponse.AudioResponse = function (e) {
              r.Message.initialize(
                this,
                e,
                0,
                -1,
                null,
                proto.service.GetResponseResponse.AudioResponse.oneofGroups_
              );
            }),
            s.inherits(
              proto.service.GetResponseResponse.AudioResponse,
              r.Message
            ),
            s.DEBUG &&
              !COMPILED &&
              (proto.service.GetResponseResponse.AudioResponse.displayName =
                "proto.service.GetResponseResponse.AudioResponse"),
            (proto.service.GetResponseResponse.AudioResponse.oneofGroups_ = [
              [6, 7],
            ]),
            (proto.service.GetResponseResponse.AudioResponse.FaceDataTypeCase =
              {
                FACE_DATA_TYPE_NOT_SET: 0,
                VISEMES_DATA: 6,
                BLENDSHAPES_DATA: 7,
              }),
            (proto.service.GetResponseResponse.AudioResponse.prototype.getFaceDataTypeCase =
              function () {
                return r.Message.computeOneofCase(
                  this,
                  proto.service.GetResponseResponse.AudioResponse
                    .oneofGroups_[0]
                );
              }),
            r.Message.GENERATE_TO_OBJECT &&
              ((proto.service.GetResponseResponse.AudioResponse.prototype.toObject =
                function (e) {
                  return proto.service.GetResponseResponse.AudioResponse.toObject(
                    e,
                    this
                  );
                }),
              (proto.service.GetResponseResponse.AudioResponse.toObject =
                function (e, t) {
                  var o,
                    s = {
                      audioData: t.getAudioData_asB64(),
                      audioConfig:
                        (o = t.getAudioConfig()) &&
                        proto.service.AudioConfig.toObject(e, o),
                      textData: r.Message.getFieldWithDefault(t, 3, ""),
                      endOfResponse: r.Message.getFieldWithDefault(t, 4, !1),
                      faceData: r.Message.getFieldWithDefault(t, 5, ""),
                      visemesData:
                        (o = t.getVisemesData()) &&
                        proto.service.VisemesData.toObject(e, o),
                      blendshapesData:
                        (o = t.getBlendshapesData()) &&
                        proto.service.BlendShapesData.toObject(e, o),
                      emotionResponse:
                        (o = t.getEmotionResponse()) &&
                        proto.service.GetResponseResponse.EmotionResponse.toObject(
                          e,
                          o
                        ),
                    };
                  return e && (s.$jspbMessageInstance = t), s;
                })),
            (proto.service.GetResponseResponse.AudioResponse.deserializeBinary =
              function (e) {
                var t = new r.BinaryReader(e),
                  o = new proto.service.GetResponseResponse.AudioResponse();
                return proto.service.GetResponseResponse.AudioResponse.deserializeBinaryFromReader(
                  o,
                  t
                );
              }),
            (proto.service.GetResponseResponse.AudioResponse.deserializeBinaryFromReader =
              function (e, t) {
                for (; t.nextField() && !t.isEndGroup(); )
                  switch (t.getFieldNumber()) {
                    case 1:
                      var o = t.readBytes();
                      e.setAudioData(o);
                      break;
                    case 2:
                      (o = new proto.service.AudioConfig()),
                        t.readMessage(
                          o,
                          proto.service.AudioConfig.deserializeBinaryFromReader
                        ),
                        e.setAudioConfig(o);
                      break;
                    case 3:
                      (o = t.readString()), e.setTextData(o);
                      break;
                    case 4:
                      (o = t.readBool()), e.setEndOfResponse(o);
                      break;
                    case 5:
                      (o = t.readString()), e.setFaceData(o);
                      break;
                    case 6:
                      (o = new proto.service.VisemesData()),
                        t.readMessage(
                          o,
                          proto.service.VisemesData.deserializeBinaryFromReader
                        ),
                        e.setVisemesData(o);
                      break;
                    case 7:
                      (o = new proto.service.BlendShapesData()),
                        t.readMessage(
                          o,
                          proto.service.BlendShapesData
                            .deserializeBinaryFromReader
                        ),
                        e.setBlendshapesData(o);
                      break;
                    case 8:
                      (o =
                        new proto.service.GetResponseResponse.EmotionResponse()),
                        t.readMessage(
                          o,
                          proto.service.GetResponseResponse.EmotionResponse
                            .deserializeBinaryFromReader
                        ),
                        e.setEmotionResponse(o);
                      break;
                    default:
                      t.skipField();
                  }
                return e;
              }),
            (proto.service.GetResponseResponse.AudioResponse.prototype.serializeBinary =
              function () {
                var e = new r.BinaryWriter();
                return (
                  proto.service.GetResponseResponse.AudioResponse.serializeBinaryToWriter(
                    this,
                    e
                  ),
                  e.getResultBuffer()
                );
              }),
            (proto.service.GetResponseResponse.AudioResponse.serializeBinaryToWriter =
              function (e, t) {
                var o = void 0;
                (o = e.getAudioData_asU8()).length > 0 && t.writeBytes(1, o),
                  null != (o = e.getAudioConfig()) &&
                    t.writeMessage(
                      2,
                      o,
                      proto.service.AudioConfig.serializeBinaryToWriter
                    ),
                  (o = e.getTextData()).length > 0 && t.writeString(3, o),
                  (o = e.getEndOfResponse()) && t.writeBool(4, o),
                  (o = e.getFaceData()).length > 0 && t.writeString(5, o),
                  null != (o = e.getVisemesData()) &&
                    t.writeMessage(
                      6,
                      o,
                      proto.service.VisemesData.serializeBinaryToWriter
                    ),
                  null != (o = e.getBlendshapesData()) &&
                    t.writeMessage(
                      7,
                      o,
                      proto.service.BlendShapesData.serializeBinaryToWriter
                    ),
                  null != (o = e.getEmotionResponse()) &&
                    t.writeMessage(
                      8,
                      o,
                      proto.service.GetResponseResponse.EmotionResponse
                        .serializeBinaryToWriter
                    );
              }),
            (proto.service.GetResponseResponse.AudioResponse.prototype.getAudioData =
              function () {
                return r.Message.getFieldWithDefault(this, 1, "");
              }),
            (proto.service.GetResponseResponse.AudioResponse.prototype.getAudioData_asB64 =
              function () {
                return r.Message.bytesAsB64(this.getAudioData());
              }),
            (proto.service.GetResponseResponse.AudioResponse.prototype.getAudioData_asU8 =
              function () {
                return r.Message.bytesAsU8(this.getAudioData());
              }),
            (proto.service.GetResponseResponse.AudioResponse.prototype.setAudioData =
              function (e) {
                r.Message.setProto3BytesField(this, 1, e);
              }),
            (proto.service.GetResponseResponse.AudioResponse.prototype.getAudioConfig =
              function () {
                return r.Message.getWrapperField(
                  this,
                  proto.service.AudioConfig,
                  2
                );
              }),
            (proto.service.GetResponseResponse.AudioResponse.prototype.setAudioConfig =
              function (e) {
                r.Message.setWrapperField(this, 2, e);
              }),
            (proto.service.GetResponseResponse.AudioResponse.prototype.clearAudioConfig =
              function () {
                this.setAudioConfig(void 0);
              }),
            (proto.service.GetResponseResponse.AudioResponse.prototype.hasAudioConfig =
              function () {
                return null != r.Message.getField(this, 2);
              }),
            (proto.service.GetResponseResponse.AudioResponse.prototype.getTextData =
              function () {
                return r.Message.getFieldWithDefault(this, 3, "");
              }),
            (proto.service.GetResponseResponse.AudioResponse.prototype.setTextData =
              function (e) {
                r.Message.setProto3StringField(this, 3, e);
              }),
            (proto.service.GetResponseResponse.AudioResponse.prototype.getEndOfResponse =
              function () {
                return r.Message.getFieldWithDefault(this, 4, !1);
              }),
            (proto.service.GetResponseResponse.AudioResponse.prototype.setEndOfResponse =
              function (e) {
                r.Message.setProto3BooleanField(this, 4, e);
              }),
            (proto.service.GetResponseResponse.AudioResponse.prototype.getFaceData =
              function () {
                return r.Message.getFieldWithDefault(this, 5, "");
              }),
            (proto.service.GetResponseResponse.AudioResponse.prototype.setFaceData =
              function (e) {
                r.Message.setProto3StringField(this, 5, e);
              }),
            (proto.service.GetResponseResponse.AudioResponse.prototype.getVisemesData =
              function () {
                return r.Message.getWrapperField(
                  this,
                  proto.service.VisemesData,
                  6
                );
              }),
            (proto.service.GetResponseResponse.AudioResponse.prototype.setVisemesData =
              function (e) {
                r.Message.setOneofWrapperField(
                  this,
                  6,
                  proto.service.GetResponseResponse.AudioResponse
                    .oneofGroups_[0],
                  e
                );
              }),
            (proto.service.GetResponseResponse.AudioResponse.prototype.clearVisemesData =
              function () {
                this.setVisemesData(void 0);
              }),
            (proto.service.GetResponseResponse.AudioResponse.prototype.hasVisemesData =
              function () {
                return null != r.Message.getField(this, 6);
              }),
            (proto.service.GetResponseResponse.AudioResponse.prototype.getBlendshapesData =
              function () {
                return r.Message.getWrapperField(
                  this,
                  proto.service.BlendShapesData,
                  7
                );
              }),
            (proto.service.GetResponseResponse.AudioResponse.prototype.setBlendshapesData =
              function (e) {
                r.Message.setOneofWrapperField(
                  this,
                  7,
                  proto.service.GetResponseResponse.AudioResponse
                    .oneofGroups_[0],
                  e
                );
              }),
            (proto.service.GetResponseResponse.AudioResponse.prototype.clearBlendshapesData =
              function () {
                this.setBlendshapesData(void 0);
              }),
            (proto.service.GetResponseResponse.AudioResponse.prototype.hasBlendshapesData =
              function () {
                return null != r.Message.getField(this, 7);
              }),
            (proto.service.GetResponseResponse.AudioResponse.prototype.getEmotionResponse =
              function () {
                return r.Message.getWrapperField(
                  this,
                  proto.service.GetResponseResponse.EmotionResponse,
                  8
                );
              }),
            (proto.service.GetResponseResponse.AudioResponse.prototype.setEmotionResponse =
              function (e) {
                r.Message.setWrapperField(this, 8, e);
              }),
            (proto.service.GetResponseResponse.AudioResponse.prototype.clearEmotionResponse =
              function () {
                this.setEmotionResponse(void 0);
              }),
            (proto.service.GetResponseResponse.AudioResponse.prototype.hasEmotionResponse =
              function () {
                return null != r.Message.getField(this, 8);
              }),
            (proto.service.GetResponseResponse.ActionResponse = function (e) {
              r.Message.initialize(this, e, 0, -1, null, null);
            }),
            s.inherits(
              proto.service.GetResponseResponse.ActionResponse,
              r.Message
            ),
            s.DEBUG &&
              !COMPILED &&
              (proto.service.GetResponseResponse.ActionResponse.displayName =
                "proto.service.GetResponseResponse.ActionResponse"),
            r.Message.GENERATE_TO_OBJECT &&
              ((proto.service.GetResponseResponse.ActionResponse.prototype.toObject =
                function (e) {
                  return proto.service.GetResponseResponse.ActionResponse.toObject(
                    e,
                    this
                  );
                }),
              (proto.service.GetResponseResponse.ActionResponse.toObject =
                function (e, t) {
                  var o = { action: r.Message.getFieldWithDefault(t, 1, "") };
                  return e && (o.$jspbMessageInstance = t), o;
                })),
            (proto.service.GetResponseResponse.ActionResponse.deserializeBinary =
              function (e) {
                var t = new r.BinaryReader(e),
                  o = new proto.service.GetResponseResponse.ActionResponse();
                return proto.service.GetResponseResponse.ActionResponse.deserializeBinaryFromReader(
                  o,
                  t
                );
              }),
            (proto.service.GetResponseResponse.ActionResponse.deserializeBinaryFromReader =
              function (e, t) {
                for (; t.nextField() && !t.isEndGroup(); )
                  if (1 === t.getFieldNumber()) {
                    var o = t.readString();
                    e.setAction(o);
                  } else t.skipField();
                return e;
              }),
            (proto.service.GetResponseResponse.ActionResponse.prototype.serializeBinary =
              function () {
                var e = new r.BinaryWriter();
                return (
                  proto.service.GetResponseResponse.ActionResponse.serializeBinaryToWriter(
                    this,
                    e
                  ),
                  e.getResultBuffer()
                );
              }),
            (proto.service.GetResponseResponse.ActionResponse.serializeBinaryToWriter =
              function (e, t) {
                var o;
                (o = e.getAction()).length > 0 && t.writeString(1, o);
              }),
            (proto.service.GetResponseResponse.ActionResponse.prototype.getAction =
              function () {
                return r.Message.getFieldWithDefault(this, 1, "");
              }),
            (proto.service.GetResponseResponse.ActionResponse.prototype.setAction =
              function (e) {
                r.Message.setProto3StringField(this, 1, e);
              }),
            (proto.service.GetResponseResponse.EmotionResponse = function (e) {
              r.Message.initialize(this, e, 0, -1, null, null);
            }),
            s.inherits(
              proto.service.GetResponseResponse.EmotionResponse,
              r.Message
            ),
            s.DEBUG &&
              !COMPILED &&
              (proto.service.GetResponseResponse.EmotionResponse.displayName =
                "proto.service.GetResponseResponse.EmotionResponse"),
            r.Message.GENERATE_TO_OBJECT &&
              ((proto.service.GetResponseResponse.EmotionResponse.prototype.toObject =
                function (e) {
                  return proto.service.GetResponseResponse.EmotionResponse.toObject(
                    e,
                    this
                  );
                }),
              (proto.service.GetResponseResponse.EmotionResponse.toObject =
                function (e, t) {
                  var o = {
                    emotion: r.Message.getFieldWithDefault(t, 1, ""),
                    scale: r.Message.getFieldWithDefault(t, 2, ""),
                  };
                  return e && (o.$jspbMessageInstance = t), o;
                })),
            (proto.service.GetResponseResponse.EmotionResponse.deserializeBinary =
              function (e) {
                var t = new r.BinaryReader(e),
                  o = new proto.service.GetResponseResponse.EmotionResponse();
                return proto.service.GetResponseResponse.EmotionResponse.deserializeBinaryFromReader(
                  o,
                  t
                );
              }),
            (proto.service.GetResponseResponse.EmotionResponse.deserializeBinaryFromReader =
              function (e, t) {
                for (; t.nextField() && !t.isEndGroup(); )
                  switch (t.getFieldNumber()) {
                    case 1:
                      var o = t.readString();
                      e.setEmotion(o);
                      break;
                    case 2:
                      (o = t.readString()), e.setScale(o);
                      break;
                    default:
                      t.skipField();
                  }
                return e;
              }),
            (proto.service.GetResponseResponse.EmotionResponse.prototype.serializeBinary =
              function () {
                var e = new r.BinaryWriter();
                return (
                  proto.service.GetResponseResponse.EmotionResponse.serializeBinaryToWriter(
                    this,
                    e
                  ),
                  e.getResultBuffer()
                );
              }),
            (proto.service.GetResponseResponse.EmotionResponse.serializeBinaryToWriter =
              function (e, t) {
                var o = void 0;
                (o = e.getEmotion()).length > 0 && t.writeString(1, o),
                  (o = e.getScale()).length > 0 && t.writeString(2, o);
              }),
            (proto.service.GetResponseResponse.EmotionResponse.prototype.getEmotion =
              function () {
                return r.Message.getFieldWithDefault(this, 1, "");
              }),
            (proto.service.GetResponseResponse.EmotionResponse.prototype.setEmotion =
              function (e) {
                r.Message.setProto3StringField(this, 1, e);
              }),
            (proto.service.GetResponseResponse.EmotionResponse.prototype.getScale =
              function () {
                return r.Message.getFieldWithDefault(this, 2, "");
              }),
            (proto.service.GetResponseResponse.EmotionResponse.prototype.setScale =
              function (e) {
                r.Message.setProto3StringField(this, 2, e);
              }),
            (proto.service.GetResponseResponse.BehaviorTreeResponse = function (
              e
            ) {
              r.Message.initialize(this, e, 0, -1, null, null);
            }),
            s.inherits(
              proto.service.GetResponseResponse.BehaviorTreeResponse,
              r.Message
            ),
            s.DEBUG &&
              !COMPILED &&
              (proto.service.GetResponseResponse.BehaviorTreeResponse.displayName =
                "proto.service.GetResponseResponse.BehaviorTreeResponse"),
            r.Message.GENERATE_TO_OBJECT &&
              ((proto.service.GetResponseResponse.BehaviorTreeResponse.prototype.toObject =
                function (e) {
                  return proto.service.GetResponseResponse.BehaviorTreeResponse.toObject(
                    e,
                    this
                  );
                }),
              (proto.service.GetResponseResponse.BehaviorTreeResponse.toObject =
                function (e, t) {
                  var o = {
                    btCode: r.Message.getFieldWithDefault(t, 1, ""),
                    btConstants: r.Message.getFieldWithDefault(t, 2, ""),
                    narrativeSectionId: r.Message.getFieldWithDefault(t, 3, ""),
                  };
                  return e && (o.$jspbMessageInstance = t), o;
                })),
            (proto.service.GetResponseResponse.BehaviorTreeResponse.deserializeBinary =
              function (e) {
                var t = new r.BinaryReader(e),
                  o =
                    new proto.service.GetResponseResponse.BehaviorTreeResponse();
                return proto.service.GetResponseResponse.BehaviorTreeResponse.deserializeBinaryFromReader(
                  o,
                  t
                );
              }),
            (proto.service.GetResponseResponse.BehaviorTreeResponse.deserializeBinaryFromReader =
              function (e, t) {
                for (; t.nextField() && !t.isEndGroup(); )
                  switch (t.getFieldNumber()) {
                    case 1:
                      var o = t.readString();
                      e.setBtCode(o);
                      break;
                    case 2:
                      (o = t.readString()), e.setBtConstants(o);
                      break;
                    case 3:
                      (o = t.readString()), e.setNarrativeSectionId(o);
                      break;
                    default:
                      t.skipField();
                  }
                return e;
              }),
            (proto.service.GetResponseResponse.BehaviorTreeResponse.prototype.serializeBinary =
              function () {
                var e = new r.BinaryWriter();
                return (
                  proto.service.GetResponseResponse.BehaviorTreeResponse.serializeBinaryToWriter(
                    this,
                    e
                  ),
                  e.getResultBuffer()
                );
              }),
            (proto.service.GetResponseResponse.BehaviorTreeResponse.serializeBinaryToWriter =
              function (e, t) {
                var o = void 0;
                (o = e.getBtCode()).length > 0 && t.writeString(1, o),
                  (o = e.getBtConstants()).length > 0 && t.writeString(2, o),
                  (o = e.getNarrativeSectionId()).length > 0 &&
                    t.writeString(3, o);
              }),
            (proto.service.GetResponseResponse.BehaviorTreeResponse.prototype.getBtCode =
              function () {
                return r.Message.getFieldWithDefault(this, 1, "");
              }),
            (proto.service.GetResponseResponse.BehaviorTreeResponse.prototype.setBtCode =
              function (e) {
                r.Message.setProto3StringField(this, 1, e);
              }),
            (proto.service.GetResponseResponse.BehaviorTreeResponse.prototype.getBtConstants =
              function () {
                return r.Message.getFieldWithDefault(this, 2, "");
              }),
            (proto.service.GetResponseResponse.BehaviorTreeResponse.prototype.setBtConstants =
              function (e) {
                r.Message.setProto3StringField(this, 2, e);
              }),
            (proto.service.GetResponseResponse.BehaviorTreeResponse.prototype.getNarrativeSectionId =
              function () {
                return r.Message.getFieldWithDefault(this, 3, "");
              }),
            (proto.service.GetResponseResponse.BehaviorTreeResponse.prototype.setNarrativeSectionId =
              function (e) {
                r.Message.setProto3StringField(this, 3, e);
              }),
            (proto.service.GetResponseResponse.UserTranscript = function (e) {
              r.Message.initialize(this, e, 0, -1, null, null);
            }),
            s.inherits(
              proto.service.GetResponseResponse.UserTranscript,
              r.Message
            ),
            s.DEBUG &&
              !COMPILED &&
              (proto.service.GetResponseResponse.UserTranscript.displayName =
                "proto.service.GetResponseResponse.UserTranscript"),
            r.Message.GENERATE_TO_OBJECT &&
              ((proto.service.GetResponseResponse.UserTranscript.prototype.toObject =
                function (e) {
                  return proto.service.GetResponseResponse.UserTranscript.toObject(
                    e,
                    this
                  );
                }),
              (proto.service.GetResponseResponse.UserTranscript.toObject =
                function (e, t) {
                  var o = {
                    textData: r.Message.getFieldWithDefault(t, 1, ""),
                    isFinal: r.Message.getFieldWithDefault(t, 2, !1),
                    endOfResponse: r.Message.getFieldWithDefault(t, 3, !1),
                  };
                  return e && (o.$jspbMessageInstance = t), o;
                })),
            (proto.service.GetResponseResponse.UserTranscript.deserializeBinary =
              function (e) {
                var t = new r.BinaryReader(e),
                  o = new proto.service.GetResponseResponse.UserTranscript();
                return proto.service.GetResponseResponse.UserTranscript.deserializeBinaryFromReader(
                  o,
                  t
                );
              }),
            (proto.service.GetResponseResponse.UserTranscript.deserializeBinaryFromReader =
              function (e, t) {
                for (; t.nextField() && !t.isEndGroup(); )
                  switch (t.getFieldNumber()) {
                    case 1:
                      var o = t.readString();
                      e.setTextData(o);
                      break;
                    case 2:
                      (o = t.readBool()), e.setIsFinal(o);
                      break;
                    case 3:
                      (o = t.readBool()), e.setEndOfResponse(o);
                      break;
                    default:
                      t.skipField();
                  }
                return e;
              }),
            (proto.service.GetResponseResponse.UserTranscript.prototype.serializeBinary =
              function () {
                var e = new r.BinaryWriter();
                return (
                  proto.service.GetResponseResponse.UserTranscript.serializeBinaryToWriter(
                    this,
                    e
                  ),
                  e.getResultBuffer()
                );
              }),
            (proto.service.GetResponseResponse.UserTranscript.serializeBinaryToWriter =
              function (e, t) {
                var o = void 0;
                (o = e.getTextData()).length > 0 && t.writeString(1, o),
                  (o = e.getIsFinal()) && t.writeBool(2, o),
                  (o = e.getEndOfResponse()) && t.writeBool(3, o);
              }),
            (proto.service.GetResponseResponse.UserTranscript.prototype.getTextData =
              function () {
                return r.Message.getFieldWithDefault(this, 1, "");
              }),
            (proto.service.GetResponseResponse.UserTranscript.prototype.setTextData =
              function (e) {
                r.Message.setProto3StringField(this, 1, e);
              }),
            (proto.service.GetResponseResponse.UserTranscript.prototype.getIsFinal =
              function () {
                return r.Message.getFieldWithDefault(this, 2, !1);
              }),
            (proto.service.GetResponseResponse.UserTranscript.prototype.setIsFinal =
              function (e) {
                r.Message.setProto3BooleanField(this, 2, e);
              }),
            (proto.service.GetResponseResponse.UserTranscript.prototype.getEndOfResponse =
              function () {
                return r.Message.getFieldWithDefault(this, 3, !1);
              }),
            (proto.service.GetResponseResponse.UserTranscript.prototype.setEndOfResponse =
              function (e) {
                r.Message.setProto3BooleanField(this, 3, e);
              }),
            (proto.service.GetResponseResponse.prototype.getSessionId =
              function () {
                return r.Message.getFieldWithDefault(this, 1, "");
              }),
            (proto.service.GetResponseResponse.prototype.setSessionId =
              function (e) {
                r.Message.setProto3StringField(this, 1, e);
              }),
            (proto.service.GetResponseResponse.prototype.getActionResponse =
              function () {
                return r.Message.getWrapperField(
                  this,
                  proto.service.GetResponseResponse.ActionResponse,
                  2
                );
              }),
            (proto.service.GetResponseResponse.prototype.setActionResponse =
              function (e) {
                r.Message.setOneofWrapperField(
                  this,
                  2,
                  proto.service.GetResponseResponse.oneofGroups_[0],
                  e
                );
              }),
            (proto.service.GetResponseResponse.prototype.clearActionResponse =
              function () {
                this.setActionResponse(void 0);
              }),
            (proto.service.GetResponseResponse.prototype.hasActionResponse =
              function () {
                return null != r.Message.getField(this, 2);
              }),
            (proto.service.GetResponseResponse.prototype.getAudioResponse =
              function () {
                return r.Message.getWrapperField(
                  this,
                  proto.service.GetResponseResponse.AudioResponse,
                  3
                );
              }),
            (proto.service.GetResponseResponse.prototype.setAudioResponse =
              function (e) {
                r.Message.setOneofWrapperField(
                  this,
                  3,
                  proto.service.GetResponseResponse.oneofGroups_[0],
                  e
                );
              }),
            (proto.service.GetResponseResponse.prototype.clearAudioResponse =
              function () {
                this.setAudioResponse(void 0);
              }),
            (proto.service.GetResponseResponse.prototype.hasAudioResponse =
              function () {
                return null != r.Message.getField(this, 3);
              }),
            (proto.service.GetResponseResponse.prototype.getDebugLog =
              function () {
                return r.Message.getFieldWithDefault(this, 4, "");
              }),
            (proto.service.GetResponseResponse.prototype.setDebugLog =
              function (e) {
                r.Message.setOneofField(
                  this,
                  4,
                  proto.service.GetResponseResponse.oneofGroups_[0],
                  e
                );
              }),
            (proto.service.GetResponseResponse.prototype.clearDebugLog =
              function () {
                r.Message.setOneofField(
                  this,
                  4,
                  proto.service.GetResponseResponse.oneofGroups_[0],
                  void 0
                );
              }),
            (proto.service.GetResponseResponse.prototype.hasDebugLog =
              function () {
                return null != r.Message.getField(this, 4);
              }),
            (proto.service.GetResponseResponse.prototype.getUserQuery =
              function () {
                return r.Message.getWrapperField(
                  this,
                  proto.service.GetResponseResponse.UserTranscript,
                  5
                );
              }),
            (proto.service.GetResponseResponse.prototype.setUserQuery =
              function (e) {
                r.Message.setOneofWrapperField(
                  this,
                  5,
                  proto.service.GetResponseResponse.oneofGroups_[0],
                  e
                );
              }),
            (proto.service.GetResponseResponse.prototype.clearUserQuery =
              function () {
                this.setUserQuery(void 0);
              }),
            (proto.service.GetResponseResponse.prototype.hasUserQuery =
              function () {
                return null != r.Message.getField(this, 5);
              }),
            (proto.service.GetResponseResponse.prototype.getBtResponse =
              function () {
                return r.Message.getWrapperField(
                  this,
                  proto.service.GetResponseResponse.BehaviorTreeResponse,
                  6
                );
              }),
            (proto.service.GetResponseResponse.prototype.setBtResponse =
              function (e) {
                r.Message.setOneofWrapperField(
                  this,
                  6,
                  proto.service.GetResponseResponse.oneofGroups_[0],
                  e
                );
              }),
            (proto.service.GetResponseResponse.prototype.clearBtResponse =
              function () {
                this.setBtResponse(void 0);
              }),
            (proto.service.GetResponseResponse.prototype.hasBtResponse =
              function () {
                return null != r.Message.getField(this, 6);
              }),
            (proto.service.GetResponseResponse.prototype.getEmotionResponse =
              function () {
                return r.Message.getFieldWithDefault(this, 7, "");
              }),
            (proto.service.GetResponseResponse.prototype.setEmotionResponse =
              function (e) {
                r.Message.setOneofField(
                  this,
                  7,
                  proto.service.GetResponseResponse.oneofGroups_[0],
                  e
                );
              }),
            (proto.service.GetResponseResponse.prototype.clearEmotionResponse =
              function () {
                r.Message.setOneofField(
                  this,
                  7,
                  proto.service.GetResponseResponse.oneofGroups_[0],
                  void 0
                );
              }),
            (proto.service.GetResponseResponse.prototype.hasEmotionResponse =
              function () {
                return null != r.Message.getField(this, 7);
              }),
            (proto.service.GetResponseResponse.prototype.getInteractionId =
              function () {
                return r.Message.getFieldWithDefault(this, 8, "");
              }),
            (proto.service.GetResponseResponse.prototype.setInteractionId =
              function (e) {
                r.Message.setOneofField(
                  this,
                  8,
                  proto.service.GetResponseResponse.oneofGroups_[0],
                  e
                );
              }),
            (proto.service.GetResponseResponse.prototype.clearInteractionId =
              function () {
                r.Message.setOneofField(
                  this,
                  8,
                  proto.service.GetResponseResponse.oneofGroups_[0],
                  void 0
                );
              }),
            (proto.service.GetResponseResponse.prototype.hasInteractionId =
              function () {
                return null != r.Message.getField(this, 8);
              }),
            (proto.service.VisemesData = function (e) {
              r.Message.initialize(this, e, 0, -1, null, null);
            }),
            s.inherits(proto.service.VisemesData, r.Message),
            s.DEBUG &&
              !COMPILED &&
              (proto.service.VisemesData.displayName =
                "proto.service.VisemesData"),
            r.Message.GENERATE_TO_OBJECT &&
              ((proto.service.VisemesData.prototype.toObject = function (e) {
                return proto.service.VisemesData.toObject(e, this);
              }),
              (proto.service.VisemesData.toObject = function (e, t) {
                var o,
                  r = {
                    visemes:
                      (o = t.getVisemes()) &&
                      proto.service.Viseme.toObject(e, o),
                  };
                return e && (r.$jspbMessageInstance = t), r;
              })),
            (proto.service.VisemesData.deserializeBinary = function (e) {
              var t = new r.BinaryReader(e),
                o = new proto.service.VisemesData();
              return proto.service.VisemesData.deserializeBinaryFromReader(
                o,
                t
              );
            }),
            (proto.service.VisemesData.deserializeBinaryFromReader = function (
              e,
              t
            ) {
              for (; t.nextField() && !t.isEndGroup(); )
                if (1 === t.getFieldNumber()) {
                  var o = new proto.service.Viseme();
                  t.readMessage(
                    o,
                    proto.service.Viseme.deserializeBinaryFromReader
                  ),
                    e.setVisemes(o);
                } else t.skipField();
              return e;
            }),
            (proto.service.VisemesData.prototype.serializeBinary = function () {
              var e = new r.BinaryWriter();
              return (
                proto.service.VisemesData.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
              );
            }),
            (proto.service.VisemesData.serializeBinaryToWriter = function (
              e,
              t
            ) {
              var o;
              null != (o = e.getVisemes()) &&
                t.writeMessage(
                  1,
                  o,
                  proto.service.Viseme.serializeBinaryToWriter
                );
            }),
            (proto.service.VisemesData.prototype.getVisemes = function () {
              return r.Message.getWrapperField(this, proto.service.Viseme, 1);
            }),
            (proto.service.VisemesData.prototype.setVisemes = function (e) {
              r.Message.setWrapperField(this, 1, e);
            }),
            (proto.service.VisemesData.prototype.clearVisemes = function () {
              this.setVisemes(void 0);
            }),
            (proto.service.VisemesData.prototype.hasVisemes = function () {
              return null != r.Message.getField(this, 1);
            }),
            (proto.service.Viseme = function (e) {
              r.Message.initialize(this, e, 0, -1, null, null);
            }),
            s.inherits(proto.service.Viseme, r.Message),
            s.DEBUG &&
              !COMPILED &&
              (proto.service.Viseme.displayName = "proto.service.Viseme"),
            r.Message.GENERATE_TO_OBJECT &&
              ((proto.service.Viseme.prototype.toObject = function (e) {
                return proto.service.Viseme.toObject(e, this);
              }),
              (proto.service.Viseme.toObject = function (e, t) {
                var o = {
                  sil: +r.Message.getFieldWithDefault(t, 1, 0),
                  pp: +r.Message.getFieldWithDefault(t, 2, 0),
                  ff: +r.Message.getFieldWithDefault(t, 3, 0),
                  th: +r.Message.getFieldWithDefault(t, 4, 0),
                  dd: +r.Message.getFieldWithDefault(t, 5, 0),
                  kk: +r.Message.getFieldWithDefault(t, 6, 0),
                  ch: +r.Message.getFieldWithDefault(t, 7, 0),
                  ss: +r.Message.getFieldWithDefault(t, 8, 0),
                  nn: +r.Message.getFieldWithDefault(t, 9, 0),
                  rr: +r.Message.getFieldWithDefault(t, 10, 0),
                  aa: +r.Message.getFieldWithDefault(t, 11, 0),
                  e: +r.Message.getFieldWithDefault(t, 12, 0),
                  ih: +r.Message.getFieldWithDefault(t, 13, 0),
                  oh: +r.Message.getFieldWithDefault(t, 14, 0),
                  ou: +r.Message.getFieldWithDefault(t, 15, 0),
                };
                return e && (o.$jspbMessageInstance = t), o;
              })),
            (proto.service.Viseme.deserializeBinary = function (e) {
              var t = new r.BinaryReader(e),
                o = new proto.service.Viseme();
              return proto.service.Viseme.deserializeBinaryFromReader(o, t);
            }),
            (proto.service.Viseme.deserializeBinaryFromReader = function (
              e,
              t
            ) {
              for (; t.nextField() && !t.isEndGroup(); )
                switch (t.getFieldNumber()) {
                  case 1:
                    var o = t.readFloat();
                    e.setSil(o);
                    break;
                  case 2:
                    (o = t.readFloat()), e.setPp(o);
                    break;
                  case 3:
                    (o = t.readFloat()), e.setFf(o);
                    break;
                  case 4:
                    (o = t.readFloat()), e.setTh(o);
                    break;
                  case 5:
                    (o = t.readFloat()), e.setDd(o);
                    break;
                  case 6:
                    (o = t.readFloat()), e.setKk(o);
                    break;
                  case 7:
                    (o = t.readFloat()), e.setCh(o);
                    break;
                  case 8:
                    (o = t.readFloat()), e.setSs(o);
                    break;
                  case 9:
                    (o = t.readFloat()), e.setNn(o);
                    break;
                  case 10:
                    (o = t.readFloat()), e.setRr(o);
                    break;
                  case 11:
                    (o = t.readFloat()), e.setAa(o);
                    break;
                  case 12:
                    (o = t.readFloat()), e.setE(o);
                    break;
                  case 13:
                    (o = t.readFloat()), e.setIh(o);
                    break;
                  case 14:
                    (o = t.readFloat()), e.setOh(o);
                    break;
                  case 15:
                    (o = t.readFloat()), e.setOu(o);
                    break;
                  default:
                    t.skipField();
                }
              return e;
            }),
            (proto.service.Viseme.prototype.serializeBinary = function () {
              var e = new r.BinaryWriter();
              return (
                proto.service.Viseme.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
              );
            }),
            (proto.service.Viseme.serializeBinaryToWriter = function (e, t) {
              var o = void 0;
              0 !== (o = e.getSil()) && t.writeFloat(1, o),
                0 !== (o = e.getPp()) && t.writeFloat(2, o),
                0 !== (o = e.getFf()) && t.writeFloat(3, o),
                0 !== (o = e.getTh()) && t.writeFloat(4, o),
                0 !== (o = e.getDd()) && t.writeFloat(5, o),
                0 !== (o = e.getKk()) && t.writeFloat(6, o),
                0 !== (o = e.getCh()) && t.writeFloat(7, o),
                0 !== (o = e.getSs()) && t.writeFloat(8, o),
                0 !== (o = e.getNn()) && t.writeFloat(9, o),
                0 !== (o = e.getRr()) && t.writeFloat(10, o),
                0 !== (o = e.getAa()) && t.writeFloat(11, o),
                0 !== (o = e.getE()) && t.writeFloat(12, o),
                0 !== (o = e.getIh()) && t.writeFloat(13, o),
                0 !== (o = e.getOh()) && t.writeFloat(14, o),
                0 !== (o = e.getOu()) && t.writeFloat(15, o);
            }),
            (proto.service.Viseme.prototype.getSil = function () {
              return +r.Message.getFieldWithDefault(this, 1, 0);
            }),
            (proto.service.Viseme.prototype.setSil = function (e) {
              r.Message.setProto3FloatField(this, 1, e);
            }),
            (proto.service.Viseme.prototype.getPp = function () {
              return +r.Message.getFieldWithDefault(this, 2, 0);
            }),
            (proto.service.Viseme.prototype.setPp = function (e) {
              r.Message.setProto3FloatField(this, 2, e);
            }),
            (proto.service.Viseme.prototype.getFf = function () {
              return +r.Message.getFieldWithDefault(this, 3, 0);
            }),
            (proto.service.Viseme.prototype.setFf = function (e) {
              r.Message.setProto3FloatField(this, 3, e);
            }),
            (proto.service.Viseme.prototype.getTh = function () {
              return +r.Message.getFieldWithDefault(this, 4, 0);
            }),
            (proto.service.Viseme.prototype.setTh = function (e) {
              r.Message.setProto3FloatField(this, 4, e);
            }),
            (proto.service.Viseme.prototype.getDd = function () {
              return +r.Message.getFieldWithDefault(this, 5, 0);
            }),
            (proto.service.Viseme.prototype.setDd = function (e) {
              r.Message.setProto3FloatField(this, 5, e);
            }),
            (proto.service.Viseme.prototype.getKk = function () {
              return +r.Message.getFieldWithDefault(this, 6, 0);
            }),
            (proto.service.Viseme.prototype.setKk = function (e) {
              r.Message.setProto3FloatField(this, 6, e);
            }),
            (proto.service.Viseme.prototype.getCh = function () {
              return +r.Message.getFieldWithDefault(this, 7, 0);
            }),
            (proto.service.Viseme.prototype.setCh = function (e) {
              r.Message.setProto3FloatField(this, 7, e);
            }),
            (proto.service.Viseme.prototype.getSs = function () {
              return +r.Message.getFieldWithDefault(this, 8, 0);
            }),
            (proto.service.Viseme.prototype.setSs = function (e) {
              r.Message.setProto3FloatField(this, 8, e);
            }),
            (proto.service.Viseme.prototype.getNn = function () {
              return +r.Message.getFieldWithDefault(this, 9, 0);
            }),
            (proto.service.Viseme.prototype.setNn = function (e) {
              r.Message.setProto3FloatField(this, 9, e);
            }),
            (proto.service.Viseme.prototype.getRr = function () {
              return +r.Message.getFieldWithDefault(this, 10, 0);
            }),
            (proto.service.Viseme.prototype.setRr = function (e) {
              r.Message.setProto3FloatField(this, 10, e);
            }),
            (proto.service.Viseme.prototype.getAa = function () {
              return +r.Message.getFieldWithDefault(this, 11, 0);
            }),
            (proto.service.Viseme.prototype.setAa = function (e) {
              r.Message.setProto3FloatField(this, 11, e);
            }),
            (proto.service.Viseme.prototype.getE = function () {
              return +r.Message.getFieldWithDefault(this, 12, 0);
            }),
            (proto.service.Viseme.prototype.setE = function (e) {
              r.Message.setProto3FloatField(this, 12, e);
            }),
            (proto.service.Viseme.prototype.getIh = function () {
              return +r.Message.getFieldWithDefault(this, 13, 0);
            }),
            (proto.service.Viseme.prototype.setIh = function (e) {
              r.Message.setProto3FloatField(this, 13, e);
            }),
            (proto.service.Viseme.prototype.getOh = function () {
              return +r.Message.getFieldWithDefault(this, 14, 0);
            }),
            (proto.service.Viseme.prototype.setOh = function (e) {
              r.Message.setProto3FloatField(this, 14, e);
            }),
            (proto.service.Viseme.prototype.getOu = function () {
              return +r.Message.getFieldWithDefault(this, 15, 0);
            }),
            (proto.service.Viseme.prototype.setOu = function (e) {
              r.Message.setProto3FloatField(this, 15, e);
            }),
            (proto.service.BlendShapesData = function (e) {
              r.Message.initialize(this, e, 0, -1, null, null);
            }),
            s.inherits(proto.service.BlendShapesData, r.Message),
            s.DEBUG &&
              !COMPILED &&
              (proto.service.BlendShapesData.displayName =
                "proto.service.BlendShapesData"),
            r.Message.GENERATE_TO_OBJECT &&
              ((proto.service.BlendShapesData.prototype.toObject = function (
                e
              ) {
                return proto.service.BlendShapesData.toObject(e, this);
              }),
              (proto.service.BlendShapesData.toObject = function (e, t) {
                var o = {
                  blendshapeData: r.Message.getFieldWithDefault(t, 1, ""),
                };
                return e && (o.$jspbMessageInstance = t), o;
              })),
            (proto.service.BlendShapesData.deserializeBinary = function (e) {
              var t = new r.BinaryReader(e),
                o = new proto.service.BlendShapesData();
              return proto.service.BlendShapesData.deserializeBinaryFromReader(
                o,
                t
              );
            }),
            (proto.service.BlendShapesData.deserializeBinaryFromReader =
              function (e, t) {
                for (; t.nextField() && !t.isEndGroup(); )
                  if (1 === t.getFieldNumber()) {
                    var o = t.readString();
                    e.setBlendshapeData(o);
                  } else t.skipField();
                return e;
              }),
            (proto.service.BlendShapesData.prototype.serializeBinary =
              function () {
                var e = new r.BinaryWriter();
                return (
                  proto.service.BlendShapesData.serializeBinaryToWriter(
                    this,
                    e
                  ),
                  e.getResultBuffer()
                );
              }),
            (proto.service.BlendShapesData.serializeBinaryToWriter = function (
              e,
              t
            ) {
              var o;
              (o = e.getBlendshapeData()).length > 0 && t.writeString(1, o);
            }),
            (proto.service.BlendShapesData.prototype.getBlendshapeData =
              function () {
                return r.Message.getFieldWithDefault(this, 1, "");
              }),
            (proto.service.BlendShapesData.prototype.setBlendshapeData =
              function (e) {
                r.Message.setProto3StringField(this, 1, e);
              }),
            (proto.service.HelloRequest = function (e) {
              r.Message.initialize(this, e, 0, -1, null, null);
            }),
            s.inherits(proto.service.HelloRequest, r.Message),
            s.DEBUG &&
              !COMPILED &&
              (proto.service.HelloRequest.displayName =
                "proto.service.HelloRequest"),
            r.Message.GENERATE_TO_OBJECT &&
              ((proto.service.HelloRequest.prototype.toObject = function (e) {
                return proto.service.HelloRequest.toObject(e, this);
              }),
              (proto.service.HelloRequest.toObject = function (e, t) {
                var o = { name: r.Message.getFieldWithDefault(t, 1, "") };
                return e && (o.$jspbMessageInstance = t), o;
              })),
            (proto.service.HelloRequest.deserializeBinary = function (e) {
              var t = new r.BinaryReader(e),
                o = new proto.service.HelloRequest();
              return proto.service.HelloRequest.deserializeBinaryFromReader(
                o,
                t
              );
            }),
            (proto.service.HelloRequest.deserializeBinaryFromReader = function (
              e,
              t
            ) {
              for (; t.nextField() && !t.isEndGroup(); )
                if (1 === t.getFieldNumber()) {
                  var o = t.readString();
                  e.setName(o);
                } else t.skipField();
              return e;
            }),
            (proto.service.HelloRequest.prototype.serializeBinary =
              function () {
                var e = new r.BinaryWriter();
                return (
                  proto.service.HelloRequest.serializeBinaryToWriter(this, e),
                  e.getResultBuffer()
                );
              }),
            (proto.service.HelloRequest.serializeBinaryToWriter = function (
              e,
              t
            ) {
              var o;
              (o = e.getName()).length > 0 && t.writeString(1, o);
            }),
            (proto.service.HelloRequest.prototype.getName = function () {
              return r.Message.getFieldWithDefault(this, 1, "");
            }),
            (proto.service.HelloRequest.prototype.setName = function (e) {
              r.Message.setProto3StringField(this, 1, e);
            }),
            (proto.service.HelloResponse = function (e) {
              r.Message.initialize(this, e, 0, -1, null, null);
            }),
            s.inherits(proto.service.HelloResponse, r.Message),
            s.DEBUG &&
              !COMPILED &&
              (proto.service.HelloResponse.displayName =
                "proto.service.HelloResponse"),
            r.Message.GENERATE_TO_OBJECT &&
              ((proto.service.HelloResponse.prototype.toObject = function (e) {
                return proto.service.HelloResponse.toObject(e, this);
              }),
              (proto.service.HelloResponse.toObject = function (e, t) {
                var o = { message: r.Message.getFieldWithDefault(t, 1, "") };
                return e && (o.$jspbMessageInstance = t), o;
              })),
            (proto.service.HelloResponse.deserializeBinary = function (e) {
              var t = new r.BinaryReader(e),
                o = new proto.service.HelloResponse();
              return proto.service.HelloResponse.deserializeBinaryFromReader(
                o,
                t
              );
            }),
            (proto.service.HelloResponse.deserializeBinaryFromReader =
              function (e, t) {
                for (; t.nextField() && !t.isEndGroup(); )
                  if (1 === t.getFieldNumber()) {
                    var o = t.readString();
                    e.setMessage(o);
                  } else t.skipField();
                return e;
              }),
            (proto.service.HelloResponse.prototype.serializeBinary =
              function () {
                var e = new r.BinaryWriter();
                return (
                  proto.service.HelloResponse.serializeBinaryToWriter(this, e),
                  e.getResultBuffer()
                );
              }),
            (proto.service.HelloResponse.serializeBinaryToWriter = function (
              e,
              t
            ) {
              var o;
              (o = e.getMessage()).length > 0 && t.writeString(1, o);
            }),
            (proto.service.HelloResponse.prototype.getMessage = function () {
              return r.Message.getFieldWithDefault(this, 1, "");
            }),
            (proto.service.HelloResponse.prototype.setMessage = function (e) {
              r.Message.setProto3StringField(this, 1, e);
            }),
            (proto.service.FeedbackRequest = function (e) {
              r.Message.initialize(this, e, 0, -1, null, null);
            }),
            s.inherits(proto.service.FeedbackRequest, r.Message),
            s.DEBUG &&
              !COMPILED &&
              (proto.service.FeedbackRequest.displayName =
                "proto.service.FeedbackRequest"),
            r.Message.GENERATE_TO_OBJECT &&
              ((proto.service.FeedbackRequest.prototype.toObject = function (
                e
              ) {
                return proto.service.FeedbackRequest.toObject(e, this);
              }),
              (proto.service.FeedbackRequest.toObject = function (e, t) {
                var o,
                  s = {
                    interactionId: r.Message.getFieldWithDefault(t, 1, ""),
                    characterId: r.Message.getFieldWithDefault(t, 2, ""),
                    sessionId: r.Message.getFieldWithDefault(t, 3, ""),
                    textFeedback:
                      (o = t.getTextFeedback()) &&
                      proto.service.FeedbackRequest.Feedback.toObject(e, o),
                  };
                return e && (s.$jspbMessageInstance = t), s;
              })),
            (proto.service.FeedbackRequest.deserializeBinary = function (e) {
              var t = new r.BinaryReader(e),
                o = new proto.service.FeedbackRequest();
              return proto.service.FeedbackRequest.deserializeBinaryFromReader(
                o,
                t
              );
            }),
            (proto.service.FeedbackRequest.deserializeBinaryFromReader =
              function (e, t) {
                for (; t.nextField() && !t.isEndGroup(); )
                  switch (t.getFieldNumber()) {
                    case 1:
                      var o = t.readString();
                      e.setInteractionId(o);
                      break;
                    case 2:
                      (o = t.readString()), e.setCharacterId(o);
                      break;
                    case 3:
                      (o = t.readString()), e.setSessionId(o);
                      break;
                    case 5:
                      (o = new proto.service.FeedbackRequest.Feedback()),
                        t.readMessage(
                          o,
                          proto.service.FeedbackRequest.Feedback
                            .deserializeBinaryFromReader
                        ),
                        e.setTextFeedback(o);
                      break;
                    default:
                      t.skipField();
                  }
                return e;
              }),
            (proto.service.FeedbackRequest.prototype.serializeBinary =
              function () {
                var e = new r.BinaryWriter();
                return (
                  proto.service.FeedbackRequest.serializeBinaryToWriter(
                    this,
                    e
                  ),
                  e.getResultBuffer()
                );
              }),
            (proto.service.FeedbackRequest.serializeBinaryToWriter = function (
              e,
              t
            ) {
              var o = void 0;
              (o = e.getInteractionId()).length > 0 && t.writeString(1, o),
                (o = e.getCharacterId()).length > 0 && t.writeString(2, o),
                (o = e.getSessionId()).length > 0 && t.writeString(3, o),
                null != (o = e.getTextFeedback()) &&
                  t.writeMessage(
                    5,
                    o,
                    proto.service.FeedbackRequest.Feedback
                      .serializeBinaryToWriter
                  );
            }),
            (proto.service.FeedbackRequest.Feedback = function (e) {
              r.Message.initialize(this, e, 0, -1, null, null);
            }),
            s.inherits(proto.service.FeedbackRequest.Feedback, r.Message),
            s.DEBUG &&
              !COMPILED &&
              (proto.service.FeedbackRequest.Feedback.displayName =
                "proto.service.FeedbackRequest.Feedback"),
            r.Message.GENERATE_TO_OBJECT &&
              ((proto.service.FeedbackRequest.Feedback.prototype.toObject =
                function (e) {
                  return proto.service.FeedbackRequest.Feedback.toObject(
                    e,
                    this
                  );
                }),
              (proto.service.FeedbackRequest.Feedback.toObject = function (
                e,
                t
              ) {
                var o = {
                  thumbsUp: r.Message.getFieldWithDefault(t, 1, !1),
                  feedbackText: r.Message.getFieldWithDefault(t, 2, ""),
                };
                return e && (o.$jspbMessageInstance = t), o;
              })),
            (proto.service.FeedbackRequest.Feedback.deserializeBinary =
              function (e) {
                var t = new r.BinaryReader(e),
                  o = new proto.service.FeedbackRequest.Feedback();
                return proto.service.FeedbackRequest.Feedback.deserializeBinaryFromReader(
                  o,
                  t
                );
              }),
            (proto.service.FeedbackRequest.Feedback.deserializeBinaryFromReader =
              function (e, t) {
                for (; t.nextField() && !t.isEndGroup(); )
                  switch (t.getFieldNumber()) {
                    case 1:
                      var o = t.readBool();
                      e.setThumbsUp(o);
                      break;
                    case 2:
                      (o = t.readString()), e.setFeedbackText(o);
                      break;
                    default:
                      t.skipField();
                  }
                return e;
              }),
            (proto.service.FeedbackRequest.Feedback.prototype.serializeBinary =
              function () {
                var e = new r.BinaryWriter();
                return (
                  proto.service.FeedbackRequest.Feedback.serializeBinaryToWriter(
                    this,
                    e
                  ),
                  e.getResultBuffer()
                );
              }),
            (proto.service.FeedbackRequest.Feedback.serializeBinaryToWriter =
              function (e, t) {
                var o = void 0;
                (o = e.getThumbsUp()) && t.writeBool(1, o),
                  (o = e.getFeedbackText()).length > 0 && t.writeString(2, o);
              }),
            (proto.service.FeedbackRequest.Feedback.prototype.getThumbsUp =
              function () {
                return r.Message.getFieldWithDefault(this, 1, !1);
              }),
            (proto.service.FeedbackRequest.Feedback.prototype.setThumbsUp =
              function (e) {
                r.Message.setProto3BooleanField(this, 1, e);
              }),
            (proto.service.FeedbackRequest.Feedback.prototype.getFeedbackText =
              function () {
                return r.Message.getFieldWithDefault(this, 2, "");
              }),
            (proto.service.FeedbackRequest.Feedback.prototype.setFeedbackText =
              function (e) {
                r.Message.setProto3StringField(this, 2, e);
              }),
            (proto.service.FeedbackRequest.prototype.getInteractionId =
              function () {
                return r.Message.getFieldWithDefault(this, 1, "");
              }),
            (proto.service.FeedbackRequest.prototype.setInteractionId =
              function (e) {
                r.Message.setProto3StringField(this, 1, e);
              }),
            (proto.service.FeedbackRequest.prototype.getCharacterId =
              function () {
                return r.Message.getFieldWithDefault(this, 2, "");
              }),
            (proto.service.FeedbackRequest.prototype.setCharacterId = function (
              e
            ) {
              r.Message.setProto3StringField(this, 2, e);
            }),
            (proto.service.FeedbackRequest.prototype.getSessionId =
              function () {
                return r.Message.getFieldWithDefault(this, 3, "");
              }),
            (proto.service.FeedbackRequest.prototype.setSessionId = function (
              e
            ) {
              r.Message.setProto3StringField(this, 3, e);
            }),
            (proto.service.FeedbackRequest.prototype.getTextFeedback =
              function () {
                return r.Message.getWrapperField(
                  this,
                  proto.service.FeedbackRequest.Feedback,
                  5
                );
              }),
            (proto.service.FeedbackRequest.prototype.setTextFeedback =
              function (e) {
                r.Message.setWrapperField(this, 5, e);
              }),
            (proto.service.FeedbackRequest.prototype.clearTextFeedback =
              function () {
                this.setTextFeedback(void 0);
              }),
            (proto.service.FeedbackRequest.prototype.hasTextFeedback =
              function () {
                return null != r.Message.getField(this, 5);
              }),
            (proto.service.FeedbackResponse = function (e) {
              r.Message.initialize(this, e, 0, -1, null, null);
            }),
            s.inherits(proto.service.FeedbackResponse, r.Message),
            s.DEBUG &&
              !COMPILED &&
              (proto.service.FeedbackResponse.displayName =
                "proto.service.FeedbackResponse"),
            r.Message.GENERATE_TO_OBJECT &&
              ((proto.service.FeedbackResponse.prototype.toObject = function (
                e
              ) {
                return proto.service.FeedbackResponse.toObject(e, this);
              }),
              (proto.service.FeedbackResponse.toObject = function (e, t) {
                var o = {
                  feedbackResponse: r.Message.getFieldWithDefault(t, 1, ""),
                };
                return e && (o.$jspbMessageInstance = t), o;
              })),
            (proto.service.FeedbackResponse.deserializeBinary = function (e) {
              var t = new r.BinaryReader(e),
                o = new proto.service.FeedbackResponse();
              return proto.service.FeedbackResponse.deserializeBinaryFromReader(
                o,
                t
              );
            }),
            (proto.service.FeedbackResponse.deserializeBinaryFromReader =
              function (e, t) {
                for (; t.nextField() && !t.isEndGroup(); )
                  if (1 === t.getFieldNumber()) {
                    var o = t.readString();
                    e.setFeedbackResponse(o);
                  } else t.skipField();
                return e;
              }),
            (proto.service.FeedbackResponse.prototype.serializeBinary =
              function () {
                var e = new r.BinaryWriter();
                return (
                  proto.service.FeedbackResponse.serializeBinaryToWriter(
                    this,
                    e
                  ),
                  e.getResultBuffer()
                );
              }),
            (proto.service.FeedbackResponse.serializeBinaryToWriter = function (
              e,
              t
            ) {
              var o;
              (o = e.getFeedbackResponse()).length > 0 && t.writeString(1, o);
            }),
            (proto.service.FeedbackResponse.prototype.getFeedbackResponse =
              function () {
                return r.Message.getFieldWithDefault(this, 1, "");
              }),
            (proto.service.FeedbackResponse.prototype.setFeedbackResponse =
              function (e) {
                r.Message.setProto3StringField(this, 1, e);
              }),
            (proto.service.FaceModel = {
              FACE_MODEL_UNSPECIFIED: 0,
              FACE_MODEL_A_2F_MODEL_NAME: 1,
              FACE_MODEL_PHONEMES_MODEL_NAME: 2,
              FACE_MODEL_OVR_MODEL_NAME: 3,
            }),
            s.object.extend(t, proto.service);
        },
        703: (e, t, o) => {
          var r = o(387),
            s = o(37).grpc,
            n = (function () {
              function e() {}
              return (e.serviceName = "service.ConvaiService"), e;
            })();
          function i(e, t) {
            (this.serviceHost = e), (this.options = t || {});
          }
          (n.Hello = {
            methodName: "Hello",
            service: n,
            requestStream: !1,
            responseStream: !1,
            requestType: r.HelloRequest,
            responseType: r.HelloResponse,
          }),
            (n.HelloStream = {
              methodName: "HelloStream",
              service: n,
              requestStream: !0,
              responseStream: !0,
              requestType: r.HelloRequest,
              responseType: r.HelloResponse,
            }),
            (n.SpeechToText = {
              methodName: "SpeechToText",
              service: n,
              requestStream: !0,
              responseStream: !0,
              requestType: r.STTRequest,
              responseType: r.STTResponse,
            }),
            (n.GetResponse = {
              methodName: "GetResponse",
              service: n,
              requestStream: !0,
              responseStream: !0,
              requestType: r.GetResponseRequest,
              responseType: r.GetResponseResponse,
            }),
            (n.GetResponseSingle = {
              methodName: "GetResponseSingle",
              service: n,
              requestStream: !1,
              responseStream: !0,
              requestType: r.GetResponseRequestSingle,
              responseType: r.GetResponseResponse,
            }),
            (n.SubmitFeedback = {
              methodName: "SubmitFeedback",
              service: n,
              requestStream: !1,
              responseStream: !1,
              requestType: r.FeedbackRequest,
              responseType: r.FeedbackResponse,
            }),
            (t.ConvaiService = n),
            (i.prototype.hello = function (e, t, o) {
              2 === arguments.length && (o = arguments[1]);
              var r = s.unary(n.Hello, {
                request: e,
                host: this.serviceHost,
                metadata: t,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function (e) {
                  if (o)
                    if (e.status !== s.Code.OK) {
                      var t = new Error(e.statusMessage);
                      (t.code = e.status),
                        (t.metadata = e.trailers),
                        o(t, null);
                    } else o(null, e.message);
                },
              });
              return {
                cancel: function () {
                  (o = null), r.close();
                },
              };
            }),
            (i.prototype.helloStream = function (e) {
              var t = { data: [], end: [], status: [] },
                o = s.client(n.HelloStream, {
                  host: this.serviceHost,
                  metadata: e,
                  transport: this.options.transport,
                });
              return (
                o.onEnd(function (e, o, r) {
                  t.status.forEach(function (t) {
                    t({ code: e, details: o, metadata: r });
                  }),
                    t.end.forEach(function (t) {
                      t({ code: e, details: o, metadata: r });
                    }),
                    (t = null);
                }),
                o.onMessage(function (e) {
                  t.data.forEach(function (t) {
                    t(e);
                  });
                }),
                o.start(e),
                {
                  on: function (e, o) {
                    return t[e].push(o), this;
                  },
                  write: function (e) {
                    return o.send(e), this;
                  },
                  end: function () {
                    o.finishSend();
                  },
                  cancel: function () {
                    (t = null), o.close();
                  },
                }
              );
            }),
            (i.prototype.speechToText = function (e) {
              var t = { data: [], end: [], status: [] },
                o = s.client(n.SpeechToText, {
                  host: this.serviceHost,
                  metadata: e,
                  transport: this.options.transport,
                });
              return (
                o.onEnd(function (e, o, r) {
                  t.status.forEach(function (t) {
                    t({ code: e, details: o, metadata: r });
                  }),
                    t.end.forEach(function (t) {
                      t({ code: e, details: o, metadata: r });
                    }),
                    (t = null);
                }),
                o.onMessage(function (e) {
                  t.data.forEach(function (t) {
                    t(e);
                  });
                }),
                o.start(e),
                {
                  on: function (e, o) {
                    return t[e].push(o), this;
                  },
                  write: function (e) {
                    return o.send(e), this;
                  },
                  end: function () {
                    o.finishSend();
                  },
                  cancel: function () {
                    (t = null), o.close();
                  },
                }
              );
            }),
            (i.prototype.getResponse = function (e) {
              var t = { data: [], end: [], status: [] },
                o = s.client(n.GetResponse, {
                  host: this.serviceHost,
                  metadata: e,
                  transport: this.options.transport,
                });
              return (
                o.onEnd(function (e, o, r) {
                  t.status.forEach(function (t) {
                    t({ code: e, details: o, metadata: r });
                  }),
                    t.end.forEach(function (t) {
                      t({ code: e, details: o, metadata: r });
                    }),
                    (t = null);
                }),
                o.onMessage(function (e) {
                  t.data.forEach(function (t) {
                    t(e);
                  });
                }),
                o.start(e),
                {
                  on: function (e, o) {
                    return t[e].push(o), this;
                  },
                  write: function (e) {
                    return o.send(e), this;
                  },
                  end: function () {
                    o.finishSend();
                  },
                  cancel: function () {
                    (t = null), o.close();
                  },
                }
              );
            }),
            (i.prototype.getResponseSingle = function (e, t) {
              var o = { data: [], end: [], status: [] },
                r = s.invoke(n.GetResponseSingle, {
                  request: e,
                  host: this.serviceHost,
                  metadata: t,
                  transport: this.options.transport,
                  debug: this.options.debug,
                  onMessage: function (e) {
                    o.data.forEach(function (t) {
                      t(e);
                    });
                  },
                  onEnd: function (e, t, r) {
                    o.status.forEach(function (o) {
                      o({ code: e, details: t, metadata: r });
                    }),
                      o.end.forEach(function (o) {
                        o({ code: e, details: t, metadata: r });
                      }),
                      (o = null);
                  },
                });
              return {
                on: function (e, t) {
                  return o[e].push(t), this;
                },
                cancel: function () {
                  (o = null), r.close();
                },
              };
            }),
            (i.prototype.submitFeedback = function (e, t, o) {
              2 === arguments.length && (o = arguments[1]);
              var r = s.unary(n.SubmitFeedback, {
                request: e,
                host: this.serviceHost,
                metadata: t,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function (e) {
                  if (o)
                    if (e.status !== s.Code.OK) {
                      var t = new Error(e.statusMessage);
                      (t.code = e.status),
                        (t.metadata = e.trailers),
                        o(t, null);
                    } else o(null, e.message);
                },
              });
              return {
                cancel: function () {
                  (o = null), r.close();
                },
              };
            }),
            (t.ConvaiServiceClient = i);
        },
        37: function (e) {
          var t, o;
          e.exports =
            ((t = {
              418: function (e, t) {
                !(function (e, t) {
                  for (var o in t) e[o] = t[o];
                })(
                  t,
                  (function (e) {
                    var t = {};
                    function o(r) {
                      if (t[r]) return t[r].exports;
                      var s = (t[r] = { i: r, l: !1, exports: {} });
                      return (
                        e[r].call(s.exports, s, s.exports, o),
                        (s.l = !0),
                        s.exports
                      );
                    }
                    return (
                      (o.m = e),
                      (o.c = t),
                      (o.i = function (e) {
                        return e;
                      }),
                      (o.d = function (e, t, r) {
                        o.o(e, t) ||
                          Object.defineProperty(e, t, {
                            configurable: !1,
                            enumerable: !0,
                            get: r,
                          });
                      }),
                      (o.n = function (e) {
                        var t =
                          e && e.__esModule
                            ? function () {
                                return e.default;
                              }
                            : function () {
                                return e;
                              };
                        return o.d(t, "a", t), t;
                      }),
                      (o.o = function (e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t);
                      }),
                      (o.p = ""),
                      o((o.s = 1))
                    );
                  })([
                    function (e, t, o) {
                      "use strict";
                      Object.defineProperty(t, "__esModule", { value: !0 });
                      var r = o(3),
                        s = (function () {
                          function e(e, t) {
                            void 0 === e && (e = {}),
                              void 0 === t && (t = { splitValues: !1 });
                            var o,
                              s = this;
                            (this.headersMap = {}),
                              e &&
                                ("undefined" != typeof Headers &&
                                e instanceof Headers
                                  ? r.getHeaderKeys(e).forEach(function (o) {
                                      r.getHeaderValues(e, o).forEach(function (
                                        e
                                      ) {
                                        t.splitValues
                                          ? s.append(o, r.splitHeaderValue(e))
                                          : s.append(o, e);
                                      });
                                    })
                                  : "object" == typeof (o = e) &&
                                    "object" == typeof o.headersMap &&
                                    "function" == typeof o.forEach
                                  ? e.forEach(function (e, t) {
                                      s.append(e, t);
                                    })
                                  : "undefined" != typeof Map &&
                                    e instanceof Map
                                  ? e.forEach(function (e, t) {
                                      s.append(t, e);
                                    })
                                  : "string" == typeof e
                                  ? this.appendFromString(e)
                                  : "object" == typeof e &&
                                    Object.getOwnPropertyNames(e).forEach(
                                      function (t) {
                                        var o = e[t];
                                        Array.isArray(o)
                                          ? o.forEach(function (e) {
                                              s.append(t, e);
                                            })
                                          : s.append(t, o);
                                      }
                                    ));
                          }
                          return (
                            (e.prototype.appendFromString = function (e) {
                              for (
                                var t = e.split("\r\n"), o = 0;
                                o < t.length;
                                o++
                              ) {
                                var r = t[o],
                                  s = r.indexOf(":");
                                if (s > 0) {
                                  var n = r.substring(0, s).trim(),
                                    i = r.substring(s + 1).trim();
                                  this.append(n, i);
                                }
                              }
                            }),
                            (e.prototype.delete = function (e, t) {
                              var o = r.normalizeName(e);
                              if (void 0 === t) delete this.headersMap[o];
                              else {
                                var s = this.headersMap[o];
                                if (s) {
                                  var n = s.indexOf(t);
                                  n >= 0 && s.splice(n, 1),
                                    0 === s.length && delete this.headersMap[o];
                                }
                              }
                            }),
                            (e.prototype.append = function (e, t) {
                              var o = this,
                                s = r.normalizeName(e);
                              Array.isArray(this.headersMap[s]) ||
                                (this.headersMap[s] = []),
                                Array.isArray(t)
                                  ? t.forEach(function (e) {
                                      o.headersMap[s].push(r.normalizeValue(e));
                                    })
                                  : this.headersMap[s].push(
                                      r.normalizeValue(t)
                                    );
                            }),
                            (e.prototype.set = function (e, t) {
                              var o = r.normalizeName(e);
                              if (Array.isArray(t)) {
                                var s = [];
                                t.forEach(function (e) {
                                  s.push(r.normalizeValue(e));
                                }),
                                  (this.headersMap[o] = s);
                              } else this.headersMap[o] = [r.normalizeValue(t)];
                            }),
                            (e.prototype.has = function (e, t) {
                              var o = this.headersMap[r.normalizeName(e)];
                              if (!Array.isArray(o)) return !1;
                              if (void 0 !== t) {
                                var s = r.normalizeValue(t);
                                return o.indexOf(s) >= 0;
                              }
                              return !0;
                            }),
                            (e.prototype.get = function (e) {
                              var t = this.headersMap[r.normalizeName(e)];
                              return void 0 !== t ? t.concat() : [];
                            }),
                            (e.prototype.forEach = function (e) {
                              var t = this;
                              Object.getOwnPropertyNames(
                                this.headersMap
                              ).forEach(function (o) {
                                e(o, t.headersMap[o]);
                              }, this);
                            }),
                            (e.prototype.toHeaders = function () {
                              if ("undefined" != typeof Headers) {
                                var e = new Headers();
                                return (
                                  this.forEach(function (t, o) {
                                    o.forEach(function (o) {
                                      e.append(t, o);
                                    });
                                  }),
                                  e
                                );
                              }
                              throw new Error("Headers class is not defined");
                            }),
                            e
                          );
                        })();
                      t.BrowserHeaders = s;
                    },
                    function (e, t, o) {
                      "use strict";
                      Object.defineProperty(t, "__esModule", { value: !0 });
                      var r = o(0);
                      t.BrowserHeaders = r.BrowserHeaders;
                    },
                    function (e, t, o) {
                      "use strict";
                      Object.defineProperty(t, "__esModule", { value: !0 }),
                        (t.iterateHeaders = function (e, t) {
                          for (
                            var o = e[Symbol.iterator](), r = o.next();
                            !r.done;

                          )
                            t(r.value[0]), (r = o.next());
                        }),
                        (t.iterateHeadersKeys = function (e, t) {
                          for (var o = e.keys(), r = o.next(); !r.done; )
                            t(r.value), (r = o.next());
                        });
                    },
                    function (e, t, o) {
                      "use strict";
                      Object.defineProperty(t, "__esModule", { value: !0 });
                      var r = o(2);
                      (t.normalizeName = function (e) {
                        if (
                          ("string" != typeof e && (e = String(e)),
                          /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))
                        )
                          throw new TypeError(
                            "Invalid character in header field name"
                          );
                        return e.toLowerCase();
                      }),
                        (t.normalizeValue = function (e) {
                          return "string" != typeof e && (e = String(e)), e;
                        }),
                        (t.getHeaderValues = function (e, t) {
                          var o = e;
                          if (o instanceof Headers && o.getAll)
                            return o.getAll(t);
                          var r = o.get(t);
                          return r && "string" == typeof r ? [r] : r;
                        }),
                        (t.getHeaderKeys = function (e) {
                          var t = e,
                            o = {},
                            s = [];
                          return (
                            t.keys
                              ? r.iterateHeadersKeys(t, function (e) {
                                  o[e] || ((o[e] = !0), s.push(e));
                                })
                              : t.forEach
                              ? t.forEach(function (e, t) {
                                  o[t] || ((o[t] = !0), s.push(t));
                                })
                              : r.iterateHeaders(t, function (e) {
                                  var t = e[0];
                                  o[t] || ((o[t] = !0), s.push(t));
                                }),
                            s
                          );
                        }),
                        (t.splitHeaderValue = function (e) {
                          var t = [];
                          return (
                            e.split(", ").forEach(function (e) {
                              e.split(",").forEach(function (e) {
                                t.push(e);
                              });
                            }),
                            t
                          );
                        });
                    },
                  ])
                );
              },
              617: function (e, t, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.ChunkParser =
                    t.ChunkType =
                    t.encodeASCII =
                    t.decodeASCII =
                      void 0);
                var r,
                  s = o(65);
                function n(e) {
                  return (
                    9 === (t = e) ||
                    10 === t ||
                    13 === t ||
                    (e >= 32 && e <= 126)
                  );
                  var t;
                }
                function i(e) {
                  for (var t = 0; t !== e.length; ++t)
                    if (!n(e[t]))
                      throw new Error(
                        "Metadata is not valid (printable) ASCII"
                      );
                  return String.fromCharCode.apply(
                    String,
                    Array.prototype.slice.call(e)
                  );
                }
                function a(e) {
                  return 128 == (128 & e.getUint8(0));
                }
                function g(e) {
                  return e.getUint32(1, !1);
                }
                function p(e, t, o) {
                  return e.byteLength - t >= o;
                }
                function l(e, t, o) {
                  if (e.slice) return e.slice(t, o);
                  var r = e.length;
                  void 0 !== o && (r = o);
                  for (var s = new Uint8Array(r - t), n = 0, i = t; i < r; i++)
                    s[n++] = e[i];
                  return s;
                }
                (t.decodeASCII = i),
                  (t.encodeASCII = function (e) {
                    for (
                      var t = new Uint8Array(e.length), o = 0;
                      o !== e.length;
                      ++o
                    ) {
                      var r = e.charCodeAt(o);
                      if (!n(r))
                        throw new Error("Metadata contains invalid ASCII");
                      t[o] = r;
                    }
                    return t;
                  }),
                  (function (e) {
                    (e[(e.MESSAGE = 1)] = "MESSAGE"),
                      (e[(e.TRAILERS = 2)] = "TRAILERS");
                  })((r = t.ChunkType || (t.ChunkType = {})));
                var u = (function () {
                  function e() {
                    (this.buffer = null), (this.position = 0);
                  }
                  return (
                    (e.prototype.parse = function (e, t) {
                      if (0 === e.length && t) return [];
                      var o,
                        n = [];
                      if (null == this.buffer)
                        (this.buffer = e), (this.position = 0);
                      else if (this.position === this.buffer.byteLength)
                        (this.buffer = e), (this.position = 0);
                      else {
                        var u = this.buffer.byteLength - this.position,
                          c = new Uint8Array(u + e.byteLength),
                          d = l(this.buffer, this.position);
                        c.set(d, 0);
                        var f = new Uint8Array(e);
                        c.set(f, u), (this.buffer = c), (this.position = 0);
                      }
                      for (;;) {
                        if (!p(this.buffer, this.position, 5)) return n;
                        var h = l(
                            this.buffer,
                            this.position,
                            this.position + 5
                          ),
                          y = new DataView(
                            h.buffer,
                            h.byteOffset,
                            h.byteLength
                          ),
                          b = g(y);
                        if (!p(this.buffer, this.position, 5 + b)) return n;
                        var _ = l(
                          this.buffer,
                          this.position + 5,
                          this.position + 5 + b
                        );
                        if (((this.position += 5 + b), a(y)))
                          return (
                            n.push({
                              chunkType: r.TRAILERS,
                              trailers: ((o = _), new s.Metadata(i(o))),
                            }),
                            n
                          );
                        n.push({ chunkType: r.MESSAGE, data: _ });
                      }
                    }),
                    e
                  );
                })();
                t.ChunkParser = u;
              },
              8: function (e, t) {
                "use strict";
                var o;
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.httpStatusToCode = t.Code = void 0),
                  (function (e) {
                    (e[(e.OK = 0)] = "OK"),
                      (e[(e.Canceled = 1)] = "Canceled"),
                      (e[(e.Unknown = 2)] = "Unknown"),
                      (e[(e.InvalidArgument = 3)] = "InvalidArgument"),
                      (e[(e.DeadlineExceeded = 4)] = "DeadlineExceeded"),
                      (e[(e.NotFound = 5)] = "NotFound"),
                      (e[(e.AlreadyExists = 6)] = "AlreadyExists"),
                      (e[(e.PermissionDenied = 7)] = "PermissionDenied"),
                      (e[(e.ResourceExhausted = 8)] = "ResourceExhausted"),
                      (e[(e.FailedPrecondition = 9)] = "FailedPrecondition"),
                      (e[(e.Aborted = 10)] = "Aborted"),
                      (e[(e.OutOfRange = 11)] = "OutOfRange"),
                      (e[(e.Unimplemented = 12)] = "Unimplemented"),
                      (e[(e.Internal = 13)] = "Internal"),
                      (e[(e.Unavailable = 14)] = "Unavailable"),
                      (e[(e.DataLoss = 15)] = "DataLoss"),
                      (e[(e.Unauthenticated = 16)] = "Unauthenticated");
                  })((o = t.Code || (t.Code = {}))),
                  (t.httpStatusToCode = function (e) {
                    switch (e) {
                      case 0:
                        return o.Internal;
                      case 200:
                        return o.OK;
                      case 400:
                        return o.InvalidArgument;
                      case 401:
                        return o.Unauthenticated;
                      case 403:
                        return o.PermissionDenied;
                      case 404:
                        return o.NotFound;
                      case 409:
                        return o.Aborted;
                      case 412:
                        return o.FailedPrecondition;
                      case 429:
                        return o.ResourceExhausted;
                      case 499:
                        return o.Canceled;
                      case 500:
                      default:
                        return o.Unknown;
                      case 501:
                        return o.Unimplemented;
                      case 503:
                        return o.Unavailable;
                      case 504:
                        return o.DeadlineExceeded;
                    }
                  });
              },
              934: function (e, t, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.client = void 0);
                var r = o(65),
                  s = o(617),
                  n = o(8),
                  i = o(346),
                  a = o(57),
                  g = o(882);
                t.client = function (e, t) {
                  return new p(e, t);
                };
                var p = (function () {
                  function e(e, t) {
                    (this.started = !1),
                      (this.sentFirstMessage = !1),
                      (this.completed = !1),
                      (this.closed = !1),
                      (this.finishedSending = !1),
                      (this.onHeadersCallbacks = []),
                      (this.onMessageCallbacks = []),
                      (this.onEndCallbacks = []),
                      (this.parser = new s.ChunkParser()),
                      (this.methodDefinition = e),
                      (this.props = t),
                      this.createTransport();
                  }
                  return (
                    (e.prototype.createTransport = function () {
                      var e =
                          this.props.host +
                          "/" +
                          this.methodDefinition.service.serviceName +
                          "/" +
                          this.methodDefinition.methodName,
                        t = {
                          methodDefinition: this.methodDefinition,
                          debug: this.props.debug || !1,
                          url: e,
                          onHeaders: this.onTransportHeaders.bind(this),
                          onChunk: this.onTransportChunk.bind(this),
                          onEnd: this.onTransportEnd.bind(this),
                        };
                      this.props.transport
                        ? (this.transport = this.props.transport(t))
                        : (this.transport = a.makeDefaultTransport(t));
                    }),
                    (e.prototype.onTransportHeaders = function (e, t) {
                      if (
                        (this.props.debug && i.debug("onHeaders", e, t),
                        this.closed)
                      )
                        this.props.debug &&
                          i.debug(
                            "grpc.onHeaders received after request was closed - ignoring"
                          );
                      else if (0 === t);
                      else {
                        (this.responseHeaders = e),
                          this.props.debug &&
                            i.debug(
                              "onHeaders.responseHeaders",
                              JSON.stringify(this.responseHeaders, null, 2)
                            );
                        var o = l(e);
                        this.props.debug && i.debug("onHeaders.gRPCStatus", o);
                        var r = o && o >= 0 ? o : n.httpStatusToCode(t);
                        this.props.debug && i.debug("onHeaders.code", r);
                        var s = e.get("grpc-message") || [];
                        if (
                          (this.props.debug &&
                            i.debug("onHeaders.gRPCMessage", s),
                          this.rawOnHeaders(e),
                          r !== n.Code.OK)
                        ) {
                          var a = this.decodeGRPCStatus(s[0]);
                          this.rawOnError(r, a, e);
                        }
                      }
                    }),
                    (e.prototype.onTransportChunk = function (e) {
                      var t = this;
                      if (this.closed)
                        this.props.debug &&
                          i.debug(
                            "grpc.onChunk received after request was closed - ignoring"
                          );
                      else {
                        var o = [];
                        try {
                          o = this.parser.parse(e);
                        } catch (e) {
                          return (
                            this.props.debug &&
                              i.debug("onChunk.parsing error", e, e.message),
                            void this.rawOnError(
                              n.Code.Internal,
                              "parsing error: " + e.message
                            )
                          );
                        }
                        o.forEach(function (e) {
                          if (e.chunkType === s.ChunkType.MESSAGE) {
                            var o =
                              t.methodDefinition.responseType.deserializeBinary(
                                e.data
                              );
                            t.rawOnMessage(o);
                          } else e.chunkType === s.ChunkType.TRAILERS && (t.responseHeaders ? ((t.responseTrailers = new r.Metadata(e.trailers)), t.props.debug && i.debug("onChunk.trailers", t.responseTrailers)) : ((t.responseHeaders = new r.Metadata(e.trailers)), t.rawOnHeaders(t.responseHeaders)));
                        });
                      }
                    }),
                    (e.prototype.onTransportEnd = function () {
                      if (
                        (this.props.debug && i.debug("grpc.onEnd"), this.closed)
                      )
                        this.props.debug &&
                          i.debug(
                            "grpc.onEnd received after request was closed - ignoring"
                          );
                      else if (void 0 !== this.responseTrailers) {
                        var e = l(this.responseTrailers);
                        if (null !== e) {
                          var t = this.responseTrailers.get("grpc-message"),
                            o = this.decodeGRPCStatus(t[0]);
                          this.rawOnEnd(e, o, this.responseTrailers);
                        } else
                          this.rawOnError(
                            n.Code.Internal,
                            "Response closed without grpc-status (Trailers provided)"
                          );
                      } else {
                        if (void 0 === this.responseHeaders)
                          return void this.rawOnError(
                            n.Code.Unknown,
                            "Response closed without headers"
                          );
                        var r = l(this.responseHeaders),
                          s = this.responseHeaders.get("grpc-message");
                        if (
                          (this.props.debug &&
                            i.debug("grpc.headers only response ", r, s),
                          null === r)
                        )
                          return void this.rawOnEnd(
                            n.Code.Unknown,
                            "Response closed without grpc-status (Headers only)",
                            this.responseHeaders
                          );
                        var a = this.decodeGRPCStatus(s[0]);
                        this.rawOnEnd(r, a, this.responseHeaders);
                      }
                    }),
                    (e.prototype.decodeGRPCStatus = function (e) {
                      if (!e) return "";
                      try {
                        return decodeURIComponent(e);
                      } catch (t) {
                        return e;
                      }
                    }),
                    (e.prototype.rawOnEnd = function (e, t, o) {
                      var r = this;
                      this.props.debug && i.debug("rawOnEnd", e, t, o),
                        this.completed ||
                          ((this.completed = !0),
                          this.onEndCallbacks.forEach(function (s) {
                            if (!r.closed)
                              try {
                                s(e, t, o);
                              } catch (e) {
                                setTimeout(function () {
                                  throw e;
                                }, 0);
                              }
                          }));
                    }),
                    (e.prototype.rawOnHeaders = function (e) {
                      this.props.debug && i.debug("rawOnHeaders", e),
                        this.completed ||
                          this.onHeadersCallbacks.forEach(function (t) {
                            try {
                              t(e);
                            } catch (e) {
                              setTimeout(function () {
                                throw e;
                              }, 0);
                            }
                          });
                    }),
                    (e.prototype.rawOnError = function (e, t, o) {
                      var s = this;
                      void 0 === o && (o = new r.Metadata()),
                        this.props.debug && i.debug("rawOnError", e, t),
                        this.completed ||
                          ((this.completed = !0),
                          this.onEndCallbacks.forEach(function (r) {
                            if (!s.closed)
                              try {
                                r(e, t, o);
                              } catch (e) {
                                setTimeout(function () {
                                  throw e;
                                }, 0);
                              }
                          }));
                    }),
                    (e.prototype.rawOnMessage = function (e) {
                      var t = this;
                      this.props.debug && i.debug("rawOnMessage", e.toObject()),
                        this.completed ||
                          this.closed ||
                          this.onMessageCallbacks.forEach(function (o) {
                            if (!t.closed)
                              try {
                                o(e);
                              } catch (e) {
                                setTimeout(function () {
                                  throw e;
                                }, 0);
                              }
                          });
                    }),
                    (e.prototype.onHeaders = function (e) {
                      this.onHeadersCallbacks.push(e);
                    }),
                    (e.prototype.onMessage = function (e) {
                      this.onMessageCallbacks.push(e);
                    }),
                    (e.prototype.onEnd = function (e) {
                      this.onEndCallbacks.push(e);
                    }),
                    (e.prototype.start = function (e) {
                      if (this.started)
                        throw new Error(
                          "Client already started - cannot .start()"
                        );
                      this.started = !0;
                      var t = new r.Metadata(e || {});
                      t.set("content-type", "application/grpc-web+proto"),
                        t.set("x-grpc-web", "1"),
                        this.transport.start(t);
                    }),
                    (e.prototype.send = function (e) {
                      if (!this.started)
                        throw new Error(
                          "Client not started - .start() must be called before .send()"
                        );
                      if (this.closed)
                        throw new Error(
                          "Client already closed - cannot .send()"
                        );
                      if (this.finishedSending)
                        throw new Error(
                          "Client already finished sending - cannot .send()"
                        );
                      if (
                        !this.methodDefinition.requestStream &&
                        this.sentFirstMessage
                      )
                        throw new Error(
                          "Message already sent for non-client-streaming method - cannot .send()"
                        );
                      this.sentFirstMessage = !0;
                      var t = g.frameRequest(e);
                      this.transport.sendMessage(t);
                    }),
                    (e.prototype.finishSend = function () {
                      if (!this.started)
                        throw new Error(
                          "Client not started - .finishSend() must be called before .close()"
                        );
                      if (this.closed)
                        throw new Error(
                          "Client already closed - cannot .send()"
                        );
                      if (this.finishedSending)
                        throw new Error(
                          "Client already finished sending - cannot .finishSend()"
                        );
                      (this.finishedSending = !0), this.transport.finishSend();
                    }),
                    (e.prototype.close = function () {
                      if (!this.started)
                        throw new Error(
                          "Client not started - .start() must be called before .close()"
                        );
                      if (this.closed)
                        throw new Error(
                          "Client already closed - cannot .close()"
                        );
                      (this.closed = !0),
                        this.props.debug &&
                          i.debug("request.abort aborting request"),
                        this.transport.cancel();
                    }),
                    e
                  );
                })();
                function l(e) {
                  var t = e.get("grpc-status") || [];
                  if (t.length > 0)
                    try {
                      var o = t[0];
                      return parseInt(o, 10);
                    } catch (e) {
                      return null;
                    }
                  return null;
                }
              },
              346: function (e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.debug = void 0),
                  (t.debug = function () {
                    for (var e = [], t = 0; t < arguments.length; t++)
                      e[t] = arguments[t];
                    console.debug
                      ? console.debug.apply(null, e)
                      : console.log.apply(null, e);
                  });
              },
              607: function (e, t, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.grpc = void 0);
                var r,
                  s = o(418),
                  n = o(57),
                  i = o(229),
                  a = o(540),
                  g = o(210),
                  p = o(859),
                  l = o(8),
                  u = o(938),
                  c = o(35),
                  d = o(934);
                ((r = t.grpc || (t.grpc = {})).setDefaultTransport =
                  n.setDefaultTransportFactory),
                  (r.CrossBrowserHttpTransport = p.CrossBrowserHttpTransport),
                  (r.FetchReadableStreamTransport =
                    i.FetchReadableStreamTransport),
                  (r.XhrTransport = g.XhrTransport),
                  (r.WebsocketTransport = a.WebsocketTransport),
                  (r.Code = l.Code),
                  (r.Metadata = s.BrowserHeaders),
                  (r.client = function (e, t) {
                    return d.client(e, t);
                  }),
                  (r.invoke = u.invoke),
                  (r.unary = c.unary);
              },
              938: function (e, t, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.invoke = void 0);
                var r = o(934);
                t.invoke = function (e, t) {
                  if (e.requestStream)
                    throw new Error(
                      ".invoke cannot be used with client-streaming methods. Use .client instead."
                    );
                  var o = r.client(e, {
                    host: t.host,
                    transport: t.transport,
                    debug: t.debug,
                  });
                  return (
                    t.onHeaders && o.onHeaders(t.onHeaders),
                    t.onMessage && o.onMessage(t.onMessage),
                    t.onEnd && o.onEnd(t.onEnd),
                    o.start(t.metadata),
                    o.send(t.request),
                    o.finishSend(),
                    {
                      close: function () {
                        o.close();
                      },
                    }
                  );
                };
              },
              65: function (e, t, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.Metadata = void 0);
                var r = o(418);
                Object.defineProperty(t, "Metadata", {
                  enumerable: !0,
                  get: function () {
                    return r.BrowserHeaders;
                  },
                });
              },
              57: function (e, t, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.makeDefaultTransport = t.setDefaultTransportFactory =
                    void 0);
                var r = o(859),
                  s = function (e) {
                    return r.CrossBrowserHttpTransport({ withCredentials: !1 })(
                      e
                    );
                  };
                (t.setDefaultTransportFactory = function (e) {
                  s = e;
                }),
                  (t.makeDefaultTransport = function (e) {
                    return s(e);
                  });
              },
              229: function (e, t, o) {
                "use strict";
                var r =
                  (this && this.__assign) ||
                  function () {
                    return (r =
                      Object.assign ||
                      function (e) {
                        for (var t, o = 1, r = arguments.length; o < r; o++)
                          for (var s in (t = arguments[o]))
                            Object.prototype.hasOwnProperty.call(t, s) &&
                              (e[s] = t[s]);
                        return e;
                      }).apply(this, arguments);
                  };
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.detectFetchSupport = t.FetchReadableStreamTransport =
                    void 0);
                var s = o(65),
                  n = o(346);
                t.FetchReadableStreamTransport = function (e) {
                  return function (t) {
                    return (function (e, t) {
                      return e.debug && n.debug("fetchRequest", e), new i(e, t);
                    })(t, e);
                  };
                };
                var i = (function () {
                  function e(e, t) {
                    (this.cancelled = !1),
                      (this.controller =
                        self.AbortController && new AbortController()),
                      (this.options = e),
                      (this.init = t);
                  }
                  return (
                    (e.prototype.pump = function (e, t) {
                      var o = this;
                      if (((this.reader = e), this.cancelled))
                        return (
                          this.options.debug &&
                            n.debug("Fetch.pump.cancel at first pump"),
                          void this.reader.cancel().catch(function (e) {
                            o.options.debug &&
                              n.debug("Fetch.pump.reader.cancel exception", e);
                          })
                        );
                      this.reader
                        .read()
                        .then(function (e) {
                          if (e.done) return o.options.onEnd(), t;
                          o.options.onChunk(e.value), o.pump(o.reader, t);
                        })
                        .catch(function (e) {
                          o.cancelled
                            ? o.options.debug &&
                              n.debug("Fetch.catch - request cancelled")
                            : ((o.cancelled = !0),
                              o.options.debug &&
                                n.debug("Fetch.catch", e.message),
                              o.options.onEnd(e));
                        });
                    }),
                    (e.prototype.send = function (e) {
                      var t = this;
                      fetch(
                        this.options.url,
                        r(r({}, this.init), {
                          headers: this.metadata.toHeaders(),
                          method: "POST",
                          body: e,
                          signal: this.controller && this.controller.signal,
                        })
                      )
                        .then(function (e) {
                          if (
                            (t.options.debug && n.debug("Fetch.response", e),
                            t.options.onHeaders(
                              new s.Metadata(e.headers),
                              e.status
                            ),
                            !e.body)
                          )
                            return e;
                          t.pump(e.body.getReader(), e);
                        })
                        .catch(function (e) {
                          t.cancelled
                            ? t.options.debug &&
                              n.debug("Fetch.catch - request cancelled")
                            : ((t.cancelled = !0),
                              t.options.debug &&
                                n.debug("Fetch.catch", e.message),
                              t.options.onEnd(e));
                        });
                    }),
                    (e.prototype.sendMessage = function (e) {
                      this.send(e);
                    }),
                    (e.prototype.finishSend = function () {}),
                    (e.prototype.start = function (e) {
                      this.metadata = e;
                    }),
                    (e.prototype.cancel = function () {
                      var e = this;
                      this.cancelled
                        ? this.options.debug &&
                          n.debug("Fetch.cancel already cancelled")
                        : ((this.cancelled = !0),
                          this.controller
                            ? (this.options.debug &&
                                n.debug("Fetch.cancel.controller.abort"),
                              this.controller.abort())
                            : this.options.debug &&
                              n.debug("Fetch.cancel.missing abort controller"),
                          this.reader
                            ? (this.options.debug &&
                                n.debug("Fetch.cancel.reader.cancel"),
                              this.reader.cancel().catch(function (t) {
                                e.options.debug &&
                                  n.debug(
                                    "Fetch.cancel.reader.cancel exception",
                                    t
                                  );
                              }))
                            : this.options.debug &&
                              n.debug("Fetch.cancel before reader"));
                    }),
                    e
                  );
                })();
                t.detectFetchSupport = function () {
                  return (
                    "undefined" != typeof Response &&
                    Response.prototype.hasOwnProperty("body") &&
                    "function" == typeof Headers
                  );
                };
              },
              859: function (e, t, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.CrossBrowserHttpTransport = void 0);
                var r = o(229),
                  s = o(210);
                t.CrossBrowserHttpTransport = function (e) {
                  if (r.detectFetchSupport()) {
                    var t = {
                      credentials: e.withCredentials
                        ? "include"
                        : "same-origin",
                    };
                    return r.FetchReadableStreamTransport(t);
                  }
                  return s.XhrTransport({ withCredentials: e.withCredentials });
                };
              },
              210: function (e, t, o) {
                "use strict";
                var r,
                  s =
                    (this && this.__extends) ||
                    ((r = function (e, t) {
                      return (r =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                          function (e, t) {
                            e.__proto__ = t;
                          }) ||
                        function (e, t) {
                          for (var o in t)
                            Object.prototype.hasOwnProperty.call(t, o) &&
                              (e[o] = t[o]);
                        })(e, t);
                    }),
                    function (e, t) {
                      function o() {
                        this.constructor = e;
                      }
                      r(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((o.prototype = t.prototype), new o()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.stringToArrayBuffer =
                    t.MozChunkedArrayBufferXHR =
                    t.XHR =
                    t.XhrTransport =
                      void 0);
                var n = o(65),
                  i = o(346),
                  a = o(849);
                t.XhrTransport = function (e) {
                  return function (t) {
                    if (a.detectMozXHRSupport()) return new p(t, e);
                    if (a.detectXHROverrideMimeTypeSupport())
                      return new g(t, e);
                    throw new Error(
                      "This environment's XHR implementation cannot support binary transfer."
                    );
                  };
                };
                var g = (function () {
                  function e(e, t) {
                    (this.options = e), (this.init = t);
                  }
                  return (
                    (e.prototype.onProgressEvent = function () {
                      this.options.debug &&
                        i.debug(
                          "XHR.onProgressEvent.length: ",
                          this.xhr.response.length
                        );
                      var e = this.xhr.response.substr(this.index);
                      this.index = this.xhr.response.length;
                      var t = u(e);
                      this.options.onChunk(t);
                    }),
                    (e.prototype.onLoadEvent = function () {
                      this.options.debug && i.debug("XHR.onLoadEvent"),
                        this.options.onEnd();
                    }),
                    (e.prototype.onStateChange = function () {
                      this.options.debug &&
                        i.debug("XHR.onStateChange", this.xhr.readyState),
                        this.xhr.readyState ===
                          XMLHttpRequest.HEADERS_RECEIVED &&
                          this.options.onHeaders(
                            new n.Metadata(this.xhr.getAllResponseHeaders()),
                            this.xhr.status
                          );
                    }),
                    (e.prototype.sendMessage = function (e) {
                      this.xhr.send(e);
                    }),
                    (e.prototype.finishSend = function () {}),
                    (e.prototype.start = function (e) {
                      var t = this;
                      this.metadata = e;
                      var o = new XMLHttpRequest();
                      (this.xhr = o),
                        o.open("POST", this.options.url),
                        this.configureXhr(),
                        this.metadata.forEach(function (e, t) {
                          o.setRequestHeader(e, t.join(", "));
                        }),
                        (o.withCredentials = Boolean(
                          this.init.withCredentials
                        )),
                        o.addEventListener(
                          "readystatechange",
                          this.onStateChange.bind(this)
                        ),
                        o.addEventListener(
                          "progress",
                          this.onProgressEvent.bind(this)
                        ),
                        o.addEventListener(
                          "loadend",
                          this.onLoadEvent.bind(this)
                        ),
                        o.addEventListener("error", function (e) {
                          t.options.debug && i.debug("XHR.error", e),
                            t.options.onEnd(e.error);
                        });
                    }),
                    (e.prototype.configureXhr = function () {
                      (this.xhr.responseType = "text"),
                        this.xhr.overrideMimeType(
                          "text/plain; charset=x-user-defined"
                        );
                    }),
                    (e.prototype.cancel = function () {
                      this.options.debug && i.debug("XHR.abort"),
                        this.xhr.abort();
                    }),
                    e
                  );
                })();
                t.XHR = g;
                var p = (function (e) {
                  function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                  }
                  return (
                    s(t, e),
                    (t.prototype.configureXhr = function () {
                      this.options.debug &&
                        i.debug(
                          "MozXHR.configureXhr: setting responseType to 'moz-chunked-arraybuffer'"
                        ),
                        (this.xhr.responseType = "moz-chunked-arraybuffer");
                    }),
                    (t.prototype.onProgressEvent = function () {
                      var e = this.xhr.response;
                      this.options.debug &&
                        i.debug("MozXHR.onProgressEvent: ", new Uint8Array(e)),
                        this.options.onChunk(new Uint8Array(e));
                    }),
                    t
                  );
                })(g);
                function l(e, t) {
                  var o = e.charCodeAt(t);
                  if (o >= 55296 && o <= 56319) {
                    var r = e.charCodeAt(t + 1);
                    r >= 56320 &&
                      r <= 57343 &&
                      (o = 65536 + ((o - 55296) << 10) + (r - 56320));
                  }
                  return o;
                }
                function u(e) {
                  for (
                    var t = new Uint8Array(e.length), o = 0, r = 0;
                    r < e.length;
                    r++
                  ) {
                    var s = String.prototype.codePointAt
                      ? e.codePointAt(r)
                      : l(e, r);
                    t[o++] = 255 & s;
                  }
                  return t;
                }
                (t.MozChunkedArrayBufferXHR = p), (t.stringToArrayBuffer = u);
              },
              849: function (e, t) {
                "use strict";
                var o;
                function r(e) {
                  var t = (function () {
                    if (void 0 !== o) return o;
                    if (XMLHttpRequest) {
                      o = new XMLHttpRequest();
                      try {
                        o.open("GET", "https://localhost");
                      } catch (e) {}
                    }
                    return o;
                  })();
                  if (!t) return !1;
                  try {
                    return (t.responseType = e), t.responseType === e;
                  } catch (e) {}
                  return !1;
                }
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.detectXHROverrideMimeTypeSupport =
                    t.detectMozXHRSupport =
                    t.xhrSupportsResponseType =
                      void 0),
                  (t.xhrSupportsResponseType = r),
                  (t.detectMozXHRSupport = function () {
                    return (
                      "undefined" != typeof XMLHttpRequest &&
                      r("moz-chunked-arraybuffer")
                    );
                  }),
                  (t.detectXHROverrideMimeTypeSupport = function () {
                    return (
                      "undefined" != typeof XMLHttpRequest &&
                      XMLHttpRequest.prototype.hasOwnProperty(
                        "overrideMimeType"
                      )
                    );
                  });
              },
              540: function (e, t, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.WebsocketTransport = void 0);
                var r,
                  s = o(346),
                  n = o(617);
                !(function (e) {
                  e[(e.FINISH_SEND = 1)] = "FINISH_SEND";
                })(r || (r = {}));
                var i = new Uint8Array([1]);
                t.WebsocketTransport = function () {
                  return function (e) {
                    return (function (e) {
                      e.debug && s.debug("websocketRequest", e);
                      var t,
                        o = (function (e) {
                          if ("https://" === e.substr(0, 8))
                            return "wss://" + e.substr(8);
                          if ("http://" === e.substr(0, 7))
                            return "ws://" + e.substr(7);
                          throw new Error(
                            "Websocket transport constructed with non-https:// or http:// host."
                          );
                        })(e.url),
                        a = [];
                      function g(e) {
                        if (e === r.FINISH_SEND) t.send(i);
                        else {
                          var o = e,
                            s = new Int8Array(o.byteLength + 1);
                          s.set(new Uint8Array([0])), s.set(o, 1), t.send(s);
                        }
                      }
                      return {
                        sendMessage: function (e) {
                          t && t.readyState !== t.CONNECTING ? g(e) : a.push(e);
                        },
                        finishSend: function () {
                          t && t.readyState !== t.CONNECTING
                            ? g(r.FINISH_SEND)
                            : a.push(r.FINISH_SEND);
                        },
                        start: function (r) {
                          ((t = new WebSocket(o, [
                            "grpc-websockets",
                          ])).binaryType = "arraybuffer"),
                            (t.onopen = function () {
                              var o;
                              e.debug && s.debug("websocketRequest.onopen"),
                                t.send(
                                  ((o = ""),
                                  r.forEach(function (e, t) {
                                    o += e + ": " + t.join(", ") + "\r\n";
                                  }),
                                  n.encodeASCII(o))
                                ),
                                a.forEach(function (e) {
                                  g(e);
                                });
                            }),
                            (t.onclose = function (t) {
                              e.debug && s.debug("websocketRequest.onclose", t),
                                e.onEnd();
                            }),
                            (t.onerror = function (t) {
                              e.debug && s.debug("websocketRequest.onerror", t);
                            }),
                            (t.onmessage = function (t) {
                              e.onChunk(new Uint8Array(t.data));
                            });
                        },
                        cancel: function () {
                          e.debug && s.debug("websocket.abort"), t.close();
                        },
                      };
                    })(e);
                  };
                };
              },
              35: function (e, t, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.unary = void 0);
                var r = o(65),
                  s = o(934);
                t.unary = function (e, t) {
                  if (e.responseStream)
                    throw new Error(
                      ".unary cannot be used with server-streaming methods. Use .invoke or .client instead."
                    );
                  if (e.requestStream)
                    throw new Error(
                      ".unary cannot be used with client-streaming methods. Use .client instead."
                    );
                  var o = null,
                    n = null,
                    i = s.client(e, {
                      host: t.host,
                      transport: t.transport,
                      debug: t.debug,
                    });
                  return (
                    i.onHeaders(function (e) {
                      o = e;
                    }),
                    i.onMessage(function (e) {
                      n = e;
                    }),
                    i.onEnd(function (e, s, i) {
                      t.onEnd({
                        status: e,
                        statusMessage: s,
                        headers: o || new r.Metadata(),
                        message: n,
                        trailers: i,
                      });
                    }),
                    i.start(t.metadata),
                    i.send(t.request),
                    i.finishSend(),
                    {
                      close: function () {
                        i.close();
                      },
                    }
                  );
                };
              },
              882: function (e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.frameRequest = void 0),
                  (t.frameRequest = function (e) {
                    var t = e.serializeBinary(),
                      o = new ArrayBuffer(t.byteLength + 5);
                    return (
                      new DataView(o, 1, 4).setUint32(0, t.length, !1),
                      new Uint8Array(o, 5).set(t),
                      new Uint8Array(o)
                    );
                  });
              },
            }),
            (o = {}),
            (function e(r) {
              if (o[r]) return o[r].exports;
              var s = (o[r] = { exports: {} });
              return t[r].call(s.exports, s, s.exports, e), s.exports;
            })(607));
        },
        19: function (__unused_webpack_module, exports, __webpack_require__) {
          var $jscomp = $jscomp || {};
          ($jscomp.scope = {}),
            ($jscomp.findInternal = function (e, t, o) {
              e instanceof String && (e = String(e));
              for (var r = e.length, s = 0; s < r; s++) {
                var n = e[s];
                if (t.call(o, n, s, e)) return { i: s, v: n };
              }
              return { i: -1, v: void 0 };
            }),
            ($jscomp.ASSUME_ES5 = !1),
            ($jscomp.ASSUME_NO_NATIVE_MAP = !1),
            ($jscomp.ASSUME_NO_NATIVE_SET = !1),
            ($jscomp.SIMPLE_FROUND_POLYFILL = !1),
            ($jscomp.defineProperty =
              $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
                ? Object.defineProperty
                : function (e, t, o) {
                    e != Array.prototype &&
                      e != Object.prototype &&
                      (e[t] = o.value);
                  }),
            ($jscomp.getGlobal = function (e) {
              return "undefined" != typeof window && window === e
                ? e
                : void 0 !== __webpack_require__.g &&
                  null != __webpack_require__.g
                ? __webpack_require__.g
                : e;
            }),
            ($jscomp.global = $jscomp.getGlobal(this)),
            ($jscomp.polyfill = function (e, t, o, r) {
              if (t) {
                for (
                  o = $jscomp.global, e = e.split("."), r = 0;
                  r < e.length - 1;
                  r++
                ) {
                  var s = e[r];
                  s in o || (o[s] = {}), (o = o[s]);
                }
                (t = t((r = o[(e = e[e.length - 1])]))) != r &&
                  null != t &&
                  $jscomp.defineProperty(o, e, {
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
              }
            }),
            $jscomp.polyfill(
              "Array.prototype.findIndex",
              function (e) {
                return (
                  e ||
                  function (e, t) {
                    return $jscomp.findInternal(this, e, t).i;
                  }
                );
              },
              "es6",
              "es3"
            ),
            ($jscomp.checkStringArgs = function (e, t, o) {
              if (null == e)
                throw new TypeError(
                  "The 'this' value for String.prototype." +
                    o +
                    " must not be null or undefined"
                );
              if (t instanceof RegExp)
                throw new TypeError(
                  "First argument to String.prototype." +
                    o +
                    " must not be a regular expression"
                );
              return e + "";
            }),
            $jscomp.polyfill(
              "String.prototype.endsWith",
              function (e) {
                return (
                  e ||
                  function (e, t) {
                    var o = $jscomp.checkStringArgs(this, e, "endsWith");
                    (e += ""),
                      void 0 === t && (t = o.length),
                      (t = Math.max(0, Math.min(0 | t, o.length)));
                    for (var r = e.length; 0 < r && 0 < t; )
                      if (o[--t] != e[--r]) return !1;
                    return 0 >= r;
                  }
                );
              },
              "es6",
              "es3"
            ),
            $jscomp.polyfill(
              "Array.prototype.find",
              function (e) {
                return (
                  e ||
                  function (e, t) {
                    return $jscomp.findInternal(this, e, t).v;
                  }
                );
              },
              "es6",
              "es3"
            ),
            $jscomp.polyfill(
              "String.prototype.startsWith",
              function (e) {
                return (
                  e ||
                  function (e, t) {
                    var o = $jscomp.checkStringArgs(this, e, "startsWith");
                    e += "";
                    var r = o.length,
                      s = e.length;
                    t = Math.max(0, Math.min(0 | t, o.length));
                    for (var n = 0; n < s && t < r; )
                      if (o[t++] != e[n++]) return !1;
                    return n >= s;
                  }
                );
              },
              "es6",
              "es3"
            ),
            $jscomp.polyfill(
              "String.prototype.repeat",
              function (e) {
                return (
                  e ||
                  function (e) {
                    var t = $jscomp.checkStringArgs(this, null, "repeat");
                    if (0 > e || 1342177279 < e)
                      throw new RangeError("Invalid count value");
                    e |= 0;
                    for (var o = ""; e; )
                      1 & e && (o += t), (e >>>= 1) && (t += t);
                    return o;
                  }
                );
              },
              "es6",
              "es3"
            );
          var COMPILED = !0,
            goog = goog || {};
          (goog.global = this || self),
            (goog.exportPath_ = function (e, t, o) {
              (e = e.split(".")),
                (o = o || goog.global),
                e[0] in o ||
                  void 0 === o.execScript ||
                  o.execScript("var " + e[0]);
              for (var r; e.length && (r = e.shift()); )
                e.length || void 0 === t
                  ? (o =
                      o[r] && o[r] !== Object.prototype[r] ? o[r] : (o[r] = {}))
                  : (o[r] = t);
            }),
            (goog.define = function (e, t) {
              if (!COMPILED) {
                var o = goog.global.CLOSURE_UNCOMPILED_DEFINES,
                  r = goog.global.CLOSURE_DEFINES;
                o &&
                void 0 === o.nodeType &&
                Object.prototype.hasOwnProperty.call(o, e)
                  ? (t = o[e])
                  : r &&
                    void 0 === r.nodeType &&
                    Object.prototype.hasOwnProperty.call(r, e) &&
                    (t = r[e]);
              }
              return t;
            }),
            (goog.FEATURESET_YEAR = 2012),
            (goog.DEBUG = !0),
            (goog.LOCALE = "en"),
            (goog.TRUSTED_SITE = !0),
            (goog.STRICT_MODE_COMPATIBLE = !1),
            (goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG),
            (goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1),
            (goog.provide = function (e) {
              if (goog.isInModuleLoader_())
                throw Error("goog.provide cannot be used within a module.");
              if (!COMPILED && goog.isProvided_(e))
                throw Error('Namespace "' + e + '" already declared.');
              goog.constructNamespace_(e);
            }),
            (goog.constructNamespace_ = function (e, t) {
              if (!COMPILED) {
                delete goog.implicitNamespaces_[e];
                for (
                  var o = e;
                  (o = o.substring(0, o.lastIndexOf("."))) &&
                  !goog.getObjectByName(o);

                )
                  goog.implicitNamespaces_[o] = !0;
              }
              goog.exportPath_(e, t);
            }),
            (goog.getScriptNonce = function (e) {
              return e && e != goog.global
                ? goog.getScriptNonce_(e.document)
                : (null === goog.cspNonce_ &&
                    (goog.cspNonce_ = goog.getScriptNonce_(
                      goog.global.document
                    )),
                  goog.cspNonce_);
            }),
            (goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/),
            (goog.cspNonce_ = null),
            (goog.getScriptNonce_ = function (e) {
              return (e =
                e.querySelector && e.querySelector("script[nonce]")) &&
                (e = e.nonce || e.getAttribute("nonce")) &&
                goog.NONCE_PATTERN_.test(e)
                ? e
                : "";
            }),
            (goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/),
            (goog.module = function (e) {
              if (
                "string" != typeof e ||
                !e ||
                -1 == e.search(goog.VALID_MODULE_RE_)
              )
                throw Error("Invalid module identifier");
              if (!goog.isInGoogModuleLoader_())
                throw Error(
                  "Module " +
                    e +
                    " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide."
                );
              if (goog.moduleLoaderState_.moduleName)
                throw Error("goog.module may only be called once per module.");
              if (((goog.moduleLoaderState_.moduleName = e), !COMPILED)) {
                if (goog.isProvided_(e))
                  throw Error('Namespace "' + e + '" already declared.');
                delete goog.implicitNamespaces_[e];
              }
            }),
            (goog.module.get = function (e) {
              return goog.module.getInternal_(e);
            }),
            (goog.module.getInternal_ = function (e) {
              if (!COMPILED) {
                if (e in goog.loadedModules_)
                  return goog.loadedModules_[e].exports;
                if (!goog.implicitNamespaces_[e])
                  return null != (e = goog.getObjectByName(e)) ? e : null;
              }
              return null;
            }),
            (goog.ModuleType = { ES6: "es6", GOOG: "goog" }),
            (goog.moduleLoaderState_ = null),
            (goog.isInModuleLoader_ = function () {
              return (
                goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_()
              );
            }),
            (goog.isInGoogModuleLoader_ = function () {
              return (
                !!goog.moduleLoaderState_ &&
                goog.moduleLoaderState_.type == goog.ModuleType.GOOG
              );
            }),
            (goog.isInEs6ModuleLoader_ = function () {
              if (
                goog.moduleLoaderState_ &&
                goog.moduleLoaderState_.type == goog.ModuleType.ES6
              )
                return !0;
              var e = goog.global.$jscomp;
              return (
                !!e &&
                "function" == typeof e.getCurrentModulePath &&
                !!e.getCurrentModulePath()
              );
            }),
            (goog.module.declareLegacyNamespace = function () {
              if (!COMPILED && !goog.isInGoogModuleLoader_())
                throw Error(
                  "goog.module.declareLegacyNamespace must be called from within a goog.module"
                );
              if (!COMPILED && !goog.moduleLoaderState_.moduleName)
                throw Error(
                  "goog.module must be called prior to goog.module.declareLegacyNamespace."
                );
              goog.moduleLoaderState_.declareLegacyNamespace = !0;
            }),
            (goog.declareModuleId = function (e) {
              if (!COMPILED) {
                if (!goog.isInEs6ModuleLoader_())
                  throw Error(
                    "goog.declareModuleId may only be called from within an ES6 module"
                  );
                if (
                  goog.moduleLoaderState_ &&
                  goog.moduleLoaderState_.moduleName
                )
                  throw Error(
                    "goog.declareModuleId may only be called once per module."
                  );
                if (e in goog.loadedModules_)
                  throw Error(
                    'Module with namespace "' + e + '" already exists.'
                  );
              }
              if (goog.moduleLoaderState_)
                goog.moduleLoaderState_.moduleName = e;
              else {
                var t = goog.global.$jscomp;
                if (!t || "function" != typeof t.getCurrentModulePath)
                  throw Error(
                    'Module with namespace "' +
                      e +
                      '" has been loaded incorrectly.'
                  );
                (t = t.require(t.getCurrentModulePath())),
                  (goog.loadedModules_[e] = {
                    exports: t,
                    type: goog.ModuleType.ES6,
                    moduleId: e,
                  });
              }
            }),
            (goog.setTestOnly = function (e) {
              if (goog.DISALLOW_TEST_ONLY_CODE)
                throw (
                  ((e = e || ""),
                  Error(
                    "Importing test-only code into non-debug environment" +
                      (e ? ": " + e : ".")
                  ))
                );
            }),
            (goog.forwardDeclare = function (e) {}),
            COMPILED ||
              ((goog.isProvided_ = function (e) {
                return (
                  e in goog.loadedModules_ ||
                  (!goog.implicitNamespaces_[e] &&
                    null != goog.getObjectByName(e))
                );
              }),
              (goog.implicitNamespaces_ = { "goog.module": !0 })),
            (goog.getObjectByName = function (e, t) {
              (e = e.split(".")), (t = t || goog.global);
              for (var o = 0; o < e.length; o++)
                if (null == (t = t[e[o]])) return null;
              return t;
            }),
            (goog.globalize = function (e, t) {
              for (var o in ((t = t || goog.global), e)) t[o] = e[o];
            }),
            (goog.addDependency = function (e, t, o, r) {
              !COMPILED &&
                goog.DEPENDENCIES_ENABLED &&
                goog.debugLoader_.addDependency(e, t, o, r);
            }),
            (goog.ENABLE_DEBUG_LOADER = !0),
            (goog.logToConsole_ = function (e) {
              goog.global.console && goog.global.console.error(e);
            }),
            (goog.require = function (e) {
              if (!COMPILED) {
                if (
                  (goog.ENABLE_DEBUG_LOADER && goog.debugLoader_.requested(e),
                  goog.isProvided_(e))
                ) {
                  if (goog.isInModuleLoader_())
                    return goog.module.getInternal_(e);
                } else if (goog.ENABLE_DEBUG_LOADER) {
                  var t = goog.moduleLoaderState_;
                  goog.moduleLoaderState_ = null;
                  try {
                    goog.debugLoader_.load_(e);
                  } finally {
                    goog.moduleLoaderState_ = t;
                  }
                }
                return null;
              }
            }),
            (goog.requireType = function (e) {
              return {};
            }),
            (goog.basePath = ""),
            (goog.nullFunction = function () {}),
            (goog.abstractMethod = function () {
              throw Error("unimplemented abstract method");
            }),
            (goog.addSingletonGetter = function (e) {
              (e.instance_ = void 0),
                (e.getInstance = function () {
                  return e.instance_
                    ? e.instance_
                    : (goog.DEBUG &&
                        (goog.instantiatedSingletons_[
                          goog.instantiatedSingletons_.length
                        ] = e),
                      (e.instance_ = new e()));
                });
            }),
            (goog.instantiatedSingletons_ = []),
            (goog.LOAD_MODULE_USING_EVAL = !0),
            (goog.SEAL_MODULE_EXPORTS = goog.DEBUG),
            (goog.loadedModules_ = {}),
            (goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER),
            (goog.TRANSPILE = "detect"),
            (goog.ASSUME_ES_MODULES_TRANSPILED = !1),
            (goog.TRANSPILE_TO_LANGUAGE = ""),
            (goog.TRANSPILER = "transpile.js"),
            (goog.hasBadLetScoping = null),
            (goog.useSafari10Workaround = function () {
              if (null == goog.hasBadLetScoping) {
                try {
                  var a = !eval(
                    '"use strict";let x = 1; function f() { return typeof x; };f() == "number";'
                  );
                } catch (e) {
                  a = !1;
                }
                goog.hasBadLetScoping = a;
              }
              return goog.hasBadLetScoping;
            }),
            (goog.workaroundSafari10EvalBug = function (e) {
              return "(function(){" + e + "\n;})();\n";
            }),
            (goog.loadModule = function (e) {
              var t = goog.moduleLoaderState_;
              try {
                if (
                  ((goog.moduleLoaderState_ = {
                    moduleName: "",
                    declareLegacyNamespace: !1,
                    type: goog.ModuleType.GOOG,
                  }),
                  goog.isFunction(e))
                )
                  var o = e.call(void 0, {});
                else {
                  if ("string" != typeof e)
                    throw Error("Invalid module definition");
                  goog.useSafari10Workaround() &&
                    (e = goog.workaroundSafari10EvalBug(e)),
                    (o = goog.loadModuleFromSource_.call(void 0, e));
                }
                var r = goog.moduleLoaderState_.moduleName;
                if ("string" != typeof r || !r)
                  throw Error('Invalid module name "' + r + '"');
                goog.moduleLoaderState_.declareLegacyNamespace
                  ? goog.constructNamespace_(r, o)
                  : goog.SEAL_MODULE_EXPORTS &&
                    Object.seal &&
                    "object" == typeof o &&
                    null != o &&
                    Object.seal(o),
                  (goog.loadedModules_[r] = {
                    exports: o,
                    type: goog.ModuleType.GOOG,
                    moduleId: goog.moduleLoaderState_.moduleName,
                  });
              } finally {
                goog.moduleLoaderState_ = t;
              }
            }),
            (goog.loadModuleFromSource_ = function (a) {
              return eval(a), {};
            }),
            (goog.normalizePath_ = function (e) {
              e = e.split("/");
              for (var t = 0; t < e.length; )
                "." == e[t]
                  ? e.splice(t, 1)
                  : t && ".." == e[t] && e[t - 1] && ".." != e[t - 1]
                  ? e.splice(--t, 2)
                  : t++;
              return e.join("/");
            }),
            (goog.loadFileSync_ = function (e) {
              if (goog.global.CLOSURE_LOAD_FILE_SYNC)
                return goog.global.CLOSURE_LOAD_FILE_SYNC(e);
              try {
                var t = new goog.global.XMLHttpRequest();
                return (
                  t.open("get", e, !1),
                  t.send(),
                  0 == t.status || 200 == t.status ? t.responseText : null
                );
              } catch (e) {
                return null;
              }
            }),
            (goog.transpile_ = function (e, t, o) {
              var r = goog.global.$jscomp;
              r || (goog.global.$jscomp = r = {});
              var s = r.transpile;
              if (!s) {
                var n = goog.basePath + goog.TRANSPILER,
                  i = goog.loadFileSync_(n);
                if (i) {
                  if (
                    (function () {
                      (0, eval)(i + "\n//# sourceURL=" + n);
                    }.call(goog.global),
                    goog.global.$gwtExport &&
                      goog.global.$gwtExport.$jscomp &&
                      !goog.global.$gwtExport.$jscomp.transpile)
                  )
                    throw Error(
                      'The transpiler did not properly export the "transpile" method. $gwtExport: ' +
                        JSON.stringify(goog.global.$gwtExport)
                    );
                  (goog.global.$jscomp.transpile =
                    goog.global.$gwtExport.$jscomp.transpile),
                    (s = (r = goog.global.$jscomp).transpile);
                }
              }
              return (
                s ||
                  (s = r.transpile =
                    function (e, t) {
                      return (
                        goog.logToConsole_(
                          t +
                            " requires transpilation but no transpiler was found."
                        ),
                        e
                      );
                    }),
                s(e, t, o)
              );
            }),
            (goog.typeOf = function (e) {
              var t = typeof e;
              if ("object" == t) {
                if (!e) return "null";
                if (e instanceof Array) return "array";
                if (e instanceof Object) return t;
                var o = Object.prototype.toString.call(e);
                if ("[object Window]" == o) return "object";
                if (
                  "[object Array]" == o ||
                  ("number" == typeof e.length &&
                    void 0 !== e.splice &&
                    void 0 !== e.propertyIsEnumerable &&
                    !e.propertyIsEnumerable("splice"))
                )
                  return "array";
                if (
                  "[object Function]" == o ||
                  (void 0 !== e.call &&
                    void 0 !== e.propertyIsEnumerable &&
                    !e.propertyIsEnumerable("call"))
                )
                  return "function";
              } else if ("function" == t && void 0 === e.call) return "object";
              return t;
            }),
            (goog.isArray = function (e) {
              return "array" == goog.typeOf(e);
            }),
            (goog.isArrayLike = function (e) {
              var t = goog.typeOf(e);
              return (
                "array" == t || ("object" == t && "number" == typeof e.length)
              );
            }),
            (goog.isDateLike = function (e) {
              return goog.isObject(e) && "function" == typeof e.getFullYear;
            }),
            (goog.isFunction = function (e) {
              return "function" == goog.typeOf(e);
            }),
            (goog.isObject = function (e) {
              var t = typeof e;
              return ("object" == t && null != e) || "function" == t;
            }),
            (goog.getUid = function (e) {
              return (
                (Object.prototype.hasOwnProperty.call(e, goog.UID_PROPERTY_) &&
                  e[goog.UID_PROPERTY_]) ||
                (e[goog.UID_PROPERTY_] = ++goog.uidCounter_)
              );
            }),
            (goog.hasUid = function (e) {
              return !!e[goog.UID_PROPERTY_];
            }),
            (goog.removeUid = function (e) {
              null !== e &&
                "removeAttribute" in e &&
                e.removeAttribute(goog.UID_PROPERTY_);
              try {
                delete e[goog.UID_PROPERTY_];
              } catch (e) {}
            }),
            (goog.UID_PROPERTY_ =
              "closure_uid_" + ((1e9 * Math.random()) >>> 0)),
            (goog.uidCounter_ = 0),
            (goog.getHashCode = goog.getUid),
            (goog.removeHashCode = goog.removeUid),
            (goog.cloneObject = function (e) {
              var t = goog.typeOf(e);
              if ("object" == t || "array" == t) {
                if ("function" == typeof e.clone) return e.clone();
                for (var o in ((t = "array" == t ? [] : {}), e))
                  t[o] = goog.cloneObject(e[o]);
                return t;
              }
              return e;
            }),
            (goog.bindNative_ = function (e, t, o) {
              return e.call.apply(e.bind, arguments);
            }),
            (goog.bindJs_ = function (e, t, o) {
              if (!e) throw Error();
              if (2 < arguments.length) {
                var r = Array.prototype.slice.call(arguments, 2);
                return function () {
                  var o = Array.prototype.slice.call(arguments);
                  return Array.prototype.unshift.apply(o, r), e.apply(t, o);
                };
              }
              return function () {
                return e.apply(t, arguments);
              };
            }),
            (goog.bind = function (e, t, o) {
              return (
                Function.prototype.bind &&
                -1 != Function.prototype.bind.toString().indexOf("native code")
                  ? (goog.bind = goog.bindNative_)
                  : (goog.bind = goog.bindJs_),
                goog.bind.apply(null, arguments)
              );
            }),
            (goog.partial = function (e, t) {
              var o = Array.prototype.slice.call(arguments, 1);
              return function () {
                var t = o.slice();
                return t.push.apply(t, arguments), e.apply(this, t);
              };
            }),
            (goog.mixin = function (e, t) {
              for (var o in t) e[o] = t[o];
            }),
            (goog.now =
              (goog.TRUSTED_SITE && Date.now) ||
              function () {
                return +new Date();
              }),
            (goog.globalEval = function (e) {
              if (goog.global.execScript)
                goog.global.execScript(e, "JavaScript");
              else {
                if (!goog.global.eval)
                  throw Error("goog.globalEval not available");
                if (null == goog.evalWorksForGlobals_) {
                  try {
                    goog.global.eval("var _evalTest_ = 1;");
                  } catch (e) {}
                  if (void 0 !== goog.global._evalTest_) {
                    try {
                      delete goog.global._evalTest_;
                    } catch (e) {}
                    goog.evalWorksForGlobals_ = !0;
                  } else goog.evalWorksForGlobals_ = !1;
                }
                if (goog.evalWorksForGlobals_) goog.global.eval(e);
                else {
                  var t = goog.global.document,
                    o = t.createElement("script");
                  (o.type = "text/javascript"),
                    (o.defer = !1),
                    o.appendChild(t.createTextNode(e)),
                    t.head.appendChild(o),
                    t.head.removeChild(o);
                }
              }
            }),
            (goog.evalWorksForGlobals_ = null),
            (goog.getCssName = function (e, t) {
              if ("." == String(e).charAt(0))
                throw Error(
                  'className passed in goog.getCssName must not start with ".". You passed: ' +
                    e
                );
              var o = function (e) {
                  return goog.cssNameMapping_[e] || e;
                },
                r = function (e) {
                  e = e.split("-");
                  for (var t = [], r = 0; r < e.length; r++) t.push(o(e[r]));
                  return t.join("-");
                };
              return (
                (r = goog.cssNameMapping_
                  ? "BY_WHOLE" == goog.cssNameMappingStyle_
                    ? o
                    : r
                  : function (e) {
                      return e;
                    }),
                (e = t ? e + "-" + r(t) : r(e)),
                goog.global.CLOSURE_CSS_NAME_MAP_FN
                  ? goog.global.CLOSURE_CSS_NAME_MAP_FN(e)
                  : e
              );
            }),
            (goog.setCssNameMapping = function (e, t) {
              (goog.cssNameMapping_ = e), (goog.cssNameMappingStyle_ = t);
            }),
            !COMPILED &&
              goog.global.CLOSURE_CSS_NAME_MAPPING &&
              (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING),
            (goog.getMsg = function (e, t, o) {
              return (
                o && o.html && (e = e.replace(/</g, "&lt;")),
                t &&
                  (e = e.replace(/\{\$([^}]+)}/g, function (e, o) {
                    return null != t && o in t ? t[o] : e;
                  })),
                e
              );
            }),
            (goog.getMsgWithFallback = function (e, t) {
              return e;
            }),
            (goog.exportSymbol = function (e, t, o) {
              goog.exportPath_(e, t, o);
            }),
            (goog.exportProperty = function (e, t, o) {
              e[t] = o;
            }),
            (goog.inherits = function (e, t) {
              function o() {}
              (o.prototype = t.prototype),
                (e.superClass_ = t.prototype),
                (e.prototype = new o()),
                (e.prototype.constructor = e),
                (e.base = function (e, o, r) {
                  for (
                    var s = Array(arguments.length - 2), n = 2;
                    n < arguments.length;
                    n++
                  )
                    s[n - 2] = arguments[n];
                  return t.prototype[o].apply(e, s);
                });
            }),
            (goog.scope = function (e) {
              if (goog.isInModuleLoader_())
                throw Error("goog.scope is not supported within a module.");
              e.call(goog.global);
            }),
            COMPILED || (goog.global.COMPILED = COMPILED),
            (goog.defineClass = function (e, t) {
              var o = t.constructor,
                r = t.statics;
              return (
                (o && o != Object.prototype.constructor) ||
                  (o = function () {
                    throw Error(
                      "cannot instantiate an interface (no constructor defined)."
                    );
                  }),
                (o = goog.defineClass.createSealingConstructor_(o, e)),
                e && goog.inherits(o, e),
                delete t.constructor,
                delete t.statics,
                goog.defineClass.applyProperties_(o.prototype, t),
                null != r &&
                  (r instanceof Function
                    ? r(o)
                    : goog.defineClass.applyProperties_(o, r)),
                o
              );
            }),
            (goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG),
            (goog.defineClass.createSealingConstructor_ = function (e, t) {
              if (!goog.defineClass.SEAL_CLASS_INSTANCES) return e;
              var o = !goog.defineClass.isUnsealable_(t),
                r = function () {
                  var t = e.apply(this, arguments) || this;
                  return (
                    (t[goog.UID_PROPERTY_] = t[goog.UID_PROPERTY_]),
                    this.constructor === r &&
                      o &&
                      Object.seal instanceof Function &&
                      Object.seal(t),
                    t
                  );
                };
              return r;
            }),
            (goog.defineClass.isUnsealable_ = function (e) {
              return (
                e &&
                e.prototype &&
                e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]
              );
            }),
            (goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ =
              "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
                " "
              )),
            (goog.defineClass.applyProperties_ = function (e, t) {
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              for (
                var r = 0;
                r < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;
                r++
              )
                (o = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[r]),
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }),
            (goog.tagUnsealableClass = function (e) {
              !COMPILED &&
                goog.defineClass.SEAL_CLASS_INSTANCES &&
                (e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0);
            }),
            (goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ =
              "goog_defineClass_legacy_unsealable"),
            !COMPILED &&
              goog.DEPENDENCIES_ENABLED &&
              ((goog.inHtmlDocument_ = function () {
                var e = goog.global.document;
                return null != e && "write" in e;
              }),
              (goog.isDocumentLoading_ = function () {
                var e = goog.global.document;
                return e.attachEvent
                  ? "complete" != e.readyState
                  : "loading" == e.readyState;
              }),
              (goog.findBasePath_ = function () {
                if (
                  null != goog.global.CLOSURE_BASE_PATH &&
                  "string" == typeof goog.global.CLOSURE_BASE_PATH
                )
                  goog.basePath = goog.global.CLOSURE_BASE_PATH;
                else if (goog.inHtmlDocument_()) {
                  var e = goog.global.document,
                    t = e.currentScript;
                  for (
                    t =
                      (e = t ? [t] : e.getElementsByTagName("SCRIPT")).length -
                      1;
                    0 <= t;
                    --t
                  ) {
                    var o = e[t].src,
                      r = o.lastIndexOf("?");
                    if (
                      ((r = -1 == r ? o.length : r),
                      "base.js" == o.substr(r - 7, 7))
                    ) {
                      goog.basePath = o.substr(0, r - 7);
                      break;
                    }
                  }
                }
              }),
              goog.findBasePath_(),
              (goog.Transpiler = function () {
                (this.requiresTranspilation_ = null),
                  (this.transpilationTarget_ = goog.TRANSPILE_TO_LANGUAGE);
              }),
              (goog.Transpiler.prototype.createRequiresTranspilation_ =
                function () {
                  function a(t, o) {
                    e
                      ? (d[t] = !0)
                      : o()
                      ? ((c = t), (d[t] = !1))
                      : (e = d[t] = !0);
                  }
                  function b(a) {
                    try {
                      return !!eval(a);
                    } catch (e) {
                      return !1;
                    }
                  }
                  var c = "es3",
                    d = { es3: !1 },
                    e = !1,
                    f =
                      goog.global.navigator && goog.global.navigator.userAgent
                        ? goog.global.navigator.userAgent
                        : "";
                  return (
                    a("es5", function () {
                      return b("[1,].length==1");
                    }),
                    a("es6", function () {
                      return (
                        !f.match(/Edge\/(\d+)(\.\d)*/i) &&
                        b(
                          '(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()'
                        )
                      );
                    }),
                    a("es7", function () {
                      return b("2 ** 2 == 4");
                    }),
                    a("es8", function () {
                      return b("async () => 1, true");
                    }),
                    a("es9", function () {
                      return b("({...rest} = {}), true");
                    }),
                    a("es_next", function () {
                      return !1;
                    }),
                    { target: c, map: d }
                  );
                }),
              (goog.Transpiler.prototype.needsTranspile = function (e, t) {
                if ("always" == goog.TRANSPILE) return !0;
                if ("never" == goog.TRANSPILE) return !1;
                if (!this.requiresTranspilation_) {
                  var o = this.createRequiresTranspilation_();
                  (this.requiresTranspilation_ = o.map),
                    (this.transpilationTarget_ =
                      this.transpilationTarget_ || o.target);
                }
                if (e in this.requiresTranspilation_)
                  return (
                    !!this.requiresTranspilation_[e] ||
                    !(
                      !goog.inHtmlDocument_() ||
                      "es6" != t ||
                      "noModule" in goog.global.document.createElement("script")
                    )
                  );
                throw Error("Unknown language mode: " + e);
              }),
              (goog.Transpiler.prototype.transpile = function (e, t) {
                return goog.transpile_(e, t, this.transpilationTarget_);
              }),
              (goog.transpiler_ = new goog.Transpiler()),
              (goog.protectScriptTag_ = function (e) {
                return e.replace(/<\/(SCRIPT)/gi, "\\x3c/$1");
              }),
              (goog.DebugLoader_ = function () {
                (this.dependencies_ = {}),
                  (this.idToPath_ = {}),
                  (this.written_ = {}),
                  (this.loadingDeps_ = []),
                  (this.depsToLoad_ = []),
                  (this.paused_ = !1),
                  (this.factory_ = new goog.DependencyFactory(
                    goog.transpiler_
                  )),
                  (this.deferredCallbacks_ = {}),
                  (this.deferredQueue_ = []);
              }),
              (goog.DebugLoader_.prototype.bootstrap = function (e, t) {
                function o() {
                  r && (goog.global.setTimeout(r, 0), (r = null));
                }
                var r = t;
                if (e.length) {
                  t = [];
                  for (var s = 0; s < e.length; s++) {
                    var n = this.getPathFromDeps_(e[s]);
                    if (!n) throw Error("Unregonized namespace: " + e[s]);
                    t.push(this.dependencies_[n]);
                  }
                  n = goog.require;
                  var i = 0;
                  for (s = 0; s < e.length; s++)
                    n(e[s]),
                      t[s].onLoad(function () {
                        ++i == e.length && o();
                      });
                } else o();
              }),
              (goog.DebugLoader_.prototype.loadClosureDeps = function () {
                this.depsToLoad_.push(
                  this.factory_.createDependency(
                    goog.normalizePath_(goog.basePath + "deps.js"),
                    "deps.js",
                    [],
                    [],
                    {},
                    !1
                  )
                ),
                  this.loadDeps_();
              }),
              (goog.DebugLoader_.prototype.requested = function (e, t) {
                (e = this.getPathFromDeps_(e)) &&
                  (t || this.areDepsLoaded_(this.dependencies_[e].requires)) &&
                  (t = this.deferredCallbacks_[e]) &&
                  (delete this.deferredCallbacks_[e], t());
              }),
              (goog.DebugLoader_.prototype.setDependencyFactory = function (e) {
                this.factory_ = e;
              }),
              (goog.DebugLoader_.prototype.load_ = function (e) {
                if (!this.getPathFromDeps_(e))
                  throw (
                    ((e = "goog.require could not find: " + e),
                    goog.logToConsole_(e),
                    Error(e))
                  );
                var t = this,
                  o = [],
                  r = function (e) {
                    var s = t.getPathFromDeps_(e);
                    if (!s) throw Error("Bad dependency path or symbol: " + e);
                    if (!t.written_[s]) {
                      for (
                        t.written_[s] = !0, e = t.dependencies_[s], s = 0;
                        s < e.requires.length;
                        s++
                      )
                        goog.isProvided_(e.requires[s]) || r(e.requires[s]);
                      o.push(e);
                    }
                  };
                r(e),
                  (e = !!this.depsToLoad_.length),
                  (this.depsToLoad_ = this.depsToLoad_.concat(o)),
                  this.paused_ || e || this.loadDeps_();
              }),
              (goog.DebugLoader_.prototype.loadDeps_ = function () {
                for (
                  var e = this, t = this.paused_;
                  this.depsToLoad_.length && !t;

                )
                  !(function () {
                    var o = !1,
                      r = e.depsToLoad_.shift(),
                      s = !1;
                    e.loading_(r);
                    var n = {
                      pause: function () {
                        if (o)
                          throw Error(
                            "Cannot call pause after the call to load."
                          );
                        t = !0;
                      },
                      resume: function () {
                        o ? e.resume_() : (t = !1);
                      },
                      loaded: function () {
                        if (s) throw Error("Double call to loaded.");
                        (s = !0), e.loaded_(r);
                      },
                      pending: function () {
                        for (var t = [], o = 0; o < e.loadingDeps_.length; o++)
                          t.push(e.loadingDeps_[o]);
                        return t;
                      },
                      setModuleState: function (e) {
                        goog.moduleLoaderState_ = {
                          type: e,
                          moduleName: "",
                          declareLegacyNamespace: !1,
                        };
                      },
                      registerEs6ModuleExports: function (e, t, o) {
                        o &&
                          (goog.loadedModules_[o] = {
                            exports: t,
                            type: goog.ModuleType.ES6,
                            moduleId: o || "",
                          });
                      },
                      registerGoogModuleExports: function (e, t) {
                        goog.loadedModules_[e] = {
                          exports: t,
                          type: goog.ModuleType.GOOG,
                          moduleId: e,
                        };
                      },
                      clearModuleState: function () {
                        goog.moduleLoaderState_ = null;
                      },
                      defer: function (t) {
                        if (o)
                          throw Error(
                            "Cannot register with defer after the call to load."
                          );
                        e.defer_(r, t);
                      },
                      areDepsLoaded: function () {
                        return e.areDepsLoaded_(r.requires);
                      },
                    };
                    try {
                      r.load(n);
                    } finally {
                      o = !0;
                    }
                  })();
                t && this.pause_();
              }),
              (goog.DebugLoader_.prototype.pause_ = function () {
                this.paused_ = !0;
              }),
              (goog.DebugLoader_.prototype.resume_ = function () {
                this.paused_ && ((this.paused_ = !1), this.loadDeps_());
              }),
              (goog.DebugLoader_.prototype.loading_ = function (e) {
                this.loadingDeps_.push(e);
              }),
              (goog.DebugLoader_.prototype.loaded_ = function (e) {
                for (var t = 0; t < this.loadingDeps_.length; t++)
                  if (this.loadingDeps_[t] == e) {
                    this.loadingDeps_.splice(t, 1);
                    break;
                  }
                for (t = 0; t < this.deferredQueue_.length; t++)
                  if (this.deferredQueue_[t] == e.path) {
                    this.deferredQueue_.splice(t, 1);
                    break;
                  }
                if (
                  this.loadingDeps_.length == this.deferredQueue_.length &&
                  !this.depsToLoad_.length
                )
                  for (; this.deferredQueue_.length; )
                    this.requested(this.deferredQueue_.shift(), !0);
                e.loaded();
              }),
              (goog.DebugLoader_.prototype.areDepsLoaded_ = function (e) {
                for (var t = 0; t < e.length; t++) {
                  var o = this.getPathFromDeps_(e[t]);
                  if (
                    !o ||
                    (!(o in this.deferredCallbacks_) && !goog.isProvided_(e[t]))
                  )
                    return !1;
                }
                return !0;
              }),
              (goog.DebugLoader_.prototype.getPathFromDeps_ = function (e) {
                return e in this.idToPath_
                  ? this.idToPath_[e]
                  : e in this.dependencies_
                  ? e
                  : null;
              }),
              (goog.DebugLoader_.prototype.defer_ = function (e, t) {
                (this.deferredCallbacks_[e.path] = t),
                  this.deferredQueue_.push(e.path);
              }),
              (goog.LoadController = function () {}),
              (goog.LoadController.prototype.pause = function () {}),
              (goog.LoadController.prototype.resume = function () {}),
              (goog.LoadController.prototype.loaded = function () {}),
              (goog.LoadController.prototype.pending = function () {}),
              (goog.LoadController.prototype.registerEs6ModuleExports =
                function (e, t, o) {}),
              (goog.LoadController.prototype.setModuleState = function (e) {}),
              (goog.LoadController.prototype.clearModuleState = function () {}),
              (goog.LoadController.prototype.defer = function (e) {}),
              (goog.LoadController.prototype.areDepsLoaded = function () {}),
              (goog.Dependency = function (e, t, o, r, s) {
                (this.path = e),
                  (this.relativePath = t),
                  (this.provides = o),
                  (this.requires = r),
                  (this.loadFlags = s),
                  (this.loaded_ = !1),
                  (this.loadCallbacks_ = []);
              }),
              (goog.Dependency.prototype.getPathName = function () {
                var e = this.path,
                  t = e.indexOf("://");
                return (
                  0 <= t &&
                    0 <= (t = (e = e.substring(t + 3)).indexOf("/")) &&
                    (e = e.substring(t + 1)),
                  e
                );
              }),
              (goog.Dependency.prototype.onLoad = function (e) {
                this.loaded_ ? e() : this.loadCallbacks_.push(e);
              }),
              (goog.Dependency.prototype.loaded = function () {
                this.loaded_ = !0;
                var e = this.loadCallbacks_;
                this.loadCallbacks_ = [];
                for (var t = 0; t < e.length; t++) e[t]();
              }),
              (goog.Dependency.defer_ = !1),
              (goog.Dependency.callbackMap_ = {}),
              (goog.Dependency.registerCallback_ = function (e) {
                var t = Math.random().toString(32);
                return (goog.Dependency.callbackMap_[t] = e), t;
              }),
              (goog.Dependency.unregisterCallback_ = function (e) {
                delete goog.Dependency.callbackMap_[e];
              }),
              (goog.Dependency.callback_ = function (e, t) {
                if (!(e in goog.Dependency.callbackMap_))
                  throw Error(
                    "Callback key " +
                      e +
                      " does not exist (was base.js loaded more than once?)."
                  );
                for (
                  var o = goog.Dependency.callbackMap_[e], r = [], s = 1;
                  s < arguments.length;
                  s++
                )
                  r.push(arguments[s]);
                o.apply(void 0, r);
              }),
              (goog.Dependency.prototype.load = function (e) {
                if (goog.global.CLOSURE_IMPORT_SCRIPT)
                  goog.global.CLOSURE_IMPORT_SCRIPT(this.path)
                    ? e.loaded()
                    : e.pause();
                else if (goog.inHtmlDocument_()) {
                  var t = goog.global.document;
                  if (
                    "complete" == t.readyState &&
                    !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING
                  ) {
                    if (/\bdeps.js$/.test(this.path)) return void e.loaded();
                    throw Error(
                      'Cannot write "' + this.path + '" after document load'
                    );
                  }
                  if (
                    !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING &&
                    goog.isDocumentLoading_()
                  ) {
                    var o = goog.Dependency.registerCallback_(function (t) {
                        (goog.DebugLoader_.IS_OLD_IE_ &&
                          "complete" != t.readyState) ||
                          (goog.Dependency.unregisterCallback_(o), e.loaded());
                      }),
                      r =
                        !goog.DebugLoader_.IS_OLD_IE_ && goog.getScriptNonce()
                          ? ' nonce="' + goog.getScriptNonce() + '"'
                          : "";
                    (r =
                      '<script src="' +
                      this.path +
                      '" ' +
                      (goog.DebugLoader_.IS_OLD_IE_
                        ? "onreadystatechange"
                        : "onload") +
                      "=\"goog.Dependency.callback_('" +
                      o +
                      '\', this)" type="text/javascript" ' +
                      (goog.Dependency.defer_ ? "defer" : "") +
                      r +
                      "></script>"),
                      t.write(
                        goog.TRUSTED_TYPES_POLICY_
                          ? goog.TRUSTED_TYPES_POLICY_.createHTML(r)
                          : r
                      );
                  } else {
                    var s = t.createElement("script");
                    (s.defer = goog.Dependency.defer_),
                      (s.async = !1),
                      (s.type = "text/javascript"),
                      (r = goog.getScriptNonce()) && s.setAttribute("nonce", r),
                      goog.DebugLoader_.IS_OLD_IE_
                        ? (e.pause(),
                          (s.onreadystatechange = function () {
                            ("loaded" != s.readyState &&
                              "complete" != s.readyState) ||
                              (e.loaded(), e.resume());
                          }))
                        : (s.onload = function () {
                            (s.onload = null), e.loaded();
                          }),
                      (s.src = goog.TRUSTED_TYPES_POLICY_
                        ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path)
                        : this.path),
                      t.head.appendChild(s);
                  }
                } else
                  goog.logToConsole_(
                    "Cannot use default debug loader outside of HTML documents."
                  ),
                    "deps.js" == this.relativePath
                      ? (goog.logToConsole_(
                          "Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."
                        ),
                        e.loaded())
                      : e.pause();
              }),
              (goog.Es6ModuleDependency = function (e, t, o, r, s) {
                goog.Dependency.call(this, e, t, o, r, s);
              }),
              goog.inherits(goog.Es6ModuleDependency, goog.Dependency),
              (goog.Es6ModuleDependency.prototype.load = function (e) {
                if (goog.global.CLOSURE_IMPORT_SCRIPT)
                  goog.global.CLOSURE_IMPORT_SCRIPT(this.path)
                    ? e.loaded()
                    : e.pause();
                else if (goog.inHtmlDocument_()) {
                  var t = goog.global.document,
                    o = this;
                  if (goog.isDocumentLoading_()) {
                    var r = function (e, o) {
                      (e = o
                        ? '<script type="module" crossorigin>' + o + "</script>"
                        : '<script type="module" crossorigin src="' +
                          e +
                          '"></script>'),
                        t.write(
                          goog.TRUSTED_TYPES_POLICY_
                            ? goog.TRUSTED_TYPES_POLICY_.createHTML(e)
                            : e
                        );
                    };
                    goog.Dependency.defer_ = !0;
                  } else
                    r = function (e, o) {
                      var r = t.createElement("script");
                      (r.defer = !0),
                        (r.async = !1),
                        (r.type = "module"),
                        r.setAttribute("crossorigin", !0);
                      var s = goog.getScriptNonce();
                      s && r.setAttribute("nonce", s),
                        o
                          ? (r.textContent = goog.TRUSTED_TYPES_POLICY_
                              ? goog.TRUSTED_TYPES_POLICY_.createScript(o)
                              : o)
                          : (r.src = goog.TRUSTED_TYPES_POLICY_
                              ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(e)
                              : e),
                        t.head.appendChild(r);
                    };
                  var s = goog.Dependency.registerCallback_(function () {
                    goog.Dependency.unregisterCallback_(s),
                      e.setModuleState(goog.ModuleType.ES6);
                  });
                  r(void 0, 'goog.Dependency.callback_("' + s + '")'),
                    r(this.path, void 0);
                  var n = goog.Dependency.registerCallback_(function (t) {
                    goog.Dependency.unregisterCallback_(n),
                      e.registerEs6ModuleExports(
                        o.path,
                        t,
                        goog.moduleLoaderState_.moduleName
                      );
                  });
                  r(
                    void 0,
                    'import * as m from "' +
                      this.path +
                      '"; goog.Dependency.callback_("' +
                      n +
                      '", m)'
                  );
                  var i = goog.Dependency.registerCallback_(function () {
                    goog.Dependency.unregisterCallback_(i),
                      e.clearModuleState(),
                      e.loaded();
                  });
                  r(void 0, 'goog.Dependency.callback_("' + i + '")');
                } else
                  goog.logToConsole_(
                    "Cannot use default debug loader outside of HTML documents."
                  ),
                    e.pause();
              }),
              (goog.TransformedDependency = function (e, t, o, r, s) {
                goog.Dependency.call(this, e, t, o, r, s),
                  (this.contents_ = null),
                  (this.lazyFetch_ =
                    !goog.inHtmlDocument_() ||
                    !(
                      "noModule" in goog.global.document.createElement("script")
                    ));
              }),
              goog.inherits(goog.TransformedDependency, goog.Dependency),
              (goog.TransformedDependency.prototype.load = function (e) {
                function t() {
                  (r.contents_ = goog.loadFileSync_(r.path)),
                    r.contents_ &&
                      ((r.contents_ = r.transform(r.contents_)),
                      r.contents_ &&
                        (r.contents_ += "\n//# sourceURL=" + r.path));
                }
                function o() {
                  if ((r.lazyFetch_ && t(), r.contents_)) {
                    s && e.setModuleState(goog.ModuleType.ES6);
                    try {
                      var o = r.contents_;
                      if (((r.contents_ = null), goog.globalEval(o), s))
                        var n = goog.moduleLoaderState_.moduleName;
                    } finally {
                      s && e.clearModuleState();
                    }
                    s &&
                      goog.global.$jscomp.require.ensure(
                        [r.getPathName()],
                        function () {
                          e.registerEs6ModuleExports(
                            r.path,
                            goog.global.$jscomp.require(r.getPathName()),
                            n
                          );
                        }
                      ),
                      e.loaded();
                  }
                }
                var r = this;
                if (goog.global.CLOSURE_IMPORT_SCRIPT)
                  t(),
                    this.contents_ &&
                    goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_)
                      ? ((this.contents_ = null), e.loaded())
                      : e.pause();
                else {
                  var s = this.loadFlags.module == goog.ModuleType.ES6;
                  this.lazyFetch_ || t();
                  var n = 1 < e.pending().length,
                    i = n && goog.DebugLoader_.IS_OLD_IE_;
                  if (
                    ((n =
                      goog.Dependency.defer_ &&
                      (n || goog.isDocumentLoading_())),
                    i || n)
                  )
                    e.defer(function () {
                      o();
                    });
                  else {
                    var a = goog.global.document;
                    if (
                      ((i =
                        goog.inHtmlDocument_() &&
                        "ActiveXObject" in goog.global),
                      s &&
                        goog.inHtmlDocument_() &&
                        goog.isDocumentLoading_() &&
                        !i)
                    ) {
                      (goog.Dependency.defer_ = !0), e.pause();
                      var g = a.onreadystatechange;
                      a.onreadystatechange = function () {
                        "interactive" == a.readyState &&
                          ((a.onreadystatechange = g), o(), e.resume()),
                          goog.isFunction(g) && g.apply(void 0, arguments);
                      };
                    } else
                      !goog.DebugLoader_.IS_OLD_IE_ &&
                      goog.inHtmlDocument_() &&
                      goog.isDocumentLoading_()
                        ? (function () {
                            var e = goog.global.document,
                              t = goog.Dependency.registerCallback_(
                                function () {
                                  goog.Dependency.unregisterCallback_(t), o();
                                }
                              ),
                              r =
                                '<script type="text/javascript">' +
                                goog.protectScriptTag_(
                                  'goog.Dependency.callback_("' + t + '");'
                                ) +
                                "</script>";
                            e.write(
                              goog.TRUSTED_TYPES_POLICY_
                                ? goog.TRUSTED_TYPES_POLICY_.createHTML(r)
                                : r
                            );
                          })()
                        : o();
                  }
                }
              }),
              (goog.TransformedDependency.prototype.transform = function (
                e
              ) {}),
              (goog.TranspiledDependency = function (e, t, o, r, s, n) {
                goog.TransformedDependency.call(this, e, t, o, r, s),
                  (this.transpiler = n);
              }),
              goog.inherits(
                goog.TranspiledDependency,
                goog.TransformedDependency
              ),
              (goog.TranspiledDependency.prototype.transform = function (e) {
                return this.transpiler.transpile(e, this.getPathName());
              }),
              (goog.PreTranspiledEs6ModuleDependency = function (
                e,
                t,
                o,
                r,
                s
              ) {
                goog.TransformedDependency.call(this, e, t, o, r, s);
              }),
              goog.inherits(
                goog.PreTranspiledEs6ModuleDependency,
                goog.TransformedDependency
              ),
              (goog.PreTranspiledEs6ModuleDependency.prototype.transform =
                function (e) {
                  return e;
                }),
              (goog.GoogModuleDependency = function (e, t, o, r, s, n, i) {
                goog.TransformedDependency.call(this, e, t, o, r, s),
                  (this.needsTranspile_ = n),
                  (this.transpiler_ = i);
              }),
              goog.inherits(
                goog.GoogModuleDependency,
                goog.TransformedDependency
              ),
              (goog.GoogModuleDependency.prototype.transform = function (e) {
                return (
                  this.needsTranspile_ &&
                    (e = this.transpiler_.transpile(e, this.getPathName())),
                  goog.LOAD_MODULE_USING_EVAL && void 0 !== goog.global.JSON
                    ? "goog.loadModule(" +
                      goog.global.JSON.stringify(
                        e + "\n//# sourceURL=" + this.path + "\n"
                      ) +
                      ");"
                    : 'goog.loadModule(function(exports) {"use strict";' +
                      e +
                      "\n;return exports});\n//# sourceURL=" +
                      this.path +
                      "\n"
                );
              }),
              (goog.DebugLoader_.IS_OLD_IE_ = !(
                goog.global.atob ||
                !goog.global.document ||
                !goog.global.document.all
              )),
              (goog.DebugLoader_.prototype.addDependency = function (
                e,
                t,
                o,
                r
              ) {
                (t = t || []), (e = e.replace(/\\/g, "/"));
                var s = goog.normalizePath_(goog.basePath + e);
                for (
                  (r && "boolean" != typeof r) ||
                    (r = r ? { module: goog.ModuleType.GOOG } : {}),
                    o = this.factory_.createDependency(
                      s,
                      e,
                      t,
                      o,
                      r,
                      goog.transpiler_.needsTranspile(r.lang || "es3", r.module)
                    ),
                    this.dependencies_[s] = o,
                    o = 0;
                  o < t.length;
                  o++
                )
                  this.idToPath_[t[o]] = s;
                this.idToPath_[e] = s;
              }),
              (goog.DependencyFactory = function (e) {
                this.transpiler = e;
              }),
              (goog.DependencyFactory.prototype.createDependency = function (
                e,
                t,
                o,
                r,
                s,
                n
              ) {
                return s.module == goog.ModuleType.GOOG
                  ? new goog.GoogModuleDependency(
                      e,
                      t,
                      o,
                      r,
                      s,
                      n,
                      this.transpiler
                    )
                  : n
                  ? new goog.TranspiledDependency(
                      e,
                      t,
                      o,
                      r,
                      s,
                      this.transpiler
                    )
                  : s.module == goog.ModuleType.ES6
                  ? "never" == goog.TRANSPILE &&
                    goog.ASSUME_ES_MODULES_TRANSPILED
                    ? new goog.PreTranspiledEs6ModuleDependency(e, t, o, r, s)
                    : new goog.Es6ModuleDependency(e, t, o, r, s)
                  : new goog.Dependency(e, t, o, r, s);
              }),
              (goog.debugLoader_ = new goog.DebugLoader_()),
              (goog.loadClosureDeps = function () {
                goog.debugLoader_.loadClosureDeps();
              }),
              (goog.setDependencyFactory = function (e) {
                goog.debugLoader_.setDependencyFactory(e);
              }),
              goog.global.CLOSURE_NO_DEPS ||
                goog.debugLoader_.loadClosureDeps(),
              (goog.bootstrap = function (e, t) {
                goog.debugLoader_.bootstrap(e, t);
              })),
            (goog.TRUSTED_TYPES_POLICY_NAME = ""),
            (goog.identity_ = function (e) {
              return e;
            }),
            (goog.createTrustedTypesPolicy = function (e) {
              var t = null,
                o = goog.global.trustedTypes || goog.global.TrustedTypes;
              if (!o || !o.createPolicy) return t;
              try {
                t = o.createPolicy(e, {
                  createHTML: goog.identity_,
                  createScript: goog.identity_,
                  createScriptURL: goog.identity_,
                  createURL: goog.identity_,
                });
              } catch (e) {
                goog.logToConsole_(e.message);
              }
              return t;
            }),
            (goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME
              ? goog.createTrustedTypesPolicy(
                  goog.TRUSTED_TYPES_POLICY_NAME + "#base"
                )
              : null),
            (goog.object = {}),
            (goog.object.is = function (e, t) {
              return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
            }),
            (goog.object.forEach = function (e, t, o) {
              for (var r in e) t.call(o, e[r], r, e);
            }),
            (goog.object.filter = function (e, t, o) {
              var r,
                s = {};
              for (r in e) t.call(o, e[r], r, e) && (s[r] = e[r]);
              return s;
            }),
            (goog.object.map = function (e, t, o) {
              var r,
                s = {};
              for (r in e) s[r] = t.call(o, e[r], r, e);
              return s;
            }),
            (goog.object.some = function (e, t, o) {
              for (var r in e) if (t.call(o, e[r], r, e)) return !0;
              return !1;
            }),
            (goog.object.every = function (e, t, o) {
              for (var r in e) if (!t.call(o, e[r], r, e)) return !1;
              return !0;
            }),
            (goog.object.getCount = function (e) {
              var t,
                o = 0;
              for (t in e) o++;
              return o;
            }),
            (goog.object.getAnyKey = function (e) {
              for (var t in e) return t;
            }),
            (goog.object.getAnyValue = function (e) {
              for (var t in e) return e[t];
            }),
            (goog.object.contains = function (e, t) {
              return goog.object.containsValue(e, t);
            }),
            (goog.object.getValues = function (e) {
              var t,
                o = [],
                r = 0;
              for (t in e) o[r++] = e[t];
              return o;
            }),
            (goog.object.getKeys = function (e) {
              var t,
                o = [],
                r = 0;
              for (t in e) o[r++] = t;
              return o;
            }),
            (goog.object.getValueByKeys = function (e, t) {
              var o = goog.isArrayLike(t),
                r = o ? t : arguments;
              for (o = o ? 0 : 1; o < r.length; o++) {
                if (null == e) return;
                e = e[r[o]];
              }
              return e;
            }),
            (goog.object.containsKey = function (e, t) {
              return null !== e && t in e;
            }),
            (goog.object.containsValue = function (e, t) {
              for (var o in e) if (e[o] == t) return !0;
              return !1;
            }),
            (goog.object.findKey = function (e, t, o) {
              for (var r in e) if (t.call(o, e[r], r, e)) return r;
            }),
            (goog.object.findValue = function (e, t, o) {
              return (t = goog.object.findKey(e, t, o)) && e[t];
            }),
            (goog.object.isEmpty = function (e) {
              for (var t in e) return !1;
              return !0;
            }),
            (goog.object.clear = function (e) {
              for (var t in e) delete e[t];
            }),
            (goog.object.remove = function (e, t) {
              var o;
              return (o = t in e) && delete e[t], o;
            }),
            (goog.object.add = function (e, t, o) {
              if (null !== e && t in e)
                throw Error('The object already contains the key "' + t + '"');
              goog.object.set(e, t, o);
            }),
            (goog.object.get = function (e, t, o) {
              return null !== e && t in e ? e[t] : o;
            }),
            (goog.object.set = function (e, t, o) {
              e[t] = o;
            }),
            (goog.object.setIfUndefined = function (e, t, o) {
              return t in e ? e[t] : (e[t] = o);
            }),
            (goog.object.setWithReturnValueIfNotSet = function (e, t, o) {
              return t in e ? e[t] : ((o = o()), (e[t] = o));
            }),
            (goog.object.equals = function (e, t) {
              for (var o in e) if (!(o in t) || e[o] !== t[o]) return !1;
              for (var r in t) if (!(r in e)) return !1;
              return !0;
            }),
            (goog.object.clone = function (e) {
              var t,
                o = {};
              for (t in e) o[t] = e[t];
              return o;
            }),
            (goog.object.unsafeClone = function (e) {
              var t = goog.typeOf(e);
              if ("object" == t || "array" == t) {
                if (goog.isFunction(e.clone)) return e.clone();
                for (var o in ((t = "array" == t ? [] : {}), e))
                  t[o] = goog.object.unsafeClone(e[o]);
                return t;
              }
              return e;
            }),
            (goog.object.transpose = function (e) {
              var t,
                o = {};
              for (t in e) o[e[t]] = t;
              return o;
            }),
            (goog.object.PROTOTYPE_FIELDS_ =
              "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
                " "
              )),
            (goog.object.extend = function (e, t) {
              for (var o, r, s = 1; s < arguments.length; s++) {
                for (o in (r = arguments[s])) e[o] = r[o];
                for (var n = 0; n < goog.object.PROTOTYPE_FIELDS_.length; n++)
                  (o = goog.object.PROTOTYPE_FIELDS_[n]),
                    Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
              }
            }),
            (goog.object.create = function (e) {
              var t = arguments.length;
              if (1 == t && Array.isArray(arguments[0]))
                return goog.object.create.apply(null, arguments[0]);
              if (t % 2) throw Error("Uneven number of arguments");
              for (var o = {}, r = 0; r < t; r += 2)
                o[arguments[r]] = arguments[r + 1];
              return o;
            }),
            (goog.object.createSet = function (e) {
              var t = arguments.length;
              if (1 == t && Array.isArray(arguments[0]))
                return goog.object.createSet.apply(null, arguments[0]);
              for (var o = {}, r = 0; r < t; r++) o[arguments[r]] = !0;
              return o;
            }),
            (goog.object.createImmutableView = function (e) {
              var t = e;
              return (
                Object.isFrozen &&
                  !Object.isFrozen(e) &&
                  ((t = Object.create(e)), Object.freeze(t)),
                t
              );
            }),
            (goog.object.isImmutableView = function (e) {
              return !!Object.isFrozen && Object.isFrozen(e);
            }),
            (goog.object.getAllPropertyNames = function (e, t, o) {
              if (!e) return [];
              if (!Object.getOwnPropertyNames || !Object.getPrototypeOf)
                return goog.object.getKeys(e);
              for (
                var r = {};
                e &&
                (e !== Object.prototype || t) &&
                (e !== Function.prototype || o);

              ) {
                for (
                  var s = Object.getOwnPropertyNames(e), n = 0;
                  n < s.length;
                  n++
                )
                  r[s[n]] = !0;
                e = Object.getPrototypeOf(e);
              }
              return goog.object.getKeys(r);
            }),
            (goog.object.getSuperClass = function (e) {
              return (e = Object.getPrototypeOf(e.prototype)) && e.constructor;
            });
          var jspb = { asserts: {} };
          (jspb.asserts.doAssertFailure = function (e, t, o, r) {
            var s = "Assertion failed";
            if (o) {
              s += ": " + o;
              var n = r;
            } else e && ((s += ": " + e), (n = t));
            throw Error("" + s, n || []);
          }),
            (jspb.asserts.assert = function (e, t, o) {
              for (var r = [], s = 2; s < arguments.length; ++s)
                r[s - 2] = arguments[s];
              return e || jspb.asserts.doAssertFailure("", null, t, r), e;
            }),
            (jspb.asserts.assertString = function (e, t, o) {
              for (var r = [], s = 2; s < arguments.length; ++s)
                r[s - 2] = arguments[s];
              return (
                "string" != typeof e &&
                  jspb.asserts.doAssertFailure(
                    "Expected string but got %s: %s.",
                    [goog.typeOf(e), e],
                    t,
                    r
                  ),
                e
              );
            }),
            (jspb.asserts.assertArray = function (e, t, o) {
              for (var r = [], s = 2; s < arguments.length; ++s)
                r[s - 2] = arguments[s];
              return (
                Array.isArray(e) ||
                  jspb.asserts.doAssertFailure(
                    "Expected array but got %s: %s.",
                    [goog.typeOf(e), e],
                    t,
                    r
                  ),
                e
              );
            }),
            (jspb.asserts.fail = function (e, t) {
              for (var o = [], r = 1; r < arguments.length; ++r)
                o[r - 1] = arguments[r];
              throw Error("Failure" + (e ? ": " + e : ""), o);
            }),
            (jspb.asserts.assertInstanceof = function (e, t, o, r) {
              for (var s = [], n = 3; n < arguments.length; ++n)
                s[n - 3] = arguments[n];
              return (
                e instanceof t ||
                  jspb.asserts.doAssertFailure(
                    "Expected instanceof %s but got %s.",
                    [jspb.asserts.getType(t), jspb.asserts.getType(e)],
                    o,
                    s
                  ),
                e
              );
            }),
            (jspb.asserts.getType = function (e) {
              return e instanceof Function
                ? e.displayName || e.name || "unknown type name"
                : e instanceof Object
                ? e.constructor.displayName ||
                  e.constructor.name ||
                  Object.prototype.toString.call(e)
                : null === e
                ? "null"
                : typeof e;
            }),
            (jspb.BinaryConstants = {}),
            (jspb.ConstBinaryMessage = function () {}),
            (jspb.BinaryMessage = function () {}),
            (jspb.BinaryConstants.FieldType = {
              INVALID: -1,
              DOUBLE: 1,
              FLOAT: 2,
              INT64: 3,
              UINT64: 4,
              INT32: 5,
              FIXED64: 6,
              FIXED32: 7,
              BOOL: 8,
              STRING: 9,
              GROUP: 10,
              MESSAGE: 11,
              BYTES: 12,
              UINT32: 13,
              ENUM: 14,
              SFIXED32: 15,
              SFIXED64: 16,
              SINT32: 17,
              SINT64: 18,
              FHASH64: 30,
              VHASH64: 31,
            }),
            (jspb.BinaryConstants.WireType = {
              INVALID: -1,
              VARINT: 0,
              FIXED64: 1,
              DELIMITED: 2,
              START_GROUP: 3,
              END_GROUP: 4,
              FIXED32: 5,
            }),
            (jspb.BinaryConstants.FieldTypeToWireType = function (e) {
              var t = jspb.BinaryConstants.FieldType,
                o = jspb.BinaryConstants.WireType;
              switch (e) {
                case t.INT32:
                case t.INT64:
                case t.UINT32:
                case t.UINT64:
                case t.SINT32:
                case t.SINT64:
                case t.BOOL:
                case t.ENUM:
                case t.VHASH64:
                  return o.VARINT;
                case t.DOUBLE:
                case t.FIXED64:
                case t.SFIXED64:
                case t.FHASH64:
                  return o.FIXED64;
                case t.STRING:
                case t.MESSAGE:
                case t.BYTES:
                  return o.DELIMITED;
                case t.FLOAT:
                case t.FIXED32:
                case t.SFIXED32:
                  return o.FIXED32;
                default:
                  return o.INVALID;
              }
            }),
            (jspb.BinaryConstants.INVALID_FIELD_NUMBER = -1),
            (jspb.BinaryConstants.FLOAT32_EPS = 1401298464324817e-60),
            (jspb.BinaryConstants.FLOAT32_MIN = 11754943508222875e-54),
            (jspb.BinaryConstants.FLOAT32_MAX = 34028234663852886e22),
            (jspb.BinaryConstants.FLOAT64_EPS = 5e-324),
            (jspb.BinaryConstants.FLOAT64_MIN = 22250738585072014e-324),
            (jspb.BinaryConstants.FLOAT64_MAX = 17976931348623157e292),
            (jspb.BinaryConstants.TWO_TO_20 = 1048576),
            (jspb.BinaryConstants.TWO_TO_23 = 8388608),
            (jspb.BinaryConstants.TWO_TO_31 = 2147483648),
            (jspb.BinaryConstants.TWO_TO_32 = 4294967296),
            (jspb.BinaryConstants.TWO_TO_52 = 4503599627370496),
            (jspb.BinaryConstants.TWO_TO_63 = 0x8000000000000000),
            (jspb.BinaryConstants.TWO_TO_64 = 0x10000000000000000),
            (jspb.BinaryConstants.ZERO_HASH = "\0\0\0\0\0\0\0\0"),
            (goog.debug = {}),
            (goog.debug.Error = function (e) {
              if (Error.captureStackTrace)
                Error.captureStackTrace(this, goog.debug.Error);
              else {
                var t = Error().stack;
                t && (this.stack = t);
              }
              e && (this.message = String(e)), (this.reportErrorToServer = !0);
            }),
            goog.inherits(goog.debug.Error, Error),
            (goog.debug.Error.prototype.name = "CustomError"),
            (goog.dom = {}),
            (goog.dom.NodeType = {
              ELEMENT: 1,
              ATTRIBUTE: 2,
              TEXT: 3,
              CDATA_SECTION: 4,
              ENTITY_REFERENCE: 5,
              ENTITY: 6,
              PROCESSING_INSTRUCTION: 7,
              COMMENT: 8,
              DOCUMENT: 9,
              DOCUMENT_TYPE: 10,
              DOCUMENT_FRAGMENT: 11,
              NOTATION: 12,
            }),
            (goog.asserts = {}),
            (goog.asserts.ENABLE_ASSERTS = goog.DEBUG),
            (goog.asserts.AssertionError = function (e, t) {
              goog.debug.Error.call(this, goog.asserts.subs_(e, t)),
                (this.messagePattern = e);
            }),
            goog.inherits(goog.asserts.AssertionError, goog.debug.Error),
            (goog.asserts.AssertionError.prototype.name = "AssertionError"),
            (goog.asserts.DEFAULT_ERROR_HANDLER = function (e) {
              throw e;
            }),
            (goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER),
            (goog.asserts.subs_ = function (e, t) {
              for (
                var o = "", r = (e = e.split("%s")).length - 1, s = 0;
                s < r;
                s++
              )
                o += e[s] + (s < t.length ? t[s] : "%s");
              return o + e[r];
            }),
            (goog.asserts.doAssertFailure_ = function (e, t, o, r) {
              var s = "Assertion failed";
              if (o) {
                s += ": " + o;
                var n = r;
              } else e && ((s += ": " + e), (n = t));
              (e = new goog.asserts.AssertionError("" + s, n || [])),
                goog.asserts.errorHandler_(e);
            }),
            (goog.asserts.setErrorHandler = function (e) {
              goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = e);
            }),
            (goog.asserts.assert = function (e, t, o) {
              return (
                goog.asserts.ENABLE_ASSERTS &&
                  !e &&
                  goog.asserts.doAssertFailure_(
                    "",
                    null,
                    t,
                    Array.prototype.slice.call(arguments, 2)
                  ),
                e
              );
            }),
            (goog.asserts.assertExists = function (e, t, o) {
              return (
                goog.asserts.ENABLE_ASSERTS &&
                  null == e &&
                  goog.asserts.doAssertFailure_(
                    "Expected to exist: %s.",
                    [e],
                    t,
                    Array.prototype.slice.call(arguments, 2)
                  ),
                e
              );
            }),
            (goog.asserts.fail = function (e, t) {
              goog.asserts.ENABLE_ASSERTS &&
                goog.asserts.errorHandler_(
                  new goog.asserts.AssertionError(
                    "Failure" + (e ? ": " + e : ""),
                    Array.prototype.slice.call(arguments, 1)
                  )
                );
            }),
            (goog.asserts.assertNumber = function (e, t, o) {
              return (
                goog.asserts.ENABLE_ASSERTS &&
                  "number" != typeof e &&
                  goog.asserts.doAssertFailure_(
                    "Expected number but got %s: %s.",
                    [goog.typeOf(e), e],
                    t,
                    Array.prototype.slice.call(arguments, 2)
                  ),
                e
              );
            }),
            (goog.asserts.assertString = function (e, t, o) {
              return (
                goog.asserts.ENABLE_ASSERTS &&
                  "string" != typeof e &&
                  goog.asserts.doAssertFailure_(
                    "Expected string but got %s: %s.",
                    [goog.typeOf(e), e],
                    t,
                    Array.prototype.slice.call(arguments, 2)
                  ),
                e
              );
            }),
            (goog.asserts.assertFunction = function (e, t, o) {
              return (
                goog.asserts.ENABLE_ASSERTS &&
                  !goog.isFunction(e) &&
                  goog.asserts.doAssertFailure_(
                    "Expected function but got %s: %s.",
                    [goog.typeOf(e), e],
                    t,
                    Array.prototype.slice.call(arguments, 2)
                  ),
                e
              );
            }),
            (goog.asserts.assertObject = function (e, t, o) {
              return (
                goog.asserts.ENABLE_ASSERTS &&
                  !goog.isObject(e) &&
                  goog.asserts.doAssertFailure_(
                    "Expected object but got %s: %s.",
                    [goog.typeOf(e), e],
                    t,
                    Array.prototype.slice.call(arguments, 2)
                  ),
                e
              );
            }),
            (goog.asserts.assertArray = function (e, t, o) {
              return (
                goog.asserts.ENABLE_ASSERTS &&
                  !Array.isArray(e) &&
                  goog.asserts.doAssertFailure_(
                    "Expected array but got %s: %s.",
                    [goog.typeOf(e), e],
                    t,
                    Array.prototype.slice.call(arguments, 2)
                  ),
                e
              );
            }),
            (goog.asserts.assertBoolean = function (e, t, o) {
              return (
                goog.asserts.ENABLE_ASSERTS &&
                  "boolean" != typeof e &&
                  goog.asserts.doAssertFailure_(
                    "Expected boolean but got %s: %s.",
                    [goog.typeOf(e), e],
                    t,
                    Array.prototype.slice.call(arguments, 2)
                  ),
                e
              );
            }),
            (goog.asserts.assertElement = function (e, t, o) {
              return (
                !goog.asserts.ENABLE_ASSERTS ||
                  (goog.isObject(e) &&
                    e.nodeType == goog.dom.NodeType.ELEMENT) ||
                  goog.asserts.doAssertFailure_(
                    "Expected Element but got %s: %s.",
                    [goog.typeOf(e), e],
                    t,
                    Array.prototype.slice.call(arguments, 2)
                  ),
                e
              );
            }),
            (goog.asserts.assertInstanceof = function (e, t, o, r) {
              return (
                !goog.asserts.ENABLE_ASSERTS ||
                  e instanceof t ||
                  goog.asserts.doAssertFailure_(
                    "Expected instanceof %s but got %s.",
                    [goog.asserts.getType_(t), goog.asserts.getType_(e)],
                    o,
                    Array.prototype.slice.call(arguments, 3)
                  ),
                e
              );
            }),
            (goog.asserts.assertFinite = function (e, t, o) {
              return (
                !goog.asserts.ENABLE_ASSERTS ||
                  ("number" == typeof e && isFinite(e)) ||
                  goog.asserts.doAssertFailure_(
                    "Expected %s to be a finite number but it is not.",
                    [e],
                    t,
                    Array.prototype.slice.call(arguments, 2)
                  ),
                e
              );
            }),
            (goog.asserts.assertObjectPrototypeIsIntact = function () {
              for (var e in Object.prototype)
                goog.asserts.fail(
                  e + " should not be enumerable in Object.prototype."
                );
            }),
            (goog.asserts.getType_ = function (e) {
              return e instanceof Function
                ? e.displayName || e.name || "unknown type name"
                : e instanceof Object
                ? e.constructor.displayName ||
                  e.constructor.name ||
                  Object.prototype.toString.call(e)
                : null === e
                ? "null"
                : typeof e;
            }),
            (goog.array = {}),
            (goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE),
            (goog.array.ASSUME_NATIVE_FUNCTIONS = 2012 < goog.FEATURESET_YEAR),
            (goog.array.peek = function (e) {
              return e[e.length - 1];
            }),
            (goog.array.last = goog.array.peek),
            (goog.array.indexOf =
              goog.NATIVE_ARRAY_PROTOTYPES &&
              (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf)
                ? function (e, t, o) {
                    return (
                      goog.asserts.assert(null != e.length),
                      Array.prototype.indexOf.call(e, t, o)
                    );
                  }
                : function (e, t, o) {
                    if (
                      ((o =
                        null == o ? 0 : 0 > o ? Math.max(0, e.length + o) : o),
                      "string" == typeof e)
                    )
                      return "string" != typeof t || 1 != t.length
                        ? -1
                        : e.indexOf(t, o);
                    for (; o < e.length; o++)
                      if (o in e && e[o] === t) return o;
                    return -1;
                  }),
            (goog.array.lastIndexOf =
              goog.NATIVE_ARRAY_PROTOTYPES &&
              (goog.array.ASSUME_NATIVE_FUNCTIONS ||
                Array.prototype.lastIndexOf)
                ? function (e, t, o) {
                    return (
                      goog.asserts.assert(null != e.length),
                      Array.prototype.lastIndexOf.call(
                        e,
                        t,
                        null == o ? e.length - 1 : o
                      )
                    );
                  }
                : function (e, t, o) {
                    if (
                      (0 > (o = null == o ? e.length - 1 : o) &&
                        (o = Math.max(0, e.length + o)),
                      "string" == typeof e)
                    )
                      return "string" != typeof t || 1 != t.length
                        ? -1
                        : e.lastIndexOf(t, o);
                    for (; 0 <= o; o--) if (o in e && e[o] === t) return o;
                    return -1;
                  }),
            (goog.array.forEach =
              goog.NATIVE_ARRAY_PROTOTYPES &&
              (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach)
                ? function (e, t, o) {
                    goog.asserts.assert(null != e.length),
                      Array.prototype.forEach.call(e, t, o);
                  }
                : function (e, t, o) {
                    for (
                      var r = e.length,
                        s = "string" == typeof e ? e.split("") : e,
                        n = 0;
                      n < r;
                      n++
                    )
                      n in s && t.call(o, s[n], n, e);
                  }),
            (goog.array.forEachRight = function (e, t, o) {
              var r = e.length,
                s = "string" == typeof e ? e.split("") : e;
              for (--r; 0 <= r; --r) r in s && t.call(o, s[r], r, e);
            }),
            (goog.array.filter =
              goog.NATIVE_ARRAY_PROTOTYPES &&
              (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter)
                ? function (e, t, o) {
                    return (
                      goog.asserts.assert(null != e.length),
                      Array.prototype.filter.call(e, t, o)
                    );
                  }
                : function (e, t, o) {
                    for (
                      var r = e.length,
                        s = [],
                        n = 0,
                        i = "string" == typeof e ? e.split("") : e,
                        a = 0;
                      a < r;
                      a++
                    )
                      if (a in i) {
                        var g = i[a];
                        t.call(o, g, a, e) && (s[n++] = g);
                      }
                    return s;
                  }),
            (goog.array.map =
              goog.NATIVE_ARRAY_PROTOTYPES &&
              (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map)
                ? function (e, t, o) {
                    return (
                      goog.asserts.assert(null != e.length),
                      Array.prototype.map.call(e, t, o)
                    );
                  }
                : function (e, t, o) {
                    for (
                      var r = e.length,
                        s = Array(r),
                        n = "string" == typeof e ? e.split("") : e,
                        i = 0;
                      i < r;
                      i++
                    )
                      i in n && (s[i] = t.call(o, n[i], i, e));
                    return s;
                  }),
            (goog.array.reduce =
              goog.NATIVE_ARRAY_PROTOTYPES &&
              (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce)
                ? function (e, t, o, r) {
                    return (
                      goog.asserts.assert(null != e.length),
                      r && (t = goog.bind(t, r)),
                      Array.prototype.reduce.call(e, t, o)
                    );
                  }
                : function (e, t, o, r) {
                    var s = o;
                    return (
                      goog.array.forEach(e, function (o, n) {
                        s = t.call(r, s, o, n, e);
                      }),
                      s
                    );
                  }),
            (goog.array.reduceRight =
              goog.NATIVE_ARRAY_PROTOTYPES &&
              (goog.array.ASSUME_NATIVE_FUNCTIONS ||
                Array.prototype.reduceRight)
                ? function (e, t, o, r) {
                    return (
                      goog.asserts.assert(null != e.length),
                      goog.asserts.assert(null != t),
                      r && (t = goog.bind(t, r)),
                      Array.prototype.reduceRight.call(e, t, o)
                    );
                  }
                : function (e, t, o, r) {
                    var s = o;
                    return (
                      goog.array.forEachRight(e, function (o, n) {
                        s = t.call(r, s, o, n, e);
                      }),
                      s
                    );
                  }),
            (goog.array.some =
              goog.NATIVE_ARRAY_PROTOTYPES &&
              (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some)
                ? function (e, t, o) {
                    return (
                      goog.asserts.assert(null != e.length),
                      Array.prototype.some.call(e, t, o)
                    );
                  }
                : function (e, t, o) {
                    for (
                      var r = e.length,
                        s = "string" == typeof e ? e.split("") : e,
                        n = 0;
                      n < r;
                      n++
                    )
                      if (n in s && t.call(o, s[n], n, e)) return !0;
                    return !1;
                  }),
            (goog.array.every =
              goog.NATIVE_ARRAY_PROTOTYPES &&
              (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every)
                ? function (e, t, o) {
                    return (
                      goog.asserts.assert(null != e.length),
                      Array.prototype.every.call(e, t, o)
                    );
                  }
                : function (e, t, o) {
                    for (
                      var r = e.length,
                        s = "string" == typeof e ? e.split("") : e,
                        n = 0;
                      n < r;
                      n++
                    )
                      if (n in s && !t.call(o, s[n], n, e)) return !1;
                    return !0;
                  }),
            (goog.array.count = function (e, t, o) {
              var r = 0;
              return (
                goog.array.forEach(
                  e,
                  function (e, s, n) {
                    t.call(o, e, s, n) && ++r;
                  },
                  o
                ),
                r
              );
            }),
            (goog.array.find = function (e, t, o) {
              return 0 > (t = goog.array.findIndex(e, t, o))
                ? null
                : "string" == typeof e
                ? e.charAt(t)
                : e[t];
            }),
            (goog.array.findIndex = function (e, t, o) {
              for (
                var r = e.length,
                  s = "string" == typeof e ? e.split("") : e,
                  n = 0;
                n < r;
                n++
              )
                if (n in s && t.call(o, s[n], n, e)) return n;
              return -1;
            }),
            (goog.array.findRight = function (e, t, o) {
              return 0 > (t = goog.array.findIndexRight(e, t, o))
                ? null
                : "string" == typeof e
                ? e.charAt(t)
                : e[t];
            }),
            (goog.array.findIndexRight = function (e, t, o) {
              var r = e.length,
                s = "string" == typeof e ? e.split("") : e;
              for (--r; 0 <= r; r--)
                if (r in s && t.call(o, s[r], r, e)) return r;
              return -1;
            }),
            (goog.array.contains = function (e, t) {
              return 0 <= goog.array.indexOf(e, t);
            }),
            (goog.array.isEmpty = function (e) {
              return 0 == e.length;
            }),
            (goog.array.clear = function (e) {
              if (!Array.isArray(e))
                for (var t = e.length - 1; 0 <= t; t--) delete e[t];
              e.length = 0;
            }),
            (goog.array.insert = function (e, t) {
              goog.array.contains(e, t) || e.push(t);
            }),
            (goog.array.insertAt = function (e, t, o) {
              goog.array.splice(e, o, 0, t);
            }),
            (goog.array.insertArrayAt = function (e, t, o) {
              goog.partial(goog.array.splice, e, o, 0).apply(null, t);
            }),
            (goog.array.insertBefore = function (e, t, o) {
              var r;
              2 == arguments.length || 0 > (r = goog.array.indexOf(e, o))
                ? e.push(t)
                : goog.array.insertAt(e, t, r);
            }),
            (goog.array.remove = function (e, t) {
              var o;
              return (
                (o = 0 <= (t = goog.array.indexOf(e, t))) &&
                  goog.array.removeAt(e, t),
                o
              );
            }),
            (goog.array.removeLast = function (e, t) {
              return (
                0 <= (t = goog.array.lastIndexOf(e, t)) &&
                (goog.array.removeAt(e, t), !0)
              );
            }),
            (goog.array.removeAt = function (e, t) {
              return (
                goog.asserts.assert(null != e.length),
                1 == Array.prototype.splice.call(e, t, 1).length
              );
            }),
            (goog.array.removeIf = function (e, t, o) {
              return (
                0 <= (t = goog.array.findIndex(e, t, o)) &&
                (goog.array.removeAt(e, t), !0)
              );
            }),
            (goog.array.removeAllIf = function (e, t, o) {
              var r = 0;
              return (
                goog.array.forEachRight(e, function (s, n) {
                  t.call(o, s, n, e) && goog.array.removeAt(e, n) && r++;
                }),
                r
              );
            }),
            (goog.array.concat = function (e) {
              return Array.prototype.concat.apply([], arguments);
            }),
            (goog.array.join = function (e) {
              return Array.prototype.concat.apply([], arguments);
            }),
            (goog.array.toArray = function (e) {
              var t = e.length;
              if (0 < t) {
                for (var o = Array(t), r = 0; r < t; r++) o[r] = e[r];
                return o;
              }
              return [];
            }),
            (goog.array.clone = goog.array.toArray),
            (goog.array.extend = function (e, t) {
              for (var o = 1; o < arguments.length; o++) {
                var r = arguments[o];
                if (goog.isArrayLike(r)) {
                  var s = e.length || 0,
                    n = r.length || 0;
                  e.length = s + n;
                  for (var i = 0; i < n; i++) e[s + i] = r[i];
                } else e.push(r);
              }
            }),
            (goog.array.splice = function (e, t, o, r) {
              return (
                goog.asserts.assert(null != e.length),
                Array.prototype.splice.apply(e, goog.array.slice(arguments, 1))
              );
            }),
            (goog.array.slice = function (e, t, o) {
              return (
                goog.asserts.assert(null != e.length),
                2 >= arguments.length
                  ? Array.prototype.slice.call(e, t)
                  : Array.prototype.slice.call(e, t, o)
              );
            }),
            (goog.array.removeDuplicates = function (e, t, o) {
              t = t || e;
              var r = function (e) {
                return goog.isObject(e)
                  ? "o" + goog.getUid(e)
                  : (typeof e).charAt(0) + e;
              };
              (o = o || r), (r = {});
              for (var s = 0, n = 0; n < e.length; ) {
                var i = e[n++],
                  a = o(i);
                Object.prototype.hasOwnProperty.call(r, a) ||
                  ((r[a] = !0), (t[s++] = i));
              }
              t.length = s;
            }),
            (goog.array.binarySearch = function (e, t, o) {
              return goog.array.binarySearch_(
                e,
                o || goog.array.defaultCompare,
                !1,
                t
              );
            }),
            (goog.array.binarySelect = function (e, t, o) {
              return goog.array.binarySearch_(e, t, !0, void 0, o);
            }),
            (goog.array.binarySearch_ = function (e, t, o, r, s) {
              for (var n, i = 0, a = e.length; i < a; ) {
                var g = i + ((a - i) >>> 1),
                  p = o ? t.call(s, e[g], g, e) : t(r, e[g]);
                0 < p ? (i = g + 1) : ((a = g), (n = !p));
              }
              return n ? i : -i - 1;
            }),
            (goog.array.sort = function (e, t) {
              e.sort(t || goog.array.defaultCompare);
            }),
            (goog.array.stableSort = function (e, t) {
              for (var o = Array(e.length), r = 0; r < e.length; r++)
                o[r] = { index: r, value: e[r] };
              var s = t || goog.array.defaultCompare;
              for (
                goog.array.sort(o, function (e, t) {
                  return s(e.value, t.value) || e.index - t.index;
                }),
                  r = 0;
                r < e.length;
                r++
              )
                e[r] = o[r].value;
            }),
            (goog.array.sortByKey = function (e, t, o) {
              var r = o || goog.array.defaultCompare;
              goog.array.sort(e, function (e, o) {
                return r(t(e), t(o));
              });
            }),
            (goog.array.sortObjectsByKey = function (e, t, o) {
              goog.array.sortByKey(
                e,
                function (e) {
                  return e[t];
                },
                o
              );
            }),
            (goog.array.isSorted = function (e, t, o) {
              t = t || goog.array.defaultCompare;
              for (var r = 1; r < e.length; r++) {
                var s = t(e[r - 1], e[r]);
                if (0 < s || (0 == s && o)) return !1;
              }
              return !0;
            }),
            (goog.array.equals = function (e, t, o) {
              if (
                !goog.isArrayLike(e) ||
                !goog.isArrayLike(t) ||
                e.length != t.length
              )
                return !1;
              var r = e.length;
              o = o || goog.array.defaultCompareEquality;
              for (var s = 0; s < r; s++) if (!o(e[s], t[s])) return !1;
              return !0;
            }),
            (goog.array.compare3 = function (e, t, o) {
              o = o || goog.array.defaultCompare;
              for (var r = Math.min(e.length, t.length), s = 0; s < r; s++) {
                var n = o(e[s], t[s]);
                if (0 != n) return n;
              }
              return goog.array.defaultCompare(e.length, t.length);
            }),
            (goog.array.defaultCompare = function (e, t) {
              return e > t ? 1 : e < t ? -1 : 0;
            }),
            (goog.array.inverseDefaultCompare = function (e, t) {
              return -goog.array.defaultCompare(e, t);
            }),
            (goog.array.defaultCompareEquality = function (e, t) {
              return e === t;
            }),
            (goog.array.binaryInsert = function (e, t, o) {
              return (
                0 > (o = goog.array.binarySearch(e, t, o)) &&
                (goog.array.insertAt(e, t, -(o + 1)), !0)
              );
            }),
            (goog.array.binaryRemove = function (e, t, o) {
              return (
                0 <= (t = goog.array.binarySearch(e, t, o)) &&
                goog.array.removeAt(e, t)
              );
            }),
            (goog.array.bucket = function (e, t, o) {
              for (var r = {}, s = 0; s < e.length; s++) {
                var n = e[s],
                  i = t.call(o, n, s, e);
                void 0 !== i && (r[i] || (r[i] = [])).push(n);
              }
              return r;
            }),
            (goog.array.toObject = function (e, t, o) {
              var r = {};
              return (
                goog.array.forEach(e, function (s, n) {
                  r[t.call(o, s, n, e)] = s;
                }),
                r
              );
            }),
            (goog.array.range = function (e, t, o) {
              var r = [],
                s = 0,
                n = e;
              if (
                (void 0 !== t && ((s = e), (n = t)), 0 > (o = o || 1) * (n - s))
              )
                return [];
              if (0 < o) for (e = s; e < n; e += o) r.push(e);
              else for (e = s; e > n; e += o) r.push(e);
              return r;
            }),
            (goog.array.repeat = function (e, t) {
              for (var o = [], r = 0; r < t; r++) o[r] = e;
              return o;
            }),
            (goog.array.flatten = function (e) {
              for (var t = [], o = 0; o < arguments.length; o++) {
                var r = arguments[o];
                if (Array.isArray(r))
                  for (var s = 0; s < r.length; s += 8192) {
                    var n = goog.array.slice(r, s, s + 8192);
                    n = goog.array.flatten.apply(null, n);
                    for (var i = 0; i < n.length; i++) t.push(n[i]);
                  }
                else t.push(r);
              }
              return t;
            }),
            (goog.array.rotate = function (e, t) {
              return (
                goog.asserts.assert(null != e.length),
                e.length &&
                  (0 < (t %= e.length)
                    ? Array.prototype.unshift.apply(e, e.splice(-t, t))
                    : 0 > t && Array.prototype.push.apply(e, e.splice(0, -t))),
                e
              );
            }),
            (goog.array.moveItem = function (e, t, o) {
              goog.asserts.assert(0 <= t && t < e.length),
                goog.asserts.assert(0 <= o && o < e.length),
                (t = Array.prototype.splice.call(e, t, 1)),
                Array.prototype.splice.call(e, o, 0, t[0]);
            }),
            (goog.array.zip = function (e) {
              if (!arguments.length) return [];
              for (
                var t = [], o = arguments[0].length, r = 1;
                r < arguments.length;
                r++
              )
                arguments[r].length < o && (o = arguments[r].length);
              for (r = 0; r < o; r++) {
                for (var s = [], n = 0; n < arguments.length; n++)
                  s.push(arguments[n][r]);
                t.push(s);
              }
              return t;
            }),
            (goog.array.shuffle = function (e, t) {
              t = t || Math.random;
              for (var o = e.length - 1; 0 < o; o--) {
                var r = Math.floor(t() * (o + 1)),
                  s = e[o];
                (e[o] = e[r]), (e[r] = s);
              }
            }),
            (goog.array.copyByIndex = function (e, t) {
              var o = [];
              return (
                goog.array.forEach(t, function (t) {
                  o.push(e[t]);
                }),
                o
              );
            }),
            (goog.array.concatMap = function (e, t, o) {
              return goog.array.concat.apply([], goog.array.map(e, t, o));
            }),
            (goog.crypt = {}),
            (goog.crypt.stringToByteArray = function (e) {
              for (var t = [], o = 0, r = 0; r < e.length; r++) {
                var s = e.charCodeAt(r);
                255 < s && ((t[o++] = 255 & s), (s >>= 8)), (t[o++] = s);
              }
              return t;
            }),
            (goog.crypt.byteArrayToString = function (e) {
              if (8192 >= e.length) return String.fromCharCode.apply(null, e);
              for (var t = "", o = 0; o < e.length; o += 8192) {
                var r = goog.array.slice(e, o, o + 8192);
                t += String.fromCharCode.apply(null, r);
              }
              return t;
            }),
            (goog.crypt.byteArrayToHex = function (e, t) {
              return goog.array
                .map(e, function (e) {
                  return 1 < (e = e.toString(16)).length ? e : "0" + e;
                })
                .join(t || "");
            }),
            (goog.crypt.hexToByteArray = function (e) {
              goog.asserts.assert(
                0 == e.length % 2,
                "Key string length must be multiple of 2"
              );
              for (var t = [], o = 0; o < e.length; o += 2)
                t.push(parseInt(e.substring(o, o + 2), 16));
              return t;
            }),
            (goog.crypt.stringToUtf8ByteArray = function (e) {
              for (var t = [], o = 0, r = 0; r < e.length; r++) {
                var s = e.charCodeAt(r);
                128 > s
                  ? (t[o++] = s)
                  : (2048 > s
                      ? (t[o++] = (s >> 6) | 192)
                      : (55296 == (64512 & s) &&
                        r + 1 < e.length &&
                        56320 == (64512 & e.charCodeAt(r + 1))
                          ? ((s =
                              65536 +
                              ((1023 & s) << 10) +
                              (1023 & e.charCodeAt(++r))),
                            (t[o++] = (s >> 18) | 240),
                            (t[o++] = ((s >> 12) & 63) | 128))
                          : (t[o++] = (s >> 12) | 224),
                        (t[o++] = ((s >> 6) & 63) | 128)),
                    (t[o++] = (63 & s) | 128));
              }
              return t;
            }),
            (goog.crypt.utf8ByteArrayToString = function (e) {
              for (var t = [], o = 0, r = 0; o < e.length; ) {
                var s = e[o++];
                if (128 > s) t[r++] = String.fromCharCode(s);
                else if (191 < s && 224 > s) {
                  var n = e[o++];
                  t[r++] = String.fromCharCode(((31 & s) << 6) | (63 & n));
                } else if (239 < s && 365 > s) {
                  n = e[o++];
                  var i = e[o++];
                  (s =
                    (((7 & s) << 18) |
                      ((63 & n) << 12) |
                      ((63 & i) << 6) |
                      (63 & e[o++])) -
                    65536),
                    (t[r++] = String.fromCharCode(55296 + (s >> 10))),
                    (t[r++] = String.fromCharCode(56320 + (1023 & s)));
                } else
                  (n = e[o++]),
                    (i = e[o++]),
                    (t[r++] = String.fromCharCode(
                      ((15 & s) << 12) | ((63 & n) << 6) | (63 & i)
                    ));
              }
              return t.join("");
            }),
            (goog.crypt.xorByteArray = function (e, t) {
              goog.asserts.assert(
                e.length == t.length,
                "XOR array lengths must match"
              );
              for (var o = [], r = 0; r < e.length; r++) o.push(e[r] ^ t[r]);
              return o;
            }),
            (goog.dom.asserts = {}),
            (goog.dom.asserts.assertIsLocation = function (e) {
              if (goog.asserts.ENABLE_ASSERTS) {
                var t = goog.dom.asserts.getWindow_(e);
                t &&
                  (!e ||
                    (!(e instanceof t.Location) && e instanceof t.Element)) &&
                  goog.asserts.fail(
                    "Argument is not a Location (or a non-Element mock); got: %s",
                    goog.dom.asserts.debugStringForType_(e)
                  );
              }
              return e;
            }),
            (goog.dom.asserts.assertIsElementType_ = function (e, t) {
              if (goog.asserts.ENABLE_ASSERTS) {
                var o = goog.dom.asserts.getWindow_(e);
                o &&
                  void 0 !== o[t] &&
                  ((e &&
                    (e instanceof o[t] ||
                      !(e instanceof o.Location || e instanceof o.Element))) ||
                    goog.asserts.fail(
                      "Argument is not a %s (or a non-Element, non-Location mock); got: %s",
                      t,
                      goog.dom.asserts.debugStringForType_(e)
                    ));
              }
              return e;
            }),
            (goog.dom.asserts.assertIsHTMLAnchorElement = function (e) {
              return goog.dom.asserts.assertIsElementType_(
                e,
                "HTMLAnchorElement"
              );
            }),
            (goog.dom.asserts.assertIsHTMLButtonElement = function (e) {
              return goog.dom.asserts.assertIsElementType_(
                e,
                "HTMLButtonElement"
              );
            }),
            (goog.dom.asserts.assertIsHTMLLinkElement = function (e) {
              return goog.dom.asserts.assertIsElementType_(
                e,
                "HTMLLinkElement"
              );
            }),
            (goog.dom.asserts.assertIsHTMLImageElement = function (e) {
              return goog.dom.asserts.assertIsElementType_(
                e,
                "HTMLImageElement"
              );
            }),
            (goog.dom.asserts.assertIsHTMLAudioElement = function (e) {
              return goog.dom.asserts.assertIsElementType_(
                e,
                "HTMLAudioElement"
              );
            }),
            (goog.dom.asserts.assertIsHTMLVideoElement = function (e) {
              return goog.dom.asserts.assertIsElementType_(
                e,
                "HTMLVideoElement"
              );
            }),
            (goog.dom.asserts.assertIsHTMLInputElement = function (e) {
              return goog.dom.asserts.assertIsElementType_(
                e,
                "HTMLInputElement"
              );
            }),
            (goog.dom.asserts.assertIsHTMLTextAreaElement = function (e) {
              return goog.dom.asserts.assertIsElementType_(
                e,
                "HTMLTextAreaElement"
              );
            }),
            (goog.dom.asserts.assertIsHTMLCanvasElement = function (e) {
              return goog.dom.asserts.assertIsElementType_(
                e,
                "HTMLCanvasElement"
              );
            }),
            (goog.dom.asserts.assertIsHTMLEmbedElement = function (e) {
              return goog.dom.asserts.assertIsElementType_(
                e,
                "HTMLEmbedElement"
              );
            }),
            (goog.dom.asserts.assertIsHTMLFormElement = function (e) {
              return goog.dom.asserts.assertIsElementType_(
                e,
                "HTMLFormElement"
              );
            }),
            (goog.dom.asserts.assertIsHTMLFrameElement = function (e) {
              return goog.dom.asserts.assertIsElementType_(
                e,
                "HTMLFrameElement"
              );
            }),
            (goog.dom.asserts.assertIsHTMLIFrameElement = function (e) {
              return goog.dom.asserts.assertIsElementType_(
                e,
                "HTMLIFrameElement"
              );
            }),
            (goog.dom.asserts.assertIsHTMLObjectElement = function (e) {
              return goog.dom.asserts.assertIsElementType_(
                e,
                "HTMLObjectElement"
              );
            }),
            (goog.dom.asserts.assertIsHTMLScriptElement = function (e) {
              return goog.dom.asserts.assertIsElementType_(
                e,
                "HTMLScriptElement"
              );
            }),
            (goog.dom.asserts.debugStringForType_ = function (e) {
              if (!goog.isObject(e))
                return void 0 === e
                  ? "undefined"
                  : null === e
                  ? "null"
                  : typeof e;
              try {
                return (
                  e.constructor.displayName ||
                  e.constructor.name ||
                  Object.prototype.toString.call(e)
                );
              } catch (e) {
                return "<object could not be stringified>";
              }
            }),
            (goog.dom.asserts.getWindow_ = function (e) {
              try {
                var t = e && e.ownerDocument,
                  o = t && (t.defaultView || t.parentWindow);
                if ((o = o || goog.global).Element && o.Location) return o;
              } catch (e) {}
              return null;
            }),
            (goog.functions = {}),
            (goog.functions.constant = function (e) {
              return function () {
                return e;
              };
            }),
            (goog.functions.FALSE = function () {
              return !1;
            }),
            (goog.functions.TRUE = function () {
              return !0;
            }),
            (goog.functions.NULL = function () {
              return null;
            }),
            (goog.functions.identity = function (e, t) {
              return e;
            }),
            (goog.functions.error = function (e) {
              return function () {
                throw Error(e);
              };
            }),
            (goog.functions.fail = function (e) {
              return function () {
                throw e;
              };
            }),
            (goog.functions.lock = function (e, t) {
              return (
                (t = t || 0),
                function () {
                  return e.apply(
                    this,
                    Array.prototype.slice.call(arguments, 0, t)
                  );
                }
              );
            }),
            (goog.functions.nth = function (e) {
              return function () {
                return arguments[e];
              };
            }),
            (goog.functions.partialRight = function (e, t) {
              var o = Array.prototype.slice.call(arguments, 1);
              return function () {
                var t = Array.prototype.slice.call(arguments);
                return t.push.apply(t, o), e.apply(this, t);
              };
            }),
            (goog.functions.withReturnValue = function (e, t) {
              return goog.functions.sequence(e, goog.functions.constant(t));
            }),
            (goog.functions.equalTo = function (e, t) {
              return function (o) {
                return t ? e == o : e === o;
              };
            }),
            (goog.functions.compose = function (e, t) {
              var o = arguments,
                r = o.length;
              return function () {
                var e;
                r && (e = o[r - 1].apply(this, arguments));
                for (var t = r - 2; 0 <= t; t--) e = o[t].call(this, e);
                return e;
              };
            }),
            (goog.functions.sequence = function (e) {
              var t = arguments,
                o = t.length;
              return function () {
                for (var e, r = 0; r < o; r++) e = t[r].apply(this, arguments);
                return e;
              };
            }),
            (goog.functions.and = function (e) {
              var t = arguments,
                o = t.length;
              return function () {
                for (var e = 0; e < o; e++)
                  if (!t[e].apply(this, arguments)) return !1;
                return !0;
              };
            }),
            (goog.functions.or = function (e) {
              var t = arguments,
                o = t.length;
              return function () {
                for (var e = 0; e < o; e++)
                  if (t[e].apply(this, arguments)) return !0;
                return !1;
              };
            }),
            (goog.functions.not = function (e) {
              return function () {
                return !e.apply(this, arguments);
              };
            }),
            (goog.functions.create = function (e, t) {
              var o = function () {};
              return (
                (o.prototype = e.prototype),
                (o = new o()),
                e.apply(o, Array.prototype.slice.call(arguments, 1)),
                o
              );
            }),
            (goog.functions.CACHE_RETURN_VALUE = !0),
            (goog.functions.cacheReturnValue = function (e) {
              var t,
                o = !1;
              return function () {
                return goog.functions.CACHE_RETURN_VALUE
                  ? (o || ((t = e()), (o = !0)), t)
                  : e();
              };
            }),
            (goog.functions.once = function (e) {
              var t = e;
              return function () {
                if (t) {
                  var e = t;
                  (t = null), e();
                }
              };
            }),
            (goog.functions.debounce = function (e, t, o) {
              var r = 0;
              return function (s) {
                goog.global.clearTimeout(r);
                var n = arguments;
                r = goog.global.setTimeout(function () {
                  e.apply(o, n);
                }, t);
              };
            }),
            (goog.functions.throttle = function (e, t, o) {
              var r = 0,
                s = !1,
                n = [],
                i = function () {
                  (r = 0), s && ((s = !1), a());
                },
                a = function () {
                  (r = goog.global.setTimeout(i, t)), e.apply(o, n);
                };
              return function (e) {
                (n = arguments), r ? (s = !0) : a();
              };
            }),
            (goog.functions.rateLimit = function (e, t, o) {
              var r = 0,
                s = function () {
                  r = 0;
                };
              return function (n) {
                r ||
                  ((r = goog.global.setTimeout(s, t)), e.apply(o, arguments));
              };
            }),
            (goog.dom.HtmlElement = function () {}),
            (goog.dom.TagName = function (e) {
              this.tagName_ = e;
            }),
            (goog.dom.TagName.prototype.toString = function () {
              return this.tagName_;
            }),
            (goog.dom.TagName.A = new goog.dom.TagName("A")),
            (goog.dom.TagName.ABBR = new goog.dom.TagName("ABBR")),
            (goog.dom.TagName.ACRONYM = new goog.dom.TagName("ACRONYM")),
            (goog.dom.TagName.ADDRESS = new goog.dom.TagName("ADDRESS")),
            (goog.dom.TagName.APPLET = new goog.dom.TagName("APPLET")),
            (goog.dom.TagName.AREA = new goog.dom.TagName("AREA")),
            (goog.dom.TagName.ARTICLE = new goog.dom.TagName("ARTICLE")),
            (goog.dom.TagName.ASIDE = new goog.dom.TagName("ASIDE")),
            (goog.dom.TagName.AUDIO = new goog.dom.TagName("AUDIO")),
            (goog.dom.TagName.B = new goog.dom.TagName("B")),
            (goog.dom.TagName.BASE = new goog.dom.TagName("BASE")),
            (goog.dom.TagName.BASEFONT = new goog.dom.TagName("BASEFONT")),
            (goog.dom.TagName.BDI = new goog.dom.TagName("BDI")),
            (goog.dom.TagName.BDO = new goog.dom.TagName("BDO")),
            (goog.dom.TagName.BIG = new goog.dom.TagName("BIG")),
            (goog.dom.TagName.BLOCKQUOTE = new goog.dom.TagName("BLOCKQUOTE")),
            (goog.dom.TagName.BODY = new goog.dom.TagName("BODY")),
            (goog.dom.TagName.BR = new goog.dom.TagName("BR")),
            (goog.dom.TagName.BUTTON = new goog.dom.TagName("BUTTON")),
            (goog.dom.TagName.CANVAS = new goog.dom.TagName("CANVAS")),
            (goog.dom.TagName.CAPTION = new goog.dom.TagName("CAPTION")),
            (goog.dom.TagName.CENTER = new goog.dom.TagName("CENTER")),
            (goog.dom.TagName.CITE = new goog.dom.TagName("CITE")),
            (goog.dom.TagName.CODE = new goog.dom.TagName("CODE")),
            (goog.dom.TagName.COL = new goog.dom.TagName("COL")),
            (goog.dom.TagName.COLGROUP = new goog.dom.TagName("COLGROUP")),
            (goog.dom.TagName.COMMAND = new goog.dom.TagName("COMMAND")),
            (goog.dom.TagName.DATA = new goog.dom.TagName("DATA")),
            (goog.dom.TagName.DATALIST = new goog.dom.TagName("DATALIST")),
            (goog.dom.TagName.DD = new goog.dom.TagName("DD")),
            (goog.dom.TagName.DEL = new goog.dom.TagName("DEL")),
            (goog.dom.TagName.DETAILS = new goog.dom.TagName("DETAILS")),
            (goog.dom.TagName.DFN = new goog.dom.TagName("DFN")),
            (goog.dom.TagName.DIALOG = new goog.dom.TagName("DIALOG")),
            (goog.dom.TagName.DIR = new goog.dom.TagName("DIR")),
            (goog.dom.TagName.DIV = new goog.dom.TagName("DIV")),
            (goog.dom.TagName.DL = new goog.dom.TagName("DL")),
            (goog.dom.TagName.DT = new goog.dom.TagName("DT")),
            (goog.dom.TagName.EM = new goog.dom.TagName("EM")),
            (goog.dom.TagName.EMBED = new goog.dom.TagName("EMBED")),
            (goog.dom.TagName.FIELDSET = new goog.dom.TagName("FIELDSET")),
            (goog.dom.TagName.FIGCAPTION = new goog.dom.TagName("FIGCAPTION")),
            (goog.dom.TagName.FIGURE = new goog.dom.TagName("FIGURE")),
            (goog.dom.TagName.FONT = new goog.dom.TagName("FONT")),
            (goog.dom.TagName.FOOTER = new goog.dom.TagName("FOOTER")),
            (goog.dom.TagName.FORM = new goog.dom.TagName("FORM")),
            (goog.dom.TagName.FRAME = new goog.dom.TagName("FRAME")),
            (goog.dom.TagName.FRAMESET = new goog.dom.TagName("FRAMESET")),
            (goog.dom.TagName.H1 = new goog.dom.TagName("H1")),
            (goog.dom.TagName.H2 = new goog.dom.TagName("H2")),
            (goog.dom.TagName.H3 = new goog.dom.TagName("H3")),
            (goog.dom.TagName.H4 = new goog.dom.TagName("H4")),
            (goog.dom.TagName.H5 = new goog.dom.TagName("H5")),
            (goog.dom.TagName.H6 = new goog.dom.TagName("H6")),
            (goog.dom.TagName.HEAD = new goog.dom.TagName("HEAD")),
            (goog.dom.TagName.HEADER = new goog.dom.TagName("HEADER")),
            (goog.dom.TagName.HGROUP = new goog.dom.TagName("HGROUP")),
            (goog.dom.TagName.HR = new goog.dom.TagName("HR")),
            (goog.dom.TagName.HTML = new goog.dom.TagName("HTML")),
            (goog.dom.TagName.I = new goog.dom.TagName("I")),
            (goog.dom.TagName.IFRAME = new goog.dom.TagName("IFRAME")),
            (goog.dom.TagName.IMG = new goog.dom.TagName("IMG")),
            (goog.dom.TagName.INPUT = new goog.dom.TagName("INPUT")),
            (goog.dom.TagName.INS = new goog.dom.TagName("INS")),
            (goog.dom.TagName.ISINDEX = new goog.dom.TagName("ISINDEX")),
            (goog.dom.TagName.KBD = new goog.dom.TagName("KBD")),
            (goog.dom.TagName.KEYGEN = new goog.dom.TagName("KEYGEN")),
            (goog.dom.TagName.LABEL = new goog.dom.TagName("LABEL")),
            (goog.dom.TagName.LEGEND = new goog.dom.TagName("LEGEND")),
            (goog.dom.TagName.LI = new goog.dom.TagName("LI")),
            (goog.dom.TagName.LINK = new goog.dom.TagName("LINK")),
            (goog.dom.TagName.MAIN = new goog.dom.TagName("MAIN")),
            (goog.dom.TagName.MAP = new goog.dom.TagName("MAP")),
            (goog.dom.TagName.MARK = new goog.dom.TagName("MARK")),
            (goog.dom.TagName.MATH = new goog.dom.TagName("MATH")),
            (goog.dom.TagName.MENU = new goog.dom.TagName("MENU")),
            (goog.dom.TagName.MENUITEM = new goog.dom.TagName("MENUITEM")),
            (goog.dom.TagName.META = new goog.dom.TagName("META")),
            (goog.dom.TagName.METER = new goog.dom.TagName("METER")),
            (goog.dom.TagName.NAV = new goog.dom.TagName("NAV")),
            (goog.dom.TagName.NOFRAMES = new goog.dom.TagName("NOFRAMES")),
            (goog.dom.TagName.NOSCRIPT = new goog.dom.TagName("NOSCRIPT")),
            (goog.dom.TagName.OBJECT = new goog.dom.TagName("OBJECT")),
            (goog.dom.TagName.OL = new goog.dom.TagName("OL")),
            (goog.dom.TagName.OPTGROUP = new goog.dom.TagName("OPTGROUP")),
            (goog.dom.TagName.OPTION = new goog.dom.TagName("OPTION")),
            (goog.dom.TagName.OUTPUT = new goog.dom.TagName("OUTPUT")),
            (goog.dom.TagName.P = new goog.dom.TagName("P")),
            (goog.dom.TagName.PARAM = new goog.dom.TagName("PARAM")),
            (goog.dom.TagName.PICTURE = new goog.dom.TagName("PICTURE")),
            (goog.dom.TagName.PRE = new goog.dom.TagName("PRE")),
            (goog.dom.TagName.PROGRESS = new goog.dom.TagName("PROGRESS")),
            (goog.dom.TagName.Q = new goog.dom.TagName("Q")),
            (goog.dom.TagName.RP = new goog.dom.TagName("RP")),
            (goog.dom.TagName.RT = new goog.dom.TagName("RT")),
            (goog.dom.TagName.RTC = new goog.dom.TagName("RTC")),
            (goog.dom.TagName.RUBY = new goog.dom.TagName("RUBY")),
            (goog.dom.TagName.S = new goog.dom.TagName("S")),
            (goog.dom.TagName.SAMP = new goog.dom.TagName("SAMP")),
            (goog.dom.TagName.SCRIPT = new goog.dom.TagName("SCRIPT")),
            (goog.dom.TagName.SECTION = new goog.dom.TagName("SECTION")),
            (goog.dom.TagName.SELECT = new goog.dom.TagName("SELECT")),
            (goog.dom.TagName.SMALL = new goog.dom.TagName("SMALL")),
            (goog.dom.TagName.SOURCE = new goog.dom.TagName("SOURCE")),
            (goog.dom.TagName.SPAN = new goog.dom.TagName("SPAN")),
            (goog.dom.TagName.STRIKE = new goog.dom.TagName("STRIKE")),
            (goog.dom.TagName.STRONG = new goog.dom.TagName("STRONG")),
            (goog.dom.TagName.STYLE = new goog.dom.TagName("STYLE")),
            (goog.dom.TagName.SUB = new goog.dom.TagName("SUB")),
            (goog.dom.TagName.SUMMARY = new goog.dom.TagName("SUMMARY")),
            (goog.dom.TagName.SUP = new goog.dom.TagName("SUP")),
            (goog.dom.TagName.SVG = new goog.dom.TagName("SVG")),
            (goog.dom.TagName.TABLE = new goog.dom.TagName("TABLE")),
            (goog.dom.TagName.TBODY = new goog.dom.TagName("TBODY")),
            (goog.dom.TagName.TD = new goog.dom.TagName("TD")),
            (goog.dom.TagName.TEMPLATE = new goog.dom.TagName("TEMPLATE")),
            (goog.dom.TagName.TEXTAREA = new goog.dom.TagName("TEXTAREA")),
            (goog.dom.TagName.TFOOT = new goog.dom.TagName("TFOOT")),
            (goog.dom.TagName.TH = new goog.dom.TagName("TH")),
            (goog.dom.TagName.THEAD = new goog.dom.TagName("THEAD")),
            (goog.dom.TagName.TIME = new goog.dom.TagName("TIME")),
            (goog.dom.TagName.TITLE = new goog.dom.TagName("TITLE")),
            (goog.dom.TagName.TR = new goog.dom.TagName("TR")),
            (goog.dom.TagName.TRACK = new goog.dom.TagName("TRACK")),
            (goog.dom.TagName.TT = new goog.dom.TagName("TT")),
            (goog.dom.TagName.U = new goog.dom.TagName("U")),
            (goog.dom.TagName.UL = new goog.dom.TagName("UL")),
            (goog.dom.TagName.VAR = new goog.dom.TagName("VAR")),
            (goog.dom.TagName.VIDEO = new goog.dom.TagName("VIDEO")),
            (goog.dom.TagName.WBR = new goog.dom.TagName("WBR")),
            (goog.dom.tags = {}),
            (goog.dom.tags.VOID_TAGS_ = {
              area: !0,
              base: !0,
              br: !0,
              col: !0,
              command: !0,
              embed: !0,
              hr: !0,
              img: !0,
              input: !0,
              keygen: !0,
              link: !0,
              meta: !0,
              param: !0,
              source: !0,
              track: !0,
              wbr: !0,
            }),
            (goog.dom.tags.isVoidTag = function (e) {
              return !0 === goog.dom.tags.VOID_TAGS_[e];
            }),
            (goog.html = {}),
            (goog.html.trustedtypes = {}),
            (goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY =
              goog.TRUSTED_TYPES_POLICY_NAME
                ? goog.createTrustedTypesPolicy(
                    goog.TRUSTED_TYPES_POLICY_NAME + "#html"
                  )
                : null),
            (goog.string = {}),
            (goog.string.TypedString = function () {}),
            (goog.string.Const = function (e, t) {
              (this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ =
                (e ===
                  goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ &&
                  t) ||
                ""),
                (this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ =
                  goog.string.Const.TYPE_MARKER_);
            }),
            (goog.string.Const.prototype.implementsGoogStringTypedString = !0),
            (goog.string.Const.prototype.getTypedStringValue = function () {
              return this
                .stringConstValueWithSecurityContract__googStringSecurityPrivate_;
            }),
            goog.DEBUG &&
              (goog.string.Const.prototype.toString = function () {
                return (
                  "Const{" +
                  this
                    .stringConstValueWithSecurityContract__googStringSecurityPrivate_ +
                  "}"
                );
              }),
            (goog.string.Const.unwrap = function (e) {
              return e instanceof goog.string.Const &&
                e.constructor === goog.string.Const &&
                e.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ ===
                  goog.string.Const.TYPE_MARKER_
                ? e.stringConstValueWithSecurityContract__googStringSecurityPrivate_
                : (goog.asserts.fail(
                    "expected object of type Const, got '" + e + "'"
                  ),
                  "type_error:Const");
            }),
            (goog.string.Const.from = function (e) {
              return new goog.string.Const(
                goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_,
                e
              );
            }),
            (goog.string.Const.TYPE_MARKER_ = {}),
            (goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {}),
            (goog.string.Const.EMPTY = goog.string.Const.from("")),
            (goog.html.SafeScript = function () {
              (this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = ""),
                (this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
                  goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_);
            }),
            (goog.html.SafeScript.prototype.implementsGoogStringTypedString =
              !0),
            (goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
            (goog.html.SafeScript.fromConstant = function (e) {
              return 0 === (e = goog.string.Const.unwrap(e)).length
                ? goog.html.SafeScript.EMPTY
                : goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
                    e
                  );
            }),
            (goog.html.SafeScript.fromConstantAndArgs = function (e, t) {
              for (var o = [], r = 1; r < arguments.length; r++)
                o.push(goog.html.SafeScript.stringify_(arguments[r]));
              return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
                "(" + goog.string.Const.unwrap(e) + ")(" + o.join(", ") + ");"
              );
            }),
            (goog.html.SafeScript.fromJson = function (e) {
              return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
                goog.html.SafeScript.stringify_(e)
              );
            }),
            (goog.html.SafeScript.prototype.getTypedStringValue = function () {
              return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();
            }),
            goog.DEBUG &&
              (goog.html.SafeScript.prototype.toString = function () {
                return (
                  "SafeScript{" +
                  this.privateDoNotAccessOrElseSafeScriptWrappedValue_ +
                  "}"
                );
              }),
            (goog.html.SafeScript.unwrap = function (e) {
              return goog.html.SafeScript.unwrapTrustedScript(e).toString();
            }),
            (goog.html.SafeScript.unwrapTrustedScript = function (e) {
              return e instanceof goog.html.SafeScript &&
                e.constructor === goog.html.SafeScript &&
                e.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
                  goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
                ? e.privateDoNotAccessOrElseSafeScriptWrappedValue_
                : (goog.asserts.fail(
                    "expected object of type SafeScript, got '" +
                      e +
                      "' of type " +
                      goog.typeOf(e)
                  ),
                  "type_error:SafeScript");
            }),
            (goog.html.SafeScript.stringify_ = function (e) {
              return JSON.stringify(e).replace(/</g, "\\x3c");
            }),
            (goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse =
              function (e) {
                return new goog.html.SafeScript().initSecurityPrivateDoNotAccessOrElse_(
                  e
                );
              }),
            (goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ =
              function (e) {
                return (
                  (this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = goog
                    .html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY
                    ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(
                        e
                      )
                    : e),
                  this
                );
              }),
            (goog.html.SafeScript.EMPTY =
              goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
                ""
              )),
            (goog.fs = {}),
            (goog.fs.url = {}),
            (goog.fs.url.createObjectUrl = function (e) {
              return goog.fs.url.getUrlObject_().createObjectURL(e);
            }),
            (goog.fs.url.revokeObjectUrl = function (e) {
              goog.fs.url.getUrlObject_().revokeObjectURL(e);
            }),
            (goog.fs.url.UrlObject_ = function () {}),
            (goog.fs.url.UrlObject_.prototype.createObjectURL = function (
              e
            ) {}),
            (goog.fs.url.UrlObject_.prototype.revokeObjectURL = function (
              e
            ) {}),
            (goog.fs.url.getUrlObject_ = function () {
              var e = goog.fs.url.findUrlObject_();
              if (null != e) return e;
              throw Error("This browser doesn't seem to support blob URLs");
            }),
            (goog.fs.url.findUrlObject_ = function () {
              return void 0 !== goog.global.URL &&
                void 0 !== goog.global.URL.createObjectURL
                ? goog.global.URL
                : void 0 !== goog.global.webkitURL &&
                  void 0 !== goog.global.webkitURL.createObjectURL
                ? goog.global.webkitURL
                : void 0 !== goog.global.createObjectURL
                ? goog.global
                : null;
            }),
            (goog.fs.url.browserSupportsObjectUrls = function () {
              return null != goog.fs.url.findUrlObject_();
            }),
            (goog.fs.blob = {}),
            (goog.fs.blob.getBlob = function (e) {
              var t = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
              if (void 0 !== t) {
                t = new t();
                for (var o = 0; o < arguments.length; o++)
                  t.append(arguments[o]);
                return t.getBlob();
              }
              return goog.fs.blob.getBlobWithProperties(
                goog.array.toArray(arguments)
              );
            }),
            (goog.fs.blob.getBlobWithProperties = function (e, t, o) {
              var r = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
              if (void 0 !== r) {
                r = new r();
                for (var s = 0; s < e.length; s++) r.append(e[s], o);
                return r.getBlob(t);
              }
              if (void 0 !== goog.global.Blob)
                return (
                  (r = {}),
                  t && (r.type = t),
                  o && (r.endings = o),
                  new Blob(e, r)
                );
              throw Error(
                "This browser doesn't seem to support creating Blobs"
              );
            }),
            (goog.i18n = {}),
            (goog.i18n.bidi = {}),
            (goog.i18n.bidi.FORCE_RTL = !1),
            (goog.i18n.bidi.IS_RTL =
              goog.i18n.bidi.FORCE_RTL ||
              (("ar" == goog.LOCALE.substring(0, 2).toLowerCase() ||
                "fa" == goog.LOCALE.substring(0, 2).toLowerCase() ||
                "he" == goog.LOCALE.substring(0, 2).toLowerCase() ||
                "iw" == goog.LOCALE.substring(0, 2).toLowerCase() ||
                "ps" == goog.LOCALE.substring(0, 2).toLowerCase() ||
                "sd" == goog.LOCALE.substring(0, 2).toLowerCase() ||
                "ug" == goog.LOCALE.substring(0, 2).toLowerCase() ||
                "ur" == goog.LOCALE.substring(0, 2).toLowerCase() ||
                "yi" == goog.LOCALE.substring(0, 2).toLowerCase()) &&
                (2 == goog.LOCALE.length ||
                  "-" == goog.LOCALE.substring(2, 3) ||
                  "_" == goog.LOCALE.substring(2, 3))) ||
              (3 <= goog.LOCALE.length &&
                "ckb" == goog.LOCALE.substring(0, 3).toLowerCase() &&
                (3 == goog.LOCALE.length ||
                  "-" == goog.LOCALE.substring(3, 4) ||
                  "_" == goog.LOCALE.substring(3, 4))) ||
              (7 <= goog.LOCALE.length &&
                ("-" == goog.LOCALE.substring(2, 3) ||
                  "_" == goog.LOCALE.substring(2, 3)) &&
                ("adlm" == goog.LOCALE.substring(3, 7).toLowerCase() ||
                  "arab" == goog.LOCALE.substring(3, 7).toLowerCase() ||
                  "hebr" == goog.LOCALE.substring(3, 7).toLowerCase() ||
                  "nkoo" == goog.LOCALE.substring(3, 7).toLowerCase() ||
                  "rohg" == goog.LOCALE.substring(3, 7).toLowerCase() ||
                  "thaa" == goog.LOCALE.substring(3, 7).toLowerCase())) ||
              (8 <= goog.LOCALE.length &&
                ("-" == goog.LOCALE.substring(3, 4) ||
                  "_" == goog.LOCALE.substring(3, 4)) &&
                ("adlm" == goog.LOCALE.substring(4, 8).toLowerCase() ||
                  "arab" == goog.LOCALE.substring(4, 8).toLowerCase() ||
                  "hebr" == goog.LOCALE.substring(4, 8).toLowerCase() ||
                  "nkoo" == goog.LOCALE.substring(4, 8).toLowerCase() ||
                  "rohg" == goog.LOCALE.substring(4, 8).toLowerCase() ||
                  "thaa" == goog.LOCALE.substring(4, 8).toLowerCase()))),
            (goog.i18n.bidi.Format = {
              LRE: "‪",
              RLE: "‫",
              PDF: "‬",
              LRM: "‎",
              RLM: "‏",
            }),
            (goog.i18n.bidi.Dir = { LTR: 1, RTL: -1, NEUTRAL: 0 }),
            (goog.i18n.bidi.RIGHT = "right"),
            (goog.i18n.bidi.LEFT = "left"),
            (goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL
              ? goog.i18n.bidi.LEFT
              : goog.i18n.bidi.RIGHT),
            (goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL
              ? goog.i18n.bidi.RIGHT
              : goog.i18n.bidi.LEFT),
            (goog.i18n.bidi.toDir = function (e, t) {
              return "number" == typeof e
                ? 0 < e
                  ? goog.i18n.bidi.Dir.LTR
                  : 0 > e
                  ? goog.i18n.bidi.Dir.RTL
                  : t
                  ? null
                  : goog.i18n.bidi.Dir.NEUTRAL
                : null == e
                ? null
                : e
                ? goog.i18n.bidi.Dir.RTL
                : goog.i18n.bidi.Dir.LTR;
            }),
            (goog.i18n.bidi.ltrChars_ =
              "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ऀ-῿‎Ⰰ-\ud801\ud804-\ud839\ud83c-\udbff豈-﬜︀-﹯﻽-￿"),
            (goog.i18n.bidi.rtlChars_ =
              "֑-ۯۺ-ࣿ‏\ud802-\ud803\ud83a-\ud83bיִ-﷿ﹰ-ﻼ"),
            (goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g),
            (goog.i18n.bidi.stripHtmlIfNeeded_ = function (e, t) {
              return t ? e.replace(goog.i18n.bidi.htmlSkipReg_, "") : e;
            }),
            (goog.i18n.bidi.rtlCharReg_ = new RegExp(
              "[" + goog.i18n.bidi.rtlChars_ + "]"
            )),
            (goog.i18n.bidi.ltrCharReg_ = new RegExp(
              "[" + goog.i18n.bidi.ltrChars_ + "]"
            )),
            (goog.i18n.bidi.hasAnyRtl = function (e, t) {
              return goog.i18n.bidi.rtlCharReg_.test(
                goog.i18n.bidi.stripHtmlIfNeeded_(e, t)
              );
            }),
            (goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl),
            (goog.i18n.bidi.hasAnyLtr = function (e, t) {
              return goog.i18n.bidi.ltrCharReg_.test(
                goog.i18n.bidi.stripHtmlIfNeeded_(e, t)
              );
            }),
            (goog.i18n.bidi.ltrRe_ = new RegExp(
              "^[" + goog.i18n.bidi.ltrChars_ + "]"
            )),
            (goog.i18n.bidi.rtlRe_ = new RegExp(
              "^[" + goog.i18n.bidi.rtlChars_ + "]"
            )),
            (goog.i18n.bidi.isRtlChar = function (e) {
              return goog.i18n.bidi.rtlRe_.test(e);
            }),
            (goog.i18n.bidi.isLtrChar = function (e) {
              return goog.i18n.bidi.ltrRe_.test(e);
            }),
            (goog.i18n.bidi.isNeutralChar = function (e) {
              return (
                !goog.i18n.bidi.isLtrChar(e) && !goog.i18n.bidi.isRtlChar(e)
              );
            }),
            (goog.i18n.bidi.ltrDirCheckRe_ = new RegExp(
              "^[^" +
                goog.i18n.bidi.rtlChars_ +
                "]*[" +
                goog.i18n.bidi.ltrChars_ +
                "]"
            )),
            (goog.i18n.bidi.rtlDirCheckRe_ = new RegExp(
              "^[^" +
                goog.i18n.bidi.ltrChars_ +
                "]*[" +
                goog.i18n.bidi.rtlChars_ +
                "]"
            )),
            (goog.i18n.bidi.startsWithRtl = function (e, t) {
              return goog.i18n.bidi.rtlDirCheckRe_.test(
                goog.i18n.bidi.stripHtmlIfNeeded_(e, t)
              );
            }),
            (goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl),
            (goog.i18n.bidi.startsWithLtr = function (e, t) {
              return goog.i18n.bidi.ltrDirCheckRe_.test(
                goog.i18n.bidi.stripHtmlIfNeeded_(e, t)
              );
            }),
            (goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr),
            (goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/),
            (goog.i18n.bidi.isNeutralText = function (e, t) {
              return (
                (e = goog.i18n.bidi.stripHtmlIfNeeded_(e, t)),
                goog.i18n.bidi.isRequiredLtrRe_.test(e) ||
                  (!goog.i18n.bidi.hasAnyLtr(e) && !goog.i18n.bidi.hasAnyRtl(e))
              );
            }),
            (goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp(
              "[" +
                goog.i18n.bidi.ltrChars_ +
                "][^" +
                goog.i18n.bidi.rtlChars_ +
                "]*$"
            )),
            (goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp(
              "[" +
                goog.i18n.bidi.rtlChars_ +
                "][^" +
                goog.i18n.bidi.ltrChars_ +
                "]*$"
            )),
            (goog.i18n.bidi.endsWithLtr = function (e, t) {
              return goog.i18n.bidi.ltrExitDirCheckRe_.test(
                goog.i18n.bidi.stripHtmlIfNeeded_(e, t)
              );
            }),
            (goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr),
            (goog.i18n.bidi.endsWithRtl = function (e, t) {
              return goog.i18n.bidi.rtlExitDirCheckRe_.test(
                goog.i18n.bidi.stripHtmlIfNeeded_(e, t)
              );
            }),
            (goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl),
            (goog.i18n.bidi.rtlLocalesRe_ =
              /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i),
            (goog.i18n.bidi.isRtlLanguage = function (e) {
              return goog.i18n.bidi.rtlLocalesRe_.test(e);
            }),
            (goog.i18n.bidi.bracketGuardTextRe_ =
              /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g),
            (goog.i18n.bidi.guardBracketInText = function (e, t) {
              return (
                (t = (void 0 === t ? goog.i18n.bidi.hasAnyRtl(e) : t)
                  ? goog.i18n.bidi.Format.RLM
                  : goog.i18n.bidi.Format.LRM),
                e.replace(goog.i18n.bidi.bracketGuardTextRe_, t + "$&" + t)
              );
            }),
            (goog.i18n.bidi.enforceRtlInHtml = function (e) {
              return "<" == e.charAt(0)
                ? e.replace(/<\w+/, "$& dir=rtl")
                : "\n<span dir=rtl>" + e + "</span>";
            }),
            (goog.i18n.bidi.enforceRtlInText = function (e) {
              return goog.i18n.bidi.Format.RLE + e + goog.i18n.bidi.Format.PDF;
            }),
            (goog.i18n.bidi.enforceLtrInHtml = function (e) {
              return "<" == e.charAt(0)
                ? e.replace(/<\w+/, "$& dir=ltr")
                : "\n<span dir=ltr>" + e + "</span>";
            }),
            (goog.i18n.bidi.enforceLtrInText = function (e) {
              return goog.i18n.bidi.Format.LRE + e + goog.i18n.bidi.Format.PDF;
            }),
            (goog.i18n.bidi.dimensionsRe_ =
              /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g),
            (goog.i18n.bidi.leftRe_ = /left/gi),
            (goog.i18n.bidi.rightRe_ = /right/gi),
            (goog.i18n.bidi.tempRe_ = /%%%%/g),
            (goog.i18n.bidi.mirrorCSS = function (e) {
              return e
                .replace(goog.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2")
                .replace(goog.i18n.bidi.leftRe_, "%%%%")
                .replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT)
                .replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT);
            }),
            (goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g),
            (goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g),
            (goog.i18n.bidi.normalizeHebrewQuote = function (e) {
              return e
                .replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, "$1״")
                .replace(goog.i18n.bidi.singleQuoteSubstituteRe_, "$1׳");
            }),
            (goog.i18n.bidi.wordSeparatorRe_ = /\s+/),
            (goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/),
            (goog.i18n.bidi.rtlDetectionThreshold_ = 0.4),
            (goog.i18n.bidi.estimateDirection = function (e, t) {
              var o = 0,
                r = 0,
                s = !1;
              for (
                e = goog.i18n.bidi
                  .stripHtmlIfNeeded_(e, t)
                  .split(goog.i18n.bidi.wordSeparatorRe_),
                  t = 0;
                t < e.length;
                t++
              ) {
                var n = e[t];
                goog.i18n.bidi.startsWithRtl(n)
                  ? (o++, r++)
                  : goog.i18n.bidi.isRequiredLtrRe_.test(n)
                  ? (s = !0)
                  : goog.i18n.bidi.hasAnyLtr(n)
                  ? r++
                  : goog.i18n.bidi.hasNumeralsRe_.test(n) && (s = !0);
              }
              return 0 == r
                ? s
                  ? goog.i18n.bidi.Dir.LTR
                  : goog.i18n.bidi.Dir.NEUTRAL
                : o / r > goog.i18n.bidi.rtlDetectionThreshold_
                ? goog.i18n.bidi.Dir.RTL
                : goog.i18n.bidi.Dir.LTR;
            }),
            (goog.i18n.bidi.detectRtlDirectionality = function (e, t) {
              return (
                goog.i18n.bidi.estimateDirection(e, t) == goog.i18n.bidi.Dir.RTL
              );
            }),
            (goog.i18n.bidi.setElementDirAndAlign = function (e, t) {
              e &&
                (t = goog.i18n.bidi.toDir(t)) &&
                ((e.style.textAlign =
                  t == goog.i18n.bidi.Dir.RTL
                    ? goog.i18n.bidi.RIGHT
                    : goog.i18n.bidi.LEFT),
                (e.dir = t == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr"));
            }),
            (goog.i18n.bidi.setElementDirByTextDirectionality = function (
              e,
              t
            ) {
              switch (goog.i18n.bidi.estimateDirection(t)) {
                case goog.i18n.bidi.Dir.LTR:
                  e.dir = "ltr";
                  break;
                case goog.i18n.bidi.Dir.RTL:
                  e.dir = "rtl";
                  break;
                default:
                  e.removeAttribute("dir");
              }
            }),
            (goog.i18n.bidi.DirectionalString = function () {}),
            (goog.html.TrustedResourceUrl = function (e, t) {
              (this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ =
                (e ===
                  goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ &&
                  t) ||
                ""),
                (this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
                  goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_);
            }),
            (goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString =
              !0),
            (goog.html.TrustedResourceUrl.prototype.getTypedStringValue =
              function () {
                return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString();
              }),
            (goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString =
              !0),
            (goog.html.TrustedResourceUrl.prototype.getDirection = function () {
              return goog.i18n.bidi.Dir.LTR;
            }),
            (goog.html.TrustedResourceUrl.prototype.cloneWithParams = function (
              e,
              t
            ) {
              var o = goog.html.TrustedResourceUrl.unwrap(this),
                r =
                  (o =
                    goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(
                      o
                    ))[3] || "";
              return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
                o[1] +
                  goog.html.TrustedResourceUrl.stringifyParams_(
                    "?",
                    o[2] || "",
                    e
                  ) +
                  goog.html.TrustedResourceUrl.stringifyParams_("#", r, t)
              );
            }),
            goog.DEBUG &&
              (goog.html.TrustedResourceUrl.prototype.toString = function () {
                return (
                  "TrustedResourceUrl{" +
                  this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ +
                  "}"
                );
              }),
            (goog.html.TrustedResourceUrl.unwrap = function (e) {
              return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(
                e
              ).toString();
            }),
            (goog.html.TrustedResourceUrl.unwrapTrustedScriptURL = function (
              e
            ) {
              return e instanceof goog.html.TrustedResourceUrl &&
                e.constructor === goog.html.TrustedResourceUrl &&
                e.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
                  goog.html.TrustedResourceUrl
                    .TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
                ? e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_
                : (goog.asserts.fail(
                    "expected object of type TrustedResourceUrl, got '" +
                      e +
                      "' of type " +
                      goog.typeOf(e)
                  ),
                  "type_error:TrustedResourceUrl");
            }),
            (goog.html.TrustedResourceUrl.format = function (e, t) {
              var o = goog.string.Const.unwrap(e);
              if (!goog.html.TrustedResourceUrl.BASE_URL_.test(o))
                throw Error("Invalid TrustedResourceUrl format: " + o);
              return (
                (e = o.replace(
                  goog.html.TrustedResourceUrl.FORMAT_MARKER_,
                  function (e, r) {
                    if (!Object.prototype.hasOwnProperty.call(t, r))
                      throw Error(
                        'Found marker, "' +
                          r +
                          '", in format string, "' +
                          o +
                          '", but no valid label mapping found in args: ' +
                          JSON.stringify(t)
                      );
                    return (e = t[r]) instanceof goog.string.Const
                      ? goog.string.Const.unwrap(e)
                      : encodeURIComponent(String(e));
                  }
                )),
                goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
                  e
                )
              );
            }),
            (goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g),
            (goog.html.TrustedResourceUrl.BASE_URL_ =
              /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i),
            (goog.html.TrustedResourceUrl.URL_PARAM_PARSER_ =
              /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/),
            (goog.html.TrustedResourceUrl.formatWithParams = function (
              e,
              t,
              o,
              r
            ) {
              return goog.html.TrustedResourceUrl.format(e, t).cloneWithParams(
                o,
                r
              );
            }),
            (goog.html.TrustedResourceUrl.fromConstant = function (e) {
              return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
                goog.string.Const.unwrap(e)
              );
            }),
            (goog.html.TrustedResourceUrl.fromConstants = function (e) {
              for (var t = "", o = 0; o < e.length; o++)
                t += goog.string.Const.unwrap(e[o]);
              return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
                t
              );
            }),
            (goog.html.TrustedResourceUrl.fromSafeScript = function (e) {
              return (
                (e = goog.fs.blob.getBlobWithProperties(
                  [goog.html.SafeScript.unwrap(e)],
                  "text/javascript"
                )),
                (e = goog.fs.url.createObjectUrl(e)),
                goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
                  e
                )
              );
            }),
            (goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
              {}),
            (goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse =
              function (e) {
                return (
                  (e = goog.html.trustedtypes
                    .PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY
                    ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(
                        e
                      )
                    : e),
                  new goog.html.TrustedResourceUrl(
                    goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_,
                    e
                  )
                );
              }),
            (goog.html.TrustedResourceUrl.stringifyParams_ = function (
              e,
              t,
              o
            ) {
              if (null == o) return t;
              if ("string" == typeof o)
                return o ? e + encodeURIComponent(o) : "";
              for (var r in o) {
                var s = o[r];
                s = Array.isArray(s) ? s : [s];
                for (var n = 0; n < s.length; n++) {
                  var i = s[n];
                  null != i &&
                    (t || (t = e),
                    (t +=
                      (t.length > e.length ? "&" : "") +
                      encodeURIComponent(r) +
                      "=" +
                      encodeURIComponent(String(i))));
                }
              }
              return t;
            }),
            (goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {}),
            (goog.string.internal = {}),
            (goog.string.internal.startsWith = function (e, t) {
              return 0 == e.lastIndexOf(t, 0);
            }),
            (goog.string.internal.endsWith = function (e, t) {
              var o = e.length - t.length;
              return 0 <= o && e.indexOf(t, o) == o;
            }),
            (goog.string.internal.caseInsensitiveStartsWith = function (e, t) {
              return (
                0 ==
                goog.string.internal.caseInsensitiveCompare(
                  t,
                  e.substr(0, t.length)
                )
              );
            }),
            (goog.string.internal.caseInsensitiveEndsWith = function (e, t) {
              return (
                0 ==
                goog.string.internal.caseInsensitiveCompare(
                  t,
                  e.substr(e.length - t.length, t.length)
                )
              );
            }),
            (goog.string.internal.caseInsensitiveEquals = function (e, t) {
              return e.toLowerCase() == t.toLowerCase();
            }),
            (goog.string.internal.isEmptyOrWhitespace = function (e) {
              return /^[\s\xa0]*$/.test(e);
            }),
            (goog.string.internal.trim =
              goog.TRUSTED_SITE && String.prototype.trim
                ? function (e) {
                    return e.trim();
                  }
                : function (e) {
                    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1];
                  }),
            (goog.string.internal.caseInsensitiveCompare = function (e, t) {
              return (e = String(e).toLowerCase()) <
                (t = String(t).toLowerCase())
                ? -1
                : e == t
                ? 0
                : 1;
            }),
            (goog.string.internal.newLineToBr = function (e, t) {
              return e.replace(/(\r\n|\r|\n)/g, t ? "<br />" : "<br>");
            }),
            (goog.string.internal.htmlEscape = function (e, t) {
              if (t)
                e = e
                  .replace(goog.string.internal.AMP_RE_, "&amp;")
                  .replace(goog.string.internal.LT_RE_, "&lt;")
                  .replace(goog.string.internal.GT_RE_, "&gt;")
                  .replace(goog.string.internal.QUOT_RE_, "&quot;")
                  .replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;")
                  .replace(goog.string.internal.NULL_RE_, "&#0;");
              else {
                if (!goog.string.internal.ALL_RE_.test(e)) return e;
                -1 != e.indexOf("&") &&
                  (e = e.replace(goog.string.internal.AMP_RE_, "&amp;")),
                  -1 != e.indexOf("<") &&
                    (e = e.replace(goog.string.internal.LT_RE_, "&lt;")),
                  -1 != e.indexOf(">") &&
                    (e = e.replace(goog.string.internal.GT_RE_, "&gt;")),
                  -1 != e.indexOf('"') &&
                    (e = e.replace(goog.string.internal.QUOT_RE_, "&quot;")),
                  -1 != e.indexOf("'") &&
                    (e = e.replace(
                      goog.string.internal.SINGLE_QUOTE_RE_,
                      "&#39;"
                    )),
                  -1 != e.indexOf("\0") &&
                    (e = e.replace(goog.string.internal.NULL_RE_, "&#0;"));
              }
              return e;
            }),
            (goog.string.internal.AMP_RE_ = /&/g),
            (goog.string.internal.LT_RE_ = /</g),
            (goog.string.internal.GT_RE_ = />/g),
            (goog.string.internal.QUOT_RE_ = /"/g),
            (goog.string.internal.SINGLE_QUOTE_RE_ = /'/g),
            (goog.string.internal.NULL_RE_ = /\x00/g),
            (goog.string.internal.ALL_RE_ = /[\x00&<>"']/),
            (goog.string.internal.whitespaceEscape = function (e, t) {
              return goog.string.internal.newLineToBr(
                e.replace(/  /g, " &#160;"),
                t
              );
            }),
            (goog.string.internal.contains = function (e, t) {
              return -1 != e.indexOf(t);
            }),
            (goog.string.internal.caseInsensitiveContains = function (e, t) {
              return goog.string.internal.contains(
                e.toLowerCase(),
                t.toLowerCase()
              );
            }),
            (goog.string.internal.compareVersions = function (e, t) {
              var o = 0;
              (e = goog.string.internal.trim(String(e)).split(".")),
                (t = goog.string.internal.trim(String(t)).split("."));
              for (
                var r = Math.max(e.length, t.length), s = 0;
                0 == o && s < r;
                s++
              ) {
                var n = e[s] || "",
                  i = t[s] || "";
                do {
                  if (
                    ((n = /(\d*)(\D*)(.*)/.exec(n) || ["", "", "", ""]),
                    (i = /(\d*)(\D*)(.*)/.exec(i) || ["", "", "", ""]),
                    0 == n[0].length && 0 == i[0].length)
                  )
                    break;
                  o = 0 == n[1].length ? 0 : parseInt(n[1], 10);
                  var a = 0 == i[1].length ? 0 : parseInt(i[1], 10);
                  (o =
                    goog.string.internal.compareElements_(o, a) ||
                    goog.string.internal.compareElements_(
                      0 == n[2].length,
                      0 == i[2].length
                    ) ||
                    goog.string.internal.compareElements_(n[2], i[2])),
                    (n = n[3]),
                    (i = i[3]);
                } while (0 == o);
              }
              return o;
            }),
            (goog.string.internal.compareElements_ = function (e, t) {
              return e < t ? -1 : e > t ? 1 : 0;
            }),
            (goog.html.SafeUrl = function (e, t) {
              (this.privateDoNotAccessOrElseSafeUrlWrappedValue_ =
                (e === goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ && t) ||
                ""),
                (this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
                  goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_);
            }),
            (goog.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez"),
            (goog.html.SafeUrl.prototype.implementsGoogStringTypedString = !0),
            (goog.html.SafeUrl.prototype.getTypedStringValue = function () {
              return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString();
            }),
            (goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString =
              !0),
            (goog.html.SafeUrl.prototype.getDirection = function () {
              return goog.i18n.bidi.Dir.LTR;
            }),
            goog.DEBUG &&
              (goog.html.SafeUrl.prototype.toString = function () {
                return (
                  "SafeUrl{" +
                  this.privateDoNotAccessOrElseSafeUrlWrappedValue_ +
                  "}"
                );
              }),
            (goog.html.SafeUrl.unwrap = function (e) {
              return e instanceof goog.html.SafeUrl &&
                e.constructor === goog.html.SafeUrl &&
                e.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
                  goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
                ? e.privateDoNotAccessOrElseSafeUrlWrappedValue_
                : (goog.asserts.fail(
                    "expected object of type SafeUrl, got '" +
                      e +
                      "' of type " +
                      goog.typeOf(e)
                  ),
                  "type_error:SafeUrl");
            }),
            (goog.html.SafeUrl.fromConstant = function (e) {
              return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
                goog.string.Const.unwrap(e)
              );
            }),
            (goog.html.SAFE_MIME_TYPE_PATTERN_ =
              /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i),
            (goog.html.SafeUrl.isSafeMimeType = function (e) {
              return goog.html.SAFE_MIME_TYPE_PATTERN_.test(e);
            }),
            (goog.html.SafeUrl.fromBlob = function (e) {
              return (
                (e = goog.html.SafeUrl.isSafeMimeType(e.type)
                  ? goog.fs.url.createObjectUrl(e)
                  : goog.html.SafeUrl.INNOCUOUS_STRING),
                goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
                  e
                )
              );
            }),
            (goog.html.SafeUrl.fromMediaSource = function (e) {
              return (
                goog.asserts.assert(
                  "MediaSource" in goog.global,
                  "No support for MediaSource"
                ),
                (e =
                  e instanceof MediaSource
                    ? goog.fs.url.createObjectUrl(e)
                    : goog.html.SafeUrl.INNOCUOUS_STRING),
                goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
                  e
                )
              );
            }),
            (goog.html.DATA_URL_PATTERN_ =
              /^data:(.*);base64,[a-z0-9+\/]+=*$/i),
            (goog.html.SafeUrl.fromDataUrl = function (e) {
              var t = (e = e.replace(/(%0A|%0D)/g, "")).match(
                goog.html.DATA_URL_PATTERN_
              );
              return (
                (t = t && goog.html.SafeUrl.isSafeMimeType(t[1])),
                goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
                  t ? e : goog.html.SafeUrl.INNOCUOUS_STRING
                )
              );
            }),
            (goog.html.SafeUrl.fromTelUrl = function (e) {
              return (
                goog.string.internal.caseInsensitiveStartsWith(e, "tel:") ||
                  (e = goog.html.SafeUrl.INNOCUOUS_STRING),
                goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
                  e
                )
              );
            }),
            (goog.html.SIP_URL_PATTERN_ =
              /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i),
            (goog.html.SafeUrl.fromSipUrl = function (e) {
              return (
                goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(e)) ||
                  (e = goog.html.SafeUrl.INNOCUOUS_STRING),
                goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
                  e
                )
              );
            }),
            (goog.html.SafeUrl.fromFacebookMessengerUrl = function (e) {
              return (
                goog.string.internal.caseInsensitiveStartsWith(
                  e,
                  "fb-messenger://share"
                ) || (e = goog.html.SafeUrl.INNOCUOUS_STRING),
                goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
                  e
                )
              );
            }),
            (goog.html.SafeUrl.fromWhatsAppUrl = function (e) {
              return (
                goog.string.internal.caseInsensitiveStartsWith(
                  e,
                  "whatsapp://send"
                ) || (e = goog.html.SafeUrl.INNOCUOUS_STRING),
                goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
                  e
                )
              );
            }),
            (goog.html.SafeUrl.fromSmsUrl = function (e) {
              return (
                (goog.string.internal.caseInsensitiveStartsWith(e, "sms:") &&
                  goog.html.SafeUrl.isSmsUrlBodyValid_(e)) ||
                  (e = goog.html.SafeUrl.INNOCUOUS_STRING),
                goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
                  e
                )
              );
            }),
            (goog.html.SafeUrl.isSmsUrlBodyValid_ = function (e) {
              var t = e.indexOf("#");
              if (
                (0 < t && (e = e.substring(0, t)),
                !(t = e.match(/[?&]body=/gi)))
              )
                return !0;
              if (1 < t.length) return !1;
              if (!(e = e.match(/[?&]body=([^&]*)/)[1])) return !0;
              try {
                decodeURIComponent(e);
              } catch (e) {
                return !1;
              }
              return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(e);
            }),
            (goog.html.SafeUrl.fromSshUrl = function (e) {
              return (
                goog.string.internal.caseInsensitiveStartsWith(e, "ssh://") ||
                  (e = goog.html.SafeUrl.INNOCUOUS_STRING),
                goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
                  e
                )
              );
            }),
            (goog.html.SafeUrl.sanitizeChromeExtensionUrl = function (e, t) {
              return goog.html.SafeUrl.sanitizeExtensionUrl_(
                /^chrome-extension:\/\/([^\/]+)\//,
                e,
                t
              );
            }),
            (goog.html.SafeUrl.sanitizeFirefoxExtensionUrl = function (e, t) {
              return goog.html.SafeUrl.sanitizeExtensionUrl_(
                /^moz-extension:\/\/([^\/]+)\//,
                e,
                t
              );
            }),
            (goog.html.SafeUrl.sanitizeEdgeExtensionUrl = function (e, t) {
              return goog.html.SafeUrl.sanitizeExtensionUrl_(
                /^ms-browser-extension:\/\/([^\/]+)\//,
                e,
                t
              );
            }),
            (goog.html.SafeUrl.sanitizeExtensionUrl_ = function (e, t, o) {
              return (
                (e = e.exec(t))
                  ? ((e = e[1]),
                    -1 ==
                      (o instanceof goog.string.Const
                        ? [goog.string.Const.unwrap(o)]
                        : o.map(function (e) {
                            return goog.string.Const.unwrap(e);
                          })
                      ).indexOf(e) && (t = goog.html.SafeUrl.INNOCUOUS_STRING))
                  : (t = goog.html.SafeUrl.INNOCUOUS_STRING),
                goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
                  t
                )
              );
            }),
            (goog.html.SafeUrl.fromTrustedResourceUrl = function (e) {
              return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
                goog.html.TrustedResourceUrl.unwrap(e)
              );
            }),
            (goog.html.SAFE_URL_PATTERN_ =
              /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i),
            (goog.html.SafeUrl.SAFE_URL_PATTERN = goog.html.SAFE_URL_PATTERN_),
            (goog.html.SafeUrl.sanitize = function (e) {
              return e instanceof goog.html.SafeUrl
                ? e
                : ((e =
                    "object" == typeof e && e.implementsGoogStringTypedString
                      ? e.getTypedStringValue()
                      : String(e)),
                  goog.html.SAFE_URL_PATTERN_.test(e) ||
                    (e = goog.html.SafeUrl.INNOCUOUS_STRING),
                  goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
                    e
                  ));
            }),
            (goog.html.SafeUrl.sanitizeAssertUnchanged = function (e, t) {
              return e instanceof goog.html.SafeUrl
                ? e
                : ((e =
                    "object" == typeof e && e.implementsGoogStringTypedString
                      ? e.getTypedStringValue()
                      : String(e)),
                  t &&
                  /^data:/i.test(e) &&
                  (t =
                    goog.html.SafeUrl.fromDataUrl(e)).getTypedStringValue() == e
                    ? t
                    : (goog.asserts.assert(
                        goog.html.SAFE_URL_PATTERN_.test(e),
                        "%s does not match the safe URL pattern",
                        e
                      ) || (e = goog.html.SafeUrl.INNOCUOUS_STRING),
                      goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
                        e
                      )));
            }),
            (goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
            (goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse =
              function (e) {
                return new goog.html.SafeUrl(
                  goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_,
                  e
                );
              }),
            (goog.html.SafeUrl.ABOUT_BLANK =
              goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
                "about:blank"
              )),
            (goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {}),
            (goog.html.SafeStyle = function () {
              (this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = ""),
                (this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
                  goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_);
            }),
            (goog.html.SafeStyle.prototype.implementsGoogStringTypedString =
              !0),
            (goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
            (goog.html.SafeStyle.fromConstant = function (e) {
              return 0 === (e = goog.string.Const.unwrap(e)).length
                ? goog.html.SafeStyle.EMPTY
                : (goog.asserts.assert(
                    goog.string.internal.endsWith(e, ";"),
                    "Last character of style string is not ';': " + e
                  ),
                  goog.asserts.assert(
                    goog.string.internal.contains(e, ":"),
                    "Style string must contain at least one ':', to specify a \"name: value\" pair: " +
                      e
                  ),
                  goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(
                    e
                  ));
            }),
            (goog.html.SafeStyle.prototype.getTypedStringValue = function () {
              return this.privateDoNotAccessOrElseSafeStyleWrappedValue_;
            }),
            goog.DEBUG &&
              (goog.html.SafeStyle.prototype.toString = function () {
                return (
                  "SafeStyle{" +
                  this.privateDoNotAccessOrElseSafeStyleWrappedValue_ +
                  "}"
                );
              }),
            (goog.html.SafeStyle.unwrap = function (e) {
              return e instanceof goog.html.SafeStyle &&
                e.constructor === goog.html.SafeStyle &&
                e.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
                  goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
                ? e.privateDoNotAccessOrElseSafeStyleWrappedValue_
                : (goog.asserts.fail(
                    "expected object of type SafeStyle, got '" +
                      e +
                      "' of type " +
                      goog.typeOf(e)
                  ),
                  "type_error:SafeStyle");
            }),
            (goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse =
              function (e) {
                return new goog.html.SafeStyle().initSecurityPrivateDoNotAccessOrElse_(
                  e
                );
              }),
            (goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_ =
              function (e) {
                return (
                  (this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = e),
                  this
                );
              }),
            (goog.html.SafeStyle.EMPTY =
              goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(
                ""
              )),
            (goog.html.SafeStyle.INNOCUOUS_STRING = "zClosurez"),
            (goog.html.SafeStyle.create = function (e) {
              var t,
                o = "";
              for (t in e) {
                if (!/^[-_a-zA-Z0-9]+$/.test(t))
                  throw Error("Name allows only [-_a-zA-Z0-9], got: " + t);
                var r = e[t];
                null != r &&
                  (o +=
                    t +
                    ":" +
                    (r = Array.isArray(r)
                      ? goog.array
                          .map(r, goog.html.SafeStyle.sanitizePropertyValue_)
                          .join(" ")
                      : goog.html.SafeStyle.sanitizePropertyValue_(r)) +
                    ";");
              }
              return o
                ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(
                    o
                  )
                : goog.html.SafeStyle.EMPTY;
            }),
            (goog.html.SafeStyle.sanitizePropertyValue_ = function (e) {
              if (e instanceof goog.html.SafeUrl)
                return (
                  'url("' +
                  goog.html.SafeUrl.unwrap(e)
                    .replace(/</g, "%3c")
                    .replace(/[\\"]/g, "\\$&") +
                  '")'
                );
              if (
                ((e =
                  e instanceof goog.string.Const
                    ? goog.string.Const.unwrap(e)
                    : goog.html.SafeStyle.sanitizePropertyValueString_(
                        String(e)
                      )),
                /[{;}]/.test(e))
              )
                throw new goog.asserts.AssertionError(
                  "Value does not allow [{;}], got: %s.",
                  [e]
                );
              return e;
            }),
            (goog.html.SafeStyle.sanitizePropertyValueString_ = function (e) {
              var t = e
                .replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1")
                .replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1")
                .replace(goog.html.SafeStyle.URL_RE_, "url");
              return goog.html.SafeStyle.VALUE_RE_.test(t)
                ? goog.html.SafeStyle.COMMENT_RE_.test(e)
                  ? (goog.asserts.fail(
                      "String value disallows comments, got: " + e
                    ),
                    goog.html.SafeStyle.INNOCUOUS_STRING)
                  : goog.html.SafeStyle.hasBalancedQuotes_(e)
                  ? goog.html.SafeStyle.hasBalancedSquareBrackets_(e)
                    ? goog.html.SafeStyle.sanitizeUrl_(e)
                    : (goog.asserts.fail(
                        "String value requires balanced square brackets and one identifier per pair of brackets, got: " +
                          e
                      ),
                      goog.html.SafeStyle.INNOCUOUS_STRING)
                  : (goog.asserts.fail(
                      "String value requires balanced quotes, got: " + e
                    ),
                    goog.html.SafeStyle.INNOCUOUS_STRING)
                : (goog.asserts.fail(
                    "String value allows only " +
                      goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ +
                      " and simple functions, got: " +
                      e
                  ),
                  goog.html.SafeStyle.INNOCUOUS_STRING);
            }),
            (goog.html.SafeStyle.hasBalancedQuotes_ = function (e) {
              for (var t = !0, o = !0, r = 0; r < e.length; r++) {
                var s = e.charAt(r);
                "'" == s && o ? (t = !t) : '"' == s && t && (o = !o);
              }
              return t && o;
            }),
            (goog.html.SafeStyle.hasBalancedSquareBrackets_ = function (e) {
              for (
                var t = !0, o = /^[-_a-zA-Z0-9]$/, r = 0;
                r < e.length;
                r++
              ) {
                var s = e.charAt(r);
                if ("]" == s) {
                  if (t) return !1;
                  t = !0;
                } else if ("[" == s) {
                  if (!t) return !1;
                  t = !1;
                } else if (!t && !o.test(s)) return !1;
              }
              return t;
            }),
            (goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ =
              "[-,.\"'%_!# a-zA-Z0-9\\[\\]]"),
            (goog.html.SafeStyle.VALUE_RE_ = new RegExp(
              "^" + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + "+$"
            )),
            (goog.html.SafeStyle.URL_RE_ =
              /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g),
            (goog.html.SafeStyle.ALLOWED_FUNCTIONS_ =
              "calc cubic-bezier fit-content hsl hsla linear-gradient matrix minmax repeat rgb rgba (rotate|scale|translate)(X|Y|Z|3d)?".split(
                " "
              )),
            (goog.html.SafeStyle.FUNCTIONS_RE_ = new RegExp(
              "\\b(" +
                goog.html.SafeStyle.ALLOWED_FUNCTIONS_.join("|") +
                ")\\([-+*/0-9a-z.%\\[\\], ]+\\)",
              "g"
            )),
            (goog.html.SafeStyle.COMMENT_RE_ = /\/\*/),
            (goog.html.SafeStyle.sanitizeUrl_ = function (e) {
              return e.replace(
                goog.html.SafeStyle.URL_RE_,
                function (e, t, o, r) {
                  var s = "";
                  return (
                    (o = o.replace(/^(['"])(.*)\1$/, function (e, t, o) {
                      return (s = t), o;
                    })),
                    (e = goog.html.SafeUrl.sanitize(o).getTypedStringValue()),
                    t + s + e + s + r
                  );
                }
              );
            }),
            (goog.html.SafeStyle.concat = function (e) {
              var t = "",
                o = function (e) {
                  Array.isArray(e)
                    ? goog.array.forEach(e, o)
                    : (t += goog.html.SafeStyle.unwrap(e));
                };
              return (
                goog.array.forEach(arguments, o),
                t
                  ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(
                      t
                    )
                  : goog.html.SafeStyle.EMPTY
              );
            }),
            (goog.html.SafeStyleSheet = function () {
              (this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = ""),
                (this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
                  goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_);
            }),
            (goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString =
              !0),
            (goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
              {}),
            (goog.html.SafeStyleSheet.createRule = function (e, t) {
              if (goog.string.internal.contains(e, "<"))
                throw Error("Selector does not allow '<', got: " + e);
              var o = e.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
              if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(o))
                throw Error(
                  "Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " +
                    e
                );
              if (!goog.html.SafeStyleSheet.hasBalancedBrackets_(o))
                throw Error(
                  "() and [] in selector must be balanced, got: " + e
                );
              return (
                t instanceof goog.html.SafeStyle ||
                  (t = goog.html.SafeStyle.create(t)),
                (e =
                  e +
                  "{" +
                  goog.html.SafeStyle.unwrap(t).replace(/</g, "\\3C ") +
                  "}"),
                goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
                  e
                )
              );
            }),
            (goog.html.SafeStyleSheet.hasBalancedBrackets_ = function (e) {
              for (
                var t = { "(": ")", "[": "]" }, o = [], r = 0;
                r < e.length;
                r++
              ) {
                var s = e[r];
                if (t[s]) o.push(t[s]);
                else if (goog.object.contains(t, s) && o.pop() != s) return !1;
              }
              return 0 == o.length;
            }),
            (goog.html.SafeStyleSheet.concat = function (e) {
              var t = "",
                o = function (e) {
                  Array.isArray(e)
                    ? goog.array.forEach(e, o)
                    : (t += goog.html.SafeStyleSheet.unwrap(e));
                };
              return (
                goog.array.forEach(arguments, o),
                goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
                  t
                )
              );
            }),
            (goog.html.SafeStyleSheet.fromConstant = function (e) {
              return 0 === (e = goog.string.Const.unwrap(e)).length
                ? goog.html.SafeStyleSheet.EMPTY
                : (goog.asserts.assert(
                    !goog.string.internal.contains(e, "<"),
                    "Forbidden '<' character in style sheet string: " + e
                  ),
                  goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
                    e
                  ));
            }),
            (goog.html.SafeStyleSheet.prototype.getTypedStringValue =
              function () {
                return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
              }),
            goog.DEBUG &&
              (goog.html.SafeStyleSheet.prototype.toString = function () {
                return (
                  "SafeStyleSheet{" +
                  this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ +
                  "}"
                );
              }),
            (goog.html.SafeStyleSheet.unwrap = function (e) {
              return e instanceof goog.html.SafeStyleSheet &&
                e.constructor === goog.html.SafeStyleSheet &&
                e.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
                  goog.html.SafeStyleSheet
                    .TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
                ? e.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_
                : (goog.asserts.fail(
                    "expected object of type SafeStyleSheet, got '" +
                      e +
                      "' of type " +
                      goog.typeOf(e)
                  ),
                  "type_error:SafeStyleSheet");
            }),
            (goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse =
              function (e) {
                return new goog.html.SafeStyleSheet().initSecurityPrivateDoNotAccessOrElse_(
                  e
                );
              }),
            (goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ =
              function (e) {
                return (
                  (this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ =
                    e),
                  this
                );
              }),
            (goog.html.SafeStyleSheet.EMPTY =
              goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
                ""
              )),
            (goog.labs = {}),
            (goog.labs.userAgent = {}),
            (goog.labs.userAgent.util = {}),
            (goog.labs.userAgent.util.getNativeUserAgentString_ = function () {
              var e = goog.labs.userAgent.util.getNavigator_();
              return e && (e = e.userAgent) ? e : "";
            }),
            (goog.labs.userAgent.util.getNavigator_ = function () {
              return goog.global.navigator;
            }),
            (goog.labs.userAgent.util.userAgent_ =
              goog.labs.userAgent.util.getNativeUserAgentString_()),
            (goog.labs.userAgent.util.setUserAgent = function (e) {
              goog.labs.userAgent.util.userAgent_ =
                e || goog.labs.userAgent.util.getNativeUserAgentString_();
            }),
            (goog.labs.userAgent.util.getUserAgent = function () {
              return goog.labs.userAgent.util.userAgent_;
            }),
            (goog.labs.userAgent.util.matchUserAgent = function (e) {
              var t = goog.labs.userAgent.util.getUserAgent();
              return goog.string.internal.contains(t, e);
            }),
            (goog.labs.userAgent.util.matchUserAgentIgnoreCase = function (e) {
              var t = goog.labs.userAgent.util.getUserAgent();
              return goog.string.internal.caseInsensitiveContains(t, e);
            }),
            (goog.labs.userAgent.util.extractVersionTuples = function (e) {
              for (
                var t, o = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, r = [];
                (t = o.exec(e));

              )
                r.push([t[1], t[2], t[3] || void 0]);
              return r;
            }),
            (goog.labs.userAgent.browser = {}),
            (goog.labs.userAgent.browser.matchOpera_ = function () {
              return goog.labs.userAgent.util.matchUserAgent("Opera");
            }),
            (goog.labs.userAgent.browser.matchIE_ = function () {
              return (
                goog.labs.userAgent.util.matchUserAgent("Trident") ||
                goog.labs.userAgent.util.matchUserAgent("MSIE")
              );
            }),
            (goog.labs.userAgent.browser.matchEdgeHtml_ = function () {
              return goog.labs.userAgent.util.matchUserAgent("Edge");
            }),
            (goog.labs.userAgent.browser.matchEdgeChromium_ = function () {
              return goog.labs.userAgent.util.matchUserAgent("Edg/");
            }),
            (goog.labs.userAgent.browser.matchOperaChromium_ = function () {
              return goog.labs.userAgent.util.matchUserAgent("OPR");
            }),
            (goog.labs.userAgent.browser.matchFirefox_ = function () {
              return (
                goog.labs.userAgent.util.matchUserAgent("Firefox") ||
                goog.labs.userAgent.util.matchUserAgent("FxiOS")
              );
            }),
            (goog.labs.userAgent.browser.matchSafari_ = function () {
              return (
                goog.labs.userAgent.util.matchUserAgent("Safari") &&
                !(
                  goog.labs.userAgent.browser.matchChrome_() ||
                  goog.labs.userAgent.browser.matchCoast_() ||
                  goog.labs.userAgent.browser.matchOpera_() ||
                  goog.labs.userAgent.browser.matchEdgeHtml_() ||
                  goog.labs.userAgent.browser.matchEdgeChromium_() ||
                  goog.labs.userAgent.browser.matchOperaChromium_() ||
                  goog.labs.userAgent.browser.matchFirefox_() ||
                  goog.labs.userAgent.browser.isSilk() ||
                  goog.labs.userAgent.util.matchUserAgent("Android")
                )
              );
            }),
            (goog.labs.userAgent.browser.matchCoast_ = function () {
              return goog.labs.userAgent.util.matchUserAgent("Coast");
            }),
            (goog.labs.userAgent.browser.matchIosWebview_ = function () {
              return (
                (goog.labs.userAgent.util.matchUserAgent("iPad") ||
                  goog.labs.userAgent.util.matchUserAgent("iPhone")) &&
                !goog.labs.userAgent.browser.matchSafari_() &&
                !goog.labs.userAgent.browser.matchChrome_() &&
                !goog.labs.userAgent.browser.matchCoast_() &&
                !goog.labs.userAgent.browser.matchFirefox_() &&
                goog.labs.userAgent.util.matchUserAgent("AppleWebKit")
              );
            }),
            (goog.labs.userAgent.browser.matchChrome_ = function () {
              return (
                (goog.labs.userAgent.util.matchUserAgent("Chrome") ||
                  goog.labs.userAgent.util.matchUserAgent("CriOS")) &&
                !goog.labs.userAgent.browser.matchEdgeHtml_()
              );
            }),
            (goog.labs.userAgent.browser.matchAndroidBrowser_ = function () {
              return (
                goog.labs.userAgent.util.matchUserAgent("Android") &&
                !(
                  goog.labs.userAgent.browser.isChrome() ||
                  goog.labs.userAgent.browser.isFirefox() ||
                  goog.labs.userAgent.browser.isOpera() ||
                  goog.labs.userAgent.browser.isSilk()
                )
              );
            }),
            (goog.labs.userAgent.browser.isOpera =
              goog.labs.userAgent.browser.matchOpera_),
            (goog.labs.userAgent.browser.isIE =
              goog.labs.userAgent.browser.matchIE_),
            (goog.labs.userAgent.browser.isEdge =
              goog.labs.userAgent.browser.matchEdgeHtml_),
            (goog.labs.userAgent.browser.isEdgeChromium =
              goog.labs.userAgent.browser.matchEdgeChromium_),
            (goog.labs.userAgent.browser.isOperaChromium =
              goog.labs.userAgent.browser.matchOperaChromium_),
            (goog.labs.userAgent.browser.isFirefox =
              goog.labs.userAgent.browser.matchFirefox_),
            (goog.labs.userAgent.browser.isSafari =
              goog.labs.userAgent.browser.matchSafari_),
            (goog.labs.userAgent.browser.isCoast =
              goog.labs.userAgent.browser.matchCoast_),
            (goog.labs.userAgent.browser.isIosWebview =
              goog.labs.userAgent.browser.matchIosWebview_),
            (goog.labs.userAgent.browser.isChrome =
              goog.labs.userAgent.browser.matchChrome_),
            (goog.labs.userAgent.browser.isAndroidBrowser =
              goog.labs.userAgent.browser.matchAndroidBrowser_),
            (goog.labs.userAgent.browser.isSilk = function () {
              return goog.labs.userAgent.util.matchUserAgent("Silk");
            }),
            (goog.labs.userAgent.browser.getVersion = function () {
              function e(e) {
                return (e = goog.array.find(e, r)), o[e] || "";
              }
              var t = goog.labs.userAgent.util.getUserAgent();
              if (goog.labs.userAgent.browser.isIE())
                return goog.labs.userAgent.browser.getIEVersion_(t);
              t = goog.labs.userAgent.util.extractVersionTuples(t);
              var o = {};
              goog.array.forEach(t, function (e) {
                o[e[0]] = e[1];
              });
              var r = goog.partial(goog.object.containsKey, o);
              return goog.labs.userAgent.browser.isOpera()
                ? e(["Version", "Opera"])
                : goog.labs.userAgent.browser.isEdge()
                ? e(["Edge"])
                : goog.labs.userAgent.browser.isEdgeChromium()
                ? e(["Edg"])
                : goog.labs.userAgent.browser.isChrome()
                ? e(["Chrome", "CriOS", "HeadlessChrome"])
                : ((t = t[2]) && t[1]) || "";
            }),
            (goog.labs.userAgent.browser.isVersionOrHigher = function (e) {
              return (
                0 <=
                goog.string.internal.compareVersions(
                  goog.labs.userAgent.browser.getVersion(),
                  e
                )
              );
            }),
            (goog.labs.userAgent.browser.getIEVersion_ = function (e) {
              var t = /rv: *([\d\.]*)/.exec(e);
              if (t && t[1]) return t[1];
              t = "";
              var o = /MSIE +([\d\.]+)/.exec(e);
              if (o && o[1])
                if (((e = /Trident\/(\d.\d)/.exec(e)), "7.0" == o[1]))
                  if (e && e[1])
                    switch (e[1]) {
                      case "4.0":
                        t = "8.0";
                        break;
                      case "5.0":
                        t = "9.0";
                        break;
                      case "6.0":
                        t = "10.0";
                        break;
                      case "7.0":
                        t = "11.0";
                    }
                  else t = "7.0";
                else t = o[1];
              return t;
            }),
            (goog.html.SafeHtml = function () {
              (this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = ""),
                (this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
                  goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_),
                (this.dir_ = null);
            }),
            (goog.html.SafeHtml.ENABLE_ERROR_MESSAGES = goog.DEBUG),
            (goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE = !0),
            (goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString =
              !0),
            (goog.html.SafeHtml.prototype.getDirection = function () {
              return this.dir_;
            }),
            (goog.html.SafeHtml.prototype.implementsGoogStringTypedString = !0),
            (goog.html.SafeHtml.prototype.getTypedStringValue = function () {
              return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
            }),
            goog.DEBUG &&
              (goog.html.SafeHtml.prototype.toString = function () {
                return (
                  "SafeHtml{" +
                  this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ +
                  "}"
                );
              }),
            (goog.html.SafeHtml.unwrap = function (e) {
              return goog.html.SafeHtml.unwrapTrustedHTML(e).toString();
            }),
            (goog.html.SafeHtml.unwrapTrustedHTML = function (e) {
              return e instanceof goog.html.SafeHtml &&
                e.constructor === goog.html.SafeHtml &&
                e.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
                  goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
                ? e.privateDoNotAccessOrElseSafeHtmlWrappedValue_
                : (goog.asserts.fail(
                    "expected object of type SafeHtml, got '" +
                      e +
                      "' of type " +
                      goog.typeOf(e)
                  ),
                  "type_error:SafeHtml");
            }),
            (goog.html.SafeHtml.htmlEscape = function (e) {
              if (e instanceof goog.html.SafeHtml) return e;
              var t = "object" == typeof e,
                o = null;
              return (
                t &&
                  e.implementsGoogI18nBidiDirectionalString &&
                  (o = e.getDirection()),
                (e =
                  t && e.implementsGoogStringTypedString
                    ? e.getTypedStringValue()
                    : String(e)),
                goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
                  goog.string.internal.htmlEscape(e),
                  o
                )
              );
            }),
            (goog.html.SafeHtml.htmlEscapePreservingNewlines = function (e) {
              return e instanceof goog.html.SafeHtml
                ? e
                : ((e = goog.html.SafeHtml.htmlEscape(e)),
                  goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
                    goog.string.internal.newLineToBr(
                      goog.html.SafeHtml.unwrap(e)
                    ),
                    e.getDirection()
                  ));
            }),
            (goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces =
              function (e) {
                return e instanceof goog.html.SafeHtml
                  ? e
                  : ((e = goog.html.SafeHtml.htmlEscape(e)),
                    goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
                      goog.string.internal.whitespaceEscape(
                        goog.html.SafeHtml.unwrap(e)
                      ),
                      e.getDirection()
                    ));
              }),
            (goog.html.SafeHtml.from = goog.html.SafeHtml.htmlEscape),
            (goog.html.SafeHtml.comment = function (e) {
              return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
                "\x3c!--" + goog.string.internal.htmlEscape(e) + "--\x3e",
                null
              );
            }),
            (goog.html.SafeHtml.VALID_NAMES_IN_TAG_ = /^[a-zA-Z0-9-]+$/),
            (goog.html.SafeHtml.URL_ATTRIBUTES_ = {
              action: !0,
              cite: !0,
              data: !0,
              formaction: !0,
              href: !0,
              manifest: !0,
              poster: !0,
              src: !0,
            }),
            (goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_ = {
              APPLET: !0,
              BASE: !0,
              EMBED: !0,
              IFRAME: !0,
              LINK: !0,
              MATH: !0,
              META: !0,
              OBJECT: !0,
              SCRIPT: !0,
              STYLE: !0,
              SVG: !0,
              TEMPLATE: !0,
            }),
            (goog.html.SafeHtml.create = function (e, t, o) {
              return (
                goog.html.SafeHtml.verifyTagName(String(e)),
                goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
                  String(e),
                  t,
                  o
                )
              );
            }),
            (goog.html.SafeHtml.verifyTagName = function (e) {
              if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(e))
                throw Error(
                  goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                    ? "Invalid tag name <" + e + ">."
                    : ""
                );
              if (e.toUpperCase() in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_)
                throw Error(
                  goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                    ? "Tag name <" + e + "> is not allowed for SafeHtml."
                    : ""
                );
            }),
            (goog.html.SafeHtml.createIframe = function (e, t, o, r) {
              e && goog.html.TrustedResourceUrl.unwrap(e);
              var s = {};
              return (
                (s.src = e || null),
                (s.srcdoc = t && goog.html.SafeHtml.unwrap(t)),
                (e = goog.html.SafeHtml.combineAttributes(
                  s,
                  { sandbox: "" },
                  o
                )),
                goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
                  "iframe",
                  e,
                  r
                )
              );
            }),
            (goog.html.SafeHtml.createSandboxIframe = function (e, t, o, r) {
              if (!goog.html.SafeHtml.canUseSandboxIframe())
                throw Error(
                  goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                    ? "The browser does not support sandboxed iframes."
                    : ""
                );
              var s = {};
              return (
                (s.src = e
                  ? goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(e))
                  : null),
                (s.srcdoc = t || null),
                (s.sandbox = ""),
                (e = goog.html.SafeHtml.combineAttributes(s, {}, o)),
                goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
                  "iframe",
                  e,
                  r
                )
              );
            }),
            (goog.html.SafeHtml.canUseSandboxIframe = function () {
              return (
                goog.global.HTMLIFrameElement &&
                "sandbox" in goog.global.HTMLIFrameElement.prototype
              );
            }),
            (goog.html.SafeHtml.createScriptSrc = function (e, t) {
              return (
                goog.html.TrustedResourceUrl.unwrap(e),
                (e = goog.html.SafeHtml.combineAttributes({ src: e }, {}, t)),
                goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
                  "script",
                  e
                )
              );
            }),
            (goog.html.SafeHtml.createScript = function (e, t) {
              for (var o in t) {
                var r = o.toLowerCase();
                if ("language" == r || "src" == r || "text" == r || "type" == r)
                  throw Error(
                    goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                      ? 'Cannot set "' + r + '" attribute'
                      : ""
                  );
              }
              for (o = "", e = goog.array.concat(e), r = 0; r < e.length; r++)
                o += goog.html.SafeScript.unwrap(e[r]);
              return (
                (e =
                  goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
                    o,
                    goog.i18n.bidi.Dir.NEUTRAL
                  )),
                goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
                  "script",
                  t,
                  e
                )
              );
            }),
            (goog.html.SafeHtml.createStyle = function (e, t) {
              t = goog.html.SafeHtml.combineAttributes(
                { type: "text/css" },
                {},
                t
              );
              var o = "";
              e = goog.array.concat(e);
              for (var r = 0; r < e.length; r++)
                o += goog.html.SafeStyleSheet.unwrap(e[r]);
              return (
                (e =
                  goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
                    o,
                    goog.i18n.bidi.Dir.NEUTRAL
                  )),
                goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
                  "style",
                  t,
                  e
                )
              );
            }),
            (goog.html.SafeHtml.createMetaRefresh = function (e, t) {
              return (
                (e = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(e))),
                (goog.labs.userAgent.browser.isIE() ||
                  goog.labs.userAgent.browser.isEdge()) &&
                  goog.string.internal.contains(e, ";") &&
                  (e = "'" + e.replace(/'/g, "%27") + "'"),
                goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
                  "meta",
                  { "http-equiv": "refresh", content: (t || 0) + "; url=" + e }
                )
              );
            }),
            (goog.html.SafeHtml.getAttrNameAndValue_ = function (e, t, o) {
              if (o instanceof goog.string.Const)
                o = goog.string.Const.unwrap(o);
              else if ("style" == t.toLowerCase()) {
                if (!goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE)
                  throw Error(
                    goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                      ? 'Attribute "style" not supported.'
                      : ""
                  );
                o = goog.html.SafeHtml.getStyleValue_(o);
              } else {
                if (/^on/i.test(t))
                  throw Error(
                    goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                      ? 'Attribute "' +
                          t +
                          '" requires goog.string.Const value, "' +
                          o +
                          '" given.'
                      : ""
                  );
                if (t.toLowerCase() in goog.html.SafeHtml.URL_ATTRIBUTES_)
                  if (o instanceof goog.html.TrustedResourceUrl)
                    o = goog.html.TrustedResourceUrl.unwrap(o);
                  else if (o instanceof goog.html.SafeUrl)
                    o = goog.html.SafeUrl.unwrap(o);
                  else {
                    if ("string" != typeof o)
                      throw Error(
                        goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                          ? 'Attribute "' +
                              t +
                              '" on tag "' +
                              e +
                              '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' +
                              o +
                              '" given.'
                          : ""
                      );
                    o = goog.html.SafeUrl.sanitize(o).getTypedStringValue();
                  }
              }
              return (
                o.implementsGoogStringTypedString &&
                  (o = o.getTypedStringValue()),
                goog.asserts.assert(
                  "string" == typeof o || "number" == typeof o,
                  "String or number value expected, got " +
                    typeof o +
                    " with value: " +
                    o
                ),
                t + '="' + goog.string.internal.htmlEscape(String(o)) + '"'
              );
            }),
            (goog.html.SafeHtml.getStyleValue_ = function (e) {
              if (!goog.isObject(e))
                throw Error(
                  goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                    ? 'The "style" attribute requires goog.html.SafeStyle or map of style properties, ' +
                        typeof e +
                        " given: " +
                        e
                    : ""
                );
              return (
                e instanceof goog.html.SafeStyle ||
                  (e = goog.html.SafeStyle.create(e)),
                goog.html.SafeStyle.unwrap(e)
              );
            }),
            (goog.html.SafeHtml.createWithDir = function (e, t, o, r) {
              return ((t = goog.html.SafeHtml.create(t, o, r)).dir_ = e), t;
            }),
            (goog.html.SafeHtml.join = function (e, t) {
              var o = (e = goog.html.SafeHtml.htmlEscape(e)).getDirection(),
                r = [],
                s = function (e) {
                  Array.isArray(e)
                    ? goog.array.forEach(e, s)
                    : ((e = goog.html.SafeHtml.htmlEscape(e)),
                      r.push(goog.html.SafeHtml.unwrap(e)),
                      (e = e.getDirection()),
                      o == goog.i18n.bidi.Dir.NEUTRAL
                        ? (o = e)
                        : e != goog.i18n.bidi.Dir.NEUTRAL &&
                          o != e &&
                          (o = null));
                };
              return (
                goog.array.forEach(t, s),
                goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
                  r.join(goog.html.SafeHtml.unwrap(e)),
                  o
                )
              );
            }),
            (goog.html.SafeHtml.concat = function (e) {
              return goog.html.SafeHtml.join(
                goog.html.SafeHtml.EMPTY,
                Array.prototype.slice.call(arguments)
              );
            }),
            (goog.html.SafeHtml.concatWithDir = function (e, t) {
              var o = goog.html.SafeHtml.concat(goog.array.slice(arguments, 1));
              return (o.dir_ = e), o;
            }),
            (goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
            (goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse =
              function (e, t) {
                return new goog.html.SafeHtml().initSecurityPrivateDoNotAccessOrElse_(
                  e,
                  t
                );
              }),
            (goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_ =
              function (e, t) {
                return (
                  (this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = goog
                    .html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY
                    ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(
                        e
                      )
                    : e),
                  (this.dir_ = t),
                  this
                );
              }),
            (goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse =
              function (e, t, o) {
                var r = null,
                  s = "<" + e + goog.html.SafeHtml.stringifyAttributes(e, t);
                return (
                  null == o ? (o = []) : Array.isArray(o) || (o = [o]),
                  goog.dom.tags.isVoidTag(e.toLowerCase())
                    ? (goog.asserts.assert(
                        !o.length,
                        "Void tag <" + e + "> does not allow content."
                      ),
                      (s += ">"))
                    : ((r = goog.html.SafeHtml.concat(o)),
                      (s +=
                        ">" + goog.html.SafeHtml.unwrap(r) + "</" + e + ">"),
                      (r = r.getDirection())),
                  (e = t && t.dir) &&
                    (r = /^(ltr|rtl|auto)$/i.test(e)
                      ? goog.i18n.bidi.Dir.NEUTRAL
                      : null),
                  goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
                    s,
                    r
                  )
                );
              }),
            (goog.html.SafeHtml.stringifyAttributes = function (e, t) {
              var o = "";
              if (t)
                for (var r in t) {
                  if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(r))
                    throw Error(
                      goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                        ? 'Invalid attribute name "' + r + '".'
                        : ""
                    );
                  var s = t[r];
                  null != s &&
                    (o +=
                      " " + goog.html.SafeHtml.getAttrNameAndValue_(e, r, s));
                }
              return o;
            }),
            (goog.html.SafeHtml.combineAttributes = function (e, t, o) {
              var r,
                s = {};
              for (r in e)
                goog.asserts.assert(r.toLowerCase() == r, "Must be lower case"),
                  (s[r] = e[r]);
              for (r in t)
                goog.asserts.assert(r.toLowerCase() == r, "Must be lower case"),
                  (s[r] = t[r]);
              if (o)
                for (r in o) {
                  var n = r.toLowerCase();
                  if (n in e)
                    throw Error(
                      goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                        ? 'Cannot override "' +
                            n +
                            '" attribute, got "' +
                            r +
                            '" with value "' +
                            o[r] +
                            '"'
                        : ""
                    );
                  n in t && delete s[n], (s[r] = o[r]);
                }
              return s;
            }),
            (goog.html.SafeHtml.DOCTYPE_HTML =
              goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
                "<!DOCTYPE html>",
                goog.i18n.bidi.Dir.NEUTRAL
              )),
            (goog.html.SafeHtml.EMPTY =
              goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
                "",
                goog.i18n.bidi.Dir.NEUTRAL
              )),
            (goog.html.SafeHtml.BR =
              goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
                "<br>",
                goog.i18n.bidi.Dir.NEUTRAL
              )),
            (goog.html.uncheckedconversions = {}),
            (goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract =
              function (e, t, o) {
                return (
                  goog.asserts.assertString(
                    goog.string.Const.unwrap(e),
                    "must provide justification"
                  ),
                  goog.asserts.assert(
                    !goog.string.internal.isEmptyOrWhitespace(
                      goog.string.Const.unwrap(e)
                    ),
                    "must provide non-empty justification"
                  ),
                  goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
                    t,
                    o || null
                  )
                );
              }),
            (goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract =
              function (e, t) {
                return (
                  goog.asserts.assertString(
                    goog.string.Const.unwrap(e),
                    "must provide justification"
                  ),
                  goog.asserts.assert(
                    !goog.string.internal.isEmptyOrWhitespace(
                      goog.string.Const.unwrap(e)
                    ),
                    "must provide non-empty justification"
                  ),
                  goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
                    t
                  )
                );
              }),
            (goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract =
              function (e, t) {
                return (
                  goog.asserts.assertString(
                    goog.string.Const.unwrap(e),
                    "must provide justification"
                  ),
                  goog.asserts.assert(
                    !goog.string.internal.isEmptyOrWhitespace(
                      goog.string.Const.unwrap(e)
                    ),
                    "must provide non-empty justification"
                  ),
                  goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(
                    t
                  )
                );
              }),
            (goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract =
              function (e, t) {
                return (
                  goog.asserts.assertString(
                    goog.string.Const.unwrap(e),
                    "must provide justification"
                  ),
                  goog.asserts.assert(
                    !goog.string.internal.isEmptyOrWhitespace(
                      goog.string.Const.unwrap(e)
                    ),
                    "must provide non-empty justification"
                  ),
                  goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
                    t
                  )
                );
              }),
            (goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract =
              function (e, t) {
                return (
                  goog.asserts.assertString(
                    goog.string.Const.unwrap(e),
                    "must provide justification"
                  ),
                  goog.asserts.assert(
                    !goog.string.internal.isEmptyOrWhitespace(
                      goog.string.Const.unwrap(e)
                    ),
                    "must provide non-empty justification"
                  ),
                  goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
                    t
                  )
                );
              }),
            (goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract =
              function (e, t) {
                return (
                  goog.asserts.assertString(
                    goog.string.Const.unwrap(e),
                    "must provide justification"
                  ),
                  goog.asserts.assert(
                    !goog.string.internal.isEmptyOrWhitespace(
                      goog.string.Const.unwrap(e)
                    ),
                    "must provide non-empty justification"
                  ),
                  goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
                    t
                  )
                );
              }),
            (goog.dom.safe = {}),
            (goog.dom.safe.InsertAdjacentHtmlPosition = {
              AFTERBEGIN: "afterbegin",
              AFTEREND: "afterend",
              BEFOREBEGIN: "beforebegin",
              BEFOREEND: "beforeend",
            }),
            (goog.dom.safe.insertAdjacentHtml = function (e, t, o) {
              e.insertAdjacentHTML(t, goog.html.SafeHtml.unwrapTrustedHTML(o));
            }),
            (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = {
              MATH: !0,
              SCRIPT: !0,
              STYLE: !0,
              SVG: !0,
              TEMPLATE: !0,
            }),
            (goog.dom.safe.isInnerHtmlCleanupRecursive_ =
              goog.functions.cacheReturnValue(function () {
                if (goog.DEBUG && "undefined" == typeof document) return !1;
                var e = document.createElement("div"),
                  t = document.createElement("div");
                return (
                  t.appendChild(document.createElement("div")),
                  e.appendChild(t),
                  !(
                    (goog.DEBUG && !e.firstChild) ||
                    ((t = e.firstChild.firstChild),
                    (e.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(
                      goog.html.SafeHtml.EMPTY
                    )),
                    t.parentElement)
                  )
                );
              })),
            (goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function (e, t) {
              if (goog.dom.safe.isInnerHtmlCleanupRecursive_())
                for (; e.lastChild; ) e.removeChild(e.lastChild);
              e.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(t);
            }),
            (goog.dom.safe.setInnerHtml = function (e, t) {
              if (goog.asserts.ENABLE_ASSERTS) {
                var o = e.tagName.toUpperCase();
                if (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[o])
                  throw Error(
                    "goog.dom.safe.setInnerHtml cannot be used to set content of " +
                      e.tagName +
                      "."
                  );
              }
              goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(e, t);
            }),
            (goog.dom.safe.setOuterHtml = function (e, t) {
              e.outerHTML = goog.html.SafeHtml.unwrapTrustedHTML(t);
            }),
            (goog.dom.safe.setFormElementAction = function (e, t) {
              (t =
                t instanceof goog.html.SafeUrl
                  ? t
                  : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
                (goog.dom.asserts.assertIsHTMLFormElement(e).action =
                  goog.html.SafeUrl.unwrap(t));
            }),
            (goog.dom.safe.setButtonFormAction = function (e, t) {
              (t =
                t instanceof goog.html.SafeUrl
                  ? t
                  : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
                (goog.dom.asserts.assertIsHTMLButtonElement(e).formAction =
                  goog.html.SafeUrl.unwrap(t));
            }),
            (goog.dom.safe.setInputFormAction = function (e, t) {
              (t =
                t instanceof goog.html.SafeUrl
                  ? t
                  : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
                (goog.dom.asserts.assertIsHTMLInputElement(e).formAction =
                  goog.html.SafeUrl.unwrap(t));
            }),
            (goog.dom.safe.setStyle = function (e, t) {
              e.style.cssText = goog.html.SafeStyle.unwrap(t);
            }),
            (goog.dom.safe.documentWrite = function (e, t) {
              e.write(goog.html.SafeHtml.unwrapTrustedHTML(t));
            }),
            (goog.dom.safe.setAnchorHref = function (e, t) {
              goog.dom.asserts.assertIsHTMLAnchorElement(e),
                (t =
                  t instanceof goog.html.SafeUrl
                    ? t
                    : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
                (e.href = goog.html.SafeUrl.unwrap(t));
            }),
            (goog.dom.safe.setImageSrc = function (e, t) {
              if (
                (goog.dom.asserts.assertIsHTMLImageElement(e),
                !(t instanceof goog.html.SafeUrl))
              ) {
                var o = /^data:image\//i.test(t);
                t = goog.html.SafeUrl.sanitizeAssertUnchanged(t, o);
              }
              e.src = goog.html.SafeUrl.unwrap(t);
            }),
            (goog.dom.safe.setAudioSrc = function (e, t) {
              if (
                (goog.dom.asserts.assertIsHTMLAudioElement(e),
                !(t instanceof goog.html.SafeUrl))
              ) {
                var o = /^data:audio\//i.test(t);
                t = goog.html.SafeUrl.sanitizeAssertUnchanged(t, o);
              }
              e.src = goog.html.SafeUrl.unwrap(t);
            }),
            (goog.dom.safe.setVideoSrc = function (e, t) {
              if (
                (goog.dom.asserts.assertIsHTMLVideoElement(e),
                !(t instanceof goog.html.SafeUrl))
              ) {
                var o = /^data:video\//i.test(t);
                t = goog.html.SafeUrl.sanitizeAssertUnchanged(t, o);
              }
              e.src = goog.html.SafeUrl.unwrap(t);
            }),
            (goog.dom.safe.setEmbedSrc = function (e, t) {
              goog.dom.asserts.assertIsHTMLEmbedElement(e),
                (e.src =
                  goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(t));
            }),
            (goog.dom.safe.setFrameSrc = function (e, t) {
              goog.dom.asserts.assertIsHTMLFrameElement(e),
                (e.src = goog.html.TrustedResourceUrl.unwrap(t));
            }),
            (goog.dom.safe.setIframeSrc = function (e, t) {
              goog.dom.asserts.assertIsHTMLIFrameElement(e),
                (e.src = goog.html.TrustedResourceUrl.unwrap(t));
            }),
            (goog.dom.safe.setIframeSrcdoc = function (e, t) {
              goog.dom.asserts.assertIsHTMLIFrameElement(e),
                (e.srcdoc = goog.html.SafeHtml.unwrapTrustedHTML(t));
            }),
            (goog.dom.safe.setLinkHrefAndRel = function (e, t, o) {
              goog.dom.asserts.assertIsHTMLLinkElement(e),
                (e.rel = o),
                goog.string.internal.caseInsensitiveContains(o, "stylesheet")
                  ? (goog.asserts.assert(
                      t instanceof goog.html.TrustedResourceUrl,
                      'URL must be TrustedResourceUrl because "rel" contains "stylesheet"'
                    ),
                    (e.href = goog.html.TrustedResourceUrl.unwrap(t)))
                  : (e.href =
                      t instanceof goog.html.TrustedResourceUrl
                        ? goog.html.TrustedResourceUrl.unwrap(t)
                        : t instanceof goog.html.SafeUrl
                        ? goog.html.SafeUrl.unwrap(t)
                        : goog.html.SafeUrl.unwrap(
                            goog.html.SafeUrl.sanitizeAssertUnchanged(t)
                          ));
            }),
            (goog.dom.safe.setObjectData = function (e, t) {
              goog.dom.asserts.assertIsHTMLObjectElement(e),
                (e.data =
                  goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(t));
            }),
            (goog.dom.safe.setScriptSrc = function (e, t) {
              goog.dom.asserts.assertIsHTMLScriptElement(e),
                (e.src =
                  goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(t)),
                (t = goog.getScriptNonce()) && e.setAttribute("nonce", t);
            }),
            (goog.dom.safe.setScriptContent = function (e, t) {
              goog.dom.asserts.assertIsHTMLScriptElement(e),
                (e.text = goog.html.SafeScript.unwrapTrustedScript(t)),
                (t = goog.getScriptNonce()) && e.setAttribute("nonce", t);
            }),
            (goog.dom.safe.setLocationHref = function (e, t) {
              goog.dom.asserts.assertIsLocation(e),
                (t =
                  t instanceof goog.html.SafeUrl
                    ? t
                    : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
                (e.href = goog.html.SafeUrl.unwrap(t));
            }),
            (goog.dom.safe.assignLocation = function (e, t) {
              goog.dom.asserts.assertIsLocation(e),
                (t =
                  t instanceof goog.html.SafeUrl
                    ? t
                    : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
                e.assign(goog.html.SafeUrl.unwrap(t));
            }),
            (goog.dom.safe.replaceLocation = function (e, t) {
              (t =
                t instanceof goog.html.SafeUrl
                  ? t
                  : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
                e.replace(goog.html.SafeUrl.unwrap(t));
            }),
            (goog.dom.safe.openInWindow = function (e, t, o, r, s) {
              return (
                (e =
                  e instanceof goog.html.SafeUrl
                    ? e
                    : goog.html.SafeUrl.sanitizeAssertUnchanged(e)),
                (t = t || goog.global),
                (o =
                  o instanceof goog.string.Const
                    ? goog.string.Const.unwrap(o)
                    : o || ""),
                t.open(goog.html.SafeUrl.unwrap(e), o, r, s)
              );
            }),
            (goog.dom.safe.parseFromStringHtml = function (e, t) {
              return goog.dom.safe.parseFromString(e, t, "text/html");
            }),
            (goog.dom.safe.parseFromString = function (e, t, o) {
              return e.parseFromString(
                goog.html.SafeHtml.unwrapTrustedHTML(t),
                o
              );
            }),
            (goog.dom.safe.createImageFromBlob = function (e) {
              if (!/^image\/.*/g.test(e.type))
                throw Error(
                  "goog.dom.safe.createImageFromBlob only accepts MIME type image/.*."
                );
              var t = goog.global.URL.createObjectURL(e);
              return (
                ((e = new goog.global.Image()).onload = function () {
                  goog.global.URL.revokeObjectURL(t);
                }),
                goog.dom.safe.setImageSrc(
                  e,
                  goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(
                    goog.string.Const.from("Image blob URL."),
                    t
                  )
                ),
                e
              );
            }),
            (goog.string.DETECT_DOUBLE_ESCAPING = !1),
            (goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1),
            (goog.string.Unicode = { NBSP: " " }),
            (goog.string.startsWith = goog.string.internal.startsWith),
            (goog.string.endsWith = goog.string.internal.endsWith),
            (goog.string.caseInsensitiveStartsWith =
              goog.string.internal.caseInsensitiveStartsWith),
            (goog.string.caseInsensitiveEndsWith =
              goog.string.internal.caseInsensitiveEndsWith),
            (goog.string.caseInsensitiveEquals =
              goog.string.internal.caseInsensitiveEquals),
            (goog.string.subs = function (e, t) {
              for (
                var o = e.split("%s"),
                  r = "",
                  s = Array.prototype.slice.call(arguments, 1);
                s.length && 1 < o.length;

              )
                r += o.shift() + s.shift();
              return r + o.join("%s");
            }),
            (goog.string.collapseWhitespace = function (e) {
              return e.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
            }),
            (goog.string.isEmptyOrWhitespace =
              goog.string.internal.isEmptyOrWhitespace),
            (goog.string.isEmptyString = function (e) {
              return 0 == e.length;
            }),
            (goog.string.isEmpty = goog.string.isEmptyOrWhitespace),
            (goog.string.isEmptyOrWhitespaceSafe = function (e) {
              return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(e));
            }),
            (goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe),
            (goog.string.isBreakingWhitespace = function (e) {
              return !/[^\t\n\r ]/.test(e);
            }),
            (goog.string.isAlpha = function (e) {
              return !/[^a-zA-Z]/.test(e);
            }),
            (goog.string.isNumeric = function (e) {
              return !/[^0-9]/.test(e);
            }),
            (goog.string.isAlphaNumeric = function (e) {
              return !/[^a-zA-Z0-9]/.test(e);
            }),
            (goog.string.isSpace = function (e) {
              return " " == e;
            }),
            (goog.string.isUnicodeChar = function (e) {
              return (
                (1 == e.length && " " <= e && "~" >= e) || ("" <= e && "�" >= e)
              );
            }),
            (goog.string.stripNewlines = function (e) {
              return e.replace(/(\r\n|\r|\n)+/g, " ");
            }),
            (goog.string.canonicalizeNewlines = function (e) {
              return e.replace(/(\r\n|\r|\n)/g, "\n");
            }),
            (goog.string.normalizeWhitespace = function (e) {
              return e.replace(/\xa0|\s/g, " ");
            }),
            (goog.string.normalizeSpaces = function (e) {
              return e.replace(/\xa0|[ \t]+/g, " ");
            }),
            (goog.string.collapseBreakingSpaces = function (e) {
              return e
                .replace(/[\t\r\n ]+/g, " ")
                .replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
            }),
            (goog.string.trim = goog.string.internal.trim),
            (goog.string.trimLeft = function (e) {
              return e.replace(/^[\s\xa0]+/, "");
            }),
            (goog.string.trimRight = function (e) {
              return e.replace(/[\s\xa0]+$/, "");
            }),
            (goog.string.caseInsensitiveCompare =
              goog.string.internal.caseInsensitiveCompare),
            (goog.string.numberAwareCompare_ = function (e, t, o) {
              if (e == t) return 0;
              if (!e) return -1;
              if (!t) return 1;
              for (
                var r = e.toLowerCase().match(o),
                  s = t.toLowerCase().match(o),
                  n = Math.min(r.length, s.length),
                  i = 0;
                i < n;
                i++
              ) {
                o = r[i];
                var a = s[i];
                if (o != a)
                  return (
                    (e = parseInt(o, 10)),
                    !isNaN(e) && ((t = parseInt(a, 10)), !isNaN(t) && e - t)
                      ? e - t
                      : o < a
                      ? -1
                      : 1
                  );
              }
              return r.length != s.length
                ? r.length - s.length
                : e < t
                ? -1
                : 1;
            }),
            (goog.string.intAwareCompare = function (e, t) {
              return goog.string.numberAwareCompare_(e, t, /\d+|\D+/g);
            }),
            (goog.string.floatAwareCompare = function (e, t) {
              return goog.string.numberAwareCompare_(e, t, /\d+|\.\d+|\D+/g);
            }),
            (goog.string.numerateCompare = goog.string.floatAwareCompare),
            (goog.string.urlEncode = function (e) {
              return encodeURIComponent(String(e));
            }),
            (goog.string.urlDecode = function (e) {
              return decodeURIComponent(e.replace(/\+/g, " "));
            }),
            (goog.string.newLineToBr = goog.string.internal.newLineToBr),
            (goog.string.htmlEscape = function (e, t) {
              return (
                (e = goog.string.internal.htmlEscape(e, t)),
                goog.string.DETECT_DOUBLE_ESCAPING &&
                  (e = e.replace(goog.string.E_RE_, "&#101;")),
                e
              );
            }),
            (goog.string.E_RE_ = /e/g),
            (goog.string.unescapeEntities = function (e) {
              return goog.string.contains(e, "&")
                ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING &&
                  "document" in goog.global
                  ? goog.string.unescapeEntitiesUsingDom_(e)
                  : goog.string.unescapePureXmlEntities_(e)
                : e;
            }),
            (goog.string.unescapeEntitiesWithDocument = function (e, t) {
              return goog.string.contains(e, "&")
                ? goog.string.unescapeEntitiesUsingDom_(e, t)
                : e;
            }),
            (goog.string.unescapeEntitiesUsingDom_ = function (e, t) {
              var o = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' },
                r = t
                  ? t.createElement("div")
                  : goog.global.document.createElement("div");
              return e.replace(
                goog.string.HTML_ENTITY_PATTERN_,
                function (e, t) {
                  var s = o[e];
                  return (
                    s ||
                    ("#" == t.charAt(0) &&
                      ((t = Number("0" + t.substr(1))),
                      isNaN(t) || (s = String.fromCharCode(t))),
                    s ||
                      (goog.dom.safe.setInnerHtml(
                        r,
                        goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(
                          goog.string.Const.from("Single HTML entity."),
                          e + " "
                        )
                      ),
                      (s = r.firstChild.nodeValue.slice(0, -1))),
                    (o[e] = s))
                  );
                }
              );
            }),
            (goog.string.unescapePureXmlEntities_ = function (e) {
              return e.replace(/&([^;]+);/g, function (e, t) {
                switch (t) {
                  case "amp":
                    return "&";
                  case "lt":
                    return "<";
                  case "gt":
                    return ">";
                  case "quot":
                    return '"';
                  default:
                    return "#" != t.charAt(0) ||
                      ((t = Number("0" + t.substr(1))), isNaN(t))
                      ? e
                      : String.fromCharCode(t);
                }
              });
            }),
            (goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g),
            (goog.string.whitespaceEscape = function (e, t) {
              return goog.string.newLineToBr(e.replace(/  /g, " &#160;"), t);
            }),
            (goog.string.preserveSpaces = function (e) {
              return e.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
            }),
            (goog.string.stripQuotes = function (e, t) {
              for (var o = t.length, r = 0; r < o; r++) {
                var s = 1 == o ? t : t.charAt(r);
                if (e.charAt(0) == s && e.charAt(e.length - 1) == s)
                  return e.substring(1, e.length - 1);
              }
              return e;
            }),
            (goog.string.truncate = function (e, t, o) {
              return (
                o && (e = goog.string.unescapeEntities(e)),
                e.length > t && (e = e.substring(0, t - 3) + "..."),
                o && (e = goog.string.htmlEscape(e)),
                e
              );
            }),
            (goog.string.truncateMiddle = function (e, t, o, r) {
              if (
                (o && (e = goog.string.unescapeEntities(e)), r && e.length > t)
              ) {
                r > t && (r = t);
                var s = e.length - r;
                e = e.substring(0, t - r) + "..." + e.substring(s);
              } else
                e.length > t &&
                  ((r = Math.floor(t / 2)),
                  (s = e.length - r),
                  (e = e.substring(0, r + (t % 2)) + "..." + e.substring(s)));
              return o && (e = goog.string.htmlEscape(e)), e;
            }),
            (goog.string.specialEscapeChars_ = {
              "\0": "\\0",
              "\b": "\\b",
              "\f": "\\f",
              "\n": "\\n",
              "\r": "\\r",
              "\t": "\\t",
              "\v": "\\x0B",
              '"': '\\"',
              "\\": "\\\\",
              "<": "\\u003C",
            }),
            (goog.string.jsEscapeCache_ = { "'": "\\'" }),
            (goog.string.quote = function (e) {
              e = String(e);
              for (var t = ['"'], o = 0; o < e.length; o++) {
                var r = e.charAt(o),
                  s = r.charCodeAt(0);
                t[o + 1] =
                  goog.string.specialEscapeChars_[r] ||
                  (31 < s && 127 > s ? r : goog.string.escapeChar(r));
              }
              return t.push('"'), t.join("");
            }),
            (goog.string.escapeString = function (e) {
              for (var t = [], o = 0; o < e.length; o++)
                t[o] = goog.string.escapeChar(e.charAt(o));
              return t.join("");
            }),
            (goog.string.escapeChar = function (e) {
              if (e in goog.string.jsEscapeCache_)
                return goog.string.jsEscapeCache_[e];
              if (e in goog.string.specialEscapeChars_)
                return (goog.string.jsEscapeCache_[e] =
                  goog.string.specialEscapeChars_[e]);
              var t = e.charCodeAt(0);
              if (31 < t && 127 > t) var o = e;
              else
                256 > t
                  ? ((o = "\\x"), (16 > t || 256 < t) && (o += "0"))
                  : ((o = "\\u"), 4096 > t && (o += "0")),
                  (o += t.toString(16).toUpperCase());
              return (goog.string.jsEscapeCache_[e] = o);
            }),
            (goog.string.contains = goog.string.internal.contains),
            (goog.string.caseInsensitiveContains =
              goog.string.internal.caseInsensitiveContains),
            (goog.string.countOf = function (e, t) {
              return e && t ? e.split(t).length - 1 : 0;
            }),
            (goog.string.removeAt = function (e, t, o) {
              var r = e;
              return (
                0 <= t &&
                  t < e.length &&
                  0 < o &&
                  (r = e.substr(0, t) + e.substr(t + o, e.length - t - o)),
                r
              );
            }),
            (goog.string.remove = function (e, t) {
              return e.replace(t, "");
            }),
            (goog.string.removeAll = function (e, t) {
              return (
                (t = new RegExp(goog.string.regExpEscape(t), "g")),
                e.replace(t, "")
              );
            }),
            (goog.string.replaceAll = function (e, t, o) {
              return (
                (t = new RegExp(goog.string.regExpEscape(t), "g")),
                e.replace(t, o.replace(/\$/g, "$$$$"))
              );
            }),
            (goog.string.regExpEscape = function (e) {
              return String(e)
                .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
                .replace(/\x08/g, "\\x08");
            }),
            (goog.string.repeat = String.prototype.repeat
              ? function (e, t) {
                  return e.repeat(t);
                }
              : function (e, t) {
                  return Array(t + 1).join(e);
                }),
            (goog.string.padNumber = function (e, t, o) {
              return (
                -1 ==
                  (o = (e = void 0 !== o ? e.toFixed(o) : String(e)).indexOf(
                    "."
                  )) && (o = e.length),
                goog.string.repeat("0", Math.max(0, t - o)) + e
              );
            }),
            (goog.string.makeSafe = function (e) {
              return null == e ? "" : String(e);
            }),
            (goog.string.buildString = function (e) {
              return Array.prototype.join.call(arguments, "");
            }),
            (goog.string.getRandomString = function () {
              return (
                Math.floor(2147483648 * Math.random()).toString(36) +
                Math.abs(
                  Math.floor(2147483648 * Math.random()) ^ goog.now()
                ).toString(36)
              );
            }),
            (goog.string.compareVersions =
              goog.string.internal.compareVersions),
            (goog.string.hashCode = function (e) {
              for (var t = 0, o = 0; o < e.length; ++o)
                t = (31 * t + e.charCodeAt(o)) >>> 0;
              return t;
            }),
            (goog.string.uniqueStringCounter_ =
              (2147483648 * Math.random()) | 0),
            (goog.string.createUniqueString = function () {
              return "goog_" + goog.string.uniqueStringCounter_++;
            }),
            (goog.string.toNumber = function (e) {
              var t = Number(e);
              return 0 == t && goog.string.isEmptyOrWhitespace(e) ? NaN : t;
            }),
            (goog.string.isLowerCamelCase = function (e) {
              return /^[a-z]+([A-Z][a-z]*)*$/.test(e);
            }),
            (goog.string.isUpperCamelCase = function (e) {
              return /^([A-Z][a-z]*)+$/.test(e);
            }),
            (goog.string.toCamelCase = function (e) {
              return String(e).replace(/\-([a-z])/g, function (e, t) {
                return t.toUpperCase();
              });
            }),
            (goog.string.toSelectorCase = function (e) {
              return String(e)
                .replace(/([A-Z])/g, "-$1")
                .toLowerCase();
            }),
            (goog.string.toTitleCase = function (e, t) {
              return (
                (t =
                  "string" == typeof t ? goog.string.regExpEscape(t) : "\\s"),
                e.replace(
                  new RegExp(
                    "(^" + (t ? "|[" + t + "]+" : "") + ")([a-z])",
                    "g"
                  ),
                  function (e, t, o) {
                    return t + o.toUpperCase();
                  }
                )
              );
            }),
            (goog.string.capitalize = function (e) {
              return (
                String(e.charAt(0)).toUpperCase() +
                String(e.substr(1)).toLowerCase()
              );
            }),
            (goog.string.parseInt = function (e) {
              return (
                isFinite(e) && (e = String(e)),
                "string" == typeof e
                  ? /^\s*-?0x/i.test(e)
                    ? parseInt(e, 16)
                    : parseInt(e, 10)
                  : NaN
              );
            }),
            (goog.string.splitLimit = function (e, t, o) {
              e = e.split(t);
              for (var r = []; 0 < o && e.length; ) r.push(e.shift()), o--;
              return e.length && r.push(e.join(t)), r;
            }),
            (goog.string.lastComponent = function (e, t) {
              if (!t) return e;
              "string" == typeof t && (t = [t]);
              for (var o = -1, r = 0; r < t.length; r++)
                if ("" != t[r]) {
                  var s = e.lastIndexOf(t[r]);
                  s > o && (o = s);
                }
              return -1 == o ? e : e.slice(o + 1);
            }),
            (goog.string.editDistance = function (e, t) {
              var o = [],
                r = [];
              if (e == t) return 0;
              if (!e.length || !t.length) return Math.max(e.length, t.length);
              for (var s = 0; s < t.length + 1; s++) o[s] = s;
              for (s = 0; s < e.length; s++) {
                r[0] = s + 1;
                for (var n = 0; n < t.length; n++)
                  r[n + 1] = Math.min(
                    r[n] + 1,
                    o[n + 1] + 1,
                    o[n] + Number(e[s] != t[n])
                  );
                for (n = 0; n < o.length; n++) o[n] = r[n];
              }
              return r[t.length];
            }),
            (goog.labs.userAgent.engine = {}),
            (goog.labs.userAgent.engine.isPresto = function () {
              return goog.labs.userAgent.util.matchUserAgent("Presto");
            }),
            (goog.labs.userAgent.engine.isTrident = function () {
              return (
                goog.labs.userAgent.util.matchUserAgent("Trident") ||
                goog.labs.userAgent.util.matchUserAgent("MSIE")
              );
            }),
            (goog.labs.userAgent.engine.isEdge = function () {
              return goog.labs.userAgent.util.matchUserAgent("Edge");
            }),
            (goog.labs.userAgent.engine.isWebKit = function () {
              return (
                goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") &&
                !goog.labs.userAgent.engine.isEdge()
              );
            }),
            (goog.labs.userAgent.engine.isGecko = function () {
              return (
                goog.labs.userAgent.util.matchUserAgent("Gecko") &&
                !goog.labs.userAgent.engine.isWebKit() &&
                !goog.labs.userAgent.engine.isTrident() &&
                !goog.labs.userAgent.engine.isEdge()
              );
            }),
            (goog.labs.userAgent.engine.getVersion = function () {
              var e = goog.labs.userAgent.util.getUserAgent();
              if (e) {
                e = goog.labs.userAgent.util.extractVersionTuples(e);
                var t,
                  o = goog.labs.userAgent.engine.getEngineTuple_(e);
                if (o)
                  return "Gecko" == o[0]
                    ? goog.labs.userAgent.engine.getVersionForKey_(e, "Firefox")
                    : o[1];
                if (
                  (e = e[0]) &&
                  (t = e[2]) &&
                  (t = /Trident\/([^\s;]+)/.exec(t))
                )
                  return t[1];
              }
              return "";
            }),
            (goog.labs.userAgent.engine.getEngineTuple_ = function (e) {
              if (!goog.labs.userAgent.engine.isEdge()) return e[1];
              for (var t = 0; t < e.length; t++) {
                var o = e[t];
                if ("Edge" == o[0]) return o;
              }
            }),
            (goog.labs.userAgent.engine.isVersionOrHigher = function (e) {
              return (
                0 <=
                goog.string.compareVersions(
                  goog.labs.userAgent.engine.getVersion(),
                  e
                )
              );
            }),
            (goog.labs.userAgent.engine.getVersionForKey_ = function (e, t) {
              return (
                ((e = goog.array.find(e, function (e) {
                  return t == e[0];
                })) &&
                  e[1]) ||
                ""
              );
            }),
            (goog.labs.userAgent.platform = {}),
            (goog.labs.userAgent.platform.isAndroid = function () {
              return goog.labs.userAgent.util.matchUserAgent("Android");
            }),
            (goog.labs.userAgent.platform.isIpod = function () {
              return goog.labs.userAgent.util.matchUserAgent("iPod");
            }),
            (goog.labs.userAgent.platform.isIphone = function () {
              return (
                goog.labs.userAgent.util.matchUserAgent("iPhone") &&
                !goog.labs.userAgent.util.matchUserAgent("iPod") &&
                !goog.labs.userAgent.util.matchUserAgent("iPad")
              );
            }),
            (goog.labs.userAgent.platform.isIpad = function () {
              return goog.labs.userAgent.util.matchUserAgent("iPad");
            }),
            (goog.labs.userAgent.platform.isIos = function () {
              return (
                goog.labs.userAgent.platform.isIphone() ||
                goog.labs.userAgent.platform.isIpad() ||
                goog.labs.userAgent.platform.isIpod()
              );
            }),
            (goog.labs.userAgent.platform.isMacintosh = function () {
              return goog.labs.userAgent.util.matchUserAgent("Macintosh");
            }),
            (goog.labs.userAgent.platform.isLinux = function () {
              return goog.labs.userAgent.util.matchUserAgent("Linux");
            }),
            (goog.labs.userAgent.platform.isWindows = function () {
              return goog.labs.userAgent.util.matchUserAgent("Windows");
            }),
            (goog.labs.userAgent.platform.isChromeOS = function () {
              return goog.labs.userAgent.util.matchUserAgent("CrOS");
            }),
            (goog.labs.userAgent.platform.isChromecast = function () {
              return goog.labs.userAgent.util.matchUserAgent("CrKey");
            }),
            (goog.labs.userAgent.platform.isKaiOS = function () {
              return goog.labs.userAgent.util.matchUserAgentIgnoreCase("KaiOS");
            }),
            (goog.labs.userAgent.platform.getVersion = function () {
              var e = goog.labs.userAgent.util.getUserAgent(),
                t = "";
              return (
                goog.labs.userAgent.platform.isWindows()
                  ? (t = (e = (t = /Windows (?:NT|Phone) ([0-9.]+)/).exec(e))
                      ? e[1]
                      : "0.0")
                  : goog.labs.userAgent.platform.isIos()
                  ? (t =
                      (e = (t = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/).exec(
                        e
                      )) && e[1].replace(/_/g, "."))
                  : goog.labs.userAgent.platform.isMacintosh()
                  ? (t = (e = (t = /Mac OS X ([0-9_.]+)/).exec(e))
                      ? e[1].replace(/_/g, ".")
                      : "10")
                  : goog.labs.userAgent.platform.isKaiOS()
                  ? (t = (e = (t = /(?:KaiOS)\/(\S+)/i).exec(e)) && e[1])
                  : goog.labs.userAgent.platform.isAndroid()
                  ? (t =
                      (e = (t = /Android\s+([^\);]+)(\)|;)/).exec(e)) && e[1])
                  : goog.labs.userAgent.platform.isChromeOS() &&
                    (t =
                      (e = (t = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/).exec(
                        e
                      )) && e[1]),
                t || ""
              );
            }),
            (goog.labs.userAgent.platform.isVersionOrHigher = function (e) {
              return (
                0 <=
                goog.string.compareVersions(
                  goog.labs.userAgent.platform.getVersion(),
                  e
                )
              );
            }),
            (goog.reflect = {}),
            (goog.reflect.object = function (e, t) {
              return t;
            }),
            (goog.reflect.objectProperty = function (e, t) {
              return e;
            }),
            (goog.reflect.sinkValue = function (e) {
              return goog.reflect.sinkValue[" "](e), e;
            }),
            (goog.reflect.sinkValue[" "] = goog.nullFunction),
            (goog.reflect.canAccessProperty = function (e, t) {
              try {
                return goog.reflect.sinkValue(e[t]), !0;
              } catch (e) {}
              return !1;
            }),
            (goog.reflect.cache = function (e, t, o, r) {
              return (
                (r = r ? r(t) : t),
                Object.prototype.hasOwnProperty.call(e, r)
                  ? e[r]
                  : (e[r] = o(t))
              );
            }),
            (goog.userAgent = {}),
            (goog.userAgent.ASSUME_IE = !1),
            (goog.userAgent.ASSUME_EDGE = !1),
            (goog.userAgent.ASSUME_GECKO = !1),
            (goog.userAgent.ASSUME_WEBKIT = !1),
            (goog.userAgent.ASSUME_MOBILE_WEBKIT = !1),
            (goog.userAgent.ASSUME_OPERA = !1),
            (goog.userAgent.ASSUME_ANY_VERSION = !1),
            (goog.userAgent.BROWSER_KNOWN_ =
              goog.userAgent.ASSUME_IE ||
              goog.userAgent.ASSUME_EDGE ||
              goog.userAgent.ASSUME_GECKO ||
              goog.userAgent.ASSUME_MOBILE_WEBKIT ||
              goog.userAgent.ASSUME_WEBKIT ||
              goog.userAgent.ASSUME_OPERA),
            (goog.userAgent.getUserAgentString = function () {
              return goog.labs.userAgent.util.getUserAgent();
            }),
            (goog.userAgent.getNavigatorTyped = function () {
              return goog.global.navigator || null;
            }),
            (goog.userAgent.getNavigator = function () {
              return goog.userAgent.getNavigatorTyped();
            }),
            (goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_
              ? goog.userAgent.ASSUME_OPERA
              : goog.labs.userAgent.browser.isOpera()),
            (goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_
              ? goog.userAgent.ASSUME_IE
              : goog.labs.userAgent.browser.isIE()),
            (goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_
              ? goog.userAgent.ASSUME_EDGE
              : goog.labs.userAgent.engine.isEdge()),
            (goog.userAgent.EDGE_OR_IE =
              goog.userAgent.EDGE || goog.userAgent.IE),
            (goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_
              ? goog.userAgent.ASSUME_GECKO
              : goog.labs.userAgent.engine.isGecko()),
            (goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_
              ? goog.userAgent.ASSUME_WEBKIT ||
                goog.userAgent.ASSUME_MOBILE_WEBKIT
              : goog.labs.userAgent.engine.isWebKit()),
            (goog.userAgent.isMobile_ = function () {
              return (
                goog.userAgent.WEBKIT &&
                goog.labs.userAgent.util.matchUserAgent("Mobile")
              );
            }),
            (goog.userAgent.MOBILE =
              goog.userAgent.ASSUME_MOBILE_WEBKIT ||
              goog.userAgent.isMobile_()),
            (goog.userAgent.SAFARI = goog.userAgent.WEBKIT),
            (goog.userAgent.determinePlatform_ = function () {
              var e = goog.userAgent.getNavigatorTyped();
              return (e && e.platform) || "";
            }),
            (goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_()),
            (goog.userAgent.ASSUME_MAC = !1),
            (goog.userAgent.ASSUME_WINDOWS = !1),
            (goog.userAgent.ASSUME_LINUX = !1),
            (goog.userAgent.ASSUME_X11 = !1),
            (goog.userAgent.ASSUME_ANDROID = !1),
            (goog.userAgent.ASSUME_IPHONE = !1),
            (goog.userAgent.ASSUME_IPAD = !1),
            (goog.userAgent.ASSUME_IPOD = !1),
            (goog.userAgent.ASSUME_KAIOS = !1),
            (goog.userAgent.PLATFORM_KNOWN_ =
              goog.userAgent.ASSUME_MAC ||
              goog.userAgent.ASSUME_WINDOWS ||
              goog.userAgent.ASSUME_LINUX ||
              goog.userAgent.ASSUME_X11 ||
              goog.userAgent.ASSUME_ANDROID ||
              goog.userAgent.ASSUME_IPHONE ||
              goog.userAgent.ASSUME_IPAD ||
              goog.userAgent.ASSUME_IPOD),
            (goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_
              ? goog.userAgent.ASSUME_MAC
              : goog.labs.userAgent.platform.isMacintosh());
          (goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_
            ? goog.userAgent.ASSUME_WINDOWS
            : goog.labs.userAgent.platform.isWindows()),
            (goog.userAgent.isLegacyLinux_ = function () {
              return (
                goog.labs.userAgent.platform.isLinux() ||
                goog.labs.userAgent.platform.isChromeOS()
              );
            }),
            (goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_
              ? goog.userAgent.ASSUME_LINUX
              : goog.userAgent.isLegacyLinux_()),
            (goog.userAgent.isX11_ = function () {
              var e = goog.userAgent.getNavigatorTyped();
              return !!e && goog.string.contains(e.appVersion || "", "X11");
            }),
            (goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_
              ? goog.userAgent.ASSUME_X11
              : goog.userAgent.isX11_()),
            (goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_
              ? goog.userAgent.ASSUME_ANDROID
              : goog.labs.userAgent.platform.isAndroid()),
            (goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_
              ? goog.userAgent.ASSUME_IPHONE
              : goog.labs.userAgent.platform.isIphone()),
            (goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_
              ? goog.userAgent.ASSUME_IPAD
              : goog.labs.userAgent.platform.isIpad()),
            (goog.userAgent.IPOD = goog.userAgent.PLATFORM_KNOWN_
              ? goog.userAgent.ASSUME_IPOD
              : goog.labs.userAgent.platform.isIpod()),
            (goog.userAgent.IOS = goog.userAgent.PLATFORM_KNOWN_
              ? goog.userAgent.ASSUME_IPHONE ||
                goog.userAgent.ASSUME_IPAD ||
                goog.userAgent.ASSUME_IPOD
              : goog.labs.userAgent.platform.isIos()),
            (goog.userAgent.KAIOS = goog.userAgent.PLATFORM_KNOWN_
              ? goog.userAgent.ASSUME_KAIOS
              : goog.labs.userAgent.platform.isKaiOS()),
            (goog.userAgent.determineVersion_ = function () {
              var e = "",
                t = goog.userAgent.getVersionRegexResult_();
              return (
                t && (e = t ? t[1] : ""),
                goog.userAgent.IE &&
                null != (t = goog.userAgent.getDocumentMode_()) &&
                t > parseFloat(e)
                  ? String(t)
                  : e
              );
            }),
            (goog.userAgent.getVersionRegexResult_ = function () {
              var e = goog.userAgent.getUserAgentString();
              return goog.userAgent.GECKO
                ? /rv:([^\);]+)(\)|;)/.exec(e)
                : goog.userAgent.EDGE
                ? /Edge\/([\d\.]+)/.exec(e)
                : goog.userAgent.IE
                ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e)
                : goog.userAgent.WEBKIT
                ? /WebKit\/(\S+)/.exec(e)
                : goog.userAgent.OPERA
                ? /(?:Version)[ \/]?(\S+)/.exec(e)
                : void 0;
            }),
            (goog.userAgent.getDocumentMode_ = function () {
              var e = goog.global.document;
              return e ? e.documentMode : void 0;
            }),
            (goog.userAgent.VERSION = goog.userAgent.determineVersion_()),
            (goog.userAgent.compare = function (e, t) {
              return goog.string.compareVersions(e, t);
            }),
            (goog.userAgent.isVersionOrHigherCache_ = {}),
            (goog.userAgent.isVersionOrHigher = function (e) {
              return (
                goog.userAgent.ASSUME_ANY_VERSION ||
                goog.reflect.cache(
                  goog.userAgent.isVersionOrHigherCache_,
                  e,
                  function () {
                    return (
                      0 <=
                      goog.string.compareVersions(goog.userAgent.VERSION, e)
                    );
                  }
                )
              );
            }),
            (goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher),
            (goog.userAgent.isDocumentModeOrHigher = function (e) {
              return Number(goog.userAgent.DOCUMENT_MODE) >= e;
            }),
            (goog.userAgent.isDocumentMode =
              goog.userAgent.isDocumentModeOrHigher),
            (goog.userAgent.DOCUMENT_MODE = (function () {
              if (goog.global.document && goog.userAgent.IE)
                return (
                  goog.userAgent.getDocumentMode_() ||
                  parseInt(goog.userAgent.VERSION, 10) ||
                  void 0
                );
            })()),
            (goog.userAgent.product = {}),
            (goog.userAgent.product.ASSUME_FIREFOX = !1),
            (goog.userAgent.product.ASSUME_IPHONE = !1),
            (goog.userAgent.product.ASSUME_IPAD = !1),
            (goog.userAgent.product.ASSUME_ANDROID = !1),
            (goog.userAgent.product.ASSUME_CHROME = !1),
            (goog.userAgent.product.ASSUME_SAFARI = !1),
            (goog.userAgent.product.PRODUCT_KNOWN_ =
              goog.userAgent.ASSUME_IE ||
              goog.userAgent.ASSUME_EDGE ||
              goog.userAgent.ASSUME_OPERA ||
              goog.userAgent.product.ASSUME_FIREFOX ||
              goog.userAgent.product.ASSUME_IPHONE ||
              goog.userAgent.product.ASSUME_IPAD ||
              goog.userAgent.product.ASSUME_ANDROID ||
              goog.userAgent.product.ASSUME_CHROME ||
              goog.userAgent.product.ASSUME_SAFARI),
            (goog.userAgent.product.OPERA = goog.userAgent.OPERA),
            (goog.userAgent.product.IE = goog.userAgent.IE),
            (goog.userAgent.product.EDGE = goog.userAgent.EDGE),
            (goog.userAgent.product.FIREFOX = goog.userAgent.product
              .PRODUCT_KNOWN_
              ? goog.userAgent.product.ASSUME_FIREFOX
              : goog.labs.userAgent.browser.isFirefox()),
            (goog.userAgent.product.isIphoneOrIpod_ = function () {
              return (
                goog.labs.userAgent.platform.isIphone() ||
                goog.labs.userAgent.platform.isIpod()
              );
            }),
            (goog.userAgent.product.IPHONE = goog.userAgent.product
              .PRODUCT_KNOWN_
              ? goog.userAgent.product.ASSUME_IPHONE
              : goog.userAgent.product.isIphoneOrIpod_()),
            (goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_
              ? goog.userAgent.product.ASSUME_IPAD
              : goog.labs.userAgent.platform.isIpad()),
            (goog.userAgent.product.ANDROID = goog.userAgent.product
              .PRODUCT_KNOWN_
              ? goog.userAgent.product.ASSUME_ANDROID
              : goog.labs.userAgent.browser.isAndroidBrowser()),
            (goog.userAgent.product.CHROME = goog.userAgent.product
              .PRODUCT_KNOWN_
              ? goog.userAgent.product.ASSUME_CHROME
              : goog.labs.userAgent.browser.isChrome()),
            (goog.userAgent.product.isSafariDesktop_ = function () {
              return (
                goog.labs.userAgent.browser.isSafari() &&
                !goog.labs.userAgent.platform.isIos()
              );
            }),
            (goog.userAgent.product.SAFARI = goog.userAgent.product
              .PRODUCT_KNOWN_
              ? goog.userAgent.product.ASSUME_SAFARI
              : goog.userAgent.product.isSafariDesktop_()),
            (goog.crypt.base64 = {}),
            (goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"),
            (goog.crypt.base64.ENCODED_VALS =
              goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "+/="),
            (goog.crypt.base64.ENCODED_VALS_WEBSAFE =
              goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "-_."),
            (goog.crypt.base64.Alphabet = {
              DEFAULT: 0,
              NO_PADDING: 1,
              WEBSAFE: 2,
              WEBSAFE_DOT_PADDING: 3,
              WEBSAFE_NO_PADDING: 4,
            }),
            (goog.crypt.base64.paddingChars_ = "=."),
            (goog.crypt.base64.isPadding_ = function (e) {
              return goog.string.contains(goog.crypt.base64.paddingChars_, e);
            }),
            (goog.crypt.base64.byteToCharMaps_ = {}),
            (goog.crypt.base64.charToByteMap_ = null),
            (goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ =
              goog.userAgent.GECKO ||
              (goog.userAgent.WEBKIT && !goog.userAgent.product.SAFARI) ||
              goog.userAgent.OPERA),
            (goog.crypt.base64.HAS_NATIVE_ENCODE_ =
              goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ ||
              "function" == typeof goog.global.btoa),
            (goog.crypt.base64.HAS_NATIVE_DECODE_ =
              goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ ||
              (!goog.userAgent.product.SAFARI &&
                !goog.userAgent.IE &&
                "function" == typeof goog.global.atob)),
            (goog.crypt.base64.encodeByteArray = function (e, t) {
              goog.asserts.assert(
                goog.isArrayLike(e),
                "encodeByteArray takes an array as a parameter"
              ),
                void 0 === t && (t = goog.crypt.base64.Alphabet.DEFAULT),
                goog.crypt.base64.init_(),
                (t = goog.crypt.base64.byteToCharMaps_[t]);
              for (var o = [], r = 0; r < e.length; r += 3) {
                var s = e[r],
                  n = r + 1 < e.length,
                  i = n ? e[r + 1] : 0,
                  a = r + 2 < e.length,
                  g = a ? e[r + 2] : 0,
                  p = s >> 2;
                (s = ((3 & s) << 4) | (i >> 4)),
                  (i = ((15 & i) << 2) | (g >> 6)),
                  (g &= 63),
                  a || ((g = 64), n || (i = 64)),
                  o.push(t[p], t[s], t[i] || "", t[g] || "");
              }
              return o.join("");
            }),
            (goog.crypt.base64.encodeString = function (e, t) {
              return goog.crypt.base64.HAS_NATIVE_ENCODE_ && !t
                ? goog.global.btoa(e)
                : goog.crypt.base64.encodeByteArray(
                    goog.crypt.stringToByteArray(e),
                    t
                  );
            }),
            (goog.crypt.base64.decodeString = function (e, t) {
              if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !t)
                return goog.global.atob(e);
              var o = "";
              return (
                goog.crypt.base64.decodeStringInternal_(e, function (e) {
                  o += String.fromCharCode(e);
                }),
                o
              );
            }),
            (goog.crypt.base64.decodeStringToByteArray = function (e, t) {
              var o = [];
              return (
                goog.crypt.base64.decodeStringInternal_(e, function (e) {
                  o.push(e);
                }),
                o
              );
            }),
            (goog.crypt.base64.decodeStringToUint8Array = function (e) {
              goog.asserts.assert(
                !goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10"),
                "Browser does not support typed arrays"
              );
              var t = e.length,
                o = (3 * t) / 4;
              o % 3
                ? (o = Math.floor(o))
                : goog.crypt.base64.isPadding_(e[t - 1]) &&
                  (o = goog.crypt.base64.isPadding_(e[t - 2]) ? o - 2 : o - 1);
              var r = new Uint8Array(o),
                s = 0;
              return (
                goog.crypt.base64.decodeStringInternal_(e, function (e) {
                  r[s++] = e;
                }),
                r.subarray(0, s)
              );
            }),
            (goog.crypt.base64.decodeStringInternal_ = function (e, t) {
              function o(t) {
                for (; r < e.length; ) {
                  var o = e.charAt(r++),
                    s = goog.crypt.base64.charToByteMap_[o];
                  if (null != s) return s;
                  if (!goog.string.isEmptyOrWhitespace(o))
                    throw Error("Unknown base64 encoding at char: " + o);
                }
                return t;
              }
              goog.crypt.base64.init_();
              for (var r = 0; ; ) {
                var s = o(-1),
                  n = o(0),
                  i = o(64),
                  a = o(64);
                if (64 === a && -1 === s) break;
                t((s << 2) | (n >> 4)),
                  64 != i &&
                    (t(((n << 4) & 240) | (i >> 2)),
                    64 != a && t(((i << 6) & 192) | a));
              }
            }),
            (goog.crypt.base64.init_ = function () {
              if (!goog.crypt.base64.charToByteMap_) {
                goog.crypt.base64.charToByteMap_ = {};
                for (
                  var e = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split(""),
                    t = ["+/=", "+/", "-_=", "-_.", "-_"],
                    o = 0;
                  5 > o;
                  o++
                ) {
                  var r = e.concat(t[o].split(""));
                  goog.crypt.base64.byteToCharMaps_[o] = r;
                  for (var s = 0; s < r.length; s++) {
                    var n = r[s],
                      i = goog.crypt.base64.charToByteMap_[n];
                    void 0 === i
                      ? (goog.crypt.base64.charToByteMap_[n] = s)
                      : goog.asserts.assert(i === s);
                  }
                }
              }
            }),
            (jspb.utils = {}),
            (jspb.utils.split64Low = 0),
            (jspb.utils.split64High = 0),
            (jspb.utils.splitUint64 = function (e) {
              var t = e >>> 0;
              (e = Math.floor((e - t) / jspb.BinaryConstants.TWO_TO_32) >>> 0),
                (jspb.utils.split64Low = t),
                (jspb.utils.split64High = e);
            }),
            (jspb.utils.splitInt64 = function (e) {
              var t = 0 > e,
                o = (e = Math.abs(e)) >>> 0;
              (e = Math.floor((e - o) / jspb.BinaryConstants.TWO_TO_32)),
                (e >>>= 0),
                t &&
                  ((e = ~e >>> 0),
                  4294967295 < (o = 1 + (~o >>> 0)) &&
                    ((o = 0), 4294967295 < ++e && (e = 0))),
                (jspb.utils.split64Low = o),
                (jspb.utils.split64High = e);
            }),
            (jspb.utils.splitZigzag64 = function (e) {
              var t = 0 > e;
              (e = 2 * Math.abs(e)),
                jspb.utils.splitUint64(e),
                (e = jspb.utils.split64Low);
              var o = jspb.utils.split64High;
              t &&
                (0 == e
                  ? 0 == o
                    ? (o = e = 4294967295)
                    : (o--, (e = 4294967295))
                  : e--),
                (jspb.utils.split64Low = e),
                (jspb.utils.split64High = o);
            }),
            (jspb.utils.splitFloat32 = function (e) {
              var t = 0 > e ? 1 : 0;
              if (0 === (e = t ? -e : e))
                0 < 1 / e
                  ? ((jspb.utils.split64High = 0), (jspb.utils.split64Low = 0))
                  : ((jspb.utils.split64High = 0),
                    (jspb.utils.split64Low = 2147483648));
              else if (isNaN(e))
                (jspb.utils.split64High = 0),
                  (jspb.utils.split64Low = 2147483647);
              else if (e > jspb.BinaryConstants.FLOAT32_MAX)
                (jspb.utils.split64High = 0),
                  (jspb.utils.split64Low = ((t << 31) | 2139095040) >>> 0);
              else if (e < jspb.BinaryConstants.FLOAT32_MIN)
                (e = Math.round(e / Math.pow(2, -149))),
                  (jspb.utils.split64High = 0),
                  (jspb.utils.split64Low = ((t << 31) | e) >>> 0);
              else {
                var o = Math.floor(Math.log(e) / Math.LN2);
                (e *= Math.pow(2, -o)),
                  16777216 <=
                    (e = Math.round(e * jspb.BinaryConstants.TWO_TO_23)) && ++o,
                  (jspb.utils.split64High = 0),
                  (jspb.utils.split64Low =
                    ((t << 31) | ((o + 127) << 23) | (8388607 & e)) >>> 0);
              }
            }),
            (jspb.utils.splitFloat64 = function (e) {
              var t = 0 > e ? 1 : 0;
              if (0 === (e = t ? -e : e))
                (jspb.utils.split64High = 0 < 1 / e ? 0 : 2147483648),
                  (jspb.utils.split64Low = 0);
              else if (isNaN(e))
                (jspb.utils.split64High = 2147483647),
                  (jspb.utils.split64Low = 4294967295);
              else if (e > jspb.BinaryConstants.FLOAT64_MAX)
                (jspb.utils.split64High = ((t << 31) | 2146435072) >>> 0),
                  (jspb.utils.split64Low = 0);
              else if (e < jspb.BinaryConstants.FLOAT64_MIN) {
                var o = e / Math.pow(2, -1074);
                (e = o / jspb.BinaryConstants.TWO_TO_32),
                  (jspb.utils.split64High = ((t << 31) | e) >>> 0),
                  (jspb.utils.split64Low = o >>> 0);
              } else {
                var r = 0;
                if (2 <= (o = e)) for (; 2 <= o && 1023 > r; ) r++, (o /= 2);
                else for (; 1 > o && -1022 < r; ) (o *= 2), r--;
                (e =
                  ((o = e * Math.pow(2, -r)) * jspb.BinaryConstants.TWO_TO_20) &
                  1048575),
                  (o = (o * jspb.BinaryConstants.TWO_TO_52) >>> 0),
                  (jspb.utils.split64High =
                    ((t << 31) | ((r + 1023) << 20) | e) >>> 0),
                  (jspb.utils.split64Low = o);
              }
            }),
            (jspb.utils.splitHash64 = function (e) {
              var t = e.charCodeAt(0),
                o = e.charCodeAt(1),
                r = e.charCodeAt(2),
                s = e.charCodeAt(3),
                n = e.charCodeAt(4),
                i = e.charCodeAt(5),
                a = e.charCodeAt(6);
              (e = e.charCodeAt(7)),
                (jspb.utils.split64Low =
                  (t + (o << 8) + (r << 16) + (s << 24)) >>> 0),
                (jspb.utils.split64High =
                  (n + (i << 8) + (a << 16) + (e << 24)) >>> 0);
            }),
            (jspb.utils.joinUint64 = function (e, t) {
              return t * jspb.BinaryConstants.TWO_TO_32 + (e >>> 0);
            }),
            (jspb.utils.joinInt64 = function (e, t) {
              var o = 2147483648 & t;
              return (
                o &&
                  ((t = ~t >>> 0),
                  0 == (e = (1 + ~e) >>> 0) && (t = (t + 1) >>> 0)),
                (e = jspb.utils.joinUint64(e, t)),
                o ? -e : e
              );
            }),
            (jspb.utils.toZigzag64 = function (e, t, o) {
              var r = t >> 31;
              return o((e << 1) ^ r, ((t << 1) | (e >>> 31)) ^ r);
            }),
            (jspb.utils.joinZigzag64 = function (e, t) {
              return jspb.utils.fromZigzag64(e, t, jspb.utils.joinInt64);
            }),
            (jspb.utils.fromZigzag64 = function (e, t, o) {
              var r = -(1 & e);
              return o(((e >>> 1) | (t << 31)) ^ r, (t >>> 1) ^ r);
            }),
            (jspb.utils.joinFloat32 = function (e, t) {
              t = 2 * (e >> 31) + 1;
              var o = (e >>> 23) & 255;
              return (
                (e &= 8388607),
                255 == o
                  ? e
                    ? NaN
                    : (1 / 0) * t
                  : 0 == o
                  ? t * Math.pow(2, -149) * e
                  : t * Math.pow(2, o - 150) * (e + Math.pow(2, 23))
              );
            }),
            (jspb.utils.joinFloat64 = function (e, t) {
              var o = 2 * (t >> 31) + 1,
                r = (t >>> 20) & 2047;
              return (
                (e = jspb.BinaryConstants.TWO_TO_32 * (1048575 & t) + e),
                2047 == r
                  ? e
                    ? NaN
                    : (1 / 0) * o
                  : 0 == r
                  ? o * Math.pow(2, -1074) * e
                  : o *
                    Math.pow(2, r - 1075) *
                    (e + jspb.BinaryConstants.TWO_TO_52)
              );
            }),
            (jspb.utils.joinHash64 = function (e, t) {
              return String.fromCharCode(
                (e >>> 0) & 255,
                (e >>> 8) & 255,
                (e >>> 16) & 255,
                (e >>> 24) & 255,
                (t >>> 0) & 255,
                (t >>> 8) & 255,
                (t >>> 16) & 255,
                (t >>> 24) & 255
              );
            }),
            (jspb.utils.DIGITS = "0123456789abcdef".split("")),
            (jspb.utils.ZERO_CHAR_CODE_ = 48),
            (jspb.utils.A_CHAR_CODE_ = 97),
            (jspb.utils.joinUnsignedDecimalString = function (e, t) {
              function o(e, t) {
                return (
                  (e = e ? String(e) : ""),
                  t ? "0000000".slice(e.length) + e : e
                );
              }
              if (2097151 >= t) return "" + jspb.utils.joinUint64(e, t);
              var r = (((e >>> 24) | (t << 8)) >>> 0) & 16777215;
              return (
                (e =
                  (16777215 & e) +
                  6777216 * r +
                  6710656 * (t = (t >> 16) & 65535)),
                (r += 8147497 * t),
                (t *= 2),
                1e7 <= e && ((r += Math.floor(e / 1e7)), (e %= 1e7)),
                1e7 <= r && ((t += Math.floor(r / 1e7)), (r %= 1e7)),
                o(t, 0) + o(r, t) + o(e, 1)
              );
            }),
            (jspb.utils.joinSignedDecimalString = function (e, t) {
              var o = 2147483648 & t;
              return (
                o && (t = (~t + (0 == (e = (1 + ~e) >>> 0) ? 1 : 0)) >>> 0),
                (e = jspb.utils.joinUnsignedDecimalString(e, t)),
                o ? "-" + e : e
              );
            }),
            (jspb.utils.hash64ToDecimalString = function (e, t) {
              jspb.utils.splitHash64(e), (e = jspb.utils.split64Low);
              var o = jspb.utils.split64High;
              return t
                ? jspb.utils.joinSignedDecimalString(e, o)
                : jspb.utils.joinUnsignedDecimalString(e, o);
            }),
            (jspb.utils.hash64ArrayToDecimalStrings = function (e, t) {
              for (var o = Array(e.length), r = 0; r < e.length; r++)
                o[r] = jspb.utils.hash64ToDecimalString(e[r], t);
              return o;
            }),
            (jspb.utils.decimalStringToHash64 = function (e) {
              function t(e, t) {
                for (var o = 0; 8 > o && (1 !== e || 0 < t); o++)
                  (t = e * r[o] + t), (r[o] = 255 & t), (t >>>= 8);
              }
              jspb.asserts.assert(0 < e.length);
              var o = !1;
              "-" === e[0] && ((o = !0), (e = e.slice(1)));
              for (var r = [0, 0, 0, 0, 0, 0, 0, 0], s = 0; s < e.length; s++)
                t(10, e.charCodeAt(s) - jspb.utils.ZERO_CHAR_CODE_);
              return (
                o &&
                  ((function () {
                    for (var e = 0; 8 > e; e++) r[e] = 255 & ~r[e];
                  })(),
                  t(1, 1)),
                goog.crypt.byteArrayToString(r)
              );
            }),
            (jspb.utils.splitDecimalString = function (e) {
              jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(e));
            }),
            (jspb.utils.toHexDigit_ = function (e) {
              return String.fromCharCode(
                10 > e
                  ? jspb.utils.ZERO_CHAR_CODE_ + e
                  : jspb.utils.A_CHAR_CODE_ - 10 + e
              );
            }),
            (jspb.utils.fromHexCharCode_ = function (e) {
              return e >= jspb.utils.A_CHAR_CODE_
                ? e - jspb.utils.A_CHAR_CODE_ + 10
                : e - jspb.utils.ZERO_CHAR_CODE_;
            }),
            (jspb.utils.hash64ToHexString = function (e) {
              var t = Array(18);
              (t[0] = "0"), (t[1] = "x");
              for (var o = 0; 8 > o; o++) {
                var r = e.charCodeAt(7 - o);
                (t[2 * o + 2] = jspb.utils.toHexDigit_(r >> 4)),
                  (t[2 * o + 3] = jspb.utils.toHexDigit_(15 & r));
              }
              return t.join("");
            }),
            (jspb.utils.hexStringToHash64 = function (e) {
              (e = e.toLowerCase()),
                jspb.asserts.assert(18 == e.length),
                jspb.asserts.assert("0" == e[0]),
                jspb.asserts.assert("x" == e[1]);
              for (var t = "", o = 0; 8 > o; o++) {
                var r = jspb.utils.fromHexCharCode_(e.charCodeAt(2 * o + 2)),
                  s = jspb.utils.fromHexCharCode_(e.charCodeAt(2 * o + 3));
                t = String.fromCharCode(16 * r + s) + t;
              }
              return t;
            }),
            (jspb.utils.hash64ToNumber = function (e, t) {
              jspb.utils.splitHash64(e), (e = jspb.utils.split64Low);
              var o = jspb.utils.split64High;
              return t
                ? jspb.utils.joinInt64(e, o)
                : jspb.utils.joinUint64(e, o);
            }),
            (jspb.utils.numberToHash64 = function (e) {
              return (
                jspb.utils.splitInt64(e),
                jspb.utils.joinHash64(
                  jspb.utils.split64Low,
                  jspb.utils.split64High
                )
              );
            }),
            (jspb.utils.countVarints = function (e, t, o) {
              for (var r = 0, s = t; s < o; s++) r += e[s] >> 7;
              return o - t - r;
            }),
            (jspb.utils.countVarintFields = function (e, t, o, r) {
              var s = 0;
              if (128 > (r = 8 * r + jspb.BinaryConstants.WireType.VARINT))
                for (; t < o && e[t++] == r; )
                  for (s++; ; ) {
                    var n = e[t++];
                    if (0 == (128 & n)) break;
                  }
              else
                for (; t < o; ) {
                  for (n = r; 128 < n; ) {
                    if (e[t] != ((127 & n) | 128)) return s;
                    t++, (n >>= 7);
                  }
                  if (e[t++] != n) break;
                  for (s++; 0 != (128 & (n = e[t++])); );
                }
              return s;
            }),
            (jspb.utils.countFixedFields_ = function (e, t, o, r, s) {
              var n = 0;
              if (128 > r) for (; t < o && e[t++] == r; ) n++, (t += s);
              else
                for (; t < o; ) {
                  for (var i = r; 128 < i; ) {
                    if (e[t++] != ((127 & i) | 128)) return n;
                    i >>= 7;
                  }
                  if (e[t++] != i) break;
                  n++, (t += s);
                }
              return n;
            }),
            (jspb.utils.countFixed32Fields = function (e, t, o, r) {
              return jspb.utils.countFixedFields_(
                e,
                t,
                o,
                8 * r + jspb.BinaryConstants.WireType.FIXED32,
                4
              );
            }),
            (jspb.utils.countFixed64Fields = function (e, t, o, r) {
              return jspb.utils.countFixedFields_(
                e,
                t,
                o,
                8 * r + jspb.BinaryConstants.WireType.FIXED64,
                8
              );
            }),
            (jspb.utils.countDelimitedFields = function (e, t, o, r) {
              var s = 0;
              for (
                r = 8 * r + jspb.BinaryConstants.WireType.DELIMITED;
                t < o;

              ) {
                for (var n = r; 128 < n; ) {
                  if (e[t++] != ((127 & n) | 128)) return s;
                  n >>= 7;
                }
                if (e[t++] != n) break;
                s++;
                for (
                  var i = 0, a = 1;
                  (i += (127 & (n = e[t++])) * a), (a *= 128), 0 != (128 & n);

                );
                t += i;
              }
              return s;
            }),
            (jspb.utils.debugBytesToTextFormat = function (e) {
              var t = '"';
              if (e) {
                e = jspb.utils.byteSourceToUint8Array(e);
                for (var o = 0; o < e.length; o++)
                  (t += "\\x"),
                    16 > e[o] && (t += "0"),
                    (t += e[o].toString(16));
              }
              return t + '"';
            }),
            (jspb.utils.debugScalarToTextFormat = function (e) {
              return "string" == typeof e ? goog.string.quote(e) : e.toString();
            }),
            (jspb.utils.stringToByteArray = function (e) {
              for (var t = new Uint8Array(e.length), o = 0; o < e.length; o++) {
                var r = e.charCodeAt(o);
                if (255 < r)
                  throw Error(
                    "Conversion error: string contains codepoint outside of byte range"
                  );
                t[o] = r;
              }
              return t;
            }),
            (jspb.utils.byteSourceToUint8Array = function (e) {
              return e.constructor === Uint8Array
                ? e
                : e.constructor === ArrayBuffer || e.constructor === Array
                ? new Uint8Array(e)
                : e.constructor === String
                ? goog.crypt.base64.decodeStringToUint8Array(e)
                : e instanceof Uint8Array
                ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
                : (jspb.asserts.fail("Type not convertible to Uint8Array."),
                  new Uint8Array(0));
            }),
            (jspb.BinaryDecoder = function (e, t, o) {
              (this.bytes_ = null),
                (this.cursor_ = this.end_ = this.start_ = 0),
                (this.error_ = !1),
                e && this.setBlock(e, t, o);
            }),
            (jspb.BinaryDecoder.instanceCache_ = []),
            (jspb.BinaryDecoder.alloc = function (e, t, o) {
              if (jspb.BinaryDecoder.instanceCache_.length) {
                var r = jspb.BinaryDecoder.instanceCache_.pop();
                return e && r.setBlock(e, t, o), r;
              }
              return new jspb.BinaryDecoder(e, t, o);
            }),
            (jspb.BinaryDecoder.prototype.free = function () {
              this.clear(),
                100 > jspb.BinaryDecoder.instanceCache_.length &&
                  jspb.BinaryDecoder.instanceCache_.push(this);
            }),
            (jspb.BinaryDecoder.prototype.clone = function () {
              return jspb.BinaryDecoder.alloc(
                this.bytes_,
                this.start_,
                this.end_ - this.start_
              );
            }),
            (jspb.BinaryDecoder.prototype.clear = function () {
              (this.bytes_ = null),
                (this.cursor_ = this.end_ = this.start_ = 0),
                (this.error_ = !1);
            }),
            (jspb.BinaryDecoder.prototype.getBuffer = function () {
              return this.bytes_;
            }),
            (jspb.BinaryDecoder.prototype.setBlock = function (e, t, o) {
              (this.bytes_ = jspb.utils.byteSourceToUint8Array(e)),
                (this.start_ = void 0 !== t ? t : 0),
                (this.end_ =
                  void 0 !== o ? this.start_ + o : this.bytes_.length),
                (this.cursor_ = this.start_);
            }),
            (jspb.BinaryDecoder.prototype.getEnd = function () {
              return this.end_;
            }),
            (jspb.BinaryDecoder.prototype.setEnd = function (e) {
              this.end_ = e;
            }),
            (jspb.BinaryDecoder.prototype.reset = function () {
              this.cursor_ = this.start_;
            }),
            (jspb.BinaryDecoder.prototype.getCursor = function () {
              return this.cursor_;
            }),
            (jspb.BinaryDecoder.prototype.setCursor = function (e) {
              this.cursor_ = e;
            }),
            (jspb.BinaryDecoder.prototype.advance = function (e) {
              (this.cursor_ += e),
                jspb.asserts.assert(this.cursor_ <= this.end_);
            }),
            (jspb.BinaryDecoder.prototype.atEnd = function () {
              return this.cursor_ == this.end_;
            }),
            (jspb.BinaryDecoder.prototype.pastEnd = function () {
              return this.cursor_ > this.end_;
            }),
            (jspb.BinaryDecoder.prototype.getError = function () {
              return (
                this.error_ || 0 > this.cursor_ || this.cursor_ > this.end_
              );
            }),
            (jspb.BinaryDecoder.prototype.readSplitVarint64 = function (e) {
              for (var t = 128, o = 0, r = 0, s = 0; 4 > s && 128 <= t; s++)
                o |= (127 & (t = this.bytes_[this.cursor_++])) << (7 * s);
              if (
                (128 <= t &&
                  ((o |= (127 & (t = this.bytes_[this.cursor_++])) << 28),
                  (r |= (127 & t) >> 4)),
                128 <= t)
              )
                for (s = 0; 5 > s && 128 <= t; s++)
                  r |= (127 & (t = this.bytes_[this.cursor_++])) << (7 * s + 3);
              if (128 > t) return e(o >>> 0, r >>> 0);
              jspb.asserts.fail("Failed to read varint, encoding is invalid."),
                (this.error_ = !0);
            }),
            (jspb.BinaryDecoder.prototype.readSplitZigzagVarint64 = function (
              e
            ) {
              return this.readSplitVarint64(function (t, o) {
                return jspb.utils.fromZigzag64(t, o, e);
              });
            }),
            (jspb.BinaryDecoder.prototype.readSplitFixed64 = function (e) {
              var t = this.bytes_,
                o = this.cursor_;
              this.cursor_ += 8;
              for (var r = 0, s = 0, n = o + 7; n >= o; n--)
                (r = (r << 8) | t[n]), (s = (s << 8) | t[n + 4]);
              return e(r, s);
            }),
            (jspb.BinaryDecoder.prototype.skipVarint = function () {
              for (; 128 & this.bytes_[this.cursor_]; ) this.cursor_++;
              this.cursor_++;
            }),
            (jspb.BinaryDecoder.prototype.unskipVarint = function (e) {
              for (; 128 < e; ) this.cursor_--, (e >>>= 7);
              this.cursor_--;
            }),
            (jspb.BinaryDecoder.prototype.readUnsignedVarint32 = function () {
              var e = this.bytes_,
                t = e[this.cursor_ + 0],
                o = 127 & t;
              return 128 > t
                ? ((this.cursor_ += 1),
                  jspb.asserts.assert(this.cursor_ <= this.end_),
                  o)
                : ((o |= (127 & (t = e[this.cursor_ + 1])) << 7),
                  128 > t
                    ? ((this.cursor_ += 2),
                      jspb.asserts.assert(this.cursor_ <= this.end_),
                      o)
                    : ((o |= (127 & (t = e[this.cursor_ + 2])) << 14),
                      128 > t
                        ? ((this.cursor_ += 3),
                          jspb.asserts.assert(this.cursor_ <= this.end_),
                          o)
                        : ((o |= (127 & (t = e[this.cursor_ + 3])) << 21),
                          128 > t
                            ? ((this.cursor_ += 4),
                              jspb.asserts.assert(this.cursor_ <= this.end_),
                              o)
                            : ((o |= (15 & (t = e[this.cursor_ + 4])) << 28),
                              128 > t
                                ? ((this.cursor_ += 5),
                                  jspb.asserts.assert(
                                    this.cursor_ <= this.end_
                                  ),
                                  o >>> 0)
                                : ((this.cursor_ += 5),
                                  128 <= e[this.cursor_++] &&
                                    128 <= e[this.cursor_++] &&
                                    128 <= e[this.cursor_++] &&
                                    128 <= e[this.cursor_++] &&
                                    128 <= e[this.cursor_++] &&
                                    jspb.asserts.assert(!1),
                                  jspb.asserts.assert(
                                    this.cursor_ <= this.end_
                                  ),
                                  o)))));
            }),
            (jspb.BinaryDecoder.prototype.readSignedVarint32 = function () {
              return ~~this.readUnsignedVarint32();
            }),
            (jspb.BinaryDecoder.prototype.readUnsignedVarint32String =
              function () {
                return this.readUnsignedVarint32().toString();
              }),
            (jspb.BinaryDecoder.prototype.readSignedVarint32String =
              function () {
                return this.readSignedVarint32().toString();
              }),
            (jspb.BinaryDecoder.prototype.readZigzagVarint32 = function () {
              var e = this.readUnsignedVarint32();
              return (e >>> 1) ^ -(1 & e);
            }),
            (jspb.BinaryDecoder.prototype.readUnsignedVarint64 = function () {
              return this.readSplitVarint64(jspb.utils.joinUint64);
            }),
            (jspb.BinaryDecoder.prototype.readUnsignedVarint64String =
              function () {
                return this.readSplitVarint64(
                  jspb.utils.joinUnsignedDecimalString
                );
              }),
            (jspb.BinaryDecoder.prototype.readSignedVarint64 = function () {
              return this.readSplitVarint64(jspb.utils.joinInt64);
            }),
            (jspb.BinaryDecoder.prototype.readSignedVarint64String =
              function () {
                return this.readSplitVarint64(
                  jspb.utils.joinSignedDecimalString
                );
              }),
            (jspb.BinaryDecoder.prototype.readZigzagVarint64 = function () {
              return this.readSplitVarint64(jspb.utils.joinZigzag64);
            }),
            (jspb.BinaryDecoder.prototype.readZigzagVarintHash64 = function () {
              return this.readSplitZigzagVarint64(jspb.utils.joinHash64);
            }),
            (jspb.BinaryDecoder.prototype.readZigzagVarint64String =
              function () {
                return this.readSplitZigzagVarint64(
                  jspb.utils.joinSignedDecimalString
                );
              }),
            (jspb.BinaryDecoder.prototype.readUint8 = function () {
              var e = this.bytes_[this.cursor_ + 0];
              return (
                (this.cursor_ += 1),
                jspb.asserts.assert(this.cursor_ <= this.end_),
                e
              );
            }),
            (jspb.BinaryDecoder.prototype.readUint16 = function () {
              var e = this.bytes_[this.cursor_ + 0],
                t = this.bytes_[this.cursor_ + 1];
              return (
                (this.cursor_ += 2),
                jspb.asserts.assert(this.cursor_ <= this.end_),
                (e << 0) | (t << 8)
              );
            }),
            (jspb.BinaryDecoder.prototype.readUint32 = function () {
              var e = this.bytes_[this.cursor_ + 0],
                t = this.bytes_[this.cursor_ + 1],
                o = this.bytes_[this.cursor_ + 2],
                r = this.bytes_[this.cursor_ + 3];
              return (
                (this.cursor_ += 4),
                jspb.asserts.assert(this.cursor_ <= this.end_),
                ((e << 0) | (t << 8) | (o << 16) | (r << 24)) >>> 0
              );
            }),
            (jspb.BinaryDecoder.prototype.readUint64 = function () {
              var e = this.readUint32(),
                t = this.readUint32();
              return jspb.utils.joinUint64(e, t);
            }),
            (jspb.BinaryDecoder.prototype.readUint64String = function () {
              var e = this.readUint32(),
                t = this.readUint32();
              return jspb.utils.joinUnsignedDecimalString(e, t);
            }),
            (jspb.BinaryDecoder.prototype.readInt8 = function () {
              var e = this.bytes_[this.cursor_ + 0];
              return (
                (this.cursor_ += 1),
                jspb.asserts.assert(this.cursor_ <= this.end_),
                (e << 24) >> 24
              );
            }),
            (jspb.BinaryDecoder.prototype.readInt16 = function () {
              var e = this.bytes_[this.cursor_ + 0],
                t = this.bytes_[this.cursor_ + 1];
              return (
                (this.cursor_ += 2),
                jspb.asserts.assert(this.cursor_ <= this.end_),
                (((e << 0) | (t << 8)) << 16) >> 16
              );
            }),
            (jspb.BinaryDecoder.prototype.readInt32 = function () {
              var e = this.bytes_[this.cursor_ + 0],
                t = this.bytes_[this.cursor_ + 1],
                o = this.bytes_[this.cursor_ + 2],
                r = this.bytes_[this.cursor_ + 3];
              return (
                (this.cursor_ += 4),
                jspb.asserts.assert(this.cursor_ <= this.end_),
                (e << 0) | (t << 8) | (o << 16) | (r << 24)
              );
            }),
            (jspb.BinaryDecoder.prototype.readInt64 = function () {
              var e = this.readUint32(),
                t = this.readUint32();
              return jspb.utils.joinInt64(e, t);
            }),
            (jspb.BinaryDecoder.prototype.readInt64String = function () {
              var e = this.readUint32(),
                t = this.readUint32();
              return jspb.utils.joinSignedDecimalString(e, t);
            }),
            (jspb.BinaryDecoder.prototype.readFloat = function () {
              var e = this.readUint32();
              return jspb.utils.joinFloat32(e, 0);
            }),
            (jspb.BinaryDecoder.prototype.readDouble = function () {
              var e = this.readUint32(),
                t = this.readUint32();
              return jspb.utils.joinFloat64(e, t);
            }),
            (jspb.BinaryDecoder.prototype.readBool = function () {
              return !!this.bytes_[this.cursor_++];
            }),
            (jspb.BinaryDecoder.prototype.readEnum = function () {
              return this.readSignedVarint32();
            }),
            (jspb.BinaryDecoder.prototype.readString = function (e) {
              var t = this.bytes_,
                o = this.cursor_;
              e = o + e;
              for (var r = [], s = ""; o < e; ) {
                var n = t[o++];
                if (128 > n) r.push(n);
                else {
                  if (192 > n) continue;
                  if (224 > n) {
                    var i = t[o++];
                    r.push(((31 & n) << 6) | (63 & i));
                  } else if (240 > n) {
                    i = t[o++];
                    var a = t[o++];
                    r.push(((15 & n) << 12) | ((63 & i) << 6) | (63 & a));
                  } else
                    248 > n &&
                      ((n =
                        ((7 & n) << 18) |
                        ((63 & (i = t[o++])) << 12) |
                        ((63 & (a = t[o++])) << 6) |
                        (63 & t[o++])),
                      (n -= 65536),
                      r.push(55296 + ((n >> 10) & 1023), 56320 + (1023 & n)));
                }
                8192 <= r.length &&
                  ((s += String.fromCharCode.apply(null, r)), (r.length = 0));
              }
              return (
                (s += goog.crypt.byteArrayToString(r)), (this.cursor_ = o), s
              );
            }),
            (jspb.BinaryDecoder.prototype.readStringWithLength = function () {
              var e = this.readUnsignedVarint32();
              return this.readString(e);
            }),
            (jspb.BinaryDecoder.prototype.readBytes = function (e) {
              if (0 > e || this.cursor_ + e > this.bytes_.length)
                return (
                  (this.error_ = !0),
                  jspb.asserts.fail("Invalid byte length!"),
                  new Uint8Array(0)
                );
              var t = this.bytes_.subarray(this.cursor_, this.cursor_ + e);
              return (
                (this.cursor_ += e),
                jspb.asserts.assert(this.cursor_ <= this.end_),
                t
              );
            }),
            (jspb.BinaryDecoder.prototype.readVarintHash64 = function () {
              return this.readSplitVarint64(jspb.utils.joinHash64);
            }),
            (jspb.BinaryDecoder.prototype.readFixedHash64 = function () {
              var e = this.bytes_,
                t = this.cursor_,
                o = e[t + 0],
                r = e[t + 1],
                s = e[t + 2],
                n = e[t + 3],
                i = e[t + 4],
                a = e[t + 5],
                g = e[t + 6];
              return (
                (e = e[t + 7]),
                (this.cursor_ += 8),
                String.fromCharCode(o, r, s, n, i, a, g, e)
              );
            }),
            (jspb.BinaryReader = function (e, t, o) {
              (this.decoder_ = jspb.BinaryDecoder.alloc(e, t, o)),
                (this.fieldCursor_ = this.decoder_.getCursor()),
                (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
                (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID),
                (this.error_ = !1),
                (this.readCallbacks_ = null);
            }),
            (jspb.BinaryReader.instanceCache_ = []),
            (jspb.BinaryReader.alloc = function (e, t, o) {
              if (jspb.BinaryReader.instanceCache_.length) {
                var r = jspb.BinaryReader.instanceCache_.pop();
                return e && r.decoder_.setBlock(e, t, o), r;
              }
              return new jspb.BinaryReader(e, t, o);
            }),
            (jspb.BinaryReader.prototype.alloc = jspb.BinaryReader.alloc),
            (jspb.BinaryReader.prototype.free = function () {
              this.decoder_.clear(),
                (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
                (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID),
                (this.error_ = !1),
                (this.readCallbacks_ = null),
                100 > jspb.BinaryReader.instanceCache_.length &&
                  jspb.BinaryReader.instanceCache_.push(this);
            }),
            (jspb.BinaryReader.prototype.getFieldCursor = function () {
              return this.fieldCursor_;
            }),
            (jspb.BinaryReader.prototype.getCursor = function () {
              return this.decoder_.getCursor();
            }),
            (jspb.BinaryReader.prototype.getBuffer = function () {
              return this.decoder_.getBuffer();
            }),
            (jspb.BinaryReader.prototype.getFieldNumber = function () {
              return this.nextField_;
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "getFieldNumber",
              jspb.BinaryReader.prototype.getFieldNumber
            ),
            (jspb.BinaryReader.prototype.getWireType = function () {
              return this.nextWireType_;
            }),
            (jspb.BinaryReader.prototype.isDelimited = function () {
              return (
                this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED
              );
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "isDelimited",
              jspb.BinaryReader.prototype.isDelimited
            ),
            (jspb.BinaryReader.prototype.isEndGroup = function () {
              return (
                this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP
              );
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "isEndGroup",
              jspb.BinaryReader.prototype.isEndGroup
            ),
            (jspb.BinaryReader.prototype.getError = function () {
              return this.error_ || this.decoder_.getError();
            }),
            (jspb.BinaryReader.prototype.setBlock = function (e, t, o) {
              this.decoder_.setBlock(e, t, o),
                (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
                (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID);
            }),
            (jspb.BinaryReader.prototype.reset = function () {
              this.decoder_.reset(),
                (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
                (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID);
            }),
            (jspb.BinaryReader.prototype.advance = function (e) {
              this.decoder_.advance(e);
            }),
            (jspb.BinaryReader.prototype.nextField = function () {
              if (this.decoder_.atEnd()) return !1;
              if (this.getError())
                return jspb.asserts.fail("Decoder hit an error"), !1;
              this.fieldCursor_ = this.decoder_.getCursor();
              var e = this.decoder_.readUnsignedVarint32(),
                t = e >>> 3;
              return (e &= 7) != jspb.BinaryConstants.WireType.VARINT &&
                e != jspb.BinaryConstants.WireType.FIXED32 &&
                e != jspb.BinaryConstants.WireType.FIXED64 &&
                e != jspb.BinaryConstants.WireType.DELIMITED &&
                e != jspb.BinaryConstants.WireType.START_GROUP &&
                e != jspb.BinaryConstants.WireType.END_GROUP
                ? (jspb.asserts.fail(
                    "Invalid wire type: %s (at position %s)",
                    e,
                    this.fieldCursor_
                  ),
                  (this.error_ = !0),
                  !1)
                : ((this.nextField_ = t), (this.nextWireType_ = e), !0);
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "nextField",
              jspb.BinaryReader.prototype.nextField
            ),
            (jspb.BinaryReader.prototype.unskipHeader = function () {
              this.decoder_.unskipVarint(
                (this.nextField_ << 3) | this.nextWireType_
              );
            }),
            (jspb.BinaryReader.prototype.skipMatchingFields = function () {
              var e = this.nextField_;
              for (
                this.unskipHeader();
                this.nextField() && this.getFieldNumber() == e;

              )
                this.skipField();
              this.decoder_.atEnd() || this.unskipHeader();
            }),
            (jspb.BinaryReader.prototype.skipVarintField = function () {
              this.nextWireType_ != jspb.BinaryConstants.WireType.VARINT
                ? (jspb.asserts.fail("Invalid wire type for skipVarintField"),
                  this.skipField())
                : this.decoder_.skipVarint();
            }),
            (jspb.BinaryReader.prototype.skipDelimitedField = function () {
              if (this.nextWireType_ != jspb.BinaryConstants.WireType.DELIMITED)
                jspb.asserts.fail("Invalid wire type for skipDelimitedField"),
                  this.skipField();
              else {
                var e = this.decoder_.readUnsignedVarint32();
                this.decoder_.advance(e);
              }
            }),
            (jspb.BinaryReader.prototype.skipFixed32Field = function () {
              this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED32
                ? (jspb.asserts.fail("Invalid wire type for skipFixed32Field"),
                  this.skipField())
                : this.decoder_.advance(4);
            }),
            (jspb.BinaryReader.prototype.skipFixed64Field = function () {
              this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED64
                ? (jspb.asserts.fail("Invalid wire type for skipFixed64Field"),
                  this.skipField())
                : this.decoder_.advance(8);
            }),
            (jspb.BinaryReader.prototype.skipGroup = function () {
              for (var e = this.nextField_; ; ) {
                if (!this.nextField()) {
                  jspb.asserts.fail("Unmatched start-group tag: stream EOF"),
                    (this.error_ = !0);
                  break;
                }
                if (
                  this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP
                ) {
                  this.nextField_ != e &&
                    (jspb.asserts.fail("Unmatched end-group tag"),
                    (this.error_ = !0));
                  break;
                }
                this.skipField();
              }
            }),
            (jspb.BinaryReader.prototype.skipField = function () {
              switch (this.nextWireType_) {
                case jspb.BinaryConstants.WireType.VARINT:
                  this.skipVarintField();
                  break;
                case jspb.BinaryConstants.WireType.FIXED64:
                  this.skipFixed64Field();
                  break;
                case jspb.BinaryConstants.WireType.DELIMITED:
                  this.skipDelimitedField();
                  break;
                case jspb.BinaryConstants.WireType.FIXED32:
                  this.skipFixed32Field();
                  break;
                case jspb.BinaryConstants.WireType.START_GROUP:
                  this.skipGroup();
                  break;
                default:
                  jspb.asserts.fail("Invalid wire encoding for field.");
              }
            }),
            (jspb.BinaryReader.prototype.registerReadCallback = function (
              e,
              t
            ) {
              null === this.readCallbacks_ && (this.readCallbacks_ = {}),
                jspb.asserts.assert(!this.readCallbacks_[e]),
                (this.readCallbacks_[e] = t);
            }),
            (jspb.BinaryReader.prototype.runReadCallback = function (e) {
              return (
                jspb.asserts.assert(null !== this.readCallbacks_),
                (e = this.readCallbacks_[e]),
                jspb.asserts.assert(e),
                e(this)
              );
            }),
            (jspb.BinaryReader.prototype.readAny = function (e) {
              this.nextWireType_ = jspb.BinaryConstants.FieldTypeToWireType(e);
              var t = jspb.BinaryConstants.FieldType;
              switch (e) {
                case t.DOUBLE:
                  return this.readDouble();
                case t.FLOAT:
                  return this.readFloat();
                case t.INT64:
                  return this.readInt64();
                case t.UINT64:
                  return this.readUint64();
                case t.INT32:
                  return this.readInt32();
                case t.FIXED64:
                  return this.readFixed64();
                case t.FIXED32:
                  return this.readFixed32();
                case t.BOOL:
                  return this.readBool();
                case t.STRING:
                  return this.readString();
                case t.GROUP:
                  jspb.asserts.fail(
                    "Group field type not supported in readAny()"
                  );
                case t.MESSAGE:
                  jspb.asserts.fail(
                    "Message field type not supported in readAny()"
                  );
                case t.BYTES:
                  return this.readBytes();
                case t.UINT32:
                  return this.readUint32();
                case t.ENUM:
                  return this.readEnum();
                case t.SFIXED32:
                  return this.readSfixed32();
                case t.SFIXED64:
                  return this.readSfixed64();
                case t.SINT32:
                  return this.readSint32();
                case t.SINT64:
                  return this.readSint64();
                case t.FHASH64:
                  return this.readFixedHash64();
                case t.VHASH64:
                  return this.readVarintHash64();
                default:
                  jspb.asserts.fail("Invalid field type in readAny()");
              }
              return 0;
            }),
            (jspb.BinaryReader.prototype.readMessage = function (e, t) {
              jspb.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED
              );
              var o = this.decoder_.getEnd(),
                r = this.decoder_.readUnsignedVarint32();
              (r = this.decoder_.getCursor() + r),
                this.decoder_.setEnd(r),
                t(e, this),
                this.decoder_.setCursor(r),
                this.decoder_.setEnd(o);
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readMessage",
              jspb.BinaryReader.prototype.readMessage
            ),
            (jspb.BinaryReader.prototype.readGroup = function (e, t, o) {
              jspb.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP
              ),
                jspb.asserts.assert(this.nextField_ == e),
                o(t, this),
                this.error_ ||
                  this.nextWireType_ ==
                    jspb.BinaryConstants.WireType.END_GROUP ||
                  (jspb.asserts.fail(
                    "Group submessage did not end with an END_GROUP tag"
                  ),
                  (this.error_ = !0));
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readGroup",
              jspb.BinaryReader.prototype.readGroup
            ),
            (jspb.BinaryReader.prototype.getFieldDecoder = function () {
              jspb.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED
              );
              var e = this.decoder_.readUnsignedVarint32(),
                t = this.decoder_.getCursor(),
                o = t + e;
              return (
                (e = jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(), t, e)),
                this.decoder_.setCursor(o),
                e
              );
            }),
            (jspb.BinaryReader.prototype.readInt32 = function () {
              return (
                jspb.asserts.assert(
                  this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
                ),
                this.decoder_.readSignedVarint32()
              );
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readInt32",
              jspb.BinaryReader.prototype.readInt32
            ),
            (jspb.BinaryReader.prototype.readInt32String = function () {
              return (
                jspb.asserts.assert(
                  this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
                ),
                this.decoder_.readSignedVarint32String()
              );
            }),
            (jspb.BinaryReader.prototype.readInt64 = function () {
              return (
                jspb.asserts.assert(
                  this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
                ),
                this.decoder_.readSignedVarint64()
              );
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readInt64",
              jspb.BinaryReader.prototype.readInt64
            ),
            (jspb.BinaryReader.prototype.readInt64String = function () {
              return (
                jspb.asserts.assert(
                  this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
                ),
                this.decoder_.readSignedVarint64String()
              );
            }),
            (jspb.BinaryReader.prototype.readUint32 = function () {
              return (
                jspb.asserts.assert(
                  this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
                ),
                this.decoder_.readUnsignedVarint32()
              );
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readUint32",
              jspb.BinaryReader.prototype.readUint32
            ),
            (jspb.BinaryReader.prototype.readUint32String = function () {
              return (
                jspb.asserts.assert(
                  this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
                ),
                this.decoder_.readUnsignedVarint32String()
              );
            }),
            (jspb.BinaryReader.prototype.readUint64 = function () {
              return (
                jspb.asserts.assert(
                  this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
                ),
                this.decoder_.readUnsignedVarint64()
              );
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readUint64",
              jspb.BinaryReader.prototype.readUint64
            ),
            (jspb.BinaryReader.prototype.readUint64String = function () {
              return (
                jspb.asserts.assert(
                  this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
                ),
                this.decoder_.readUnsignedVarint64String()
              );
            }),
            (jspb.BinaryReader.prototype.readSint32 = function () {
              return (
                jspb.asserts.assert(
                  this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
                ),
                this.decoder_.readZigzagVarint32()
              );
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readSint32",
              jspb.BinaryReader.prototype.readSint32
            ),
            (jspb.BinaryReader.prototype.readSint64 = function () {
              return (
                jspb.asserts.assert(
                  this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
                ),
                this.decoder_.readZigzagVarint64()
              );
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readSint64",
              jspb.BinaryReader.prototype.readSint64
            ),
            (jspb.BinaryReader.prototype.readSint64String = function () {
              return (
                jspb.asserts.assert(
                  this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
                ),
                this.decoder_.readZigzagVarint64String()
              );
            }),
            (jspb.BinaryReader.prototype.readFixed32 = function () {
              return (
                jspb.asserts.assert(
                  this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32
                ),
                this.decoder_.readUint32()
              );
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readFixed32",
              jspb.BinaryReader.prototype.readFixed32
            ),
            (jspb.BinaryReader.prototype.readFixed64 = function () {
              return (
                jspb.asserts.assert(
                  this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64
                ),
                this.decoder_.readUint64()
              );
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readFixed64",
              jspb.BinaryReader.prototype.readFixed64
            ),
            (jspb.BinaryReader.prototype.readFixed64String = function () {
              return (
                jspb.asserts.assert(
                  this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64
                ),
                this.decoder_.readUint64String()
              );
            }),
            (jspb.BinaryReader.prototype.readSfixed32 = function () {
              return (
                jspb.asserts.assert(
                  this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32
                ),
                this.decoder_.readInt32()
              );
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readSfixed32",
              jspb.BinaryReader.prototype.readSfixed32
            ),
            (jspb.BinaryReader.prototype.readSfixed32String = function () {
              return (
                jspb.asserts.assert(
                  this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32
                ),
                this.decoder_.readInt32().toString()
              );
            }),
            (jspb.BinaryReader.prototype.readSfixed64 = function () {
              return (
                jspb.asserts.assert(
                  this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64
                ),
                this.decoder_.readInt64()
              );
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readSfixed64",
              jspb.BinaryReader.prototype.readSfixed64
            ),
            (jspb.BinaryReader.prototype.readSfixed64String = function () {
              return (
                jspb.asserts.assert(
                  this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64
                ),
                this.decoder_.readInt64String()
              );
            }),
            (jspb.BinaryReader.prototype.readFloat = function () {
              return (
                jspb.asserts.assert(
                  this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32
                ),
                this.decoder_.readFloat()
              );
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readFloat",
              jspb.BinaryReader.prototype.readFloat
            ),
            (jspb.BinaryReader.prototype.readDouble = function () {
              return (
                jspb.asserts.assert(
                  this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64
                ),
                this.decoder_.readDouble()
              );
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readDouble",
              jspb.BinaryReader.prototype.readDouble
            ),
            (jspb.BinaryReader.prototype.readBool = function () {
              return (
                jspb.asserts.assert(
                  this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
                ),
                !!this.decoder_.readUnsignedVarint32()
              );
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readBool",
              jspb.BinaryReader.prototype.readBool
            ),
            (jspb.BinaryReader.prototype.readEnum = function () {
              return (
                jspb.asserts.assert(
                  this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
                ),
                this.decoder_.readSignedVarint64()
              );
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readEnum",
              jspb.BinaryReader.prototype.readEnum
            ),
            (jspb.BinaryReader.prototype.readString = function () {
              jspb.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED
              );
              var e = this.decoder_.readUnsignedVarint32();
              return this.decoder_.readString(e);
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readString",
              jspb.BinaryReader.prototype.readString
            ),
            (jspb.BinaryReader.prototype.readBytes = function () {
              jspb.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED
              );
              var e = this.decoder_.readUnsignedVarint32();
              return this.decoder_.readBytes(e);
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readBytes",
              jspb.BinaryReader.prototype.readBytes
            ),
            (jspb.BinaryReader.prototype.readVarintHash64 = function () {
              return (
                jspb.asserts.assert(
                  this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
                ),
                this.decoder_.readVarintHash64()
              );
            }),
            (jspb.BinaryReader.prototype.readSintHash64 = function () {
              return (
                jspb.asserts.assert(
                  this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
                ),
                this.decoder_.readZigzagVarintHash64()
              );
            }),
            (jspb.BinaryReader.prototype.readSplitVarint64 = function (e) {
              return (
                jspb.asserts.assert(
                  this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
                ),
                this.decoder_.readSplitVarint64(e)
              );
            }),
            (jspb.BinaryReader.prototype.readSplitZigzagVarint64 = function (
              e
            ) {
              return (
                jspb.asserts.assert(
                  this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
                ),
                this.decoder_.readSplitVarint64(function (t, o) {
                  return jspb.utils.fromZigzag64(t, o, e);
                })
              );
            }),
            (jspb.BinaryReader.prototype.readFixedHash64 = function () {
              return (
                jspb.asserts.assert(
                  this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64
                ),
                this.decoder_.readFixedHash64()
              );
            }),
            (jspb.BinaryReader.prototype.readSplitFixed64 = function (e) {
              return (
                jspb.asserts.assert(
                  this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64
                ),
                this.decoder_.readSplitFixed64(e)
              );
            }),
            (jspb.BinaryReader.prototype.readPackedField_ = function (e) {
              jspb.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED
              );
              var t = this.decoder_.readUnsignedVarint32();
              t = this.decoder_.getCursor() + t;
              for (var o = []; this.decoder_.getCursor() < t; )
                o.push(e.call(this.decoder_));
              return o;
            }),
            (jspb.BinaryReader.prototype.readPackedInt32 = function () {
              return this.readPackedField_(this.decoder_.readSignedVarint32);
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readPackedInt32",
              jspb.BinaryReader.prototype.readPackedInt32
            ),
            (jspb.BinaryReader.prototype.readPackedInt32String = function () {
              return this.readPackedField_(
                this.decoder_.readSignedVarint32String
              );
            }),
            (jspb.BinaryReader.prototype.readPackedInt64 = function () {
              return this.readPackedField_(this.decoder_.readSignedVarint64);
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readPackedInt64",
              jspb.BinaryReader.prototype.readPackedInt64
            ),
            (jspb.BinaryReader.prototype.readPackedInt64String = function () {
              return this.readPackedField_(
                this.decoder_.readSignedVarint64String
              );
            }),
            (jspb.BinaryReader.prototype.readPackedUint32 = function () {
              return this.readPackedField_(this.decoder_.readUnsignedVarint32);
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readPackedUint32",
              jspb.BinaryReader.prototype.readPackedUint32
            ),
            (jspb.BinaryReader.prototype.readPackedUint32String = function () {
              return this.readPackedField_(
                this.decoder_.readUnsignedVarint32String
              );
            }),
            (jspb.BinaryReader.prototype.readPackedUint64 = function () {
              return this.readPackedField_(this.decoder_.readUnsignedVarint64);
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readPackedUint64",
              jspb.BinaryReader.prototype.readPackedUint64
            ),
            (jspb.BinaryReader.prototype.readPackedUint64String = function () {
              return this.readPackedField_(
                this.decoder_.readUnsignedVarint64String
              );
            }),
            (jspb.BinaryReader.prototype.readPackedSint32 = function () {
              return this.readPackedField_(this.decoder_.readZigzagVarint32);
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readPackedSint32",
              jspb.BinaryReader.prototype.readPackedSint32
            ),
            (jspb.BinaryReader.prototype.readPackedSint64 = function () {
              return this.readPackedField_(this.decoder_.readZigzagVarint64);
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readPackedSint64",
              jspb.BinaryReader.prototype.readPackedSint64
            ),
            (jspb.BinaryReader.prototype.readPackedSint64String = function () {
              return this.readPackedField_(
                this.decoder_.readZigzagVarint64String
              );
            }),
            (jspb.BinaryReader.prototype.readPackedFixed32 = function () {
              return this.readPackedField_(this.decoder_.readUint32);
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readPackedFixed32",
              jspb.BinaryReader.prototype.readPackedFixed32
            ),
            (jspb.BinaryReader.prototype.readPackedFixed64 = function () {
              return this.readPackedField_(this.decoder_.readUint64);
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readPackedFixed64",
              jspb.BinaryReader.prototype.readPackedFixed64
            ),
            (jspb.BinaryReader.prototype.readPackedFixed64String = function () {
              return this.readPackedField_(this.decoder_.readUint64String);
            }),
            (jspb.BinaryReader.prototype.readPackedSfixed32 = function () {
              return this.readPackedField_(this.decoder_.readInt32);
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readPackedSfixed32",
              jspb.BinaryReader.prototype.readPackedSfixed32
            ),
            (jspb.BinaryReader.prototype.readPackedSfixed64 = function () {
              return this.readPackedField_(this.decoder_.readInt64);
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readPackedSfixed64",
              jspb.BinaryReader.prototype.readPackedSfixed64
            ),
            (jspb.BinaryReader.prototype.readPackedSfixed64String =
              function () {
                return this.readPackedField_(this.decoder_.readInt64String);
              }),
            (jspb.BinaryReader.prototype.readPackedFloat = function () {
              return this.readPackedField_(this.decoder_.readFloat);
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readPackedFloat",
              jspb.BinaryReader.prototype.readPackedFloat
            ),
            (jspb.BinaryReader.prototype.readPackedDouble = function () {
              return this.readPackedField_(this.decoder_.readDouble);
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readPackedDouble",
              jspb.BinaryReader.prototype.readPackedDouble
            ),
            (jspb.BinaryReader.prototype.readPackedBool = function () {
              return this.readPackedField_(this.decoder_.readBool);
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readPackedBool",
              jspb.BinaryReader.prototype.readPackedBool
            ),
            (jspb.BinaryReader.prototype.readPackedEnum = function () {
              return this.readPackedField_(this.decoder_.readEnum);
            }),
            goog.exportProperty(
              jspb.BinaryReader.prototype,
              "readPackedEnum",
              jspb.BinaryReader.prototype.readPackedEnum
            ),
            (jspb.BinaryReader.prototype.readPackedVarintHash64 = function () {
              return this.readPackedField_(this.decoder_.readVarintHash64);
            }),
            (jspb.BinaryReader.prototype.readPackedFixedHash64 = function () {
              return this.readPackedField_(this.decoder_.readFixedHash64);
            }),
            (jspb.BinaryEncoder = function () {
              this.buffer_ = [];
            }),
            (jspb.BinaryEncoder.prototype.length = function () {
              return this.buffer_.length;
            }),
            (jspb.BinaryEncoder.prototype.end = function () {
              var e = this.buffer_;
              return (this.buffer_ = []), e;
            }),
            (jspb.BinaryEncoder.prototype.writeSplitVarint64 = function (e, t) {
              for (
                jspb.asserts.assert(e == Math.floor(e)),
                  jspb.asserts.assert(t == Math.floor(t)),
                  jspb.asserts.assert(
                    0 <= e && e < jspb.BinaryConstants.TWO_TO_32
                  ),
                  jspb.asserts.assert(
                    0 <= t && t < jspb.BinaryConstants.TWO_TO_32
                  );
                0 < t || 127 < e;

              )
                this.buffer_.push((127 & e) | 128),
                  (e = ((e >>> 7) | (t << 25)) >>> 0),
                  (t >>>= 7);
              this.buffer_.push(e);
            }),
            (jspb.BinaryEncoder.prototype.writeSplitFixed64 = function (e, t) {
              jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(t == Math.floor(t)),
                jspb.asserts.assert(
                  0 <= e && e < jspb.BinaryConstants.TWO_TO_32
                ),
                jspb.asserts.assert(
                  0 <= t && t < jspb.BinaryConstants.TWO_TO_32
                ),
                this.writeUint32(e),
                this.writeUint32(t);
            }),
            (jspb.BinaryEncoder.prototype.writeUnsignedVarint32 = function (e) {
              for (
                jspb.asserts.assert(e == Math.floor(e)),
                  jspb.asserts.assert(
                    0 <= e && e < jspb.BinaryConstants.TWO_TO_32
                  );
                127 < e;

              )
                this.buffer_.push((127 & e) | 128), (e >>>= 7);
              this.buffer_.push(e);
            }),
            (jspb.BinaryEncoder.prototype.writeSignedVarint32 = function (e) {
              if (
                (jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(
                  e >= -jspb.BinaryConstants.TWO_TO_31 &&
                    e < jspb.BinaryConstants.TWO_TO_31
                ),
                0 <= e)
              )
                this.writeUnsignedVarint32(e);
              else {
                for (var t = 0; 9 > t; t++)
                  this.buffer_.push((127 & e) | 128), (e >>= 7);
                this.buffer_.push(1);
              }
            }),
            (jspb.BinaryEncoder.prototype.writeUnsignedVarint64 = function (e) {
              jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(
                  0 <= e && e < jspb.BinaryConstants.TWO_TO_64
                ),
                jspb.utils.splitInt64(e),
                this.writeSplitVarint64(
                  jspb.utils.split64Low,
                  jspb.utils.split64High
                );
            }),
            (jspb.BinaryEncoder.prototype.writeSignedVarint64 = function (e) {
              jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(
                  e >= -jspb.BinaryConstants.TWO_TO_63 &&
                    e < jspb.BinaryConstants.TWO_TO_63
                ),
                jspb.utils.splitInt64(e),
                this.writeSplitVarint64(
                  jspb.utils.split64Low,
                  jspb.utils.split64High
                );
            }),
            (jspb.BinaryEncoder.prototype.writeZigzagVarint32 = function (e) {
              jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(
                  e >= -jspb.BinaryConstants.TWO_TO_31 &&
                    e < jspb.BinaryConstants.TWO_TO_31
                ),
                this.writeUnsignedVarint32(((e << 1) ^ (e >> 31)) >>> 0);
            }),
            (jspb.BinaryEncoder.prototype.writeZigzagVarint64 = function (e) {
              jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(
                  e >= -jspb.BinaryConstants.TWO_TO_63 &&
                    e < jspb.BinaryConstants.TWO_TO_63
                ),
                jspb.utils.splitZigzag64(e),
                this.writeSplitVarint64(
                  jspb.utils.split64Low,
                  jspb.utils.split64High
                );
            }),
            (jspb.BinaryEncoder.prototype.writeZigzagVarint64String = function (
              e
            ) {
              this.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(e));
            }),
            (jspb.BinaryEncoder.prototype.writeZigzagVarintHash64 = function (
              e
            ) {
              var t = this;
              jspb.utils.splitHash64(e),
                jspb.utils.toZigzag64(
                  jspb.utils.split64Low,
                  jspb.utils.split64High,
                  function (e, o) {
                    t.writeSplitVarint64(e >>> 0, o >>> 0);
                  }
                );
            }),
            (jspb.BinaryEncoder.prototype.writeUint8 = function (e) {
              jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(0 <= e && 256 > e),
                this.buffer_.push((e >>> 0) & 255);
            }),
            (jspb.BinaryEncoder.prototype.writeUint16 = function (e) {
              jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(0 <= e && 65536 > e),
                this.buffer_.push((e >>> 0) & 255),
                this.buffer_.push((e >>> 8) & 255);
            }),
            (jspb.BinaryEncoder.prototype.writeUint32 = function (e) {
              jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(
                  0 <= e && e < jspb.BinaryConstants.TWO_TO_32
                ),
                this.buffer_.push((e >>> 0) & 255),
                this.buffer_.push((e >>> 8) & 255),
                this.buffer_.push((e >>> 16) & 255),
                this.buffer_.push((e >>> 24) & 255);
            }),
            (jspb.BinaryEncoder.prototype.writeUint64 = function (e) {
              jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(
                  0 <= e && e < jspb.BinaryConstants.TWO_TO_64
                ),
                jspb.utils.splitUint64(e),
                this.writeUint32(jspb.utils.split64Low),
                this.writeUint32(jspb.utils.split64High);
            }),
            (jspb.BinaryEncoder.prototype.writeInt8 = function (e) {
              jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(-128 <= e && 128 > e),
                this.buffer_.push((e >>> 0) & 255);
            }),
            (jspb.BinaryEncoder.prototype.writeInt16 = function (e) {
              jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(-32768 <= e && 32768 > e),
                this.buffer_.push((e >>> 0) & 255),
                this.buffer_.push((e >>> 8) & 255);
            }),
            (jspb.BinaryEncoder.prototype.writeInt32 = function (e) {
              jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(
                  e >= -jspb.BinaryConstants.TWO_TO_31 &&
                    e < jspb.BinaryConstants.TWO_TO_31
                ),
                this.buffer_.push((e >>> 0) & 255),
                this.buffer_.push((e >>> 8) & 255),
                this.buffer_.push((e >>> 16) & 255),
                this.buffer_.push((e >>> 24) & 255);
            }),
            (jspb.BinaryEncoder.prototype.writeInt64 = function (e) {
              jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(
                  e >= -jspb.BinaryConstants.TWO_TO_63 &&
                    e < jspb.BinaryConstants.TWO_TO_63
                ),
                jspb.utils.splitInt64(e),
                this.writeSplitFixed64(
                  jspb.utils.split64Low,
                  jspb.utils.split64High
                );
            }),
            (jspb.BinaryEncoder.prototype.writeInt64String = function (e) {
              jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(
                  +e >= -jspb.BinaryConstants.TWO_TO_63 &&
                    +e < jspb.BinaryConstants.TWO_TO_63
                ),
                jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(e)),
                this.writeSplitFixed64(
                  jspb.utils.split64Low,
                  jspb.utils.split64High
                );
            }),
            (jspb.BinaryEncoder.prototype.writeFloat = function (e) {
              jspb.asserts.assert(
                1 / 0 === e ||
                  -1 / 0 === e ||
                  isNaN(e) ||
                  (e >= -jspb.BinaryConstants.FLOAT32_MAX &&
                    e <= jspb.BinaryConstants.FLOAT32_MAX)
              ),
                jspb.utils.splitFloat32(e),
                this.writeUint32(jspb.utils.split64Low);
            }),
            (jspb.BinaryEncoder.prototype.writeDouble = function (e) {
              jspb.asserts.assert(
                1 / 0 === e ||
                  -1 / 0 === e ||
                  isNaN(e) ||
                  (e >= -jspb.BinaryConstants.FLOAT64_MAX &&
                    e <= jspb.BinaryConstants.FLOAT64_MAX)
              ),
                jspb.utils.splitFloat64(e),
                this.writeUint32(jspb.utils.split64Low),
                this.writeUint32(jspb.utils.split64High);
            }),
            (jspb.BinaryEncoder.prototype.writeBool = function (e) {
              jspb.asserts.assert(
                "boolean" == typeof e || "number" == typeof e
              ),
                this.buffer_.push(e ? 1 : 0);
            }),
            (jspb.BinaryEncoder.prototype.writeEnum = function (e) {
              jspb.asserts.assert(e == Math.floor(e)),
                jspb.asserts.assert(
                  e >= -jspb.BinaryConstants.TWO_TO_31 &&
                    e < jspb.BinaryConstants.TWO_TO_31
                ),
                this.writeSignedVarint32(e);
            }),
            (jspb.BinaryEncoder.prototype.writeBytes = function (e) {
              this.buffer_.push.apply(this.buffer_, e);
            }),
            (jspb.BinaryEncoder.prototype.writeVarintHash64 = function (e) {
              jspb.utils.splitHash64(e),
                this.writeSplitVarint64(
                  jspb.utils.split64Low,
                  jspb.utils.split64High
                );
            }),
            (jspb.BinaryEncoder.prototype.writeFixedHash64 = function (e) {
              jspb.utils.splitHash64(e),
                this.writeUint32(jspb.utils.split64Low),
                this.writeUint32(jspb.utils.split64High);
            }),
            (jspb.BinaryEncoder.prototype.writeString = function (e) {
              var t = this.buffer_.length;
              jspb.asserts.assertString(e);
              for (var o = 0; o < e.length; o++) {
                var r = e.charCodeAt(o);
                if (128 > r) this.buffer_.push(r);
                else if (2048 > r)
                  this.buffer_.push((r >> 6) | 192),
                    this.buffer_.push((63 & r) | 128);
                else if (65536 > r)
                  if (55296 <= r && 56319 >= r && o + 1 < e.length) {
                    var s = e.charCodeAt(o + 1);
                    56320 <= s &&
                      57343 >= s &&
                      ((r = 1024 * (r - 55296) + s - 56320 + 65536),
                      this.buffer_.push((r >> 18) | 240),
                      this.buffer_.push(((r >> 12) & 63) | 128),
                      this.buffer_.push(((r >> 6) & 63) | 128),
                      this.buffer_.push((63 & r) | 128),
                      o++);
                  } else
                    this.buffer_.push((r >> 12) | 224),
                      this.buffer_.push(((r >> 6) & 63) | 128),
                      this.buffer_.push((63 & r) | 128);
              }
              return this.buffer_.length - t;
            }),
            (jspb.arith = {}),
            (jspb.arith.UInt64 = function (e, t) {
              (this.lo = e), (this.hi = t);
            }),
            (jspb.arith.UInt64.prototype.cmp = function (e) {
              return this.hi < e.hi || (this.hi == e.hi && this.lo < e.lo)
                ? -1
                : this.hi == e.hi && this.lo == e.lo
                ? 0
                : 1;
            }),
            (jspb.arith.UInt64.prototype.rightShift = function () {
              return new jspb.arith.UInt64(
                ((this.lo >>> 1) | ((1 & this.hi) << 31)) >>> 0,
                (this.hi >>> 1) >>> 0
              );
            }),
            (jspb.arith.UInt64.prototype.leftShift = function () {
              return new jspb.arith.UInt64(
                (this.lo << 1) >>> 0,
                ((this.hi << 1) | (this.lo >>> 31)) >>> 0
              );
            }),
            (jspb.arith.UInt64.prototype.msb = function () {
              return !!(2147483648 & this.hi);
            }),
            (jspb.arith.UInt64.prototype.lsb = function () {
              return !!(1 & this.lo);
            }),
            (jspb.arith.UInt64.prototype.zero = function () {
              return 0 == this.lo && 0 == this.hi;
            }),
            (jspb.arith.UInt64.prototype.add = function (e) {
              return new jspb.arith.UInt64(
                (((this.lo + e.lo) & 4294967295) >>> 0) >>> 0,
                ((((this.hi + e.hi) & 4294967295) >>> 0) +
                  (4294967296 <= this.lo + e.lo ? 1 : 0)) >>>
                  0
              );
            }),
            (jspb.arith.UInt64.prototype.sub = function (e) {
              return new jspb.arith.UInt64(
                (((this.lo - e.lo) & 4294967295) >>> 0) >>> 0,
                ((((this.hi - e.hi) & 4294967295) >>> 0) -
                  (0 > this.lo - e.lo ? 1 : 0)) >>>
                  0
              );
            }),
            (jspb.arith.UInt64.mul32x32 = function (e, t) {
              var o = 65535 & e,
                r = 65535 & t,
                s = t >>> 16;
              for (
                t =
                  o * r +
                  65536 * ((o * s) & 65535) +
                  65536 * (((e >>>= 16) * r) & 65535),
                  o = e * s + ((o * s) >>> 16) + ((e * r) >>> 16);
                4294967296 <= t;

              )
                (t -= 4294967296), (o += 1);
              return new jspb.arith.UInt64(t >>> 0, o >>> 0);
            }),
            (jspb.arith.UInt64.prototype.mul = function (e) {
              var t = jspb.arith.UInt64.mul32x32(this.lo, e);
              return (
                ((e = jspb.arith.UInt64.mul32x32(this.hi, e)).hi = e.lo),
                (e.lo = 0),
                t.add(e)
              );
            }),
            (jspb.arith.UInt64.prototype.div = function (e) {
              if (0 == e) return [];
              var t = new jspb.arith.UInt64(0, 0),
                o = new jspb.arith.UInt64(this.lo, this.hi);
              e = new jspb.arith.UInt64(e, 0);
              for (var r = new jspb.arith.UInt64(1, 0); !e.msb(); )
                (e = e.leftShift()), (r = r.leftShift());
              for (; !r.zero(); )
                0 >= e.cmp(o) && ((t = t.add(r)), (o = o.sub(e))),
                  (e = e.rightShift()),
                  (r = r.rightShift());
              return [t, o];
            }),
            (jspb.arith.UInt64.prototype.toString = function () {
              for (var e = "", t = this; !t.zero(); ) {
                var o = (t = t.div(10))[0];
                (e = t[1].lo + e), (t = o);
              }
              return "" == e && (e = "0"), e;
            }),
            (jspb.arith.UInt64.fromString = function (e) {
              for (
                var t = new jspb.arith.UInt64(0, 0),
                  o = new jspb.arith.UInt64(0, 0),
                  r = 0;
                r < e.length;
                r++
              ) {
                if ("0" > e[r] || "9" < e[r]) return null;
                var s = parseInt(e[r], 10);
                (o.lo = s), (t = t.mul(10).add(o));
              }
              return t;
            }),
            (jspb.arith.UInt64.prototype.clone = function () {
              return new jspb.arith.UInt64(this.lo, this.hi);
            }),
            (jspb.arith.Int64 = function (e, t) {
              (this.lo = e), (this.hi = t);
            }),
            (jspb.arith.Int64.prototype.add = function (e) {
              return new jspb.arith.Int64(
                (((this.lo + e.lo) & 4294967295) >>> 0) >>> 0,
                ((((this.hi + e.hi) & 4294967295) >>> 0) +
                  (4294967296 <= this.lo + e.lo ? 1 : 0)) >>>
                  0
              );
            }),
            (jspb.arith.Int64.prototype.sub = function (e) {
              return new jspb.arith.Int64(
                (((this.lo - e.lo) & 4294967295) >>> 0) >>> 0,
                ((((this.hi - e.hi) & 4294967295) >>> 0) -
                  (0 > this.lo - e.lo ? 1 : 0)) >>>
                  0
              );
            }),
            (jspb.arith.Int64.prototype.clone = function () {
              return new jspb.arith.Int64(this.lo, this.hi);
            }),
            (jspb.arith.Int64.prototype.toString = function () {
              var e = 0 != (2147483648 & this.hi),
                t = new jspb.arith.UInt64(this.lo, this.hi);
              return (
                e && (t = new jspb.arith.UInt64(0, 0).sub(t)),
                (e ? "-" : "") + t.toString()
              );
            }),
            (jspb.arith.Int64.fromString = function (e) {
              var t = 0 < e.length && "-" == e[0];
              return (
                t && (e = e.substring(1)),
                null === (e = jspb.arith.UInt64.fromString(e))
                  ? null
                  : (t && (e = new jspb.arith.UInt64(0, 0).sub(e)),
                    new jspb.arith.Int64(e.lo, e.hi))
              );
            }),
            (jspb.BinaryWriter = function () {
              (this.blocks_ = []),
                (this.totalLength_ = 0),
                (this.encoder_ = new jspb.BinaryEncoder()),
                (this.bookmarks_ = []);
            }),
            (jspb.BinaryWriter.prototype.appendUint8Array_ = function (e) {
              var t = this.encoder_.end();
              this.blocks_.push(t),
                this.blocks_.push(e),
                (this.totalLength_ += t.length + e.length);
            }),
            (jspb.BinaryWriter.prototype.beginDelimited_ = function (e) {
              return (
                this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.DELIMITED
                ),
                (e = this.encoder_.end()),
                this.blocks_.push(e),
                (this.totalLength_ += e.length),
                e.push(this.totalLength_),
                e
              );
            }),
            (jspb.BinaryWriter.prototype.endDelimited_ = function (e) {
              var t = e.pop();
              for (
                t = this.totalLength_ + this.encoder_.length() - t,
                  jspb.asserts.assert(0 <= t);
                127 < t;

              )
                e.push((127 & t) | 128), (t >>>= 7), this.totalLength_++;
              e.push(t), this.totalLength_++;
            }),
            (jspb.BinaryWriter.prototype.writeSerializedMessage = function (
              e,
              t,
              o
            ) {
              this.appendUint8Array_(e.subarray(t, o));
            }),
            (jspb.BinaryWriter.prototype.maybeWriteSerializedMessage =
              function (e, t, o) {
                null != e &&
                  null != t &&
                  null != o &&
                  this.writeSerializedMessage(e, t, o);
              }),
            (jspb.BinaryWriter.prototype.reset = function () {
              (this.blocks_ = []),
                this.encoder_.end(),
                (this.totalLength_ = 0),
                (this.bookmarks_ = []);
            }),
            (jspb.BinaryWriter.prototype.getResultBuffer = function () {
              jspb.asserts.assert(0 == this.bookmarks_.length);
              for (
                var e = new Uint8Array(
                    this.totalLength_ + this.encoder_.length()
                  ),
                  t = this.blocks_,
                  o = t.length,
                  r = 0,
                  s = 0;
                s < o;
                s++
              ) {
                var n = t[s];
                e.set(n, r), (r += n.length);
              }
              return (
                (t = this.encoder_.end()),
                e.set(t, r),
                (r += t.length),
                jspb.asserts.assert(r == e.length),
                (this.blocks_ = [e]),
                e
              );
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "getResultBuffer",
              jspb.BinaryWriter.prototype.getResultBuffer
            ),
            (jspb.BinaryWriter.prototype.getResultBase64String = function (e) {
              return goog.crypt.base64.encodeByteArray(
                this.getResultBuffer(),
                e
              );
            }),
            (jspb.BinaryWriter.prototype.beginSubMessage = function (e) {
              this.bookmarks_.push(this.beginDelimited_(e));
            }),
            (jspb.BinaryWriter.prototype.endSubMessage = function () {
              jspb.asserts.assert(0 <= this.bookmarks_.length),
                this.endDelimited_(this.bookmarks_.pop());
            }),
            (jspb.BinaryWriter.prototype.writeFieldHeader_ = function (e, t) {
              jspb.asserts.assert(1 <= e && e == Math.floor(e)),
                this.encoder_.writeUnsignedVarint32(8 * e + t);
            }),
            (jspb.BinaryWriter.prototype.writeAny = function (e, t, o) {
              var r = jspb.BinaryConstants.FieldType;
              switch (e) {
                case r.DOUBLE:
                  this.writeDouble(t, o);
                  break;
                case r.FLOAT:
                  this.writeFloat(t, o);
                  break;
                case r.INT64:
                  this.writeInt64(t, o);
                  break;
                case r.UINT64:
                  this.writeUint64(t, o);
                  break;
                case r.INT32:
                  this.writeInt32(t, o);
                  break;
                case r.FIXED64:
                  this.writeFixed64(t, o);
                  break;
                case r.FIXED32:
                  this.writeFixed32(t, o);
                  break;
                case r.BOOL:
                  this.writeBool(t, o);
                  break;
                case r.STRING:
                  this.writeString(t, o);
                  break;
                case r.GROUP:
                  jspb.asserts.fail(
                    "Group field type not supported in writeAny()"
                  );
                  break;
                case r.MESSAGE:
                  jspb.asserts.fail(
                    "Message field type not supported in writeAny()"
                  );
                  break;
                case r.BYTES:
                  this.writeBytes(t, o);
                  break;
                case r.UINT32:
                  this.writeUint32(t, o);
                  break;
                case r.ENUM:
                  this.writeEnum(t, o);
                  break;
                case r.SFIXED32:
                  this.writeSfixed32(t, o);
                  break;
                case r.SFIXED64:
                  this.writeSfixed64(t, o);
                  break;
                case r.SINT32:
                  this.writeSint32(t, o);
                  break;
                case r.SINT64:
                  this.writeSint64(t, o);
                  break;
                case r.FHASH64:
                  this.writeFixedHash64(t, o);
                  break;
                case r.VHASH64:
                  this.writeVarintHash64(t, o);
                  break;
                default:
                  jspb.asserts.fail("Invalid field type in writeAny()");
              }
            }),
            (jspb.BinaryWriter.prototype.writeUnsignedVarint32_ = function (
              e,
              t
            ) {
              null != t &&
                (this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.VARINT
                ),
                this.encoder_.writeUnsignedVarint32(t));
            }),
            (jspb.BinaryWriter.prototype.writeSignedVarint32_ = function (
              e,
              t
            ) {
              null != t &&
                (this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.VARINT
                ),
                this.encoder_.writeSignedVarint32(t));
            }),
            (jspb.BinaryWriter.prototype.writeUnsignedVarint64_ = function (
              e,
              t
            ) {
              null != t &&
                (this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.VARINT
                ),
                this.encoder_.writeUnsignedVarint64(t));
            }),
            (jspb.BinaryWriter.prototype.writeSignedVarint64_ = function (
              e,
              t
            ) {
              null != t &&
                (this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.VARINT
                ),
                this.encoder_.writeSignedVarint64(t));
            }),
            (jspb.BinaryWriter.prototype.writeZigzagVarint32_ = function (
              e,
              t
            ) {
              null != t &&
                (this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.VARINT
                ),
                this.encoder_.writeZigzagVarint32(t));
            }),
            (jspb.BinaryWriter.prototype.writeZigzagVarint64_ = function (
              e,
              t
            ) {
              null != t &&
                (this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.VARINT
                ),
                this.encoder_.writeZigzagVarint64(t));
            }),
            (jspb.BinaryWriter.prototype.writeZigzagVarint64String_ = function (
              e,
              t
            ) {
              null != t &&
                (this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.VARINT
                ),
                this.encoder_.writeZigzagVarint64String(t));
            }),
            (jspb.BinaryWriter.prototype.writeZigzagVarintHash64_ = function (
              e,
              t
            ) {
              null != t &&
                (this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.VARINT
                ),
                this.encoder_.writeZigzagVarintHash64(t));
            }),
            (jspb.BinaryWriter.prototype.writeInt32 = function (e, t) {
              null != t &&
                (jspb.asserts.assert(
                  t >= -jspb.BinaryConstants.TWO_TO_31 &&
                    t < jspb.BinaryConstants.TWO_TO_31
                ),
                this.writeSignedVarint32_(e, t));
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeInt32",
              jspb.BinaryWriter.prototype.writeInt32
            ),
            (jspb.BinaryWriter.prototype.writeInt32String = function (e, t) {
              null != t &&
                ((t = parseInt(t, 10)),
                jspb.asserts.assert(
                  t >= -jspb.BinaryConstants.TWO_TO_31 &&
                    t < jspb.BinaryConstants.TWO_TO_31
                ),
                this.writeSignedVarint32_(e, t));
            }),
            (jspb.BinaryWriter.prototype.writeInt64 = function (e, t) {
              null != t &&
                (jspb.asserts.assert(
                  t >= -jspb.BinaryConstants.TWO_TO_63 &&
                    t < jspb.BinaryConstants.TWO_TO_63
                ),
                this.writeSignedVarint64_(e, t));
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeInt64",
              jspb.BinaryWriter.prototype.writeInt64
            ),
            (jspb.BinaryWriter.prototype.writeInt64String = function (e, t) {
              null != t &&
                ((t = jspb.arith.Int64.fromString(t)),
                this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
                this.encoder_.writeSplitVarint64(t.lo, t.hi));
            }),
            (jspb.BinaryWriter.prototype.writeUint32 = function (e, t) {
              null != t &&
                (jspb.asserts.assert(
                  0 <= t && t < jspb.BinaryConstants.TWO_TO_32
                ),
                this.writeUnsignedVarint32_(e, t));
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeUint32",
              jspb.BinaryWriter.prototype.writeUint32
            ),
            (jspb.BinaryWriter.prototype.writeUint32String = function (e, t) {
              null != t &&
                ((t = parseInt(t, 10)),
                jspb.asserts.assert(
                  0 <= t && t < jspb.BinaryConstants.TWO_TO_32
                ),
                this.writeUnsignedVarint32_(e, t));
            }),
            (jspb.BinaryWriter.prototype.writeUint64 = function (e, t) {
              null != t &&
                (jspb.asserts.assert(
                  0 <= t && t < jspb.BinaryConstants.TWO_TO_64
                ),
                this.writeUnsignedVarint64_(e, t));
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeUint64",
              jspb.BinaryWriter.prototype.writeUint64
            ),
            (jspb.BinaryWriter.prototype.writeUint64String = function (e, t) {
              null != t &&
                ((t = jspb.arith.UInt64.fromString(t)),
                this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
                this.encoder_.writeSplitVarint64(t.lo, t.hi));
            }),
            (jspb.BinaryWriter.prototype.writeSint32 = function (e, t) {
              null != t &&
                (jspb.asserts.assert(
                  t >= -jspb.BinaryConstants.TWO_TO_31 &&
                    t < jspb.BinaryConstants.TWO_TO_31
                ),
                this.writeZigzagVarint32_(e, t));
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeSint32",
              jspb.BinaryWriter.prototype.writeSint32
            ),
            (jspb.BinaryWriter.prototype.writeSint64 = function (e, t) {
              null != t &&
                (jspb.asserts.assert(
                  t >= -jspb.BinaryConstants.TWO_TO_63 &&
                    t < jspb.BinaryConstants.TWO_TO_63
                ),
                this.writeZigzagVarint64_(e, t));
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeSint64",
              jspb.BinaryWriter.prototype.writeSint64
            ),
            (jspb.BinaryWriter.prototype.writeSintHash64 = function (e, t) {
              null != t && this.writeZigzagVarintHash64_(e, t);
            }),
            (jspb.BinaryWriter.prototype.writeSint64String = function (e, t) {
              null != t && this.writeZigzagVarint64String_(e, t);
            }),
            (jspb.BinaryWriter.prototype.writeFixed32 = function (e, t) {
              null != t &&
                (jspb.asserts.assert(
                  0 <= t && t < jspb.BinaryConstants.TWO_TO_32
                ),
                this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.FIXED32
                ),
                this.encoder_.writeUint32(t));
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeFixed32",
              jspb.BinaryWriter.prototype.writeFixed32
            ),
            (jspb.BinaryWriter.prototype.writeFixed64 = function (e, t) {
              null != t &&
                (jspb.asserts.assert(
                  0 <= t && t < jspb.BinaryConstants.TWO_TO_64
                ),
                this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.FIXED64
                ),
                this.encoder_.writeUint64(t));
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeFixed64",
              jspb.BinaryWriter.prototype.writeFixed64
            ),
            (jspb.BinaryWriter.prototype.writeFixed64String = function (e, t) {
              null != t &&
                ((t = jspb.arith.UInt64.fromString(t)),
                this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.FIXED64
                ),
                this.encoder_.writeSplitFixed64(t.lo, t.hi));
            }),
            (jspb.BinaryWriter.prototype.writeSfixed32 = function (e, t) {
              null != t &&
                (jspb.asserts.assert(
                  t >= -jspb.BinaryConstants.TWO_TO_31 &&
                    t < jspb.BinaryConstants.TWO_TO_31
                ),
                this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.FIXED32
                ),
                this.encoder_.writeInt32(t));
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeSfixed32",
              jspb.BinaryWriter.prototype.writeSfixed32
            ),
            (jspb.BinaryWriter.prototype.writeSfixed64 = function (e, t) {
              null != t &&
                (jspb.asserts.assert(
                  t >= -jspb.BinaryConstants.TWO_TO_63 &&
                    t < jspb.BinaryConstants.TWO_TO_63
                ),
                this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.FIXED64
                ),
                this.encoder_.writeInt64(t));
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeSfixed64",
              jspb.BinaryWriter.prototype.writeSfixed64
            ),
            (jspb.BinaryWriter.prototype.writeSfixed64String = function (e, t) {
              null != t &&
                ((t = jspb.arith.Int64.fromString(t)),
                this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.FIXED64
                ),
                this.encoder_.writeSplitFixed64(t.lo, t.hi));
            }),
            (jspb.BinaryWriter.prototype.writeFloat = function (e, t) {
              null != t &&
                (this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.FIXED32
                ),
                this.encoder_.writeFloat(t));
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeFloat",
              jspb.BinaryWriter.prototype.writeFloat
            ),
            (jspb.BinaryWriter.prototype.writeDouble = function (e, t) {
              null != t &&
                (this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.FIXED64
                ),
                this.encoder_.writeDouble(t));
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeDouble",
              jspb.BinaryWriter.prototype.writeDouble
            ),
            (jspb.BinaryWriter.prototype.writeBool = function (e, t) {
              null != t &&
                (jspb.asserts.assert(
                  "boolean" == typeof t || "number" == typeof t
                ),
                this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
                this.encoder_.writeBool(t));
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeBool",
              jspb.BinaryWriter.prototype.writeBool
            ),
            (jspb.BinaryWriter.prototype.writeEnum = function (e, t) {
              null != t &&
                (jspb.asserts.assert(
                  t >= -jspb.BinaryConstants.TWO_TO_31 &&
                    t < jspb.BinaryConstants.TWO_TO_31
                ),
                this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
                this.encoder_.writeSignedVarint32(t));
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeEnum",
              jspb.BinaryWriter.prototype.writeEnum
            ),
            (jspb.BinaryWriter.prototype.writeString = function (e, t) {
              null != t &&
                ((e = this.beginDelimited_(e)),
                this.encoder_.writeString(t),
                this.endDelimited_(e));
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeString",
              jspb.BinaryWriter.prototype.writeString
            ),
            (jspb.BinaryWriter.prototype.writeBytes = function (e, t) {
              null != t &&
                ((t = jspb.utils.byteSourceToUint8Array(t)),
                this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.DELIMITED
                ),
                this.encoder_.writeUnsignedVarint32(t.length),
                this.appendUint8Array_(t));
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeBytes",
              jspb.BinaryWriter.prototype.writeBytes
            ),
            (jspb.BinaryWriter.prototype.writeMessage = function (e, t, o) {
              null != t &&
                ((e = this.beginDelimited_(e)),
                o(t, this),
                this.endDelimited_(e));
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeMessage",
              jspb.BinaryWriter.prototype.writeMessage
            ),
            (jspb.BinaryWriter.prototype.writeMessageSet = function (e, t, o) {
              null != t &&
                (this.writeFieldHeader_(
                  1,
                  jspb.BinaryConstants.WireType.START_GROUP
                ),
                this.writeFieldHeader_(2, jspb.BinaryConstants.WireType.VARINT),
                this.encoder_.writeSignedVarint32(e),
                (e = this.beginDelimited_(3)),
                o(t, this),
                this.endDelimited_(e),
                this.writeFieldHeader_(
                  1,
                  jspb.BinaryConstants.WireType.END_GROUP
                ));
            }),
            (jspb.BinaryWriter.prototype.writeGroup = function (e, t, o) {
              null != t &&
                (this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.START_GROUP
                ),
                o(t, this),
                this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.END_GROUP
                ));
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeGroup",
              jspb.BinaryWriter.prototype.writeGroup
            ),
            (jspb.BinaryWriter.prototype.writeFixedHash64 = function (e, t) {
              null != t &&
                (jspb.asserts.assert(8 == t.length),
                this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.FIXED64
                ),
                this.encoder_.writeFixedHash64(t));
            }),
            (jspb.BinaryWriter.prototype.writeVarintHash64 = function (e, t) {
              null != t &&
                (jspb.asserts.assert(8 == t.length),
                this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
                this.encoder_.writeVarintHash64(t));
            }),
            (jspb.BinaryWriter.prototype.writeSplitFixed64 = function (
              e,
              t,
              o
            ) {
              this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
                this.encoder_.writeSplitFixed64(t, o);
            }),
            (jspb.BinaryWriter.prototype.writeSplitVarint64 = function (
              e,
              t,
              o
            ) {
              this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
                this.encoder_.writeSplitVarint64(t, o);
            }),
            (jspb.BinaryWriter.prototype.writeSplitZigzagVarint64 = function (
              e,
              t,
              o
            ) {
              this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT);
              var r = this.encoder_;
              jspb.utils.toZigzag64(t, o, function (e, t) {
                r.writeSplitVarint64(e >>> 0, t >>> 0);
              });
            }),
            (jspb.BinaryWriter.prototype.writeRepeatedInt32 = function (e, t) {
              if (null != t)
                for (var o = 0; o < t.length; o++)
                  this.writeSignedVarint32_(e, t[o]);
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeRepeatedInt32",
              jspb.BinaryWriter.prototype.writeRepeatedInt32
            ),
            (jspb.BinaryWriter.prototype.writeRepeatedInt32String = function (
              e,
              t
            ) {
              if (null != t)
                for (var o = 0; o < t.length; o++)
                  this.writeInt32String(e, t[o]);
            }),
            (jspb.BinaryWriter.prototype.writeRepeatedInt64 = function (e, t) {
              if (null != t)
                for (var o = 0; o < t.length; o++)
                  this.writeSignedVarint64_(e, t[o]);
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeRepeatedInt64",
              jspb.BinaryWriter.prototype.writeRepeatedInt64
            ),
            (jspb.BinaryWriter.prototype.writeRepeatedSplitFixed64 = function (
              e,
              t,
              o,
              r
            ) {
              if (null != t)
                for (var s = 0; s < t.length; s++)
                  this.writeSplitFixed64(e, o(t[s]), r(t[s]));
            }),
            (jspb.BinaryWriter.prototype.writeRepeatedSplitVarint64 = function (
              e,
              t,
              o,
              r
            ) {
              if (null != t)
                for (var s = 0; s < t.length; s++)
                  this.writeSplitVarint64(e, o(t[s]), r(t[s]));
            }),
            (jspb.BinaryWriter.prototype.writeRepeatedSplitZigzagVarint64 =
              function (e, t, o, r) {
                if (null != t)
                  for (var s = 0; s < t.length; s++)
                    this.writeSplitZigzagVarint64(e, o(t[s]), r(t[s]));
              }),
            (jspb.BinaryWriter.prototype.writeRepeatedInt64String = function (
              e,
              t
            ) {
              if (null != t)
                for (var o = 0; o < t.length; o++)
                  this.writeInt64String(e, t[o]);
            }),
            (jspb.BinaryWriter.prototype.writeRepeatedUint32 = function (e, t) {
              if (null != t)
                for (var o = 0; o < t.length; o++)
                  this.writeUnsignedVarint32_(e, t[o]);
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeRepeatedUint32",
              jspb.BinaryWriter.prototype.writeRepeatedUint32
            ),
            (jspb.BinaryWriter.prototype.writeRepeatedUint32String = function (
              e,
              t
            ) {
              if (null != t)
                for (var o = 0; o < t.length; o++)
                  this.writeUint32String(e, t[o]);
            }),
            (jspb.BinaryWriter.prototype.writeRepeatedUint64 = function (e, t) {
              if (null != t)
                for (var o = 0; o < t.length; o++)
                  this.writeUnsignedVarint64_(e, t[o]);
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeRepeatedUint64",
              jspb.BinaryWriter.prototype.writeRepeatedUint64
            ),
            (jspb.BinaryWriter.prototype.writeRepeatedUint64String = function (
              e,
              t
            ) {
              if (null != t)
                for (var o = 0; o < t.length; o++)
                  this.writeUint64String(e, t[o]);
            }),
            (jspb.BinaryWriter.prototype.writeRepeatedSint32 = function (e, t) {
              if (null != t)
                for (var o = 0; o < t.length; o++)
                  this.writeZigzagVarint32_(e, t[o]);
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeRepeatedSint32",
              jspb.BinaryWriter.prototype.writeRepeatedSint32
            ),
            (jspb.BinaryWriter.prototype.writeRepeatedSint64 = function (e, t) {
              if (null != t)
                for (var o = 0; o < t.length; o++)
                  this.writeZigzagVarint64_(e, t[o]);
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeRepeatedSint64",
              jspb.BinaryWriter.prototype.writeRepeatedSint64
            ),
            (jspb.BinaryWriter.prototype.writeRepeatedSint64String = function (
              e,
              t
            ) {
              if (null != t)
                for (var o = 0; o < t.length; o++)
                  this.writeZigzagVarint64String_(e, t[o]);
            }),
            (jspb.BinaryWriter.prototype.writeRepeatedSintHash64 = function (
              e,
              t
            ) {
              if (null != t)
                for (var o = 0; o < t.length; o++)
                  this.writeZigzagVarintHash64_(e, t[o]);
            }),
            (jspb.BinaryWriter.prototype.writeRepeatedFixed32 = function (
              e,
              t
            ) {
              if (null != t)
                for (var o = 0; o < t.length; o++) this.writeFixed32(e, t[o]);
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeRepeatedFixed32",
              jspb.BinaryWriter.prototype.writeRepeatedFixed32
            ),
            (jspb.BinaryWriter.prototype.writeRepeatedFixed64 = function (
              e,
              t
            ) {
              if (null != t)
                for (var o = 0; o < t.length; o++) this.writeFixed64(e, t[o]);
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeRepeatedFixed64",
              jspb.BinaryWriter.prototype.writeRepeatedFixed64
            ),
            (jspb.BinaryWriter.prototype.writeRepeatedFixed64String = function (
              e,
              t
            ) {
              if (null != t)
                for (var o = 0; o < t.length; o++)
                  this.writeFixed64String(e, t[o]);
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeRepeatedFixed64String",
              jspb.BinaryWriter.prototype.writeRepeatedFixed64String
            ),
            (jspb.BinaryWriter.prototype.writeRepeatedSfixed32 = function (
              e,
              t
            ) {
              if (null != t)
                for (var o = 0; o < t.length; o++) this.writeSfixed32(e, t[o]);
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeRepeatedSfixed32",
              jspb.BinaryWriter.prototype.writeRepeatedSfixed32
            ),
            (jspb.BinaryWriter.prototype.writeRepeatedSfixed64 = function (
              e,
              t
            ) {
              if (null != t)
                for (var o = 0; o < t.length; o++) this.writeSfixed64(e, t[o]);
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeRepeatedSfixed64",
              jspb.BinaryWriter.prototype.writeRepeatedSfixed64
            ),
            (jspb.BinaryWriter.prototype.writeRepeatedSfixed64String =
              function (e, t) {
                if (null != t)
                  for (var o = 0; o < t.length; o++)
                    this.writeSfixed64String(e, t[o]);
              }),
            (jspb.BinaryWriter.prototype.writeRepeatedFloat = function (e, t) {
              if (null != t)
                for (var o = 0; o < t.length; o++) this.writeFloat(e, t[o]);
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeRepeatedFloat",
              jspb.BinaryWriter.prototype.writeRepeatedFloat
            ),
            (jspb.BinaryWriter.prototype.writeRepeatedDouble = function (e, t) {
              if (null != t)
                for (var o = 0; o < t.length; o++) this.writeDouble(e, t[o]);
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeRepeatedDouble",
              jspb.BinaryWriter.prototype.writeRepeatedDouble
            ),
            (jspb.BinaryWriter.prototype.writeRepeatedBool = function (e, t) {
              if (null != t)
                for (var o = 0; o < t.length; o++) this.writeBool(e, t[o]);
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeRepeatedBool",
              jspb.BinaryWriter.prototype.writeRepeatedBool
            ),
            (jspb.BinaryWriter.prototype.writeRepeatedEnum = function (e, t) {
              if (null != t)
                for (var o = 0; o < t.length; o++) this.writeEnum(e, t[o]);
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeRepeatedEnum",
              jspb.BinaryWriter.prototype.writeRepeatedEnum
            ),
            (jspb.BinaryWriter.prototype.writeRepeatedString = function (e, t) {
              if (null != t)
                for (var o = 0; o < t.length; o++) this.writeString(e, t[o]);
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeRepeatedString",
              jspb.BinaryWriter.prototype.writeRepeatedString
            ),
            (jspb.BinaryWriter.prototype.writeRepeatedBytes = function (e, t) {
              if (null != t)
                for (var o = 0; o < t.length; o++) this.writeBytes(e, t[o]);
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeRepeatedBytes",
              jspb.BinaryWriter.prototype.writeRepeatedBytes
            ),
            (jspb.BinaryWriter.prototype.writeRepeatedMessage = function (
              e,
              t,
              o
            ) {
              if (null != t)
                for (var r = 0; r < t.length; r++) {
                  var s = this.beginDelimited_(e);
                  o(t[r], this), this.endDelimited_(s);
                }
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeRepeatedMessage",
              jspb.BinaryWriter.prototype.writeRepeatedMessage
            ),
            (jspb.BinaryWriter.prototype.writeRepeatedGroup = function (
              e,
              t,
              o
            ) {
              if (null != t)
                for (var r = 0; r < t.length; r++)
                  this.writeFieldHeader_(
                    e,
                    jspb.BinaryConstants.WireType.START_GROUP
                  ),
                    o(t[r], this),
                    this.writeFieldHeader_(
                      e,
                      jspb.BinaryConstants.WireType.END_GROUP
                    );
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writeRepeatedGroup",
              jspb.BinaryWriter.prototype.writeRepeatedGroup
            ),
            (jspb.BinaryWriter.prototype.writeRepeatedFixedHash64 = function (
              e,
              t
            ) {
              if (null != t)
                for (var o = 0; o < t.length; o++)
                  this.writeFixedHash64(e, t[o]);
            }),
            (jspb.BinaryWriter.prototype.writeRepeatedVarintHash64 = function (
              e,
              t
            ) {
              if (null != t)
                for (var o = 0; o < t.length; o++)
                  this.writeVarintHash64(e, t[o]);
            }),
            (jspb.BinaryWriter.prototype.writePackedInt32 = function (e, t) {
              if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++)
                  this.encoder_.writeSignedVarint32(t[o]);
                this.endDelimited_(e);
              }
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writePackedInt32",
              jspb.BinaryWriter.prototype.writePackedInt32
            ),
            (jspb.BinaryWriter.prototype.writePackedInt32String = function (
              e,
              t
            ) {
              if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++)
                  this.encoder_.writeSignedVarint32(parseInt(t[o], 10));
                this.endDelimited_(e);
              }
            }),
            (jspb.BinaryWriter.prototype.writePackedInt64 = function (e, t) {
              if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++)
                  this.encoder_.writeSignedVarint64(t[o]);
                this.endDelimited_(e);
              }
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writePackedInt64",
              jspb.BinaryWriter.prototype.writePackedInt64
            ),
            (jspb.BinaryWriter.prototype.writePackedSplitFixed64 = function (
              e,
              t,
              o,
              r
            ) {
              if (null != t) {
                e = this.beginDelimited_(e);
                for (var s = 0; s < t.length; s++)
                  this.encoder_.writeSplitFixed64(o(t[s]), r(t[s]));
                this.endDelimited_(e);
              }
            }),
            (jspb.BinaryWriter.prototype.writePackedSplitVarint64 = function (
              e,
              t,
              o,
              r
            ) {
              if (null != t) {
                e = this.beginDelimited_(e);
                for (var s = 0; s < t.length; s++)
                  this.encoder_.writeSplitVarint64(o(t[s]), r(t[s]));
                this.endDelimited_(e);
              }
            }),
            (jspb.BinaryWriter.prototype.writePackedSplitZigzagVarint64 =
              function (e, t, o, r) {
                if (null != t) {
                  e = this.beginDelimited_(e);
                  for (var s = this.encoder_, n = 0; n < t.length; n++)
                    jspb.utils.toZigzag64(o(t[n]), r(t[n]), function (e, t) {
                      s.writeSplitVarint64(e >>> 0, t >>> 0);
                    });
                  this.endDelimited_(e);
                }
              }),
            (jspb.BinaryWriter.prototype.writePackedInt64String = function (
              e,
              t
            ) {
              if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++) {
                  var r = jspb.arith.Int64.fromString(t[o]);
                  this.encoder_.writeSplitVarint64(r.lo, r.hi);
                }
                this.endDelimited_(e);
              }
            }),
            (jspb.BinaryWriter.prototype.writePackedUint32 = function (e, t) {
              if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++)
                  this.encoder_.writeUnsignedVarint32(t[o]);
                this.endDelimited_(e);
              }
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writePackedUint32",
              jspb.BinaryWriter.prototype.writePackedUint32
            ),
            (jspb.BinaryWriter.prototype.writePackedUint32String = function (
              e,
              t
            ) {
              if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++)
                  this.encoder_.writeUnsignedVarint32(parseInt(t[o], 10));
                this.endDelimited_(e);
              }
            }),
            (jspb.BinaryWriter.prototype.writePackedUint64 = function (e, t) {
              if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++)
                  this.encoder_.writeUnsignedVarint64(t[o]);
                this.endDelimited_(e);
              }
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writePackedUint64",
              jspb.BinaryWriter.prototype.writePackedUint64
            ),
            (jspb.BinaryWriter.prototype.writePackedUint64String = function (
              e,
              t
            ) {
              if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++) {
                  var r = jspb.arith.UInt64.fromString(t[o]);
                  this.encoder_.writeSplitVarint64(r.lo, r.hi);
                }
                this.endDelimited_(e);
              }
            }),
            (jspb.BinaryWriter.prototype.writePackedSint32 = function (e, t) {
              if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++)
                  this.encoder_.writeZigzagVarint32(t[o]);
                this.endDelimited_(e);
              }
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writePackedSint32",
              jspb.BinaryWriter.prototype.writePackedSint32
            ),
            (jspb.BinaryWriter.prototype.writePackedSint64 = function (e, t) {
              if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++)
                  this.encoder_.writeZigzagVarint64(t[o]);
                this.endDelimited_(e);
              }
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writePackedSint64",
              jspb.BinaryWriter.prototype.writePackedSint64
            ),
            (jspb.BinaryWriter.prototype.writePackedSint64String = function (
              e,
              t
            ) {
              if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++)
                  this.encoder_.writeZigzagVarintHash64(
                    jspb.utils.decimalStringToHash64(t[o])
                  );
                this.endDelimited_(e);
              }
            }),
            (jspb.BinaryWriter.prototype.writePackedSintHash64 = function (
              e,
              t
            ) {
              if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++)
                  this.encoder_.writeZigzagVarintHash64(t[o]);
                this.endDelimited_(e);
              }
            }),
            (jspb.BinaryWriter.prototype.writePackedFixed32 = function (e, t) {
              if (null != t && t.length)
                for (
                  this.writeFieldHeader_(
                    e,
                    jspb.BinaryConstants.WireType.DELIMITED
                  ),
                    this.encoder_.writeUnsignedVarint32(4 * t.length),
                    e = 0;
                  e < t.length;
                  e++
                )
                  this.encoder_.writeUint32(t[e]);
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writePackedFixed32",
              jspb.BinaryWriter.prototype.writePackedFixed32
            ),
            (jspb.BinaryWriter.prototype.writePackedFixed64 = function (e, t) {
              if (null != t && t.length)
                for (
                  this.writeFieldHeader_(
                    e,
                    jspb.BinaryConstants.WireType.DELIMITED
                  ),
                    this.encoder_.writeUnsignedVarint32(8 * t.length),
                    e = 0;
                  e < t.length;
                  e++
                )
                  this.encoder_.writeUint64(t[e]);
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writePackedFixed64",
              jspb.BinaryWriter.prototype.writePackedFixed64
            ),
            (jspb.BinaryWriter.prototype.writePackedFixed64String = function (
              e,
              t
            ) {
              if (null != t && t.length)
                for (
                  this.writeFieldHeader_(
                    e,
                    jspb.BinaryConstants.WireType.DELIMITED
                  ),
                    this.encoder_.writeUnsignedVarint32(8 * t.length),
                    e = 0;
                  e < t.length;
                  e++
                ) {
                  var o = jspb.arith.UInt64.fromString(t[e]);
                  this.encoder_.writeSplitFixed64(o.lo, o.hi);
                }
            }),
            (jspb.BinaryWriter.prototype.writePackedSfixed32 = function (e, t) {
              if (null != t && t.length)
                for (
                  this.writeFieldHeader_(
                    e,
                    jspb.BinaryConstants.WireType.DELIMITED
                  ),
                    this.encoder_.writeUnsignedVarint32(4 * t.length),
                    e = 0;
                  e < t.length;
                  e++
                )
                  this.encoder_.writeInt32(t[e]);
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writePackedSfixed32",
              jspb.BinaryWriter.prototype.writePackedSfixed32
            ),
            (jspb.BinaryWriter.prototype.writePackedSfixed64 = function (e, t) {
              if (null != t && t.length)
                for (
                  this.writeFieldHeader_(
                    e,
                    jspb.BinaryConstants.WireType.DELIMITED
                  ),
                    this.encoder_.writeUnsignedVarint32(8 * t.length),
                    e = 0;
                  e < t.length;
                  e++
                )
                  this.encoder_.writeInt64(t[e]);
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writePackedSfixed64",
              jspb.BinaryWriter.prototype.writePackedSfixed64
            ),
            (jspb.BinaryWriter.prototype.writePackedSfixed64String = function (
              e,
              t
            ) {
              if (null != t && t.length)
                for (
                  this.writeFieldHeader_(
                    e,
                    jspb.BinaryConstants.WireType.DELIMITED
                  ),
                    this.encoder_.writeUnsignedVarint32(8 * t.length),
                    e = 0;
                  e < t.length;
                  e++
                )
                  this.encoder_.writeInt64String(t[e]);
            }),
            (jspb.BinaryWriter.prototype.writePackedFloat = function (e, t) {
              if (null != t && t.length)
                for (
                  this.writeFieldHeader_(
                    e,
                    jspb.BinaryConstants.WireType.DELIMITED
                  ),
                    this.encoder_.writeUnsignedVarint32(4 * t.length),
                    e = 0;
                  e < t.length;
                  e++
                )
                  this.encoder_.writeFloat(t[e]);
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writePackedFloat",
              jspb.BinaryWriter.prototype.writePackedFloat
            ),
            (jspb.BinaryWriter.prototype.writePackedDouble = function (e, t) {
              if (null != t && t.length)
                for (
                  this.writeFieldHeader_(
                    e,
                    jspb.BinaryConstants.WireType.DELIMITED
                  ),
                    this.encoder_.writeUnsignedVarint32(8 * t.length),
                    e = 0;
                  e < t.length;
                  e++
                )
                  this.encoder_.writeDouble(t[e]);
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writePackedDouble",
              jspb.BinaryWriter.prototype.writePackedDouble
            ),
            (jspb.BinaryWriter.prototype.writePackedBool = function (e, t) {
              if (null != t && t.length)
                for (
                  this.writeFieldHeader_(
                    e,
                    jspb.BinaryConstants.WireType.DELIMITED
                  ),
                    this.encoder_.writeUnsignedVarint32(t.length),
                    e = 0;
                  e < t.length;
                  e++
                )
                  this.encoder_.writeBool(t[e]);
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writePackedBool",
              jspb.BinaryWriter.prototype.writePackedBool
            ),
            (jspb.BinaryWriter.prototype.writePackedEnum = function (e, t) {
              if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++)
                  this.encoder_.writeEnum(t[o]);
                this.endDelimited_(e);
              }
            }),
            goog.exportProperty(
              jspb.BinaryWriter.prototype,
              "writePackedEnum",
              jspb.BinaryWriter.prototype.writePackedEnum
            ),
            (jspb.BinaryWriter.prototype.writePackedFixedHash64 = function (
              e,
              t
            ) {
              if (null != t && t.length)
                for (
                  this.writeFieldHeader_(
                    e,
                    jspb.BinaryConstants.WireType.DELIMITED
                  ),
                    this.encoder_.writeUnsignedVarint32(8 * t.length),
                    e = 0;
                  e < t.length;
                  e++
                )
                  this.encoder_.writeFixedHash64(t[e]);
            }),
            (jspb.BinaryWriter.prototype.writePackedVarintHash64 = function (
              e,
              t
            ) {
              if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++)
                  this.encoder_.writeVarintHash64(t[o]);
                this.endDelimited_(e);
              }
            }),
            (jspb.Map = function (e, t) {
              (this.arr_ = e),
                (this.valueCtor_ = t),
                (this.map_ = {}),
                (this.arrClean = !0),
                0 < this.arr_.length && this.loadFromArray_();
            }),
            goog.exportSymbol("jspb.Map", jspb.Map),
            (jspb.Map.prototype.loadFromArray_ = function () {
              for (var e = 0; e < this.arr_.length; e++) {
                var t = this.arr_[e],
                  o = t[0];
                this.map_[o.toString()] = new jspb.Map.Entry_(o, t[1]);
              }
              this.arrClean = !0;
            }),
            (jspb.Map.prototype.toArray = function () {
              if (this.arrClean) {
                if (this.valueCtor_) {
                  var e,
                    t = this.map_;
                  for (e in t)
                    if (Object.prototype.hasOwnProperty.call(t, e)) {
                      var o = t[e].valueWrapper;
                      o && o.toArray();
                    }
                }
              } else {
                for (
                  this.arr_.length = 0, (t = this.stringKeys_()).sort(), e = 0;
                  e < t.length;
                  e++
                ) {
                  var r = this.map_[t[e]];
                  (o = r.valueWrapper) && o.toArray(),
                    this.arr_.push([r.key, r.value]);
                }
                this.arrClean = !0;
              }
              return this.arr_;
            }),
            goog.exportProperty(
              jspb.Map.prototype,
              "toArray",
              jspb.Map.prototype.toArray
            ),
            (jspb.Map.prototype.toObject = function (e, t) {
              for (var o = this.toArray(), r = [], s = 0; s < o.length; s++) {
                var n = this.map_[o[s][0].toString()];
                this.wrapEntry_(n);
                var i = n.valueWrapper;
                i
                  ? (jspb.asserts.assert(t), r.push([n.key, t(e, i)]))
                  : r.push([n.key, n.value]);
              }
              return r;
            }),
            goog.exportProperty(
              jspb.Map.prototype,
              "toObject",
              jspb.Map.prototype.toObject
            ),
            (jspb.Map.fromObject = function (e, t, o) {
              t = new jspb.Map([], t);
              for (var r = 0; r < e.length; r++) {
                var s = e[r][0],
                  n = o(e[r][1]);
                t.set(s, n);
              }
              return t;
            }),
            goog.exportProperty(jspb.Map, "fromObject", jspb.Map.fromObject),
            (jspb.Map.ArrayIteratorIterable_ = function (e) {
              (this.idx_ = 0), (this.arr_ = e);
            }),
            (jspb.Map.ArrayIteratorIterable_.prototype.next = function () {
              return this.idx_ < this.arr_.length
                ? { done: !1, value: this.arr_[this.idx_++] }
                : { done: !0, value: void 0 };
            }),
            "undefined" != typeof Symbol &&
              (jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator] =
                function () {
                  return this;
                }),
            (jspb.Map.prototype.getLength = function () {
              return this.stringKeys_().length;
            }),
            goog.exportProperty(
              jspb.Map.prototype,
              "getLength",
              jspb.Map.prototype.getLength
            ),
            (jspb.Map.prototype.clear = function () {
              (this.map_ = {}), (this.arrClean = !1);
            }),
            goog.exportProperty(
              jspb.Map.prototype,
              "clear",
              jspb.Map.prototype.clear
            ),
            (jspb.Map.prototype.del = function (e) {
              e = e.toString();
              var t = this.map_.hasOwnProperty(e);
              return delete this.map_[e], (this.arrClean = !1), t;
            }),
            goog.exportProperty(
              jspb.Map.prototype,
              "del",
              jspb.Map.prototype.del
            ),
            (jspb.Map.prototype.getEntryList = function () {
              var e = [],
                t = this.stringKeys_();
              t.sort();
              for (var o = 0; o < t.length; o++) {
                var r = this.map_[t[o]];
                e.push([r.key, r.value]);
              }
              return e;
            }),
            goog.exportProperty(
              jspb.Map.prototype,
              "getEntryList",
              jspb.Map.prototype.getEntryList
            ),
            (jspb.Map.prototype.entries = function () {
              var e = [],
                t = this.stringKeys_();
              t.sort();
              for (var o = 0; o < t.length; o++) {
                var r = this.map_[t[o]];
                e.push([r.key, this.wrapEntry_(r)]);
              }
              return new jspb.Map.ArrayIteratorIterable_(e);
            }),
            goog.exportProperty(
              jspb.Map.prototype,
              "entries",
              jspb.Map.prototype.entries
            ),
            (jspb.Map.prototype.keys = function () {
              var e = [],
                t = this.stringKeys_();
              t.sort();
              for (var o = 0; o < t.length; o++) e.push(this.map_[t[o]].key);
              return new jspb.Map.ArrayIteratorIterable_(e);
            }),
            goog.exportProperty(
              jspb.Map.prototype,
              "keys",
              jspb.Map.prototype.keys
            ),
            (jspb.Map.prototype.values = function () {
              var e = [],
                t = this.stringKeys_();
              t.sort();
              for (var o = 0; o < t.length; o++)
                e.push(this.wrapEntry_(this.map_[t[o]]));
              return new jspb.Map.ArrayIteratorIterable_(e);
            }),
            goog.exportProperty(
              jspb.Map.prototype,
              "values",
              jspb.Map.prototype.values
            ),
            (jspb.Map.prototype.forEach = function (e, t) {
              var o = this.stringKeys_();
              o.sort();
              for (var r = 0; r < o.length; r++) {
                var s = this.map_[o[r]];
                e.call(t, this.wrapEntry_(s), s.key, this);
              }
            }),
            goog.exportProperty(
              jspb.Map.prototype,
              "forEach",
              jspb.Map.prototype.forEach
            ),
            (jspb.Map.prototype.set = function (e, t) {
              var o = new jspb.Map.Entry_(e);
              return (
                this.valueCtor_
                  ? ((o.valueWrapper = t), (o.value = t.toArray()))
                  : (o.value = t),
                (this.map_[e.toString()] = o),
                (this.arrClean = !1),
                this
              );
            }),
            goog.exportProperty(
              jspb.Map.prototype,
              "set",
              jspb.Map.prototype.set
            ),
            (jspb.Map.prototype.wrapEntry_ = function (e) {
              return this.valueCtor_
                ? (e.valueWrapper ||
                    (e.valueWrapper = new this.valueCtor_(e.value)),
                  e.valueWrapper)
                : e.value;
            }),
            (jspb.Map.prototype.get = function (e) {
              if ((e = this.map_[e.toString()])) return this.wrapEntry_(e);
            }),
            goog.exportProperty(
              jspb.Map.prototype,
              "get",
              jspb.Map.prototype.get
            ),
            (jspb.Map.prototype.has = function (e) {
              return e.toString() in this.map_;
            }),
            goog.exportProperty(
              jspb.Map.prototype,
              "has",
              jspb.Map.prototype.has
            ),
            (jspb.Map.prototype.serializeBinary = function (e, t, o, r, s) {
              var n = this.stringKeys_();
              n.sort();
              for (var i = 0; i < n.length; i++) {
                var a = this.map_[n[i]];
                t.beginSubMessage(e),
                  o.call(t, 1, a.key),
                  this.valueCtor_
                    ? r.call(t, 2, this.wrapEntry_(a), s)
                    : r.call(t, 2, a.value),
                  t.endSubMessage();
              }
            }),
            goog.exportProperty(
              jspb.Map.prototype,
              "serializeBinary",
              jspb.Map.prototype.serializeBinary
            ),
            (jspb.Map.deserializeBinary = function (e, t, o, r, s, n, i) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                var a = t.getFieldNumber();
                1 == a
                  ? (n = o.call(t))
                  : 2 == a &&
                    (e.valueCtor_
                      ? (jspb.asserts.assert(s),
                        i || (i = new e.valueCtor_()),
                        r.call(t, i, s))
                      : (i = r.call(t)));
              }
              jspb.asserts.assert(null != n),
                jspb.asserts.assert(null != i),
                e.set(n, i);
            }),
            goog.exportProperty(
              jspb.Map,
              "deserializeBinary",
              jspb.Map.deserializeBinary
            ),
            (jspb.Map.prototype.stringKeys_ = function () {
              var e,
                t = this.map_,
                o = [];
              for (e in t)
                Object.prototype.hasOwnProperty.call(t, e) && o.push(e);
              return o;
            }),
            (jspb.Map.Entry_ = function (e, t) {
              (this.key = e), (this.value = t), (this.valueWrapper = void 0);
            }),
            (jspb.ExtensionFieldInfo = function (e, t, o, r, s) {
              (this.fieldIndex = e),
                (this.fieldName = t),
                (this.ctor = o),
                (this.toObjectFn = r),
                (this.isRepeated = s);
            }),
            goog.exportSymbol(
              "jspb.ExtensionFieldInfo",
              jspb.ExtensionFieldInfo
            ),
            (jspb.ExtensionFieldBinaryInfo = function (e, t, o, r, s, n) {
              (this.fieldInfo = e),
                (this.binaryReaderFn = t),
                (this.binaryWriterFn = o),
                (this.binaryMessageSerializeFn = r),
                (this.binaryMessageDeserializeFn = s),
                (this.isPacked = n);
            }),
            goog.exportSymbol(
              "jspb.ExtensionFieldBinaryInfo",
              jspb.ExtensionFieldBinaryInfo
            ),
            (jspb.ExtensionFieldInfo.prototype.isMessageType = function () {
              return !!this.ctor;
            }),
            goog.exportProperty(
              jspb.ExtensionFieldInfo.prototype,
              "isMessageType",
              jspb.ExtensionFieldInfo.prototype.isMessageType
            ),
            (jspb.Message = function () {}),
            goog.exportSymbol("jspb.Message", jspb.Message),
            (jspb.Message.GENERATE_TO_OBJECT = !0),
            goog.exportProperty(
              jspb.Message,
              "GENERATE_TO_OBJECT",
              jspb.Message.GENERATE_TO_OBJECT
            ),
            (jspb.Message.GENERATE_FROM_OBJECT = !goog.DISALLOW_TEST_ONLY_CODE),
            goog.exportProperty(
              jspb.Message,
              "GENERATE_FROM_OBJECT",
              jspb.Message.GENERATE_FROM_OBJECT
            ),
            (jspb.Message.GENERATE_TO_STRING = !0),
            (jspb.Message.ASSUME_LOCAL_ARRAYS = !1),
            (jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS = !0),
            (jspb.Message.SUPPORTS_UINT8ARRAY_ =
              "function" == typeof Uint8Array),
            (jspb.Message.prototype.getJsPbMessageId = function () {
              return this.messageId_;
            }),
            goog.exportProperty(
              jspb.Message.prototype,
              "getJsPbMessageId",
              jspb.Message.prototype.getJsPbMessageId
            ),
            (jspb.Message.getIndex_ = function (e, t) {
              return t + e.arrayIndexOffset_;
            }),
            (jspb.Message.hiddenES6Property_ = function () {}),
            (jspb.Message.getFieldNumber_ = function (e, t) {
              return t - e.arrayIndexOffset_;
            }),
            (jspb.Message.initialize = function (e, t, o, r, s, n) {
              if (
                ((e.wrappers_ = null),
                t || (t = o ? [o] : []),
                (e.messageId_ = o ? String(o) : void 0),
                (e.arrayIndexOffset_ = 0 === o ? -1 : 0),
                (e.array = t),
                jspb.Message.initPivotAndExtensionObject_(e, r),
                (e.convertedPrimitiveFields_ = {}),
                jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS ||
                  (e.repeatedFields = s),
                s)
              )
                for (t = 0; t < s.length; t++)
                  (o = s[t]) < e.pivot_
                    ? ((o = jspb.Message.getIndex_(e, o)),
                      (e.array[o] =
                        e.array[o] || jspb.Message.EMPTY_LIST_SENTINEL_))
                    : (jspb.Message.maybeInitEmptyExtensionObject_(e),
                      (e.extensionObject_[o] =
                        e.extensionObject_[o] ||
                        jspb.Message.EMPTY_LIST_SENTINEL_));
              if (n && n.length)
                for (t = 0; t < n.length; t++)
                  jspb.Message.computeOneofCase(e, n[t]);
            }),
            goog.exportProperty(
              jspb.Message,
              "initialize",
              jspb.Message.initialize
            ),
            (jspb.Message.EMPTY_LIST_SENTINEL_ =
              goog.DEBUG && Object.freeze ? Object.freeze([]) : []),
            (jspb.Message.isArray_ = function (e) {
              return jspb.Message.ASSUME_LOCAL_ARRAYS
                ? e instanceof Array
                : Array.isArray(e);
            }),
            (jspb.Message.isExtensionObject_ = function (e) {
              return !(
                null === e ||
                "object" != typeof e ||
                jspb.Message.isArray_(e) ||
                (jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array)
              );
            }),
            (jspb.Message.initPivotAndExtensionObject_ = function (e, t) {
              var o = e.array.length,
                r = -1;
              if (
                o &&
                ((r = o - 1),
                (o = e.array[r]),
                jspb.Message.isExtensionObject_(o))
              )
                return (
                  (e.pivot_ = jspb.Message.getFieldNumber_(e, r)),
                  void (e.extensionObject_ = o)
                );
              -1 < t
                ? ((e.pivot_ = Math.max(
                    t,
                    jspb.Message.getFieldNumber_(e, r + 1)
                  )),
                  (e.extensionObject_ = null))
                : (e.pivot_ = Number.MAX_VALUE);
            }),
            (jspb.Message.maybeInitEmptyExtensionObject_ = function (e) {
              var t = jspb.Message.getIndex_(e, e.pivot_);
              e.array[t] || (e.extensionObject_ = e.array[t] = {});
            }),
            (jspb.Message.toObjectList = function (e, t, o) {
              for (var r = [], s = 0; s < e.length; s++)
                r[s] = t.call(e[s], o, e[s]);
              return r;
            }),
            goog.exportProperty(
              jspb.Message,
              "toObjectList",
              jspb.Message.toObjectList
            ),
            (jspb.Message.toObjectExtension = function (e, t, o, r, s) {
              for (var n in o) {
                var i = o[n],
                  a = r.call(e, i);
                if (null != a) {
                  for (var g in i.fieldName)
                    if (i.fieldName.hasOwnProperty(g)) break;
                  t[g] = i.toObjectFn
                    ? i.isRepeated
                      ? jspb.Message.toObjectList(a, i.toObjectFn, s)
                      : i.toObjectFn(s, a)
                    : a;
                }
              }
            }),
            goog.exportProperty(
              jspb.Message,
              "toObjectExtension",
              jspb.Message.toObjectExtension
            ),
            (jspb.Message.serializeBinaryExtensions = function (e, t, o, r) {
              for (var s in o) {
                var n = o[s],
                  i = n.fieldInfo;
                if (!n.binaryWriterFn)
                  throw Error(
                    "Message extension present that was generated without binary serialization support"
                  );
                var a = r.call(e, i);
                if (null != a)
                  if (i.isMessageType()) {
                    if (!n.binaryMessageSerializeFn)
                      throw Error(
                        "Message extension present holding submessage without binary support enabled, and message is being serialized to binary format"
                      );
                    n.binaryWriterFn.call(
                      t,
                      i.fieldIndex,
                      a,
                      n.binaryMessageSerializeFn
                    );
                  } else n.binaryWriterFn.call(t, i.fieldIndex, a);
              }
            }),
            goog.exportProperty(
              jspb.Message,
              "serializeBinaryExtensions",
              jspb.Message.serializeBinaryExtensions
            ),
            (jspb.Message.readBinaryExtension = function (e, t, o, r, s) {
              var n = o[t.getFieldNumber()];
              if (n) {
                if (((o = n.fieldInfo), !n.binaryReaderFn))
                  throw Error(
                    "Deserializing extension whose generated code does not support binary format"
                  );
                if (o.isMessageType()) {
                  var i = new o.ctor();
                  n.binaryReaderFn.call(t, i, n.binaryMessageDeserializeFn);
                } else i = n.binaryReaderFn.call(t);
                o.isRepeated && !n.isPacked
                  ? (t = r.call(e, o))
                    ? t.push(i)
                    : s.call(e, o, [i])
                  : s.call(e, o, i);
              } else t.skipField();
            }),
            goog.exportProperty(
              jspb.Message,
              "readBinaryExtension",
              jspb.Message.readBinaryExtension
            ),
            (jspb.Message.getField = function (e, t) {
              if (t < e.pivot_) {
                t = jspb.Message.getIndex_(e, t);
                var o = e.array[t];
                return o === jspb.Message.EMPTY_LIST_SENTINEL_
                  ? (e.array[t] = [])
                  : o;
              }
              if (e.extensionObject_)
                return (o = e.extensionObject_[t]) ===
                  jspb.Message.EMPTY_LIST_SENTINEL_
                  ? (e.extensionObject_[t] = [])
                  : o;
            }),
            goog.exportProperty(
              jspb.Message,
              "getField",
              jspb.Message.getField
            ),
            (jspb.Message.getRepeatedField = function (e, t) {
              return jspb.Message.getField(e, t);
            }),
            goog.exportProperty(
              jspb.Message,
              "getRepeatedField",
              jspb.Message.getRepeatedField
            ),
            (jspb.Message.getOptionalFloatingPointField = function (e, t) {
              return null == (e = jspb.Message.getField(e, t)) ? e : +e;
            }),
            goog.exportProperty(
              jspb.Message,
              "getOptionalFloatingPointField",
              jspb.Message.getOptionalFloatingPointField
            ),
            (jspb.Message.getBooleanField = function (e, t) {
              return null == (e = jspb.Message.getField(e, t)) ? e : !!e;
            }),
            goog.exportProperty(
              jspb.Message,
              "getBooleanField",
              jspb.Message.getBooleanField
            ),
            (jspb.Message.getRepeatedFloatingPointField = function (e, t) {
              var o = jspb.Message.getRepeatedField(e, t);
              if (
                (e.convertedPrimitiveFields_ ||
                  (e.convertedPrimitiveFields_ = {}),
                !e.convertedPrimitiveFields_[t])
              ) {
                for (var r = 0; r < o.length; r++) o[r] = +o[r];
                e.convertedPrimitiveFields_[t] = !0;
              }
              return o;
            }),
            goog.exportProperty(
              jspb.Message,
              "getRepeatedFloatingPointField",
              jspb.Message.getRepeatedFloatingPointField
            ),
            (jspb.Message.getRepeatedBooleanField = function (e, t) {
              var o = jspb.Message.getRepeatedField(e, t);
              if (
                (e.convertedPrimitiveFields_ ||
                  (e.convertedPrimitiveFields_ = {}),
                !e.convertedPrimitiveFields_[t])
              ) {
                for (var r = 0; r < o.length; r++) o[r] = !!o[r];
                e.convertedPrimitiveFields_[t] = !0;
              }
              return o;
            }),
            goog.exportProperty(
              jspb.Message,
              "getRepeatedBooleanField",
              jspb.Message.getRepeatedBooleanField
            ),
            (jspb.Message.bytesAsB64 = function (e) {
              return null == e || "string" == typeof e
                ? e
                : jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array
                ? goog.crypt.base64.encodeByteArray(e)
                : (jspb.asserts.fail(
                    "Cannot coerce to b64 string: " + goog.typeOf(e)
                  ),
                  null);
            }),
            goog.exportProperty(
              jspb.Message,
              "bytesAsB64",
              jspb.Message.bytesAsB64
            ),
            (jspb.Message.bytesAsU8 = function (e) {
              return null == e || e instanceof Uint8Array
                ? e
                : "string" == typeof e
                ? goog.crypt.base64.decodeStringToUint8Array(e)
                : (jspb.asserts.fail(
                    "Cannot coerce to Uint8Array: " + goog.typeOf(e)
                  ),
                  null);
            }),
            goog.exportProperty(
              jspb.Message,
              "bytesAsU8",
              jspb.Message.bytesAsU8
            ),
            (jspb.Message.bytesListAsB64 = function (e) {
              return (
                jspb.Message.assertConsistentTypes_(e),
                e.length && "string" != typeof e[0]
                  ? goog.array.map(e, jspb.Message.bytesAsB64)
                  : e
              );
            }),
            goog.exportProperty(
              jspb.Message,
              "bytesListAsB64",
              jspb.Message.bytesListAsB64
            ),
            (jspb.Message.bytesListAsU8 = function (e) {
              return (
                jspb.Message.assertConsistentTypes_(e),
                !e.length || e[0] instanceof Uint8Array
                  ? e
                  : goog.array.map(e, jspb.Message.bytesAsU8)
              );
            }),
            goog.exportProperty(
              jspb.Message,
              "bytesListAsU8",
              jspb.Message.bytesListAsU8
            ),
            (jspb.Message.assertConsistentTypes_ = function (e) {
              if (goog.DEBUG && e && 1 < e.length) {
                var t = goog.typeOf(e[0]);
                goog.array.forEach(e, function (e) {
                  goog.typeOf(e) != t &&
                    jspb.asserts.fail(
                      "Inconsistent type in JSPB repeated field array. Got " +
                        goog.typeOf(e) +
                        " expected " +
                        t
                    );
                });
              }
            }),
            (jspb.Message.getFieldWithDefault = function (e, t, o) {
              return null == (e = jspb.Message.getField(e, t)) ? o : e;
            }),
            goog.exportProperty(
              jspb.Message,
              "getFieldWithDefault",
              jspb.Message.getFieldWithDefault
            ),
            (jspb.Message.getBooleanFieldWithDefault = function (e, t, o) {
              return null == (e = jspb.Message.getBooleanField(e, t)) ? o : e;
            }),
            goog.exportProperty(
              jspb.Message,
              "getBooleanFieldWithDefault",
              jspb.Message.getBooleanFieldWithDefault
            ),
            (jspb.Message.getFloatingPointFieldWithDefault = function (
              e,
              t,
              o
            ) {
              return null ==
                (e = jspb.Message.getOptionalFloatingPointField(e, t))
                ? o
                : e;
            }),
            goog.exportProperty(
              jspb.Message,
              "getFloatingPointFieldWithDefault",
              jspb.Message.getFloatingPointFieldWithDefault
            ),
            (jspb.Message.getFieldProto3 = jspb.Message.getFieldWithDefault),
            goog.exportProperty(
              jspb.Message,
              "getFieldProto3",
              jspb.Message.getFieldProto3
            ),
            (jspb.Message.getMapField = function (e, t, o, r) {
              if ((e.wrappers_ || (e.wrappers_ = {}), t in e.wrappers_))
                return e.wrappers_[t];
              var s = jspb.Message.getField(e, t);
              if (!s) {
                if (o) return;
                (s = []), jspb.Message.setField(e, t, s);
              }
              return (e.wrappers_[t] = new jspb.Map(s, r));
            }),
            goog.exportProperty(
              jspb.Message,
              "getMapField",
              jspb.Message.getMapField
            ),
            (jspb.Message.setField = function (e, t, o) {
              return (
                jspb.asserts.assertInstanceof(e, jspb.Message),
                t < e.pivot_
                  ? (e.array[jspb.Message.getIndex_(e, t)] = o)
                  : (jspb.Message.maybeInitEmptyExtensionObject_(e),
                    (e.extensionObject_[t] = o)),
                e
              );
            }),
            goog.exportProperty(
              jspb.Message,
              "setField",
              jspb.Message.setField
            ),
            (jspb.Message.setProto3IntField = function (e, t, o) {
              return jspb.Message.setFieldIgnoringDefault_(e, t, o, 0);
            }),
            goog.exportProperty(
              jspb.Message,
              "setProto3IntField",
              jspb.Message.setProto3IntField
            ),
            (jspb.Message.setProto3FloatField = function (e, t, o) {
              return jspb.Message.setFieldIgnoringDefault_(e, t, o, 0);
            }),
            goog.exportProperty(
              jspb.Message,
              "setProto3FloatField",
              jspb.Message.setProto3FloatField
            ),
            (jspb.Message.setProto3BooleanField = function (e, t, o) {
              return jspb.Message.setFieldIgnoringDefault_(e, t, o, !1);
            }),
            goog.exportProperty(
              jspb.Message,
              "setProto3BooleanField",
              jspb.Message.setProto3BooleanField
            ),
            (jspb.Message.setProto3StringField = function (e, t, o) {
              return jspb.Message.setFieldIgnoringDefault_(e, t, o, "");
            }),
            goog.exportProperty(
              jspb.Message,
              "setProto3StringField",
              jspb.Message.setProto3StringField
            ),
            (jspb.Message.setProto3BytesField = function (e, t, o) {
              return jspb.Message.setFieldIgnoringDefault_(e, t, o, "");
            }),
            goog.exportProperty(
              jspb.Message,
              "setProto3BytesField",
              jspb.Message.setProto3BytesField
            ),
            (jspb.Message.setProto3EnumField = function (e, t, o) {
              return jspb.Message.setFieldIgnoringDefault_(e, t, o, 0);
            }),
            goog.exportProperty(
              jspb.Message,
              "setProto3EnumField",
              jspb.Message.setProto3EnumField
            ),
            (jspb.Message.setProto3StringIntField = function (e, t, o) {
              return jspb.Message.setFieldIgnoringDefault_(e, t, o, "0");
            }),
            goog.exportProperty(
              jspb.Message,
              "setProto3StringIntField",
              jspb.Message.setProto3StringIntField
            ),
            (jspb.Message.setFieldIgnoringDefault_ = function (e, t, o, r) {
              return (
                jspb.asserts.assertInstanceof(e, jspb.Message),
                o !== r
                  ? jspb.Message.setField(e, t, o)
                  : t < e.pivot_
                  ? (e.array[jspb.Message.getIndex_(e, t)] = null)
                  : (jspb.Message.maybeInitEmptyExtensionObject_(e),
                    delete e.extensionObject_[t]),
                e
              );
            }),
            (jspb.Message.addToRepeatedField = function (e, t, o, r) {
              return (
                jspb.asserts.assertInstanceof(e, jspb.Message),
                (t = jspb.Message.getRepeatedField(e, t)),
                null != r ? t.splice(r, 0, o) : t.push(o),
                e
              );
            }),
            goog.exportProperty(
              jspb.Message,
              "addToRepeatedField",
              jspb.Message.addToRepeatedField
            ),
            (jspb.Message.setOneofField = function (e, t, o, r) {
              return (
                jspb.asserts.assertInstanceof(e, jspb.Message),
                (o = jspb.Message.computeOneofCase(e, o)) &&
                  o !== t &&
                  void 0 !== r &&
                  (e.wrappers_ && o in e.wrappers_ && (e.wrappers_[o] = void 0),
                  jspb.Message.setField(e, o, void 0)),
                jspb.Message.setField(e, t, r)
              );
            }),
            goog.exportProperty(
              jspb.Message,
              "setOneofField",
              jspb.Message.setOneofField
            ),
            (jspb.Message.computeOneofCase = function (e, t) {
              for (var o, r, s = 0; s < t.length; s++) {
                var n = t[s],
                  i = jspb.Message.getField(e, n);
                null != i &&
                  ((o = n), (r = i), jspb.Message.setField(e, n, void 0));
              }
              return o ? (jspb.Message.setField(e, o, r), o) : 0;
            }),
            goog.exportProperty(
              jspb.Message,
              "computeOneofCase",
              jspb.Message.computeOneofCase
            ),
            (jspb.Message.getWrapperField = function (e, t, o, r) {
              if ((e.wrappers_ || (e.wrappers_ = {}), !e.wrappers_[o])) {
                var s = jspb.Message.getField(e, o);
                (r || s) && (e.wrappers_[o] = new t(s));
              }
              return e.wrappers_[o];
            }),
            goog.exportProperty(
              jspb.Message,
              "getWrapperField",
              jspb.Message.getWrapperField
            ),
            (jspb.Message.getRepeatedWrapperField = function (e, t, o) {
              return (
                jspb.Message.wrapRepeatedField_(e, t, o),
                (t = e.wrappers_[o]) == jspb.Message.EMPTY_LIST_SENTINEL_ &&
                  (t = e.wrappers_[o] = []),
                t
              );
            }),
            goog.exportProperty(
              jspb.Message,
              "getRepeatedWrapperField",
              jspb.Message.getRepeatedWrapperField
            ),
            (jspb.Message.wrapRepeatedField_ = function (e, t, o) {
              if ((e.wrappers_ || (e.wrappers_ = {}), !e.wrappers_[o])) {
                for (
                  var r = jspb.Message.getRepeatedField(e, o), s = [], n = 0;
                  n < r.length;
                  n++
                )
                  s[n] = new t(r[n]);
                e.wrappers_[o] = s;
              }
            }),
            (jspb.Message.setWrapperField = function (e, t, o) {
              jspb.asserts.assertInstanceof(e, jspb.Message),
                e.wrappers_ || (e.wrappers_ = {});
              var r = o ? o.toArray() : o;
              return (e.wrappers_[t] = o), jspb.Message.setField(e, t, r);
            }),
            goog.exportProperty(
              jspb.Message,
              "setWrapperField",
              jspb.Message.setWrapperField
            ),
            (jspb.Message.setOneofWrapperField = function (e, t, o, r) {
              jspb.asserts.assertInstanceof(e, jspb.Message),
                e.wrappers_ || (e.wrappers_ = {});
              var s = r ? r.toArray() : r;
              return (
                (e.wrappers_[t] = r), jspb.Message.setOneofField(e, t, o, s)
              );
            }),
            goog.exportProperty(
              jspb.Message,
              "setOneofWrapperField",
              jspb.Message.setOneofWrapperField
            ),
            (jspb.Message.setRepeatedWrapperField = function (e, t, o) {
              jspb.asserts.assertInstanceof(e, jspb.Message),
                e.wrappers_ || (e.wrappers_ = {}),
                (o = o || []);
              for (var r = [], s = 0; s < o.length; s++) r[s] = o[s].toArray();
              return (e.wrappers_[t] = o), jspb.Message.setField(e, t, r);
            }),
            goog.exportProperty(
              jspb.Message,
              "setRepeatedWrapperField",
              jspb.Message.setRepeatedWrapperField
            ),
            (jspb.Message.addToRepeatedWrapperField = function (e, t, o, r, s) {
              jspb.Message.wrapRepeatedField_(e, r, t);
              var n = e.wrappers_[t];
              return (
                n || (n = e.wrappers_[t] = []),
                (o = o || new r()),
                (e = jspb.Message.getRepeatedField(e, t)),
                null != s
                  ? (n.splice(s, 0, o), e.splice(s, 0, o.toArray()))
                  : (n.push(o), e.push(o.toArray())),
                o
              );
            }),
            goog.exportProperty(
              jspb.Message,
              "addToRepeatedWrapperField",
              jspb.Message.addToRepeatedWrapperField
            ),
            (jspb.Message.toMap = function (e, t, o, r) {
              for (var s = {}, n = 0; n < e.length; n++)
                s[t.call(e[n])] = o ? o.call(e[n], r, e[n]) : e[n];
              return s;
            }),
            goog.exportProperty(jspb.Message, "toMap", jspb.Message.toMap),
            (jspb.Message.prototype.syncMapFields_ = function () {
              if (this.wrappers_)
                for (var e in this.wrappers_) {
                  var t = this.wrappers_[e];
                  if (Array.isArray(t))
                    for (var o = 0; o < t.length; o++) t[o] && t[o].toArray();
                  else t && t.toArray();
                }
            }),
            (jspb.Message.prototype.toArray = function () {
              return this.syncMapFields_(), this.array;
            }),
            goog.exportProperty(
              jspb.Message.prototype,
              "toArray",
              jspb.Message.prototype.toArray
            ),
            jspb.Message.GENERATE_TO_STRING &&
              (jspb.Message.prototype.toString = function () {
                return this.syncMapFields_(), this.array.toString();
              }),
            (jspb.Message.prototype.getExtension = function (e) {
              if (this.extensionObject_) {
                this.wrappers_ || (this.wrappers_ = {});
                var t = e.fieldIndex;
                if (e.isRepeated) {
                  if (e.isMessageType())
                    return (
                      this.wrappers_[t] ||
                        (this.wrappers_[t] = goog.array.map(
                          this.extensionObject_[t] || [],
                          function (t) {
                            return new e.ctor(t);
                          }
                        )),
                      this.wrappers_[t]
                    );
                } else if (e.isMessageType())
                  return (
                    !this.wrappers_[t] &&
                      this.extensionObject_[t] &&
                      (this.wrappers_[t] = new e.ctor(
                        this.extensionObject_[t]
                      )),
                    this.wrappers_[t]
                  );
                return this.extensionObject_[t];
              }
            }),
            goog.exportProperty(
              jspb.Message.prototype,
              "getExtension",
              jspb.Message.prototype.getExtension
            ),
            (jspb.Message.prototype.setExtension = function (e, t) {
              this.wrappers_ || (this.wrappers_ = {}),
                jspb.Message.maybeInitEmptyExtensionObject_(this);
              var o = e.fieldIndex;
              return (
                e.isRepeated
                  ? ((t = t || []),
                    e.isMessageType()
                      ? ((this.wrappers_[o] = t),
                        (this.extensionObject_[o] = goog.array.map(
                          t,
                          function (e) {
                            return e.toArray();
                          }
                        )))
                      : (this.extensionObject_[o] = t))
                  : e.isMessageType()
                  ? ((this.wrappers_[o] = t),
                    (this.extensionObject_[o] = t ? t.toArray() : t))
                  : (this.extensionObject_[o] = t),
                this
              );
            }),
            goog.exportProperty(
              jspb.Message.prototype,
              "setExtension",
              jspb.Message.prototype.setExtension
            ),
            (jspb.Message.difference = function (e, t) {
              if (!(e instanceof t.constructor))
                throw Error("Messages have different types.");
              var o = e.toArray();
              t = t.toArray();
              var r = [],
                s = 0,
                n = o.length > t.length ? o.length : t.length;
              for (
                e.getJsPbMessageId() &&
                ((r[0] = e.getJsPbMessageId()), (s = 1));
                s < n;
                s++
              )
                jspb.Message.compareFields(o[s], t[s]) || (r[s] = t[s]);
              return new e.constructor(r);
            }),
            goog.exportProperty(
              jspb.Message,
              "difference",
              jspb.Message.difference
            ),
            (jspb.Message.equals = function (e, t) {
              return (
                e == t ||
                (!(!e || !t) &&
                  e instanceof t.constructor &&
                  jspb.Message.compareFields(e.toArray(), t.toArray()))
              );
            }),
            goog.exportProperty(jspb.Message, "equals", jspb.Message.equals),
            (jspb.Message.compareExtensions = function (e, t) {
              (e = e || {}), (t = t || {});
              var o,
                r = {};
              for (o in e) r[o] = 0;
              for (o in t) r[o] = 0;
              for (o in r)
                if (!jspb.Message.compareFields(e[o], t[o])) return !1;
              return !0;
            }),
            goog.exportProperty(
              jspb.Message,
              "compareExtensions",
              jspb.Message.compareExtensions
            ),
            (jspb.Message.compareFields = function (e, t) {
              if (e == t) return !0;
              if (!goog.isObject(e) || !goog.isObject(t))
                return (
                  !!(
                    ("number" == typeof e && isNaN(e)) ||
                    ("number" == typeof t && isNaN(t))
                  ) && String(e) == String(t)
                );
              if (e.constructor != t.constructor) return !1;
              if (
                jspb.Message.SUPPORTS_UINT8ARRAY_ &&
                e.constructor === Uint8Array
              ) {
                if (e.length != t.length) return !1;
                for (var o = 0; o < e.length; o++) if (e[o] != t[o]) return !1;
                return !0;
              }
              if (e.constructor === Array) {
                var r = void 0,
                  s = void 0,
                  n = Math.max(e.length, t.length);
                for (o = 0; o < n; o++) {
                  var i = e[o],
                    a = t[o];
                  if (
                    (i &&
                      i.constructor == Object &&
                      (jspb.asserts.assert(void 0 === r),
                      jspb.asserts.assert(o === e.length - 1),
                      (r = i),
                      (i = void 0)),
                    a &&
                      a.constructor == Object &&
                      (jspb.asserts.assert(void 0 === s),
                      jspb.asserts.assert(o === t.length - 1),
                      (s = a),
                      (a = void 0)),
                    !jspb.Message.compareFields(i, a))
                  )
                    return !1;
                }
                return (
                  (!r && !s) ||
                  ((r = r || {}),
                  (s = s || {}),
                  jspb.Message.compareExtensions(r, s))
                );
              }
              if (e.constructor === Object)
                return jspb.Message.compareExtensions(e, t);
              throw Error("Invalid type in JSPB array");
            }),
            goog.exportProperty(
              jspb.Message,
              "compareFields",
              jspb.Message.compareFields
            ),
            (jspb.Message.prototype.cloneMessage = function () {
              return jspb.Message.cloneMessage(this);
            }),
            goog.exportProperty(
              jspb.Message.prototype,
              "cloneMessage",
              jspb.Message.prototype.cloneMessage
            ),
            (jspb.Message.prototype.clone = function () {
              return jspb.Message.cloneMessage(this);
            }),
            goog.exportProperty(
              jspb.Message.prototype,
              "clone",
              jspb.Message.prototype.clone
            ),
            (jspb.Message.clone = function (e) {
              return jspb.Message.cloneMessage(e);
            }),
            goog.exportProperty(jspb.Message, "clone", jspb.Message.clone),
            (jspb.Message.cloneMessage = function (e) {
              return new e.constructor(jspb.Message.clone_(e.toArray()));
            }),
            (jspb.Message.copyInto = function (e, t) {
              jspb.asserts.assertInstanceof(e, jspb.Message),
                jspb.asserts.assertInstanceof(t, jspb.Message),
                jspb.asserts.assert(
                  e.constructor == t.constructor,
                  "Copy source and target message should have the same type."
                ),
                (e = jspb.Message.clone(e));
              for (
                var o = t.toArray(), r = e.toArray(), s = (o.length = 0);
                s < r.length;
                s++
              )
                o[s] = r[s];
              (t.wrappers_ = e.wrappers_),
                (t.extensionObject_ = e.extensionObject_);
            }),
            goog.exportProperty(
              jspb.Message,
              "copyInto",
              jspb.Message.copyInto
            ),
            (jspb.Message.clone_ = function (e) {
              if (Array.isArray(e)) {
                for (var t = Array(e.length), o = 0; o < e.length; o++) {
                  var r = e[o];
                  null != r &&
                    (t[o] =
                      "object" == typeof r
                        ? jspb.Message.clone_(jspb.asserts.assert(r))
                        : r);
                }
                return t;
              }
              if (jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array)
                return new Uint8Array(e);
              for (o in ((t = {}), e))
                null != (r = e[o]) &&
                  (t[o] =
                    "object" == typeof r
                      ? jspb.Message.clone_(jspb.asserts.assert(r))
                      : r);
              return t;
            }),
            (jspb.Message.registerMessageType = function (e, t) {
              t.messageId = e;
            }),
            goog.exportProperty(
              jspb.Message,
              "registerMessageType",
              jspb.Message.registerMessageType
            ),
            (jspb.Message.messageSetExtensions = {}),
            (jspb.Message.messageSetExtensionsBinary = {}),
            (jspb.Export = {}),
            (exports.Map = jspb.Map),
            (exports.Message = jspb.Message),
            (exports.BinaryReader = jspb.BinaryReader),
            (exports.BinaryWriter = jspb.BinaryWriter),
            (exports.ExtensionFieldInfo = jspb.ExtensionFieldInfo),
            (exports.ExtensionFieldBinaryInfo = jspb.ExtensionFieldBinaryInfo),
            (exports.exportSymbol = goog.exportSymbol),
            (exports.inherits = goog.inherits),
            (exports.object = { extend: goog.object.extend }),
            (exports.typeOf = goog.typeOf);
        },
        207: function (e, t, o) {
          "use strict";
          var r =
            (this && this.__awaiter) ||
            function (e, t, o, r) {
              return new (o || (o = Promise))(function (s, n) {
                function i(e) {
                  try {
                    g(r.next(e));
                  } catch (e) {
                    n(e);
                  }
                }
                function a(e) {
                  try {
                    g(r.throw(e));
                  } catch (e) {
                    n(e);
                  }
                }
                function g(e) {
                  var t;
                  e.done
                    ? s(e.value)
                    : ((t = e.value),
                      t instanceof o
                        ? t
                        : new o(function (e) {
                            e(t);
                          })).then(i, a);
                }
                g((r = r.apply(e, t || [])).next());
              });
            };
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.AudioPlayer = void 0);
          const s = o(422);
          t.AudioPlayer = class {
            constructor(e) {
              (this.isPlaying = !1),
                (this.sampleRate = e),
                (this.asyncQueue = new s.AsyncBlockingQueue()),
                (this.audio = new Audio()),
                (this.audio.crossOrigin = "anonymous"),
                (this.audio.onended = () =>
                  r(this, void 0, void 0, function* () {
                    var e;
                    const t = yield this.asyncQueue.dequeue();
                    null != t
                      ? this.playAudio(t)
                      : ((this.isPlaying = !1),
                        null === (e = this.onStop) ||
                          void 0 === e ||
                          e.call(this),
                        (this.asyncQueue = new s.AsyncBlockingQueue()));
                  })),
                (this.onPlay = null),
                (this.onStop = null);
            }
            playAudio(e) {
              var t;
              (this.audio.src = e),
                this.audio.load(),
                this.audio.play(),
                null === (t = this.onPlay) || void 0 === t || t.call(this),
                (this.isPlaying = !0);
            }
            addChunk(e, t = null) {
              if (null == e) return void this.asyncQueue.enqueue(null);
              const o = new Blob([e], { type: "audio/wav" }),
                r = URL.createObjectURL(o);
              this.isPlaying ? this.asyncQueue.enqueue(r) : this.playAudio(r);
            }
            getVolume() {
              return this.audio.volume;
            }
            setAudioVolume(e) {
              if (e < 0 || e > 1)
                throw new Error(
                  "Invalid volume value. Volume must be between 0 and 1."
                );
              this.audio.volume = e;
            }
            onPlayStart(e) {
              this.onPlay = e;
            }
            onPlayStop(e) {
              this.onStop = e;
            }
          };
        },
        382: (e, t, o) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.AudioRecorder = void 0);
          const r = o(693);
          t.AudioRecorder = class {
            constructor() {
              var e;
              this.audioContext = new AudioContext();
              let t = new Blob([r.audio_reocrder_processor], {
                type: "application/javascript",
              });
              (this.audioWorkletModule =
                null === (e = this.audioContext) || void 0 === e
                  ? void 0
                  : e.audioWorklet.addModule(URL.createObjectURL(t))),
                (this.mediaStream = null),
                (this.workletNode = null),
                navigator.mediaDevices && navigator.mediaDevices.getUserMedia
                  ? (console.log("getUserMedia supported."),
                    (this.userMedia = navigator.mediaDevices.getUserMedia({
                      audio: !0,
                    })))
                  : console.log("getUserMedia not supported on your browser!");
            }
            convertoFloat32ToInt16(e) {
              for (var t = e.length, o = new Int16Array(t); t--; )
                o[t] = 65535 * e[t];
              return o.buffer;
            }
            start(e) {
              (this.audioCallback = e),
                this.userMedia.then((e) => {
                  (this.mediaStream = e),
                    this.audioWorkletModule.then(() => {
                      const e = this.audioContext.createMediaStreamSource(
                        this.mediaStream
                      );
                      (this.workletNode = new AudioWorkletNode(
                        this.audioContext,
                        "audio-recorder-processor"
                      )),
                        (this.workletNode.port.onmessage = (e) => {
                          if (e.data.command) return;
                          const t = new Float32Array(e.data),
                            o = this.convertoFloat32ToInt16(t);
                          this.audioCallback(o);
                        }),
                        e.connect(this.workletNode),
                        this.audioContext.resume(),
                        this.workletNode.port.postMessage({ command: "start" });
                    });
                });
            }
            stop() {
              this.workletNode &&
                (this.workletNode.port.postMessage({ command: "stop" }),
                this.workletNode.disconnect(),
                (this.workletNode = null));
            }
          };
        },
        693: (e, t) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.audio_reocrder_processor = void 0),
            (t.audio_reocrder_processor =
              "class AudioRecorderProcessor extends AudioWorkletProcessor {\n  constructor() {\n    super();\n    this.recording = false;\n    this.chunkSize = 4096;\n    this.sampleAccumulator = new Float32Array(this.chunkSize);\n    this.accumulatedSamples = 0;\n    this.port.onmessage = (event) => {\n      if (!event.data.command) {\n        return;\n      }\n      if (event.data.command === 'start') {\n        this.recording = true;\n      } else if (event.data.command === 'stop') {\n        this.recording = false;\n      }\n    };\n  }\n\n  process(inputs, outputs) {\n    if (!this.recording) {\n      return true;\n    }\n    const input = inputs[0];\n    const output = outputs[0];\n    // output[0].set(input[0]);\n    for (let i = 0; i < input[0].length; i++) {\n      this.sampleAccumulator[this.accumulatedSamples++] = input[0][i];\n      if (this.accumulatedSamples >= this.chunkSize) {\n        this.port.postMessage(this.sampleAccumulator.buffer);\n        this.sampleAccumulator = new Float32Array(this.chunkSize);\n        this.accumulatedSamples = 0;\n      }\n    }\n    return true;\n  }\n}\n\nregisterProcessor('audio-recorder-processor', AudioRecorderProcessor);");
        },
        587: (e, t, o) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.ConvaiClient = void 0);
          const r = o(387),
            s = o(89),
            n = o(207),
            i = o(382);
          t.ConvaiClient = class {
            constructor(e) {
              (this.apiKey = e.apiKey),
                (this.characterId = e.characterId),
                (this.enableAudio = e.enableAudio),
                (this.languageCode = e.languageCode || "en-US"),
                (this.sessionId = e.sessionId),
                (this.enableAudio = e.enableAudio),
                (this.disableAudioGeneration = e.disableAudioGeneration || !1),
                (this.enableFacialData = e.enableFacialData || !1),
                (this.enableEmotionalData = e.enableEmotionalData || !1),
                (this.faceModel = e.faceModel || 3),
                (this.actionConfig = new r.ActionConfig()),
                e.actionConfig &&
                  this.actionConfig.setActionsList(e.actionConfig.actions),
                this.enableAudio &&
                  ((this.audioRecorder = new i.AudioRecorder()),
                  (this.audioPlayer = new n.AudioPlayer(44100))),
                (console.warn = () => {});
            }
            validateBeforeRequest() {
              return (
                null != this.responseCallback ||
                (console.log(
                  "CONVAI(ERROR): responseCallback needs to set before making any request."
                ),
                !1)
              );
            }
            resetSession() {
              (this.sessionId = "-1"), (this.convaiGrpcClient = void 0);
            }
            setResponseCallback(e) {
              this.responseCallback = (t) => {
                var o, r, s, n, i, a, g, p;
                "" !== t.getSessionId() && (this.sessionId = t.getSessionId()),
                  this.enableAudio &&
                  !this.disableAudioGeneration &&
                  t.hasAudioResponse() &&
                  !(null === (o = t.getAudioResponse()) || void 0 === o
                    ? void 0
                    : o.hasVisemesData())
                    ? (null === (r = this.audioPlayer) ||
                        void 0 === r ||
                        r.addChunk(
                          t.getAudioResponse().getAudioData_asU8(),
                          null ===
                            (n =
                              null ===
                                (s =
                                  null == t ? void 0 : t.getAudioResponse()) ||
                              void 0 === s
                                ? void 0
                                : s.getAudioConfig()) || void 0 === n
                            ? void 0
                            : n.getSampleRateHertz()
                        ),
                      (null === (i = t.getAudioResponse()) || void 0 === i
                        ? void 0
                        : i.getEndOfResponse()) &&
                        (null === (a = this.audioPlayer) ||
                          void 0 === a ||
                          a.addChunk(null)))
                    : this.enableAudio &&
                      !this.disableAudioGeneration &&
                      t.hasAudioResponse() &&
                      (null === (g = t.getAudioResponse()) || void 0 === g
                        ? void 0
                        : g.getEndOfResponse()) &&
                      (null === (p = this.audioPlayer) ||
                        void 0 === p ||
                        p.addChunk(null)),
                  e(t);
              };
            }
            sendTextChunk(e) {
              this.validateBeforeRequest() &&
                (null == this.convaiGrpcClient &&
                  (this.convaiGrpcClient = new s.ConvaiGRPCClient(
                    this.apiKey,
                    this.characterId,
                    this.sessionId,
                    this.responseCallback,
                    this.languageCode,
                    this.disableAudioGeneration,
                    this.actionConfig,
                    this.enableFacialData,
                    this.enableEmotionalData,
                    this.faceModel
                  )),
                this.convaiGrpcClient.sendText(e),
                (this.convaiGrpcClient = void 0));
            }
            startAudioChunk() {
              var e;
              this.validateBeforeRequest() &&
                (1 == this.enableAudio
                  ? (null == this.convaiGrpcClient &&
                      (this.convaiGrpcClient = new s.ConvaiGRPCClient(
                        this.apiKey,
                        this.characterId,
                        this.sessionId,
                        this.responseCallback,
                        this.languageCode,
                        this.disableAudioGeneration,
                        this.actionConfig,
                        this.enableFacialData,
                        this.enableEmotionalData,
                        this.faceModel
                      )),
                    null === (e = this.audioRecorder) ||
                      void 0 === e ||
                      e.start((e) => {
                        var t;
                        null === (t = this.convaiGrpcClient) ||
                          void 0 === t ||
                          t.sendAudioChunk(e);
                      }))
                  : console.log("CONVAI(ERROR): Audio mode disabled."));
            }
            endAudioChunk() {
              var e, t;
              1 == this.enableAudio
                ? (null === (e = this.audioRecorder) ||
                    void 0 === e ||
                    e.stop(),
                  null === (t = this.convaiGrpcClient) ||
                    void 0 === t ||
                    t.finishSend(),
                  (this.convaiGrpcClient = void 0))
                : console.log("CONVAI(ERROR): Audio mode disabled.");
            }
            toggleAudioVolume() {
              var e, t, o;
              this.enableAudio
                ? this.audioPlayer &&
                  (0 ===
                  (null === (e = this.audioPlayer) || void 0 === e
                    ? void 0
                    : e.getVolume())
                    ? null === (t = this.audioPlayer) ||
                      void 0 === t ||
                      t.setAudioVolume(1)
                    : null === (o = this.audioPlayer) ||
                      void 0 === o ||
                      o.setAudioVolume(0))
                : console.log("CONVAI(ERROR): Audio mode disabled.");
            }
            getAudioVolume() {
              var e;
              if (this.audioPlayer)
                return null === (e = this.audioPlayer) || void 0 === e
                  ? void 0
                  : e.getVolume();
            }
            onAudioPlay(e) {
              var t;
              null === (t = this.audioPlayer) ||
                void 0 === t ||
                t.onPlayStart(e);
            }
            onAudioStop(e) {
              var t;
              null === (t = this.audioPlayer) ||
                void 0 === t ||
                t.onPlayStop(e);
            }
            closeConnection() {
              var e;
              null === (e = this.convaiGrpcClient) ||
                void 0 === e ||
                e.closeConnection(),
                console.log("Connection closed with Convai.");
            }
          };
        },
        89: (e, t, o) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.ConvaiGRPCClient = void 0);
          const r = o(37),
            s = o(703),
            n = o(387),
            i = new r.grpc.Metadata();
          i.set("source", "Web3D"),
            (t.ConvaiGRPCClient = class {
              constructor(e, t, o, n, i, a, g, p, l, u) {
                (this.apiKey = e),
                  (this.characterId = t),
                  (this.sessionId = o),
                  (this.languageCode = i),
                  (this.disableAudioGeneration = a),
                  (this.enableFacialData = p),
                  (this.faceModel = u),
                  (this.actionConfig = g),
                  (this.client = r.grpc.client(s.ConvaiService.GetResponse, {
                    host: "https://webstream.convai.com",
                    transport: r.grpc.WebsocketTransport(),
                  })),
                  this.client.onMessage((e) => {
                    n(e);
                  }),
                  this.client.onEnd((e, t, o) => {
                    e != r.grpc.Code.OK &&
                      console.log("GetResponse Failed: ", e, t);
                  });
              }
              sendText(e) {
                if ("audio" != this.inputMode) {
                  (this.inputMode = "text"), this.isStarted || this.start();
                  var t = new n.GetResponseRequest(),
                    o = new n.GetResponseRequest.GetResponseData();
                  o.setTextData(e),
                    t.setGetResponseData(o),
                    this.client.send(t),
                    this.client.finishSend();
                } else
                  console.log("Error: Cannot send text in audio input mode.");
              }
              sendAudioChunk(e) {
                if ("text" != this.inputMode) {
                  (this.inputMode = "audio"), this.isStarted || this.start();
                  var t = new n.GetResponseRequest(),
                    o = new n.GetResponseRequest.GetResponseData();
                  o.setAudioData(new Uint8Array(e)),
                    t.setGetResponseData(o),
                    this.client.send(t);
                } else
                  console.log("Error: Cannot send audio in text input mode.");
              }
              finishSend() {
                this.client.finishSend();
              }
              start() {
                this.client.start(i);
                var e = new n.GetResponseRequest(),
                  t = new n.GetResponseRequest.GetResponseConfig();
                t.setApiKey(this.apiKey),
                  t.setCharacterId(this.characterId),
                  t.setSessionId(this.sessionId),
                  t.setLanguageCode(this.languageCode);
                var o = new n.AudioConfig();
                o.setSampleRateHertz(44100),
                  o.setEnableFacialData(this.enableFacialData),
                  this.disableAudioGeneration
                    ? o.setDisableAudio(this.disableAudioGeneration)
                    : o.setDisableAudio(!1),
                  o.setFaceModel(this.faceModel),
                  t.setAudioConfig(o),
                  t.setActionConfig(this.actionConfig),
                  e.setGetResponseConfig(t),
                  this.client.send(e),
                  (this.isStarted = !0);
              }
              closeConnection() {
                this.client.close(), (this.isStarted = !1);
              }
            });
        },
        731: (e, t, o) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = void 0);
          var r = o(587);
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return r.ConvaiClient;
            },
          });
        },
        422: function (e, t) {
          "use strict";
          var o =
              (this && this.__awaiter) ||
              function (e, t, o, r) {
                return new (o || (o = Promise))(function (s, n) {
                  function i(e) {
                    try {
                      g(r.next(e));
                    } catch (e) {
                      n(e);
                    }
                  }
                  function a(e) {
                    try {
                      g(r.throw(e));
                    } catch (e) {
                      n(e);
                    }
                  }
                  function g(e) {
                    var t;
                    e.done
                      ? s(e.value)
                      : ((t = e.value),
                        t instanceof o
                          ? t
                          : new o(function (e) {
                              e(t);
                            })).then(i, a);
                  }
                  g((r = r.apply(e, t || [])).next());
                });
              },
            r =
              (this && this.__await) ||
              function (e) {
                return this instanceof r ? ((this.v = e), this) : new r(e);
              },
            s =
              (this && this.__asyncGenerator) ||
              function (e, t, o) {
                if (!Symbol.asyncIterator)
                  throw new TypeError("Symbol.asyncIterator is not defined.");
                var s,
                  n = o.apply(e, t || []),
                  i = [];
                return (
                  (s = {}),
                  a("next"),
                  a("throw"),
                  a("return"),
                  (s[Symbol.asyncIterator] = function () {
                    return this;
                  }),
                  s
                );
                function a(e) {
                  n[e] &&
                    (s[e] = function (t) {
                      return new Promise(function (o, r) {
                        i.push([e, t, o, r]) > 1 || g(e, t);
                      });
                    });
                }
                function g(e, t) {
                  try {
                    (o = n[e](t)).value instanceof r
                      ? Promise.resolve(o.value.v).then(p, l)
                      : u(i[0][2], o);
                  } catch (e) {
                    u(i[0][3], e);
                  }
                  var o;
                }
                function p(e) {
                  g("next", e);
                }
                function l(e) {
                  g("throw", e);
                }
                function u(e, t) {
                  e(t), i.shift(), i.length && g(i[0][0], i[0][1]);
                }
              };
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.AsyncBlockingQueue = void 0);
          class n {
            constructor() {
              (this.resolvers = []), (this.promises = []);
            }
            _add() {
              return o(this, void 0, void 0, function* () {
                const e = new Promise((e) => {
                  this.resolvers.push(e);
                });
                this.promises.push(e), yield Promise.all(this.promises);
              });
            }
            enqueue(e) {
              this.resolvers.length || this._add(), this.resolvers.shift()(e);
            }
            dequeue() {
              return o(this, void 0, void 0, function* () {
                return (
                  this.promises.length || this._add(),
                  (yield Promise.all([this.promises.shift()]))[0]
                );
              });
            }
            isEmpty() {
              return 0 === this.promises.length;
            }
            isBlocked() {
              return this.resolvers.length > 0;
            }
            get length() {
              return this.promises.length - this.resolvers.length;
            }
            [Symbol.asyncIterator]() {
              return s(this, arguments, function* () {
                for (;;) {
                  const e = yield r(this.dequeue());
                  yield yield r(e);
                }
              });
            }
          }
          t.AsyncBlockingQueue = n;
        },
        585: (e, t) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.OvrToMorph = void 0);
          const o = {
              0: "sil",
              1: "PP",
              2: "FF",
              3: "TH",
              4: "DD",
              5: "KK",
              6: "CH",
              7: "SS",
              8: "NN",
              9: "RR",
              10: "AA",
              11: "E",
              12: "I",
              13: "O",
              14: "U",
            },
            r = {
              sil: {
                V_Explosive: 0,
                V_Lip_Open: 0,
                V_Dental_Lip: 0,
                V_Tight_O: 0,
                V_Tongue_Out: 0,
                Mouth_Drop_Lower: 0,
                Mouth_Shrug_Upper: 0,
                Open_Jaw: 0,
                Tongue: 0,
              },
              PP: { V_Explosive: 1 },
              FF: { V_Dental_Lip: 1 },
              TH: {
                Mouth_Drop_Lower: 0.5,
                V_Tongue_Out: 0.5,
                Open_Jaw: 0.2,
                Tongue: 0.1,
              },
              DD: {
                Mouth_Drop_Lower: 0.2,
                Mouth_Shrug_Upper: 0.5,
                Open_Jaw: 0.1,
                Tongue: 0,
              },
              KK: {
                Mouth_Drop_Lower: 0.5,
                Mouth_Shrug_Upper: 0.1,
                Open_Jaw: 0.5,
                Tongue: 0,
              },
              CH: {
                Mouth_Drop_Lower: 0.7,
                Mouth_Shrug_Upper: 0.1,
                V_Lip_Open: 1,
                Open_Jaw: 0,
                Tongue: 0,
              },
              SS: {
                Mouth_Drop_Lower: 0.5,
                Mouth_Shrug_Upper: 1,
                Open_Jaw: 0,
                Tongue: 0,
              },
              NN: {
                Mouth_Drop_Lower: 0.5,
                V_Tongue_Out: 0.5,
                Mouth_Shrug_Upper: 1,
                Open_Jaw: 0.2,
                Tongue: 0.2,
              },
              RR: {
                Mouth_Drop_Lower: 0.5,
                V_Tongue_Out: 0.4,
                Mouth_Shrug_Upper: 1,
                Open_Jaw: 0.2,
                Tongue: 0.15,
              },
              AA: { Mouth_Shrug_Upper: 1, Open_Jaw: 1, Tongue: 0 },
              E: {
                Mouth_Drop_Lower: 0.7,
                Mouth_Shrug_Upper: 0.3,
                Open_Jaw: 0.2,
                Tongue: 0,
              },
              I: {
                Mouth_Drop_Lower: 0.7,
                Mouth_Shrug_Upper: 0.5,
                Mouth_Press_R: 0,
                Mouth_Press_L: 0,
                Open_Jaw: 0.3,
                Tongue: 0,
              },
              O: { V_Tight_O: 0.9, Open_Jaw: 0.8, Tongue: 0 },
              U: { V_Tight_O: 1, Open_Jaw: 0.3, Tongue: 0 },
            };
          t.OvrToMorph = (e, t) => {
            if ("object" == typeof e) {
              const s = {
                Mouth_Drop_Lower: 0,
                Mouth_Shrug_Upper: 0.17,
                Mouth_Press_R: 0,
                Mouth_Press_L: 0,
                V_Explosive: 0,
                V_Lip_Open: 0,
                V_Dental_Lip: 0,
                V_Tight_O: 0,
                V_Tongue_Out: 0,
                Open_Jaw: 0,
                Tongue: 0,
              };
              for (const t in e) {
                const n = e[t],
                  i = r[o[t]];
                for (const e in i) {
                  const t = i[e] * n;
                  s[e] = s[e] + t;
                }
              }
              t.current.push(s);
            }
          };
        },
        607: function (e, t, o) {
          "use strict";
          var r =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.ConvaiClient = t.OvrToMorph = void 0);
          var s = o(585);
          Object.defineProperty(t, "OvrToMorph", {
            enumerable: !0,
            get: function () {
              return s.OvrToMorph;
            },
          });
          var n = o(731);
          Object.defineProperty(t, "ConvaiClient", {
            enumerable: !0,
            get: function () {
              return r(n).default;
            },
          });
        },
      },
      __webpack_module_cache__ = {};
    function __webpack_require__(e) {
      var t = __webpack_module_cache__[e];
      if (void 0 !== t) return t.exports;
      var o = (__webpack_module_cache__[e] = { exports: {} });
      return (
        __webpack_modules__[e].call(
          o.exports,
          o,
          o.exports,
          __webpack_require__
        ),
        o.exports
      );
    }
    __webpack_require__.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })();
    var __webpack_exports__ = __webpack_require__(607);
    return __webpack_exports__;
  })()
);

import mongoose from 'mongoose';

function useVirtualId(schema) {
    schema.virtual('id').get(function () {
      return this._id.toHexString();
    });
  
    schema.set('toJSON', {
      virtuals: true
    });
}

const communitySchema = new mongoose.Schema({
    nickname : { type: String, require: true },
    userid : { type: String, require: true },
    title : { type: String, require: true },
    text : { type: String, require: true },
    img_url1 : String,
    img_url2 : String,
    img_url3 : String,
    img_url4 : String,
    img_url5 : String,
    like : { type: Number, default: 0 },
    num : { type: Number, default: 0 },
    createdAt : { type: Number, require: true },
    updatedAt : { type: Number, require: true },
    alert : { type: Number, default: 0 } 
}, { timestamp: true });

useVirtualId(communitySchema);

const Community = mongoose.model('Community', communitySchema);

export { communitySchema, Community };

export default Community;



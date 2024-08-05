import mongoose from 'mongoose';
import { useVirtualId } from '../db/database.js';

const userSchema = new mongoose.Schema({
    name : {type:String,require:true},
    userid : {type:String,require:true},
    password : {type:String,require:true},
    nickname : {type:String,require:true},
    email : {type:String,require:true},
    ssn1 : {type:String,require:true, maxlength: 6},
    ssn2 : {type:String,require:true, maxlength: 1},
    birth : {type:String,require:true},
    gender : {type:String,require:true},
    income : {type:String,require:true, maxlength: 1},
    hp : {type:String,require:true},
}, { timestamps: true });

useVirtualId(userSchema)

const User = mongoose.model('member',userSchema)

export async function getAllUsers(page, limit, search) {
    const skip = (page - 1)* limit;
    const query = search ? { userid: new RegExp(search, 'i') } : {};
    console.log(`쿼리 매개변수: page=${page}, limit=${limit}, skip=${skip}, search=${search}`); // 로그 추가
    const users = await User.find(query).skip(skip).limit(limit).sort({createdAt:-1});
    const totalUsers = await User.countDocuments(query);
    return { users, totalUsers };
}

export async function getUserById(id) {
    return User.findById(id);
}

export async function deleteUser(id) {
    return User.findByIdAndDelete(id);
}
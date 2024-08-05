import mongoose from 'mongoose';
import { useVirtualId } from '../db/database.js';

const busSchema = new mongoose.Schema({
    region : {type:String,require:true},
    bus_num : {type:String,require:true},
    seq_num : {type:String,require:true},
    station : {type:String,require:true},
    time1 : String,
    time2 : String,
    time3 : String,
    time4 : String,
    time5 : String,
    time6 : String,
    time7 : String,
    time8 : String,
    time9 : String
},{timestamp:true})

useVirtualId(busSchema)

const Bus = mongoose.model('Bus',busSchema)

export async function getAllbyGu(region) {
    return Bus.find({region}).sort({seq_num:1});
}
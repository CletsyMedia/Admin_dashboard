import { min } from "date-fns"
import mongoose from "mongoose"

const userScheme = new mongoose.Scheme({
username:{
  type:String,
  required:true,
  unique:true,
  min:3,
  max:25,
},
email:{
  type:String,
  required:true,
  unique:true,
},
password:{
  type:String,
  required:true,
},
img:{
  type:String,
},
isAdmin:{
  type:Boolean,
  default:false,
},
isActive:{
  type:Boolean,
  default:true,
},
phone:{
  type:Number,
},
address:{
  type:String,
},
}, {timestamps: true})

const productScheme = new mongoose.Scheme({
  title:{
    type:String,
    required:true,
    unique:true,
  },
  desc:{
    type:String,
    required:true,
  },
  price:{
    type:Number,
    required:true,
    min:0,
  },
  stock:{
    type:Number,
    required:true,
    min:0,
  },
  img:{
    type:String,
  },
  isAdmin:{
    type:Boolean,
    default:false,
  },
  color:{
    type:String,
  },
  size:{
    type:String,
  },
  address:{
    type:String,
  },
  }, {timestamps: true})
const db = require('../models')

const FeedBack = db.FeedBack
const membership = db.membership


const Sequelize = require('sequelize');

const Op = Sequelize.Op;

exports.create = async (data) => {
    var usertmp = {
        name: data.name,
        phoneno: data.phoneno,
        address: data.address,
        issues:data.issues
    }

    try {
        usertmp = await FeedBack.create(usertmp);
        console.log(usertmp)
        //delete usertmp.dataValues.class
        //console.log(usertmp)
    } catch (e) {
        console.log(e)
        usertmp = null
    }

    return usertmp
}


exports.getfeedback = async (userId) => {
    var all = await FeedBack.findAll({
        where: {
            id: userId,
        }
    })
   
    return all
}
exports.getAll = async  () => {
    

    return FeedBack.findAll()

}
exports.createmembership = async (data) => {
    var usertmp = {
        name: data.name,
        father: data.father,
        age: data.age,
        gender:data.gender,
        voteridno:data.voteridno,
        assemblyconstituency:data.assemblyconstituency,
        district:data.district,
        fulladdress:data.fulladdress,
        phoneno:data.phoneno,
        email:data.email,
    }

    try {
        usertmp = await membership.create(usertmp);
        console.log(usertmp)
        //delete usertmp.dataValues.class
        //console.log(usertmp)
    } catch (e) {
        console.log(e)
        usertmp = null
    }

    return usertmp
}
exports.getmembership= async (userId) => {
    var all = await membership.findAll({
        where: {
            id: userId,
        }
    })
   
    return all
}

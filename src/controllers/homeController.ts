import { Request, Response } from 'express';
import { Op, where } from 'sequelize'
import { Product } from '../models/Product';
import { User } from '../models/User';
import { isPort } from 'validator';

export const home = async (req: Request, res: Response)=>{
    const created = await User.findOrCreate({
        where:{name: 'Romeu'},
        defaults: {id: 11, age: 4}
    });

    console.log(created);

    let users = await User.findAll();

    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
        users
    });
};

export const novoUsuario = async (req: Request, res: Response)=>{
    let {id, name, age} = req.body;
    if(id || name){
        const newUser = User.build({id, name})
        if(age){
            newUser.age = parseInt(age);
        }
        await newUser.save();
    }
    res.redirect('/');
};
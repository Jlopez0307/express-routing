const express = require('express');
const helpers = require('./helpers');
const ExpressError = require('./errHandler');



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/mean', ( req, res, next ) => {
    try{
        let {nums} = req.query;

        if(!nums){
            throw new ExpressError('Numbers are required', 400);
        }

        let numArr = nums.split(',').map( (num) => {
            if(!parseInt(num, 10)) {
                throw new ExpressError(`${num} is not a number`, 400);
            }else{
                return parseInt(num, 10)
            }
        });

        return res.json({
            operation: 'Mean',
            value: helpers.mean(numArr)
        });

    } catch (err){
        return next(err)
    }
});

app.get('/median', ( req, res, next ) => {
    try{
        let {nums} = req.query;
        if(!nums){
            throw new ExpressError('Numbers are required', 400);
        }

        let numArr = nums.split(',').map( (num) => {
            if(!parseInt(num, 10)) {
                throw new ExpressError(`${num} is not a number`, 400);
            }else{
                return parseInt(num, 10)
            }
        });

        return res.json({
        operation: 'Median',
        value: helpers.median(numArr)
    });
    } catch(err){
        next(err);
    }
});


app.get('/mode', ( req, res, next ) => {
    try{
       let {nums} = req.query;
        if(!nums){
            throw new ExpressError('Numbers are required', 400);
        }

        let numArr = nums.split(',').map( (num) => {
            if(!parseInt(num, 10)) {
                throw new ExpressError(`${num} is not a number`, 400);
            }else{
                return parseInt(num, 10)
            }
        });

        return res.json({
            operation: 'Mode',
            value: helpers.mode(numArr)
        });
    } catch(err){
        next(err);
    };
});

app.use((error,req,res,next) => {
    console.log(error.msg)
    res.send(error.msg)
})

app.listen(3000, () => {
    console.log('App on port 3000, connected');
});
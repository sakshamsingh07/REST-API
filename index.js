const express=require('express');
const app=express();

app.get('/' , (req , res) => {
    res.send('hello world!!!!');
});

const courses=[

    {id:1 , name:"Saksham"} ,
    {id:2 , name:"Singh"},
    {id:3 , name:"Sandy"},
    {id:4 , name:"neeraj"}

];


app.get('/api/course' , (req , res) => {
    res.send(courses);
});

// when we want single data via id
app.get('/api/course/:id' , (req , res) => {
    res.send(req.params.id);
});

// when we write a logic to find data from server ..if not found them status 404
app.get('/api/courses/:id' , (req , res) => {
    const course=courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send('the course with given id was not found');
    }
    else{
        res.send(course);
    }
})

// also we can pass multiple parameters
app.get('/api/posts/:year/:month',(req , res) => {
    res.send(req.params);
})



app.post('/api/courses/' , (req , res) => {
    const course = {
        id: courses.length+1,
        name:req.body.name
    }
    courses.push(course);
    res.send(courses)
})

//PORT
const port=process.env.PORT || 3000;

app.listen(port , () =>
{
    console.log(`listining on port ${port}.......`)
});

const express = require('express');
const app= express();

// let projects = [];

let projects = [
    { id: 1, name: "Mi proyecto 1", img: "/assets/images/shop.svg" },
    { id: 2, name: "Mi proyecto 2", img: "/assets/images/shop.svg" },
    { id: 3, name: "Mi proyecto 3", img: "/assets/images/shop.svg" },
    { id: 4, name: "Mi proyecto 4", img: "/assets/images/shop.svg" },
    { id: 5, name: "Mi proyecto 5", img: "/assets/images/shop.svg" },
    ];

app.use(express.json())


app.get('/projects', (req, res)=>{
    res.send(projects);
});

app.post("/projects", (req, res)=>{
    const project = req.body;
    projects.push(project);
    res.send("ok!");
})

app.get("/projects/:id", (req, res)=>{
    console.log("Params:", req.params); //{id:"123"}
    console.log("Query:", req.query);//{param 1:"123"}
    const id = req.params.id;
    console.log("ID:", id);
    const project = projects.find((p)=> p.id == id);
    if(!project){
        res.status(404);
    }
    res.send (project);
})

// eliminar elemento
app.delete("/projects/:id", (req, res)=>{
    // obtener parametro :id
    const id= req.params.id;
    
    // obtener indice de proyecto
    const idpr= projects.find((p)=> p.id == id);

    // validar si existe indice
    if(index==-1){

    }

    // eliminar con splice
    projects.splice(index, 1);

    // responder "ok!"
    res.send("ok!");
})

// actualizar
app.put("/projects/:id",(req, res)=>{
    // extraer id
    const id= re.params.id;
    // buscar proyecto
    const project= projects.find(p=> p.id== id)
    // validar si se encontro el proyecto
    if(!project){
        res.status(404);
        res.send("Proyecto no encontrado");
    }
    // actualizar obj proyecto con el body
    const body= req.body
})

app.listen(3000, ()=> console.log("Servidor listo en https://localhost:3000"))
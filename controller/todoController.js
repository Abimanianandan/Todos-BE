const Todos = require("../models/todos");

const todoController = ({
   createTodo: async(req,res)=>{
    try{ 
        const {title,description} = req.body;
        const todo = await Todos.findOne({title})
        if(todo){
          return res.status(401).json({message:"title already exits"})
        }
         const newTodo = new Todos({
            title,
            description
         })
         const savedTodos = await newTodo.save();
         res.status(200).json({message:"todo create successfully",savedTodos})
    } catch(error){
        res.status(500).json({message:error.message})
    }
   },
   getAllTodos: async(req,res)=>{
      try{
         const todos = await Todos.find();
         res.status(200).json({todos})
      }catch(error){
         res.status(500).json({message:error.message})
      }
   },
   updateTodos: async(req,res)=>{
      try{
         const todoId = req.params.id;
         const {title,description} = req.body;
         const todo = await Todos.findById(todoId)
         if(!todo){
           return res.status(401).json({message:"todo not found"})
         }
         if(title) todo.title = title;
         if(description) todo.description = description;
         updatedTodos = await todo.save();
         res.status(200).json({message:"todo updated successfully",updatedTodos})
      }catch(error){
         res.status(500).json({message:error.message})
      }
   },
   deleteTodos: async(req,res)=>{
      try{
         const todoId = req.params.id;
         const deletedTodo = await Todos.findByIdAndDelete(todoId);
         if(!deletedTodo){
            return res.status(401).json({message:"todo not found"})
         }
         res.status(200).json({message:"todo deleted successfully",deletedTodo})
      }catch(error){
         res.status(500).json({message:error.message})
      }
   }
})

module.exports = todoController;
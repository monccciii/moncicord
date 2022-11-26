const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

mongoose
.connect("mongodb+srv://spike:npoog0101@cluster0.52okq1r.mongodb.net/?retryWrites=true&w=majority")
.catch((err) => console.log(err));


//accountcreation and login

const accountSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

const Account = mongoose.model("Account", accountSchema)

app.get("/", (req, res) => {
    res.send("test")
});

app.post("/register", (req, res) => {
    Account.create({
        username: req.body.username,
        password: req.body.password
    }). then(doc => console.log(doc))
    .catch(err => console.log(err));
})

app.post("/login", (req, res) => {
    const findname = req.body.username
    const checkpass = req.body.password
    Account.find({username: findname, password: checkpass}, (error, data) => {
        if(error) {
            console.log(error)
        } else {
            console.log(data)
            if (data.length < 1) {
                console.log("Incorrect Password or Username")
                res.json(false)
            } else {
                console.log("Logged in")
                res.json(true)
            }
        }
    })
})

//chatschmea creation/read/update/delete

const messageSchema = mongoose.Schema({
    from: { type: String, required: true},
    messagecontent: { type: String, required: true }
})

const Message = mongoose.model("Message", messageSchema)

app.post("/sendmessage", (req, res) => {
    Message.create({
        from: req.body.from,
        messagecontent: req.body.chat
    }). then(doc => console.log(doc))
    .catch(err => console.log(err));
});


app.get("/messages", (req, res) => {
    Message.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err))
});

const chatroomSchema = mongoose.Schema({
    name: { type: String, required: true},
})

const Chatroom = mongoose.model("Chatroom", chatroomSchema)

app.post("/createchatroom", (req, res) => {
    Chatroom.create({
        name: req.body.chatroomname
    }). then(doc => console.log(doc))
    .catch(err => console.log(err));
});


app.get("/chatrooms", (req, res) => {
    Chatroom.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err))
});



app.listen(3001, function() {
    console.log("server is running")
})